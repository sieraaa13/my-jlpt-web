import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!process.env.MY_JLPT) {
      throw new Error("OPENAI API key is missing");
    }

    const messages = [
      {
        role: "system",
        content: body.system || "Kamu adalah asisten yang membantu belajar JLPT.",
      },
      ...(body.messages || []),
    ];

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MY_JLPT}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages,
        max_tokens: body.max_tokens || 500,
        temperature: 0.7,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { error: data.error?.message || "OpenAI API error" },
        { status: res.status }
      );
    }

    return NextResponse.json({
      content: data.choices?.[0]?.message?.content || "Tidak ada respons",
    });

  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
