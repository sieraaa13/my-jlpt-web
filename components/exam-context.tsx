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
}

interface ExamContextType {
  examData: ExamContextData | null;
  setExamData: (data: ExamContextData | null) => void;
}

const ExamContext = createContext<ExamContextType>({
  examData: null,
  setExamData: () => {},
});

export function ExamProvider({ children }: { children: ReactNode }) {
  const [examData, setExamData] = useState<ExamContextData | null>(null);

  return (
    <ExamContext.Provider value={{ examData, setExamData }}>
      {children}
    </ExamContext.Provider>
  );
}

export function useExamContext() {
  return useContext(ExamContext);
}
