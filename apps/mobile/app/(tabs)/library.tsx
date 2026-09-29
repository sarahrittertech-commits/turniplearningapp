import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors, fonts, radius, spacing } from '../../lib/theme';

export default function LibraryScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <SafeAreaView edges={['top']}>
          <View style={styles.headerRow}>
            <View style={styles.mascotBox}>
              <Text style={styles.mascotEmoji}>🌱</Text>
            </View>
            <Text style={styles.headerTitle}>My Videos</Text>
          </View>
        </SafeAreaView>
      </View>

      <View style={styles.empty}>
        <View style={styles.emptyIconBox}>
          <Text style={styles.emptyEmoji}>⬇️</Text>
        </View>
        <Text style={styles.emptyTitle}>No videos saved yet</Text>
        <Text style={styles.emptyText}>
          Save videos from the home screen to watch them without internet!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.purpleMid,
  },
  header: {
    backgroundColor: colors.purpleDark,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
  },
  mascotBox: {
    width: 48,
    height: 48,
    borderRadius: radius.md,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mascotEmoji: {
    fontSize: 28,
    fontFamily: fonts.regular,
  },
  headerTitle: {
    color: colors.white,
    fontSize: 26,
    fontWeight: '700',
    fontFamily: fonts.bold,
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 60,
    gap: spacing.lg,
  },
  emptyIconBox: {
    width: 120,
    height: 120,
    borderRadius: radius.xl,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  emptyEmoji: {
    fontSize: 56,
    fontFamily: fonts.regular,
  },
  emptyTitle: {
    fontSize: 26,
    fontWeight: '700',
    fontFamily: fonts.bold,
    color: colors.white,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: 'rgba(255,255,255,0.75)',
    textAlign: 'center',
    lineHeight: 24,
  },
});
