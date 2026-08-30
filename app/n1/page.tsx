import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExamSelector } from "@/components/exam-selector";
import { KanjiTab } from "@/components/kanji-tab";

export default function N1Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-24">
        <Link href="/" className="text-primary hover:underline mb-8 inline-block">← Kembali ke Beranda</Link>
        <h1 className="text-5xl font-black mb-12">JLPT <span className="text-primary">N1</span></h1>

        <Tabs defaultValue="kanji">
          <TabsList className="mb-8">
            <TabsTrigger value="bunpou">Bunpou</TabsTrigger>
            <TabsTrigger value="kanji">Kanji</TabsTrigger>
            <TabsTrigger value="soal">Soal</TabsTrigger>
          </TabsList>

          <TabsContent value="bunpou">
            <div className="p-6 rounded-3xl border border-dashed border-border bg-card/50 text-center text-muted-foreground">
              Materi Bunpou (文法) segera hadir.
            </div>
          </TabsContent>

          <TabsContent value="kanji">
            <KanjiTab />
          </TabsContent>

          <TabsContent value="soal">
            <ExamSelector level="n1" />
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </main>
  );
}
