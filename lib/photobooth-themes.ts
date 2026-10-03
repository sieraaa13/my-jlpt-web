// lib/photobooth-themes.ts
// Data tema & kategori dress-up Photobooth, di-import langsung (ikut ter-bundle
// saat build) supaya API route tidak perlu fetch JSON dari domain sendiri.
// File JSON tetap di public/asset/photobooth/themes/ — ubah di sana, lalu deploy.
// Jangan di-import dari komponen client (prompt ikut terbawa).
import tema1 from "@/public/asset/photobooth/themes/tema1.json";
import tema2 from "@/public/asset/photobooth/themes/tema2.json";
import tema4 from "@/public/asset/photobooth/themes/tema4.json";
import tema5 from "@/public/asset/photobooth/themes/tema5.json";
// tema3 sengaja nonaktif (file di-rename jadi tema3.j)

export type Theme = {
  id: string;
  name: string;
  template: string;
  maxPhotos: number;
  prompt: string;
};

export type DressupCategory = {
  id: string;
  name: string;
  order: number;
  prompt: string;
};

const themesOf = (file: { themes: unknown[] }) => file.themes as Theme[];

export const THEMES: Theme[] = [tema1, tema2, tema5].flatMap(themesOf);

export const DRESSUP_CATEGORIES: DressupCategory[] = (tema4.categories as DressupCategory[])
  .slice()
  .sort((a, b) => a.order - b.order);
