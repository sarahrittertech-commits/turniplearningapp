# Turnip App — Deployment TODO

Track everything that must be done before the app ships.

---

## 🔴 Blockers (must fix before any build works)

- [ ] **Install and test EAS simulator build** on device
  - Download .app artifact from expo.dev build dashboard
  - Boot a simulator: `xcrun simctl boot "iPad Pro 13-inch (M4)"`
  - Install: `xcrun simctl install booted Turnip.app`
  - Launch: `xcrun simctl launch booted com.turnip.kids`

---

## 🟡 Content & Backend (before real content can play)

- [ ] **Migrate local videos → Mux**
  - Upload all 8 videos in `artifacts/TurnipAppSampleVideo/` to Mux dashboard
  - Copy the Mux playback IDs for each video
  - Update `apps/mobile/lib/localCatalog.ts` — replace `source: require(...)` with `muxPlaybackId: '...'`
  - Remove `apps/mobile/assets/videos/` folder (no longer needed once on Mux)
  - Update `VideoPlayer` calls to pass `playbackId` instead of `localSource`
- [ ] Add `GoogleService-Info.plist` to `apps/mobile/ios/Turnip/` and initialize Firebase
- [ ] Seed Firestore with video catalog data (id, title, category, muxPlaybackId, thumbnailUrl)
- [ ] Wire home screen to Firestore instead of `localCatalog`

---

## 🟡 Auth & Profiles

- [ ] Implement Firebase Auth (anonymous or Google sign-in for parents)
- [x] Build profile selector screen (`app/profile/select.tsx`) — dark purple `#2D1050` bg, circular emoji avatars with green ring on selected, edit button, Add account dashed circle, top bar with X + Grown-ups/Settings
- [ ] Store selected profile in context/SecureStore
- [ ] Gate home screen behind profile selection

---

## 🟡 UI / Design

- [x] Design tokens extracted to `lib/theme.ts` (colors, spacing, radius, sizes)
- [x] Home screen (`(tabs)/index.tsx`) — SpotifyKidsHome layout (purple bg, content cards, your stuff, recommended 2×2)
- [x] Browse screen (`(tabs)/search.tsx`) — BrowsePage layout (green bg, shows carousel, video cards, topics)
- [x] Library screen (`(tabs)/library.tsx`) — styled with design system
- [x] Tab bar — dark navy (`#1a1a2e`) with green active state
- [x] Video player redesigned — large green Play + red Home buttons, seek bar in dark bg, green info bar with controls
- [x] Load Quicksand font via `expo-font` and apply to all Text (4 weights: Regular, Medium, SemiBold, Bold)
- [x] Splash screen (green bg, pulsing mascot, fade-in/out) — using `turnipMascot.png`
- [x] Login / parent screen (`app/login.tsx`) — magenta→yellow gradient, mascot left + email/password card right, Apple sign-in button
- [ ] Add real thumbnail images to video cards (from Mux or custom assets)

---

## 🟡 Video Player

- [ ] Test playback controls (play/pause, seek bar, back button)
- [ ] Handle buffering/error states with kid-friendly UI
- [ ] Verify landscape-only lock works in player

---

## 🟢 Nice to Have (post-MVP)

- [ ] Offline downloads (expo-background-fetch + expo-file-system)
- [ ] Admin dashboard (Next.js — `apps/admin`)
- [ ] Parental controls / watch time limits
- [ ] Video progress tracking (resume where you left off)
- [x] App icon and splash screen — mascot on brand purple (#73318f) background, 1024x1024 source ready for EAS Build auto-resizing

---

## ✅ Done

- [x] EAS Build configured — `eas.json` created, project linked (`@sarahbuildsapps/turnip-kids`, ID: d1ccbda1-5ca4-40ee-8368-24d68d708c4f)
- [x] First EAS simulator build succeeded — `BUILD SUCCEEDED` (all 120 pod targets compiled)

- [x] BoringSSL clang 26 fix (`withBoringSSLFix` plugin)
- [x] EXCLUDED_ARCHS + SWIFT_ENABLE_EXPLICIT_MODULES on Turnip target
- [x] gRPC-Core + gRPC-C++ template keyword fix in Podfile
- [x] ReactCommon header paths fix (yoga, nativemodule/core)
- [x] Local video catalog wired up (8 sample videos playable without Mux)
- [x] VideoPlayer supports both local bundled assets and Mux HLS
- [x] Home screen shows real video cards by category (ocean, animals, science)
- [x] Magic Patterns design applied to all main screens (home, browse, library, player)
- [x] Quicksand font loaded (4 weights) and applied across all screens/components
- [x] Login screen created (`app/login.tsx`) with gradient + form card layout
