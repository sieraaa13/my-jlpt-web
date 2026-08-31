import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function N2Page() {
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
            <div className="p-6 rounded-3xl border border-dashed border-border bg-card/50 text-center text-muted-foreground">
              Materi Bunpou (文法) segera hadir.
            </div>
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
