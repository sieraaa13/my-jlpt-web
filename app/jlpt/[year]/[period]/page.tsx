"use client";

import { ExamContent } from "./exam-content";
import { useState, useEffect } from "react";

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

export default function ExamPage({
  params,
}: {
  params: { year: string; period: string };
}) {
  const [examData, setExamData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadExamData() {
      try {
        const url = `/my-jlpt-web/asset/n3/${params.year}/${params.period}.json`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to load exam data");
        const data = await response.json();
        setExamData(data);
      } catch (error) {
        console.error("Error loading exam:", error);
        setExamData(null);
      } finally {
        setLoading(false);
      }
    }

    loadExamData();
  }, [params.year, params.period]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <div className="text-center">
          <p className="text-white text-lg">Memuat soal...</p>
        </div>
      </div>
    );
  }

  if (!examData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-white">Soal tidak ditemukan</h1>
          <p className="text-blue-200">Silakan coba periode lain</p>
        </div>
      </div>
    );
  }

  const examLabel = `${params.period === "07" ? "Juli" : "Desember"} ${params.year}`;

  return <ExamContent examData={examData} examLabel={examLabel} />;
}
