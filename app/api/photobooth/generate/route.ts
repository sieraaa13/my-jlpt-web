import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const maxDuration = 60;

const GEMINI_API_KEY = process.env.GEMINI_API_KEY!;
const GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta";
const MODEL_IMAGE = "gemini-3-pro-image-preview";

type Theme = {
  id: string;
  name: string;
  template: string;
  maxPhotos: number;
};

// ═══════════════════════════════════════════════════════════════
// CRITICAL: FRAME HARUS TETAP, JANGAN DIUBAH!
// ═══════════════════════════════════════════════════════════════
const FRAME_LOCKED_PROMPT = `You are a professional photo compositor. Your job is to insert real photographs into pre-existing frame slots WITHOUT modifying the template structure.

INPUTS:
- Image 1: The photobooth template (this is SACRED - DO NOT MODIFY)
- Image 2+: Real photographs to insert

CRITICAL RULES - FRAME PRESERVATION:

1. THE TEMPLATE IS LOCKED:
   ✓ Image 1's layout is 100% FIXED and MUST NOT be altered
   ✓ DO NOT move any frames or borders
   ✓ DO NOT resize any frame slots
   ✓ DO NOT change frame positions
   ✓ DO NOT modify frame borders, decorations, or outlines
   ✓ Keep ALL decorative elements exactly where they are (fish, seaweed, bubbles, text, etc.)

2. FRAME STRUCTURE MUST REMAIN IDENTICAL:
   ✓ If there are 3 frame slots in the template → output must have exactly 3 frame slots in the SAME positions
   ✓ Frame shapes (rectangles, polaroid borders, etc.) must stay the same
   ✓ Frame borders (blue outlines, decorative edges) must not change
   ✓ Spacing between frames must remain unchanged

3. YOUR ONLY JOB - INSERT PHOTOS:
   ✓ Take the REAL PHOTOGRAPHS from Image 2+
   ✓ Place them INSIDE the existing frame slots
   ✓ Crop/fit the photos to match the frame dimensions
   ✓ Keep the photos as REALISTIC photographs (not anime/cartoon)

4. WHAT TO PRESERVE FROM TEMPLATE:
   ✓ Background color and patterns
   ✓ All text ("UNDER SEA", etc.)
   ✓ All decorative icons (fish, plants, bubbles, shells)
   ✓ Grid lines and borders
   ✓ Frame outlines and borders
   ✓ Layout structure and positioning

5. COMPOSITING TECHNIQUE:
   - The photos should look like they were printed and placed inside the pre-existing frames
   - Adjust photo brightness/color to harmonize with template
   - Keep edges clean where photo meets frame border
   - Maintain photographic quality of the people

6. ABSOLUTE PROHIBITIONS:
   ✗ DO NOT move frames to different positions
   ✗ DO NOT resize or reshape frames
   ✗ DO NOT change the template layout
   ✗ DO NOT convert photos to cartoons/anime
   ✗ DO NOT redraw or regenerate the template

Think of this like a physical photo frame: the frame stays exactly where it is, you just slide the photo inside it.

Generate the composite with LOCKED frame positions.`;

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

    const parts: any[] = [
      { text: FRAME_LOCKED_PROMPT },
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
            temperature: 0.2,    // SANGAT RENDAH untuk preserve struktur
            topP: 0.85,          // Lebih fokus
            topK: 15,            // Sangat restrictive
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
