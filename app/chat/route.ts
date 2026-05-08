import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.MY_JLPT;

    if (!apiKey) {
      return NextResponse.json(
        { error: "API key tidak ditemukan." },
        { status: 500 }
      );
    }

    const body = await req.json();

    const res = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content:
                "Kamu adalah tutor JLPT profesional. Jawab dengan jelas, ringkas, dan gunakan contoh kalimat Jepang jika perlu.",
            },
            ...(body.messages || []),
          ],
          temperature: 0.7,
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      console.error("OpenAI Error:", data);
      return NextResponse.json(
        { error: data.error?.message || "OpenAI error" },
        { status: res.status }
      );
    }

    return NextResponse.json({
      content:
        data.choices?.[0]?.message?.content || "Tidak ada respons",
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
