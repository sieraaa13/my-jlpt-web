import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const maxDuration = 60;

const GEMINI_API_KEY = process.env.GEMINI_API_KEY!;
const GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta";

// Menggunakan model reasoning image yang tersedia di API Key Anda
const MODEL_IMAGE = "gemini-3-pro-image-preview"; 

type Theme = {
  id: string;
  name: string;
  template: string;
  maxPhotos: number;
};

const UNIVERSAL_PROMPT = `You are an elite photobooth editor. You have advanced reasoning capabilities to analyze templates and placements perfectly.

INPUTS:
- Image 1: The background photobooth layout/template.
- Image 2: The user's face photograph.

YOUR TASK:
1. LAYOUT ANALYSIS & PLACEMENT:
   - Locate the main large central character frame/slot in Image 1. You MUST place the generated character here as the absolute focal point.
   - Locate all the smaller photobooth strip slots. You MUST replicate the exact same character into these smaller slots.
   - Do NOT misplace the main character into the small side frames. Follow the hierarchy of the template exactly.

2. CHARACTER GENERATION & FACE PRESERVATION:
   - Generate a high-quality anime chibi / photorealistic hybrid illustration of the person from Image 2.
   - Maintain her exact distinct facial structure, cute expression, eye shape, and black hair color across ALL frames (both large and small slots).
   - Replicate the exact pose and props (e.g., holding a camera/prop, body angle) from the original character in Image 1.

3. STYLE & BACKGROUND BLENDING:
   - Keep the background grids, textures, text (like 'GAMETRADE'), stickers, and all original decorative icons from Image 1 100% untouched and intact.
   - Blend the newly generated character seamlessly into the frames with matching lighting and color saturation so it looks natively designed for this template.

Output ONLY the final high-resolution composite image.`;

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

    // 1. Ambil template dasar
    const template = await fetchTemplateBase64(theme.template);

    // 2. Bangun array parts dengan penulisan camelCase (inlineData & mimeType) yang benar
    const parts: any[] = [
      { text: UNIVERSAL_PROMPT },
      { 
        inlineData: { 
          mimeType: template.mime, 
          data: template.data 
        } 
      },
    ];

    // Masukkan foto wajah user dengan format inlineData yang valid
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

    // 3. Request ke endpoint generateContent
    const res = await fetch(
      `${GEMINI_BASE}/models/${MODEL_IMAGE}:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts }],
          generationConfig: {
            responseModalities: ["IMAGE"], // Meminta output berupa gambar biner langsung
            temperature: 0.4,
            topP: 0.95,
            topK: 40,
          },
        }),
      }
    );

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Model Image Error (Status ${res.status}): ${errText}`);
    }

    const data = await res.json();
    
    // Ekstraksi hasil secara aman menggunakan format camelCase dari response Google AI Studio
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
