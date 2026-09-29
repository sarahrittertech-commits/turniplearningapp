import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/ui/AppText';
import { ScreenHeader } from '@/components/ui/ScreenHeader';
import { useLayout } from '@/theme/layout';
import { colors, radius, spacing } from '@/theme/tokens';

/** Downloaded videos. The download manager arrives in Phase 4 (offline). */
export default function MyVideosScreen() {
  const { gutter } = useLayout();
  return (
    <View style={styles.screen}>
      <ScreenHeader title="My Videos" />
      <View style={[styles.empty, { paddingHorizontal: gutter }]}>
        <View style={styles.iconBox}>
          <AppText style={styles.icon}>⬇️</AppText>
        </View>
        <AppText variant="title" style={styles.center}>
          No saved videos yet
        </AppText>
        <AppText color={colors.textOnDarkMuted} style={styles.center}>
          Ask a grown-up to save videos so you can watch them in the car!
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.md,
  },
  iconBox: {
    width: 112,
    height: 112,
    borderRadius: radius.xl,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 52,
    lineHeight: 62,
  },
  center: {
    textAlign: 'center',
    maxWidth: 420,
  },
});
