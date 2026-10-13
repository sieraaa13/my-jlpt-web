import { supabase } from "@/lib/supabase";
import { type Level, type MondaiGroup, getCatalog, getMondai, getMondaiList, mondaiOfKey } from "@/lib/mondai";

// ==========================================================
// PROGRES PER MONDAI (N1 / N3)
// Menggabungkan dua sumber:
// - practice_history : hasil Latihan per Mondai (per soal + waktu)
// - exam_history     : hasil Ujian Lengkap (jawaban dipetakan ke mondai)
// ==========================================================

export interface PracticeItem {
  k: string; // key soal `${periode}:${mondai}:${urutan}`
  a: number; // jawaban user, -1 = tidak dijawab
  c: boolean; // benar?
}

export interface Attempt {
  key: string;
  mondai: number;
  correct: boolean;
  at: number; // epoch ms
}

export interface PracticeSession {
  mondai: number;
  units: number;
  duration_sec: number | null;
  target_sec: number | null;
  completed_at: string;
}

export interface Progress {
  level: Level;
  attempts: Attempt[];
  sessions: PracticeSession[];
  // status terakhir tiap soal: true = terakhir benar, false = terakhir salah
  lastByKey: Record<string, boolean>;
}

export const emptyProgress = (level: Level): Progress => ({ level, attempts: [], sessions: [], lastByKey: {} });

export async function loadProgress(level: Level, userId: string): Promise<Progress> {
  const catalog = getCatalog(level);
  const dbLevel = level.toUpperCase();
  const attempts: Attempt[] = [];

  const [{ data: exams }, { data: practice }] = await Promise.all([
    supabase.from("exam_history").select("year, month, answers, completed_at").eq("user_id", userId).eq("level", dbLevel),
    // Kalau tabel practice_history belum dibuat, query ini error → dianggap kosong
    supabase.from("practice_history").select("mondai, units, duration_sec, target_sec, items, completed_at").eq("user_id", userId).eq("level", dbLevel),
  ]);

  for (const ex of exams ?? []) {
    const map = catalog.examKeys[`${ex.year}-${ex.month}`];
    if (!map) continue;
    const at = new Date(ex.completed_at).getTime();
    const answers: Record<string, number> = ex.answers ?? {};
    // Satu mondai dihitung hanya kalau minimal satu soalnya dijawab, supaya
    // section yang dilewati (mis. cuma mengerjakan Kanji) tidak dianggap 0%.
    const touched = new Set(Object.keys(answers).filter((k) => map[k]).map((k) => mondaiOfKey(map[k])));
    const correctByKey = new Map<string, number>();
    for (const m of touched) {
      for (const u of catalog.units[m]) {
        if (u.period !== `${ex.year}-${ex.month}`) continue;
        u.questions.forEach((q) => correctByKey.set(q.key, q.correct));
      }
    }
    for (const [examKey, key] of Object.entries(map)) {
      if (!correctByKey.has(key)) continue;
      attempts.push({ key, mondai: mondaiOfKey(key), correct: answers[examKey] === correctByKey.get(key), at });
    }
  }

  const sessions: PracticeSession[] = [];
  for (const p of practice ?? []) {
    const at = new Date(p.completed_at).getTime();
    sessions.push({ mondai: p.mondai, units: p.units, duration_sec: p.duration_sec, target_sec: p.target_sec, completed_at: p.completed_at });
    for (const it of (p.items ?? []) as PracticeItem[]) {
      attempts.push({ key: it.k, mondai: mondaiOfKey(it.k), correct: it.c, at });
    }
  }

  attempts.sort((a, b) => a.at - b.at);
  const lastByKey: Record<string, boolean> = {};
  attempts.forEach((a) => (lastByKey[a.key] = a.correct));
  return { level, attempts, sessions, lastByKey };
}

export async function savePracticeSession(args: {
  level: Level;
  userId: string;
  mondai: number;
  units: number;
  durationSec: number | null;
  targetSec: number;
  items: PracticeItem[];
}) {
  const correct = args.items.filter((i) => i.c).length;
  const { error } = await supabase.from("practice_history").insert({
    user_id: args.userId,
    level: args.level.toUpperCase(),
    mondai: args.mondai,
    total: args.items.length,
    correct,
    units: args.units,
    duration_sec: args.durationSec,
    target_sec: args.targetSec,
    items: args.items,
  });
  if (error) console.error("Gagal menyimpan latihan:", error);
  return !error;
}

// ── AGREGASI ─────────────────────────────────────────────────

export interface Score {
  correct: number;
  total: number;
}

export const pct = (s: Score) => (s.total > 0 ? Math.round((s.correct / s.total) * 100) : null);

export function scoreByMondai(p: Progress): Record<number, Score> {
  const out: Record<number, Score> = {};
  getMondaiList(p.level).forEach((m) => (out[m.n] = { correct: 0, total: 0 }));
  p.attempts.forEach((a) => {
    const s = out[a.mondai];
    if (!s) return;
    s.total++;
    if (a.correct) s.correct++;
  });
  return out;
}

export function scoreByGroup(p: Progress, since = 0, until = Infinity): Record<MondaiGroup, Score> {
  const out: Record<MondaiGroup, Score> = { moji: { correct: 0, total: 0 }, bunpou: { correct: 0, total: 0 }, dokkai: { correct: 0, total: 0 } };
  p.attempts.forEach((a) => {
    if (a.at < since || a.at >= until) return;
    const m = getMondai(p.level, a.mondai);
    if (!m) return;
    const s = out[m.group];
    s.total++;
    if (a.correct) s.correct++;
  });
  return out;
}

