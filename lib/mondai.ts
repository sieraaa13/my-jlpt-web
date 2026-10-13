import { convertN1ToStandardFormat, getRawExams } from "@/lib/getExamData";
import { iikaeWords as iikaeN1 } from "@/data/n1/iikae-words";
import { youhouWords as youhouN1 } from "@/data/n1/youhou-words";
import { iikaeWords as iikaeN3 } from "@/data/n3/iikae-words";
import { youhouWords as youhouN3 } from "@/data/n3/youhou-words";

// ==========================================================
// KATALOG SOAL PER MONDAI (N1 & N3)
// Memecah semua ujian satu level menjadi "unit latihan":
// - mondai soal pendek → 1 unit = 1 soal
// - mondai bacaan      → 1 unit = 1 teks bacaan beserta soal-soalnya
// Setiap soal punya key tetap `${periode}:${mondai}:${urutan}` supaya hasil
// latihan dan hasil ujian lengkap bisa digabung di statistik.
// ==========================================================

export type Level = "n1" | "n3";
export type MondaiGroup = "moji" | "bunpou" | "dokkai";
export type WordDict = Record<string, { r?: string; m: string }>;

export interface MondaiInfo {
  n: number; // id internal, unik per level (dipakai di key soal & database)
  label: string; // nomor resmi di lembar soal, mis. "問題3"
  jp: string;
  name: string; // nama tipe dalam bahasa Indonesia
  group: MondaiGroup;
  passage: boolean; // true = berbasis teks bacaan
  targetSec: number; // target waktu per unit (per soal / per teks)
  counts: number[]; // pilihan jumlah unit per sesi latihan
  tip: string;
  underline?: boolean; // kata di 【】 ditampilkan bergaris bawah
  iikae?: WordDict; // 言い換え: cara baca & arti kata bergaris bawah
  youhou?: WordDict; // 用法: cara baca & arti kata yang diuji
}

// N1: nomor 問題 berurutan 1-13 di seluruh lembar soal
const MONDAI_N1: MondaiInfo[] = [
  { n: 1, label: "問題1", jp: "漢字読み", name: "Cara baca kanji", group: "moji", passage: false, targetSec: 20, counts: [10, 20, 30], tip: "Jawab cepat. Bagian ini untuk menghemat waktu buat dokkai.", underline: true },
  { n: 2, label: "問題2", jp: "文脈規定", name: "Kosakata sesuai konteks", group: "moji", passage: false, targetSec: 30, counts: [10, 20, 30], tip: "Baca kalimat utuh dulu, tebak katanya, baru lihat pilihan." },
  { n: 3, label: "問題3", jp: "言い換え類義", name: "Sinonim / parafrase", group: "moji", passage: false, targetSec: 30, counts: [10, 20, 30], tip: "Cari pilihan yang artinya sama walau nuansanya lebih sederhana.", underline: true, iikae: iikaeN1 },
  { n: 4, label: "問題4", jp: "用法", name: "Penggunaan kata", group: "moji", passage: false, targetSec: 60, counts: [10, 20, 30], tip: "Cek kolokasi: kata itu biasa dipakai dengan kata apa?", youhou: youhouN1 },
  { n: 5, label: "問題5", jp: "文法形式の判断", name: "Bentuk grammar", group: "bunpou", passage: false, targetSec: 45, counts: [10, 20, 30], tip: "Perhatikan kata sebelum dan sesudah kurung: bentuk sambungnya sering jadi kunci." },
  { n: 6, label: "問題6", jp: "文の組み立て", name: "Menyusun kalimat (★)", group: "bunpou", passage: false, targetSec: 60, counts: [10, 20, 30], tip: "Pasangkan dulu 2 potongan yang pasti nyambung, baru susun sisanya." },
  { n: 7, label: "問題7", jp: "文章の文法", name: "Grammar dalam teks", group: "bunpou", passage: true, targetSec: 360, counts: [1, 3, 5], tip: "Lihat hubungan dengan kalimat sebelum dan sesudah tiap nomor kosong." },
  { n: 8, label: "問題8", jp: "内容理解（短文）", name: "Teks pendek", group: "dokkai", passage: true, targetSec: 150, counts: [3, 5, 10], tip: "Kalimat inti biasanya di akhir teks." },
  { n: 9, label: "問題9", jp: "内容理解（中文）", name: "Teks sedang", group: "dokkai", passage: true, targetSec: 360, counts: [1, 3, 5], tip: "Soal biasanya berurutan mengikuti paragraf." },
  { n: 10, label: "問題10", jp: "内容理解（長文）", name: "Teks panjang", group: "dokkai", passage: true, targetSec: 720, counts: [1, 2, 3], tip: "Baca pertanyaan dulu, lalu tandai paragraf yang relevan." },
  { n: 11, label: "問題11", jp: "統合理解", name: "Bandingkan teks A & B", group: "dokkai", passage: true, targetSec: 420, counts: [1, 3, 5], tip: "Catat posisi A dan B (setuju/beda) sebelum melihat pilihan." },
  { n: 12, label: "問題12", jp: "主張理解（長文）", name: "Opini penulis", group: "dokkai", passage: true, targetSec: 600, counts: [1, 2, 3], tip: "Cari 筆者の主張. 「確かに〜が」 dan 「〜と言われている」 bukan pendapat penulis." },
  { n: 13, label: "問題13", jp: "情報検索", name: "Cari informasi", group: "dokkai", passage: true, targetSec: 360, counts: [1, 3, 5], tip: "Jangan baca semua. Baca syarat di soal, lalu scan bagian yang cocok." },
];

