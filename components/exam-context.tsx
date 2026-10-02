"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ExamQuestion {
  number: number;
  q: string;
  options: string[];
  correct?: number;
  section?: string;
  passage?: string;
}

interface ActiveQuestionInfo {
  number: number;
  section: string;
  userAnswer: string;
}

interface ExamContextData {
  level?: string;
  title?: string;
  section?: string;
  questions?: ExamQuestion[];
  activeQuestion?: ActiveQuestionInfo | null;
  isExamFinished?: boolean;
}

// Soal yang dipilih user lewat tombol "Tanya" di kartu hasil. `detail` sudah
// berisi semua info soal (teks, pilihan, jawaban user, jawaban benar) supaya
// chat tidak perlu menebak soal mana yang dimaksud.
export interface ChatFocus {
  label: string;
  detail: string;
  nonce: number; // berubah tiap klik → chat dibuka lagi walau soalnya sama
}

interface ExamContextType {
  examData: ExamContextData | null;
  setExamData: (data: ExamContextData | null) => void;
  chatFocus: ChatFocus | null;
  openChatWith: (focus: { label: string; detail: string } | null) => void;
}

const ExamContext = createContext<ExamContextType>({
  examData: null,
  setExamData: () => {},
  chatFocus: null,
  openChatWith: () => {},
});

export function ExamProvider({ children }: { children: ReactNode }) {
  const [examData, setExamData] = useState<ExamContextData | null>(null);
  const [chatFocus, setChatFocus] = useState<ChatFocus | null>(null);
  const openChatWith = (focus: { label: string; detail: string } | null) =>
    setChatFocus(focus ? { ...focus, nonce: Date.now() } : null);

  return (
    <ExamContext.Provider value={{ examData, setExamData, chatFocus, openChatWith }}>
      {children}
    </ExamContext.Provider>
  );
}

export function useExamContext() {
  return useContext(ExamContext);
}
