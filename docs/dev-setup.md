# Developer setup (new Mac)

How to set up a Mac (e.g. the Mac mini) to build and run Turnip.

## 1. Install tools

| Tool | How | Why |
|---|---|---|
| **Xcode** (latest) | Mac App Store, then open it once and accept the license. In Xcode → Settings → Components, install the iOS simulator. | iOS builds and simulators |
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

## 3. Sample videos (development only)

The 8 sample videos (~540 MB) are not in git. Copy the folder `artifacts/TurnipAppSampleVideo/` from the old computer into the same path on the new one (AirDrop, a USB drive, or `scp` with Remote Login enabled). Once the videos are uploaded to Mux this step goes away.

## 4. Run

```bash
pnpm samples      # terminal 1 — serves sample videos on :8765
pnpm kids         # terminal 2 — Expo dev server; press i for iOS simulator
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
