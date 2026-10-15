# Oct 13–15, 2026: iOS 27 fix, Mux videos, facelift, first iPhone build, App Store prep

A record of a multi-day session on the Mac mini. The decisions themselves also live in [CLAUDE.md](../../CLAUDE.md), [TODO.md](../../TODO.md) and [docs/brand/HANDOFF.md](../brand/HANDOFF.md); this file is the history and the reasoning.

## 1. App runs on iOS 27 (Oct 13)

- **Crash at launch fixed.** Apps built with the iOS 27 SDK must use UIKit's scene lifecycle. Expo SDK 57 gets it from `expo-build-properties` → `ios.enableSceneSupport: true` (drop it on SDK 58+).
- **Platform scope:** iPhone + iPad, minimum iOS/iPadOS 17.0, so 2018 family iPads still work.
- **Disk space:** the Mac's disk hit 0 bytes free and builds failed with "No space left on device". Clearing Xcode DerivedData and `xcrun simctl delete unavailable` recovered space. Check `df -h` before iOS builds; each one needs a few GB.
- **v0 screenshots** of the September design are in [design/v0/](../../design/v0/). The player captures and walkthrough clip showed Nat Geo sample footage, so they're gitignored and kept local only.

## 2. Landing site (Oct 13)

A public one-page site, modeled on the Bike Brevard site: <https://sarahrittertech-commits.github.io/turnip-learning-site/>. Repo `sarahrittertech-commits/turnip-learning-site`, local copy `~/Documents/PushPopDev/turnip-learning-site`. Pushing to `main` republishes it.

- It tells the full story: the barn/Pony Club origin, the 2015–2017 teacher platform and its research, a version timeline with tools, the pivot to families, the v2 design, and skills learned.
- **The founding team is not named**, at Sarah's request, and no family members are named.
- Open: Sarah's timeline dates the Magic Patterns build "October 2026", but the repo shows it by Sept 29; the site says "2026 · The current design" until she confirms.
- A later color change to the site was made locally and **not pushed**; ask Sarah before pushing.

## 3. Videos on Mux

- Videos play from Mux (HLS) with Mux-generated thumbnails, through `{ kind: 'mux', playbackId }` sources in [mockCatalog.ts](../../apps/kids/src/data/mockCatalog.ts).
- **13 videos on Mux** as of Oct 15: Sea Turtles, Jellyfish, Sea Horse, Dolphins, Tree Frog, Brown Bears, Red Pandas, How Rainbows Work, Mixing Colors, Vinegar Balloon Experiment, Deciduous or Evergreen?, Trees with Cones, Flowering Trees. New topic: **Trees**.
- Each new playback ID was checked before adding: the HLS manifest loads, resolutions, caption track, duration, and the first caption lines.
- **Removed for the App Store:** Blue Whale, Frogfish and Tree Kangaroo played from a local sample server on the Mac (broken for anyone else), and Blue Whale is Nat Geo footage. The Whales topic went with them.
- **Mux pricing (looked up Oct 14):** the free plan stops at 10 videos. Sarah chose **pay-as-you-go**: no monthly fee and a $20 monthly usage credit. Storage is about $0.003 per video-minute per month, charged even if never watched; the first 100,000 viewing minutes a month are free. 22 minutes of video costs about 7¢ a month, so the credit covers the pilot. The Launch plan ($20/month for $100 credit) isn't worth it at this size. Offline MP4 downloads are a Mux add-on with no published price; check before building the Backpack.
- **Videos to redo** are listed in TODO.md (360p uploads, burned-in captions, long caption lines, thumbnails with text).

## 4. Captions

