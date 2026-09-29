import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { AppText } from './ui/AppText';
import { Tappable } from './ui/Tappable';
import { Thumbnail } from './ui/Thumbnail';
import type { Journey, Topic, Video } from '@/data/types';
import { formatDuration } from '@/lib/mux';
import { useLayout } from '@/theme/layout';
import { colors, radius, spacing } from '@/theme/tokens';

export function openVideo(videoId: string) {
  router.push({ pathname: '/video/[id]', params: { id: videoId } });
}

/** 16:9 video card with title — used in rails and grids. */
export function VideoCard({ video, width }: { video: Video; width?: number }) {
  const { videoCardWidth } = useLayout();
  const w = width ?? videoCardWidth;

  return (
    <Tappable
      style={{ width: w, gap: spacing.sm }}
      onPress={() => openVideo(video.id)}
      accessibilityRole="button"
      accessibilityLabel={`Play ${video.title}`}
    >
      <View>
        <Thumbnail video={video} style={{ width: w, height: Math.round(w * 0.5625) }} />
        {video.isNew && (
          <View style={[styles.badge, styles.newBadge]}>
            <AppText variant="caption">NEW</AppText>
          </View>
        )}
        {video.durationSeconds > 0 && (
          <View style={[styles.badge, styles.durationBadge]}>
            <AppText variant="caption">{formatDuration(video.durationSeconds)}</AppText>
          </View>
        )}
      </View>
      <AppText variant="label" numberOfLines={1}>
        {video.title}
      </AppText>
    </Tappable>
  );
}

/** Square colorful topic tile. */
export function TopicTile({ topic, size }: { topic: Topic; size?: number }) {
  const { cardSize } = useLayout();
  const s = size ?? cardSize;

  return (
    <Tappable
      style={[styles.topic, { width: s, height: s, backgroundColor: topic.color }]}
      onPress={() => router.push({ pathname: '/topic/[slug]', params: { slug: topic.slug } })}
      accessibilityRole="button"
      accessibilityLabel={topic.name}
    >
      <AppText style={{ fontSize: s * 0.36, lineHeight: s * 0.44 }}>{topic.emoji}</AppText>
      <AppText variant="label" color={colors.textOnLight}>
        {topic.name}
      </AppText>
    </Tappable>
  );
}

/** Wide card for a curated journey (playlist). Starts the first video. */
export function JourneyCard({ journey, width }: { journey: Journey; width: number }) {
  const first = journey.videoIds[0];
  return (
    <Tappable
      style={[styles.journey, { width, backgroundColor: journey.color }]}
      onPress={() => first && openVideo(first)}
      accessibilityRole="button"
      accessibilityLabel={`${journey.title}, ${journey.videoIds.length} videos`}
    >
      <View style={{ flex: 1, gap: spacing.xs }}>
        <AppText variant="title" color={colors.textOnLight}>
          {journey.title}
        </AppText>
        <AppText variant="body" color={colors.textOnLight}>
          {journey.description} · {journey.videoIds.length} videos
        </AppText>
      </View>
      <AppText style={styles.journeyEmoji}>{journey.emoji}</AppText>
    </Tappable>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: radius.sm,
  },
  newBadge: {
    top: spacing.sm,
    left: spacing.sm,
    backgroundColor: colors.badge,
  },
  durationBadge: {
    bottom: spacing.sm,
    right: spacing.sm,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  topic: {
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xs,
  },
  journey: {
    minHeight: 120,
    borderRadius: radius.lg,
    padding: spacing.xl,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  journeyEmoji: {
    fontSize: 64,
    lineHeight: 76,
  },
});
