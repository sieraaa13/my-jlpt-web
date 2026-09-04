import crypto from "crypto";

/** Verifikasi header x-line-signature terhadap raw body pakai channel secret. */
export function verifyLineSignature(rawBody: string, signature: string | null): boolean {
  const channelSecret = process.env.LINE_CHANNEL_SECRET;
  if (!channelSecret || !signature) return false;

  const hash = crypto.createHmac("sha256", channelSecret).update(rawBody).digest("base64");
  return hash === signature;
}

async function callLineApi(path: string, body: unknown) {
  const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
  if (!token) throw new Error("LINE_CHANNEL_ACCESS_TOKEN missing");

  const res = await fetch(`https://api.line.me/v2/bot${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`LINE API error ${res.status}: ${text}`);
  }
}

/** Balas pesan dalam konteks webhook (gratis & tidak masuk kuota push). */
export async function replyLineMessage(replyToken: string, text: string) {
  await callLineApi("/message/reply", {
    replyToken,
    messages: [{ type: "text", text }],
  });
}

/** Kirim pesan proaktif (masuk kuota bulanan LINE Messaging API). */
export async function pushLineMessage(lineUserId: string, text: string) {
  await callLineApi("/message/push", {
    to: lineUserId,
    messages: [{ type: "text", text }],
  });
}
