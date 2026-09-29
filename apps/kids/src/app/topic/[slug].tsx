import { router, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { VideoCard } from '@/components/cards';
import { AppText } from '@/components/ui/AppText';
import { Tappable } from '@/components/ui/Tappable';
import { useTopic, useVideos } from '@/data/CatalogProvider';
import { useLayout } from '@/theme/layout';
import { colors, MIN_TOUCH, radius, spacing } from '@/theme/tokens';

export default function TopicScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const topic = useTopic(slug);
  const videos = useVideos({ topicId: topic?.id });
  const insets = useSafeAreaInsets();
  const { gutter, width, gridColumns } = useLayout();

  const columns = Math.max(1, gridColumns - 1);
  const gap = spacing.lg;
  const cardWidth = Math.floor((width - gutter * 2 - gap * (columns - 1)) / columns);

  return (
    <View style={[styles.screen, { backgroundColor: topic?.color ?? colors.background }]}>
      <View style={[styles.header, { paddingTop: insets.top + spacing.sm, paddingHorizontal: gutter }]}>
        <Tappable
          style={styles.back}
          onPress={() => (router.canGoBack() ? router.back() : router.replace('/'))}
          accessibilityRole="button"
          accessibilityLabel="Go back"
        >
          <AppText variant="title" color={colors.textOnLight}>
            ←
          </AppText>
        </Tappable>
        <AppText variant="display" color={colors.textOnLight} accessibilityRole="header">
          {topic ? `${topic.emoji} ${topic.name}` : 'Topic'}
        </AppText>
      </View>

      <ScrollView contentContainerStyle={[styles.grid, { paddingHorizontal: gutter, gap }]}>
        {videos.length === 0 ? (
          <AppText color={colors.textOnLight}>No videos here yet — check back soon!</AppText>
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
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.lg,
    paddingBottom: spacing.lg,
  },
  back: {
    width: MIN_TOUCH,
    height: MIN_TOUCH,
    borderRadius: radius.full,
    backgroundColor: 'rgba(255,255,255,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: spacing.xxl,
  },
});
