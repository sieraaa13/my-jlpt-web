"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { KanjiLessonDay } from "@/data/n1/kanji/lessons";

export function KanjiLessonView({ lesson }: { lesson: KanjiLessonDay }) {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div>
        <span className="inline-block bg-foreground text-background text-xs font-bold px-3 py-1 rounded-full mb-3">
          第{lesson.week}週 {lesson.day}日目
        </span>
        <h2 className="text-3xl font-black mb-1">{lesson.title}</h2>
        <p className="text-muted-foreground">{lesson.subtitle}</p>
      </div>

      <Card className="p-6 bg-card border-2 border-primary/30">
        <p className="text-sm text-muted-foreground mb-3">Kuis singkat</p>
        <p className="text-2xl font-bold mb-4">
          {lesson.quiz.question.replace("___", lesson.quiz.targetKanji)}
        </p>
        <div className="flex flex-wrap gap-3">
          {lesson.quiz.choices.map((choice) => {
            const isSelected = selectedChoice === choice;
            const isCorrect = choice === lesson.quiz.answer;
            return (
              <button
                key={choice}
                onClick={() => setSelectedChoice(choice)}
                className={cn(
                  "px-5 py-2 rounded-xl border-2 font-bold transition-colors",
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
        {selectedChoice && (
          <p className="mt-4 text-sm text-muted-foreground">
            Jawaban: <span className="font-bold text-foreground">{lesson.quiz.answer}</span>
          </p>
        )}
      </Card>

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

                  <div className="mt-auto pt-3 border-t border-border text-xs">
                    <span className="text-muted-foreground">部首 (radikal): </span>
                    <span className="font-bold">{entry.radical.character}</span>{" "}
                    <span className="text-muted-foreground">
                      {entry.radical.name} — {entry.radical.meaning}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
