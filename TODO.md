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
- [x] Fonts embedded via config plugin; Icon Composer icon (`assets/turnip.icon`)
- [x] Type-check, lint, `expo-doctor` (21/21) all pass
- [x] Web preview checked at iPhone (393×852) and iPad (1366×1024) sizes
- [x] **Build and run on iOS simulators**: runs on iPhone 18 Pro / iOS 27 (Oct 13). Needed `ios.enableSceneSupport` for iOS 27
- [x] Set platform scope: iPhone + iPad, minimum iOS/iPadOS 17.0 (Oct 13)
- [ ] Check on an iPad simulator and on an iOS 17 device or simulator
- [ ] Check iPhone player rotates to landscape; iPad keeps its orientation
- [ ] Create Supabase project (US region); write schema migrations from architecture §4.5; seed topics/videos/journeys
- [ ] Add Supabase `CatalogSource` and switch the app to it
- [x] Create Mux account (Oct 13, 2026)
- [ ] Re-record the v0 videos and upload them to Mux (basic quality, 720p + 480p static renditions); put playback IDs in the catalog. First one uploaded: jellyfish (Oct 13)
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

- [x] Design review + brand guide draft (Oct 11–12) — [docs/brand/design-review-2026-10.md](docs/brand/design-review-2026-10.md), [docs/brand/turnip-brand-guide.md](docs/brand/turnip-brand-guide.md)
- [x] Clickable iPhone prototype (Wild Explorer direction) on a Claude Design canvas
- [x] Mascot recolor studies — `design/mascot-recolor/`
- [ ] Sarah: answer the open questions in the brand guide (palette, background, light-only, mascot recolor)
- [ ] Final mascot art as vector + expression set (happy, thinking, surprised, celebrating, sleepy, pointing); explorer-hat sketches
- [ ] Update prototype to the agreed palette, fonts and mascot
- [x] Facelift to Version B · Field notebook (Oct 13): tokens, Fraunces Soft + DM Sans (Quicksand removed), line icons (react-native-svg), teal tab bar, topic and expedition cards, player buttons, recolored mascot (study 2)
- [ ] Still to restyle: the 2017 logo (needs vector files), sprout background texture, profile picker and sign-in (not built yet)
- [ ] Check the facelift on iPad (only iPhone checked so far)
- [ ] Add worlds (Nature, Animals, Earth Science, Biology) → topics to the catalog data model
- [ ] **Talk to Turnip** (roadmap, Oct 14): tap the header bubble and say a topic ("bears", "trees", "science") to jump there. On-device speech recognition only (`expo-speech-recognition`, `requiresOnDeviceRecognition`) so no child audio is stored or sent (COPPA); mic/speech permission asked once behind the parent gate; keyword lists per topic/video; 3 picture choices when it doesn't understand. Needs a new native build.
- [ ] iPhone layouts for Home, Explore, Player, Profile picker, Login

## App Store v1 placeholder (started Oct 14, 2026)

Kids Category, ages 6–8; iPhone + iPad; app ID `com.turniplearning`; version 1.0.0.

- [x] Removed the 3 local-only sample videos (Blue Whale was Nat Geo footage), the empty Whales topic, and the sample-server helper; 13 videos, all on Mux
- [x] Hid the Backpack tab (`HIDDEN_TABS` in `src/app/(tabs)/_layout.tsx`) until offline downloads exist
- [x] Bigger app icon on Sprout Green; player controls fade after 1 s; header shrinks on scroll
- [ ] Check the iPad layout (dev build was running in the iPad Pro 13" simulator when we paused)
- [ ] App Store screenshots: iPhone 18 Pro Max sim (1320×2868) and iPad Pro 13" sim (2064×2752), real screens only; skip the preview video for v1
- [ ] Privacy policy + support page on the landing site (ask Sarah before pushing)
- [ ] App Store Connect listing: description, keywords, age band 6–8, privacy answers "Data Not Collected"
- [ ] Production build (`eas build --profile production`) and `eas submit` (Sarah answers Apple prompts)
- [ ] Ask Sarah for the Bike Brevard media rejection text and check Turnip against it
- [ ] Sarah: redo some videos, then send the new Mux playback IDs (Claude swaps them in the catalog):
  - Mixing Colors and Vinegar Balloon Experiment: only 360p on Mux; re-upload a 1080p original so they're sharp on iPad
  - How Rainbows Work: captions are burned into the picture; upload a clean version and use a separate caption track (CC button)
  - Jellyfish: first caption is 2 sentences for 12 s; split into short lines (~30 characters, 1–4 s each) for early readers
  - Sea Turtles, Jellyfish: Mux's auto thumbnail lands on a frame with text; pick a cleaner thumbnail time
  - Blue Whale, Frogfish, Tree Kangaroo: removed for v1; re-add once they're Sarah's own videos on Mux

## Known issues

- Web preview only: the video doesn't stretch to fill the player area, and autoplay is blocked by the browser. Web isn't a pilot platform; iOS uses native playback.
