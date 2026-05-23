// app/api/photobooth/themes/route.ts
// List semua tema dari 4 file via HTTP (bukan fs)

import { NextRequest, NextResponse } from "next/server";

const THEME_FILES = ["tema1.json", "tema2.json", "tema3.json", "tema4.json"];

function getBaseUrl(): string {
  return process.env.NEXT_PUBLIC_BASE_URL ?? "https://my-jlpt-web.vercel.app";
}

export async function GET(req: NextRequest) {
  try {
    const baseUrl = getBaseUrl();
    const allThemes: any[] = [];

    // Baca semua file via HTTP (Vercel public tidak bisa pakai fs)
    for (const file of THEME_FILES) {
      try {
        const res = await fetch(`${baseUrl}/asset/photobooth/themes/${file}`, {
          cache: "no-store",
        });
        if (!res.ok) continue;
        const parsed = await res.json();
        if (Array.isArray(parsed.themes)) {
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
