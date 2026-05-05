"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getExamData } from "@/lib/getExamData";
import ExamQuestions from "./exam-questions";
import Link from "next/link";

interface Question {
  q: string;
  options: string[];
  correct: number;
}

interface DakkaiSection {
  title: string;
  text: string;
  questions: Question[];
}

interface ExamData {
  kanji: Question[];
  bunpou: Question[];
  dokkai: DakkaiSection[];
}

const examYears = [
  { year: "2011", label: "Tahun 2011" },
  { year: "2012", label: "Tahun 2012" },
  { year: "2013", label: "Tahun 2013" },
  { year: "2014", label: "Tahun 2014" },
  { year: "2015", label: "Tahun 2015" },
  { year: "2016", label: "Tahun 2016" },
  { year: "2017", label: "Tahun 2017" },
  { year: "2018", label: "Tahun 2018" },
  { year: "2019", label: "Tahun 2019" },
  { year: "2020", label: "Tahun 2020" },
  { year: "2021", label: "Tahun 2021" },
  { year: "2022", label: "Tahun 2022" },
  { year: "2023", label: "Tahun 2023" },
  { year: "2024", label: "Tahun 2024" },
  { year: "2025", label: "Tahun 2025" },
];

const examMonths = [
  { month: "07", label: "Juli", color: "from-cyan-500/20 to-blue-500/20", borderColor: "border-cyan-400/50" },
  { month: "12", label: "Desember", color: "from-purple-500/20 to-pink-500/20", borderColor: "border-purple-400/50" },
];

export function ExamSelector() {
  const [selectedYear, setSelectedYear] = useState("2011");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [examData, setExamData] = useState<ExamData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleMonthClick = async (month: string) => {
    setSelectedMonth(month);
    setLoading(true);
    setError(null);
    
    try {
      // Call getExamData dengan format yang benar: "2011" dan "07"
      const data = await getExamData(selectedYear, month);
      
      if (data) {
        setExamData(data);
      } else {
        setError(`Data ujian tidak ditemukan untuk ${selectedYear}-${month}`);
        setExamData(null);
      }
    } catch (err) {
      console.error("Error loading exam data:", err);
      setError("Gagal memuat data ujian. Silakan coba lagi.");
      setExamData(null);
    } finally {
      setLoading(false);
    }
  };

  // Jika sudah ada data, tampilkan soal
  if (examData) {
    return <ExamQuestions data={examData} year={selectedYear} month={selectedMonth} onBack={() => setExamData(null)} />;
  }

  return (
    <section className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-6">
        {/* Header dengan back button */}
        <div className="mb-12">
          <Link 
            href="/jlpt" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <span>←</span> Kembali ke Beranda
          </Link>

          <h1 className="text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-foreground">JLPT </span>
            <span className="text-primary">試験問題</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Pilih tahun dan periode untuk memulai ujian JLPT. Setiap ujian terdiri dari 3 section: Kanji, Bunpou, dan Dokkai.
          </p>
        </div>

        {/* Tahun Selection */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Pilih Tahun</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {examYears.map((year) => (
              <Button
                key={year.year}
                onClick={() => {
                  setSelectedYear(year.year);
                  setSelectedMonth(""); // Reset bulan saat ganti tahun
                  setExamData(null);
                }}
                className={`py-6 text-lg rounded-xl transition-all ${
                  selectedYear === year.year
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary hover:bg-secondary/80 text-foreground"
                }`}
              >
                {year.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Bulan Selection */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Pilih Periode</h2>
          
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
              <p className="mt-4 text-muted-foreground">Memuat data ujian...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6">
              <p className="text-red-600 font-medium">{error}</p>
              <p className="text-sm text-red-600/70 mt-1">Silakan pilih periode lain atau coba beberapa saat kemudian.</p>
            </div>
          )}

          {!loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {examMonths.map((month) => (
                <Card
                  key={month.month}
                  className={`group relative overflow-hidden bg-gradient-to-br ${month.color} backdrop-blur-sm border-2 ${month.borderColor} hover:border-primary/70 transition-all duration-500 cursor-pointer p-8`}
                  onClick={() => handleMonthClick(month.month)}
                >
                  {/* Decorative character */}
                  <div className="absolute top-4 right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">
                    {month.month === "07" ? "夏" : "冬"}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {month.label} {selectedYear}
                    </h3>
                    
                    <p className="text-muted-foreground">
                      Lengkap dengan 3 section: Kanji, Bunpou, dan Dokkai
                    </p>
                    
                    <div className="pt-4 flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">
                        Klik untuk mulai ujian →
                      </span>
                      <div className="text-2xl group-hover:translate-x-2 transition-transform">
                        →
                      </div>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-secondary/30 border border-border rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-4">ℹ️ Petunjuk Ujian</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ Setiap soal memiliki 4 pilihan jawaban</li>
            <li>✓ Hasil langsung ditampilkan setelah menyelesaikan ujian</li>
            <li>✓ Kamu bisa mengulang ujian berkali-kali</li>
            <li>✓ Tidak ada batasan waktu untuk menjawab</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
