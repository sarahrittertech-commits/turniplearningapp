import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { LOCAL_VIDEOS, type LocalVideo } from '../../lib/localCatalog';
import {
  colors,
  fonts,
  radius,
  spacing,
  VIDEO_CARD_WIDTH,
  VIDEO_CARD_HEIGHT,
  SHOW_AVATAR_SIZE,
} from '../../lib/theme';

const TOPICS = [
  { emoji: '🌊', label: 'Ocean', bg: colors.cardCyan },
  { emoji: '🐋', label: 'Whales', bg: colors.cardBlue },
  { emoji: '🐬', label: 'Dolphins', bg: colors.cardCyan },
  { emoji: '🐸', label: 'Frogs', bg: colors.greenPrimary },
  { emoji: '🐘', label: 'Elephants', bg: colors.cardGreen },
  { emoji: '🧪', label: 'Science', bg: colors.cardViolet },
  { emoji: '🪐', label: 'Planets', bg: colors.cardLightBlue },
  { emoji: '🦁', label: 'Animals', bg: colors.cardYellow },
] as const;

const SHOWS = [
  { emoji: '🐬', name: 'Dolphin Discovery', bg: colors.cardCyan },
  { emoji: '🐋', name: 'Whale Tales', bg: colors.cardBlue },
  { emoji: '🐸', name: 'Tree Frogs', bg: colors.greenPrimary },
  { emoji: '🦈', name: 'Seahorse Secrets', bg: colors.cardOrangeDark },
  { emoji: '🐡', name: 'Clownfish Cove', bg: colors.cardLightBlue },
  { emoji: '🦀', name: "Crabby's World", bg: colors.cardPink },
  { emoji: '🐙', name: 'Octopus World', bg: colors.cardViolet },
  { emoji: '☀️', name: 'Weather Watch', bg: '#B8E0F0' },
] as const;

function ShowAvatar({ emoji, name, bg }: { emoji: string; name: string; bg: string }) {
  return (
    <View style={styles.showAvatarWrap}>
      <View style={[styles.showAvatarImg, { backgroundColor: bg }]}>
        <Text style={styles.showAvatarEmoji}>{emoji}</Text>
      </View>
      <Text style={styles.showAvatarName} numberOfLines={2}>{name}</Text>
    </View>
  );
}

function VideoCard({ video }: { video: LocalVideo }) {
  const router = useRouter();
  return (
    <Pressable
      style={styles.videoCard}
      onPress={() => router.push({ pathname: '/video/[id]', params: { id: video.id } })}
    >
      <View style={styles.videoCardThumb}>
        <View style={styles.newBadge}>
          <Text style={styles.newBadgeText}>NEW</Text>
        </View>
        <Text style={styles.videoCardEmoji}>{video.emoji}</Text>
        <View style={styles.videoCardOverlay}>
          <View style={styles.fullEpBadge}>
            <Text style={styles.fullEpStar}>★</Text>
            <Text style={styles.fullEpText}>FULL EPISODE</Text>
          </View>
          <View style={styles.durationBadge}>
            <Text style={styles.durationText}>10m</Text>
          </View>
        </View>
      </View>
      <Text style={styles.videoCardTitle} numberOfLines={1}>{video.title}</Text>
    </Pressable>
  );
}

function TopicButton({ emoji, label, bg }: { emoji: string; label: string; bg: string }) {
  return (
    <Pressable style={[styles.topicBtn, { backgroundColor: bg }]}>
      <Text style={styles.topicEmoji}>{emoji}</Text>
      <Text style={styles.topicLabel}>{label}</Text>
    </Pressable>
  );
}

