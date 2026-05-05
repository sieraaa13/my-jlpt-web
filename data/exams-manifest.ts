import { exam201107 } from "./exams/exam-2011-07";

// Data manifest - direct import dari TypeScript files
const EXAMS_DATA: Record<string, any> = {
  "2011-07": exam201107,
  // "2011-12": exam201112,  // Nanti bikin ini
  // "2012-07": exam201207,  // dst...
};

export async function getExamData(year: string, period: string) {
  const key = `${year}-${period}`;
  const examData = EXAMS_DATA[key];
  
  if (!examData) {
    console.error(`Exam data not found for key: ${key}`);
    return null;
  }
  
  console.log(`Loaded exam data for ${key}`);
  return examData;
}
