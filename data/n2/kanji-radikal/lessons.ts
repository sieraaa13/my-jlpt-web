// =================================================================
// 📝 MANIFEST FILE — Daftar kumpulan kanji berbunshu (dikelompokkan per radikal)
// Ditambah bertahap seiring setiap file dirapikan.
// =================================================================
import belumTerdefinisikan from "./belum-terdefinisikan.json";
import benda from "./benda.json";
import type { RadikalFile } from "@/data/kanji-radikal-types";

export type { RadikalWord, RadikalGroup, RadikalFile } from "@/data/kanji-radikal-types";

export const radikalKanjiFiles: Record<string, RadikalFile> = {
  "belum-terdefinisikan": belumTerdefinisikan as RadikalFile,
  benda: benda as RadikalFile,
};

export const radikalKanjiOrder = ["belum-terdefinisikan", "benda"];
