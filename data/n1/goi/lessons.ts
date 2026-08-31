import w1d1 from "./week1_day1.json";
import w1d2 from "./week1_day2.json";
import w1d3 from "./week1_day3.json";
import w1d4 from "./week1_day4.json";

export type GoiEntry = {
  word: string;
  reading: string;
  example: string;
  meaning: string;
  relatedForms: string[];
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

export type GoiExercises = {
  choiceQuestions: ChoiceQuestion[];
  dragQuestions: DragQuestion[];
};

export type GoiLessonDay = {
  week: number;
  day: number;
  title: string;
  subtitle: string;
  entries: GoiEntry[];
  exercises: GoiExercises;
};

export type ReadingQuestion = { sentence: string; target: string; choices: string[]; answer: string };
export type WordWritingQuestion = { sentence: string; reading: string; choices: string[]; answer: string };
export type FillBlankQuestion = { sentence: string; target: string; choices: string[]; answer: string };
export type PassageBlank = { number: number; answer: string; answerKanji: string };
export type PassageQuestion = { passage: string; wordBank: string[]; blanks: PassageBlank[] };

export type GoiTestDay = {
  week: number;
  day: number;
  title: string;
  subtitle: string;
  readingQuestions: ReadingQuestion[];
  wordChoiceQuestions: WordWritingQuestion[];
  fillBlankQuestions: FillBlankQuestion[];
  passageQuestion: PassageQuestion;
};

export const goiLessons: Record<string, Record<string, GoiLessonDay>> = {
  "1": {
    "1": w1d1 as GoiLessonDay,
    "2": w1d2 as GoiLessonDay,
    "3": w1d3 as GoiLessonDay,
    "4": w1d4 as GoiLessonDay,
  },
};

export const goiTests: Record<string, Record<string, GoiTestDay>> = {};

export function getOrganizedGoiLessons() {
  const weeks: Array<{ week: string; days: Array<{ day: string; title: string; subtitle: string }> }> = [];
  const allWeeks = new Set([...Object.keys(goiLessons), ...Object.keys(goiTests)]);
  const sortedWeeks = Array.from(allWeeks).sort((a, b) => Number(a) - Number(b));
  for (const week of sortedWeeks) {
    const lessonDays = goiLessons[week] || {};
    const testDays = goiTests[week] || {};
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
