"use client";

import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, Volume2 } from "lucide-react";

interface ChoukaiQuestion {
  q: string;
  audio: string;
  options: string[];
  correct: number;
  transcript?: string;
}

interface ChoukaiSectionProps {
  questions: ChoukaiQuestion[];
  answers: Record<number, number>;
  onAnswerChange: (questionIndex: number, answerIndex: number) => void;
  showTranscript?: boolean;
}

export function ChoukaiSection({ 
  questions, 
  answers, 
  onAnswerChange,
  showTranscript = false 
}: ChoukaiSectionProps) {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null);
  const [playCount, setPlayCount] = useState<Record<number, number>>({});
  const audioRefs = useRef<Record<number, HTMLAudioElement | null>>({});

  // Stop semua audio ketika component unmount
  useEffect(() => {
    return () => {
      Object.values(audioRefs.current).forEach((audio) => {
        audio?.pause();
      });
    };
  }, []);

  const handlePlay = (index: number) => {
    // Stop audio yang sedang main (jika ada)
    if (currentlyPlaying !== null && currentlyPlaying !== index) {
      const prevAudio = audioRefs.current[currentlyPlaying];
      if (prevAudio) {
        prevAudio.pause();
        prevAudio.currentTime = 0;
      }
    }

    const audio = audioRefs.current[index];
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setCurrentlyPlaying(index);
      setPlayCount((prev) => ({
        ...prev,
        [index]: (prev[index] || 0) + 1,
      }));
    } else {
      audio.pause();
      setCurrentlyPlaying(null);
    }
  };

  const handleReplay = (index: number) => {
    const audio = audioRefs.current[index];
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    setCurrentlyPlaying(index);
    setPlayCount((prev) => ({
      ...prev,
      [index]: (prev[index] || 0) + 1,
    }));
  };

  const handleAudioEnded = (index: number) => {
    if (currentlyPlaying === index) {
      setCurrentlyPlaying(null);
    }
  };

  return (
    <div className="space-y-6">
      {questions.map((question, qIndex) => {
        const isPlaying = currentlyPlaying === qIndex;
        const playedTimes = playCount[qIndex] || 0;

        return (
          <Card key={qIndex} className="p-6 border-2 hover:border-primary/30 transition-colors">
            {/* Header dengan nomor soal */}
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                {qIndex + 1}
              </div>
              <div className="flex-1">
                <p className="text-base font-medium leading-relaxed">{question.q}</p>
              </div>
            </div>

            {/* Audio Player Section */}
            <div className="bg-secondary/30 rounded-xl p-4 mb-4 border border-border">
              <div className="flex items-center gap-3">
                <Volume2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Audio Soal</span>
                {playedTimes > 0 && (
                  <span className="text-xs text-muted-foreground ml-auto">
                    Diputar {playedTimes}x
                  </span>
                )}
              </div>

              {/* Hidden HTML5 audio element */}
              <audio
                ref={(el) => {
                  audioRefs.current[qIndex] = el;
                }}
                src={question.audio}
                onEnded={() => handleAudioEnded(qIndex)}
                preload="metadata"
              />

              {/* Custom Controls */}
              <div className="flex items-center gap-2 mt-3">
                <Button
                  onClick={() => handlePlay(qIndex)}
                  className="flex-1 gap-2"
                  variant={isPlaying ? "secondary" : "default"}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4" />
                      Pause
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      {playedTimes > 0 ? "Lanjutkan" : "Putar Audio"}
                    </>
                  )}
                </Button>

                <Button
                  onClick={() => handleReplay(qIndex)}
                  variant="outline"
                  className="gap-2"
                  disabled={playedTimes === 0}
                >
                  <RotateCcw className="w-4 h-4" />
                  Ulangi
                </Button>
              </div>

              {/* Transcript (optional) */}
              {showTranscript && question.transcript && (
                <details className="mt-3">
                  <summary className="text-xs text-muted-foreground cursor-pointer hover:text-primary">
                    📝 Lihat Transcript
                  </summary>
                  <p className="text-sm mt-2 p-3 bg-background rounded-lg whitespace-pre-line">
                    {question.transcript}
                  </p>
                </details>
              )}
            </div>

            {/* Pilihan Jawaban */}
            <div className="space-y-2">
              {question.options.map((option, oIndex) => {
                const isSelected = answers[qIndex] === oIndex;
                
                return (
                  <button
                    key={oIndex}
                    onClick={() => onAnswerChange(qIndex, oIndex)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                      isSelected
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border hover:border-primary/50 hover:bg-secondary/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold shrink-0 ${
                          isSelected
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-muted-foreground text-muted-foreground"
                        }`}
                      >
                        {oIndex + 1}
                      </div>
                      <span className="flex-1">{option}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </Card>
        );
      })}
    </div>
  );
}
