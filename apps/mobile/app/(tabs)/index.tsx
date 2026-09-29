import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { LOCAL_VIDEOS, type LocalVideo } from '../../lib/localCatalog';
import {
  colors,
  fonts,
  radius,
  spacing,
  CONTENT_CARD_SIZE,
  CONTENT_CARD_INNER,
} from '../../lib/theme';

// Card color pairs [outer, inner] matched to video categories
const CARD_COLORS: [string, string][] = [
  [colors.cardBlue, '#4A90D9'],
  [colors.cardGreen, colors.cardViolet],
  [colors.cardYellow, '#F59E0B'],
  [colors.cardGreen, '#34D399'],
  [colors.cardYellow, colors.cardOrange],
  [colors.cardLightBlue, colors.cardCyan],
  [colors.cardGreen, colors.greenSpotify],
  [colors.cardPink, colors.cardOrangeDark],
];

// Recommended grid colors
const REC_COLORS = [
  colors.cardLightBlue,
  '#B8E0F0',
  colors.cardGreen,
  colors.cardYellow,
];

function VideoBadge() {
  return (
    <View style={styles.videoBadge}>
      <Text style={styles.videoBadgeIcon}>▶</Text>
    </View>
  );
}

function ContentCard({ video, colorPair }: { video: LocalVideo; colorPair: [string, string] }) {
  const router = useRouter();
  return (
    <Pressable
      style={styles.contentCardWrap}
      onPress={() => router.push({ pathname: '/video/[id]', params: { id: video.id } })}
    >
      <View style={[styles.contentCardOuter, { backgroundColor: colorPair[0] }]}>
        <VideoBadge />
        <View style={[styles.contentCardInner, { backgroundColor: colorPair[1] }]}>
          <Text style={styles.contentCardEmoji}>{video.emoji}</Text>
        </View>
      </View>
      <Text style={styles.contentCardLabel} numberOfLines={1}>
        {video.title}
      </Text>
    </Pressable>
  );
}

function RecommendedCard({ video, bg }: { video: LocalVideo; bg: string }) {
  const router = useRouter();
  return (
    <Pressable
      style={[styles.recCard, { backgroundColor: bg }]}
      onPress={() => router.push({ pathname: '/video/[id]', params: { id: video.id } })}
    >
      <VideoBadge />
      <Text style={styles.recCardEmoji}>{video.emoji}</Text>
      <Text style={styles.recCardLabel} numberOfLines={2}>
        {video.title}
      </Text>
    </Pressable>
  );
}

