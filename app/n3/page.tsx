import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
// Sesuaikan path import ini dengan struktur folder kamu
import { lessons } from "@/data/n3/soumatome/lessons"; 

export default function N3Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-24">
        <Link href="/" className="text-primary hover:underline mb-8 inline-block">
          ← Kembali ke Beranda
        </Link>
        
        <div className="max-w-5xl">
          <div className="mb-12">
            <h1 className="text-5xl font-black mb-4">JLPT <span className="text-primary">N3</span></h1>
            <p className="text-xl text-muted-foreground">
              Materi Soumatome: Persiapkan dirimu untuk level menengah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessons.map((lesson: any, index: number) => (
              <Link 
                key={index} 
                href={`/n3/lesson/${lesson.id || index}`}
                className="group p-6 rounded-3xl border border-border bg-card hover:border-primary/50 hover:shadow-xl transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                    Week {lesson.week || 1}
                  </span>
                  <span className="text-muted-foreground text-sm">Day {lesson.day || 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {lesson.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {lesson.description || "Klik untuk mulai mempelajari materi hari ini."}
                </p>
                <div className="mt-6 flex items-center text-primary font-bold text-sm">
                  Pelajari Sekarang <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
