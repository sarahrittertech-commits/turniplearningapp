# Turnip Learning — project context

Kids (ages 3–9) curated video app. Founder: Sarah (building with AI tools; explain terminal steps plainly).

## Where things are

- `apps/kids` — the app: Expo SDK 57, Expo Router (`src/app`), iPhone + iPad universal. Also read `apps/kids/AGENTS.md` (Expo rules: use versioned docs, `npx expo install`, never hand-edit `ios/`).
- `docs/architecture.md` — architecture decisions (source of truth). `TODO.md` — phased plan; keep it updated as tasks finish.
- `design/app-screens` — Magic Patterns design source. `docs/business`, `docs/product` — pitch/PRD material (public repo, approved by Sarah).
- Setup on a new machine: `docs/dev-setup.md`.

## Decisions already made (Sept 29, 2026)

- Rebuilt from scratch on the `rebuild` branch; v0 (Expo 51 + native Firebase) is on `main` for reference only.
- Video files → **Mux** (HLS + MP4 static renditions for offline). Data/auth → **Supabase** (planned; not yet created). No video in Supabase/Firebase storage.
- Player: `expo-video`. Offline: download Mux MP4 with `expo-file-system`.
- Content is Sarah's own videos → public Mux playback for the pilot; signed playback when subscriptions launch.
- Pilot: families at home, iPhone + iPad only (no Android yet). Age bands 3–5 and 6–9.
- Apple Kids Category + COPPA (2025 rule): no third-party analytics/ads SDKs in the app (no Mux Data, Sentry, PostHog, Firebase Analytics); parental gate; child profiles = nickname + avatar + age band only.
- Sarah redoes the visual design starting Oct 1, 2026 → keep all styling in `src/theme/tokens.ts` and `src/components/ui` so screens don't need rewriting.

## Conventions

- Screens read data only through `src/data` hooks (`useVideos`, `useVideo`, …) — never import mock data directly. Swap the `CatalogSource` for Supabase later.
- Use `AppText` (not `Text`) and theme tokens (no raw hex in screens).
- Layout: `useLayout()` → `compact` (iPhone / narrow) vs `regular` (iPad) by window width.
- Before calling work done: `npx tsc --noEmit`, `npx expo lint`, `npx expo-doctor` in `apps/kids`.
- Sample videos are local-only in `artifacts/` (gitignored); `pnpm samples` serves them on :8765.
