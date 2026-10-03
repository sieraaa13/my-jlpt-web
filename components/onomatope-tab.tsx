"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import type { OnomatopeKategori } from "@/data/onomatope-types";

type OnomatopeTabProps = {
  kategori: OnomatopeKategori[];
  level: string; // "N3", "N1", ...
  deskripsi: string; // kalimat pengantar setelah jumlah kata
};

export function OnomatopeTab({ kategori, level, deskripsi }: OnomatopeTabProps) {
  const [selected, setSelected] = useState<string>("semua");
  const [query, setQuery] = useState("");
  const [onlyUjian, setOnlyUjian] = useState(false);

  const total = kategori.reduce((n, k) => n + k.items.length, 0);

  const q = query.trim().toLowerCase();
  const filtered = useMemo(
    () =>
      kategori
        .filter((k) => selected === "semua" || k.id === selected)
        .map((k) => ({
          ...k,
          items: k.items.filter(
            (o) =>
              (!onlyUjian || o.ujian) &&
              (!q ||
                o.kata.includes(q) ||
                o.arti.toLowerCase().includes(q) ||
                o.kondisi.toLowerCase().includes(q) ||
                o.contoh.includes(q))
          ),
        }))
        .filter((k) => k.items.length > 0),
    [kategori, selected, onlyUjian, q]
  );

  const shown = filtered.reduce((n, k) => n + k.items.length, 0);

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        {total} onomatope (擬音語・擬態語) level {level} {deskripsi}{" "}
        Tanda <span className="font-bold text-amber-600 dark:text-amber-400">試験</span> = pernah muncul di soal ujian {level} di website ini.
      </p>

      {/* Filter */}
      <div className="flex flex-col gap-3">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari onomatope, arti, atau kondisi… (mis. ぺこぺこ, lapar)"
          className="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm outline-none focus:border-primary"
        />
        <div className="flex flex-wrap gap-2">
          {[{ id: "semua", judul: "Semua" }, ...kategori].map((k) => (
            <button
              key={k.id}
              onClick={() => setSelected(k.id)}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-bold transition-colors",
                selected === k.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              )}
            >
              {k.judul}
            </button>
          ))}
          <button
            onClick={() => setOnlyUjian((v) => !v)}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-bold transition-colors border",
              onlyUjian
                ? "bg-amber-500 text-white border-amber-500"
                : "border-amber-500/50 text-amber-600 dark:text-amber-400 hover:bg-amber-500/10"
            )}
          >
            試験 Hanya yang muncul di ujian
          </button>
        </div>
      </div>

      {shown === 0 && (
        <div className="p-6 rounded-3xl border border-dashed border-border bg-card/50 text-center text-muted-foreground">
          Tidak ada onomatope yang cocok.
        </div>
      )}

      {filtered.map((k) => (
        <section key={k.id} className="rounded-2xl border border-border overflow-hidden">
          <h3 className="px-4 py-3 bg-primary/10 font-bold">
            {k.judul} <span className="text-xs font-bold text-muted-foreground">({k.items.length})</span>
          </h3>

          {/* Header kolom (layar lebar) */}
          <div className="hidden md:grid grid-cols-[10rem_14rem_1fr] gap-4 px-4 py-2 text-xs font-bold text-muted-foreground border-b border-border">
            <span>Onomatope</span>
            <span>Arti</span>
            <span>Kondisi penggunaan</span>
          </div>

          <div className="divide-y divide-border/60">
            {k.items.map((o) => (
              <div
                key={o.kata}
                className="grid grid-cols-1 md:grid-cols-[10rem_14rem_1fr] gap-1 md:gap-4 px-4 py-3 text-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg font-black text-primary">{o.kata}</span>
                  {o.ujian && (
                    <span className="rounded bg-amber-500/15 px-1.5 py-0.5 text-[10px] font-bold text-amber-600 dark:text-amber-400">
                      試験
                    </span>
                  )}
                </div>
                <div className="font-semibold">{o.arti}</div>
                <div>
                  <p className="text-muted-foreground">{o.kondisi}</p>
                  <p className="mt-1">例：{o.contoh}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
