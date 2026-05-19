import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60;

const PROMPTS: Record<string, string> = {
  underwater: "anime mermaid underwater, magical ocean, glowing bubbles, ethereal pastel colors",
  templates:  "kawaii anime photobooth, cute stickers, colorful stars and hearts, chibi style",
  sakura:     "anime girl cherry blossom, pink petals falling, Japanese spring, dreamy",
  school:     "anime school uniform, classroom background, kawaii japanese school style",
};

export async function POST(req: NextRequest) {
  try {
    const { image, template } = await req.json();

    if (!image) {
      return NextResponse.json({ error: "Tidak ada foto" }, { status: 400 });
    }

    const prompt = PROMPTS[template ?? "underwater"] ?? PROMPTS.underwater;

    // Submit request ke fal.ai
    const submitRes = await fetch("https://queue.fal.run/fal-ai/face-to-sticker", {
      method: "POST",
      headers: {
        "Authorization": `Key ${process.env.FAL_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image_url: image,
        prompt: `${prompt}, anime style`,
        negative_prompt: "ugly, deformed, blurry, bad quality, realistic",
        instant_id_strength: 0.7,
        upscale: false,
      }),
    });

    if (!submitRes.ok) {
      const err = await submitRes.json();
      throw new Error(err?.detail ?? "Gagal submit ke fal.ai");
    }

    const { request_id } = await submitRes.json();

    // Poll sampai selesai
    for (let i = 0; i < 30; i++) {
      await new Promise((r) => setTimeout(r, 2000));

      const statusRes = await fetch(
        `https://queue.fal.run/fal-ai/face-to-sticker/requests/${request_id}/status`,
        { headers: { Authorization: `Key ${process.env.FAL_KEY}` } }
      );
      const status = await statusRes.json();

      if (status.status === "COMPLETED") {
        const resultRes = await fetch(
          `https://queue.fal.run/fal-ai/face-to-sticker/requests/${request_id}`,
          { headers: { Authorization: `Key ${process.env.FAL_KEY}` } }
        );
        const result = await resultRes.json();
        const imageUrl = result?.images?.[0]?.url ?? result?.image?.url;

        if (!imageUrl) throw new Error("Tidak ada gambar dari fal.ai");

        return NextResponse.json({ success: true, imageUrl });
      }

      if (status.status === "FAILED") {
        throw new Error(status.error ?? "fal.ai prediction gagal");
      }
    }

    throw new Error("Timeout, coba lagi!");

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan";
    console.error("[/api/photobooth/generate]", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
