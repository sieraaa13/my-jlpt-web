// app/api/photobooth/themes/route.ts
// Endpoint untuk mendapatkan daftar semua tema

import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  try {
    // Baca themes.json
    const themesPath = path.join(process.cwd(), "public", "asset", "photobooth", "themes.json");
    const data = fs.readFileSync(themesPath, "utf-8");
    const parsed = JSON.parse(data);

    // Return daftar tema (tanpa info sensitif)
    const themeList = parsed.themes.map((t: any) => ({
      id: t.id,
      name: t.name,
      template: `/asset/photobooth/${t.template}`, // URL publik
      maxPhotos: t.maxPhotos,
    }));

    return NextResponse.json({ success: true, themes: themeList });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan";
    console.error("[/api/photobooth/themes]", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
