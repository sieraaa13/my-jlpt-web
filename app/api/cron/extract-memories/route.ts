import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { getActiveMemories, getUserProfile } from "@/lib/siera-memory";
import { MEMORY_EXTRACTOR_SYSTEM_PROMPT, ExtractedMemoryAction } from "@/lib/memory-extractor-prompt";
import { archiveStaleMemories, computeAndSaveMonthlySummaries, isFirstOfMonthWib } from "@/lib/siera-monthly-summary";

const PROFILE_TYPES: ExtractedMemoryAction["type"][] = ["goal", "learning_preference"];

export const runtime = "nodejs";
export const maxDuration = 60;

const WIB_OFFSET_MS = 7 * 60 * 60 * 1000;

/** Hitung rentang UTC untuk "kemarin" berdasarkan zona waktu WIB (UTC+7). */
function getYesterdayWibRange() {
  const nowWib = new Date(Date.now() + WIB_OFFSET_MS);
  const y = nowWib.getUTCFullYear();
  const m = nowWib.getUTCMonth();
  const d = nowWib.getUTCDate() - 1;

  const startUtcMs = Date.UTC(y, m, d, 0, 0, 0) - WIB_OFFSET_MS;
  const endUtcMs = startUtcMs + 24 * 60 * 60 * 1000;

  const processDate = new Date(Date.UTC(y, m, d)).toISOString().slice(0, 10);

  return {
    startIso: new Date(startUtcMs).toISOString(),
    endIso: new Date(endUtcMs).toISOString(),
    processDate,
  };
}

async function callExtractor(
  apiKey: string,
  messages: { role: string; content: string }[],
  existingMemories: Awaited<ReturnType<typeof getActiveMemories>>,
  existingProfile: Awaited<ReturnType<typeof getUserProfile>>
): Promise<ExtractedMemoryAction[]> {
  const userPayload = JSON.stringify({
    conversation_today: messages,
    existing_active_memories: existingMemories
      .filter((m) => !PROFILE_TYPES.includes(m.type))
      .map((m) => ({
        id: m.id,
        type: m.type,
        topic: m.topic,
        subject: m.subject,
        description: m.description,
      })),
    existing_user_profile: existingProfile.map((p) => ({
      category: p.category,
      description: p.description,
    })),
  });

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-5-nano",
      messages: [
        { role: "system", content: MEMORY_EXTRACTOR_SYSTEM_PROMPT },
        { role: "user", content: userPayload },
      ],
      temperature: 0.2,
      max_completion_tokens: 1500,
      reasoning_effort: "low",
      response_format: { type: "json_object" },
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`OpenAI error ${response.status}: ${errText}`);
  }

  const data = await response.json();
  const raw = data.choices?.[0]?.message?.content ?? "{}";

  let parsed: { memories?: ExtractedMemoryAction[] };
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new Error(`Gagal parse JSON dari extractor: ${raw.slice(0, 200)}`);
  }

  return Array.isArray(parsed.memories) ? parsed.memories : [];
}

