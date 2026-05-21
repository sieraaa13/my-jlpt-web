import { NextRequest, NextResponse } from "next/server";
import { THEMES } from "@/data/photobooth-themes";

export const maxDuration = 60;

const GEMINI_API_KEY = process.env.GEMINI_API_KEY!;
const GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta";

// ── Step 1: Gemini 1.5 Flash analisa foto user + tema → hasilkan prompt detail ──
async function analyzeWithGemini(
  userBase64: string,
  userMime: string,
  themePrompt: string,
  themeName: string
): Promise<string> {
  const res = await fetch(
    `${GEMINI_BASE}/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `You are an expert image generation prompt writer.

Look at this person's photo carefully. Note their:
- Face shape, skin tone, hair color and style
- Any distinctive features
- Expression and pose

Now write a detailed image generation prompt that will:
1. Keep this person's face EXACTLY the same (same identity, features, skin tone, hair)
2. Apply this theme style: "${themeName}" — ${themePrompt}
3. Make it look like a professional photo in that theme's style

Rules:
- Start with "A photo of a person with [describe their exact features]"
- Include specific lighting, colors, and atmosphere from the theme
- End with "photorealistic, high quality, face preserved"
- Write ONLY the prompt, no explanation, max 150 words`,
              },
              {
                inline_data: {
                  mime_type: userMime,
                  data: userBase64,
                },
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 300,
        },
      }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Gemini Flash error: ${err}`);
  }

  const data = await res.json();
  const prompt = data.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!prompt) throw new Error("Gemini tidak menghasilkan prompt");

  console.log("[Gemini] Generated prompt:", prompt);
  return prompt.trim();
}

// ── Step 2: Imagen 3 generate foto berdasarkan prompt dari Gemini ──
async function generateWithImagen(prompt: string): Promise<string> {
  const res = await fetch(
    `${GEMINI_BASE}/models/imagen-3.0-generate-002:predict?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        instances: [{ prompt }],
        parameters: {
          sampleCount: 1,
          aspectRatio: "1:1",
          safetyFilterLevel: "BLOCK_SOME",
          personGeneration: "ALLOW_ADULT",
        },
      }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Imagen error: ${err}`);
  }

  const data = await res.json();
  const b64 = data.predictions?.[0]?.bytesBase64Encoded;

  if (!b64) throw new Error("Imagen tidak menghasilkan gambar");

  return `data:image/png;base64,${b64}`;
}

// ── POST /api/photobooth/generate ──
export async function POST(req: NextRequest) {
  try {
    const { image, themeId } = await req.json();

    if (!image) {
      return NextResponse.json({ error: "Tidak ada foto" }, { status: 400 });
    }

    // Ambil tema dari daftar
    const theme = THEMES.find((t) => t.id === themeId) ?? THEMES[0];

    // Parse base64
    const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
    const mimeType = image.startsWith("data:image/png")
      ? "image/png"
      : "image/jpeg";

    // Step 1: Gemini analisa → prompt detail
    const detailedPrompt = await analyzeWithGemini(
      base64Data,
      mimeType,
      theme.prompt,
      theme.name
    );

    // Step 2: Imagen generate foto
    const imageUrl = await generateWithImagen(detailedPrompt);

    return NextResponse.json({
      success: true,
      imageUrl,
      themeId: theme.id,
    });

  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Terjadi kesalahan";
    console.error("[/api/photobooth/generate]", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
