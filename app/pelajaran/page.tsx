import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { kamusOnomatope } from "@/data/onomatope/kamus";

// Menu Pelajaran: materi umum yang tidak terikat level JLPT
const totalOnomatope = kamusOnomatope.reduce((n, t) => n + t.kategori.reduce((m, k) => m + k.items.length, 0), 0);

const MATERI = [
  {
    href: "/pelajaran/onomatope",
    icon: "🔊",
    judul: "Kamus Onomatope",
    jp: "擬音語・擬態語",
    deskripsi: `${totalOnomatope} onomatope dengan arti, kondisi penggunaan, dan contoh kalimat. Dikelompokkan: umum, kurang umum, langka.`,
  },
];

export default function PelajaranPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-24">
        <Link href="/" className="text-primary hover:underline mb-8 inline-block">← Kembali ke Beranda</Link>
        <h1 className="text-4xl md:text-5xl font-black mb-3">Pelajaran</h1>
        <p className="text-muted-foreground mb-10">Materi umum yang berguna untuk semua level JLPT.</p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MATERI.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className="rounded-3xl border border-border bg-card p-6 flex flex-col gap-2 hover:border-primary/50 transition-colors"
            >
              <span className="text-4xl">{m.icon}</span>
              <span className="text-xl font-black">{m.judul}</span>
              <span className="text-sm text-muted-foreground">{m.jp}</span>
              <span className="text-sm">{m.deskripsi}</span>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
