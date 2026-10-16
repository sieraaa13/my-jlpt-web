import { getRawExams } from "@/lib/getExamData";
import { bunmyakuWords } from "@/data/n1/bunmyaku-words";
import { iikaeWords } from "@/data/n1/iikae-words";
import { youhouWords } from "@/data/n1/youhou-words";

// ==========================================================
// RANGKUMAN KOSAKATA MONDAI 2-4 DARI SEMUA UJIAN N1
// 問題2 文脈規定 → jawaban benar yang mengisi （　）
// 問題3 言い換え類義 → kata di 【】 beserta padanannya
// 問題4 用法 → kata yang diuji beserta kalimat yang benar
// Diambil langsung dari data/exams/n1; cara baca & arti dari kamus per mondai.
// Kata yang sama di mondai yang sama digabung jadi satu entri.
// ==========================================================

export type GoiMondai = 2 | 3 | 4;

export const GOI_MONDAI: { n: GoiMondai; label: string; jp: string }[] = [
  { n: 2, label: "問題2", jp: "文脈規定" },
  { n: 3, label: "問題3", jp: "言い換え類義" },
  { n: 4, label: "問題4", jp: "用法" },
];

export interface GoiOccurrence {
  period: string; // "2015-07"
  no: number;
  sentence: string; // kalimat contoh yang benar (kata target sudah terisi)
  answer?: string; // 問題3: padanan yang benar
  distractors: string[]; // 問題2 & 3: pilihan yang salah
}

export interface GoiWord {
  mondai: GoiMondai;
  word: string;
  reading?: string;
  meaning?: string;
  occurrences: GoiOccurrence[]; // urut dari ujian terbaru
}

const DICT = { 2: bunmyakuWords, 3: iikaeWords, 4: youhouWords } as const;

const splitNo = (q: string) => {
  const m = q.match(/^\s*(\d+)\.\s*([\s\S]*)$/);
  return m ? { no: Number(m[1]), rest: m[2].trim() } : null;
};

const others = (options: string[], correct: number) => options.filter((_, i) => i !== correct);

export function getGoiWordsN1(): GoiWord[] {
  const exams = getRawExams("n1");
  const byKey = new Map<string, GoiWord>();

  const add = (mondai: GoiMondai, word: string, occ: GoiOccurrence) => {
    const key = `${mondai}|${word}`;
    let entry = byKey.get(key);
    if (!entry) {
      const d = DICT[mondai][word];
      entry = { mondai, word, reading: d?.r, meaning: d?.m, occurrences: [] };
      byKey.set(key, entry);
    }
    entry.occurrences.push(occ);
  };

  for (const period of Object.keys(exams).sort((a, b) => b.localeCompare(a))) {
    const exam = exams[period];

    for (const item of exam?.mondai2 ?? []) {
      const p = splitNo(item.q);
      const word = item.options?.[item.correct];
      if (!p || !word) continue;
      add(2, word, {
        period,
        no: p.no,
        sentence: p.rest.replace(/（\s*）/, word),
        distractors: others(item.options, item.correct),
      });
    }

    for (const item of exam?.mondai3 ?? []) {
      const p = splitNo(item.q);
      const m = p?.rest.match(/^(.*?)【(.+?)】(.*)$/);
      if (!p || !m) continue;
      add(3, m[2], {
        period,
        no: p.no,
        sentence: m[1] + m[2] + m[3],
        answer: item.options[item.correct],
        distractors: others(item.options, item.correct),
      });
    }

    for (const item of exam?.mondai4 ?? []) {
      const p = splitNo(item.q);
      if (!p) continue;
      const word = p.rest.replace(/[【】]/g, "").trim();
      add(4, word, { period, no: p.no, sentence: item.options[item.correct], distractors: [] });
    }
  }

  return [...byKey.values()];
}
