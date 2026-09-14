// lib/quiz-questions.ts
// Validasi & normalisasi soal Quiz Harian (hasil GPT maupun dari bank soal).

export type GeneratedQuestion = {
  question:    string;
  options:     string[];
  answer:      number;
  explanation: string;
  img_keyword: string;
  img_cat:     string;
};

export const OPTIONS_PER_QUESTION = 4;

// Fisher–Yates; mengembalikan array baru.
export function shuffle<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

// Soal hasil GPT dianggap valid kalau: pertanyaan & penjelasan tidak kosong,
// tepat 4 opsi yang tidak kosong dan tidak kembar, dan answer indeks 0–3.
// Urutan opsi diacak (answer ikut dipetakan ulang) supaya jawaban benar tidak
// selalu menumpuk di posisi yang sama.
export function normalizeGeneratedQuestion(raw: unknown): GeneratedQuestion | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;

  const question    = str(r.question);
  const explanation = str(r.explanation);
  const options     = Array.isArray(r.options) ? r.options.map(str) : [];
  const answer      = r.answer;

  if (!question || !explanation) return null;
  if (options.length !== OPTIONS_PER_QUESTION || options.some((o) => !o)) return null;
  if (new Set(options.map((o) => o.toLowerCase())).size !== OPTIONS_PER_QUESTION) return null;
  if (typeof answer !== "number" || !Number.isInteger(answer) || answer < 0 || answer >= OPTIONS_PER_QUESTION) return null;

  const order = shuffle(options.map((_, i) => i));
  return {
    question,
    options:     order.map((i) => options[i]),
    answer:      order.indexOf(answer),
    explanation,
    img_keyword: str(r.img_keyword) || "japan",
    img_cat:     str(r.img_cat),
  };
}

// Ambil daftar soal valid dari output GPT, buang yang pertanyaannya kembar.
export function parseGeneratedQuestions(parsed: unknown): GeneratedQuestion[] {
  const list = Array.isArray(parsed)
    ? parsed
    : Array.isArray((parsed as { questions?: unknown })?.questions)
      ? (parsed as { questions: unknown[] }).questions
      : [];

  const seen = new Set<string>();
  const valid: GeneratedQuestion[] = [];
  for (const raw of list) {
    const q = normalizeGeneratedQuestion(raw);
    if (!q) continue;
    const key = q.question.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    valid.push(q);
  }
  return valid;
}

// Baris lama di bank soal bisa saja rusak (answer di luar rentang, opsi kosong);
// soal seperti itu tidak dikirim ke user.
export function isPlayableQuestionRow(row: Record<string, unknown>): boolean {
  const options = row.options;
  const answer  = row.answer;
  return (
    typeof row.question === "string" && row.question.trim() !== "" &&
    Array.isArray(options) && options.length >= 2 &&
    options.every((o) => typeof o === "string" && o.trim() !== "") &&
    typeof answer === "number" && Number.isInteger(answer) &&
    answer >= 0 && answer < options.length
  );
}
