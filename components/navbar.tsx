"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-3xl">🎌</span>
            <span className="text-2xl font-bold">
              <span className="text-primary">Nihon</span>
              <span className="text-accent">GO!</span>
            </span>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Beranda
            </a>
            <a href="/jlpt" className="text-muted-foreground hover:text-foreground transition-colors">
              Ujian JLPT
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Pelajaran
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Tentang
            </a>
          </div>
          {/* CTA Buttons & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ModeToggle />
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Masuk
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
              Daftar Gratis
            </Button>
          </div>
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center px-2">
                <span className="text-sm font-medium">Ubah Tema</span>
                <ModeToggle />
              </div>
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Beranda
              </a>
              <a href="/jlpt" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Ujian JLPT
              </a>
              <div className="flex gap-3 pt-2">
                <Button variant="ghost" className="text-foreground hover:text-primary flex-1">
                  Masuk
                </Button>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl flex-1">
                  Daftar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
