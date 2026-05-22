import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const maxDuration = 60;

const GEMINI_API_KEY = process.env.GEMINI_API_KEY!;
const GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta";
const MODEL_IMAGE = "gemini-2.5-flash-image"; // Nano Banana

type Theme = {
  id: string;
  name: string;
  template: string;
  maxPhotos: number;
};

// ═══════════════════════════════════════════════════════════════
// UNIVERSAL PROMPT - Satu untuk semua tema
// Nano Banana akan analisa template dan tentukan style sendiri
// ═══════════════════════════════════════════════════════════════
const UNIVERSAL_PROMPT = `You are editing a photobooth template image.

The FIRST image is the photobooth template with empty photo frames/slots.
The following images are photos of people.

Your task:
1. ANALYZE the template carefully - observe its visual style, aesthetic, colors, lighting, theme, mood, and atmosphere
2. PLACE each person's photo naturally into the empty frames in the template
3. EDIT each person's photo to PERFECTLY MATCH the template's exact style:
   - Match the lighting (warm/cool/dramatic/soft)
   - Match the colors and color grading
   - Match the grain, texture, and film quality
   - Match the overall mood and atmosphere
   - Match any artistic filters or effects
4. Keep each person's FACE and IDENTITY exactly the same - do not change their facial features
5. Make the people blend seamlessly as if they were originally photographed specifically for this template
6. Keep ALL template decorations, borders, text, stickers, and design elements intact

Generate the complete final composite image where the people look like they naturally belong in this template's world.`;

// Baca themes.json
function loadThemes(): Theme[] {
  const themesPath = path.join(process.cwd(), "public", "asset", "photobooth", "themes.json");
  const data = fs.readFileSync(themesPath, "utf-8");
  const parsed = JSON.parse(data);
  return parsed.themes;
}

// Ambil template dari URL publik → base64
async function fetchTemplateBase64(templateFile: string): Promise<{ data: string; mime: string }> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://my-jlpt-web.vercel.app";
  const res = await fetch(`${baseUrl}/asset/photobooth/${templateFile}`);
  if (!res.ok) throw new Error("Gagal load template");

  const buffer = Buffer.from(await res.arrayBuffer());
  const mime = templateFile.endsWith(".png") ? "image/png" : "image/jpeg";
  return { data: buffer.toString("base64"), mime };
}

// ── POST /api/photobooth/generate ──
export async function POST(req: NextRequest) {
  try {
    const { images, themeId } = await req.json();

    if (!images || !Array.isArray(images) || images.length === 0) {
      return NextResponse.json({ error: "Tidak ada foto" }, { status: 400 });
    }

    // Load themes dari JSON
    const themes = loadThemes();
    const theme = themes.find((t) => t.id === themeId) ?? themes[0];

    // 1. Ambil template
    const template = await fetchTemplateBase64(theme.template);

    // 2. Siapkan parts dengan UNIVERSAL PROMPT
    const parts: any[] = [
      { text: UNIVERSAL_PROMPT },
      { inline_data: { mime_type: template.mime, data: template.data } },
    ];

    // Tambahkan semua foto user
    for (const img of images) {
      const base64Data = img.replace(/^data:image\/\w+;base64,/, "");
      const mimeType = img.startsWith("data:image/png") ? "image/png" : "image/jpeg";
      parts.push({ inline_data: { mime_type: mimeType, data: base64Data } });
    }

    // 3. Kirim ke Nano Banana
    const res = await fetch(
      `${GEMINI_BASE}/models/${MODEL_IMAGE}:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts }],
          generationConfig: {
            responseModalities: ["IMAGE"],
            temperature: 1,
          },
        }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Nano Banana error: ${err}`);
    }

    const data = await res.json();
    const resultParts = data.candidates?.[0]?.content?.parts ?? [];
    const imagePart = resultParts.find(
      (p: any) => p.inlineData?.mimeType?.startsWith("image/")
    );

    if (!imagePart?.inlineData?.data) {
      throw new Error("Tidak ada gambar yang dihasilkan");
    }

    return NextResponse.json({
      success: true,
      imageUrl: `data:${imagePart.inlineData.mimeType};base64,${imagePart.inlineData.data}`,
      themeId: theme.id,
    });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan";
    console.error("[/api/photobooth/generate]", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
