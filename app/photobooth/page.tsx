"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

// ────────────────────────────────────────────────
// Data template (sesuaikan path dengan file di /public/asset/photobooth/)
// ────────────────────────────────────────────────
const TEMPLATES = [
  {
    id: "templates",
    name: "Kawaii Sticker",
    emoji: "⭐",
    desc: "Gaya stiker imut ala Jepang",
    preview: "/asset/photobooth/templates.png",
  },
  {
    id: "underwater",
    name: "Underwater",
    emoji: "🌊",
    desc: "Putri duyung di lautan ajaib",
    preview: "/asset/photobooth/underwater-template.png",
  },
  {
    id: "sakura",
    name: "Sakura",
    emoji: "🌸",
    desc: "Festival bunga sakura musim semi",
    preview: null, // belum punya template, pakai warna saja
  },
  {
    id: "school",
    name: "School Life",
    emoji: "📚",
    desc: "Kehidupan sekolah ala anime",
    preview: null,
  },
  {
    id: "harajuku",
    name: "Harajuku",
    emoji: "🎨",
    desc: "Fashion jalanan Harajuku Tokyo",
    preview: null,
  },
  {
    id: "kimono",
    name: "Kimono",
    emoji: "👘",
    desc: "Anggun dalam kimono tradisional",
    preview: null,
  },
];

