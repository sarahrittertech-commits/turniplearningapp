# Turnip Learning

A safe, curated video app where young kids (ages 3–9) explore what they're obsessed with — animals, oceans, science, engines, dance — through age-appropriate learning journeys instead of algorithm rabbit holes. iPhone + iPad.

> **Status:** rebuild in progress on the `rebuild` branch — see [docs/architecture.md](docs/architecture.md) and [TODO.md](TODO.md).

## Repo layout

```
apps/
  kids/          The app — Expo SDK 57, Expo Router (iPhone + iPad)
design/
  app-screens/   Magic Patterns web prototype of every screen (`npm install && npm run dev`)
  app-icon/      Icon Composer file (turnip.icon) + Magic Patterns icon study
docs/
  architecture.md  Architecture review & rebuild plan
  product/       Product requirements (PRDs)
  business/      Pitch guide, pitches, investor brief, business model canvas
  archive/       Earlier architecture analysis and v0 build notes
```

## Running the app

```bash
pnpm install
pnpm samples   # serves the local sample videos on :8765 (dev only)
pnpm kids      # starts Expo; press i for the iOS simulator, w for web
```

The iOS simulator needs Xcode. Without it, build in the cloud with `npx eas-cli@latest build --profile simulator --platform ios` from `apps/kids`.

Sample videos aren't committed (too large for GitHub). Put them in `artifacts/TurnipAppSampleVideo/`. Production video streams from Mux.
