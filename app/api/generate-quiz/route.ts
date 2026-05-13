// app/api/generate-quiz/route.ts
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
    label: "N5 Pemula",
    instruction: `
      - Hanya tanyakan hal-hal yang sangat terkenal dan diketahui semua orang
      - Pilihan jawaban harus jelas berbeda (1 benar, 3 jelas salah)
      - Gunakan nama-nama populer yang muncul di media umum
      - Contoh: nama kota besar, makanan paling terkenal, tempat ikonik utama
    `,
  },
  {
    name: "N4",
    label: "N4 Dasar",
    instruction: `
      - Tanyakan hal yang diketahui orang yang pernah belajar Jepang dasar
      - Pilihan jawaban mirip tapi bisa dibedakan dengan pengetahuan dasar
      - Contoh: nama prefektur, makanan regional, festival utama per musim
    `,
  },
  {
    name: "N3",
    label: "N3 Menengah",
    instruction: `
      - Tanyakan detail spesifik yang butuh pengetahuan lebih dalam
      - Contoh: jumlah, tahun bersejarah, asal usul, fungsi spesifik
      - Pilihan jawaban semuanya masuk akal, butuh pengetahuan untuk memilih
    `,
  },
  {
    name: "N2",
    label: "N2 Lanjut",
    instruction: `
      - Tanyakan konteks budaya, sejarah, atau filosofi di balik hal tersebut
      - Koneksi antara elemen budaya Jepang
      - Pilihan jawaban semua terdengar plausible, hanya 1 yang benar
      - Butuh pemahaman budaya mendalam untuk menjawab
    `,
  },
  {
    name: "N1",
    label: "N1 Profesional",
    instruction: `
      - Tanyakan konsep mendalam, nuansa budaya, atau fakta akademis
      - Hubungan filosofis atau historis yang tidak umum diketahui
      - Pilihan jawaban semua sangat masuk akal, butuh analisis mendalam
      - Level setara pengetahuan akademisi atau pakar Jepang
    `,
  },
];

