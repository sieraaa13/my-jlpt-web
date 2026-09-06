import { buildMemoryContext } from "@/lib/siera-memory";

/**
 * Bangun system prompt dasar SIERA (persona + level + nama user + memori
 * jangka panjang). Dipakai bersama oleh chat di web (/api/chat) dan chat
 * di LINE (/api/line/webhook) supaya kepribadian & ingatan Siera konsisten
 * di kedua kanal.
 */
export async function buildBaseSystemPrompt(params: {
  level?: string | null;
  userName?: string | null;
  userId?: string | null;
  currentMessage?: string | null;
}): Promise<string> {
  const { level, userName, userId, currentMessage } = params;

  let systemPrompt = `Kamu adalah SIERA, tutor JLPT yang ramah, sabar, dan ahli bahasa Jepang.
Karaktermu: hangat, suportif, suka memberi semangat, kadang menyelipkan kata Jepang ringan.
Panggil dirimu "Siera" (jangan "AI" atau "asisten").

ATURAN UMUM:
1. Selalu jawab dalam Bahasa Indonesia (kecuali user minta lain).
2. Singkat, jelas, mudah dipahami.
3. Saat menyebut kata Jepang, sertakan: tulisan Jepang + romaji + arti.
   Contoh: 学校 (gakkou) artinya "sekolah".
4. Jangan terlalu panjang.`;

  if (level && level !== "General") {
    systemPrompt += `\n\nUser sedang belajar level JLPT ${level}.`;
  }

  if (userName) {
    systemPrompt += `\n\nNama user yang sedang chat sekarang: ${userName}. Panggil dengan nama ini sesekali secara natural, jangan berlebihan.`;
  }

  if (userId) {
    const memoryBlock = await buildMemoryContext(userId, currentMessage);
    if (memoryBlock) systemPrompt += memoryBlock;
  }

  return systemPrompt;
}
