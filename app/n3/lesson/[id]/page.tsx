import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { lessons } from "@/data/n3/soumatome/lessons"; 
export function generateStaticParams() {
  const params: { id: string }[] = [];
  
  // Debug: Print structure to build logs
  console.log("Lessons structure in build:", JSON.stringify(lessons, null, 2));
  Object.keys(lessons).forEach((week) => {
    Object.keys(lessons[week]).forEach((day) => {
      params.push({ id: day }); 
    });
  });
  
  return params;
}
export default function LessonDetailPage({ params }: { params: { id: string } }) {
  // Let's debug what's happening at runtime
  console.log("Params ID:", params.id);
  console.log("Full Lessons Object:", lessons);
  let foundData = null;
  // Let's try to find the data by looking at all weeks
  for (const week in lessons) {
    if (lessons[week][params.id]) {
      const lessonFile = lessons[week][params.id];
      console.log("Found file for ID", params.id, ":", lessonFile);
      foundData = lessonFile.levels[0];
      break;
    }
  }
  if (!foundData) {
    return (
      <main className="min-h-screen bg-background flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Materi tidak ditemukan</h1>
        <p className="mb-4">ID yang dicari: {params.id}</p>
        <Link href="/n3" className="text-primary underline">Kembali ke N3</Link>
      </main>
    );
  }
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-24">
        <Link href="/n3" className="text-primary hover:underline mb-8 inline-block">
          ← Kembali ke daftar materi N3
        </Link>
        
        <h1 className="text-4xl font-black mb-2">{foundData.header.main_title}</h1>
        <p className="text-xl text-muted-foreground mb-8">{foundData.header.sub_title}</p>
        
        <div className="prose dark:prose-invert max-w-none p-6 bg-card border rounded-2xl">
           <h2 className="text-2xl font-bold mb-4">Penjelasan</h2>
           <p className="whitespace-pre-wrap">{foundData.header.translation}</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
