"use client";

import { useState, useEffect } from "react";
import { Navbar }   from "@/components/navbar";
import { Footer }   from "@/components/footer";
import { Card }     from "@/components/ui/card";
import { Button }   from "@/components/ui/button";
import { useAuth }  from "@/components/auth-context";
import { supabase } from "@/lib/supabase";
import { getPlayerLevel, getProgressPct, getPtsToNext, PLAYER_LEVELS } from "@/lib/quiz-levels";
import Photobooth from "@/components/Photobooth";

// ─── CONSTANTS ───────────────────────────────────────────────
const MAX_Q   = 5;
const MAX_T   = 2;

const QUIZ_LEVELS = [
  { name:"N5", label:"N5 Pemula",      ptCorrect:1, ptStreak:3, color:"#1D9E75" },
  { name:"N4", label:"N4 Dasar",       ptCorrect:2, ptStreak:3, color:"#534AB7" },
  { name:"N3", label:"N3 Menengah",    ptCorrect:3, ptStreak:3, color:"#BA7517" },
  { name:"N2", label:"N2 Lanjut",      ptCorrect:4, ptStreak:5, color:"#D85A30" },
  { name:"N1", label:"N1 Profesional", ptCorrect:5, ptStreak:5, color:"#A32D2D" },
];

const TOPICS = [
  { id:"budaya",   name:"Budaya Umum",          icon:"🎌", desc:"Tradisi & kehidupan sehari-hari" },
  { id:"makanan",  name:"Makanan & Kuliner",     icon:"🍜", desc:"Kuliner khas Jepang" },
  { id:"anime",    name:"Anime & Manga",         icon:"⛩️", desc:"Pop culture Jepang" },
  { id:"tempat",   name:"Tempat Instagrammable", icon:"📸", desc:"Spot foto & wisata populer" },
  { id:"festival", name:"Festival & Tradisi",    icon:"🎆", desc:"Matsuri & perayaan khas" },
  { id:"modern",   name:"Jepang Modern",         icon:"🚅", desc:"Teknologi & gaya hidup kini" },
];


// ─── TYPES ───────────────────────────────────────────────────
interface Question {
  id:      string;
  q:       string;
  opts:    string[];
  ans:     number;
  explain: string;
  img_url: string;
  img_cat: string;
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
}

type Phase = "home"|"loading"|"quiz"|"result"|"done";

// ─── HELPERS ─────────────────────────────────────────────────
function today() { return new Date().toISOString().slice(0,10); }
function resetIn() {
  const now=new Date(), tmr=new Date(now);
  tmr.setDate(tmr.getDate()+1); tmr.setHours(0,0,0,0);
  const d=Math.round((tmr.getTime()-now.getTime())/60000);
  return `${Math.floor(d/60)}j ${d%60}m`;
}

// ─── SUPABASE ────────────────────────────────────────────────
async function loadDailyState(uid: string): Promise<DailyState> {
  // 1. Coba ambil row hari ini
  const { data: todayData } = await supabase
    .from("quiz_daily")
    .select("*")
    .eq("user_id", uid)
    .eq("date", today())
    .single();

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
    };
  }

  // 3. Kalau tidak ada (hari baru) → ambil total_pts_alltime dari row terakhir
  const { data: lastData } = await supabase
    .from("quiz_daily")
    .select("total_pts_alltime, level, topic_id, streak")
    .eq("user_id", uid)
    .order("date", { ascending: false })
    .limit(1)
    .single();

  // 4. Return state baru dengan total_pts_alltime dari kemarin
  return {
    date: today(),
    qUsed: 0,
    tUsed: 0,
    pts: 0,
    streak: lastData?.streak ?? 0,  // Carry over streak
    topicId: lastData?.topic_id ?? "budaya",
    lvl: lastData?.level ?? 1,
    totalPtsAlltime: lastData?.total_pts_alltime ?? 0,  // ← INI FIX-NYA!
    usedTopics: [],
  };
}

