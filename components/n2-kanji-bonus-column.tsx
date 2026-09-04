import { Card } from "@/components/ui/card";
import type { KanjiBonusColumn, KanjiWord } from "@/data/n2/kanji/lessons";

function WordLine({ w }: { w: KanjiWord }) {
  return (
    <li>
      <span className="font-medium">{w.word}</span>{" "}
      <span className="text-muted-foreground">（{w.reading}）</span>{" "}
      <span className="text-muted-foreground">— {w.meaning}</span>
      {w.note && <span className="block text-xs text-muted-foreground italic">{w.note}</span>}
    </li>
  );
}

export function N2KanjiBonusColumn({ bonus }: { bonus: KanjiBonusColumn }) {
  return (
    <Card className="p-6 bg-card border-2 border-dashed">
      <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
        コラム · Bonus
      </span>
      <h3 className="text-xl font-black mb-1">{bonus.title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{bonus.translation}</p>
      <p className="text-sm mb-6 leading-relaxed">{bonus.description}</p>

      {bonus.antonymPairs && bonus.antonymPairs.length > 0 && (
        <div className="mb-6 rounded-2xl border border-border p-4 grid gap-2 sm:grid-cols-2">
          {bonus.antonymPairs.map((p, i) => (
            <div key={i} className="flex items-center justify-between gap-2 text-sm border-b border-border/60 pb-2 last:border-b-0">
              <span>
                <span className="font-bold">{p.left.word}</span>{" "}
                <span className="text-muted-foreground">（{p.left.reading}）</span>
              </span>
              <span className="text-primary font-black">↔</span>
              <span>
                <span className="font-bold">{p.right.word}</span>{" "}
                <span className="text-muted-foreground">（{p.right.reading}）</span>
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {bonus.kanjiList.map((entry) => (
          <div key={entry.id} className="rounded-2xl border border-border p-4 flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <span className="text-4xl font-black leading-none">{entry.character}</span>
              <div className="text-xs space-y-0.5">
                <div className="text-muted-foreground">
                  #{entry.id} · {entry.strokes}画
                </div>
                {entry.onyomi.length > 0 && (
                  <div className="font-bold text-primary">{entry.onyomi.join("／")}</div>
                )}
                {entry.kunyomi.length > 0 && <div className="font-medium">{entry.kunyomi.join("／")}</div>}
              </div>
            </div>
            <div className={entry.extraWords?.length ? "grid gap-x-4 gap-y-1 sm:grid-cols-2" : ""}>
              <ul className="text-sm space-y-1.5">
                {entry.words.map((w, i) => (
                  <WordLine key={i} w={w} />
                ))}
              </ul>
              {entry.extraWords && entry.extraWords.length > 0 && (
                <ul className="text-sm space-y-1.5 sm:border-l sm:border-border sm:pl-4 mt-1.5 sm:mt-0">
                  {entry.extraWords.map((w, i) => (
                    <WordLine key={i} w={w} />
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
