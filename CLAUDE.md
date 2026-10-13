# Turnip Learning — project context

Kids (ages 3–9) curated video app. Founder: Sarah (building with AI tools; explain terminal steps plainly).

## Where things are

- `apps/kids` — the app: Expo SDK 57, Expo Router (`src/app`), iPhone + iPad universal. Also read `apps/kids/AGENTS.md` (Expo rules: use versioned docs, `npx expo install`, never hand-edit `ios/`).
- **Redesign in progress — start with `docs/brand/HANDOFF.md`** (current state, Sarah's likes/dislikes, open questions, next steps).
- `docs/brand/turnip-brand-guide.md` — brand guide (colors, type, voice, mascot). Draft; §13 holds unresolved suggestions.
- `docs/architecture.md` — architecture decisions (source of truth). `TODO.md` — phased plan; keep it updated as tasks finish.
- `design/app-screens` — Magic Patterns design source. `docs/business`, `docs/product` — pitch/PRD material (public repo, approved by Sarah).
- Setup on a new machine: `docs/dev-setup.md`.
- Session history and reasoning: `docs/history/` (rebuild kickoff, Sept 29) and `docs/brand/design-review-2026-10.md`.

## Decisions already made (Sept 29, 2026)

- Rebuilt from scratch on the `rebuild` branch; v0 (Expo 51 + native Firebase) is on `main` for reference only.
- Video files → **Mux** (HLS + MP4 static renditions for offline). Data/auth → **Supabase** (planned; not yet created). No video in Supabase/Firebase storage.
- Player: `expo-video`. Offline: download Mux MP4 with `expo-file-system`.
- Content is Sarah's own videos → public Mux playback for the pilot; signed playback when subscriptions launch.
- Pilot: families at home, iPhone + iPad only (no Android yet). Age bands 3–5 and 6–9.

## Platform scope (Oct 13, 2026)

- **Ships to iPhone + iPad only**: one universal iOS app (`supportsTablet`). Web is a development preview only; Android is not built or tested.
- **Minimum iOS / iPadOS 17.0** (`expo-build-properties` → `ios.deploymentTarget`). Covers iPhone XS/XR and iPad 6th gen (2018) and newer, so older family iPads still work.
- **Built with Xcode 27 / iOS 27 SDK.** iOS 27 requires the UIKit scene lifecycle; SDK 57 gets it from `ios.enableSceneSupport: true` in `expo-build-properties` (drop it on SDK 58+). Without it the app crashes at launch on iOS 27.
- CocoaPods needs a UTF-8 locale: run iOS builds with `LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8`.
- Apple Kids Category + COPPA (2025 rule): no third-party analytics/ads SDKs in the app (no Mux Data, Sentry, PostHog, Firebase Analytics); parental gate; child profiles = nickname + avatar + age band only.
- Sarah redoes the visual design starting Oct 1, 2026 → keep all styling in `src/theme/tokens.ts` and `src/components/ui` so screens don't need rewriting.

## Design decisions (Oct 12, 2026; details in `docs/brand/`)

- Brand name **Turnip Learning** (title case); **Turnip** is the mascot.
- Fonts: **Fraunces** (Soft) for logo and display ≥24 pt; **DM Sans** for all UI. No condensed or all-caps type.
- Four content worlds (Nature, Animals, Earth Science, Biology) with **bold world colors** used as navigation.
- No cream, tan, or sand anywhere. Never put Turnip on dark or red-leaning purple, and never crop it into a circle.

## Conventions

- Screens read data only through `src/data` hooks (`useVideos`, `useVideo`, …) — never import mock data directly. Swap the `CatalogSource` for Supabase later.
- Use `AppText` (not `Text`) and theme tokens (no raw hex in screens).
- Layout: `useLayout()` → `compact` (iPhone / narrow) vs `regular` (iPad) by window width.
- Before calling work done: `npx tsc --noEmit`, `npx expo lint`, `npx expo-doctor` in `apps/kids`.
- Sample videos are local-only in `artifacts/` (gitignored); `pnpm samples` serves them on :8765.
