import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.MY_JLPT;

    if (!apiKey) {
      return NextResponse.json(
        { error: "API key OpenAI tidak ditemukan di Environment Variable." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { messages } = body;

    // Panggil API OpenAI menggunakan fetch
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // Kamu bisa ganti ke "gpt-4o-mini" jika ingin lebih murah & cepat
        messages: messages, // Pastikan format messages adalah [{role: "user", content: "..."}]
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    // Cek jika OpenAI mengirimkan error (misal: saldo habis atau API key salah)
    if (data.error) {
      console.error("OpenAI Error:", data.error);
      return NextResponse.json(
        { error: data.error.message },
        { status: response.status }
      );
    }

    // Ambil teks jawaban dari struktur response OpenAI
    const aiResponse = data.choices[0].message;

    // Kirim balik ke frontend
    return NextResponse.json(aiResponse);

  } catch (error: any) {
    console.error("Internal Server Error:", error);
    return NextResponse.json(
      { error: "Gagal menyambung ke OpenAI", details: error.message },
      { status: 500 }
    );
  }
}
