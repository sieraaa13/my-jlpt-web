// ==========================================================
// BANTUAN MODE LATIHAN: cara baca (読) & arti (訳) per soal
// ==========================================================
// Cara baca ditulis dengan notasi {漢字|かんじ} → ditampilkan sebagai furigana.
// Penanda 【…】 (kata yang ditanya) tetap dipertahankan di teks cara baca.
// Soal dicocokkan lewat nomor soal di awal teks ("41." → 41),
// bacaan dokkai lewat kunci mondai: "7", "8-1", "9-2", "10", "11", "12", "13".

import { bantuanN1_1007 } from "@/data/exams/n1/bantuan/2010-07";
import { bantuanN1_1012 } from "@/data/exams/n1/bantuan/2010-12";
import { bantuanN1_1107 } from "@/data/exams/n1/bantuan/2011-07";
import { bantuanN1_1112 } from "@/data/exams/n1/bantuan/2011-12";
import { bantuanN1_1207 } from "@/data/exams/n1/bantuan/2012-07";
import { bantuanN1_1212 } from "@/data/exams/n1/bantuan/2012-12";
import { bantuanN1_2407 } from "@/data/exams/n1/bantuan/2024-07";
import { bantuanN1_2412 } from "@/data/exams/n1/bantuan/2024-12";

export interface SoalBantuan {
  yomi?: string;              // cara baca kalimat soal (tanpa nomor)
  arti?: string;              // terjemahan kalimat soal
  optYomi?: (string | null)[]; // cara baca tiap pilihan (null = tidak perlu)
  optArti?: (string | null)[]; // arti tiap pilihan
}

export interface BacaanBantuan {
  yomi?: string;
  arti?: string;
}

export interface ExamBantuan {
  soal: Record<number, SoalBantuan>;
  bacaan?: Record<string, BacaanBantuan>;
}

const BANTUAN_BY_LEVEL: Record<string, Record<string, ExamBantuan>> = {
  n1: {
    "2010-07": bantuanN1_1007,
    "2010-12": bantuanN1_1012,
    "2011-07": bantuanN1_1107,
    "2011-12": bantuanN1_1112,
    "2012-07": bantuanN1_1207,
    "2012-12": bantuanN1_1212,
    "2024-07": bantuanN1_2407,
    "2024-12": bantuanN1_2412,
  },
};

export function getExamBantuan(level: string, key: string): ExamBantuan | undefined {
  return BANTUAN_BY_LEVEL[level.toLowerCase()]?.[key];
}

const soalNumber = (q: string) => {
  const m = q.match(/^(\d+)\./);
  return m ? parseInt(m[1], 10) : null;
};

// Tempelkan bantuan ke data ujian yang sudah dalam format standar
// (kanji/bunpou/dokkai). Dokkai butuh `bantuanKey` dari converter N1.
export function applyBantuan(data: any, bantuan: ExamBantuan) {
  const withSoal = (q: any) => {
    const n = soalNumber(q.q);
    const b = n !== null ? bantuan.soal[n] : undefined;
    return b ? { ...q, bantuan: b } : q;
  };
  return {
    ...data,
    kanji: data.kanji.map(withSoal),
    bunpou: data.bunpou.map(withSoal),
    dokkai: data.dokkai.map((d: any) => ({
      ...d,
      bantuan: d.bantuanKey ? bantuan.bacaan?.[d.bantuanKey] : undefined,
      questions: d.questions.map(withSoal),
    })),
  };
}
