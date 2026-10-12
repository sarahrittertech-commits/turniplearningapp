# Turnip Learning Brand Guide

*Draft v0.1 · October 12, 2026 · Owner: Sarah*

Sections 1–12 are Sarah's draft brand and typography guidance, lightly formatted. **Section 13 holds suggestions and open questions from the design review.** Nothing there is decided until Sarah accepts it. Once something is agreed, move it into the main sections and delete it from section 13.

---

## 1. Brand essence

**Names:** the company and app are **Turnip Learning** (always title case). **Turnip** is the mascot. In casual copy, "Turnip" can stand in for the app ("Turnip helps…") once the full name has appeared.

Turnip is the clever, friendly, slightly quirky guide who makes complex things feel approachable.

The mascot's oversized glasses, soft rounded shape, gentle smile, and leafy sprout suggest a brand that is:

- Curious and thoughtful
- Warm and welcoming
- Smart without being intimidating
- Playful, but not childish
- Rooted in growth, learning, and originality

### Brand personality

| Trait | Expression |
|---|---|
| Curious | Ask thoughtful questions and invite exploration |
| Intelligent | Explain clearly without using unnecessary jargon |
| Friendly | Use a warm, encouraging voice |
| Quirky | Add unexpected but purposeful personality |
| Grounded | Stay practical, useful, and easy to understand |
| Growing | Celebrate progress, learning, and experimentation |

### Brand promise

Turnip helps people feel smarter, more confident, and ready to grow.

---

## 2. Colour palette

Inspired by Turnip's lavender body, warm cream face, leafy green sprout, and soft purple glasses.

### Core colours

| Name | HEX | RGB | Use for |
|---|---|---|---|
| **Turnip Lavender** | `#8B86B8` | 139, 134, 184 | Primary backgrounds, illustrations, headers, large brand moments. The main recognisable brand colour: imaginative, calm, distinctive. |
| ~~**Root Cream**~~ | ~~`#E8E0D4`~~ | ~~232, 224, 212~~ | **Retired Oct 12: Sarah dislikes cream/tan.** Replacement background is being decided in 13.9 (Lavender Mist suggested). Turnip's root becomes white (13.11). |
| **Sprout Green** | `#B7D77F` | 183, 215, 127 | Highlights, growth moments, buttons, positive indicators, small accents. The optimistic accent, not a dominant background. |
| **Glasses Plum** | `#5D5A87` | 93, 90, 135 | Text, outlines, headings, icons, borders, contrast. The main dark colour, softer and more characterful than black. |

### Supporting colours

| Name | HEX | Use for |
|---|---|---|
| **Soft Blush** | `#D9A7A7` | Sparingly: warmth, celebration, human moments, secondary highlights |
| **Fresh Sage** | `#DCE8C1` | Subtle panels, backgrounds, secondary illustrations |
| **Deep Ink** | `#37364F` | High-contrast body text, accessibility-critical content |
| **Glasses Slate** | `#585878` | *Added Oct 12, taken from the mascot's glasses in the artwork.* The neutral gray for app UI: secondary text, icons, inactive tabs, timestamps, input borders. Readable on light backgrounds (5.2 : 1 or better); white text on it also works (6.8 : 1). |
| **Slate Mist** | `#A9AABB` | *Added Oct 12.* A light companion to Glasses Slate for dividers, disabled states, progress-bar tracks and subtle borders. Decorative only, never for text (1.75 : 1 on cream). |

**Plum vs slate:** they are close cousins, so give them different jobs. **Glasses Plum** carries the brand: headings, logo, thick illustration outlines, primary buttons. **Glasses Slate** is the quiet neutral: supporting text and interface details. Never use both for the same role on one screen.

### Suggested colour balance

| Colour | Share |
|---|---|
| Main background (was Root Cream; see 13.9) | 45% |
| Turnip Lavender | 30% |
| Glasses Plum | 15% |
| Sprout Green | 8% |
| Soft Blush, Fresh Sage, or slate neutrals | 2% (slate as needed for UI details) |

### Colour guidance

**Do**
- Pair lavender with cream for the signature Turnip look
- Use plum for readable text instead of pure black
- Use green as a confident accent
- Leave generous areas of cream around illustrations and headlines

