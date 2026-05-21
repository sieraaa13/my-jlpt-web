import { NextRequest, NextResponse } from "next/server";
import { THEMES } from "@/data/photobooth-themes";

export const maxDuration = 60;

const GEMINI_API_KEY = process.env.GEMINI_API_KEY!;
const GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta";
const MODEL_IMAGE = "gemini-2.5-flash-image"; // Nano Banana

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
// Body: { images: string[] (base64 array foto user), themeId: string }
export async function POST(req: NextRequest) {
  try {
    const { images, themeId } = await req.json();

    if (!images || !Array.isArray(images) || images.length === 0) {
      return NextResponse.json({ error: "Tidak ada foto" }, { status: 400 });
    }

    const theme = THEMES.find((t) => t.id === themeId) ?? THEMES[0];

    // 1. Ambil template
    const template = await fetchTemplateBase64(theme.template);

    // 2. Siapkan parts: instruksi + template + semua foto user
    const parts: any[] = [
      {
        text: `You are editing a photobooth template image.

The FIRST image is the template with ${theme.maxPhotos} empty photo frames/slots.
The following ${images.length} image(s) are photos of people.

Your task:
- Place each person's photo naturally into the empty frames of the template
- Keep each person's face and identity EXACTLY the same
- Edit each photo to match this theme style: ${theme.prompt}
- Make the people blend naturally with the template aesthetic (lighting, colors, grain)
- Keep all template decorations, text, and stickers intact
- The final result should look like a cohesive, professional photobook page

Generate the complete final composite image.`,
      },
      // Template sebagai gambar pertama
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
