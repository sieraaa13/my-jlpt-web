import { NextRequest, NextResponse } from "next/server";
import { THEMES } from "@/data/photobooth-themes";

export const maxDuration = 60;

const GEMINI_API_KEY = process.env.GEMINI_API_KEY!;
const GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta";

// Model yang tersedia (dicek dari ListModels):
const MODEL_ANALYZE = "gemini-2.5-flash";        // analisa foto
const MODEL_IMAGE   = "gemini-2.5-flash-image";  // Nano Banana - generate gambar

// ── Step 1: Gemini 2.5 Flash analisa foto → hasilkan prompt detail ──
async function analyzeWithGemini(
  userBase64: string,
  userMime: string,
  themePrompt: string,
  themeName: string
): Promise<string> {
  const res = await fetch(
    `${GEMINI_BASE}/models/${MODEL_ANALYZE}:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `You are an expert image editing prompt writer.

Look at this person's photo carefully. Note their face shape, skin tone, hair color and style, distinctive features, expression, and pose.

Write a detailed image editing instruction that will:
1. Keep this person's face and identity EXACTLY the same
2. Apply this theme: "${themeName}" — ${themePrompt}
3. Look like a professional photo in that theme style

Rules:
- Describe the person's exact features briefly first
- Then describe lighting, colors, background, atmosphere from the theme
- Emphasize "keep the same face and identity"
- Write ONLY the instruction, no explanation, max 120 words`,
              },
              {
                inline_data: { mime_type: userMime, data: userBase64 },
              },
            ],
          },
        ],
        generationConfig: { temperature: 0.7, maxOutputTokens: 300 },
      }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Gemini analyze error: ${err}`);
  }

  const data = await res.json();
  const prompt = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!prompt) throw new Error("Gemini tidak menghasilkan prompt");

  console.log("[Gemini] Prompt:", prompt.trim());
  return prompt.trim();
}

// ── Step 2: Nano Banana (gemini-2.5-flash-image) edit foto ──
async function generateImage(
  userBase64: string,
  userMime: string,
  prompt: string
): Promise<string> {
  const res = await fetch(
    `${GEMINI_BASE}/models/${MODEL_IMAGE}:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: prompt },
              { inline_data: { mime_type: userMime, data: userBase64 } },
            ],
          },
        ],
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
  const parts = data.candidates?.[0]?.content?.parts ?? [];
  const imagePart = parts.find(
    (p: any) => p.inlineData?.mimeType?.startsWith("image/")
  );

  if (!imagePart?.inlineData?.data) {
    throw new Error("Tidak ada gambar yang dihasilkan");
  }

  return `data:${imagePart.inlineData.mimeType};base64,${imagePart.inlineData.data}`;
}

// ── POST /api/photobooth/generate ──
export async function POST(req: NextRequest) {
  try {
    const { image, themeId } = await req.json();

    if (!image) {
      return NextResponse.json({ error: "Tidak ada foto" }, { status: 400 });
    }

    const theme = THEMES.find((t) => t.id === themeId) ?? THEMES[0];

    const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
    const mimeType = image.startsWith("data:image/png")
      ? "image/png"
      : "image/jpeg";

    // Step 1: analisa foto → prompt detail
    const detailedPrompt = await analyzeWithGemini(
      base64Data,
      mimeType,
      theme.prompt,
      theme.name
    );

    // Step 2: Nano Banana edit foto
    const imageUrl = await generateImage(base64Data, mimeType, detailedPrompt);

    return NextResponse.json({ success: true, imageUrl, themeId: theme.id });

  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Terjadi kesalahan";
    console.error("[/api/photobooth/generate]", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
