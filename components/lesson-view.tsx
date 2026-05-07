"use client";

import { Card } from "@/components/ui/card";

// =================================================================
// Types — sangat fleksibel
// =================================================================

type Example = {
  jp?: string;
  en?: string;
  explanation?: string;
};

type DescriptionBox = {
  formula?: string;
  explanation?: string;
  explanation_en?: string;
};

type GrammarSection = {
  pattern_title?: string;
  pattern_meaning?: string;
  description_box?: DescriptionBox;
  examples?: Example[];
};

type ExerciseGroup = {
  title?: string;
  instruction?: string;
  type?: string;
  questions?: Array<Record<string, unknown>>;
  passage?: string;
};

type LessonHeader = {
  main_title?: string;
  sub_title?: string;
  translation?: string;
};

type IllustrationText = Record<string, string | undefined>;

export type LessonData = {
  name?: string;
  week?: number;
  day?: number;
  header?: LessonHeader;
  illustration_text?: IllustrationText;
  grammar_sections?: GrammarSection[];
  exercise_groups?: ExerciseGroup[];
};

// =================================================================
// Helpers
// =================================================================
function safeArray<T>(val: unknown): T[] {
  return Array.isArray(val) ? (val as T[]) : [];
}

function renderFormula(formula: string) {
  let f = (formula || "").trim();
  if (f.startsWith("$$") && f.endsWith("$$")) {
    f = f.slice(2, -2).trim();
  }
  f = f.replace(/\\text\{([^}]+)\}/g, "$1");

  const casesMatch = f.match(/\\begin\{cases\}([\s\S]*?)\\end\{cases\}/);
  if (casesMatch) {
    const before = f.slice(0, f.indexOf("\\begin{cases}")).trim();
    const items = casesMatch[1]
      .split("\\\\")
      .map((s) => s.trim())
      .filter(Boolean);
    return { before, items };
  }
  return { text: f };
}

