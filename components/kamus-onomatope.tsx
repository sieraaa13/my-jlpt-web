"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { OnomatopeTab } from "@/components/onomatope-tab";
import { KamusTierId, kamusOnomatope } from "@/data/onomatope/kamus";

const count = (tier: (typeof kamusOnomatope)[number]) => tier.kategori.reduce((n, k) => n + k.items.length, 0);

// Kamus Onomatope: tab Umum / Kurang umum / Langka, lalu daftar per kategori makna
export function KamusOnomatope() {
  const [tierId, setTierId] = useState<KamusTierId>("umum");
  const tier = kamusOnomatope.find((t) => t.id === tierId)!;
  const total = kamusOnomatope.reduce((n, t) => n + count(t), 0);

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        {total} onomatope (擬音語・擬態語) untuk semua level, dikelompokkan berdasarkan seberapa sering dipakai.
      </p>

      <div className="inline-flex flex-wrap gap-1 p-1 rounded-2xl bg-muted">
        {kamusOnomatope.map((t) => (
          <button
            key={t.id}
            onClick={() => setTierId(t.id)}
            className={cn(
              "px-4 py-2 rounded-xl text-sm font-bold transition-colors",
              tierId === t.id ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {t.judul} <span className="font-normal opacity-70">({count(t)})</span>
          </button>
        ))}
      </div>

      {tier.id === "langka" && count(tier) > 0 && (
        <div className="p-4 rounded-2xl border border-amber-500/40 bg-amber-500/10 text-sm">
          Onomatope di kelompok ini jarang dipakai. Arti dan contohnya sebaiknya dicek ulang ke kamus sebelum dipakai sendiri.
        </div>
      )}

      {count(tier) === 0 ? (
        <div className="p-6 rounded-3xl border border-dashed border-border bg-card/50 text-center text-muted-foreground">
          Kelompok {tier.judul.toLowerCase()} segera diisi.
        </div>
      ) : (
        <OnomatopeTab
          key={tier.id}
          kategori={tier.kategori}
          intro={
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">{tier.judul}:</span> {tier.deskripsi} Tanda{" "}
              <span className="font-bold text-amber-600 dark:text-amber-400">試験</span> = pernah muncul di soal ujian N1/N3 di
              website ini.
            </p>
          }
        />
      )}
    </div>
  );
}
