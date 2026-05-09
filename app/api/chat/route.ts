import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { messages, examContext, level } = await req.json();

    // System prompt
    let systemPrompt = `Kamu adalah tutor JLPT yang ramah dan ahli bahasa Jepang. 
Jawab dengan singkat, jelas, dan mudah dipahami pelajar Indonesia.
Selalu beri penjelasan dalam Bahasa Indonesia, kecuali user minta sebaliknya.
Saat menjelaskan kata/kanji Jepang, sertakan: tulisan Jepang, romaji, dan arti.`;

    if (level && level !== "General") {
      systemPrompt += `\nUser sedang belajar level JLPT ${level}.`;
    }

    // Tambahkan konteks soal kalau ada
    if (examContext && examContext.trim().length > 0) {
      systemPrompt += `\n\n===== KONTEKS SOAL UJIAN =====\n${examContext}\n===== AKHIR KONTEKS =====\n
Saat user bertanya tentang nomor soal tertentu (misal "bantu jawab nomor 1"),
gunakan data soal di atas. Jelaskan jawaban dengan langkah-langkah:
1. Sebutkan kembali soalnya
2. Beri jawaban yang benar
3. Jelaskan alasannya
4. Beri tips supaya mudah ingat`;
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // atau model lain yang kamu pakai
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.map((m: { role: string; content: string }) => ({
          role: m.role,
          content: m.content,
        })),
      ],
      temperature: 0.7,
      max_tokens: 800,
    });

    const content =
      completion.choices[0]?.message?.content || "Maaf, tidak ada jawaban.";

    return NextResponse.json({ content });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { content: "Maaf, terjadi kesalahan di server." },
      { status: 500 }
    );
  }
}
