import Link from "next/link";
import { jlptData, categoryInfo } from "@/data/jlpt-data";
import { QuizContent } from "./quiz-content";

export function generateStaticParams() {
  return [
    { category: "kanji" },
    { category: "bunpou" },
    { category: "dokkai" },
  ];
}

export default function JLPTCategoryPage({ params }: { params: { category: string } }) {
  const category = params.category as keyof typeof jlptData;
  const questions = jlptData[category] || [];
  const info = categoryInfo[category as keyof typeof categoryInfo];

  if (!info || !questions.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Kategori tidak ditemukan</h1>
          <Link href="/jlpt" className="text-primary hover:underline">
            Kembali ke JLPT
          </Link>
        </div>
      </div>
    );
  }

  return <QuizContent questions={questions} info={info} />;
}
