"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { N2KanjiLessonView } from "@/components/n2-kanji-lesson-view";
import { N2KanjiBonusColumn } from "@/components/n2-kanji-bonus-column";
import { KanjiTestView } from "@/components/kanji-test-view";
import { getOrganizedN2KanjiLessons, n2KanjiLessons, n2KanjiTests } from "@/data/n2/kanji/lessons";

export function N2KanjiTab() {
  const weeks = getOrganizedN2KanjiLessons();
  const [selectedWeek, setSelectedWeek] = useState(weeks[0]?.week ?? "1");
  const [selectedDay, setSelectedDay] = useState(weeks[0]?.days[0]?.day ?? "1");

  const currentWeek = weeks.find((w) => w.week === selectedWeek) ?? weeks[0];
  const lesson = n2KanjiLessons[selectedWeek]?.[selectedDay];
  const test = n2KanjiTests[selectedWeek]?.[selectedDay];

  if (weeks.length === 0) {
    return (
      <div className="p-6 rounded-3xl border border-dashed border-border bg-card/50 text-center text-muted-foreground">
        Materi Kanji (漢字) segera hadir.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {weeks.length > 1 && (
        <div className="flex flex-wrap gap-2">
          {weeks.map((w) => (
            <button
              key={w.week}
              onClick={() => {
                setSelectedWeek(w.week);
                setSelectedDay(w.days[0]?.day ?? "1");
              }}
              className={cn(
                "px-4 py-2 rounded-xl border-2 text-sm font-bold transition-colors",
                selectedWeek === w.week
                  ? "bg-foreground text-background border-foreground"
                  : "border-border hover:border-primary/50"
              )}
            >
              第{w.week}週
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {currentWeek?.days.map((d) => (
          <button
            key={d.day}
            onClick={() => setSelectedDay(d.day)}
            className={cn(
              "px-4 py-2 rounded-xl border-2 text-sm font-bold transition-colors",
              selectedDay === d.day
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border hover:border-primary/50"
            )}
          >
            {d.day}日目
          </button>
        ))}
      </div>

      {lesson ? (
        <N2KanjiLessonView lesson={lesson} />
      ) : test ? (
        <div className="space-y-8">
          <KanjiTestView test={test} />
          {test.bonusColumn && <N2KanjiBonusColumn bonus={test.bonusColumn} />}
        </div>
      ) : (
        <div className="p-6 rounded-3xl border border-dashed border-border bg-card/50 text-center text-muted-foreground">
          Materi belum tersedia.
        </div>
      )}
    </div>
  );
}
