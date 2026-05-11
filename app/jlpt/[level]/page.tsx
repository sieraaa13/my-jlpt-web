"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ExamSelector } from "@/components/exam-selector";

function ExamSelectorContent({ level }: { level: string }) {
  const searchParams = useSearchParams();

  return (
    <ExamSelector level={level} />
  );
}

export default async function LevelPage(props: {
  params: Promise<{ level: string }>;
}) {
  const { level } = await props.params;

  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    }>
      <ExamSelectorContent level={level.toLowerCase()} />
    </Suspense>
  );
}
