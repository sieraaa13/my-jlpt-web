"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useExamContext } from "@/components/exam-context";

export default function LevelPage({ params }: { params: { level: string } }) {
  const level = params.level?.toUpperCase() || "N1";
  const { setExamData } = useExamContext();

  // Set level ke context supaya AI tau user di level berapa
  useEffect(() => {
    setExamData({
      level,
      title: `Halaman Level ${level}`,
      questions: [],
    });

    // Bersihkan saat keluar halaman
    return () => {
      setExamData(null);
    };
  }, [level, setExamData]);

  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-background text-foreground">
      <div className="flex-1 overflow-y-auto flex flex-col">
        <Navbar />

        <div className="container mx-auto px-6 pt-32 pb-24 flex-1">
          <Link
            href="/"
            className="text-primary hover:underline mb-8 inline-block"
          >
            ← Kembali ke Beranda
          </Link>

          <div className="max-w-4xl">
            <h1 className="text-6xl font-black mb-4">
              Level <span className="text-primary">{level}</span>
            </h1>
            <p className="text-2xl text-muted-foreground mb-12">
              Selamat datang di petualangan level {level}. Di sini kamu akan
              mempelajari kanji, tata bahasa, dan pemahaman bacaan yang sesuai.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["Kanji", "Bunpou", "Dokkai"].map((section) => (
                <div
                  key={section}
                  className="p-8 rounded-3xl border border-border bg-card hover:border-primary/50 transition-colors"
                >
                  <h3 className="text-2xl font-bold mb-2">{section}</h3>
                  <p className="text-muted-foreground mb-6">
                    Mulai pelajari materi {section} untuk persiapan ujian.
                  </p>
                  <Button className="w-full rounded-xl">Mulai Belajar</Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
