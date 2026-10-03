// ⚠️ FILE INI UNTUK: app/api/photobooth/dressup/route.ts
// Ciri khas: export async function POST, generate satu item per panggilan

import { NextRequest, NextResponse } from "next/server";
import { claimPhotoboothCredit } from "@/lib/photobooth-server";
import { PhotoboothError, generatePhotoboothImage, toInlineImage } from "@/lib/photobooth-gemini";

export const maxDuration = 120;

const CATEGORY_FILE = "tema4.json";

type Category = {
  id: string;
  name: string;
  order: number;
  prompt: string;
};

function getBaseUrl(): string {
  return process.env.NEXT_PUBLIC_BASE_URL ?? "https://my-jlpt-web.vercel.app";
}

async function loadCategories(): Promise<Category[]> {
  const res = await fetch(`${getBaseUrl()}/asset/photobooth/themes/${CATEGORY_FILE}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Gagal load kategori item");
  const parsed = await res.json();
  return Array.isArray(parsed.categories) ? parsed.categories : [];
}

export async function POST(req: NextRequest) {
  // Diisi setelah jatah kuota diambil; dipanggil kalau generate gagal.
  let refund: (() => Promise<void>) | null = null;

  try {
    const { originalPhoto, currentPhoto, itemPhoto, categoryId, userId } = await req.json();

    if (!originalPhoto || !itemPhoto || !categoryId) {
      return NextResponse.json(
        { error: "originalPhoto, itemPhoto, dan categoryId wajib diisi" },
        { status: 400 }
      );
    }

    const categories = await loadCategories();
    const category = categories.find((c) => c.id === categoryId);

    if (!category) {
      return NextResponse.json({ error: "Kategori item tidak ditemukan" }, { status: 404 });
    }

    // Reward quiz + kuota harian (setelah validasi, supaya request salah tidak memakan jatah)
    const claim = await claimPhotoboothCredit(userId);
    if (!claim.ok) return claim.response;
    refund = claim.refund;

    // Image 1 = foto asli (referensi wajah/identitas), Image 2 = state sekarang
    // (hasil generate terakhir, atau foto asli kalau ini item pertama), Image 3 = item baru
    const parts: any[] = [
      { text: category.prompt },
      toInlineImage(originalPhoto),
      toInlineImage(currentPhoto || originalPhoto),
      toInlineImage(itemPhoto),
    ];

    const imageUrl = await generatePhotoboothImage(parts, `Dressup kategori "${category.id}"`);

    return NextResponse.json({
      success: true,
      imageUrl,
      categoryId: category.id,
    });

  } catch (error: unknown) {
    console.error("[/api/photobooth/dressup] CRITICAL ERROR:", error);
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
