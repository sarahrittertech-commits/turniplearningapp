# Rebuild kickoff: September 29, 2026

A record of the session that reviewed the v0 app, put the project on GitHub, chose the architecture, and started the rebuild. The decisions themselves live in [architecture.md](../architecture.md) and [CLAUDE.md](../../CLAUDE.md); this file is the history and reasoning.

## Starting point

- **v0 app** (built Feb–Mar 2026): Expo SDK 51 / React Native 0.74, pnpm monorepo (`apps/mobile`, `apps/admin`, `packages/shared`), iPad landscape only, Magic Patterns design ported to React Native, 8 sample videos bundled into the app.
- Code was small (~2,900 lines) but **didn't type-check** (4 errors), had **one git commit** with lots of uncommitted work, and shipped **537 MB of video** inside the app.
- Almost all past effort had gone into **build workarounds** for Xcode 26: BoringSSL and gRPC patches, pnpm header-path fixes, a hand-edited `ios/` folder. The cause was `@react-native-firebase`, which was installed but **never used**.
- Many buttons did nothing, every card showed a fake "NEW" badge and "10m", and login / profile screens existed but weren't reachable.
- Docs were scattered across `Downloads/`: two PRDs (one duplicated), an architecture analysis, pitch scripts, an investor brief and a business model canvas. They disagreed on age range (3–8, 3–9, 5–12) and scope (science only vs. interest-based).

## What was done

1. **GitHub.** Created a clean history for the public repo [turniplearningapp](https://github.com/sarahrittertech-commits/turniplearningapp).
   - The old commit couldn't be pushed: two videos were over GitHub's 100 MB limit (`tree-kangaroo.mp4` 111 MB, `sea-horse.mp4` 100.2 MB).
   - Old history kept **locally only** as branch `archive/v0-local`. Videos, build logs and old screenshots moved to gitignored `artifacts/`.
   - Repo organized into `design/` (newest Magic Patterns export, Icon Composer icon), `docs/product`, `docs/business`, `docs/archive`.
   - Sarah approved putting the business docs (pitches, investor brief, business model canvas) in the public repo.
   - GitHub CLI (`gh`) installed with browser login, since Sarah didn't have her password handy.
2. **Architecture review** → [architecture.md](../architecture.md), backed by a research pass on current pricing and rules.
3. **Fresh rebuild** of the app on the `rebuild` branch → `apps/kids`.
4. **Portfolio** write-up and screenshots → [docs/portfolio](../portfolio/README.md).
5. **Mac mini handoff:** [dev-setup.md](../dev-setup.md) and `CLAUDE.md`, because this MacBook no longer has Xcode.

## Decisions and why

| Decision | Why |
|---|---|
| **Rebuild, don't refactor** | The value of v0 was the design, which already lives in `design/`. Its foundation (old Expo, unused native Firebase, hand-patched `ios/`) was the problem. |
| **Expo SDK 57**, generated `ios/` | Supports current Xcode with no manual Podfile work; one codebase for iPhone, iPad, later Android/web. |
| **Video on Mux, not Supabase/Firebase storage** | Sarah questioned Supabase for video. Answer: storage buckets serve raw files with no adaptive streaming (stalls on car Wi-Fi) and expensive egress. Mux gives HLS + thumbnails + an MP4 per video for offline, ≈ free at pilot scale (basic encoding free, 100k delivery min/month free). Cloudflare Stream is the runner-up. |
| **Supabase for data and auth** (planned) | Postgres fits journeys, profiles, history and later school rosters; row-level security; pure JS client (no native build pain); DPA and US region. Firebase JS SDK has no persistent offline cache in React Native. |
| **`expo-video` player; offline = download Mux MP4 with `expo-file-system`** | `expo-video` is Expo's own player and can't cache HLS on iOS, so offline uses MP4 files. |
| **No third-party analytics/ads SDKs** | Apple Kids Category rules and the 2025 COPPA amendments (full compliance required since April 22, 2026). Track plays in our own database instead. |
| **Child profile = nickname + avatar + age band** | Data minimization for COPPA. |
| **Sarah's own videos** | No licensing or DRM. Public Mux playback for the pilot; signed playback when subscriptions launch. |
| **Pilot: families at home, iPhone + iPad** | Sarah added iPhone mid-session. Android and schools come later. |
| **Ages 3–9** in two bands (3–5, 6–9) | Matches the pitch and business model canvas; supersedes the older PRDs. |
| **Styling isolated in theme tokens and `components/ui`** | Sarah planned a redesign starting Oct 1, so a reskin shouldn't touch screens. |

## What the rebuild includes

- Expo Router screens: Home, Explore, Topic, My Videos (empty until offline), full-screen Player.
- Kid player: giant Play / Go Home buttons, tap-to-seek, "What's next?" suggestions; iPhone locks to landscape while playing.
- Responsive layout: `compact` (iPhone, narrow windows) vs `regular` (iPad) by window width.
- Data layer with a swappable `CatalogSource`; today a mock catalog that streams sample videos from the Mac (`pnpm samples`).
- Checks: type-check, lint and `expo-doctor` (21/21) passed.

## Not verified at the end of the session

- **No iOS simulator run.** Xcode wasn't installed on this MacBook, so building moved to the Mac mini.
- In the **web** preview the Play button didn't start the video and the video didn't fill the player. Possibly web-only; check on iOS.
- Explore, Topic and "What's next?" were captured as screenshots but not tapped through.
- Whether `expo-file-system` downloads continue in the iOS background.

## Open at the end of the session

- Create Supabase and Mux accounts; upload the sample videos to Mux.
- Run the app on iPhone and iPad simulators (Mac mini).
- Merge `rebuild` into `main` so the repo's front page shows the new README.
