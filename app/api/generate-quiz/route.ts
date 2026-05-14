// app/api/generate-quiz/route.ts
export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// ── LAZY INIT ─────────────────────────────────────────────────
function getAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

const MAX_BANK = 120;

const LEVEL_CONFIG = [
  { name: "N5", diff: "very easy, for absolute beginners",
    guide: "Ask only very well-known things. Options clearly different." },
  { name: "N4", diff: "easy, for basic level learners",
    guide: "Ask things known by people who studied basic Japanese." },
  { name: "N3", diff: "intermediate level",
    guide: "Ask specific details requiring deeper knowledge." },
  { name: "N2", diff: "difficult, for advanced learners",
    guide: "Ask cultural context, history, or philosophy." },
  { name: "N1", diff: "very difficult, professional level",
    guide: "Ask deep concepts, cultural nuances, or academic facts." },
];

const TOPICS: Record<string, string> = {
  budaya:   "Japanese culture, traditions, and daily life customs",
  makanan:  "Japanese food and culinary traditions",
  anime:    "Anime, manga, and Japanese pop culture",
  tempat:   "Famous Instagrammable spots, iconic tourist destinations in Japan",
  festival: "Japanese festivals (matsuri) and traditional celebrations",
  modern:   "Modern Japan: technology, convenience stores, transportation, lifestyle",
};

// ═══════════════════════════════════════════════════════════════
// 1. GENERATE SOAL via GPT
// ═══════════════════════════════════════════════════════════════
async function generateQuestions(
  apiKey: string,
  levelIndex: number,
  topicId: string,
  count: number
): Promise<Record<string, unknown>[]> {
  const lv    = LEVEL_CONFIG[levelIndex];
  const topic = TOPICS[topicId];

  const prompt = `You are an expert quiz creator for a Japanese culture learning platform.
Create exactly ${count} multiple-choice quiz questions.
Topic: ${topic}
Difficulty: ${lv.diff}
Guidelines: ${lv.guide}

RULES:
- 100% factually accurate
- Each question UNIQUE
- ALL questions and explanations in Indonesian (Bahasa Indonesia)
- img_keyword: 1-3 English words for photo search (e.g., "fushimi inari kyoto", "ramen bowl", "sakura blossom")

Respond ONLY with valid JSON array, no markdown:
[
  {
    "question": "pertanyaan dalam bahasa Indonesia",
    "options": ["A","B","C","D"],
    "answer": 0,
    "explanation": "penjelasan dalam bahasa Indonesia",
    "img_keyword": "english keywords for photo search",
    "img_cat": "kategori singkat"
  }
]`;

  console.log(`[GPT] Generating ${count} questions for ${topic} ${lv.name}`);

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
  const data   = await res.json();
  const content = data.choices?.[0]?.message?.content || "";
  const parsed = JSON.parse(content.replace(/```json|```/g, "").trim());
  console.log(`[GPT] ✓ Generated ${parsed.length} questions`);
  return parsed;
}

