// Shared types for the "kumpulan kanji berbunshu ..." (kanji grouped by radical)
// data files, used across JLPT levels (n2, n3, ...).

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
  /** "main" = cocok dengan tema asli file, "belum" = radikal sebenarnya, dipindah dari sheet Belum Dikelompokkan */
  section?: "main" | "belum";
};

export type RadikalFile = {
  title: string;
  groups: RadikalGroup[];
};
