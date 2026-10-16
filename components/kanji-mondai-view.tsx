"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { periodLabel } from "@/lib/mondai";
import { getMondai1WordsN1 } from "@/data/n1/kanji/mondai1";

type Sort = "newest" | "frequent";

const pill = (active: boolean) =>
  cn(
    "px-3 py-1.5 rounded-xl border-2 text-sm font-bold transition-colors",
    active ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary/50"
  );

// Rangkuman semua kata di 問題1 漢字読み ujian N1, dengan filter tahun
// dan mode hafalan (bacaan disembunyikan sampai kartu diketuk)
export function KanjiMondaiView() {
  const words = useMemo(() => getMondai1WordsN1(), []);
  const years = useMemo(
    () => [...new Set(words.flatMap((w) => w.occurrences.map((o) => o.period.slice(0, 4))))].sort((a, b) => b.localeCompare(a)),
    [words]
  );

  const [year, setYear] = useState("all");
  const [sort, setSort] = useState<Sort>("newest");
  const [hide, setHide] = useState(false);
  const [revealed, setRevealed] = useState<Set<string>>(new Set());

  const shown = useMemo(() => {
    const list = year === "all" ? words : words.filter((w) => w.occurrences.some((o) => o.period.startsWith(year)));
    return sort === "frequent" ? [...list].sort((a, b) => b.occurrences.length - a.occurrences.length) : list;
  }, [words, year, sort]);

  const repeated = words.filter((w) => w.occurrences.length > 1).length;

  const toggleReveal = (key: string) =>
    setRevealed((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });

  return (
    <div className="space-y-6">
      <div>
        <span className="inline-block bg-foreground text-background text-xs font-bold px-3 py-1 rounded-full mb-3">
          問題1 漢字読み
        </span>
        <h2 className="text-3xl font-black mb-1">Kanji Mondai JLPT</h2>
        <p className="text-muted-foreground">
          Semua kata dari Mondai 1 ujian JLPT N1 {years[years.length - 1]}–{years[0]}: {words.length} kata
          {repeated > 0 && <>, {repeated} di antaranya keluar lebih dari sekali</>}.
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setYear("all")} className={pill(year === "all")}>
            Semua
          </button>
          {years.map((y) => (
            <button key={y} onClick={() => setYear(y)} className={pill(year === y)}>
              {y}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button onClick={() => setSort("newest")} className={pill(sort === "newest")}>
            Terbaru
          </button>
          <button onClick={() => setSort("frequent")} className={pill(sort === "frequent")}>
            Paling sering
          </button>
          <span className="hidden sm:block w-px h-6 bg-border mx-1" />
          <button
            onClick={() => {
              setHide((h) => !h);
              setRevealed(new Set());
            }}
            className={pill(hide)}
          >
            {hide ? "Mode hafalan: aktif" : "Mode hafalan"}
          </button>
          <span className="text-sm text-muted-foreground">{shown.length} kata</span>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((w) => {
          const key = `${w.word}|${w.reading}`;
          const open = !hide || revealed.has(key);
          return (
            <div
              key={key}
              onClick={hide ? () => toggleReveal(key) : undefined}
              className={cn(
                "rounded-2xl border border-border bg-card p-4 flex flex-col gap-3 min-w-0",
                hide && "cursor-pointer hover:border-primary/50"
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-3xl font-black break-all">{w.word}</span>
                {w.occurrences.length > 1 && (
                  <span className="shrink-0 bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full">
                    ×{w.occurrences.length}
                  </span>
                )}
              </div>

              <div className="text-lg font-bold text-primary min-h-7">
                {open ? w.reading : <span className="text-sm font-normal text-muted-foreground">Ketuk untuk lihat bacaan</span>}
              </div>

              <div className="space-y-3 border-t border-border pt-3">
                {w.occurrences.map((o) => (
                  <div key={`${o.period}-${o.no}`} className="space-y-1">
                    <span className="inline-block text-xs font-bold text-muted-foreground">
                      {periodLabel(o.period)} · No.{o.no}
                    </span>
                    <p className="text-sm leading-relaxed break-words">
                      {o.before}
                      <span className="font-bold underline underline-offset-4 decoration-primary">{w.word}</span>
                      {o.after}
                    </p>
                    {open && (
                      <p className="text-xs text-muted-foreground break-words">
                        Pengecoh: {o.distractors.join(" · ")}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
