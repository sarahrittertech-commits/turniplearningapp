import Svg, { Circle, Path, Rect } from 'react-native-svg';

import { colors } from '@/theme/tokens';

/**
 * Line icons (Lucide style, 2.5 px stroke) — the brand's replacement for
 * emoji pictures. Paths come from the design canvas and lucide.dev (ISC).
 */
const ICONS = {
  home: [
    <Path key="1" d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />,
    <Path
      key="2"
      d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
    />,
  ],
  compass: [
    <Circle key="1" cx="12" cy="12" r="10" />,
    <Path key="2" d="m16.2 7.8-2.1 6.3-6.3 2.1 2.1-6.3z" />,
  ],
  backpack: [
    <Path key="1" d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />,
    <Path key="2" d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />,
    <Path key="3" d="M8 22v-6h8v6" />,
  ],
  arrowLeft: [<Path key="1" d="M19 12H5" />, <Path key="2" d="m12 19-7-7 7-7" />],
  chevronRight: [<Path key="1" d="m9 18 6-6-6-6" />],
  check: [<Path key="1" d="M20 6 9 17l-5-5" />],
  flag: [<Path key="1" d="M4 22V4" />, <Path key="2" d="M4 4h13l-2 4 2 4H4" />],
  again: [
    <Path key="1" d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />,
    <Path key="2" d="M3 3v5h5" />,
  ],
  captions: [
    <Rect key="1" x="3" y="5" width="18" height="14" rx="2" />,
    <Path key="2" d="M7 15h4M15 15h2M7 11h2M13 11h4" />,
  ],
  lock: [<Rect key="1" x="5" y="11" width="14" height="10" rx="2" />, <Path key="2" d="M8 11V7a4 4 0 0 1 8 0v4" />],
  download: [<Path key="1" d="M12 3v12" />, <Path key="2" d="m7 10 5 5 5-5" />, <Path key="3" d="M5 21h14" />],
  waves: [
    <Path key="1" d="M2 9c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" />,
    <Path key="2" d="M2 15c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" />,
  ],
  paw: [
    <Circle key="1" cx="11" cy="4" r="2" />,
    <Circle key="2" cx="18" cy="8" r="2" />,
    <Circle key="3" cx="20" cy="16" r="2" />,
    <Path key="4" d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.8 1C6.5 17.5 4.5 16.8 4.5 16.8A3.5 3.5 0 0 1 5.5 10Z" />,
  ],
  leaf: [
    <Path key="1" d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z" />,
    <Path key="2" d="M2 21c0-3 1.9-5.4 5.1-6C9.5 14.5 12 13 13 12" />,
  ],
  microscope: [
    <Path key="1" d="M6 18h8" />,
    <Path key="2" d="M3 22h18" />,
    <Path key="3" d="M14 22a7 7 0 1 0 0-14h-1" />,
    <Path key="4" d="M9 14h2" />,
    <Path key="5" d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />,
    <Path key="6" d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />,
  ],
  fish: [
    <Path key="1" d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" />,
    <Path key="2" d="M18 12v.5" />,
    <Path key="3" d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />,
    <Path key="4" d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" />,
  ],
  flask: [
    <Path
      key="1"
      d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"
    />,
    <Path key="2" d="M6.453 15h11.094" />,
    <Path key="3" d="M8.5 2h7" />,
  ],
  tree: [
    <Path
      key="1"
      d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"
    />,
    <Path key="2" d="M12 22v-3" />,
  ],
  mountain: [<Path key="1" d="m8 3 4 8 5-5 5 15H2L8 3z" />],
} as const;

/** Solid shapes: these read better filled at kid sizes. */
const FILLED = {
  play: <Path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" />,
  pause: [<Rect key="1" x="6" y="4" width="4" height="16" rx="1" />, <Rect key="2" x="14" y="4" width="4" height="16" rx="1" />],
} as const;

export type IconName = keyof typeof ICONS | keyof typeof FILLED;

export function Icon({
  name,
  size = 24,
  color = colors.text,
  strokeWidth = 2.5,
}: {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
}) {
  if (name in FILLED) {
    return (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill={color} accessible={false}>
        {FILLED[name as keyof typeof FILLED]}
      </Svg>
    );
  }
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      accessible={false}
    >
      {ICONS[name as keyof typeof ICONS]}
    </Svg>
  );
}
