"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { X, ChevronDown, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  role: "user" | "assistant";
  content: string;
}

// TIPE SOAL - sesuaikan dengan struktur data ujian kamu
interface ExamQuestion {
  number: number;
  question: string;
  options?: string[];
  passage?: string; // untuk reading
}

interface FloatingAIChatProps {
  level?: string;
  examData?: {
    title?: string;
    section?: string; // contoh: "Vocabulary", "Grammar", "Reading"
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
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsChatOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Buat konteks soal untuk dikirim ke AI
  const buildExamContext = (): string => {
    if (!examData || !examData.questions || examData.questions.length === 0) {
      return "";
    }

    let ctx = `Saat ini user sedang mengerjakan ujian JLPT ${level}`;
    if (examData.title) ctx += ` - ${examData.title}`;
    if (examData.section) ctx += ` (Section: ${examData.section})`;
    ctx += `.\n\nDaftar soal:\n`;

    examData.questions.forEach((q) => {
      ctx += `\n--- Soal No. ${q.number} ---\n`;
      if (q.passage) ctx += `Passage: ${q.passage}\n`;
      ctx += `Pertanyaan: ${q.question}\n`;
      if (q.options && q.options.length > 0) {
        q.options.forEach((opt, idx) => {
          ctx += `${idx + 1}. ${opt}\n`;
        });
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
          examContext, // <-- kirim konteks soal
          level,
        }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.content },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Maaf, sistem sedang sibuk." },
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
          className="fixed bottom-6 right-6 rounded-full shadow-2xl z-[9999] hover:scale-110 transition-transform border-2 border-white overflow-hidden bg-white"
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
                {examData?.questions && examData.questions.length > 0 && (
                  <span className="ml-1 text-[10px] text-green-600 not-italic">
                    📖 {examData.questions.length} soal
                  </span>
                )}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsChatOpen(false)}
              aria-label="Tutup chat"
              className="hover:bg-muted p-1 rounded text-muted-foreground"
            >
              <ChevronDown size={20} className="md:hidden" />
              <X size={20} className="hidden md:block" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-3 text-sm bg-background">
            {messages.length === 0 && (
              <div className="bg-muted p-3 rounded-2xl rounded-tl-none mr-8 text-muted-foreground text-xs md:text-sm">
                Halo! Aku tutor AI kamu{" "}
                {level !== "General" ? `untuk Level ${level}` : ""}.
                {examData?.questions && examData.questions.length > 0 ? (
                  <>
                    <br />
                    Aku sudah baca semua soal yang sedang kamu kerjakan. Tanya
                    aja, misal: <i>"bantu jawab nomor 1"</i> atau{" "}
                    <i>"jelaskan soal no 3"</i>.
                  </>
                ) : (
                  <> Ada yang bisa aku bantu?</>
                )}
              </div>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-2.5 rounded-2xl max-w-[85%] whitespace-pre-wrap text-xs md:text-sm ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-tr-none"
                      : "bg-muted rounded-tl-none text-foreground border"
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
                <span className="text-xs text-muted-foreground italic">
                  sedang berpikir...
                </span>
              </div>
            )}
            <div ref={scrollRef} />
          </div>

          <form
            onSubmit={handleSend}
            className="p-2 border-t bg-card flex gap-2 rounded-b-2xl shrink-0"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tanyakan sesuatu..."
              className="flex-1 bg-muted rounded-full px-4 py-2 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            />
            <Button
              type="submit"
              size="icon"
              className="rounded-full shrink-0"
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
