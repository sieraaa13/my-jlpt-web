// lib/photobooth-server.ts
// Helper khusus server untuk Photobooth: cek reward quiz & kuota generate harian.
// Jangan di-import dari komponen client.
import { NextResponse } from "next/server";
import { SupabaseClient } from "@supabase/supabase-js";
import { MAX_QUESTIONS_PER_DAY, todayWIB } from "@/lib/quiz-config";
import { PHOTOBOOTH_MAX_PER_DAY, PhotoboothStatus } from "@/lib/photobooth-config";
import { getQuizAdmin, isUuid, userExists } from "@/lib/quiz-server";

// Reward terbuka setelah semua soal quiz hari ini dijawab.
export async function getPhotoboothStatus(
  admin: SupabaseClient,
  userId: string,
  date: string
): Promise<PhotoboothStatus> {
  const [{ count: answered }, { data: usage }] = await Promise.all([
    admin
      .from("quiz_user_played")
      .select("question_id", { count: "exact", head: true })
      .eq("user_id", userId)
      .eq("quiz_date", date)
      .not("answered_at", "is", null),
    admin
      .from("photobooth_daily")
      .select("used")
      .eq("user_id", userId)
      .eq("date", date)
      .maybeSingle(),
  ]);

  const used = usage?.used ?? 0;
  return {
    unlocked:  (answered ?? 0) >= MAX_QUESTIONS_PER_DAY,
    used,
    max:       PHOTOBOOTH_MAX_PER_DAY,
    remaining: Math.max(PHOTOBOOTH_MAX_PER_DAY - used, 0),
  };
}

type Claim =
  | { ok: true; refund: () => Promise<void> }
  | { ok: false; response: NextResponse };

function deny(status: number, error: string): Claim {
  return { ok: false, response: NextResponse.json({ error }, { status }) };
}

// Cek user, reward & kuota, lalu ambil 1 jatah generate. Panggil refund()
// kalau generate gagal supaya jatahnya kembali.
export async function claimPhotoboothCredit(userId: unknown): Promise<Claim> {
  if (!isUuid(userId)) return deny(401, "Silakan login dulu untuk memakai Photobooth.");

  const admin = getQuizAdmin();
  if (!(await userExists(admin, userId))) {
    return deny(401, "User tidak ditemukan. Silakan login ulang.");
  }

  const date   = todayWIB();
  const status = await getPhotoboothStatus(admin, userId, date);
  if (!status.unlocked) {
    return deny(403, `Selesaikan ${MAX_QUESTIONS_PER_DAY} soal quiz hari ini dulu untuk membuka Photobooth.`);
  }

  const { data: used, error } = await admin.rpc("photobooth_consume", {
    p_user: userId,
    p_date: date,
    p_max:  PHOTOBOOTH_MAX_PER_DAY,
  });
  if (error) throw new Error(`Gagal mencatat kuota Photobooth: ${error.message}`);
  if (used == null) {
    return deny(429, `Jatah ${PHOTOBOOTH_MAX_PER_DAY}x generate Photobooth hari ini sudah habis. Kembali besok!`);
  }

  return {
    ok: true,
    refund: async () => {
      const { error: refundError } = await admin.rpc("photobooth_refund", { p_user: userId, p_date: date });
      if (refundError) console.error("[photobooth] Refund gagal:", refundError);
    },
  };
}
