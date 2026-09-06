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
import { exam201812 } from "../data/exams/2018/12";
import { exam201907 } from "../data/exams/2019/07";
import { exam202212 } from "../data/exams/2022/12";

// ============ IMPORT CHOUKAI DATA ============
import { exam201107_choukai } from "../data/exams/2011/choukai/07";

// ============ IMPORT N1 DATA ============
import { examN1_1007 } from "../data/exams/n1/2010/07";
import { examN1_1012 } from "../data/exams/n1/2010/12";
import { examN1_1107 } from "../data/exams/n1/2011/07";
import { examN1_1112 } from "../data/exams/n1/2011/12";
import { examN1_1207 } from "../data/exams/n1/2012/07";
import { examN1_1212 } from "../data/exams/n1/2012/12";
import { examN1_1307 } from "../data/exams/n1/2013/07";
import { examN1_1312 } from "../data/exams/n1/2013/12";
import { examN1_1407 } from "../data/exams/n1/2014/07";
import { examN1_1412 } from "../data/exams/n1/2014/12";
import { examN1_1507 } from "../data/exams/n1/2015/07";
import { examN1_1512 } from "../data/exams/n1/2015/12";
import { examN1_1607 } from "../data/exams/n1/2016/07";
import { examN1_1612 } from "../data/exams/n1/2016/12";
import { examN1_1707 } from "../data/exams/n1/2017/07";
import { examN1_1712 } from "../data/exams/n1/2017/12";
import { examN1_1807 } from "../data/exams/n1/2018/07";
import { examN1_1812 } from "../data/exams/n1/2018/12";
import { examN1_2212 } from "../data/exams/n1/2022/12";
import { examN1_2307 } from "../data/exams/n1/2023/07";
import { examN1_2312 } from "../data/exams/n1/2023/12";
import { examN1_2407 } from "../data/exams/n1/2024/07";
import { examN1_241225 } from "../data/exams/n1/2024/12";

// ==========================================================
// CONVERTER: format mondai1-13 (N1) → kanji/bunpou/dokkai
// Supaya kompatibel dengan exam-questions.tsx tanpa ubah UI
// ==========================================================
function convertN1ToStandardFormat(raw: any) {
  const kanji = [
    ...(raw.mondai1 || []),
    ...(raw.mondai2 || []),
    ...(raw.mondai3 || []),
    ...(raw.mondai4 || []),
  ];

  const bunpou = [
    ...(raw.mondai5 || []),
    ...(raw.mondai6 || []),
  ];

  const dokkai: any[] = [];

  if (raw.mondai7) {
    dokkai.push({
      title: `問題7 — ${raw.mondai7.title || "文章の文法"}`,
      text: raw.mondai7.text,
      questions: raw.mondai7.questions,
    });
  }

  if (raw.mondai8) {
    raw.mondai8.forEach((section: any) => {
      dokkai.push({
        title: `問題8 — ${section.title}`,
        text: section.text,
        questions: section.questions,
      });
    });
  }

  if (raw.mondai9) {
    raw.mondai9.forEach((section: any) => {
      dokkai.push({
        title: `問題9 — ${section.title}`,
        text: section.text,
        questions: section.questions,
      });
    });
  }

  if (raw.mondai10) {
    dokkai.push({
      title: `問題10 — ${raw.mondai10.title || "長文読解"}`,
      text: raw.mondai10.text,
      questions: raw.mondai10.questions,
    });
  }

  if (raw.mondai11) {
    const combinedText =
      `【意見 A】\n${raw.mondai11.textA}\n\n【意見 B】\n${raw.mondai11.textB}`;
    dokkai.push({
      title: "問題11 — 統合理解（A・B比較）",
      text: combinedText,
      questions: raw.mondai11.questions,
    });
  }

  if (raw.mondai12) {
    dokkai.push({
      title: `問題12 — ${raw.mondai12.title || "長文読解"}`,
      text: raw.mondai12.text,
      questions: raw.mondai12.questions,
    });
  }

  if (raw.mondai13) {
    dokkai.push({
      title: `問題13 — ${raw.mondai13.title || "情報検索"}`,
      text: raw.mondai13.info || raw.mondai13.text || "",
      questions: raw.mondai13.questions,
    });
  }

  return { kanji, bunpou, dokkai };
}

