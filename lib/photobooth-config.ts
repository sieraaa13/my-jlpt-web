// /lib/photobooth-config.ts
// Aturan reward Photobooth yang dipakai bersama oleh client & API route.

// Jumlah generate (Tema + Dress Up digabung) per user per hari WIB.
export const PHOTOBOOTH_MAX_PER_DAY = 10;

export interface PhotoboothStatus {
  unlocked:  boolean; // sudah menyelesaikan semua soal quiz hari ini
  used:      number;
  max:       number;
  remaining: number;
}
