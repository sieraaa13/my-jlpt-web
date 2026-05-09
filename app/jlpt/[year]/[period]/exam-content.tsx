"use client";

import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { useExamContext } from "@/components/exam-context";

interface Question {
  q: string;
  category?: string;
  options: string[];
  correct: number;
  section_title?: string;
  text?: string;
}

interface ExamData {
  kanji?: Question[];
  bunpou?: Question[];
  dokkai?: Question[];
}

interface ExamContentProps {
  examData: ExamData;
  examLabel: string;
}

export function ExamContent({ examData, examLabel }: ExamContentProps) {
  const { setExamData: setContextExamData } = useExamContext();

  const sections = {
    kanji: examData.kanji || [],
    bunpou: examData.bunpou || [],
    dokkai: examData.dokkai || [],
  };

  const [activeSection, setActiveSection] = useState<"kanji" | "bunpou" | "dokkai">("kanji");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Record<number, number | null>>>({
    kanji: {},
    bunpou: {},
    dokkai: {},
  });
  const [showResult, setShowResult] = useState(false);

  const currentQuestions = sections[activeSection];
  const question = currentQuestions[currentQuestion];
  const currentAnswer = answers[activeSection][currentQuestion];
  const isAnswered = currentAnswer !== undefined && currentAnswer !== null;
  const isCorrect = isAnswered && currentAnswer === question?.correct;

  const handleAnswer = (index: number) => {
    setAnswers((prev) => ({
      ...prev,
      [activeSection]: {
        ...prev[activeSection],
        [currentQuestion]: index,
      },
    }));
  };

  const handleNext = () => {
    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSectionChange = (section: "kanji" | "bunpou" | "dokkai") => {
    setActiveSection(section);
    setCurrentQuestion(0);
  };

  const results = useMemo(() => {
    const calc = (section: "kanji" | "bunpou" | "dokkai") => {
      const questions = sections[section];
      let correct = 0;
      questions.forEach((q, idx) => {
        if (answers[section][idx] === q.correct) {
          correct++;
        }
      });
      return { correct, total: questions.length };
    };

    return {
      kanji: calc("kanji"),
      bunpou: calc("bunpou"),
      dokkai: calc("dokkai"),
    };
  }, [answers, sections]);

  const allAnswered =
    Object.values(answers)
      .flatMap(Object.values)
      .filter((a) => a !== undefined && a !== null).length ===
    Object.values(sections).reduce((acc, s) => acc + s.length, 0);

  const sectionColors = {
    kanji: "from-pink-500/20 to-rose-500/20",
    bunpou: "from-sky-500/20 to-cyan-500/20",
    dokkai: "from-purple-500/20 to-fuchsia-500/20",
  };

  const sectionBorders = {
    kanji: "border-pink-400/50",
    bunpou: "border-sky-400/50",
    dokkai: "border-purple-400/50",
  };

  const aiQuestions = useMemo(() => {
    return currentQuestions.map((q, idx) => ({
      number: idx + 1,
      q: q.q,
      options: q.options,
      correct: q.correct,
      section: activeSection,
      passage: q.text,
    }));
  }, [currentQuestions, activeSection]);

  const activeQuestionInfo = useMemo(() => {
    if (!question) return null;
    return {
      number: currentQuestion + 1,
      section: activeSection,
      userAnswer:
        currentAnswer !== undefined && currentAnswer !== null
          ? `pilihan ke-${(currentAnswer as number) + 1} (${question.options[currentAnswer as number]})`
          : "belum dijawab",
    };
  }, [question, currentQuestion, activeSection, currentAnswer]);

  useEffect(() => {
    console.log("🔵 ExamContent SEND ke context:", {
      level: "N3",
      section: activeSection,
      questionsCount: aiQuestions.length,
      activeQuestion: activeQuestionInfo,
    });

    setContextExamData({
      level: "N3",
      title: examLabel,
      section: activeSection,
      questions: aiQuestions,
      activeQuestion: activeQuestionInfo,
    });

    return () => {
      console.log("🟠 ExamContent CLEANUP context");
      setContextExamData(null);
    };
  }, [examLabel, activeSection, aiQuestions, activeQuestionInfo, setContextExamData]);

  return (
    <div className="min-h-screen py-12 px-6 relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <div className="absolute top-20 right-10 text-8xl opacity-5">あ</div>
      <div className="absolute bottom-1/4 left-20 text-7xl opacity-5">日</div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="mb-8">
          <Link
            href="/jlpt"
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-secondary/70 rounded-lg transition mb-6"
          >
            ← Kembali
          </Link>

          <div className="space-y-2">
            <h1 className="text-4xl lg:text-5xl font-bold">
              JLPT N3 <span className="text-primary">{examLabel}</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Total {Object.values(sections).reduce((a, b) => a + b.length, 0)} soal | 3 section
            </p>
          </div>
        </div>

        <div className="flex gap-4 mb-8 flex-wrap">
          {(["kanji", "bunpou", "dokkai"] as const).map((section) => (
            <button
              key={section}
              onClick={() => handleSectionChange(section)}
              className={`px-6 py-3 rounded-lg font-medium transition ${
                activeSection === section
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/50 hover:bg-secondary text-foreground"
              }`}
            >
              <div className="flex items-center gap-2">
                <span>
                  {section === "kanji"
                    ? "漢字 (Kanji)"
                    : section === "bunpou"
                    ? "文法 (Bunpou)"
                    : "読解 (Dokkai)"}
                </span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded">
                  {results[section].correct}/{results[section].total}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Soal {currentQuestion + 1} dari {currentQuestions.length}
            </span>
            <span className="text-sm font-medium text-primary">
              {Math.round(((currentQuestion + 1) / currentQuestions.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-primary to-accent h-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / currentQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        {!showResult ? (
          <Card
            className={`bg-gradient-to-br ${sectionColors[activeSection]} backdrop-blur-sm border-2 ${sectionBorders[activeSection]} p-8 mb-8`}
          >
            <div className="mb-8">
              <p className="text-xl lg:text-2xl font-semibold text-foreground leading-relaxed">
                {question?.q}
              </p>
              {question?.text && (
                <div className="mt-6 p-4 bg-background/50 rounded-lg border border-border">
                  <p className="text-sm text-foreground whitespace-pre-wrap">{question.text}</p>
                </div>
              )}
            </div>

            <div className="space-y-3 mb-8">
              {question?.options.map((option: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  disabled={isAnswered}
                  className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                    currentAnswer === idx
                      ? isCorrect
                        ? "border-green-500 bg-green-500/10"
                        : "border-red-500 bg-red-500/10"
                      : isAnswered && idx === question.correct
                      ? "border-green-500 bg-green-500/10"
                      : "border-border hover:border-primary/50 hover:bg-secondary/50"
                  } disabled:cursor-default`}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-semibold text-sm mt-1">
                      {String.fromCharCode(65 + idx)}.
                    </span>
                    <span className="text-foreground">{option}</span>
                    {isAnswered && idx === question.correct && (
                      <span className="ml-auto text-green-500">✓</span>
                    )}
                    {isAnswered && currentAnswer === idx && !isCorrect && (
                      <span className="ml-auto text-red-500">✗</span>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {isAnswered && (
              <div
                className={`p-4 rounded-lg ${
                  isCorrect
                    ? "bg-green-500/10 border border-green-500/50 text-green-700"
                    : "bg-red-500/10 border border-red-500/50 text-red-700"
                }`}
              >
                {isCorrect
                  ? "✓ Jawaban benar!"
                  : `✗ Jawaban salah. Pilihan yang benar adalah: ${String.fromCharCode(65 + (question?.correct || 0))}`}
              </div>
            )}

            <div className="flex gap-4 mt-8">
              <button
                onClick={handlePrev}
                disabled={currentQuestion === 0}
                className="flex-1 px-6 py-3 bg-secondary hover:bg-secondary/80 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl font-medium transition"
              >
                ← Sebelumnya
              </button>
              {currentQuestion === currentQuestions.length - 1 ? (
                <button
                  onClick={() => setShowResult(true)}
                  disabled={!allAnswered}
                  className="flex-1 px-6 py-3 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-primary-foreground rounded-xl font-medium transition"
                >
                  Lihat Hasil
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={!isAnswered}
                  className="flex-1 px-6 py-3 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-primary-foreground rounded-xl font-medium transition"
                >
                  Selanjutnya →
                </button>
              )}
            </div>
          </Card>
        ) : (
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 p-12 text-center mb-8">
            <h2 className="text-4xl font-bold mb-8">Hasil Ujian Selesai!</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 bg-pink-500/10 border border-pink-400/50 rounded-xl">
                <p className="text-pink-600 text-sm font-medium mb-2">KANJI</p>
                <p className="text-4xl font-bold text-pink-600 mb-1">
                  {results.kanji.correct}/{results.kanji.total}
                </p>
                <p className="text-pink-500 text-xs">
                  {Math.round((results.kanji.correct / results.kanji.total) * 100)}%
                </p>
              </div>
              <div className="p-6 bg-sky-500/10 border border-sky-400/50 rounded-xl">
                <p className="text-sky-600 text-sm font-medium mb-2">BUNPOU</p>
                <p className="text-4xl font-bold text-sky-600 mb-1">
                  {results.bunpou.correct}/{results.bunpou.total}
                </p>
                <p className="text-sky-500 text-xs">
                  {Math.round((results.bunpou.correct / results.bunpou.total) * 100)}%
                </p>
              </div>
              <div className="p-6 bg-purple-500/10 border border-purple-400/50 rounded-xl">
                <p className="text-purple-600 text-sm font-medium mb-2">DOKKAI</p>
                <p className="text-4xl font-bold text-purple-600 mb-1">
                  {results.dokkai.correct}/{results.dokkai.total}
                </p>
                <p className="text-purple-500 text-xs">
                  {Math.round((results.dokkai.correct / results.dokkai.total) * 100)}%
                </p>
              </div>
            </div>

            <div className="mb-12 p-8 bg-background/50 rounded-xl border border-border">
              <p className="text-muted-foreground text-sm mb-2">Total Skor</p>
              <p className="text-5xl font-bold text-primary mb-2">
                {results.kanji.correct + results.bunpou.correct + results.dokkai.correct}/
                {results.kanji.total + results.bunpou.total + results.dokkai.total}
              </p>
              <p className="text-lg text-muted-foreground">
                {Math.round(
                  ((results.kanji.correct +
                    results.bunpou.correct +
                    results.dokkai.correct) /
                    (results.kanji.total + results.bunpou.total + results.dokkai.total)) *
                    100
                )}
                % Benar
              </p>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/jlpt"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition"
              >
                Kembali ke Periode Lain
              </Link>
              <button
                onClick={() => {
                  setShowResult(false);
                  setCurrentQuestion(0);
                  setAnswers({ kanji: {}, bunpou: {}, dokkai: {} });
                }}
                className="px-8 py-3 bg-secondary rounded-xl font-medium hover:bg-secondary/80 transition"
              >
                Ulang Ujian
              </button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
