"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { KanjiCharEntry, KanjiSignLessonDay, KanjiWord } from "@/data/n2/kanji/lessons";

function WordLine({ w }: { w: KanjiWord }) {
  return (
    <li>
      <span className="font-medium">{w.word}</span>{" "}
      <span className="text-muted-foreground">（{w.reading}）</span>{" "}
      {w.flag === "attention" && (
        <span className="inline-block text-[10px] font-bold text-orange-600 bg-orange-500/10 rounded-full px-1.5 align-middle">
          ❶
        </span>
      )}
      {w.flag === "special" && (
        <span className="inline-block text-[10px] font-bold text-purple-600 bg-purple-500/10 rounded-full px-1.5 align-middle">
          ◎
        </span>
      )}
      <span className="text-muted-foreground"> — {w.meaning}</span>
      {w.note && <span className="block text-xs text-muted-foreground italic">{w.note}</span>}
    </li>
  );
}

function KanjiCard({ entry }: { entry: KanjiCharEntry }) {
  return (
    <div className="rounded-2xl border border-border p-4 flex flex-col gap-3">
      <div className="flex items-start gap-3">
        <span className="text-4xl font-black leading-none">{entry.character}</span>
        <div className="text-xs space-y-0.5">
          <div className="text-muted-foreground">
            #{entry.id} · {entry.strokes}画
          </div>
          {entry.onyomi.length > 0 && (
            <div className="font-bold text-primary">{entry.onyomi.join("／")}</div>
          )}
          {entry.kunyomi.length > 0 && (
            <div className="font-medium">{entry.kunyomi.join("／")}</div>
          )}
        </div>
      </div>

      <div className={cn("grid gap-x-4 gap-y-1", entry.extraWords?.length ? "sm:grid-cols-2" : "")}>
        <ul className="text-sm space-y-1.5">
          {entry.words.map((w, i) => (
            <WordLine key={i} w={w} />
          ))}
        </ul>
        {entry.extraWords && entry.extraWords.length > 0 && (
          <ul className="text-sm space-y-1.5 sm:border-l sm:border-border sm:pl-4 mt-1.5 sm:mt-0">
            {entry.extraWords.map((w, i) => (
              <WordLine key={i} w={w} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function PracticeQuestionItem({
  index,
  prompt,
  optionA,
  optionB,
  answer,
}: {
  index: number;
  prompt: string;
  optionA: string;
  optionB: string;
  answer: "A" | "B";
}) {
  const [selected, setSelected] = useState<"A" | "B" | null>(null);

  return (
    <div className="border-t border-border pt-4 first:border-t-0 first:pt-0">
      <p className="font-medium mb-3">
        {index}. {prompt}
      </p>
      <div className="flex flex-wrap gap-2">
        {(["A", "B"] as const).map((opt) => {
          const label = opt === "A" ? optionA : optionB;
          const isSelected = selected === opt;
          const isCorrect = opt === answer;
          return (
            <button
              key={opt}
              onClick={() => setSelected(opt)}
              className={cn(
                "px-4 py-2 rounded-xl border-2 text-sm text-left transition-colors",
                isSelected && isCorrect && "bg-green-500/20 border-green-500 text-green-600",
                isSelected && !isCorrect && "bg-red-500/20 border-red-500 text-red-600",
                !isSelected && "border-border hover:border-primary/50"
              )}
            >
              <span className="font-bold">{opt}.</span> {label}
            </button>
          );
        })}
      </div>
      {selected && selected !== answer && (
        <p className="mt-2 text-xs text-muted-foreground">
          Jawaban benar: <span className="font-bold text-foreground">{answer}</span>
        </p>
      )}
    </div>
  );
}

export function N2KanjiLessonView({ lesson }: { lesson: KanjiSignLessonDay }) {
  return (
    <div className="space-y-8">
      <div>
        <span className="inline-block bg-foreground text-background text-xs font-bold px-3 py-1 rounded-full mb-3">
          第{lesson.week}週 {lesson.day}日目
        </span>
        <h2 className="text-3xl font-black mb-1">{lesson.title}</h2>
        <p className="text-muted-foreground">
          {lesson.subtitle} · {lesson.translation}
        </p>
      </div>

      <Card className="p-6 bg-card">
        <p className="text-sm text-muted-foreground mb-3">{lesson.sceneDescription}</p>
        <div className="flex flex-wrap gap-2">
          {lesson.signs.map((s, i) => (
            <div
              key={i}
              className="rounded-xl border-2 border-foreground/70 px-3 py-2 text-center bg-background"
              title={s.meaning}
            >
              <div className="font-black text-sm leading-tight">{s.text}</div>
              <div className="text-[10px] text-muted-foreground">{s.meaning}</div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {lesson.kanjiList.map((entry) => (
          <KanjiCard key={entry.id} entry={entry} />
        ))}
      </div>

      <Card className="p-6 bg-card">
        <h3 className="text-lg font-bold mb-4">練習 — Latihan Pemahaman</h3>
        <div className="space-y-5">
          {lesson.practiceQuestions.map((q) => (
            <PracticeQuestionItem
              key={q.number}
              index={q.number}
              prompt={q.prompt}
              optionA={q.optionA}
              optionB={q.optionB}
              answer={q.answer}
            />
          ))}
        </div>
      </Card>
    </div>
  );
}
