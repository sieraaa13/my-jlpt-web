import { convertN1ToStandardFormat, getRawExams } from "@/lib/getExamData";

// ==========================================================
// KATALOG SOAL N1 PER MONDAI
// Memecah 27 ujian N1 (format mondai1-13) menjadi "unit latihan":
// - mondai 1-6  → 1 unit = 1 soal
// - mondai 7-13 → 1 unit = 1 teks bacaan beserta soal-soalnya
// Setiap soal punya key tetap `${periode}:${mondai}:${urutan}` supaya hasil
// latihan dan hasil ujian lengkap bisa digabung di statistik.
// ==========================================================

export type MondaiGroup = "moji" | "bunpou" | "dokkai";

export interface MondaiInfo {
  n: number;
  jp: string;
  name: string; // nama tipe dalam bahasa Indonesia
  group: MondaiGroup;
  passage: boolean; // true = berbasis teks bacaan
  targetSec: number; // target waktu per unit (per soal / per teks)
  counts: number[]; // pilihan jumlah unit per sesi latihan
  tip: string;
}

export const MONDAI: MondaiInfo[] = [
  { n: 1, jp: "漢字読み", name: "Cara baca kanji", group: "moji", passage: false, targetSec: 20, counts: [10, 20, 30], tip: "Jawab cepat. Bagian ini untuk menghemat waktu buat dokkai." },
  { n: 2, jp: "文脈規定", name: "Kosakata sesuai konteks", group: "moji", passage: false, targetSec: 30, counts: [10, 20, 30], tip: "Baca kalimat utuh dulu, tebak katanya, baru lihat pilihan." },
  { n: 3, jp: "言い換え類義", name: "Sinonim / parafrase", group: "moji", passage: false, targetSec: 30, counts: [10, 20, 30], tip: "Cari pilihan yang artinya sama walau nuansanya lebih sederhana." },
  { n: 4, jp: "用法", name: "Penggunaan kata", group: "moji", passage: false, targetSec: 60, counts: [10, 20, 30], tip: "Cek kolokasi: kata itu biasa dipakai dengan kata apa?" },
  { n: 5, jp: "文法形式の判断", name: "Bentuk grammar", group: "bunpou", passage: false, targetSec: 45, counts: [10, 20, 30], tip: "Perhatikan kata sebelum dan sesudah kurung: bentuk sambungnya sering jadi kunci." },
  { n: 6, jp: "文の組み立て", name: "Menyusun kalimat (★)", group: "bunpou", passage: false, targetSec: 60, counts: [10, 20, 30], tip: "Pasangkan dulu 2 potongan yang pasti nyambung, baru susun sisanya." },
  { n: 7, jp: "文章の文法", name: "Grammar dalam teks", group: "bunpou", passage: true, targetSec: 360, counts: [1, 3, 5], tip: "Lihat hubungan dengan kalimat sebelum dan sesudah tiap nomor kosong." },
  { n: 8, jp: "内容理解（短文）", name: "Teks pendek", group: "dokkai", passage: true, targetSec: 150, counts: [3, 5, 10], tip: "Kalimat inti biasanya di akhir teks." },
  { n: 9, jp: "内容理解（中文）", name: "Teks sedang", group: "dokkai", passage: true, targetSec: 360, counts: [1, 3, 5], tip: "Soal biasanya berurutan mengikuti paragraf." },
  { n: 10, jp: "内容理解（長文）", name: "Teks panjang", group: "dokkai", passage: true, targetSec: 720, counts: [1, 2, 3], tip: "Baca pertanyaan dulu, lalu tandai paragraf yang relevan." },
  { n: 11, jp: "統合理解", name: "Bandingkan teks A & B", group: "dokkai", passage: true, targetSec: 420, counts: [1, 3, 5], tip: "Catat posisi A dan B (setuju/beda) sebelum melihat pilihan." },
  { n: 12, jp: "主張理解（長文）", name: "Opini penulis", group: "dokkai", passage: true, targetSec: 600, counts: [1, 2, 3], tip: "Cari 筆者の主張. 「確かに〜が」 dan 「〜と言われている」 bukan pendapat penulis." },
  { n: 13, jp: "情報検索", name: "Cari informasi", group: "dokkai", passage: true, targetSec: 360, counts: [1, 3, 5], tip: "Jangan baca semua. Baca syarat di soal, lalu scan bagian yang cocok." },
];

export const GROUPS: { id: MondaiGroup; jp: string; name: string }[] = [
  { id: "moji", jp: "文字・語彙", name: "Kanji & Kosakata" },
  { id: "bunpou", jp: "文法", name: "Bunpou" },
  { id: "dokkai", jp: "読解", name: "Dokkai" },
];

export const getMondai = (n: number) => MONDAI.find((m) => m.n === n)!;

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

interface Catalog {
  units: Record<number, PracticeUnit[]>;
  // key jawaban di exam_history.answers (mis. "kanji-3", "dokkai-問題8 — …-0") → key soal
  examKeys: Record<string, Record<string, string>>;
  periods: string[];
}

let cache: Catalog | null = null;

export function getN1Catalog(): Catalog {
  if (cache) return cache;
  const raws = getRawExams("n1");
  const periods = Object.keys(raws).sort();
  const units: Record<number, PracticeUnit[]> = {};
  const examKeys: Record<string, Record<string, string>> = {};
  MONDAI.forEach((m) => (units[m.n] = []));

  for (const period of periods) {
    const raw = raws[period];
    const keyOf = new Map<object, string>();

    for (const m of MONDAI) {
      const val = raw[`mondai${m.n}`];
      if (!val) continue;
      let qi = 0;
      const toQ = (q: any): PracticeQuestion => {
        const key = `${period}:${m.n}:${qi++}`;
        keyOf.set(q, key);
        return { key, q: q.q, options: q.options, correct: q.correct };
      };

      if (!m.passage) {
        (val as any[]).forEach((q) => {
          const pq = toQ(q);
          units[m.n].push({ id: pq.key, period, mondai: m.n, questions: [pq] });
        });
      } else {
        const sections: any[] = Array.isArray(val) ? val : [val];
        sections.forEach((s, pi) => {
          units[m.n].push({
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
    examKeys[period] = map;
  }

  cache = { units, examKeys, periods };
  return cache;
}

export const mondaiOfKey = (key: string) => parseInt(key.split(":")[1], 10);
