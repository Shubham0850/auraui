-- Users table for AuraUI template downloads
create table if not exists public.users (
  id         uuid primary key default gen_random_uuid(),
  email      text unique not null,
  name       text,
  image      text,
  provider   text default 'google',
  created_at timestamptz default now()
);

-- Secure by default — only service role can read/write
alter table public.users enable row level security;

create policy "service_role_all" on public.users
  using (true)
  with check (true);
