// ============================================================
// /data/jlpt-data.ts
// Data struktur kategori JLPT untuk level selection
// ============================================================

export const jlptData = {
  n1: {
    id: "n1",
    level: "N1",
    description: "上級 - Advanced",
    color: "from-red-600 to-red-500",
  },
  n2: {
    id: "n2",
    level: "N2",
    description: "中級上 - Upper Intermediate",
    color: "from-orange-600 to-orange-500",
  },
  n3: {
    id: "n3",
    level: "N3",
    description: "中級 - Intermediate",
    color: "from-yellow-600 to-yellow-500",
  },
  n4: {
    id: "n4",
    level: "N4",
    description: "初級上 - Upper Elementary",
    color: "from-green-600 to-green-500",
  },
  n5: {
    id: "n5",
    level: "N5",
    description: "初級 - Elementary",
    color: "from-blue-600 to-blue-500",
  },
};

export const categoryInfo: Record<string, any> = {
  soumatome: {
    id: "soumatome",
    title: "総まとめ",
    description: "Materi belajar terstruktur per minggu dengan target waktu jelas",
    icon: "📚",
    questions: [],  // Empty by default - akan diisi dari data source lain
  },
  shinkanzen: {
    id: "shinkanzen",
    title: "新完全マスター",
    description: "Buku latihan komprehensif untuk persiapan JLPT",
    icon: "📖",
    questions: [],  // Empty by default - akan diisi dari data source lain
  },
  pratiksoal: {
    id: "pratiksoal",
    title: "Latihan Soal",
    description: "Kerjakan soal-soal JLPT dari tahun 2011-2025",
    icon: "✍️",
    questions: [],  // Empty by default - akan diisi dari data source lain
  },
};

// Fallback categories jika category tidak ditemukan
export const defaultCategory = {
  id: "unknown",
  title: "Kategori Tidak Ditemukan",
  description: "Kategori yang Anda cari tidak tersedia",
  icon: "❓",
  questions: [],
};
