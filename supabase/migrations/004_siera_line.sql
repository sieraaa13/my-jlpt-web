-- ============================================================
-- Siera x LINE Integration
-- Jalankan file ini di Supabase SQL Editor SETELAH 002 dan 003.
-- Tidak mengubah/menghapus data yang sudah ada.
-- ============================================================

-- Tautan akun LINE ke akun web. line_consent WAJIB true (persetujuan
-- eksplisit user) sebelum Siera boleh mengirim pesan proaktif via LINE.
alter table users
  add column if not exists line_user_id  text unique,
  add column if not exists line_linked_at timestamptz,
  add column if not exists line_consent  boolean not null default false;

-- Tandai asal pesan (web / LINE) supaya histori tetap satu tempat dan
-- extractor memori tetap membaca semua percakapan tanpa peduli kanal.
alter table chat_messages
  add column if not exists channel text not null default 'web'
    check (channel in ('web', 'line'));

-- Kode sekali pakai untuk proses "hubungkan akun LINE" dari halaman profil.
-- Dibuat saat user pertama kali follow/chat bot LINE, dikonsumsi begitu
-- dipakai di web (lihat /api/line/link).
create table if not exists line_link_codes (
  code       text primary key,
  line_user_id text not null,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null
);

-- Penanda broadcast yang sudah terkirim per user per tanggal, supaya cron
-- yang jalan dobel tidak mengirim pesan LINE dua kali ke user yang sama.
create table if not exists line_broadcast_log (
  user_id        uuid not null references users(id) on delete cascade,
  broadcast_date date not null,
  sent_at        timestamptz not null default now(),
  primary key (user_id, broadcast_date)
);
