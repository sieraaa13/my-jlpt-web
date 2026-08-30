"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ChoiceQuestion, DragQuestion, KanjiExercises as KanjiExercisesData } from "@/data/n1/kanji/lessons";

function ChoiceQuestionCard({ q, index }: { q: ChoiceQuestion; index: number }) {
  const [selected, setSelected] = useState<"A" | "B" | null>(null);

  return (
    <div className="border-t border-border pt-4 first:border-t-0 first:pt-0">
      <p className="font-medium mb-3">
        {index + 1}. {q.question}
      </p>
      <div className="flex flex-wrap gap-2">
        {(["A", "B"] as const).map((opt) => {
          const label = opt === "A" ? q.optionA : q.optionB;
          const reading = opt === "A" ? q.optionAReading : q.optionBReading;
          const isSelected = selected === opt;
          const isCorrect = opt === q.answer;
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
              <span className="font-bold">{opt}. {label}</span>{" "}
              <span className="text-muted-foreground">（{reading}）</span>
            </button>
          );
        })}
      </div>
      {selected && selected !== q.answer && (
        <p className="mt-2 text-xs text-muted-foreground">
          Jawaban benar: <span className="font-bold text-foreground">{q.answer}</span>
        </p>
      )}
    </div>
  );
}

function DragQuestionCard({ q, index }: { q: DragQuestion; index: number }) {
  const [placed, setPlaced] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const isAnswered = placed !== null;
  const isCorrect = placed === q.answer;

  const blank = (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragOver(false);
        const kanji = e.dataTransfer.getData("text/plain");
        if (kanji) setPlaced(kanji);
      }}
      className={cn(
        "w-12 h-12 flex items-center justify-center rounded-xl border-2 border-dashed text-2xl font-black",
        dragOver && "border-primary bg-primary/10",
        !dragOver && !isAnswered && "border-border text-muted-foreground",
        isAnswered && isCorrect && "border-green-500 bg-green-500/20 text-green-600",
        isAnswered && !isCorrect && "border-red-500 bg-red-500/20 text-red-600"
      )}
    >
      {placed ?? "?"}
    </div>
  );

  return (
    <div className="border-t border-border pt-4 first:border-t-0 first:pt-0">
      <p className="font-medium mb-3">
        {index + 1}. Bacaan: <span className="font-bold">{q.reading}</span> — seret atau klik kanji yang tepat
      </p>

      <div className="flex items-center gap-2 mb-3">
        {q.blankPosition === "before" ? (
          <>
            {blank}
            <span className="text-4xl font-black">{q.fixedKanji}</span>
          </>
        ) : (
          <>
            <span className="text-4xl font-black">{q.fixedKanji}</span>
            {blank}
          </>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {q.choices.map((c) => (
          <div
            key={c}
            draggable
            onDragStart={(e) => e.dataTransfer.setData("text/plain", c)}
            onClick={() => setPlaced(c)}
            className="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-border bg-card text-xl font-bold cursor-grab active:cursor-grabbing hover:border-primary/50 select-none"
          >
            {c}
          </div>
        ))}
      </div>

      {isAnswered && !isCorrect && (
        <p className="mt-2 text-xs text-muted-foreground">
          Jawaban benar: <span className="font-bold text-foreground">{q.answer}</span>
        </p>
      )}
    </div>
  );
}

export function KanjiExercises({ exercises }: { exercises: KanjiExercisesData }) {
  if (!exercises) return null;

  return (
    <Card className="p-6 bg-card">
      <h3 className="text-xl font-bold mb-4">練習問題</h3>

      <div className="space-y-8">
        <div>
          <p className="text-sm text-muted-foreground mb-2">Bagian 1 — Pilih kata yang tepat</p>
          <div className="space-y-5">
            {exercises.choiceQuestions.map((q, i) => (
              <ChoiceQuestionCard key={i} q={q} index={i} />
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm text-muted-foreground mb-2">Bagian 2 — Lengkapi kanjinya</p>
          <div className="space-y-5">
            {exercises.dragQuestions.map((q, i) => (
              <DragQuestionCard key={i} q={q} index={i} />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
