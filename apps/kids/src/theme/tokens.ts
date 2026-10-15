/**
 * Turnip design tokens — the single source of truth for how the app looks.
 *
 * Every screen and component reads from here. A redesign should mostly mean
 * editing this file (and `components/ui`), not touching screens.
 *
 * Current look: Version B · Field notebook (Oct 13, 2026). Colors, type and
 * rules come from docs/brand/turnip-brand-guide.md; the screens it was drawn
 * from are on the design canvas (see docs/brand/HANDOFF.md).
 */

export const palette = {
  // Core
  lavender: '#8B86B8', // Turnip Lavender
  lavenderMist: '#F6F5FB', // page background
  lavender100: '#E5E4F1',
  lavender200: '#CBC9DF',
  plum: '#5D5A87', // Glasses Plum
  sprout: '#B7D77F', // Sprout Green: go / play
  sproutShadow: '#7FA548',
  sproutText: '#3F6B1A', // green text and "done" marks
  ink: '#37364F', // Deep Ink: body text
  slate: '#585878', // Glasses Slate: secondary text, "Go home"
  slateShadow: '#3F3F58',
  slate100: '#DADAE1',
  slateMist: '#A9AABB',

  // Secondary (Oct 13): teal, yellow and brown go together
  teal: '#3E7F80', // Heritage Teal
  teal700: '#346266', // menu bar, Ocean Friends card
  teal800: '#2D4C54',
  seaGlass: '#D6ECEA',
  sunny: '#F4CF4A', // Sunny Yellow: small sparks only
  sunnyShadow: '#D9AE2A',
  bark: '#7A5236', // Earth Brown: default dark card
  coral: '#C4524A', // Heritage Coral: remove / warnings only, never play

  // World colors: navigation inside the content worlds
  nature: '#2E7D4F',
  animals: '#F2A53A',
  earth: '#2B63C0',
  biology: '#6E48C8',
  deepSea: '#1F5A84',

  nightInk: '#1E1D2B',
  white: '#FFFFFF',
  black: '#000000',
} as const;

/** Semantic colors — screens use these names, never raw palette values. */
export const colors = {
  background: palette.lavenderMist,
  /** Top band behind Turnip's speech bubble. */
  headerBand: palette.sprout,
  textOnHeaderBand: palette.sproutText,
  surface: palette.white,
  border: palette.slate100,
  text: palette.ink,
  textMuted: palette.slate,
  textOnDark: palette.white,
  textOnDarkMuted: '#EEEAF4',
  heading: palette.ink,
  /** Play, continue, "keep watching": green means go. */
  go: palette.sprout,
  goShadow: palette.sproutShadow,
  textOnGo: palette.ink,
  /** "Go home" and other quiet actions. */
  quiet: palette.slate,
  quietShadow: palette.slateShadow,
  /** Highlights and rewards: "New", stars, badges. */
  highlight: palette.sunny,
  textOnHighlight: palette.ink,
  /** Progress fills and the current stop. */
  progress: palette.animals,
  danger: palette.coral,
  tabBar: palette.teal700,
  tabInactive: palette.seaGlass,
  tabActive: palette.sprout,
  darkCard: palette.bark,
  shadow: palette.ink,
  playerBackground: palette.black,
  playerChrome: 'rgba(30, 29, 43, 0.82)',
  playerButton: 'rgba(255, 255, 255, 0.16)',
  scrim: 'rgba(30, 29, 43, 0.6)',
} as const;

/** Bold card colors for topics and video placeholders. */
export const tileColors = [
  palette.earth,
  palette.animals,
  palette.biology,
  palette.nature,
  palette.deepSea,
  palette.teal700,
] as const;

/** Soft drop shadow used on white cards and photo stickers. */
export const cardShadow = {
  shadowColor: palette.ink,
  shadowOpacity: 0.16,
  shadowRadius: 12,
  shadowOffset: { width: 0, height: 6 },
  elevation: 4,
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;

export const radius = {
  sm: 8,
  md: 14,
  lg: 18,
  xl: 24,
  full: 9999,
} as const;

/**
 * Fraunces (Soft) for big moments, DM Sans for everything else. Embedded at
 * build time by the expo-font config plugin and loaded at runtime as well.
 * Use the family for the weight — don't combine with `fontWeight`.
 */
export const fonts = {
  display: 'FrauncesSoft-SemiBold',
  regular: 'DMSans-Regular',
  medium: 'DMSans-Medium',
  semiBold: 'DMSans-SemiBold',
  bold: 'DMSans-Bold',
} as const;

/**
 * Mobile type scale from the brand guide §3 (compact / iPhone sizes).
 * The app uses DM Sans throughout (Sarah, Oct 13); Fraunces stays with the
 * company brand (logo, website, App Store), so it isn't used for app headings.
 */
export const typography = {
  display: { fontFamily: fonts.bold, fontSize: 32, lineHeight: 38 },
  section: { fontFamily: fonts.bold, fontSize: 22, lineHeight: 28 },
  title: { fontFamily: fonts.bold, fontSize: 24, lineHeight: 30 },
  heading: { fontFamily: fonts.bold, fontSize: 20, lineHeight: 26 },
  kidLabel: { fontFamily: fonts.semiBold, fontSize: 18, lineHeight: 22 },
  body: { fontFamily: fonts.regular, fontSize: 17, lineHeight: 24 },
  button: { fontFamily: fonts.bold, fontSize: 18, lineHeight: 22 },
  label: { fontFamily: fonts.bold, fontSize: 15, lineHeight: 19 },
  caption: { fontFamily: fonts.medium, fontSize: 14, lineHeight: 18 },
} as const;

export type TypographyVariant = keyof typeof typography;

/** Minimum touch target for small hands (Apple's minimum is 44pt). */
export const MIN_TOUCH = 64;
