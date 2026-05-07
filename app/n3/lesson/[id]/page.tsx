import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { lessons } from "@/data/n3/soumatome/lessons"; 

// Fungsi wajib untuk Static Export
export function generateStaticParams() {
  // Ambil semua id dari file lessons.ts
  return Object.keys(lessons).map((id) => ({
    id: id,
  }));
}

export default function LessonDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const lessonData = (lessons as any)[id];

  if (!lessonData) {
    return (
      <main className="min-h-screen p-24 text-center">
        <h1 className="text-4xl font-bold">Materi tidak ditemukan</h1>
        <Link href="/n3" className="text-primary underline">Kembali ke N3</Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-24">
        <Link href="/n3" className="text-primary hover:underline mb-8 inline-block">
          ← Kembali ke daftar materi N3
        </Link>
        <h1 className="text-4xl font-black mb-6">{lessonData.title}</h1>
        {/* Tampilkan isi materi Anda di sini */}
        <pre className="p-6 bg-card border rounded-2xl overflow-x-auto">
          {JSON.stringify(lessonData, null, 2)}
        </pre>
      </div>
      <Footer />
    </main>
  );
}
