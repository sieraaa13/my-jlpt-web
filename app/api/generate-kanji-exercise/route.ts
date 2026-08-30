export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";

interface KanjiContext {
  character: string;
  reading: string;
  meaning: string;
  examples: { word: string; reading: string; meaning: string }[];
}

function buildPrompt(kanjiList: KanjiContext[]) {
  const kanjiSummary = kanjiList
    .map(
      (k) =>
        `${k.character} (${k.reading}, arti: ${k.meaning}) — contoh kata: ${k.examples
          .map((e) => `${e.word}(${e.reading})`)
          .join(", ")}`
    )
    .join("\n");

  return `Kamu adalah pembuat soal latihan kanji JLPT N1 untuk aplikasi belajar bahasa Jepang.

Daftar kanji pelajaran hari ini:
${kanjiSummary}

Buat 2 jenis soal HANYA menggunakan kanji/kata dari daftar di atas:

JENIS "choice" (5 soal): kalimat bahasa Jepang dengan satu bagian kosong "___", lalu 2 pilihan kata (A dan B) yang mirip tapi hanya salah satu yang tepat secara makna/konteks untuk kalimat itu. Kalimat harus buatan baru (bukan kalimat template), sederhana, dan jelas konteksnya sehingga ada satu jawaban benar yang pasti.

JENIS "drag" (5 soal): sebuah kata 2-kanji dari daftar di atas, tunjukkan SATU kanji yang sudah given (fixedKanji) dan posisi kanji yang hilang (blankPosition: "before" jika kanji hilang ada di depan fixedKanji, atau "after" jika di belakang), beserta bacaan lengkap kata itu (reading, dalam hiragana). Sediakan choices: array berisi 4 kanji tunggal (1 jawaban benar + 3 pengecoh dari kanji lain di daftar pelajaran), dan answer: kanji yang benar.

Balas HANYA dengan JSON valid, tanpa markdown, format persis:
{
  "choiceQuestions": [
    { "question": "kalimat dengan ___ di tempat kosong", "optionA": "kata A", "optionAReading": "bacaan A", "optionB": "kata B", "optionBReading": "bacaan B", "answer": "A" }
  ],
  "dragQuestions": [
    { "reading": "bacaan lengkap kata (hiragana)", "fixedKanji": "kanji yang sudah ada", "blankPosition": "before", "choices": ["候1","候2","候3","候4"], "answer": "候1" }
  ]
}`;
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.MY_JLPT;
    if (!apiKey) {
      return NextResponse.json({ error: "API Key missing" }, { status: 500 });
    }

    const { kanjiList } = await req.json();
    if (!Array.isArray(kanjiList) || kanjiList.length === 0) {
      return NextResponse.json({ error: "kanjiList kosong" }, { status: 400 });
    }

    const prompt = buildPrompt(kanjiList as KanjiContext[]);

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0.9,
        messages: [
          { role: "system", content: prompt },
          { role: "user", content: "Buat soalnya sekarang, JSON saja." },
        ],
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      return NextResponse.json({ error: `OpenAI error: ${errText}` }, { status: 502 });
    }

    const data = await res.json();
    const content: string = data.choices?.[0]?.message?.content || "";
    const parsed = JSON.parse(content.replace(/```json|```/g, "").trim());

    return NextResponse.json(parsed);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
