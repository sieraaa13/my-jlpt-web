"use client";

import { useEffect, useState } from "react";
import { lessons } from "@/data/n2/soumatome/lessons";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/components/auth-context";

// Offset supaya baris checklist N2 tidak bentrok dengan N3 di tabel
// checklist_progress yang sama (kolom "week" tidak membedakan level).
const STORAGE_WEEK_OFFSET = 100;

// Ambil cuma judul pola-kalimat Jepang-nya saja, buang bagian romaji/terjemahan
// dalam kurung yang ada di sebagian file JSON, biar tampilannya konsisten
// seperti di buku aslinya.
function shortTitle(title: string) {
  return title.split(" (")[0];
}

type DayItems = {
  day: number;
  mainTitle: string;
  subTitle: string;
  items: string[];
};

export function WeekChecklistN2({ week }: { week: number }) {
  const { user } = useAuth();
  const weekData = lessons[String(week)];
  const storageWeek = week + STORAGE_WEEK_OFFSET;

  const days: DayItems[] = weekData
    ? Object.keys(weekData)
        .filter((d) => Number(d) <= 6) // hari ke-7 biasanya "soal latihan", bukan daftar pola
        .sort((a, b) => Number(a) - Number(b))
        .map((d) => {
          const level = weekData[d].levels[0];
          return {
            day: Number(d),
            mainTitle: level.header.main_title,
            subTitle: level.header.sub_title,
            items: (level.grammar_sections || []).map((g) => shortTitle(g.pattern_title)),
          };
        })
    : [];

  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [savingKey, setSavingKey] = useState<string | null>(null);

  const keyOf = (day: number, itemIndex: number) => `${day}-${itemIndex}`;

  // Ambil status checklist yang sudah tersimpan punya user ini
  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const loadProgress = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("checklist_progress")
        .select("day, item_index, checked")
        .eq("user_id", user.id)
        .eq("week", storageWeek);

      if (!error && data) {
        const map: Record<string, boolean> = {};
        for (const row of data) {
          if (row.checked) map[keyOf(row.day, row.item_index)] = true;
        }
        setChecked(map);
      }
      setLoading(false);
    };

    loadProgress();
  }, [user, storageWeek]);

  const toggleItem = async (day: number, itemIndex: number) => {
    if (!user) return;

    const key = keyOf(day, itemIndex);
    const nowChecked = !checked[key];

    // Update tampilan dulu (optimistic), biar terasa responsif
    setChecked((prev) => ({ ...prev, [key]: nowChecked }));
    setSavingKey(key);

    try {
      if (nowChecked) {
        // Centang -> simpan/update baris di Supabase
        const { error } = await supabase.from("checklist_progress").upsert(
          {
            user_id: user.id,
            week: storageWeek,
            day,
            item_index: itemIndex,
            checked: true,
            updated_at: new Date().toISOString(),
          },
          { onConflict: "user_id,week,day,item_index" }
        );
        if (error) throw error;
      } else {
        // Hapus centang -> hapus baris dari Supabase
        const { error } = await supabase
          .from("checklist_progress")
          .delete()
          .eq("user_id", user.id)
          .eq("week", storageWeek)
          .eq("day", day)
          .eq("item_index", itemIndex);
        if (error) throw error;
      }
    } catch (err) {
      console.error("Gagal simpan checklist:", err);
      // Kalau gagal simpan, batalkan perubahan tampilan
      setChecked((prev) => ({ ...prev, [key]: !nowChecked }));
    } finally {
      setSavingKey(null);
    }
  };

  if (!weekData) {
    return (
      <div className="text-center text-muted-foreground py-12">
        Materi untuk Minggu {week} belum tersedia.
      </div>
    );
  }

  const leftDays = days.slice(0, 3);
  const rightDays = days.slice(3, 6);

  const totalItems = days.reduce((sum, d) => sum + d.items.length, 0);
  const totalChecked = Object.values(checked).filter(Boolean).length;

  const renderColumn = (columnDays: DayItems[]) => (
    <div className="space-y-6">
      {columnDays.map((d) => (
        <div key={d.day} className="flex gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-foreground text-background flex flex-col items-center justify-center text-xs font-bold leading-tight">
            <span>{d.day}</span>
            <span className="text-[9px]">日目</span>
          </div>
          <ul className="space-y-2 flex-1">
            {d.items.map((item, i) => {
              const key = keyOf(d.day, i);
              const isChecked = !!checked[key];
              const isSaving = savingKey === key;
              return (
                <li key={key}>
                  <button
                    type="button"
                    disabled={!user || isSaving}
                    onClick={() => toggleItem(d.day, i)}
                    className="w-full flex items-start gap-2 text-left group disabled:cursor-not-allowed"
                  >
                    <span
                      className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                        isChecked
                          ? "bg-primary border-primary text-primary-foreground"
                          : "border-border group-hover:border-primary/50"
                      }`}
                    >
                      {isChecked && (
                        <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none">
                          <path d="M2 6l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                    <span
                      className={`text-sm leading-snug transition-colors ${
                        isChecked ? "text-muted-foreground line-through" : "text-foreground"
                      }`}
                    >
                      {item}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-card border border-border rounded-2xl p-6 sm:p-10">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="inline-block bg-foreground text-background text-sm font-bold px-4 py-1.5 rounded-full mb-4">
          第{week}週
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-2">
          {days[0]?.mainTitle}
        </h2>
        {days[0]?.subTitle && (
          <p className="text-muted-foreground">{days[0].subTitle}</p>
        )}
      </div>

      {/* Status login / progres */}
      {!user ? (
        <div className="mb-6 text-center text-sm bg-secondary/50 text-muted-foreground rounded-xl py-3 px-4">
          Masuk dulu (klik "Masuk" di navbar) supaya progres checklist kamu tersimpan.
        </div>
      ) : (
        <div className="mb-6 flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <span>{totalChecked} dari {totalItems} sudah dicentang</span>
          <div className="w-32 h-1.5 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all"
              style={{ width: totalItems ? `${(totalChecked / totalItems) * 100}%` : "0%" }}
            />
          </div>
        </div>
      )}

      {/* Grid 2 kolom (bertumpuk di layar kecil) */}
      <div className="mb-8">
        <h3 className="font-bold text-foreground mb-4">今週の表現</h3>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
          {renderColumn(leftDays)}
          {renderColumn(rightDays)}
        </div>
      </div>

      {loading && user && (
        <p className="text-center text-xs text-muted-foreground">Memuat progres kamu...</p>
      )}
    </div>
  );
}
