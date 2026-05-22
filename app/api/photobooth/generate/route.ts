import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const maxDuration = 60;

const GEMINI_API_KEY = process.env.GEMINI_API_KEY!;
const GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta";

// PISAHKAN MODEL MENJADI DUA UNTUK AKURASI MAKSIMAL
const MODEL_TEXT_ANALYZER = "gemini-2.5-flash"; 
const MODEL_IMAGE_GENERATOR = "imagen-3.0-generate-002"; // Menggunakan Imagen 3 Berbasis Produksi yang Stabil

type Theme = {
  id: string;
  name: string;
  template: string;
  maxPhotos: number;
};

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

    // 1. Load template gambar dasar
    const template = await fetchTemplateBase64(theme.template);

    // ═══════════════════════════════════════════════════════════════
    // TAHAP 1: MEMANGGIL GEMINI UNTUK MEMBUAT PROMPT DINAMIS SECARA VISUAL
    // ═══════════════════════════════════════════════════════════════
    const analysisParts: any[] = [
      { 
        text: `Analyze the photobooth template (Image 1) and the user face (Image 2). 
               Write a highly detailed, comprehensive English prompt for Imagen 3 to generate a composite image.
               The prompt must specify replacing the main large character and all small photo strip slots with an identical anime chibi/photorealistic illustration matching the exact face features, expressions, and hair color of the person in Image 2.
               Crucially, emphasize that the main character must occupy the large central frame position from Image 1, duplicating the pose and props (like holding a camera or scythe).
               Ensure you instruct to keep all background locker grids, text, title graphics, and stickers completely untouched. 
               Output ONLY the clean prompt string, no markdown headers.` 
      },
      { inline_data: { mime_type: template.mime, data: template.data } }
    ];

    // Masukkan foto user ke dalam analisis visual Gemini
    const base64UserFace = images[0].replace(/^data:image\/\w+;base64,/, "");
    const mimeUserFace = images[0].startsWith("data:image/png") ? "image/png" : "image/jpeg";
    analysisParts.push({ inline_data: { mime_type: mimeUserFace, data: base64UserFace } });

    const geminiAnalyzeRes = await fetch(
      `${GEMINI_BASE}/models/${MODEL_TEXT_ANALYZER}:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: analysisParts }] }),
      }
    );

    if (!geminiAnalyzeRes.ok) {
      const errText = await geminiAnalyzeRes.text();
      throw new Error(`Gemini Analyzer Error: ${errText}`);
    }

    const analyzeData = await geminiAnalyzeRes.json();
    const dynamicPromptText = analyzeData.candidates?.[0]?.content?.parts?.[0]?.text ?? "High quality photobooth composite image";
    
    console.log("Generated Dynamic Prompt from Gemini:", dynamicPromptText);

    // ═══════════════════════════════════════════════════════════════
    // TAHAP 2: MENEMBAKKAN PROMPT DINAMIS KE ENDPOINT IMAGEN (PRODUKSI)
    // ═══════════════════════════════════════════════════════════════
    const imageGenerationRes = await fetch(
      `${GEMINI_BASE}/models/${MODEL_IMAGE_GENERATOR}:predict?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          instances: [
            {
              prompt: dynamicPromptText,
              image: { bytesBase64: template.data } // Menyisipkan template asli sebagai landasan posisi kodingan (Img2Img)
            }
          ],
          parameters: {
            sampleCount: 1,
            aspectRatio: "1:1",
            outputMimeType: "image/png",
            guidanceScale: 8.5, // Mengunci kepatuhan model gambar terhadap instruksi posisi frame besar
            personGeneration: "allow_adult"
          },
        }),
      }
    );

    if (!imageGenerationRes.ok) {
      const err = await imageGenerationRes.text();
      throw new Error(`Imagen Generator error: ${err}`);
    }

    const finalData = await imageGenerationRes.json();
    const finalImageBase64 = finalData.predictions?.[0]?.bytesBase64;

    if (!finalImageBase64) {
      throw new Error("Tidak ada data gambar base64 dari Imagen");
    }

    return NextResponse.json({
      success: true,
      imageUrl: `data:image/png;base64,${finalImageBase64}`,
      themeId: theme.id,
    });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan";
    console.error("[/api/photobooth/generate]", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
