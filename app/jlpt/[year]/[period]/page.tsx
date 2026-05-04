import { ExamContent } from "./exam-content";

export async function generateStaticParams() {
  return [
    { year: "2011", period: "07" },
    { year: "2011", period: "12" },
    ... (30 combinations)
  ];
}

async function loadExamData(year: string, period: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/asset/n3/${year}/${period}.json`
    );
    return await response.json();
  } catch (error) {
    return null;
  }
}

export default async function ExamPage({ params }) {
  const examData = await loadExamData(params.year, params.period);
  
  if (!examData) {
    return <div>Soal tidak ditemukan</div>;
  }
  
  return <ExamContent examData={examData} examLabel={examLabel} />;
}
