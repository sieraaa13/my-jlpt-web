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

              {/* Right - Removed character collage */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
