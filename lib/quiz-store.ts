// /lib/quiz-store.ts
import { supabase } from "@/lib/supabase";
import { QuizDailyState } from "@/types/quiz";
import { MAX_QUESTIONS_PER_DAY, MAX_TOPIC_CHANGES_PER_DAY } from "@/lib/quiz-config";

function getToday(): string {
  return new Date().toISOString().slice(0, 10);
}

// Ambil state hari ini dari Supabase (jika login)
export async function getDailyState(userId: string): Promise<QuizDailyState> {
  const today = getToday();

  const { data, error } = await supabase
    .from("quiz_daily")
    .select("*")
    .eq("user_id", userId)
    .eq("date", today)
    .single();

  if (error || !data) {
    // Belum ada record hari ini, return default
    return {
      date: today,
      qUsed: 0,
      tUsed: 0,
      pts: 0,
      streak: 0,
      topicId: "budaya",
      lvl: 1,
    };
  }

  return {
    date: data.date,
    qUsed: data.q_used,
    tUsed: data.t_used,
    pts: data.total_pts,
    streak: data.streak,
    topicId: data.topic_id,
    lvl: data.level,
  };
}

// Simpan/update state harian ke Supabase
export async function saveDailyState(
  userId: string,
  state: QuizDailyState
): Promise<void> {
  const { error } = await supabase.from("quiz_daily").upsert(
    {
      user_id: userId,
      date: state.date,
      q_used: state.qUsed,
      t_used: state.tUsed,
      total_pts: state.pts,
      streak: state.streak,
      topic_id: state.topicId,
      level: state.lvl,
    },
    { onConflict: "user_id,date" }
  );

  if (error) {
    console.error("Gagal simpan state quiz:", error);
  }
}

// Update setelah menjawab soal
export async function recordAnswer(
  userId: string,
  state: QuizDailyState,
  isCorrect: boolean,
  ptsGained: number
): Promise<QuizDailyState> {
  const newState: QuizDailyState = {
    ...state,
    qUsed: state.qUsed + 1,
    pts: state.pts + ptsGained,
    streak: isCorrect ? state.streak + 1 : 0,
  };

  await saveDailyState(userId, newState);
  return newState;
}

// Ganti topik (dengan limit)
export async function changeTopic(
  userId: string,
  state: QuizDailyState,
  newTopicId: string
): Promise<QuizDailyState | null> {
  if (state.tUsed >= MAX_TOPIC_CHANGES_PER_DAY) return null;

  const newState: QuizDailyState = {
    ...state,
    tUsed: state.tUsed + 1,
    topicId: newTopicId,
  };

  await saveDailyState(userId, newState);
  return newState;
}

// Ganti level
export async function changeLevel(
  userId: string,
  state: QuizDailyState,
  newLvl: number
): Promise<QuizDailyState> {
  const newState: QuizDailyState = { ...state, lvl: newLvl };
  await saveDailyState(userId, newState);
  return newState;
}

export function isQuotaFull(state: QuizDailyState): boolean {
  return state.qUsed >= MAX_QUESTIONS_PER_DAY;
}

export function isTopicLocked(state: QuizDailyState): boolean {
  return state.tUsed >= MAX_TOPIC_CHANGES_PER_DAY;
}

export function getTimeUntilReset(): string {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  const diff = Math.round((tomorrow.getTime() - now.getTime()) / 1000 / 60);
  const h = Math.floor(diff / 60);
  const m = diff % 60;
  return `${h}j ${m}m`;
}
