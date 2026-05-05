// Direct import dari JSON files - TANPA FETCH!
import exam201107 from "@/public/asset/n3/2011/07.json";
import exam201112 from "@/public/asset/n3/2011/12.json";

// Untuk sekarang, hanya 1 file dulu untuk test
const EXAMS_DATA: Record<string, any> = {
  "2011-07": exam201107,
  "2011-12": exam201112,
};

export async function getExamData(year: string, period: string) {
  const key = `${year}-${period}`;
  const examData = EXAMS_DATA[key];
  
  if (!examData) {
    console.error(`Exam data not found for ${key}`);
    return null;
  }
  
  return examData;
}
