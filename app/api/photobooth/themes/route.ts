// app/api/photobooth/themes/route.ts
// Endpoint untuk list semua tema dari semua file pembagi

import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const THEME_FILES = ["tema1.json", "tema2.json", "tema3.json", "tema4.json"];

export async function GET(req: NextRequest) {
  try {
    const themesDir = path.join(process.cwd(), "public", "asset", "photobooth", "themes");
    const allThemes: any[] = [];

    // Baca semua file (operasi disk lokal = GRATIS)
    for (const file of THEME_FILES) {
      try {
        const filePath = path.join(themesDir, file);
        const data = fs.readFileSync(filePath, "utf-8");
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed.themes)) {
          // Ambil info dasar saja (tanpa prompt, lebih ringan untuk UI)
          const themeList = parsed.themes.map((t: any) => ({
            id: t.id,
            name: t.name,
            template: `/asset/photobooth/${t.template}`,
            maxPhotos: t.maxPhotos,
          }));
          allThemes.push(...themeList);
        }
      } catch (e) {
        console.warn(`[themes] Lewati ${file}:`, e);
      }
    }

    return NextResponse.json({ success: true, themes: allThemes });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan";
    console.error("[/api/photobooth/themes]", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
