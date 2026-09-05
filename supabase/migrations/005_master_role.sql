-- ============================================================
-- Master role
-- Jalankan file ini di Supabase SQL Editor SETELAH 004.
-- Tidak mengubah/menghapus data yang sudah ada.
-- ============================================================

-- Penanda akun master (admin), yang bisa lihat tab data user di web.
-- RLS tidak diaktifkan, konsisten dengan tabel users lainnya di project ini.
alter table users
  add column if not exists is_master boolean not null default false;
