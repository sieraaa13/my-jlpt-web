// app/api/generate-quiz/route.ts
export const runtime = "nodejs"; // ← FIX: paksa Node.js runtime untuk Buffer support

import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const MAX_BANK = 120;

const LEVEL_CONFIG = [
  {
    name: "N5",
    diff: "very easy, for absolute beginners",
    instruction: `
      - Only ask about very well-known things everyone knows
      - Answer options must be clearly different (1 correct, 3 obviously wrong)
      - Use names from popular media, anime, or movies
    `,
  },
  {
    name: "N4",
    diff: "easy, for basic level learners",
    instruction: `
      - Ask things known by people who studied basic Japanese
      - Options are similar but distinguishable with basic knowledge
    `,
  },
  {
    name: "N3",
    diff: "intermediate level",
    instruction: `
      - Ask specific details requiring deeper knowledge
      - Examples: counts, historical years, origins, specific functions
      - All options plausible, need knowledge to choose correctly
    `,
  },
  {
    name: "N2",
    diff: "difficult, for advanced learners",
    instruction: `
      - Ask about cultural context, history, or philosophy behind things
      - All options sound plausible, only 1 is correct
      - Requires deep cultural understanding
    `,
  },
  {
    name: "N1",
    diff: "very difficult, professional level",
    instruction: `
      - Ask deep concepts, cultural nuances, or academic facts
      - Philosophical or historical connections not commonly known
      - All options sound very reasonable, requires deep analysis
    `,
  },
];

const TOPIC_CONFIG: Record<string, string> = {
  budaya:   "Japanese culture, traditions, and daily life customs",
  makanan:  "Japanese food and culinary traditions",
  anime:    "Anime, manga, and Japanese pop culture",
  tempat:   "Famous Instagrammable spots, iconic tourist destinations, beautiful scenery in Japan",
  festival: "Japanese festivals (matsuri) and traditional celebrations",
  modern:   "Modern Japan: technology, convenience stores, transportation, contemporary lifestyle",
};

// ── 1. GENERATE SOAL via GPT ─────────────────────────────────
async function generateQuestions(
  apiKey: string,
  levelIndex: number,
  topicId: string,
  count: number
): Promise<Record<string, unknown>[]> {
  const lv    = LEVEL_CONFIG[levelIndex];
  const topic = TOPIC_CONFIG[topicId] || topicId;

  const prompt = `You are an expert quiz creator for a Japanese culture learning platform.

Create exactly ${count} multiple-choice quiz questions.
Topic: ${topic}
Difficulty: ${lv.diff} (${lv.name})
Guidelines: ${lv.instruction}

RULES:
- Questions must be 100% factually accurate about Japan
- Each question must be UNIQUE
- Write ALL questions and explanations in Indonesian (Bahasa Indonesia)
- img_prompt must be in English, detailed, and directly relevant to the correct answer
- img_prompt example: "Fushimi Inari shrine Kyoto Japan, vermilion torii gates path, photorealistic"

Respond ONLY with a valid JSON array, no markdown, no extra text:
[
  {
    "question": "pertanyaan dalam bahasa Indonesia",
    "options": ["pilihan A", "pilihan B", "pilihan C", "pilihan D"],
    "answer": 0,
    "explanation": "penjelasan singkat dalam bahasa Indonesia",
    "img_prompt": "detailed english prompt for DALL-E image generation",
    "img_cat": "kategori singkat"
  }
]`;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type":  "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model:       "gpt-4o-mini",
      temperature: 0.9,
      messages: [
        { role: "system", content: prompt },
        { role: "user",   content: `Generate ${count} questions now.` },
      ],
    }),
  });

  if (!res.ok) throw new Error(`GPT error: ${res.status}`);
  const data    = await res.json();
  const content = data.choices?.[0]?.message?.content || "";
  return JSON.parse(content.replace(/```json|```/g, "").trim());
}

// ── 2. GENERATE GAMBAR via DALL-E 2 ─────────────────────────
async function generateImage(apiKey: string, prompt: string): Promise<string> {
  try {
    const res = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type":  "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model:           "dall-e-2",
        prompt:          `${prompt}, clean illustration, no text, appropriate for all ages`,
        n:               1,
        size:            "512x512",
        response_format: "url",
      }),
    });
    if (!res.ok) return "";
    const data = await res.json();
    return data.data?.[0]?.url || "";
  } catch {
    return "";
  }
}

// ── 3. DOWNLOAD & UPLOAD ke SUPABASE STORAGE ─────────────────
async function uploadToSupabase(tempUrl: string, questionId: string): Promise<string> {
  if (!tempUrl) return "";
  try {
    const imgRes = await fetch(tempUrl);
    if (!imgRes.ok) return "";

    const arrayBuf = await imgRes.arrayBuffer();
    const buffer   = Buffer.from(arrayBuf);
    const filename = `quiz/${questionId}.png`;

    const { error } = await supabaseAdmin.storage
      .from("quiz-images")
      .upload(filename, buffer, { contentType: "image/png", upsert: true });

    if (error) return "";

    const { data } = supabaseAdmin.storage
      .from("quiz-images")
      .getPublicUrl(filename);

    return data.publicUrl || "";
  } catch {
    return "";
  }
}

