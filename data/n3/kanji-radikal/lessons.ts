// =================================================================
// 📝 MANIFEST FILE — Daftar kumpulan kanji berbunshu (dikelompokkan per radikal)
// Ditambah bertahap seiring setiap file dirapikan.
// =================================================================
import alam from "./alam.json";
import bagianTubuh from "./bagian-tubuh.json";
import binatang from "./binatang.json";
import garisAtasTopi from "./garis-atas-topi.json";
import kotak from "./kotak.json";
import pelindung from "./pelindung.json";
import tanahGarisAtas from "./tanah-garis-atas.json";
import titik from "./titik.json";
import garis from "./garis.json";
import type { RadikalFile } from "@/data/kanji-radikal-types";

export type { RadikalWord, RadikalGroup, RadikalFile } from "@/data/kanji-radikal-types";

export const radikalKanjiFiles: Record<string, RadikalFile> = {
  alam: alam as RadikalFile,
  "bagian-tubuh": bagianTubuh as RadikalFile,
  binatang: binatang as RadikalFile,
  "garis-atas-topi": garisAtasTopi as RadikalFile,
  kotak: kotak as RadikalFile,
  pelindung: pelindung as RadikalFile,
  "tanah-garis-atas": tanahGarisAtas as RadikalFile,
  titik: titik as RadikalFile,
  garis: garis as RadikalFile,
};

export const radikalKanjiOrder = [
  "alam",
  "bagian-tubuh",
  "binatang",
  "garis-atas-topi",
  "kotak",
  "pelindung",
  "tanah-garis-atas",
  "titik",
  "garis",
];
