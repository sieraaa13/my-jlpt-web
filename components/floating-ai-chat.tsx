"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, ChevronDown, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface FloatingAIChatProps {
  level?: string;
}

export default function FloatingAIChat({ level = "General" }: FloatingAIChatProps) {
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

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
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
          className="fixed bottom-6 right-6 p-4 bg-primary text-primary-foreground rounded-full shadow-2xl z-[9999] hover:scale-110 transition-transform border-2 border-white"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {isChatOpen && (
        <div
          onClick={() => setIsChatOpen(false)}
          className="fixed inset-0 bg-black/40 z-[9998] md:hidden"
          aria-hidden="true"
        />
      )}

      {isChatOpen && (
        <div className="fixed z-[9999] flex flex-col bg-card border shadow-2xl transition-all duration-300 inset-x-0 bottom-0 h-[75vh] rounded-t-2xl border-t md:inset-x-auto md:bottom-6 md:right-6 md:top-auto md:h-[600px] md:max-h-[80vh] md:w-[380px] md:rounded-2xl md:border">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b bg-muted/30 rounded-t-2xl">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-bold text-sm text-foreground italic">
                AI Tutor {level}
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

          {/* Body Pesan */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm bg-background">
            {messages.length === 0 && (
              <div className="bg-muted p-3 rounded-2xl rounded-tl-none mr-8 text-muted-foreground">
                Halo! Aku tutor AI kamu{" "}
                {level !== "General" ? `untuk Level ${level}` : ""}. Ada yang
                bisa aku bantu?
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
                  className={`p-3 rounded-2xl max-w-[85%] whitespace-pre-wrap ${
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
              <div className="flex justify-start">
                <div className="bg-muted p-3 rounded-2xl animate-pulse text-xs">
                  AI sedang berpikir...
                </div>
              </div>
            )}
            <div ref={scrollRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSend}
            className="p-3 border-t bg-card flex gap-2 rounded-b-2xl"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tanyakan sesuatu..."
              className="flex-1 bg-muted rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
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
