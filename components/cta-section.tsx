"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="relative bg-card rounded-3xl overflow-hidden border border-border">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <div className="absolute top-10 right-10 text-8xl">あ</div>
            <div className="absolute top-1/2 right-1/4 text-6xl">カ</div>
            <div className="absolute bottom-10 right-20 text-7xl">漢</div>
          </div>

          <div className="relative z-10 p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Content */}
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-balance">
                  Siap Memulai <span className="text-primary">Petualangan</span> Belajar?
                </h2>
                <p className="text-muted-foreground text-lg">
                  Bergabunglah dengan 50.000+ pelajar lainnya dan mulai kuasai bahasa Jepang hari ini. Gratis selamanya untuk pelajaran dasar!
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl">
                    Mulai Sekarang
                  </Button>
                  <Button size="lg" variant="outline" className="border-border hover:bg-secondary px-8 py-6 text-lg rounded-xl">
                    Pelajari Lebih Lanjut
                  </Button>
                </div>
              </div>

              {/* Right - Character collage */}
              <div className="relative h-64 lg:h-80 hidden lg:block">
                <div className="absolute top-0 left-0 w-24 h-24 rounded-2xl overflow-hidden border-2 border-primary/50 shadow-lg transform -rotate-6">
                  <Image src="/images/hiragana-sensei.jpg" alt="Sakura" fill className="object-cover" />
                </div>
                <div className="absolute top-4 left-1/3 w-28 h-28 rounded-2xl overflow-hidden border-2 border-accent/50 shadow-lg transform rotate-3">
                  <Image src="/images/katakana-ninja.jpg" alt="Ninja" fill className="object-cover" />
                </div>
                <div className="absolute top-12 right-0 w-20 h-20 rounded-2xl overflow-hidden border-2 border-primary/50 shadow-lg transform rotate-12">
                  <Image src="/images/kanji-samurai.jpg" alt="Samurai" fill className="object-cover" />
                </div>
                <div className="absolute bottom-0 left-10 w-26 h-26 rounded-2xl overflow-hidden border-2 border-accent/50 shadow-lg transform rotate-6">
                  <Image src="/images/vocab-chef.jpg" alt="Chef" width={104} height={104} className="object-cover" />
                </div>
                <div className="absolute bottom-4 right-1/4 w-24 h-24 rounded-2xl overflow-hidden border-2 border-primary/50 shadow-lg transform -rotate-3">
                  <Image src="/images/grammar-mage.jpg" alt="Mage" fill className="object-cover" />
                </div>
                <div className="absolute bottom-12 right-0 w-20 h-20 rounded-2xl overflow-hidden border-2 border-accent/50 shadow-lg transform -rotate-12">
                  <Image src="/images/conversation-idol.jpg" alt="Idol" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