export default function SearchScreen() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <SafeAreaView edges={['top']}>
          <View style={styles.headerRow}>
            <View style={styles.mascotBox}>
              <Text style={styles.mascotEmoji}>🌱</Text>
            </View>
            <View style={styles.headerIcons}>
              <View style={[styles.headerIconBtn, { backgroundColor: colors.red }]}>
                <Text style={styles.headerIconEmoji}>⬇️</Text>
              </View>
              <View style={[styles.headerIconBtn, { backgroundColor: colors.greenSpotify }]}>
                <Text style={styles.headerIconEmoji}>⚙️</Text>
              </View>
              <View style={[styles.headerIconBtn, { backgroundColor: colors.blue }]}>
                <Text style={styles.headerIconEmoji}>📡</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Featured Hero Banner */}
        <View style={styles.heroBanner}>
          <View style={styles.heroInner}>
            <Text style={styles.heroEmoji}>🌊</Text>
            <Pressable
              style={styles.heroPlayBtn}
              onPress={() => router.push({ pathname: '/video/[id]', params: { id: 'dolphins' } })}
            >
              <Text style={styles.heroPlayIcon}>▶</Text>
            </Pressable>
            <View style={styles.heroTitleBar}>
              <Text style={styles.heroTitle}>Marine Life Adventures</Text>
              <Text style={styles.heroSubtitle}>Meet the Ocean Friends</Text>
            </View>
          </View>
        </View>

        {/* Shows Carousel */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.showsRow}
        >
          {SHOWS.map((show) => (
            <ShowAvatar key={show.name} emoji={show.emoji} name={show.name} bg={show.bg} />
          ))}
        </ScrollView>

        {/* Picks of the Week */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Picks of the Week</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.row}
          >
            {LOCAL_VIDEOS.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </ScrollView>
        </View>

        {/* Explore by Topic */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Explore by Topic</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.topicsRow}
          >
            {TOPICS.map((topic) => (
              <TopicButton key={topic.label} emoji={topic.emoji} label={topic.label} bg={topic.bg} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.greenPrimary,
  },
  header: {
    backgroundColor: '#C39DC8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    fontSize: 26,
    fontFamily: fonts.regular,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  headerIconBtn: {
    width: 40,
    height: 40,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIconEmoji: {
    fontSize: 18,
    fontFamily: fonts.regular,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: spacing.xxl,
    gap: spacing.xxl,
  },
  heroBanner: {
    paddingHorizontal: spacing.lg,
    marginTop: -spacing.sm,
  },
  heroInner: {
    height: 280,
    borderRadius: radius.xl,
    backgroundColor: colors.cardOrange,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  heroEmoji: {
    fontSize: 100,
    fontFamily: fonts.regular,
    opacity: 0.6,
    position: 'absolute',
  },
  heroPlayBtn: {
    width: 64,
    height: 64,
    borderRadius: radius.lg,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  heroPlayIcon: {
    fontSize: 28,
    fontFamily: fonts.regular,
    color: colors.cardOrange,
    marginLeft: 4,
  },
  heroTitleBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255,255,255,0.92)',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    alignItems: 'center',
  },
  heroTitle: {
    color: colors.purpleDeep,
    fontSize: 18,
    fontWeight: '800',
    fontFamily: fonts.bold,
  },
  heroSubtitle: {
    color: colors.purpleDeep,
    fontSize: 13,
    fontWeight: '500',
    fontFamily: fonts.medium,
  },
  showsRow: {
    paddingHorizontal: spacing.lg,
    gap: spacing.xl,
  },
  showAvatarWrap: {
    width: 88,
    alignItems: 'center',
    gap: spacing.sm,
  },
  showAvatarImg: {
    width: SHOW_AVATAR_SIZE,
    height: SHOW_AVATAR_SIZE,
    borderRadius: radius.lg,
    borderWidth: 4,
    borderColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  showAvatarEmoji: {
    fontSize: 38,
    fontFamily: fonts.regular,
  },
  showAvatarName: {
    color: colors.purpleDeep,
    fontSize: 12,
    fontWeight: '700',
    fontFamily: fonts.bold,
    textAlign: 'center',
  },
  section: {
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  sectionTitle: {
    color: colors.purpleDeep,
    fontSize: 22,
    fontWeight: '800',
    fontFamily: fonts.bold,
  },
  row: {
    gap: spacing.lg,
    paddingRight: spacing.lg,
  },
  videoCard: {
    width: VIDEO_CARD_WIDTH,
    gap: spacing.sm,
  },
  videoCardThumb: {
    width: VIDEO_CARD_WIDTH,
    height: VIDEO_CARD_HEIGHT,
    borderRadius: radius.lg,
    backgroundColor: colors.cardBlue,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  videoCardEmoji: {
    fontSize: 72,
    fontFamily: fonts.regular,
    opacity: 0.85,
  },
  newBadge: {
    position: 'absolute',
    top: -4,
    left: -4,
    backgroundColor: colors.red,
    borderRadius: radius.full,
    paddingHorizontal: 10,
    paddingVertical: 12,
    zIndex: 2,
    transform: [{ rotate: '-15deg' }],
  },
  newBadgeText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '700',
    fontFamily: fonts.bold,
  },
  videoCardOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: spacing.sm,
    paddingBottom: spacing.sm,
    paddingTop: spacing.xl,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  fullEpBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.greenSpotify,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: radius.sm,
    gap: 4,
  },
  fullEpStar: {
    color: colors.white,
    fontSize: 10,
    fontFamily: fonts.regular,
  },
  fullEpText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: '700',
    fontFamily: fonts.bold,
  },
  durationBadge: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: radius.sm,
  },
  durationText: {
    color: colors.white,
    fontSize: 11,
    fontWeight: '700',
    fontFamily: fonts.bold,
  },
  videoCardTitle: {
    color: colors.purpleDeep,
    fontSize: 14,
    fontWeight: '700',
    fontFamily: fonts.bold,
    textAlign: 'center',
  },
  topicsRow: {
    gap: spacing.md,
    paddingRight: spacing.lg,
  },
  topicBtn: {
    width: 120,
    height: 120,
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xs,
  },
  topicEmoji: {
    fontSize: 48,
    fontFamily: fonts.regular,
  },
  topicLabel: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '700',
    fontFamily: fonts.bold,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
});
