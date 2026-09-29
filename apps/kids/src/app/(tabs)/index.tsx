import { ScrollView, StyleSheet, View } from 'react-native';

import { JourneyCard, TopicTile, VideoCard } from '@/components/cards';
import { AppText } from '@/components/ui/AppText';
import { Rail } from '@/components/ui/Rail';
import { ScreenHeader } from '@/components/ui/ScreenHeader';
import { useCatalogState, useJourneys, useTopics, useVideos } from '@/data/CatalogProvider';
import { useLayout } from '@/theme/layout';
import { spacing } from '@/theme/tokens';

export default function HomeScreen() {
  const state = useCatalogState();
  const videos = useVideos();
  const topics = useTopics();
  const journeys = useJourneys();
  const { gutter, width, sizeClass } = useLayout();

  const newVideos = videos.filter((v) => v.isNew);
  const journeyWidth =
    sizeClass === 'regular' ? (width - gutter * 2 - spacing.lg) / 2 : width - gutter * 2;

  return (
    <View style={styles.screen}>
      <ScreenHeader title="Home" />
      {state.status === 'error' ? (
        <View style={[styles.message, { padding: gutter }]}>
          <AppText variant="title">😕 Oops!</AppText>
          <AppText>We couldn’t load the videos. Please try again.</AppText>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          {newVideos.length > 0 && (
            <Rail title="New for you">
              {newVideos.map((v) => (
                <VideoCard key={v.id} video={v} />
              ))}
            </Rail>
          )}

          <View style={[styles.journeys, { paddingHorizontal: gutter }]}>
            <AppText variant="heading" accessibilityRole="header">
              Adventures
            </AppText>
            <View style={styles.journeyRow}>
              {journeys.map((j) => (
                <JourneyCard key={j.id} journey={j} width={journeyWidth} />
              ))}
            </View>
          </View>

          <Rail title="Pick a topic">
            {topics.map((t) => (
              <TopicTile key={t.id} topic={t} />
            ))}
          </Rail>

          <Rail title="All videos">
            {videos.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </Rail>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    paddingVertical: spacing.xl,
    gap: spacing.xxl,
  },
  journeys: {
    gap: spacing.md,
  },
  journeyRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.lg,
  },
  message: {
    gap: spacing.sm,
  },
});
