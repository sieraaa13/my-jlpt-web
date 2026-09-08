// =================================================================
// 📝 MANIFEST FILE — Daftar kumpulan kanji berbunshu (dikelompokkan per radikal)
// Ditambah bertahap seiring setiap file dirapikan.
// =================================================================
import alam from "./alam.json";
import bagianTubuh from "./bagian-tubuh.json";
import garisAtasTopi from "./garis-atas-topi.json";

export type RadikalWord = {
  kanji: string;
  bacaan: string;
  arti: string;
};

export type RadikalGroup = {
  radikal: string;
  label: string;
  count: number;
  words: RadikalWord[];
};

export type RadikalFile = {
  title: string;
  groups: RadikalGroup[];
};

export const radikalKanjiFiles: Record<string, RadikalFile> = {
  alam: alam as RadikalFile,
  "bagian-tubuh": bagianTubuh as RadikalFile,
  "garis-atas-topi": garisAtasTopi as RadikalFile,
};

export const radikalKanjiOrder = ["alam", "bagian-tubuh", "garis-atas-topi"];
