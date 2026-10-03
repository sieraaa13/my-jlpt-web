"use client";

import { useState, useEffect } from "react";
import { Navbar }   from "@/components/navbar";
import { Footer }   from "@/components/footer";
import { Card }     from "@/components/ui/card";
import { Button }   from "@/components/ui/button";
import { useAuth }  from "@/components/auth-context";
import { supabase } from "@/lib/supabase";
import { getPlayerLevel, getProgressPct, getPtsToNext, PLAYER_LEVELS } from "@/lib/quiz-levels";
import {
  QUIZ_LEVELS, QUIZ_TOPICS as TOPICS,
  MAX_QUESTIONS_PER_DAY as MAX_Q, MAX_TOPIC_CHANGES_PER_DAY as MAX_T,
  todayWIB as today, msUntilResetWIB,
} from "@/lib/quiz-config";
import Photobooth from "@/components/Photobooth";

// ─── TYPES ───────────────────────────────────────────────────
// Kunci jawaban & penjelasan tidak dikirim bersama soal; keduanya datang
// dari /api/quiz-answer setelah user menjawab.
interface Question {
  id:      string;
  q:       string;
  opts:    string[];
  img_url: string;
  img_cat: string;
}

interface Feedback {
  correct:     boolean;
  answer:      number;
  explanation: string;
  points:      number;
}

interface DailyState {
  date:            string;
  qUsed:           number;
  tUsed:           number;
  pts:             number;
  streak:          number;
  topicId:         string;
  lvl:             number;
  totalPtsAlltime: number;
  usedTopics:      string[];
  pending:         number; // soal hari ini yang sudah dikirim tapi belum dijawab
}

type Phase = "home"|"loading"|"quiz"|"result"|"done";

// ─── HELPERS ─────────────────────────────────────────────────
function resetIn() {
  const d = Math.ceil(msUntilResetWIB() / 60000);
  return `${Math.floor(d/60)}j ${d%60}m`;
}

// ─── SUPABASE (baca saja — semua penulisan quiz dilakukan server) ─────
async function loadDailyState(uid: string): Promise<DailyState> {
  const date = today();

  const { count: pending } = await supabase
    .from("quiz_user_played")
    .select("question_id", { count: "exact", head: true })
    .eq("user_id", uid)
    .eq("quiz_date", date)
    .is("answered_at", null);

  // 1. Coba ambil row hari ini
  const { data: todayData } = await supabase
    .from("quiz_daily")
    .select("*")
    .eq("user_id", uid)
    .eq("date", date)
    .maybeSingle();

  // 2. Kalau ada row hari ini → pakai langsung
  if (todayData) {
    return {
      date: todayData.date,
      qUsed: todayData.q_used,
      tUsed: todayData.t_used,
      pts: todayData.total_pts,
      streak: todayData.streak,
      topicId: todayData.topic_id,
      lvl: todayData.level,
      totalPtsAlltime: todayData.total_pts_alltime ?? 0,
      usedTopics: todayData.used_topics ?? [],
      pending: pending ?? 0,
    };
  }

  // 3. Kalau tidak ada (hari baru) → ambil total_pts_alltime dari row terakhir
  const { data: lastData } = await supabase
    .from("quiz_daily")
    .select("total_pts_alltime, level, topic_id, streak")
    .eq("user_id", uid)
    .order("date", { ascending: false })
    .limit(1)
    .maybeSingle();

  // 4. Return state baru dengan total_pts_alltime dari kemarin
  return {
    date,
    qUsed: 0,
    tUsed: 0,
    pts: 0,
    streak: lastData?.streak ?? 0,  // Carry over streak
    topicId: lastData?.topic_id ?? "budaya",
    lvl: lastData?.level ?? 0,
    totalPtsAlltime: lastData?.total_pts_alltime ?? 0,
    usedTopics: [],
    pending: pending ?? 0,
  };
}