const TOPIC_CONFIG: Record<string, string> = {
  budaya:   "Japanese culture, traditions, and daily life customs",
  makanan:  "Japanese food and culinary traditions",
  anime:    "Anime, manga, and Japanese pop culture",
  tempat:   "Famous Instagrammable spots, iconic tourist destinations, beautiful scenery in Japan",
  festival: "Japanese festivals (matsuri) and traditional celebrations",
  modern:   "Modern Japan: technology, convenience stores, transportation, and contemporary lifestyle",
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
Level: ${lv.label}
Level guidelines:
${lv.instruction}

IMPORTANT RULES:
- Questions must be factual and 100% accurate about Japan
- Each question must be UNIQUE and not repeat similar themes
- Write ALL questions and explanations in Indonesian (Bahasa Indonesia)
- img_prompt must be in English, detailed, visual, and directly relevant to the answer
- img_prompt example: "Fushimi Inari shrine Kyoto Japan, thousands of vermilion torii gates on hillside path, morning mist, photorealistic"

Respond ONLY with a valid JSON array, no markdown, no extra text:
[
  {
    "question": "pertanyaan dalam bahasa Indonesia",
    "options": ["pilihan A", "pilihan B", "pilihan C", "pilihan D"],
    "answer": 0,
    "explanation": "penjelasan singkat mengapa jawaban benar, dalam bahasa Indonesia",
    "img_prompt": "detailed english description for DALL-E 2 image generation",
    "img_cat": "kategori singkat dalam bahasa Indonesia"
  }
]
answer is the index (0-3) of the correct answer.`;

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
        { role: "user",   content: `Generate ${count} questions now. Make them unique and interesting.` },
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
  const safePrompt = `${prompt}, clean educational illustration, no text overlay, appropriate for all ages`;

  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type":  "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model:           "dall-e-2",
      prompt:          safePrompt,
      n:               1,
      size:            "512x512",
      response_format: "url",
    }),
  });

  if (!res.ok) return "";
  const data = await res.json();
  return data.data?.[0]?.url || "";
}

// ── 3. DOWNLOAD & UPLOAD ke SUPABASE STORAGE ─────────────────
async function uploadImageToSupabase(
  tempUrl: string,
  questionId: string
): Promise<string> {
  if (!tempUrl) return "";

  try {
    // Download gambar dari DALL-E (URL sementara)
    const imgRes = await fetch(tempUrl);
    if (!imgRes.ok) return "";
    const blob      = await imgRes.blob();
    const arrayBuf  = await blob.arrayBuffer();
    const buffer    = Buffer.from(arrayBuf);
    const filename  = `quiz/${questionId}.png`;

    // Upload ke Supabase Storage bucket "quiz-images"
    const { error } = await supabaseAdmin.storage
      .from("quiz-images")
      .upload(filename, buffer, {
        contentType: "image/png",
        upsert:      true,
      });

    if (error) { console.error("Storage upload error:", error); return ""; }

    // Ambil public URL permanen
    const { data } = supabaseAdmin.storage
      .from("quiz-images")
      .getPublicUrl(filename);

    return data.publicUrl || "";
  } catch (e) {
    console.error("Upload error:", e);
    return "";
  }
}

// ── 4. SIMPAN SOAL KE SUPABASE DB ────────────────────────────
async function saveQuestion(
  q: Record<string, unknown>,
  levelIndex: number,
  topicId: string,
  imgUrl: string
): Promise<string> {
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
      img_url:     imgUrl,
    })
    .select("id")
    .single();

  if (error) { console.error("DB insert error:", error); return ""; }
  return data?.id || "";
}

// ── 5. CEK BANK SOAL ─────────────────────────────────────────
async function getBankCount(levelIndex: number, topicId: string): Promise<number> {
  const { count } = await supabaseAdmin
    .from("quiz_questions")
    .select("*", { count: "exact", head: true })
    .eq("category", topicId)
    .eq("level",    levelIndex);
  return count || 0;
}

// ── 6. AMBIL SOAL UNTUK USER ─────────────────────────────────
async function getQuestionsForUser(
  userId: string,
  levelIndex: number,
  topicId: string,
  count: number
): Promise<Record<string, unknown>[]> {
  // Ambil ID soal yang sudah dimainkan user di cycle saat ini
  const { data: playedData } = await supabaseAdmin
    .from("quiz_user_played")
    .select("question_id")
    .eq("user_id", userId);

  const playedIds = playedData?.map((p: { question_id: string }) => p.question_id) || [];

  // Ambil soal yang belum dimainkan, urutan acak
  let query = supabaseAdmin
    .from("quiz_questions")
    .select("*")
    .eq("category", topicId)
    .eq("level",    levelIndex)
    .order("created_at", { ascending: false });

  if (playedIds.length > 0) {
    query = query.not("id", "in", `(${playedIds.join(",")})`);
  }

  const { data: unplayed } = await query.limit(count * 3);

  if (!unplayed || unplayed.length === 0) return [];

  // Shuffle dan ambil sejumlah yang dibutuhkan
  const shuffled = unplayed.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// ── MAIN HANDLER ─────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const { levelIndex, topicId, count, userId } = await req.json();

    const apiKey = process.env.MY_JLPT;
    if (!apiKey) return NextResponse.json({ error: "API key not configured" }, { status: 500 });

    // STEP 1: Cek soal yang sudah ada untuk user ini
    const existing = await getQuestionsForUser(userId, levelIndex, topicId, count);

    // STEP 2: Cek kapasitas bank soal
    const bankCount = await getBankCount(levelIndex, topicId);

    let finalQuestions = [...existing];

    // STEP 3: Generate soal baru jika bank belum penuh dan kurang soal
    const needed = count - existing.length;
    if (needed > 0 && bankCount < MAX_BANK) {
      const toGenerate = Math.min(needed, MAX_BANK - bankCount);

      // Generate soal via GPT
      const newQs = await generateQuestions(apiKey, levelIndex, topicId, toGenerate);

      // Generate semua gambar PARALEL
      const imagePromises = newQs.map((q) =>
        generateImage(apiKey, q.img_prompt as string).catch(() => "")
      );
      const tempUrls = await Promise.all(imagePromises);

      // Simpan setiap soal ke DB + upload gambar
      const savedQuestions = await Promise.all(
        newQs.map(async (q, i) => {
          const qId    = await saveQuestion(q, levelIndex, topicId, "");
          const imgUrl = qId ? await uploadImageToSupabase(tempUrls[i], qId) : "";

          // Update img_url di DB
          if (qId && imgUrl) {
            await supabaseAdmin
              .from("quiz_questions")
              .update({ img_url: imgUrl })
              .eq("id", qId);
          }

          return { ...q, id: qId, img_url: imgUrl };
        })
      );

      finalQuestions = [...finalQuestions, ...savedQuestions];
    }

    // STEP 4: Jika tetap tidak cukup → user sudah main semua 120 soal, reset cycle
    if (finalQuestions.length < count) {
      // Hapus history played user untuk kombinasi ini
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

      // Ambil ulang dengan urutan acak berbeda
      finalQuestions = await getQuestionsForUser(userId, levelIndex, topicId, count);
    }

    // Format response
    const result = finalQuestions.slice(0, count).map((q) => ({
      id:          q.id,
      q:           q.question,
      opts:        q.options,
      ans:         q.answer,
      explain:     q.explanation,
      img_url:     q.img_url || "",
      img_cat:     q.img_cat || "",
    }));

    return NextResponse.json({ questions: result });

  } catch (err) {
    console.error("Generate quiz error:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

// ── RECORD PLAYED ─────────────────────────────────────────────
export async function PUT(req: NextRequest) {
  try {
    const { userId, questionId } = await req.json();

    await supabaseAdmin
      .from("quiz_user_played")
      .upsert({ user_id: userId, question_id: questionId }, { onConflict: "user_id,question_id" });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
