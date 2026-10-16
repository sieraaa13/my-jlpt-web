import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { KamusOnomatope } from "@/components/kamus-onomatope";

export default function KamusOnomatopePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-24">
        <Link href="/pelajaran" className="text-primary hover:underline mb-8 inline-block">← Kembali ke Pelajaran</Link>
        <h1 className="text-4xl md:text-5xl font-black mb-8">
          Kamus <span className="text-primary">Onomatope</span>
        </h1>
        <KamusOnomatope />
      </div>
      <Footer />
    </main>
  );
}
