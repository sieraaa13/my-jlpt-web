import { supabase } from "@/lib/supabase";

export interface Memory {
  id: string;
  type: "progress" | "goal" | "current_difficulty" | "learning_preference" | "milestone";
  topic: string | null;
  subject: string | null;
  description: string;
  importance: number;
  confidence: number;
}

const TYPE_LABEL: Record<Memory["type"], string> = {
  progress: "Progress",
  goal: "Tujuan",
  current_difficulty: "Kesulitan saat ini",
  learning_preference: "Preferensi belajar",
  milestone: "Pencapaian",
};

// Tipe memory yang selalu ikut disertakan (Level 1: profil stabil, jumlahnya
// kecil) — beda dengan tipe di bawah yang cuma relevan kalau topiknya cocok
// dengan pesan user saat ini (Level 2).
const ALWAYS_INCLUDE_TYPES: Memory["type"][] = ["goal", "learning_preference"];

// Jumlah memory topik-spesifik yang dipakai kalau topik pesan user tidak
// terdeteksi (fallback), supaya tetap jauh lebih hemat daripada kirim semua.
const FALLBACK_TOPIC_LIMIT = 5;

const TOPIC_KEYWORDS: Record<string, string[]> = {
  kanji: ["kanji", "漢字", "onyomi", "kunyomi", "cara baca huruf"],
  goi: ["goi", "kosakata", "kosa kata", "vocab", "vocabulary", "arti kata"],
  bunpou: ["bunpou", "bunpo", "grammar", "tata bahasa", "pola kalimat", "partikel"],
  dokkai: ["dokkai", "bacaan", "reading", "membaca teks"],
  choukai: ["choukai", "listening", "dengar", "mendengarkan"],
};

/** Deteksi topik JLPT yang disebut di pesan user, berbasis kata kunci sederhana. */
function detectTopics(message?: string | null): string[] {
  if (!message) return [];
  const lower = message.toLowerCase();
  return Object.entries(TOPIC_KEYWORDS)
    .filter(([, keywords]) => keywords.some((kw) => lower.includes(kw)))
    .map(([topic]) => topic);
}

/**
 * Memory Retriever sederhana (rule-based, bukan LLM): saring memory supaya
 * yang dikirim ke prompt cuma yang relevan dengan pesan user saat ini,
 * bukan semua active memory tiap kali chat.
 * - goal & learning_preference: selalu ikut (profil stabil, jumlahnya kecil).
 * - current_difficulty / progress / milestone: cuma ikut kalau topiknya
 *   cocok dengan topik yang terdeteksi di pesan user (atau topic-nya umum).
 *   Kalau tidak ada topik yang terdeteksi (mis. pertanyaan umum), fallback
 *   ke beberapa yang paling penting saja (sudah terurut by importance).
 */
function selectRelevantMemories(memories: Memory[], currentMessage?: string | null): Memory[] {
  const always = memories.filter((m) => ALWAYS_INCLUDE_TYPES.includes(m.type));
  const topicScoped = memories.filter((m) => !ALWAYS_INCLUDE_TYPES.includes(m.type));

  const detectedTopics = detectTopics(currentMessage);

  const relevant =
    detectedTopics.length > 0
      ? topicScoped.filter((m) => !m.topic || m.topic === "general" || detectedTopics.includes(m.topic))
      : topicScoped.slice(0, FALLBACK_TOPIC_LIMIT);

  return [...always, ...relevant];
}

export async function getActiveMemories(userId: string, limit = 20): Promise<Memory[]> {
  const { data, error } = await supabase
    .from("memories")
    .select("id, type, topic, subject, description, importance, confidence")
    .eq("user_id", userId)
    .eq("status", "active")
    .order("importance", { ascending: false })
    .limit(limit);

  if (error || !data) return [];
  return data as Memory[];
}

