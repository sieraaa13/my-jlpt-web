// =================================================================
// 📝 MANIFEST FILE — Daftar kumpulan kanji berbunshu (dikelompokkan per radikal)
// Ditambah bertahap seiring setiap file dirapikan.
// =================================================================
import alam from "./alam.json";
import anggotaTubuh from "./anggota-tubuh.json";
import belumTerdefinisikan from "./belum-terdefinisikan.json";
import benda from "./benda.json";
import binatang from "./binatang.json";
import melihat from "./melihat.json";
import n2referensiSoal from "./n2-referensi-soal.json";
import orang from "./orang.json";
import tambahan from "./tambahan.json";
import tanganLagi from "./tangan-lagi.json";
import tempat from "./tempat.json";
import type { RadikalFile } from "@/data/kanji-radikal-types";

export type { RadikalWord, RadikalGroup, RadikalFile } from "@/data/kanji-radikal-types";

export const radikalKanjiFiles: Record<string, RadikalFile> = {
  "belum-terdefinisikan": belumTerdefinisikan as RadikalFile,
  benda: benda as RadikalFile,
  "n2-referensi-soal": n2referensiSoal as RadikalFile,
  tempat: tempat as RadikalFile,
  tambahan: tambahan as RadikalFile,
  binatang: binatang as RadikalFile,
  "anggota-tubuh": anggotaTubuh as RadikalFile,
  alam: alam as RadikalFile,
  orang: orang as RadikalFile,
  "tangan-lagi": tanganLagi as RadikalFile,
  melihat: melihat as RadikalFile,
};

export const radikalKanjiOrder = [
  "belum-terdefinisikan",
  "benda",
  "n2-referensi-soal",
  "tempat",
  "tambahan",
  "binatang",
  "anggota-tubuh",
  "alam",
  "orang",
  "tangan-lagi",
  "melihat",
];
