import type { ReactNode } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { AppText } from './AppText';
import { useLayout } from '@/theme/layout';
import { spacing } from '@/theme/tokens';

/** A titled, horizontally scrolling row of cards. */
export function Rail({ title, children }: { title: string; children: ReactNode }) {
  const { gutter } = useLayout();
  return (
    <View style={styles.section}>
      <AppText variant="section" style={{ paddingHorizontal: gutter }} accessibilityRole="header">
        {title}
      </AppText>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[styles.row, { paddingHorizontal: gutter }]}
      >
        {children}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: spacing.md,
  },
  row: {
    gap: spacing.lg,
    // Room for card shadows so they aren't clipped by the scroll view.
    paddingTop: spacing.xs,
    paddingBottom: spacing.lg,
  },
});
