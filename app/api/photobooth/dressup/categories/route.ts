// ⚠️ FILE INI UNTUK: app/api/photobooth/dressup/categories/route.ts
// Ciri khas: export async function GET (bukan POST!)

import { NextResponse } from "next/server";
import { DRESSUP_CATEGORIES } from "@/lib/photobooth-themes";

// HARUS GET - dipanggil frontend untuk list kategori item dress-up (tanpa prompt)
export async function GET() {
  const categories = DRESSUP_CATEGORIES.map((c) => ({ id: c.id, name: c.name, order: c.order }));
  return NextResponse.json({ success: true, categories });
}
