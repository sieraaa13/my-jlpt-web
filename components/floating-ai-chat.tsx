"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, ChevronDown, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Message {
  role: "user" | "assistant";
  content: string;
}

// PERBAIKAN DI SINI: Definisikan props secara eksplisit
interface FloatingAIChatProps {
  level: string;
}

export default function FloatingAIChat({ level }: FloatingAIChatProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // ... (Logika handleSend, useEffect, dll tetap sama seperti sebelumnya) ...
  
  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.content }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: "assistant", content: "Maaf, sistem sedang sibuk." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 p-4 bg-primary text-primary-foreground rounded-full shadow-2xl z-50 hover:scale-110 transition-transform border-2 border-white"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {isChatOpen && (
        <div className={`
          fixed inset-x-0 bottom-0 z-50 flex flex-col bg-card shadow-[0_-5px_30px_rgba(0,0,0,0.15)] transition-all duration-300 border-t
          h-[40vh] md:relative md:h-full md:w-[350px] md:border-l md:border-t-0
        `}>
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b bg-muted/30">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-bold text-sm text-foreground">AI Tutor {level}</span>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="hover:bg-muted p-1 rounded">
              <ChevronDown className="md:hidden" />
              <X className="hidden md:block text-muted-foreground" size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm bg-background">
            {messages.length === 0 && (
              <div className="bg-muted p-3 rounded-2xl rounded-tl-none mr-8 text-muted-foreground">
                Halo! Aku tutor AI kamu untuk Level {level}. Apa yang ingin kamu pelajari hari ini?
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`p-3 rounded-2xl max-w-[85%] ${
                  msg.role === "user" ? "bg-primary text-primary-foreground rounded-tr-none" : "bg-muted rounded-tl-none text-foreground"
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
               <div className="flex justify-start">
                  <div className="bg-muted p-3 rounded-2xl animate-pulse">Mengetik...</div>
               </div>
            )}
            <div ref={scrollRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-4 border-t bg-card flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tanyakan sesuatu..." 
              className="flex-1 bg-muted rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            />
            <Button type="submit" size="icon" className="rounded-full shrink-0" disabled={loading}>
              <Send size={16} />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
