"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { X, ChevronDown, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useExamContext } from "@/components/exam-context";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function FloatingAIChat() {
  const { examData } = useExamContext();
  const level = examData?.level || "General";

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages, loading]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsChatOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // ★ PERUBAHAN UTAMA: kirim hanya soal yang sedang aktif + beberapa soal sekitar
  // Bukan seluruh daftar soal, supaya tidak melebihi token limit
  const buildExamContext = (): string => {
    if (!examData?.questions || examData.questions.length === 0) {
      return "";
    }

    let ctx = `User sedang di halaman ujian JLPT ${level}`;
    if (examData.title) ctx += ` periode ${examData.title}`;
    if (examData.section) {
      const sectionName =
        examData.section === "kanji"
          ? "Kanji (Kosakata)"
          : examData.section === "bunpou"
          ? "Bunpou (Tata Bahasa)"
          : examData.section === "dokkai"
          ? "Dokkai (Reading)"
          : examData.section;
      ctx += ` di bagian ${sectionName}`;
    }
    ctx += `.\n\n`;

    if (examData.activeQuestion) {
      ctx += `📍 SAAT INI USER SEDANG MELIHAT SOAL NO. ${examData.activeQuestion.number}\n`;
      ctx += `Status jawaban user: ${examData.activeQuestion.userAnswer}\n\n`;
    }

    // ★ Ambil soal yang sedang aktif (dan beberapa soal sekitarnya)
    const activeNum = examData.activeQuestion?.number || 1;
    const CONTEXT_RANGE = 3; // kirim 3 soal sebelum & sesudah soal aktif

    // Filter: hanya kirim soal di sekitar soal aktif
    const nearbyQuestions = examData.questions.filter((q) => {
      return Math.abs(q.number - activeNum) <= CONTEXT_RANGE;
    });

    // Kalau section bukan dokkai, bisa kirim lebih banyak (soal pendek)
    const questionsToSend =
      examData.section === "dokkai" ? nearbyQuestions : examData.questions.slice(0, 30);

    ctx += `=== SOAL-SOAL DI BAGIAN INI ===\n`;
    ctx += `(Total ${examData.questions.length} soal, menampilkan ${questionsToSend.length} soal terdekat)\n`;

    questionsToSend.forEach((q) => {
      ctx += `\n--- Soal No. ${q.number} ---\n`;
      if (q.passage && q.passage.trim().length > 0) {
        // ★ Untuk passage dokkai: potong kalau terlalu panjang (max 1500 karakter)
        const maxPassageLength = 1500;
        const passageText =
          q.passage.length > maxPassageLength
            ? q.passage.substring(0, maxPassageLength) + "\n... (teks dipotong untuk efisiensi)"
            : q.passage;
        ctx += `[Bacaan/Teks]\n${passageText}\n\n`;
      }
      ctx += `Pertanyaan: ${q.q}\n`;
      if (q.options && q.options.length > 0) {
        ctx += `Pilihan jawaban:\n`;
        q.options.forEach((opt, idx) => {
          const label = String.fromCharCode(65 + idx);
          ctx += `  ${label}. ${opt}\n`;
        });
      }
      if (typeof q.correct === "number") {
        const correctLabel = String.fromCharCode(65 + q.correct);
        ctx += `Jawaban benar: ${correctLabel} (${q.options[q.correct]})\n`;
      }
    });

    return ctx;
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const examContext = buildExamContext();

      // ★ Batasi history chat yang dikirim (max 10 pesan terakhir)
      const recentMessages = [...messages, userMsg].slice(-10);

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: recentMessages,
          examContext,
          level,
          isExamFinished: examData?.isExamFinished || false,
        }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Server error");
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.content },
      ]);
    } catch (error: any) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Maaf, terjadi kesalahan: ${error.message}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!isChatOpen && (
        <button
          type="button"
          onClick={() => setIsChatOpen(true)}
          aria-label="Buka chat AI"
          className="fixed bottom-6 right-6 rounded-full shadow-2xl z-[9999] hover:scale-110 transition-transform border-2 border-white overflow-hidden bg-white ring-2 ring-offset-2 ring-primary/50"
        >
          <Image
            src="/asset/ai_chat.jpg"
            alt="Siera"
            width={64}
            height={64}
            className="w-16 h-16 object-cover"
            priority
          />
        </button>
      )}

      {isChatOpen && (
        <div className="fixed z-[9999] flex flex-col bg-card border shadow-2xl transition-all duration-300 inset-x-0 bottom-0 h-[40vh] rounded-t-2xl border-t md:inset-x-auto md:bottom-6 md:right-6 md:top-auto md:h-[600px] md:max-h-[80vh] md:w-[380px] md:rounded-2xl md:border">
          <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/30 rounded-t-2xl shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shrink-0" />
              <span className="font-bold text-sm text-foreground italic">
                Siera
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsChatOpen(false)}
              aria-label="Tutup chat"
              className="hover:bg-muted p-1 rounded text-muted-foreground transition-colors shrink-0"
            >
              <ChevronDown size={20} className="md:hidden" />
              <X size={20} className="hidden md:block" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-3 text-sm bg-background">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-2.5 rounded-2xl max-w-[85%] whitespace-pre-wrap text-xs md:text-sm shadow-sm ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-tr-none font-medium"
                      : "bg-muted rounded-tl-none text-foreground border border-border"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start items-center gap-2">
                <Image
                  src="/asset/wait_icon.gif"
                  alt="Siera sedang berpikir"
                  width={48}
                  height={48}
                  unoptimized
                  className="w-12 h-12 object-contain drop-shadow-md"
                />
                <span className="text-xs text-muted-foreground italic font-medium">
                  Sedang berpikir...
                </span>
              </div>
            )}
            <div ref={scrollRef} />
          </div>

          <form
            onSubmit={handleSend}
            className="p-3 border-t bg-card flex gap-2 rounded-b-2xl shrink-0 items-center"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ketik pertanyaanmu..."
              className="flex-1 bg-muted rounded-full px-4 py-2 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            />
            <Button
              type="submit"
              size="icon"
              className="rounded-full shrink-0 w-10 h-10"
              disabled={loading || !input.trim()}
            >
              <Send size={16} />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
