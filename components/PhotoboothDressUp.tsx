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
  const [facing, setFacing] = useState<"user" | "environment">("user");
  const [timerSec, setTimerSec] = useState(5);
  const [countdown, setCountdown] = useState<number | null>(null);
  const countdownRef = useRef<ReturnType<typeof setInterval> | null>(null);
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

  const cancelCountdown = useCallback(() => {
    if (countdownRef.current) clearInterval(countdownRef.current);
    countdownRef.current = null;
    setCountdown(null);
  }, []);

  const stopCamera = useCallback(() => {
    cancelCountdown();
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    setCameraOn(false);
  }, [cancelCountdown]);

  useEffect(() => () => stopCamera(), [stopCamera]);

  const lastStep = steps[steps.length - 1];
  const currentResult = lastStep?.image ?? null;
  const wornIds = new Set(steps.map((s) => s.categoryId));
  const activeCategory =
    categories.find((c) => c.id === selectedId) ??
    categories.find((c) => !wornIds.has(c.id)) ??
    categories[0];

  // Minta frame portrait; kamera laptop biasanya tetap landscape, jadi hasilnya
  // dipotong ke 3:4 saat diambil (sama dengan area yang terlihat di preview).
  const startCamera = async (mode: "user" | "environment" = facing) => {
    try {
      cancelCountdown();
      streamRef.current?.getTracks().forEach((t) => t.stop());
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: mode, aspectRatio: { ideal: 3 / 4 }, height: { ideal: 1280 } },
      });
      streamRef.current = stream;
      if (videoRef.current) videoRef.current.srcObject = stream;
      setFacing(mode);
      setCameraOn(true);
      setError(null);
    } catch (err: any) {
      setError("Gagal mengakses kamera: " + err.message);
    }
  };

  // Kamera belakang lebih cocok kalau difotokan orang lain.
  const switchCamera = () => startCamera(facing === "user" ? "environment" : "user");

  // Ambil bagian tengah frame dengan rasio 3:4. Tidak di-mirror, supaya
  // tulisan/logo di baju tetap terbaca benar di hasil akhir.
  const captureBasePhoto = async () => {
    const video = videoRef.current;
    if (!video || !video.videoWidth) return;
    const vw = video.videoWidth;
    const vh = video.videoHeight;
    const ratio = 3 / 4;
    const sw = vw / vh > ratio ? vh * ratio : vw;
    const sh = vw / vh > ratio ? vh : vw / ratio;
    const canvas = document.createElement("canvas");
    canvas.width = sw;
    canvas.height = sh;
    canvas.getContext("2d")!.drawImage(video, (vw - sw) / 2, (vh - sh) / 2, sw, sh, 0, 0, sw, sh);
    const raw = canvas.toDataURL("image/jpeg", 0.9);
    setBasePhoto(await compressImage(raw));
    stopCamera();
  };

  // Hitung mundur dulu supaya sempat mundur dan berpose full badan.
  const startCountdown = () => {
    if (countdownRef.current) return;
    if (timerSec === 0) {
      captureBasePhoto();
      return;
    }
    let left = timerSec;
    setCountdown(left);
    countdownRef.current = setInterval(() => {
      left -= 1;
      if (left > 0) {
        setCountdown(left);
      } else {
        cancelCountdown();
        captureBasePhoto();
      }
    }, 1000);
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
        <p className="text-center text-sm text-gray-300">
          Mulai dengan foto <span className="font-semibold text-white">full badan</span> dirimu — item pakaian akan dipasang di foto ini.
        </p>
        <div className="bg-black/30 rounded-xl p-3 text-xs text-gray-300">
          <p className="font-semibold text-white mb-1">📋 Tips supaya hasilnya bagus:</p>
          <ul className="list-disc pl-4 space-y-0.5">
            <li>Seluruh badan terlihat, dari kepala sampai kaki</li>
            <li>Berdiri tegak menghadap kamera, tangan sedikit menjauh dari badan</li>
            <li>Latar polos dan cahaya terang</li>
            <li>Pakai baju yang pas badan, bukan jaket tebal atau baju sangat longgar</li>
          </ul>
        </div>

        <button onClick={() => baseFileRef.current?.click()} className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-sm shadow-lg">🖼️ Upload Foto Full Badan</button>
        <input ref={baseFileRef} type="file" accept="image/*" className="hidden" onChange={handleBaseUpload} />

        <p className="text-center text-xs text-gray-500">— atau ambil foto pakai kamera —</p>

        <div className="relative w-full max-w-xs mx-auto aspect-[3/4] bg-black rounded-xl overflow-hidden border-2 border-cyan-600/50">
          <video ref={videoRef} autoPlay playsInline muted className={`w-full h-full object-cover ${facing === "user" ? "scale-x-[-1]" : ""}`} />
          {!cameraOn && (
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">📷 Kamera mati</div>
          )}
          {cameraOn && (
            <>
              {/* Panduan posisi badan: kepala sampai kaki di dalam garis */}
              <div className="absolute inset-x-[22%] top-[4%] bottom-[3%] border-2 border-dashed border-white/40 rounded-t-[45%] rounded-b-xl pointer-events-none" />
              <p className="absolute top-2 inset-x-0 text-center text-[10px] text-white/80 pointer-events-none">Kepala sampai kaki di dalam garis</p>
            </>
          )}
          {countdown !== null && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none">
              <span className="text-7xl font-bold text-white drop-shadow-lg">{countdown}</span>
            </div>
          )}
        </div>

        {!cameraOn ? (
          <button onClick={() => startCamera()} className="w-full py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 text-sm shadow-lg">📷 Buka Kamera</button>
        ) : (
          <>
            <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
              <span>⏱️ Timer:</span>
              {[0, 3, 5, 10].map((sec) => (
                <button
                  key={sec}
                  onClick={() => setTimerSec(sec)}
                  disabled={countdown !== null}
                  className={`px-2.5 py-1 rounded-md font-semibold disabled:opacity-50 ${timerSec === sec ? "bg-pink-500 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
                >
                  {sec === 0 ? "Off" : `${sec}s`}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              {countdown === null ? (
                <button onClick={startCountdown} className="flex-1 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-400 hover:to-pink-500 text-sm shadow-lg">📸 Ambil Foto</button>
              ) : (
                <button onClick={cancelCountdown} className="flex-1 py-2.5 rounded-xl font-bold text-white bg-red-600 hover:bg-red-500 text-sm shadow-lg">✖ Batal</button>
              )}
              <button onClick={switchCamera} disabled={countdown !== null} className="px-4 py-2.5 rounded-xl font-semibold text-gray-200 bg-gray-700 hover:bg-gray-600 disabled:opacity-40 text-sm shadow-lg" title="Ganti kamera depan/belakang">🔄</button>
              <button onClick={stopCamera} className="px-4 py-2.5 rounded-xl font-semibold text-gray-200 bg-gray-700 hover:bg-gray-600 text-sm shadow-lg" title="Tutup kamera">✕</button>
            </div>
            <p className="text-center text-[11px] text-gray-500">Foto disimpan tidak terbalik (bukan cermin), supaya tulisan di baju terbaca benar.</p>
          </>
        )}

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
