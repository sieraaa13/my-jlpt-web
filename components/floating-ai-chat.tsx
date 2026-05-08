"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Message {
  role: "user" | "assistant";
  content: string;
}

// Tambahkan prop level agar AI tahu konteksnya
export default function FloatingAIChat({ level }: { level?: string }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, loading]);

  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const userMessage: Message = { role: "user", content: message };
    setChat((prev) => [...prev, userMessage]);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...chat, userMessage] }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "API Error");

      setChat((prev) => [...prev, { role: "assistant", content: data.content }]);
    } catch (err) {
      setChat((prev) => [...prev, { role: "assistant", content: "Maaf, terjadi kesalahan saat mengambil respons." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button - Tetap seperti aslimu */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full overflow-hidden shadow-2xl border-2 border-white dark:border-gray-700 z-[9999] hover:scale-110 transition"
        >
          <Image src="/asset/ai_chat.jpg" alt="AI Chat" width={64} height={64} className="object-cover w-full h-full" />
        </button>
      )}

      {/* Jendela Chat - MODIFIKASI LAYOUT DISINI */}
      {open && (
        <div className={`
          fixed inset-x-0 bottom-0 z-[9999] flex flex-col bg-white dark:bg-gray-900 shadow-2xl transition-all duration-300
          /* MOBILE: 1/3 Layar (40vh) */
          h-[40vh] w-full border-t dark:border-gray-700
          /* DESKTOP: Sidebar Kanan */
          md:relative md:h-full md:w-[350px] md:border-l md:inset-y-0
        `}>

          {/* Header - Sesuai kodingan aslimu */}
          <div className="flex items-center justify-between p-4 border-b dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="flex items-center gap-3">
              <Image src="/asset/ai_chat.jpg" alt="AI" width={40} height={40} className="rounded-full" />
              <div>
                <p className="font-semibold text-sm">NihonGO AI Tutor {level}</p>
                <p className="text-[10px] text-gray-500">Bantuan saat belajar ✨</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-red-500 p-1">
               <span className="hidden md:block text-xl">✕</span>
               <span className="md:hidden text-xs font-bold uppercase tracking-widest">Tutup</span>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {chat.length === 0 && (
              <p className="text-xs text-gray-400 text-center py-4">
                Kamu bisa bertanya tentang grammar, kanji, atau materi Level {level}.
              </p>
            )}

            {chat.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`px-4 py-2 rounded-2xl text-sm max-w-[85%] ${
                  msg.role === "user" ? "bg-blue-600 text-white rounded-br-none" : "bg-gray-100 dark:bg-gray-800 dark:text-white rounded-bl-none border dark:border-gray-700"
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-2xl rounded-bl-none border dark:border-gray-700">
                  <Image src="/asset/wait_icon.gif" alt="loading" width={40} height={40} />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t dark:border-gray-700 bg-white dark:bg-gray-900 flex gap-2">
            <input
              className="flex-1 px-4 py-2 rounded-full border dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 dark:text-white"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tulis pertanyaan..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-xs font-bold transition disabled:opacity-50"
            >
              Kirim
            </button>
          </div>
        </div>
      )}
    </>
  );
}
