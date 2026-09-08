// =================================================================
// 📝 MANIFEST FILE — Daftar kumpulan kanji berbunshu (dikelompokkan per radikal)
// Ditambah bertahap seiring setiap file dirapikan.
// =================================================================
import alam from "./alam.json";
import bagianTubuh from "./bagian-tubuh.json";
import garisAtasTopi from "./garis-atas-topi.json";
import kotak from "./kotak.json";
import pelindung from "./pelindung.json";
import tanahGarisAtas from "./tanah-garis-atas.json";
import titik from "./titik.json";
import belumTerdefinisikan from "./belum-terdefinisikan.json";

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
  kotak: kotak as RadikalFile,
  pelindung: pelindung as RadikalFile,
  "tanah-garis-atas": tanahGarisAtas as RadikalFile,
  titik: titik as RadikalFile,
  "belum-terdefinisikan": belumTerdefinisikan as RadikalFile,
};

export const radikalKanjiOrder = [
  "alam",
  "bagian-tubuh",
  "garis-atas-topi",
  "kotak",
  "pelindung",
  "tanah-garis-atas",
  "titik",
  "belum-terdefinisikan",
];
