import { exam201107 } from "../data/exams/exam-2011-07";
// import { exam201112 } from "../data/exams/exam-2011-12"; // Uncomment saat file dibuat
// import { exam201207 } from "../data/exams/exam-2012-07"; // Uncomment saat file dibuat

// Data manifest - direct import dari TypeScript files
const EXAMS_DATA: Record<string, any> = {
  "2011-07": exam201107,
  // "2011-12": exam201112,  // Uncomment saat file dibuat
  // "2012-07": exam201207,  // Uncomment saat file dibuat
  // Tambahkan ujian lain di sini
};

/**
 * Get exam data berdasarkan tahun dan periode
 * @param year - Format: "2011", "2012", dll
 * @param period - Format: "07" (Juli), "12" (Desember)
 * @returns Object dengan struktur { kanji, bunpou, dokkai } atau null jika tidak ditemukan
 */
export async function getExamData(year: string, period: string) {
  const key = `${year}-${period}`;
  
  console.log(`[getExamData] Mencari data ujian untuk key: ${key}`);
  
  const examData = EXAMS_DATA[key];
  
  if (!examData) {
    console.error(`[getExamData] Exam data NOT found for key: ${key}`);
    console.error(`[getExamData] Available keys:`, Object.keys(EXAMS_DATA));
    return null;
  }
  
  // Validasi struktur data
  if (!examData.kanji || !examData.bunpou || !examData.dokkai) {
    console.error(`[getExamData] Data structure invalid untuk ${key}`);
    return null;
  }
  
  console.log(`[getExamData] ✓ Loaded exam data for ${key}`);
  console.log(`[getExamData] - Kanji questions: ${examData.kanji.length}`);
  console.log(`[getExamData] - Bunpou questions: ${examData.bunpou.length}`);
  console.log(`[getExamData] - Dokkai questions: ${examData.dokkai.length}`);
  
  return examData;
}

/**
 * Get list semua ujian yang tersedia
 */
export function getAvailableExams() {
  return Object.keys(EXAMS_DATA).map((key) => {
    const [year, period] = key.split("-");
    return {
      key,
      year,
      period,
      label: `${year}-${period}`,
    };
  });
}
