"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { GoiTestDay } from "@/data/n1/goi/lessons";

function MultipleChoiceItem({
  index,
  prompt,
  choices,
  answer,
}: {
  index: number;
  prompt: string;
  choices: string[];
  answer: string;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="border-t border-border pt-4 first:border-t-0 first:pt-0">
      <p className="font-medium mb-3">
        {index}. {prompt}
      </p>
      <div className="flex flex-wrap gap-2">
        {choices.map((c, i) => {
          const isSelected = selected === c;
          const isCorrect = c === answer;
          return (
            <button
              key={i}
              onClick={() => setSelected(c)}
              className={cn(
                "px-4 py-2 rounded-xl border-2 text-sm font-medium transition-colors",
                isSelected && isCorrect && "bg-green-500/20 border-green-500 text-green-600",
                isSelected && !isCorrect && "bg-red-500/20 border-red-500 text-red-600",
                !isSelected && "border-border hover:border-primary/50"
              )}
            >
              {i + 1}. {c}
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

function PassageSection({ test }: { test: GoiTestDay }) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const { passage, wordBank, blanks } = test.passageQuestion;

  const parts = passage.split(/(\[\d+\])/g);

  return (
    <Card className="p-6 bg-card">
      <h3 className="text-lg font-bold mb-3">問題4 — Lengkapi bacaan dengan kata dari daftar</h3>
      <p className="leading-relaxed mb-4">
        {parts.map((part, i) => {
          const match = part.match(/^\[(\d+)\]$/);
          if (!match) return <span key={i}>{part}</span>;
          const num = Number(match[1]);
          const blank = blanks.find((b) => b.number === num);
          const selected = answers[num];
          const isCorrect = blank && selected === blank.answer;
          return (
            <span
              key={i}
              className={cn(
                "inline-block min-w-[4rem] text-center border-b-2 mx-1 px-1 font-bold",
                !selected && "border-border text-muted-foreground",
                selected && isCorrect && "border-green-500 text-green-600",
                selected && !isCorrect && "border-red-500 text-red-600"
              )}
            >
              {selected ?? `(${num})`}
            </span>
          );
        })}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {wordBank.map((w) => (
          <button
            key={w}
            onClick={() => {
              const nextBlank = blanks.find((b) => !answers[b.number]);
              if (nextBlank) setAnswers((prev) => ({ ...prev, [nextBlank.number]: w }));
            }}
            className="px-3 py-1.5 rounded-lg border-2 border-border text-sm font-medium hover:border-primary/50"
          >
            {w}
          </button>
        ))}
      </div>

      <div className="text-xs text-muted-foreground space-y-1">
        {blanks.map((b) => (
          <div key={b.number}>
            ({b.number}) jawaban: <span className="font-bold text-foreground">{b.answer}（{b.answerKanji}）</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function GoiTestView({ test }: { test: GoiTestDay }) {
  return (
    <div className="space-y-8">
      <div>
        <span className="inline-block bg-foreground text-background text-xs font-bold px-3 py-1 rounded-full mb-3">
          第{test.week}週 {test.day}日目
        </span>
        <h2 className="text-3xl font-black mb-1">{test.title}</h2>
        <p className="text-muted-foreground">{test.subtitle}</p>
      </div>

      <Card className="p-6 bg-card">
        <h3 className="text-lg font-bold mb-4">問題1 — Pilih arti/cara baca yang tepat</h3>
        <div className="space-y-5">
          {test.readingQuestions.map((q, i) => (
            <MultipleChoiceItem key={i} index={i + 1} prompt={q.sentence} choices={q.choices} answer={q.answer} />
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-card">
        <h3 className="text-lg font-bold mb-4">問題2 — Pilih kata yang tepat</h3>
        <div className="space-y-5">
          {test.wordChoiceQuestions.map((q, i) => (
            <MultipleChoiceItem
              key={i}
              index={i + 1}
              prompt={`${q.sentence} （${q.reading}）`}
              choices={q.choices}
              answer={q.answer}
            />
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-card">
        <h3 className="text-lg font-bold mb-4">問題3 — Lengkapi kalimatnya</h3>
        <div className="space-y-5">
          {test.fillBlankQuestions.map((q, i) => (
            <MultipleChoiceItem key={i} index={i + 1} prompt={q.sentence} choices={q.choices} answer={q.answer} />
          ))}
        </div>
      </Card>

      <PassageSection test={test} />
    </div>
  );
}
