"use client";

import { useEffect, useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { KanjiLessonDay } from "@/data/n1/kanji/lessons";

type ChoiceQuestion = {
  question: string;
  optionA: string;
  optionAReading: string;
  optionB: string;
  optionBReading: string;
  answer: "A" | "B";
};

type DragQuestion = {
  reading: string;
  fixedKanji: string;
  blankPosition: "before" | "after";
  choices: string[];
  answer: string;
};

type ExerciseData = {
  choiceQuestions: ChoiceQuestion[];
  dragQuestions: DragQuestion[];
};

function flattenKanji(lesson: KanjiLessonDay) {
  return lesson.groups.flatMap((g) =>
    g.kanjiList.map((k) => ({
      character: k.character,
      reading: k.reading,
      meaning: k.meaning,
      examples: k.examples,
    }))
  );
}

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

export function KanjiExercises({ lesson }: { lesson: KanjiLessonDay }) {
  const [data, setData] = useState<ExerciseData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generate = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/generate-kanji-exercise", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kanjiList: flattenKanji(lesson) }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Gagal membuat soal");
      setData(json);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal membuat soal");
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson.week, lesson.day]);

  useEffect(() => {
    setData(null);
    generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson.week, lesson.day]);

  return (
    <Card className="p-6 bg-card">
      <div className="flex items-center justify-between mb-4 gap-3 flex-wrap">
        <h3 className="text-xl font-bold">練習問題</h3>
        <button
          onClick={generate}
          disabled={loading}
          className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-bold disabled:opacity-50"
        >
          {loading ? "Membuat soal..." : "Buat soal baru"}
        </button>
      </div>

      {error && (
        <p className="text-sm text-red-500 mb-3">
          {error}. Pastikan API key sudah dikonfigurasi di server.
        </p>
      )}

      {loading && !data && (
        <p className="text-sm text-muted-foreground">Sedang membuat soal dari AI...</p>
      )}

      {data && (
        <div className="space-y-8">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Bagian 1 — Pilih kata yang tepat</p>
            <div className="space-y-5">
              {data.choiceQuestions.map((q, i) => (
                <ChoiceQuestionCard key={i} q={q} index={i} />
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-2">Bagian 2 — Lengkapi kanjinya</p>
            <div className="space-y-5">
              {data.dragQuestions.map((q, i) => (
                <DragQuestionCard key={i} q={q} index={i} />
              ))}
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
