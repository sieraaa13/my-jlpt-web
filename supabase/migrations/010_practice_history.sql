-- ============================================================
-- Latihan per Mondai (N1): riwayat sesi latihan
-- Jalankan file ini di Supabase SQL Editor (Project > SQL Editor > New query).
-- Hanya menambah tabel baru, tidak mengubah data. Sebelum tabel ini dibuat,
-- latihan tetap bisa dikerjakan, hanya hasilnya tidak tersimpan.
-- ============================================================

-- Satu baris per sesi latihan. items = hasil per soal:
--   [{ "k": "2010-07:12:0", "a": 2, "c": true }, ...]
--   k = periode:mondai:urutan soal, a = jawaban user (-1 = kosong), c = benar
create table if not exists practice_history (
  id           uuid        primary key default gen_random_uuid(),
  user_id      uuid        not null references users(id) on delete cascade,
  level        text        not null default 'N1',
  mondai       integer     not null,
  total        integer     not null,
  correct      integer     not null,
  units        integer     not null,  -- jumlah soal (mondai 1-6) / teks (mondai 7-13)
  duration_sec integer,               -- null kalau timer dimatikan
  target_sec   integer,
  items        jsonb       not null default '[]',
  completed_at timestamptz not null default now()
);

create index if not exists practice_history_user_idx
  on practice_history (user_id, completed_at desc);

-- Sama seperti exam_history: dibaca & ditulis langsung dari browser (anon key).
