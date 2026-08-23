import { Navbar } from "@/components/navbar";
import { WeekChecklist } from "@/components/week-checklist";
import Link from "next/link";
import { lessons } from "@/data/n3/soumatome/lessons";

// Pre-render Bab 1 - Bab 6 saat build
export function generateStaticParams() {
  return Object.keys(lessons).map((week) => ({ week }));
}

export default async function WeekOverviewPage({
  params,
}: {
  params: Promise<{ week: string }>;
}) {
  const { week } = await params;
  const weekNumber = Number(week);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/jlpt/n3/soumatome"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 text-sm"
          >
            ← Kembali ke daftar pelajaran
          </Link>

          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Bab {weekNumber}
          </h1>

          <WeekChecklist week={weekNumber} />

          <div className="mt-8 flex justify-center">
            <Link
              href={`/jlpt/n3/soumatome/${weekNumber}/1`}
              className="px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors"
            >
              Mulai Belajar Hari ke-1 →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
