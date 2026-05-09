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

  // Auto scroll
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Tutup pakai ESC
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
      {/* Tombol Floating */}
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

      {/* Overlay (hanya untuk mobile, agar bisa close klik luar) */}
      {isChatOpen && (
        <div
          onClick={() => setIsChatOpen(false)}
          className="fixed inset-0 bg-black/40 z-[9998] md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Panel Chat */}
      {isChatOpen && (
        <div
          className="
            fixed z-[9999] flex flex-col bg-card border shadow-2xl
            transition-all duration-300

            /* MOBILE: nempel bawah layar, tinggi 75vh */
            inset-x-0 bottom-0 h-[75vh] rounded-t-2xl border-t

            /* DESKTOP: floating sidebar di kanan bawah */
            md:inset-x-auto md:bottom-6 md:right-6 md:top-auto
            md:h-[600px] md:max-h-[80vh] md:w-[380px]
            md:rounded-2xl md:border
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between 
