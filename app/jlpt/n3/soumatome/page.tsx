"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { getOrganizedLessons } from "@/data/n3/soumatome/lessons";

export default function SoumatomeN3Page() {
  const weeks = getOrganizedLessons();
  const totalLessons = weeks.reduce((acc, w) => acc + w.lessons.length, 0);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-8 sm:mb-12">
            <Link
              href="/jlpt/n3"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 text-sm"
            >
              ← Kembali ke N3
            </Link>

            <div className="text-center">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                Materi Belajar
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-3">
                <span className="text-foreground">Soumatome </span>
                <span className="text-primary">N3</span>
              </h1>
              <p className="text-xl text-accent mb-3">総まとめ</p>
              <p className="text-muted-foreground text-sm sm:text-base">
                Belajar terstruktur dalam {weeks.length} minggu • {totalLessons} pelajaran
              </p>
            </div>
          </div>

          {/* Empty state */}
          {weeks.length === 0 && (
            <Card className="bg-card/50 border-border p-8 text-center">
              <p className="text-muted-foreground">
                Belum ada pelajaran tersedia. Silakan upload file JSON ke folder{" "}
                <code className="bg-secondary px-2 py-0.5 rounded">
                  data/n3/soumatome/
                </code>
              </p>
            </Card>
          )}

          {/* Weeks */}
          <div className="space-y-8">
            {weeks.map((week) => (
              <div key={week.week}>
                {/* Week Header */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="bg-primary/20 text-primary px-3 sm:px-4 py-2 rounded-xl font-bold text-sm sm:text-base">
                    Minggu {week.week}
                  </div>
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-muted-foreground text-xs sm:text-sm">
                    {week.lessons.length} hari
                  </span>
                </div>

                {/* Lessons Grid */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {week.lessons.map((lesson) => (
                    <Link
                      key={lesson.day}
                      href={`/jlpt/n3/soumatome/${week.week}/${lesson.day}`}
                    >
                      <Card className="group bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer hover:scale-[1.02] h-full">
                        <div className="p-4 flex items-center gap-3 sm:gap-4">
                          <div className="bg-primary/10 text-primary w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-lg">
                            📖
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                              <span className="bg-secondary/50 px-2 py-0.5 rounded">
                                {lesson.day}日目
                              </span>
                            </div>
                            <p className="text-foreground font-medium truncate group-hover:text-primary transition-colors text-sm sm:text-base">
                              {lesson.subtitle}
                            </p>
                            <p className="text-muted-foreground text-xs truncate mt-0.5">
                              {lesson.title}
                            </p>
                          </div>

                          <div className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0">
                            →
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4 text-sm">
              💡 Tip: Belajar 1 hari/sesi untuk hasil maksimal
            </p>
            <Link
              href="/jlpt/n3"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 rounded-xl font-medium transition-colors text-sm sm:text-base"
            >
              ← Pilih Materi Lain
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

