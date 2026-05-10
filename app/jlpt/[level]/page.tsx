"use client";

import { ExamSelector } from "@/components/exam-selector";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useParams } from "next/navigation";

const LEVEL_INFO: Record<string, { label: string; description: string }> = {
  n5: { label: "N5", description: "Pemula - Dasar-dasar Bahasa Jepang" },
  n4: { label: "N4", description: "Dasar - Komunikasi Sehari-hari" },
  n3: { label: "N3", description: "Menengah - Topik Umum" },
  n2: { label: "N2", description: "Lanjut - Percakapan Profesional" },
  n1: { label: "N1", description: "Profesional - Level Tertinggi" },
};

export default function JLPTExamPage() {
  const params = useParams();
  const level = (params.level as string)?.toUpperCase() || "N3";
  const levelInfo = LEVEL_INFO[(params.level as string)?.toLowerCase() || "n3"];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        {/* Header dengan level info */}
        <div className="bg-card border-b border-border py-6 mb-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-4 mb-2">
              <a href="/jlpt" className="text-primary hover:underline text-sm">
                ← Kembali ke Pilih Level
              </a>
            </div>
            <h1 className="text-3xl font-bold">
              JLPT {level}
            </h1>
            <p className="text-muted-foreground mt-1">
              {levelInfo?.description}
            </p>
          </div>
        </div>
        
        {/* ExamSelector */}
        <div className="max-w-6xl mx-auto px-4">
          <ExamSelector />
        </div>
      </div>
      <Footer />
    </main>
  );
}
