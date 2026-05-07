import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { lessons } from "@/data/n3/soumatome/lessons"; 

// Karena struktur data kamu nested (Week -> Day), 
// kita perlu flatten dulu untuk mendapatkan mapping yang benar ke URL
function getLessonData(id: string) {
  // Misal ID 1 = Week 1 Day 1, ID 2 = Week 1 Day 2, dst.
  // Ini logika sederhana untuk mengubah ID jadi Week/Day
  const week = "1"; // Default ke week 1
  const day = id;   // ID URL dianggap sebagai Day
  
  return lessons[week]?.[day] || null;
}

export default function LessonDetailPage({ params }: { params: { id: string } }) {
  const lessonFile = getLessonData(params.id);

  if (!lessonFile) {
    return (
      <main className="min-h-screen p-24 text-center">
        <h1 className="text-4xl font-bold">Materi tidak ditemukan</h1>
        <Link href="/n3" className="text-primary underline">Kembali ke N3</Link>
      </main>
    );
  }

  // Ambil level pertama dari lessonFile (sesuai tipe LessonFile)
  const data = lessonFile.levels[0];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-24">
        <Link href="/n3" className="text-primary hover:underline mb-8 inline-block">
          ← Kembali ke daftar materi N3
        </Link>
        
        <h1 className="text-4xl font-black mb-2">{data.header.main_title}</h1>
        <p className="text-xl text-muted-foreground mb-8">{data.header.sub_title}</p>
        
        {/* Render Materi */}
        <div className="prose dark:prose-invert max-w-none p-6 bg-card border rounded-2xl">
           <h2 className="text-2xl font-bold">Penjelasan</h2>
           <p>{data.header.translation}</p>
           {/* Kamu bisa tambah logika render untuk grammar_sections di sini */}
        </div>
      </div>
      <Footer />
    </main>
  );
}
