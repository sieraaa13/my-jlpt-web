import { NextRequest, NextResponse } from 'next/server';
import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const image = formData.get('image') as File;

    if (!image) {
      return NextResponse.json(
        { error: 'No image provided' },
        { status: 400 }
      );
    }

    // Convert image to base64
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Image = `data:${image.type};base64,${buffer.toString('base64')}`;

    console.log('🎨 Generating underwater image...');

    // Call Replicate SDXL
    const output = await replicate.run(
      "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
      {
        input: {
          image: base64Image,
          prompt: `
            Transform this photo into a vibrant underwater scene.
            The person should be surrounded by cute cartoon fish 🐠,
            colorful bubbles, small jellyfish 🪼, and green seaweed 🌿.
            
            Style: playful, kawaii aesthetic, vibrant colors,
            Instagram-worthy, professional quality.
            
            Keep the person's face clear and recognizable.
          `,
          negative_prompt: `
            ugly, blurry, distorted, low quality, 
            realistic fish, scary, dark, horror,
            deformed face, extra limbs
          `,
          num_outputs: 1,
          guidance_scale: 7.5,
          num_inference_steps: 30,
          scheduler: "K_EULER",
        }
      }
    );

    console.log('✅ Generation complete!');

    return NextResponse.json({
      success: true,
      imageUrl: Array.isArray(output) ? output[0] : output,
    });

  } catch (error: any) {
    console.error('❌ Error:', error);
    return NextResponse.json(
      { error: error.message || 'Generation failed' },
      { status: 500 }
    );
  }
}
