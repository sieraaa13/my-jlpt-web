import { exam201107 } from "./exams/exam-2011-07";

const EXAMS_DATA: Record<string, any> = {
  "2011-07": exam201107,
};

export async function getExamData(year: string, period: string) {
  const key = `${year}-${period}`;
  return EXAMS_DATA[key] || null;
}
