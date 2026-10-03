// data/onomatope-types.ts
// Tipe data tab Onomatope (dipakai N3, N1, dst.)

export type Onomatope = {
  kata: string;
  arti: string;
  kondisi: string;
  contoh: string;
  // true = kata ini muncul di soal/opsi ujian level itu di data/exams
  ujian?: boolean;
};

export type OnomatopeKategori = {
  id: string;
  judul: string;
  items: Onomatope[];
};
