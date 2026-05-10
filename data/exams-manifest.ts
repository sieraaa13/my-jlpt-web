import { exam201107 } from "./exams/2011/07";

// Data manifest - saat ini hanya N3
const EXAMS_DATA: Record<string, any> = {
  "2011-07": exam201107,
  // "2011-12": exam201112, // Nanti tambah sesuai data tersedia
};

export async function getExamData(year: string, period: string, level?: string) {
  const key = `${year}-${period}`;
  const examData = EXAMS_DATA[key];

  if (!examData) {
    console.error(`Exam data not found for key: ${key} (Level: ${level})`);
    return null;
  }

  console.log(`Loaded exam data for ${key}`);
  return examData;
}
