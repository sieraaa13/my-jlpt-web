import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  lessons,
  getAllLessonParams,
  getAdjacentLessons,
} from "@/data/n3/soumatome/lessons";
import { ExerciseSection } from "@/components/exercise-section";
import { WeekChecklist } from "@/components/week-checklist";
import { PracticeQuiz } from "@/components/practice-quiz";
import { BunpouPractice } from "@/components/bunpou-practice";

// Pre-render semua lesson saat build
export function generateStaticParams() {
  return getAllLessonParams();
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

// Render formula: kalau ada " + " dan " / ", tampilkan sebagai
// base + bracket { opsi1 / opsi2 / opsi3 } mirip buku
function renderFormula(formula: string) {
  // Cek apakah formula punya pola "base + opsi1 / opsi2 / opsi3"
  const plusMatch = formula.match(/^(.+?)\s*\+\s*(.+)$/);
  if (plusMatch) {
    const base = plusMatch[1].trim();
    const rest = plusMatch[2].trim();
    // Cek apakah ada "/" untuk split jadi opsi bertingkat
    if (rest.includes('/')) {
      const options = rest.split('/').map(o => o.trim());
      return (
        <div className="flex items-center gap-1 mb-2">
          <span className="font-bold text-lg">{base}</span>
          <div className="border-l-[3px] border-foreground pl-3 py-1">
            {options.map((opt, i) => (
              <p key={i} className="font-bold text-lg leading-relaxed">{opt}</p>
            ))}
          </div>
        </div>
      );
    }
  }
  return <p className="font-bold mb-2">{formula}</p>;
}

// Render teks dengan line break (\n)
function renderText(text: string, className: string) {
  const parts = text.split('\n').filter(Boolean);
  return (
    <div className={className}>
      {parts.map((part, i) => (
        <p key={i} className={i > 0 ? "mt-2" : ""}>{part}</p>
      ))}
    </div>
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ week: string; day: string }>;
}) {
  const { week, day } = await params;
  const lessonFile = lessons[week]?.[day];

  if (!lessonFile) {
    notFound();
  }

  const data = lessonFile.levels[0];
  const { prev, next, current, total } = getAdjacentLessons(week, day);
  // Latihan mengetik contoh kalimat — sudah divalidasi di Week 1-2,
  // sekarang diperluas ke Week 3.
  const showBunpouPractice = ["1", "2", "3"].includes(week);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <Link
            href="/jlpt/n3/soumatome"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 text-sm"
          >
            ← Kembali ke daftar pelajaran
          </Link>

          {/* Progress indicator */}
          <div className="mb-6 flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              Pelajaran {current} dari {total}
            </span>
            <div className="flex-1 mx-4 h-1 bg-border rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all"
                style={{ width: `${(current / total) * 100}%` }}
              />
            </div>
            <span className="text-primary font-medium">
              {Math.round((current / total) * 100)}%
            </span>
          </div>

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
                    {renderFormula(section.description_box.formula)}
                    {renderText(section.description_box.explanation, "text-sm text-muted-foreground")}
                    {section.description_box.explanation_en && (
                      <p className="text-xs text-muted-foreground/70 mt-2 italic">
                        {section.description_box.explanation_en}
                      </p>
                    )}
                  </div>
                </div>

                {showBunpouPractice && (
                  <BunpouPractice
                    patternTitle={section.pattern_title}
                    patternMeaning={section.pattern_meaning}
                    formula={section.description_box.formula}
                    explanation={section.description_box.explanation}
                    examples={section.examples}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Kalau ini halaman exercise (misal まとめの問題), tampilkan
              checklist 今週の表現 per hari, lalu di bawahnya tampilkan
              semua materi grammar dari hari 1-6 sebagai ringkasan lengkap */}
          {data.exercise_groups && data.exercise_groups.length > 0 && (
            <>
              <div className="mt-12">
                <WeekChecklist week={Number(week)} />
              </div>

              {/* Semua materi grammar minggu ini (dari hari 1-6) — BELAJAR DULU */}
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
                        {/* Label hari */}
                        <div className="flex items-center gap-3 mb-6">
                          <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-foreground text-background flex flex-col items-center justify-center text-sm font-bold leading-tight">
                            <span>{d}</span>
                            <span className="text-[10px]">日目</span>
                          </span>
                          <h2 className="text-2xl font-bold">{dayData.header.sub_title}</h2>
                        </div>

                        {/* Grammar sections untuk hari ini */}
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
                                  {renderFormula(section.description_box.formula)}
                                  {renderText(section.description_box.explanation, "text-sm text-muted-foreground")}
                                  {section.description_box.explanation_en && (
                                    <p className="text-xs text-muted-foreground/70 mt-2 italic">
                                      {section.description_box.explanation_en}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {["1", "2", "3"].includes(week) && (
                                <BunpouPractice
                                  patternTitle={section.pattern_title}
                                  patternMeaning={section.pattern_meaning}
                                  formula={section.description_box.formula}
                                  explanation={section.description_box.explanation}
                                  examples={section.examples}
                                />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
              </div>

              {/* Quiz interaktif 実戦問題 — DI PALING BAWAH setelah semua materi */}
              <div className="mt-16">
                <div className="text-center mb-8">
                  <span className="inline-block bg-foreground text-background text-sm font-bold px-4 py-1.5 rounded-full mb-3">
                    7日目
                  </span>
                  <h2 className="text-3xl font-black">実戦問題</h2>
                  <p className="text-muted-foreground mt-1">制限時間：15分 ｜ 1問4点 × 25問 ／100</p>
                </div>
                <PracticeQuiz groups={data.exercise_groups as any} />
              </div>
            </>
          )}

          {/* Navigation prev/next */}
          <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-between items-stretch sm:items-center">
            {prev ? (
              <Link
                href={`/jlpt/n3/soumatome/${prev.week}/${prev.day}`}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-secondary/50 hover:bg-secondary text-foreground transition-colors text-sm sm:text-base"
              >
                <span>←</span>
                <span>Pelajaran Sebelumnya</span>
              </Link>
            ) : (
              <Link
                href="/jlpt/n3/soumatome"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-secondary/50 hover:bg-secondary text-foreground transition-colors text-sm sm:text-base"
              >
                <span>←</span>
                <span>Kembali ke Daftar</span>
              </Link>
            )}

            {next ? (
              <Link
                href={`/jlpt/n3/soumatome/${next.week}/${next.day}`}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors text-sm sm:text-base"
              >
                <span>Pelajaran Selanjutnya</span>
                <span>→</span>
              </Link>
            ) : (
              <Link
                href="/jlpt/n3/soumatome"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors text-sm sm:text-base"
              >
                <span>🎉 Selesai! Kembali ke Daftar</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
