import { NextRequest, NextResponse } from "next/server";
import { runLineBroadcast } from "@/lib/siera-line-broadcast";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function GET(req: NextRequest) {
  const cronSecret = process.env.CRON_SECRET;
  const authHeader = req.headers.get("authorization");

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const result = await runLineBroadcast();
  return NextResponse.json(result);
}