// ═══════════════════════════════════════════════════════════════
// 2. GET FOTO dari UNSPLASH (GRATIS!)
// ═══════════════════════════════════════════════════════════════
async function getUnsplashPhoto(keyword: string, accessKey: string): Promise<string> {
  console.log(`[UNSPLASH] Searching for: "${keyword}"`);
  try {
    const query = `${keyword} japan beautiful travel photography`;
    const url   = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape&order_by=popular&client_id=${accessKey}`;

    const res = await fetch(url);
    if (!res.ok) {
      console.error(`[UNSPLASH] Error ${res.status}`);
      return "";
    }

    const data = await res.json();
    const photo = data.results?.[0];

    if (!photo) {
      console.warn(`[UNSPLASH] No photos found for "${query}"`);
      return "";
    }

    // Ambil URL regular (kualitas bagus, ukuran sedang)
    const imgUrl = photo.urls.regular;
    console.log(`[UNSPLASH] ✓ Found photo by ${photo.user.name}`);
    return imgUrl;

  } catch (err) {
    console.error(`[UNSPLASH] Exception:`, err);
    return "";
  }
}

// ═══════════════════════════════════════════════════════════════
// 3. HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════
async function getBankCount(levelIndex: number, topicId: string): Promise<number> {
  const { count } = await getAdmin()
    .from("quiz_questions")
    .select("*", { count: "exact", head: true })
    .eq("category", topicId)
    .eq("level", levelIndex);
  return count || 0;
}

async function getUnplayedQuestions(
  userId: string,
  levelIndex: number,
  topicId: string,
  count: number
): Promise<Record<string, unknown>[]> {
  const { data: played } = await getAdmin()
    .from("quiz_user_played")
    .select("question_id")
    .eq("user_id", userId);

  const playedIds = played?.map((p: { question_id: string }) => p.question_id) || [];

  let query = getAdmin()
    .from("quiz_questions")
    .select("*")
    .eq("category", topicId)
    .eq("level", levelIndex);

  if (playedIds.length > 0) {
    query = query.not("id", "in", `(${playedIds.join(",")})`);
  }

  const { data } = await query.limit(count * 3);
  if (!data || data.length === 0) return [];
  return data.sort(() => Math.random() - 0.5).slice(0, count);
}

// ═══════════════════════════════════════════════════════════════
// 4. PROSES SATU SOAL
// ═══════════════════════════════════════════════════════════════
async function processSingleQuestion(
  unsplashKey: string,
  q: Record<string, unknown>,
  levelIndex: number,
  topicId: string
): Promise<Record<string, unknown>> {
  // Get foto dari Unsplash
  const imgUrl = await getUnsplashPhoto(q.img_keyword as string, unsplashKey);

  // Insert ke database (langsung dengan img_url dari Unsplash)
  const { data, error } = await getAdmin()
    .from("quiz_questions")
    .insert({
      category:    topicId,
      level:       levelIndex,
      question:    q.question,
      options:     q.options,
      answer:      q.answer,
      explanation: q.explanation,
      img_prompt:  q.img_keyword, // simpan keyword di field img_prompt
      img_cat:     q.img_cat || "",
      img_url:     imgUrl,
    })
    .select("id")
    .single();

  if (error || !data) {
    console.error(`[DB] Insert failed:`, error);
    return { ...q, id: "", img_url: "" };
  }

  console.log(`[FLOW] ✓ Saved question ${data.id} with ${imgUrl ? "photo" : "no photo"}`);
  return { ...q, id: data.id, img_url: imgUrl };
}

// ═══════════════════════════════════════════════════════════════
// MAIN HANDLER — POST
// ═══════════════════════════════════════════════════════════════
export async function POST(req: NextRequest) {
  try {
    const { levelIndex, topicId, count, userId } = await req.json();
    console.log(`\n=== QUIZ REQUEST: User ${userId}, ${LEVEL_CONFIG[levelIndex].name}, ${topicId} ===`);

    const openaiKey   = process.env.MY_JLPT;
    const unsplashKey = process.env.UNSPLASH_ACCESS_KEY;

    if (!openaiKey || !unsplashKey) {
      console.error(`[ENV] Missing keys`);
      return NextResponse.json({ error: "API keys not configured" }, { status: 500 });
    }

    // ── STEP 1: Ambil soal yang belum dimainkan
    let questions = await getUnplayedQuestions(userId, levelIndex, topicId, count);
    console.log(`[FLOW] Found ${questions.length} unplayed questions`);

    // ── STEP 2: Generate baru jika kurang
    const needed    = count - questions.length;
    const bankCount = await getBankCount(levelIndex, topicId);

    if (needed > 0 && bankCount < MAX_BANK) {
      const toGen = Math.min(needed, MAX_BANK - bankCount);
      console.log(`[FLOW] Generating ${toGen} new questions`);

      const newQs = await generateQuestions(openaiKey, levelIndex, topicId, toGen);
      const processed = await Promise.all(
        newQs.map((q) => processSingleQuestion(unsplashKey, q, levelIndex, topicId))
      );

      questions = [...questions, ...processed];
    }

    // ── STEP 3: Reset cycle jika habis
    if (questions.length < count) {
      console.log(`[FLOW] Resetting cycle`);
      const { data: allQs } = await getAdmin()
        .from("quiz_questions")
        .select("id")
        .eq("category", topicId)
        .eq("level", levelIndex);

      const allIds = allQs?.map((q: { id: string }) => q.id) || [];
      if (allIds.length > 0) {
        await getAdmin()
          .from("quiz_user_played")
          .delete()
          .eq("user_id", userId)
          .in("question_id", allIds);
      }
      questions = await getUnplayedQuestions(userId, levelIndex, topicId, count);
    }

    // ── Format response
    const result = questions.slice(0, count).map((q) => ({
      id:      q.id,
      q:       q.question,
      opts:    q.options,
      ans:     q.answer,
      explain: q.explanation,
      img_url: q.img_url || "",
      img_cat: q.img_cat || "",
    }));

    const withPhotos = result.filter(r => r.img_url).length;
    console.log(`[RESPONSE] ${withPhotos}/${result.length} with photos`);
    console.log(`=== END ===\n`);

    return NextResponse.json({ questions: result });

  } catch (err) {
    console.error(`[FATAL]`, err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

// ═══════════════════════════════════════════════════════════════
// PUT — Mark as played
// ═══════════════════════════════════════════════════════════════
export async function PUT(req: NextRequest) {
  try {
    const { userId, questionId } = await req.json();
    await getAdmin()
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
