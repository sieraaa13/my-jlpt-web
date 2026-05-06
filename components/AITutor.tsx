"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const QUICK_PROMPTS = [
  { label: "は vs が", prompt: "Jelaskan perbedaan partikel は dan が dengan contoh kalimat" },
  { label: "~てform", prompt: "Jelaskan cara membentuk te-form dan kegunaannya" },
  { label: "Koreksi kalimatku", prompt: "Tolong koreksi kalimat bahasa Jepang ini: " },
  { label: "Kuis vocab N4", prompt: "Beri saya 3 soal kuis vocabulary level N4" },
  { label: "Cara baca kanji", prompt: "Jelaskan cara membaca kanji 食事 dan contoh penggunaannya" },
];

export default function AITutor() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "こんにちは！👋 Saya Sensei AI, tutor bahasa Jepang pribadi kamu!\n\nSaya bisa membantu:\n• Menjelaskan grammar & partikel\n• Koreksi kalimat buatanmu\n• Buat kuis vocab & kanji\n• Latihan percakapan\n\nMau belajar apa hari ini?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMsg: Message = { role: "user", content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
          system: `Kamu adalah Sensei AI, tutor bahasa Jepang yang ramah dan sabar untuk platform belajar NihonGO!.
Tugasmu membantu pelajar Indonesia belajar bahasa Jepang dengan menyenangkan.

Aturan:
- Jawab dalam Bahasa Indonesia yang mudah dipahami
- Sertakan contoh kalimat Jepang dengan furigana dan terjemahannya
- Gunakan emoji secukupnya agar terasa ramah
- Jika ada kalimat Jepang dari user, koreksi dengan jelas
- Untuk soal kuis, tunggu jawaban user sebelum reveal jawabannya
- Selalu semangati user dalam belajar
- Format jawaban dengan rapi, gunakan bullet point jika perlu`,
          max_tokens: 1000,
        }),
      });

      const data = await res.json();
      const reply = data.content?.[0]?.text ?? "Maaf, ada kesalahan. Coba lagi ya!";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Oops, koneksi bermasalah. Coba kirim ulang ya! 🙏",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-700 overflow-hidden shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-100 dark:border-zinc-800 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-lg">
          🤖
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Sensei AI</p>
          <p className="text-xs text-blue-200 flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400" />
            Online — siap membantu
          </p>
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-zinc-50 dark:bg-zinc-950">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.role === "assistant" && (
              <div className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-sm mr-2 mt-1 shrink-0">
                🤖
              </div>
            )}
            <div
              className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                msg.role === "user"
                  ? "bg-blue-600 text-white rounded-tr-sm"
                  : "bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 rounded-tl-sm"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-sm mr-2 shrink-0">
              🤖
            </div>
            <div className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-4 py-2.5 rounded-2xl rounded-tl-sm flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce [animation-delay:0ms]" />
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce [animation-delay:150ms]" />
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce [animation-delay:300ms]" />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Quick prompts */}
      <div className="px-3 py-2 flex gap-2 overflow-x-auto scrollbar-hide border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        {QUICK_PROMPTS.map((qp) => (
          <button
            key={qp.label}
            onClick={() => sendMessage(qp.prompt)}
            disabled={loading}
            className="shrink-0 text-xs px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors disabled:opacity-50"
          >
            {qp.label}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="px-3 py-3 flex gap-2 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
          placeholder="Tanya grammar, minta koreksi, atau request kuis..."
          disabled={loading}
          className="flex-1 text-sm px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 placeholder:text-zinc-400 outline-none focus:border-blue-400 transition-colors disabled:opacity-50"
        />
        <button
          onClick={() => sendMessage(input)}
          disabled={loading || !input.trim()}
          className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium rounded-xl transition-colors"
        >
          Kirim
        </button>
      </div>
    </div>
  );
}
