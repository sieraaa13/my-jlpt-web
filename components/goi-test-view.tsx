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
                "px-4 py-2 rounded-xl border-2 text-sm font-medium text-left transition-colors",
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
        <h3 className="text-lg font-bold mb-4">問題1 — Lengkapi kalimatnya dengan kata yang tepat</h3>
        <div className="space-y-5">
          {test.fillBlankQuestions.map((q, i) => (
            <MultipleChoiceItem key={i} index={i + 1} prompt={q.sentence} choices={q.choices} answer={q.answer} />
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-card">
        <h3 className="text-lg font-bold mb-4">問題2 — Pilih kata yang sesuai dengan penjelasan</h3>
        <div className="space-y-5">
          {test.definitionQuestions.map((q, i) => (
            <MultipleChoiceItem key={i} index={i + 1} prompt={q.definition} choices={q.choices} answer={q.answer} />
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-card">
        <h3 className="text-lg font-bold mb-4">問題3 — Pilih kata yang artinya paling dekat</h3>
        <div className="space-y-5">
          {test.synonymQuestions.map((q, i) => (
            <MultipleChoiceItem
              key={i}
              index={i + 1}
              prompt={`${q.sentence} （${q.target}）`}
              choices={q.choices}
              answer={q.answer}
            />
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-card">
        <h3 className="text-lg font-bold mb-4">問題4 — Pilih penggunaan kata yang paling tepat</h3>
        <div className="space-y-5">
          {test.usageQuestions.map((q, i) => (
            <MultipleChoiceItem key={i} index={i + 1} prompt={q.word} choices={q.choices} answer={q.answer} />
          ))}
        </div>
      </Card>
    </div>
  );
}