// N3: nomor 問題 mulai lagi dari 1 di lembar 文字・語彙 dan di lembar 文法・読解,
// jadi id internal (n) dibuat berurutan 1-12 dan nomor resminya ada di `label`
const MONDAI_N3: MondaiInfo[] = [
  { n: 1, label: "問題1", jp: "漢字読み", name: "Cara baca kanji", group: "moji", passage: false, targetSec: 20, counts: [10, 20, 30], tip: "Hati-hati bunyi panjang (う), dakuten, dan っ kecil.", underline: true },
  { n: 2, label: "問題2", jp: "表記", name: "Penulisan kanji", group: "moji", passage: false, targetSec: 20, counts: [10, 20, 30], tip: "Pilihan biasanya beda satu bagian kanji. Ingat kata lain yang memakai kanji yang sama.", underline: true },
  { n: 3, label: "問題3", jp: "文脈規定", name: "Kosakata sesuai konteks", group: "moji", passage: false, targetSec: 30, counts: [10, 20, 30], tip: "Baca kalimat utuh dulu, tebak katanya, baru lihat pilihan." },
  { n: 4, label: "問題4", jp: "言い換え類義", name: "Sinonim / parafrase", group: "moji", passage: false, targetSec: 30, counts: [10, 20, 30], tip: "Cari pilihan yang artinya sama walau kata-katanya lebih sederhana.", underline: true, iikae: iikaeN3 },
  { n: 5, label: "問題5", jp: "用法", name: "Penggunaan kata", group: "moji", passage: false, targetSec: 45, counts: [10, 20, 30], tip: "Ganti kata itu dengan bahasa Indonesia di tiap kalimat. Yang janggal pasti salah.", youhou: youhouN3 },
  { n: 6, label: "問題1", jp: "文法形式の判断", name: "Bentuk grammar", group: "bunpou", passage: false, targetSec: 30, counts: [10, 20, 30], tip: "Perhatikan kata sebelum dan sesudah kurung: bentuk sambungnya sering jadi kunci." },
  { n: 7, label: "問題2", jp: "文の組み立て", name: "Menyusun kalimat (★)", group: "bunpou", passage: false, targetSec: 60, counts: [10, 20, 30], tip: "Pasangkan dulu 2 potongan yang pasti nyambung, baru susun sisanya." },
  { n: 8, label: "問題3", jp: "文章の文法", name: "Grammar dalam teks", group: "bunpou", passage: true, targetSec: 300, counts: [1, 3, 5], tip: "Lihat hubungan dengan kalimat sebelum dan sesudah tiap nomor kosong." },
  { n: 9, label: "問題4", jp: "内容理解（短文）", name: "Teks pendek", group: "dokkai", passage: true, targetSec: 120, counts: [3, 5, 10], tip: "Baca pertanyaannya dulu, lalu cari kalimat yang menjawabnya." },
  { n: 10, label: "問題5", jp: "内容理解（中文）", name: "Teks sedang", group: "dokkai", passage: true, targetSec: 300, counts: [1, 3, 5], tip: "Soal biasanya berurutan mengikuti paragraf." },
  { n: 11, label: "問題6", jp: "内容理解（長文）", name: "Teks panjang", group: "dokkai", passage: true, targetSec: 420, counts: [1, 2, 3], tip: "Soal terakhir biasanya tentang ide utama, cek paragraf terakhir." },
  { n: 12, label: "問題7", jp: "情報検索", name: "Cari informasi", group: "dokkai", passage: true, targetSec: 300, counts: [1, 3, 5], tip: "Jangan baca semua. Baca syarat di soal, lalu scan bagian yang cocok." },
];

