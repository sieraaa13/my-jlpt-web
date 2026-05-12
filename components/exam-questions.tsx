"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useExamContext } from "@/components/exam-context";
import { useAuth } from "@/components/auth-context";
import { supabase } from "@/lib/supabase";

interface Question {
  q: string;
  options: string[];
  correct: number;
}

interface DakkaiSection {
  title: string;
  text: string;
  questions: Question[];
}

interface ChoukaiQuestion {
  q: string;
  audio: string;
  introAudio?: string;
  options: string[];
  correct: number;
  transcript?: string;
  mondai?: number;
  questionNumber?: number;
  audioOnlyOptions?: boolean;
}

interface ExamQuestionsProps {
  data: {
    kanji: Question[];
    bunpou: Question[];
    dokkai: DakkaiSection[];
    choukai?: ChoukaiQuestion[];
  };
  year: string;
  month: string;
  onBack: () => void;
}

export default function ExamQuestions({ data, year, month, onBack }: ExamQuestionsProps) {
  const { setExamData: setContextExamData } = useExamContext();
  const { user } = useAuth();

  const [activeTab, setActiveTab] = useState("kanji");
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [savedToDb, setSavedToDb] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const hasChoukai = data.choukai && data.choukai.length > 0;

  const sections = [
    { id: "kanji",   label: "Kanji",   icon: "漢", data: data.kanji,    isDakkai: false, isChoukai: false },
    { id: "bunpou",  label: "Bunpou",  icon: "文", data: data.bunpou,   isDakkai: false, isChoukai: false },
    { id: "dokkai",  label: "Dokkai",  icon: "読", data: data.dokkai,   isDakkai: true,  isChoukai: false },
    ...(hasChoukai
      ? [{ id: "choukai", label: "Choukai", icon: "聴", data: data.choukai!, isDakkai: false, isChoukai: true }]
      : []),
  ];

  const handleAnswer = (questionIndex: number, optionIndex: number, dakkaiTitle?: string) => {
    const key = dakkaiTitle
      ? `${activeTab}-${dakkaiTitle}-${questionIndex}`
      : `${activeTab}-${questionIndex}`;
    setAnswers((prev) => ({ ...prev, [key]: optionIndex }));
  };

  const calculateScore = () => {
    let correct = 0; let total = 0;
    sections.forEach((section) => {
      if (section.isDakkai) {
        (section.data as DakkaiSection[]).forEach((dakkai) => {
          dakkai.questions.forEach((q, i) => {
            total++;
            if (answers[`${section.id}-${dakkai.title}-${i}`] === q.correct) correct++;
          });
        });
      } else {
        (section.data as (Question | ChoukaiQuestion)[]).forEach((q, i) => {
          total++;
          if (answers[`${section.id}-${i}`] === q.correct) correct++;
        });
      }
    });
    return { correct, total };
  };

  const { correct, total } = calculateScore();
  const percentage  = total > 0 ? Math.round((correct / total) * 100) : 0;
  const answeredCount = Object.keys(answers).length;

  function getJLPTLevel(y: string) {
    if (y === "2011" || y === "2012") return "N3";
    if (y === "2013") return "N2";
    return "N3";
  }
  const level = getJLPTLevel(year);
  const examLabel = `${month === "07" ? "Juli" : "Desember"} ${year}`;

  // ── AI CONTEXT ──────────────────────────────────────────────
  const aiQuestions = useMemo(() => {
    if (activeTab === "dokkai") {
      const result: any[] = []; let counter = 1;
      (data.dokkai as DakkaiSection[]).forEach((d) => {
        d.questions.forEach((q) => {
          result.push({ number: counter++, q: q.q, options: q.options, correct: q.correct, section: "dokkai", passage: d.text });
        });
      });
      return result;
    } else if (activeTab === "choukai" && data.choukai) {
      return data.choukai.map((q, i) => ({ number: i + 1, q: q.q, options: q.options, correct: q.correct, section: "choukai" }));
    } else {
      const arr = activeTab === "kanji" ? data.kanji : data.bunpou;
      return (arr as Question[]).map((q, i) => ({ number: i + 1, q: q.q, options: q.options, correct: q.correct, section: activeTab }));
    }
  }, [activeTab, data]);

  const activeQuestionInfo = useMemo(() => {
    const sa = Object.entries(answers).filter(([k]) => k.startsWith(`${activeTab}-`));
    if (!sa.length) return aiQuestions[0] ? { number: 1, section: activeTab, userAnswer: "belum dijawab" } : null;
    const [k, v] = sa[sa.length - 1];
    const n = parseInt(k.split("-").pop()!, 10) + 1;
    const t = aiQuestions.find((q) => q.number === n) || aiQuestions[0];
    return { number: t.number, section: activeTab, userAnswer: `pilihan ke-${+v + 1} (${t.options[+v]})` };
  }, [answers, activeTab, aiQuestions]);

  useEffect(() => {
    setContextExamData({ level, title: examLabel, section: activeTab, questions: aiQuestions, activeQuestion: activeQuestionInfo, isExamFinished: showResults });
    return () => setContextExamData(null);
  }, [level, examLabel, activeTab, aiQuestions, activeQuestionInfo, setContextExamData, showResults]);

  // ── AUTO-SAVE ────────────────────────────────────────────────
  useEffect(() => {
    if (!showResults || !user || savedToDb || total === 0) return;
    const save = async () => {
      try {
        const ss: Record<string, { correct: number; total: number }> = {
          kanji: { correct: 0, total: 0 }, bunpou: { correct: 0, total: 0 },
          dokkai: { correct: 0, total: 0 }, choukai: { correct: 0, total: 0 },
        };
        sections.forEach((s) => {
          if (s.isDakkai) {
            (s.data as DakkaiSection[]).forEach((d) => {
              d.questions.forEach((q, i) => {
                ss[s.id].total++;
                if (answers[`${s.id}-${d.title}-${i}`] === q.correct) ss[s.id].correct++;
              });
            });
          } else {
            (s.data as (Question | ChoukaiQuestion)[]).forEach((q, i) => {
              ss[s.id].total++;
              if (answers[`${s.id}-${i}`] === q.correct) ss[s.id].correct++;
            });
          }
        });
        const { error } = await supabase.from("exam_history").insert({ user_id: user.id, year, month, level, total_score: correct, total_questions: total, percentage, section_scores: ss, answers });
        if (!error) { setSavedToDb(true); console.log("✅ Tersimpan"); }
      } catch (e) { console.error(e); }
    };
    save();
  }, [showResults, user, savedToDb, total]);

  if (!mounted) return null;

  const tabColumns = hasChoukai ? "grid-cols-4" : "grid-cols-3";

  return (
    <section className="min-h-screen bg-background text-foreground pb-32 transition-colors duration-300">
      {/* STICKY HEADER */}
      <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-2">
            <button onClick={onBack} className="flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-lg transition-colors hover:bg-muted text-muted-foreground">
              <span>←</span>
              <span className="hidden sm:inline">Kembali</span>
            </button>
            <div className="flex-1 text-center min-w-0 px-2">
              <h1 className="text-lg sm:text-2xl font-bold truncate">
                JLPT <span className="text-cyan-500">{level}</span>
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground">{examLabel}</p>
            </div>
            {/* Kosong - dark mode dihandle Navbar */}
            <div className="w-10" />
          </div>

          {!showResults && (
            <div className="mt-3">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs font-medium text-muted-foreground">{answeredCount} dari {total} terjawab</span>
                <span className="text-xs font-semibold text-cyan-500">{total > 0 ? Math.round((answeredCount / total) * 100) : 0}%</span>
              </div>
              <div className="w-full rounded-full h-1.5 overflow-hidden bg-muted">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full transition-all duration-300" style={{ width: `${total > 0 ? (answeredCount / total) * 100 : 0}%` }} />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className={`grid w-full ${tabColumns} rounded-lg border-2 p-1 bg-muted border-border`}>
            {sections.map((s) => (
              <TabsTrigger key={s.id} value={s.id} className={`text-sm sm:text-base font-semibold rounded-md transition-all py-2 ${activeTab === s.id ? "bg-background text-cyan-500" : "text-muted-foreground"}`}>
                <span className="mr-1 sm:mr-2">{s.icon}</span>
                <span className="hidden xs:inline sm:inline">{s.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* KANJI */}
          <TabsContent value="kanji" className="space-y-4 mt-6">
            {showResults
              ? (data.kanji as Question[]).map((q, i) => <ResultCard key={i} index={i} question={q} userAnswer={answers[`kanji-${i}`]} isCorrect={answers[`kanji-${i}`] === q.correct} />)
              : (data.kanji as Question[]).map((q, i) => <QuestionCard key={i} index={i} question={q} userAnswer={answers[`kanji-${i}`]} onAnswer={(o) => handleAnswer(i, o)} />)}
          </TabsContent>

          {/* BUNPOU */}
          <TabsContent value="bunpou" className="space-y-4 mt-6">
            {showResults
              ? (data.bunpou as Question[]).map((q, i) => <ResultCard key={i} index={i} question={q} userAnswer={answers[`bunpou-${i}`]} isCorrect={answers[`bunpou-${i}`] === q.correct} />)
              : (data.bunpou as Question[]).map((q, i) => <QuestionCard key={i} index={i} question={q} userAnswer={answers[`bunpou-${i}`]} onAnswer={(o) => handleAnswer(i, o)} />)}
          </TabsContent>

          {/* DOKKAI */}
          <TabsContent value="dokkai" className="space-y-6 mt-6">
            {showResults ? (
              (data.dokkai as DakkaiSection[]).map((dk) => (
                <div key={dk.title} className="space-y-3">
                  <div className="border-2 rounded-lg p-3 sm:p-4 bg-muted border-border">
                    <h3 className="text-base sm:text-lg font-bold text-cyan-500">{dk.title}</h3>
                  </div>
                  <Card className="border-2 rounded-lg p-4 sm:p-6 bg-card border-border">
                    <p className="text-muted-foreground whitespace-pre-wrap text-sm leading-relaxed font-medium break-words">{dk.text}</p>
                  </Card>
                  {dk.questions.map((q, i) => <ResultCard key={i} index={i} question={q} userAnswer={answers[`dokkai-${dk.title}-${i}`]} isCorrect={answers[`dokkai-${dk.title}-${i}`] === q.correct} />)}
                </div>
              ))
            ) : (
              (data.dokkai as DakkaiSection[]).map((dk) => (
                <div key={dk.title} className="space-y-3">
                  <div className="border-2 rounded-lg p-3 sm:p-4 bg-muted border-border">
                    <h3 className="text-base sm:text-lg font-bold text-cyan-500">{dk.title}</h3>
                  </div>
                  <Card className="border-2 rounded-lg p-4 sm:p-6 bg-card border-border">
                    <p className="text-muted-foreground whitespace-pre-wrap text-sm leading-relaxed font-medium break-words">{dk.text}</p>
                  </Card>
                  {dk.questions.map((q, i) => <QuestionCard key={i} index={i} question={q} userAnswer={answers[`dokkai-${dk.title}-${i}`]} onAnswer={(o) => handleAnswer(i, o, dk.title)} />)}
                </div>
              ))
            )}
          </TabsContent>

          {/* CHOUKAI */}
          {hasChoukai && (
            <TabsContent value="choukai" className="space-y-4 mt-6">
              {showResults
                ? (data.choukai as ChoukaiQuestion[]).map((q, i) => <ChoukaiResultCard key={i} index={i} question={q} userAnswer={answers[`choukai-${i}`]} isCorrect={answers[`choukai-${i}`] === q.correct} />)
                : (data.choukai as ChoukaiQuestion[]).map((q, i) => <ChoukaiQuestionCard key={i} index={i} question={q} userAnswer={answers[`choukai-${i}`]} onAnswer={(o) => handleAnswer(i, o)} />)}
            </TabsContent>
          )}
        </Tabs>

        {/* HASIL */}
        {showResults && (
          <Card className="border-2 p-4 sm:p-6 md:p-8 mt-6 rounded-2xl bg-gradient-to-br from-card to-muted border-border">
            <div className="text-center space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Hasil Ujian</h2>
              {user && savedToDb && <p className="text-xs text-green-500 font-medium">✓ Hasil tersimpan ke akun {user.name}</p>}
              {user && !savedToDb && total > 0 && <p className="text-xs text-muted-foreground italic">💾 Menyimpan hasil...</p>}
              {!user && <p className="text-xs text-amber-500 font-medium">💡 Login untuk menyimpan hasil ujian secara permanen</p>}
              <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">{percentage}%</div>
              <p className="text-base sm:text-lg text-muted-foreground">{correct} dari {total} soal benar</p>
              <div className={`grid ${hasChoukai ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-3"} gap-2 sm:gap-4 my-6`}>
                {sections.map((s) => {
                  let sc = 0; let st = 0;
                  if (s.isDakkai) {
                    (s.data as DakkaiSection[]).forEach((d) => d.questions.forEach((q, i) => { st++; if (answers[`${s.id}-${d.title}-${i}`] === q.correct) sc++; }));
                  } else {
                    (s.data as (Question | ChoukaiQuestion)[]).forEach((q, i) => { st++; if (answers[`${s.id}-${i}`] === q.correct) sc++; });
                  }
                  return (
                    <div key={s.id} className="rounded-xl p-3 sm:p-4 border-2 bg-card border-border">
                      <p className="text-xs sm:text-sm font-semibold text-cyan-500 mb-1">{s.label}</p>
                      <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">{sc}/{st}</p>
                    </div>
                  );
                })}
              </div>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <Button onClick={() => { setAnswers({}); setShowResults(false); setSavedToDb(false); }} className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl font-semibold py-3 px-6">🔄 Ulangi Ujian</Button>
                <Button onClick={onBack} variant="outline" className="rounded-xl font-semibold py-3 px-6">Pilih Ujian Lain</Button>
              </div>
            </div>
          </Card>
        )}
      </div>

      {!showResults && (
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 backdrop-blur-sm p-3 sm:p-4">
          <div className="max-w-5xl mx-auto">
            <Button onClick={() => setShowResults(true)} disabled={answeredCount === 0} className="w-full py-4 sm:py-5 text-base sm:text-lg rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold disabled:opacity-50 shadow-lg">
              {answeredCount === total ? "✓ Lihat Hasil" : `Lihat Hasil (${answeredCount}/${total})`}
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}

/* ── QUESTION CARD ───────────────────────────────────────────── */
function QuestionCard({ index, question, userAnswer, onAnswer }: { index: number; question: Question; userAnswer?: number; onAnswer: (o: number) => void; }) {
  return (
    <Card className="p-4 sm:p-5 md:p-6 border-2 rounded-xl transition-all bg-card border-border hover:border-cyan-500/50">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-500 flex-shrink-0 min-w-[2rem] sm:min-w-[2.5rem]">{index + 1}.</div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-base sm:text-lg leading-relaxed mb-4 break-words text-foreground">{question.q}</p>
          <div className="space-y-2 sm:space-y-2.5">
            {question.options.map((opt, oi) => (
              <button key={oi} onClick={() => onAnswer(oi)} className={`w-full text-left py-3 px-3 sm:px-4 rounded-lg transition-all border-2 text-sm sm:text-base font-medium flex items-start gap-2.5 sm:gap-3 ${userAnswer === oi ? "bg-cyan-500/20 text-cyan-600 border-cyan-500 dark:text-cyan-300" : "bg-background border-border text-foreground hover:border-cyan-400/50"}`}>
                <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ${userAnswer === oi ? "bg-cyan-500 text-white border-cyan-500" : "border-muted-foreground text-muted-foreground"}`}>{oi + 1}</span>
                <span className="flex-1 break-words leading-relaxed">{opt}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

/* ── RESULT CARD ─────────────────────────────────────────────── */
function ResultCard({ index, question, userAnswer, isCorrect }: { index: number; question: Question; userAnswer?: number; isCorrect: boolean; }) {
  return (
    <Card className={`p-4 sm:p-5 md:p-6 border-2 rounded-xl transition-all ${isCorrect ? "bg-green-500/10 border-green-500/50" : userAnswer !== undefined ? "bg-red-500/10 border-red-500/50" : "bg-card border-border"}`}>
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-500 flex-shrink-0 min-w-[2rem] sm:min-w-[2.5rem]">{index + 1}.</div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-base sm:text-lg leading-relaxed mb-4 break-words text-foreground">{question.q}</p>
          <div className="space-y-2">
            {question.options.map((opt, oi) => {
              const isUser = userAnswer === oi;
              const isCorrectAns = oi === question.correct;
              return (
                <div key={oi} className={`p-3 rounded-lg border-2 flex items-start gap-2.5 sm:gap-3 ${isCorrectAns ? "bg-green-500/20 border-green-500" : isUser ? "bg-red-500/20 border-red-500" : "bg-muted border-border"}`}>
                  <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ${isCorrectAns ? "bg-green-500 text-white border-green-500" : isUser ? "bg-red-500 text-white border-red-500" : "border-muted-foreground text-muted-foreground"}`}>{isCorrectAns ? "✓" : oi + 1}</div>
                  <span className="text-sm sm:text-base font-medium flex-1 break-words leading-relaxed text-foreground">{opt}</span>
                </div>
              );
            })}
          </div>
          {userAnswer !== undefined && !isCorrect && <p className="mt-3 text-xs sm:text-sm font-semibold text-red-500">✗ Salah. Jawaban benar: opsi {question.correct + 1}</p>}
          {isCorrect && <p className="mt-3 text-xs sm:text-sm font-semibold text-green-500">✓ Benar!</p>}
        </div>
      </div>
    </Card>
  );
}

/* ── CHOUKAI QUESTION CARD ───────────────────────────────────── */
function ChoukaiQuestionCard({ index, question, userAnswer, onAnswer }: { index: number; question: ChoukaiQuestion; userAnswer?: number; onAnswer: (o: number) => void; }) {
  const [isPlayingIntro, setIsPlayingIntro] = useState(false);
  const [isPlayingSoal, setIsPlayingSoal] = useState(false);
  const [playCount, setPlayCount]           = useState(0);
  const introRef = useRef<HTMLAudioElement | null>(null);
  const soalRef  = useRef<HTMLAudioElement | null>(null);

  const stopAll = () => {
    introRef.current?.pause();
    soalRef.current?.pause();
    setIsPlayingIntro(false);
    setIsPlayingSoal(false);
  };

  const handleIntro = () => {
    if (!introRef.current) return;
    if (isPlayingIntro) { introRef.current.pause(); setIsPlayingIntro(false); }
    else { stopAll(); introRef.current.currentTime = 0; introRef.current.play(); setIsPlayingIntro(true); }
  };

  const handleSoal = () => {
    if (!soalRef.current) return;
    if (isPlayingSoal) { soalRef.current.pause(); setIsPlayingSoal(false); }
    else { stopAll(); soalRef.current.play(); setIsPlayingSoal(true); setPlayCount((c) => c + 1); }
  };

  const handleReplay = () => {
    if (!soalRef.current) return;
    stopAll(); soalRef.current.currentTime = 0; soalRef.current.play(); setIsPlayingSoal(true); setPlayCount((c) => c + 1);
  };

  return (
    <Card className="p-4 sm:p-5 md:p-6 border-2 rounded-xl transition-all bg-card border-border hover:border-cyan-500/50">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-500 flex-shrink-0 min-w-[2rem] sm:min-w-[2.5rem]">{index + 1}.</div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-base sm:text-lg leading-relaxed mb-4 break-words text-foreground">{question.q}</p>

          <div className="rounded-xl p-4 mb-4 border-2 space-y-2 bg-cyan-500/5 border-cyan-500/20">
            {/* Hidden audio */}
            {question.introAudio && <audio ref={introRef} src={question.introAudio} onEnded={() => setIsPlayingIntro(false)} preload="metadata" />}
            <audio ref={soalRef} src={question.audio} onEnded={() => setIsPlayingSoal(false)} preload="metadata" />

            {/* INSTRUKSI */}
            {question.introAudio && (
              <div className="flex items-center gap-2 p-2 rounded-lg bg-background border border-border">
                <span>📢</span>
                <span className="text-sm font-medium flex-1 text-foreground">Instruksi Soal</span>
                <Button size="sm" onClick={handleIntro} variant={isPlayingIntro ? "secondary" : "outline"} className="text-xs">
                  {isPlayingIntro ? "⏸ Pause" : "▶ Putar"}
                </Button>
              </div>
            )}

            {/* AUDIO SOAL */}
            <div className="flex items-center gap-2 p-2 rounded-lg bg-background border border-border">
              <span>🎧</span>
              <span className="text-sm font-medium flex-1 text-foreground">
                Audio Soal {playCount > 0 && <span className="text-xs text-muted-foreground ml-1">({playCount}x)</span>}
              </span>
              <div className="flex gap-1">
                <Button size="sm" onClick={handleSoal} className="text-xs bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
                  {isPlayingSoal ? "⏸ Pause" : playCount > 0 ? "▶ Lanjut" : "▶ Putar"}
                </Button>
                {playCount > 0 && (
                  <Button size="sm" onClick={handleReplay} variant="outline" className="text-xs">🔄</Button>
                )}
              </div>
            </div>
          </div>

          {/* PILIHAN */}
          <div className="space-y-2 sm:space-y-2.5">
            {question.options.map((opt, oi) => (
              <button key={oi} onClick={() => onAnswer(oi)} className={`w-full text-left py-3 px-3 sm:px-4 rounded-lg transition-all border-2 text-sm sm:text-base font-medium flex items-start gap-2.5 sm:gap-3 ${userAnswer === oi ? "bg-cyan-500/20 text-cyan-600 border-cyan-500 dark:text-cyan-300" : "bg-background border-border text-foreground hover:border-cyan-400/50"}`}>
                <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ${userAnswer === oi ? "bg-cyan-500 text-white border-cyan-500" : "border-muted-foreground text-muted-foreground"}`}>{oi + 1}</span>
                <span className="flex-1 break-words leading-relaxed">{opt}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

/* ── CHOUKAI RESULT CARD ─────────────────────────────────────── */
function ChoukaiResultCard({ index, question, userAnswer, isCorrect }: { index: number; question: ChoukaiQuestion; userAnswer?: number; isCorrect: boolean; }) {
  const soalRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    if (!soalRef.current) return;
    if (soalRef.current.paused) { soalRef.current.play(); setIsPlaying(true); }
    else { soalRef.current.pause(); setIsPlaying(false); }
  };

  return (
    <Card className={`p-4 sm:p-5 md:p-6 border-2 rounded-xl transition-all ${isCorrect ? "bg-green-500/10 border-green-500/50" : userAnswer !== undefined ? "bg-red-500/10 border-red-500/50" : "bg-card border-border"}`}>
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-500 flex-shrink-0 min-w-[2rem] sm:min-w-[2.5rem]">{index + 1}.</div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-base sm:text-lg leading-relaxed mb-4 break-words text-foreground">{question.q}</p>
          <div className="flex items-center gap-2 p-2 rounded-lg mb-4 bg-cyan-500/5 border border-cyan-500/20">
            <audio ref={soalRef} src={question.audio} onEnded={() => setIsPlaying(false)} preload="metadata" />
            <Button size="sm" onClick={handlePlay} variant="outline" className="text-xs gap-1">
              {isPlaying ? "⏸ Pause" : "▶"} Audio
            </Button>
          </div>
          <div className="space-y-2">
            {question.options.map((opt, oi) => {
              const isUser = userAnswer === oi;
              const isCorrectAns = oi === question.correct;
              return (
                <div key={oi} className={`p-3 rounded-lg border-2 flex items-start gap-2.5 sm:gap-3 ${isCorrectAns ? "bg-green-500/20 border-green-500" : isUser ? "bg-red-500/20 border-red-500" : "bg-muted border-border"}`}>
                  <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ${isCorrectAns ? "bg-green-500 text-white border-green-500" : isUser ? "bg-red-500 text-white border-red-500" : "border-muted-foreground text-muted-foreground"}`}>{isCorrectAns ? "✓" : oi + 1}</div>
                  <span className="text-sm sm:text-base font-medium flex-1 break-words leading-relaxed text-foreground">{opt}</span>
                </div>
              );
            })}
          </div>
          {userAnswer !== undefined && !isCorrect && <p className="mt-3 text-xs sm:text-sm font-semibold text-red-500">✗ Salah. Jawaban benar: opsi {question.correct + 1}</p>}
          {isCorrect && <p className="mt-3 text-xs sm:text-sm font-semibold text-green-500">✓ Benar!</p>}
        </div>
      </div>
    </Card>
  );
}
