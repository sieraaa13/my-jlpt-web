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
    let systemPrompt = `Kamu adalah tutor JLPT yang ramah dan ahli bahasa Jepang. 
Jawab dengan singkat, jelas, dan mudah dipahami pelajar Indonesia.
Selalu beri penjelasan dalam Bahasa Indonesia, kecuali user minta sebaliknya.
Saat menjelaskan kata/kanji Jepang, sertakan: tulisan Jepang, romaji, dan arti.`;

    if (level && level !== "General") {
      systemPrompt += `\nUser sedang belajar level JLPT ${level}.`;
    }

    if (examContext && examContext.trim().length > 0) {
      systemPrompt += `

===== KONTEKS SOAL UJIAN =====
${examContext}
===== AKHIR KONTEKS =====

Saat user bertanya tentang nomor soal tertentu (misal "bantu jawab nomor 1"),
gunakan data soal di atas. Jelaskan jawaban dengan langkah-langkah:
1. Sebutkan kembali soalnya
2. Beri jawaban yang benar
3. Jelaskan alasannya
4. Beri tips supaya mudah ingat`;
    }

    // Gabungkan system prompt + messages dari user
    const fullMessages = [
      { role: "system", content: systemPrompt },
      ...messages,
    ];

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: fullMessages,
        temperature: 0.7,
        max_tokens: 800,
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