const MONDAI_BY_LEVEL: Record<Level, MondaiInfo[]> = { n1: MONDAI_N1, n3: MONDAI_N3 };

export const getMondaiList = (level: Level) => MONDAI_BY_LEVEL[level];
export const getMondai = (level: Level, n: number) => MONDAI_BY_LEVEL[level].find((m) => m.n === n)!;

export const GROUPS: { id: MondaiGroup; jp: string; name: string }[] = [
  { id: "moji", jp: "文字・語彙", name: "Kanji & Kosakata" },
  { id: "bunpou", jp: "文法", name: "Bunpou" },
  { id: "dokkai", jp: "読解", name: "Dokkai" },
];

export interface PracticeQuestion {
  key: string;
  q: string;
  options: string[];
  correct: number;
}

export interface PracticeUnit {
  id: string;
  period: string; // "2010-07"
  mondai: number;
  title?: string;
  text?: string;
  textA?: string;
  textB?: string;
  questions: PracticeQuestion[];
}

export function periodLabel(period: string) {
  const [y, m] = period.split("-");
  return `${m === "07" ? "Juli" : "Desember"} ${y}`;
}

export interface Catalog {
  units: Record<number, PracticeUnit[]>;
  // key jawaban di exam_history.answers (mis. "kanji-3", "dokkai-問題8 — …-0") → key soal
  examKeys: Record<string, Record<string, string>>;
  periods: string[];
}

const cache: Partial<Record<Level, Catalog>> = {};

export function getCatalog(level: Level): Catalog {
  return (cache[level] ??= level === "n1" ? buildN1Catalog() : buildN3Catalog());
}

function emptyCatalog(level: Level, periods: string[]): Catalog {
  const units: Record<number, PracticeUnit[]> = {};
  getMondaiList(level).forEach((m) => (units[m.n] = []));
  return { units, examKeys: {}, periods };
}

// Pemberi key soal untuk satu periode: nomor urut per mondai
function keyMaker(period: string) {
  const next: Record<number, number> = {};
  return (mondai: number, q: any): PracticeQuestion => {
    const i = (next[mondai] = (next[mondai] ?? -1) + 1);
    return { key: `${period}:${mondai}:${i}`, q: q.q, options: q.options, correct: q.correct };
  };
}

function buildN1Catalog(): Catalog {
  const raws = getRawExams("n1");
  const cat = emptyCatalog("n1", Object.keys(raws).sort());

  for (const period of cat.periods) {
    const raw = raws[period];
    const keyOf = new Map<object, string>();
    const makeQ = keyMaker(period);

    for (const m of MONDAI_N1) {
      const val = raw[`mondai${m.n}`];
      if (!val) continue;
      const toQ = (q: any) => {
        const pq = makeQ(m.n, q);
        keyOf.set(q, pq.key);
        return pq;
      };

      if (!m.passage) {
        (val as any[]).forEach((q) => {
          const pq = toQ(q);
          cat.units[m.n].push({ id: pq.key, period, mondai: m.n, questions: [pq] });
        });
      } else {
        const sections: any[] = Array.isArray(val) ? val : [val];
        sections.forEach((s, pi) => {
          cat.units[m.n].push({
            id: `${period}:${m.n}:p${pi}`,
            period,
            mondai: m.n,
            title: s.title,
            text: s.info ?? s.text,
            textA: s.textA,
            textB: s.textB,
            questions: s.questions.map(toQ),
          });
        });
      }
    }

    // Petakan key jawaban ujian lengkap lewat converter yang sama dengan
    // halaman ujian (converter memakai ulang objek soal yang sama).
    const conv = convertN1ToStandardFormat(raw);
    const map: Record<string, string> = {};
    conv.kanji.forEach((q: any, i: number) => keyOf.has(q) && (map[`kanji-${i}`] = keyOf.get(q)!));
    conv.bunpou.forEach((q: any, i: number) => keyOf.has(q) && (map[`bunpou-${i}`] = keyOf.get(q)!));
    conv.dokkai.forEach((d: any) =>
      d.questions.forEach((q: any, i: number) => keyOf.has(q) && (map[`dokkai-${d.title}-${i}`] = keyOf.get(q)!))
    );
    cat.examKeys[period] = map;
  }
  return cat;
}

