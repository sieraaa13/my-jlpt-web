import { NextRequest, NextResponse } from "next/server";
import { claimPhotoboothCredit } from "@/lib/photobooth-server";
import { PhotoboothError, generatePhotoboothImage, toInlineImage } from "@/lib/photobooth-gemini";
import { THEMES } from "@/lib/photobooth-themes";

export const maxDuration = 120;

function getBaseUrl(): string {
  return process.env.NEXT_PUBLIC_BASE_URL ?? "https://my-jlpt-web.vercel.app";
}

async function fetchTemplateBase64(templateFile: string): Promise<{ data: string; mime: string }> {
  const res = await fetch(`${getBaseUrl()}/asset/photobooth/${templateFile}`);
  if (!res.ok) throw new Error("Gagal load template");

  const buffer = Buffer.from(await res.arrayBuffer());
  const mime = templateFile.endsWith(".png") ? "image/png" : "image/jpeg";
  return { data: buffer.toString("base64"), mime };
}

export async function POST(req: NextRequest) {
  // Diisi setelah jatah kuota diambil; dipanggil kalau generate gagal.
  let refund: (() => Promise<void>) | null = null;

  try {
    const { images, themeId, userId } = await req.json();

    if (!images || !Array.isArray(images) || images.length === 0) {
      return NextResponse.json({ error: "Tidak ada foto" }, { status: 400 });
    }

    const theme = THEMES.find((t) => t.id === themeId) ?? THEMES[0];

    if (!theme) {
      return NextResponse.json({ error: "Tema tidak ditemukan" }, { status: 404 });
    }

    if (images.length > (theme.maxPhotos ?? 6)) {
      return NextResponse.json({ error: "Jumlah foto melebihi batas tema" }, { status: 400 });
    }

    // Reward quiz + kuota harian (setelah validasi, supaya request salah tidak memakan jatah)
    const claim = await claimPhotoboothCredit(userId);
    if (!claim.ok) return claim.response;
    refund = claim.refund;

    // Tema tanpa template (mis. transformasi gaya foto tunggal) tidak perlu
    // gambar canvas dasar — cukup prompt + foto user.
    const template = theme.template ? await fetchTemplateBase64(theme.template) : null;

    // Gabung: prompt custom + (template kalau ada) + foto user
    const parts: any[] = [{ text: theme.prompt }];
    if (template) {
      parts.push({ inlineData: { mimeType: template.mime, data: template.data } });
    }

    for (const img of images) {
      parts.push(toInlineImage(img));
    }

    const imageUrl = await generatePhotoboothImage(parts, `Generate tema "${theme.id}"`);

    return NextResponse.json({
      success: true,
      imageUrl,
      themeId: theme.id,
    });

  } catch (error: unknown) {
    console.error("[/api/photobooth/generate] CRITICAL ERROR:", error);
    // Jatah dikembalikan untuk semua kegagalan setelah kuota diambil
    const refunded = refund !== null;
    await refund?.();
    const known = error instanceof PhotoboothError;
    const message = known ? error.message : "Terjadi kesalahan sistem. Coba lagi.";
    return NextResponse.json(
      { error: refunded ? `${message} (Jatah generate-mu tidak terpakai.)` : message },
      { status: known ? error.status : 500 }
    );
  }
}
