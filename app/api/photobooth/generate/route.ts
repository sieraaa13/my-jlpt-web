import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const maxDuration = 60;

const GEMINI_API_KEY = process.env.GEMINI_API_KEY!;
const GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta";
const MODEL_IMAGE = "gemini-3-pro-image-preview";

// File pembagi tema
const THEME_FILES = ["tema1.json", "tema2.json", "tema3.json", "tema4.json"];

type Theme = {
  id: string;
  name: string;
  template: string;
  maxPhotos: number;
  prompt: string;   // prompt KHUSUS per tema
};

// ═══════════════════════════════════════════════════════════════
// SETTINGS GENERAL - sama untuk semua tema
// ═══════════════════════════════════════════════════════════════
const GENERAL_CONFIG = {
  responseModalities: ["IMAGE"],
  temperature: 0.2,    // SANGAT RENDAH untuk preserve struktur
  topP: 0.85,          // Lebih fokus
  topK: 15,            // Sangat restrictive
  candidateCount: 1,
};

// Baca SEMUA file tema lalu gabung jadi 1 array
// (baca file = operasi disk lokal = GRATIS, tidak kena biaya AI)
function loadAllThemes(): Theme[] {
  const themesDir = path.join(process.cwd(), "public", "asset", "photobooth", "themes");
  const allThemes: Theme[] = [];

  for (const file of THEME_FILES) {
    try {
      const filePath = path.join(themesDir, file);
      const data = fs.readFileSync(filePath, "utf-8");
      const parsed = JSON.parse(data);
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
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://my-jlpt-web.vercel.app";
  const res = await fetch(`${baseUrl}/asset/photobooth/${templateFile}`);
  if (!res.ok) throw new Error("Gagal load template");

  const buffer = Buffer.from(await res.arrayBuffer());
  const mime = templateFile.endsWith(".png") ? "image/png" : "image/jpeg";
  return { data: buffer.toString("base64"), mime };
}

export async function POST(req: NextRequest) {
  try {
    const { images, themeId } = await req.json();

    if (!images || !Array.isArray(images) || images.length === 0) {
      return NextResponse.json({ error: "Tidak ada foto" }, { status: 400 });
    }

    // Baca semua tema, pilih 1 (yang dikirim ke AI cuma 1 prompt)
    const allThemes = loadAllThemes();
    const theme = allThemes.find((t) => t.id === themeId) ?? allThemes[0];

    if (!theme) {
      return NextResponse.json({ error: "Tema tidak ditemukan" }, { status: 404 });
    }

    const template = await fetchTemplateBase64(theme.template);

    // Gabung: PROMPT KHUSUS tema + template + foto user
    const parts: any[] = [
      { text: theme.prompt },   // <-- prompt custom dari file tema
      { 
        inlineData: { 
          mimeType: template.mime, 
          data: template.data 
        } 
      },
    ];

    for (const img of images) {
      const base64Data = img.replace(/^data:image\/\w+;base64,/, "");
      const mimeType = img.startsWith("data:image/png") ? "image/png" : "image/jpeg";
      parts.push({ 
        inlineData: { 
          mimeType: mimeType, 
          data: base64Data 
        } 
      });
    }

    console.log(`--- Generate tema "${theme.id}" dengan ${MODEL_IMAGE} ---`);

    // Kirim: prompt custom + SETTINGS GENERAL
    const res = await fetch(
      `${GEMINI_BASE}/models/${MODEL_IMAGE}:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts }],
          generationConfig: GENERAL_CONFIG,   // <-- settings general
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
