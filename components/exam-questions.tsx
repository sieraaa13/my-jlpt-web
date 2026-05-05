"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Question {
  q: string;
  options: string[];
  correct: number;
}

interface ExamQuestionsProps {
  data: {
    kanji: Question[];
    bunpou: Question[];
    dokkai: Question[];
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

  const sections = [
    { id: "kanji", label: "Kanji", icon: "漢", data: data.kanji },
    { id: "bunpou", label: "Bunpou", icon: "文", data: data.bunpou },
    { id: "dokkai", label: "Dokkai", icon: "読", data: data.dokkai },
  ];

  const currentSection = sections.find((s) => s.id === activeTab);

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
      section.data.forEach((question, index) => {
        const key = `${section.id}-${index}`;
        total++;
        if (answers[key] === question.correct) {
          correct++;
        }
      });
    });

    return { correct, total };
  };

  const { correct, total } = calculateScore();
  const percentage = Math.round((correct / total) * 100);

  return (
    <section className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold">
              <span className="text-foreground">JLPT </span>
              <span className="text-primary">{year === "2011" ? "N3" : "N" + (year % 6)}</span>
            </h1>
            <p className="text-muted-foreground mt-2">
              {month === "07" ? "Juli" : "Desember"} {year}
            </p>
          </div>

          <Button
            onClick={onBack}
            variant="outline"
            className="rounded-xl"
          >
            ← Kembali
          </Button>
        </div>

        {/* Progress */}
        {!showResults && (
          <div className="mb-8 bg-secondary/30 border border-border rounded-xl p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-muted-foreground">
                Progress: {Object.keys(answers).length} / {total}
              </span>
              <span className="text-xs text-primary">
                {Math.round((Object.keys(answers).length / total) * 100)}%
              </span>
            </div>
            <div className="w-full bg-background rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(Object.keys(answers).length / total) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-3 bg-secondary/50">
            {sections.map((section) => (
              <TabsTrigger
                key={section.id}
                value={section.id}
                className="text-lg font-medium transition-all"
              >
                <span className="mr-2">{section.icon}</span>
                {section.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Questions Content */}
          {sections.map((section) => (
            <TabsContent key={section.id} value={section.id} className="space-y-6 mt-8">
              {showResults ? (
                // Results View
                <div className="space-y-4">
                  {section.data.map((question, index) => {
                    const questionKey = `${section.id}-${index}`;
                    const userAnswer = answers[questionKey];
                    const isCorrect = userAnswer === question.correct;

                    return (
                      <Card
                        key={index}
                        className={`p-6 border-2 transition-all ${
                          isCorrect
                            ? "bg-green-500/10 border-green-500/30"
                            : userAnswer !== undefined
                            ? "bg-red-500/10 border-red-500/30"
                            : "bg-secondary/20 border-border"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-2xl font-bold text-primary min-w-fit">
                            {index + 1}.
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-foreground mb-4">
                              {question.q}
                            </p>

                            <div className="space-y-2">
                              {question.options.map((option, optIndex) => {
                                const isUserAnswer = userAnswer === optIndex;
                                const isCorrectAnswer = optIndex === question.correct;

                                return (
                                  <div
                                    key={optIndex}
                                    className={`p-3 rounded-lg border-2 transition-all ${
                                      isCorrectAnswer
                                        ? "bg-green-500/20 border-green-500/50"
                                        : isUserAnswer
                                        ? "bg-red-500/20 border-red-500/50"
                                        : "bg-background border-border"
                                    }`}
                                  >
                                    <div className="flex items-center gap-3">
                                      <div
                                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                                          isCorrectAnswer
                                            ? "bg-green-500 text-white border-green-500"
                                            : isUserAnswer
                                            ? "bg-red-500 text-white border-red-500"
                                            : "border-border text-muted-foreground"
                                        }`}
                                      >
                                        {optIndex === question.correct ? "✓" : optIndex + 1}
                                      </div>
                                      <span className="text-foreground">{option}</span>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>

                            {userAnswer !== undefined && !isCorrect && (
                              <p className="mt-3 text-sm text-red-600 font-medium">
                                ✗ Jawaban salah. Jawaban benar adalah opsi {question.correct + 1}
                              </p>
                            )}
                            {isCorrect && (
                              <p className="mt-3 text-sm text-green-600 font-medium">
                                ✓ Benar!
                              </p>
                            )}
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              ) : (
                // Question Input View
                <>
                  {section.data.map((question, index) => {
                    const questionKey = `${section.id}-${index}`;
                    const userAnswer = answers[questionKey];

                    return (
                      <Card
                        key={index}
                        className="p-6 border-2 border-border hover:border-primary/50 transition-all"
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-2xl font-bold text-primary min-w-fit">
                            {index + 1}.
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-foreground mb-4">
                              {question.q}
                            </p>

                            <div className="space-y-2">
                              {question.options.map((option, optIndex) => (
                                <Button
                                  key={optIndex}
                                  onClick={() => handleAnswer(index, optIndex)}
                                  className={`w-full justify-start text-left h-auto py-3 px-4 rounded-lg transition-all border-2 ${
                                    userAnswer === optIndex
                                      ? "bg-primary text-primary-foreground border-primary"
                                      : "bg-background border-border hover:border-primary/50"
                                  }`}
                                  variant="outline"
                                >
                                  <span
                                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 ${
                                      userAnswer === optIndex
                                        ? "bg-primary-foreground text-primary border-primary-foreground"
                                        : "border-muted-foreground text-muted-foreground"
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
                  })}

                  {/* Submit Button */}
                  <Button
                    onClick={() => setShowResults(true)}
                    disabled={Object.keys(answers).length < total}
                    className="w-full py-6 text-lg rounded-xl bg-primary hover:bg-primary/90"
                  >
                    Lihat Hasil ({Object.keys(answers).length}/{total} Terjawab)
                  </Button>
                </>
              )}
            </TabsContent>
          ))}
        </Tabs>

        {/* Results Summary */}
        {showResults && (
          <Card className="sticky bottom-0 left-0 right-0 bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/50 p-8 mt-8 rounded-2xl">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Hasil Ujian</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                {sections.map((section) => {
                  let sectionCorrect = 0;
                  section.data.forEach((question, index) => {
                    const key = `${section.id}-${index}`;
                    if (answers[key] === question.correct) {
                      sectionCorrect++;
                    }
                  });

                  return (
                    <div
                      key={section.id}
                      className="bg-background/50 rounded-xl p-4 border border-border"
                    >
                      <p className="text-lg font-semibold text-primary mb-2">
                        {section.label}
                      </p>
                      <p className="text-3xl font-bold text-foreground">
                        {sectionCorrect}/{section.data.length}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-2">
                <div className="text-5xl font-bold text-primary">{percentage}%</div>
                <p className="text-lg text-muted-foreground">
                  Total: {correct} dari {total} soal benar
                </p>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => {
                    setAnswers({});
                    setShowResults(false);
                  }}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl"
                >
                  Ulangi Ujian
                </Button>
                <Button
                  onClick={onBack}
                  variant="outline"
                  className="rounded-xl"
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
