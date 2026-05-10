"use client";

import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";

const LEVELS = [
  { level: "n5", label: "N5", color: "from-green-500 to-emerald-500", description: "Pemula" },
  { level: "n4", label: "N4", color: "from-blue-500 to-cyan-500", description: "Dasar" },
  { level: "n3", label: "N3", color: "from-yellow-500 to-orange-500", description: "Menengah" },
  { level: "n2", label: "N2", color: "from-purple-500 to-pink-500", description: "Lanjut" },
  { level: "n1", label: "N1", color: "from-red-500 to-rose-500", description: "Profesional" },
];

export default function JLPTLevelPage() {
  const router = useRouter();

  const handleSelectLevel = (level: string) => {
    router.push(`/jlpt/${level}`);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              JLPT レベル選択
            </h1>
            <p className="text-muted-foreground text-lg">
              あなたのレベルを選んで、試験問題に挑戦しましょう！
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              Pilih level JLPT kamu untuk memulai
            </p>
          </div>

          {/* Level Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {LEVELS.map((item) => (
              <Card
                key={item.level}
                onClick={() => handleSelectLevel(item.level)}
                className="cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-105 p-6 text-center border-2 hover:border-primary"
              >
                <div className={`bg-gradient-to-br ${item.color} rounded-lg p-4 mb-4`}>
                  <h3 className="text-4xl font-bold text-white">{item.label}</h3>
                </div>
                <p className="font-semibold text-foreground mb-2">{item.description}</p>
                <p className="text-xs text-muted-foreground mb-4">
                  Klik untuk memilih
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectLevel(item.level);
                  }}
                  className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Pilih
                </button>
              </Card>
            ))}
          </div>

          {/* Info Box */}
          <Card className="p-6 bg-card/50 border-primary/30">
            <h3 className="font-semibold mb-2">📌 Panduan Memilih Level</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• <strong>N5</strong> - Pemula: Kosakata dasar & hiragana/katakana</li>
              <li>• <strong>N4</strong> - Dasar: Komunikasi sehari-hari</li>
              <li>• <strong>N3</strong> - Menengah: Topik umum & percakapan praktis</li>
              <li>• <strong>N2</strong> - Lanjut: Percakapan profesional & media cetak</li>
              <li>• <strong>N1</strong> - Profesional: Level tertinggi JLPT</li>
            </ul>
          </Card>
        </div>
      </div>
      <Footer />
    </main>
  );
}
