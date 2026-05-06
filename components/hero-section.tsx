"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce" style={{ animationDuration: "3s" }}>
        あ
      </div>
      <div className="absolute top-40 right-20 text-4xl opacity-15 animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }}>
        カ
      </div>
      <div className="absolute bottom-32 left-1/4 text-5xl opacity-10 animate-bounce" style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}>
        日
      </div>
      <div className="absolute top-1/3 right-1/3 text-3xl opacity-15 animate-bounce" style={{ animationDuration: "4.5s", animationDelay: "1.5s" }}>
        本
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
                🎌 Platform Belajar #1 Indonesia
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-balance">
              <span className="text-foreground">Belajar </span>
              <span className="text-primary">日本語</span>
              <br />
              <span className="text-foreground">Jadi </span>
              <span className="text-accent">Menyenangkan!</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Kuasai bahasa Jepang dengan metode interaktif dan karakter anime yang menemanimu di setiap langkah perjalanan belajar.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl">
                Mulai Belajar Gratis
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary px-8 py-6 text-lg rounded-xl">
                Lihat Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Pelajar Aktif</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Pelajaran</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4.9★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>
          
          {/* Right - Anime character showcase */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[600px]">
              {/* Main character */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80">
                <div className="relative w-full h-full rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border-4 border-primary/30">
                  <Image 
                    src="/asset/n1.jpg" 
                    alt="N1 Level" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Floating smaller characters - N2 */}
              <div className="absolute top-8 right-12 w-24 h-24 rounded-full overflow-hidden border-2 border-accent/50 shadow-lg animate-pulse">
                <Image 
                  src="/asset/n2.jpg" 
                  alt="N2 Level" 
                  fill 
                  className="object-cover"
                />
              </div>
              
              {/* N3 */}
              <div className="absolute bottom-20 left-8 w-28 h-28 rounded-full overflow-hidden border-2 border-primary/50 shadow-lg animate-pulse" style={{ animationDelay: "0.5s" }}>
                <Image 
                  src="/asset/n3.jpg" 
                  alt="N3 Level" 
                  fill 
                  className="object-cover"
                />
              </div>
              
              {/* N4 */}
              <div className="absolute top-24 left-0 w-20 h-20 rounded-full overflow-hidden border-2 border-accent/40 shadow-lg animate-pulse" style={{ animationDelay: "1s" }}>
                <Image 
                  src="/asset/n4.jpg" 
                  alt="N4 Level" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
