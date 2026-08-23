import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { lessons } from "@/data/n3/soumatome/lessons"; 

export default function N3Page() {
  const sortedWeeks = Object.keys(lessons).sort((a, b) => Number(a) - Number(b));

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-24">
        <Link href="/" className="text-primary hover:underline mb-8 inline-block">← Kembali ke Beranda</Link>
        <h1 className="text-5xl font-black mb-12">JLPT <span className="text-primary">N3</span></h1>

        <div className="space-y-16">
          {sortedWeeks.map((week) => {
            const days = Object.keys(lessons[week]).sort((a, b) => Number(a) - Number(b));
            return (
              <div key={week}>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">
                    Bab {week}
                  </h2>
                  <Link
                    href={`/jlpt/n3/soumatome/${week}`}
                    className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
                  >
                    Lihat Ringkasan Bab {week} →
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {days.map((day) => {
                    const data = lessons[week][day].levels[0];
                    return (
                      <Link
                        key={`${week}-${day}`}
                        href={`/n3/lesson/${week}-${day}`}
                        className="p-6 rounded-3xl border border-border bg-card hover:border-primary/50 transition-all"
                      >
                        <h3 className="text-xl font-bold mb-2">{data.header.main_title}</h3>
                        <p className="text-muted-foreground">{data.header.sub_title}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </main>
  );
}
