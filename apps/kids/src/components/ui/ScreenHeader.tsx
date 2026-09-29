import { Image } from 'expo-image';
import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppText } from './AppText';
import { useLayout } from '@/theme/layout';
import { colors, radius, spacing } from '@/theme/tokens';

/** Mascot + title bar used at the top of every tab. */
export function ScreenHeader({ title, right }: { title: string; right?: ReactNode }) {
  const insets = useSafeAreaInsets();
  const { gutter, sizeClass } = useLayout();
  const mascotSize = sizeClass === 'regular' ? 52 : 44;

  return (
    <View style={[styles.header, { paddingTop: insets.top + spacing.sm, paddingHorizontal: gutter }]}>
      <View style={styles.left}>
        <View style={[styles.mascot, { width: mascotSize, height: mascotSize }]}>
          <Image
            source={require('../../../assets/images/mascot.png')}
            style={styles.mascotImage}
            contentFit="contain"
            accessibilityIgnoresInvertColors
          />
        </View>
        <AppText variant={sizeClass === 'regular' ? 'display' : 'title'} accessibilityRole="header">
          {title}
        </AppText>
      </View>
      {right}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.header,
    paddingBottom: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  mascot: {
    borderRadius: radius.md,
    backgroundColor: '#FFFFFF',
    padding: 4,
  },
  mascotImage: {
    flex: 1,
  },
});
