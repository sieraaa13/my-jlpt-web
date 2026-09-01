// =================================================================
// 📝 MANIFEST FILE — Daftar semua pelajaran Soumatome N2 Bunpou
// =================================================================

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
import w6d3 from "./week6_day3.json";
import w6d4 from "./week6_day4.json";
import w6d5 from "./week6_day5.json";
import w6d6 from "./week6_day6.json";
import w6d7 from "./week6_day7.json";

export type GrammarSection = {
  pattern_title: string;
  pattern_meaning?: string;
  description_box: {
    formula: string;
    explanation: string;
    explanation_en?: string;
  };
  examples: Array<{
    jp: string;
    en: string;
    explanation?: string;
    highlight?: string;
  }>;
};
export type ExerciseGroup = { title: string; instruction: string; type: string; questions: Array<Record<string, unknown>>; passage?: Record<string, unknown>; };
export type LessonLevel = { name: string; week: number; day: number; header: { main_title: string; sub_title: string; translation: string; }; illustration_text?: Record<string, string | undefined>; grammar_sections?: GrammarSection[]; exercise_groups?: ExerciseGroup[]; };
export type LessonFile = { levels: LessonLevel[]; };

export const lessons: Record<string, Record<string, LessonFile>> = {
  "1": { "1": w1d1 as LessonFile, "2": w1d2 as LessonFile, "3": w1d3 as LessonFile, "4": w1d4 as LessonFile, "5": w1d5 as LessonFile, "6": w1d6 as LessonFile, "7": w1d7 as LessonFile },
  "2": { "1": w2d1 as LessonFile, "2": w2d2 as LessonFile, "3": w2d3 as LessonFile, "4": w2d4 as LessonFile, "5": w2d5 as LessonFile, "6": w2d6 as LessonFile, "7": w2d7 as LessonFile },
  "3": { "1": w3d1 as LessonFile, "2": w3d2 as LessonFile, "3": w3d3 as LessonFile, "4": w3d4 as LessonFile, "5": w3d5 as LessonFile, "6": w3d6 as LessonFile, "7": w3d7 as LessonFile },
  "4": { "1": w4d1 as LessonFile, "2": w4d2 as LessonFile, "3": w4d3 as LessonFile, "4": w4d4 as LessonFile, "5": w4d5 as LessonFile, "6": w4d6 as LessonFile, "7": w4d7 as LessonFile },
  "5": { "1": w5d1 as LessonFile, "2": w5d2 as LessonFile, "3": w5d3 as LessonFile, "4": w5d4 as LessonFile, "5": w5d5 as LessonFile, "6": w5d6 as LessonFile, "7": w5d7 as LessonFile },
  "6": { "1": w6d1 as LessonFile, "2": w6d2 as LessonFile, "3": w6d3 as LessonFile, "4": w6d4 as LessonFile, "5": w6d5 as LessonFile, "6": w6d6 as LessonFile, "7": w6d7 as LessonFile },
};

export function getOrganizedLessons() {
  const weeks: Array<{ week: string; lessons: Array<{ day: string; title: string; subtitle: string; type: "grammar" | "exercise"; }> }> = [];
  const sortedWeeks = Object.keys(lessons).sort((a, b) => Number(a) - Number(b));
  for (const week of sortedWeeks) {
    const days = lessons[week];
    const sortedDays = Object.keys(days).sort((a, b) => Number(a) - Number(b));
    weeks.push({ week, lessons: sortedDays.map((day) => { const data = days[day].levels[0]; return { day, title: data.header.main_title, subtitle: data.header.sub_title, type: data.exercise_groups ? "exercise" : "grammar" }; }) });
  }
  return weeks;
}

export function getAllLessonParams() {
  const params: Array<{ week: string; day: string }> = [];
  for (const [week, days] of Object.entries(lessons)) {
    for (const day of Object.keys(days)) { params.push({ week, day }); }
  }
  return params;
}

export function getAdjacentLessons(currentWeek: string, currentDay: string) {
  const all: Array<{ week: string; day: string }> = [];
  const sortedWeeks = Object.keys(lessons).sort((a, b) => Number(a) - Number(b));
  for (const w of sortedWeeks) {
    const sortedDays = Object.keys(lessons[w]).sort((a, b) => Number(a) - Number(b));
    for (const d of sortedDays) { all.push({ week: w, day: d }); }
  }
  const idx = all.findIndex((l) => l.week === currentWeek && l.day === currentDay);
  return { prev: idx > 0 ? all[idx - 1] : null, next: idx < all.length - 1 ? all[idx + 1] : null, current: idx + 1, total: all.length, };
}
