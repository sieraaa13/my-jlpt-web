"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { RadikalFile, RadikalGroup } from "@/data/kanji-radikal-types";

function RadikalGroupCard({ group }: { group: RadikalGroup }) {
  const [open, setOpen] = useState(false);

  const description = group.label
    .replace(/\s*\(\d+\s*kata\)\s*$/, "")
    .split(" - ")
    .slice(1)
    .join(" - ");

  return (
    <div className="rounded-2xl border border-border overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
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

  if (keys.length === 0) {
    return (
      <div className="p-6 rounded-3xl border border-dashed border-border bg-card/50 text-center text-muted-foreground">
        Materi Radikal Kanji segera hadir.
      </div>
    );
  }

  const current = files[selectedFile];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {keys.map((key) => (
          <button
            key={key}
            onClick={() => setSelectedFile(key)}
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
          <h3 className="text-xl font-bold">{current.title}</h3>
          <div className="space-y-3">
            {current.groups.map((g, i) => (
              <RadikalGroupCard key={`${selectedFile}-${g.radikal}-${i}`} group={g} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
