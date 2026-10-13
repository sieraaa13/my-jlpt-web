"use client";

import { useCallback, useEffect, useState } from "react";
import { ExamSelector } from "@/components/exam-selector";
import { N1MondaiPicker, PracticeSetup } from "@/components/n1-mondai-practice";
import { N1MondaiStats } from "@/components/n1-mondai-stats";
import { N1PracticeSession } from "@/components/n1-practice-session";
import { useAuth } from "@/components/auth-context";
import { getMondai } from "@/lib/n1-mondai";
import { EMPTY_PROGRESS, N1Progress, loadN1Progress } from "@/lib/n1-progress";

type Mode = "exam" | "practice" | "stats";

const MODES: { id: Mode; icon: string; label: string; short: string }[] = [
  { id: "exam", icon: "📝", label: "Ujian Lengkap", short: "Ujian" },
  { id: "practice", icon: "🎯", label: "Latihan per Mondai", short: "Latihan" },
  { id: "stats", icon: "📊", label: "Statistik", short: "Statistik" },
];

// Tab "Soal" halaman N1: ujian lengkap, latihan per tipe soal, dan statistik
export function N1SoalTab() {
  const { user } = useAuth();
  const [mode, setMode] = useState<Mode>("exam");
  const [progress, setProgress] = useState<N1Progress>(EMPTY_PROGRESS);
  const [loading, setLoading] = useState(false);
  const [setupFor, setSetupFor] = useState<number | null>(null);
  const [session, setSession] = useState<(PracticeSetup & { id: number }) | null>(null);

  const reload = useCallback(async () => {
    if (!user) return setProgress(EMPTY_PROGRESS);
    setLoading(true);
    try {
      setProgress(await loadN1Progress(user.id));
    } catch (e) {
      console.error("Gagal memuat progres N1:", e);
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Muat ulang tiap pindah ke Latihan/Statistik, supaya hasil ujian lengkap
  // yang baru selesai ikut terhitung
  useEffect(() => {
    if (mode !== "exam") reload();
  }, [mode, reload]);

  const startSession = (s: PracticeSetup) => setSession({ ...s, id: Date.now() });

  if (session) {
    return (
      <N1PracticeSession
        key={session.id}
        mondai={getMondai(session.mondai)}
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

      {mode === "exam" && <ExamSelector level="n1" embedded />}
      {mode === "practice" && (
        <N1MondaiPicker progress={progress} loggedIn={!!user} setupFor={setupFor} setSetupFor={setSetupFor} onStart={startSession} />
      )}
      {mode === "stats" && (
        <N1MondaiStats
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
