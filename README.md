# Turnip Learning

A safe, curated video app where young kids (roughly ages 3–9) explore what they're obsessed with — animals, oceans, science, engines, dance — through age-appropriate learning journeys instead of algorithm rabbit holes. iPad-first, landscape.

> **Status:** v0 prototype. A fresh rebuild on the current Expo SDK is in progress — see [TODO.md](TODO.md).

## Repo layout

```
apps/
  mobile/        iPad app (Expo / React Native) — v0 prototype
  admin/         Content admin (Next.js) — placeholder
packages/
  shared/        Shared TypeScript types
design/
  app-screens/   Magic Patterns web prototype of every screen (run with `npm install && npm run dev`)
  app-icon/      Icon Composer file (turnip.icon) + Magic Patterns icon study
docs/
  product/       Product requirements (PRDs)
  business/      Pitch guide, pitches, investor brief, business model canvas
  archive/       Earlier architecture analysis and v0 build notes
```

## Running the v0 app

```bash
pnpm install
pnpm mobile
```

The sample videos (`apps/mobile/assets/videos/`) are not committed — they exceed GitHub's file size limit. Production video is streamed from Mux.
