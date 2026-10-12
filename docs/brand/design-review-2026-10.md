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

## Next steps

1. Sarah answers the open questions.
2. Update the prototype canvas to the agreed palette, fonts and mascot. Show the current design and the new palette side by side.
3. Once signed off, restyle the app through `apps/kids/src/theme/tokens.ts` and `src/components/ui`. Add the world → topic level to the catalog data model, and bundle Fraunces and DM Sans in place of Quicksand.
