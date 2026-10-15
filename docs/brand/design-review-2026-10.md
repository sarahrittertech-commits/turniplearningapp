# Design review: October 11–12, 2026

A record of the redesign conversation: what was tried, what was decided, and what's still open. The brand rules themselves live in [turnip-brand-guide.md](turnip-brand-guide.md); this file is the history and reasoning.

## Starting point

- The current app (purple `#73318F` / green `#A2CE73`, Quicksand, emoji tiles) was tested with a child in the target age range. The verdict: **"too babyish."** Sarah agreed.
- Content map: Sarah's posters define four subject worlds, which become the app's structure:
  - **Nature** (10 topics): plants and trees, flowers and seeds, forests and jungles, deserts, oceans and coasts, rivers and lakes, mountains and valleys, weather and seasons, habitats and ecosystems, conservation.
  - **Animals** (12): animal groups, mammals, birds, reptiles, amphibians, fish, insects, arachnids, animal homes, adaptations, food chains, animal care.
  - **Earth Science** (12): our planet, rocks and minerals, volcanoes, earthquakes, water cycle, clouds and weather, soil and landforms, Moon and stars, solar system, oceans and tides, fossils, natural resources.
  - **Biology** (12): cells, DNA and heredity, body systems, the human body, growth and life cycles, microorganisms, food and nutrition, senses and the brain, plant biology, photosynthesis, classification, health and hygiene.

## What was explored

1. **Imagery:** clip-art posters were compared with a photo-based version.
   - **Decision:** real nature photography, one subject per image, close and dramatic.
   - No collages, no text inside images, no clip art or emoji as the main picture.
   - Some AI-generated poster images showed the wrong thing (a "cell" that looked like a watch, an earthquake shown as a book). Every image must be checked for accuracy.
2. **Style references:** Canva brand guides popular with ages 5–9: Bright Playworld, Pixel Quest, Cool Club and Wild Explorer. Sarah picked **Wild Explorer**.
3. **Prototype:** a clickable iPhone canvas in the Wild Explorer style. Claude Design canvas *Turnip Wild Explorer Redesign*, private to Sarah; it can be shared from the canvas's Share menu.
   - Screens: Home, World (Animals), Expedition (Ocean Friends), Backpack (downloads), grown-up sign-in, Player, and a style guide.
4. **Feedback on the prototype:**
   - ✅ Liked:
     - The **line icons inside colored circles**.
     - The **bold primary world colors** on the Home "Choose your world" cards.
     - The overall direction for the content worlds.
   - ❌ Not liked:
     - Navy/dark-purple bars.
     - Navy and yellow on the sign-in screen.
     - Turnip on dark purple.
     - The condensed all-caps font as a *brand* font.
     - **Cream, tan and sand anywhere.**
   - Insight: **Wild Explorer fits the learning worlds, not the company brand.**
5. **Brand guide:** Sarah supplied a full brand guide and typography system. It was documented, reviewed for accessibility and app use, and is now [turnip-brand-guide.md](turnip-brand-guide.md).

## Decisions (Oct 12)

| Topic | Decision |
|---|---|
| Name | **Turnip Learning**, always title case. "Turnip" is the mascot. |
| Fonts | **Fraunces** (Soft) for the logo and big display moments only (24 pt+); **DM Sans** for all UI. The logo is an image asset. Mobile type scale and rules are in guide §3. |
| World colors | Stay **bold**, used as navigation: Nature `#2E7D4F`, Animals `#F2A53A`, Earth `#2B63C0`, Biology `#6E48C8`. Only on world cards, world headers and world badges. |
| Icons | Simple line icons (Lucide style, free), 2.5 px stroke, inside colored circles. |
| Gray | **Glasses Slate `#585878`** (sampled from the mascot) for secondary UI, plus **Slate Mist `#A9AABB`** for dividers. |
| Cream / tan | **Retired everywhere**, including Turnip's face. |
| Mascot | Keep the shape and face; recolor. Add an **expression set**: happy, thinking, surprised, celebrating, sleepy, pointing. An **explorer hat** is open to try, used only inside the learning worlds. |
| Content theme | Keep from Wild Explorer: photos, icons, expeditions/trails, documentary-style titles. Drop: condensed all-caps font, navy, sand. |

## Still open