/** Upsert/hapus slot profil stabil (goal, learning_preference) di `user_profile`. */
async function applyProfileAction(userId: string, item: ExtractedMemoryAction): Promise<boolean> {
  const category = item.type as "goal" | "learning_preference";

  if (item.action === "deactivate") {
    const { error } = await supabase
      .from("user_profile")
      .delete()
      .eq("user_id", userId)
      .eq("category", category);
    return !error;
  }

  // "create" maupun "update" sama-sama upsert ke satu slot per kategori.
  const { error } = await supabase.from("user_profile").upsert(
    {
      user_id: userId,
      category,
      description: item.description,
      confidence: item.confidence ?? 0.5,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id,category" }
  );
  return !error;
}

async function applyMemoryActions(userId: string, actions: ExtractedMemoryAction[]) {
  let created = 0;
  let updated = 0;

  for (const item of actions) {
    if (PROFILE_TYPES.includes(item.type)) {
      const ok = await applyProfileAction(userId, item);
      if (ok) item.action === "create" ? (created += 1) : (updated += 1);
      continue;
    }

    if (item.action === "create") {
      const { error } = await supabase.from("memories").insert({
        user_id: userId,
        type: item.type,
        topic: item.topic,
        subject: item.subject,
        description: item.description,
        status: item.status ?? "active",
        importance: item.importance ?? 0.5,
        confidence: item.confidence ?? 0.5,
      });
      if (!error) created += 1;
    } else if ((item.action === "update" || item.action === "deactivate") && item.memory_id) {
      const { error } = await supabase
        .from("memories")
        .update({
          status: item.action === "deactivate" ? "inactive" : item.status ?? "inactive",
          description: item.description || undefined,
          importance: item.importance,
          confidence: item.confidence,
          updated_at: new Date().toISOString(),
        })
        .eq("id", item.memory_id)
        .eq("user_id", userId);
      if (!error) updated += 1;
    }
  }

  return { created, updated };
}

export async function GET(req: NextRequest) {
  const cronSecret = process.env.CRON_SECRET;
  const authHeader = req.headers.get("authorization");

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const apiKey = process.env.MY_JLPT;
  if (!apiKey) {
    return NextResponse.json({ error: "API Key missing" }, { status: 500 });
  }

  const { startIso, endIso, processDate } = getYesterdayWibRange();

  const { data: rows, error: msgError } = await supabase
    .from("chat_messages")
    .select("user_id")
    .gte("created_at", startIso)
    .lt("created_at", endIso);

  if (msgError) {
    return NextResponse.json({ error: msgError.message }, { status: 500 });
  }

  const userIds = Array.from(new Set((rows ?? []).map((r) => r.user_id as string)));

  const summary = {
    processDate,
    usersFound: userIds.length,
    processed: 0,
    skippedAlreadyDone: 0,
    created: 0,
    updated: 0,
    errors: [] as string[],
  };

  for (const userId of userIds) {
    // Lewati kalau hari ini sudah pernah diproses untuk user ini (idempotent).
    const { data: existingLog } = await supabase
      .from("memory_extraction_log")
      .select("user_id")
      .eq("user_id", userId)
      .eq("process_date", processDate)
      .maybeSingle();

    if (existingLog) {
      summary.skippedAlreadyDone += 1;
      continue;
    }

    try {
      const { data: msgs, error: fetchErr } = await supabase
        .from("chat_messages")
        .select("role, content")
        .eq("user_id", userId)
        .gte("created_at", startIso)
        .lt("created_at", endIso)
        .order("created_at", { ascending: true });

      if (fetchErr || !msgs || msgs.length === 0) continue;

      const [existingMemories, existingProfile] = await Promise.all([
        getActiveMemories(userId, 30),
        getUserProfile(userId),
      ]);
      const actions = await callExtractor(apiKey, msgs, existingMemories, existingProfile);
      const { created, updated } = await applyMemoryActions(userId, actions);

      summary.created += created;
      summary.updated += updated;
      summary.processed += 1;

      await supabase
        .from("memory_extraction_log")
        .upsert({ user_id: userId, process_date: processDate }, { onConflict: "user_id,process_date" });
    } catch (err: any) {
      summary.errors.push(`${userId}: ${err.message}`);
    }
  }

  // Arsipkan memori inactive yang sudah 6+ bulan tidak diperbarui (statistik
  // murni, tanpa LLM). Dijalankan tiap kali cron ini jalan, bukan hanya sekali
  // sebulan, supaya arsip tetap ter-update tanpa perlu cron terpisah.
  const archiveResult = await archiveStaleMemories();

  // Rangkuman belajar bulanan (statistik, bukan LLM) dihitung tanggal 1 tiap
  // bulan untuk bulan yang baru selesai. Idempotent lewat unique constraint
  // di tabel monthly_summaries.
  let monthlySummary: Awaited<ReturnType<typeof computeAndSaveMonthlySummaries>> | null = null;
  if (isFirstOfMonthWib()) {
    monthlySummary = await computeAndSaveMonthlySummaries();
  }

  return NextResponse.json({ ...summary, archivedMemories: archiveResult.archived, monthlySummary });
}
