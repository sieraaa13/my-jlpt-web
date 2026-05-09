import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.MY_JLPT;

    if (!apiKey) {
      return NextResponse.json({ error: "API Key missing" }, { status: 500 });
    }

    const { messages, examContext, level } = await req.json();

    // Build system prompt
    let systemPrompt = `Kamu adalah tutor JLPT yang ramah, sabar, dan ahli bahasa Jepang.
Tugasmu membantu user belajar bahasa Jepang dan menyelesaikan soal JLPT.

ATURAN MENJAWAB:
1. Selalu jawab dalam Bahasa Indonesia (kecuali user minta lain).
2. Jawaban harus singkat, jelas, dan mudah dipahami pelajar.
3. Saat menyebut kata Jepang, sertakan: tulisan Jepang + romaji + arti.
   Contoh: 学校 (gakkou) artinya "sekolah".
4. Jangan terlalu panjang lebar — fokus ke poin pertanyaan.`;

    if (level && level !== "General") {
      systemPrompt += `\n\nUser sedang belajar level JLPT ${level}.`;
    }

    if (examContext && examContext.trim().length > 0) {
      systemPrompt += `

===== KONTEKS SOAL UJIAN YANG SEDANG DIKERJAKAN =====
${examContext}
===== AKHIR KONTEKS =====

PANDUAN MEMBANTU SOAL:
- Jika user bertanya "bantu jawab nomor X" atau "soal ini" → gunakan data soal di atas.
- Jika user hanya bilang "soal ini" atau "yang sekarang" tanpa nomor → bantu soal yang ditandai dengan 📍 SAAT INI.
- Saat menjelaskan jawaban, gunakan format:
  1. Sebutkan ulang soalnya (singkat).
  2. Sebutkan jawaban yang benar (huruf + isi pilihan).
  3. Jelaskan kenapa jawaban itu benar (bahas grammar/kosakata/konteks).
  4. (Opsional) Beri tips supaya user mudah ingat.
- Jangan langsung kasih jawaban tanpa penjelasan — user perlu paham, bukan cuma tahu.`;
    }

    const fullMessages = [
      { role: "system", content: systemPrompt },
      ...messages,
    ];

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: fullMessages,
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error?.message || "OpenAI Error" },
        { status: response.status }
      );
    }

    return NextResponse.json({
      role: "assistant",
      content: data.choices[0].message.content,
    });
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
