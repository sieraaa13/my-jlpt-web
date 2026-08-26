"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/components/auth-context";
import type { ExerciseGroup } from "@/data/n3/soumatome/lessons";

export function ExerciseSection({
  week,
  day,
  index,
  group,
}: {
  week: number;
  day: number;
  index: number;
  group: ExerciseGroup;
}) {
  const { user } = useAuth();
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }
    const load = async () => {
      const { data, error } = await supabase
        .from("checklist_progress")
        .select("checked")
        .eq("user_id", user.id)
        .eq("week", week)
        .eq("day", day)
        .eq("item_index", index)
        .maybeSingle();

      if (!error && data) setChecked(!!data.checked);
      setLoading(false);
    };
    load();
  }, [user, week, day, index]);

  const toggle = async () => {
    if (!user || saving) return;
    const next = !checked;
    setChecked(next);
    setSaving(true);

    try {
      if (next) {
        const { error } = await supabase.from("checklist_progress").upsert(
          {
            user_id: user.id,
            week,
            day,
            item_index: index,
            checked: true,
            updated_at: new Date().toISOString(),
          },
          { onConflict: "user_id,week,day,item_index" }
        );
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("checklist_progress")
          .delete()
          .eq("user_id", user.id)
          .eq("week", week)
          .eq("day", day)
          .eq("item_index", index);
        if (error) throw error;
      }
    } catch (err) {
      console.error("Gagal simpan status soal:", err);
      setChecked(!next);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-8 bg-card border border-border rounded-3xl">
      {/* Judul + checkbox status selesai */}
      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h2 className="text-2xl font-bold text-primary">{group.title}</h2>
        <button
          type="button"
          disabled={!user || saving || loading}
          onClick={toggle}
          className={`flex-shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-full border transition-colors disabled:cursor-not-allowed ${
            checked
              ? "bg-primary/10 border-primary"
              : "bg-background border-border hover:border-primary/50"
          }`}
          title={!user ? "Masuk dulu untuk menyimpan progres" : "Tandai sudah dikerjakan"}
        >
          <span
            className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${
              checked ? "bg-primary border-primary text-primary-foreground" : "border-border"
            }`}
          >
            {checked && (
              <svg viewBox="0 0 12 12" className="w-3.5 h-3.5" fill="none">
                <path d="M2 6l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </span>
          <span className="text-sm font-medium text-foreground">{checked ? "Selesai" : "Tandai Selesai"}</span>
        </button>
      </div>

      <p className="text-muted-foreground mb-6">{group.instruction}</p>

      {/* Bacaan (khusus tipe reading_cloze) */}
      {group.passage && (
        <div className="bg-background/50 p-6 rounded-2xl mb-6 border space-y-3">
          <p className="font-bold">{(group.passage as any).title}</p>
          <p className="leading-relaxed">{(group.passage as any).jp_text}</p>
          <p className="font-bold pt-2">{(group.passage as any).translation_title}</p>
          <p className="text-muted-foreground leading-relaxed">{(group.passage as any).translation}</p>
        </div>
      )}

      {/* Daftar soal */}
      <div className="space-y-5">
        {group.questions.map((q: any, qIdx: number) => (
          <div key={qIdx} className="border-l-4 border-primary pl-4 py-1">
            <p className="font-semibold text-lg mb-2">
              {q.number}. {q.question || q.blank}
            </p>

            {/* Pilihan ganda / bacaan (pakai "options") */}
            {q.options && (
              <ul className="space-y-1 mb-2">
                {q.options.map((opt: any) => (
                  <li key={opt.id} className="text-foreground">
                    {opt.id}. {opt.text}
                  </li>
                ))}
              </ul>
            )}

            {/* Susun kalimat (pakai "words") */}
            {q.words && (
              <ul className="flex flex-wrap gap-2 mb-2">
                {q.words.map((w: any) => (
                  <li key={w.id} className="px-3 py-1 bg-background/50 border border-border rounded-lg text-sm">
                    {w.id}. {w.word}
                  </li>
                ))}
              </ul>
            )}

            {q.hint && <p className="text-xs text-muted-foreground">{q.hint}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
