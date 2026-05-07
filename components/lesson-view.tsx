"use client";

import { Card } from "@/components/ui/card";
import { useState } from "react";

// =================================================================
// Types
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

type Option = { id?: number; text?: string };
type Word = { id?: number; word?: string };

type Question = {
  number?: number;
  question?: string;
  options?: Option[];
  words?: Word[];
  hint?: string;
  blank?: string;
};

type Passage = {
  title?: string;
  jp_text?: string;
  translation_title?: string;
  translation?: string;
};

type ExerciseGroup = {
  title?: string;
  instruction?: string;
  type?: string;
  questions?: Question[];
  passage?: string | Passage;
};

type LessonHeader = {
  main_title?: string;
  sub_title?: string;
  translation?: string;
};

export type LessonData = {
  name?: string;
  week?: number;
  day?: number;
  header?: LessonHeader;
  illustration_text?: Record<string, string | undefined>;
  grammar_sections?: GrammarSection[];
  exercise_groups?: ExerciseGroup[];
};

// =================================================================
// Helpers
// =================================================================
function safeArray<T>(val: unknown): T[] {
  return Array.isArray(val) ? (val as T[]) : [];
}

function safeString(val: unknown): string {
  if (val === null || val === undefined) return "";
  if (typeof val === "string") return val;
  if (typeof val === "number" || typeof val === "boolean") return String(val);
  return "";
}

function isPlainObject(val: unknown): val is Record<string, unknown> {
  return typeof val === "object" && val !== null && !Array.isArray(val);
}

function renderFormula(formula: string) {
  let f = (formula || "").trim();
  if (f.startsWith("$$") && f.endsWith("$$")) f = f.slice(2, -2).trim();
  f = f.replace(/\\text\{([^}]+)\}/g, "$1");

  const casesMatch = f.match(/\\begin\{cases\}([\s\S]*?)\\end\{cases\}/);
  if (casesMatch) {
    const before = f.slice(0, f.indexOf("\\begin{cases}")).trim();
    const items = casesMatch[1].split("\\\\").map((s) => s.trim()).filter(Boolean);
    return { before, items };
  }
  return { text: f };
}

// =================================================================
// MAIN COMPONENT
// =================================================================
export function LessonView({ data }: { data: LessonData }) {
  const grammarSections = safeArray<GrammarSection>(data?.grammar_sections);
  const exerciseGroups = safeArray<ExerciseGroup>(data?.exercise_groups);
  const isExerciseDay = exerciseGroups.length > 0;
  const hasGrammar = grammarSections.length > 0;

  const header = data?.header || {};
  const mainTitle = safeString(header.main_title) || "Pelajaran";
  const subTitle = safeString(header.sub_title);
  const translation = safeString(header.translation);
  const lessonName = safeString(data?.name) || "Pelajaran";
  const week = data?.week ?? "?";
  const day = data?.day ?? "?";

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* HEADER */}
      <div className="text-center mb-6 sm:mb-8">
        <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider">
          {lessonName} • Minggu {week} Hari {day}
          {isExerciseDay && " • Latihan"}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 mb-3 text-foreground">
          {mainTitle}
        </h1>
        {subTitle && <p className="text-xl sm:text-2xl text-primary mb-2">{subTitle}</p>}
        {translation && (
          <p className="text-muted-foreground italic text-sm sm:text-base">{translation}</p>
        )}
      </div>

      {/* ILLUSTRATION / DIALOG */}
      {data?.illustration_text && isPlainObject(data.illustration_text) && (
        <DialogBox illustrationText={data.illustration_text as Record<string, string | undefined>} />
      )}

      {/* GRAMMAR LESSON view */}
      {hasGrammar && (
        <div className="space-y-6">
          {grammarSections.map((section, idx) => (
            <GrammarSectionCard key={idx} section={section} index={idx} />
          ))}
        </div>
      )}

      {/* EXERCISE DAY view */}
      {isExerciseDay && (
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-2 border-amber-400/30">
            <div className="p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📝</span>
                <h2 className="text-lg sm:text-xl font-bold text-foreground">Hari Latihan</h2>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base">
                Latihan rangkuman dari grammar yang sudah dipelajari minggu ini.{" "}
                <span className="text-amber-400 font-medium">
                  {exerciseGroups.length} bagian latihan.
                </span>
              </p>
            </div>
          </Card>

          {exerciseGroups.map((group, idx) => (
            <ExerciseGroupCard key={idx} group={group} index={idx} />
          ))}
        </div>
      )}

      {/* EMPTY STATE */}
      {!hasGrammar && !isExerciseDay && (
        <Card className="bg-card/50 border-border p-6 text-center">
          <p className="text-muted-foreground">Belum ada konten untuk pelajaran ini.</p>
        </Card>
      )}
    </div>
  );
}

