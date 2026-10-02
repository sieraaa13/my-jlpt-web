"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

interface Question {
  q: string;
  options: string[];
  correct: number;
  order?: number[]; // urutan opsi yang benar untuk 4 kotak (kalau tersedia)
}

type Part = { type: "text"; value: string } | { type: "blank"; star: boolean };

// Kotak kosong di data ditulis dengan beberapa gaya: （　）, （ ★ ）, ( ), (★),
// （　））, juga __ dan __★__, serta gaya Soumatome ＿＿ ＿＿ ★ ＿＿ (★ berdiri
// sendiri = kotak ★). Semua diubah jadi token "blank".
const BLANK_RE = /_{2}\s*★\s*_{2}|_{2}|＿{2,}|[（(][\s　]*★?[\s　]*[)）]+|★/g;

/** Pecah soal 文の組み立て jadi teks + 4 kotak. null kalau bukan soal ★. */
export function parseSortQuestion(q: string): Part[] | null {
  const parts: Part[] = [];
  let last = 0;
  for (const m of q.matchAll(BLANK_RE)) {
    const before = q.slice(last, m.index);
    // Spasi di antara dua kotak tidak perlu ditampilkan
    if (before.trim() || parts.length === 0) parts.push({ type: "text", value: before });
    parts.push({ type: "blank", star: m[0].includes("★") });
    last = m.index! + m[0].length;
  }
  parts.push({ type: "text", value: q.slice(last) });

  const blanks = parts.filter((p) => p.type === "blank") as { type: "blank"; star: boolean }[];
  if (blanks.length !== 4 || blanks.filter((b) => b.star).length !== 1) return null;
  return parts;
}

/** Kalimat utuh dengan kata di kotak (kotak ★ ditandai 【★…】), untuk konteks AI. */
export function fillSortSentence(parts: Part[], slots: (number | null)[], options: string[]): string {
  let k = -1;
  return parts
    .map((p) => {
      if (p.type === "text") return p.value;
      const opt = slots[++k];
      const word = opt !== null && opt !== undefined ? options[opt] : "＿＿";
      return p.star ? `【★${word}】` : `【${word}】`;
    })
    .join("");
}

const slotOfStar = (parts: Part[]) =>
  parts.filter((p) => p.type === "blank").findIndex((p) => (p as { star: boolean }).star);

/* ── SORT QUESTION CARD (drag & klik) ─────────────────────────── */
export function SortQuestionCard({
  index,
  question,
  parts,
  slots,
  onChange,
}: {
  index: number;
  question: Question;
  parts: Part[];
  slots: (number | null)[];
  // starOption = opsi yang ada di kotak ★ (jawaban yang dinilai), atau null
  onChange: (slots: (number | null)[], starOption: number | null) => void;
}) {
  const [dragOver, setDragOver] = useState<number | "pool" | null>(null);
  const starSlot = slotOfStar(parts);
  const used = new Set(slots.filter((s): s is number => s !== null));

  const commit = (next: (number | null)[]) => onChange(next, next[starSlot]);

  // Klik kata di bank → masuk ke kotak kosong pertama
  const placeInFirstEmpty = (opt: number) => {
    const empty = slots.indexOf(null);
    if (empty === -1) return;
    const next = [...slots];
    next[empty] = opt;
    commit(next);
  };

  // Klik kotak yang terisi → kata kembali ke bank
  const clearSlot = (slot: number) => {
    if (slots[slot] === null) return;
    const next = [...slots];
    next[slot] = null;
    commit(next);
  };

  // Data drag: "opt:<i>" dari bank, "slot:<i>" dari kotak
  const handleDropOnSlot = (e: React.DragEvent, slot: number) => {
    e.preventDefault();
    setDragOver(null);
    const [kind, raw] = e.dataTransfer.getData("text/plain").split(":");
    const n = Number(raw);
    const next = [...slots];
    if (kind === "opt") {
      const prevSlot = next.indexOf(n);
      if (prevSlot !== -1) next[prevSlot] = null;
      next[slot] = n;
    } else if (kind === "slot" && n !== slot) {
      [next[slot], next[n]] = [next[n], next[slot]]; // tukar isi kotak
    } else return;
    commit(next);
  };

  const handleDropOnPool = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(null);
    const [kind, raw] = e.dataTransfer.getData("text/plain").split(":");
    if (kind === "slot") clearSlot(Number(raw));
  };

  let blankCounter = -1;

  return (
    <Card className="p-4 sm:p-5 md:p-6 border-2 rounded-xl transition-all bg-card border-border hover:border-cyan-500/50">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-500 flex-shrink-0 min-w-[2rem] sm:min-w-[2.5rem]">{index + 1}.</div>
        <div className="flex-1 min-w-0">
          {/* Kalimat dengan kotak */}
          <div className="font-semibold text-base sm:text-lg leading-loose mb-4 break-words whitespace-pre-line text-foreground">
            {parts.map((p, pi) => {
              if (p.type === "text") return <span key={pi}>{p.value}</span>;
              const slot = ++blankCounter;
              const opt = slots[slot];
              return (
                <span
                  key={pi}
                  draggable={opt !== null}
                  onDragStart={(e) => e.dataTransfer.setData("text/plain", `slot:${slot}`)}
                  onDragOver={(e) => { e.preventDefault(); setDragOver(slot); }}
                  onDragLeave={() => setDragOver(null)}
                  onDrop={(e) => handleDropOnSlot(e, slot)}
                  onClick={() => clearSlot(slot)}
                  title={opt !== null ? "Klik untuk mengembalikan" : undefined}
                  className={`relative inline-flex items-center justify-center align-middle mx-1 my-1 min-w-[4.5rem] min-h-[2.25rem] px-2 rounded-md border-2 text-sm sm:text-base transition-all select-none
                    ${opt !== null ? "cursor-pointer bg-cyan-500/20 border-cyan-500 text-cyan-700 dark:text-cyan-300" : "border-dashed border-muted-foreground/50 text-muted-foreground"}
                    ${dragOver === slot ? "ring-2 ring-cyan-400 border-cyan-400" : ""}
                    ${p.star ? "border-amber-500" : ""}`}
                >
                  {p.star && <span className="absolute -top-2.5 -right-2 text-amber-500 text-sm leading-none">★</span>}
                  {opt !== null ? question.options[opt] : " "}
                </span>
              );
            })}
          </div>

          {/* Bank kata */}
          <div
            onDragOver={(e) => { e.preventDefault(); setDragOver("pool"); }}
            onDragLeave={() => setDragOver(null)}
            onDrop={handleDropOnPool}
            className={`flex flex-wrap gap-2 p-3 rounded-lg border-2 border-dashed min-h-[3.5rem] transition-all ${dragOver === "pool" ? "border-cyan-400 bg-cyan-500/5" : "border-border"}`}
          >
            {question.options.map((opt, oi) =>
              used.has(oi) ? null : (
                <button
                  key={oi}
                  type="button"
                  draggable
                  onDragStart={(e) => e.dataTransfer.setData("text/plain", `opt:${oi}`)}
                  onClick={() => placeInFirstEmpty(oi)}
                  className="py-2 px-3 rounded-lg border-2 bg-background border-border text-foreground hover:border-cyan-400/60 text-sm sm:text-base font-medium flex items-center gap-2 cursor-grab active:cursor-grabbing"
                >
                  <span className="w-5 h-5 rounded-full border-2 border-muted-foreground text-muted-foreground flex items-center justify-center text-[10px] font-bold">{oi + 1}</span>
                  {opt}
                </button>
              )
            )}
            {used.size === 4 && <span className="text-xs sm:text-sm text-muted-foreground self-center">Semua kata sudah dipakai</span>}
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Seret atau klik kata untuk mengisi kotak. Klik kotak untuk mengembalikan kata. Yang dinilai adalah kata di kotak ★.
          </p>
        </div>
      </div>
    </Card>
  );
}

