"use client";

import { useMemo } from "react";
import { Card } from "@/components/ui/card";
import { AccuracyBar } from "@/components/n1-mondai-practice";
import { GROUPS, MONDAI } from "@/lib/n1-mondai";
import { N1Progress, avgSecPerUnit, formatDuration, pct, scoreByGroup, scoreByMondai, weakestMondai } from "@/lib/n1-progress";

const WEEK = 7 * 24 * 60 * 60 * 1000;

export function N1MondaiStats({
  progress, loading, loggedIn, onPractice,
}: {
  progress: N1Progress;
  loading: boolean;
  loggedIn: boolean;
  onPractice: (mondai: number) => void;
}) {
  const scores = useMemo(() => scoreByMondai(progress), [progress]);
  const groups = useMemo(() => scoreByGroup(progress), [progress]);
  const times = useMemo(() => avgSecPerUnit(progress), [progress]);
  const weakest = useMemo(() => weakestMondai(progress), [progress]);
  // 4 minggu terakhir, dari yang paling lama ke minggu ini
  const weeks = useMemo(() => {
    const now = Date.now();
    return [3, 2, 1, 0].map((w) => scoreByGroup(progress, now - (w + 1) * WEEK, now - w * WEEK));
  }, [progress]);

  if (!loggedIn) {
    return (
      <Card className="p-6 border-2 rounded-2xl text-center gap-2">
        <p className="text-lg font-bold">Login untuk melihat statistik</p>
        <p className="text-muted-foreground text-sm">Hasil Ujian Lengkap dan Latihan per Mondai akan dirangkum per tipe soal di sini.</p>
      </Card>
    );
  }

  if (loading && progress.attempts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-primary" />
      </div>
    );
  }

  if (progress.attempts.length === 0) {
    return (
      <Card className="p-6 border-2 rounded-2xl text-center gap-2">
        <p className="text-lg font-bold">Belum ada data</p>
        <p className="text-muted-foreground text-sm">Kerjakan Ujian Lengkap atau Latihan per Mondai dulu. Hasilnya otomatis muncul di sini.</p>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* KELEMAHAN TERBESAR */}
      <Card className="p-4 sm:p-5 border-2 rounded-2xl gap-3 border-red-500/30 bg-red-500/5">
        <h3 className="font-bold">🎯 Kelemahan terbesar</h3>
        {weakest.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Belum ada tipe soal di bawah 70% (minimal 5 soal dikerjakan per tipe). Pertahankan!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {weakest.map(({ mondai, pct: p }) => (
              <button
                key={mondai.n}
                onClick={() => onPractice(mondai.n)}
                className="text-left rounded-xl border-2 border-border bg-background p-3 hover:border-cyan-500/60 transition-colors"
              >
                <p className="text-xs font-semibold text-cyan-500">問題{mondai.n}</p>
                <p className="font-bold truncate">{mondai.jp}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-red-500 font-bold">{p}%</span>
                  <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">Latih sekarang →</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </Card>

      {/* RINGKASAN PER BAGIAN + TREN */}
      <Card className="p-4 sm:p-5 border-2 rounded-2xl gap-4">
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          {GROUPS.map((g) => {
            const p = pct(groups[g.id]);
            return (
              <div key={g.id} className="rounded-xl border-2 border-border p-3 text-center">
                <p className="text-xs font-semibold text-cyan-500 truncate">{g.name}</p>
                <p className="text-2xl sm:text-3xl font-bold">{p === null ? "–" : `${p}%`}</p>
                <p className="text-[11px] text-muted-foreground">{groups[g.id].total} soal</p>
              </div>
            );
          })}
        </div>
        <div>
          <p className="text-sm font-semibold mb-2">Tren 4 minggu</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-muted-foreground">
                  <th className="text-left font-medium pb-1.5"></th>
                  <th className="font-medium pb-1.5">3 mgg lalu</th>
                  <th className="font-medium pb-1.5">2 mgg lalu</th>
                  <th className="font-medium pb-1.5">Mgg lalu</th>
                  <th className="font-medium pb-1.5">Mgg ini</th>
                </tr>
              </thead>
              <tbody>
                {GROUPS.map((g) => (
                  <tr key={g.id} className="border-t border-border">
                    <td className="py-1.5 pr-2 font-medium whitespace-nowrap">{g.jp}</td>
                    {weeks.map((w, i) => {
                      const p = pct(w[g.id]);
                      return (
                        <td key={i} className={`py-1.5 text-center ${i === 3 ? "font-bold" : ""}`}>
                          {p === null ? <span className="text-muted-foreground">–</span> : `${p}%`}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>

      {/* PER MONDAI */}
      {GROUPS.map((g) => (
        <section key={g.id}>
          <h3 className="text-lg font-bold mb-3">
            {g.jp} <span className="text-muted-foreground font-medium text-base">({g.name})</span>
          </h3>
          <Card className="border-2 rounded-2xl p-0 gap-0 divide-y divide-border">
            {MONDAI.filter((m) => m.group === g.id).map((m) => {
              const s = scores[m.n];
              const t = times[m.n];
              const slow = t !== null && t > m.targetSec;
              return (
                <button key={m.n} onClick={() => onPractice(m.n)} className="w-full text-left p-3 sm:p-4 hover:bg-muted/50 transition-colors space-y-1.5">
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="font-semibold min-w-0 truncate">
                      <span className="text-cyan-500 text-xs mr-1.5">問題{m.n}</span>
                      {m.jp}
                    </p>
                    <span className="text-xs text-muted-foreground flex-shrink-0">{s.total} soal</span>
                  </div>
                  <AccuracyBar value={pct(s)} />
                  {t !== null && (
                    <p className={`text-xs ${slow ? "text-amber-600 dark:text-amber-400" : "text-muted-foreground"}`}>
                      ⏱ rata-rata {formatDuration(t)} / target {formatDuration(m.targetSec)} per {m.passage ? "teks" : "soal"}
                      {slow ? " · terlalu lambat" : " ✓"}
                    </p>
                  )}
                </button>
              );
            })}
          </Card>
        </section>
      ))}

      <p className="text-xs text-muted-foreground">
        Akurasi dihitung dari Ujian Lengkap dan Latihan per Mondai. Waktu rata-rata hanya dari latihan dengan timer aktif.
      </p>
    </div>
  );
}
