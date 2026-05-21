"use client";

import { useState, useRef, useCallback } from "react";

const MAX_PHOTOS = 6;          // sesuai jumlah frame template
const THEME_ID   = "scrapbook";
const TEMPLATE_SRC = "/asset/photobooth/scrapbook-template.jpg";

export default function Photobooth({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [photos, setPhotos] = useState<string[]>([]);   // foto user (base64)
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cameraOn, setCameraOn] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const stopCamera = useCallback(() => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    setCameraOn(false);
  }, []);

  const handleClose = () => {
    stopCamera();
    onClose();
  };

  if (!isOpen) return null;

  // ── Buka kamera ──
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

  // ── Ambil foto dari kamera ──
  const capturePhoto = () => {
    if (photos.length >= MAX_PHOTOS || !videoRef.current) return;
    const video = videoRef.current;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d")!;
    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(video, -canvas.width, 0);
    ctx.restore();
    setPhotos((p) => [...p, canvas.toDataURL("image/jpeg", 0.85)]);
  };

  // ── Upload foto dari device ──
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    e.target.value = "";
    files.forEach((file) => {
      if (photos.length >= MAX_PHOTOS) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        setPhotos((p) => (p.length < MAX_PHOTOS ? [...p, ev.target!.result as string] : p));
      };
      reader.readAsDataURL(file);
    });
  };

  const removePhoto = (idx: number) => {
    setPhotos((p) => p.filter((_, i) => i !== idx));
  };

  // ── Generate (kirim semua foto + template sekaligus) ──
  const handleGenerate = async () => {
    if (photos.length === 0) return;
    setIsLoading(true);
    setError(null);
    setResult(null);
    stopCamera();

    try {
      const res = await fetch("/api/photobooth/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ images: photos, themeId: THEME_ID }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Generate gagal");
      setResult(data.imageUrl);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setPhotos([]);
    setResult(null);
    setError(null);
  };

  const handleDownload = () => {
    if (!result) return;
    const a = document.createElement("a");
    a.href = result;
    a.download = `photobooth-${Date.now()}.png`;
    a.click();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 overflow-y-auto"
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div className="relative bg-gray-900 rounded-2xl p-6 max-w-5xl w-full">
        <button onClick={handleClose} className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">×</button>

        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white mb-2">📸 SCRAPBOOK PHOTOBOOTH</h2>
          <p className="text-sm text-gray-400">Kumpulkan foto → klik Generate → AI gabungkan ke template!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* KIRI: Input foto */}
          <div className="flex flex-col gap-4">
            {/* Kamera */}
            <div className="relative aspect-[4/3] bg-black rounded-xl overflow-hidden border-2 border-cyan-600">
              <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover scale-x-[-1]" />
              {!cameraOn && (
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                  Kamera mati
                </div>
              )}
            </div>

            {/* Tombol input */}
            <div className="flex gap-2 flex-wrap">
              {!cameraOn ? (
                <button onClick={startCamera} className="flex-1 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-teal-600 to-teal-800 text-sm">📷 Buka Kamera</button>
              ) : (
                <button onClick={capturePhoto} disabled={photos.length >= MAX_PHOTOS} className="flex-1 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-pink-500 to-pink-700 text-sm disabled:opacity-50">📸 Ambil ({photos.length}/{MAX_PHOTOS})</button>
              )}
              <button onClick={() => fileRef.current?.click()} disabled={photos.length >= MAX_PHOTOS} className="flex-1 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-amber-500 to-amber-700 text-sm disabled:opacity-50">🖼️ Upload</button>
              <input ref={fileRef} type="file" accept="image/*" multiple className="hidden" onChange={handleUpload} />
            </div>

            {/* Thumbnail foto yang sudah dikumpulkan */}
            {photos.length > 0 && (
              <div className="grid grid-cols-4 gap-2">
                {photos.map((p, i) => (
                  <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                    <img src={p} alt={`foto ${i+1}`} className="w-full h-full object-cover" />
                    <button onClick={() => removePhoto(i)} className="absolute top-0.5 right-0.5 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">×</button>
                  </div>
                ))}
              </div>
            )}

            {error && (
              <div className="bg-red-900/30 border border-red-700 rounded-xl p-3 text-sm text-red-300">⚠️ {error}</div>
            )}

            <button onClick={handleGenerate} disabled={photos.length === 0 || isLoading} className="w-full py-3 rounded-2xl font-bold text-white bg-gradient-to-r from-purple-500 to-indigo-600 disabled:opacity-50">
              {isLoading ? "✨ AI sedang memproses... (30-60 detik)" : `✨ Generate (${photos.length} foto)`}
            </button>
          </div>

          {/* KANAN: Hasil */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-[3/4] bg-white rounded-xl overflow-hidden border-2 border-pink-300 flex items-center justify-center">
              {isLoading ? (
                <div className="text-center p-6">
                  <div className="w-14 h-14 border-4 border-pink-300 border-t-pink-600 rounded-full animate-spin mx-auto mb-3"></div>
                  <p className="text-gray-600 text-sm">AI sedang menggabungkan foto ke template...</p>
                </div>
              ) : result ? (
                <img src={result} alt="hasil" className="w-full h-full object-contain" />
              ) : (
                <img src={TEMPLATE_SRC} alt="template" className="w-full h-full object-contain opacity-60" />
              )}
            </div>

            {result && (
              <div className="flex gap-2">
                <button onClick={handleDownload} className="flex-1 py-3 rounded-2xl font-bold text-white bg-gradient-to-r from-green-500 to-teal-500">⬇️ Download</button>
                <button onClick={handleReset} className="px-5 py-3 rounded-2xl font-medium text-gray-200 bg-gray-700">🔄 Reset</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
