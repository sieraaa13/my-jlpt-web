// ⚠️ FILE INI UNTUK: app/api/photobooth/dressup/route.ts
// Ciri khas: export async function POST, generate satu item per panggilan

import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 120;

const GEMINI_API_KEY = process.env.GEMINI_API_KEY!;
const GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta";
const MODEL_IMAGE = "gemini-3-pro-image-preview";

const CATEGORY_FILE = "tema4.json";

type Category = {
  id: string;
  name: string;
  order: number;
  prompt: string;
};

// SETTINGS GENERAL - sama seperti /api/photobooth/generate
const GENERAL_CONFIG = {
  responseModalities: ["IMAGE"],
  temperature: 0.2,
  topP: 0.85,
  topK: 15,
  candidateCount: 1,
};

function getBaseUrl(): string {
  return process.env.NEXT_PUBLIC_BASE_URL ?? "https://my-jlpt-web.vercel.app";
}

async function loadCategories(): Promise<Category[]> {
  const res = await fetch(`${getBaseUrl()}/asset/photobooth/themes/${CATEGORY_FILE}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Gagal load kategori item");
  const parsed = await res.json();
  return Array.isArray(parsed.categories) ? parsed.categories : [];
}

function toInlineImage(dataUrl: string) {
  const base64Data = dataUrl.replace(/^data:image\/\w+;base64,/, "");
  const mimeType = dataUrl.startsWith("data:image/png") ? "image/png" : "image/jpeg";
  return { inlineData: { mimeType, data: base64Data } };
}

export async function POST(req: NextRequest) {
  try {
    const { originalPhoto, currentPhoto, itemPhoto, categoryId } = await req.json();

    if (!originalPhoto || !itemPhoto || !categoryId) {
      return NextResponse.json(
        { error: "originalPhoto, itemPhoto, dan categoryId wajib diisi" },
        { status: 400 }
      );
    }

    const categories = await loadCategories();
    const category = categories.find((c) => c.id === categoryId);

    if (!category) {
      return NextResponse.json({ error: "Kategori item tidak ditemukan" }, { status: 404 });
    }

    // Image 1 = foto asli (referensi wajah/identitas), Image 2 = state sekarang
    // (hasil generate terakhir, atau foto asli kalau ini item pertama), Image 3 = item baru
    const parts: any[] = [
      { text: category.prompt },
      toInlineImage(originalPhoto),
      toInlineImage(currentPhoto || originalPhoto),
      toInlineImage(itemPhoto),
    ];

    console.log(`--- Dressup generate kategori "${category.id}" dengan ${MODEL_IMAGE} ---`);

    const res = await fetch(
      `${GEMINI_BASE}/models/${MODEL_IMAGE}:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts }],
          generationConfig: GENERAL_CONFIG,
        }),
      }
    );

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Model Image Error (Status ${res.status}): ${errText}`);
    }

    const data = await res.json();
    const resultParts = data.candidates?.[0]?.content?.parts ?? [];
    const imagePart = resultParts.find((p: any) => p.inlineData?.mimeType?.startsWith("image/"));

    const finalBase64 = imagePart?.inlineData?.data;
    const finalMime = imagePart?.inlineData?.mimeType ?? "image/png";

    if (!finalBase64) {
      console.error("Struktur Response Tanpa Gambar:", JSON.stringify(data));
      throw new Error("Model tidak mengembalikan output gambar.");
    }

    return NextResponse.json({
      success: true,
      imageUrl: `data:${finalMime};base64,${finalBase64}`,
      categoryId: category.id,
    });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan sistem";
    console.error("[/api/photobooth/dressup] CRITICAL ERROR:", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
