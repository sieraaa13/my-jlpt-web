"use client";

import { ExamContent } from "./exam-content";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const YEARS = ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"];
const PERIODS = ["07", "12"];

export async function generateStaticParams() {
  const params = [];
  for (const year of YEARS) {
    for (const period of PERIODS) {
      params.push({ year, period });
    }
  }
  return params;
}

export default function ExamPage() {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const year = parts[parts.length - 2] || "";
  const period = parts[parts.length - 1] || "";

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

    if (year && period) loadExamData();
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
