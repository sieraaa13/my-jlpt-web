// app/api/generate-quiz/route.ts
export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// ── LAZY INIT SUPABASE CLIENT ────────────────────────────────
function getAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error("Missing Supabase env vars: NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  }
  return createClient(url, key);
}

const MAX_BANK = 120;

const LEVEL_CONFIG = [
  { name: "N5", diff: "very easy, for absolute beginners",
    instruction: "Ask only very well-known things. Options must be clearly different (1 correct, 3 obviously wrong)." },
  { name: "N4", diff: "easy, for basic level learners",
    instruction: "Ask things known by people who studied basic Japanese. Options similar but distinguishable." },
  { name: "N3", diff: "intermediate level",
    instruction: "Ask specific details requiring deeper knowledge. Counts, years, origins, specific functions." },
  { name: "N2", diff: "difficult, for advanced learners",
    instruction: "Ask cultural context, history, or philosophy. All options plausible." },
  { name: "N1", diff: "very difficult, professional level",
    instruction: "Ask deep concepts, cultural nuances, or academic facts. Requires deep analysis." },
];

const TOPIC_CONFIG: Record<string, string> = {
  budaya:   "Japanese culture, traditions, and daily life customs",
  makanan:  "Japanese food and culinary traditions",
  anime:    "Anime, manga, and Japanese pop culture",
  tempat:   "Famous Instagrammable spots, iconic tourist destinations, beautiful scenery in Japan",
  festival: "Japanese festivals (matsuri) and traditional celebrations",
  modern:   "Modern Japan: technology, convenience stores, transportation, contemporary lifestyle",
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
  const topic = TOPIC_CONFIG[topicId] || topicId;

  const prompt = `You are an expert quiz creator for a Japanese culture learning platform.
Create exactly ${count} multiple-choice quiz questions.
Topic: ${topic}
Difficulty: ${lv.diff} (${lv.name})
Guidelines: ${lv.instruction}

RULES:
- 100% factually accurate
- Each question UNIQUE
- ALL questions and explanations in Indonesian (Bahasa Indonesia)
- img_prompt in English, detailed, photorealistic
- img_prompt example: "Fushimi Inari shrine Kyoto Japan, vermilion torii gates path, photorealistic"

Respond ONLY with valid JSON array, no markdown:
[
  {
    "question": "pertanyaan dalam bahasa Indonesia",
    "options": ["A","B","C","D"],
    "answer": 0,
    "explanation": "penjelasan dalam bahasa Indonesia",
    "img_prompt": "detailed english DALL-E prompt",
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

  if (!res.ok) {
    const err = await res.text();
    console.error(`[GPT] Error ${res.status}:`, err);
    throw new Error(`GPT error: ${res.status}`);
  }

  const data    = await res.json();
  const content = data.choices?.[0]?.message?.content || "";
  const parsed  = JSON.parse(content.replace(/```json|```/g, "").trim());
  console.log(`[GPT] ✓ Generated ${parsed.length} questions`);
  return parsed;
}

// ═══════════════════════════════════════════════════════════════
// 2. GENERATE GAMBAR via DALL-E 2 (dengan logging detail)
// ═══════════════════════════════════════════════════════════════
async function generateImage(apiKey: string, prompt: string): Promise<string> {
  console.log(`[DALLE] Starting image gen for: "${prompt.slice(0, 60)}..."`);

  try {
    const res = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type":  "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model:           "dall-e-2",
        prompt:          `${prompt}, clean illustration, no text overlay, family-friendly`,
        n:               1,
        size:            "512x512",
        response_format: "url",
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error(`[DALLE] ✗ Failed ${res.status}:`, errText.slice(0, 200));
      return "";
    }

    const data = await res.json();
    const url  = data.data?.[0]?.url || "";
    console.log(`[DALLE] ✓ Got URL (length: ${url.length})`);
    return url;
  } catch (err) {
    console.error(`[DALLE] ✗ Exception:`, err);
    return "";
  }
}

// ═══════════════════════════════════════════════════════════════
// 3. UPLOAD GAMBAR ke SUPABASE STORAGE (dengan logging detail)
// ═══════════════════════════════════════════════════════════════
async function uploadToSupabase(tempUrl: string, questionId: string): Promise<string> {
  if (!tempUrl || !questionId) {
    console.warn(`[UPLOAD] ⚠ Skipped — empty tempUrl or questionId`);
    return "";
  }

  console.log(`[UPLOAD] Starting for question ${questionId}`);

  try {
    // 1. Download dari DALL-E URL temporary
    const imgRes = await fetch(tempUrl);
    if (!imgRes.ok) {
      console.error(`[UPLOAD] ✗ Download failed: ${imgRes.status}`);
      return "";
    }

    const arrayBuf = await imgRes.arrayBuffer();
    const buffer   = Buffer.from(arrayBuf);
    console.log(`[UPLOAD] Downloaded ${buffer.length} bytes`);

    const filename = `quiz/${questionId}.png`;

    // 2. Upload ke Supabase Storage
    const { error: uploadErr } = await getAdmin().storage
      .from("quiz-images")
      .upload(filename, buffer, {
        contentType: "image/png",
        upsert:      true,
      });

    if (uploadErr) {
      console.error(`[UPLOAD] ✗ Supabase error:`, uploadErr);
      return "";
    }

    // 3. Ambil public URL permanen
    const { data: urlData } = getAdmin().storage
      .from("quiz-images")
      .getPublicUrl(filename);

    const publicUrl = urlData?.publicUrl || "";
    console.log(`[UPLOAD] ✓ Uploaded: ${publicUrl}`);
    return publicUrl;
  } catch (err) {
    console.error(`[UPLOAD] ✗ Exception:`, err);
    return "";
  }
}

// ═══════════════════════════════════════════════════════════════
// 4. HELPER FUNCTIONS — Supabase queries
// ═══════════════════════════════════════════════════════════════
async function getBankCount(levelIndex: number, topicId: string): Promise<number> {
  const { count, error } = await getAdmin()
    .from("quiz_questions")
    .select("*", { count: "exact", head: true })
    .eq("category", topicId)
    .eq("level",    levelIndex);

  if (error) console.error(`[DB] getBankCount error:`, error);
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
    .eq("level",    levelIndex);

  if (playedIds.length > 0) {
    query = query.not("id", "in", `(${playedIds.join(",")})`);
  }

  const { data, error } = await query.limit(count * 3);
  if (error) {
    console.error(`[DB] getUnplayedQuestions error:`, error);
    return [];
  }
  if (!data || data.length === 0) return [];

  return data.sort(() => Math.random() - 0.5).slice(0, count);
}

// ═══════════════════════════════════════════════════════════════
// 5. PROSES SATU SOAL: insert DB → generate image → upload → update
// ═══════════════════════════════════════════════════════════════
async function processSingleQuestion(
  apiKey: string,
  q: Record<string, unknown>,
  levelIndex: number,
  topicId: string
): Promise<Record<string, unknown>> {
  // STEP 1: Insert soal dulu (tanpa img_url) → dapat ID
  const { data: inserted, error: insertErr } = await getAdmin()
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

  if (insertErr || !inserted) {
    console.error(`[DB] Insert failed:`, insertErr);
    return { ...q, id: "", img_url: "" };
  }

  const questionId = inserted.id;
  console.log(`[DB] ✓ Inserted question ${questionId}`);

  // STEP 2: Generate gambar dari DALL-E
  const dalleUrl = await generateImage(apiKey, q.img_prompt as string);
  if (!dalleUrl) {
    console.warn(`[FLOW] No image URL — skipping upload for ${questionId}`);
    return { ...q, id: questionId, img_url: "" };
  }

  // STEP 3: Upload ke Supabase Storage
  const publicUrl = await uploadToSupabase(dalleUrl, questionId);
  if (!publicUrl) {
    console.warn(`[FLOW] Upload failed for ${questionId}`);
    return { ...q, id: questionId, img_url: "" };
  }

  // STEP 4: Update img_url di DB
  const { error: updateErr } = await getAdmin()
    .from("quiz_questions")
    .update({ img_url: publicUrl })
    .eq("id", questionId);

  if (updateErr) {
    console.error(`[DB] Update img_url failed:`, updateErr);
  } else {
    console.log(`[FLOW] ✓ Complete for ${questionId}`);
  }

  return { ...q, id: questionId, img_url: publicUrl };
}

// ═══════════════════════════════════════════════════════════════
// MAIN HANDLER — POST
// ═══════════════════════════════════════════════════════════════
export async function POST(req: NextRequest) {
  try {
    const { levelIndex, topicId, count, userId } = await req.json();
    console.log(`\n=== NEW QUIZ REQUEST ===`);
    console.log(`User: ${userId}, Level: ${levelIndex}, Topic: ${topicId}, Count: ${count}`);

    const apiKey = process.env.MY_JLPT;
    if (!apiKey) {
      console.error(`[ENV] MY_JLPT not configured`);
      return NextResponse.json({ error: "API key not configured" }, { status: 500 });
    }

    // ── STEP 1: Ambil soal yang belum dimainkan
    let questions = await getUnplayedQuestions(userId, levelIndex, topicId, count);
    console.log(`[FLOW] Found ${questions.length} unplayed questions`);

    // ── STEP 2: Generate baru jika kurang & bank belum penuh
    const needed    = count - questions.length;
    const bankCount = await getBankCount(levelIndex, topicId);
    console.log(`[FLOW] Bank: ${bankCount}/${MAX_BANK}, Need: ${needed} more`);

    if (needed > 0 && bankCount < MAX_BANK) {
      const toGen = Math.min(needed, MAX_BANK - bankCount);
      console.log(`[FLOW] Generating ${toGen} new questions`);

      // Generate soal via GPT
      const newQs = await generateQuestions(apiKey, levelIndex, topicId, toGen);

      // Proses tiap soal PARALEL (insert → generate img → upload → update)
      const processed = await Promise.all(
        newQs.map((q) => processSingleQuestion(apiKey, q, levelIndex, topicId))
      );

      questions = [...questions, ...processed];
      console.log(`[FLOW] Total questions now: ${questions.length}`);
    }

    // ── STEP 3: Reset cycle jika semua soal sudah dimainkan
    if (questions.length < count) {
      console.log(`[FLOW] Resetting cycle — user has played all questions`);

      const { data: allQs } = await getAdmin()
        .from("quiz_questions")
        .select("id")
        .eq("category", topicId)
        .eq("level",    levelIndex);

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

    const withImages    = result.filter(r => r.img_url).length;
    const withoutImages = result.length - withImages;
    console.log(`[RESPONSE] ${withImages} with images, ${withoutImages} without`);
    console.log(`=== END REQUEST ===\n`);

    return NextResponse.json({ questions: result });

  } catch (err) {
    console.error(`[FATAL] Quiz generation error:`, err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

// ═══════════════════════════════════════════════════════════════
// PUT — Tandai soal sebagai sudah dimainkan
// ═══════════════════════════════════════════════════════════════
export async function PUT(req: NextRequest) {
  try {
    const { userId, questionId } = await req.json();

    if (!userId || !questionId) {
      return NextResponse.json({ error: "Missing userId or questionId" }, { status: 400 });
    }

    const { error } = await getAdmin()
      .from("quiz_user_played")
      .upsert(
        { user_id: userId, question_id: questionId },
        { onConflict: "user_id,question_id" }
      );

    if (error) {
      console.error(`[DB] Mark played error:`, error);
      return NextResponse.json({ error: String(error) }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(`[PUT] Error:`, err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
