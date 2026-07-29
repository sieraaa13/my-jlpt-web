"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
const learningPaths = [
  {
    id: "jlpt",
    level: "Pemula",
    title: "JLPT",
    japanese: "日本語",
    description: "Uji kemampuan mu dengan mengerjakan soal JLPT",
    character: "Teacher A",
    image: "/asset/JLPT.jpg",
    color: "from-blue-500/20 to-cyan-500/20",
    href: "/jlpt"
  },
  {
    id: "n1",
    level: "Tingkat Lanjut",
    title: "N1",
    japanese: "レベル1",
    description: "Level tertinggi JLPT. Kuasai bahasa Jepang profesional!",
    character: "Master B",
    image: "/asset/n1.jpg",
    color: "from-purple-500/20 to-pink-500/20",
    href: "/jlpt/n1?type=exam"
  },
  {
    id: "n2",
    level: "Lanjut",
    title: "N2",
    japanese: "レベル2",
    description: "Mahir dalam percakapan profesional dan media cetak.",
    character: "Coach C",
    image: "/asset/n2.jpg",
    color: "from-indigo-500/20 to-blue-500/20",
    href: "/jlpt/n2?type=exam"
  },
  {
    id: "n3",
    level: "Menengah",
    title: "N3",
    japanese: "レベル3",
    description: "Pahami topik sehari-hari dan percakapan praktis.",
    character: "Guide D",
    image: "/asset/n3.jpg",
    color: "from-emerald-500/20 to-teal-500/20",
    href: "/n3"
  },
  {
    id: "n4",
    level: "Dasar",
    title: "N4",
    japanese: "レベル4",
    description: "Komunikasi dasar dalam situasi sehari-hari.",
    character: "Helper E",
    image: "/asset/n4.jpg",
    color: "from-orange-500/20 to-yellow-500/20",
    href: "/jlpt/n4?type=exam"
  },
  {
    id: "n5",
    level: "Pemula",
    title: "N5",
    japanese: "レベル5",
    description: "Pemula - Pelajari dasar-dasar bahasa Jepang dengan mudah!",
    character: "Friend F",
    image: "/asset/n5.jpg",
    color: "from-red-500/20 to-orange-500/20",
    href: "/jlpt/n5?type=exam"
  }
];
export function LearningCards() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Jalur Pembelajaran</p>
          <h2 className="text-4xl md:text-5xl font-black mb-6">Pilih <span className="text-primary">Petualangan</span>mu</h2>
          <p className="text-xl text-muted-foreground">Setiap karakter anime akan membimbingmu dalam perjalanan menguasai bahasa Jepang</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningPaths.map((path) => (
            <Link 
              key={path.id}
              href={path.href}
              className={cn(
                "relative group overflow-hidden rounded-3xl transition-all duration-500 border",
                "bg-card text-card-foreground border-border hover:shadow-2xl hover:shadow-primary/20",
                hoveredId === path.id ? "scale-[1.02] -translate-y-2" : "scale-100"
              )}
              onMouseEnter={() => setHoveredId(path.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="aspect-[4/5] relative">
                <Image
                  src={path.image}
                  alt={path.character}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={cn("absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent", path.color)} />
                
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-bold backdrop-blur-md">
                    {path.level}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <h3 className="text-3xl font-black">{path.title}</h3>
                      <p className="text-primary font-bold">{path.japanese}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground line-clamp-2 mb-4 group-hover:text-foreground transition-colors">
                    {path.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground/80">👤 {path.character}</span>
                  </div>
                </div>
                <div className={cn(
                  "absolute inset-0 bg-primary/10 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-300",
                  hoveredId === path.id ? "opacity-100" : "opacity-0"
                )}>
                  <div className="bg-primary text-primary-foreground px-6 py-3 rounded-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    Mulai Belajar →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
