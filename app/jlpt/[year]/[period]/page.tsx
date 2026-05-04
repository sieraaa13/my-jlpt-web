import { ExamContent } from "./exam-content";

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

async function loadExamData(year: string, period: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || "https://sieraaa13.github.io/my-jlpt-web"}/asset/n3/${year}/${period}.json`,
      { next: { revalidate: 3600 } }
    );
    if (!response.ok) throw new Error("Failed to load exam data");
    return await response.json();
  } catch (error) {
    console.error("Error loading exam:", error);
    return null;
  }
}

export default async function ExamPage({
  params,
}: {
  params: { year: string; period: string };
}) {
  const examData = await loadExamData(params.year, params.period);

  if (!examData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Soal tidak ditemukan</h1>
          <p className="text-muted-foreground">Silakan coba periode lain</p>
        </div>
      </div>
    );
  }

  const examLabel = `${params.period === "07" ? "Juli" : "Desember"} ${params.year}`;

  return <ExamContent examData={examData} examLabel={examLabel} />;
}