/* ── SORT RESULT CARD: susunan user vs susunan benar ─────────── */
export function SortResultCard({
  index,
  question,
  parts,
  slots,
  isCorrect,
  footer,
}: {
  index: number;
  question: Question;
  parts: Part[];
  slots: (number | null)[];
  isCorrect: boolean;
  footer?: React.ReactNode;
}) {
  const starSlot = slotOfStar(parts);
  const answered = slots[starSlot] !== null && slots[starSlot] !== undefined;
  const order = question.order;

  // mode "user": warnai tiap kotak benar/salah dibanding order; "correct": susunan benar
  const renderSentence = (mode: "user" | "correct") => {
    let k = -1;
    return parts.map((p, pi) => {
      if (p.type === "text") return <span key={pi}>{p.value}</span>;
      const slot = ++k;
      const opt = mode === "correct" ? order![slot] : slots[slot];
      const filled = opt !== null && opt !== undefined;
      let tone = "border-dashed border-muted-foreground/50 text-muted-foreground";
      if (mode === "correct") tone = "bg-green-500/20 border-green-500 text-foreground";
      else if (filled && order) tone = opt === order[slot] ? "bg-green-500/20 border-green-500 text-foreground" : "bg-red-500/20 border-red-500 text-foreground";
      else if (filled) tone = "bg-muted border-border text-foreground";
      return (
        <span
          key={pi}
          className={`relative inline-flex items-center justify-center align-middle mx-1 my-1 min-w-[4.5rem] min-h-[2.25rem] px-2 rounded-md border-2 text-sm sm:text-base ${tone} ${p.star ? "ring-2 ring-amber-500/70" : ""}`}
        >
          {p.star && <span className="absolute -top-2.5 -right-2 text-amber-500 text-sm leading-none">★</span>}
          {filled ? question.options[opt] : " "}
        </span>
      );
    });
  };

  return (
    <Card className={`p-4 sm:p-5 md:p-6 border-2 rounded-xl transition-all ${isCorrect ? "bg-green-500/10 border-green-500/50" : answered ? "bg-red-500/10 border-red-500/50" : "bg-card border-border"}`}>
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-500 flex-shrink-0 min-w-[2rem] sm:min-w-[2.5rem]">{index + 1}.</div>
        <div className="flex-1 min-w-0 space-y-3">
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-1">Susunanmu</p>
            <div className="font-semibold text-base sm:text-lg leading-loose break-words whitespace-pre-line text-foreground">{renderSentence("user")}</div>
          </div>
          {order && (
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-1">Susunan benar</p>
              <div className="font-semibold text-base sm:text-lg leading-loose break-words whitespace-pre-line text-foreground">{renderSentence("correct")}</div>
            </div>
          )}
          {!answered && <p className="text-xs sm:text-sm font-semibold text-muted-foreground">Kotak ★ belum diisi.</p>}
          {answered && !isCorrect && <p className="text-xs sm:text-sm font-semibold text-red-500">✗ Salah. Kata di kotak ★ yang benar: {question.options[question.correct]}</p>}
          {isCorrect && <p className="text-xs sm:text-sm font-semibold text-green-500">✓ Benar!</p>}
          {footer}
        </div>
      </div>
    </Card>
  );
}
