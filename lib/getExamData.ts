import { exam201107 } from "./exams/2011/07";

// Data manifest - saat ini hanya N3 yang ada datanya
const EXAMS_DATA: Record<string, any> = {
  "2011-07": exam201107,
  // "2011-12": exam201112,
  // Tambahkan data lain sesuai ketersediaan file
};

export async function getExamData(year: string, period: string, level?: string)
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

  console.log(`Loaded exam data for ${key}${level ? ` - Level: ${level.toUpperCase()}` : ""}`);
  return examData;
}
