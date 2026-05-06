import { Navbar } from "@/components/navbar";
import { LessonView, LessonData } from "@/components/lesson-view";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  lessons,
  getAllLessonParams,
  getAdjacentLessons,
} from "@/data/n3/soumatome/lessons";

// Pre-render semua lesson saat build
export function generateStaticParams() {
  return getAllLessonParams();
}

export default async function Page({
  params,
}: {
  params: Promise<{ week: string; day: string }>;
}) {
  const { week, day } = await params;
  const lessonFile = lessons[week]?.[day];

  if (!lessonFile) {
    notFound();
  }

  const lesson = lessonFile.levels[0] as LessonData;
  const { prev, next, current, total } = getAdjacentLessons(week, day);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <Link
            href="/jlpt/n3/soumatome"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 text-sm"
          >
            ← Kembali ke daftar pelajaran
          </Link>

          {/* Progress indicator */}
          <div className="mb-6 flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              Pelajaran {current} dari {total}
            </span>
            <div className="flex-1 mx-4 h-1 bg-border rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all"
                style={{ width: `${(current / total) * 100}%` }}
              />
            </div>
            <span className="text-primary font-medium">
              {Math.round((current / total) * 100)}%
            </span>
          </div>

          {/* Lesson Content */}
          <LessonView data={lesson} />

          {/* Navigation */}
          <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-between items-stretch sm:items-center">
            {prev ? (
              <Link
                href={`/jlpt/n3/soumatome/${prev.week}/${prev.day}`}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-secondary/50 hover:bg-secondary text-foreground transition-colors text-sm sm:text-base"
              >
                <span>←</span>
                <span>Pelajaran Sebelumnya</span>
              </Link>
            ) : (
              <Link
                href="/jlpt/n3/soumatome"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-secondary/50 hover:bg-secondary text-foreground transition-colors text-sm sm:text-base"
              >
                <span>←</span>
                <span>Kembali ke Daftar</span>
              </Link>
            )}

            {next ? (
              <Link
                href={`/jlpt/n3/soumatome/${next.week}/${next.day}`}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors text-sm sm:text-base"
              >
                <span>Pelajaran Selanjutnya</span>
                <span>→</span>
              </Link>
            ) : (
              <Link
                href="/jlpt/n3/soumatome"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors text-sm sm:text-base"
              >
                <span>🎉 Selesai! Kembali ke Daftar</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
