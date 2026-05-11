"use client";

import { useState } from "react";
import Link from "next/link";
import { ExamContent } from "./exam-content";
import { getExamData } from "@/data/exams-manifest";
import { categoryInfo } from "@/data/jlpt-data";

const YEARS = ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2022"];
const PERIODS = ["07", "12"];

interface Props {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage(props: Props) {
  const { category } = await props.params;

  // ✅ FIX: Handle categoryInfo yang mungkin tidak punya questions property
  const info = categoryInfo[category as keyof typeof categoryInfo] as any;
  const questions = info?.questions || [];

  if (!info) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Kategori tidak ditemukan</h1>
          <Link href="/jlpt" className="text-blue-500 hover:underline">
            ← Kembali ke Ujian JLPT
          </Link>
        </div>
      </div>
    );
  }

  // Jika category adalah "praktik" atau serupa, redirect ke exam selector
  if (category === "praktik" || category === "pratiksoal") {
    return <ExamContent year="" period="" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/jlpt" className="text-cyan-400 hover:text-cyan-300 mb-4 inline-block">
            ← Kembali
          </Link>
          <h1 className="text-4xl font-bold mb-2">{info.title}</h1>
          <p className="text-slate-400">{info.description}</p>
        </div>

        {/* Content Area */}
        {questions.length > 0 ? (
          <div className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Pilih Tahun dan Periode</h2>
            <div className="grid grid-cols-3 gap-3">
              {YEARS.map((year) => (
                <div key={year}>
                  <h3 className="text-lg font-semibold mb-2">{year}</h3>
                  <div className="space-y-2">
                    {PERIODS.map((period) => (
                      <button
                        key={`${year}-${period}`}
                        className="block w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                      >
                        {period === "07" ? "Juli" : "Desember"}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-slate-800 rounded-lg p-6 text-center">
            <p className="text-slate-400">Kategori ini tidak memiliki soal</p>
            <Link href="/jlpt" className="text-cyan-400 hover:text-cyan-300 mt-4 inline-block">
              Pilih kategori lain
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
