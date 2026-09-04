"use client";

import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { ModeToggle } from "./mode-toggle";
import { useAuth, getRemainingTimeMs } from "@/components/auth-context";
import LoginModal from "@/components/login-modal";
import { User, LogOut, ChevronDown, History } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [remainingTime, setRemainingTime] = useState("");

  const { user, logout, isLoaded } = useAuth();
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!user) { setRemainingTime(""); return; }
    const updateTime = () => {
      const ms = getRemainingTimeMs();
      if (ms <= 0) { setRemainingTime("Expired"); return; }
      const hours = Math.floor(ms / (60 * 60 * 1000));
      const minutes = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));
      setRemainingTime(`${hours}j ${minutes}m`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60 * 1000);
    return () => clearInterval(interval);
  }, [user]);

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* LOGO */}
            <div className="flex items-center gap-2">
              <span className="text-3xl">🎌</span>
              <span className="text-2xl font-bold">
                <span className="text-primary">Nihon</span>
                <span className="text-accent">GO!</span>
              </span>
            </div>

            {/* ── DESKTOP NAV ── */}
            <div className="hidden md:flex items-center gap-8">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Beranda
              </a>
              <a href="/siera" className="text-muted-foreground hover:text-foreground transition-colors">
                Siera
              </a>
              <a href="/jlpt" className="text-muted-foreground hover:text-foreground transition-colors">
                Ujian JLPT
              </a>
              {/* ↓↓↓ LINK QUIZ HARIAN DITAMBAH DI SINI ↓↓↓ */}
              <a href="/quiz" className="text-muted-foreground hover:text-foreground transition-colors">
                Quiz Harian
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Pelajaran
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Tentang
              </a>
            </div>

            {/* DESKTOP RIGHT */}
            <div className="hidden md:flex items-center gap-3">
              <ModeToggle />

              {!isLoaded ? (
                <div className="w-24 h-9 bg-muted rounded-xl animate-pulse" />
              ) : user ? (
                <div className="relative" ref={userMenuRef}>
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors border border-primary/30"
                  >
                    <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-medium text-sm">Halo, {user.name}!</span>
                    <ChevronDown size={14} className={`transition-transform ${isUserMenuOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isUserMenuOpen && (
                    <div className="absolute right-0 top-full mt-2 w-60 bg-card border border-border rounded-xl shadow-xl overflow-hidden">
                      <div className="px-4 py-3 border-b border-border bg-muted/30">
                        <div className="flex items-center gap-2">
                          <User size={14} className="text-primary" />
                          <span className="text-sm font-semibold">{user.name}</span>
                        </div>
                        <p className="text-[11px] text-muted-foreground mt-1">⏱ Sisa sesi: {remainingTime}</p>
                      </div>

                      <Link href="/riwayat" onClick={() => setIsUserMenuOpen(false)}
                        className="w-full flex items-center gap-2 px-4 py-3 text-sm hover:bg-muted/50 transition-colors">
                        <History size={14} className="text-primary" />
                        Riwayat Ujian
                      </Link>

                      {/* ↓↓↓ QUIZ HARIAN DI DROPDOWN USER ↓↓↓ */}
                      <Link href="/quiz" onClick={() => setIsUserMenuOpen(false)}
                        className="w-full flex items-center gap-2 px-4 py-3 text-sm hover:bg-muted/50 transition-colors">
                        <span className="text-sm">🎌</span>
                        Quiz Harian
                      </Link>

                      <button onClick={handleLogout}
                        className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-500 hover:bg-red-500/10 transition-colors border-t border-border">
                        <LogOut size={14} />
                        Keluar
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Button variant="ghost" onClick={() => setIsLoginOpen(true)} className="text-foreground hover:text-primary">
                  Masuk
                </Button>
              )}
            </div>

            {/* HAMBURGER */}
            <button className="md:hidden p-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>

          {/* ── MOBILE MENU ── */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center px-2">
                  <span className="text-sm font-medium">Ubah Tema</span>
                  <ModeToggle />
                </div>

                <a href="/" className="text-muted-foreground hover:text-foreground transition-colors py-2">Beranda</a>
                <a href="/siera" className="text-muted-foreground hover:text-foreground transition-colors py-2">Siera</a>
                <a href="/jlpt" className="text-muted-foreground hover:text-foreground transition-colors py-2">Ujian JLPT</a>
                {/* ↓↓↓ QUIZ HARIAN DI MOBILE MENU ↓↓↓ */}
                <a href="/quiz" className="text-muted-foreground hover:text-foreground transition-colors py-2">Quiz Harian 🎌</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2">Pelajaran</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2">Tentang</a>

                <div className="pt-2 border-t border-border">
                  {!isLoaded ? (
                    <div className="w-full h-10 bg-muted rounded-xl animate-pulse" />
                  ) : user ? (
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-xl border border-primary/30">
                        <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                          {user.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm truncate">Halo, {user.name}!</p>
                          <p className="text-[11px] text-muted-foreground">⏱ Sisa sesi: {remainingTime}</p>
                        </div>
                      </div>

                      <Link href="/riwayat" onClick={() => setIsMenuOpen(false)}
                        className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium hover:bg-muted/50 transition-colors">
                        <History size={16} className="text-primary" />
                        Riwayat Ujian
                      </Link>

                      <Link href="/quiz" onClick={() => setIsMenuOpen(false)}
                        className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium hover:bg-muted/50 transition-colors">
                        <span>🎌</span>
                        Quiz Harian
                      </Link>

                      <Button onClick={handleLogout} variant="ghost"
                        className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-500/10">
                        <LogOut size={16} className="mr-2" />
                        Keluar
                      </Button>
                    </div>
                  ) : (
                    <Button onClick={() => { setIsLoginOpen(true); setIsMenuOpen(false); }}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                      Masuk
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}
