import w1d1 from "./week1_day1.json";
import w1d2 from "./week1_day2.json";
import w1d3 from "./week1_day3.json";
import w1d4 from "./week1_day4.json";
import w1d5 from "./week1_day5.json";
import w1d6 from "./week1_day6.json";
import w1d7 from "./week1_day7.json";
import w2d1 from "./week2_day1.json";
import w2d2 from "./week2_day2.json";
import w2d3 from "./week2_day3.json";
import w2d4 from "./week2_day4.json";
import w2d5 from "./week2_day5.json";
import w2d6 from "./week2_day6.json";
import w2d7 from "./week2_day7.json";
import w3d1 from "./week3_day1.json";
import w3d2 from "./week3_day2.json";
import w3d3 from "./week3_day3.json";
import w3d4 from "./week3_day4.json";
import w3d5 from "./week3_day5.json";
import w3d6 from "./week3_day6.json";
import w3d7 from "./week3_day7.json";
import w4d1 from "./week4_day1.json";
import w4d2 from "./week4_day2.json";
import w4d3 from "./week4_day3.json";
import w4d4 from "./week4_day4.json";
import w4d5 from "./week4_day5.json";
import w4d6 from "./week4_day6.json";
import w4d7 from "./week4_day7.json";
import w5d1 from "./week5_day1.json";
import w5d2 from "./week5_day2.json";
import w5d3 from "./week5_day3.json";
import w5d4 from "./week5_day4.json";
import w5d5 from "./week5_day5.json";
import w5d6 from "./week5_day6.json";
import w5d7 from "./week5_day7.json";
import w6d1 from "./week6_day1.json";
import w6d2 from "./week6_day2.json";
import w6d3 from "./week6_day3.json";
import w6d4 from "./week6_day4.json";
import w6d5 from "./week6_day5.json";
import w6d6 from "./week6_day6.json";
import w6d7 from "./week6_day7.json";
import w7d1 from "./week7_day1.json";
import w7d2 from "./week7_day2.json";

export type KanjiComponent = { character: string; meaning: string };
export type KanjiExample = { word: string; reading: string; meaning: string };
export type KanjiEntry = {
  character: string;
  reading: string;
  meaning: string;
  components: KanjiComponent[];
  examples: KanjiExample[];
  note?: string;
};
export type KanjiGroup = {
  sharedComponent: string;
  sharedReading: string;
  kanjiList: KanjiEntry[];
};
export type ChoiceQuestion = {
  question: string;
  optionA: string;
  optionAReading: string;
  optionB: string;
  optionBReading: string;
  answer: "A" | "B";
};
export type DragQuestion = {
  reading: string;
  fixedKanji: string;
  blankPosition: "before" | "after";
  choices: string[];
  answer: string;
};
export type KanjiExercises = {
  choiceQuestions: ChoiceQuestion[];
  dragQuestions: DragQuestion[];
};
export type KanjiLessonDay = {
  week: number;
  day: number;
  title: string;
  subtitle: string;
  groups: KanjiGroup[];
  exercises: KanjiExercises;
};

export type ReadingQuestion = { sentence: string; target: string; choices: string[]; answer: string };
export type KanjiWritingQuestion = { sentence: string; reading: string; choices: string[]; answer: string };
export type FillBlankQuestion = { sentence: string; target: string; choices: string[]; answer: string };
export type PassageBlank = { number: number; answer: string; answerKanji: string };
export type PassageQuestion = { passage: string; wordBank: string[]; blanks: PassageBlank[] };
export type KanjiTestDay = {
  week: number;
  day: number;
  title: string;
  subtitle: string;
  readingQuestions: ReadingQuestion[];
  kanjiChoiceQuestions: KanjiWritingQuestion[];
  fillBlankQuestions: FillBlankQuestion[];
  passageQuestion: PassageQuestion;
};

export type KunyomiEntry = {
  word: string;
  reading: string;
  example: string;
  meaning: string;
  relatedForms: string[];
};
export type KunyomiLessonDay = {
  week: number;
  day: number;
  title: string;
  subtitle: string;
  entries: KunyomiEntry[];
  exercises: KanjiExercises;
};

