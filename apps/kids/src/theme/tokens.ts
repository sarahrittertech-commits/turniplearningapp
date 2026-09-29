/**
 * Turnip design tokens — the single source of truth for how the app looks.
 *
 * Every screen and component reads from here. A redesign should mostly mean
 * editing this file (and `components/ui`), not touching screens.
 *
 * Current values come from the Magic Patterns design in `design/app-screens`.
 */

export const palette = {
  purple900: '#2D1050',
  purple700: '#5A2D82',
  purple600: '#73318f',
  purple400: '#ab73d1',
  green500: '#A2CE73',
  green700: '#1DB954',
  red500: '#FF4757',
  blue500: '#4A90D9',
  navy900: '#1a1a2e',

  sky200: '#B8D8F0',
  sky400: '#8AB4F8',
  cyan400: '#4DD0E1',
  violet400: '#A78BFA',
  sand200: '#FFE0A0',
  coral400: '#FF7E67',
  orange300: '#FFB347',
  mint100: '#D4F0C8',
  pink300: '#FF9A9E',

  white: '#FFFFFF',
  black: '#000000',
} as const;

/** Semantic colors — screens use these names, never raw palette values. */
export const colors = {
  background: palette.purple400,
  header: palette.purple600,
  surface: palette.purple700,
  textOnDark: palette.white,
  textOnDarkMuted: 'rgba(255,255,255,0.75)',
  textOnLight: palette.purple900,
  accent: palette.green500,
  danger: palette.red500,
  tabBar: palette.navy900,
  tabInactive: 'rgba(255,255,255,0.45)',
  playerBackground: palette.black,
  playerChrome: palette.navy900,
  scrim: 'rgba(0,0,0,0.3)',
  badge: palette.red500,
} as const;

/** Rotating tile colors for cards and topics. */
export const tileColors = [
  palette.sky400,
  palette.cyan400,
  palette.violet400,
  palette.orange300,
  palette.coral400,
  palette.green500,
  palette.pink300,
  palette.sand200,
] as const;

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
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
} as const;

/**
 * Quicksand, embedded at build time by the expo-font config plugin.
 * Use the family for the weight — don't combine with `fontWeight`.
 */
export const fonts = {
  regular: 'Quicksand-Regular',
  medium: 'Quicksand-Medium',
  semiBold: 'Quicksand-SemiBold',
  bold: 'Quicksand-Bold',
} as const;

export const typography = {
  display: { fontFamily: fonts.bold, fontSize: 32, lineHeight: 38 },
  title: { fontFamily: fonts.bold, fontSize: 24, lineHeight: 30 },
  heading: { fontFamily: fonts.bold, fontSize: 20, lineHeight: 26 },
  body: { fontFamily: fonts.medium, fontSize: 16, lineHeight: 22 },
  label: { fontFamily: fonts.bold, fontSize: 14, lineHeight: 18 },
  caption: { fontFamily: fonts.semiBold, fontSize: 12, lineHeight: 16 },
} as const;

export type TypographyVariant = keyof typeof typography;

/** Minimum touch target for small hands (Apple's minimum is 44pt). */
export const MIN_TOUCH = 64;
