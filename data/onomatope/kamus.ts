// data/onomatope/kamus.ts
// Kamus Onomatope (menu Pelajaran): onomatope sebanyak mungkin, tidak terikat level,
// dikelompokkan berdasarkan seberapa sering dipakai lalu per kategori makna.
// Data per kelompok ada di folder umum/, kurang-umum/, langka/ (satu file per kategori).
// Setiap kata hanya muncul sekali di seluruh kamus; arti lain ditulis di kolom kondisi.
// Tanda ujian diambil otomatis dari daftar onomatope N1/N3 (ujian: true).

import type { Onomatope, OnomatopeKategori } from "@/data/onomatope-types";
import { onomatopeN1 } from "@/data/n1/onomatope";
import { onomatopeN3 } from "@/data/n3/onomatope";

import { items as umumPerasaan } from "@/data/onomatope/umum/perasaan";
import { items as umumTubuh } from "@/data/onomatope/umum/tubuh";
import { items as umumGerakan } from "@/data/onomatope/umum/gerakan";
import { items as umumBicara } from "@/data/onomatope/umum/bicara";
import { items as umumMakan } from "@/data/onomatope/umum/makan";
import { items as umumKeadaan } from "@/data/onomatope/umum/keadaan";
import { items as umumAlam } from "@/data/onomatope/umum/alam";
import { items as umumSuara } from "@/data/onomatope/umum/suara";
import { items as umumPerubahan } from "@/data/onomatope/umum/perubahan";
import { items as umumSikap } from "@/data/onomatope/umum/sikap";

import { items as kurangPerasaan } from "@/data/onomatope/kurang-umum/perasaan";
import { items as kurangTubuh } from "@/data/onomatope/kurang-umum/tubuh";
import { items as kurangGerakan } from "@/data/onomatope/kurang-umum/gerakan";
import { items as kurangBicara } from "@/data/onomatope/kurang-umum/bicara";
import { items as kurangMakan } from "@/data/onomatope/kurang-umum/makan";
import { items as kurangKeadaan } from "@/data/onomatope/kurang-umum/keadaan";
import { items as kurangAlam } from "@/data/onomatope/kurang-umum/alam";
import { items as kurangSuara } from "@/data/onomatope/kurang-umum/suara";
import { items as kurangPerubahan } from "@/data/onomatope/kurang-umum/perubahan";
import { items as kurangSikap } from "@/data/onomatope/kurang-umum/sikap";

import { items as langkaPerasaan } from "@/data/onomatope/langka/perasaan";
import { items as langkaTubuh } from "@/data/onomatope/langka/tubuh";
import { items as langkaGerakan } from "@/data/onomatope/langka/gerakan";
import { items as langkaBicara } from "@/data/onomatope/langka/bicara";
import { items as langkaKeadaan } from "@/data/onomatope/langka/keadaan";
import { items as langkaAlam } from "@/data/onomatope/langka/alam";
import { items as langkaSuara } from "@/data/onomatope/langka/suara";
import { items as langkaPerubahan } from "@/data/onomatope/langka/perubahan";
import { items as langkaSikap } from "@/data/onomatope/langka/sikap";

export type KamusTierId = "umum" | "kurang-umum" | "langka";

export type KamusTier = {
  id: KamusTierId;
  judul: string;
  deskripsi: string;
  kategori: OnomatopeKategori[];
};

const KATEGORI = [
  { id: "perasaan", judul: "Perasaan & emosi" },
  { id: "tubuh", judul: "Kondisi tubuh & kesehatan" },
  { id: "gerakan", judul: "Gerakan & tindakan" },
  { id: "bicara", judul: "Bicara, tertawa & menangis" },
  { id: "makan", judul: "Makan, minum & rasa" },
  { id: "keadaan", judul: "Keadaan benda, tempat & tekstur" },
  { id: "alam", judul: "Cuaca & alam" },
  { id: "suara", judul: "Bunyi & suara" },
  { id: "perubahan", judul: "Perubahan, jumlah & frekuensi" },
  { id: "sikap", judul: "Sikap, sifat & cara melakukan" },
] as const;

type KategoriId = (typeof KATEGORI)[number]["id"];

const kataUjian = new Set(
  [...onomatopeN1, ...onomatopeN3].flatMap((k) => k.items.filter((o) => o.ujian).map((o) => o.kata))
);

// Susun kategori sesuai urutan KATEGORI, lewati yang kosong, dan beri tanda ujian
const susun = (data: Partial<Record<KategoriId, Onomatope[]>>): OnomatopeKategori[] =>
  KATEGORI.filter((k) => data[k.id]?.length).map((k) => ({
    id: k.id,
    judul: k.judul,
    items: data[k.id]!.map((o) => ({ ...o, ujian: kataUjian.has(o.kata) })),
  }));

export const kamusOnomatope: KamusTier[] = [
  {
    id: "umum",
    judul: "Umum",
    deskripsi: "Dipakai sehari-hari dan dikenal semua penutur. Prioritas utama untuk dihafal.",
    kategori: susun({
      perasaan: umumPerasaan, tubuh: umumTubuh, gerakan: umumGerakan, bicara: umumBicara, makan: umumMakan,
      keadaan: umumKeadaan, alam: umumAlam, suara: umumSuara, perubahan: umumPerubahan, sikap: umumSikap,
    }),
  },
  {
    id: "kurang-umum",
    judul: "Kurang umum",
    deskripsi: "Masih sering ditemui di bacaan, berita, dan percakapan orang dewasa, tapi nuansanya lebih spesifik.",
    kategori: susun({
      perasaan: kurangPerasaan, tubuh: kurangTubuh, gerakan: kurangGerakan, bicara: kurangBicara, makan: kurangMakan,
      keadaan: kurangKeadaan, alam: kurangAlam, suara: kurangSuara, perubahan: kurangPerubahan, sikap: kurangSikap,
    }),
  },
  {
    id: "langka",
    judul: "Langka",
    deskripsi: "Jarang dipakai: gaya sastra, ungkapan lama, atau nuansa yang sangat khusus.",
    kategori: susun({
      perasaan: langkaPerasaan, tubuh: langkaTubuh, gerakan: langkaGerakan, bicara: langkaBicara,
      keadaan: langkaKeadaan, alam: langkaAlam, suara: langkaSuara, perubahan: langkaPerubahan, sikap: langkaSikap,
    }),
  },
];