// =================================================================
// Main Component
// =================================================================
export function LessonView({ data }: { data: LessonData }) {
  const grammarSections = safeArray<GrammarSection>(data?.grammar_sections);
  const exerciseGroups = safeArray<ExerciseGroup>(data?.exercise_groups);
  const isExerciseDay = exerciseGroups.length > 0;
  const hasGrammar = grammarSections.length > 0;

  const header = data?.header || {};
  const mainTitle = header.main_title || "Pelajaran";
  const subTitle = header.sub_title || "";
  const translation = header.translation || "";
  const lessonName = data?.name || "Pelajaran";
  const week = data?.week ?? "?";
  const day = data?.day ?? "?";

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
          {lessonName} • Minggu {week} Hari {day}
          {isExerciseDay && " • Latihan"}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 mb-3 text-foreground">
          {mainTitle}
        </h1>
        {subTitle && (
          <p className="text-xl sm:text-2xl text-primary mb-2">{subTitle}</p>
        )}
        {translation && (
          <p className="text-muted-foreground italic text-sm sm:text-base">
            {translation}
          </p>
        )}
      </div>

      {/* Illustration / Dialog */}
      {data?.illustration_text &&
        typeof data.illustration_text === "object" &&
        Object.keys(data.illustration_text).length > 0 && (
          <Card className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border-2 border-pink-400/30 backdrop-blur-sm">
            <div className="p-4 sm:p-6 space-y-3">
              <div className="text-xs uppercase tracking-wider text-pink-400 font-medium mb-2">
                💬 Contoh Percakapan
              </div>
              {Object.entries(data.illustration_text).map(([speaker, text]) =>
                text ? (
                  <div
                    key={speaker}
                    className={`flex gap-3 ${
                      speaker === "child" ? "" : "flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-lg sm:text-xl flex-shrink-0 ${
                        speaker === "child" ? "bg-blue-500/20" : "bg-rose-500/20"
                      }`}
                    >
                      {speaker === "child"
                        ? "👦"
                        : speaker === "mother"
                        ? "👩"
                        : "🗣️"}
                    </div>
                    <div
                      className={`max-w-md px-3 sm:px-4 py-2 rounded-2xl ${
                        speaker === "child"
                          ? "bg-blue-500/10 border border-blue-400/30 rounded-tl-sm"
                          : "bg-rose-500/10 border border-rose-400/30 rounded-tr-sm"
                      }`}
                    >
                      <p className="text-foreground text-sm sm:text-base">
                        {String(text)}
                      </p>
                      <p className="text-xs text-muted-foreground capitalize mt-1">
                        — {speaker}
                      </p>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </Card>
        )}

      {/* GRAMMAR LESSON view */}
      {hasGrammar && (
        <div className="space-y-6">
          {grammarSections.map((section, idx) => {
            const formula = renderFormula(section?.description_box?.formula || "");
            const examples = safeArray<Example>(section?.examples);

            return (
              <Card
                key={idx}
                className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary/50 transition-colors"
              >
                <div className="p-4 sm:p-6 space-y-4">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="bg-primary text-primary-foreground w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-bold text-base sm:text-lg flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl sm:text-2xl font-bold text-foreground break-words">
                        {section?.pattern_title || "Pola Grammar"}
                      </h2>
                      {section?.pattern_meaning && (
                        <p className="text-xs sm:text-sm text-muted-foreground mt-1 break-words">
                          {section.pattern_meaning}
                        </p>
                      )}
                    </div>
                  </div>

                  {section?.description_box && (
                    <div className="bg-primary/10 border-l-4 border-primary rounded-r-xl p-3 sm:p-5 space-y-3">
                      <div className="text-xs uppercase tracking-wider text-primary font-medium">
                        📐 Pola Kalimat
                      </div>

                      {section.description_box.formula && (
                        <div className="bg-background/50 rounded-lg p-3 sm:p-4 font-mono text-sm sm:text-base">
                          {formula.before && (
                            <div className="text-foreground mb-2 break-words">
                              {formula.before}
                            </div>
                          )}
                          {formula.items && (
                            <ul className="space-y-1 ml-2">
                              {formula.items.map((item, i) => (
                                <li
                                  key={i}
                                  className="text-foreground flex items-start gap-2 break-words"
                                >
                                  <span className="text-primary flex-shrink-0">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          {formula.text && (
                            <div className="text-foreground break-words">
                              {formula.text}
                            </div>
                          )}
                        </div>
                      )}

                      {section.description_box.explanation && (
                        <p className="text-foreground leading-relaxed text-sm sm:text-base">
                          {section.description_box.explanation}
                        </p>
                      )}
                      {section.description_box.explanation_en && (
                        <p className="text-muted-foreground text-xs sm:text-sm italic">
                          {section.description_box.explanation_en}
                        </p>
                      )}
                    </div>
                  )}

                  {examples.length > 0 && (
                    <div className="space-y-3">
                      <div className="text-xs uppercase tracking-wider text-accent font-medium">
                        ✨ Contoh Kalimat
                      </div>
                      {examples.map((ex, i) => (
                        <div
                          key={i}
                          className="bg-secondary/30 border border-border rounded-xl p-3 sm:p-4"
                        >
                          <div className="flex items-start gap-3">
                            <span className="text-accent font-bold flex-shrink-0">
                              {i + 1}.
                            </span>
                            <div className="space-y-1.5 flex-1 min-w-0">
                              {ex?.jp && (
                                <p className="text-foreground text-base sm:text-lg leading-relaxed break-words">
                                  {ex.jp}
                                </p>
                              )}
                              {ex?.en && (
                                <p className="text-muted-foreground text-xs sm:text-sm break-words">
                                  🇮🇩 {ex.en}
                                </p>
                              )}
                              {ex?.explanation && (
                                <p className="text-xs text-muted-foreground italic mt-2 break-words">
                                  💡 {ex.explanation}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {/* EXERCISE DAY view */}
      {isExerciseDay && (
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-2 border-amber-400/30">
            <div className="p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📝</span>
                <h2 className="text-lg sm:text-xl font-bold text-foreground">
                  Hari Latihan
                </h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base">
                Hari latihan untuk menguji pemahaman dari grammar yang sudah
                dipelajari minggu ini. Total {exerciseGroups.length} bagian
                latihan.
              </p>
            </div>
          </Card>

          {exerciseGroups.map((group, idx) => {
            const questions = safeArray<Record<string, unknown>>(group?.questions);

            return (
              <Card
                key={idx}
                className="bg-card/50 backdrop-blur-sm border-2 border-amber-400/30 hover:border-amber-400/50 transition-colors"
              >
                <div className="p-4 sm:p-6 space-y-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-amber-500 text-white w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-bold text-base sm:text-lg flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground break-words">
                        {group?.title || "Latihan"}
                      </h3>
                      {group?.instruction && (
                        <p className="text-xs sm:text-sm text-muted-foreground mt-1 break-words">
                          {group.instruction}
                        </p>
                      )}
                      {group?.type && (
                        <span className="inline-block mt-2 text-xs px-2 py-1 bg-amber-500/20 text-amber-400 rounded-md">
                          {group.type}
                        </span>
                      )}
                    </div>
                  </div>

                  {group?.passage && (
                    <div className="bg-secondary/40 border border-border rounded-xl p-3 sm:p-4">
                      <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-2">
                        📖 Bacaan
                      </div>
                      <p className="text-foreground whitespace-pre-wrap text-sm sm:text-base leading-relaxed break-words">
                        {group.passage}
                      </p>
                    </div>
                  )}

                  {questions.length > 0 && (
                    <div className="space-y-3">
                      <div className="text-xs uppercase tracking-wider text-amber-400 font-medium">
                        Soal ({questions.length})
                      </div>
                      {questions.map((q, qIdx) => (
                        <ExerciseQuestionCard
                          key={qIdx}
                          question={q}
                          index={qIdx}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {/* Empty state */}
      {!hasGrammar && !isExerciseDay && (
        <Card className="bg-card/50 border-border p-6 text-center">
          <p className="text-muted-foreground">
            Belum ada konten untuk pelajaran ini.
          </p>
        </Card>
      )}
    </div>
  );
}

// =================================================================
// Exercise Question Card — ULTRA defensive
// =================================================================
function ExerciseQuestionCard({
  question,
  index,
}: {
  question: Record<string, unknown>;
  index: number;
}) {
  if (!question || typeof question !== "object") {
    return null;
  }

  const q =
    question.q ||
    question.question ||
    question.sentence ||
    question.text ||
    question.prompt;

  // options bisa berupa array of strings ATAU array of objects
  const rawOptions = question.options || question.choices;
  const options = Array.isArray(rawOptions) ? rawOptions : [];

  return (
    <div className="bg-secondary/30 border border-border rounded-xl p-3 sm:p-4">
      <div className="flex items-start gap-3">
        <span className="text-amber-400 font-bold flex-shrink-0">
          {index + 1}.
        </span>
        <div className="flex-1 min-w-0 space-y-3">
          {q ? (
            <p className="text-foreground text-sm sm:text-base leading-relaxed break-words">
              {String(q)}
            </p>
          ) : (
            // Fallback untuk struktur yang tidak dikenal
            <div className="space-y-1">
              {Object.entries(question).map(([key, val]) => {
                if (key === "options" || key === "choices") return null;
                let display = "";
                try {
                  display =
                    typeof val === "object" ? JSON.stringify(val) : String(val);
                } catch {
                  display = "[unable to display]";
                }
                return (
                  <div key={key} className="text-sm">
                    <span className="text-muted-foreground font-medium">
                      {key}:{" "}
                    </span>
                    <span className="text-foreground break-words">
                      {display}
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          {options.length > 0 && (
            <div className="space-y-2 mt-2">
              {options.map((opt, i) => {
                let displayText = "";
                try {
                  if (typeof opt === "string" || typeof opt === "number") {
                    displayText = String(opt);
                  } else if (typeof opt === "object" && opt !== null) {
                    // option mungkin object {text, correct} atau {answer}
                    const objOpt = opt as Record<string, unknown>;
                    displayText = String(
                      objOpt.text ||
                        objOpt.answer ||
                        objOpt.value ||
                        objOpt.option ||
                        JSON.stringify(opt)
                    );
                  } else {
                    displayText = String(opt);
                  }
                } catch {
                  displayText = "[option]";
                }

                return (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-sm sm:text-base text-foreground bg-background/30 px-3 py-2 rounded-lg"
                  >
                    <span className="text-muted-foreground font-medium flex-shrink-0">
                      {String.fromCharCode(65 + i)}.
                    </span>
                    <span className="break-words">{displayText}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
