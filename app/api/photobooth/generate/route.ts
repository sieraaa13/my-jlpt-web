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

    // Ganti prompt
const stylePrompts: Record<string, string> = {
  underwater: "anime portrait, soft watercolor illustration, semi-realistic face, detailed eyes, natural skin tone, underwater mermaid theme, pastel colors, high quality",
  templates:  "anime portrait, soft illustration style, semi-realistic face, detailed eyes, natural skin tone, photobooth theme, pastel colors",
  sakura:     "anime portrait, soft illustration style, semi-realistic face, cherry blossom background, natural skin tone, pastel pink",
  school:     "anime portrait, soft illustration style, semi-realistic face, school uniform, natural skin tone",
};


    const prompt = stylePrompts[template ?? "underwater"] ?? stylePrompts.underwater;

    const formData = new FormData();
    formData.append("image", new Blob([userBuffer], { type: "image/jpeg" }), "user.jpg");
    formData.append("prompt", prompt);
    formData.append("negative_prompt", "realistic, photo, ugly, deformed, blurry, watermark, 3d");
    formData.append("control_strength", "0.9");
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
