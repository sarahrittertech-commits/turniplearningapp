# Developer setup (new Mac)

How to set up a Mac (e.g. the Mac mini) to build and run Turnip.

## 1. Install tools

| Tool | How | Why |
|---|---|---|
| **Xcode 27** (latest) | Mac App Store, then open it once and accept the license. In Xcode → Settings → Components, install the iOS simulator. | iOS builds and simulators. The app targets iOS/iPadOS 17.0+ |
| UTF-8 locale | Add `export LANG=en_US.UTF-8` and `export LC_ALL=en_US.UTF-8` to `~/.zprofile` | CocoaPods crashes during `pnpm ios` without it |
| Xcode command line tools | `sudo xcode-select -s /Applications/Xcode.app/Contents/Developer` | Makes `xcodebuild`/`simctl` use the full Xcode |
| **Homebrew** | https://brew.sh | Installs the rest |
| **Node 22 LTS** (≥ 20.19) | `brew install node@22` or nvm | Expo SDK 57 |
| **pnpm 10** | `corepack enable` (uses the version pinned in `package.json`) | Package manager for this repo |
| **GitHub CLI** | `brew install gh` then `gh auth login --web --git-protocol https` | Clone/push without passwords |
| Watchman (optional) | `brew install watchman` | Faster file watching for Metro |
| Claude Code | https://claude.com/claude-code | Reads `CLAUDE.md` for project context |

## 2. Get the code

```bash
gh repo clone sarahrittertech-commits/turniplearningapp ~/turnip-kids-app
cd ~/turnip-kids-app
git switch rebuild
pnpm install
```

## 3. Videos

All catalog videos stream from Mux (Oct 14, 2026), so no local video files are needed. The old v0 sample videos (`pnpm samples` on :8765) are no longer used by the app.

## 4. Run

```bash
pnpm kids         # Expo dev server; press i for iOS simulator
```

First iOS run: `pnpm ios` (runs `expo run:ios`, which generates `apps/kids/ios/` and builds). The `ios/` folder is generated — never edit or commit it.

To pick a device: `pnpm --filter @turnip/kids exec expo run:ios --device` and choose an iPhone or iPad simulator.

## 5. Accounts to sign in to on the new Mac

- **GitHub** — `gh auth login`
- **Expo** — `npx eas-cli@latest login` (account `sarahbuildsapps`; project already linked in `apps/kids/app.json`)
- **Apple Developer** — in Xcode → Settings → Accounts (needed for device builds and TestFlight)
- Later: Supabase and Mux keys go in `apps/kids/.env.local` (never committed)

## 6. Check it works

```bash
cd apps/kids
npx tsc --noEmit && npx expo lint && npx expo-doctor
```

## 7. Build for a real iPhone (Expo)

```bash
cd apps/kids
npx eas-cli@latest build --platform ios --profile preview
```

You answer the prompts in the terminal: log in to Apple (saved in Keychain after the first time), reuse the distribution certificate, and register your iPhone through the QR code the first time. The build runs in Expo's cloud (10–20 minutes) and ends with a QR code to install it. Turn on Developer Mode on the iPhone if asked.

## 8. Things that trip up this Mac

- **Disk space:** each iOS build needs a few GB. If builds fail with "No space left on device", delete `~/Library/Developer/Xcode/DerivedData/*` and run `xcrun simctl delete unavailable`.
- **CocoaPods** needs a UTF-8 locale: `LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8` (already in `~/.zprofile`).
- **Changing the bundle ID** (or adding a native library) means a fresh development build: `npx expo prebuild --platform ios --clean`, then `npx expo run:ios`.
- **Simulator screen recording** (`xcrun simctl io … recordVideo`) fails with "Host recording is already in progress" while another app is streaming the simulator screen. Close that view first, or record on a real iPhone instead.
