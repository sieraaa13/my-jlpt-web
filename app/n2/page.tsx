import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { lessons } from "@/data/n2/soumatome/lessons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const weekLabels: Record<string, string> = {
  "1": "第一週",
  "2": "第二週",
  "3": "第三週",
  "4": "第四週",
  "5": "第五週",
  "6": "第六週",
  "7": "第七週",
  "8": "第八週",
};

export default function N2Page() {
  const sortedWeeks = Object.keys(lessons).sort((a, b) => Number(a) - Number(b));

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-24">
        <Link href="/" className="text-primary hover:underline mb-8 inline-block">← Kembali ke Beranda</Link>
        <h1 className="text-5xl font-black mb-12">JLPT <span className="text-primary">N2</span></h1>

        <Tabs defaultValue="bunpou">
          <TabsList className="mb-8">
            <TabsTrigger value="bunpou">Bunpou</TabsTrigger>
            <TabsTrigger value="kanji">Kanji</TabsTrigger>
            <TabsTrigger value="soal">Soal</TabsTrigger>
          </TabsList>

          <TabsContent value="bunpou">
            {sortedWeeks.length === 0 ? (
              <div className="p-6 rounded-3xl border border-dashed border-border bg-card/50 text-center text-muted-foreground">
                Materi Bunpou (文法) segera hadir.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedWeeks.map((week) => {
                  const weekData = lessons[week];
                  const firstDay = Object.keys(weekData).sort((a, b) => Number(a) - Number(b))[0];
                  const level0 = weekData[firstDay]?.levels[0];
                  const hasDay7 = !!weekData["7"];
                  const href = hasDay7
                    ? `/jlpt/n2/soumatome/${week}/7`
                    : `/jlpt/n2/soumatome/${week}/1`;

                  return (
                    <Link
                      key={week}
                      href={href}
                      className="p-6 rounded-3xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all group"
                    >
                      <span className="inline-block bg-foreground text-background text-xs font-bold px-3 py-1 rounded-full mb-3">
                        {weekLabels[week] || `第${week}週`}
                      </span>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {level0?.header.main_title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {level0?.header.sub_title}
                      </p>
                    </Link>
                  );
                })}
              </div>
            )}
          </TabsContent>

          <TabsContent value="kanji">
            <div className="p-6 rounded-3xl border border-dashed border-border bg-card/50 text-center text-muted-foreground">
              Materi Kanji (漢字) segera hadir.
            </div>
          </TabsContent>

          <TabsContent value="soal">
            <div className="p-6 rounded-3xl border border-dashed border-border bg-card/50 text-center text-muted-foreground">
              <p className="mb-4">Untuk mengerjakan soal ujian JLPT N2, silakan pilih tahun dan periode di halaman Ujian JLPT.</p>
              <Link
                href="/jlpt/n2?type=exam"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
              >
                Ke Halaman Soal N2 →
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </main>
  );
}
