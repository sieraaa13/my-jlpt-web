"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useSearchParams, Suspense } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { ExamSelector } from "@/components/exam-selector";

// ... materials array ...

function N3PageContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  if (type === "exam") {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-16">
          <div className="bg-card border-b border-border py-6 mb-8">
            <div className="max-w-6xl mx-auto px-4">
              <Link 
                href="/jlpt" 
                className="text-primary hover:underline text-sm inline-block mb-2"
              >
                ← Kembali ke Pilih Level
              </Link>
              <h1 className="text-3xl font-bold">JLPT N3 - Latihan Soal</h1>
              <p className="text-muted-foreground text-sm mt-1">Menengah - Topik Sehari-hari</p>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4">
            <ExamSelector level="n3" />
          </div>
        </div>
      </main>
    );
  }

  // Default: tampilkan 3 kategori (kode existing)
  return (
    <main className="min-h-screen bg-background">
      {/* ... kode category yang sudah ada ... */}
    </main>
  );
}

export default function N3Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <N3PageContent />
    </Suspense>
  );
}
