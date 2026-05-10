import { exam201107 } from "../data/exams/2011/07";

// Data exam dipisah per level
// Saat ini hanya N3 yang ada datanya
// Untuk N1, N2, N4, N5 - akan return null sampai data tersedia
const EXAMS_DATA_BY_LEVEL: Record<string, Record<string, any>> = {
  n3: {
    "2011-07": exam201107,
    // Tambahkan data N3 lainnya di sini
    // "2011-12": exam201112,
    // "2012-07": exam201207,
  },
  
  // N1 - Belum ada data
  n1: {
    // "2011-07": exam201107_n1,
  },
  
  // N2 - Belum ada data
  n2: {
    // "2011-07": exam201107_n2,
  },
  
  // N4 - Belum ada data
  n4: {
    // "2011-07": exam201107_n4,
  },
  
  // N5 - Belum ada data
  n5: {
    // "2011-07": exam201107_n5,
  },
};

export async function getExamData(
  year: string,
  period: string,
  level?: string
): Promise<any> {
  const levelKey = (level || "n3").toLowerCase();
  const key = `${year}-${period}`;

  // Cek apakah level ada di data
  const levelData = EXAMS_DATA_BY_LEVEL[levelKey];

  if (!levelData) {
    console.error(`Level ${levelKey.toUpperCase()} tidak ditemukan dalam database`);
    return null;
  }

  // Cek apakah data untuk year-period tersedia
  const examData = levelData[key];

  if (!examData) {
    console.error(
      `Exam data tidak ditemukan untuk JLPT ${levelKey.toUpperCase()} - ${key}`
    );
    return null;
  }

  console.log(`Loaded exam data for JLPT ${levelKey.toUpperCase()} - ${key}`);
  return examData;
}
