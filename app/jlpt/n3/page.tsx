"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Navbar } from "@/components/navbar";

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
    link: "/jlpt",
    color: "from-orange-500/20 to-amber-500/20",
    borderColor: "border-orange-400/50",
  },
];

export default function N3Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          {/* Header */}
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

          {/* Materials Grid */}
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
