import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";

// Untuk Vercel Pro: set max 60s. Kalau Hobby plan, pakai pendekatan async (lihat catatan di bawah)
export const maxDuration = 60;

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

// ────────────────────────────────────────────────
// Prompt per template (sesuaikan dengan file di /public/asset/photobooth/)
// ────────────────────────────────────────────────
const TEMPLATE_PROMPTS: Record<string, string> = {
  templates: "kawaii anime photobooth style, cute stickers decoration, colorful stars hearts buttons badges, chibi art style, bright cheerful colors",
  underwater: "anime mermaid underwater world, magical ocean scene, glowing bubbles, ethereal pastel colors, aquatic fantasy",
  sakura: "anime girl cherry blossom sakura festival, soft pink petals falling, Japanese spring aesthetic, dreamy atmosphere",
  school: "anime high school kawaii, cute school uniform, classroom bokeh background, japanese school aesthetic",
  harajuku: "harajuku street fashion anime, colorful bold outfit, Takeshita Street Tokyo, vibrant pop art style",
  kimono: "anime girl wearing beautiful kimono, traditional Japanese pattern, elegant, soft warm colors, temple background",
};

// ────────────────────────────────────────────────
// Helper: File → base64 data URI
// ────────────────────────────────────────────────
async function fileToDataUri(file: File): Promise<string> {
  const bytes = await file.arrayBuffer();
  const base64 = Buffer.from(bytes).toString("base64");
  return `data:${file.type};base64,${base64}`;
}

// ────────────────────────────────────────────────
// POST /api/photobooth
// Body: FormData { image: File, template: string }
// ────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const imageFile = formData.get("image") as File | null;
    const template = (formData.get("template") as string) ?? "templates";

    // ── Validasi ──
    if (!imageFile || imageFile.size === 0) {
      return NextResponse.json(
        { error: "Foto tidak ditemukan. Upload dulu ya!" },
        { status: 400 }
      );
    }

    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!allowedTypes.includes(imageFile.type)) {
      return NextResponse.json(
        { error: "Format foto harus JPG, PNG, atau WEBP" },
        { status: 400 }
      );
    }

    // Max 5MB
    if (imageFile.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Ukuran foto maksimal 5MB" },
        { status: 400 }
      );
    }

    // ── Convert ke base64 ──
    const dataUri = await fileToDataUri(imageFile);

    // ── Ambil prompt sesuai template ──
    const extraPrompt = TEMPLATE_PROMPTS[template] ?? TEMPLATE_PROMPTS.templates;
    const fullPrompt = `anime style portrait, ${extraPrompt}, high quality, detailed, beautiful illustration`;

    // ── Panggil Replicate: fofr/face-to-many ──
    // Model ini ambil wajah user → generate versi anime-nya
    // Cek versi terbaru di: https://replicate.com/fofr/face-to-many
    const output = await replicate.run(
      "fofr/face-to-many:a07f252abbbd832009640b27f063ea52d87d7a23ce5cac7c14a4e2b74a4f6a8",
      {
        input: {
          image: dataUri,
          style: "Anime",
          prompt: extraPrompt,
          negative_prompt:
            "ugly, deformed, bad anatomy, extra limbs, blurry, low quality, watermark, realistic photo",
          num_steps: 20,
          style_strength_ratio: 35,
          num_outputs: 1,
          guidance_scale: 7.5,
        },
      }
    );

    // output = array of URL strings
    const urls = output as string[];

    if (!urls || urls.length === 0) {
      throw new Error("Model tidak menghasilkan gambar. Coba lagi!");
    }

    return NextResponse.json({
      success: true,
      imageUrl: urls[0],
      template,
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Terjadi kesalahan. Coba lagi!";
    console.error("[/api/photobooth]", error);

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
