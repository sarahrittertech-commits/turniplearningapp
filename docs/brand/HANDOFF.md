# Design handoff: pick up here

*Last updated October 15, 2026.* Use this to continue the redesign on any machine. Claude: read this, then [design-review-2026-10.md](design-review-2026-10.md) (history and decisions), then [turnip-brand-guide.md](turnip-brand-guide.md) (the rules, plus open questions in §13).

## Where things stand

- **Phase:** the app has the **Version B · Field notebook** look (built Oct 13–14) and is being prepared for an App Store v1. What was built and why: [docs/history/2026-10-13-mux-facelift-app-store.md](../history/2026-10-13-mux-facelift-app-store.md).
- **Decided in the build:** DM Sans for all app text (Fraunces only for the company brand: site, logo, App Store); a Sprout Green header band where Turnip asks each screen's question in a speech bubble; mascot = recolor study 2 with medium plum lines and a white sticker edge; app icon = Turnip on Sprout Green.
- **Brand:** Turnip Learning. World colors are decided: bold, used as navigation.
- **Waiting on Sarah** (guide §13, "Open questions"):
  1. Adopt the softer palette (lavender / plum / sprout)?
  2. App background: Lavender Mist (suggested), Warm White, or Clean White.
  3. Light mode only for the pilot (suggested)?
  4. Mascot recolor: study 2, 3 or 4 in [`design/mascot-recolor/`](../../design/mascot-recolor/).
  5. Who draws the final mascot art and the expression set.
  6. ~~Complementary accents~~: decided Oct 13: Heritage Teal `#3E7F80` + Heritage Coral `#C4524A` (guide §2).
  7. Use the 2017 logo, turnip icon and sprout drawing (guide §13.13, canvas board "Logo, turnip icon + sprout")? Find the original vector files.
- **Parked by Sarah:** login screen styling. (Wordmark: Sarah reopened it on Oct 13 by bringing back the 2017 logo; see guide §13.13.) Previously parked: the Turnip wordmark and login screen styling. She'll tackle those herself. Don't iterate on them unless she asks.

## What Sarah likes and doesn't like

**Likes**
- Line icons inside colored circles (Lucide style, 2.5 px stroke).
- **Bold world colors as navigation** on the Home world cards: Nature `#2E7D4F`, Animals `#F2A53A`, Earth `#2B63C0`, Biology `#6E48C8`.
- Real nature photography: one subject per image, close and dramatic.
- The mascot **expression set**: happy, thinking, surprised, celebrating, sleepy, pointing. Open to trying an **explorer hat**, used only inside the learning worlds.
- Turnip's current balance: fun and cute, but not childish. Recolor it; don't redesign it.
- The general purple-and-green Turnip motif.

**Dislikes**
- **Cream, tan, sand: anywhere**, including Turnip's face.
- Navy bars and backgrounds.
- Navy and yellow on the sign-in screen.
- Turnip on dark or red-leaning purple. It clashes with Turnip's dusty lavender.
- Turnip cropped inside a circle. Show it whole.
- Condensed all-caps fonts (Barlow Condensed) as the *brand* font.
- Anything "babyish": emoji as main pictures, clip art, rainbow backgrounds.

**How to work with Sarah on design**
- **Green means go:** play, continue and "keep watching" are Sprout Green. Never put coral or red on them. Quiet buttons ("Go home") are Glasses Slate blue-gray.
- **Brown and yellow only at full strength.** Pale versions read as the retired tan and cream.
- **Logo:** the 2017 logo, never in plum.
- Short replies like "don't use the purple" may mean the last thing discussed, not the screen in view. Ask, or take the narrowest reading.
- Show options **side by side** and let her pick. Explain why in plain words.
- Change only what she asked for. Too many changes at once made the work "fall off the map" (Oct 12).
- Wild Explorer is for the **learning worlds** (photos, icons, expeditions), not the company brand.
- The repo is **public**: don't name family members (feedback came from "a child tester in the target age range").
- Commit or push only when she asks.

## Files from this work

| Path | What |
|---|---|
| [docs/brand/turnip-brand-guide.md](turnip-brand-guide.md) | Brand guide: palette, mobile type scale, accessibility, dark mode, open questions |
| [docs/brand/design-review-2026-10.md](design-review-2026-10.md) | What was explored and decided on Oct 11–12, and why |
| [design/prototype-wild-explorer/](../../design/prototype-wild-explorer/) | Source of the clickable iPhone prototype; live canvas link in its README |
| [design/mascot-recolor/](../../design/mascot-recolor/) | Four mascot recolor studies + comparison sheet + `recolor.py` |

**Not in the repo:** the reference images Sarah shared in chat. That includes her topic posters (Nature, Animals, Earth Science, Biology), the 12-photo nature grid, and the Canva brand-guide screenshots. Their licenses are unknown, and the repo is public. Ask Sarah to re-share them if needed. The four worlds and their topics are written out in the design review.

### Re-running the mascot recolor

`recolor.py` swaps Turnip's four flat colors (root, body, glasses, sprout) and adds an outline in the glasses color. Edit the `VARIANTS` table, then run from the repo root:

```bash
python3 design/mascot-recolor/recolor.py apps/kids/assets/images/mascot.png design/mascot-recolor
```

It needs Python 3 with Pillow (`pip3 install pillow`). The output is for picking a direction; final art should be redrawn as vector by an illustrator.

## Latest (Oct 13 evening)

- **Decided Oct 13: Version B · Field notebook** is the app direction (canvas, second row right of the originals):
  - lavender-mist background and a teal menu bar;
  - Earth Brown dark cards with Sunny Yellow highlights;
  - sprout green for go/play, Fraunces + DM Sans, the recolored mascot.

  This is what gets built into `tokens.ts` next.
- **Expedition cards take a color that fits the expedition (Oct 13):** Ocean Friends uses the Version A teal `#346266`, with track `#2D4C54`. Deep Sea blue `#1F5A84` (track `#174565`) also looks good to Sarah; either works. Brown stays the default dark card.
- **Sign-in top (Version A row):** "top 2" is good for now: the original 2017 logo, in its own periwinkle and green, on a white card over plain Sprout Green, with dark text. Version B's sign-in still has the teal top; open question whether to swap in this green logo-card top. Possible later: the olive `#788C5D` from the old green business card instead, with white text.
- **Landing-site color change** is edited locally in `~/Documents/PushPopDev/turnip-learning-site`. It is **not pushed**; ask before pushing.

## Next steps (in order)

1. Sarah answers the open questions above.
2. Update the prototype canvas to the agreed palette, fonts and mascot. Show the current design and the new one side by side.
3. After sign-off, build it into the app:
   - Restyle through `apps/kids/src/theme/tokens.ts` and `src/components/ui`.
   - Bundle Fraunces (Soft, SemiBold) and DM Sans; remove Quicksand.
   - Add worlds → topics to the catalog (`src/data/types.ts`, mock catalog).
   - Run `npx tsc --noEmit`, `npx expo lint` and `npx expo-doctor` in `apps/kids`.
4. Keep [TODO.md](../../TODO.md) updated as items finish.
