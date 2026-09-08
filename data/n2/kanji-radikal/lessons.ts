// =================================================================
// 📝 MANIFEST FILE — Daftar kumpulan kanji berbunshu (dikelompokkan per radikal)
// Ditambah bertahap seiring setiap file dirapikan.
// =================================================================
import belumTerdefinisikan from "./belum-terdefinisikan.json";
import benda from "./benda.json";
import n2referensiSoal from "./n2-referensi-soal.json";
import tempat from "./tempat.json";
import type { RadikalFile } from "@/data/kanji-radikal-types";

export type { RadikalWord, RadikalGroup, RadikalFile } from "@/data/kanji-radikal-types";

export const radikalKanjiFiles: Record<string, RadikalFile> = {
  "belum-terdefinisikan": belumTerdefinisikan as RadikalFile,
  benda: benda as RadikalFile,
  "n2-referensi-soal": n2referensiSoal as RadikalFile,
  tempat: tempat as RadikalFile,
};

export const radikalKanjiOrder = ["belum-terdefinisikan", "benda", "n2-referensi-soal", "tempat"];
