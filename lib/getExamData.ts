import { exam201107 } from "../data/exams/2011/07";
import { exam201112 } from "../data/exams/2011/12";
import { exam201207 } from "../data/exams/2012/07";
import { exam201212 } from "../data/exams/2012/12";
import { exam201307 } from "../data/exams/2013/07";
import { exam201312 } from "../data/exams/2013/12";
import { exam201407 } from "../data/exams/2014/07";
import { exam201412 } from "../data/exams/2014/12";
import { exam201507 } from "../data/exams/2015/07";
import { exam201512 } from "../data/exams/2015/12";
import { exam201607 } from "../data/exams/2016/07";
import { exam201612 } from "../data/exams/2016/12";
import { exam201707 } from "../data/exams/2017/07";
import { exam201712 } from "../data/exams/2017/12";
import { exam201807 } from "../data/exams/2018/07";
import { exam201812 } from "../data/exams/2018/12";
import { exam201907 } from "../data/exams/2019/07";
import { exam201912 } from "../data/exams/2019/12";
import { exam202207 } from "../data/exams/2022/07";
import { exam202212 } from "../data/exams/2022/12";

// Data exam dipisah per level
// N3 punya banyak data, level lain belum tersedia
const EXAMS_DATA_BY_LEVEL: Record<string, Record<string, any>> = {
  n3: {
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
    "2022-07": exam202207,
    "2022-12": exam202212,
    // Tahun 2020, 2021, 2023, 2024, 2025 - belum ada data
  },
  
  // N1 - Belum ada data
  n1: {},
  
  // N2 - Belum ada data
  n2: {},
  
  // N4 - Belum ada data
  n4: {},
  
  // N5 - Belum ada data
  n5: {},
};

export async function getExamData(
  year: string,
  period: string,
  level?: string
): Promise<any> {
  const levelKey = (level || "n3").toLowerCase();
  const key = `${year}-${period}`;

  // Cek apakah level ada di data
  const levelData = EXAMS_DATA_BY_LEVEL[levelKey];

  if (!levelData) {
    console.error(`Level ${levelKey.toUpperCase()} tidak ditemukan dalam database`);
    return null;
  }

  // Cek apakah data untuk year-period tersedia
  const examData = levelData[key];

  if (!examData) {
    console.error(
      `Exam data tidak ditemukan untuk JLPT ${levelKey.toUpperCase()} - ${key}`
    );
    return null;
  }

  console.log(`Loaded exam data for JLPT ${levelKey.toUpperCase()} - ${key}`);
  return examData;
}
