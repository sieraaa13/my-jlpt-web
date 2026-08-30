"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { KanjiLessonDay } from "@/data/n1/kanji/lessons";

function ExerciseList({ exercises }: { exercises: KanjiLessonDay["exercises"] }) {
  const [answers, setAnswers] = useState<Record<number, string>>({});

  if (!exercises || exercises.length === 0) return null;

  const total = exercises.length;
  const answered = Object.keys(answers).length;
  const correct = exercises.filter((ex, i) => answers[i] === ex.answer).length;

  return (
    <Card className="p-6 bg-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">練習問題</h3>
        {answered > 0 && (
          <span className="text-sm text-muted-foreground">
            Benar: <span className="font-bold text-foreground">{correct}</span> / {answered} dijawab
            (dari {total} soal)
          </span>
        )}
      </div>

      <div className="space-y-5">
        {exercises.map((ex, i) => {
          const selected = answers[i];
          return (
            <div key={i} className="border-t border-border pt-4 first:border-t-0 first:pt-0">
              <p className="font-medium mb-3">
                {i + 1}. {ex.question}
              </p>
              <div className="flex flex-wrap gap-2">
                {ex.choices.map((choice) => {
                  const isSelected = selected === choice;
                  const isCorrect = choice === ex.answer;
                  return (
                    <button
                      key={choice}
                      onClick={() => setAnswers((prev) => ({ ...prev, [i]: choice }))}
                      className={cn(
                        "px-4 py-2 rounded-xl border-2 font-bold text-sm transition-colors",
                        isSelected && isCorrect && "bg-green-500/20 border-green-500 text-green-600",
                        isSelected && !isCorrect && "bg-red-500/20 border-red-500 text-red-600",
                        !isSelected && "border-border hover:border-primary/50"
                      )}
                    >
                      {choice}
                    </button>
                  );
                })}
              </div>
              {selected && selected !== ex.answer && (
                <p className="mt-2 text-xs text-muted-foreground">
                  Jawaban benar: <span className="font-bold text-foreground">{ex.answer}</span>
                </p>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}

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

      <ExerciseList exercises={lesson.exercises} />
    </div>
  );
}
