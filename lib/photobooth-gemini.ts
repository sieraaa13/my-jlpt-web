// lib/photobooth-gemini.ts
// Panggilan Gemini image model untuk Photobooth (mode Tema & Dress Up).
// Semua kegagalan diubah jadi PhotoboothError berisi pesan yang bisa dipahami
// user; detail mentah dari Gemini hanya masuk log server.
// Jangan di-import dari komponen client.

const GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta";
export const MODEL_IMAGE = "gemini-3-pro-image-preview";

// SETTINGS GENERAL - sama untuk semua tema & kategori dress-up
const GENERAL_CONFIG = {
  responseModalities: ["IMAGE"],
  temperature: 0.2,
  topP: 0.85,
  topK: 15,
  candidateCount: 1,
};

export class PhotoboothError extends Error {
  constructor(message: string, public status = 500) {
    super(message);
  }
}

const MSG_SAFETY =
  "Foto ditolak filter keamanan AI. Coba foto lain: pakaian yang lebih tertutup, pose sederhana, " +
  "dan untuk foto item pakai foto barangnya saja tanpa orang.";
const MSG_RECITATION =
  "AI menolak karena foto item terlalu mirip gambar berhak cipta (misalnya foto katalog resmi atau logo merek). " +
  "Coba pakai foto item yang kamu ambil sendiri.";
const MSG_NO_IMAGE = "AI tidak menghasilkan gambar kali ini. Coba Generate lagi.";
const MSG_BUSY = "Server AI sedang sibuk. Coba lagi beberapa saat lagi.";
const MSG_DOWN = "Server AI sedang bermasalah. Coba lagi sebentar lagi.";
const MSG_BAD_INPUT = "Foto tidak bisa diproses AI. Coba foto lain dalam format JPG atau PNG.";

// finishReason / blockReason dari Gemini → pesan untuk user
const SAFETY_REASONS = new Set([
  "SAFETY", "IMAGE_SAFETY", "PROHIBITED_CONTENT", "IMAGE_PROHIBITED_CONTENT", "BLOCKLIST", "SPII",
]);
const RECITATION_REASONS = new Set(["RECITATION", "IMAGE_RECITATION"]);

function messageForReason(reason: string | undefined): string {
  if (reason && SAFETY_REASONS.has(reason)) return MSG_SAFETY;
  if (reason && RECITATION_REASONS.has(reason)) return MSG_RECITATION;
  return MSG_NO_IMAGE;
}

// data URL → inlineData Gemini (mime diambil dari data URL, default JPEG)
export function toInlineImage(dataUrl: string) {
  const match = /^data:(image\/[\w.+-]+);base64,/.exec(dataUrl);
  return {
    inlineData: {
      mimeType: match?.[1] ?? "image/jpeg",
      data: match ? dataUrl.slice(match[0].length) : dataUrl,
    },
  };
}

// Kirim prompt + gambar, kembalikan hasil sebagai data URL.
export async function generatePhotoboothImage(parts: unknown[], label: string): Promise<string> {
  console.log(`--- ${label} dengan ${MODEL_IMAGE} ---`);

  let res: Response;
  try {
    res = await fetch(
      `${GEMINI_BASE}/models/${MODEL_IMAGE}:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts }], generationConfig: GENERAL_CONFIG }),
      }
    );
  } catch (err) {
    console.error(`[${label}] Gagal menghubungi Gemini:`, err);
    throw new PhotoboothError(MSG_DOWN, 502);
  }

  if (!res.ok) {
    const errText = await res.text();
    console.error(`[${label}] Gemini error ${res.status}:`, errText);
    if (res.status === 429) throw new PhotoboothError(MSG_BUSY, 503);
    if (res.status === 400) throw new PhotoboothError(MSG_BAD_INPUT, 400);
    throw new PhotoboothError(MSG_DOWN, 502);
  }

  const data = await res.json();

  // Prompt/gambar input ditolak sebelum diproses
  const blockReason: string | undefined = data.promptFeedback?.blockReason;
  if (blockReason) {
    console.warn(`[${label}] Input diblokir Gemini: ${blockReason}`);
    throw new PhotoboothError(
      RECITATION_REASONS.has(blockReason) ? MSG_RECITATION : MSG_SAFETY,
      422
    );
  }

  const candidate = data.candidates?.[0];
  const imagePart = (candidate?.content?.parts ?? []).find(
    (p: any) => p.inlineData?.mimeType?.startsWith("image/")
  );

  if (!imagePart?.inlineData?.data) {
    const reason: string | undefined = candidate?.finishReason;
    console.error(`[${label}] Tanpa gambar (finishReason=${reason}):`, JSON.stringify(data).slice(0, 2000));
    throw new PhotoboothError(messageForReason(reason), 422);
  }

  return `data:${imagePart.inlineData.mimeType};base64,${imagePart.inlineData.data}`;
}
