import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60;

const TEMPLATE_PROMPTS: Record<string, string> = {
  templates: "kawaii anime photobooth style, cute stickers decoration, colorful stars hearts buttons badges, chibi art style, bright cheerful colors",
  underwater: "anime mermaid underwater world, magical ocean scene, glowing bubbles, ethereal pastel colors, aquatic fantasy",
  sakura: "anime girl cherry blossom sakura festival, soft pink petals falling, Japanese spring aesthetic, dreamy atmosphere",
  school: "anime high school kawaii, cute school uniform, classroom bokeh background, japanese school aesthetic",
  harajuku: "harajuku street fashion anime, colorful bold outfit, Takeshita Street Tokyo, vibrant pop art style",
  kimono: "anime girl wearing beautiful kimono, traditional Japanese pattern, elegant, soft warm colors, temple background",
};

async function pollPrediction(predictionId: string): Promise<string[]> {
  const token = process.env.REPLICATE_API_TOKEN;

  for (let i = 0; i < 30; i++) {
    await new Promise((r) => setTimeout(r, 2000));

    const res = await fetch(
      `https://api.replicate.com/v1/predictions/${predictionId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const data = await res.json();

    if (data.status === "succeeded") return data.output as string[];
    if (data.status === "failed" || data.status === "canceled") {
      throw new Error(data.error ?? "Replicate prediction gagal");
    }
  }
  throw new Error("Timeout: generate terlalu lama. Coba lagi!");
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const imageFile = formData.get("image") as File | null;
    const template = (formData.get("template") as string) ?? "templates";

    if (!imageFile || imageFile.size === 0) {
      return NextResponse.json({ error: "Foto tidak ditemukan. Upload dulu ya!" }, { status: 400 });
    }

    if (!["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(imageFile.type)) {
      return NextResponse.json({ error: "Format foto harus JPG, PNG, atau WEBP" }, { status: 400 });
    }

    if (imageFile.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "Ukuran foto maksimal 5MB" }, { status: 400 });
    }

    const bytes = await imageFile.arrayBuffer();
    const base64 = Buffer.from(bytes).toString("base64");
    const dataUri = `data:${imageFile.type};base64,${base64}`;

    const createRes = await fetch("https://api.replicate.com/v1/predictions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REPLICATE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        version: "a07f252abbbd832009640b27f063ea52d87d7a23ce5cac7c14a4e2b74a4f6a8",
        input: {
          image: dataUri,
          style: "Anime",
          prompt: TEMPLATE_PROMPTS[template] ?? TEMPLATE_PROMPTS.templates,
          negative_prompt: "ugly, deformed, bad anatomy, extra limbs, blurry, low quality, realistic photo",
          num_steps: 20,
          style_strength_ratio: 35,
          num_outputs: 1,
          guidance_scale: 7.5,
        },
      }),
    });

    if (!createRes.ok) {
      const err = await createRes.json();
      throw new Error(err?.detail ?? "Gagal menghubungi Replicate");
    }

    const prediction = await createRes.json();
    const outputUrls = await pollPrediction(prediction.id);

    if (!outputUrls || outputUrls.length === 0) {
      throw new Error("Tidak ada gambar yang dihasilkan");
    }

    return NextResponse.json({ success: true, imageUrl: outputUrls[0], template });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan. Coba lagi!";
    console.error("[/api/photobooth]", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
