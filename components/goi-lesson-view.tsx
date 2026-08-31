import { Card } from "@/components/ui/card";
import { GoiExercises } from "@/components/goi-exercises";
import type { GoiLessonDay } from "@/data/n1/goi/lessons";

export function GoiLessonView({ lesson }: { lesson: GoiLessonDay }) {
  return (
    <div className="space-y-8">
      <div>
        <span className="inline-block bg-foreground text-background text-xs font-bold px-3 py-1 rounded-full mb-3">
          第{lesson.week}週 {lesson.day}日目
        </span>
        <h2 className="text-3xl font-black mb-1">{lesson.title}</h2>
        <p className="text-muted-foreground">{lesson.subtitle}</p>
      </div>

      <Card className="p-6 bg-card">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lesson.entries.map((entry, i) => (
            <div key={i} className="rounded-2xl border border-border p-4 flex flex-col gap-2">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-black">{entry.word}</span>
                <span className="text-primary font-bold">{entry.reading}</span>
              </div>
              <p className="text-sm font-medium">{entry.meaning}</p>
              <p className="text-sm text-muted-foreground">{entry.example}</p>
              {entry.relatedForms.length > 0 && (
                <div className="mt-auto pt-3 border-t border-border text-xs">
                  <span className="text-muted-foreground block mb-1">Bentuk terkait:</span>
                  <span className="font-medium">{entry.relatedForms.join("、")}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      <GoiExercises exercises={lesson.exercises} />
    </div>
  );
}
