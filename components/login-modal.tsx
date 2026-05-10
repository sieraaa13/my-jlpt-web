"use client";

import { useState } from "react";
import { X, User, Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/auth-context";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;

    setLoading(true);
    setError("");
    setSuccessMessage("");

    const result = await login(trimmed);

    if (result.success) {
      setSuccessMessage(
        result.isNewUser
          ? `Halo ${trimmed}! Akun baru berhasil dibuat 🎉`
          : `Selamat datang kembali, ${trimmed}! 👋`
      );
      // Auto close setelah 1.5 detik
      setTimeout(() => {
        setName("");
        setSuccessMessage("");
        onClose();
      }, 1500);
    } else {
      setError(result.error || "Gagal login");
    }

    setLoading(false);
  };

  const handleSkip = () => {
    setName("");
    setError("");
    setSuccessMessage("");
    onClose();
  };

  return (
    <>
      <div
        onClick={!loading ? onClose : undefined}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[10000] animate-in fade-in duration-200"
      />

      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[10001] w-[90%] max-w-md animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-card border-2 border-border rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-5 border-b border-border relative">
            {!loading && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup"
                className="absolute top-3 right-3 p-1 rounded-full hover:bg-background/50 transition-colors"
              >
                <X size={20} />
              </button>
            )}

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Selamat Datang!</h2>
                <p className="text-xs text-muted-foreground">
                  Yuk perkenalkan dirimu
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-5 space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium mb-2">
                Nama Kamu
              </label>
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  id="username"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setError("");
                  }}
                  placeholder="Contoh: Andi"
                  maxLength={30}
                  autoFocus
                  disabled={loading}
                  className="w-full pl-10 pr-4 py-3 bg-muted rounded-xl border-2 border-transparent focus:border-primary focus:outline-none text-sm transition-colors disabled:opacity-50"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                💡 Sesi login akan tetap aktif selama 12 jam, lalu otomatis logout.
                Data ujian kamu akan tersimpan permanen di akun ini.
              </p>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                <p className="text-sm text-red-600 font-medium">⚠️ {error}</p>
              </div>
            )}

            {successMessage && (
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                <p className="text-sm text-green-600 font-medium">✓ {successMessage}</p>
              </div>
            )}

            <div className="flex gap-2">
              <Button
                type="submit"
                disabled={!name.trim() || loading}
                className="flex-1 rounded-xl py-5 font-semibold disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Memproses...
                  </>
                ) : (
                  "Masuk"
                )}
              </Button>
              <Button
                type="button"
                variant="ghost"
                onClick={handleSkip}
                disabled={loading}
                className="rounded-xl py-5 font-semibold"
              >
                Lewati
              </Button>
            </div>

            <p className="text-[11px] text-center text-muted-foreground pt-1">
              ✨ Tanpa daftar, tanpa password — kamu tetap bisa pakai web ini secara gratis.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
