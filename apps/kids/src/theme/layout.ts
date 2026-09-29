import { useWindowDimensions } from 'react-native';

import { spacing } from './tokens';

/**
 * Two layout classes, based on window width rather than device type, so iPad
 * split view gets the phone layout automatically.
 *
 *   compact  — iPhone (any orientation), narrow iPad windows
 *   regular  — iPad full screen / wide windows
 */
export type SizeClass = 'compact' | 'regular';

const REGULAR_MIN_WIDTH = 700;

export interface Layout {
  sizeClass: SizeClass;
  width: number;
  height: number;
  isLandscape: boolean;
  /** Horizontal page padding */
  gutter: number;
  /** Square card size for rails */
  cardSize: number;
  /** Video card (16:9-ish) width for rails */
  videoCardWidth: number;
  /** Columns in grid layouts */
  gridColumns: number;
}

export function useLayout(): Layout {
  const { width, height } = useWindowDimensions();
  const sizeClass: SizeClass = width >= REGULAR_MIN_WIDTH ? 'regular' : 'compact';
  const regular = sizeClass === 'regular';

  return {
    sizeClass,
    width,
    height,
    isLandscape: width > height,
    gutter: regular ? spacing.xxl : spacing.lg,
    cardSize: regular ? 170 : 130,
    videoCardWidth: regular ? 280 : Math.min(240, width * 0.62),
    gridColumns: regular ? 4 : 2,
  };
}
