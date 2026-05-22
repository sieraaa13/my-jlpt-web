import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const maxDuration = 60;

const GEMINI_API_KEY = process.env.GEMINI_API_KEY!;
const GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta";

// PERBAIKAN: Menggunakan ID Model resmi Google AI Studio untuk Imagen 3
const MODEL_TEXT_ANALYZER = "gemini-1.5-flash"; 
const MODEL_IMAGE_GENERATOR = "imagen-3.0-generate-002"; 

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

    // 1. Ambil data template dasar
    const template = await fetchTemplateBase64(theme.template);

    // ═══════════════════════════════════════════════════════════════
    // TAHAP 1: GEMINI MEMBUAT PROMPT SECARA VISUAL (MENCEGAH SALAH FRAME)
    // ═══════════════════════════════════════════════════════════════
    const analysisParts: any[] = [
      { 
        text: `You are an expert prompt engineer for Imagen 3. Analyze the layout template (Image 1) and the user's face (Image 2). 
               Create a highly detailed, single-paragraph English prompt to generate a new composite image.
               The prompt must strictly demand replacing the main big character and all smaller photobooth photo slots with an identical anime chibi illustration that shares the exact facial structure, cute expression, and black hair of the person in Image 2.
               Crucially, specify that the character must be positioned inside the main grid template exactly where the original drawing is, holding the weapon/prop.
               All background grids, green textures, 'GAMETRADE' text, stickers, and decorative icons from Image 1 must remain completely unchanged and integrated.
               Return ONLY the final prompt text string. Do not include any intro, markdown, or code blocks.` 
      },
      { inline_data: { mime_type: template.mime, data: template.data } }
    ];

    const base64UserFace = images[0].replace(/^data:image\/\w+;base64,/, "");
    const mimeUserFace = images[0].startsWith("data:image/png") ? "image/png" : "image/jpeg";
    analysisParts.push({ inline_data: { mime_type: mimeUserFace, data: base64UserFace } });

    console.log("--- Memanggil Gemini untuk analisis visual prompt ---");
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
    let dynamicPromptText = analyzeData.candidates?.[0]?.content?.parts?.[0]?.text ?? "Kawaii anime chibi girl photobooth composite";
    
    // Bersihkan sisa format markdown backticks jika ada
    dynamicPromptText = dynamicPromptText.replace(/```json|```text|```/g, "").trim();
    console.log("Prompt Terpilih Hasil Analisis:", dynamicPromptText);

    // ═══════════════════════════════════════════════════════════════
    // TAHAP 2: MEMANGGIL IMAGEN 3 DENGAN PENYESUAIAN STRUKTUR PREDICATE API Studio
    // ═══════════════════════════════════════════════════════════════
    console.log("--- Memanggil API Imagen 3 via Predict Endpoint ---");
    
    // Penyesuaian skema request body yang didukung penuh oleh Google AI Studio v1beta
    const imagenRequestBody = {
      requests: [
        {
          prompt: dynamicPromptText,
          image: {
            imageBytes: template.data // Key data biner base64 resmi
          }
        }
      ],
      parameters: {
        sampleCount: 1,
        aspectRatio: "1:1",
        outputMimeType: "image/png",
        guidanceScale: 10.0, 
        personGeneration: "ALLOW_ADULT"
      }
    };

    // Memanggil endpoint menggunakan format metode ':predict' yang valid untuk Imagen 3
    const imageGenerationRes = await fetch(
      `${GEMINI_BASE}/models/${MODEL_IMAGE_GENERATOR}:predict?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(imagenRequestBody),
      }
    );

    if (!imageGenerationRes.ok) {
      const errPayload = await imageGenerationRes.text();
      throw new Error(`Imagen 3 API Error (Status ${imageGenerationRes.status}): ${errPayload}`);
    }

    const finalData = await imageGenerationRes.json();
    
    // Mengambil ekstraksi base64 hasil generate dari array objek predictions/outputs Google
    const finalImageBase64 = finalData.predictions?.[0]?.bytesBase64 || finalData.outputs?.[0]?.bytesBase64;

    if (!finalImageBase64) {
      console.error("Struktur Response Gagal:", JSON.stringify(finalData));
      throw new Error("Gagal mengekstrak hasil data gambar dari response Imagen 3");
    }

    return NextResponse.json({
      success: true,
      imageUrl: `data:image/png;base64,${finalImageBase64}`,
      themeId: theme.id,
    });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan sistem";
    console.error("[/api/photobooth/generate] CRITICAL ERROR:", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
