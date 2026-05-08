"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function FloatingAIChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage: Message = { role: "user", content: message };
    setChat((prev) => [...prev, userMessage]);
    setMessage("");
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [...chat, userMessage],
      }),
    });

    const data = await res.json();

    const aiMessage: Message = {
      role: "assistant",
      content: data.content || "Tidak ada respons",
    };

    setChat((prev) => [...prev, aiMessage]);
    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full overflow-hidden shadow-2xl border-2 border-white dark:border-gray-700 z-[9999] hover:scale-110 transition"
      >
        <Image
          src="/asset/ai_chat.jpg"
          alt="AI Chat"
          width={64}
          height={64}
          className="object-cover w-full h-full"
        />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[90vw] h-[500px] bg-white dark:bg-gray-900 text-black dark:text-white rounded-2xl shadow-2xl border dark:border-gray-700 flex flex-col z-[9999] animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
            <div className="flex items-center gap-2">
              <Image
                src="/asset/ai_chat.jpg"
                alt="AI"
                width={32}
                height={32}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold">NihonGO AI Tutor</p>
                <p className="text-xs text-gray-500">
                  Siap bantu JLPT kamu ✨
                </p>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-red-500 text-lg"
            >
              ✕
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {chat.length === 0 && (
              <p className="text-sm text-gray-400">
                Halo 👋 Tanyakan grammar, kanji, atau latihan JLPT.
              </p>
            )}

            {chat.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl text-sm max-w-[75%] ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-gray-200 dark:bg-gray-700 rounded-bl-none"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="text-sm text-gray-400">AI sedang mengetik...</div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t dark:border-gray-700 flex gap-2">
            <input
              className="flex-1 px-3 py-2 rounded-full border dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-sm focus:outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tulis pertanyaan..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm transition"
            >
              Kirim
            </button>
          </div>
        </div>
      )}
    </>
  );
}
