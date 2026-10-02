"use client";

/* ── TOMBOL TANYA (buka chat dengan konteks soal ini) ────────── */
export function AskButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/10 border border-cyan-500/40 rounded-lg px-3 py-1.5 transition-colors"
    >
      💬 Tanya Siera tentang soal ini
    </button>
  );
}