// ── 4. CEK JUMLAH BANK SOAL ──────────────────────────────────
async function getBankCount(levelIndex: number, topicId: string): Promise<number> {
  const { count } = await supabaseAdmin
    .from("quiz_questions")
    .select("*", { count: "exact", head: true })
    .eq("category", topicId)
    .eq("level",    levelIndex);
  return count || 0;
}

// ── 5. AMBIL SOAL UNTUK USER (belum dimainkan) ───────────────
async function getUnplayedQuestions(
  userId: string,
  levelIndex: number,
  topicId: string,
  count: number
): Promise<Record<string, unknown>[]> {
  const { data: played } = await supabaseAdmin
    .from("quiz_user_played")
    .select("question_id")
    .eq("user_id", userId);

  const playedIds = played?.map((p: { question_id: string }) => p.question_id) || [];

  let query = supabaseAdmin
    .from("quiz_questions")
    .select("*")
    .eq("category", topicId)
    .eq("level",    levelIndex);

  if (playedIds.length > 0) {
    query = query.not("id", "in", `(${playedIds.join(",")})`);
  }

  const { data } = await query.limit(count * 3);
  if (!data || data.length === 0) return [];

  // Acak urutan
  return data.sort(() => Math.random() - 0.5).slice(0, count);
}

// ── MAIN: POST — Ambil/Generate soal ─────────────────────────
export async function POST(req: NextRequest) {
  try {
    const { levelIndex, topicId, count, userId } = await req.json();

    const apiKey = process.env.MY_JLPT;
    if (!apiKey) return NextResponse.json({ error: "API key not configured" }, { status: 500 });

    // 1. Coba ambil soal yang belum dimainkan
    let questions = await getUnplayedQuestions(userId, levelIndex, topicId, count);

    // 2. Jika kurang, generate soal baru (jika bank belum penuh)
    const needed    = count - questions.length;
    const bankCount = await getBankCount(levelIndex, topicId);

    if (needed > 0 && bankCount < MAX_BANK) {
      const toGen  = Math.min(needed, MAX_BANK - bankCount);
      const newQs  = await generateQuestions(apiKey, levelIndex, topicId, toGen);

      // Generate semua gambar secara paralel
      const imgUrls = await Promise.all(
        newQs.map(q => generateImage(apiKey, q.img_prompt as string))
      );

      // Simpan ke DB dan upload gambar
      const saved = await Promise.all(
        newQs.map(async (q, i) => {
          const { data, error } = await supabaseAdmin
            .from("quiz_questions")
            .insert({
              category:    topicId,
              level:       levelIndex,
              question:    q.question,
              options:     q.options,
              answer:      q.answer,
              explanation: q.explanation,
              img_prompt:  q.img_prompt,
              img_cat:     q.img_cat || "",
              img_url:     "",
            })
            .select("id")
            .single();

          if (error || !data) return { ...q, id: "", img_url: "" };

          const imgUrl = await uploadToSupabase(imgUrls[i], data.id);

          if (imgUrl) {
            await supabaseAdmin
              .from("quiz_questions")
              .update({ img_url: imgUrl })
              .eq("id", data.id);
          }

          return { ...q, id: data.id, img_url: imgUrl };
        })
      );

      questions = [...questions, ...saved];
    }

    // 3. Jika semua 120 soal sudah dimainkan → reset cycle (acak ulang)
    if (questions.length < count) {
      const { data: allQs } = await supabaseAdmin
        .from("quiz_questions")
        .select("id")
        .eq("category", topicId)
        .eq("level",    levelIndex);

      const allIds = allQs?.map((q: { id: string }) => q.id) || [];

      if (allIds.length > 0) {
        await supabaseAdmin
          .from("quiz_user_played")
          .delete()
          .eq("user_id", userId)
          .in("question_id", allIds);
      }

      // Ambil ulang dengan urutan acak baru
      questions = await getUnplayedQuestions(userId, levelIndex, topicId, count);
    }

    const result = questions.slice(0, count).map(q => ({
      id:      q.id,
      q:       q.question,
      opts:    q.options,
      ans:     q.answer,
      explain: q.explanation,
      img_url: q.img_url || "",
      img_cat: q.img_cat || "",
    }));

    return NextResponse.json({ questions: result });

  } catch (err) {
    console.error("Quiz generation error:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

// ── PUT — Tandai soal sebagai sudah dimainkan ─────────────────
export async function PUT(req: NextRequest) {
  try {
    const { userId, questionId } = await req.json();

    await supabaseAdmin
      .from("quiz_user_played")
      .upsert(
        { user_id: userId, question_id: questionId },
        { onConflict: "user_id,question_id" }
      );

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
