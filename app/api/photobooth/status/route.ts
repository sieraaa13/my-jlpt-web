// app/api/photobooth/status/route.ts
// GET ?userId= → status reward & sisa kuota generate Photobooth hari ini.
import { NextRequest, NextResponse } from "next/server";
import { todayWIB } from "@/lib/quiz-config";
import { getQuizAdmin, isUuid, userExists } from "@/lib/quiz-server";
import { getPhotoboothStatus } from "@/lib/photobooth-server";

export async function GET(req: NextRequest) {
  try {
    const userId = req.nextUrl.searchParams.get("userId");
    if (!isUuid(userId)) {
      return NextResponse.json({ error: "Silakan login dulu." }, { status: 401 });
    }

    const admin = getQuizAdmin();
    if (!(await userExists(admin, userId))) {
      return NextResponse.json({ error: "User tidak ditemukan." }, { status: 401 });
    }

    const status = await getPhotoboothStatus(admin, userId, todayWIB());
    return NextResponse.json({ success: true, ...status });
  } catch (error: unknown) {
    console.error("[/api/photobooth/status]", error);
    return NextResponse.json({ error: "Gagal memuat status Photobooth" }, { status: 500 });
  }
}
