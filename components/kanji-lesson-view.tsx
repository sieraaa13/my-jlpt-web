import { Card } from "@/components/ui/card";
import { KanjiExercises } from "@/components/kanji-exercises";
import type { KanjiLessonDay } from "@/data/n1/kanji/lessons";

export function KanjiLessonView({ lesson }: { lesson: KanjiLessonDay }) {
  return (
    <div className="space-y-8">
      <div>
        <span className="inline-block bg-foreground text-background text-xs font-bold px-3 py-1 rounded-full mb-3">
          第{lesson.week}週 {lesson.day}日目
        </span>
        <h2 className="text-3xl font-black mb-1">{lesson.title}</h2>
        <p className="text-muted-foreground">{lesson.subtitle}</p>
      </div>

      <div className="space-y-6">
        {lesson.groups.map((group) => (
          <Card key={group.sharedComponent} className="p-6 bg-card">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-black text-primary">{group.sharedComponent}</span>
              <span className="text-sm text-muted-foreground">
                bagian yang sama, cara baca <span className="font-bold text-foreground">{group.sharedReading}</span>
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.kanjiList.map((entry) => (
                <div
                  key={entry.character}
                  className="rounded-2xl border border-border p-4 flex flex-col gap-3"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black">{entry.character}</span>
                    <span className="text-primary font-bold">{entry.reading}</span>
                  </div>
                  <p className="text-sm font-medium">{entry.meaning}</p>

                  <ul className="text-sm space-y-1">
                    {entry.examples.map((ex) => (
                      <li key={ex.word}>
                        <span className="font-medium">{ex.word}</span>{" "}
                        <span className="text-muted-foreground">（{ex.reading}）</span>{" "}
                        <span className="text-muted-foreground">— {ex.meaning}</span>
                      </li>
                    ))}
                  </ul>

                  {entry.note && (
                    <p className="text-xs text-muted-foreground italic">{entry.note}</p>
                  )}

                  <div className="mt-auto pt-3 border-t border-border text-xs space-y-1">
                    <span className="text-muted-foreground block mb-1">Komponen pembentuk:</span>
                    {entry.components.map((comp, i) => (
                      <div key={i} className="flex items-baseline gap-1.5">
                        <span className="font-bold text-sm">{comp.character}</span>
                        <span className="text-muted-foreground">{comp.meaning}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <KanjiExercises lesson={lesson} />
    </div>
  );
}
