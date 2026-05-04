"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

const learningPaths = [
  {
    id: 1,
    title: "Hiragana",
    japanese: "ひらがな",
    description: "Dasar penulisan Jepang. Pelajari 46 karakter dasar dengan cara yang menyenangkan!",
    image: "/images/hiragana-sensei.jpg",
    character: "Sakura Sensei",
    level: "Pemula",
    lessons: 24,
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-400/50",
    offsetX: "lg:-translate-x-4",
    offsetY: "",
  },
  {
    id: 2,
    title: "Katakana",
    japanese: "カタカナ",
    description: "Karakter untuk kata serapan asing. Ninja Kaze akan membimbingmu!",
    image: "/images/katakana-ninja.jpg",
    character: "Ninja Kaze",
    level: "Pemula",
    lessons: 24,
    color: "from-sky-500/20 to-cyan-500/20",
    borderColor: "border-sky-400/50",
    offsetX: "lg:translate-x-8",
    offsetY: "lg:-translate-y-8",
  },
  {
    id: 3,
    title: "Kanji",
    japanese: "漢字",
    description: "Karakter Tiongkok dalam bahasa Jepang. Samurai Kenji mengajarkan kebijaksanaan!",
    image: "/images/kanji-samurai.jpg",
    character: "Samurai Kenji",
    level: "Menengah",
    lessons: 100,
    color: "from-indigo-500/20 to-violet-500/20",
    borderColor: "border-indigo-400/50",
    offsetX: "lg:-translate-x-6",
    offsetY: "lg:translate-y-4",
  },
  {
    id: 4,
    title: "Kosakata",
    japanese: "語彙",
    description: "Perbanyak perbendaharaan kata dengan Chef Yuki dan tema makanan Jepang!",
    image: "/images/vocab-chef.jpg",
    character: "Chef Yuki",
    level: "Semua Level",
    lessons: 80,
    color: "from-orange-500/20 to-amber-500/20",
    borderColor: "border-orange-400/50",
    offsetX: "lg:translate-x-12",
    offsetY: "",
  },
  {
    id: 5,
    title: "Tata Bahasa",
    japanese: "文法",
    description: "Kuasai struktur kalimat Jepang dengan panduan Mage Bunpo yang bijaksana!",
    image: "/images/grammar-mage.jpg",
    character: "Mage Bunpo",
    level: "Menengah",
    lessons: 60,
    color: "from-purple-500/20 to-fuchsia-500/20",
    borderColor: "border-purple-400/50",
    offsetX: "lg:-translate-x-8",
    offsetY: "lg:-translate-y-4",
  },
  {
    id: 6,
    title: "Percakapan",
    japanese: "会話",
    description: "Praktekkan dialog sehari-hari bersama Idol Hana yang ceria!",
    image: "/images/conversation-idol.jpg",
    character: "Idol Hana",
    level: "Semua Level",
    lessons: 50,
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-400/50",
    offsetX: "lg:translate-x-4",
    offsetY: "lg:translate-y-6",
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
                    <span className="bg-card/50 px-2 py-1 rounded">
                      📚 {path.lessons} Pelajaran
                    </span>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-primary/10 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <button className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Mulai Belajar →
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
