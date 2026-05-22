import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const maxDuration = 60;

const GEMINI_API_KEY = process.env.GEMINI_API_KEY!;
const GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta";
const MODEL_IMAGE = "gemini-3-pro-image-preview"; // Pakai model yang kamu pilih

type Theme = {
  id: string;
  name: string;
  template: string;
  maxPhotos: number;
};

// ═══════════════════════════════════════════════════════════════
// FIXED PROMPT - TIDAK MINTA ANIME, CUMA COMPOSITE FOTO ASLI
// ═══════════════════════════════════════════════════════════════
const REALISTIC_COMPOSITE_PROMPT = `You are a professional photo compositor creating photobooth images.

INPUTS:
- Image 1: Illustrated photobooth template with empty photo frames
- Image 2+: Real photographs of people

CRITICAL INSTRUCTIONS:

1. WHAT THIS IS:
   This is a COMPOSITE image where REAL PHOTOGRAPHS are placed into an ILLUSTRATED TEMPLATE.
   Think of it like pasting printed photos onto a cartoon scrapbook page.

2. PLACEMENT:
   - Identify all photo frame slots in the template (Image 1)
   - Place the REAL PHOTOGRAPHS from Image 2+ into these frames
   - Main large frame gets the primary photo
   - Smaller frames get additional photos or repeated shots

3. PHOTO PRESERVATION - MOST IMPORTANT:
   ✓ Keep the people as REAL PHOTOGRAPHS - maintain photographic quality
   ✓ DO NOT convert photos to anime/cartoon/illustration style
   ✓ DO NOT apply artistic filters to the people
   ✓ DO NOT turn the photos into drawings or paintings
   ✓ Preserve realistic skin texture, hair detail, facial features
   ✓ Keep natural photographic lighting on the subjects

4. TEMPLATE PRESERVATION:
   ✓ Keep the template's illustrated/cartoon style unchanged
   ✓ Keep all decorations, text, stickers, backgrounds intact
   ✓ Maintain the original design elements (grids, patterns, icons)

5. COMPOSITING TECHNIQUE:
   - Naturally place photos into frame slots
   - Blend edges smoothly where photo meets frame border
   - Adjust photo lighting/color to harmonize with template
   - Add subtle shadows for depth
   - Make it look like real photos inserted into frames

6. WHAT NOT TO DO:
   ✗ DO NOT stylize the people into cartoons
   ✗ DO NOT generate anime/chibi versions
   ✗ DO NOT create illustrations of the people
   ✗ DO NOT apply artistic rendering to faces

The result should look like REAL PRINTED PHOTOS placed in an ILLUSTRATED FRAME - a mix of photographic realism (people) and cartoon/illustration (template background).

Generate the final composite image.`;

function loadThemes(): Theme[] {
  const themesPath = path.join(process.cwd(), "public", "asset", "photobooth", "themes.json");
  const data = fs.readFileSync(themesPath, "utf-8");
  const parsed = JSON.parse(data);
  return parsed.themes;
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

    const themes = loadThemes();
    const theme = themes.find((t) => t.id === themeId) ?? themes[0];

    const template = await fetchTemplateBase64(theme.template);

    // Pakai format camelCase sesuai kode kamu
    const parts: any[] = [
      { text: REALISTIC_COMPOSITE_PROMPT }, // <-- PROMPT BARU
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

    console.log(`--- Mengirim request ke ${MODEL_IMAGE} ---`);

    const res = await fetch(
      `${GEMINI_BASE}/models/${MODEL_IMAGE}:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts }],
          generationConfig: {
            responseModalities: ["IMAGE"],
            temperature: 0.3,    // TURUN dari 0.4 ke 0.3
            topP: 0.9,           // TURUN dari 0.95 ke 0.9
            topK: 20,            // TURUN dari 40 ke 20 (lebih restrictive)
            candidateCount: 1,
          },
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
