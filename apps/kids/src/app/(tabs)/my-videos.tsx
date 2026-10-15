import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/ui/AppText';
import { Mascot } from '@/components/ui/Mascot';
import { ScreenHeader } from '@/components/ui/ScreenHeader';
import { useLayout } from '@/theme/layout';
import { cardShadow, colors, radius, spacing } from '@/theme/tokens';

/** Backpack: downloaded videos. The download manager arrives in Phase 4 (offline). */
export default function BackpackScreen() {
  const { gutter } = useLayout();
  return (
    <View style={styles.screen}>
      <ScreenHeader eyebrow="Backpack" title="Packing for a trip?" />
      <View style={[styles.content, { paddingHorizontal: gutter }]}>
        <AppText color={colors.textMuted}>Videos packed in your backpack play without internet.</AppText>
        <View style={[styles.emptyCard, cardShadow]}>
          <Mascot height={72} />
          <View style={styles.emptyText}>
            <AppText variant="heading" color={colors.textOnDark}>
              Your backpack is empty
            </AppText>
            <AppText color={colors.textOnDarkMuted}>Going on a trip? Ask a grown-up to pack some videos.</AppText>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    paddingTop: spacing.xl,
    gap: spacing.lg,
  },
  emptyCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.lg,
    backgroundColor: colors.darkCard,
    borderRadius: radius.xl,
    padding: spacing.lg,
    maxWidth: 560,
  },
  emptyText: {
    flex: 1,
    gap: spacing.xs,
  },
});
