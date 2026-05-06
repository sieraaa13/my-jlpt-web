"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Navbar } from "@/components/navbar";

type Lesson = {
  day: number;
  title: string;
};

type Week = {
  week: number;
  lessons: Lesson[];
};

const weeks: Week[] = [
  {
    week: 1,
    lessons: [
      { day: 1, title: "ぼくにもやらせて" },
      { day: 2, title: "そこに置いといて" },
      { day: 3, title: "女らしい" },
      { day: 4, title: "できるようになった！" },
      { day: 5, title: "言ったように" },
      { day: 6, title: "話を聞こうとしない" },
    ],
  },
  {
    week: 2,
    lessons: [
      { day: 1, title: "うそばっかり！" },
      { day: 2, title: "事故などによる渋滞" },
      { day: 3, title: "あなたのこと" },
      { day: 4, title: "次の方どうぞ" },
      { day: 5, title: "暑くてたまらない" },
      { day: 6, title: "やる気がしない" },
    ],
  },
  {
    week: 3,
    lessons: [
      { day: 1, title: "もう一度言ってください" },
      { day: 2, title: "失礼します" },
      { day: 3, title: "お疲れ様" },
      { day: 4, title: "頑張って" },
      { day: 5, title: "気をつけて" },
      { day: 6, title: "ありがとうございます" },
    ],
  },
];

export default function SoumatomeN3Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <Link 
              href="/jlpt/n3" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 text-sm"
            >
              ← Kembali ke N3
            </Link>
            
            <div className="text-center">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                Materi Belajar
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-4">
                <span className="text-foreground">Soumatome </span>
                <span className="text-primary">N3</span>
              </h1>
              <p className="text-xl text-accent mb-3">総まとめ</p>
              <p className="text-muted-foreground text-lg">
                Belajar terstruktur dalam {weeks.length} minggu • {weeks.reduce((acc, w) => acc + w.lessons.length, 0)} pelajaran
              </p>
            </div>
          </div>

          {/* Weeks */}
          <div className="space-y-8">
            {weeks.map((week) => (
              <div key={week.week}>
                {/* Week Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/20 text-primary px-4 py-2 rounded-xl font-bold">
                    Minggu {week.week}
                  </div>
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-muted-foreground text-sm">
                    {week.lessons.length} hari
                  </span>
                </div>

                {/* Lessons */}
                <div className="grid md:grid-cols-2 gap-3">
                  {week.lessons.map((lesson) => (
                    <Link 
                      key={lesson.day}
                      href={`/jlpt/n3/soumatome/week${week.week}/day${lesson.day}`}
                    >
                      <Card className="group bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer hover:scale-[1.02]">
                        <div className="p-4 flex items-center gap-4">
                          <div className="bg-primary/10 text-primary w-12 h-12 rounded-xl flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            📖
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                              <span className="bg-secondary/50 px-2 py-0.5 rounded">
                                {lesson.day}日目
                              </span>
                            </div>
                            <p className="text-foreground font-medium truncate group-hover:text-primary transition-colors">
                              {lesson.title}
                            </p>
                          </div>

                          <div className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0">
                            →
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              💡 Tip: Belajar 1 hari/sesi untuk hasil maksimal
            </p>
            <Link 
              href="/jlpt/n3"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-medium transition-colors"
            >
              ← Pilih Materi Lain
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
