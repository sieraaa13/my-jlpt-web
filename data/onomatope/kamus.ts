// data/onomatope/kamus.ts
// Kamus Onomatope (menu Pelajaran): onomatope sebanyak mungkin, tidak terikat level,
// dikelompokkan berdasarkan seberapa sering dipakai lalu per kategori makna.
// Tanda ujian diambil otomatis dari daftar onomatope N1/N3 (ujian: true).

import type { OnomatopeKategori } from "@/data/onomatope-types";
import { onomatopeN1 } from "@/data/n1/onomatope";
import { onomatopeN3 } from "@/data/n3/onomatope";
import { onomatopeUmum } from "@/data/onomatope/umum";
import { onomatopeKurangUmum } from "@/data/onomatope/kurang-umum";
import { onomatopeLangka } from "@/data/onomatope/langka";

export type KamusTierId = "umum" | "kurang-umum" | "langka";

export type KamusTier = {
  id: KamusTierId;
  judul: string;
  deskripsi: string;
  kategori: OnomatopeKategori[];
};

const kataUjian = new Set(
  [...onomatopeN1, ...onomatopeN3].flatMap((k) => k.items.filter((o) => o.ujian).map((o) => o.kata))
);

const tandaiUjian = (kategori: OnomatopeKategori[]): OnomatopeKategori[] =>
  kategori.map((k) => ({ ...k, items: k.items.map((o) => ({ ...o, ujian: kataUjian.has(o.kata) })) }));

export const kamusOnomatope: KamusTier[] = [
  {
    id: "umum",
    judul: "Umum",
    deskripsi: "Dipakai sehari-hari dan dikenal semua penutur. Prioritas utama untuk dihafal.",
    kategori: tandaiUjian(onomatopeUmum),
  },
  {
    id: "kurang-umum",
    judul: "Kurang umum",
    deskripsi: "Masih sering ditemui di bacaan, berita, dan percakapan orang dewasa, tapi nuansanya lebih spesifik.",
    kategori: tandaiUjian(onomatopeKurangUmum),
  },
  {
    id: "langka",
    judul: "Langka",
    deskripsi: "Jarang dipakai: gaya sastra, ungkapan lama, atau nuansa yang sangat khusus.",
    kategori: tandaiUjian(onomatopeLangka),
  },
];
