"use client";

import Link from "next/link";
import { categoryInfo } from "@/data/jlpt-data";
import { Card } from "@/components/ui/card";

export default function JLPTPage() {
  const categories = [
    { key: "kanji", ...categoryInfo.kanji },
    { key: "bunpou", ...categoryInfo.bunpou },
    { key: "dokkai", ...categoryInfo.dokkai },
  ];

  return (
    <div className="min-h-screen py-24 px-6 relative overflow-hidden">
      <div className="absolute top-20 left-10 text-6xl opacity-10 animate-bounce">
        あ
      </div>
      <div className="absolute top-1/3 right-20 text-5xl opacity-10 animate-bounce" style={{ animationDelay: "0.5s" }}>
        カ
      </div>
      <div className="absolute bottom-32 right-1/4 text-7xl opacity-10 animate-bounce" style={{ animationDelay: "1s" }}>
        日
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <Link href="/" className="inline-block mb-4 px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium hover:bg-primary/30 transition">
            ← Kembali ke Beranda
          </Link>
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-balance">
            JLPT <span className="text-primary">Practice</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pilih kategori soal dan mulai latihan untuk persiapan JLPT Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {categories.map((category) => (
            <Link key={category.key} href={`/jlpt/${category.key}`}>
              <Card className={`group relative overflow-hidden bg-gradient-to-br ${category.color} backdrop-blur-sm border-2 ${category.borderColor} hover:border-primary/70 transition-all duration-500 cursor-pointer p-8 h-full hover:-translate-y-2`}>
                <div className="space-y-4">
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                      {category.title}
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <div>
                      <div className="text-2xl font-bold text-primary">📚</div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <p>Klik untuk mulai</p>
                      <p>latihan soal</p>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-primary/5 backdrop-blur-[1px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Mulai Latihan →
                  </button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