export default function HomeScreen() {
  const router = useRouter();

  const recentlyPlayed = LOCAL_VIDEOS.slice(0, 5);
  const recommended = LOCAL_VIDEOS.slice(0, 4);

  return (
    <View style={styles.screen}>
      {/* Header */}
      <View style={styles.header}>
        <SafeAreaView edges={['top']}>
          <View style={styles.headerRow}>
            <View style={styles.headerLeft}>
              <View style={styles.mascotBox}>
                <Text style={styles.mascotEmoji}>🌱</Text>
              </View>
              <Text style={styles.headerTitle}>Home</Text>
            </View>
            <Pressable style={styles.searchBtn}>
              <Text style={styles.searchIcon}>🔍</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </View>

      {/* Scrollable content */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Recently Played */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recently played</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.row}
          >
            {recentlyPlayed.map((video, i) => (
              <ContentCard
                key={video.id}
                video={video}
                colorPair={CARD_COLORS[i % CARD_COLORS.length]}
              />
            ))}
          </ScrollView>
        </View>

        {/* Your Stuff + Recommended — side by side in landscape */}
        <View style={styles.twoCol}>
          {/* Your Stuff */}
          <View style={styles.col}>
            <Text style={styles.sectionTitle}>Your stuff</Text>

            {/* Road Trip Playlist card */}
            <View style={[styles.stuffCard, { backgroundColor: colors.cardYellow }]}>
              <View style={styles.stuffCardText}>
                <Text style={styles.stuffCardTitle}>Ocean Playlist</Text>
                <Text style={styles.stuffCardSub}>4 videos</Text>
              </View>
              <Text style={styles.stuffCardBigEmoji}>🌊</Text>
            </View>

            {/* Shared with you */}
            <Pressable
              style={[styles.stuffCard, styles.stuffCardDark]}
              onPress={() => router.push('/(tabs)/library')}
            >
              <Text style={styles.stuffCardDarkIcon}>⬇️</Text>
              <Text style={styles.stuffCardDarkTitle}>My Downloads</Text>
            </Pressable>
          </View>

          {/* Recommended */}
          <View style={styles.col}>
            <Text style={styles.sectionTitle}>Recommended for you</Text>
            <View style={styles.recGrid}>
              {recommended.map((video, i) => (
                <RecommendedCard
                  key={video.id}
                  video={video}
                  bg={REC_COLORS[i % REC_COLORS.length]}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.purpleMid,
  },

  // --- Header ---
  header: {
    backgroundColor: colors.purpleDark,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
    paddingBottom: spacing.md,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  mascotBox: {
    width: 48,
    height: 48,
    borderRadius: radius.md,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.greenSpotify,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
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
  searchBtn: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    fontSize: 22,
    fontFamily: fonts.regular,
  },

  // --- Scroll ---
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xxl,
    paddingBottom: spacing.xxl,
    gap: spacing.xxl,
  },

  // --- Section ---
  section: {
    gap: spacing.lg,
  },
  sectionTitle: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '700',
    fontFamily: fonts.bold,
  },
  row: {
    gap: spacing.xl,
    paddingRight: spacing.xl,
  },

  // --- ContentCard ---
  contentCardWrap: {
    alignItems: 'center',
    gap: spacing.sm,
  },
  contentCardOuter: {
    width: CONTENT_CARD_SIZE,
    height: CONTENT_CARD_SIZE,
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  contentCardInner: {
    width: CONTENT_CARD_INNER,
    height: CONTENT_CARD_INNER,
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentCardEmoji: {
    fontSize: 56,
    fontFamily: fonts.regular,
  },
  contentCardLabel: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
    fontFamily: fonts.bold,
    maxWidth: CONTENT_CARD_SIZE,
    textAlign: 'center',
  },

  // --- Video play badge (top-left of card) ---
  videoBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: colors.red,
    borderRadius: radius.full,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  videoBadgeIcon: {
    color: colors.white,
    fontSize: 10,
    fontFamily: fonts.regular,
    marginLeft: 1,
  },

  // --- Two column layout ---
  twoCol: {
    flexDirection: 'row',
    gap: spacing.xxl,
  },
  col: {
    flex: 1,
    gap: spacing.lg,
  },

  // --- Your Stuff cards ---
  stuffCard: {
    borderRadius: radius.lg,
    padding: spacing.xl,
    minHeight: 140,
    overflow: 'hidden',
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  stuffCardText: {
    flex: 1,
    gap: 4,
  },
  stuffCardTitle: {
    color: colors.purpleDeep,
    fontSize: 22,
    fontWeight: '700',
    fontFamily: fonts.bold,
  },
  stuffCardSub: {
    color: colors.purpleDeep,
    fontSize: 14,
    fontFamily: fonts.regular,
  },
  stuffCardBigEmoji: {
    fontSize: 72,
    fontFamily: fonts.regular,
    position: 'absolute',
    right: -4,
    bottom: -8,
    opacity: 0.9,
  },
  stuffCardDark: {
    backgroundColor: '#5A2D82',
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  stuffCardDarkIcon: {
    fontSize: 36,
    fontFamily: fonts.regular,
  },
  stuffCardDarkTitle: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '700',
    fontFamily: fonts.bold,
  },

  // --- Recommended grid ---
  recGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
  recCard: {
    width: '47%',
    height: 160,
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    gap: spacing.xs,
    padding: spacing.sm,
  },
  recCardEmoji: {
    fontSize: 48,
    fontFamily: fonts.regular,
  },
  recCardLabel: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '700',
    fontFamily: fonts.bold,
    textAlign: 'center',
  },
});
