import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { lessons } from "@/data/n3/soumatome/lessons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const upcomingMaterials = [
  { title: "Kanji", japanese: "漢字" },
  { title: "Soal", japanese: "問題" },
];

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
            {upcomingMaterials.map((material) => (
              <TabsTrigger key={material.title} value={material.title.toLowerCase()}>
                {material.title}
              </TabsTrigger>
            ))}
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

          {upcomingMaterials.map((material) => (
            <TabsContent key={material.title} value={material.title.toLowerCase()}>
              <div className="p-6 rounded-3xl border border-dashed border-border bg-card/50 text-center text-muted-foreground">
                Materi {material.title} ({material.japanese}) segera hadir.
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <Footer />
    </main>
  );
}
