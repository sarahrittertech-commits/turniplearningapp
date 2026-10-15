import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { AppText } from './ui/AppText';
import { Icon, type IconName } from './ui/Icon';
import { Tappable } from './ui/Tappable';
import { Thumbnail } from './ui/Thumbnail';
import { useVideos } from '@/data/CatalogProvider';
import type { Journey, Topic, Video } from '@/data/types';
import { formatDuration } from '@/lib/mux';
import { useLayout } from '@/theme/layout';
import { cardShadow, colors, palette, radius, spacing } from '@/theme/tokens';

export function openVideo(videoId: string) {
  router.push({ pathname: '/video/[id]', params: { id: videoId } });
}

/** Line icon for each topic; anything new falls back to the compass. */
const TOPIC_ICONS: Record<string, IconName> = {
  ocean: 'waves',
  animals: 'paw',
  science: 'microscope',
  trees: 'tree',
  frogs: 'leaf',
  whales: 'fish',
  experiments: 'flask',
};

/** Mango is the one bold color that needs dark text (brand guide: world colors). */
function textOn(background: string): string {
  return background.toUpperCase() === palette.animals ? colors.text : colors.textOnDark;
}

/** Video photo as a white-bordered "sticker", with its title underneath. */
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
      <View style={[styles.sticker, cardShadow]}>
        <Thumbnail video={video} style={{ width: w - 8, height: Math.round((w - 8) * 0.5625) }} />
        {video.isNew && (
          <View style={[styles.chip, styles.newChip]}>
            <AppText variant="label" color={colors.textOnHighlight}>
              New
            </AppText>
          </View>
        )}
        {video.durationSeconds > 0 && (
          <View style={[styles.chip, styles.durationChip]}>
            <AppText variant="caption" color={colors.textOnDark}>
              {formatDuration(video.durationSeconds)}
            </AppText>
          </View>
        )}
      </View>
      <AppText variant="kidLabel" numberOfLines={1}>
        {video.title}
      </AppText>
    </Tappable>
  );
}

/** Bold topic card: a photo from the topic, a line icon in a circle, and the name. */
export function TopicTile({ topic, size }: { topic: Topic; size?: number }) {
  const { cardSize } = useLayout();
  const w = size ?? cardSize;
  const videos = useVideos({ topicId: topic.id });
  const cover = videos.find((v) => v.id === topic.coverVideoId) ?? videos[0];
  const ink = textOn(topic.color);
  const isMango = ink === colors.text;

  return (
    <Tappable
      style={[styles.topic, cardShadow, { width: w, backgroundColor: topic.color }]}
      onPress={() => router.push({ pathname: '/topic/[slug]', params: { slug: topic.slug } })}
      accessibilityRole="button"
      accessibilityLabel={`${topic.name}, ${videos.length} videos`}
    >
      {cover && <Thumbnail video={cover} style={[styles.topicPhoto, { height: Math.round(w * 0.62) }]} />}
      <View style={styles.topicRow}>
        <View style={[styles.iconCircle, { backgroundColor: isMango ? palette.bark : colors.surface }]}>
          <Icon name={TOPIC_ICONS[topic.slug] ?? 'compass'} size={18} color={isMango ? palette.sunny : topic.color} />
        </View>
        <View style={styles.topicText}>
          <AppText
            variant="section"
            color={ink}
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.7}
            style={styles.topicName}
          >
            {topic.name}
          </AppText>
          <AppText variant="caption" color={ink}>
            {videos.length} {videos.length === 1 ? 'video' : 'videos'}
          </AppText>
        </View>
      </View>
    </Tappable>
  );
}

/** Dark expedition card: a trail of stops and a green "start" button. */
export function JourneyCard({ journey, width }: { journey: Journey; width: number }) {
  const all = useVideos();
  const stops = journey.videoIds
    .map((id) => all.find((v) => v.id === id))
    .filter((v): v is Video => v !== undefined);
  const minutes = Math.max(1, Math.round(stops.reduce((sum, v) => sum + v.durationSeconds, 0) / 60));
  const first = stops[0];
  const shown = stops.slice(0, 5);

  return (
    <Tappable
      style={[styles.journey, cardShadow, { width, backgroundColor: journey.color }]}
      onPress={() => first && openVideo(first.id)}
      accessibilityRole="button"
      accessibilityLabel={`Start ${journey.title}, ${stops.length} stops`}
    >
      <View style={styles.journeyEyebrow}>
        <Icon name="flag" size={20} color={colors.highlight} />
        <AppText variant="label" color={colors.highlight}>
          Expedition
        </AppText>
      </View>
      <View style={styles.journeyTitles}>
        <AppText variant="display" color={colors.textOnDark} style={styles.journeyTitle}>
          {journey.title}
        </AppText>
        <AppText variant="caption" color={colors.textOnDarkMuted}>
          {journey.description} · {stops.length} stops · about {minutes} minutes
        </AppText>
      </View>
      <View style={styles.trail}>
        <View style={styles.trailLine} />
        {shown.map((v) => (
          <Thumbnail key={v.id} video={v} style={styles.stop} />
        ))}
      </View>
      <View style={[styles.goButton, { shadowColor: colors.goShadow }]}>
        <Icon name="play" size={18} color={colors.textOnGo} />
        <AppText variant="button" color={colors.textOnGo}>
          Start expedition
        </AppText>
      </View>
    </Tappable>
  );
}

const styles = StyleSheet.create({
  sticker: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: 4,
  },
  chip: {
    position: 'absolute',
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
    borderRadius: radius.sm,
  },
  newChip: {
    top: spacing.md,
    left: spacing.md,
    backgroundColor: colors.highlight,
  },
  durationChip: {
    bottom: spacing.md,
    right: spacing.md,
    backgroundColor: colors.playerChrome,
  },
  topic: {
    borderRadius: 22,
    padding: 10,
    paddingBottom: 14,
    gap: 10,
  },
  topicPhoto: {
    width: '100%',
    borderRadius: radius.md,
    borderWidth: 3,
    borderColor: colors.surface,
  },
  topicRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.xs,
  },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topicText: {
    flex: 1,
  },
  topicName: {
    fontSize: 22,
    lineHeight: 26,
  },
  journey: {
    borderRadius: radius.xl,
    padding: 18,
    paddingBottom: 20,
    gap: 14,
  },
  journeyEyebrow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  journeyTitles: {
    gap: spacing.xs,
  },
  journeyTitle: {
    fontSize: 30,
    lineHeight: 34,
  },
  trail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xs,
  },
  trailLine: {
    position: 'absolute',
    left: 30,
    right: 30,
    top: '50%',
    borderTopWidth: 3,
    borderStyle: 'dashed',
    borderColor: colors.highlight,
  },
  stop: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 3,
    borderColor: colors.surface,
  },
  goButton: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.go,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: radius.full,
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: { width: 0, height: 4 },
  },
});