// ─── COMPONENT ───────────────────────────────────────────────
export default function QuizPage() {
  const { user } = useAuth();

  const empty: DailyState = {
    date:today(), qUsed:0, tUsed:0, pts:0, streak:0,
    topicId:"budaya", lvl:0, totalPtsAlltime:0, usedTopics:[], pending:0
  };

  const [state,      setState]      = useState<DailyState>(empty);
  const [questions,  setQuestions]  = useState<Question[]>([]);
  const [curQ,       setCurQ]       = useState(0);
  const [feedback,   setFeedback]   = useState<Feedback|null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [selected,   setSelected]   = useState<number|null>(null);
  const [resumed,    setResumed]    = useState(false);
  const [phase,      setPhase]      = useState<Phase>("home");
  const [imgError,   setImgError]   = useState(false);
  const [floatPts,   setFloatPts]   = useState<number|null>(null);
  const [resetTime,  setResetTime]  = useState("");
  const [showLevels, setShowLevels] = useState(false);
  const [showPhotobooth, setShowPhotobooth] = useState(false);
  useEffect(() => {
    if (!user) return;
    loadDailyState(user.id).then(s => {
      setState(s);
      if (s.qUsed >= MAX_Q && s.pending === 0) setPhase("done");
    });
  }, [user]);

  useEffect(() => {
    setResetTime(resetIn());
    const t = setInterval(() => setResetTime(resetIn()), 60000);
    return () => clearInterval(t);
  }, []);

  const lv       = QUIZ_LEVELS[state.lvl] ?? QUIZ_LEVELS[0];
  // Level & topik dikunci selama soal dimuat/dikerjakan (server juga memakai
  // level saat soal dikirim sebagai dasar poin).
  const locked   = phase === "loading" || phase === "quiz";
  const answered = feedback !== null;
  const topic    = TOPICS.find(t => t.id===state.topicId) ?? TOPICS[0];
  const q        = questions[curQ];
  const plLvl    = getPlayerLevel(state.totalPtsAlltime);
  const prog     = getProgressPct(state.totalPtsAlltime);
  const toNext   = getPtsToNext(state.totalPtsAlltime);
  const canStart = state.qUsed < MAX_Q || state.pending > 0;
  // Photobooth = reward setelah semua soal hari ini dijawab (server mengecek ulang).
  const answeredToday  = Math.min(Math.max(state.qUsed - state.pending, 0), MAX_Q);
  const rewardUnlocked = !!user && answeredToday >= MAX_Q;

  // ── START QUIZ ───────────────────────────────────────────────
  async function startQuiz() {
    if (!user) return;

    setPhase("loading");
    setQuestions([]); setCurQ(0); setFeedback(null);
    setSelected(null); setImgError(false); setResumed(false);

    try {
      const res = await fetch("/api/generate-quiz", {
        method:  "POST",
        headers: { "Content-Type":"application/json" },
        body:    JSON.stringify({
          levelIndex: state.lvl,
          topicId:    state.topicId,
          userId:     user.id,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Gagal memuat soal. Coba lagi.");
      setQuestions(data.questions);
      setResumed(data.resumed);
      setState(data.state);
      setPhase("quiz");
    } catch(e) {
      console.error(e);
      alert(e instanceof Error ? e.message : "Gagal memuat soal. Coba lagi.");
      // Muat ulang state dari DB supaya kuota yang tampil tetap akurat.
      const s = await loadDailyState(user.id);
      setState(s);
      setPhase(s.qUsed >= MAX_Q && s.pending === 0 ? "done" : "home");
    }
  }

  // ── ANSWER (diperiksa server) ────────────────────────────────
  async function choose(idx: number) {
    if (!user || !q || answered || submitting) return;
    setSubmitting(true); setSelected(idx);

    try {
      const res = await fetch("/api/quiz-answer", {
        method:  "POST",
        headers: { "Content-Type":"application/json" },
        body:    JSON.stringify({ userId: user.id, questionId: q.id, choice: idx }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Gagal mengirim jawaban. Coba lagi.");

      setFeedback({ correct:data.correct, answer:data.answer, explanation:data.explanation, points:data.points });
      setState(data.state);
      if (data.points > 0) { setFloatPts(data.points); setTimeout(() => setFloatPts(null), 900); }
    } catch(e) {
      console.error(e);
      setSelected(null);
      alert(e instanceof Error ? e.message : "Gagal mengirim jawaban. Coba lagi.");
    } finally {
      setSubmitting(false);
    }
  }

  // ── NEXT ─────────────────────────────────────────────────────
  function nextQ() {
    if (curQ + 1 < questions.length) {
      setCurQ(c => c+1); setFeedback(null); setSelected(null); setImgError(false);
      return;
    }
    setPhase(state.qUsed >= MAX_Q ? "done" : "result");
  }

  // ── CHANGE TOPIC / LEVEL (pilihan lokal; dicatat server saat quiz dimulai) ──
  function handleChangeTopic(id: string) {
    if (!user || locked || id === state.topicId) return;
    const wouldExceed = !state.usedTopics.includes(id) && state.usedTopics.length >= MAX_T;
    if (wouldExceed) return;
    setState(s => ({ ...s, topicId: id }));
    setPhase(p => p === "result" ? "home" : p);
  }

  function handleChangeLevel(i: number) {
    if (!user || locked || i === state.lvl) return;
    setState(s => ({ ...s, lvl: i }));
  }

  // ── RENDER ───────────────────────────────────────────────────
  return (
    <main className="min-h-screen bg-background">
      <Photobooth isOpen={showPhotobooth} onClose={() => setShowPhotobooth(false)} userId={user?.id ?? null} />
      <Navbar />
      <div className="pt-20 pb-24 max-w-2xl mx-auto px-4">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Quiz Harian Jepang</h1>
          <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
            ✦ AI Powered
          </span>
        </div>
        {rewardUnlocked ? (
          <button
            onClick={() => setShowPhotobooth(true)}
            className="w-full mb-4 px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold rounded-xl shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <span className="text-2xl">🎁</span>
            <span>REWARD: PHOTOBOOTH!</span>
            <span className="text-2xl">📸</span>
          </button>
        ) : (
          <div className="w-full mb-4 px-4 py-3 bg-muted text-muted-foreground font-semibold rounded-xl flex items-center justify-center gap-2 text-sm">
            <span className="text-xl">🔒</span>
            <span>Reward Photobooth terbuka setelah {MAX_Q} soal hari ini selesai ({answeredToday}/{MAX_Q})</span>
          </div>
        )}

        {/* PLAYER LEVEL CARD */}
        <Card className="p-4 mb-4 cursor-pointer" onClick={() => setShowLevels(!showLevels)}>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">{plLvl.icon}</span>
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-base font-semibold">{plLvl.name}</span>
                <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{ background:`${plLvl.color}20`, color:plLvl.color }}>
                  Level {plLvl.num}
                </span>
                <span className="text-xs text-muted-foreground ml-auto">
                  {showLevels ? "▲ Tutup" : "▼ Lihat semua"}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">{plLvl.jp} • {state.totalPtsAlltime} poin total</p>
            </div>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden mb-1">
            <div className="h-full rounded-full transition-all duration-700"
              style={{ width:`${prog}%`, background:plLvl.color }} />
          </div>
          <p className="text-xs text-muted-foreground">
            {plLvl.num < 10 ? `${toNext} poin lagi untuk Level ${plLvl.num+1}` : "Level maksimal! 👑"}
          </p>
        </Card>

        {/* LEVEL PROGRESSION */}
        {showLevels && (
          <Card className="p-4 mb-4">
            <p className="text-sm font-medium mb-3">Semua Level</p>
            <div className="grid grid-cols-5 gap-2">
              {PLAYER_LEVELS.map(pl => {
                const reached  = state.totalPtsAlltime >= pl.minPts;
                const isCurrent = pl.num === plLvl.num;
                return (
                  <div key={pl.num}
                    className={`rounded-xl p-2 text-center border transition-all ${isCurrent ? "border-2" : "border-border"}`}
                    style={isCurrent ? { borderColor:pl.color } : {}}>
                    <div className={`text-2xl mb-1 ${!reached ? "opacity-25 grayscale" : ""}`}>{pl.icon}</div>
                    <div className="text-xs font-medium" style={{ color:reached ? pl.color : "var(--color-text-tertiary)" }}>
                      Lv.{pl.num}
                    </div>
                    <div className="text-[10px] text-muted-foreground leading-tight">{pl.name}</div>
                  </div>
                );
              })}
            </div>
          </Card>
        )}

        {/* DAILY QUOTA */}
        <Card className="p-4 mb-4">
          <div className="grid grid-cols-2 gap-3">
            {[
              { label:"Soal hari ini",    used:state.qUsed,            max:MAX_Q, color:state.qUsed>=MAX_Q?"#E24B4A":lv.color },
              { label:"Topik digunakan",  used:state.usedTopics.length, max:MAX_T, color:state.usedTopics.length>=MAX_T?"#E24B4A":"#1D9E75" },
            ].map(item => (
              <div key={item.label} className="bg-muted rounded-lg p-3">
                <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                <p className="text-sm font-medium mb-2">{item.used} / {item.max}</p>
                <div className="h-1.5 bg-background rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-500"
                    style={{ width:`${(item.used/item.max)*100}%`, background:item.color }} />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-right mt-2">Reset dalam {resetTime}</p>
        </Card>

        {/* JLPT LEVEL */}
        <div className="flex gap-2 flex-wrap mb-2">
          {QUIZ_LEVELS.map((l,i) => (
            <button key={l.name} onClick={() => handleChangeLevel(i)}
              disabled={locked}
              className="px-4 py-1.5 rounded-full text-sm font-medium border transition-all disabled:cursor-not-allowed disabled:opacity-60"
              style={i===state.lvl
                ? { background:l.color, color:"#fff", borderColor:l.color }
                : { borderColor:"var(--border)", background:"transparent" }}>
              {l.name}
            </button>
          ))}
        </div>
        <div className="flex gap-2 flex-wrap mb-4">
          {QUIZ_LEVELS.map((l,i) => (
            <span key={l.name} className="text-xs px-2.5 py-0.5 rounded-full border"
              style={i===state.lvl
                ? { background:`${l.color}20`, borderColor:`${l.color}60`, color:l.color, fontWeight:500 }
                : { borderColor:"var(--border)", color:"var(--color-text-secondary)" }}>
              {l.name}: +{l.ptCorrect}pt, streak +{l.ptStreak}
            </span>
          ))}
        </div>

        {/* TOPIC SELECTOR */}
        {locked && (
          <div className="text-xs text-muted-foreground bg-muted border border-border rounded-lg px-3 py-2 mb-3">
            Level & topik tidak bisa diganti selama quiz berjalan.
          </div>
        )}
        {state.usedTopics.length >= MAX_T && (
          <div className="text-xs text-amber-700 bg-amber-50 border border-amber-200 dark:bg-amber-950/30 dark:border-amber-800 dark:text-amber-400 rounded-lg px-3 py-2 mb-3">
            Kamu sudah menggunakan {MAX_T} topik hari ini. Topik terkunci sampai besok.
          </div>
        )}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {TOPICS.map(t => {
            const active      = t.id === state.topicId;
            const used        = state.usedTopics.includes(t.id);
            const wouldExceed = !used && !active && state.usedTopics.length >= MAX_T;
            return (
              <button key={t.id} onClick={() => handleChangeTopic(t.id)}
                disabled={wouldExceed || locked}
                className={`flex items-center gap-2 p-3 rounded-xl border text-left transition-all ${
                  active ? "border-primary bg-primary/10"
                  : wouldExceed || locked ? "opacity-40 cursor-not-allowed border-border"
                  : "border-border hover:bg-muted"}`}>
                <span className="text-xl">{t.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium ${active ? "text-primary" : "text-foreground"}`}>{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.desc}</p>
                </div>
                {used && !active && <span className="text-xs text-green-500">✓</span>}
              </button>
            );
          })}
        </div>

        {/* TODAY POINTS */}
        <Card className="p-4 mb-4 bg-muted/50">
          <div className="flex justify-between items-center mb-2">
            <div>
              <span className="text-2xl font-bold">{state.pts}</span>
              <span className="text-xs text-muted-foreground ml-1">poin hari ini</span>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold" style={{color:"#BA7517"}}>
                {state.streak}{state.streak>=3?"🔥":""}
              </span>
              <p className="text-xs text-muted-foreground">streak</p>
            </div>
          </div>
          <div className="h-1.5 bg-background rounded-full overflow-hidden">
            <div className="h-full rounded-full transition-all duration-500"
              style={{ width:`${Math.min(100,(state.pts/(MAX_Q*lv.ptCorrect))*100)}%`, background:lv.color }} />
          </div>
        </Card>

        {/* FLOAT PTS */}
        {floatPts !== null && (
          <div className="fixed top-1/2 left-1/2 z-50 pointer-events-none font-bold text-2xl animate-bounce"
            style={{ color:lv.color, transform:"translate(-50%,-50%)" }}>
            +{floatPts}pt
          </div>
        )}

        {/* ── HOME ── */}
        {phase === "home" && (
          <Card className="p-6 text-center">
            <div className="text-5xl mb-3">{topic.icon}</div>
            <h2 className="text-lg font-semibold mb-1">{topic.name}</h2>
            <p className="text-sm text-muted-foreground mb-1">{lv.label}</p>
            <p className="text-xs text-muted-foreground mb-4">
              {state.pending > 0
                ? `Ada ${state.pending} soal yang belum kamu jawab`
                : `Sisa ${MAX_Q - state.qUsed} soal hari ini`}
            </p>
            {user ? (
              <Button onClick={startQuiz} disabled={!canStart}
                className="w-full text-white font-semibold py-3" style={{ background:lv.color }}>
                {state.pending > 0 ? "Lanjutkan Quiz →" : "Mulai Quiz →"}
              </Button>
            ) : (
              <p className="text-sm text-muted-foreground">Login untuk bermain quiz!</p>
            )}
          </Card>
        )}

        {/* ── LOADING ── */}
        {phase === "loading" && (
          <Card className="p-8 text-center">
            <div className="w-10 h-10 rounded-full border-4 border-t-transparent mx-auto mb-4 animate-spin"
              style={{ borderColor:`${lv.color}30`, borderTopColor:lv.color }} />
            <p className="text-sm font-medium text-foreground mb-1">
              AI sedang menyiapkan soal {lv.name}...
            </p>
            <p className="text-xs text-muted-foreground">{topic.name}</p>
            <p className="text-xs text-muted-foreground mt-3">
              Termasuk generate gambar, mohon tunggu ~10 detik
            </p>
          </Card>
        )}

        {/* ── QUIZ ── */}
        {phase === "quiz" && q && (
          <>
            {resumed && (
              <div className="text-xs text-muted-foreground bg-muted border border-border rounded-lg px-3 py-2 mb-3">
                Melanjutkan soal yang belum kamu jawab sebelumnya ({lv.name} • {topic.name}).
              </div>
            )}
            <Card className="overflow-hidden mb-3">
              {/* IMAGE */}
              {q.img_url && !imgError ? (
                <div className="relative h-48 bg-muted overflow-hidden">
                  <img
                    src={q.img_url}
                    alt={q.img_cat}
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                  />
                  <span className="absolute top-2 left-2 text-xs px-2.5 py-1 rounded-full text-white font-medium"
                    style={{ background:"rgba(83,74,183,.85)" }}>{q.img_cat}</span>
                  <span className="absolute top-2 right-2 text-xs px-2.5 py-1 rounded-full text-white font-medium"
                    style={{ background:lv.color }}>{lv.name} • +{lv.ptCorrect}pt</span>
                </div>
              ) : (
                <div className="relative h-32 flex items-center justify-center bg-muted">
                  <span className="text-xs text-muted-foreground">Gambar tidak tersedia</span>
                  <span className="absolute top-2 right-2 text-xs px-2.5 py-1 rounded-full text-white font-medium"
                    style={{ background:lv.color }}>{lv.name} • +{lv.ptCorrect}pt</span>
                </div>
              )}

              {/* QUESTION */}
              <div className="p-5">
                <p className="text-base font-semibold leading-relaxed mb-4">{q.q}</p>
                <div className="grid grid-cols-2 gap-2">
                  {q.opts.map((opt, i) => {
                    let cls = "border-border hover:bg-muted hover:border-primary/50";
                    if (feedback) {
                      if (i===feedback.answer) cls = "bg-green-100 border-green-500 text-green-800 dark:bg-green-900/30 dark:text-green-300 dark:border-green-600";
                      else if (i===selected) cls = "bg-red-100 border-red-500 text-red-800 dark:bg-red-900/30 dark:text-red-300 dark:border-red-600";
                      else cls = "opacity-50 border-border";
                    } else if (submitting) {
                      cls = i===selected ? "border-primary bg-primary/10" : "opacity-50 border-border";
                    }
                    return (
                      <button key={i} onClick={() => choose(i)} disabled={answered || submitting}
                        className={`p-3 rounded-xl border-2 text-sm text-left transition-all leading-snug disabled:cursor-not-allowed ${cls}`}>
                        <span className="text-muted-foreground text-xs mr-1">{i+1}.</span>{opt}
                      </button>
                    );
                  })}
                </div>
                {submitting && (
                  <p className="text-xs text-muted-foreground mt-3">Memeriksa jawaban...</p>
                )}
              </div>

              {/* FEEDBACK */}
              {feedback && (
                <div className="px-5 pb-5 flex items-start gap-3 border-t border-border pt-4">
                  <span className="text-lg flex-shrink-0">{feedback.correct ? "✓" : "✗"}</span>
                  <p className="text-sm text-muted-foreground flex-1 leading-relaxed">{feedback.explanation}</p>
                  {feedback.correct && (
                    <span className="text-sm font-semibold whitespace-nowrap" style={{color:lv.color}}>
                      +{feedback.points}pt
                    </span>
                  )}
                </div>
              )}
            </Card>

            {/* NAV */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">Soal {state.qUsed - questions.length + curQ + 1} dari {MAX_Q}</p>
                <p className="text-xs" style={{color:"#BA7517"}}>
                  {state.streak>=3 ? `🔥 Streak ${state.streak}x! +${lv.ptStreak} bonus` : state.streak>0 ? `Streak ${state.streak}x` : ""}
                </p>
              </div>
              <Button onClick={nextQ} disabled={!answered} className="text-white" style={{background:lv.color}}>
                Selanjutnya →
              </Button>
            </div>
          </>
        )}

        {/* ── RESULT ── */}
        {phase === "result" && (
          <Card className="p-8 text-center">
            <div className="text-5xl mb-3">🎉</div>
            <h2 className="text-xl font-bold mb-1">Soal selesai!</h2>
            <p className="text-sm text-muted-foreground mb-6">{lv.label} • {topic.name}</p>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[{v:state.pts,l:"Poin hari ini"},{v:questions.length,l:"Soal dijawab"},{v:`${state.streak}${state.streak>=3?"🔥":""}`,l:"Streak"}].map(s=>(
                <div key={s.l} className="bg-muted rounded-xl p-3">
                  <p className="text-2xl font-bold">{s.v}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.l}</p>
                </div>
              ))}
            </div>
            {state.qUsed >= MAX_Q ? (
              <Button disabled className="w-full opacity-50">Kuota habis — kembali besok</Button>
            ) : (
              <Button onClick={startQuiz} className="w-full text-white" style={{background:lv.color}}>
                Lanjut {MAX_Q-state.qUsed} soal tersisa →
              </Button>
            )}
          </Card>
        )}

        {/* ── DONE ── */}
        {phase === "done" && (
          <Card className="p-8 text-center">
            <div className="text-5xl mb-3">🌙</div>
            <h2 className="text-xl font-bold mb-2">Kuota harian selesai!</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Kamu telah menjawab <strong>{MAX_Q} soal</strong> hari ini. Kembali besok!
            </p>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[{v:state.pts,l:"Total Poin"},{v:MAX_Q,l:"Soal Selesai"},{v:`${state.streak}${state.streak>=3?"🔥":""}`,l:"Streak Akhir"}].map(s=>(
                <div key={s.l} className="bg-muted rounded-xl p-3">
                  <p className="text-2xl font-bold">{s.v}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.l}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">Reset dalam {resetTime}</p>
          </Card>
        )}

      </div>
      <Footer />
    </main>
  );
}
