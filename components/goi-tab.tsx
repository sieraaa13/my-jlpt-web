"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { GoiLessonView } from "@/components/goi-lesson-view";
import { GoiTestView } from "@/components/goi-test-view";
import { getOrganizedGoiLessons, goiLessons, goiTests } from "@/data/n1/goi/lessons";

export function GoiTab() {
  const weeks = getOrganizedGoiLessons();
  const [selectedWeek, setSelectedWeek] = useState(weeks[0]?.week ?? "1");
  const [selectedDay, setSelectedDay] = useState(weeks[0]?.days[0]?.day ?? "1");

  const currentWeek = weeks.find((w) => w.week === selectedWeek) ?? weeks[0];
  const lesson = goiLessons[selectedWeek]?.[selectedDay];
  const test = goiTests[selectedWeek]?.[selectedDay];

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
        <GoiLessonView lesson={lesson} />
      ) : test ? (
        <GoiTestView test={test} />
      ) : (
        <div className="p-6 rounded-3xl border border-dashed border-border bg-card/50 text-center text-muted-foreground">
          Materi belum tersedia.
        </div>
      )}
    </div>
  );
}
