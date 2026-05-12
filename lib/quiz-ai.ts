// /lib/quiz-ai.ts
import { QuizQuestion } from "@/types/quiz";
import { QUIZ_LEVELS, QUIZ_TOPICS } from "@/lib/quiz-config";

export async function generateQuizQuestions(
  levelIndex: number,
  topicId: string,
  count: number
): Promise<QuizQuestion[]> {
  const level = QUIZ_LEVELS[levelIndex];
  const topic = QUIZ_TOPICS.find((t) => t.id === topicId);

  if (!level || !topic) throw new Error("Level atau topik tidak valid");

  const topicInstruction =
    topicId === "tempat"
      ? 'Fokus pada tempat wisata ikonik, spot foto populer, bangunan bersejarah, dan pemandangan indah di Jepang yang terkenal di media sosial.'
      : "";

  const prompt = `Kamu adalah pembuat soal quiz budaya Jepang untuk platform belajar bahasa Jepang.
Buat ${count} soal quiz tentang "${topic.name}" dengan tingkat kesulitan ${level.diff} (${level.label}).
${topicInstruction}

Pastikan soal:
- Beragam dan tidak monoton
- Faktual dan akurat
- Menarik untuk semua usia
- Relevan dengan budaya Jepang nyata

Balas HANYA dengan JSON array, tanpa markdown, tanpa komentar apapun:
[
  {
    "q": "pertanyaan di sini",
    "opts": ["pilihan A", "pilihan B", "pilihan C", "pilihan D"],
    "ans": 0,
    "img_keyword": "english keyword 1-3 kata untuk foto unsplash",
    "img_cat": "kategori soal",
    "explain": "penjelasan singkat mengapa jawaban benar"
  }
]
ans adalah index (0-3) dari jawaban yang benar.`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1500,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  const data = await response.json();
  const text = data.content
    .map((c: { type: string; text?: string }) => c.text || "")
    .join("");

  const clean = text.replace(/```json|```/g, "").trim();
  const questions: QuizQuestion[] = JSON.parse(clean);

  if (!Array.isArray(questions) || questions.length === 0) {
    throw new Error("Format soal tidak valid dari AI");
  }

  return questions;
}

export function getImageUrl(keyword: string): string {
  const encoded = encodeURIComponent(`${keyword} japan`);
  return `https://source.unsplash.com/640x360/?${encoded}`;
}
