"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { compressImage } from "./Photobooth";

type CategoryInfo = { id: string; name: string; order: number };

export default function PhotoboothDressUp({ isOpen }: { isOpen: boolean }) {
  const [categories, setCategories] = useState<CategoryInfo[]>([]);
  const [basePhoto, setBasePhoto] = useState<string | null>(null);
  const [currentResult, setCurrentResult] = useState<string | null>(null);
  const [doneIds, setDoneIds] = useState<string[]>([]);
  const [itemPhoto, setItemPhoto] = useState<string | null>(null);
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

  const activeCategory = categories.find((c) => !doneIds.includes(c.id));

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

  const handleGenerateItem = async () => {
    if (!basePhoto || !itemPhoto || !activeCategory) return;
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/photobooth/dressup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          originalPhoto: basePhoto,
          currentPhoto: currentResult,
          itemPhoto,
          categoryId: activeCategory.id,
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

      setCurrentResult(data.imageUrl);
      setDoneIds((d) => [...d, activeCategory.id]);
      setItemPhoto(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSkipCategory = () => {
    if (!activeCategory) return;
    setDoneIds((d) => [...d, activeCategory.id]);
    setItemPhoto(null);
    setError(null);
  };

  const handleReset = () => {
    stopCamera();
    setBasePhoto(null);
    setCurrentResult(null);
    setDoneIds([]);
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

  const allDone = categories.length > 0 && doneIds.length >= categories.length;
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

  // ═══ STEP 2: foto dasar ada, tambah item satu per satu ═══
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
          <button onClick={handleReset} className="px-5 py-2.5 rounded-xl font-semibold text-gray-200 bg-gray-700 hover:bg-gray-600 text-sm shadow-lg">🔄 Mulai Ulang</button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="bg-black/30 rounded-xl p-3 max-h-40 overflow-y-auto">
          {categories.map((c, i) => {
            const done = doneIds.includes(c.id);
            const active = activeCategory?.id === c.id;
            return (
              <div key={c.id} className={`flex items-center gap-2 py-1.5 text-sm ${active ? "text-white font-semibold" : done ? "text-emerald-400" : "text-gray-500"}`}>
                <span className="w-5 text-center">{done ? "✓" : i + 1}</span>
                <span>{c.name}</span>
              </div>
            );
          })}
        </div>

        {activeCategory ? (
          <div className="flex flex-col gap-3 bg-black/20 rounded-xl p-3">
            <p className="text-white text-sm font-semibold">Tambah: {activeCategory.name}</p>
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
            <div className="flex gap-2">
              <button onClick={handleGenerateItem} disabled={!itemPhoto || isLoading} className="flex-1 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-40 text-sm shadow-lg">
                {isLoading ? "✨ AI memproses..." : "✨ Generate"}
              </button>
              <button onClick={handleSkipCategory} disabled={isLoading} className="px-5 py-3 rounded-xl font-semibold text-gray-200 bg-gray-700 hover:bg-gray-600 disabled:opacity-40 text-sm shadow-lg">Lewati</button>
            </div>
          </div>
        ) : allDone ? (
          <div className="bg-emerald-900/30 border border-emerald-600 rounded-xl p-4 text-center text-emerald-300 text-sm">🎉 Semua item sudah dipasang! Download hasilnya di kiri.</div>
        ) : null}
      </div>
    </div>
  );
}
