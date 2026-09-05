import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.MY_JLPT;
    if (!apiKey) {
      return NextResponse.json({ error: "API Key missing" }, { status: 500 });
    }

    const { patternTitle, patternMeaning, formula, explanation, userSentence } = await req.json();

    if (!userSentence || !userSentence.trim()) {
      return NextResponse.json({ error: "Kalimat contoh tidak boleh kosong" }, { status: 400 });
    }

    const systemPrompt = `Kamu adalah penilai grammar (bunpou) JLPT N3 yang teliti dan suportif.

Tugasmu: nilai apakah kalimat contoh yang ditulis SISWA menggunakan pola grammar
di bawah ini dengan BENAR — baik dari sisi bentuk (konjugasi/partikel sesuai
rumus) maupun apakah kalimatnya masuk akal secara makna/konteks.

===== POLA GRAMMAR YANG DIPELAJARI =====
Pola: ${patternTitle}
Arti/keterangan: ${patternMeaning}
Rumus: ${formula}
Penjelasan: ${explanation}
===== AKHIR POLA =====

ATURAN PENILAIAN:
1. correct = true HANYA kalau kalimat siswa benar-benar memakai pola di atas
   dengan bentuk yang tepat DAN maknanya masuk akal secara natural.
2. Kalau siswa memakai pola grammar lain (bukan yang di atas) atau tidak
   memakai pola sama sekali, correct = false.
3. Kalau salah, jelaskan di "feedback" SPESIFIK bagian mana yang salah dan
   KENAPA (misal: bentuk kata kerjanya salah konjugasi, partikel salah,
   pola tidak dipakai, makna janggal, dll) — jangan generic.
4. Isi "correction" dengan SATU contoh kalimat perbaikan yang benar
   memakai pola ini (boleh dekat dengan kalimat siswa, tidak harus sama
   persis). Kalau kalimat siswa sudah benar, isi "correction" dengan null.
5. Semua teks feedback/correction dalam Bahasa Indonesia, nada suportif
   dan tidak menggurui, seperti guru yang membantu bukan menghakimi.

Balas HANYA dalam format JSON persis seperti ini, tanpa teks lain:
{"correct": boolean, "feedback": "string", "correction": "string atau null"}`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Kalimat contoh siswa: ${userSentence}` },
        ],
        temperature: 0.3,
        max_tokens: 400,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data.error?.message || "OpenAI Error" }, { status: response.status });
    }

    const parsed = JSON.parse(data.choices[0].message.content);

    return NextResponse.json({
      correct: !!parsed.correct,
      feedback: parsed.feedback || "",
      correction: parsed.correction || null,
    });
  } catch (error: any) {
    console.error("bunpou-check error:", error);
    return NextResponse.json({ error: error.message || "Gagal memeriksa jawaban" }, { status: 500 });
  }
}
