"use client";

import { ExamSelector } from "@/components/exam-selector";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function JLPTExamPage() {
  const params = useParams();
  const router = useRouter();
  const level = (params.level as string)?.toUpperCase() || "N3";

  return (
    <main className="min-h-screen bg-background">
      {/* Level Header */}
      <div className="bg-card border-b border-border py-4 sticky top-0 z-40">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div>
            <button
              onClick={() => router.back()}
              className="text-primary hover:underline text-sm mb-2 inline-block"
            >
              ← Kembali
            </button>
            <h1 className="text-2xl font-bold">JLPT {level}</h1>
          </div>
        </div>
      </div>

      {/* ExamSelector Component */}
      <ExamSelector />
    </main>
  );
}
