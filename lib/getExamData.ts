import { exam201107 } from "../data/exams/2011/07";
import { exam201112 } from "../data/exams/2011/12"; 
import { exam201207 } from "../data/exams/2012/07";
import { exam201212 } from "../data/exams/2012/07";
import { exam201307 } from "../data/exams/2013/07";
import { exam201312 } from "../data/exams/2013/12"; 
import { exam201407 } from "../data/exams/2014/07";
import { exam201412 } from "../data/exams/2014/07";
import { exam201507 } from "../data/exams/2015/07";
import { exam201512 } from "../data/exams/2015/12"; 
import { exam201607 } from "../data/exams/2016/07";
import { exam201612 } from "../data/exams/2016/07";
import { exam201707 } from "../data/exams/2017/07";
import { exam201712 } from "../data/exams/2017/12"; 
import { exam201807 } from "../data/exams/2018/07";
import { exam201812 } from "../data/exams/2018/07";
import { exam201907 } from "../data/exams/2019/07";
import { exam201912 } from "../data/exams/2019/07";
import { exam202007 } from "../data/exams/2020/07";
import { exam202012 } from "../data/exams/2020/12"; 
import { exam202107 } from "../data/exams/2021/07";
import { exam202112 } from "../data/exams/2021/07";
import { exam202207 } from "../data/exams/2022/07";
import { exam202212 } from "../data/exams/2022/12"; 
import { exam202307 } from "../data/exams/2023/07";
import { exam202312 } from "../data/exams/2023/07";
import { exam202407 } from "../data/exams/2024/07";
import { exam202412 } from "../data/exams/2024/12"; 
import { exam202507 } from "../data/exams/2025/07";
import { exam202512 } from "../data/exams/2025/07";

// Data manifest - direct import dari TypeScript files
const EXAMS_DATA: Record<string, any> = {
  "2011-07": exam201107,
  "2011-12": exam201112,
  "2012-07": exam201207, 
  "2012-12": exam201212,
  "2013-07": exam201307,
  "2013-12": exam201312,
  "2014-07": exam201407,
  "2014-12": exam201412,
  "2015-07": exam201507, 
  "2015-12": exam201512,
  "2016-07": exam201607,
  "2016-12": exam201612,
  "2017-07": exam201707,
  "2017-12": exam201712,
  "2018-07": exam201807, 
  "2018-12": exam201812,
  "2019-07": exam201907,
  "2019-12": exam201912,
  "2020-07": exam202007,
  "2020-12": exam202012,
  "2021-07": exam202107, 
  "2021-12": exam202112,
  "2022-07": exam202207,
  "2022-12": exam202212,
  "2023-07": exam202307,
  "2023-12": exam202312,
  "2024-07": exam202407, 
  "2024-12": exam202412,
  "2025-07": exam202507,
  "2025-12": exam202512,
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
