import { ExamSelector } from "@/components/exam-selector";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function JLPTPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <ExamSelector />
      </div>
      <Footer />
    </main>
  );
}
