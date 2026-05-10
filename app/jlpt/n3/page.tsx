"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { ExamSelector } from "@/components/exam-selector";

const materials = [
  {
    id: 1,
    title: "Soumatome",
    japanese: "総まとめ",
    description: "Materi belajar terstruktur per minggu dengan target waktu yang jelas",
    icon: "📚",
    link: "/jlpt/n3/soumatome",
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-400/50",
  },
  {
    id: 2,
    title: "Shin Kanzen Master",
    japanese: "新完全マスター",
    description: "Buku latihan komprehensif untuk persiapan JLPT",
    icon: "📖",
    link: "/jlpt/n3/kanzen",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-400/50",
  },
  {
    id: 3,
    title: "Latihan Soal",
    japanese: "練習問題",
    description: "Kerjakan soal-soal JLPT N3 dari tahun 2011-2025",
    icon: "✍️",
    link: "/jlpt/n3?type=exam",
    color: "from-orange-500/20 to-amber-500/20",
    borderColor: "border-orange-400/50",
  },
];

export default function N3Page() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  if (type === "exam") {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-16">
          <div className="bg-card border-b border-border py-6 mb-8">
            <div className="max-w-6xl mx-auto px-4">
              <Link 
                href="/jlpt" 
                className="text-primary hover:underline text-sm inline-block mb-2"
              >
                ← Kembali ke Pilih Level
              </Link>
              <h1 className="text-3xl font-bold">JLPT N3 - Latihan Soal</h1>
              <p className="text-muted-foreground text-sm mt-1">Menengah - Topik Sehari-hari</p>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4">
            <ExamSelector level="n3" />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 text-sm"
            >
              ← Kembali ke beranda
            </Link>
            
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Tingkat Menengah
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold mt-4 mb-6">
              <span className="text-foreground">JLPT </span>
              <span className="text-primary">N3</span>
            </h1>
            <p className="text-2xl text-accent mb-3">レベル3</p>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Pahami topik sehari-hari dan percakapan praktis. Pilih materi belajar di bawah ini.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {materials.map((material) => (
              <Link key={material.id} href={material.link}>
                <Card
                  className={`group relative overflow-hidden bg-gradient-to-br ${material.color} backdrop-blur-sm border-2 ${material.borderColor} hover:border-primary/70 transition-all duration-500 cursor-pointer h-full hover:scale-105`}
                >
                  <div className="p-8 text-center space-y-4">
                    <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                      {material.icon}
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {material.title}
                      </h3>
                      <p className="text-primary text-lg">{material.japanese}</p>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {material.description}
                    </p>
                    <div className="pt-4">
                      <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Mulai Belajar →
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
