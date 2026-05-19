import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60;

export async function POST(req: NextRequest) {
  try {
    const { image, template } = await req.json();

    if (!image) {
      return NextResponse.json({ error: "Tidak ada foto" }, { status: 400 });
    }

    const sharp = (await import("sharp")).default;
    const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
    const userBuffer = await sharp(Buffer.from(base64Data, "base64"))
      .resize(512, 512, { fit: "cover", position: "center" })
      .jpeg({ quality: 90 })
      .toBuffer();

    const stylePrompts: Record<string, string> = {
      underwater: "same person, underwater theme, blue ocean lighting, coral reef, keep face identical, same gender, same hair, same features",
      templates:  "same person, colorful photobooth, pastel background, keep face identical, same gender, same hair, same features",
      sakura:     "same person, cherry blossom garden, pink lighting, keep face identical, same gender, same hair, same features",
      school:     "same person, school setting, keep face identical, same gender, same hair, same features",
    };

    const prompt = stylePrompts[template ?? "underwater"] ?? stylePrompts.underwater;

    const formData = new FormData();
    formData.append("init_image", new Blob([userBuffer], { type: "image/jpeg" }), "user.jpg");
    formData.append("init_image_mode", "IMAGE_STRENGTH");
    formData.append("image_strength", "0.25");
    formData.append("text_prompts[0][text]", prompt);
    formData.append("text_prompts[0][weight]", "1");
    formData.append("text_prompts[1][text]", "different person, different face, different gender, ugly, deformed, blurry, watermark, cartoon, anime");
    formData.append("text_prompts[1][weight]", "-1");
    formData.append("cfg_scale", "7");
    formData.append("samples", "1");
    formData.append("steps", "30");
    formData.append("style_preset", "photographic");

    const res = await fetch(
      "https://api.stability.ai/v1/generation/stable-diffusion-v1-6/image-to-image",
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
      throw new Error(err?.message ?? "Gagal generate");
    }

    const data = await res.json();
    const base64Result = data.artifacts?.[0]?.base64;

    if (!base64Result) throw new Error("Tidak ada gambar");

    return NextResponse.json({
      success: true,
      imageUrl: `data:image/png;base64,${base64Result}`,
    });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan";
    console.error("[/api/photobooth/generate]", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
