"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { X, ChevronDown, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ExamQuestion {
  number: number;
  q: string;
  options: string[];
  correct?: number;
  section?: string;
  passage?: string; // untuk soal Dokkai/Reading
}

interface FloatingAIChatProps {
  level?: string;
  examData?: {
    title?: string;
    questions?: ExamQuestion[];
  };
}

export default function FloatingAIChat({
  level = "General",
  examData,
}: FloatingAIChatProps) {
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

  // Format data soal agar mudah dibaca AI
  const buildExamContext = (): string => {
    if (!examData?.questions || examData.questions.length === 0) return "";

    let ctx = `User sedang mengerjakan ujian JLPT ${level}`;
    if (examData.title) ctx += ` (${examData.title})`;
    ctx += `.\n\nBerikut adalah daftar soal yang sedang aktif:\n`;

    examData.questions.forEach((q) => {
      ctx += `\n[Soal No.${q.number} - Bagian ${q.section?.toUpperCase()}]\n`;
      if (q.passage) ctx += `Bacaan/Teks: ${q.passage}\n`;
      ctx += `Pertanyaan: ${q.q}\n`;
      if (q.options && q.options.length > 0) {
        ctx += `Pilihan jawaban:\n`;
        q.options.forEach((opt, idx) => {
          ctx += `  ${idx}. ${opt}\n`;
        });
      }
      if (typeof q.correct === "number") {
        ctx += `Jawaban benar: pilihan ke-${q.correct} (${q.options[q.correct]})\n`;
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

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg],
          examContext,
          level,
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
          content: `⚠️ Maaf, terjadi kesalahan: ${error.message}`,
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
            alt="AI Chat"
            width={64}
            height={64}
            className="w-16 h-16 object-cover"
            priority
          />
        </button>
      )}

      {isChatOpen && (
        <div className="fixed z-[9999] flex flex-col bg-card border shadow-2xl transition-all duration-300 inset-x-0 bottom-0 h-[33vh] rounded-t-2xl border-t md:inset-x-auto md:bottom-6 md:right-6 md:top-auto md:h-[600px] md:max-h-[80vh] md:w-[380px] md:rounded-2xl md:border">
          <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/30 rounded-t-2xl shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-bold text-sm text-foreground italic">
                AI Tutor {level}
              </span>
              {examData?.questions && examData.questions.length > 0 && (
                <span className="ml-1 text-[10px] font-medium bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                  📖 {examData.questions.length} Soal
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={() => setIsChatOpen(false)}
              className="hover:bg-muted p-1 rounded text-muted-foreground transition-colors"
            >
              <ChevronDown size={20} className="md:hidden" />
              <X size={20} className="hidden md:block" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-3 text-sm bg-background">
            {messages.length === 0 && (
              <div className="bg-muted p-3 rounded-2xl rounded-tl-none mr-8 text-muted-foreground text-xs md:text-sm leading-relaxed shadow-sm">
                Halo! Aku tutor AI kamu.
                {examData?.questions && examData.questions.length > 0 ? (
                  <>
                    <br /><br />
                    Aku sudah membaca semua soal di ujian ini. Tanya saja:
                    <ul className="list-disc pl-4 mt-2 space-y-1">
                      <li>"Jelaskan jawaban Kanji soal nomor 3"</li>
                      <li>"Arti teks di soal Dokkai nomor 24"</li>
                    </ul>
                  </>
                ) : (
                  <> Ada yang bisa aku bantu?</>
                )}
              </div>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
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
                  alt="AI sedang berpikir"
                  width={48}
                  height={48}
                  unoptimized
                  className="w-12 h-12 object-contain"
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
              placeholder="Tanya soal ke AI..."
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
