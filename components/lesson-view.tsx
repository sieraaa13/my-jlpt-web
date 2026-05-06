"use client";

import { Card } from "@/components/ui/card";

type Example = {
  jp: string;
  en: string;
  explanation?: string;
};

type DescriptionBox = {
  formula: string;
  explanation: string;
  explanation_en?: string;
};

type GrammarSection = {
  pattern_title: string;
  pattern_meaning: string;
  description_box: DescriptionBox;
  examples: Example[];
};

type LessonHeader = {
  main_title: string;
  sub_title: string;
  translation: string;
};

type IllustrationText = {
  child?: string;
  mother?: string;
  [key: string]: string | undefined;
};

export type LessonData = {
  name: string;
  week: number;
  day: number;
  header: LessonHeader;
  illustration_text?: IllustrationText;
  grammar_sections: GrammarSection[];
};

// Helper untuk merender LaTeX formula sederhana
function renderFormula(formula: string) {
  let f = formula.trim();
  
  // Strip $$ at start and end
  if (f.startsWith("$$") && f.endsWith("$$")) {
    f = f.slice(2, -2).trim();
  }

  // Replace \text{...} dengan content saja
  f = f.replace(/\\text\{([^}]+)\}/g, "$1");

  // Cek apakah ada \begin{cases}...\end{cases}
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

export function LessonView({ data }: { data: LessonData }) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="text-primary text-sm font-medium uppercase tracking-wider">
          {data.name} • Minggu {data.week} Hari {data.day}
        </span>
        <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-3 text-foreground">
          {data.header.main_title}
        </h1>
        <p className="text-2xl text-primary mb-2">{data.header.sub_title}</p>
        <p className="text-muted-foreground italic">{data.header.translation}</p>
      </div>

      {/* Illustration / Dialog */}
      {data.illustration_text && (
        <Card className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border-2 border-pink-400/30 backdrop-blur-sm">
          <div className="p-6 space-y-3">
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
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0 ${
                      speaker === "child"
                        ? "bg-blue-500/20"
                        : "bg-rose-500/20"
                    }`}
                  >
                    {speaker === "child" ? "👦" : speaker === "mother" ? "👩" : "🗣️"}
                  </div>
                  <div
                    className={`max-w-md px-4 py-2 rounded-2xl ${
                      speaker === "child"
                        ? "bg-blue-500/10 border border-blue-400/30 rounded-tl-sm"
                        : "bg-rose-500/10 border border-rose-400/30 rounded-tr-sm"
                    }`}
                  >
                    <p className="text-foreground">{text}</p>
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

      {/* Grammar Sections */}
      <div className="space-y-6">
        {data.grammar_sections.map((section, idx) => {
          const formula = renderFormula(section.description_box.formula);
          return (
            <Card
              key={idx}
              className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary/50 transition-colors"
            >
              <div className="p-6 space-y-4">
                {/* Section Number */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary text-primary-foreground w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {section.pattern_title}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      {section.pattern_meaning}
                    </p>
                  </div>
                </div>

                {/* Description Box (Formula + Explanation) */}
                <div className="bg-primary/10 border-l-4 border-primary rounded-r-xl p-5 space-y-3">
                  <div className="text-xs uppercase tracking-wider text-primary font-medium">
                    📐 Pola Kalimat
                  </div>

                  {/* Formula display */}
                  <div className="bg-background/50 rounded-lg p-4 font-mono text-lg">
                    {formula.before && (
                      <div className="text-foreground mb-2">{formula.before}</div>
                    )}
                    {formula.items && (
                      <ul className="space-y-1 ml-4">
                        {formula.items.map((item, i) => (
                          <li key={i} className="text-foreground flex items-center gap-2">
                            <span className="text-primary">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {formula.text && (
                      <div className="text-foreground">{formula.text}</div>
                    )}
                  </div>

                  <p className="text-foreground leading-relaxed">
                    {section.description_box.explanation}
                  </p>
                  {section.description_box.explanation_en && (
                    <p className="text-muted-foreground text-sm italic">
                      {section.description_box.explanation_en}
                    </p>
                  )}
                </div>

                {/* Examples */}
                {section.examples.length > 0 && (
                  <div className="space-y-3">
                    <div className="text-xs uppercase tracking-wider text-accent font-medium">
                      ✨ Contoh Kalimat
                    </div>
                    {section.examples.map((ex, i) => (
                      <div
                        key={i}
                        className="bg-secondary/30 border border-border rounded-xl p-4 space-y-2"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-accent font-bold flex-shrink-0">
                            {i + 1}.
                          </span>
                          <div className="space-y-1.5 flex-1">
                            <p className="text-foreground text-lg leading-relaxed">
                              {ex.jp}
                            </p>
                            <p className="text-muted-foreground text-sm">
                              🇮🇩 {ex.en}
                            </p>
                            {ex.explanation && (
                              <p className="text-xs text-muted-foreground italic mt-2">
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
    </div>
  );
}
