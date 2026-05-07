import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { lessons } from "@/data/n3/soumatome/lessons"; 

export default function N3Page() {
  // Kita buat array flat agar mudah di-map
  const allLessons: any[] = [];
  
  Object.keys(lessons).forEach((week) => {
    Object.keys(lessons[week]).forEach((day) => {
      allLessons.push({
        week,
        day,
        data: lessons[week][day].levels[0] // Ambil data level pertama
      });
    });
  });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-24">
        <Link href="/" className="text-primary hover:underline mb-8 inline-block">← Kembali ke Beranda</Link>
        <h1 className="text-5xl font-black mb-12">JLPT <span className="text-primary">N3</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allLessons.map((item, index) => (
            <Link 
              key={index} 
              href={`/n3/lesson/${item.week}-${item.day}`} // URL jadi /n3/lesson/1-1
              className="p-6 rounded-3xl border border-border bg-card hover:border-primary/50 transition-all"
            >
              <h3 className="text-xl font-bold mb-2">{item.data.header.main_title}</h3>
              <p className="text-muted-foreground">{item.data.header.sub_title}</p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
