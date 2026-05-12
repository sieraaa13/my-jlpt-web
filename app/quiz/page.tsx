"use client";

import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/auth-context";
import {
  getDailyState,
  saveDailyState,
  recordAnswer,
  changeTopic,
  changeLevel,
  isQuotaFull,
  isTopicLocked,
  getTimeUntilReset,
} from "@/lib/quiz-store";
import { generateQuizQuestions, getImageUrl } from "@/lib/quiz-ai";
import { QUIZ_LEVELS, QUIZ_TOPICS, MAX_QUESTIONS_PER_DAY, MAX_TOPIC_CHANGES_PER_DAY } from "@/lib/quiz-config";
import type { QuizQuestion, QuizDailyState } from "@/types/quiz";

export default function QuizPage() {
  const { user } = useAuth();

  const [state, setState] = useState<QuizDailyState>({
    date: new Date().toISOString().slice(0, 10),
    qUsed: 0,
    tUsed: 0,
    pts: 0,
    streak: 0,
    topicId: "budaya",
    lvl: 1,
  });

  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [curQ, setCurQ] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [phase, setPhase] = useState<"home" | "loading" | "quiz" | "result" | "done">("home");
  const [imgLoaded, setImgLoaded] = useState(false);
  const [floatPts, setFloatPts] = useState<number | null>(null);
  const [resetTime, setResetTime] = useState("");

  // Load state dari Supabase
  useEffect(() => {
    if (!user) return;
    getDailyState(user.id).then((s) => {
      setState(s);
      if (isQuotaFull(s)) setPhase("done");
    });
  }, [user]);

  // Update countdown timer
  useEffect(() => {
    setResetTime(getTimeUntilReset());
    const interval = setInterval(() => setResetTime(getTimeUntilReset()), 60000);
    return () => clearInterval(interval);
  }, []);

  const lvl = QUIZ_LEVELS[state.lvl];
  const topic = QUIZ_TOPICS.find((t) => t.id === state.topicId)!;

  // ── START QUIZ ──────────────────────────────────────────────
  async function startQuiz() {
    if (!user) return;
    setPhase("loading");
    setQuestions([]);
    setCurQ(0);
    setAnswered(false);
    setSelectedOpt(null);

    try {
      const remaining = MAX_QUESTIONS_PER_DAY - state.qUsed;
      const n = Math.min(remaining, 5);
      const qs = await generateQuizQuestions(state.lvl, state.topicId, n);
      setQuestions(qs);
      setPhase("quiz");
      setImgLoaded(false);
    } catch (e) {
      console.error(e);
      setPhase("home");
      alert("Gagal memuat soal. Coba lagi.");
    }
  }

  // ── CHOOSE ANSWER ───────────────────────────────────────────
  async function choose(optIdx: number) {
    if (!user || answered) return;
    setAnswered(true);
    setSelectedOpt(optIdx);

    const q = questions[curQ];
    const correct = optIdx === q.ans;
    const bonus = correct && state.streak >= 2 ? lvl.ptStreak : 0;
    const pts = correct ? lvl.ptCorrect + bonus : 0;

    if (pts > 0) {
      setFloatPts(pts);
      setTimeout(() => setFloatPts(null), 900);
    }

    const newState = await recordAnswer(user.id, state, correct, pts);
    setState(newState);
  }

  // ── NEXT QUESTION ───────────────────────────────────────────
  function nextQ() {
    if (isQuotaFull(state)) {
      setPhase("done");
      return;
    }
    if (curQ + 1 >= questions.length) {
      setPhase("result");
      return;
    }
    setCurQ((c) => c + 1);
    setAnswered(false);
    setSelectedOpt(null);
    setImgLoaded(false);
  }

  // ── CHANGE TOPIC ────────────────────────────────────────────
  async function handleChangeTopic(topicId: string) {
    if (!user || topicId === state.topicId || isTopicLocked(state)) return;
    const newState = await changeTopic(user.id, state, topicId);
    if (newState) {
      setState(newState);
      setPhase("home");
    }
  }

  // ── CHANGE LEVEL ────────────────────────────────────────────
  async function handleChangeLevel(lvlIdx: number) {
    if (!user || lvlIdx === state.lvl) return;
    const newState = await changeLevel(user.id, state, lvlIdx);
    setState(newState);
  }

  // ── CURRENT QUESTION ────────────────────────────────────────
  const q = questions[curQ];
  const qGlobal = state.qUsed - questions.length + curQ + 1;

  // ────────────────────────────────────────────────────────────
  // RENDER
  // ────────────────────────────────────────────────────────────
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-20 max-w-2xl mx-auto px-4">

        {/* ── HEADER ── */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Quiz Harian Jepang</h1>
          <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
            ✦ Claude AI
          </span>
        </div>

        {/* ── DAILY QUOTA ── */}
        <Card className="p-4 mb-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-muted rounded-lg p-3">
              <p className="text-xs text-muted-foreground mb-1">Soal hari ini</p>
              <p className="text-sm font-medium mb-2">{state.qUsed} / {MAX_QUESTIONS_PER_DAY} soal</p>
              <div className="h-1.5 bg-background rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${(state.qUsed / MAX_QUESTIONS_PER_DAY) * 100}%`,
                    background: state.qUsed >= MAX_QUESTIONS_PER_DAY ? "#E24B4A" : lvl.color,
                  }}
                />
              </div>
            </div>
            <div className="bg-muted rounded-lg p-3">
              <p className="text-xs text-muted-foreground mb-1">Ganti topik</p>
              <p className="text-sm font-medium mb-2">{state.tUsed} / {MAX_TOPIC_CHANGES_PER_DAY} kali</p>
              <div className="h-1.5 bg-background rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${(state.tUsed / MAX_TOPIC_CHANGES_PER_DAY) * 100}%`,
                    background: state.tUsed >= MAX_TOPIC_CHANGES_PER_DAY ? "#E24B4A" : "#1D9E75",
                  }}
                />
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground text-right mt-2">Reset dalam {resetTime}</p>
        </Card>

        {/* ── LEVEL SELECTOR ── */}
        <div className="flex gap-2 flex-wrap mb-2">
          {QUIZ_LEVELS.map((l, i) => (
            <button
              key={l.name}
              onClick={() => handleChangeLevel(i)}
              className="px-4 py-1.5 rounded-full text-sm font-medium border transition-all"
              style={
                i === state.lvl
                  ? { background: l.color, color: "#fff", borderColor: l.color }
                  : { borderColor: "var(--border)", color: "var(--muted-foreground)", background: "transparent" }
              }
            >
              {l.name}
            </button>
          ))}
        </div>

        {/* POINTS HINT */}
        <div className="flex gap-2 flex-wrap mb-4">
          {QUIZ_LEVELS.map((l, i) => (
            <span
              key={l.name}
              className="text-xs px-2.5 py-0.5 rounded-full border"
              style={
                i === state.lvl
                  ? { background: `${l.color}20`, borderColor: `${l.color}60`, color: l.color, fontWeight: 500 }
                  : { borderColor: "var(--border)", color: "var(--muted-foreground)" }
              }
            >
              {l.name}: +{l.ptCorrect}pt, streak +{l.ptStreak}
            </span>
          ))}
        </div>

        {/* ── TOPIC SELECTOR ── */}
        {isTopicLocked(state) && (
          <div className="text-xs text-amber-700 bg-amber-50 border border-amber-200 dark:bg-amber-950/30 dark:border-amber-800 dark:text-amber-400 rounded-lg px-3 py-2 mb-3">
            Kamu sudah {MAX_TOPIC_CHANGES_PER_DAY}x ganti topik hari ini. Topik terkunci sampai besok.
          </div>
        )}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {QUIZ_TOPICS.map((t) => {
            const isActive = t.id === state.topicId;
            const isLocked = isTopicLocked(state) && !isActive;
            return (
              <button
                key={t.id}
                onClick={() => handleChangeTopic(t.id)}
                disabled={isLocked}
                className={`flex items-center gap-2 p-3 rounded-xl border text-left transition-all ${
                  isActive
                    ? "border-primary bg-primary/10"
                    : isLocked
                    ? "opacity-40 cursor-not-allowed border-border"
                    : "border-border hover:bg-muted"
                }`}
              >
                <span className="text-xl">{t.icon}</span>
                <div>
                  <p className={`text-sm font-medium ${isActive ? "text-primary" : "text-foreground"}`}>{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* ── XP BAR ── */}
        <Card className="p-4 mb-4 bg-muted/50">
          <div className="flex justify-between items-center mb-2">
            <div>
              <span className="text-2xl font-bold">{state.pts}</span>
              <span className="text-xs text-muted-foreground ml-1">poin hari ini</span>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold" style={{ color: "#BA7517" }}>
                {state.streak}{state.streak >= 3 ? "🔥" : ""}
              </span>
              <p className="text-xs text-muted-foreground">streak</p>
            </div>
          </div>
          <div className="h-1.5 bg-background rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${Math.min(100, (state.pts / (MAX_QUESTIONS_PER_DAY * lvl.ptCorrect)) * 100)}%`,
                background: lvl.color,
              }}
            />
          </div>
        </Card>

        {/* ── FLOAT PTS ANIMATION ── */}
        {floatPts && (
          <div
            className="fixed top-1/2 left-1/2 z-50 pointer-events-none font-bold text-xl animate-bounce"
            style={{ color: lvl.color, transform: "translate(-50%, -50%)" }}
          >
            +{floatPts}pt
          </div>
        )}

        {/* ══════════════════════════════════════════════════════ */}
        {/* PHASE: HOME                                           */}
        {/* ══════════════════════════════════════════════════════ */}
        {phase === "home" && (
          <Card className="p-6 text-center">
            <div className="text-5xl mb-3">{topic.icon}</div>
            <h2 className="text-lg font-semibold mb-1">{topic.name}</h2>
            <p className="text-sm text-muted-foreground mb-4">
              {lvl.label} • Sisa {MAX_QUESTIONS_PER_DAY - state.qUsed} soal hari ini
            </p>
            {user ? (
              <Button
                onClick={startQuiz}
                disabled={isQuotaFull(state)}
                className="w-full text-white font-semibold py-3"
                style={{ background: lvl.color }}
              >
                Mulai Quiz →
              </Button>
            ) : (
              <p className="text-sm text-muted-foreground">Login untuk bermain quiz!</p>
            )}
          </Card>
        )}

        {/* ══════════════════════════════════════════════════════ */}
        {/* PHASE: LOADING                                        */}
        {/* ══════════════════════════════════════════════════════ */}
        {phase === "loading" && (
          <Card className="p-8 text-center">
            <div
              className="w-8 h-8 rounded-full border-4 border-t-transparent mx-auto mb-4 animate-spin"
              style={{ borderColor: `${lvl.color}40`, borderTopColor: lvl.color }}
            />
            <p className="text-sm text-muted-foreground">Claude AI membuat soal {lvl.name}...</p>
            <p className="text-xs text-muted-foreground mt-1">{topic.name}</p>
          </Card>
        )}

        {/* ══════════════════════════════════════════════════════ */}
        {/* PHASE: QUIZ                                           */}
        {/* ══════════════════════════════════════════════════════ */}
        {phase === "quiz" && q && (
          <>
            <Card className="overflow-hidden mb-3">
              {/* IMAGE */}
              <div className="relative h-48 bg-muted flex items-center justify-center overflow-hidden">
                <img
                  src={getImageUrl(q.img_keyword)}
                  alt={q.img_keyword}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
                  onLoad={() => setImgLoaded(true)}
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
                <span className="absolute top-2 left-2 text-xs px-2.5 py-1 rounded-full text-white font-medium"
                  style={{ background: "rgba(83,74,183,0.85)" }}>
                  {q.img_cat}
                </span>
                <span className="absolute top-2 right-2 text-xs px-2.5 py-1 rounded-full text-white font-medium"
                  style={{ background: lvl.color }}>
                  {lvl.name} • +{lvl.ptCorrect}pt
                </span>
              </div>

              {/* QUESTION */}
              <div className="p-5">
                <p className="text-base font-semibold leading-relaxed mb-4">{q.q}</p>
                <div className="grid grid-cols-2 gap-2">
                  {q.opts.map((opt, i) => {
                    let variant: "default" | "outline" = "outline";
                    let extraClass = "";
                    if (answered) {
                      if (i === q.ans) extraClass = "bg-green-100 border-green-500 text-green-800 dark:bg-green-900/30 dark:text-green-300";
                      else if (i === selectedOpt) extraClass = "bg-red-100 border-red-500 text-red-800 dark:bg-red-900/30 dark:text-red-300";
                    }
                    return (
                      <button
                        key={i}
                        onClick={() => choose(i)}
                        disabled={answered}
                        className={`p-3 rounded-xl border-2 text-sm text-left transition-all leading-snug disabled:cursor-not-allowed ${
                          answered ? extraClass || "opacity-60 border-border" : "border-border hover:bg-muted hover:border-primary/50"
                        }`}
                      >
                        <span className="text-muted-foreground text-xs mr-1">{i + 1}.</span> {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* FEEDBACK */}
              {answered && (
                <div className="px-5 pb-5 flex items-start gap-3">
                  <span className="text-lg flex-shrink-0">{selectedOpt === q.ans ? "✓" : "✗"}</span>
                  <p className="text-sm text-muted-foreground flex-1 leading-relaxed">{q.explain}</p>
                  {selectedOpt === q.ans && (
                    <span className="text-sm font-semibold whitespace-nowrap" style={{ color: lvl.color }}>
                      +{lvl.ptCorrect + (state.streak >= 3 ? 0 : 0)}pt
                    </span>
                  )}
                </div>
              )}
            </Card>

            {/* NAV */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">Soal {qGlobal} dari {MAX_QUESTIONS_PER_DAY}</p>
                <p className="text-xs" style={{ color: "#BA7517" }}>
                  {state.streak >= 3 ? `🔥 Streak ${state.streak}x! +${lvl.ptStreak} bonus` : state.streak > 0 ? `Streak ${state.streak}x` : ""}
                </p>
              </div>
              <Button
                onClick={nextQ}
                disabled={!answered}
                className="text-white"
                style={{ background: lvl.color }}
              >
                Selanjutnya →
              </Button>
            </div>
          </>
        )}

        {/* ══════════════════════════════════════════════════════ */}
        {/* PHASE: RESULT                                         */}
        {/* ══════════════════════════════════════════════════════ */}
        {phase === "result" && (
          <Card className="p-8 text-center">
            <div className="text-5xl mb-3">🎉</div>
            <h2 className="text-xl font-bold mb-1">Soal selesai!</h2>
            <p className="text-sm text-muted-foreground mb-6">{lvl.label} • {topic.name}</p>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { val: state.pts, lbl: "Poin hari ini" },
                { val: questions.length, lbl: "Soal dijawab" },
                { val: `${state.streak}${state.streak >= 3 ? "🔥" : ""}`, lbl: "Streak" },
              ].map((s) => (
                <div key={s.lbl} className="bg-muted rounded-xl p-3">
                  <p className="text-2xl font-bold">{s.val}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.lbl}</p>
                </div>
              ))}
            </div>
            {isQuotaFull(state) ? (
              <Button disabled className="w-full opacity-50">Kuota habis — kembali besok</Button>
            ) : (
              <Button onClick={startQuiz} className="w-full text-white" style={{ background: lvl.color }}>
                Lanjut {MAX_QUESTIONS_PER_DAY - state.qUsed} soal tersisa →
              </Button>
            )}
          </Card>
        )}

        {/* ══════════════════════════════════════════════════════ */}
        {/* PHASE: DONE                                           */}
        {/* ══════════════════════════════════════════════════════ */}
        {phase === "done" && (
          <Card className="p-8 text-center">
            <div className="text-5xl mb-3">🌙</div>
            <h2 className="text-xl font-bold mb-1">Kuota harian selesai!</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Kamu telah menjawab <strong>{MAX_QUESTIONS_PER_DAY} soal</strong> hari ini.
              Kembali besok untuk soal baru!
            </p>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { val: state.pts, lbl: "Total Poin" },
                { val: MAX_QUESTIONS_PER_DAY, lbl: "Soal Selesai" },
                { val: `${state.streak}${state.streak >= 3 ? "🔥" : ""}`, lbl: "Streak Akhir" },
              ].map((s) => (
                <div key={s.lbl} className="bg-muted rounded-xl p-3">
                  <p className="text-2xl font-bold">{s.val}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.lbl}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">Reset kuota dalam {resetTime}</p>
          </Card>
        )}
      </div>
      <Footer />
    </main>
  );
}
