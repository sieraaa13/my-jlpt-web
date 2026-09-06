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
import w2d2 from "./week2_day2.json";
import w2d3 from "./week2_day3.json";
import w2d4 from "./week2_day4.json";
import w2d5 from "./week2_day5.json";
import w2d6 from "./week2_day6.json";
import w2d7 from "./week2_day7.json";

// Week 3
import w3d1 from "./week3_day1.json";
import w3d2 from "./week3_day2.json";
import w3d3 from "./week3_day3.json";
import w3d4 from "./week3_day4.json";
import w3d5 from "./week3_day5.json";
import w3d6 from "./week3_day6.json";
import w3d7 from "./week3_day7.json";

// Week 4
import w4d1 from "./week4_day1.json";
import w4d2 from "./week4_day2.json";
import w4d3 from "./week4_day3.json";
import w4d4 from "./week4_day4.json";
import w4d5 from "./week4_day5.json";
import w4d6 from "./week4_day6.json";
import w4d7 from "./week4_day7.json";

// Week 5
import w5d1 from "./week5_day1.json";
import w5d2 from "./week5_day2.json";
import w5d3 from "./week5_day3.json";
import w5d4 from "./week5_day4.json";
import w5d5 from "./week5_day5.json";
import w5d6 from "./week5_day6.json";
import w5d7 from "./week5_day7.json";

// Week 6
import w6d1 from "./week6_day1.json";
import w6d2 from "./week6_day2.json";

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
    "2": w2d2 as KanjiSignLessonDay,
    "3": w2d3 as KanjiSignLessonDay,
    "4": w2d4 as KanjiSignLessonDay,
    "5": w2d5 as KanjiSignLessonDay,
    "6": w2d6 as KanjiSignLessonDay,
  },
  "3": {
    "1": w3d1 as KanjiSignLessonDay,
    "2": w3d2 as KanjiSignLessonDay,
    "3": w3d3 as KanjiSignLessonDay,
    "4": w3d4 as KanjiSignLessonDay,
    "5": w3d5 as KanjiSignLessonDay,
    "6": w3d6 as KanjiSignLessonDay,
  },
  "4": {
    "1": w4d1 as KanjiSignLessonDay,
    "2": w4d2 as KanjiSignLessonDay,
    "3": w4d3 as KanjiSignLessonDay,
    "4": w4d4 as KanjiSignLessonDay,
    "5": w4d5 as KanjiSignLessonDay,
    "6": w4d6 as KanjiSignLessonDay,
  },
  "5": {
    "1": w5d1 as KanjiSignLessonDay,
    "2": w5d2 as KanjiSignLessonDay,
    "3": w5d3 as KanjiSignLessonDay,
    "4": w5d4 as KanjiSignLessonDay,
    "5": w5d5 as KanjiSignLessonDay,
    "6": w5d6 as KanjiSignLessonDay,
  },
  "6": {
    "1": w6d1 as KanjiSignLessonDay,
    "2": w6d2 as KanjiSignLessonDay,
  },
};

export const n3KanjiTests: Record<string, Record<string, N3KanjiTestDay>> = {
  "1": {
    "7": w1d7 as unknown as N3KanjiTestDay,
  },
  "2": {
    "7": w2d7 as unknown as N3KanjiTestDay,
  },
  "3": {
    "7": w3d7 as unknown as N3KanjiTestDay,
  },
  "4": {
    "7": w4d7 as unknown as N3KanjiTestDay,
  },
  "5": {
    "7": w5d7 as unknown as N3KanjiTestDay,
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
