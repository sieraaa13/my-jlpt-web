"use client";

import { useState, useRef, useCallback, useEffect } from "react";

type ThemeInfo = {
  id: string;
  name: string;
  template: string;
  maxPhotos: number;
};

// ═══════════════════════════════════════════════════════════════
// Resize + kompres foto agar payload tidak melebihi batas Vercel
// ═══════════════════════════════════════════════════════════════
async function compressImage(base64: string, maxSize = 1024, quality = 0.7): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      let { width, height } = img;
      if (width > height && width > maxSize) {
        height = (height * maxSize) / width;
        width = maxSize;
      } else if (height > maxSize) {
        width = (width * maxSize) / height;
        height = maxSize;
      }
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL("image/jpeg", quality));
    };
    img.src = base64;
  });
}

export default function Photobooth({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [themes, setThemes] = useState<ThemeInfo[]>([]);
  const [selectedTheme, setSelectedTheme] = useState<ThemeInfo | null>(null);
  const [photos, setPhotos] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cameraOn, setCameraOn] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    fetch("/api/photobooth/themes")
      .then((r) => r.json())
      .then((data) => {
        if (data.success && data.themes.length > 0) {
          setThemes(data.themes);
          setSelectedTheme(data.themes[0]);
        }
      })
      .catch((err) => setError("Gagal load tema: " + err.message));
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

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

  const maxPhotos = selectedTheme?.maxPhotos ?? 6;

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

  // Capture + kompres
  const capturePhoto = async () => {
    if (photos.length >= maxPhotos || !videoRef.current) return;
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
    const compressed = await compressImage(raw);   // <-- KOMPRES
    setPhotos((p) => [...p, compressed]);
  };

  // Upload + kompres
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    e.target.value = "";
    files.forEach((file) => {
      if (photos.length >= maxPhotos) return;
      const reader = new FileReader();
      reader.onload = async (ev) => {
        const raw = ev.target!.result as string;
        const compressed = await compressImage(raw);   // <-- KOMPRES
        setPhotos((p) => (p.length < maxPhotos ? [...p, compressed] : p));
      };
      reader.readAsDataURL(file);
    });
  };

  const removePhoto = (idx: number) => {
    setPhotos((p) => p.filter((_, i) => i !== idx));
  };

  const handleGenerate = async () => {
    if (photos.length === 0 || !selectedTheme) return;
    setIsLoading(true);
    setError(null);
    setResult(null);
    stopCamera();

    try {
      const res = await fetch("/api/photobooth/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ images: photos, themeId: selectedTheme.id }),
      });

      // Cek kalau response bukan JSON (misal error 413)
      const contentType = res.headers.get("content-type");
      if (!contentType?.includes("application/json")) {
        const text = await res.text();
        throw new Error(
          res.status === 413
            ? "Foto terlalu besar. Coba kurangi jumlah foto atau pakai foto lebih kecil."
            : `Server error: ${text.slice(0, 100)}`
        );
      }

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
    a.download = `photobooth-${selectedTheme?.id}-${Date.now()}.png`;
    a.click();
  };

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/95 overflow-y-auto"
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div className="min-h-screen flex items-start justify-center px-4 py-8">
        <div className="relative bg-gray-900 rounded-2xl p-6 max-w-6xl w-full shadow-2xl">
          <button onClick={handleClose} className="absolute top-4 right-4 z-[10000] bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl shadow-lg">×</button>

          <div className="text-center mb-6 pr-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">📸 AI PHOTOBOOTH</h2>
            <p className="text-xs text-gray-400">Pilih tema → kumpulkan foto → generate!</p>
          </div>

          {themes.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <label className="text-white text-sm font-semibold">🎨 Pilih Tema:</label>
                <span className="text-xs text-gray-400">{themes.length} tema</span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 max-h-72 overflow-y-auto p-2 bg-black/30 rounded-xl">
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => {
                      setSelectedTheme(theme);
                      setPhotos([]);
                      setResult(null);
                    }}
                    className={`group relative rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      selectedTheme?.id === theme.id
                        ? "border-pink-500 ring-2 ring-pink-400/50 scale-105 shadow-lg shadow-pink-500/30"
                        : "border-gray-700 hover:border-pink-400/50 hover:scale-102"
                    }`}
                  >
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900 relative">
                      <img 
                        src={theme.template} 
                        alt={theme.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent && !parent.querySelector('.error-placeholder')) {
                            const placeholder = document.createElement('div');
                            placeholder.className = 'error-placeholder absolute inset-0 flex flex-col items-center justify-center text-gray-500 text-center p-2';
                            placeholder.innerHTML = '<div class="text-2xl mb-1">🖼️</div><div class="text-[10px]">Template<br/>tidak ada</div>';
                            parent.appendChild(placeholder);
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 p-2 bg-black/90 backdrop-blur-sm">
                      <p className="text-white text-[11px] font-semibold truncate leading-tight">{theme.name}</p>
                      <p className="text-gray-400 text-[9px]">{theme.maxPhotos} foto</p>
                    </div>
                    {selectedTheme?.id === theme.id && (
                      <div className="absolute top-2 right-2 bg-pink-500 rounded-full w-6 h-6 flex items-center justify-center shadow-lg z-10">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-3">
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
                  <button onClick={capturePhoto} disabled={photos.length >= maxPhotos} className="flex-1 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-400 hover:to-pink-500 text-sm disabled:opacity-40 shadow-lg">📸 Ambil ({photos.length}/{maxPhotos})</button>
                )}
                <button onClick={() => fileRef.current?.click()} disabled={photos.length >= maxPhotos} className="flex-1 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-sm disabled:opacity-40 shadow-lg">🖼️ Upload</button>
                <input ref={fileRef} type="file" accept="image/*" multiple className="hidden" onChange={handleUpload} />
              </div>

              {photos.length > 0 && (
                <div className="grid grid-cols-4 gap-2">
                  {photos.map((p, i) => (
                    <div key={i} className="relative aspect-square rounded-lg overflow-hidden border border-gray-700">
                      <img src={p} alt={`${i+1}`} className="w-full h-full object-cover" />
                      <button onClick={() => removePhoto(i)} className="absolute -top-1 -right-1 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-lg z-10">×</button>
                    </div>
                  ))}
                </div>
              )}

              {error && (
                <div className="bg-red-900/30 border border-red-600 rounded-xl p-3 text-sm text-red-300">⚠️ {error}</div>
              )}

              <button onClick={handleGenerate} disabled={photos.length === 0 || isLoading || !selectedTheme} className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-40 text-sm shadow-lg">
                {isLoading ? "✨ AI memproses... (30-60 detik)" : selectedTheme ? `✨ Generate ${selectedTheme.name}` : '✨ Generate'}
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <div className="relative aspect-[3/4] bg-white rounded-xl overflow-hidden border-2 border-pink-400/50 flex items-center justify-center shadow-xl">
                {isLoading ? (
                  <div className="text-center p-6">
                    <div className="w-14 h-14 border-4 border-pink-300 border-t-pink-600 rounded-full animate-spin mx-auto mb-3"></div>
                    <p className="text-gray-600 text-sm font-medium">AI menggabungkan foto...</p>
                  </div>
                ) : result ? (
                  <img src={result} alt="hasil" className="w-full h-full object-contain" />
                ) : selectedTheme ? (
                  <div className="relative w-full h-full">
                    <img src={selectedTheme.template} alt="preview" className="w-full h-full object-contain opacity-50" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-gray-400 text-sm bg-white/90 px-4 py-2 rounded-lg shadow">Preview {selectedTheme.name}</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-400">Pilih tema dulu</p>
                )}
              </div>

              {result && (
                <div className="flex gap-2">
                  <button onClick={handleDownload} className="flex-1 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 shadow-lg">⬇️ Download</button>
                  <button onClick={handleReset} className="px-5 py-3 rounded-xl font-semibold text-gray-200 bg-gray-700 hover:bg-gray-600 shadow-lg">🔄</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
