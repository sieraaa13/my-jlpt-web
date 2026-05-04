"use client";

import Link from "next/link";
import { jlptExamsIndex } from "@/data/jlpt-exams-index";
import { useState } from "react";
import { Card } from "@/components/ui/card";

export default function JLPTExamsPage() {
  const level = jlptExamsIndex.levels[0];
  const [expandedYear, setExpandedYear] = useState<string | null>(null);

  return (
    <div className="min-h-screen py-24 px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-10 animate-pulse">あ</div>
      <div className="absolute top-1/3 right-20 text-5xl opacity-10 animate-pulse" style={{ animationDelay: "0.5s" }}>
        カ
      </div>
      <div className="absolute bottom-32 right-1/4 text-7xl opacity-10 animate-pulse" style={{ animationDelay: "1s" }}>
        漢
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Link
            href="/"
            className="inline-block mb-4 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm font-medium transition"
          >
            ← Kembali ke Beranda
          </Link>
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-white text-balance">
            {level.name} <span className="text-cyan-400">試験問題</span>
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Pilih tahun dan periode untuk memulai ujian JLPT N3. Setiap ujian terdiri dari 3 section: Kanji, Bunpou, dan Dokkai.
          </p>
        </div>

        {/* Years Grid */}
        <div className="space-y-6">
          {level.years.map((yearData) => (
            <div key={yearData.year}>
              {/* Year Header */}
              <button
                onClick={() =>
                  setExpandedYear(expandedYear === yearData.year ? null : yearData.year)
                }
                className="w-full mb-4 px-6 py-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-400/50 rounded-lg transition text-white text-left font-semibold flex items-center justify-between group"
              >
                <span className="text-2xl">Tahun {yearData.year}</span>
                <span
                  className={`text-2xl transition-transform ${
                    expandedYear === yearData.year ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Exams for year */}
              {expandedYear === yearData.year && (
                <div className="grid md:grid-cols-2 gap-6 mb-8 animate-in fade-in duration-300">
                  {yearData.exams.map((exam) => (
                    <Link
                      key={`${yearData.year}-${exam.period}`}
                      href={`/jlpt/${yearData.year}/${exam.period}`}
                    >
                      <Card className="group relative overflow-hidden bg-gradient-to-br from-blue-900/40 to-slate-900/40 backdrop-blur-sm border-2 border-cyan-400/50 hover:border-cyan-300 transition-all duration-300 p-8 h-full hover:-translate-y-2 cursor-pointer">
                        <div className="space-y-6">
                          {/* Exam info */}
                          <div>
                            <h3 className="text-3xl font-bold text-white mb-2">
                              {exam.label}
                            </h3>
                            <div className="flex items-center gap-2 text-cyan-300">
                              <span className="text-xl">📝</span>
                              <span>Lengkap dengan 3 section</span>
                            </div>
                          </div>

                          {/* Section preview */}
                          <div className="grid grid-cols-3 gap-3">
                            <div className="bg-pink-500/20 border border-pink-400/50 rounded-lg p-3 text-center">
                              <p className="text-white font-semibold">Kanji</p>
                              <p className="text-pink-300 text-sm">~35 soal</p>
                            </div>
                            <div className="bg-sky-500/20 border border-sky-400/50 rounded-lg p-3 text-center">
                              <p className="text-white font-semibold">Bunpou</p>
                              <p className="text-sky-300 text-sm">~23 soal</p>
                            </div>
                            <div className="bg-purple-500/20 border border-purple-400/50 rounded-lg p-3 text-center">
                              <p className="text-white font-semibold">Dokkai</p>
                              <p className="text-purple-300 text-sm">~37 soal</p>
                            </div>
                          </div>

                          {/* CTA */}
                          <div className="pt-4 border-t border-cyan-400/30">
                            <p className="text-cyan-300 text-sm font-medium">
                              Klik untuk mulai ujian →
                            </p>
                          </div>
                        </div>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Card>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
