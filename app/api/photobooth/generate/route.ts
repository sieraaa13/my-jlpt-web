import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const maxDuration = 60;

export async function POST(req: NextRequest) {
  try {
    const { image, template } = await req.json();

    if (!image) {
      return NextResponse.json({ error: "Tidak ada foto" }, { status: 400 });
    }

    // 1. Resize foto user ke 1024x1024
    const sharp = (await import("sharp")).default;
    const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
    const userBuffer = await sharp(Buffer.from(base64Data, "base64"))
      .resize(1024, 1024, { fit: "cover", position: "center" })
      .jpeg({ quality: 90 })
      .toBuffer();

    // 2. Baca file template dari public folder
    const templateName = template === "templates" 
      ? "templates.png" 
      : "underwater-template.png";
    const templatePath = path.join(process.cwd(), "public/asset/photobooth", templateName);
    const templateBuffer = fs.readFileSync(templatePath);
    const templateResized = await sharp(templateBuffer)
      .resize(1024, 1024, { fit: "cover" })
      .jpeg({ quality: 90 })
      .toBuffer();

    // 3. Kirim ke Stability AI — structure control
    // Foto user sebagai structure (wajah dipertahankan)
    // Style dari template
    const formData = new FormData();
    formData.append(
      "image",
      new Blob([userBuffer], { type: "image/jpeg" }),
      "user.jpg"
    );
    formData.append("prompt", 
      "kawaii chibi anime illustration portrait, flat colors, thick black outlines, pastel soft colors, cute simple art style, same style as template"
    );
    formData.append("negative_prompt", 
      "realistic, photo, ugly, deformed, blurry, watermark"
    );
    formData.append("control_strength", "0.7");
    formData.append("output_format", "png");

    const structureRes = await fetch(
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

    if (!structureRes.ok) {
      const err = await structureRes.text();
      throw new Error(err ?? "Gagal generate");
    }

    // 4. Response langsung berupa image binary
    const imageArrayBuffer = await structureRes.arrayBuffer();
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
