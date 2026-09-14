// app/api/generate-quiz/route.ts
export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { SupabaseClient } from "@supabase/supabase-js";
import { MAX_QUESTIONS_PER_DAY, MAX_TOPIC_CHANGES_PER_DAY, todayWIB } from "@/lib/quiz-config";
import {
  getQuizAdmin, isUuid, loadDailyRow, saveDailyRow, toClientState, userExists,
} from "@/lib/quiz-server";

const LEVEL_CONFIG = [
  {
    name: "N5",
    diff: "very easy, for absolute beginners",
    guide: "Simple, well-known facts. Clear differences between options. Focus on basic recognition."
  },
  {
    name: "N4",
    diff: "easy, for basic level learners",
    guide: "Practical travel tips and common knowledge. Options are similar but distinguishable with basic understanding."
  },
  {
    name: "N3",
    diff: "intermediate level",
    guide: "Specific details, cultural context, etiquette. Requires deeper knowledge. Multiple factors to consider."
  },
  {
    name: "N2",
    diff: "difficult, for advanced learners",
    guide: "Cultural nuances, historical background, local insights. All options plausible, requires cultural understanding."
  },
  {
    name: "N1",
    diff: "very difficult, professional level",
    guide: "Deep cultural analysis, philosophical connections, expert-level knowledge. Requires comprehensive understanding."
  },
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
// 1. GENERATE SOAL via GPT - IMPROVED PROMPT
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

TOPIC: ${topic}
DIFFICULTY: ${lv.diff} (${lv.name})
LEVEL GUIDE: ${lv.guide}

CRITICAL RULES:
- 100% factually accurate about Japan
- Each question MUST BE UNIQUE - no repeated patterns or similar structures
- ALL questions and explanations in Indonesian (Bahasa Indonesia)
- img_keyword: 1-3 English words for Unsplash photo search (e.g., "fushimi inari kyoto", "ramen bowl")

QUESTION VARIETY - Mix these types (DON'T repeat patterns):

TRENDING & SEASONAL:
- Trending spots: What's currently popular among young travelers/influencers?
- Seasonal recommendations: Best places to visit in spring/summer/fall/winter
- Hidden gems: Lesser-known spots locals recommend

PRACTICAL EXPERIENCE:
- What to do: Main activities/experiences at the location
- Unique experiences: Once-in-a-lifetime things to try there
- Photo spots: Best angles/locations for Instagram-worthy shots
- Time management: How long to spend, best route to explore

CULTURAL & CONTEXT:
- Cultural significance: Why this place matters to Japanese culture
- Historical background: Stories or legends about the location
- Local customs: Etiquette or traditions to know

PLANNING & TIPS:
- Timing: Best time of day/season/weather to visit
- What to bring: Essential items for the experience
- Budget tips: How to enjoy without overspending
- Crowd avoidance: When/how to avoid tourist crowds

COMPARISONS & CHOICES:
- Similar places: Differences between [X] vs [Y]
- Local vs tourist: What locals do vs what tourists typically do

MAKE IT RELATABLE:
- Use "kamu" (you) to make it personal
- Focus on real travel scenarios and practical value
- Include insights travelers would actually use
- Avoid pure trivia - add context and usefulness

VARY QUESTION STRUCTURE:
- Don't start all questions the same way
- Mix interrogative words (Apa, Kapan, Mengapa, Di mana, Bagaimana)
- Change sentence patterns and angles
- Each question should feel fresh and different

Respond ONLY with valid JSON array, no markdown:
[
  {
    "question": "pertanyaan dalam bahasa Indonesia yang relatable dan spesifik",
    "options": ["A","B","C","D"],
    "answer": 0,
    "explanation": "penjelasan singkat dalam bahasa Indonesia dengan konteks tambahan",
    "img_keyword": "english keywords untuk foto Unsplash",
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
      temperature: 0.95, // Increased for more creativity
      messages: [
        { role: "system", content: prompt },
        { role: "user",   content: `Generate ${count} UNIQUE questions with VARIED structures. Make each one different in approach, angle, and focus.` },
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
// 2. GET FOTO dari UNSPLASH - IMPROVED SEARCH
// ═══════════════════════════════════════════════════════════════
async function getUnsplashPhoto(keyword: string, accessKey: string): Promise<string> {
  console.log(`[UNSPLASH] Searching for: "${keyword}"`);

  try {
    // Improved query for better, more Instagrammable photos
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
  return data.sort(() => Math.random() - 0.5).slice(0, count);
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
  q: Record<string, unknown>,
  levelIndex: number,
  topicId: string
): Promise<Record<string, unknown>> {
  const imgUrl = await getUnsplashPhoto(q.img_keyword as string, unsplashKey);

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
