import { useEvent, useEventListener } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SeekBar } from './SeekBar';
import { AppText } from '@/components/ui/AppText';
import { Tappable } from '@/components/ui/Tappable';
import { Thumbnail } from '@/components/ui/Thumbnail';
import type { Video } from '@/data/types';
import { formatDuration, playableUri } from '@/lib/mux';
import { useLayout } from '@/theme/layout';
import { colors, radius, spacing } from '@/theme/tokens';

const HIDE_CONTROLS_AFTER_MS = 3500;

interface KidPlayerProps {
  video: Video;
  upNext: Video[];
  onClose: () => void;
  onPlayNext: (videoId: string) => void;
}

/**
 * Full-screen player with giant kid-friendly controls: Play/Pause and Go Home,
 * a tap-to-seek bar, and "watch next" suggestions when the video ends.
 */
export function KidPlayer({ video, upNext, onClose, onPlayNext }: KidPlayerProps) {
  const insets = useSafeAreaInsets();
  const { sizeClass } = useLayout();
  const big = sizeClass === 'regular';

  const player = useVideoPlayer(playableUri(video.source), (p) => {
    p.timeUpdateEventInterval = 0.5;
    p.play();
  });

  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });
  const { status } = useEvent(player, 'statusChange', { status: player.status });
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(video.durationSeconds);
  const [ended, setEnded] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEventListener(player, 'timeUpdate', ({ currentTime: t }) => setCurrentTime(t));
  useEventListener(player, 'sourceLoad', ({ duration: d }) => d > 0 && setDuration(d));
  useEventListener(player, 'playToEnd', () => {
    setEnded(true);
    setControlsVisible(true);
  });

  const scheduleHide = useCallback(() => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setControlsVisible(false), HIDE_CONTROLS_AFTER_MS);
  }, []);

  // Controls always show while paused; while playing they auto-hide.
  const showingControls = !isPlaying || controlsVisible;

  useEffect(() => {
    if (isPlaying) scheduleHide();
    else if (hideTimer.current) clearTimeout(hideTimer.current);
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [isPlaying, scheduleHide]);

  const togglePlay = () => {
    setControlsVisible(true);
    if (ended) {
      setEnded(false);
      player.replay();
      player.play();
    } else if (isPlaying) {
      player.pause();
    } else {
      player.play();
    }
  };

  const seek = (seconds: number) => {
    player.seekBy(seconds - currentTime);
    setCurrentTime(seconds);
    if (ended) setEnded(false);
    if (isPlaying) scheduleHide();
  };

  const showControls = () => {
    setControlsVisible(true);
    if (isPlaying) scheduleHide();
  };

  const buttonSize = big ? { width: 180, height: 140 } : { width: 120, height: 96 };
  const iconSize = big ? 64 : 44;

  return (
    <View style={styles.container}>
      <VideoView style={StyleSheet.absoluteFill} player={player} nativeControls={false} contentFit="contain" />

      {status === 'loading' && !ended && (
        <View style={styles.center} pointerEvents="none">
          <ActivityIndicator size="large" color={colors.accent} />
        </View>
      )}

      {status === 'error' ? (
        <View style={[styles.center, styles.scrim]}>
          <AppText variant="display">😕</AppText>
          <AppText variant="title">This video won’t play right now</AppText>
          <Tappable style={[styles.pill, { backgroundColor: colors.danger }]} onPress={onClose}>
            <AppText variant="heading">Go Home</AppText>
          </Tappable>
        </View>
      ) : ended ? (
        <View style={[styles.endScreen, styles.scrim, { paddingTop: insets.top + spacing.lg }]}>
          <AppText variant="title">What’s next? 🎉</AppText>
          <ScrollView horizontal contentContainerStyle={styles.upNextRow} showsHorizontalScrollIndicator={false}>
            {upNext.map((v) => (
              <Tappable
                key={v.id}
                style={styles.upNextCard}
                onPress={() => onPlayNext(v.id)}
                accessibilityRole="button"
                accessibilityLabel={`Play ${v.title}`}
              >
                <Thumbnail video={v} style={{ width: 200, height: 112 }} />
                <AppText variant="label" numberOfLines={1}>
                  {v.title}
                </AppText>
              </Tappable>
            ))}
          </ScrollView>
          <View style={styles.centerRow}>
            <BigButton label="AGAIN" icon="↩" color={colors.accent} size={buttonSize} iconSize={iconSize} onPress={togglePlay} />
            <BigButton label="GO HOME" icon="🏠" color={colors.danger} size={buttonSize} iconSize={iconSize} onPress={onClose} />
          </View>
        </View>
      ) : (
        <Pressable style={StyleSheet.absoluteFill} onPress={showControls} accessibilityLabel="Show controls">
          {showingControls && (
            <View style={[StyleSheet.absoluteFill, styles.scrim]}>
              <View style={[styles.titleBar, { paddingTop: insets.top + spacing.md }]}>
                <AppText variant="heading" numberOfLines={1}>
                  {video.title}
                </AppText>
              </View>
              <View style={[styles.center, styles.centerRow]}>
                <BigButton
                  label={isPlaying ? 'PAUSE' : 'PLAY'}
                  icon={isPlaying ? '⏸' : '▶'}
                  color={colors.accent}
                  size={buttonSize}
                  iconSize={iconSize}
                  onPress={togglePlay}
                />
                <BigButton label="GO HOME" icon="🏠" color={colors.danger} size={buttonSize} iconSize={iconSize} onPress={onClose} />
              </View>
              <View style={[styles.bottomBar, { paddingBottom: insets.bottom + spacing.md }]}>
                <SeekBar currentTime={currentTime} duration={duration} onSeek={seek} />
                <View style={styles.timeRow}>
                  <AppText variant="caption">{formatDuration(currentTime)}</AppText>
                  <AppText variant="caption">{formatDuration(duration)}</AppText>
                </View>
              </View>
            </View>
          )}
        </Pressable>
      )}
    </View>
  );
}

function BigButton({
  label,
  icon,
  color,
  size,
  iconSize,
  onPress,
}: {
  label: string;
  icon: string;
  color: string;
  size: { width: number; height: number };
  iconSize: number;
  onPress: () => void;
}) {
  return (
    <Tappable onPress={onPress} accessibilityRole="button" accessibilityLabel={label} style={{ alignItems: 'center', gap: spacing.sm }}>
      <View style={[styles.bigButton, size, { backgroundColor: color }]}>
        <AppText style={{ fontSize: iconSize, lineHeight: iconSize * 1.2 }}>{icon}</AppText>
      </View>
      <AppText variant="heading" style={styles.buttonLabel}>
        {label}
      </AppText>
    </Tappable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.playerBackground,
  },
  scrim: {
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  center: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.lg,
  },
  centerRow: {
    flexDirection: 'row',
    gap: spacing.xxl,
  },
  titleBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: spacing.xl,
  },
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: spacing.xl,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bigButton: {
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  pill: {
    paddingHorizontal: spacing.xxl,
    paddingVertical: spacing.md,
    borderRadius: radius.lg,
  },
  endScreen: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xl,
  },
  upNextRow: {
    gap: spacing.lg,
    paddingHorizontal: spacing.xl,
  },
  upNextCard: {
    width: 200,
    gap: spacing.sm,
  },
});
