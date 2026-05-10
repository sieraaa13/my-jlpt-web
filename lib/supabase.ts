import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tipe data
export interface User {
  id: string;
  name: string;
  created_at: string;
  last_login: string;
}

export interface ExamHistory {
  id: string;
  user_id: string;
  year: string;
  month: string;
  level: string;
  total_score: number;
  total_questions: number;
  percentage: number;
  section_scores: {
    kanji: { correct: number; total: number };
    bunpou: { correct: number; total: number };
    dokkai: { correct: number; total: number };
  };
  answers: Record<string, number>;
  completed_at: string;
}
