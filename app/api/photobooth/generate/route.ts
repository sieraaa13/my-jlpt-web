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
// IMPROVED PROMPT - Lebih spesifik untuk face preservation & quality
// ═══════════════════════════════════════════════════════════════
const UNIVERSAL_PROMPT = `You are a professional photobooth editor creating high-quality composite images.

INPUTS:
- Image 1: Photobooth template with empty photo frames/slots
- Image 2+: Photos of people to be placed in the template

YOUR TASK:

1. ANALYZE THE PERSON'S FACE (Image 2+):
   - Study their exact facial features, skin tone, hair style and color
   - Note their distinct characteristics and expressions
   - Memorize these features - they MUST remain identical in the output

2. ANALYZE THE TEMPLATE STYLE (Image 1):
   - Identify the visual aesthetic (vintage, modern, kawaii, etc.)
   - Note the lighting style (warm, cool, dramatic, soft)
   - Observe the color grading and mood
   - Detect any grain, texture, or artistic effects

3. PLACE AND EDIT:
   - Place each person's photo into the empty frames naturally
   - CRITICAL: Keep each person's face and identity EXACTLY the same - do not alter facial features
   - Edit the photo to match the template's style perfectly:
     * Match the exact lighting (direction, softness, color temperature)
     * Match the exact color grading and saturation
     * Match any film grain, texture, or vintage effects
     * Match the overall mood and atmosphere
   - Use professional studio lighting techniques
   - Ensure photorealistic, high-resolution quality
   - Make the person blend seamlessly as if originally photographed for this template

4. PRESERVE TEMPLATE:
   - Keep all decorations, borders, text, stickers, and design elements intact
   - Maintain the template's composition and layout

OUTPUT REQUIREMENTS:
- Photorealistic quality
- High detail and resolution
- Consistent face across all frames
- Professional lighting
- Natural integration with template aesthetic

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

    // 1. Load template
    const template = await fetchTemplateBase64(theme.template);

    // 2. Build parts dengan improved prompt
    const parts: any[] = [
      { text: UNIVERSAL_PROMPT },
      { inline_data: { mime_type: template.mime, data: template.data } },
    ];

    // Add user photos
    for (const img of images) {
      const base64Data = img.replace(/^data:image\/\w+;base64,/, "");
      const mimeType = img.startsWith("data:image/png") ? "image/png" : "image/jpeg";
      parts.push({ inline_data: { mime_type: mimeType, data: base64Data } });
    }

    // 3. Call Nano Banana dengan IMPROVED PARAMETERS
    const res = await fetch(
      `${GEMINI_BASE}/models/${MODEL_IMAGE}:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts }],
          generationConfig: {
            responseModalities: ["IMAGE"],
            temperature: 0.5,        // TUNED: Lebih rendah untuk konsistensi (was 1.0)
            topP: 0.95,              // Control randomness
            topK: 40,                // Limit token choices
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
