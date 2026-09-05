// =================================================================
// 📝 MANIFEST FILE — Daftar semua pelajaran Kanji N3 Soumatome
// Ditambah bertahap per hari, sama seperti pola di data/n2/kanji.
// =================================================================
import type { KanjiSignLessonDay, N2KanjiTestDay as N3KanjiTestDay } from "@/data/n2/kanji/lessons";

// Week 1
import w1d1 from "./week1_day1.json";
import w1d2 from "./week1_day2.json";
import w1d3 from "./week1_day3.json";
import w1d4 from "./week1_day4.json";
import w1d5 from "./week1_day5.json";
import w1d6 from "./week1_day6.json";
import w1d7 from "./week1_day7.json";

// Week 2
import w2d1 from "./week2_day1.json";

export type { KanjiSignLessonDay, N3KanjiTestDay };

export const n3KanjiLessons: Record<string, Record<string, KanjiSignLessonDay>> = {
  "1": {
    "1": w1d1 as KanjiSignLessonDay,
    "2": w1d2 as KanjiSignLessonDay,
    "3": w1d3 as KanjiSignLessonDay,
    "4": w1d4 as KanjiSignLessonDay,
    "5": w1d5 as KanjiSignLessonDay,
    "6": w1d6 as KanjiSignLessonDay,
  },
  "2": {
    "1": w2d1 as KanjiSignLessonDay,
  },
};

export const n3KanjiTests: Record<string, Record<string, N3KanjiTestDay>> = {
  "1": {
    "7": w1d7 as unknown as N3KanjiTestDay,
  },
};

export function getOrganizedN3KanjiLessons() {
  const weeks: Array<{ week: string; days: Array<{ day: string; title: string; subtitle: string }> }> = [];
  const allWeeks = new Set([...Object.keys(n3KanjiLessons), ...Object.keys(n3KanjiTests)]);
  const sortedWeeks = Array.from(allWeeks).sort((a, b) => Number(a) - Number(b));
  for (const week of sortedWeeks) {
    const lessonDays = n3KanjiLessons[week] || {};
    const testDays = n3KanjiTests[week] || {};
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