// ── N3 ──────────────────────────────────────────────────────
// Data N3 sudah dalam format ujian (kanji/bunpou/dokkai), jadi mondai
// ditentukan dari posisi soal. Lembar 文字・語彙 selalu 35 soal:
// 1-8 漢字読み, 9-14 表記, 15-25 文脈規定, 26-30 言い換え, 31-35 用法.
const N3_MOJI: [number, number][] = [[8, 1], [14, 2], [25, 3], [30, 4], [35, 5]];

// Judul dokkai N3 tidak seragam antar periode ("問題 6 (…)", "問題 6 - …"),
// jadi mondai bacaan ditentukan dari nomor soal pertamanya. Nomor 19 ke atas:
// 文章の文法 (G soal), lalu 4 teks pendek, 6 soal teks sedang, 4 soal teks
// panjang, sisanya 情報検索. G = 4 di periode baru (2022-), 5 sebelumnya.
function n3DokkaiMondai(first: number, g: number) {
  if (first < 19 + g) return 8;
  if (first < 23 + g) return 9;
  if (first < 29 + g) return 10;
  if (first < 33 + g) return 11;
  return 12;
}

const N3_TITLE_MONDAI: Record<string, number> = { "3": 8, "4": 9, "5": 10, "6": 11, "7": 12 };

const qNumber = (q: any) => {
  const m = String(q.q).match(/^(\d+)\./);
  return m ? parseInt(m[1], 10) : null;
};

// "問題 6 (お菓子の箱)" → "お菓子の箱", "問題 4 (1)" / "問題 1" / "問題 6 (Panjang)" → tanpa judul
export function cleanN3Title(title: string): string | undefined {
  const t = title
    .replace(/^問題\s*\d+\s*/, "")
    .replace(/^[-—]\s*[\d-]*\s*/, "")
    .replace(/^\((.*)\)$/, "$1")
    .replace(/^文章の文法（(.*)）$/, "$1")
    .trim();
  return t && !/^(\d+|Panjang|Tatabahasa dalam Teks|Informasi Visual)$/.test(t) ? t : undefined;
}

function buildN3Catalog(): Catalog {
  const raws = getRawExams("n3");
  const cat = emptyCatalog("n3", Object.keys(raws).sort());

  for (const period of cat.periods) {
    const raw = raws[period];
    const makeQ = keyMaker(period);
    const map: Record<string, string> = {};

    (raw.kanji ?? []).forEach((q: any, i: number) => {
      const mondai = N3_MOJI.find(([last]) => i < last)?.[1];
      if (!mondai) return;
      const pq = makeQ(mondai, q);
      cat.units[mondai].push({ id: pq.key, period, mondai, questions: [pq] });
      map[`kanji-${i}`] = pq.key;
    });

    // 1-13 文法形式, 14-18 文の組み立て. 文章の文法 (19-) ada di dokkai bersama
    // teksnya; soal 19+ di array bunpou (tanpa teks) tidak dipakai latihan.
    (raw.bunpou ?? []).forEach((q: any, i: number) => {
      if (i >= 18) return;
      const mondai = i < 13 ? 6 : 7;
      const pq = makeQ(mondai, q);
      cat.units[mondai].push({ id: pq.key, period, mondai, questions: [pq] });
      map[`bunpou-${i}`] = pq.key;
    });

    const dokkai: any[] = raw.dokkai ?? [];
    const grammar = dokkai.find((d) => qNumber(d.questions[0]) === 19 || /文章の文法/.test(d.title));
    const g = grammar ? grammar.questions.length : 5;
    dokkai.forEach((d, pi) => {
      // Teks yang cuma placeholder (lembar info 情報検索 belum ditranskrip) dilewati
      if ((d.text ?? "").length < 60) return;
      const first = qNumber(d.questions[0]);
      const mondai = first !== null ? n3DokkaiMondai(first, g) : N3_TITLE_MONDAI[d.title.match(/^問題\s*(\d)/)?.[1] ?? ""];
      if (!mondai) return;
      const questions = d.questions.map((q: any, i: number) => {
        const pq = makeQ(mondai, q);
        map[`dokkai-${d.title}-${i}`] = pq.key;
        return pq;
      });
      cat.units[mondai].push({ id: `${period}:${mondai}:p${pi}`, period, mondai, title: cleanN3Title(d.title), text: d.text, questions });
    });

    cat.examKeys[period] = map;
  }
  return cat;
}

export const mondaiOfKey = (key: string) => parseInt(key.split(":")[1], 10);
