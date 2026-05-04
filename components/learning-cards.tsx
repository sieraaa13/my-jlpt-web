"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

const learningPaths = [
  {
    id: 1,
    title: "JLPT",
    japanese: "日本語",
    description: "Uji kemampuan mu dengan mengerjakan soal JLPT",
    image: "/my-jlpt-web/asset/JLPT.jpg",
    character: "Teacher A",
    level: "Pemula",
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-400/50",
    offsetX: "",  // ← KOSONG
    offsetY: "",  // ← KOSONG
  },
  {
    id: 2,
    title: "N1",
    japanese: "レベル1",
    description: "Level tertinggi JLPT. Kuasai bahasa Jepang profesional!",
    image: "/my-jlpt-web/asset/n1.jpg",
    character: "Master B",
    level: "Tingkat Lanjut",
    color: "from-sky-500/20 to-cyan-500/20",
    borderColor: "border-sky-400/50",
    offsetX: "",  // ← KOSONG
    offsetY: "",  // ← KOSONG
  },
  {
    id: 3,
    title: "N2",
    japanese: "レベル2",
    description: "Mahir dalam percakapan profesional dan media cetak.",
    image: "/my-jlpt-web/asset/n2.jpg",
    character: "Coach C",
    level: "Lanjut",
    color: "from-indigo-500/20 to-violet-500/20",
    borderColor: "border-indigo-400/50",
    offsetX: "",  // ← KOSONG
    offsetY: "",  // ← KOSONG
  },
  {
    id: 4,
    title: "N3",
    japanese: "レベル3",
    description: "Pahami topik sehari-hari dan percakapan praktis.",
    image: "/my-jlpt-web/asset/n3.jpg",
    character: "Guide D",
    level: "Menengah",
    color: "from-orange-500/20 to-amber-500/20",
    borderColor: "border-orange-400/50",
    offsetX: "",  // ← KOSONG
    offsetY: "",  // ← KOSONG
  },
  {
    id: 5,
    title: "N4",
    japanese: "レベル4",
    description: "Komunikasi dasar dalam situasi sehari-hari.",
    image: "/my-jlpt-web/asset/n4.jpg",
    character: "Helper E",
    level: "Dasar",
    color: "from-purple-500/20 to-fuchsia-500/20",
    borderColor: "border-purple-400/50",
    offsetX: "",  // ← KOSONG
    offsetY: "",  // ← KOSONG
  },
  {
    id: 6,
    title: "N5",
    japanese: "レベル5",
    description: "Pemula - Pelajari dasar-dasar bahasa Jepang dengan mudah!",
    image: "/my-jlpt-web/asset/n5.jpg",
    character: "Friend F",
    level: "Pemula",
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-400/50",
    offsetX: "",  // ← KOSONG
    offsetY: "",  // ← KOSONG
  },
];

export function LearningCards() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Jalur Pembelajaran
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Pilih <span className="text-primary">Petualangan</span>mu
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Setiap karakter anime akan membimbingmu dalam perjalanan menguasai bahasa Jepang
          </p>
        </div>

        {/* Asymmetric grid layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {learningPaths.map((path) => (
            <Card
              key={path.id}
              className={`group relative overflow-hidden bg-gradient-to-br ${path.color} backdrop-blur-sm border-2 ${path.borderColor} hover:border-primary/70 transition-all duration-500 cursor-pointer ${path.offsetX} ${path.offsetY}`}
              onMouseEnter={() => setHoveredId(path.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="p-6">
                {/* Character image - asymmetric positioning */}
                <div className={`relative w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden border-2 ${path.borderColor} shadow-xl transform transition-transform duration-500 ${hoveredId === path.id ? 'scale-110 rotate-3' : ''}`}>
                  <Image 
                    src={path.image} 
                    alt={path.character} 
                    fill 
                    className="object-cover"
                  />
                </div>
                
                {/* Level badge - positioned asymmetrically */}
                <div className="absolute top-4 right-4">
                  <span className="bg-secondary/80 backdrop-blur-sm text-secondary-foreground text-xs px-3 py-1 rounded-full">
                    {path.level}
                  </span>
                </div>

                {/* Content */}
                <div className="text-center space-y-3">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{path.title}</h3>
                    <p className="text-primary text-lg">{path.japanese}</p>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {path.description}
                  </p>
                  
                  <div className="flex justify-center items-center gap-2 text-xs text-muted-foreground">
  <span className="bg-card/50 px-2 py-1 rounded">
    👤 {path.character}
  </span>
</div>
                </div>

                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-primary/10 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <Link href="/jlpt" className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 inline-block">
  Mulai Belajar →
</Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
