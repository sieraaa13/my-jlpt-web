import { supabase } from "@/lib/supabase";

const WIB_OFFSET_MS = 7 * 60 * 60 * 1000;

/**
 * Rentang UTC untuk "bulan lalu" berdasarkan WIB, dihitung dari waktu saat
 * fungsi ini dipanggil. Dipakai supaya rangkuman bulanan dihitung untuk
 * bulan yang baru saja selesai (dipanggil tiap tanggal 1).
 */
export function getPreviousMonthWibRange() {
  const nowWib = new Date(Date.now() + WIB_OFFSET_MS);
  const y = nowWib.getUTCFullYear();
  const m = nowWib.getUTCMonth(); // bulan berjalan (0-indexed)

  // Bulan lalu = m - 1 (Date.UTC otomatis menangani rollover tahun)
  const startUtcMs = Date.UTC(y, m - 1, 1, 0, 0, 0) - WIB_OFFSET_MS;
  const endUtcMs = Date.UTC(y, m, 1, 0, 0, 0) - WIB_OFFSET_MS;

  const prevMonthDate = new Date(Date.UTC(y, m - 1, 1));
  const yearMonth = `${prevMonthDate.getUTCFullYear()}-${String(prevMonthDate.getUTCMonth() + 1).padStart(2, "0")}`;

  return {
    startIso: new Date(startUtcMs).toISOString(),
    endIso: new Date(endUtcMs).toISOString(),
    yearMonth,
  };
}

/** True kalau "hari ini" (WIB) adalah tanggal 1. */
export function isFirstOfMonthWib(): boolean {
  const nowWib = new Date(Date.now() + WIB_OFFSET_MS);
  return nowWib.getUTCDate() === 1;
}

async function findActiveUserIds(startIso: string, endIso: string): Promise<string[]> {
  const ids = new Set<string>();

  const [{ data: chatRows }, { data: examRows }, { data: quizRows }] = await Promise.all([
    supabase.from("chat_messages").select("user_id").gte("created_at", startIso).lt("created_at", endIso),
    supabase.from("exam_history").select("user_id").gte("completed_at", startIso).lt("completed_at", endIso),
    supabase.from("quiz_daily").select("user_id").gte("date", startIso.slice(0, 10)).lt("date", endIso.slice(0, 10)),
  ]);

  (chatRows ?? []).forEach((r: any) => ids.add(r.user_id));
  (examRows ?? []).forEach((r: any) => ids.add(r.user_id));
  (quizRows ?? []).forEach((r: any) => ids.add(r.user_id));

  return Array.from(ids);
}

type SectionKey = "kanji" | "bunpou" | "dokkai";

async function computeOneUserSummary(userId: string, startIso: string, endIso: string) {
  const { data: exams } = await supabase
    .from("exam_history")
    .select("percentage, section_scores")
    .eq("user_id", userId)
    .gte("completed_at", startIso)
    .lt("completed_at", endIso);

  const examsTaken = exams?.length ?? 0;
  let avgScore: number | null = null;
  const sectionScores: Record<SectionKey, { correct: number; total: number }> = {
    kanji: { correct: 0, total: 0 },
    bunpou: { correct: 0, total: 0 },
    dokkai: { correct: 0, total: 0 },
  };

  if (exams && exams.length > 0) {
    avgScore = exams.reduce((sum, e) => sum + (e.percentage ?? 0), 0) / exams.length;
    exams.forEach((e) => {
      (["kanji", "bunpou", "dokkai"] as const).forEach((sec) => {
        const s = e.section_scores?.[sec];
        if (s) {
          sectionScores[sec].correct += s.correct ?? 0;
          sectionScores[sec].total += s.total ?? 0;
        }
      });
    });
  }

  const { count: checklistCompleted } = await supabase
    .from("checklist_progress")
    .select("*", { count: "exact", head: true })
    .eq("user_id", userId)
    .eq("checked", true);

  const { data: quizRows } = await supabase
    .from("quiz_daily")
    .select("date, streak")
    .eq("user_id", userId)
    .gte("date", startIso.slice(0, 10))
    .lt("date", endIso.slice(0, 10));

  const quizDaysActive = quizRows?.length ?? 0;
  const quizMaxStreak = quizRows && quizRows.length > 0 ? Math.max(...quizRows.map((r) => r.streak ?? 0)) : 0;

  const { count: chatMessagesCount } = await supabase
    .from("chat_messages")
    .select("*", { count: "exact", head: true })
    .eq("user_id", userId)
    .eq("role", "user")
    .gte("created_at", startIso)
    .lt("created_at", endIso);

  const { count: memoriesCreated } = await supabase
    .from("memories")
    .select("*", { count: "exact", head: true })
    .eq("user_id", userId)
    .gte("created_at", startIso)
    .lt("created_at", endIso);

  return {
    examsTaken,
    avgScore,
    sectionScores,
    checklistCompleted: checklistCompleted ?? 0,
    quizDaysActive,
    quizMaxStreak,
    chatMessagesCount: chatMessagesCount ?? 0,
    memoriesCreated: memoriesCreated ?? 0,
  };
}

/**
 * Hitung dan simpan rangkuman belajar bulan lalu untuk semua user yang
 * punya aktivitas. Idempotent lewat unique constraint (user_id, year_month)
 * di tabel monthly_summaries — dipanggil ulang tidak membuat duplikat.
 * Murni agregasi statistik, tidak memanggil LLM sama sekali.
 */
export async function computeAndSaveMonthlySummaries(): Promise<{
  yearMonth: string;
  usersProcessed: number;
  errors: string[];
}> {
  const { startIso, endIso, yearMonth } = getPreviousMonthWibRange();
  const userIds = await findActiveUserIds(startIso, endIso);

  const errors: string[] = [];
  let usersProcessed = 0;

  for (const userId of userIds) {
    try {
      const summary = await computeOneUserSummary(userId, startIso, endIso);
      const { error } = await supabase.from("monthly_summaries").upsert(
        {
          user_id: userId,
          year_month: yearMonth,
          exams_taken: summary.examsTaken,
          avg_score: summary.avgScore,
          section_scores: summary.sectionScores,
          checklist_completed: summary.checklistCompleted,
          quiz_days_active: summary.quizDaysActive,
          quiz_max_streak: summary.quizMaxStreak,
          chat_messages_count: summary.chatMessagesCount,
          memories_created: summary.memoriesCreated,
        },
        { onConflict: "user_id,year_month" }
      );
      if (error) errors.push(`${userId}: ${error.message}`);
      else usersProcessed += 1;
    } catch (err: any) {
      errors.push(`${userId}: ${err.message}`);
    }
  }

  return { yearMonth, usersProcessed, errors };
}

/**
 * Arsipkan (bukan hapus) memori yang sudah tidak aktif selama 6+ bulan,
 * supaya daftar memori tetap ringkas tapi data historis tetap ada untuk
 * analisis tren jangka panjang.
 */
export async function archiveStaleMemories(): Promise<{ archived: number }> {
  const sixMonthsAgoIso = new Date(Date.now() - 183 * 24 * 60 * 60 * 1000).toISOString();

  const { data, error } = await supabase
    .from("memories")
    .update({ status: "archived", updated_at: new Date().toISOString() })
    .eq("status", "inactive")
    .lt("updated_at", sixMonthsAgoIso)
    .select("id");

  if (error) return { archived: 0 };
  return { archived: data?.length ?? 0 };
}
