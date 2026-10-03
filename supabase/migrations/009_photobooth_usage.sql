-- ============================================================
-- Photobooth: kuota generate harian per user
-- Jalankan file ini di Supabase SQL Editor (Project > SQL Editor > New query),
-- SEBELUM deploy kode terbaru — tanpa tabel & fungsi ini semua generate
-- Photobooth akan ditolak server. Hanya menambah objek baru, tidak mengubah data.
-- ============================================================

-- Satu baris per user per hari (WIB). used = jumlah generate yang sudah dipakai
-- (mode Tema & Dress Up berbagi kuota yang sama).
create table if not exists photobooth_daily (
  user_id uuid    not null,
  date    date    not null,
  used    integer not null default 0,
  primary key (user_id, date)
);

-- TANPA policy → hanya API server (service role) yang bisa membaca/menulis.
alter table photobooth_daily enable row level security;

-- Ambil 1 jatah secara atomik. Mengembalikan jumlah terpakai setelah diambil,
-- atau NULL kalau kuota hari itu sudah habis (dua request bersamaan tidak bisa
-- sama-sama lolos di jatah terakhir).
create or replace function photobooth_consume(p_user uuid, p_date date, p_max integer)
returns integer
language plpgsql
as $$
declare
  v_used integer;
begin
  insert into photobooth_daily (user_id, date, used)
  values (p_user, p_date, 1)
  on conflict (user_id, date) do update
    set used = photobooth_daily.used + 1
    where photobooth_daily.used < p_max
  returning used into v_used;
  return v_used;
end;
$$;

-- Kembalikan 1 jatah (dipakai server kalau generate gagal).
create or replace function photobooth_refund(p_user uuid, p_date date)
returns void
language sql
as $$
  update photobooth_daily
     set used = greatest(used - 1, 0)
   where user_id = p_user and date = p_date;
$$;

revoke execute on function photobooth_consume(uuid, date, integer) from public, anon, authenticated;
revoke execute on function photobooth_refund(uuid, date)           from public, anon, authenticated;
grant  execute on function photobooth_consume(uuid, date, integer) to service_role;
grant  execute on function photobooth_refund(uuid, date)           to service_role;
