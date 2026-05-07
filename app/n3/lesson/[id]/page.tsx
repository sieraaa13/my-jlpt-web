import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { lessons } from "@/data/n3/soumatome/lessons"; 

// --- FIX: Tambahkan fungsi ini agar Vercel tahu ID apa saja yang harus dibuat ---
export function generateStaticParams() {
  // Kita ambil semua day dari minggu ke-1 (sesuai struktur lessons.ts Anda)
  const days = Object.keys(lessons["1"] || {});
  return days.map((day) => ({
    id: day,
  }));
}

export default function LessonDetailPage({ params }: { params: { id: string } }) {
  // Cari data berdasarkan ID (minggu 1, day = params.id)
  const lessonFile = lessons["1"]?.[params.id];

  if (!lessonFile) {
    return (
      <main className="min-h-screen p-24 text-center">
        <h1 className="text-4xl font-bold">Materi tidak ditemukan</h1>
        <Link href="/n3" className="text-primary underline">Kembali ke N3</Link>
      </main>
    );
  }

  // Mengambil data dari struktur LessonFile
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
        
        <div className="prose dark:prose-invert max-w-none p-6 bg-card border rounded-2xl">
           <h2 className="text-2xl font-bold mb-4">Penjelasan</h2>
           <p className="whitespace-pre-wrap">{data.header.translation}</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
