import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60;

export async function POST(req: NextRequest) {
  try {
    const { image, template } = await req.json();

    if (!image) {
      return NextResponse.json({ error: "Tidak ada foto" }, { status: 400 });
    }

    // Resize foto user ke 1024x1024
    const sharp = (await import("sharp")).default;
    const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
    const userBuffer = await sharp(Buffer.from(base64Data, "base64"))
      .resize(1024, 1024, { fit: "cover", position: "center" })
      .jpeg({ quality: 90 })
      .toBuffer();

    const stylePrompts: Record<string, string> = {
      underwater: "kawaii chibi anime girl illustration, flat colors, thick black outlines, pastel blue pink colors, underwater mermaid cute art style, simple clean illustration",
      templates:  "kawaii chibi anime girl sticker illustration, flat colors, thick black outlines, colorful pastel, cute photobooth sticker art style",
      sakura:     "kawaii chibi anime girl illustration, cherry blossom style, soft pink pastel, flat colors, thick outlines, cute japanese art",
      school:     "kawaii chibi anime school girl illustration, flat colors, thick outlines, pastel colors, cute simple art style",
    };

    const prompt = stylePrompts[template ?? "underwater"] ?? stylePrompts.underwater;

    const formData = new FormData();
    formData.append("image", new Blob([userBuffer], { type: "image/jpeg" }), "user.jpg");
    formData.append("prompt", prompt);
    formData.append("negative_prompt", "realistic, photo, ugly, deformed, blurry, watermark, 3d");
    formData.append("control_strength", "0.7");
    formData.append("output_format", "png");

    const res = await fetch(
      "https://api.stability.ai/v2beta/stable-image/control/structure",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
          Accept: "image/*",
        },
        body: formData,
      }
    );

    if (!res.ok) {
      const err = await res.text();
      throw new Error(err ?? "Gagal generate");
    }

    const imageArrayBuffer = await res.arrayBuffer();
    const base64Result = Buffer.from(imageArrayBuffer).toString("base64");

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
