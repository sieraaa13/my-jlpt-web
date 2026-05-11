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
  options: string[];
  correct: number;
  transcript?: string;
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

export default function ExamQuestions({
  data,
  year,
  month,
  onBack,
}: ExamQuestionsProps) {
  const { setExamData: setContextExamData } = useExamContext();
  const { user } = useAuth();

  const [activeTab, setActiveTab] = useState("kanji");
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [savedToDb, setSavedToDb] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("nihongo-exam-theme");
    if (savedTheme === "light") setIsDarkMode(false);
    else setIsDarkMode(true);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDarkMode;
    setIsDarkMode(newIsDark);
    localStorage.setItem("nihongo-exam-theme", newIsDark ? "dark" : "light");
  };

  // Cek apakah ada data choukai
  const hasChoukai = data.choukai && data.choukai.length > 0;

  const sections = [
    { id: "kanji", label: "Kanji", icon: "漢", data: data.kanji, isDakkai: false, isChoukai: false },
    { id: "bunpou", label: "Bunpou", icon: "文", data: data.bunpou, isDakkai: false, isChoukai: false },
    { id: "dokkai", label: "Dokkai", icon: "読", data: data.dokkai, isDakkai: true, isChoukai: false },
    ...(hasChoukai
      ? [{ id: "choukai", label: "Choukai", icon: "聴", data: data.choukai!, isDakkai: false, isChoukai: true }]
      : []),
  ];

  const handleAnswer = (questionIndex: number, optionIndex: number, dakkaiTitle?: string) => {
    const questionKey = dakkaiTitle
      ? `${activeTab}-${dakkaiTitle}-${questionIndex}`
      : `${activeTab}-${questionIndex}`;
    setAnswers((prev) => ({ ...prev, [questionKey]: optionIndex }));
  };

  const calculateScore = () => {
    let correct = 0;
    let total = 0;

    sections.forEach((section) => {
      if (section.isDakkai) {
        const dokkaiData = section.data as DakkaiSection[];
        dokkaiData.forEach((dakkai) => {
          dakkai.questions.forEach((question, index) => {
            const key = `${section.id}-${dakkai.title}-${index}`;
            total++;
            if (answers[key] === question.correct) correct++;
          });
        });
      } else {
        const questionData = section.data as (Question | ChoukaiQuestion)[];
        questionData.forEach((question, index) => {
          const key = `${section.id}-${index}`;
          total++;
          if (answers[key] === question.correct) correct++;
        });
      }
    });

    return { correct, total };
  };

  const { correct, total } = calculateScore();
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
  const answeredCount = Object.keys(answers).length;

  function getJLPTLevel(yearStr: string): string {
    if (yearStr === "2011") return "N3";
    if (yearStr === "2012") return "N3";
    if (yearStr === "2013") return "N2";
    return "N3";
  }

  const level = getJLPTLevel(year);
  const examLabel = `${month === "07" ? "Juli" : "Desember"} ${year}`;

  // ============ AI CONTEXT ============
  const aiQuestions = useMemo(() => {
    if (activeTab === "dokkai") {
      const result: Array<{
        number: number;
        q: string;
        options: string[];
        correct: number;
        section: string;
        passage?: string;
      }> = [];
      let counter = 1;
      (data.dokkai as DakkaiSection[]).forEach((dakkai) => {
        dakkai.questions.forEach((q) => {
          result.push({
            number: counter++,
            q: q.q,
            options: q.options,
            correct: q.correct,
            section: "dokkai",
            passage: dakkai.text,
          });
        });
      });
      return result;
    } else if (activeTab === "choukai" && data.choukai) {
      return data.choukai.map((q, idx) => ({
        number: idx + 1,
        q: q.q,
        options: q.options,
        correct: q.correct,
        section: "choukai",
      }));
    } else {
      const arr = activeTab === "kanji" ? data.kanji : data.bunpou;
      return (arr as Question[]).map((q, idx) => ({
        number: idx + 1,
        q: q.q,
        options: q.options,
        correct: q.correct,
        section: activeTab,
      }));
    }
  }, [activeTab, data]);

  const activeQuestionInfo = useMemo(() => {
    const sectionAnswers = Object.entries(answers).filter(([key]) =>
      key.startsWith(`${activeTab}-`)
    );
    if (sectionAnswers.length === 0) {
      const firstQ = aiQuestions[0];
      if (!firstQ) return null;
      return { number: 1, section: activeTab, userAnswer: "belum dijawab" };
    }
    const lastEntry = sectionAnswers[sectionAnswers.length - 1];
    const [key, optionIdx] = lastEntry;
    const parts = key.split("-");
    const lastNumber = parseInt(parts[parts.length - 1], 10) + 1;
    const targetQ = aiQuestions.find((q) => q.number === lastNumber) || aiQuestions[0];
    return {
      number: targetQ.number,
      section: activeTab,
      userAnswer: `pilihan ke-${optionIdx + 1} (${targetQ.options[optionIdx as number]})`,
    };
  }, [answers, activeTab, aiQuestions]);

  useEffect(() => {
    setContextExamData({
      level,
      title: examLabel,
      section: activeTab,
      questions: aiQuestions,
      activeQuestion: activeQuestionInfo,
      isExamFinished: showResults,
    });
    return () => setContextExamData(null);
  }, [level, examLabel, activeTab, aiQuestions, activeQuestionInfo, setContextExamData, showResults]);
  // ============ END AI CONTEXT ============

  // ============ AUTO-SAVE KE SUPABASE ============
  useEffect(() => {
    if (!showResults || !user || savedToDb) return;
    if (total === 0) return;

    const saveExamResult = async () => {
      try {
        const sectionScores: Record<string, { correct: number; total: number }> = {
          kanji: { correct: 0, total: 0 },
          bunpou: { correct: 0, total: 0 },
          dokkai: { correct: 0, total: 0 },
          choukai: { correct: 0, total: 0 },
        };

        sections.forEach((section) => {
          if (section.isDakkai) {
            const dokkaiData = section.data as DakkaiSection[];
            dokkaiData.forEach((dakkai) => {
              dakkai.questions.forEach((question, index) => {
                const key = `${section.id}-${dakkai.title}-${index}`;
                sectionScores[section.id].total++;
                if (answers[key] === question.correct) sectionScores[section.id].correct++;
              });
            });
          } else {
            const questionData = section.data as (Question | ChoukaiQuestion)[];
            questionData.forEach((question, index) => {
              const key = `${section.id}-${index}`;
              sectionScores[section.id].total++;
              if (answers[key] === question.correct) sectionScores[section.id].correct++;
            });
          }
        });

        const { error } = await supabase.from("exam_history").insert({
          user_id: user.id,
          year,
          month,
          level,
          total_score: correct,
          total_questions: total,
          percentage,
          section_scores: sectionScores,
          answers,
        });

        if (error) console.error("Gagal simpan ke Supabase:", error);
        else {
          setSavedToDb(true);
          console.log("✅ Hasil ujian tersimpan ke Supabase");
        }
      } catch (err) {
        console.error("Save error:", err);
      }
    };

    saveExamResult();
  }, [showResults, user, savedToDb, total, correct, percentage, level, year, month, answers, sections]);
  // ============ END AUTO-SAVE ============

  if (!mounted) return null;

  const bgColor = isDarkMode ? "bg-slate-950" : "bg-white";
  const textColor = isDarkMode ? "text-slate-100" : "text-slate-900";
  const cardBg = isDarkMode ? "bg-slate-900" : "bg-slate-50";
  const cardBorder = isDarkMode ? "border-slate-700" : "border-slate-200";
  const mutedText = isDarkMode ? "text-slate-400" : "text-slate-600";
  const tabColumns = hasChoukai ? "grid-cols-4" : "grid-cols-3";

  return (
    <section className={`min-h-screen ${bgColor} ${textColor} pb-32 transition-colors duration-300`}>
      {/* STICKY HEADER */}
      <div className={`sticky top-0 z-30 ${bgColor} border-b ${cardBorder} backdrop-blur-sm bg-opacity-95`}>
        <div className="max-w-5xl mx-auto px-3 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-2">
            <button onClick={onBack} className={`flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-lg transition-colors ${isDarkMode ? "hover:bg-slate-800 text-slate-300" : "hover:bg-slate-100 text-slate-700"}`}>
              <span>←</span>
              <span className="hidden sm:inline">Kembali</span>
            </button>
            <div className="flex-1 text-center min-w-0 px-2">
              <h1 className="text-lg sm:text-2xl font-bold truncate">
                JLPT <span className="text-cyan-500">{level}</span>
              </h1>
              <p className={`text-xs sm:text-sm ${mutedText}`}>{examLabel}</p>
            </div>
            <button onClick={toggleTheme} className={`text-lg p-2 rounded-lg transition-colors ${isDarkMode ? "hover:bg-slate-800 text-yellow-400" : "hover:bg-slate-100 text-slate-700"}`}>
              {isDarkMode ? "☀️" : "🌙"}
            </button>
          </div>

          {!showResults && (
            <div className="mt-3">
              <div className="flex justify-between items-center mb-1.5">
                <span className={`text-xs font-medium ${mutedText}`}>{answeredCount} dari {total} terjawab</span>
                <span className="text-xs font-semibold text-cyan-500">{total > 0 ? Math.round((answeredCount / total) * 100) : 0}%</span>
              </div>
              <div className={`w-full rounded-full h-1.5 overflow-hidden ${isDarkMode ? "bg-slate-800" : "bg-slate-200"}`}>
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full transition-all duration-300" style={{ width: `${total > 0 ? (answeredCount / total) * 100 : 0}%` }} />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className={`grid w-full ${tabColumns} rounded-lg border-2 p-1 transition-colors ${isDarkMode ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-slate-200"}`}>
            {sections.map((section) => (
              <TabsTrigger key={section.id} value={section.id} className={`text-sm sm:text-base font-semibold rounded-md transition-all py-2 ${activeTab === section.id ? (isDarkMode ? "bg-slate-900 text-cyan-400" : "bg-white text-cyan-600") : mutedText}`}>
                <span className="mr-1 sm:mr-2">{section.icon}</span>
                <span className="hidden xs:inline sm:inline">{section.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Kanji Section */}
          <TabsContent value="kanji" className="space-y-4 mt-6">
            {showResults ? (
              <div className="space-y-4">
                {(data.kanji as Question[]).map((question, index) => {
                  const userAnswer = answers[`kanji-${index}`];
                  const isCorrect = userAnswer === question.correct;
                  return <ResultCard key={index} index={index} question={question} userAnswer={userAnswer} isCorrect={isCorrect} isDarkMode={isDarkMode} />;
                })}
              </div>
            ) : (
              <>
                {(data.kanji as Question[]).map((question, index) => {
                  const userAnswer = answers[`kanji-${index}`];
                  return <QuestionCard key={index} index={index} question={question} userAnswer={userAnswer} onAnswer={(optionIndex) => handleAnswer(index, optionIndex)} isDarkMode={isDarkMode} />;
                })}
              </>
            )}
          </TabsContent>

          {/* Bunpou Section */}
          <TabsContent value="bunpou" className="space-y-4 mt-6">
            {showResults ? (
              <div className="space-y-4">
                {(data.bunpou as Question[]).map((question, index) => {
                  const userAnswer = answers[`bunpou-${index}`];
                  const isCorrect = userAnswer === question.correct;
                  return <ResultCard key={index} index={index} question={question} userAnswer={userAnswer} isCorrect={isCorrect} isDarkMode={isDarkMode} />;
                })}
              </div>
            ) : (
              <>
                {(data.bunpou as Question[]).map((question, index) => {
                  const userAnswer = answers[`bunpou-${index}`];
                  return <QuestionCard key={index} index={index} question={question} userAnswer={userAnswer} onAnswer={(optionIndex) => handleAnswer(index, optionIndex)} isDarkMode={isDarkMode} />;
                })}
              </>
            )}
          </TabsContent>

          {/* Dokkai Section */}
          <TabsContent value="dokkai" className="space-y-6 mt-6">
            {showResults ? (
              <div className="space-y-6">
                {(data.dokkai as DakkaiSection[]).map((dakkai) => (
                  <div key={dakkai.title} className="space-y-3">
                    <div className={`border-2 rounded-lg p-3 sm:p-4 transition-colors ${isDarkMode ? "bg-slate-800 border-slate-700" : "bg-blue-50 border-blue-200"}`}>
                      <h3 className="text-base sm:text-lg font-bold text-cyan-500">{dakkai.title}</h3>
                    </div>
                    <Card className={`border-2 rounded-lg p-4 sm:p-6 transition-colors ${cardBg} ${cardBorder}`}>
                      <p className={`${mutedText} whitespace-pre-wrap text-sm leading-relaxed font-medium break-words`}>{dakkai.text}</p>
                    </Card>
                    {dakkai.questions.map((question, index) => {
                      const userAnswer = answers[`dokkai-${dakkai.title}-${index}`];
                      const isCorrect = userAnswer === question.correct;
                      return <ResultCard key={index} index={index} question={question} userAnswer={userAnswer} isCorrect={isCorrect} isDarkMode={isDarkMode} />;
                    })}
                  </div>
                ))}
              </div>
            ) : (
              <>
                {(data.dokkai as DakkaiSection[]).map((dakkai) => (
                  <div key={dakkai.title} className="space-y-3">
                    <div className={`border-2 rounded-lg p-3 sm:p-4 transition-colors ${isDarkMode ? "bg-slate-800 border-slate-700" : "bg-blue-50 border-blue-200"}`}>
                      <h3 className="text-base sm:text-lg font-bold text-cyan-500">{dakkai.title}</h3>
                    </div>
                    <Card className={`border-2 rounded-lg p-4 sm:p-6 transition-colors ${cardBg} ${cardBorder}`}>
                      <p className={`${mutedText} whitespace-pre-wrap text-sm leading-relaxed font-medium break-words`}>{dakkai.text}</p>
                    </Card>
                    {dakkai.questions.map((question, index) => {
                      const userAnswer = answers[`dokkai-${dakkai.title}-${index}`];
                      return <QuestionCard key={index} index={index} question={question} userAnswer={userAnswer} onAnswer={(optionIndex) => handleAnswer(index, optionIndex, dakkai.title)} isDarkMode={isDarkMode} />;
                    })}
                  </div>
                ))}
              </>
            )}
          </TabsContent>

          {/* CHOUKAI Section (Listening) */}
          {hasChoukai && (
            <TabsContent value="choukai" className="space-y-4 mt-6">
              {showResults ? (
                <div className="space-y-4">
                  {(data.choukai as ChoukaiQuestion[]).map((question, index) => {
                    const userAnswer = answers[`choukai-${index}`];
                    const isCorrect = userAnswer === question.correct;
                    return <ChoukaiResultCard key={index} index={index} question={question} userAnswer={userAnswer} isCorrect={isCorrect} isDarkMode={isDarkMode} />;
                  })}
                </div>
              ) : (
                <>
                  {(data.choukai as ChoukaiQuestion[]).map((question, index) => {
                    const userAnswer = answers[`choukai-${index}`];
                    return <ChoukaiQuestionCard key={index} index={index} question={question} userAnswer={userAnswer} onAnswer={(optionIndex) => handleAnswer(index, optionIndex)} isDarkMode={isDarkMode} />;
                  })}
                </>
              )}
            </TabsContent>
          )}
        </Tabs>

        {/* Results Summary */}
        {showResults && (
          <Card className={`border-2 p-4 sm:p-6 md:p-8 mt-6 rounded-2xl transition-colors ${isDarkMode ? "bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700" : "bg-gradient-to-br from-blue-50 to-cyan-50 border-slate-200"}`}>
            <div className="text-center space-y-4">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${textColor}`}>Hasil Ujian</h2>

              {user && savedToDb && <p className="text-xs text-green-500 font-medium">✓ Hasil tersimpan ke akun {user.name}</p>}
              {user && !savedToDb && total > 0 && <p className="text-xs text-muted-foreground italic">💾 Menyimpan hasil...</p>}
              {!user && <p className="text-xs text-amber-500 font-medium">💡 Login untuk menyimpan hasil ujian secara permanen</p>}

              <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">{percentage}%</div>
              <p className={`text-base sm:text-lg ${mutedText}`}>{correct} dari {total} soal benar</p>

              <div className={`grid ${hasChoukai ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-3"} gap-2 sm:gap-4 my-6`}>
                {sections.map((section) => {
                  let sectionCorrect = 0;
                  let sectionTotal = 0;

                  if (section.isDakkai) {
                    const dokkaiData = section.data as DakkaiSection[];
                    dokkaiData.forEach((dakkai) => {
                      dakkai.questions.forEach((question, index) => {
                        const key = `${section.id}-${dakkai.title}-${index}`;
                        sectionTotal++;
                        if (answers[key] === question.correct) sectionCorrect++;
                      });
                    });
                  } else {
                    const questionData = section.data as (Question | ChoukaiQuestion)[];
                    questionData.forEach((question, index) => {
                      const key = `${section.id}-${index}`;
                      sectionTotal++;
                      if (answers[key] === question.correct) sectionCorrect++;
                    });
                  }

                  return (
                    <div key={section.id} className={`rounded-xl p-3 sm:p-4 border-2 transition-colors ${isDarkMode ? "bg-slate-800 border-slate-600" : "bg-white border-slate-300"}`}>
                      <p className="text-xs sm:text-sm font-semibold text-cyan-500 mb-1">{section.label}</p>
                      <p className={`text-xl sm:text-2xl md:text-3xl font-bold ${textColor}`}>{sectionCorrect}/{sectionTotal}</p>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <Button onClick={() => { setAnswers({}); setShowResults(false); setSavedToDb(false); }} className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl font-semibold py-3 px-6">
                  🔄 Ulangi Ujian
                </Button>
                <Button onClick={onBack} className={`rounded-xl font-semibold py-3 px-6 border-2 transition-all ${isDarkMode ? "border-slate-600 bg-slate-800 hover:bg-slate-700 text-slate-200" : "border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-700"}`}>
                  Pilih Ujian Lain
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>

      {!showResults && (
        <div className={`fixed bottom-0 left-0 right-0 z-40 border-t ${cardBorder} ${bgColor} backdrop-blur-sm bg-opacity-95 p-3 sm:p-4`}>
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

/* ============ HELPER COMPONENTS ============ */

function QuestionCard({ index, question, userAnswer, onAnswer, isDarkMode }: { index: number; question: Question; userAnswer?: number; onAnswer: (optionIndex: number) => void; isDarkMode: boolean; }) {
  const cardBg = isDarkMode ? "bg-slate-900" : "bg-slate-50";
  const cardBorder = isDarkMode ? "border-slate-700" : "border-slate-200";
  const textColor = isDarkMode ? "text-slate-100" : "text-slate-900";
  const mutedText = isDarkMode ? "text-slate-400" : "text-slate-600";

  return (
    <Card className={`p-4 sm:p-5 md:p-6 border-2 rounded-xl transition-all ${cardBg} ${cardBorder} hover:border-cyan-500/50`}>
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-500 flex-shrink-0 min-w-[2rem] sm:min-w-[2.5rem]">{index + 1}.</div>
        <div className="flex-1 min-w-0">
          <p className={`font-semibold text-base sm:text-lg leading-relaxed mb-4 break-words ${textColor}`}>{question.q}</p>
          <div className="space-y-2 sm:space-y-2.5">
            {question.options.map((option, optIndex) => (
              <button key={optIndex} onClick={() => onAnswer(optIndex)} className={`w-full text-left py-3 px-3 sm:px-4 rounded-lg transition-all border-2 text-sm sm:text-base font-medium flex items-start gap-2.5 sm:gap-3 ${userAnswer === optIndex ? (isDarkMode ? "bg-cyan-500/20 text-cyan-300 border-cyan-500" : "bg-cyan-50 text-cyan-700 border-cyan-500") : (isDarkMode ? "bg-slate-800 border-slate-700 text-slate-200 hover:border-cyan-400/50" : "bg-white border-slate-200 text-slate-700 hover:border-cyan-400/50")}`}>
                <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ${userAnswer === optIndex ? "bg-cyan-500 text-white border-cyan-500" : `border-slate-400 ${mutedText}`}`}>{optIndex + 1}</span>
                <span className="flex-1 break-words leading-relaxed">{option}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

function ResultCard({ index, question, userAnswer, isCorrect, isDarkMode }: { index: number; question: Question; userAnswer?: number; isCorrect: boolean; isDarkMode: boolean; }) {
  const textColor = isDarkMode ? "text-slate-100" : "text-slate-900";
  const mutedText = isDarkMode ? "text-slate-400" : "text-slate-600";

  return (
    <Card className={`p-4 sm:p-5 md:p-6 border-2 rounded-xl transition-all ${isCorrect ? (isDarkMode ? "bg-green-950/30 border-green-700/50" : "bg-green-50 border-green-300") : userAnswer !== undefined ? (isDarkMode ? "bg-red-950/30 border-red-700/50" : "bg-red-50 border-red-300") : (isDarkMode ? "bg-slate-900 border-slate-700" : "bg-slate-50 border-slate-200")}`}>
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-500 flex-shrink-0 min-w-[2rem] sm:min-w-[2.5rem]">{index + 1}.</div>
        <div className="flex-1 min-w-0">
          <p className={`font-semibold text-base sm:text-lg leading-relaxed mb-4 break-words ${textColor}`}>{question.q}</p>
          <div className="space-y-2">
            {question.options.map((option, optIndex) => {
              const isUserAnswer = userAnswer === optIndex;
              const isCorrectAnswer = optIndex === question.correct;
              return (
                <div key={optIndex} className={`p-3 rounded-lg border-2 transition-all flex items-start gap-2.5 sm:gap-3 ${isCorrectAnswer ? (isDarkMode ? "bg-green-900/30 border-green-600" : "bg-green-100 border-green-400") : isUserAnswer ? (isDarkMode ? "bg-red-900/30 border-red-600" : "bg-red-100 border-red-400") : (isDarkMode ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-slate-300")}`}>
                  <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ${isCorrectAnswer ? "bg-green-500 text-white border-green-500" : isUserAnswer ? "bg-red-500 text-white border-red-500" : `border-slate-400 ${mutedText}`}`}>{isCorrectAnswer ? "✓" : optIndex + 1}</div>
                  <span className={`text-sm sm:text-base font-medium flex-1 break-words leading-relaxed ${textColor}`}>{option}</span>
                </div>
              );
            })}
          </div>
          {userAnswer !== undefined && !isCorrect && <p className="mt-3 text-xs sm:text-sm font-semibold text-red-500 break-words">✗ Salah. Jawaban benar: opsi {question.correct + 1}</p>}
          {isCorrect && <p className="mt-3 text-xs sm:text-sm font-semibold text-green-500">✓ Benar!</p>}
        </div>
      </div>
    </Card>
  );
}

/* ============ CHOUKAI (LISTENING) COMPONENTS ============ */

function ChoukaiQuestionCard({ index, question, userAnswer, onAnswer, isDarkMode }: { index: number; question: ChoukaiQuestion; userAnswer?: number; onAnswer: (optionIndex: number) => void; isDarkMode: boolean; }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playCount, setPlayCount] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const cardBg = isDarkMode ? "bg-slate-900" : "bg-slate-50";
  const cardBorder = isDarkMode ? "border-slate-700" : "border-slate-200";
  const textColor = isDarkMode ? "text-slate-100" : "text-slate-900";
  const mutedText = isDarkMode ? "text-slate-400" : "text-slate-600";

  const handlePlay = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
      setPlayCount((c) => c + 1);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleReplay = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setIsPlaying(true);
    setPlayCount((c) => c + 1);
  };

  return (
    <Card className={`p-4 sm:p-5 md:p-6 border-2 rounded-xl transition-all ${cardBg} ${cardBorder} hover:border-cyan-500/50`}>
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-500 flex-shrink-0 min-w-[2rem] sm:min-w-[2.5rem]">{index + 1}.</div>
        <div className="flex-1 min-w-0">
          <p className={`font-semibold text-base sm:text-lg leading-relaxed mb-4 break-words ${textColor}`}>{question.q}</p>

          {/* Audio Player */}
          <div className={`rounded-xl p-4 mb-4 border-2 ${isDarkMode ? "bg-slate-800 border-slate-600" : "bg-cyan-50 border-cyan-200"}`}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">🎧</span>
              <span className={`text-sm font-semibold ${textColor}`}>Audio Soal</span>
              {playCount > 0 && <span className={`text-xs ml-auto ${mutedText}`}>Diputar {playCount}x</span>}
            </div>

            <audio ref={audioRef} src={question.audio} onEnded={() => setIsPlaying(false)} preload="metadata" />

            <div className="flex items-center gap-2">
              <Button onClick={handlePlay} className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
                {isPlaying ? "⏸ Pause" : playCount > 0 ? "▶ Lanjutkan" : "▶ Putar Audio"}
              </Button>
              <Button onClick={handleReplay} variant="outline" disabled={playCount === 0} className={isDarkMode ? "border-slate-600 text-slate-200" : "border-slate-300"}>
                🔄 Ulangi
              </Button>
            </div>

            {question.transcript && (
              <details className="mt-3">
                <summary className={`text-xs cursor-pointer ${mutedText} hover:text-cyan-500`}>📝 Lihat Transcript</summary>
                <p className={`text-sm mt-2 p-3 rounded-lg whitespace-pre-line ${isDarkMode ? "bg-slate-950" : "bg-white"} ${textColor}`}>{question.transcript}</p>
              </details>
            )}
          </div>

          {/* Pilihan Jawaban */}
          <div className="space-y-2 sm:space-y-2.5">
            {question.options.map((option, optIndex) => (
              <button key={optIndex} onClick={() => onAnswer(optIndex)} className={`w-full text-left py-3 px-3 sm:px-4 rounded-lg transition-all border-2 text-sm sm:text-base font-medium flex items-start gap-2.5 sm:gap-3 ${userAnswer === optIndex ? (isDarkMode ? "bg-cyan-500/20 text-cyan-300 border-cyan-500" : "bg-cyan-50 text-cyan-700 border-cyan-500") : (isDarkMode ? "bg-slate-800 border-slate-700 text-slate-200 hover:border-cyan-400/50" : "bg-white border-slate-200 text-slate-700 hover:border-cyan-400/50")}`}>
                <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ${userAnswer === optIndex ? "bg-cyan-500 text-white border-cyan-500" : `border-slate-400 ${mutedText}`}`}>{optIndex + 1}</span>
                <span className="flex-1 break-words leading-relaxed">{option}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

function ChoukaiResultCard({ index, question, userAnswer, isCorrect, isDarkMode }: { index: number; question: ChoukaiQuestion; userAnswer?: number; isCorrect: boolean; isDarkMode: boolean; }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const textColor = isDarkMode ? "text-slate-100" : "text-slate-900";
  const mutedText = isDarkMode ? "text-slate-400" : "text-slate-600";

  const handlePlay = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <Card className={`p-4 sm:p-5 md:p-6 border-2 rounded-xl transition-all ${isCorrect ? (isDarkMode ? "bg-green-950/30 border-green-700/50" : "bg-green-50 border-green-300") : userAnswer !== undefined ? (isDarkMode ? "bg-red-950/30 border-red-700/50" : "bg-red-50 border-red-300") : (isDarkMode ? "bg-slate-900 border-slate-700" : "bg-slate-50 border-slate-200")}`}>
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-500 flex-shrink-0 min-w-[2rem] sm:min-w-[2.5rem]">{index + 1}.</div>
        <div className="flex-1 min-w-0">
          <p className={`font-semibold text-base sm:text-lg leading-relaxed mb-4 break-words ${textColor}`}>{question.q}</p>

          <div className={`rounded-xl p-3 mb-4 border-2 ${isDarkMode ? "bg-slate-800 border-slate-600" : "bg-cyan-50 border-cyan-200"}`}>
            <audio ref={audioRef} src={question.audio} onEnded={() => setIsPlaying(false)} preload="metadata" />
            <div className="flex items-center gap-2">
              <Button onClick={handlePlay} size="sm" variant="outline" className="gap-2">{isPlaying ? "⏸ Pause" : "▶"} Audio</Button>
              {question.transcript && (
                <details className="flex-1">
                  <summary className={`text-xs cursor-pointer ${mutedText} hover:text-cyan-500`}>📝 Lihat Transcript</summary>
                  <p className={`text-sm mt-2 p-3 rounded-lg whitespace-pre-line ${isDarkMode ? "bg-slate-950" : "bg-white"} ${textColor}`}>{question.transcript}</p>
                </details>
              )}
            </div>
          </div>

          <div className="space-y-2">
            {question.options.map((option, optIndex) => {
              const isUserAnswer = userAnswer === optIndex;
              const isCorrectAnswer = optIndex === question.correct;
              return (
                <div key={optIndex} className={`p-3 rounded-lg border-2 transition-all flex items-start gap-2.5 sm:gap-3 ${isCorrectAnswer ? (isDarkMode ? "bg-green-900/30 border-green-600" : "bg-green-100 border-green-400") : isUserAnswer ? (isDarkMode ? "bg-red-900/30 border-red-600" : "bg-red-100 border-red-400") : (isDarkMode ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-slate-300")}`}>
                  <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ${isCorrectAnswer ? "bg-green-500 text-white border-green-500" : isUserAnswer ? "bg-red-500 text-white border-red-500" : `border-slate-400 ${mutedText}`}`}>{isCorrectAnswer ? "✓" : optIndex + 1}</div>
                  <span className={`text-sm sm:text-base font-medium flex-1 break-words leading-relaxed ${textColor}`}>{option}</span>
                </div>
              );
            })}
          </div>
          {userAnswer !== undefined && !isCorrect && <p className="mt-3 text-xs sm:text-sm font-semibold text-red-500 break-words">✗ Salah. Jawaban benar: opsi {question.correct + 1}</p>}
          {isCorrect && <p className="mt-3 text-xs sm:text-sm font-semibold text-green-500">✓ Benar!</p>}
        </div>
      </div>
    </Card>
  );
}
