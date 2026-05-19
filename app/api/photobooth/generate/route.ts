import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60;

const TEMPLATE_FILES: Record<string, string> = {
  underwater: "underwater-template.png",
  templates:  "templates.png",
  sakura:     "underwater-template.png",
  school:     "underwater-template.png",
};

export async function POST(req: NextRequest) {
  try {
    const { image, template } = await req.json();

    if (!image) {
      return NextResponse.json({ error: "Tidak ada foto" }, { status: 400 });
    }

    const sharp = (await import("sharp")).default;

    // Resize foto user ke 1024x1024
    const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
    const userBuffer = await sharp(Buffer.from(base64Data, "base64"))
      .resize(1024, 1024, { fit: "cover", position: "center" })
      .png()
      .toBuffer();

    // Ambil file template via URL publik
    const templateFile = TEMPLATE_FILES[template ?? "underwater"] ?? TEMPLATE_FILES.underwater;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://my-jlpt-web.vercel.app";
    const templateRes = await fetch(`${baseUrl}/asset/photobooth/${templateFile}`);

    if (!templateRes.ok) {
      throw new Error("Gagal load template image");
    }

    const templateBuffer = await sharp(Buffer.from(await templateRes.arrayBuffer()))
      .resize(1024, 1024, { fit: "cover" })
      .png()
      .toBuffer();

    // Kirim ke Stability AI replace-background
    const formData = new FormData();
    formData.append("subject_image",    new Blob([userBuffer],     { type: "image/png" }), "user.png");
    formData.append("background_reference", new Blob([templateBuffer], { type: "image/png" }), "template.png");
    formData.append("foreground_ratio", "0.85");
    formData.append("output_format",    "png");

    const res = await fetch(
      "https://api.stability.ai/v2beta/stable-image/edit/replace-background-and-relight",
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
