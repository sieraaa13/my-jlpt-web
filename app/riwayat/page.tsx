"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/components/auth-context";
import { supabase, ExamHistory } from "@/lib/supabase";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Loader2, Trophy, Calendar, Trash2 } from "lucide-react";

export default function RiwayatPage() {
  const { user, isLoaded } = useAuth();
  const [history, setHistory] = useState<ExamHistory[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoaded) return;
    if (!user) {
      setLoading(false);
      return;
    }

    const loadHistory = async () => {
      const { data, error } = await supabase
        .from("exam_history")
        .select("*")
        .eq("user_id", user.id)
        .order("completed_at", { ascending: false });

      if (data && !error) {
        setHistory(data);
      }
      setLoading(false);
    };

    loadHistory();
  }, [user, isLoaded]);

  const handleDelete = async (id: string) => {
    if (!confirm("Hapus riwayat ujian ini?")) return;
    setDeletingId(id);

    const { error } = await supabase.from("exam_history").delete().eq("id", id);

    if (!error) {
      setHistory((prev) => prev.filter((h) => h.id !== id));
    }
    setDeletingId(null);
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return "text-green-500";
    if (percentage >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-6 pt-24 pb-12 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Riwayat Ujian</h1>
          <p className="text-muted-foreground">
            Lihat hasil semua ujian yang sudah kamu kerjakan
          </p>
        </div>

        {!isLoaded || loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : !user ? (
          <Card className="p-12 text-center">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
            <h2 className="text-xl font-bold mb-2">Belum Login</h2>
            <p className="text-muted-foreground mb-6">
              Login dulu untuk melihat riwayat ujian kamu
            </p>
            <Link href="/">
              <Button className="rounded-xl">Kembali ke Beranda</Button>
            </Link>
          </Card>
        ) : history.length === 0 ? (
          <Card className="p-12 text-center">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
            <h2 className="text-xl font-bold mb-2">Belum Ada Riwayat</h2>
            <p className="text-muted-foreground mb-6">
              Kamu belum pernah menyelesaikan ujian. Yuk mulai sekarang!
            </p>
            <Link href="/jlpt">
              <Button className="rounded-xl">Mulai Ujian</Button>
            </Link>
          </Card>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Total: <b>{history.length}</b> ujian selesai
            </p>

            {history.map((exam) => (
              <Card
                key={exam.id}
                className="p-5 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="px-2 py-0.5 bg-primary/20 text-primary rounded-full text-xs font-bold">
                        JLPT {exam.level}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar size={12} />
                        {exam.month === "07" ? "Juli" : "Desember"} {exam.year}
                      </span>
                    </div>

                    <p className="text-xs text-muted-foreground mb-3">
                      Dikerjakan: {formatDate(exam.completed_at)}
                    </p>

                    <div className="flex items-baseline gap-2 mb-3">
                      <span className={`text-3xl font-bold ${getScoreColor(exam.percentage)}`}>
                        {exam.percentage}%
                      </span>
                      <span className="text-sm text-muted-foreground">
                        ({exam.total_score}/{exam.total_questions} benar)
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="bg-pink-500/10 border border-pink-400/30 rounded-lg p-2 text-center">
                        <p className="text-pink-600 font-semibold">Kanji</p>
                        <p className="font-bold">
                          {exam.section_scores.kanji.correct}/{exam.section_scores.kanji.total}
                        </p>
                      </div>
                      <div className="bg-sky-500/10 border border-sky-400/30 rounded-lg p-2 text-center">
                        <p className="text-sky-600 font-semibold">Bunpou</p>
                        <p className="font-bold">
                          {exam.section_scores.bunpou.correct}/{exam.section_scores.bunpou.total}
                        </p>
                      </div>
                      <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg p-2 text-center">
                        <p className="text-purple-600 font-semibold">Dokkai</p>
                        <p className="font-bold">
                          {exam.section_scores.dokkai.correct}/{exam.section_scores.dokkai.total}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDelete(exam.id)}
                    disabled={deletingId === exam.id}
                    className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors disabled:opacity-50"
                    aria-label="Hapus"
                  >
                    {deletingId === exam.id ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : (
                      <Trash2 size={18} />
                    )}
                  </button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
