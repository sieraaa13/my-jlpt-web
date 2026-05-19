import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60;

const TEMPLATE_FILES: Record<string, string> = {
  underwater: "underwater-template.png",
  templates:  "templates.png",
  sakura:     "underwater-template.png",
  school:     "underwater-template.png",
};

const PROMPTS: Record<string, string> = {
  underwater: "underwater mermaid scene, magical ocean, glowing bubbles, ethereal pastel colors, coral reef",
  templates:  "kawaii photobooth, cute stickers, colorful stars and hearts, pastel colors",
  sakura:     "cherry blossom festival, pink petals falling, Japanese spring, dreamy",
  school:     "school uniform, classroom background, kawaii japanese school style",
};

// ── Deteksi posisi frame pakai GPT-4 Vision ──────────────────────────────────
async function detectFramePositions(templateUrl: string) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: { url: templateUrl },
            },
            {
              type: "text",
              text: `Analyze this photobooth template image carefully.
Find all empty rectangular photo frames/slots where user photos should be placed.
These are usually white/light colored rectangular areas, possibly tilted, that look like photo placeholders.

Return ONLY valid JSON with no extra text or markdown:
{
  "frames": [
    {
      "x": 0.55,
      "y": 0.12,
      "width": 0.25,
      "height": 0.28,
      "rotation": 8
    }
  ]
}

Rules:
- x, y, width, height are decimal fractions of image dimensions (0.0 to 1.0)
- x and y are the TOP-LEFT corner of the frame
- rotation is in degrees (positive = clockwise, negative = counter-clockwise)
- Only include actual empty photo slots, not decorative elements
- Order frames from top to bottom`,
            },
          ],
        },
      ],
      max_tokens: 500,
    }),
  });

  if (!res.ok) {
    throw new Error("GPT Vision gagal deteksi frame");
  }

  const data = await res.json();
  const content = data.choices?.[0]?.message?.content ?? "";

  // Parse JSON dari response
  const clean = content.replace(/```json|```/g, "").trim();
  const parsed = JSON.parse(clean);

  return parsed.frames as Array<{
    x: number;
    y: number;
    width: number;
    height: number;
    rotation: number;
  }>;
}

// ── Poll Replicate prediction ─────────────────────────────────────────────────
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

// ── POST /api/photobooth/generate ────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const { image, template } = await req.json();

    if (!image) {
      return NextResponse.json({ error: "Tidak ada foto" }, { status: 400 });
    }

    const prompt = PROMPTS[template ?? "underwater"] ?? PROMPTS.underwater;
    const templateFile = TEMPLATE_FILES[template ?? "underwater"] ?? TEMPLATE_FILES.underwater;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://my-jlpt-web.vercel.app";
    const templateUrl = `${baseUrl}/asset/photobooth/${templateFile}`;

    // Jalankan keduanya paralel untuk hemat waktu
    const [replicateRes, frames] = await Promise.all([
      // 1. Generate foto dengan Replicate
      fetch("https://api.replicate.com/v1/predictions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.REPLICATE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          version: "a07f252abbbd832009640b27f063ea52d87d7a23ce5cac7c14a4e2b74a4f6a8",
          input: {
            image,
            style: "3D",
            prompt,
            negative_prompt: "ugly, deformed, blurry, bad quality",
            num_steps: 20,
            style_strength_ratio: 35,
            num_outputs: 1,
            guidance_scale: 7.5,
          },
        }),
      }),
      // 2. Deteksi posisi frame dengan GPT-4 Vision
      detectFramePositions(templateUrl),
    ]);

    if (!replicateRes.ok) {
      const err = await replicateRes.json();
      throw new Error(err?.detail ?? "Gagal menghubungi Replicate");
    }

    const prediction = await replicateRes.json();
    const imageUrl = await pollPrediction(prediction.id);

    return NextResponse.json({
      success: true,
      imageUrl,
      frames, // koordinat frame untuk dipakai di canvas
    });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Terjadi kesalahan";
    console.error("[/api/photobooth/generate]", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
