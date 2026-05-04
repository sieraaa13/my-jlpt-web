"use client";

import Link from "next/link";
import { useState } from "react";
import { Card } from "@/components/ui/card";

interface Question {
  q: string;
  category: string;
  options: string[];
  correct: number;
}

interface Info {
  title: string;
  description: string;
  color: string;
  borderColor: string;
}

export function QuizContent({ questions, info }: { questions: Question[]; info: Info }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correct;

  const handleAnswer = (index: number) => {
    if (!answered) {
      setSelectedAnswer(index);
      setAnswered(true);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
      setAnswered(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-6 relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <div className="absolute top-20 right-10 text-8xl opacity-5">あ</div>
      <div className="absolute bottom-1/4 left-20 text-7xl opacity-5">日</div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="mb-8">
          <Link
            href="/jlpt"
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-secondary/70 rounded-lg transition mb-6"
          >
            ← Kembali
          </Link>

          <div className="space-y-2">
            <h1 className="text-4xl lg:text-5xl font-bold">
              JLPT <span className="text-primary">{info.title}</span>
            </h1>
            <p className="text-muted-foreground text-lg">{info.description}</p>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Soal {currentQuestion + 1} dari {questions.length}
            </span>
            <span className="text-sm font-medium text-primary">
              {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-primary to-accent h-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <Card className={`bg-gradient-to-br ${info.color} backdrop-blur-sm border-2 ${info.borderColor} p-8 mb-8`}>
          <div className="mb-8">
            <p className="text-xl lg:text-2xl font-semibold text-foreground leading-relaxed">
              {question.q}
            </p>
          </div>

          <div className="space-y-3 mb-8">
            {question.options.map((option: string, idx: number) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                disabled={answered}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                  selectedAnswer === idx
                    ? isCorrect
                      ? "border-green-500 bg-green-500/10"
                      : "border-red-500 bg-red-500/10"
                    : answered && idx === question.correct
                    ? "border-green-500 bg-green-500/10"
                    : "border-border hover:border-primary/50 hover:bg-secondary/50"
                } disabled:cursor-default`}
              >
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-sm mt-1">
                    {String.fromCharCode(65 + idx)}.
                  </span>
                  <span className="text-foreground">{option}</span>
                  {answered && idx === question.correct && (
                    <span className="ml-auto text-green-500">✓</span>
                  )}
                  {answered && selectedAnswer === idx && !isCorrect && (
                    <span className="ml-auto text-red-500">✗</span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {answered && (
            <div
              className={`p-4 rounded-lg mb-8 ${
                isCorrect ? "bg-green-500/10 border border-green-500/50 text-green-700" : "bg-red-500/10 border border-red-500/50 text-red-700"
              }`}
            >
              {isCorrect ? "✓ Jawaban benar!" : "✗ Jawaban salah. Pilihan yang benar adalah: " + String.fromCharCode(65 + question.correct)}
            </div>
          )}

          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              disabled={currentQuestion === 0}
              className="flex-1 px-6 py-3 bg-secondary hover:bg-secondary/80 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl font-medium transition"
            >
              ← Sebelumnya
            </button>
            <button
              onClick={handleNext}
              disabled={!answered || currentQuestion === questions.length - 1}
              className="flex-1 px-6 py-3 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-primary-foreground rounded-xl font-medium transition"
            >
              Selanjutnya →
            </button>
          </div>
        </Card>

        {currentQuestion === questions.length - 1 && answered && (
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Selesai!</h2>
            <p className="text-muted-foreground mb-6">Anda telah menyelesaikan semua soal</p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/jlpt"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition"
              >
                Kembali ke Kategori
              </Link>
              <button
                onClick={() => {
                  setCurrentQuestion(0);
                  setSelectedAnswer(null);
                  setAnswered(false);
                }}
                className="px-6 py-3 bg-secondary rounded-xl font-medium hover:bg-secondary/80 transition"
              >
                Ulang dari Awal
              </button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
