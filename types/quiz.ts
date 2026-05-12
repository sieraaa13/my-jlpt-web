// /types/quiz.ts

export interface QuizQuestion {
  q: string;
  opts: string[];
  ans: number;
  img_keyword: string;
  img_cat: string;
  explain: string;
}

export interface QuizTopic {
  id: string;
  name: string;
  icon: string;
  desc: string;
}

export interface QuizLevel {
  name: string;
  label: string;
  diff: string;
  ptCorrect: number;
  ptStreak: number;
  color: string;
}

export interface QuizDailyState {
  date: string;
  qUsed: number;
  tUsed: number;
  pts: number;
  streak: number;
  topicId: string;
  lvl: number;
}