async function getProgressSummary(userId: string): Promise<string> {
  const lines: string[] = [];

  // Rata-rata skor per section dari 5 ujian JLPT terakhir
  const { data: exams } = await supabase
    .from("exam_history")
    .select("level, percentage, section_scores, completed_at")
    .eq("user_id", userId)
    .order("completed_at", { ascending: false })
    .limit(5);

  if (exams && exams.length > 0) {
    const totals = { kanji: 0, bunpou: 0, dokkai: 0 };
    const counts = { kanji: 0, bunpou: 0, dokkai: 0 };
    for (const ex of exams) {
      (["kanji", "bunpou", "dokkai"] as const).forEach((sec) => {
        const s = ex.section_scores?.[sec];
        if (s && s.total > 0) {
          totals[sec] += (s.correct / s.total) * 100;
          counts[sec] += 1;
        }
      });
    }
    const avgs = (["kanji", "bunpou", "dokkai"] as const)
      .filter((sec) => counts[sec] > 0)
      .map((sec) => ({ sec, avg: totals[sec] / counts[sec] }));

    if (avgs.length > 0) {
      const weakest = avgs.reduce((a, b) => (a.avg < b.avg ? a : b));
      const strongest = avgs.reduce((a, b) => (a.avg > b.avg ? a : b));
      lines.push(
        `Sudah mengerjakan ${exams.length} ujian JLPT terakhir (level ${exams[0].level}), rata-rata skor keseluruhan terbaru ${exams[0].percentage}%.`
      );
      lines.push(
        `Section terlemah: ${weakest.sec} (${weakest.avg.toFixed(0)}%). Section terkuat: ${strongest.sec} (${strongest.avg.toFixed(0)}%).`
      );
    }
  }

  // Jumlah item pelajaran yang sudah dicentang selesai
  const { count: checklistCount } = await supabase
    .from("checklist_progress")
    .select("*", { count: "exact", head: true })
    .eq("user_id", userId)
    .eq("checked", true);

  if (checklistCount && checklistCount > 0) {
    lines.push(`Sudah menyelesaikan ${checklistCount} poin materi di checklist pelajaran.`);
  }

  // Aktivitas quiz harian terakhir
  const { data: lastQuiz } = await supabase
    .from("quiz_daily")
    .select("date, streak, level")
    .eq("user_id", userId)
    .order("date", { ascending: false })
    .limit(1)
    .single();

  if (lastQuiz) {
    lines.push(
      `Quiz harian terakhir dikerjakan tanggal ${lastQuiz.date}, streak saat ini ${lastQuiz.streak} hari.`
    );
  }

  return lines.join("\n");
}

/**
 * Bangun blok teks memori + progress untuk disisipkan ke system prompt Siera.
 * Mengembalikan string kosong kalau user belum punya data sama sekali.
 */
async function getLatestMonthlySummaryLine(userId: string): Promise<string> {
  const { data } = await supabase
    .from("monthly_summaries")
    .select("year_month, exams_taken, avg_score, quiz_days_active, quiz_max_streak")
    .eq("user_id", userId)
    .order("year_month", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (!data) return "";

  const parts: string[] = [`Rangkuman bulan ${data.year_month}:`];
  if (data.exams_taken > 0) {
    parts.push(`${data.exams_taken} ujian dikerjakan (rata-rata ${Number(data.avg_score).toFixed(0)}%)`);
  }
  if (data.quiz_days_active > 0) {
    parts.push(`aktif quiz harian ${data.quiz_days_active} hari (streak tertinggi ${data.quiz_max_streak})`);
  }
  if (parts.length === 1) return "";

  return parts.join(" ");
}

export async function buildMemoryContext(userId: string, currentMessage?: string | null): Promise<string> {
  const [memories, progressSummary, monthlySummaryLine] = await Promise.all([
    getActiveMemories(userId),
    getProgressSummary(userId),
    getLatestMonthlySummaryLine(userId),
  ]);

  const relevantMemories = selectRelevantMemories(memories, currentMessage);

  if (relevantMemories.length === 0 && !progressSummary && !monthlySummaryLine) return "";

  let block = "\n\n===== YANG SIERA INGAT TENTANG USER INI =====\n";

  if (progressSummary) {
    block += `\n[Progress Belajar]\n${progressSummary}\n`;
  }

  if (monthlySummaryLine) {
    block += `\n[Tren Bulanan]\n${monthlySummaryLine}\n`;
  }

  if (relevantMemories.length > 0) {
    block += `\n[Memori Jangka Panjang]\n`;
    relevantMemories.forEach((m) => {
      const topicTag = m.topic ? ` (${m.topic}${m.subject ? `: ${m.subject}` : ""})` : "";
      block += `- ${TYPE_LABEL[m.type]}${topicTag}: ${m.description}\n`;
    });
  }

  block += `\nGunakan info ini secara natural kalau relevan dengan pertanyaan user. Jangan\nmenyebutkan semuanya sekaligus atau membacakannya seperti daftar ke user.\n===== AKHIR MEMORI =====`;

  return block;
}

/**
 * Simpan satu pasang pesan (user + balasan Siera) ke chat_messages.
 * Dipanggil setelah balasan berhasil dibuat. Gagal-diam (tidak melempar
 * error) supaya kegagalan simpan histori tidak menggagalkan respon chat.
 */
export async function saveChatTurn(
  userId: string,
  userContent: string,
  assistantContent: string,
  channel: "web" | "line" = "web"
) {
  try {
    await supabase.from("chat_messages").insert([
      { user_id: userId, role: "user", content: userContent, channel },
      { user_id: userId, role: "assistant", content: assistantContent, channel },
    ]);
  } catch (err) {
    console.error("Gagal menyimpan chat_messages:", err);
  }
}
