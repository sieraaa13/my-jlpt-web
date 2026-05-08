"use client"; // Tambahkan ini karena kita menggunakan State untuk Chat

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageCircle, X, ChevronDown, Send } from "lucide-react";

// 1. Fungsi static params tetap dipertahankan
export function generateStaticParams() {
  return [
    { level: 'n1' }, { level: 'n2' }, { level: 'n3' }, 
    { level: 'n4' }, { level: 'n5' }, { level: 'jlpt' },
  ];
}

export default function LevelPage({ params }: { params: { level: string } }) {
  const level = params.level?.toUpperCase() || "N1";
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    // 2. Gunakan flex-col untuk Mobile, md:flex-row untuk Desktop
    // h-screen overflow-hidden agar layar tidak double scroll
    <main className="flex flex-col md:flex-row h-screen overflow-hidden bg-background text-foreground">
      
      {/* --- AREA KIRI: MATERI & KONTEN EKSISTING --- */}
      <div className="flex-1 overflow-y-auto flex flex-col">
        <Navbar />
        
        <div className="container mx-auto px-6 pt-32 pb-24 flex-1">
          <Link href="/" className="text-primary hover:underline mb-8 inline-block">
            ← Kembali ke Beranda
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-6xl font-black mb-4">
              Level <span className="text-primary">{level}</span>
            </h1>
            <p className="text-2xl text-muted-foreground mb-12">
              Selamat datang di petualangan level {level}. Di sini kamu akan mempelajari kanji, tata bahasa, dan pemahaman bacaan yang sesuai.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["Kanji", "Bunpou", "Dokkai"].map((section) => (
                <div key={section} className="p-8 rounded-3xl border border-border bg-card hover:border-primary/50 transition-colors">
                  <h3 className="text-2xl font-bold mb-2">{section}</h3>
                  <p className="text-muted-foreground mb-6">Mulai pelajari materi {section} untuk persiapan ujian.</p>
                  <Button className="w-full rounded-xl">Mulai Belajar</Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>

      {/* --- AREA KANAN: AI CHAT TUTOR (LAYOUT 1/3) --- */}
      {/* Tombol Buka Chat (Muncul jika chat tertutup) */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 p-4 bg-primary text-primary-foreground rounded-full shadow-2xl z-50 hover:scale-110 transition-transform"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Jendela Chat */}
      {isChatOpen && (
        <div className={`
          fixed inset-x-0 bottom-0 z-50 flex flex-col bg-card shadow-[0_-5px_30px_rgba(0,0,0,0.15)] transition-all duration-300 border-t
          h-[40vh] /* Tinggi 1/3 di Mobile */
          md:relative md:h-full md:w-[350px] md:border-l md:border-t-0
        `}>
          {/* Header Chat */}
          <div className="flex items-center justify-between px-4 py-3 border-b bg-muted/30">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-bold text-sm">NihonGO AI Tutor</span>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="hover:bg-muted p-1 rounded">
              <ChevronDown className="md:hidden" /> {/* Icon down untuk mobile */}
              <X className="hidden md:block" size={20} /> {/* Icon X untuk desktop */}
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
            <div className="bg-muted p-3 rounded-2xl rounded-tl-none mr-8 text-muted-foreground">
              Halo! Aku tutor AI kamu untuk Level {level}. Ada materi Kanji atau Bunpou yang ingin kamu tanyakan?
            </div>
          </div>

          {/* Input Field */}
          <div className="p-4 border-t bg-background">
            <form className="flex gap-2">
              <input 
                type="text" 
                placeholder="Tanyakan sesuatu..." 
                className="flex-1 bg-muted rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="icon" className="rounded-full shrink-0">
                <Send size={16} />
              </Button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
