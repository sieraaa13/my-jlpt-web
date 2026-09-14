// app/api/quiz-answer/route.ts
// Memeriksa jawaban Quiz Harian di server: kunci jawaban tidak pernah dikirim
// ke client sebelum dijawab, poin dihitung dari level saat soal dikirim, dan
// setiap soal hanya bisa dinilai satu kali.
export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { pointsFor, previousDate, todayWIB } from "@/lib/quiz-config";
import {
  countPending, getQuizAdmin, isUuid, loadDailyRow, saveDailyRow, toClientState, userExists,
} from "@/lib/quiz-server";

function fail(status: number, error: string) {
  return NextResponse.json({ error }, { status });
}

export async function POST(req: NextRequest) {
  try {
    const body       = await req.json().catch(() => null);
    const userId     = body?.userId;
    const questionId = body?.questionId;
    const choice     = body?.choice;

    if (!isUuid(userId) || !isUuid(questionId) || !Number.isInteger(choice) || choice < 0) {
      return fail(400, "Permintaan tidak valid.");
    }

    const admin = getQuizAdmin();
    if (!(await userExists(admin, userId))) {
      return fail(401, "User tidak ditemukan. Silakan login ulang.");
    }

    const date = todayWIB();

    const { data: attempt } = await admin
      .from("quiz_user_played")
      .select("level, quiz_date, chosen, answered_at")
      .eq("user_id", userId)
      .eq("question_id", questionId)
      .maybeSingle();

    // Hanya soal yang dikirim ke user ini hari ini (atau kemarin, kalau
    // kuisnya melewati tengah malam) yang boleh dijawab.
    if (!attempt || !attempt.quiz_date || (attempt.quiz_date !== date && attempt.quiz_date !== previousDate(date))) {
      return fail(403, "Soal ini tidak sedang aktif untuk kamu.");
    }

    const { data: question } = await admin
      .from("quiz_questions")
      .select("answer, explanation, options")
      .eq("id", questionId)
      .maybeSingle();

    if (!question) return fail(404, "Soal tidak ditemukan.");
    if (choice >= (question.options?.length ?? 0)) return fail(400, "Pilihan jawaban tidak valid.");

    const alreadyAnswered = async (chosen: number) => {
      const row = await loadDailyRow(admin, userId, date);
      return NextResponse.json({
        alreadyAnswered: true,
        correct:         chosen === question.answer,
        answer:          question.answer,
        explanation:     question.explanation,
        points:          0,
        state:           toClientState(row, await countPending(admin, userId, date)),
      });
    };

    if (attempt.answered_at) return alreadyAnswered(attempt.chosen ?? choice);

    const row     = await loadDailyRow(admin, userId, date);
    const correct = choice === question.answer;
    const points  = pointsFor(attempt.level ?? 0, correct, row.streak);

    // Klaim soal secara atomik: update hanya berhasil kalau belum pernah dijawab,
    // jadi request ganda (dua tab / klik ganda) tidak memberi poin dua kali.
    const { data: claimed, error: claimError } = await admin
      .from("quiz_user_played")
      .update({ chosen: choice, points, answered_at: new Date().toISOString() })
      .eq("user_id", userId)
      .eq("question_id", questionId)
      .is("answered_at", null)
      .select("question_id");

    if (claimError) throw claimError;
    if (!claimed || claimed.length === 0) return alreadyAnswered(choice);

    row.total_pts         += points;
    row.total_pts_alltime += points;
    row.streak             = correct ? row.streak + 1 : 0;
    await saveDailyRow(admin, row);

    return NextResponse.json({
      alreadyAnswered: false,
      correct,
      answer:      question.answer,
      explanation: question.explanation,
      points,
      state:       toClientState(row, await countPending(admin, userId, date)),
    });
  } catch (err) {
    console.error(`[QUIZ-ANSWER]`, err);
    return fail(500, "Gagal memeriksa jawaban. Coba lagi.");
  }
}