export default function PhotoboothPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState("templates");
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ── Handle file select ──
  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("File harus berupa gambar (JPG, PNG, WEBP)");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("Ukuran foto maksimal 5MB");
      return;
    }
    setError(null);
    setResultUrl(null);
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  // ── Drag & drop ──
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = () => setIsDragging(false);
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  // ── Generate ──
  const handleGenerate = async () => {
    if (!selectedFile) return;
    setIsLoading(true);
    setError(null);
    setResultUrl(null);

    try {
      const form = new FormData();
      form.append("image", selectedFile);
      form.append("template", selectedTemplate);

      const res = await fetch("/api/photobooth", {
        method: "POST",
        body: form,
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error ?? "Gagal generate. Coba lagi!");
      }

      setResultUrl(data.imageUrl);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Terjadi kesalahan.");
    } finally {
      setIsLoading(false);
    }
  };

  // ── Download ──
  const handleDownload = async () => {
    if (!resultUrl) return;
    const a = document.createElement("a");
    a.href = resultUrl;
    a.download = `nihongo-photobooth-${selectedTemplate}.png`;
    a.target = "_blank";
    a.click();
  };

  const templateData = TEMPLATES.find((t) => t.id === selectedTemplate);

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-10 px-4">
      <div className="max-w-4xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-10">
          <div className="text-5xl mb-3">📸</div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Anime Photobooth
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Upload foto kamu → pilih tema → jadikan anime! ✨
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* ── Kolom Kiri: Upload + Template ── */}
          <div className="flex flex-col gap-4">

            {/* Upload zone */}
            <div
              onClick={() => fileInputRef.current?.click()}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`
                relative border-2 border-dashed rounded-2xl cursor-pointer transition-all
                flex flex-col items-center justify-center min-h-[200px] overflow-hidden
                ${isDragging
                  ? "border-purple-400 bg-purple-50 dark:bg-purple-900/20"
                  : "border-pink-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-gray-700"
                }
              `}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleInputChange}
              />
              {previewUrl ? (
                <>
                  <Image
                    src={previewUrl}
                    alt="Preview foto kamu"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <p className="text-white text-sm font-medium">Klik untuk ganti foto</p>
                  </div>
                </>
              ) : (
                <div className="text-center p-6">
                  <div className="text-4xl mb-2">🖼️</div>
                  <p className="text-gray-600 dark:text-gray-300 font-medium text-sm">
                    Klik atau drag foto di sini
                  </p>
                  <p className="text-gray-400 text-xs mt-1">JPG, PNG, WEBP · Maks 5MB</p>
                </div>
              )}
            </div>

            {/* Template selector */}
            <div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                🎭 Pilih Tema
              </p>
              <div className="grid grid-cols-3 gap-2">
                {TEMPLATES.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTemplate(t.id)}
                    className={`
                      relative rounded-xl border-2 p-2 text-center transition-all text-xs
                      ${selectedTemplate === t.id
                        ? "border-purple-500 bg-purple-50 dark:bg-purple-900/30"
                        : "border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 hover:border-purple-300"
                      }
                    `}
                  >
                    {/* Template preview image */}
                    {t.preview ? (
                      <div className="relative w-full h-16 rounded-lg overflow-hidden mb-1">
                        <Image src={t.preview} alt={t.name} fill className="object-cover" />
                      </div>
                    ) : (
                      <div className="w-full h-16 rounded-lg bg-gradient-to-br from-pink-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center mb-1">
                        <span className="text-2xl">{t.emoji}</span>
                      </div>
                    )}
                    <span className="font-medium text-gray-700 dark:text-gray-300 block leading-tight">
                      {t.name}
                    </span>
                    {selectedTemplate === t.id && (
                      <span className="absolute top-1 right-1 text-purple-500 text-xs">✓</span>
                    )}
                  </button>
                ))}
              </div>
              {templateData && (
                <p className="text-xs text-gray-400 mt-2 text-center">
                  {templateData.emoji} {templateData.desc}
                </p>
              )}
            </div>

            {/* Error */}
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-3 text-sm text-red-600 dark:text-red-400">
                ⚠️ {error}
              </div>
            )}

            {/* Generate button */}
            <button
              onClick={handleGenerate}
              disabled={!selectedFile || isLoading}
              className={`
                w-full py-3 rounded-2xl font-bold text-white transition-all text-sm
                ${!selectedFile || isLoading
                  ? "bg-gray-300 dark:bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-lg hover:shadow-xl active:scale-95"
                }
              `}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                  Lagi diproses... (30–60 detik)
                </span>
              ) : (
                "✨ Generate Anime Photo!"
              )}
            </button>
          </div>

          {/* ── Kolom Kanan: Hasil ── */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              🌟 Hasil Generate
            </p>

            <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border-2 border-dashed border-pink-200 dark:border-gray-600 min-h-[300px] flex items-center justify-center">
              {isLoading ? (
                <div className="text-center p-8">
                  {/* Gunakan wait_icon.gif yang sudah ada */}
                  <Image
                    src="/asset/wait_icon.gif"
                    alt="Loading..."
                    width={80}
                    height={80}
                    className="mx-auto mb-4"
                    unoptimized
                  />
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    AI lagi nge-anime-in kamu...
                  </p>
                  <p className="text-gray-400 text-xs mt-1">Sabar ya, butuh 30–60 detik ✨</p>
                </div>
              ) : resultUrl ? (
                <Image
                  src={resultUrl}
                  alt="Hasil anime photobooth"
                  fill
                  className="object-contain"
                />
              ) : (
                <div className="text-center p-8 text-gray-400">
                  <div className="text-5xl mb-3">🎨</div>
                  <p className="text-sm">Hasil foto akan muncul di sini</p>
                  <p className="text-xs mt-1">Upload foto & klik Generate dulu!</p>
                </div>
              )}
            </div>

            {/* Download button */}
            {resultUrl && (
              <div className="flex gap-2">
                <button
                  onClick={handleDownload}
                  className="flex-1 py-3 rounded-2xl font-bold text-white bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 transition-all shadow-md hover:shadow-lg active:scale-95 text-sm"
                >
                  ⬇️ Download Foto
                </button>
                <button
                  onClick={() => {
                    setResultUrl(null);
                    setSelectedFile(null);
                    setPreviewUrl(null);
                  }}
                  className="px-4 py-3 rounded-2xl font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all text-sm"
                >
                  🔄 Reset
                </button>
              </div>
            )}

            {/* Before/After comparison (tampil kalau ada hasil) */}
            {resultUrl && previewUrl && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 border border-pink-100 dark:border-gray-700">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3 text-center">
                  Before → After
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="relative h-28 rounded-xl overflow-hidden">
                      <Image src={previewUrl} alt="Foto asli" fill className="object-cover" />
                    </div>
                    <p className="text-xs text-center text-gray-400 mt-1">Foto kamu</p>
                  </div>
                  <div>
                    <div className="relative h-28 rounded-xl overflow-hidden">
                      <Image src={resultUrl} alt="Versi anime" fill className="object-cover" />
                    </div>
                    <p className="text-xs text-center text-gray-400 mt-1">Versi anime ✨</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Tips ── */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl p-4 border border-pink-100 dark:border-gray-700">
          <p className="text-xs font-semibold text-gray-600 dark:text-gray-300 mb-2">
            💡 Tips biar hasilnya keren:
          </p>
          <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1 list-disc list-inside">
            <li>Gunakan foto wajah yang jelas dan tidak buram</li>
            <li>Pencahayaan yang baik = hasil yang lebih bagus</li>
            <li>Foto close-up wajah (selfie) lebih optimal</li>
            <li>Hindari foto dengan banyak orang di belakang</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
