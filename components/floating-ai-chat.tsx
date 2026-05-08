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
  }, [chat, loading]);

  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const userMessage: Message = {
      role: "user",
      content: message,
    };

    setChat((prev) => [...prev, userMessage]);
    setMessage("");
    setLoading(true);

    try {
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

      if (!res.ok) {
        throw new Error(data.error || "API Error");
      }

      const aiMessage: Message = {
        role: "assistant",
        content: data.content,
      };

      setChat((prev) => [...prev, aiMessage]);
    } catch (err) {
      setChat((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Maaf, terjadi kesalahan saat mengambil respons.",
        },
      ]);
    } finally {
      setLoading(false);
    }
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

      {/* Sidebar Chat */}
      {open && (
        <div className="fixed top-0 right-0 h-full w-[33vw] min-w-[320px] max-w-[500px] bg-white dark:bg-gray-900 text-black dark:text-white shadow-2xl border-l dark:border-gray-700 flex flex-col z-[9999] transition-all duration-300">

          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
            <div className="flex items-center gap-3">
              <Image
                src="/asset/ai_chat.jpg"
                alt="AI"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold">NihonGO AI Tutor</p>
                <p className="text-xs text-gray-500">
                  Bantuan saat belajar ✨
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

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {chat.length === 0 && (
              <p className="text-sm text-gray-400">
                Kamu bisa bertanya tentang grammar, kanji, atau soal yang sedang dikerjakan.
              </p>
            )}

            {chat.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-3 rounded-2xl text-sm max-w-[75%] ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-gray-200 dark:bg-gray-700 rounded-bl-none"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Loading GIF */}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-2xl rounded-bl-none">
                  <Image
                    src="/asset/wait_icon.gif"
                    alt="loading"
                    width={60}
                    height={60}
                  />
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t dark:border-gray-700 flex gap-2">
            <input
              className="flex-1 px-4 py-2 rounded-full border dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-sm focus:outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tulis pertanyaan..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm transition"
            >
              Kirim
            </button>
          </div>
        </div>
      )}
    </>
  );
}
