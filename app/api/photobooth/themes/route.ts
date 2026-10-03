// ⚠️ FILE INI UNTUK: app/api/photobooth/themes/route.ts
// Ciri khas: export async function GET (bukan POST!)

import { NextResponse } from "next/server";
import { THEMES } from "@/lib/photobooth-themes";

// HARUS GET - dipanggil frontend untuk list tema (tanpa prompt)
export async function GET() {
  const themes = THEMES.map((t) => ({
    id: t.id,
    name: t.name,
    template: t.template ? `/asset/photobooth/${t.template}` : "",
    maxPhotos: t.maxPhotos,
  }));
  return NextResponse.json({ success: true, themes });
}
