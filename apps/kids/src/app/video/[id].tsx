import * as ScreenOrientation from 'expo-screen-orientation';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { KidPlayer } from '@/components/player/KidPlayer';
import { AppText } from '@/components/ui/AppText';
import { Tappable } from '@/components/ui/Tappable';
import { useCatalogState, useUpNext, useVideo } from '@/data/CatalogProvider';
import { useLayout } from '@/theme/layout';
import { colors, radius, spacing } from '@/theme/tokens';

export default function VideoScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const state = useCatalogState();
  const video = useVideo(id);
  const upNext = useUpNext(id);
  const { sizeClass } = useLayout();

  // Phones watch sideways; iPads keep whatever orientation they're in.
  useEffect(() => {
    if (sizeClass !== 'compact') return;
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE).catch(() => {});
    return () => {
      ScreenOrientation.unlockAsync().catch(() => {});
    };
  }, [sizeClass]);

  const close = () => (router.canGoBack() ? router.back() : router.replace('/'));

  if (!video) {
    return (
      <View style={styles.missing}>
        <AppText variant="title">{state.status === 'loading' ? 'Loading…' : "We can't find that video 🙈"}</AppText>
        <Tappable style={styles.pill} onPress={close}>
          <AppText variant="heading">Go Home</AppText>
        </Tappable>
      </View>
    );
  }

  return (
    <KidPlayer
      key={video.id}
      video={video}
      upNext={upNext}
      onClose={close}
      onPlayNext={(nextId) => router.setParams({ id: nextId })}
    />
  );
}

const styles = StyleSheet.create({
  missing: {
    flex: 1,
    backgroundColor: colors.playerBackground,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.lg,
  },
  pill: {
    backgroundColor: colors.danger,
    paddingHorizontal: spacing.xxl,
    paddingVertical: spacing.md,
    borderRadius: radius.lg,
  },
});
