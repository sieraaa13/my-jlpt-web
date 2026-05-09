"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { X, ChevronDown, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- Interface / Tipe Data ---

interface Message {
  role: "user" | "assistant";
  content: string;
}

// Struktur data soal (sesuaikan dengan struktur data ujian kamu)
interface ExamQuestion {
  number: number;
  question: string;
  options?: string[];
  passage?: string; // Untuk reading comprehension
}

interface FloatingAIChatProps {
  level?: string;
  examData?: {
    title?: string;
    section?: string;
    questions?: ExamQuestion[];
  };
}

// --- Komponen Utama ---

export default function FloatingAIChat({
  level = "General",
  examData,
}: FloatingAIChatProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto scroll ke bawah saat ada pesan baru atau loading
  useEffect(() => {
    setTimeout(() => {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages, loading]);

  // Tutup chat dengan tombol ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsChatOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // --- Fungsi Membangun Konteks Soal ---
  // Ini penting agar AI tahu soal apa yang sedang dikerjakan user
  const buildExamContext = (): string => {
    if (!examData || !examData.questions || examData.questions.length === 0) {
      return "";
    }

    let ctx = `Saat ini user sedang mengerjakan ujian JLPT ${level}`;
    if (examData.title) ctx += ` - ${examData.title}`;
    if (examData.section) ctx += ` (Bagian: ${examData.section})`;
    ctx += `.\n\nDaftar soal yang sedang aktif:\n`;

    examData.questions.forEach((q) => {
      ctx += `\n--- No. ${q.number} ---\n`;
      if (q.passage) ctx += `Bacaan: ${q.passage}\n`;
      ctx += `Pertanyaan: ${q.question}\n`;
      if (q.options && q.options.length > 0) {
        ctx += `Pilihan Jawaban:\n`;
        q.options.forEach((opt, idx) => {
          ctx += `${idx + 1}. ${opt}\n`;
        });
      }
    });

    return ctx;
  };

  // --- Fungsi Kirim Pesan ---
  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg: Message = { role: "user", content: input };
    
    // Update UI lokal dulu
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      // Siapkan konteks soal untuk dikirim ke backend
      const examContext = buildExamContext();

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg],
          examContext, // Kirim soal
          level,       // Kirim level N5/N4 dll
        }),
      });

      const data = await res.json();

      // Handle response
      if (!res.ok || data.error) {
        throw new Error(data.error || "Terjadi kesalahan pada server");
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
          content: `⚠️ Maaf, terjadi kesalahan: ${error.message}` 
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // --- Render UI ---
  return (
    <>
      {/* Tombol Floating */}
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

      {/* Overlay Hitam (Hanya muncul di HP supaya fokus ke chat) */}
      {isChatOpen && (
        <div
          onClick={() => setIsChatOpen(false)}
          className="fixed inset-0 bg-black/30 z-[9998] backdrop-blur-sm md:hidden transition-opacity duration-300"
        />
      )}

      {/* Panel Chat */}
      {isChatOpen && (
        <div className="fixed z-[9999] flex flex-col bg-card border shadow-2xl transition-all duration-300 inset-x-0 bottom-0 h-[33vh] rounded-t-2xl border-t md:inset-x-auto md:bottom-6 md:right-6 md:top-auto md:h-[600px] md:max-h-[80vh] md:w-[380px] md:rounded-2xl md:border">
          
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/30 rounded-t-2xl shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-bold text-sm text-foreground italic">
                AI Tutor {level}
              </span>
              {/* Indikator jumlah soal */}
              {examData?.questions && examData.questions.length > 0 && (
                <span className="ml-1 text-[10px] font-medium bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                  📖 {examData.questions.length} Soal
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={() => setIsChatOpen(false)}
              aria-label="Tutup chat"
              className="hover:bg-muted p-1 rounded text-muted-foreground transition-colors"
            >
              <ChevronDown size={20} className="md:hidden" />
              <X size={20} className="hidden md:block" />
            </button>
          </div>

          {/* Body Pesan */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 text-sm bg-background scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-muted-foreground/50">
            
            {/* Pesan Awal */}
            {messages.length === 0 && (
              <div className="bg-muted p-3 rounded-2xl rounded-tl-none mr-8 text-muted-foreground text-xs md:text-sm leading-relaxed shadow-sm">
                Halo! Aku tutor AI kamu{" "}
                {level !== "General" ? `untuk Level ${level}` : ""}.
                
                {examData?.questions && examData.questions.length > 0 ? (
                  <>
                    <br /><br />
                    Aku sudah membaca {examData.questions.length} soal di halaman ini.
                    <br />
                    Kamu bisa bertanya langsung seperti:
                    <ul className="list-disc pl-4 mt-2 space-y-1">
                      <li>"Jawaban nomor 1 itu apa?"</li>
                      <li>"Jelaskan kenapa jawabannya B"</li>
                      <li>"Arti kata sulit di soal no 3"</li>
                    </ul>
                  </>
                ) : (
                  <> Ada yang bisa aku bantu?</>
                )}
              </div>
            )}

            {/* Riwayat Pesan */}
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

            {/* Indikator Loading (GIF) */}
            {loading && (
              <div className="flex justify-start items-center gap-2 animate-in fade-in zoom-in duration-200">
                <Image
                  src="/asset/wait_icon.gif"
                  alt="AI sedang berpikir"
                  width={48}
                  height={48}
                  unoptimized // Penting agar animasi GIF jalan normal
                  className="w-12 h-12 object-contain drop-shadow-md"
                />
                <span className="text-xs text-muted-foreground italic font-medium">
                  Sedang berpikir...
                </span>
              </div>
            )}
            
            {/* Anchor untuk auto-scroll */}
            <div ref={scrollRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 border-t bg-card flex gap-2 rounded-b-2xl shrink-0 items-center">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if(e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend(e);
                }
              }}
              placeholder="Ketik pertanyaanmu..."
              className="flex-1 bg-muted rounded-full px-4 py-2 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground/70 transition-all"
            />
            <Button
              type="submit"
              size="icon"
              variant="default"
              className="rounded-full shrink-0 w-10 h-10 hover:scale-105 transition-transform active:scale-95"
              disabled={loading || !input.trim()}
            >
              <Send size={16} className="ml-0.5" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
