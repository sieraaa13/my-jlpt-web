-- ============================================================
-- Quiz Harian: aktifkan Row Level Security (RLS) di tabel quiz
-- Jalankan file ini di Supabase SQL Editor (Project > SQL Editor > New query).
-- Aman dijalankan sebelum atau sesudah deploy kode, karena sejak migration 007
-- semua PENULISAN tabel quiz dilakukan API server dengan service role key
-- (service role selalu melewati RLS). Tidak menghapus data.
-- ============================================================

alter table quiz_questions   enable row level security;
alter table quiz_user_played enable row level security;
alter table quiz_daily       enable row level security;

-- quiz_questions: TANPA policy → anon key tidak bisa membaca/menulis sama
-- sekali, jadi kunci jawaban hanya bisa diakses API server.

-- quiz_user_played: boleh DIBACA dengan anon key (halaman /quiz menghitung
-- soal yang belum dijawab), tapi tidak boleh ditulis.
drop policy if exists "quiz_user_played read only" on quiz_user_played;
create policy "quiz_user_played read only" on quiz_user_played
  for select to anon, authenticated using (true);

-- quiz_daily: boleh DIBACA dengan anon key (halaman /quiz, Siera memory &
-- ringkasan bulanan), tapi tidak boleh ditulis — poin & kuota hanya diubah server.
drop policy if exists "quiz_daily read only" on quiz_daily;
create policy "quiz_daily read only" on quiz_daily
  for select to anon, authenticated using (true);

-- Rollback darurat (kalau kuis error karena SUPABASE_SERVICE_ROLE_KEY di
-- Vercel ternyata bukan service role key):
--   alter table quiz_questions   disable row level security;
--   alter table quiz_user_played disable row level security;
--   alter table quiz_daily       disable row level security;
