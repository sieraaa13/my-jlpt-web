import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60;

const PROMPTS: Record<string, string> = {
  underwater: "underwater mermaid scene, magical ocean, glowing bubbles, ethereal pastel colors, coral reef",
  templates:  "kawaii photobooth, cute stickers, colorful stars and hearts, pastel colors",
  sakura:     "cherry blossom festival, pink petals falling, Japanese spring, dreamy",
  school:     "school uniform, classroom background, kawaii japanese school style",
};

async function pollPrediction(id: string): Promise<string> {
  for (let i = 0; i < 30; i++) {
    await new Promise((r) => setTimeout(r, 2000));

    const res = await fetch(`https://api.replicate.com/v1/predictions/${id}`, {
      headers: { Authorization: `Bearer ${process.env.REPLICATE_API_TOKEN}` },
    });
    const data = await res.json();

    if (data.status === "succeeded") return (data.output as string[])[0];
    if (data.status === "failed" || data.status === "canceled") {
      throw new Error(data.error ?? "Prediction gagal");
    }
  }
  throw new Error("Timeout, coba lagi!");
}

export async function POST(req: NextRequest) {
  try {
    const { image, template } = await req.json();

    if (!image) {
      return NextResponse.json({ error: "Tidak ada foto" }, { status: 400 });
    }

    const prompt = PROMPTS[template ?? "underwater"] ?? PROMPTS.underwater;

    const createRes = await fetch("https://api.replicate.com/v1/predictions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REPLICATE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        version: "a07f252abbbd832009640b27f063ea52d87d7a23a185ca165bec23b5adc8deaf",
        input: {
          image,
          style: "3D",
          prompt,
          negative_prompt: "ugly, deformed, blurry, bad quality, realistic",
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
    const imageUrl = await pollPrediction(prediction.id);

    return NextResponse.json({ success: true, imageUrl });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan";
    console.error("[/api/photobooth/generate]", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
