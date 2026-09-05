"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, XCircle, PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface BunpouPracticeProps {
  patternTitle: string;
  patternMeaning?: string;
  formula: string;
  explanation: string;
  examples?: { jp: string; highlight?: string }[];
}

interface CheckResult {
  correct: boolean;
  feedback: string;
  correction: string | null;
}

export function BunpouPractice({ patternTitle, patternMeaning, formula, explanation, examples }: BunpouPracticeProps) {
  const [sentence, setSentence] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CheckResult | null>(null);
  const [error, setError] = useState("");

  const handleCheck = async () => {
    if (!sentence.trim() || loading) return;
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/bunpou-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patternTitle,
          patternMeaning,
          formula,
          explanation,
          examples,
          userSentence: sentence,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal memeriksa jawaban");
      setResult(data);
    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan, coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4 bg-muted/30 border border-border rounded-2xl p-4">
      <div className="flex items-center gap-2 mb-2 text-sm font-semibold">
        <PenLine size={15} className="text-primary" />
        Coba buat kalimat sendiri pakai pola ini
      </div>

      <Textarea
        value={sentence}
        onChange={(e) => setSentence(e.target.value)}
        placeholder="Tulis contoh kalimatmu di sini..."
        className="mb-3 bg-background"
        rows={2}
      />

      <Button onClick={handleCheck} disabled={loading || !sentence.trim()} size="sm" className="rounded-xl">
        {loading ? (
          <>
            <Loader2 size={14} className="mr-2 animate-spin" /> Memeriksa...
          </>
        ) : (
          "Cek Jawaban"
        )}
      </Button>

      {error && <p className="text-sm text-red-500 mt-3">{error}</p>}

      {result && (
        <div
          className={`mt-4 rounded-xl border p-4 ${
            result.correct
              ? "bg-green-500/10 border-green-500/30"
              : "bg-red-500/10 border-red-500/30"
          }`}
        >
          <div className="flex items-center gap-2 font-semibold mb-1">
            {result.correct ? (
              <>
                <CheckCircle2 size={16} className="text-green-600" />
                <span className="text-green-600">Benar!</span>
              </>
            ) : (
              <>
                <XCircle size={16} className="text-red-500" />
                <span className="text-red-500">Belum Tepat</span>
              </>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{result.feedback}</p>
          {result.correction && (
            <p className="text-sm mt-2">
              <span className="font-medium">Contoh perbaikan: </span>
              {result.correction}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
