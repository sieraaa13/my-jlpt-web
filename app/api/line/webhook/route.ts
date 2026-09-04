import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { verifyLineSignature, replyLineMessage } from "@/lib/line-client";
import { buildBaseSystemPrompt } from "@/lib/siera-prompt";
import { saveChatTurn } from "@/lib/siera-memory";

export const runtime = "nodejs";

function generateLinkCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // tanpa karakter mirip (I/O/0/1)
  let code = "";
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}

async function issueLinkCode(lineUserId: string): Promise<string> {
  const code = generateLinkCode();
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000).toISOString();

  await supabase.from("line_link_codes").insert({
    code,
    line_user_id: lineUserId,
    expires_at: expiresAt,
  });

  return code;
}

async function findLinkedUser(lineUserId: string) {
  const { data } = await supabase
    .from("users")
    .select("id, name")
    .eq("line_user_id", lineUserId)
    .eq("line_consent", true)
    .maybeSingle();
  return data;
}

async function handleFollow(lineUserId: string, replyToken: string) {
  const linked = await findLinkedUser(lineUserId);
  if (linked) {
    await replyLineMessage(
      replyToken,
      `Selamat datang kembali, ${linked.name}! Siera senang bisa nyapa kamu di sini lagi~`
    );
    return;
  }

  const code = await issueLinkCode(lineUserId);
  await replyLineMessage(
    replyToken,
    `Halo! Siera senang kamu mau nyapa di sini 🌸\n\nUntuk menghubungkan LINE ini ke akun NihonGO!-mu, buka halaman "Siera" di web, lalu masukkan kode ini:\n\n${code}\n\nKode berlaku 15 menit ya.`
  );
}

async function handleTextMessage(lineUserId: string, text: string, replyToken: string) {
  const linked = await findLinkedUser(lineUserId);

  if (!linked) {
    const code = await issueLinkCode(lineUserId);
    await replyLineMessage(
      replyToken,
      `LINE ini belum terhubung ke akun NihonGO!-mu. Buka halaman "Siera" di web, masukkan kode berikut untuk menghubungkan:\n\n${code}\n\nKode berlaku 15 menit ya.`
    );
    return;
  }

  const apiKey = process.env.MY_JLPT;
  if (!apiKey) {
    await replyLineMessage(replyToken, "Maaf, Siera lagi ada gangguan teknis. Coba lagi nanti ya.");
    return;
  }

  const systemPrompt = await buildBaseSystemPrompt({ userName: linked.name, userId: linked.id });

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: text },
      ],
      temperature: 0.7,
      max_tokens: 500,
    }),
  });

  if (!response.ok) {
    await replyLineMessage(replyToken, "Maaf, Siera lagi ada gangguan teknis. Coba lagi nanti ya.");
    return;
  }

  const data = await response.json();
  const replyContent: string = data.choices[0].message.content;

  await replyLineMessage(replyToken, replyContent);
  saveChatTurn(linked.id, text, replyContent, "line");
}

async function handleUnfollow(lineUserId: string) {
  await supabase
    .from("users")
    .update({ line_consent: false, line_user_id: null })
    .eq("line_user_id", lineUserId);
}

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const signature = req.headers.get("x-line-signature");

  if (!verifyLineSignature(rawBody, signature)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const body = JSON.parse(rawBody);
  const events = body.events ?? [];

  for (const event of events) {
    const lineUserId = event.source?.userId;
    if (!lineUserId) continue;

    try {
      if (event.type === "follow") {
        await handleFollow(lineUserId, event.replyToken);
      } else if (event.type === "unfollow") {
        await handleUnfollow(lineUserId);
      } else if (event.type === "message" && event.message?.type === "text") {
        await handleTextMessage(lineUserId, event.message.text, event.replyToken);
      }
    } catch (err) {
      console.error("LINE webhook event error:", err);
    }
  }

  return NextResponse.json({ ok: true });
}