**Avoid**
- Bright neon green
- Too many saturated colours at once
- Lavender and green in equal amounts everywhere
- Plum text on dark lavender without enough contrast
- Making every design heavily illustrated

---

## 3. Typography

Typography should feel intelligent, approachable, and slightly editorial, and it must stay easy to read on a phone held by a 5-year-old.

*Updated Oct 12, 2026: chosen from the recommended pairing (A: Warm editorial), adjusted for mobile.*

### The system: two families, clear jobs

| Family | Role | Why it works on mobile |
|---|---|---|
| **Fraunces** (Soft) | Logo and big moments only: hero titles, world names, celebration screens. Never below 24 pt. | A soft, rounded serif with the personality of Turnip's round shape and glasses. Serifs lose clarity at small sizes on screens, so it stays large. |
| **DM Sans** | Everything else: headers, kid labels, body, buttons, navigation, captions. | A clean, friendly sans with a generous x-height and clear shapes at small sizes. Its built-in optical sizing tightens text at large sizes and opens it up at small ones. It has the full weight range the app needs. |

Both are free under the SIL Open Font License, so they can be bundled in the iPhone/iPad app at no cost. The app embeds them with Expo's font config plugin, the same way Quicksand is embedded today.

**Logo:** the brand name is **Turnip Learning**, always in title case (never `turnip`, never all caps). The wordmark is a **drawn image asset (SVG/PNG), not live text**. Set it once in Fraunces Black with hand-tuned spacing, export it, and use the asset everywhere. "Turnip" can lead, with "Learning" smaller or lighter beneath or beside it; the mascot stays a separate mark that can sit next to the wordmark. It looks identical on every device, and the app doesn't need to bundle Fraunces Black.

### Mobile type scale

Sizes in points (pt) as used in the app. *Compact* = iPhone, *Regular* = iPad.