async function saveDailyState(uid: string, s: DailyState) {
  await supabase.from("quiz_daily").upsert({
    user_id:uid, date:s.date, q_used:s.qUsed, t_used:s.tUsed,
    total_pts:s.pts, streak:s.streak, topic_id:s.topicId, level:s.lvl,
    total_pts_alltime:s.totalPtsAlltime, used_topics:s.usedTopics,
  }, { onConflict:"user_id,date" });
}

// ─── COMPONENT ───────────────────────────────────────────────
export default function QuizPage() {
  const { user } = useAuth();

  const empty: DailyState = {
    date:today(), qUsed:0, tUsed:0, pts:0, streak:0,
    topicId:"budaya", lvl:1, totalPtsAlltime:0, usedTopics:[]
  };

  const [state,      setState]      = useState<DailyState>(empty);
  const [questions,  setQuestions]  = useState<Question[]>([]);
  const [curQ,       setCurQ]       = useState(0);
  const [answered,   setAnswered]   = useState(false);
  const [selected,   setSelected]   = useState<number|null>(null);
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
      if (s.qUsed >= MAX_Q) setPhase("done");
    });
  }, [user]);

  useEffect(() => {
    setResetTime(resetIn());
    const t = setInterval(() => setResetTime(resetIn()), 60000);
    return () => clearInterval(t);
  }, []);

  const lv     = QUIZ_LEVELS[state.lvl] ?? QUIZ_LEVELS[1];
  const topic  = TOPICS.find(t => t.id===state.topicId) ?? TOPICS[0];
  const q      = questions[curQ];
  const plLvl  = getPlayerLevel(state.totalPtsAlltime);
  const prog   = getProgressPct(state.totalPtsAlltime);
  const toNext = getPtsToNext(state.totalPtsAlltime);

  // ── START QUIZ ───────────────────────────────────────────────
  async function startQuiz() {
    if (!user) return;

    // Catat topik yang digunakan SAAT mulai quiz (bukan saat pilih)
    let newUsedTopics = [...state.usedTopics];
    let newTUsed = state.tUsed;
    if (!newUsedTopics.includes(state.topicId)) {
      newUsedTopics.push(state.topicId);
      newTUsed = newUsedTopics.length;
    }
    const updated = { ...state, tUsed: newTUsed, usedTopics: newUsedTopics };
    setState(updated);
    await saveDailyState(user.id, updated);

    setPhase("loading");
    setQuestions([]); setCurQ(0); setAnswered(false);
    setSelected(null); setImgError(false);

    try {
      const n   = Math.min(MAX_Q - state.qUsed, 5);
      const res = await fetch("/api/generate-quiz", {
        method:  "POST",
        headers: { "Content-Type":"application/json" },
        body:    JSON.stringify({
          levelIndex: state.lvl,
          topicId:    state.topicId,
          count:      n,
          userId:     user.id,
        }),
      });
      if (!res.ok) throw new Error("API error " + res.status);
      const { questions: qs } = await res.json();
      setQuestions(qs);
      setPhase("quiz");
    } catch(e) {
      console.error(e);
      alert("Gagal memuat soal. Coba lagi.");
      setPhase("home");
    }
  }

  // ── ANSWER ───────────────────────────────────────────────────
  async function choose(idx: number) {
    if (!user || answered) return;
    setAnswered(true); setSelected(idx);

    const correct = idx === q.ans;
    const bonus   = correct && state.streak >= 2 ? lv.ptStreak : 0;
    const pts     = correct ? lv.ptCorrect + bonus : 0;

    if (pts > 0) { setFloatPts(pts); setTimeout(() => setFloatPts(null), 900); }

    const ns: DailyState = {
      ...state,
      qUsed:           state.qUsed + 1,
      pts:             state.pts + pts,
      streak:          correct ? state.streak + 1 : 0,
      totalPtsAlltime: state.totalPtsAlltime + pts,
    };
    setState(ns);
    await saveDailyState(user.id, ns);
  }

  // ── NEXT ─────────────────────────────────────────────────────
  function nextQ() {
    if (state.qUsed >= MAX_Q) { setPhase("done"); return; }
    if (curQ + 1 >= questions.length) { setPhase("result"); return; }
    setCurQ(c => c+1); setAnswered(false); setSelected(null); setImgError(false);
  }

  // ── CHANGE TOPIC (hanya update pilihan, belum hitung tUsed) ──
  async function handleChangeTopic(id: string) {
    if (!user || id === state.topicId) return;
    const wouldExceed = !state.usedTopics.includes(id) && state.usedTopics.length >= MAX_T;
    if (wouldExceed) return;
    const ns = { ...state, topicId: id };
    setState(ns);
    await saveDailyState(user.id, ns);
    setPhase("home");
  }

  // ── CHANGE LEVEL ─────────────────────────────────────────────
  async function handleChangeLevel(i: number) {
    if (!user || i === state.lvl) return;
    const ns = { ...state, lvl: i };
    setState(ns);
    await saveDailyState(user.id, ns);
  }

  // ── RENDER ───────────────────────────────────────────────────
  return (
    <main className="min-h-screen bg-background">
      <Photobooth isOpen={showPhotobooth} onClose={() => setShowPhotobooth(false)} />
      <Navbar />
      <div className="pt-20 pb-24 max-w-2xl mx-auto px-4">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Quiz Harian Jepang</h1>
          <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
            ✦ AI Powered
          </span>
        </div>
        <button
  onClick={() => setShowPhotobooth(true)}
  className="w-full mb-4 px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold rounded-xl shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
>
  <span className="text-2xl">🎁</span>
  <span>REWARD: PHOTOBOOTH!</span>
  <span className="text-2xl">📸</span>
</button>

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
              className="px-4 py-1.5 rounded-full text-sm font-medium border transition-all"
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
                disabled={wouldExceed}
                className={`flex items-center gap-2 p-3 rounded-xl border text-left transition-all ${
                  active ? "border-primary bg-primary/10"
                  : wouldExceed ? "opacity-40 cursor-not-allowed border-border"
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
              Sisa {MAX_Q - state.qUsed} soal hari ini
            </p>
            {user ? (
              <Button onClick={startQuiz} disabled={state.qUsed >= MAX_Q}
                className="w-full text-white font-semibold py-3" style={{ background:lv.color }}>
                Mulai Quiz →
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
                    if (answered) {
                      if (i===q.ans) cls = "bg-green-100 border-green-500 text-green-800 dark:bg-green-900/30 dark:text-green-300 dark:border-green-600";
                      else if (i===selected) cls = "bg-red-100 border-red-500 text-red-800 dark:bg-red-900/30 dark:text-red-300 dark:border-red-600";
                      else cls = "opacity-50 border-border";
                    }
                    return (
                      <button key={i} onClick={() => choose(i)} disabled={answered}
                        className={`p-3 rounded-xl border-2 text-sm text-left transition-all leading-snug disabled:cursor-not-allowed ${cls}`}>
                        <span className="text-muted-foreground text-xs mr-1">{i+1}.</span>{opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* FEEDBACK */}
              {answered && (
                <div className="px-5 pb-5 flex items-start gap-3 border-t border-border pt-4">
                  <span className="text-lg flex-shrink-0">{selected===q.ans ? "✓" : "✗"}</span>
                  <p className="text-sm text-muted-foreground flex-1 leading-relaxed">{q.explain}</p>
                  {selected===q.ans && (
                    <span className="text-sm font-semibold whitespace-nowrap" style={{color:lv.color}}>
                      +{lv.ptCorrect + (state.streak > 2 ? lv.ptStreak : 0)}pt
                    </span>
                  )}
                </div>
              )}
            </Card>

            {/* NAV */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">Soal {state.qUsed} dari {MAX_Q}</p>
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
