-- ============================================================
-- Siera User Profile (Fase 4 dari sistem memory)
-- Jalankan file ini di Supabase SQL Editor (Project > SQL Editor > New query),
-- SETELAH deploy kode terbaru. Tidak menghapus data lama.
-- ============================================================

-- 1) Profil belajar yang stabil: satu baris per (user, kategori), di-update
--    di tempat (bukan menumpuk baris baru tiap hari seperti tabel `memories`).
--    Kalau user punya beberapa fakta untuk kategori yang sama (mis. dua target
--    belajar), Memory Extractor akan menggabungkannya jadi satu description.
create table if not exists user_profile (
  user_id     uuid not null references users(id) on delete cascade,
  category    text not null check (category in ('goal', 'learning_preference')),
  description text not null,
  confidence  numeric(3,2) not null default 0.5
              check (confidence >= 0 and confidence <= 1),
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  primary key (user_id, category)
);

-- 2) Migrasi satu kali: pindahkan goal/learning_preference AKTIF paling baru
--    per user dari `memories` ke `user_profile` sebagai snapshot awal.
insert into user_profile (user_id, category, description, confidence, created_at, updated_at)
select distinct on (user_id, type)
  user_id, type as category, description, confidence, created_at, updated_at
from memories
where type in ('goal', 'learning_preference') and status = 'active'
order by user_id, type, updated_at desc
on conflict (user_id, category) do nothing;

-- 3) Arsipkan (BUKAN hapus) baris goal/learning_preference lama di `memories`
--    supaya riwayatnya tetap ada (bisa dicari lewat "dulu targetku apa ya?"),
--    tapi tidak dobel muncul sebagai memory aktif di prompt Siera.
update memories
set status = 'archived', updated_at = now()
where type in ('goal', 'learning_preference') and status = 'active';

-- Catatan: kolom `type` di tabel `memories` SENGAJA tidak diubah check
-- constraint-nya (tetap mengizinkan 'goal'/'learning_preference') supaya baris
-- lama yang baru diarsipkan di atas tidak melanggar constraint. Mulai sekarang
-- kode aplikasi tidak lagi MENULIS baris baru bertipe itu ke `memories`.
