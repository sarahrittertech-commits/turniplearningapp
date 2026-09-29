/**
 * Turnip design tokens — translated from Magic Patterns (Chakra UI) to React Native values.
 *
 * Colors come directly from the Magic Patterns design files.
 * Spacing/radius values are converted from Chakra/rem units to logical pixels (pt).
 */

export const colors = {
  // --- Primary palette ---
  purpleDark: '#73318f',   // header bg, primary button
  purpleMid: '#ab73d1',    // home screen bg
  purpleDeep: '#2D1050',   // dark text on light backgrounds
  greenPrimary: '#A2CE73', // browse/search bg, player bottom bar
  greenSpotify: '#1DB954', // "Full Episode" badge, settings icon
  red: '#FF4757',          // back button, "NEW" badge, download icon
  blue: '#4A90D9',         // secondary control icons, cast icon
  darkNav: '#1a1a2e',      // video player bg, nav dark background

  // --- Content card backgrounds ---
  cardBlue: '#B8D8F0',
  cardLightBlue: '#8AB4F8',
  cardCyan: '#4DD0E1',
  cardViolet: '#A78BFA',
  cardYellow: '#FFE0A0',
  cardOrange: '#FF7E67',
  cardOrangeDark: '#FFB347',
  cardGreen: '#D4F0C8',
  cardPink: '#FF9A9E',

  // --- Neutral ---
  white: '#FFFFFF',
  black: '#000000',
  overlay: 'rgba(0,0,0,0.3)',
  overlayDark: 'rgba(0,0,0,0.65)',
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,    // Chakra 2xl (borderRadius="2xl")
  xl: 24,    // Chakra 3xl
  full: 9999,
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;

// Content card square size (Chakra w={44}/h={44} = 11rem ≈ 176pt → 160pt)
export const CONTENT_CARD_SIZE = 160;
export const CONTENT_CARD_INNER = 128;

// Show avatar size (Chakra w={20}/h={20} = 80pt)
export const SHOW_AVATAR_SIZE = 80;

// Video card width (Chakra 280–320px → 260pt)
export const VIDEO_CARD_WIDTH = 260;
export const VIDEO_CARD_HEIGHT = 160;

// Player control button (Chakra w="240px" h="200px" → 200×160pt)
export const PLAYER_BTN_WIDTH = 200;
export const PLAYER_BTN_HEIGHT = 160;

// Control icon box (Chakra w={16}/h={16} → 64pt)
export const CONTROL_ICON_SIZE = 64;

/**
 * Quicksand font family.
 * In React Native, fontWeight is ignored for custom fonts on iOS —
 * use the correct fontFamily key for each weight instead.
 *
 * Usage:  fontFamily: fonts.bold   (replaces fontWeight: '700')
 *         fontFamily: fonts.semiBold  (replaces fontWeight: '600')
 *         fontFamily: fonts.medium    (replaces fontWeight: '500')
 *         fontFamily: fonts.regular   (default / fontWeight: '400')
 */
export const fonts = {
  regular:  'Quicksand-Regular',
  medium:   'Quicksand-Medium',
  semiBold: 'Quicksand-SemiBold',
  bold:     'Quicksand-Bold',
} as const;
