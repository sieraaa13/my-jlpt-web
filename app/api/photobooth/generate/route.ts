import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60;

const PROMPTS: Record<string, string> = {
  underwater: "anime girl mermaid underwater, magical ocean, glowing bubbles, ethereal pastel colors, kawaii style",
  templates:  "kawaii anime girl photobooth, cute stickers, colorful stars hearts, chibi style",
  sakura:     "anime girl cherry blossom, pink petals falling, Japanese spring, dreamy soft colors",
  school:     "anime school uniform, classroom background, kawaii japanese school style",
};

// Resize base64 image ke ukuran yang didukung Stability AI (1024x1024)
async function resizeBase64(base64: string): Promise<Buffer> {
  const base64Data = base64.replace(/^data:image\/\w+;base64,/, "");
  const inputBuffer = Buffer.from(base64Data, "base64");

  // Gunakan Canvas API bawaan browser tidak tersedia di server
  // Pakai pendekatan: kirim ke Stability AI dengan ukuran 512x512 via crop manual
  // Kita resize dengan membuat ulang ukuran image menggunakan sharp-like approach
  
  // Import sharp (tersedia di Vercel)
  const sharp = (await import("sharp")).default;
  
  return sharp(inputBuffer)
    .resize(1024, 1024, { fit: "cover", position: "center" })
    .jpeg({ quality: 90 })
    .toBuffer();
}

export async function POST(req: NextRequest) {
  try {
    const { image, template } = await req.json();

    if (!image) {
      return NextResponse.json({ error: "Tidak ada foto" }, { status: 400 });
    }

    const prompt = PROMPTS[template ?? "underwater"] ?? PROMPTS.underwater;

    // Resize gambar ke 1024x1024
    const resizedBuffer = await resizeBase64(image);

    const formData = new FormData();
    const blob = new Blob([resizedBuffer], { type: "image/jpeg" });
    formData.append("init_image", blob, "photo.jpg");
    formData.append("init_image_mode", "IMAGE_STRENGTH");
    formData.append("image_strength", "0.4");
    formData.append("text_prompts[0][text]", `${prompt}, anime style, high quality illustration`);
    formData.append("text_prompts[0][weight]", "1");
    formData.append("text_prompts[1][text]", "ugly, deformed, blurry, bad quality, realistic photo, watermark");
    formData.append("text_prompts[1][weight]", "-1");
    formData.append("cfg_scale", "7");
    formData.append("samples", "1");
    formData.append("steps", "30");

    const res = await fetch(
      "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/image-to-image",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
          Accept: "application/json",
        },
        body: formData,
      }
    );

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err?.message ?? "Gagal generate di Stability AI");
    }

    const data = await res.json();
    const base64Image = data.artifacts?.[0]?.base64;

    if (!base64Image) throw new Error("Tidak ada gambar yang dihasilkan");

    return NextResponse.json({ 
      success: true, 
      imageUrl: `data:image/png;base64,${base64Image}` 
    });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan";
    console.error("[/api/photobooth/generate]", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