// =================================================================
// SUB-COMPONENTS
// =================================================================

function DialogBox({ illustrationText }: { illustrationText: Record<string, string | undefined> }) {
  const entries = Object.entries(illustrationText).filter(([, t]) => safeString(t));
  if (entries.length === 0) return null;

  return (
    <Card className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border-2 border-pink-400/30 backdrop-blur-sm">
      <div className="p-4 sm:p-6 space-y-3">
        <div className="text-xs uppercase tracking-wider text-pink-400 font-medium mb-2">
          💬 Contoh Percakapan
        </div>
        {entries.map(([speaker, text]) => (
          <div key={speaker} className={`flex gap-3 ${speaker === "child" ? "" : "flex-row-reverse"}`}>
            <div
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-lg sm:text-xl flex-shrink-0 ${
                speaker === "child" ? "bg-blue-500/20" : "bg-rose-500/20"
              }`}
            >
              {speaker === "child" ? "👦" : speaker === "mother" ? "👩" : "🗣️"}
            </div>
            <div
              className={`max-w-md px-3 sm:px-4 py-2 rounded-2xl ${
                speaker === "child"
                  ? "bg-blue-500/10 border border-blue-400/30 rounded-tl-sm"
                  : "bg-rose-500/10 border border-rose-400/30 rounded-tr-sm"
              }`}
            >
              <p className="text-foreground text-sm sm:text-base">{safeString(text)}</p>
              <p className="text-xs text-muted-foreground capitalize mt-1">— {speaker}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function GrammarSectionCard({ section, index }: { section: GrammarSection; index: number }) {
  const formula = renderFormula(section?.description_box?.formula || "");
  const examples = safeArray<Example>(section?.examples);

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary/50 transition-colors">
      <div className="p-4 sm:p-6 space-y-4">
        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="bg-primary text-primary-foreground w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-bold text-base sm:text-lg flex-shrink-0">
            {index + 1}
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground break-words">
              {safeString(section?.pattern_title) || "Pola Grammar"}
            </h2>
            {section?.pattern_meaning && (
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 break-words">
                {safeString(section.pattern_meaning)}
              </p>
            )}
          </div>
        </div>

        {section?.description_box && (
          <div className="bg-primary/10 border-l-4 border-primary rounded-r-xl p-3 sm:p-5 space-y-3">
            <div className="text-xs uppercase tracking-wider text-primary font-medium">📐 Pola Kalimat</div>

            {section.description_box.formula && (
              <div className="bg-background/50 rounded-lg p-3 sm:p-4 font-mono text-sm sm:text-base">
                {formula.before && <div className="text-foreground mb-2 break-words">{formula.before}</div>}
                {formula.items && (
                  <ul className="space-y-1 ml-2">
                    {formula.items.map((item, i) => (
                      <li key={i} className="text-foreground flex items-start gap-2 break-words">
                        <span className="text-primary flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {formula.text && <div className="text-foreground break-words">{formula.text}</div>}
              </div>
            )}

            {section.description_box.explanation && (
              <p className="text-foreground leading-relaxed text-sm sm:text-base">
                {safeString(section.description_box.explanation)}
              </p>
            )}
            {section.description_box.explanation_en && (
              <p className="text-muted-foreground text-xs sm:text-sm italic">
                {safeString(section.description_box.explanation_en)}
              </p>
            )}
          </div>
        )}

        {examples.length > 0 && (
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-wider text-accent font-medium">✨ Contoh Kalimat</div>
            {examples.map((ex, i) => (
              <div key={i} className="bg-secondary/30 border border-border rounded-xl p-3 sm:p-4">
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold flex-shrink-0">{i + 1}.</span>
                  <div className="space-y-1.5 flex-1 min-w-0">
                    {ex?.jp && (
                      <p className="text-foreground text-base sm:text-lg leading-relaxed break-words">
                        {safeString(ex.jp)}
                      </p>
                    )}
                    {ex?.en && (
                      <p className="text-muted-foreground text-xs sm:text-sm break-words">
                        🇮🇩 {safeString(ex.en)}
                      </p>
                    )}
                    {ex?.explanation && (
                      <p className="text-xs text-muted-foreground italic mt-2 break-words">
                        💡 {safeString(ex.explanation)}
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
}

function ExerciseGroupCard({ group, index }: { group: ExerciseGroup; index: number }) {
  const type = safeString(group?.type);

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-2 border-amber-400/30 hover:border-amber-400/50 transition-colors">
      <div className="p-4 sm:p-6 space-y-4">
        {/* Header Group */}
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="bg-amber-500 text-white w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-bold text-base sm:text-lg flex-shrink-0">
            {index + 1}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-bold text-foreground break-words">
              {safeString(group?.title) || "Latihan"}
            </h3>
            {group?.instruction && (
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 break-words leading-relaxed">
                {safeString(group.instruction)}
              </p>
            )}
          </div>
        </div>

        {/* Render based on type */}
        {type === "reading_cloze" && <ReadingClozeContent group={group} />}
        {type === "sentence_arrangement" && <SentenceArrangementContent group={group} />}
        {(type === "multiple_choice" || (!type && safeArray(group?.questions).length > 0)) && (
          <MultipleChoiceContent group={group} />
        )}
      </div>
    </Card>
  );
}

// ===== Multiple Choice Renderer =====
function MultipleChoiceContent({ group }: { group: ExerciseGroup }) {
  const questions = safeArray<Question>(group?.questions);
  if (questions.length === 0) return null;

  return (
    <div className="space-y-3">
      {questions.map((q, idx) => (
        <MultipleChoiceQuestion key={idx} question={q} />
      ))}
    </div>
  );
}

function MultipleChoiceQuestion({ question }: { question: Question }) {
  const [showHint, setShowHint] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const number = question?.number ?? "?";
  const qText = safeString(question?.question);
  const options = safeArray<Option>(question?.options);
  const hint = safeString(question?.hint);

  return (
    <div className="bg-secondary/30 border border-border rounded-xl p-3 sm:p-4 space-y-3">
      {/* Number + Question */}
      <div className="flex items-start gap-3">
        <span className="bg-amber-500/20 text-amber-400 font-bold rounded-lg px-2 py-0.5 text-sm flex-shrink-0">
          {number}
        </span>
        <p className="text-foreground text-sm sm:text-base leading-relaxed break-words flex-1">
          {qText}
        </p>
      </div>

      {/* Options */}
      {options.length > 0 && (
        <div className="grid sm:grid-cols-2 gap-2">
          {options.map((opt, i) => {
            const optId = opt?.id ?? i + 1;
            const optText = safeString(opt?.text);
            const isSelected = selectedId === optId;

            return (
              <button
                key={i}
                onClick={() => setSelectedId(isSelected ? null : optId)}
                className={`text-left flex items-start gap-2 px-3 py-2 rounded-lg border transition-all ${
                  isSelected
                    ? "bg-amber-500/20 border-amber-400 text-amber-100"
                    : "bg-background/30 border-border text-foreground hover:border-amber-400/50"
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                    isSelected ? "bg-amber-500 border-amber-500 text-white" : "border-muted-foreground text-muted-foreground"
                  }`}
                >
                  {optId}
                </span>
                <span className="text-sm sm:text-base break-words">{optText}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Hint */}
      {hint && (
        <div>
          <button
            onClick={() => setShowHint(!showHint)}
            className="text-xs text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1"
          >
            {showHint ? "🔽 Sembunyikan petunjuk" : "💡 Lihat petunjuk"}
          </button>
          {showHint && (
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground italic bg-amber-500/5 border-l-2 border-amber-400/40 px-3 py-2 rounded-r break-words">
              {hint}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// ===== Sentence Arrangement Renderer =====
function SentenceArrangementContent({ group }: { group: ExerciseGroup }) {
  const questions = safeArray<Question>(group?.questions);
  if (questions.length === 0) return null;

  return (
    <div className="space-y-3">
      {questions.map((q, idx) => {
        const number = q?.number ?? "?";
        const qText = safeString(q?.question);
        const words = safeArray<Word>(q?.words);

        return (
          <div key={idx} className="bg-secondary/30 border border-border rounded-xl p-3 sm:p-4 space-y-3">
            <div className="flex items-start gap-3">
              <span className="bg-amber-500/20 text-amber-400 font-bold rounded-lg px-2 py-0.5 text-sm flex-shrink-0">
                {number}
              </span>
              <p className="text-foreground text-sm sm:text-base leading-relaxed break-words flex-1 font-medium">
                {qText}
              </p>
            </div>

            {words.length > 0 && (
              <div>
                <p className="text-xs uppercase tracking-wider text-amber-400 font-medium mb-2">
                  📌 Susun kata berikut:
                </p>
                <div className="flex flex-wrap gap-2">
                  {words.map((w, i) => (
                    <span
                      key={i}
                      className="bg-amber-500/10 border border-amber-400/40 text-foreground rounded-lg px-3 py-1.5 text-sm sm:text-base break-words"
                    >
                      <span className="text-amber-400 font-bold mr-1">{w?.id ?? i + 1}.</span>
                      {safeString(w?.word)}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ===== Reading Cloze Renderer =====
function ReadingClozeContent({ group }: { group: ExerciseGroup }) {
  const passage = group?.passage;
  const questions = safeArray<Question>(group?.questions);

  return (
    <div className="space-y-4">
      {/* Passage */}
      {passage && <PassageBox passage={passage} />}

      {/* Questions */}
      {questions.length > 0 && (
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-wider text-amber-400 font-medium">
            ✏️ Pilihan untuk setiap nomor:
          </p>
          {questions.map((q, idx) => (
            <ClozeQuestion key={idx} question={q} />
          ))}
        </div>
      )}
    </div>
  );
}

function PassageBox({ passage }: { passage: string | Passage }) {
  if (typeof passage === "string") {
    return (
      <div className="bg-secondary/40 border border-border rounded-xl p-3 sm:p-4">
        <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-2">
          📖 Bacaan
        </div>
        <p className="text-foreground whitespace-pre-wrap text-sm sm:text-base leading-relaxed break-words">
          {passage}
        </p>
      </div>
    );
  }

  if (isPlainObject(passage)) {
    const p = passage as Passage;
    const title = safeString(p.title);
    const jpText = safeString(p.jp_text);
    const translationTitle = safeString(p.translation_title);
    const translation = safeString(p.translation);

    return (
      <div className="bg-secondary/40 border border-border rounded-xl p-3 sm:p-4 space-y-3">
        {title && <h4 className="font-bold text-foreground text-base sm:text-lg break-words">{title}</h4>}
        {jpText && (
          <p className="text-foreground whitespace-pre-wrap text-sm sm:text-lg leading-relaxed break-words">
            {jpText}
          </p>
        )}
        {(translationTitle || translation) && (
          <div className="border-t border-border pt-3 mt-3">
            {translationTitle && (
              <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-1 break-words">
                {translationTitle}
              </p>
            )}
            {translation && (
              <p className="text-muted-foreground whitespace-pre-wrap text-xs sm:text-sm leading-relaxed break-words italic">
                {translation}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }

  return null;
}

function ClozeQuestion({ question }: { question: Question }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const number = question?.number ?? "?";
  const blank = safeString(question?.blank) || `[${number}]`;
  const options = safeArray<Option>(question?.options);

  return (
    <div className="bg-secondary/30 border border-border rounded-xl p-3 sm:p-4 space-y-2">
      <div className="flex items-center gap-2">
        <span className="bg-amber-500/20 text-amber-400 font-bold rounded-lg px-2 py-0.5 text-sm">
          {blank}
        </span>
      </div>
      {options.length > 0 && (
        <div className="grid sm:grid-cols-2 gap-2">
          {options.map((opt, i) => {
            const optId = opt?.id ?? i + 1;
            const optText = safeString(opt?.text);
            const isSelected = selectedId === optId;

            return (
              <button
                key={i}
                onClick={() => setSelectedId(isSelected ? null : optId)}
                className={`text-left flex items-start gap-2 px-3 py-2 rounded-lg border transition-all ${
                  isSelected
                    ? "bg-amber-500/20 border-amber-400 text-amber-100"
                    : "bg-background/30 border-border text-foreground hover:border-amber-400/50"
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                    isSelected ? "bg-amber-500 border-amber-500 text-white" : "border-muted-foreground text-muted-foreground"
                  }`}
                >
                  {optId}
                </span>
                <span className="text-sm sm:text-base break-words">{optText}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
