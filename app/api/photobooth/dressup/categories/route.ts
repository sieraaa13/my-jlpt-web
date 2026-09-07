// ⚠️ FILE INI UNTUK: app/api/photobooth/dressup/categories/route.ts
// Ciri khas: export async function GET (bukan POST!)

import { NextRequest, NextResponse } from "next/server";

const CATEGORY_FILE = "tema4.json";

function getBaseUrl(): string {
  return process.env.NEXT_PUBLIC_BASE_URL ?? "https://my-jlpt-web.vercel.app";
}

// HARUS GET - dipanggil frontend untuk list kategori item dress-up
export async function GET(req: NextRequest) {
  try {
    const baseUrl = getBaseUrl();

    const res = await fetch(`${baseUrl}/asset/photobooth/themes/${CATEGORY_FILE}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      return NextResponse.json({ error: "Kategori tidak ditemukan" }, { status: 404 });
    }

    const parsed = await res.json();
    const categories = Array.isArray(parsed.categories)
      ? parsed.categories
          .slice()
          .sort((a: any, b: any) => a.order - b.order)
          .map((c: any) => ({ id: c.id, name: c.name, order: c.order }))
      : [];

    return NextResponse.json({ success: true, categories });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan";
    console.error("[/api/photobooth/dressup/categories]", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
