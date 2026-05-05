"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

interface ExamQuestionsProps {
  data: {
    kanji: Question[];
    bunpou: Question[];
    dokkai: DakkaiSection[];
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
  const [activeTab, setActiveTab] = useState("kanji");
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Load theme preference from localStorage
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("nihongo-exam-theme");
    if (savedTheme === "light") {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newIsDark = !isDarkMode;
    setIsDarkMode(newIsDark);
    localStorage.setItem("nihongo-exam-theme", newIsDark ? "dark" : "light");
  };

  const sections = [
    { id: "kanji", label: "Kanji", icon: "漢", data: data.kanji, isDakkai: false },
    { id: "bunpou", label: "Bunpou", icon: "文", data: data.bunpou, isDakkai: false },
    { id: "dokkai", label: "Dokkai", icon: "読", data: data.dokkai, isDakkai: true },
  ];

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    const questionKey = `${activeTab}-${questionIndex}`;
    setAnswers((prev) => ({
      ...prev,
      [questionKey]: optionIndex,
    }));
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
            if (answers[key] === question.correct) {
              correct++;
            }
          });
        });
      } else {
        const questionData = section.data as Question[];
        questionData.forEach((question, index) => {
          const key = `${section.id}-${index}`;
          total++;
          if (answers[key] === question.correct) {
            correct++;
          }
        });
      }
    });

    return { correct, total };
  };

  const { correct, total } = calculateScore();
  const percentage = Math.round((correct / total) * 100);

  function getJLPTLevel(yearStr: string): string {
    if (yearStr === "2011") return "N3";
    if (yearStr === "2012") return "N3";
    if (yearStr === "2013") return "N2";
    return "N3";
  }

  if (!mounted) {
    return null;
  }

  // Theme color variables
  const bgColor = isDarkMode ? "bg-slate-950" : "bg-white";
  const textColor = isDarkMode ? "text-slate-100" : "text-slate-900";
  const cardBg = isDarkMode ? "bg-slate-900" : "bg-slate-50";
  const cardBorder = isDarkMode ? "border-slate-700" : "border-slate-200";
  const mutedText = isDarkMode ? "text-slate-400" : "text-slate-600";
  const buttonHover = isDarkMode ? "hover:bg-slate-800" : "hover:bg-slate-100";

  return (
    <section className={`min-h-screen ${bgColor} ${textColor} py-8 transition-colors duration-300`}>
      <div className="container mx-auto px-6">
        {/* Header dengan Theme Toggle */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span>JLPT </span>
              <span className="text-cyan-500">{getJLPTLevel(year)}</span>
            </h1>
            <p className={`${mutedText} mt-2 text-lg`}>
              {month === "07" ? "Juli" : "Desember"} {year}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <Button
              onClick={toggleTheme}
              className={`rounded-lg px-4 py-2 border-2 font-semibold transition-all ${
                isDarkMode
                  ? "border-slate-600 bg-slate-800 hover:bg-slate-700 text-yellow-400"
                  : "border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? "☀️ Light" : "🌙 Dark"}
            </Button>

            <Button
              onClick={onBack}
              className={`rounded-lg px-4 py-2 border-2 font-semibold transition-all ${
                isDarkMode
                  ? "border-slate-600 bg-slate-800 hover:bg-slate-700 text-slate-200"
                  : "border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              ← Kembali
            </Button>
          </div>
        </div>

        {/* Progress Bar */}
        {!showResults && (
          <div className={`mb-8 border-2 rounded-xl p-5 transition-colors ${cardBg} ${cardBorder}`}>
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold">
                Progress: {Object.keys(answers).length} / {total}
              </span>
              <span className="text-xs font-medium text-cyan-500">
                {total > 0 ? Math.round((Object.keys(answers).length / total) * 100) : 0}%
              </span>
            </div>
            <div className={`w-full rounded-full h-3 overflow-hidden ${isDarkMode ? "bg-slate-800" : "bg-slate-200"}`}>
              <div
                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${total > 0 ? (Object.keys(answers).length / total) * 100 : 0}%` }}
              />
            </div>
          </div>
        )}

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className={`grid w-full grid-cols-3 rounded-lg border-2 p-1 transition-colors ${isDarkMode ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-slate-200"}`}>
            {sections.map((section) => (
              <TabsTrigger
                key={section.id}
                value={section.id}
                className={`text-base font-semibold rounded-md transition-all ${
                  activeTab === section.id
                    ? isDarkMode
                      ? "bg-slate-900 text-cyan-400"
                      : "bg-white text-cyan-600"
                    : mutedText
                }`}
              >
                <span className="mr-2">{section.icon}</span>
                {section.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Kanji Section */}
          <TabsContent value="kanji" className="space-y-6 mt-8">
            {showResults ? (
              <div className="space-y-6">
                {(data.kanji as Question[]).map((question, index) => {
                  const questionKey = `kanji-${index}`;
                  const userAnswer = answers[questionKey];
                  const isCorrect = userAnswer === question.correct;

                  return (
                    <ResultCard
                      key={index}
                      index={index}
                      question={question}
                      userAnswer={userAnswer}
                      isCorrect={isCorrect}
                      isDarkMode={isDarkMode}
                    />
                  );
                })}
              </div>
            ) : (
              <>
                {(data.kanji as Question[]).map((question, index) => {
                  const questionKey = `kanji-${index}`;
                  const userAnswer = answers[questionKey];

                  return (
                    <QuestionCard
                      key={index}
                      index={index}
                      question={question}
                      userAnswer={userAnswer}
                      onAnswer={(optionIndex) => handleAnswer(index, optionIndex)}
                      isDarkMode={isDarkMode}
                    />
                  );
                })}

                <Button
                  onClick={() => setShowResults(true)}
                  disabled={Object.keys(answers).length < total}
                  className="w-full py-6 text-lg rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold disabled:opacity-50"
                >
                  Lihat Hasil ({Object.keys(answers).length}/{total} Terjawab)
                </Button>
              </>
            )}
          </TabsContent>

          {/* Bunpou Section */}
          <TabsContent value="bunpou" className="space-y-6 mt-8">
            {showResults ? (
              <div className="space-y-6">
                {(data.bunpou as Question[]).map((question, index) => {
                  const questionKey = `bunpou-${index}`;
                  const userAnswer = answers[questionKey];
                  const isCorrect = userAnswer === question.correct;

                  return (
                    <ResultCard
                      key={index}
                      index={index}
                      question={question}
                      userAnswer={userAnswer}
                      isCorrect={isCorrect}
                      isDarkMode={isDarkMode}
                    />
                  );
                })}
              </div>
            ) : (
              <>
                {(data.bunpou as Question[]).map((question, index) => {
                  const questionKey = `bunpou-${index}`;
                  const userAnswer = answers[questionKey];

                  return (
                    <QuestionCard
                      key={index}
                      index={index}
                      question={question}
                      userAnswer={userAnswer}
                      onAnswer={(optionIndex) => handleAnswer(index, optionIndex)}
                      isDarkMode={isDarkMode}
                    />
                  );
                })}

                <Button
                  onClick={() => setShowResults(true)}
                  disabled={Object.keys(answers).length < total}
                  className="w-full py-6 text-lg rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold disabled:opacity-50"
                >
                  Lihat Hasil ({Object.keys(answers).length}/{total} Terjawab)
                </Button>
              </>
            )}
          </TabsContent>

          {/* Dokkai Section */}
          <TabsContent value="dokkai" className="space-y-6 mt-8">
            {showResults ? (
              <div className="space-y-8">
                {(data.dokkai as DakkaiSection[]).map((dakkai) => (
                  <div key={dakkai.title} className="space-y-4">
                    <div className={`border-2 rounded-lg p-4 transition-colors ${isDarkMode ? "bg-slate-800 border-slate-700" : "bg-blue-50 border-blue-200"}`}>
                      <h3 className="text-lg font-bold text-cyan-500">{dakkai.title}</h3>
                    </div>

                    <Card className={`border-2 rounded-lg p-6 transition-colors ${cardBg} ${cardBorder}`}>
                      <p className={`${mutedText} whitespace-pre-wrap text-sm leading-relaxed font-medium`}>
                        {dakkai.text}
                      </p>
                    </Card>

                    {dakkai.questions.map((question, index) => {
                      const questionKey = `dokkai-${dakkai.title}-${index}`;
                      const userAnswer = answers[questionKey];
                      const isCorrect = userAnswer === question.correct;

                      return (
                        <ResultCard
                          key={index}
                          index={index}
                          question={question}
                          userAnswer={userAnswer}
                          isCorrect={isCorrect}
                          isDarkMode={isDarkMode}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            ) : (
              <>
                {(data.dokkai as DakkaiSection[]).map((dakkai) => (
                  <div key={dakkai.title} className="space-y-4">
                    <div className={`border-2 rounded-lg p-4 transition-colors ${isDarkMode ? "bg-slate-800 border-slate-700" : "bg-blue-50 border-blue-200"}`}>
                      <h3 className="text-lg font-bold text-cyan-500">{dakkai.title}</h3>
                    </div>

                    <Card className={`border-2 rounded-lg p-6 transition-colors ${cardBg} ${cardBorder}`}>
                      <p className={`${mutedText} whitespace-pre-wrap text-sm leading-relaxed font-medium`}>
                        {dakkai.text}
                      </p>
                    </Card>

                    {dakkai.questions.map((question, index) => {
                      const questionKey = `dokkai-${dakkai.title}-${index}`;
                      const userAnswer = answers[questionKey];

                      return (
                        <QuestionCard
                          key={index}
                          index={index}
                          question={question}
                          userAnswer={userAnswer}
                          onAnswer={(optionIndex) => handleAnswer(index, optionIndex)}
                          isDarkMode={isDarkMode}
                        />
                      );
                    })}
                  </div>
                ))}

                <Button
                  onClick={() => setShowResults(true)}
                  disabled={Object.keys(answers).length < total}
                  className="w-full py-6 text-lg rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold disabled:opacity-50"
                >
                  Lihat Hasil ({Object.keys(answers).length}/{total} Terjawab)
                </Button>
              </>
            )}
          </TabsContent>
        </Tabs>

        {/* Results Summary */}
        {showResults && (
          <Card className={`sticky bottom-0 left-0 right-0 border-2 p-8 mt-8 rounded-2xl transition-colors ${isDarkMode ? "bg-gradient-to-r from-slate-800 to-slate-900 border-slate-700" : "bg-gradient-to-r from-blue-50 to-cyan-50 border-slate-200"}`}>
            <div className="text-center space-y-4">
              <h2 className={`text-4xl font-bold ${textColor}`}>Hasil Ujian</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                {sections.map((section) => {
                  let sectionCorrect = 0;
                  let sectionTotal = 0;

                  if (section.isDakkai) {
                    const dokkaiData = section.data as DakkaiSection[];
                    dokkaiData.forEach((dakkai) => {
                      dakkai.questions.forEach((question, index) => {
                        const key = `${section.id}-${dakkai.title}-${index}`;
                        sectionTotal++;
                        if (answers[key] === question.correct) {
                          sectionCorrect++;
                        }
                      });
                    });
                  } else {
                    const questionData = section.data as Question[];
                    questionData.forEach((question, index) => {
                      const key = `${section.id}-${index}`;
                      sectionTotal++;
                      if (answers[key] === question.correct) {
                        sectionCorrect++;
                      }
                    });
                  }

                  return (
                    <div
                      key={section.id}
                      className={`rounded-xl p-6 border-2 transition-colors ${isDarkMode ? "bg-slate-800 border-slate-600" : "bg-white border-slate-300"}`}
                    >
                      <p className="text-lg font-semibold text-cyan-500 mb-2">
                        {section.label}
                      </p>
                      <p className={`text-4xl font-bold ${textColor}`}>
                        {sectionCorrect}/{sectionTotal}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-3">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                  {percentage}%
                </div>
                <p className={`text-xl ${mutedText}`}>
                  Total: {correct} dari {total} soal benar
                </p>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => {
                    setAnswers({});
                    setShowResults(false);
                  }}
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-xl font-semibold py-3"
                >
                  Ulangi Ujian
                </Button>
                <Button
                  onClick={onBack}
                  className={`rounded-xl font-semibold py-3 border-2 transition-all ${
                    isDarkMode
                      ? "border-slate-600 bg-slate-800 hover:bg-slate-700 text-slate-200"
                      : "border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  Pilih Ujian Lain
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
}

/* Helper Components */

function QuestionCard({
  index,
  question,
  userAnswer,
  onAnswer,
  isDarkMode,
}: {
  index: number;
  question: Question;
  userAnswer?: number;
  onAnswer: (optionIndex: number) => void;
  isDarkMode: boolean;
}) {
  const cardBg = isDarkMode ? "bg-slate-900" : "bg-slate-50";
  const cardBorder = isDarkMode ? "border-slate-700" : "border-slate-200";
  const textColor = isDarkMode ? "text-slate-100" : "text-slate-900";
  const mutedText = isDarkMode ? "text-slate-400" : "text-slate-600";

  return (
    <Card className={`p-8 border-2 rounded-xl transition-all ${cardBg} ${cardBorder} hover:border-cyan-500/50`}>
      <div className="flex items-start gap-6">
        <div className="text-3xl font-bold text-cyan-500 min-w-fit">
          {index + 1}.
        </div>
        <div className="flex-1">
          <p className={`font-semibold text-lg leading-relaxed mb-6 ${textColor}`}>
            {question.q}
          </p>

          <div className="space-y-3">
            {question.options.map((option, optIndex) => (
              <Button
                key={optIndex}
                onClick={() => onAnswer(optIndex)}
                className={`w-full justify-start text-left h-auto py-4 px-5 rounded-lg transition-all border-2 text-base font-medium ${
                  userAnswer === optIndex
                    ? "bg-cyan-500/20 text-cyan-400 border-cyan-500"
                    : `${cardBg} ${cardBorder} ${textColor} hover:border-cyan-400/50`
                }`}
                variant="outline"
              >
                <span
                  className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold mr-4 flex-shrink-0 ${
                    userAnswer === optIndex
                      ? "bg-cyan-500 text-white border-cyan-500"
                      : `border-slate-400 ${mutedText}`
                  }`}
                >
                  {optIndex + 1}
                </span>
                {option}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

function ResultCard({
  index,
  question,
  userAnswer,
  isCorrect,
  isDarkMode,
}: {
  index: number;
  question: Question;
  userAnswer?: number;
  isCorrect: boolean;
  isDarkMode: boolean;
}) {
  const cardBg = isDarkMode ? "bg-slate-900" : "bg-slate-50";
  const textColor = isDarkMode ? "text-slate-100" : "text-slate-900";
  const mutedText = isDarkMode ? "text-slate-400" : "text-slate-600";

  return (
    <Card
      className={`p-8 border-2 rounded-xl transition-all ${
        isCorrect
          ? isDarkMode
            ? "bg-green-950/30 border-green-700/50"
            : "bg-green-50 border-green-300"
          : userAnswer !== undefined
          ? isDarkMode
            ? "bg-red-950/30 border-red-700/50"
            : "bg-red-50 border-red-300"
          : `${cardBg} border-slate-700`
      }`}
    >
      <div className="flex items-start gap-6">
        <div className="text-3xl font-bold text-cyan-500 min-w-fit">
          {index + 1}.
        </div>
        <div className="flex-1">
          <p className={`font-semibold text-lg leading-relaxed mb-6 ${textColor}`}>
            {question.q}
          </p>

          <div className="space-y-3">
            {question.options.map((option, optIndex) => {
              const isUserAnswer = userAnswer === optIndex;
              const isCorrectAnswer = optIndex === question.correct;

              return (
                <div
                  key={optIndex}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    isCorrectAnswer
                      ? isDarkMode
                        ? "bg-green-900/30 border-green-600"
                        : "bg-green-100 border-green-400"
                      : isUserAnswer
                      ? isDarkMode
                        ? "bg-red-900/30 border-red-600"
                        : "bg-red-100 border-red-400"
                      : isDarkMode
                      ? "bg-slate-800 border-slate-700"
                      : "bg-slate-100 border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                        isCorrectAnswer
                          ? "bg-green-500 text-white border-green-500"
                          : isUserAnswer
                          ? "bg-red-500 text-white border-red-500"
                          : `border-slate-400 ${mutedText}`
                      }`}
                    >
                      {optIndex === question.correct ? "✓" : optIndex + 1}
                    </div>
                    <span className={`text-base font-medium ${textColor}`}>{option}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {userAnswer !== undefined && !isCorrect && (
            <p className="mt-4 text-sm font-semibold text-red-500">
              ✗ Jawaban salah. Jawaban benar adalah opsi {question.correct + 1}
            </p>
          )}
          {isCorrect && (
            <p className="mt-4 text-sm font-semibold text-green-500">
              ✓ Benar!
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}
