import { router, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { VideoCard } from '@/components/cards';
import { AppText } from '@/components/ui/AppText';
import { Icon } from '@/components/ui/Icon';
import { Tappable } from '@/components/ui/Tappable';
import { Thumbnail } from '@/components/ui/Thumbnail';
import { useTopic, useVideos } from '@/data/CatalogProvider';
import { useLayout } from '@/theme/layout';
import { cardShadow, colors, MIN_TOUCH, palette, radius, spacing } from '@/theme/tokens';

export default function TopicScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const topic = useTopic(slug);
  const videos = useVideos({ topicId: topic?.id });
  const insets = useSafeAreaInsets();
  const { gutter, width, gridColumns, sizeClass } = useLayout();

  const columns = Math.max(1, gridColumns - 1);
  const gap = spacing.lg;
  const cardWidth = Math.floor((width - gutter * 2 - gap * (columns - 1)) / columns);
  const bandColor = topic?.color ?? colors.tabBar;
  // Mango is the one bold color that takes dark text.
  const ink = bandColor.toUpperCase() === palette.animals ? colors.text : colors.textOnDark;
  const cover = videos.find((v) => v.id === topic?.coverVideoId) ?? videos[0];
  const regular = sizeClass === 'regular';

  return (
    <View style={styles.screen}>
      <View style={[styles.band, { backgroundColor: bandColor, paddingTop: insets.top + spacing.sm, paddingHorizontal: gutter }]}>
        <Tappable
          style={[styles.back, cardShadow]}
          onPress={() => (router.canGoBack() ? router.back() : router.replace('/'))}
          accessibilityRole="button"
          accessibilityLabel="Go back"
        >
          <Icon name="arrowLeft" size={26} />
        </Tappable>
        <View style={styles.bandRow}>
          <View style={styles.bandText}>
            <AppText
              variant="display"
              color={ink}
              accessibilityRole="header"
              style={regular ? { fontSize: 56, lineHeight: 62 } : { fontSize: 44, lineHeight: 50 }}
            >
              {topic?.name ?? 'Topic'}
            </AppText>
            <AppText variant="label" color={ink}>
              {videos.length} {videos.length === 1 ? 'video' : 'videos'}
            </AppText>
          </View>
          {cover && (
            <View style={[styles.photoSticker, cardShadow]}>
              <Thumbnail video={cover} style={{ width: regular ? 160 : 112, height: regular ? 120 : 84 }} />
            </View>
          )}
        </View>
      </View>

      <ScrollView contentContainerStyle={[styles.grid, { paddingHorizontal: gutter, gap }]}>
        {videos.length === 0 ? (
          <AppText>No videos here yet. Check back soon!</AppText>
        ) : (
          videos.map((v) => <VideoCard key={v.id} video={v} width={cardWidth} />)
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  band: {
    paddingBottom: spacing.xl,
    gap: spacing.md,
    borderBottomLeftRadius: radius.xl,
    borderBottomRightRadius: radius.xl,
  },
  back: {
    width: MIN_TOUCH,
    height: MIN_TOUCH,
    borderRadius: radius.full,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bandRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: spacing.md,
  },
  bandText: {
    flex: 1,
    gap: spacing.xs,
  },
  photoSticker: {
    backgroundColor: colors.surface,
    padding: 5,
    borderRadius: radius.lg,
    transform: [{ rotate: '3deg' }],
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: spacing.xl,
    paddingBottom: spacing.xxl,
  },
});