| Style | Font | Compact | Regular | Use for |
|---|---|---|---|---|
| **Display** | Fraunces SemiBold (Soft) | 34 / 40 | 44 / 52 | Screen hero: "Where to today?", world names, "You found all 4!" |
| **Title** | DM Sans Bold | 24 / 30 | 28 / 34 | Section titles: "Choose your world", "Pick a trail" |
| **Heading** | DM Sans Bold | 20 / 26 | 22 / 28 | Card titles, expedition names |
| **Kid label** | DM Sans SemiBold | 18 / 22 | 20 / 24 | Video and topic names a child reads: "Frogfish", "Insects" |
| **Body** | DM Sans Regular | 17 / 24 | 18 / 26 | Descriptions, parent explanations (17 pt is iOS's standard body size) |
| **Button** | DM Sans Bold | 18 / 22 | 20 / 24 | All buttons and tab labels |
| **Caption** | DM Sans Medium | 14 / 18 | 15 / 20 | Durations, "Stop 3 of 4", helper text |
| **Label** | DM Sans SemiBold, +0.5 pt letter spacing | 13 / 16 | 14 / 18 | Tiny category tags: "Field fact", "Start here" |

Format: size / line height.

### Mobile rules

1. **Minimum sizes:**
   - Never below 13 pt anywhere.
   - Anything a child is expected to read is at least 18 pt.
   - Parent-only fine print is at least 14 pt.
2. **Respect the phone's text-size setting.**
   - Text grows with iOS Dynamic Type (larger-text accessibility), up to about 1.4× before layouts must reflow.
   - Big kid labels may cap lower, so cards don't break.
   - Never turn scaling off entirely.
3. **Sentence case** everywhere, including buttons and tabs.
   - All caps only for the tiny Label style, three words max.
   - No condensed fonts. This replaces Barlow Condensed from the Wild Explorer prototype.
4. **Weight does the work, not color alone.**
   - Kid-facing titles are SemiBold or Bold.
   - Regular weight is for longer reading, which is mostly parents.
5. **Short lines:**
   - Body text about 35–45 characters per line on iPhone, up to about 60 on iPad.
   - Kid labels wrap to two lines at most, then truncate.
6. **Pair text with pictures for pre-readers.**
   - Kid labels always sit with a photo or icon, so a 3-year-old can navigate without reading.
   - Spoken labels (audio) are a later step.
7. **Fraunces settings:**
   - Use the soft-cornered version, the "Soft" style in Fraunces's settings.
   - Bundle static font files rather than the variable font, because React Native doesn't reliably support variable-font settings. Pick the matching static Soft files from the Google Fonts download and confirm the file names when adding them.
   - Only one Fraunces weight (SemiBold) ships in the app, which keeps the download small.
8. **Fonts to bundle:**
   - Fraunces SemiBold (Soft).
   - DM Sans Regular, Medium, SemiBold and Bold.
   - That's five files. Quicksand is removed when the redesign lands.

### Early readers (to test)

DM Sans uses the two-storey `a` and `g` (as in this sentence), while kids learn the one-storey "ball and stick" shapes at school. Its capital `I` and lowercase `l` also look alike. DM Sans is the default, so plan a quick test:
- Show 4–6-year-olds a few topic and video names in DM Sans and in **Andika**.
- Andika is a free SIL font designed for beginning readers, with one-storey `a` and `g` and a distinct `I`/`l`.
- If Andika clearly wins, use it **only for the Kid label style**. One setting in the app's design tokens swaps it. It then counts as the "second family" on kid screens, and Fraunces stays limited to the Display style.

### Typography rules (brand-wide)

- Prefer sentence case over all caps
- Use bold for emphasis, not decoration
- Keep body copy spacious and easy to scan
- Avoid narrow, technical, aggressive, or very condensed typefaces
- No more than two font families in one composition
- Avoid thin weights, decorative body fonts, and tightly packed text
- Fraunces Italic is fine for occasional pull quotes in marketing and print; it's not used in the app

### Alternatives considered

| | Logo | Header | Body | Feeling | Why not chosen for the app |
|---|---|---|---|---|---|
| **A: Warm editorial** ✅ | Fraunces | DM Sans | DM Sans | Clever, warm, modern | Chosen |
| B: Soft and playful | Cooper Black | Nunito Sans | Nunito Sans | Cheerful, expressive | Cooper Black needs a paid app licence; reads younger |
| C: Clean digital | Recoleta | Manrope | Manrope | Polished, clear | Recoleta needs a paid licence; Manrope's smaller x-height is weaker at kid sizes |

### Example copy by level

- **Display:** "Where to today?" · "Masters of disguise" · "You found all 4!"
- **Title:** "Choose your world" · "Good ideas need room to grow."
- **Kid label:** "Frogfish" · "Insects" · "Rocks and minerals"
- **Body:** "Frogfish sit still on the reef, blending in until dinner swims by."
- **Parent body:** "Turnip makes complex ideas easier to understand, with short videos picked for curious kids."

---

## 4. Visual themes

| Theme | Purpose | Visual language | Mood | Message style |
|---|---|---|---|---|
| **Curious Growth** | Learning, progress, education, onboarding, new ideas | Sprouting leaves, gentle upward movement, layered shapes, notes, diagrams, thought bubbles; lavender backgrounds with green accents | Encouraging, hopeful, intelligent, forward-looking | "Small steps. Bright ideas. Big growth." |
| **Cleverly Simple** | Explaining complex ideas, product communication, tutorials, guides | Clear cream backgrounds, plum text, one bold lavender shape, simple illustrations, generous spacing, glasses-inspired framing | Clear, calm, helpful, confident | "Make sense of the complicated stuff." |
| **Rooted and Real** | Community, trust, brand stories, testimonials, values | Organic curves, soft cream and sage, hand-drawn details, natural textures, close-up mascot moments | Grounded, human, honest, supportive | "Good ideas grow from solid roots." |
| **Playful Perspective** | Social content, campaigns, announcements, lighthearted moments | Oversized glasses, tilted frames, unexpected cropping, curved text containers, small surprises; lavender-led | Witty, curious, expressive, approachable | "Put on your thinking glasses." |

---

## 5. Illustration style

Use rounded shapes, simple facial expressions, soft limited colours, thick plum outlines, minimal shading, slightly imperfect organic curves, friendly expressive eyes, and small leafy or root details.

### Mascot behaviour

Turnip can appear:
- Thinking with one leaf raised
- Peeking around a card or panel
- Pointing toward an important detail
- Wearing **different expressions rather than different costumes**
- Holding simple objects related to the topic
- Growing new leaves to represent progress
- Looking through oversized glasses at a concept or idea

### Avoid

Highly realistic rendering, sharp aggressive geometry, excessive gradients, overly detailed backgrounds, sarcastic or cynical expressions, and making Turnip look childish or chaotic.

---

## 6. Shape and layout language

**Preferred shapes:** soft circles, rounded rectangles, organic blobs, uneven ovals, leaf silhouettes, curved underlines, thick outlined frames.

**Layout principles**
1. **Start with a clear focal point.** Give Turnip, the headline, or the central idea one obvious position of importance.
2. **Use generous breathing room.** Cream space is an active part of the design.
3. **Mix structure with softness.** Pair clear grids and aligned text with organic illustrations and rounded containers.
4. **Let one element be slightly unexpected.** A tilted frame, oversized glasses, or a leaf breaking outside a container.
5. **Keep information approachable.** Avoid dense layouts, tiny type, and overly formal presentation.

---

## 7. Photography direction

Photography should feel natural rather than staged, bright but softly lit, human and expressive, curious and observational, and warm with neutral or lightly lavender surroundings.

**Good subjects:** people learning or making something, hands interacting with objects, workspaces with personality, close-up details, plants, gardens, roots and natural textures, and candid moments of concentration and discovery.

**Avoid:** cold corporate stock, posed business scenes, harsh flash, glossy or luxury imagery, and busy images that compete with Turnip.

---

## 8. Voice and messaging

**Voice:** warmth, clarity, gentle wit, encouragement, practical intelligence.

**Writing style:** plain language; explain before using specialised terms; make ideas inviting; short, confident sentences; active voice; a light touch of humour when appropriate.

**Example phrases:** "Let's dig into it." · "Here's the simple version." · "A little clarity goes a long way." · "Good ideas need room to grow." · "Let's look at this from a new angle." · "Curious minds welcome." · "Rooted in thought. Ready to grow."

**Avoid:** corporate clichés, condescending language, excessive exclamation marks, forced jokes, overly cute language, unexplained jargon.

---

## 9. Logo and mascot usage

- Give the mascot clear space around the root and leaves. **Minimum clear space = the height of the sprout leaves.**
- Never stretch, squash, or rotate the mascot.
- Keep the glasses and facial expression unobstructed.
- Use the original proportions.
- Prefer cream, lavender, or transparent backgrounds.
- Use the full mascot for friendly communications; use a cropped face or glasses detail for small formats.

**Small sizes:** use the face or glasses detail, avoid dense text beside it, keep the expression readable, and never shrink it until the facial features disappear.

---

## 10. Brand applications

| Application | Use |
|---|---|
| **Social media** | Strong lavender backgrounds, large short headlines, Turnip peeking from an edge, one green accent per design, cream text panels |
| **Presentations** | Cream content pages, lavender section dividers, plum headings, Turnip as guide or chapter marker, green highlights for key takeaways |
| **Documents and guides** | Cream backgrounds, plum typography, rounded lavender callouts, simple diagrams, small Turnip illustrations near transitions |
| **Website or digital product** | Cream main background, lavender for major sections and calls to action, plum text and navigation, green for success states and positive actions, rounded UI elements inspired by the glasses |

---

## 11. Quick brand formula

**Light background (13.9) + Turnip Lavender hero area + Glasses Plum text + Sprout Green accent + rounded typography + one curious mascot moment**

*(Originally "Root Cream background"; cream retired Oct 12.)*

## 12. One-line creative direction

A warm, clever, growth-minded brand with soft editorial colours, rounded typography, organic shapes, and a curious turnip mascot who helps people see ideas more clearly.

---

## 13. Suggestions and open questions (for review)

*These are proposals, not decisions. Mark each one accept / change / reject.*

### 13.1 Accessibility: some colour pairs are too low-contrast for text

Measured against WCAG 2.2. The App Store reviews accessibility, and many parents of young readers care about it.

| Text on background | Contrast | OK for |
|---|---|---|
| Deep Ink on Root Cream | 8.9 : 1 | All text ✅ |
| Glasses Plum on Root Cream | 4.9 : 1 | All text ✅ (just passes) |
| White on Glasses Plum | 6.4 : 1 | All text, buttons ✅ |
| Deep Ink on Sprout Green | 7.2 : 1 | All text, buttons ✅ |
| Glasses Plum on Sprout Green | 4.0 : 1 | Large text only (24 px+) ⚠️ |
| White on Turnip Lavender | 3.4 : 1 | Large text only (24 px+) ⚠️ |
| Glasses Plum on Turnip Lavender | 1.9 : 1 | Nothing ❌ |
| Sprout Green on Root Cream | 1.2 : 1 | Nothing, not even icons ❌ |
| Turnip Lavender on Root Cream | 2.6 : 1 | Decoration only ❌ |

**Proposals**
- **Primary buttons:** Glasses Plum with white text, or Sprout Green with Deep Ink text. Avoid lavender buttons with text on them.
- **On lavender:** only large white headlines. Put smaller text on a cream panel. The guide's social-media rule already does this.
- **Green on cream** is never used for text, icons, or thin lines. Use it as a filled shape.
- Consider adding a **Deep Sprout** green, `#3F6B1A` (4.8 : 1 on Root Cream), for green text or icons on cream, e.g. "Done ✓" states.

### 13.2 Fonts: licensing for an app ✅ *Resolved in §3 (Oct 12)*

Fonts embedded in an App Store app need an app/embedding licence.

- **Free for apps (SIL Open Font License, Google Fonts):** Fraunces, DM Sans, DM Serif Display, Bree Serif, Nunito Sans, Manrope, Inter, Quicksand.
- **Paid licences needed:** Cooper Black, Recoleta, Avenir Next. Avenir Next is fine on Apple devices as a system font, but not bundled on Android or web.

**Pairing A (Fraunces + DM Sans) is fully free.** That's another reason to choose it.

### 13.3 Fonts: early readers ✅ *Folded into §3 as a planned test (Oct 12)*

Kids aged 3–9 are learning letter shapes. DM Sans uses the "typewriter" `a` and `g`, which differ from the shapes taught in school, and its capital `I` and lowercase `l` look alike.

- **Option 1:** keep DM Sans everywhere (simplest, matches the guide).
- **Option 2:** keep DM Sans for parents and the overall app, and use a reader-friendly font for the short words kids read: titles on video cards and topic names. Lexend or Andika are both free.
- Recommendation: start with Option 1, and test titles with a few 4–6-year-olds before deciding.

### 13.4 How the brand fits with the "Wild Explorer" content theme

The app prototype introduced a Wild Explorer style for the learning worlds (Animals, Nature, Earth Science, Biology): condensed all-caps titles, a strong colour per world, and real photo "stickers". Parts of it conflict with this guide:
- The guide says "avoid very condensed fonts" and "no all caps".
- It says "no more than two font families", and Wild Explorer would be a third.
- Its saturated world colours fight the soft editorial palette.

**Proposal: one brand, with themed accents inside the worlds.**
- **Keep from Wild Explorer:** real nature photography, the line icons in coloured circles, the expedition/trail idea, documentary-style titles.
- **Drop:** Barlow Condensed and all-caps titles. World and topic titles use DM Sans Bold, and Fraunces for big hero titles, e.g. "Masters of disguise".
- **World colours stay bold, as navigation.** ✅ *Sarah likes the primary colours on the Home "Where to today?" world cards (Oct 12).* Each world keeps one strong colour so kids can find their world at a glance, even before they can read.

  | World | Colour | Text on it |
  |---|---|---|
  | Nature | Forest `#2E7D4F` | White |
  | Animals | Mango `#F2A53A` | Deep Ink `#37364F` |
  | Earth Science | River Blue `#2B63C0` | White |
  | Biology | Grape `#6E48C8` | White |

  **Where world colours appear:** world cards on Home, the header of each world page, that world's topic icons and badges, and the progress on its expeditions. **Everywhere else** (sign-in, grown-up screens, menu bar, Backpack) uses the soft Turnip palette. That way the bold colours read as "you're in a world" and don't compete with the brand.

  One world colour per screen inside a world. Home is the only place all four sit together.

### 13.5 Write a kids-app section

Sections 7, 8, and 10 read like a general company brand: "people", workspaces, presentations, "clearer decisions". The app needs its own guidance for two audiences:
- **Kids 3–9 (often pre-readers):**
  - Very short labels, with an icon and audio wherever there's text.
  - Touch targets of at least 64 pt.
  - Voice: curious, encouraging, never babyish. For example "Let's dig into it.", "Look closer…", "You found all 4!"
- **Parents:** Cleverly Simple theme, plain and reassuring, for privacy, screen time, and downloads.
- **Photography:** for the content itself, close-up nature photography (animals, plants, rocks, cells), one subject per image, no text inside images. This adds to section 7, which covers people and workspaces.

### 13.6 Mascot: expressions first, plus one explorer hat ✅ *Sarah likes this (Oct 12)*

Section 5 says Turnip wears *different expressions rather than different costumes*. Expressions are Turnip's main way of showing feeling. Suggested starter set for the app:
- happy/greeting
- thinking (leaf raised)
- surprised (glasses up)
- celebrating (new leaf)
- sleepy (empty Backpack / offline)
- pointing

**Explorer hat, to explore (Sarah is open to it).** Proposal: one signature accessory, not a wardrobe. That keeps the spirit of §5.
- **When:** only inside the learning worlds, on expeditions and when a badge is earned, so the hat means "we're on an adventure". No hat on sign-in, grown-up screens, or the app icon.
- **Look:** a simple rounded safari or pith hat in white or soft sage `#DCE8C1` (no cream or khaki), thick plum outline, maybe a small Sprout Green band or leaf. It has to fit the illustration style in §5.
- **Rules:**
  - The hat sits behind or between the sprout leaves and never hides them.
  - The glasses and face stay fully visible.
  - Turnip's proportions don't change.
- **Try first:** hat plus each of the six expressions, at full size and at small sizes. If the hat makes the face unreadable at small sizes, use it only on the full-size mascot.
- **If it works,** update §5 to: "expressions rather than costumes, except the explorer hat inside the learning worlds."

### 13.7 How this relates to the current app colours

The current app uses a more saturated purple `#73318F` and green `#A2CE73`. This guide moves to the mascot's own softer lavender `#8B86B8` and green `#B7D77F`.
- **Proposal:** adopt the guide's palette. The mascot artwork already uses it, so the app will finally match Turnip.
- **Note:** Glasses Plum and Deep Ink then replace the dark purple `#2D1050` and navy `#14213D` from the prototype.

### 13.8 Small consistency items

- **Spelling:** the guide uses British spelling (colour, recognisable); the app targets US families. Pick one for app copy (suggest US English).
- **"Never rotate the mascot" vs "tilted frames":** fine together. Tilt the frame, never Turnip.
- **Glasses-shaped UI:** rounded-square frames with a thick plum outline are a nice signature for photo cards and avatars. Worth a quick sketch.

### 13.9 Background colour: maybe not tan ⚠️ *Sarah isn't sold on the tan/cream (Oct 12)*

Root Cream `#E8E0D4` (and the prototype's `#F6EFDF`) can read beige or tan on a phone screen, and it mutes the bold world colours. Options to compare side by side:

| Option | Background | Cards | Feel | Plum text contrast |
|---|---|---|---|---|
| **A · Lavender Mist** *(suggested)* | `#F6F5FB` (white with a hint of Turnip lavender) | White `#FFFFFF` | Fresh, clearly "Turnip", makes world colours pop | 5.9 : 1 ✅ |
| **B · Warm White** | `#FAF8F4` (barely-there cream) | White | Soft and warm without looking tan | 6.0 : 1 ✅ |
| **C · Clean White** | `#FFFFFF` | Lavender Mist `#EEEDF6` panels | Crisp, most "app-like" | 6.4 : 1 ✅ |
| *Current · Root Cream* | `#E8E0D4` | Lighter cream | Editorial, cosy, can look tan | 4.9 : 1 ✅ |

*Update (Oct 12): Sarah isn't attached to tan or sand anywhere, in the brand or the app, and later: "I hate the cream." Cream is out.* Suggestion: **Option A everywhere**, for the app, marketing and print alike. If chosen:
- Lavender Mist `#F6F5FB` replaces Root Cream as the main background and takes its 45% share in the colour balance. White is for cards and panels.
- Root Cream is retired everywhere, including the mascot. Turnip's root becomes white with a plum outline (13.11).
- Update the background references in §2, §4, §9, §10 and §11 to match, e.g. the quick formula becomes "Lavender Mist background + Turnip Lavender hero area + …".

### 13.10 Turnip on purple, and dark mode

**Why the mascot looks "off" on the current dark purple.** Turnip's body is a dusty, blue-leaning lavender (`#8B86B8`). The current app purple (`#73318F`) and the prototype's dark purple (`#2D1050`) are warm, red-leaning purples. Two different purples side by side fight each other. On `#73318F` the mascot also nearly disappears (2.4 : 1). This is about hue, not your eye.

**Rule:** Turnip sits on **light backgrounds** (Lavender Mist, white) or on **its own family of colours** (Turnip Lavender, Glasses Plum, Deep Ink). Never on red-leaning purples, magentas, or busy photos. On any darker background, give the mascot art a thin white "sticker" outline, which matches the photo stickers.

**Dark mode with the softer palette (proposal).** It's the same palette, flipped:

| Role | Light mode | Dark mode | Dark-mode contrast |
|---|---|---|---|
| Background | Lavender Mist `#F6F5FB` | Night Ink `#1E1D2B` (plum-tinted near-black) | n/a |
| Cards / surfaces | White | Night Plum `#2A2940` | n/a |
| Main text | Deep Ink `#37364F` | Lavender Mist `#F6F5FB` | 15 : 1 ✅ |
| Headings / brand text | Glasses Plum `#5D5A87` | Soft Lavender `#C9C5E8` | 10 : 1 ✅ |
| Secondary text, icons | Glasses Slate `#585878` | Slate Mist `#A9AABB` | 7.2 : 1 ✅ |
| Accent / success | Sprout Green `#B7D77F` (shapes) | Sprout Green `#B7D77F` (can also be text) | 10 : 1 ✅ |
| World colours | As in 13.4 | Same colours. Cards already carry their own text colour. | n/a |
| Mascot | As drawn | As drawn, plus a thin white sticker outline | 4.9 : 1 ✅ |

Glasses Plum can't be used for text in dark mode (2.6 : 1). That's why headings switch to Soft Lavender.

**Recommendation:** ship the pilot **light mode only**. The app is already set to light-only in `app.json` (`"userInterfaceStyle": "light"`). Many kids apps are light-only, and this halves the design and testing work. Because every colour lives in the theme tokens, dark mode can be added later as a second set of values without touching the screens.

### 13.11 Mascot recolour (shape and face unchanged)

Sarah likes Turnip's balance of fun and grown-up, and is open to new colours. Cream is out. Four studies are saved in `design/mascot-recolor/` (`comparison-sheet.png` shows each one on white, Lavender Mist, and dark mode):

| Study | Body | Root | Glasses + outline | Sprout | Notes |
|---|---|---|---|---|---|
| 1 · Original | `#8E88BE` | `#E2D8CD` cream | `#5B597B` | `#ADCA7B` | Reference only. The root disappears into light backgrounds. |
| 2 · Polished | `#8B86B8` | `#FFFFFF` | `#4E4C6E` | `#A3CF68` | Same dusty lavender, white root, new outline. The smallest change. |
| 3 · Fresh Lavender | `#9A8FE0` | `#F3F1FB` | `#4A476E` | `#9FD45E` | Brighter, cleaner violet; most at home with the bold world colours. |
| 4 · Turnip Violet | `#8A5CC2` | `#FFFFFF` | `#433A63` | `#93C957` | Real-turnip purple; bridges to the app's existing purple. Most vivid. |

**What changed in every new study:**
- A **thick outline** in the glasses colour, matching §5 ("thick plum outlines"). Without it, a white root vanishes on light screens.
- A white root instead of cream.

**Next:**
- Pick a study.
- Then update Turnip Lavender in §2 to match the new body colour.
- Have the illustrator redraw the final art as clean vector (SVG), with the expressions from 13.6.
- These studies are quick automatic recolours, good for choosing a direction but not final art.

### Open questions for Sarah

1. ~~Accept Pairing A?~~ Decided: Fraunces + DM Sans, adapted for mobile (§3). Still to test: Andika for kid labels.
2. ~~Logo case?~~ Decided: **Turnip Learning**, title case (§3).
3. Accept the guide's softer palette replacing the current app purple/green (13.7)?
4. ~~Keep Wild Explorer world colours?~~ Decided: keep them bold, as world navigation (13.4).
5. Who will draw the mascot expression set and the explorer-hat versions (13.6)?
6. App background: Lavender Mist, Warm White, Clean White, or keep cream (13.9)?
7. Light mode only for the pilot, dark mode later (13.10)?
8. Which mascot recolour: 2 Polished, 3 Fresh Lavender, or 4 Turnip Violet (13.11)?
