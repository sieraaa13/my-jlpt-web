"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AskButton } from "@/components/ask-siera-button";
import { renderUnderlined } from "@/components/exam-questions";
import { useAuth } from "@/components/auth-context";
import { useExamContext } from "@/components/exam-context";
import { MondaiInfo, PracticeQuestion, PracticeUnit, periodLabel } from "@/lib/n1-mondai";
import { PracticeItem, formatDuration, savePracticeSession } from "@/lib/n1-progress";
import { lookupYouhouWord } from "@/data/n1/youhou-words";

interface Props {
  mondai: MondaiInfo;
  units: PracticeUnit[];
  timer: boolean;
  onExit: () => void;
  onAgain: () => void;
  onRetry: (units: PracticeUnit[]) => void;
  onSaved: () => void;
}

type SaveState = "idle" | "saving" | "saved" | "error";

export function N1PracticeSession({ mondai, units, timer, onExit, onAgain, onRetry, onSaved }: Props) {
  const { user } = useAuth();
  const { openChatWith } = useExamContext();

  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [durations, setDurations] = useState<Record<string, number>>({});
  const [finished, setFinished] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const unitStart = useRef(Date.now());
  const rootRef = useRef<HTMLDivElement>(null);
  const [, setTick] = useState(0);

  const unit = units[idx];
  const isChecked = !!checked[unit?.id];
  const underline = mondai.n === 1 || mondai.n === 3;

  // Lepas fokus chat saat keluar dari latihan
  useEffect(() => () => openChatWith(null), []);

  // Timer berjalan selama unit belum dicek
  useEffect(() => {
    if (!timer || finished || isChecked) return;
    const id = setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, [timer, finished, isChecked, idx]);

  useEffect(() => {
    unitStart.current = Date.now();
    setPanelOpen(false);
  }, [idx]);

  // Gulir ke awal sesi (di bawah navbar) tiap ganti teks/soal dan saat ringkasan
  useEffect(() => {
    const el = rootRef.current;
    if (el) window.scrollTo({ top: Math.max(0, el.getBoundingClientRect().top + window.scrollY - 80) });
  }, [idx, finished]);

  const elapsedNow = () => Math.round((Date.now() - unitStart.current) / 1000);

  const checkUnit = (u: PracticeUnit) => {
    setChecked((p) => ({ ...p, [u.id]: true }));
    setDurations((p) => ({ ...p, [u.id]: elapsedNow() }));
  };

  const answer = (q: PracticeQuestion, o: number) => {
    if (isChecked) return;
    setAnswers((p) => ({ ...p, [q.key]: o }));
    // Soal pendek: langsung dinilai begitu dijawab
    if (!mondai.passage) checkUnit(unit);
  };

  const next = () => (idx + 1 < units.length ? setIdx(idx + 1) : setFinished(true));

  const doneUnits = units.filter((u) => checked[u.id]);
  const items: PracticeItem[] = doneUnits.flatMap((u) =>
    u.questions.map((q) => {
      const a = answers[q.key] ?? -1;
      return { k: q.key, a, c: a === q.correct };
    })
  );
  const correctCount = items.filter((i) => i.c).length;
  const totalSec = doneUnits.reduce((s, u) => s + (durations[u.id] ?? 0), 0);
  const targetSec = doneUnits.length * mondai.targetSec;

  const endEarly = () => (doneUnits.length === 0 ? onExit() : setFinished(true));

  // Simpan sekali saat sesi selesai
  useEffect(() => {
    if (!finished || !user || items.length === 0 || saveState !== "idle") return;
    setSaveState("saving");
    savePracticeSession({
      userId: user.id,
      mondai: mondai.n,
      units: doneUnits.length,
      durationSec: timer ? totalSec : null,
      targetSec,
      items,
    }).then((ok) => {
      setSaveState(ok ? "saved" : "error");
      if (ok) onSaved();
    });
  }, [finished]);

  const askAbout = (u: PracticeUnit, q: PracticeQuestion) => {
    const ua = answers[q.key];
    const label = `問題${mondai.n} ${mondai.jp} — ${periodLabel(u.period)}`;
    const lines = [`Bagian: ${label}${u.title ? ` — ${u.title}` : ""}`];
    const passage = u.textA ? `【A】\n${u.textA}\n\n【B】\n${u.textB}` : u.text;
    if (passage) lines.push(`[Bacaan/Teks]\n${passage.slice(0, 1500)}`);
    lines.push(`Soal: ${q.q}`);
    lines.push(`Pilihan: ${q.options.map((o, i) => `${i + 1}. ${o}`).join(" / ")}`);
    lines.push(`Jawaban user: ${ua !== undefined ? `${ua + 1}. ${q.options[ua]}` : "tidak dijawab"}`);
    lines.push(`Jawaban benar: ${q.correct + 1}. ${q.options[q.correct]}`);
    openChatWith({ label, detail: lines.join("\n") });
  };

  // ── RINGKASAN ──────────────────────────────────────────────
  if (finished) {
    const percent = items.length ? Math.round((correctCount / items.length) * 100) : 0;
    const wrongUnits = doneUnits.filter((u) => u.questions.some((q) => answers[q.key] !== q.correct));
    return (
      <div ref={rootRef} className="max-w-2xl mx-auto space-y-4">
        <Card className="gap-0 p-5 sm:p-8 border-2 rounded-2xl text-center space-y-3">
          <p className="text-sm font-semibold text-cyan-500">問題{mondai.n} {mondai.jp}</p>
          <h2 className="text-2xl sm:text-3xl font-bold">Latihan Selesai</h2>
          <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">{percent}%</div>
          <p className="text-muted-foreground">{correctCount} dari {items.length} soal benar</p>
          {timer && (
            <p className={`text-sm font-medium ${totalSec > targetSec ? "text-amber-600 dark:text-amber-400" : "text-green-600 dark:text-green-400"}`}>
              ⏱ {formatDuration(totalSec)} / target {formatDuration(targetSec)} {totalSec > targetSec ? "· terlalu lambat" : "· sesuai target"}
            </p>
          )}
          {user && saveState === "saving" && <p className="text-xs text-muted-foreground italic">💾 Menyimpan hasil...</p>}
          {user && saveState === "saved" && <p className="text-xs text-green-500 font-medium">✓ Hasil tersimpan ke statistik</p>}
          {user && saveState === "error" && <p className="text-xs text-red-500 font-medium">Hasil latihan belum bisa disimpan. Coba lagi nanti.</p>}
          {!user && <p className="text-xs text-amber-500 font-medium">💡 Login supaya hasil latihan masuk ke statistik</p>}
        </Card>

        <Card className="gap-0 p-4 sm:p-5 border-2 rounded-2xl">
          <h3 className="font-bold mb-3">Rincian</h3>
          <ul className="divide-y divide-border">
            {doneUnits.map((u) => {
              const c = u.questions.filter((q) => answers[q.key] === q.correct).length;
              const allRight = c === u.questions.length;
              return (
                <li key={u.id} className="py-2.5 flex items-center gap-3 text-sm">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 ${allRight ? "bg-green-500" : "bg-red-500"}`}>{allRight ? "✓" : "✗"}</span>
                  <span className="flex-1 min-w-0 truncate">{periodLabel(u.period)} · {u.title ?? u.questions[0].q}</span>
                  <span className="text-muted-foreground flex-shrink-0">{c}/{u.questions.length}</span>
                </li>
              );
            })}
          </ul>
        </Card>

        <div className="flex flex-col sm:flex-row gap-3">
          {wrongUnits.length > 0 && (
            <Button onClick={() => onRetry(wrongUnits)} className="flex-1 py-5 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold">
              🔄 Ulangi yang salah ({wrongUnits.length})
            </Button>
          )}
          <Button onClick={onAgain} className="flex-1 py-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold">
            Latihan lagi
          </Button>
          <Button onClick={onExit} variant="outline" className="flex-1 py-5 rounded-xl font-semibold">
            Pilih mondai lain
          </Button>
        </div>
      </div>
    );
  }

  // ── HEADER ─────────────────────────────────────────────────
  const unitWord = mondai.passage ? "Teks" : "Soal";
  // Mondai pendek: timer seluruh sesi; mondai bacaan: timer per teks
  const shownSec = mondai.passage
    ? isChecked ? durations[unit.id] : elapsedNow()
    : totalSec + (isChecked ? 0 : elapsedNow());
  const shownTarget = mondai.passage ? mondai.targetSec : units.length * mondai.targetSec;
  const timerColor =
    shownSec > shownTarget * 1.5 ? "text-red-500" : shownSec > shownTarget ? "text-amber-500" : "text-muted-foreground";

  const header = (
    <div className="sticky top-16 z-30 -mx-6 px-6 py-3 mb-4 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center gap-3">
        <button onClick={endEarly} className="text-sm font-medium px-2 py-1.5 -ml-2 rounded-lg hover:bg-muted text-muted-foreground flex-shrink-0">
          ✕ <span className="hidden sm:inline">Akhiri</span>
        </button>
        <div className="flex-1 min-w-0">
          <p className="text-sm sm:text-base font-bold truncate">
            問題{mondai.n} <span className="text-cyan-500">{mondai.jp}</span>
          </p>
          <p className="text-xs text-muted-foreground">
            {unitWord} {idx + 1}/{units.length} · {periodLabel(unit.period)}
          </p>
        </div>
        {timer && (
          <span className={`font-mono text-sm font-semibold flex-shrink-0 ${timerColor}`} title="Waktu / target">
            ⏱ {formatDuration(shownSec)}<span className="text-muted-foreground font-normal">/{formatDuration(shownTarget)}</span>
          </span>
        )}
      </div>
      <div className="mt-2 w-full rounded-full h-1 overflow-hidden bg-muted">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full transition-all" style={{ width: `${((idx + (isChecked ? 1 : 0)) / units.length) * 100}%` }} />
      </div>
    </div>
  );

  const nextLabel = idx + 1 < units.length ? `${unitWord} berikutnya →` : "Lihat ringkasan";

  // ── MONDAI 1-6: SATU SOAL PER LAYAR ─────────────────────────
  if (!mondai.passage) {
    const q = unit.questions[0];
    return (
      <div ref={rootRef}>
        {header}
        <div className="max-w-2xl mx-auto">
          <QuestionBlock q={q} userAnswer={answers[q.key]} checked={isChecked} underline={underline} youhou={mondai.n === 4} onAnswer={(o) => answer(q, o)} onAsk={() => askAbout(unit, q)} />
          {isChecked && (
            <Button onClick={next} className="w-full mt-4 py-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold">
              {nextLabel}
            </Button>
          )}
          {!isChecked && <p className="mt-4 text-xs text-center text-muted-foreground">💡 {mondai.tip}</p>}
        </div>
      </div>
    );
  }

  // ── MONDAI 7-13: TEKS + SOAL ────────────────────────────────
  const answeredInUnit = unit.questions.filter((q) => answers[q.key] !== undefined).length;
  const correctInUnit = unit.questions.filter((q) => answers[q.key] === q.correct).length;

  const questions = (
    <div className="space-y-4">
      {unit.questions.map((q) => (
        <QuestionBlock key={q.key} q={q} userAnswer={answers[q.key]} checked={isChecked} onAnswer={(o) => answer(q, o)} onAsk={() => askAbout(unit, q)} />
      ))}
      {!isChecked ? (
        <Button
          onClick={() => checkUnit(unit)}
          disabled={answeredInUnit === 0}
          className="w-full py-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold disabled:opacity-50"
        >
          {answeredInUnit === unit.questions.length ? "✓ Cek Jawaban" : `Cek Jawaban (${answeredInUnit}/${unit.questions.length})`}
        </Button>
      ) : (
        <div className="space-y-3">
          <p className="text-center font-semibold">{correctInUnit}/{unit.questions.length} benar</p>
          <Button onClick={next} className="w-full py-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold">
            {nextLabel}
          </Button>
        </div>
      )}
    </div>
  );

  return (
    <div ref={rootRef} className="pb-24 lg:pb-0">
      {header}
      <div className="lg:grid lg:grid-cols-2 lg:gap-6 lg:items-start">
        {/* Teks bacaan: di desktop menempel & scroll sendiri */}
        <div key={unit.id} className="lg:sticky lg:top-40 lg:max-h-[calc(100vh-11rem)] lg:overflow-y-auto lg:pr-2 space-y-3">
          {unit.title && <h3 className="text-base sm:text-lg font-bold text-cyan-500">{unit.title}</h3>}
          {unit.textA ? (
            <>
              <Passage label="A" text={unit.textA} />
              <Passage label="B" text={unit.textB ?? ""} />
            </>
          ) : (
            <Passage text={unit.text ?? ""} />
          )}
          <p className="text-xs text-muted-foreground">💡 {mondai.tip}</p>
        </div>

        <div className="hidden lg:block">{questions}</div>
      </div>

      {/* HP: panel soal dari bawah, teks tetap terlihat di atasnya */}
      <div className="lg:hidden fixed inset-x-0 bottom-0 z-40">
        {panelOpen ? (
          <div className="bg-background border-t-2 border-border rounded-t-2xl shadow-2xl max-h-[62vh] flex flex-col">
            <button onClick={() => setPanelOpen(false)} className="flex items-center justify-between px-4 py-3 border-b border-border text-sm font-semibold">
              <span>📝 Soal · {isChecked ? `${correctInUnit}/${unit.questions.length} benar` : `${answeredInUnit}/${unit.questions.length} terjawab`}</span>
              <span className="text-muted-foreground">Tutup ▼</span>
            </button>
            <div className="overflow-y-auto px-4 pt-4 pb-24">{questions}</div>
          </div>
        ) : (
          <div className="p-3 pr-24">
            <button
              onClick={() => setPanelOpen(true)}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg text-sm"
            >
              📝 {isChecked ? `Lihat hasil (${correctInUnit}/${unit.questions.length})` : `Lihat Soal (${answeredInUnit}/${unit.questions.length})`} ▲
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Passage({ text, label }: { text: string; label?: string }) {
  return (
    <Card className="gap-0 border-2 rounded-xl p-4 sm:p-6 bg-card border-border">
      {label && <p className="text-sm font-bold text-cyan-500 mb-2">【{label}】</p>}
      <p className="whitespace-pre-wrap text-[15px] sm:text-base leading-loose break-words text-foreground">{text}</p>
    </Card>
  );
}

function QuestionBlock({
  q, userAnswer, checked, underline, youhou, onAnswer, onAsk,
}: {
  q: PracticeQuestion; userAnswer?: number; checked: boolean; underline?: boolean; youhou?: boolean; onAnswer: (o: number) => void; onAsk: () => void;
}) {
  const isCorrect = userAnswer === q.correct;
  // 問題4 用法: cara baca tampil sejak awal, arti setelah dijawab
  const word = youhou ? lookupYouhouWord(q.q) : null;
  return (
    <Card className={`gap-0 p-4 sm:p-5 border-2 rounded-xl ${checked ? (isCorrect ? "bg-green-500/10 border-green-500/50" : "bg-red-500/10 border-red-500/50") : "bg-card border-border"}`}>
      {word ? (
        <div className="mb-4">
          <p className="font-semibold text-base sm:text-lg leading-relaxed break-words">
            {q.q.match(/^\d+\./)?.[0]} <span className="text-xl sm:text-2xl">{word.word}</span>
            {word.r && <span className="ml-2 text-sm sm:text-base font-medium text-cyan-600 dark:text-cyan-400">（{word.r}）</span>}
          </p>
          {checked && <p className="mt-1 text-sm text-muted-foreground">📖 {word.m}</p>}
        </div>
      ) : (
        <p className="font-semibold text-base sm:text-lg leading-relaxed mb-4 break-words whitespace-pre-wrap">{underline ? renderUnderlined(q.q) : q.q}</p>
      )}
      <div className="space-y-2">
        {q.options.map((opt, oi) => {
          const selected = userAnswer === oi;
          const style = checked
            ? oi === q.correct
              ? "bg-green-500/20 border-green-500"
              : selected
                ? "bg-red-500/20 border-red-500"
                : "bg-muted border-border opacity-70"
            : selected
              ? "bg-cyan-500/20 text-cyan-700 border-cyan-500 dark:text-cyan-300"
              : "bg-background border-border hover:border-cyan-400/50";
          const dot = checked
            ? oi === q.correct
              ? "bg-green-500 text-white border-green-500"
              : selected
                ? "bg-red-500 text-white border-red-500"
                : "border-muted-foreground text-muted-foreground"
            : selected
              ? "bg-cyan-500 text-white border-cyan-500"
              : "border-muted-foreground text-muted-foreground";
          return (
            <button
              key={oi}
              type="button"
              disabled={checked}
              onClick={() => onAnswer(oi)}
              className={`w-full text-left min-h-12 py-3 px-3 sm:px-4 rounded-lg border-2 text-sm sm:text-base font-medium flex items-start gap-3 transition-all ${style}`}
            >
              <span className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 ${dot}`}>
                {checked && oi === q.correct ? "✓" : oi + 1}
              </span>
              <span className="flex-1 break-words leading-relaxed pt-0.5">{opt}</span>
            </button>
          );
        })}
      </div>
      {checked && (
        <div className="mt-3 space-y-3">
          <p className={`text-sm font-semibold ${isCorrect ? "text-green-500" : "text-red-500"}`}>
            {isCorrect ? "✓ Benar!" : userAnswer === undefined ? `Tidak dijawab. Jawaban benar: ${q.correct + 1}` : `✗ Salah. Jawaban benar: ${q.correct + 1}`}
          </p>
          <AskButton onClick={onAsk} />
        </div>
      )}
    </Card>
  );
}
