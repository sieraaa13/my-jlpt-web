"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { GROUPS, Level, MondaiInfo, PracticeUnit, getCatalog, getMondaiList } from "@/lib/mondai";
import { Progress, formatDuration, pct, scoreByMondai } from "@/lib/practice-progress";

export interface PracticeSetup {
  mondai: number;
  units: PracticeUnit[];
  timer: boolean;
}

type Filter = "all" | "new" | "wrong";
type Order = "random" | "old";

const unitStatus = (u: PracticeUnit, last: Record<string, boolean>) => {
  const seen = u.questions.filter((q) => q.key in last);
  return { done: seen.length > 0, wrong: seen.some((q) => last[q.key] === false) };
};

const shuffle = <T,>(arr: T[]) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

/* ── DAFTAR MONDAI ──────────────────────────────────────────── */
export function MondaiPicker({
  level, progress, loggedIn, setupFor, setSetupFor, onStart,
}: {
  level: Level;
  progress: Progress;
  loggedIn: boolean;
  setupFor: number | null;
  setSetupFor: (n: number | null) => void;
  onStart: (s: PracticeSetup) => void;
}) {
  const catalog = getCatalog(level);
  const MONDAI = getMondaiList(level);
  const scores = useMemo(() => scoreByMondai(progress), [progress]);
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  return (
    <div className="space-y-8">
      <p className="text-muted-foreground max-w-2xl">
        Latih satu tipe soal sekaligus dari semua ujian {catalog.periods[0].slice(0, 4)}–{catalog.periods[catalog.periods.length - 1].slice(0, 4)}. Pilih tipe yang ingin dilatih.
        {!loggedIn && " Login supaya akurasi dan soal yang salah tercatat."}
      </p>

      {GROUPS.map((g) => {
        const list = MONDAI.filter((m) => m.group === g.id);
        const isCollapsed = collapsed[g.id];
        return (
          <section key={g.id}>
            <button
              onClick={() => setCollapsed((p) => ({ ...p, [g.id]: !p[g.id] }))}
              className="w-full flex items-center justify-between mb-3 text-left"
              aria-expanded={!isCollapsed}
            >
              <h3 className="text-lg sm:text-xl font-bold">
                {g.jp} <span className="text-muted-foreground font-medium text-base">({g.name})</span>
              </h3>
              <span className="text-muted-foreground text-sm">{isCollapsed ? "▼" : "▲"}</span>
            </button>
            {!isCollapsed && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {list.map((m) => {
                  const units = catalog.units[m.n];
                  const qCount = units.reduce((s, u) => s + u.questions.length, 0);
                  const done = units.filter((u) => unitStatus(u, progress.lastByKey).done).length;
                  const p = pct(scores[m.n]);
                  const weak = p !== null && scores[m.n].total >= 5 && p < 60;
                  return (
                    <Card
                      key={m.n}
                      role="button"
                      tabIndex={0}
                      onClick={() => setSetupFor(m.n)}
                      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSetupFor(m.n)}
                      className="p-4 border-2 rounded-xl cursor-pointer hover:border-cyan-500/60 transition-colors gap-2"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-cyan-500">{m.label}</p>
                          <p className="font-bold truncate">{m.jp}</p>
                          <p className="text-sm text-muted-foreground truncate">{m.name}</p>
                        </div>
                        {weak && <span className="text-xs font-semibold text-red-500 bg-red-500/10 rounded-full px-2 py-0.5 flex-shrink-0">⚠ lemah</span>}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {m.passage ? `${units.length} teks · ${qCount} soal` : `${qCount} soal`}
                        {loggedIn && ` · ${done} ${m.passage ? "teks" : "soal"} dikerjakan`}
                      </p>
                      {loggedIn && <AccuracyBar value={p} />}
                    </Card>
                  );
                })}
              </div>
            )}
          </section>
        );
      })}

      {setupFor !== null && (
        <SetupDialog
          key={setupFor}
          level={level}
          mondai={MONDAI.find((m) => m.n === setupFor)!}
          progress={progress}
          loggedIn={loggedIn}
          onClose={() => setSetupFor(null)}
          onStart={(s) => {
            setSetupFor(null);
            onStart(s);
          }}
        />
      )}
    </div>
  );
}

export function AccuracyBar({ value }: { value: number | null }) {
  if (value === null) return <p className="text-xs text-muted-foreground italic">Belum dicoba</p>;
  const color = value >= 70 ? "bg-green-500" : value >= 60 ? "bg-amber-500" : "bg-red-500";
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
      </div>
      <span className="text-xs font-semibold w-9 text-right">{value}%</span>
    </div>
  );
}

