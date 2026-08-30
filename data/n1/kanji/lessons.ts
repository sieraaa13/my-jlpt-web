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
  },
};

export const kanjiTests: Record<string, Record<string, KanjiTestDay>> = {
  "1": {
    "7": w1d7 as KanjiTestDay,
  },
};

export function getOrganizedKanjiLessons() {
  const weeks: Array<{ week: string; days: Array<{ day: string; title: string; subtitle: string }> }> = [];
  const sortedWeeks = Object.keys(kanjiLessons).sort((a, b) => Number(a) - Number(b));
  for (const week of sortedWeeks) {
    const lessonDays = kanjiLessons[week];
    const testDays = kanjiTests[week] || {};
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