// Rata-rata detik per unit dari sesi latihan yang memakai timer
export function avgSecPerUnit(p: Progress): Record<number, number | null> {
  const sum: Record<number, { sec: number; units: number }> = {};
  p.sessions.forEach((s) => {
    if (!s.duration_sec || !s.units) return;
    const t = (sum[s.mondai] ??= { sec: 0, units: 0 });
    t.sec += s.duration_sec;
    t.units += s.units;
  });
  const out: Record<number, number | null> = {};
  getMondaiList(p.level).forEach((m) => (out[m.n] = sum[m.n] ? Math.round(sum[m.n].sec / sum[m.n].units) : null));
  return out;
}

// Mondai dengan akurasi terendah (minimal 5 soal sudah dikerjakan)
export function weakestMondai(p: Progress, limit = 3) {
  const scores = scoreByMondai(p);
  return getMondaiList(p.level).filter((m) => scores[m.n].total >= 5)
    .map((m) => ({ mondai: m, pct: pct(scores[m.n])! }))
    .filter((x) => x.pct < 70)
    .sort((a, b) => a.pct - b.pct)
    .slice(0, limit);
}

export function formatDuration(sec: number) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

// ── RINGKASAN UNTUK SIERA ────────────────────────────────────
// Angka di sini SAMA dengan yang tampil di tab Statistik, supaya yang
// Siera sampaikan ke user selalu cocok dengan yang user lihat sendiri.
// Dihitung ulang tiap chat dari database, jadi tidak perlu disimpan ke memori.
const MIN_SAMPLE = 5;

export function buildEvaluationSummary(p: Progress): string {
  if (p.attempts.length === 0) return "";
  const MONDAI = getMondaiList(p.level);
  const LV = p.level.toUpperCase();
  // N3: nomor 問題 berulang antar lembar, jadi selalu disertai nama tipenya
  const tag = (m: (typeof MONDAI)[number]) => `${m.label} ${m.jp}`;
  const lines: string[] = [];
  const last = new Date(p.attempts[p.attempts.length - 1].at).toLocaleDateString("id-ID", { timeZone: "Asia/Jakarta" });
  lines.push(`Total ${p.attempts.length} jawaban soal ${LV} tercatat (Ujian Lengkap + Latihan per Mondai), terakhir ${last}.`);

  const groups = scoreByGroup(p);
  lines.push(
    "Akurasi per bagian: " +
      (["moji", "bunpou", "dokkai"] as MondaiGroup[])
        .map((g) => {
          const label = g === "moji" ? "文字・語彙" : g === "bunpou" ? "文法" : "読解";
          const v = pct(groups[g]);
          return `${label} ${v === null ? "belum ada data" : `${v}% (${groups[g].total} soal)`}`;
        })
        .join(", ") + "."
  );

  const scores = scoreByMondai(p);
  const enough = MONDAI.filter((m) => scores[m.n].total >= MIN_SAMPLE);
  const notEnough = MONDAI.filter((m) => scores[m.n].total < MIN_SAMPLE);
  if (enough.length > 0) {
    lines.push("Akurasi per mondai: " + enough.map((m) => `${tag(m)} ${pct(scores[m.n])}% (${scores[m.n].total} soal)`).join("; ") + ".");
  }
  if (notEnough.length > 0) {
    lines.push(`Belum cukup data (< ${MIN_SAMPLE} soal), jangan dinilai: ` + notEnough.map(tag).join(", ") + ".");
  }

  const weak = weakestMondai(p);
  if (weak.length > 0) {
    lines.push("Tipe terlemah: " + weak.map((w) => `${tag(w.mondai)} ${w.pct}%`).join(", ") + ".");
  }

  const times = avgSecPerUnit(p);
  const slow = MONDAI.filter((m) => times[m.n] !== null && times[m.n]! > m.targetSec);
  const onTime = MONDAI.filter((m) => times[m.n] !== null && times[m.n]! <= m.targetSec);
  if (slow.length > 0) {
    lines.push(
      "Terlalu lambat (rata-rata vs target, dari latihan bertimer): " +
        slow.map((m) => `${tag(m)} ${formatDuration(times[m.n]!)} / ${formatDuration(m.targetSec)} per ${m.passage ? "teks" : "soal"}`).join("; ") + "."
    );
  }
  if (onTime.length > 0) lines.push("Sudah sesuai target waktu: " + onTime.map(tag).join(", ") + ".");

  const WEEK = 7 * 24 * 60 * 60 * 1000;
  const now = Date.now();
  const thisWeek = scoreByGroup(p, now - WEEK, now);
  const lastWeek = scoreByGroup(p, now - 2 * WEEK, now - WEEK);
  const trend = (["moji", "bunpou", "dokkai"] as MondaiGroup[])
    .filter((g) => thisWeek[g].total > 0 && lastWeek[g].total > 0)
    .map((g) => `${g === "moji" ? "文字・語彙" : g === "bunpou" ? "文法" : "読解"} ${pct(lastWeek[g])}% → ${pct(thisWeek[g])}%`);
  if (trend.length > 0) lines.push(`Tren minggu lalu → minggu ini: ${trend.join(", ")}.`);

  const stillWrong = Object.values(p.lastByKey).filter((c) => !c).length;
  if (stillWrong > 0) lines.push(`${stillWrong} soal masih salah di percobaan terakhirnya (bisa diulang lewat filter "Masih salah").`);

  return lines.join("\n");
}
