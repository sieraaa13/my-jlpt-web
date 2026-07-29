"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Halaman ini menangkap semua URL 1-segmen seperti /n1, /n2, /n4, /n5
// (kecuali /n3 yang sudah punya halaman statis sendiri di app/n3/page.tsx).
//
// Dulu di sini ada halaman placeholder (Kanji/Bunpou/Dokkai) dengan tombol
// yang tidak berfungsi. Sekarang diganti jadi redirect otomatis ke halaman
// "Pilih Tahun Ujian" yang sudah fungsional di /jlpt/{level}?type=exam,
// supaya siapapun yang membuka /n1, /n2, /n4, /n5 (dari link lama,
// bookmark, atau ketik manual) langsung diarahkan ke halaman yang benar.
export default function LevelPage({ params }: { params: { level: string } }) {
  const router = useRouter();
  const level = params.level?.toLowerCase() || "n1";

  useEffect(() => {
    router.replace(`/jlpt/${level}?type=exam`);
  }, [level, router]);

  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-muted-foreground">Mengalihkan ke halaman level {level.toUpperCase()}...</div>
    </main>
  );
}
