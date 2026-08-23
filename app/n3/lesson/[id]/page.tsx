import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { lessons } from "@/data/n3/soumatome/lessons"; 
import { ExerciseSection } from "@/components/exercise-section";

export function generateStaticParams() {
  const params: { id: string }[] = [];
  Object.keys(lessons).forEach(week => {
    Object.keys(lessons[week]).forEach(day => {
      params.push({ id: `${week}-${day}` });
    });
  });
  return params;
}

export default async function LessonDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const [week, day] = resolvedParams.id.split('-');
  const lessonFile = lessons[week]?.[day];

  if (!lessonFile) {
    return <main className="p-24 text-center">Materi tidak ditemukan</main>;
  }

  const data = lessonFile.levels[0];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-24">
        <Link href="/n3" className="text-primary hover:underline mb-8 inline-block">← Kembali ke daftar materi</Link>
        
        {/* Header */}
        <h1 className="text-5xl font-black mb-2">{data.header.main_title}</h1>
        <p className="text-2xl text-muted-foreground mb-12">{data.header.sub_title}</p>
        
        {/* Render Grammar Sections */}
        <div className="space-y-8">
          {data.grammar_sections?.map((section, idx) => (
            <div key={idx} className="p-8 bg-card border border-border rounded-3xl">
              <h2 className="text-2xl font-bold text-primary mb-2">{section.pattern_title}</h2>
              <p className="text-muted-foreground mb-6">{section.pattern_meaning}</p>
              
              <div className="bg-background/50 p-6 rounded-2xl mb-6 border">
                <p className="font-bold mb-2">Rumus: {section.description_box.formula}</p>
                <p>{section.description_box.explanation}</p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold">Contoh:</h4>
                {section.examples.map((ex, eIdx) => (
                  <div key={eIdx} className="border-l-4 border-primary pl-4 py-1">
                    <p className="font-semibold text-lg">{ex.jp}</p>
                    <p className="text-muted-foreground">{ex.en}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Render Exercise Groups (soal latihan, misal "まとめの問題") */}
        {data.exercise_groups && data.exercise_groups.length > 0 && (
          <div className="space-y-8">
            {data.exercise_groups.map((group, idx) => (
              <ExerciseSection
                key={idx}
                week={Number(week)}
                day={Number(day)}
                index={idx}
                group={group}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
