"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { compressImage } from "./Photobooth";

type CategoryInfo = { id: string; name: string; order: number };

// Satu item yang sudah dipasang. item disimpan supaya langkah terakhir bisa
// di-generate ulang. image = hasil asli Gemini (preview & download); compact =
// versi JPEG kecil yang dikirim balik ke server sebagai foto "sekarang".
type Step = {
  categoryId: string;
  item: string;
  image: string;
  compact: string;
};

// Hasil Gemini berupa PNG besar; kualitas sedikit lebih tinggi dari foto
// input supaya artefak kompresi tidak menumpuk di setiap langkah.
const RESULT_MAX_SIZE = 1024;
const RESULT_QUALITY = 0.9;

export default function PhotoboothDressUp({
  isOpen, userId, outOfQuota, onGenerated,
}: {
  isOpen: boolean;
  userId: string;
  outOfQuota: boolean;
  onGenerated: () => void; // muat ulang sisa kuota
}) {
  const [categories, setCategories] = useState<CategoryInfo[]>([]);
  const [basePhoto, setBasePhoto] = useState<string | null>(null);
  const [steps, setSteps] = useState<Step[]>([]);
  const [itemPhoto, setItemPhoto] = useState<string | null>(null);
  // Kategori pilihan user; null = otomatis kategori pertama yang belum dipakai
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cameraOn, setCameraOn] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const baseFileRef = useRef<HTMLInputElement>(null);
  const itemFileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    fetch("/api/photobooth/dressup/categories")
      .then((r) => r.json())
      .then((data) => {
        if (data.success) setCategories(data.categories);
      })
      .catch((err) => setError("Gagal load kategori: " + err.message));
  }, [isOpen]);

  const stopCamera = useCallback(() => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    setCameraOn(false);
  }, []);

  useEffect(() => () => stopCamera(), [stopCamera]);

  const lastStep = steps[steps.length - 1];
  const currentResult = lastStep?.image ?? null;
  const wornIds = new Set(steps.map((s) => s.categoryId));
  const activeCategory =
    categories.find((c) => c.id === selectedId) ??
    categories.find((c) => !wornIds.has(c.id)) ??
    categories[0];

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 720 } },
      });
      streamRef.current = stream;
      if (videoRef.current) videoRef.current.srcObject = stream;
      setCameraOn(true);
    } catch (err: any) {
      setError("Gagal mengakses kamera: " + err.message);
    }
  };

  const captureBasePhoto = async () => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d")!;
    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(video, -canvas.width, 0);
    ctx.restore();
    const raw = canvas.toDataURL("image/jpeg", 0.9);
    const compressed = await compressImage(raw);
    setBasePhoto(compressed);
    stopCamera();
  };

  const handleBaseUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (ev) => {
      const raw = ev.target!.result as string;
      setBasePhoto(await compressImage(raw));
    };
    reader.readAsDataURL(file);
  };

  const handleItemUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (ev) => {
      const raw = ev.target!.result as string;
      setItemPhoto(await compressImage(raw));
    };
    reader.readAsDataURL(file);
  };

  // Pasang item di atas hasil prevSteps. Kalau gagal, langkah yang ada tidak berubah.
  const generateStep = async (prevSteps: Step[], categoryId: string, item: string) => {
    if (!basePhoto) return;
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/photobooth/dressup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          originalPhoto: basePhoto,
          currentPhoto: prevSteps[prevSteps.length - 1]?.compact ?? null,
          itemPhoto: item,
          categoryId,
          userId,
        }),
      });

      const contentType = res.headers.get("content-type");
      if (!contentType?.includes("application/json")) {
        const text = await res.text();
        throw new Error(
          res.status === 413
            ? "Foto terlalu besar. Coba pakai foto yang lebih kecil."
            : `Server error: ${text.slice(0, 100)}`
        );
      }

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Generate gagal");

      const compact = await compressImage(data.imageUrl, RESULT_MAX_SIZE, RESULT_QUALITY);
      setSteps([...prevSteps, { categoryId, item, image: data.imageUrl, compact }]);
      setItemPhoto(null);
      setSelectedId(null); // lanjut ke kategori berikutnya yang belum dipakai
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
      onGenerated();
    }
  };

  // Ganti kategori; foto item dikosongkan supaya foto atasan tidak terpasang sebagai topi.
  const handleSelectCategory = (id: string) => {
    if (isLoading || id === activeCategory?.id) return;
    setSelectedId(id);
    setItemPhoto(null);
    setError(null);
  };

  const handleGenerateItem = () => {
    if (!itemPhoto || !activeCategory) return;
    generateStep(steps, activeCategory.id, itemPhoto);
  };

  // Generate ulang langkah terakhir dengan item yang sama (memakai 1 jatah lagi).
  const handleRetry = () => {
    if (!lastStep) return;
    generateStep(steps.slice(0, -1), lastStep.categoryId, lastStep.item);
  };

  // Batalkan langkah terakhir; foto itemnya dikembalikan supaya bisa diganti atau dipakai lagi.
  const handleUndo = () => {
    if (!lastStep) return;
    setSteps((s) => s.slice(0, -1));
    setSelectedId(lastStep.categoryId);
    setItemPhoto(lastStep.item);
    setError(null);
  };

  const handleReset = () => {
    stopCamera();
    setBasePhoto(null);
    setSteps([]);
    setSelectedId(null);
    setItemPhoto(null);
    setError(null);
  };

  const handleDownload = () => {
    const result = currentResult ?? basePhoto;
    if (!result) return;
    const a = document.createElement("a");
    a.href = result;
    a.download = `photobooth-dressup-${Date.now()}.png`;
    a.click();
  };

  const allWorn = categories.length > 0 && categories.every((c) => wornIds.has(c.id));
  const previewImage = currentResult ?? basePhoto;

  // ═══ STEP 1: belum ada foto dasar ═══
  if (!basePhoto) {
    return (
      <div className="max-w-md mx-auto flex flex-col gap-3">
        <p className="text-center text-sm text-gray-300">Mulai dengan foto dirimu sebagai titik poin — item pakaian akan ditambahkan di atasnya.</p>
        <div className="relative aspect-[4/3] bg-black rounded-xl overflow-hidden border-2 border-cyan-600/50">
          <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover scale-x-[-1]" />
          {!cameraOn && (
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">📷 Kamera mati</div>
          )}
        </div>
        <div className="flex gap-2">
          {!cameraOn ? (
            <button onClick={startCamera} className="flex-1 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 text-sm shadow-lg">📷 Buka Kamera</button>
          ) : (
            <button onClick={captureBasePhoto} className="flex-1 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-400 hover:to-pink-500 text-sm shadow-lg">📸 Ambil Foto</button>
          )}
          <button onClick={() => baseFileRef.current?.click()} className="flex-1 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-sm shadow-lg">🖼️ Upload</button>
          <input ref={baseFileRef} type="file" accept="image/*" className="hidden" onChange={handleBaseUpload} />
        </div>
        {error && (
          <div className="bg-red-900/30 border border-red-600 rounded-xl p-3 text-sm text-red-300">⚠️ {error}</div>
        )}
      </div>
    );
  }

  // ═══ STEP 2: foto dasar ada, pasang item di kategori mana saja ═══
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex flex-col gap-3">
        <div className="relative aspect-[3/4] bg-white rounded-xl overflow-hidden border-2 border-pink-400/50 flex items-center justify-center shadow-xl">
          {isLoading ? (
            <div className="text-center p-6">
              <div className="w-14 h-14 border-4 border-pink-300 border-t-pink-600 rounded-full animate-spin mx-auto mb-3"></div>
              <p className="text-gray-600 text-sm font-medium">AI memasang item...</p>
            </div>
          ) : previewImage ? (
            <img src={previewImage} alt="hasil sejauh ini" className="w-full h-full object-contain" />
          ) : (
            <p className="text-gray-400">Belum ada foto</p>
          )}
        </div>
        <div className="flex gap-2">
          <button onClick={handleDownload} disabled={!previewImage} className="flex-1 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 disabled:opacity-40 text-sm shadow-lg">⬇️ Download</button>
          <button onClick={handleReset} disabled={isLoading} className="px-5 py-2.5 rounded-xl font-semibold text-gray-200 bg-gray-700 hover:bg-gray-600 disabled:opacity-40 text-sm shadow-lg">🔄 Mulai Ulang</button>
        </div>
        {lastStep && (
          <div className="flex gap-2">
            <button onClick={handleUndo} disabled={isLoading} className="flex-1 py-2.5 rounded-xl font-semibold text-gray-200 bg-gray-700 hover:bg-gray-600 disabled:opacity-40 text-sm shadow-lg">
              ↶ Undo {categories.find((c) => c.id === lastStep.categoryId)?.name ?? ""}
            </button>
            <button onClick={handleRetry} disabled={isLoading || outOfQuota} className="flex-1 py-2.5 rounded-xl font-semibold text-white bg-indigo-700 hover:bg-indigo-600 disabled:opacity-40 text-sm shadow-lg">
              🔁 Coba lagi <span className="text-xs opacity-75">(1 jatah)</span>
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <div className="bg-black/30 rounded-xl p-3">
          <p className="text-xs text-gray-400 mb-2">Pilih bagian yang mau dipasang (bebas urutannya):</p>
          <div className="grid grid-cols-2 gap-1.5">
            {categories.map((c) => {
              const worn = wornIds.has(c.id);
              const active = activeCategory?.id === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => handleSelectCategory(c.id)}
                  disabled={isLoading}
                  className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-left text-sm transition-all disabled:opacity-60 ${
                    active
                      ? "bg-pink-500 text-white font-semibold shadow"
                      : worn
                        ? "bg-emerald-900/40 text-emerald-300 hover:bg-emerald-900/60"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  <span className="w-4 text-center">{worn ? "✓" : "+"}</span>
                  <span className="truncate">{c.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {allWorn && (
          <div className="bg-emerald-900/30 border border-emerald-600 rounded-xl p-3 text-center text-emerald-300 text-sm">🎉 Semua bagian sudah terpasang! Kamu masih bisa mengganti item mana pun, atau download hasilnya.</div>
        )}

        {activeCategory ? (
          <div className="flex flex-col gap-3 bg-black/20 rounded-xl p-3">
            <p className="text-white text-sm font-semibold">
              {wornIds.has(activeCategory.id) ? "Ganti" : "Pasang"}: {activeCategory.name}
            </p>
            {itemPhoto && (
              <div className="relative aspect-square w-24 rounded-lg overflow-hidden border border-gray-700">
                <img src={itemPhoto} alt="item" className="w-full h-full object-cover" />
              </div>
            )}
            <div className="flex gap-2">
              <button onClick={() => itemFileRef.current?.click()} className="flex-1 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-sm shadow-lg">🖼️ Upload Foto Item</button>
              <input ref={itemFileRef} type="file" accept="image/*" className="hidden" onChange={handleItemUpload} />
            </div>
            {error && (
              <div className="bg-red-900/30 border border-red-600 rounded-xl p-3 text-sm text-red-300">⚠️ {error}</div>
            )}
            <button onClick={handleGenerateItem} disabled={!itemPhoto || isLoading || outOfQuota} className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-40 text-sm shadow-lg">
              {isLoading ? "✨ AI memproses..." : "✨ Generate"}
            </button>
          </div>
        ) : error ? (
          <div className="bg-red-900/30 border border-red-600 rounded-xl p-3 text-sm text-red-300">⚠️ {error}</div>
        ) : null}
      </div>
    </div>
  );
}
