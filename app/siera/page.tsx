"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Send, Loader2, MessageCircleHeart, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/auth-context";

interface Message {
  role: "user" | "assistant";
  content: string;
}

function LineLinkCard({ userId, initiallyLinked }: { userId: string; initiallyLinked: boolean }) {
  const [linked, setLinked] = useState(initiallyLinked);
  const [consent, setConsent] = useState(false);
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<{ type: "error" | "success"; text: string } | null>(null);

  const addFriendUrl = process.env.NEXT_PUBLIC_LINE_ADD_FRIEND_URL;

  const handleLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent || !code.trim() || busy) return;
    setBusy(true);
    setMessage(null);

    try {
      const res = await fetch("/api/line/link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, code: code.trim() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal menghubungkan LINE");

      setLinked(true);
      setMessage({ type: "success", text: "LINE berhasil terhubung! Siera akan menyapa 2x seminggu (Rabu & Minggu)." });
    } catch (err: any) {
      setMessage({ type: "error", text: err.message });
    } finally {
      setBusy(false);
    }
  };

  const handleUnlink = async () => {
    if (busy) return;
    setBusy(true);
    setMessage(null);

    try {
      const res = await fetch("/api/line/unlink", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal memutuskan koneksi LINE");

      setLinked(false);
      setConsent(false);
      setCode("");
      setMessage(null);
    } catch (err: any) {
      setMessage({ type: "error", text: err.message });
    } finally {
      setBusy(false);
    }
  };

  return (
    <Card className="p-5 mb-4">
      <div className="flex items-center gap-2 mb-3">
        <MessageCircle className="w-5 h-5 text-primary" />
        <h2 className="font-semibold">Siera di LINE</h2>
      </div>

      {linked ? (
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            ✅ Terhubung. Siera akan menyapamu lewat LINE tiap Rabu & Minggu, dan kamu bisa chat balik kapan saja.
          </p>
          <Button variant="ghost" size="sm" onClick={handleUnlink} disabled={busy} className="shrink-0 text-red-500 hover:text-red-600">
            Putuskan
          </Button>
        </div>
      ) : (
        <div className="space-y-3 text-sm">
          <p className="text-muted-foreground">
            Hubungkan LINE supaya Siera bisa menyapamu langsung berdasarkan progres belajarmu — bukan cuma di web.
          </p>
          <ol className="list-decimal list-inside text-muted-foreground space-y-1">
            <li>
              {addFriendUrl ? (
                <a href={addFriendUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                  Tambahkan Siera sebagai teman di LINE
                </a>
              ) : (
                "Tambahkan Siera sebagai teman di LINE"
              )}
            </li>
            <li>Kirim pesan apa saja ke Siera di LINE — dia akan membalas dengan kode 6 karakter.</li>
            <li>Masukkan kode itu di bawah ini.</li>
          </ol>

          <form onSubmit={handleLink} className="space-y-2 pt-1">
            <input
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              placeholder="Kode dari LINE (mis. AB2CDE)"
              maxLength={6}
              className="w-full bg-muted rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary tracking-widest uppercase"
            />
            <label className="flex items-start gap-2 text-xs text-muted-foreground">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5"
              />
              Saya setuju Siera mengirim pesan personal ke LINE saya berdasarkan data belajar saya (bisa diputuskan kapan saja).
            </label>
            <Button type="submit" size="sm" disabled={!consent || !code.trim() || busy} className="rounded-lg">
              {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : "Hubungkan"}
            </Button>
          </form>
        </div>
      )}

      {message && (
        <p className={`text-xs mt-2 ${message.type === "error" ? "text-red-500" : "text-green-600"}`}>{message.text}</p>
      )}
    </Card>
  );
}

export default function SieraPage() {
  const { user, isLoaded } = useAuth();

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages, loading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading || !user) return;

    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const recentMessages = [...messages, userMsg].slice(-10);

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: recentMessages,
          examContext: "",
          level: "General",
          isExamFinished: false,
          userId: user.id,
          userName: user.name,
        }),
      });

      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error || "Server error");

      setMessages((prev) => [...prev, { role: "assistant", content: data.content }]);
    } catch (error: any) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `Maaf, terjadi kesalahan: ${error.message}` },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <div className="container mx-auto px-6 pt-24 pb-12 max-w-3xl flex-1 flex flex-col">
        <div className="mb-6 flex items-center gap-3">
          <Image
            src="/asset/ai_chat.jpg"
            alt="Siera"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover border-2 border-primary/40"
          />
          <div>
            <h1 className="text-2xl font-bold">Siera</h1>
            <p className="text-sm text-muted-foreground">
              Tutor JLPT-mu yang mengingat perjalanan belajarmu.
            </p>
          </div>
        </div>

        {!isLoaded ? (
          <div className="flex-1 flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : !user ? (
          <Card className="p-12 text-center">
            <MessageCircleHeart className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
            <h2 className="text-xl font-bold mb-2">Belum Login</h2>
            <p className="text-muted-foreground mb-6">
              Login dulu supaya Siera bisa mengenalmu dan mengingat progres belajarmu.
            </p>
            <Link href="/">
              <Button className="rounded-xl">Kembali ke Beranda</Button>
            </Link>
          </Card>
        ) : (
          <>
          <LineLinkCard userId={user.id} initiallyLinked={!!user.line_consent && !!user.line_user_id} />
          <Card className="flex-1 flex flex-col overflow-hidden p-0 min-h-[60vh]">
            <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
              {messages.length === 0 && (
                <div className="text-center text-muted-foreground text-sm py-10">
                  Halo, {user.name}! Tanya apa saja soal belajar JLPT-mu ya~
                </div>
              )}
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`p-3 rounded-2xl max-w-[85%] whitespace-pre-wrap shadow-sm ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-none font-medium"
                        : "bg-muted rounded-tl-none text-foreground border border-border"
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
                    alt="Siera sedang berpikir"
                    width={40}
                    height={40}
                    unoptimized
                    className="w-10 h-10 object-contain"
                  />
                  <span className="text-xs text-muted-foreground italic">Sedang berpikir...</span>
                </div>
              )}
              <div ref={scrollRef} />
            </div>

            <form onSubmit={handleSend} className="p-3 border-t bg-card flex gap-2 items-center">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ketik pertanyaanmu..."
                className="flex-1 bg-muted rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              />
              <Button
                type="submit"
                size="icon"
                className="rounded-full shrink-0 w-11 h-11"
                disabled={loading || !input.trim()}
              >
                <Send size={18} />
              </Button>
            </form>
          </Card>
          </>
        )}
      </div>

      <Footer />
    </main>
  );
}
