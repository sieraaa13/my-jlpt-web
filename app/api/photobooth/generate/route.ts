import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60;

async function pollPrediction(id: string): Promise<string> {
  const token = process.env.REPLICATE_API_TOKEN;

  for (let i = 0; i < 30; i++) {
    await new Promise((r) => setTimeout(r, 2000));

    const res = await fetch(`https://api.replicate.com/v1/predictions/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
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

    const prompts: Record<string, string> = {
      underwater: "anime mermaid underwater, magical ocean, glowing bubbles, ethereal pastel colors",
      templates:  "kawaii anime photobooth, cute stickers, colorful stars and hearts, chibi style",
      sakura:     "anime girl cherry blossom, pink petals falling, Japanese spring, dreamy",
      school:     "anime school uniform, classroom background, kawaii japanese school style",
    };

    const prompt = prompts[template ?? "underwater"] ?? prompts.underwater;

    const createRes = await fetch("https://api.replicate.com/v1/predictions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REPLICATE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        version: "a07f252abbbd832009640b27f063ea52d87d7a23ce5cac7c14a4e2b74a4f6a8",
        input: {
          image,
          style: "Anime",
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