export const kanjiLessons: Record<string, Record<string, KanjiLessonDay>> = {
  "1": {
    "1": w1d1 as KanjiLessonDay,
    "2": w1d2 as KanjiLessonDay,
    "3": w1d3 as KanjiLessonDay,
    "4": w1d4 as KanjiLessonDay,
    "5": w1d5 as KanjiLessonDay,
    "6": w1d6 as KanjiLessonDay,
  },
  "2": {
    "1": w2d1 as KanjiLessonDay,
    "2": w2d2 as KanjiLessonDay,
    "3": w2d3 as KanjiLessonDay,
    "4": w2d4 as KanjiLessonDay,
    "5": w2d5 as KanjiLessonDay,
    "6": w2d6 as KanjiLessonDay,
  },
};

export const kanjiTests: Record<string, Record<string, KanjiTestDay>> = {
  "1": {
    "7": w1d7 as KanjiTestDay,
  },
  "2": {
    "7": w2d7 as KanjiTestDay,
  },
  "3": {
    "7": w3d7 as KanjiTestDay,
  },
  "4": {
    "7": w4d7 as KanjiTestDay,
  },
  "5": {
    "7": w5d7 as KanjiTestDay,
  },
  "6": {
    "7": w6d7 as KanjiTestDay,
  },
};

export const kunyomiLessons: Record<string, Record<string, KunyomiLessonDay>> = {
  "3": {
    "1": w3d1 as KunyomiLessonDay,
    "2": w3d2 as KunyomiLessonDay,
    "3": w3d3 as KunyomiLessonDay,
    "4": w3d4 as KunyomiLessonDay,
    "5": w3d5 as KunyomiLessonDay,
    "6": w3d6 as KunyomiLessonDay,
  },
  "4": {
    "1": w4d1 as KunyomiLessonDay,
    "2": w4d2 as KunyomiLessonDay,
    "3": w4d3 as KunyomiLessonDay,
    "4": w4d4 as KunyomiLessonDay,
    "5": w4d5 as KunyomiLessonDay,
    "6": w4d6 as KunyomiLessonDay,
  },
  "5": {
    "1": w5d1 as KunyomiLessonDay,
    "2": w5d2 as KunyomiLessonDay,
    "3": w5d3 as KunyomiLessonDay,
    "4": w5d4 as KunyomiLessonDay,
    "5": w5d5 as KunyomiLessonDay,
    "6": w5d6 as KunyomiLessonDay,
  },
  "6": {
    "1": w6d1 as KunyomiLessonDay,
    "2": w6d2 as KunyomiLessonDay,
    "3": w6d3 as KunyomiLessonDay,
    "4": w6d4 as KunyomiLessonDay,
    "5": w6d5 as KunyomiLessonDay,
    "6": w6d6 as KunyomiLessonDay,
  },
  "7": {
    "1": w7d1 as KunyomiLessonDay,
    "2": w7d2 as KunyomiLessonDay,
  },
};

export function getOrganizedKanjiLessons() {
  const weeks: Array<{ week: string; days: Array<{ day: string; title: string; subtitle: string }> }> = [];
  const allWeeks = new Set([
    ...Object.keys(kanjiLessons),
    ...Object.keys(kanjiTests),
    ...Object.keys(kunyomiLessons),
  ]);
  const sortedWeeks = Array.from(allWeeks).sort((a, b) => Number(a) - Number(b));
  for (const week of sortedWeeks) {
    const lessonDays = kanjiLessons[week] || {};
    const testDays = kanjiTests[week] || {};
    const kunyomiDays = kunyomiLessons[week] || {};
    const allDayKeys = [...Object.keys(lessonDays), ...Object.keys(testDays), ...Object.keys(kunyomiDays)];
    const sortedDays = allDayKeys.sort((a, b) => Number(a) - Number(b));
    weeks.push({
      week,
      days: sortedDays.map((day) => {
        const source = lessonDays[day] || testDays[day] || kunyomiDays[day];
        return { day, title: source.title, subtitle: source.subtitle };
      }),
    });
  }
  return weeks;
}
