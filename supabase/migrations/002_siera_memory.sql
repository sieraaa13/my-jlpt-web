-- ============================================================
-- Siera Long-Term Memory System
-- Jalankan file ini di Supabase SQL Editor (Project > SQL Editor > New query).
-- Tidak mengubah/menghapus tabel yang sudah ada (users, exam_history, dst).
-- ============================================================

-- 1) Penyimpanan mentah tiap pesan chat (dipakai extractor harian, dan
--    supaya percakapan bisa ditelusuri kalau perlu detail).
create table if not exists chat_messages (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references users(id) on delete cascade,
  role       text not null check (role in ('user', 'assistant')),
  content    text not null,
  created_at timestamptz not null default now()
);

create index if not exists idx_chat_messages_user_created
  on chat_messages (user_id, created_at);

-- 2) Long-term memory terstruktur (hasil ekstraksi harian / Prompt A).
create table if not exists memories (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references users(id) on delete cascade,
  type        text not null check (
                type in ('progress', 'goal', 'current_difficulty',
                         'learning_preference', 'milestone')
              ),
  topic       text,
  subject     text,
  description text not null,
  status      text not null default 'active'
              check (status in ('active', 'inactive', 'archived')),
  importance  numeric(3,2) not null default 0.5
              check (importance >= 0 and importance <= 1),
  confidence  numeric(3,2) not null default 0.5
              check (confidence >= 0 and confidence <= 1),
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create index if not exists idx_memories_user_status
  on memories (user_id, status);

-- 3) Penanda hari yang sudah diproses extractor, supaya cron yang jalan
--    dobel (retry Vercel dsb) tidak membuat memory duplikat.
create table if not exists memory_extraction_log (
  user_id      uuid not null references users(id) on delete cascade,
  process_date date not null,
  processed_at timestamptz not null default now(),
  primary key (user_id, process_date)
);

-- Catatan: tabel-tabel existing (users, exam_history, checklist_progress,
-- quiz_daily) tampaknya tidak memakai Row Level Security (RLS) — ditulis
-- langsung dari client pakai anon key. Tabel baru di atas sengaja dibuat
-- konsisten (RLS tidak diaktifkan) supaya /api/chat dan /api/cron/... bisa
-- baca-tulis dengan anon key yang sama seperti tabel lain di project ini.