/* ── PENGATURAN SEBELUM MULAI ───────────────────────────────── */
function SetupDialog({
  level, mondai, progress, loggedIn, onClose, onStart,
}: {
  level: Level;
  mondai: MondaiInfo;
  progress: Progress;
  loggedIn: boolean;
  onClose: () => void;
  onStart: (s: PracticeSetup) => void;
}) {
  const catalog = getCatalog(level);
  const years = useMemo(() => Array.from(new Set(catalog.periods.map((p) => p.slice(0, 4)))), [catalog]);
  const [count, setCount] = useState(mondai.counts[0]);
  const [from, setFrom] = useState(years[0]);
  const [to, setTo] = useState(years[years.length - 1]);
  const [order, setOrder] = useState<Order>("random");
  const [filter, setFilter] = useState<Filter>("all");
  const [timer, setTimer] = useState(true);

  const unitWord = mondai.passage ? "teks" : "soal";
  const inRange = catalog.units[mondai.n].filter((u) => {
    const y = u.period.slice(0, 4);
    return y >= from && y <= to;
  });
  const counts = {
    all: inRange.length,
    new: inRange.filter((u) => !unitStatus(u, progress.lastByKey).done).length,
    wrong: inRange.filter((u) => unitStatus(u, progress.lastByKey).wrong).length,
  };
  const pool = inRange.filter((u) => {
    const s = unitStatus(u, progress.lastByKey);
    return filter === "all" ? true : filter === "new" ? !s.done : s.wrong;
  });

  const start = () => {
    const ordered = order === "random" ? shuffle(pool) : pool;
    onStart({ mondai: mondai.n, units: ordered.slice(0, count), timer });
  };

  return (
    <Dialog open onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-h-[90vh] overflow-y-auto p-5 sm:p-6">
        <DialogHeader className="text-left">
          <DialogTitle>
            {mondai.label} <span className="text-cyan-500">{mondai.jp}</span>
          </DialogTitle>
          <DialogDescription>{mondai.name} · 💡 {mondai.tip}</DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          <Field label="Jumlah">
            <Segmented
              value={String(count)}
              onChange={(v) => setCount(Number(v))}
              options={mondai.counts.map((c) => ({ value: String(c), label: `${c} ${unitWord}` }))}
            />
          </Field>

          <Field label="Tahun">
            <div className="flex items-center gap-2">
              <YearSelect value={from} years={years} onChange={(v) => { setFrom(v); if (v > to) setTo(v); }} />
              <span className="text-muted-foreground">–</span>
              <YearSelect value={to} years={years} onChange={(v) => { setTo(v); if (v < from) setFrom(v); }} />
            </div>
          </Field>

          <Field label="Urutan">
            <Segmented value={order} onChange={(v) => setOrder(v as Order)} options={[{ value: "random", label: "Acak" }, { value: "old", label: "Lama → Baru" }]} />
          </Field>

          <Field label="Soal">
            <Segmented
              value={filter}
              onChange={(v) => setFilter(v as Filter)}
              options={[
                { value: "all", label: `Semua (${counts.all})` },
                { value: "new", label: `Belum dikerjakan (${counts.new})`, disabled: !loggedIn },
                { value: "wrong", label: `Masih salah (${counts.wrong})`, disabled: !loggedIn },
              ]}
            />
            {!loggedIn && <p className="text-xs text-muted-foreground mt-1.5">Login untuk memakai filter ini.</p>}
          </Field>

          <label className="flex items-center justify-between gap-3 cursor-pointer">
            <span>
              <span className="block text-sm font-semibold">Timer</span>
              <span className="block text-xs text-muted-foreground">Target {formatDuration(mondai.targetSec)} per {unitWord}</span>
            </span>
            <Switch checked={timer} onCheckedChange={setTimer} />
          </label>

          <Button
            onClick={start}
            disabled={pool.length === 0}
            className="w-full py-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold disabled:opacity-50"
          >
            {pool.length === 0 ? `Tidak ada ${unitWord} yang cocok` : `Mulai Latihan (${Math.min(count, pool.length)} ${unitWord})`}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-sm font-semibold mb-2">{label}</p>
      {children}
    </div>
  );
}

function Segmented({
  value, onChange, options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string; disabled?: boolean }[];
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          disabled={o.disabled}
          onClick={() => onChange(o.value)}
          className={`px-3 py-2 rounded-lg border-2 text-sm font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${
            value === o.value ? "bg-cyan-500/15 border-cyan-500 text-cyan-700 dark:text-cyan-300" : "border-border hover:border-cyan-400/50"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function YearSelect({ value, years, onChange }: { value: string; years: string[]; onChange: (v: string) => void }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="flex-1 h-10 rounded-lg border-2 border-border bg-background px-3 text-sm font-medium"
    >
      {years.map((y) => (
        <option key={y} value={y}>{y}</option>
      ))}
    </select>
  );
}
