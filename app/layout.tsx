import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import FloatingAIChat from "@/components/floating-ai-chat";
import { ExamProvider } from "@/components/exam-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NihonGO! - Belajar JLPT dengan Anime",
  description: "Platform belajar bahasa Jepang JLPT N1-N5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ExamProvider>
            {children}
            <FloatingAIChat />
          </ExamProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
