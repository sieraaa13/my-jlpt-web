import { getExamData } from "@/lib/getExamData";
import ExamQuestions from "@/components/exam-questions";

const YEARS = ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2022"];
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

export default async function ExamPage({
  params,
  searchParams,
}: {
  params: { year: string; period: string };
  searchParams?: { level?: string };
}) {
  const level = searchParams?.level || "n3";
  
  // Get exam data
  const examData = await getExamData(params.year, params.period, level);
  
  if (!examData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Soal tidak ditemukan</h1>
          <p className="text-blue-200">
            JLPT {level.toUpperCase()} - {params.period === "07" ? "Juli" : "Desember"} {params.year}
          </p>
          <p className="text-blue-300 mt-4">Silakan coba periode lain</p>
        </div>
      </div>
    );
  }

  const examLabel = `${params.period === "07" ? "Juli" : "Desember"} ${params.year}`;

  return (
    <ExamQuestions
      data={examData}
      year={params.year}
      month={params.period}
      onBack={() => {
        // Browser back
        if (typeof window !== 'undefined') {
          window.history.back();
        }
      }}
    />
  );
}