- Mux caption tracks come through to the app. The player has a **CC button** that only appears when a video has captions; English is preferred.
- iOS turns captions on by itself for tracks marked "autoselect". The app now owns the on/off state and applies it explicitly, starting off.
- Not yet verified: whether the CC button reliably toggles on a real device (simulated taps never reached it).
- **Captions are too small** for kids (Sarah's finding). The size is set by the app and iOS, not by Mux, so the fix is in the app: draw captions ourselves in big rounded text (proposed, not built). What's worth fixing in the video files is caption wording and timing: ~30 characters per line, at most 2 lines, 1–4 seconds each. Screenshots: [design/captions/](../../design/captions/).

## 5. Facelift: Version B · Field notebook (Oct 13–14)

Built from [docs/brand/HANDOFF.md](../brand/HANDOFF.md) and the design canvas. Styling stays in `src/theme/tokens.ts`, `src/components/ui` and `src/components/cards.tsx`.

- Lavender Mist background, Deep Ink text, a teal tab bar with a Sprout Green pill for the current tab, bold topic cards with real photos, dark teal/Earth Brown expedition cards with a dashed yellow trail, and photo "stickers" with yellow "New" tags.
- **Fonts:** DM Sans everywhere in the app. Fraunces was tried for headings, but Sarah felt it read as "company, not app", so it stays with the company brand (site, logo, App Store). Quicksand was removed.
- **Header:** chosen from side-by-side mockups. A Sprout Green band across the top, with Turnip asking the screen's question in a white speech bubble. It slims down when a kid scrolls.
- **Mascot:** recolor study 2 (white root) with **medium-weight plum lines** and a white sticker edge everywhere. The line weight was picked from three options; the script is [design/mascot-recolor/thicken.py](../../design/mascot-recolor/thicken.py).
- **Icons:** Lucide-style line icons drawn with `react-native-svg` ([Icon.tsx](../../apps/kids/src/components/ui/Icon.tsx)). Emoji were removed from buttons and messages.
- **Player:** Sprout Green Play/Pause and Again (green = go), Glasses Slate "Go home", sentence-case labels, orange progress bar. Controls fade 1 s after a video starts and 2.5 s after a tap (they lingered 3.5 s before).
- **App icon:** a bigger Turnip on Sprout Green, with the glassy effect off so the white root stays white. The old background was a red-leaning purple the brand guide rules out.
- v1 screenshots: [design/v1/](../../design/v1/).

## 6. First iPhone build (Oct 14)

- **Bundle ID is now `com.turniplearning`.** `com.turnip.kids` belongs to another developer, so Apple refused it. It can't change after the App Store launch.
- Expo "preview" (internal) builds install directly on registered devices. They need no App Store review.
- `ITSAppUsesNonExemptEncryption: false` is set in app.json (the app only uses standard https), so the encryption question no longer appears.
- The build reuses the Apple distribution certificate shared with Bike Brevard Map.
- Sarah installed it on her iPhone and it works. Her feedback led to the bigger icon, faster-fading player controls and the shrinking header.

## 7. App Store v1 placeholder (started Oct 14)

Sarah wants a minimal Turnip on the App Store now, then upgrades as she goes; Bike Brevard sat in review for weeks.

- **Decided:** Kids Category, ages 6–8; iPhone and iPad; version 1.0.0; no app preview video for v1 (optional, and where most media rejections happen).
- **Done:** removed the broken and unlicensed videos; hid the Backpack tab (Apple rejects placeholder features).
- **Screenshot rules:** real app screens only. iPhone 6.9" at 1320 × 2868 (iPhone 18 Pro Max simulator) and iPad 13" at 2064 × 2752 (iPad Pro 13" simulator). Preview videos may only contain screen recordings of the app: no people, hands or outside footage.
- Remaining steps are in [TODO.md](../../TODO.md) under "App Store v1 placeholder". Sarah will share the Bike Brevard media rejection text so Turnip can be checked against it.

## 8. Roadmap ideas from this session

- **Talk to Turnip:** tap the bubble and say a topic. On-device speech recognition only, permission asked behind the parent gate. Details in TODO.md.
- **Bigger, kid-friendly captions** drawn by the app.

## Working notes

- Sarah answers all Apple and Expo login prompts herself in terminal tabs.
- iOS simulator quirks:
  - The first tap after a pause is often ignored.
  - After the player rotates, taps use landscape coordinates.
  - `simctl io recordVideo` fails with "Host recording is already in progress" while the desktop app's simulator panel is streaming.
  - Deep links (`turnip://browse`, `turnip://topic/<slug>`) are the reliable way to move between screens.