These are mirrored in the guide's "Open questions" list:
1. Adopt the softer palette (lavender `#8B86B8` / plum `#5D5A87` / sprout `#B7D77F`) in place of today's app purple and green?
2. App background: Lavender Mist `#F6F5FB` (suggested), Warm White, or Clean White.
3. Light mode only for the pilot (suggested), dark mode later.
4. Mascot recolor: pick from the studies in [`design/mascot-recolor/`](../../design/mascot-recolor/). Options are 2 Polished, 3 Fresh Lavender and 4 Turnip Violet. All have a white root and a new outline.
5. Who draws the final mascot art (vector) and the expression set.
6. Test Andika against DM Sans for kid labels with 4–6-year-olds.
7. Explorer-hat sketches.

## October 13: old brand archive

Sarah found 2017-era Turnip Learning material: the original logo, a print business-card file (five colored card backs), and product screenshots (interactive templates, a sorting game). The files stay out of the repo: the cards carry personal contact details, and the repo is public.

What it shows:
- **The softer palette isn't new.** The card back plum-gray `#6F6C89` has the same hue as Turnip Lavender `#8B86B8` (246°), and the logo leaf matches Sprout Green. The app's `#73318F` purple was the outlier. This supports open question 1.
- **Complementary accents already existed.** The card backs were plum, olive `#788C5D`, coral `#CD5E55`, teal `#4B8485` and charcoal `#353538`. Coral and teal sit on either side of lavender's opposite (a split-complementary set), with sprout almost directly opposite.
- **Other recurring elements:** the "Grow with us." tagline in a soft slab serif, a faint sprout line drawing as a background, a tracked "LEARNING" under the wordmark, and (in the product) a light science-doodle pattern on lavender. The tan sorting boxes stay retired.
- The old wordmark is a custom rounded bold "Turnip" with a turnip glyph. The wordmark is parked, so this is reference only.

Explored: a new canvas board, *Archive + complementary colors (Oct 13)*, shows three options side by side on a Backpack sample. All three keep lavender, plum and sprout:
- **A · Heritage** (suggested): add Teal `#3E7F80` and Coral `#C4524A`. Both are darkened from the cards so white text passes AA (4.6 and 4.5 : 1).
- **B · Calm teal:** add teal plus Sea Glass `#D6ECEA` panels; coral only for real errors.
- **C · Guide as written:** Soft Blush and Fresh Sage only; plum carries every action.

**Decided (Oct 13):** Sarah chose **A · Heritage**: teal and coral from the old cards as accents. They're now in guide §2.

Sarah also wants to use the **2017 logo** (not the mascot) and the **sprout drawing** from the card backs in the brand and the app. A second board, *Logo, turnip icon + sprout (Oct 13)*, shows:
- logo color options;
- the turnip icon on its own (app icon, small sizes);
- the sprout as a faint background;
- three sample screens: splash, grown-up area, and an empty Backpack.

The proposal is in guide §13.13.

Later on Oct 13, Sarah's follow-ups:
- **Logo:** no plum logo. It's Turnip Lavender on light screens.
- **Player:** "Keep watching" was coral, which reads as stop, so it's now Sprout Green. The player also lost its navy, cream and condensed type. "Go home" is Glasses Slate `#585878`, a blue-gray, with white text (6.8 : 1). White looked off, and lavender was tried first.
- **"Which Turnip feels right?" board:** redone in the new palette. The 2017 logo is suggested; Fraunces, Nunito Black and Fredoka are the alternatives.
- **Secondary shades:** shade families for each brand color, plus a possible earthy brown and sunny yellow (guide §13.14).
- **Secondary colors:** Heritage Teal, Sunny Yellow and Earth Brown. The landing site's mint "today" band became dark teal with a yellow heading, and the site now shows the three secondary swatches.
- **Two reskins of the iPhone screens,** same layouts (Home, World, Expedition, Backpack, sign-in):
  - **A · Teal trail:** blue-gray background, white menu bar, teal dark cards.
  - **B · Field notebook:** lavender-mist background, teal menu bar, Earth Brown dark cards.
  - Both use yellow for highlights and rewards, sprout green for go/play, Fraunces + DM Sans, the recolored mascot, and the 2017 logo on sign-in.
  - **Decided: Sarah chose B · Field notebook** ("the one I would use").
- **Wild Explorer style guide board:** updated to Mist, lavender, sprout, teal and coral, with Fraunces + DM Sans. No navy, cream, coral-for-play or all caps.

## Next steps

1. Sarah answers the open questions.
2. Update the prototype canvas to the agreed palette, fonts and mascot. Show the current design and the new palette side by side.
3. Once signed off, restyle the app through `apps/kids/src/theme/tokens.ts` and `src/components/ui`. Add the world → topic level to the catalog data model, and bundle Fraunces and DM Sans in place of Quicksand.
