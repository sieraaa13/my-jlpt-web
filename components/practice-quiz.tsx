"use client";

import { useEffect, useState } from "react";
import { useExamContext } from "@/components/exam-context";
import { AskButton } from "@/components/ask-siera-button";
import { SortQuestionCard, SortResultCard, parseSortQuestion, fillSortSentence } from "@/components/sort-question-card";

type Question = {
  number: number;
  question?: string;
  blank?: string;
  options?: { id: number; text: string }[];
  words?: { id: number; word: string }[];
  hint?: string;
  answer?: number;
  order?: number[]; // soal ★: id kata dalam urutan yang benar
};

type ExerciseGroup = {
  title: string;
  instruction: string;
  type: string;
  questions: Question[];
  passage?: {
    title?: string;
    jp_text?: string;
    translation_title?: string;
    translation?: string;
  };
};

// Soal ★ (q.words) dalam format yang dipakai SortQuestionCard: opsi = index kata
function toSortQuestion(q: Question) {
  const words = q.words ?? [];
  const idx = (id: number) => words.findIndex((w) => w.id === id);
  return {
    q: q.question ?? "",
    options: words.map((w) => w.word),
    correct: q.answer !== undefined ? idx(q.answer) : -1,
    order: q.order?.map(idx),
  };
}

