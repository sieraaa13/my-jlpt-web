"use client";

import { useCallback, useEffect, useState } from "react";
import { ExamSelector } from "@/components/exam-selector";
import { MondaiPicker, PracticeSetup } from "@/components/mondai-practice";
import { MondaiStats } from "@/components/mondai-stats";
import { PracticeSession } from "@/components/practice-session";
import { useAuth } from "@/components/auth-context";
import { Level, getMondai } from "@/lib/mondai";
import { Progress, emptyProgress, loadProgress } from "@/lib/practice-progress";

type Mode = "exam" | "practice" | "stats";

const MODES: { id: Mode; icon: string; label: string; short: string }[] = [
  { id: "exam", icon: "📝", label: "Ujian Lengkap", short: "Ujian" },
  { id: "practice", icon: "🎯", label: "Latihan per Mondai", short: "Latihan" },
  { id: "stats", icon: "📊", label: "Statistik", short: "Statistik" },
];

// Tab "Soal" halaman level: ujian lengkap, latihan per tipe soal, dan statistik
export function SoalTab({ level }: { level: Level }) {
  const { user } = useAuth();
  const [mode, setMode] = useState<Mode>("exam");
  const [progress, setProgress] = useState<Progress>(() => emptyProgress(level));
  const [loading, setLoading] = useState(false);
  const [setupFor, setSetupFor] = useState<number | null>(null);
  const [session, setSession] = useState<(PracticeSetup & { id: number }) | null>(null);

  const reload = useCallback(async () => {
    if (!user) return setProgress(emptyProgress(level));
    setLoading(true);
    try {
      setProgress(await loadProgress(level, user.id));
    } catch (e) {
      console.error(`Gagal memuat progres ${level.toUpperCase()}:`, e);
    } finally {
      setLoading(false);
    }
  }, [user, level]);

  // Muat ulang tiap pindah ke Latihan/Statistik, supaya hasil ujian lengkap
  // yang baru selesai ikut terhitung
  useEffect(() => {
    if (mode !== "exam") reload();
  }, [mode, reload]);

  const startSession = (s: PracticeSetup) => setSession({ ...s, id: Date.now() });

  if (session) {
    return (
      <PracticeSession
        key={session.id}
        level={level}
        mondai={getMondai(level, session.mondai)}
        units={session.units}
        timer={session.timer}
        onSaved={reload}
        onExit={() => setSession(null)}
        onAgain={() => {
          setSession(null);
          setSetupFor(session.mondai);
        }}
        onRetry={(units) => startSession({ ...session, units })}
      />
    );
  }

  return (
    <div>
      <div className="grid grid-cols-3 sm:inline-grid gap-1 p-1 mb-8 rounded-xl border-2 border-border bg-muted w-full sm:w-auto">
        {MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => setMode(m.id)}
            className={`px-2 sm:px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
              mode === m.id ? "bg-background text-cyan-600 dark:text-cyan-400 shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span className="mr-1">{m.icon}</span>
            <span className="sm:hidden">{m.short}</span>
            <span className="hidden sm:inline">{m.label}</span>
          </button>
        ))}
      </div>

      {mode === "exam" && <ExamSelector level={level} embedded />}
      {mode === "practice" && (
        <MondaiPicker level={level} progress={progress} loggedIn={!!user} setupFor={setupFor} setSetupFor={setSetupFor} onStart={startSession} />
      )}
      {mode === "stats" && (
        <MondaiStats
          level={level}
          progress={progress}
          loading={loading}
          loggedIn={!!user}
          onPractice={(n) => {
            setMode("practice");
            setSetupFor(n);
          }}
        />
      )}
    </div>
  );
}
