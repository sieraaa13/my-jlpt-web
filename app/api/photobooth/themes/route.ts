// app/api/photobooth/generate/route.ts
// Pakai HTTP fetch (konsisten dengan themes/route.ts)
// Aman kalau tema2,3,4 tidak ada (di-skip, tidak error)

import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60;

const GEMINI_API_KEY = process.env.GEMINI_API_KEY!;
const GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta";
const MODEL_IMAGE = "gemini-3-pro-image-preview";

const THEME_FILES = ["tema1.json", "tema2.json", "tema3.json", "tema4.json"];

type Theme = {
  id: string;
  name: string;
  template: string;
  maxPhotos: number;
  prompt: string;
};

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

// Baca semua file tema via HTTP. File yang tidak ada (tema2,3,4) di-skip aman.
async function loadAllThemes(): Promise<Theme[]> {
  const baseUrl = getBaseUrl();
  const allThemes: Theme[] = [];

  for (const file of THEME_FILES) {
    try {
      const res = await fetch(`${baseUrl}/asset/photobooth/themes/${file}`, {
        cache: "no-store",
      });
      if (!res.ok) continue;   // file tidak ada → lewati (tidak error)
      const parsed = await res.json();
      if (Array.isArray(parsed.themes)) {
        allThemes.push(...parsed.themes);
      }
    } catch (e) {
      console.warn(`[loadAllThemes] Lewati ${file}:`, e);
    }
  }

  return allThemes;
}

async function fetchTemplateBase64(templateFile: string): Promise<{ data: string; mime: string }> {
  const url = `${getBaseUrl()}/asset/photobooth/${templateFile}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(
      `Template "${templateFile}" tidak ditemukan (status ${res.status}). ` +
      `Pastikan file ada di public/asset/photobooth/ dan nama di JSON benar.`
    );
  }

  let mime = "image/jpeg";
  if (templateFile.toLowerCase().endsWith(".png")) mime = "image/png";
  else if (templateFile.toLowerCase().endsWith(".webp")) mime = "image/webp";

  const buffer = Buffer.from(await res.arrayBuffer());
  return { data: buffer.toString("base64"), mime };
}

export async function POST(req: NextRequest) {
  try {
    const { images, themeId } = await req.json();

    if (!images || !Array.isArray(images) || images.length === 0) {
      return NextResponse.json({ error: "Tidak ada foto" }, { status: 400 });
    }

    const allThemes = await loadAllThemes();
    const theme = allThemes.find((t) => t.id === themeId) ?? allThemes[0];

    if (!theme) {
      return NextResponse.json({ error: "Tema tidak ditemukan" }, { status: 404 });
    }

    let template;
    try {
      template = await fetchTemplateBase64(theme.template);
    } catch (e: any) {
      return NextResponse.json({ error: e.message }, { status: 400 });
    }

    const parts: any[] = [
      { text: theme.prompt },
      { inlineData: { mimeType: template.mime, data: template.data } },
    ];

    for (const img of images) {
      const base64Data = img.replace(/^data:image\/\w+;base64,/, "");
      const mimeType = img.startsWith("data:image/png") ? "image/png" : "image/jpeg";
      parts.push({ inlineData: { mimeType, data: base64Data } });
    }

    console.log(`--- Generate tema "${theme.id}" template "${theme.template}" ---`);

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
      themeId: theme.id,
    });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan sistem";
    console.error("[/api/photobooth/generate] CRITICAL ERROR:", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
