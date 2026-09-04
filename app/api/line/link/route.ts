import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const { userId, code } = await req.json();

    if (!userId || !code) {
      return NextResponse.json({ error: "userId dan code wajib diisi" }, { status: 400 });
    }

    const normalizedCode = String(code).trim().toUpperCase();

    const { data: linkCode, error: codeError } = await supabase
      .from("line_link_codes")
      .select("code, line_user_id, expires_at")
      .eq("code", normalizedCode)
      .maybeSingle();

    if (codeError || !linkCode) {
      return NextResponse.json({ error: "Kode tidak ditemukan. Pastikan kode benar." }, { status: 404 });
    }

    if (new Date(linkCode.expires_at).getTime() < Date.now()) {
      await supabase.from("line_link_codes").delete().eq("code", normalizedCode);
      return NextResponse.json({ error: "Kode sudah kedaluwarsa. Kirim pesan lagi ke LINE untuk kode baru." }, { status: 410 });
    }

    // Lepaskan tautan lama kalau line_user_id ini sebelumnya terhubung ke akun lain.
    await supabase
      .from("users")
      .update({ line_user_id: null, line_consent: false })
      .eq("line_user_id", linkCode.line_user_id);

    const { error: updateError } = await supabase
      .from("users")
      .update({
        line_user_id: linkCode.line_user_id,
        line_consent: true,
        line_linked_at: new Date().toISOString(),
      })
      .eq("id", userId);

    if (updateError) {
      return NextResponse.json({ error: updateError.message }, { status: 500 });
    }

    await supabase.from("line_link_codes").delete().eq("code", normalizedCode);

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
