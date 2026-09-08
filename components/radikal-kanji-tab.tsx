"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import type { RadikalFile, RadikalGroup } from "@/data/kanji-radikal-types";

function RadikalGroupCard({ group, forceOpen }: { group: RadikalGroup; forceOpen: boolean }) {
  const [manualOpen, setManualOpen] = useState(false);
  const open = forceOpen || manualOpen;

  const description = group.label
    .replace(/\s*\(\d+\s*kata\)\s*$/, "")
    .split(" - ")
    .slice(1)
    .join(" - ");

  return (
    <div className="rounded-2xl border border-border overflow-hidden">
      <button
        onClick={() => setManualOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 bg-primary/10 hover:bg-primary/15 transition-colors text-left"
      >
        <div>
          <span className="text-lg font-black text-primary mr-2">{group.radikal}</span>
          <span className="text-sm font-bold">{description || group.label}</span>
        </div>
        <span className="text-xs font-bold text-muted-foreground shrink-0">
          {group.count} kata {open ? "▲" : "▼"}
        </span>
      </button>

      {open && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 p-4">
          {group.words.map((w, i) => (
            <div key={i} className="flex items-baseline gap-2 text-sm border-b border-border/50 pb-1">
              <span className="font-bold whitespace-nowrap">{w.kanji}</span>
              <span className="text-muted-foreground whitespace-nowrap">（{w.bacaan}）</span>
              <span className="text-muted-foreground truncate">— {w.arti}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

type RadikalKanjiTabProps = {
  files: Record<string, RadikalFile>;
  order: string[];
};

export function RadikalKanjiTab({ files, order }: RadikalKanjiTabProps) {
  const keys = order.filter((k) => files[k]);
  const [selectedFile, setSelectedFile] = useState(keys[0]);
  const [query, setQuery] = useState("");

  if (keys.length === 0) {
    return (
      <div className="p-6 rounded-3xl border border-dashed border-border bg-card/50 text-center text-muted-foreground">
        Materi Radikal Kanji segera hadir.
      </div>
    );
  }

  const current = files[selectedFile];

  const q = query.trim().toLowerCase();
  const filteredGroups = useMemo(() => {
    if (!current) return [];
    if (!q) return current.groups;
    return current.groups
      .map((g) => {
        const groupMatches = g.radikal.includes(q) || g.label.toLowerCase().includes(q);
        if (groupMatches) return g;
        const words = g.words.filter(
          (w) =>
            w.kanji.includes(q) ||
            w.bacaan.toLowerCase().includes(q) ||
            w.arti.toLowerCase().includes(q)
        );
        return words.length > 0 ? { ...g, words, count: words.length } : null;
      })
      .filter((g): g is RadikalGroup => g !== null);
  }, [current, q]);

  const mainGroups = filteredGroups.filter((g) => g.section !== "belum");
  const belumGroups = filteredGroups.filter((g) => g.section === "belum");
  const totalWords = filteredGroups.reduce((sum, g) => sum + g.words.length, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {keys.map((key) => (
          <button
            key={key}
            onClick={() => {
              setSelectedFile(key);
              setQuery("");
            }}
            className={cn(
              "px-4 py-2 rounded-xl border-2 text-sm font-bold transition-colors",
              selectedFile === key
                ? "bg-foreground text-background border-foreground"
                : "border-border hover:border-primary/50"
            )}
          >
            {files[key].title.replace(/^Kumpulan Kanji Berbunshu /i, "").replace(/^Kumpulan Kanji /i, "")}
          </button>
        ))}
      </div>

      {current && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-xl font-bold">{current.title}</h3>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari radikal, kanji, bacaan, atau arti..."
              className="w-full sm:w-72 px-3 py-2 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {q && (
            <p className="text-xs text-muted-foreground">
              {totalWords} kata cocok di {filteredGroups.length} kelompok
            </p>
          )}

          {filteredGroups.length === 0 ? (
            <div className="p-6 rounded-3xl border border-dashed border-border bg-card/50 text-center text-muted-foreground">
              Tidak ada kata yang cocok dengan pencarian.
            </div>
          ) : (
            <>
              {mainGroups.length > 0 && (
                <div className="space-y-3">
                  {mainGroups.map((g, i) => (
                    <RadikalGroupCard
                      key={`${selectedFile}-main-${g.radikal}-${i}`}
                      group={g}
                      forceOpen={!!q}
                    />
                  ))}
                </div>
              )}

              {belumGroups.length > 0 && (
                <div className="space-y-3">
                  {mainGroups.length > 0 && (
                    <div className="flex items-center gap-3 pt-2">
                      <div className="h-px flex-1 bg-border" />
                      <span className="text-xs font-bold text-muted-foreground shrink-0">
                        Belum Dikelompokkan (radikal asli, di luar tema utama file ini)
                      </span>
                      <div className="h-px flex-1 bg-border" />
                    </div>
                  )}
                  {belumGroups.map((g, i) => (
                    <RadikalGroupCard
                      key={`${selectedFile}-belum-${g.radikal}-${i}`}
                      group={g}
                      forceOpen={!!q}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
