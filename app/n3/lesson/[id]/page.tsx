import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { lessons } from "@/data/n3/soumatome/lessons"; 
import { WeekChecklist } from "@/components/week-checklist";

export function generateStaticParams() {
  const params: { id: string }[] = [];
  Object.keys(lessons).forEach(week => {
    Object.keys(lessons[week]).forEach(day => {
      params.push({ id: `${week}-${day}` });
    });
  });
  return params;
}

// Pecah teks Jepang jadi 2 bagian di sekitar substring "highlight",
// supaya bagian itu bisa ditebalkan + digarisbawahi seperti buku aslinya.
function renderHighlighted(jp: string, highlight?: string) {
  if (!highlight || !jp.includes(highlight)) return jp;
  const idx = jp.indexOf(highlight);
  const before = jp.slice(0, idx);
  const after = jp.slice(idx + highlight.length);
  return (
    <>
      {before}
      <strong className="underline decoration-2 underline-offset-2">{highlight}</strong>
      {after}
    </>
  );
}

export default async function LessonDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const [week, day] = resolvedParams.id.split('-');
  const lessonFile = lessons[week]?.[day];

  if (!lessonFile) {
    return <main className="p-24 text-center">Materi tidak ditemukan</main>;
  }

  const data = lessonFile.levels[0];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-24 max-w-4xl">
        <Link href="/n3" className="text-primary hover:underline mb-8 inline-block">← Kembali ke daftar materi</Link>

        {/* Header ala buku: badge minggu + judul */}
        <div className="text-center mb-8">
          <span className="inline-block bg-foreground text-background text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            第{week}週　{data.header.main_title}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-1">
            {day}日目　{data.header.sub_title}
          </h1>
          {data.header.translation && (
            <p className="text-muted-foreground">{data.header.translation}</p>
          )}
        </div>

        {/* Percakapan ilustrasi (pengganti gambar komik) */}
        {data.illustration_text && (
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            {data.illustration_text.child && (
              <div className="flex-1 bg-secondary/40 border border-border rounded-2xl rounded-bl-none p-4">
                <p className="text-xs text-muted-foreground mb-1">👦 Anak</p>
                <p className="font-medium">{data.illustration_text.child}</p>
              </div>
            )}
            {data.illustration_text.mother && (
              <div className="flex-1 bg-secondary/40 border border-border rounded-2xl rounded-br-none p-4">
                <p className="text-xs text-muted-foreground mb-1">👩 Ibu</p>
                <p className="font-medium">{data.illustration_text.mother}</p>
              </div>
            )}
          </div>
        )}

        {/* Render Grammar Sections, layout ala buku: judul bar hitam +
            contoh di kiri, kotak rumus/penjelasan di kanan */}
        <div className="space-y-12">
          {data.grammar_sections?.map((section, idx) => (
            <div key={idx}>
              {/* Judul pola dalam bar hitam */}
              <div className="inline-block bg-foreground text-background text-2xl font-bold px-5 py-2 rounded-xl mb-2">
                {section.pattern_title}
              </div>
              {section.pattern_meaning && (
                <p className="text-muted-foreground mb-6">{section.pattern_meaning}</p>
              )}

              <div className="grid md:grid-cols-3 gap-6">
                {/* Kolom kiri: contoh kalimat (2/3 lebar) */}
                <div className="md:col-span-2 space-y-5">
                  {section.examples.map((ex, eIdx) => (
                    <div key={eIdx}>
                      <p className="font-semibold text-lg leading-relaxed">
                        {renderHighlighted(ex.jp, ex.highlight)}
                      </p>
                      <p className="text-muted-foreground text-sm">{ex.en}</p>
                      {ex.explanation && (
                        <p className="text-sm text-muted-foreground/80 mt-0.5">💡 {ex.explanation}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Kolom kanan: kotak rumus & penjelasan */}
                <div className="bg-card border border-border rounded-2xl p-5 h-fit">
                  <p className="font-bold mb-2">{section.description_box.formula}</p>
                  <p className="text-sm text-muted-foreground">{section.description_box.explanation}</p>
                  {section.description_box.explanation_en && (
                    <p className="text-xs text-muted-foreground/70 mt-2 italic">
                      {section.description_box.explanation_en}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Kalau ini halaman exercise (misal まとめの問題), tampilkan
            checklist + semua materi grammar dari hari 1-6 */}
        {data.exercise_groups && data.exercise_groups.length > 0 && (
          <>
            <div className="mt-12">
              <WeekChecklist week={Number(week)} />
            </div>

            <div className="mt-16 space-y-16">
              {Object.keys(lessons[week] || {})
                .filter((d) => {
                  const dayData = lessons[week][d].levels[0];
                  return dayData.grammar_sections && dayData.grammar_sections.length > 0;
                })
                .sort((a, b) => Number(a) - Number(b))
                .map((d) => {
                  const dayData = lessons[week][d].levels[0];
                  return (
                    <div key={d}>
                      <div className="flex items-center gap-3 mb-6">
                        <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-foreground text-background flex flex-col items-center justify-center text-sm font-bold leading-tight">
                          <span>{d}</span>
                          <span className="text-[10px]">日目</span>
                        </span>
                        <h2 className="text-2xl font-bold">{dayData.header.sub_title}</h2>
                      </div>

                      <div className="space-y-12">
                        {dayData.grammar_sections?.map((section, idx) => (
                          <div key={idx}>
                            <div className="inline-block bg-foreground text-background text-2xl font-bold px-5 py-2 rounded-xl mb-2">
                              {section.pattern_title}
                            </div>
                            {section.pattern_meaning && (
                              <p className="text-muted-foreground mb-6">{section.pattern_meaning}</p>
                            )}

                            <div className="grid md:grid-cols-3 gap-6">
                              <div className="md:col-span-2 space-y-5">
                                {section.examples.map((ex, eIdx) => (
                                  <div key={eIdx}>
                                    <p className="font-semibold text-lg leading-relaxed">
                                      {renderHighlighted(ex.jp, ex.highlight)}
                                    </p>
                                    <p className="text-muted-foreground text-sm">{ex.en}</p>
                                    {ex.explanation && (
                                      <p className="text-sm text-muted-foreground/80 mt-0.5">💡 {ex.explanation}</p>
                                    )}
                                  </div>
                                ))}
                              </div>

                              <div className="bg-card border border-border rounded-2xl p-5 h-fit">
                                <p className="font-bold mb-2">{section.description_box.formula}</p>
                                <p className="text-sm text-muted-foreground">{section.description_box.explanation}</p>
                                {section.description_box.explanation_en && (
                                  <p className="text-xs text-muted-foreground/70 mt-2 italic">
                                    {section.description_box.explanation_en}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
            </div>
          </>
        )}
      </div>
      <Footer />
    </main>
  );
}
