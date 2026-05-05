import { exam201107 } from "../data/exams/2011/07";
import { exam201112 } from "../data/exams/2011/12";
import { exam201207 } from "../data/exams/2012/07";
// ❌ HAPUS BARIS INI:
// import { exam201307 } from "../data/exams/2013/07";

const EXAMS_DATA: Record<string, any> = {
  "2011-07": exam201107,
  "2011-12": exam201112,
  "2012-07": exam201207,
  // ❌ HAPUS JUGA INI:
  // "2013-07": exam201307,
};

export async function getExamData(year: string, period: string) {
  const key = `${year}-${period}`;
  const examData = EXAMS_DATA[key];
  if (!examData) return null;
  if (!examData.kanji || !examData.bunpou || !examData.dokkai) {
    console.error(`Invalid data structure for ${key}`);
    return null;
  }
  return examData;
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
