-- ============================================================
-- Siera Monthly Learning Summary
-- Jalankan file ini di Supabase SQL Editor SETELAH 002_siera_memory.sql.
-- Tidak mengubah/menghapus tabel yang sudah ada.
-- ============================================================

-- Rangkuman belajar bulanan per user, dihitung dari statistik (bukan LLM)
-- oleh cron harian pada tanggal 1 tiap bulan, untuk bulan sebelumnya.
-- Disimpan permanen (tidak pernah dihapus) supaya tren histori tetap ada
-- walaupun memori individual sudah di-archive.
create table if not exists monthly_summaries (
  id                  uuid primary key default gen_random_uuid(),
  user_id             uuid not null references users(id) on delete cascade,
  year_month          text not null, -- format 'YYYY-MM', merujuk ke bulan yang dirangkum
  exams_taken         int not null default 0,
  avg_score           numeric(5,2),
  section_scores      jsonb, -- {kanji:{correct,total}, bunpou:{...}, dokkai:{...}} akumulasi bulan itu
  checklist_completed int not null default 0, -- snapshot total item checklist tercentang per akhir bulan
  quiz_days_active    int not null default 0,
  quiz_max_streak     int not null default 0,
  chat_messages_count int not null default 0,
  memories_created    int not null default 0,
  created_at          timestamptz not null default now(),
  unique (user_id, year_month)
);

create index if not exists idx_monthly_summaries_user
  on monthly_summaries (user_id, year_month desc);
