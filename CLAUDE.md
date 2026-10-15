# Turnip Learning — project context

Kids (ages 3–9) curated video app. Founder: Sarah (building with AI tools; explain terminal steps plainly).

## Where things are

- `apps/kids` — the app: Expo SDK 57, Expo Router (`src/app`), iPhone + iPad universal. Also read `apps/kids/AGENTS.md` (Expo rules: use versioned docs, `npx expo install`, never hand-edit `ios/`).
- **Look: Version B · Field notebook**, built into the app Oct 13 (`src/theme/tokens.ts`, `components/ui`, `components/cards.tsx`). Start design work with `docs/brand/HANDOFF.md` (Sarah's likes/dislikes, open questions). Icons are `components/ui/Icon.tsx` (Lucide paths, react-native-svg), never emoji.
- `docs/brand/turnip-brand-guide.md` — brand guide (colors, type, voice, mascot). Draft; §13 holds unresolved suggestions.
- `docs/architecture.md` — architecture decisions (source of truth). `TODO.md` — phased plan; keep it updated as tasks finish.
- `design/app-screens` — Magic Patterns design source. `docs/business`, `docs/product` — pitch/PRD material (public repo, approved by Sarah).
- Setup on a new machine: `docs/dev-setup.md`.
- Session history and reasoning: `docs/history/` (rebuild kickoff Sept 29; iOS 27 fix, Mux, facelift, first iPhone build and App Store prep Oct 13–15) and `docs/brand/design-review-2026-10.md`.

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
- Fonts: **DM Sans** for all app text (Oct 13: Fraunces in the app read as "company, not app"). **Fraunces** (Soft) stays with the company brand: website, logo, App Store. No condensed or all-caps type.
- App header: Sprout Green band, Turnip (white sticker edge, never cropped) asks the screen's question in a speech bubble; slims on scroll.
- Four content worlds (Nature, Animals, Earth Science, Biology) with **bold world colors** used as navigation.
- No cream, tan, or sand anywhere. Never put Turnip on dark or red-leaning purple, and never crop it into a circle.

## App Store and builds (Oct 14, 2026)

- **Bundle ID `com.turniplearning`** (`com.turnip.kids` belongs to another developer). It can't change after launch.
- v1 is a placeholder: Kids Category, ages 6–8, iPhone + iPad, version 1.0.0. Checklist in `TODO.md` → "App Store v1 placeholder".
- Device test builds: `npx eas-cli@latest build --platform ios --profile preview` in `apps/kids` (internal distribution, no App Store review). Sarah answers the Apple login and device prompts herself.
- Videos: all catalog videos stream from **Mux** (pay-as-you-go plan). Check a new playback ID's manifest, captions and length before adding it. Don't add videos you don't own the rights to.
- Backpack (offline) tab is hidden (`HIDDEN_TABS`) until downloads are built; Apple rejects placeholder features.

## Conventions

- Screens read data only through `src/data` hooks (`useVideos`, `useVideo`, …) — never import mock data directly. Swap the `CatalogSource` for Supabase later.
- Use `AppText` (not `Text`) and theme tokens (no raw hex in screens).
- Layout: `useLayout()` → `compact` (iPhone / narrow) vs `regular` (iPad) by window width.
- Before calling work done: `npx tsc --noEmit`, `npx expo lint`, `npx expo-doctor` in `apps/kids`.
- Sample videos are local-only in `artifacts/` (gitignored); `pnpm samples` serves them on :8765.
