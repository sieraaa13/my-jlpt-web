import { exam201107 } from "../data/exams/2011/07";
import { exam201112 } from "../data/exams/2011/12";
import { exam201207 } from "../data/exams/2012/07";
import { exam201212 } from "../data/exams/2012/12";

/**
 * Data manifest - HANYA file yang sudah upload ke GitHub
 * 
 * Exams tersedia:
 * - 2011 July
 * - 2011 December
 * - 2012 July
 * - 2012 December
 */
const EXAMS_DATA: Record<string, any> = {
  "2011-07": exam201107,
  "2011-12": exam201112,
  "2012-07": exam201207,
  "2012-12": exam201212,
};

/**
 * Get exam data berdasarkan tahun dan periode
 * @param year - Format: "2011", "2012", dll
 * @param period - Format: "07" (Juli), "12" (Desember)
 * @returns Object dengan struktur { kanji, bunpou, dokkai } atau null jika tidak ditemukan
 */
export async function getExamData(year: string, period: string) {
  const key = `${year}-${period}`;
  const examData = EXAMS_DATA[key];

  if (!examData) {
    return null;
  }

  // Validasi struktur data
  if (!examData.kanji || !examData.bunpou || !examData.dokkai) {
    console.error(`Invalid data structure for ${key}`);
    return null;
  }

  return examData;
}

/**
 * Get list semua ujian yang tersedia
 */
export function getAvailableExams() {
  return Object.keys(EXAMS_DATA).map((key) => {
    const [year, period] = key.split("-");
    const monthName = period === "07" ? "July" : "December";
    return {
      key,
      year,
      period,
      label: `${year} ${monthName}`,
    };
  });
}
