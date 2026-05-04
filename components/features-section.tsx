"use client";

import Image from "next/image";

const features = [
  {
    title: "Sistem Poin & Level",
    description: "Kumpulkan XP dan naik level seperti dalam game RPG favoritmu!",
    icon: "⚔️",
  },
  {
    title: "Karakter Pendamping",
    description: "Setiap pelajaran dipandu oleh karakter anime yang unik dan menghibur.",
    icon: "🎭",
  },
  {
    title: "Quiz Interaktif",
    description: "Uji kemampuanmu dengan quiz menarik dan dapatkan hadiah spesial!",
    icon: "🎯",
  },
  {
    title: "Pelafalan Audio",
    description: "Dengarkan pengucapan asli dari native speaker Jepang.",
    icon: "🎧",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-card/50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Features list */}
          <div className="space-y-8">
            <div>
              <span className="text-accent text-sm font-medium uppercase tracking-wider">
                Fitur Unggulan
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
                Belajar Seperti <span className="text-accent">Bermain Game</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Metode pembelajaran yang didesain untuk membuat belajar bahasa Jepang tidak membosankan.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group p-5 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Anime showcase with asymmetric layout */}
          <div className="relative h-[500px] hidden lg:block">
            {/* Main large image */}
            <div className="absolute top-0 right-0 w-72 h-72 rounded-3xl overflow-hidden border-4 border-primary/30 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image 
                src="/images/grammar-mage.jpg" 
                alt="Grammar Mage" 
                fill 
                className="object-cover"
              />
            </div>
            
            {/* Secondary image - offset */}
            <div className="absolute bottom-0 left-0 w-56 h-56 rounded-3xl overflow-hidden border-4 border-accent/30 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500">
              <Image 
                src="/images/conversation-idol.jpg" 
                alt="Conversation Idol" 
                fill 
                className="object-cover"
              />
            </div>
            
            {/* Floating card */}
            <div className="absolute top-1/2 left-1/3 -translate-y-1/2 bg-card/90 backdrop-blur-sm p-4 rounded-2xl border border-border shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/50">
                  <Image 
                    src="/images/hiragana-sensei.jpg" 
                    alt="Sakura" 
                    width={48} 
                    height={48} 
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-foreground">Sakura Sensei</p>
                  <p className="text-xs text-primary">Selamat! +100 XP 🎉</p>
                </div>
              </div>
            </div>

            {/* Decorative Japanese text */}
            <div className="absolute bottom-20 right-10 text-6xl text-primary/20 font-bold">
              学
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
