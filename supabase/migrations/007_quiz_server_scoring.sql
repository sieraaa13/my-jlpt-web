-- ============================================================
-- Quiz Harian: penilaian & kuota dipindah ke server
-- Jalankan file ini di Supabase SQL Editor (Project > SQL Editor > New query),
-- SEBELUM deploy kode terbaru. Hanya menambah kolom (nullable), tidak
-- menghapus/mengubah data lama, dan tetap kompatibel dengan kode lama.
-- ============================================================

-- Setiap baris quiz_user_played sekarang juga menjadi "attempt" soal:
--   quiz_date   : tanggal kuota (WIB) saat soal dikirim ke user
--   level       : indeks level JLPT saat soal dikirim (dasar hitung poin)
--   chosen      : pilihan jawaban user (null = belum dijawab)
--   points      : poin yang diberikan server untuk soal ini
--   answered_at : waktu dijawab (null = belum dijawab)
-- Baris lama (sebelum migration ini) punya quiz_date null dan tidak pernah
-- dianggap sebagai soal aktif.
alter table quiz_user_played
  add column if not exists quiz_date   date,
  add column if not exists level       smallint,
  add column if not exists chosen      smallint,
  add column if not exists points      integer,
  add column if not exists answered_at timestamptz;

create index if not exists quiz_user_played_user_date_idx
  on quiz_user_played (user_id, quiz_date);
