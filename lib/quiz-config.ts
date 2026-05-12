// /lib/quiz-config.ts
import { QuizLevel, QuizTopic } from "@/types/quiz";

export const QUIZ_LEVELS: QuizLevel[] = [
  {
    name: "N5",
    label: "N5 Pemula",
    diff: "sangat mudah untuk pemula absolut",
    ptCorrect: 1,
    ptStreak: 3,
    color: "#1D9E75",
  },
  {
    name: "N4",
    label: "N4 Dasar",
    diff: "mudah untuk level dasar",
    ptCorrect: 2,
    ptStreak: 3,
    color: "#534AB7",
  },
  {
    name: "N3",
    label: "N3 Menengah",
    diff: "menengah",
    ptCorrect: 3,
    ptStreak: 3,
    color: "#BA7517",
  },
  {
    name: "N2",
    label: "N2 Lanjut",
    diff: "sulit untuk level lanjut",
    ptCorrect: 4,
    ptStreak: 5,
    color: "#D85A30",
  },
  {
    name: "N1",
    label: "N1 Profesional",
    diff: "sangat sulit dan mendalam untuk profesional",
    ptCorrect: 5,
    ptStreak: 5,
    color: "#A32D2D",
  },
];

export const QUIZ_TOPICS: QuizTopic[] = [
  {
    id: "budaya",
    name: "Budaya Umum",
    icon: "🎌",
    desc: "Tradisi & kehidupan sehari-hari",
  },
  {
    id: "makanan",
    name: "Makanan & Kuliner",
    icon: "🍜",
    desc: "Kuliner khas Jepang",
  },
  {
    id: "anime",
    name: "Anime & Manga",
    icon: "⛩️",
    desc: "Pop culture Jepang",
  },
  {
    id: "tempat",
    name: "Tempat Instagrammable",
    icon: "📸",
    desc: "Spot foto & wisata populer",
  },
  {
    id: "festival",
    name: "Festival & Tradisi",
    icon: "🎆",
    desc: "Matsuri & perayaan khas",
  },
  {
    id: "modern",
    name: "Jepang Modern",
    icon: "🚅",
    desc: "Teknologi & gaya hidup kini",
  },
];

export const MAX_QUESTIONS_PER_DAY = 5;
export const MAX_TOPIC_CHANGES_PER_DAY = 2;
