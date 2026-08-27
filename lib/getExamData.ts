import { exam201107 } from "../data/exams/2011/07";
import { exam201112 } from "../data/exams/2011/12";
import { exam201207 } from "../data/exams/2012/07";
import { exam201212 } from "../data/exams/2012/12";
import { exam201307 } from "../data/exams/2013/07";
import { exam201312 } from "../data/exams/2013/12";
import { exam201407 } from "../data/exams/2014/07";
import { exam201412 } from "../data/exams/2014/12";
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
import { examN1_241225 } from "../data/exams/n1/2024/12";

// ==========================================================
// CONVERTER: format mondai1-13 (N1) → kanji/bunpou/dokkai
// Supaya kompatibel dengan exam-questions.tsx tanpa ubah UI
// ==========================================================
function convertN1ToStandardFormat(raw: any) {
  // --- KANJI ---
  // 問題1 (読み方) + 問題2 (語彙) + 問題3 (類義語) + 問題4 (用法)
  const kanji = [
    ...(raw.mondai1 || []),
    ...(raw.mondai2 || []),
    ...(raw.mondai3 || []),
    ...(raw.mondai4 || []),
  ];

  // --- BUNPOU ---
  // 問題5 (文法穴埋め) + 問題6 (並べ替え★)
  const bunpou = [
    ...(raw.mondai5 || []),
    ...(raw.mondai6 || []),
  ];

  // --- DOKKAI ---
  // 問題7〜問題13 → semua jadi dokkai sections
  const dokkai: any[] = [];

  // 問題7: 文章読解（1 passage + beberapa soal）
  if (raw.mondai7) {
    dokkai.push({
      title: `問題7 — ${raw.mondai7.title || "文章の文法"}`,
      text: raw.mondai7.text,
      questions: raw.mondai7.questions,
    });
  }

  // 問題8: 短文読解（array of passages）
  if (raw.mondai8) {
    raw.mondai8.forEach((section: any) => {
      dokkai.push({
        title: `問題8 — ${section.title}`,
        text: section.text,
        questions: section.questions,
      });
    });
  }

  // 問題9: 中長文読解（array of passages）
  if (raw.mondai9) {
    raw.mondai9.forEach((section: any) => {
      dokkai.push({
        title: `問題9 — ${section.title}`,
        text: section.text,
        questions: section.questions,
      });
    });
  }

  // 問題10: 長文読解（1 passage + beberapa soal）
  if (raw.mondai10) {
    dokkai.push({
      title: `問題10 — ${raw.mondai10.title || "長文読解"}`,
      text: raw.mondai10.text,
      questions: raw.mondai10.questions,
    });
  }

  // 問題11: AB意見文比較（2 text + soal）
  if (raw.mondai11) {
    // Gabungkan textA + textB jadi satu passage
    const combinedText =
      `【意見 A】\n${raw.mondai11.textA}\n\n【意見 B】\n${raw.mondai11.textB}`;
    dokkai.push({
      title: "問題11 — 統合理解（A・B比較）",
      text: combinedText,
      questions: raw.mondai11.questions,
    });
  }

  // 問題12: 長文読解（1 passage + beberapa soal）
  if (raw.mondai12) {
    dokkai.push({
      title: `問題12 — ${raw.mondai12.title || "長文読解"}`,
      text: raw.mondai12.text,
      questions: raw.mondai12.questions,
    });
  }

  // 問題13: 情報検索（info text + soal）
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
    "2015-12": exam201512,
    "2016-07": exam201607,
    "2016-12": exam201612,
    "2017-07": exam201707,
    "2017-12": exam201712,
    "2018-12": exam201812,
    "2019-07": exam201907,
    "2022-12": exam202212,
  },

  // N1 — data mentah pakai format mondai1-13, akan di-convert saat load
  n1: {
    "2024-12": examN1_241225,
  },

  // Level lain — belum ada data
  n2: {},
  n4: {},
  n5: {},
};

// Level yang pakai format mondai1-13 (bukan kanji/bunpou/dokkai langsung)
const LEVELS_NEED_CONVERT = ["n1"];

// ==========================================================
// FUNGSI UTAMA — dipanggil dari exam-selector.tsx
// ==========================================================
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

  // Kalau level pakai format mondai, convert dulu
  if (LEVELS_NEED_CONVERT.includes(levelKey)) {
    console.log(`Converting ${levelKey.toUpperCase()} mondai format → standard format`);
    return convertN1ToStandardFormat(examData);
  }

  console.log(`Loaded exam data for JLPT ${levelKey.toUpperCase()} - ${key}`);
  return examData;
}
