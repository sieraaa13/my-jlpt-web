import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { lessons } from "@/data/n3/soumatome/lessons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { N3KanjiTab } from "@/components/n3-kanji-tab";
import { RadikalKanjiTab } from "@/components/radikal-kanji-tab";
import { radikalKanjiFiles, radikalKanjiOrder } from "@/data/n3/kanji-radikal/lessons";
import { ExamSelector } from "@/components/exam-selector";
import { OnomatopeTab } from "@/components/onomatope-tab";
import { onomatopeN3 } from "@/data/n3/onomatope";

// Judul tiap minggu diambil dari main_title hari pertama
function getWeekTitle(week: string) {
  const weekData = lessons[week];
  if (!weekData) return "";
  const firstDay = Object.keys(weekData).sort((a, b) => Number(a) - Number(b))[0];
  return weekData[firstDay]?.levels[0]?.header?.main_title || "";
}

// Sub-judul: kumpulkan pattern_title dari semua hari (Day 1-6)
function getWeekSubtitles(week: string) {
  const weekData = lessons[week];
  if (!weekData) return "";
  const patterns: string[] = [];
  Object.keys(weekData)
    .sort((a, b) => Number(a) - Number(b))
    .forEach((day) => {
      const sections = weekData[day]?.levels[0]?.grammar_sections;
      if (sections) {
        sections.forEach((s) => patterns.push(s.pattern_title));
      }
    });
  return patterns.slice(0, 4).join("、") + (patterns.length > 4 ? "…" : "");
}

const weekLabels: Record<string, string> = {
  "1": "第一週",
  "2": "第二週",
  "3": "第三週",
  "4": "第四週",
  "5": "第五週",
  "6": "第六週",
};

export default function N3Page() {
  const sortedWeeks = Object.keys(lessons).sort((a, b) => Number(a) - Number(b));

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-24">
        <Link href="/" className="text-primary hover:underline mb-8 inline-block">← Kembali ke Beranda</Link>
        <h1 className="text-5xl font-black mb-12">JLPT <span className="text-primary">N3</span></h1>

        <Tabs defaultValue="bunpou">
          <TabsList className="mb-8">
            <TabsTrigger value="bunpou">Bunpou</TabsTrigger>
            <TabsTrigger value="kanji">Kanji</TabsTrigger>
            <TabsTrigger value="radikal-kanji">Radikal Kanji</TabsTrigger>
            <TabsTrigger value="onomatope">Onomatope</TabsTrigger>
            <TabsTrigger value="soal">Soal</TabsTrigger>
          </TabsList>

          <TabsContent value="bunpou">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedWeeks.map((week) => {
                // Cari hari ke-7 (まとめの問題) untuk link langsung ke sana
                const hasDay7 = !!lessons[week]?.["7"];
                const href = hasDay7
                  ? `/jlpt/n3/soumatome/${week}/7`
                  : `/jlpt/n3/soumatome/${week}/1`;

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
                      {getWeekTitle(week)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {getWeekSubtitles(week)}
                    </p>
                  </Link>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="kanji">
            <N3KanjiTab />
          </TabsContent>

          <TabsContent value="radikal-kanji">
            <RadikalKanjiTab files={radikalKanjiFiles} order={radikalKanjiOrder} />
          </TabsContent>

          <TabsContent value="onomatope">
            <OnomatopeTab
              kategori={onomatopeN3}
              level="N3"
              deskripsi="yang sering dipakai sehari-hari dan muncul di ujian."
            />
          </TabsContent>

          {/* Data ujian yang sama dengan menu JLPT → N3 → Latihan Soal */}
          <TabsContent value="soal">
            <ExamSelector level="n3" embedded />
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </main>
  );
}
