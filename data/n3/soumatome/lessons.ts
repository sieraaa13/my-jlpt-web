// =================================================================
// 📝 MANIFEST FILE — Daftar semua pelajaran Soumatome N3
// =================================================================
//
// CARA MENAMBAH LESSON BARU:
// 1. Upload file JSON ke folder ini (data/n3/soumatome/)
// 2. Tambah 1 baris import di bawah
// 3. Tambah ke object `lessons` di bawah
// =================================================================

// Week 1
import w1d1 from "./week1_day1.json";
import w1d2 from "./week1_day2.json";
import w1d3 from "./week1_day3.json";
import w1d4 from "./week1_day4.json";
import w1d5 from "./week1_day5.json";
import w1d6 from "./week1_day6.json";
import w1d7 from "./week1_day7.json";

// Tambah Week 2 di sini saat sudah punya:
// import w2d1 from "./week2_day1.json";
// dst...

// =================================================================
// Type definition (fleksibel - support grammar lesson DAN exercise day)
// =================================================================
export type GrammarSection = {
  pattern_title: string;
  pattern_meaning: string;
  description_box: {
    formula: string;
    explanation: string;
    explanation_en?: string;
  };
  examples: Array<{
    jp: string;
    en: string;
    explanation?: string;
  }>;
};

export type ExerciseGroup = {
  title: string;
  instruction: string;
  type: string;
  questions: Array<Record<string, unknown>>;
  passage?: string;
};

export type LessonLevel = {
  name: string;
  week: number;
  day: number;
  header: {
    main_title: string;
    sub_title: string;
    translation: string;
  };
  illustration_text?: Record<string, string | undefined>;
  // Support BOTH formats:
  grammar_sections?: GrammarSection[];
  exercise_groups?: ExerciseGroup[];
};

export type LessonFile = {
  levels: LessonLevel[];
};

// =================================================================
// 🗂️ Kumpulan semua lesson
// =================================================================
// Pakai 'any' untuk type assertion karena JSON import + variasi struktur
// (day 7 = exercise, day 1-6 = grammar)
export const lessons: Record<string, Record<string, LessonFile>> = {
  "1": {
    "1": w1d1 as LessonFile,
    "2": w1d2 as LessonFile,
    "3": w1d3 as LessonFile,
    "4": w1d4 as LessonFile,
    "5": w1d5 as LessonFile,
    "6": w1d6 as LessonFile,
    "7": w1d7 as LessonFile,
  },
};

// =================================================================
// Helper: list lesson terurut untuk halaman daftar
// =================================================================
export function getOrganizedLessons() {
  const weeks: Array<{
    week: string;
    lessons: Array<{
      day: string;
      title: string;
      subtitle: string;
      type: "grammar" | "exercise";
    }>;
  }> = [];

  const sortedWeeks = Object.keys(lessons).sort((a, b) => Number(a) - Number(b));

  for (const week of sortedWeeks) {
    const days = lessons[week];
    const sortedDays = Object.keys(days).sort((a, b) => Number(a) - Number(b));

    weeks.push({
      week,
      lessons: sortedDays.map((day) => {
        const data = days[day].levels[0];
        return {
          day,
          title: data.header.main_title,
          subtitle: data.header.sub_title,
          type: data.exercise_groups ? "exercise" : "grammar",
        };
      }),
    });
  }

  return weeks;
}

// Helper: dapat semua kombinasi week/day untuk static generation
export function getAllLessonParams() {
  const params: Array<{ week: string; day: string }> = [];
  for (const [week, days] of Object.entries(lessons)) {
    for (const day of Object.keys(days)) {
      params.push({ week, day });
    }
  }
  return params;
}

// Helper: dapat lesson sebelum/sesudah untuk navigasi
export function getAdjacentLessons(currentWeek: string, currentDay: string) {
  const all: Array<{ week: string; day: string }> = [];
  const sortedWeeks = Object.keys(lessons).sort((a, b) => Number(a) - Number(b));
  for (const w of sortedWeeks) {
    const sortedDays = Object.keys(lessons[w]).sort((a, b) => Number(a) - Number(b));
    for (const d of sortedDays) {
      all.push({ week: w, day: d });
    }
  }

  const idx = all.findIndex((l) => l.week === currentWeek && l.day === currentDay);
  return {
    prev: idx > 0 ? all[idx - 1] : null,
    next: idx < all.length - 1 ? all[idx + 1] : null,
    current: idx + 1,
    total: all.length,
  };
}
