import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { lessons } from "@/data/n3/soumatome/lessons"; 

// 1. Pastikan generateStaticParams mengembalikan array yang konsisten
export function generateStaticParams() {
  const params: { id: string }[] = [];
  Object.keys(lessons).forEach(week => {
    Object.keys(lessons[week]).forEach(day => {
      params.push({ id: `${week}-${day}` });
    });
  });
  return params;
}

// 2. Gunakan tipe data yang eksplisit
interface PageProps {
  params: Promise<{ id: string }>; // Next.js 15+ menggunakan Promise untuk params
}

export default async function LessonDetailPage({ params }: PageProps) {
  // Await params karena di versi Next.js terbaru ini adalah Promise
  const resolvedParams = await params;
  const [week, day] = resolvedParams.id.split('-');
  
  const lessonFile = lessons[week]?.[day];

  if (!lessonFile) {
    return (
      <main className="min-h-screen bg-background flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Materi tidak ditemukan</h1>
        <Link href="/n3" className="text-primary underline">Kembali ke N3</Link>
      </main>
    );
  }

  const data = lessonFile.levels[0];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-24">
        <Link href="/n3" className="text-primary underline mb-8 inline-block">← Kembali</Link>
        <h1 className="text-4xl font-black">{data.header.main_title}</h1>
        <p className="text-xl mb-8">{data.header.translation}</p>
        
        <div className="prose dark:prose-invert max-w-none p-6 bg-card border rounded-2xl">
           <h2 className="text-2xl font-bold mb-4">Penjelasan</h2>
           <p className="whitespace-pre-wrap">{data.header.translation}</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
