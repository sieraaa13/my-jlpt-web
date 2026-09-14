// app/api/generate-quiz/route.ts
export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { SupabaseClient } from "@supabase/supabase-js";
import { MAX_QUESTIONS_PER_DAY, MAX_TOPIC_CHANGES_PER_DAY, todayWIB } from "@/lib/quiz-config";
import {
  getQuizAdmin, isUuid, loadDailyRow, saveDailyRow, toClientState, userExists,
} from "@/lib/quiz-server";
import {
  GeneratedQuestion, isPlayableQuestionRow, parseGeneratedQuestions, shuffle,
} from "@/lib/quiz-questions";

const LEVEL_CONFIG = [
  {
    name: "N5",
    diff: "very easy, for absolute beginners",
    guide: "Simple, well-known facts. Clear differences between options. Focus on basic recognition."
  },
  {
    name: "N4",
    diff: "easy, for basic level learners",
    guide: "Common knowledge most people interested in Japan would know. Options are similar but distinguishable with basic understanding."
  },
  {
    name: "N3",
    diff: "intermediate level",
    guide: "Specific details, cultural context, etiquette. Requires deeper knowledge. Multiple factors to consider."
  },
  {
    name: "N2",
    diff: "difficult, for advanced learners",
    guide: "Cultural nuances, historical background, regional differences. All options plausible, requires cultural understanding."
  },
  {
    name: "N1",
    diff: "very difficult, professional level",
    guide: "Deep cultural and historical knowledge, origins and meanings behind customs. Requires comprehensive understanding."
  },
];

const TOPICS: Record<string, { desc: string; angles: string }> = {
  budaya: {
    desc:   "Japanese culture, traditions, and daily life customs",
    angles: "etiquette and manners, meaning behind customs, daily life habits, home and family life, traditional arts and clothing, what to do or say in everyday situations",
  },
  makanan: {
    desc:   "Japanese food and culinary traditions",
    angles: "dishes and their ingredients, regional specialties, eating etiquette, how dishes are made or served, seasonal and festival foods, origins of dishes",
  },
  anime: {
    desc:   "Anime, manga, and Japanese pop culture",
    angles: "well-known classic series and their creators, genres and terms (shounen, isekai, etc.), studios, how the manga/anime industry works, fan culture and events, influence on Japanese society",
  },
  tempat: {
    desc:   "Famous Instagrammable spots and iconic tourist destinations in Japan",
    angles: "which prefecture/city a landmark is in, what a place is known for, history and meaning of landmarks, best season to see something, local customs when visiting, differences between similar places",
  },
  festival: {
    desc:   "Japanese festivals (matsuri) and traditional celebrations",
    angles: "when and where festivals are held, what happens during them, their origins and meaning, traditional items, food and clothing, national holidays and seasonal events",
  },
  modern: {
    desc:   "Modern Japan: technology, convenience stores, transportation, lifestyle",
    angles: "trains and public transport rules, konbini culture, work and school life, technology and everyday conveniences, social norms in cities, how systems work (garbage sorting, IC cards, etc.)",
  },
};

// ═══════════════════════════════════════════════════════════════
// 1. GENERATE SOAL via GPT
// ═══════════════════════════════════════════════════════════════
async function generateQuestions(
  apiKey: string,
  levelIndex: number,
  topicId: string,
  count: number
): Promise<GeneratedQuestion[]> {
  const lv    = LEVEL_CONFIG[levelIndex];
  const topic = TOPICS[topicId];
  // Minta sedikit lebih banyak karena soal yang tidak lolos validasi dibuang.
  const requestCount = count + 2;

  const prompt = `You are an expert quiz creator for a Japanese culture learning platform.
Create exactly ${requestCount} multiple-choice quiz questions.

TOPIC: ${topic.desc}
DIFFICULTY: ${lv.diff} (${lv.name})
LEVEL GUIDE: ${lv.guide}

CRITICAL RULES:
- Only well-established facts that do not change over time. Do NOT ask about prices, opening hours, rankings, "currently trending" things, or recent/upcoming releases.
- If you are not certain a fact is correct, do not use it.
- Exactly 4 options per question, exactly one clearly correct answer; the other options must be plausible but definitely wrong.
- Options will be shuffled: the explanation must NOT refer to option letters, numbers, or positions.
- img_cat and img_keyword must NOT reveal the correct answer.
- Each question must be unique - no repeated patterns or similar structures.
- ALL questions, options, and explanations in Indonesian (Bahasa Indonesia).
- img_keyword: 1-3 English words describing the general subject for an Unsplash photo search (e.g., "torii gate", "ramen bowl").

QUESTION ANGLES for this topic (mix them, don't repeat the same angle):
${topic.angles}

MAKE IT RELATABLE:
- Use "kamu" (you) to make it personal where it fits
- Prefer practical and meaningful knowledge over pure trivia
- Mix interrogative words (Apa, Kapan, Mengapa, Di mana, Bagaimana) and sentence patterns

Respond ONLY with a JSON object in this exact shape:
{
  "questions": [
    {
      "question": "pertanyaan dalam bahasa Indonesia",
      "options": ["A","B","C","D"],
      "answer": 0,
      "explanation": "penjelasan singkat dalam bahasa Indonesia dengan konteks tambahan",
      "img_keyword": "english keywords untuk foto Unsplash",
      "img_cat": "kategori singkat"
    }
  ]
}`;

  console.log(`[GPT] Generating ${requestCount} questions for ${topic.desc} ${lv.name}`);

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type":  "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model:           "gpt-4o-mini",
      temperature:     0.7, // cukup bervariasi tanpa terlalu banyak mengarang fakta
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: prompt },
        { role: "user",   content: `Generate ${requestCount} unique, factually accurate questions with varied angles and structures.` },
      ],
    }),
  });

  if (!res.ok) throw new Error(`GPT error: ${res.status}`);
  const data    = await res.json();
  const content = data.choices?.[0]?.message?.content || "";
  const valid   = parseGeneratedQuestions(JSON.parse(content.replace(/```json|```/g, "").trim()));
  console.log(`[GPT] ✓ ${valid.length}/${requestCount} questions passed validation`);
  return valid.slice(0, count);
}

