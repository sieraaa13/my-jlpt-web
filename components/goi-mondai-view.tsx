"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { periodLabel } from "@/lib/mondai";
import { GOI_MONDAI, GoiMondai, getGoiWordsN1 } from "@/data/n1/goi/mondai";

type Sort = "newest" | "frequent";

const pill = (active: boolean) =>
  cn(
    "px-3 py-1.5 rounded-xl border-2 text-sm font-bold transition-colors",
    active ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary/50"
  );

// Tebalkan kata target di kalimat; kalau bentuknya berubah (mis. 潔い → 潔く,
// 察する → 察して), potong huruf belakangnya satu per satu sampai ketemu
function Highlight({ text, word }: { text: string; word: string }) {
  let target = word;
  const hasKanji = (s: string) => /[一-鿿]/.test(s);
  while (target && !text.includes(target)) {
    target = target.slice(0, -1);
    if (!hasKanji(target) && target.length < 2) target = "";
  }
  if (!target) return <>{text}</>;
  const i = text.indexOf(target);
  return (
    <>
      {text.slice(0, i)}
      <span className="font-bold underline underline-offset-4 decoration-primary">{target}</span>
      {text.slice(i + target.length)}
    </>
  );
}

// Rangkuman semua kosakata di 問題2-4 ujian N1, dengan filter mondai & tahun,
// pencarian, dan mode hafalan (arti disembunyikan sampai kartu diketuk)
export function GoiMondaiView() {
  const words = useMemo(() => getGoiWordsN1(), []);
  const years = useMemo(
    () => [...new Set(words.flatMap((w) => w.occurrences.map((o) => o.period.slice(0, 4))))].sort((a, b) => b.localeCompare(a)),
    [words]
  );

  const [mondai, setMondai] = useState<GoiMondai | "all">("all");
  const [year, setYear] = useState("all");
  const [sort, setSort] = useState<Sort>("newest");
  const [query, setQuery] = useState("");
  const [hide, setHide] = useState(false);
  const [revealed, setRevealed] = useState<Set<string>>(new Set());

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = words.filter(
      (w) =>
        (mondai === "all" || w.mondai === mondai) &&
        (year === "all" || w.occurrences.some((o) => o.period.startsWith(year))) &&
        (!q || [w.word, w.reading, w.meaning].some((s) => s?.toLowerCase().includes(q)))
    );
    return sort === "frequent" ? [...list].sort((a, b) => b.occurrences.length - a.occurrences.length) : list;
  }, [words, mondai, year, sort, query]);

  const countOf = (n: GoiMondai) => words.filter((w) => w.mondai === n).length;

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
          問題2・3・4 語彙
        </span>
        <h2 className="text-3xl font-black mb-1">Goi Mondai JLPT</h2>
        <p className="text-muted-foreground">
          Semua kosakata dari Mondai 2–4 ujian JLPT N1 {years[years.length - 1]}–{years[0]}: {words.length} kata, lengkap
          dengan cara baca, arti, dan kalimat dari soal.
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setMondai("all")} className={pill(mondai === "all")}>
            Semua
          </button>
          {GOI_MONDAI.map((m) => (
            <button key={m.n} onClick={() => setMondai(m.n)} className={pill(mondai === m.n)}>
              {m.label} {m.jp} <span className="font-normal opacity-70">({countOf(m.n)})</span>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <button onClick={() => setYear("all")} className={pill(year === "all")}>
            Semua tahun
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
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari kata / arti…"
            className="w-full sm:w-56 px-3 py-1.5 rounded-xl border-2 border-border bg-background text-sm focus:outline-none focus:border-primary"
          />
          <span className="text-sm text-muted-foreground">{shown.length} kata</span>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((w) => {
          const key = `${w.mondai}|${w.word}`;
          const open = !hide || revealed.has(key);
          const info = GOI_MONDAI.find((m) => m.n === w.mondai)!;
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
                <div className="min-w-0">
                  <div className="text-2xl font-black break-all">{w.word}</div>
                  {w.reading && <div className="text-sm text-muted-foreground">{w.reading}</div>}
                </div>
                <div className="flex shrink-0 flex-col items-end gap-1">
                  <span className="bg-muted text-xs font-bold px-2 py-1 rounded-full">
                    {info.label} {info.jp}
                  </span>
                  {w.occurrences.length > 1 && (
                    <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full">
                      ×{w.occurrences.length}
                    </span>
                  )}
                </div>
              </div>

              <div className="font-bold text-primary min-h-6 break-words">
                {open ? (
                  w.meaning ?? "—"
                ) : (
                  <span className="text-sm font-normal text-muted-foreground">Ketuk untuk lihat arti</span>
                )}
              </div>

              <div className="space-y-3 border-t border-border pt-3">
                {w.occurrences.map((o) => (
                  <div key={`${o.period}-${o.no}`} className="space-y-1">
                    <span className="inline-block text-xs font-bold text-muted-foreground">
                      {periodLabel(o.period)} · No.{o.no}
                    </span>
                    <p className="text-sm leading-relaxed break-words">
                      <Highlight text={o.sentence} word={w.word} />
                    </p>
                    {open && o.answer && (
                      <p className="text-sm break-words">
                        <span className="text-muted-foreground">≒ </span>
                        <span className="font-bold">{o.answer}</span>
                      </p>
                    )}
                    {open && o.distractors.length > 0 && (
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
