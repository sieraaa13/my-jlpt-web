import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { lessons } from "@/data/n3/soumatome/lessons"; 

export function generateStaticParams() {
  const params: { id: string }[] = [];
  Object.keys(lessons).forEach(week => {
    Object.keys(lessons[week]).forEach(day => {
      params.push({ id: `${week}-${day}` });
    });
  });
  return params;
}

export default function LessonDetailPage({ params }: { params: { id: string } }) {
  // Pecah id "1-1" jadi [week: "1", day: "1"]
  const [week, day] = params.id.split('-');
  const lessonFile = lessons[week]?.[day];

  if (!lessonFile) return <div className="p-24 text-center">Materi tidak ditemukan</div>;

  const data = lessonFile.levels[0];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-24">
        <Link href="/n3" className="text-primary underline mb-8 inline-block">← Kembali</Link>
        <h1 className="text-4xl font-black">{data.header.main_title}</h1>
        <p className="text-xl mb-8">{data.header.translation}</p>
        
        {/* Render Grammar */}
        {data.grammar_sections?.map((section, idx) => (
          <div key={idx} className="p-6 mb-6 bg-card border rounded-2xl">
            <h3 className="text-xl font-bold">{section.pattern_title}</h3>
            <p className="italic text-muted-foreground mb-4">{section.pattern_meaning}</p>
            <div className="bg-background p-4 rounded-xl mb-4">
               <p className="font-mono">{section.description_box.formula}</p>
               <p>{section.description_box.explanation}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
}
