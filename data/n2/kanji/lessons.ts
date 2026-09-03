// =================================================================
// 📝 MANIFEST FILE — Daftar semua pelajaran Kanji N2 Soumatome
// =================================================================
import type { KanjiTestDay } from "@/data/n1/kanji/lessons";

// Week 1
import w1d1 from "./week1_day1.json";
import w1d2 from "./week1_day2.json";

export type KanjiWordFlag = "attention" | "special";
export type KanjiWord = {
  word: string;
  reading: string;
  meaning: string;
  note?: string;
  flag?: KanjiWordFlag;
};
export type KanjiCharEntry = {
  id: number;
  character: string;
  strokes: number;
  onyomi: string[];
  kunyomi: string[];
  words: KanjiWord[];
  extraWords?: KanjiWord[];
};
export type SignText = { text: string; meaning: string };
export type PracticeQuestion = {
  number: number;
  prompt: string;
  optionA: string;
  optionB: string;
  answer: "A" | "B";
};
export type KanjiSignLessonDay = {
  week: number;
  day: number;
  title: string;
  subtitle: string;
  translation: string;
  sceneDescription: string;
  signs: SignText[];
  kanjiList: KanjiCharEntry[];
  practiceQuestions: PracticeQuestion[];
};

export type KanjiBonusColumn = {
  title: string;
  translation: string;
  description: string;
  kanjiList: KanjiCharEntry[];
};
export type N2KanjiTestDay = KanjiTestDay & { bonusColumn?: KanjiBonusColumn };

export const n2KanjiLessons: Record<string, Record<string, KanjiSignLessonDay>> = {
  "1": {
    "1": w1d1 as KanjiSignLessonDay,
    "2": w1d2 as KanjiSignLessonDay,
  },
};

export const n2KanjiTests: Record<string, Record<string, N2KanjiTestDay>> = {};

export function getOrganizedN2KanjiLessons() {
  const weeks: Array<{ week: string; days: Array<{ day: string; title: string; subtitle: string }> }> = [];
  const allWeeks = new Set([...Object.keys(n2KanjiLessons), ...Object.keys(n2KanjiTests)]);
  const sortedWeeks = Array.from(allWeeks).sort((a, b) => Number(a) - Number(b));
  for (const week of sortedWeeks) {
    const lessonDays = n2KanjiLessons[week] || {};
    const testDays = n2KanjiTests[week] || {};
    const allDayKeys = [...Object.keys(lessonDays), ...Object.keys(testDays)];
    const sortedDays = allDayKeys.sort((a, b) => Number(a) - Number(b));
    weeks.push({
      week,
      days: sortedDays.map((day) => {
        const source = lessonDays[day] || testDays[day];
        return { day, title: source.title, subtitle: source.subtitle };
      }),
    });
  }
  return weeks;
}
