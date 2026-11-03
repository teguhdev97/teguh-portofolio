# Deploy Teguh Portfolio

Use Node.js 24 and npm. Run `npm ci`, `npm run build`, then `npm start`.
The build uses webpack because this project uses webpack plugins (PWA and SVG).

## New Supabase project

Create a project in your Supabase organization. Run
`supabase/migrations/202611040001_content.sql` in its SQL editor.
Set these environment variables locally in `.env.local` and in Vercel:

- `NEXT_PUBLIC_SUPABASE_URL`: project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: public anon key (never a service-role key)
- `NEXT_PUBLIC_SITE_URL`: final deployment URL, including https://

The portfolio, experience, skill, and certificate pages read `portfolio_content`
directly from Supabase on the server. Each row has `kind`, a unique `slug` within
that kind, `position`, and a `data` JSON object matching the existing UI fields.
Import your existing records via the SQL editor/dashboard; no old database data
is included in the Git repository. Public clients can read but cannot modify content.
Do not put private information into these public content rows.

The old guestbook page remains disabled as in the source repository. Its auth,
realtime, schema, and moderation need separate setup before enabling it.
EmailJS contact delivery requires the original NEXT_PUBLIC_EMAILJS_SERVICE_ID,
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY settings.
Dashboard provider API credentials are optional for the rest of the website.

## Vercel

Import `teguhdev97/teguh-portofolio` as a new Next.js project, select Node.js 24,
and set the variables above. Install command: `npm ci`. Build: `npm run build`.
Deploy and check `/`, `/portfolio`, `/experience`, `/skillset`, and a real
`/portfolio/<slug>` after inserting your data. Missing database configuration
intentionally fails content requests rather than pretending the database is empty.
Never put private service keys in NEXT_PUBLIC variables.

## Source and history

Copied from https://github.com/aiguh97/teguh-portofolio at
856d5a02f68e776f6f2aab8866c32c1706b5ab01. The original GPL license and
upstream attribution are retained. The destination uses a fresh history because
GitHub detected a Google Cloud credential in an older source commit. Revoke
that credential in the original Google Cloud project.
