"use client";

import { ExamContent } from "./exam-content";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ExamPage() {
  const pathname = usePathname(); // /my-jlpt-web/jlpt/2011/07
  
  // Parse pathname untuk dapat year dan period
  const parts = pathname.split("/").filter(Boolean);
  const year = parts[parts.length - 2]; // 2011
  const period = parts[parts.length - 1]; // 07

  const [examData, setExamData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadExamData() {
      try {
        const url = `/my-jlpt-web/asset/n3/${year}/${period}.json`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to load exam data");
        const data = await response.json();
        setExamData(data);
      } catch (error) {
        console.error("Error:", error);
        setExamData(null);
      } finally {
        setLoading(false);
      }
    }

    loadExamData();
  }, [year, period]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <p className="text-white">Memuat soal...</p>
      </div>
    );
  }

  if (!examData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Soal tidak ditemukan</h1>
          <p className="text-blue-200">Silakan coba periode lain</p>
        </div>
      </div>
    );
  }

  const examLabel = `${period === "07" ? "Juli" : "Desember"} ${year}`;
  return <ExamContent examData={examData} examLabel={examLabel} />;
}
