// Re-export dari exams-manifest
import { exam201107 } from "../data/exams/2011/07";

const EXAMS_DATA: Record<string, any> = {
  "2011-07": exam201107,
};

export async function getExamData(
  year: string,
  period: string,
  level?: string
) {
  const key = `${year}-${period}`;
  const examData = EXAMS_DATA[key];

  if (!examData) {
    const levelInfo = level ? ` (Level: ${level.toUpperCase()})` : "";
    console.error(`Exam data not found for key: ${key}${levelInfo}`);
    return null;
  }

  console.log(`Loaded exam data for ${key}`);
  return examData;
}
