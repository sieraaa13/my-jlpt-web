"use client";

import { useState } from "react";
import { Bot, X } from "lucide-react";

export default function FloatingAIChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [{ role: "user", content: message }],
      }),
    });

    const data = await res.json();

    setChat((prev) => [
      ...prev,
      `You: ${message}`,
      `AI: ${data.content}`,
    ]);

    setMessage("");
    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-50 transition"
      >
        {open ? <X size={24} /> : <Bot size={24} />}
      </button>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-white shadow-xl rounded-xl border z-50 flex flex-col">
          <div className="p-3 border-b font-semibold">
            JLPT AI Tutor 🤖
          </div>

          <div className="flex-1 p-3 overflow-y-auto text-sm space-y-2 max-h-80">
            {chat.length === 0 && (
              <p className="text-gray-400">
                Tanyakan tentang grammar, kanji, atau vocab JLPT.
              </p>
            )}

            {chat.map((msg, i) => (
              <p key={i}>{msg}</p>
            ))}
          </div>

          <div className="p-2 border-t flex gap-2">
            <input
              className="flex-1 border rounded px-2 py-1 text-sm"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ketik pertanyaan..."
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
            >
              {loading ? "..." : "Kirim"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
