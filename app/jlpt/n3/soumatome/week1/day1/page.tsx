"use client";

import { Navbar } from "@/components/navbar";
import { LessonView, LessonData } from "@/components/lesson-view";
import Link from "next/link";
import lessonFile from "@/data/n3/soumatome/week1-day1.json";

export default function Page() {
  const lesson: LessonData = lessonFile.levels[0];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <Link
            href="/jlpt/n3/soumatome"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 text-sm"
          >
            ← Kembali ke daftar pelajaran
          </Link>

          {/* Lesson Content */}
          <LessonView data={lesson} />

          {/* Navigation */}
          <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-between items-center">
            <Link
              href="/jlpt/n3/soumatome"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              ← Kembali
            </Link>
            <Link
              href="/jlpt/n3/soumatome/week1/day2"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl font-medium transition-colors"
            >
              Pelajaran Selanjutnya →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
