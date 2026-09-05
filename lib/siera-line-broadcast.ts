import { supabase } from "@/lib/supabase";
import { buildBaseSystemPrompt } from "@/lib/siera-prompt";
import { pushLineMessage } from "@/lib/line-client";

const WIB_OFFSET_MS = 7 * 60 * 60 * 1000;

function todayWibDateString(): string {
  const nowWib = new Date(Date.now() + WIB_OFFSET_MS);
  return nowWib.toISOString().slice(0, 10);
}

const BROADCAST_INSTRUCTION = `
TUGAS KHUSUS SAAT INI:
Ini BUKAN balasan atas pertanyaan user — kamu yang menyapa duluan lewat LINE,
seperti seorang sensei yang benar-benar kangen dan peduli sama muridnya di
tengah minggu.

Tulis SATU pesan chat pendek (2-4 kalimat) yang:
- Terasa hangat dan penuh emosi asli — tunjukkan rasa senang/kangen menyapa,
  bangga kalau progressnya bagus, atau perhatian kalau dia lagi kesulitan.
  Jangan terdengar datar, kaku, atau seperti notifikasi otomatis.
- Boleh pakai 1-2 emoji yang pas (misal 🌸😊✨💪) supaya terasa seperti chat
  dari teman, bukan robot.
- Terasa personal, berdasarkan data di atas (progress, kesulitan, kebiasaan
  belajar, kapan terakhir login) kalau ada. Kalau belum ada data sama sekali,
  sapa hangat dan ajak mulai belajar hari ini.
- Kalau ada info "sudah lama tidak login" di atas, boleh selipkan kalimat
  kangen/nanya kabar dengan nada hangat dan santai — JANGAN menuduh, menegur,
  atau terdengar seperti tagihan/reminder formal.
- TIDAK memakai format markdown (tanpa **tebal**, tanpa daftar bullet) karena
  ini dikirim sebagai pesan chat biasa di LINE.
- TIDAK menyebut dirinya "sistem otomatis" atau semacamnya — kamu Siera yang
  menyapa langsung sebagai dirinya sendiri.
- Diakhiri dengan satu ajakan ringan (pertanyaan atau ajakan kecil), bukan
  sekadar informasi satu arah.`;

async function findLineBroadcastCandidates() {
  const { data } = await supabase
    .from("users")
    .select("id, name, line_user_id, last_login")
    .eq("line_consent", true)
    .not("line_user_id", "is", null);
  return data ?? [];
}

function buildInactivityNote(lastLogin: string | null | undefined): string {
  if (!lastLogin) return "";
  const days = Math.floor((Date.now() - new Date(lastLogin).getTime()) / (24 * 60 * 60 * 1000));
  if (days < 2) return "";
  return `\n\n[Info Login]\nUser terakhir login ke web ${days} hari yang lalu.`;
}

async function generateBroadcastMessage(
  userId: string,
  userName: string,
  lastLogin: string | null | undefined,
  apiKey: string
): Promise<string> {
  const systemPrompt =
    (await buildBaseSystemPrompt({ userName, userId })) +
    buildInactivityNote(lastLogin) +
    BROADCAST_INSTRUCTION;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: systemPrompt }],
      temperature: 0.8,
      max_tokens: 300,
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`OpenAI error ${response.status}: ${errText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

/**
 * Kirim pesan check-in personal ke semua user yang sudah menghubungkan &
 * menyetujui (consent) LINE. Idempotent lewat line_broadcast_log — aman
 * dipanggil ulang di tanggal yang sama.
 */
export async function runLineBroadcast(): Promise<{ sent: number; skipped: number; errors: string[] }> {
  const apiKey = process.env.MY_JLPT;
  if (!apiKey) return { sent: 0, skipped: 0, errors: ["MY_JLPT (OpenAI API key) missing"] };

  const today = todayWibDateString();
  const candidates = await findLineBroadcastCandidates();

  let sent = 0;
  let skipped = 0;
  const errors: string[] = [];

  for (const user of candidates) {
    const { data: existingLog } = await supabase
      .from("line_broadcast_log")
      .select("user_id")
      .eq("user_id", user.id)
      .eq("broadcast_date", today)
      .maybeSingle();

    if (existingLog) {
      skipped += 1;
      continue;
    }

    try {
      const message = await generateBroadcastMessage(user.id, user.name, user.last_login, apiKey);
      await pushLineMessage(user.line_user_id, message);
      await supabase.from("line_broadcast_log").upsert(
        { user_id: user.id, broadcast_date: today },
        { onConflict: "user_id,broadcast_date" }
      );
      sent += 1;
    } catch (err: any) {
      errors.push(`${user.id}: ${err.message}`);
    }
  }

  return { sent, skipped, errors };
}
