-- Public portfolio content; edits are restricted to the Supabase dashboard/service role.
create table public.portfolio_content (
  id uuid primary key default gen_random_uuid(),
  kind text not null check (kind in ('portfolio', 'experience', 'skill', 'certificate')),
  slug text not null,
  position integer not null default 0,
  data jsonb not null default '{}'::jsonb check (jsonb_typeof(data) = 'object'),
  unique (kind, slug)
);
alter table public.portfolio_content enable row level security;
create policy "Public content is readable" on public.portfolio_content
  for select to anon, authenticated using (true);
grant select on public.portfolio_content to anon, authenticated;
revoke insert, update, delete on public.portfolio_content from anon, authenticated;
