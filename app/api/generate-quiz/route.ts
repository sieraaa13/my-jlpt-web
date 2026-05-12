// app/api/generate-quiz/route.ts
import { NextRequest, NextResponse } from "next/server";

const LEVELS = [
  { name: "N5", label: "N5 Pemula",      diff: "very easy, for absolute beginners" },
  { name: "N4", label: "N4 Dasar",       diff: "easy, for basic level learners" },
  { name: "N3", label: "N3 Menengah",    diff: "intermediate level" },
  { name: "N2", label: "N2 Lanjut",      diff: "difficult, for advanced learners" },
  { name: "N1", label: "N1 Profesional", diff: "very difficult, for professional level" },
];

const TOPICS: Record<string, string> = {
  budaya:   "Japanese culture, traditions, and daily life customs",
  makanan:  "Japanese food and culinary traditions",
  anime:    "Anime, manga, and Japanese pop culture",
  tempat:   "Famous Instagrammable spots, iconic tourist destinations, beautiful scenery, and popular landmarks in Japan",
  festival: "Japanese festivals (matsuri) and traditional celebrations",
  modern:   "Modern Japan: technology, convenience stores, transportation, and contemporary lifestyle",
};

export async function POST(req: NextRequest) {
  try {
    const { levelIndex, topicId, count } = await req.json();

    const lv    = LEVELS[levelIndex];
    const topic = TOPICS[topicId];

    if (!lv || !topic) {
      return NextResponse.json({ error: "Invalid level or topic" }, { status: 400 });
    }

    const apiKey = process.env.MY_JLPT;
    if (!apiKey) {
      return NextResponse.json({ error: "API key not configured" }, { status: 500 });
    }

    const systemPrompt = `You are a quiz creator for a Japanese language and culture learning platform.
Create exactly ${count} multiple-choice quiz questions about: ${topic}
Difficulty: ${lv.diff} (${lv.label})

Rules:
- Questions must be factual and accurate about Japan
- Make questions varied and interesting, not repetitive
- Each question must have exactly 4 options with only 1 correct answer
- Provide a short explanation for why the correct answer is right
- For "Instagrammable spots": focus on specific place names, what makes them unique, and why they are famous on social media
- Write questions and explanations in Indonesian language (Bahasa Indonesia)
- img_keyword must be in English (1-3 words for Unsplash photo search)

Respond ONLY with a valid JSON array, no markdown, no extra text:
[
  {
    "q": "pertanyaan dalam bahasa Indonesia",
    "opts": ["pilihan A", "pilihan B", "pilihan C", "pilihan D"],
    "ans": 0,
    "img_keyword": "english keyword for unsplash",
    "img_cat": "kategori soal",
    "explain": "penjelasan singkat dalam bahasa Indonesia"
  }
]
ans is the index (0-3) of the correct answer.`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0.8,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user",   content: `Create ${count} quiz questions now.` },
        ],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("OpenAI error:", errText);
      return NextResponse.json({ error: "Failed to generate questions" }, { status: 502 });
    }

    const data    = await response.json();
    const content = data.choices?.[0]?.message?.content || "";
    const clean   = content.replace(/```json|```/g, "").trim();
    const questions = JSON.parse(clean);

    if (!Array.isArray(questions) || questions.length === 0) {
      return NextResponse.json({ error: "Invalid response format" }, { status: 500 });
    }

    return NextResponse.json({ questions });
  } catch (err) {
    console.error("Generate quiz error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