// ═══════════════════════════════════════════════════════════════
// 2. GET FOTO dari UNSPLASH
// ═══════════════════════════════════════════════════════════════
async function getUnsplashPhoto(keyword: string, accessKey: string): Promise<string> {
  console.log(`[UNSPLASH] Searching for: "${keyword}"`);

  try {
    const query = `${keyword} japan`;
    const url   = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape&order_by=relevant&client_id=${accessKey}`;

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
async function getUnplayedQuestions(
  admin: SupabaseClient,
  userId: string,
  levelIndex: number,
  topicId: string,
  count: number
): Promise<Record<string, unknown>[]> {
  const { data: played } = await admin
    .from("quiz_user_played")
    .select("question_id")
    .eq("user_id", userId);

  const playedIds = played?.map((p: { question_id: string }) => p.question_id) || [];

  let query = admin
    .from("quiz_questions")
    .select("*")
    .eq("category", topicId)
    .eq("level", levelIndex);

  if (playedIds.length > 0) {
    query = query.not("id", "in", `(${playedIds.join(",")})`);
  }

  const { data } = await query.limit(count * 3);
  if (!data || data.length === 0) return [];
  return shuffle(data.filter(isPlayableQuestionRow)).slice(0, count);
}

// Hanya field yang aman dikirim ke client — kunci jawaban & penjelasan
// baru dikirim oleh /api/quiz-answer setelah user menjawab.
function toClientQuestion(q: Record<string, unknown>) {
  return {
    id:      q.id,
    q:       q.question,
    opts:    q.options,
    img_url: q.img_url || "",
    img_cat: q.img_cat || "",
  };
}

// ═══════════════════════════════════════════════════════════════
// 4. PROSES SATU SOAL
// ═══════════════════════════════════════════════════════════════
async function processSingleQuestion(
  admin: SupabaseClient,
  unsplashKey: string,
  q: GeneratedQuestion,
  levelIndex: number,
  topicId: string
): Promise<Record<string, unknown>> {
  const imgUrl = await getUnsplashPhoto(q.img_keyword, unsplashKey);

  const { data, error } = await admin
    .from("quiz_questions")
    .insert({
      category:    topicId,
      level:       levelIndex,
      question:    q.question,
      options:     q.options,
      answer:      q.answer,
      explanation: q.explanation,
      img_prompt:  q.img_keyword,
      img_cat:     q.img_cat,
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

function fail(status: number, error: string) {
  return NextResponse.json({ error }, { status });
}

// ═══════════════════════════════════════════════════════════════
// MAIN HANDLER — POST
// Kuota & batas topik ditegakkan di sini. Soal dihitung sebagai kuota saat
// dikirim; soal yang sudah dikirim tapi belum dijawab (mis. halaman di-refresh)
// dikirim ulang, bukan diganti soal baru.
// ═══════════════════════════════════════════════════════════════
export async function POST(req: NextRequest) {
  try {
    const body       = await req.json().catch(() => null);
    const userId     = body?.userId;
    const levelIndex = body?.levelIndex;
    const topicId    = body?.topicId;

    if (!isUuid(userId) || !Number.isInteger(levelIndex) || !LEVEL_CONFIG[levelIndex]
        || typeof topicId !== "string" || !TOPICS[topicId]) {
      return fail(400, "Permintaan tidak valid.");
    }

    const admin = getQuizAdmin();
    if (!(await userExists(admin, userId))) {
      return fail(401, "User tidak ditemukan. Silakan login ulang.");
    }

    console.log(`\n=== QUIZ REQUEST: User ${userId}, ${LEVEL_CONFIG[levelIndex].name}, ${topicId} ===`);

    const date = todayWIB();
    const row  = await loadDailyRow(admin, userId, date);

    // ── 1. Lanjutkan soal hari ini yang belum dijawab ──
    const { data: pending } = await admin
      .from("quiz_user_played")
      .select("question_id, level")
      .eq("user_id", userId)
      .eq("quiz_date", date)
      .is("answered_at", null)
      .order("played_at", { ascending: true });

    if (pending && pending.length > 0) {
      const { data: pendingQs } = await admin
        .from("quiz_questions")
        .select("id, category, question, options, img_url, img_cat")
        .in("id", pending.map((p) => p.question_id));

      const byId    = new Map((pendingQs ?? []).map((q) => [q.id, q]));
      const ordered = pending.map((p) => byId.get(p.question_id)).filter(Boolean) as Record<string, unknown>[];

      if (ordered.length > 0) {
        console.log(`[FLOW] Resuming ${ordered.length} unanswered questions`);
        return NextResponse.json({
          questions:  ordered.map(toClientQuestion),
          resumed:    true,
          levelIndex: pending[0].level ?? row.level,
          topicId:    ordered[0].category,
          state:      toClientState(row, ordered.length),
        });
      }
    }

    // ── 2. Cek kuota & batas topik ──
    const { count: servedToday } = await admin
      .from("quiz_user_played")
      .select("question_id", { count: "exact", head: true })
      .eq("user_id", userId)
      .eq("quiz_date", date);

    // max(): baris quiz_daily yang dibuat sebelum penilaian pindah ke server
    // hanya punya q_used, belum ada attempt ber-quiz_date.
    const used      = Math.max(servedToday ?? 0, row.q_used);
    const remaining = MAX_QUESTIONS_PER_DAY - used;
    if (remaining <= 0) return fail(403, "Kuota soal hari ini sudah habis. Kembali besok!");

    if (!row.used_topics.includes(topicId) && row.used_topics.length >= MAX_TOPIC_CHANGES_PER_DAY) {
      return fail(403, `Kamu sudah memakai ${MAX_TOPIC_CHANGES_PER_DAY} topik hari ini.`);
    }

    // ── 3. Ambil soal dari bank, generate kalau kurang ──
    let questions = await getUnplayedQuestions(admin, userId, levelIndex, topicId, remaining);
    console.log(`[FLOW] Found ${questions.length} unplayed questions`);

    const needed = remaining - questions.length;
    if (needed > 0) {
      const openaiKey   = process.env.MY_JLPT;
      const unsplashKey = process.env.UNSPLASH_ACCESS_KEY;
      if (!openaiKey || !unsplashKey) {
        console.error(`[ENV] Missing keys`);
        return fail(500, "API keys not configured");
      }

      console.log(`[FLOW] Generating ${needed} new questions`);
      const newQs = await generateQuestions(openaiKey, levelIndex, topicId, needed);
      const processed = await Promise.all(
        newQs.map((q) => processSingleQuestion(admin, unsplashKey, q, levelIndex, topicId))
      );
      questions = [...questions, ...processed];
    }

    const playable = questions.filter((q) => q.id).slice(0, remaining);
    if (playable.length === 0) return fail(500, "Gagal menyiapkan soal. Coba lagi.");

    // ── 4. Catat soal sebagai attempt hari ini (sekaligus memotong kuota) ──
    // ignoreDuplicates: kalau ada request ganda, soal yang sudah tercatat
    // tidak ditimpa & tidak ikut dikirim lagi.
    const { data: marked, error: markError } = await admin
      .from("quiz_user_played")
      .upsert(
        playable.map((q) => ({ user_id: userId, question_id: q.id, quiz_date: date, level: levelIndex })),
        { onConflict: "user_id,question_id", ignoreDuplicates: true }
      )
      .select("question_id");
    if (markError) throw markError;

    const markedIds = new Set((marked ?? []).map((m) => m.question_id));
    const served    = playable.filter((q) => markedIds.has(q.id));
    if (served.length === 0) return fail(409, "Soal sedang disiapkan di tab lain. Muat ulang halaman.");

    row.q_used   = used + served.length;
    row.level    = levelIndex;
    row.topic_id = topicId;
    if (!row.used_topics.includes(topicId)) row.used_topics = [...row.used_topics, topicId];
    row.t_used   = row.used_topics.length;
    await saveDailyRow(admin, row);

    const withPhotos = served.filter((q) => q.img_url).length;
    console.log(`[RESPONSE] ${withPhotos}/${served.length} with photos`);
    console.log(`=== END ===\n`);

    return NextResponse.json({
      questions:  served.map(toClientQuestion),
      resumed:    false,
      levelIndex,
      topicId,
      state:      toClientState(row, served.length),
    });

  } catch (err) {
    console.error(`[FATAL]`, err);
    return fail(500, "Gagal memuat soal. Coba lagi.");
  }
}
