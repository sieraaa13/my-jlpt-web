"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ExamSelector from "@/components/exam-selector";

interface Props {
  params: Promise<{
    level: string;
  }>;
}

function ExamSelectorContent({ level }: { level: string }) {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");

  // Jika query param type=exam, langsung tampilkan ExamSelector
  if (typeParam === "exam") {
    return (
      <ExamSelector
        level={level}
        onSelectExam={(year: string, period: string) => {
          // Navigate to exam page dengan level sebagai query param
          window.location.href = `/jlpt/${year}/${period}?level=${level}`;
        }}
      />
    );
  }

  // Default view - redirect to ExamSelector
  return (
    <div className="min-h-screen flex items-center justify-center">
      <ExamSelector
        level={level}
        onSelectExam={(year: string, period: string) => {
          window.location.href = `/jlpt/${year}/${period}?level=${level}`;
        }}
      />
    </div>
  );
}

export default async function LevelPage(props: Props) {
  const { level } = await props.params;

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ExamSelectorContent level={level.toLowerCase()} />
    </Suspense>
  );
}