// ==========================================================
// DATA REGISTRY — semua exam data terdaftar di sini
// ==========================================================
const EXAMS_DATA_BY_LEVEL: Record<string, Record<string, any>> = {
  n3: {
    "2011-07": {
      ...exam201107,
      choukai: exam201107_choukai.choukai,
    },
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
    "2018-12": exam201812,
    "2019-07": exam201907,
    "2022-12": exam202212,
  },

  n1: {
    "2010-07": examN1_1007,
    "2010-12": examN1_1012,
    "2011-07": examN1_1107,
    "2011-12": examN1_1112,
    "2012-07": examN1_1207,
    "2012-12": examN1_1212,
    "2013-07": examN1_1307,
    "2013-12": examN1_1312,
    "2014-07": examN1_1407,
    "2014-12": examN1_1412,
    "2015-07": examN1_1507,
    "2015-12": examN1_1512,
    "2016-07": examN1_1607,
    "2016-12": examN1_1612,
    "2017-07": examN1_1707,
    "2017-12": examN1_1712,
    "2018-07": examN1_1807,
    "2018-12": examN1_1812,
    "2022-12": examN1_2212,
    "2023-07": examN1_2307,
    "2023-12": examN1_2312,
    "2024-07": examN1_2407,
    "2024-12": examN1_241225,
  },

  n2: {},
  n4: {},
  n5: {},
};

const LEVELS_NEED_CONVERT = ["n1"];

export async function getExamData(
  year: string,
  period: string,
  level?: string
): Promise<any> {
  const levelKey = (level || "n3").toLowerCase();
  const key = `${year}-${period}`;

  const levelData = EXAMS_DATA_BY_LEVEL[levelKey];

  if (!levelData) {
    console.error(`Level ${levelKey.toUpperCase()} tidak ditemukan dalam database`);
    return null;
  }

  const examData = levelData[key];

  if (!examData) {
    console.error(
      `Exam data tidak ditemukan untuk JLPT ${levelKey.toUpperCase()} - ${key}`
    );
    return null;
  }

  if (LEVELS_NEED_CONVERT.includes(levelKey)) {
    console.log(`Converting ${levelKey.toUpperCase()} mondai format → standard format`);
    return convertN1ToStandardFormat(examData);
  }

  console.log(`Loaded exam data for JLPT ${levelKey.toUpperCase()} - ${key}`);
  return examData;
}

// ==========================================================
// HELPER: daftar periode yang tersedia untuk satu level
// Berguna untuk dropdown/selector supaya otomatis update
// tanpa perlu edit komponen tiap kali data baru ditambahkan
// ==========================================================
export function getAvailablePeriods(level: string): string[] {
  const levelData = EXAMS_DATA_BY_LEVEL[level.toLowerCase()];
  if (!levelData) return [];
  return Object.keys(levelData).sort((a, b) => b.localeCompare(a));
}

// ==========================================================
// HELPER: judul kustom (kalau ada) untuk satu slot ujian, dibaca
// langsung (tanpa async) supaya UI pemilihan periode bisa menampilkan
// badge "Latihan" SEBELUM soal benar-benar dimuat, untuk paket soal
// orisinal yang mengisi slot tahun/periode tertentu (bukan soal ujian
// resmi JLPT).
// ==========================================================
export function getExamLabel(level: string, year: string, period: string): string | undefined {
  const levelData = EXAMS_DATA_BY_LEVEL[level.toLowerCase()];
  return levelData?.[`${year}-${period}`]?.label;
}

export function getAvailableLevels(): string[] {
  return Object.keys(EXAMS_DATA_BY_LEVEL).filter(
    (level) => Object.keys(EXAMS_DATA_BY_LEVEL[level]).length > 0
  );
}