// sortAndAsk: soal ★ disusun dengan drag/klik, dan setelah diperiksa setiap
// soal punya tombol untuk bertanya ke Siera
export function PracticeQuiz({ groups, sortAndAsk = false }: { groups: ExerciseGroup[]; sortAndAsk?: boolean }) {
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  // Susunan kata soal ★ per nomor soal (index ke q.words)
  const [sortSlots, setSortSlots] = useState<Record<number, (number | null)[]>>({});
  const { openChatWith } = useExamContext();

  // Lepas fokus chat saat keluar dari halaman latihan
  useEffect(() => () => openChatWith(null), []);

  const sortPartsOf = (q: Question) => (sortAndAsk && q.words && q.question ? parseSortQuestion(q.question) : null);

  const askAbout = (group: ExerciseGroup, q: Question) => {
    const choices = q.options?.map((o) => ({ id: o.id, text: o.text })) ?? q.words?.map((w) => ({ id: w.id, text: w.word })) ?? [];
    const textOf = (id?: number) => choices.find((c) => c.id === id)?.text ?? "";
    const ua = selected[q.number];
    const label = `${group.title} no. ${q.number}`;
    const lines = [`Bagian: ${label}`];
    if (group.passage?.jp_text) lines.push(`[Bacaan/Teks]\n${group.passage.jp_text.slice(0, 1500)}`);
    lines.push(`Soal: ${q.question || q.blank || ""}`);
    lines.push(`Pilihan: ${choices.map((c) => `${c.id}. ${c.text}`).join(" / ")}`);
    lines.push(`Jawaban user: ${ua !== undefined ? `${ua}. ${textOf(ua)}` : "tidak dijawab"}`);
    if (q.answer !== undefined) lines.push(`Jawaban benar: ${q.answer}. ${textOf(q.answer)}`);
    const parts = sortPartsOf(q);
    if (parts) {
      const sq = toSortQuestion(q);
      lines.push("Tipe soal: 文の組み立て (menyusun 4 kata; yang dinilai hanya kata di kotak ★)");
      lines.push(`Susunan user: ${fillSortSentence(parts, sortSlots[q.number] ?? [null, null, null, null], sq.options)}`);
      if (sq.order) lines.push(`Susunan benar: ${fillSortSentence(parts, sq.order, sq.options)}`);
    }
    if (q.hint) lines.push(`Petunjuk materi: ${q.hint}`);
    openChatWith({ label, detail: lines.join("\n") });
  };

  const allQuestions = groups.flatMap((g) => g.questions);
  const totalQuestions = allQuestions.length;
  const answeredCount = Object.keys(selected).length;

  const correctCount = allQuestions.filter(
    (q) => selected[q.number] === q.answer
  ).length;

  const handleSelect = (questionNum: number, optionId: number) => {
    if (showResults) return;
    setSelected((prev) => ({ ...prev, [questionNum]: optionId }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setSelected({});
    setSortSlots({});
    openChatWith(null);
    setShowResults(false);
  };

  const getOptionStyle = (q: Question, optId: number) => {
    if (!showResults) {
      return selected[q.number] === optId
        ? "bg-primary/10 border-primary text-primary font-medium"
        : "bg-card border-border hover:border-primary/50";
    }
    // Setelah submit: tunjukkan benar/salah
    const isCorrect = optId === q.answer;
    const isSelected = selected[q.number] === optId;

    if (isCorrect) return "bg-green-500/10 border-green-500 text-green-700 dark:text-green-400 font-medium";
    if (isSelected && !isCorrect) return "bg-red-500/10 border-red-500 text-red-700 dark:text-red-400 line-through";
    return "bg-card border-border opacity-50";
  };

  return (
    <div className="space-y-12">
      {groups.map((group, gIdx) => (
        <div key={gIdx}>
          {/* Judul grup soal */}
          <div className="inline-block bg-foreground text-background text-xl font-bold px-5 py-2 rounded-xl mb-2">
            {group.title}
          </div>
          <p className="text-muted-foreground mb-6">{group.instruction}</p>

          {/* Bacaan (untuk 問題3) */}
          {group.passage && (
            <div className="bg-card border border-border rounded-2xl p-6 mb-6 leading-relaxed">
              <p className="text-foreground whitespace-pre-line">{(group.passage as any).jp_text}</p>
            </div>
          )}

          {/* Daftar soal */}
          <div className="space-y-8">
            {group.questions.map((q) => {
              const sortParts = sortPartsOf(q);
              if (sortParts) {
                const sq = toSortQuestion(q);
                const slots = sortSlots[q.number] ?? [null, null, null, null];
                return showResults ? (
                  <SortResultCard
                    key={q.number}
                    index={q.number - 1}
                    question={sq}
                    parts={sortParts}
                    slots={slots}
                    isCorrect={selected[q.number] === q.answer}
                    footer={<AskButton onClick={() => askAbout(group, q)} />}
                  />
                ) : (
                  <SortQuestionCard
                    key={q.number}
                    index={q.number - 1}
                    question={sq}
                    parts={sortParts}
                    slots={slots}
                    onChange={(next, starOption) => {
                      setSortSlots((prev) => ({ ...prev, [q.number]: next }));
                      setSelected((prev) => {
                        const copy = { ...prev };
                        if (starOption === null) delete copy[q.number];
                        else copy[q.number] = q.words![starOption].id;
                        return copy;
                      });
                    }}
                  />
                );
              }
              return (
              <div key={q.number}>
                {/* Nomor + pertanyaan */}
                <div className="flex gap-3 mb-3">
                  <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-foreground text-background flex items-center justify-center font-bold text-sm">
                    {q.number}
                  </span>
                  <p className="font-semibold text-lg pt-1">
                    {q.question || q.blank}
                  </p>
                </div>

                {/* Pilihan jawaban (問題1 & 問題3) */}
                {q.options && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 ml-12">
                    {q.options.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => handleSelect(q.number, opt.id)}
                        disabled={showResults}
                        className={`px-3 py-2 rounded-xl border text-left text-sm transition-colors ${getOptionStyle(q, opt.id)}`}
                      >
                        <span className="font-medium mr-1">{opt.id}.</span> {opt.text}
                      </button>
                    ))}
                  </div>
                )}

                {/* Pilihan kata untuk disusun (問題2) */}
                {q.words && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 ml-12">
                    {q.words.map((w) => (
                      <button
                        key={w.id}
                        onClick={() => handleSelect(q.number, w.id)}
                        disabled={showResults}
                        className={`px-3 py-2 rounded-xl border text-left text-sm transition-colors ${getOptionStyle(q, w.id)}`}
                      >
                        <span className="font-medium mr-1">{w.id}.</span> {w.word}
                      </button>
                    ))}
                  </div>
                )}

                {/* Petunjuk materi (hint) */}
                {showResults && q.hint && (
                  <p className="ml-12 mt-2 text-xs text-muted-foreground">📘 {q.hint}</p>
                )}

                {showResults && sortAndAsk && (
                  <div className="ml-12 mt-3">
                    <AskButton onClick={() => askAbout(group, q)} />
                  </div>
                )}
              </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Tombol submit */}
      {!showResults && (
        <div className="text-center pt-4">
          <p className="text-sm text-muted-foreground mb-3">
            {answeredCount} dari {totalQuestions} soal sudah dijawab
          </p>
          <button
            onClick={handleSubmit}
            disabled={answeredCount === 0}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            📝 Periksa Jawaban
          </button>
        </div>
      )}

      {/* Skor (muncul di bawah setelah submit) */}
      {showResults && (
        <div className="bg-card border border-border rounded-2xl p-6 text-center">
          <p className="text-3xl font-black mb-2">
            {correctCount} / {totalQuestions}
          </p>
          <p className="text-muted-foreground mb-1">
            Skor: {Math.round((correctCount / totalQuestions) * 100)} / 100
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            ({correctCount} benar × 4 poin = {correctCount * 4} poin)
          </p>
          <div className="w-full h-3 bg-secondary rounded-full overflow-hidden mb-4">
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${(correctCount / totalQuestions) * 100}%`,
                backgroundColor: correctCount / totalQuestions >= 0.7 ? "#22c55e" : correctCount / totalQuestions >= 0.4 ? "#f59e0b" : "#ef4444",
              }}
            />
          </div>
          <button
            onClick={handleReset}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
          >
            🔄 Coba Lagi
          </button>
        </div>
      )}
    </div>
  );
}
