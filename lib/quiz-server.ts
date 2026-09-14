// lib/quiz-server.ts
// Helper khusus server untuk Quiz Harian (pakai service role key).
// Jangan di-import dari komponen client.
import { createClient, SupabaseClient } from "@supabase/supabase-js";

export function getQuizAdmin(): SupabaseClient {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export function isUuid(v: unknown): v is string {
  return typeof v === "string" && UUID_RE.test(v);
}

export async function userExists(admin: SupabaseClient, userId: string): Promise<boolean> {
  const { data } = await admin.from("users").select("id").eq("id", userId).maybeSingle();
  return !!data;
}

export interface DailyRow {
  user_id:           string;
  date:              string;
  q_used:            number;
  t_used:            number;
  total_pts:         number;
  streak:            number;
  topic_id:          string;
  level:             number;
  total_pts_alltime: number;
  used_topics:       string[];
}

// Baris quiz_daily hari ini; kalau belum ada, bentuk baris baru yang membawa
// streak, level, topik & total poin dari hari terakhir (belum disimpan).
export async function loadDailyRow(admin: SupabaseClient, userId: string, date: string): Promise<DailyRow> {
  const { data: todayRow } = await admin
    .from("quiz_daily")
    .select("user_id, date, q_used, t_used, total_pts, streak, topic_id, level, total_pts_alltime, used_topics")
    .eq("user_id", userId)
    .eq("date", date)
    .maybeSingle();

  if (todayRow) {
    return {
      ...todayRow,
      q_used:            todayRow.q_used ?? 0,
      t_used:            todayRow.t_used ?? 0,
      total_pts:         todayRow.total_pts ?? 0,
      streak:            todayRow.streak ?? 0,
      level:             todayRow.level ?? 0,
      total_pts_alltime: todayRow.total_pts_alltime ?? 0,
      used_topics:       todayRow.used_topics ?? [],
    };
  }

  const { data: last } = await admin
    .from("quiz_daily")
    .select("total_pts_alltime, level, topic_id, streak")
    .eq("user_id", userId)
    .order("date", { ascending: false })
    .limit(1)
    .maybeSingle();

  return {
    user_id:           userId,
    date,
    q_used:            0,
    t_used:            0,
    total_pts:         0,
    streak:            last?.streak ?? 0,
    topic_id:          last?.topic_id ?? "budaya",
    level:             last?.level ?? 0,
    total_pts_alltime: last?.total_pts_alltime ?? 0,
    used_topics:       [],
  };
}

export async function saveDailyRow(admin: SupabaseClient, row: DailyRow): Promise<void> {
  const { error } = await admin.from("quiz_daily").upsert(row, { onConflict: "user_id,date" });
  if (error) throw error;
}

export async function countPending(admin: SupabaseClient, userId: string, date: string): Promise<number> {
  const { count } = await admin
    .from("quiz_user_played")
    .select("question_id", { count: "exact", head: true })
    .eq("user_id", userId)
    .eq("quiz_date", date)
    .is("answered_at", null);
  return count ?? 0;
}

// Bentuk state yang dikirim ke halaman /quiz.
export function toClientState(row: DailyRow, pending: number) {
  return {
    date:            row.date,
    qUsed:           row.q_used,
    tUsed:           row.t_used,
    pts:             row.total_pts,
    streak:          row.streak,
    topicId:         row.topic_id,
    lvl:             row.level,
    totalPtsAlltime: row.total_pts_alltime,
    usedTopics:      row.used_topics,
    pending,
  };
}
