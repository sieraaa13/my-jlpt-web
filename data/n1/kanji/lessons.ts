import w1d1 from "./week1_day1.json";
import w1d2 from "./week1_day2.json";

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
export type KanjiLessonDay = {
  week: number;
  day: number;
  title: string;
  subtitle: string;
  groups: KanjiGroup[];
};

export const kanjiLessons: Record<string, Record<string, KanjiLessonDay>> = {
  "1": {
    "1": w1d1 as KanjiLessonDay,
    "2": w1d2 as KanjiLessonDay,
  },
};

export function getOrganizedKanjiLessons() {
  const weeks: Array<{ week: string; days: Array<{ day: string; title: string; subtitle: string }> }> = [];
  const sortedWeeks = Object.keys(kanjiLessons).sort((a, b) => Number(a) - Number(b));
  for (const week of sortedWeeks) {
    const days = kanjiLessons[week];
    const sortedDays = Object.keys(days).sort((a, b) => Number(a) - Number(b));
    weeks.push({
      week,
      days: sortedDays.map((day) => ({
        day,
        title: days[day].title,
        subtitle: days[day].subtitle,
      })),
    });
  }
  return weeks;
}
