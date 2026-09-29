# Turnip Learning — Rebuild TODO

Plan and reasoning: [docs/architecture.md](docs/architecture.md). The v0 prototype is preserved on the `main` branch history and locally in `artifacts/v0/`.

---

## Phase 1 — Foundation (in progress)

- [x] New Expo SDK 57 app in `apps/kids` (Expo Router, `src/app`, no committed `ios/`)
- [x] Theme tokens + layout classes (`src/theme`) — compact (iPhone) / regular (iPad)
- [x] Shared UI components (`src/components/ui`) — AppText, Tappable, ScreenHeader, Rail, Thumbnail
- [x] Catalog data layer (`src/data`) with a swappable source — local mock today
- [x] Screens: Home, Explore (topics), Topic, My Videos (empty state), Player
- [x] Kid player on `expo-video`: giant Play / Go Home, tap-to-seek, "What's next" at the end
- [x] Quicksand embedded via config plugin; Icon Composer icon (`assets/turnip.icon`)
- [x] Type-check, lint, `expo-doctor` (21/21) all pass
- [x] Web preview checked at iPhone (393×852) and iPad (1366×1024) sizes
- [ ] **Build and run on iOS simulators** — needs Xcode installed (or an EAS simulator build)
- [ ] Check iPhone player rotates to landscape; iPad keeps its orientation
- [ ] Create Supabase project (US region); write schema migrations from architecture §4.5; seed topics/videos/journeys
- [ ] Add Supabase `CatalogSource` and switch the app to it
- [ ] Create Mux account; upload the 8 sample videos (basic quality, 720p + 480p static renditions); put playback IDs in the catalog
- [ ] Supabase Edge Function: Mux `video.asset.ready` webhook → `videos` row

## Phase 2 — Kid experience

- [ ] Journeys screen (play a journey in order, auto-advance)
- [ ] Watch progress ("keep watching")
- [ ] Captions support
- [ ] Friendly offline / no-internet states

## Phase 3 — Parents

- [ ] Sign in with Apple + email OTP (Supabase Auth)
- [ ] Parental consent step (COPPA) before creating child profiles
- [ ] Child profiles (nickname, avatar, age band 3–5 / 6–9) and profile picker
- [ ] ParentGate component (settings, links, purchases)
- [ ] Daily time limit, topic filters
- [ ] Delete / export family data

## Phase 4 — Offline

- [ ] Download manager (`expo-file-system` download tasks) → My Videos
- [ ] Verify whether downloads continue in the iOS background

## Phase 5 — Ship

- [ ] Privacy policy, data-retention policy, security program doc (`docs/security.md`)
- [ ] App Store Kids Category listing, iPhone 6.9″ + iPad 13″ screenshots
- [ ] TestFlight pilot with families at home

## Design (from Oct 1, 2026)

- [ ] Redo app designs (Sarah). Restyle via `src/theme/tokens.ts` and `src/components/ui` — screens should need few changes.
- [ ] iPhone layouts for Home, Explore, Player, Profile picker, Login

## Known issues

- Web preview only: the video doesn't stretch to fill the player area, and autoplay is blocked by the browser. Web isn't a pilot platform; iOS uses native playback.
