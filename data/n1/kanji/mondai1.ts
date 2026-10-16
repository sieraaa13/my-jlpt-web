import { getRawExams } from "@/lib/getExamData";

// ==========================================================
// RANGKUMAN KANJI MONDAI 1 (漢字読み) DARI SEMUA UJIAN N1
// Diambil langsung dari data/exams/n1, jadi kalau soal dikoreksi,
// rangkuman ini ikut ter-update. Kata yang sama (kata + bacaan sama)
// digabung jadi satu entri dengan daftar kemunculannya.
// ==========================================================

export interface Mondai1Occurrence {
  period: string; // "2015-07"
  no: number; // nomor soal di lembar ujian
  before: string; // kalimat sebelum kata target
  after: string; // kalimat sesudah kata target
  distractors: string[]; // pilihan bacaan yang salah
}

export interface Mondai1Word {
  word: string;
  reading: string;
  occurrences: Mondai1Occurrence[]; // urut dari ujian terbaru
}

function parseQuestion(q: string) {
  const m = q.match(/^\s*(\d+)\.\s*(.*?)【(.+?)】(.*)$/);
  if (!m) return null;
  return { no: Number(m[1]), before: m[2], word: m[3], after: m[4] };
}

export function getMondai1WordsN1(): Mondai1Word[] {
  const exams = getRawExams("n1");
  const byKey = new Map<string, Mondai1Word>();

  for (const period of Object.keys(exams).sort((a, b) => b.localeCompare(a))) {
    for (const item of exams[period]?.mondai1 ?? []) {
      const parsed = parseQuestion(item.q);
      const reading = item.options?.[item.correct];
      if (!parsed || !reading) continue;

      const key = `${parsed.word}|${reading}`;
      let entry = byKey.get(key);
      if (!entry) {
        entry = { word: parsed.word, reading, occurrences: [] };
        byKey.set(key, entry);
      }
      entry.occurrences.push({
        period,
        no: parsed.no,
        before: parsed.before,
        after: parsed.after,
        distractors: item.options.filter((_: string, i: number) => i !== item.correct),
      });
    }
  }

  return [...byKey.values()];
}
