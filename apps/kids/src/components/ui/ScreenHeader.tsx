import { useCallback, useState, type ReactNode } from 'react';
import {
  LayoutAnimation,
  StyleSheet,
  View,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppText } from './AppText';
import { Mascot } from './Mascot';
import { useLayout } from '@/theme/layout';
import { colors, radius, spacing } from '@/theme/tokens';

/** Scroll distance (pt) after which the header slims down. */
const COLLAPSE_AT = 40;

/**
 * Lets a screen slim its header while the kid scrolls. Pass `onScroll` to the
 * screen's ScrollView and `collapsed` to its ScreenHeader.
 */
export function useCollapsingHeader() {
  const [collapsed, setCollapsed] = useState(false);
  const onScroll = useCallback((e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const next = e.nativeEvent.contentOffset.y > COLLAPSE_AT;
    setCollapsed((prev) => {
      if (prev !== next) LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      return next;
    });
  }, []);
  return { collapsed, onScroll, scrollEventThrottle: 32 } as const;
}

/**
 * Top of every tab: a Sprout Green band where Turnip (shown whole, never
 * cropped in a circle) says the screen's question in a speech bubble.
 * When `collapsed`, it slims to a small Turnip and a one-line bubble.
 */
export function ScreenHeader({
  title,
  eyebrow,
  right,
  collapsed = false,
}: {
  title: string;
  eyebrow?: string;
  right?: ReactNode;
  collapsed?: boolean;
}) {
  const insets = useSafeAreaInsets();
  const { gutter, sizeClass } = useLayout();
  const regular = sizeClass === 'regular';
  const mascotHeight = collapsed ? 40 : regular ? 84 : 68;

  return (
    <View
      style={[
        styles.band,
        collapsed && styles.bandCollapsed,
        { paddingTop: insets.top + (collapsed ? spacing.xs : spacing.sm), paddingHorizontal: gutter },
      ]}
    >
      {eyebrow && !collapsed && (
        <AppText variant="caption" color={colors.textOnHeaderBand}>
          {eyebrow}
        </AppText>
      )}
      <View style={styles.row}>
        <Mascot height={mascotHeight} outline={collapsed ? 2 : 3} />
        <View style={[styles.bubble, collapsed && styles.bubbleCollapsed]}>
          <View style={styles.tail} />
          <AppText
            variant={collapsed ? 'label' : 'title'}
            accessibilityRole="header"
            numberOfLines={collapsed ? 1 : undefined}
            style={!collapsed && regular ? { fontSize: 28, lineHeight: 34 } : undefined}
          >
            {title}
          </AppText>
        </View>
        {right}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  band: {
    backgroundColor: colors.headerBand,
    paddingBottom: spacing.lg,
    borderBottomLeftRadius: radius.xl,
    borderBottomRightRadius: radius.xl,
    gap: spacing.xs,
    zIndex: 1,
  },
  bandCollapsed: {
    paddingBottom: spacing.sm,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  bubble: {
    flexShrink: 1,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  bubbleCollapsed: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  // A small rotated square makes the bubble's tail, pointing at Turnip.
  tail: {
    position: 'absolute',
    left: -6,
    top: '50%',
    marginTop: -7,
    width: 14,
    height: 14,
    backgroundColor: colors.surface,
    transform: [{ rotate: '45deg' }],
  },
});
