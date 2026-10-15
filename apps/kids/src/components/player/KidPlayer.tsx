import { useEvent, useEventListener } from 'expo';
import { useVideoPlayer, VideoView, type SubtitleTrack, type VideoPlayer } from 'expo-video';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SeekBar } from './SeekBar';
import { AppText } from '@/components/ui/AppText';
import { Icon, type IconName } from '@/components/ui/Icon';
import { Tappable } from '@/components/ui/Tappable';
import { Thumbnail } from '@/components/ui/Thumbnail';
import type { Video } from '@/data/types';
import { formatDuration, playableUri } from '@/lib/mux';
import { useLayout } from '@/theme/layout';
import { colors, radius, spacing } from '@/theme/tokens';

/** Controls fade quickly once a video starts, and a little slower after a tap. */
const HIDE_AFTER_START_MS = 1000;
const HIDE_AFTER_TAP_MS = 2500;

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
  const { availableSubtitleTracks } = useEvent(player, 'availableSubtitleTracksChange', {
    availableSubtitleTracks: player.availableSubtitleTracks,
  });
  const hasCaptions = availableSubtitleTracks.length > 0;
  // The app owns the captions state. iOS auto-selects tracks marked AUTOSELECT
  // without telling the player, so we always apply our choice explicitly.
  const [captionsOn, setCaptionsOn] = useState(false);

  useEffect(() => {
    if (hasCaptions) applyCaptions(player, captionsOn, availableSubtitleTracks);
  }, [player, hasCaptions, availableSubtitleTracks, captionsOn]);
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

  const scheduleHide = useCallback((afterMs: number = HIDE_AFTER_TAP_MS) => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setControlsVisible(false), afterMs);
  }, []);

  // Controls always show while paused; while playing they auto-hide.
  const showingControls = !isPlaying || controlsVisible;

  useEffect(() => {
    if (isPlaying) scheduleHide(HIDE_AFTER_START_MS);
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

  // Captions come from the stream (Mux text tracks); English is preferred when there are several.
  const toggleCaptions = () => {
    setCaptionsOn((on) => !on);
    if (isPlaying) scheduleHide();
  };

  const showControls = () => {
    setControlsVisible(true);
    if (isPlaying) scheduleHide();
  };


  const buttonSize = big ? { width: 220, height: 188 } : { width: 150, height: 124 };
  const iconSize = big ? 56 : 40;

  return (
    <View style={styles.container}>
      <VideoView style={StyleSheet.absoluteFill} player={player} nativeControls={false} contentFit="contain" />

      {status === 'loading' && !ended && !showingControls && (
        <View style={styles.center} pointerEvents="none">
          <ActivityIndicator size="large" color={colors.go} />
        </View>
      )}

      {status === 'error' ? (
        <View style={[styles.center, styles.scrim]}>
          <AppText variant="display" color={colors.textOnDark}>
            This video won’t play right now
          </AppText>
          <BigButton label="Go home" icon="home" tone="quiet" size={buttonSize} iconSize={iconSize} onPress={onClose} />
        </View>
      ) : ended ? (
        <View style={[styles.endScreen, styles.scrim, { paddingTop: insets.top + spacing.lg }]}>
          <AppText variant="display" color={colors.textOnDark}>
            What’s next?
          </AppText>
          <ScrollView horizontal contentContainerStyle={styles.upNextRow} showsHorizontalScrollIndicator={false}>
            {upNext.map((v) => (
              <Tappable
                key={v.id}
                style={styles.upNextCard}
                onPress={() => onPlayNext(v.id)}
                accessibilityRole="button"
                accessibilityLabel={`Play ${v.title}`}
              >
                <Thumbnail video={v} style={styles.upNextThumb} />
                <AppText variant="kidLabel" color={colors.textOnDark} numberOfLines={1}>
                  {v.title}
                </AppText>
              </Tappable>
            ))}
          </ScrollView>
          <View style={styles.centerRow}>
            <BigButton label="Again" icon="again" tone="go" size={buttonSize} iconSize={iconSize} onPress={togglePlay} />
            <BigButton label="Go home" icon="home" tone="quiet" size={buttonSize} iconSize={iconSize} onPress={onClose} />
          </View>
        </View>
      ) : (
        <Pressable style={StyleSheet.absoluteFill} onPress={showControls} accessibilityLabel="Show controls">
          {showingControls && (
            <View style={[StyleSheet.absoluteFill, styles.scrim]}>
              <View style={[styles.titleBar, { paddingTop: insets.top + spacing.md }]}>
                <View style={styles.titlePill}>
                  <View style={styles.titleDot}>
                    <Icon name="play" size={14} color={colors.text} />
                  </View>
                  <AppText variant="label" color={colors.textOnDark} numberOfLines={1}>
                    {video.title}
                  </AppText>
                </View>
                {hasCaptions && (
                  <Tappable
                    onPress={toggleCaptions}
                    accessibilityRole="switch"
                    accessibilityState={{ checked: captionsOn }}
                    accessibilityLabel="Captions"
                    style={[styles.chromeButton, captionsOn && styles.chromeButtonOn]}
                  >
                    <Icon name="captions" size={26} color={captionsOn ? colors.text : colors.textOnDark} />
                  </Tappable>
                )}
              </View>
              <View style={[styles.center, styles.centerRow]}>
                <BigButton
                  label={isPlaying ? 'Pause' : 'Play'}
                  icon={isPlaying ? 'pause' : 'play'}
                  tone="go"
                  size={buttonSize}
                  iconSize={iconSize}
                  onPress={togglePlay}
                />
                <BigButton label="Go home" icon="home" tone="quiet" size={buttonSize} iconSize={iconSize} onPress={onClose} />
              </View>
              <View style={[styles.bottomBar, { paddingBottom: insets.bottom + spacing.md }]}>
                <AppText variant="caption" color={colors.textOnDarkMuted} style={styles.time}>
                  {formatDuration(currentTime)}
                </AppText>
                <View style={styles.seek}>
                  <SeekBar currentTime={currentTime} duration={duration} onSeek={seek} />
                </View>
                <AppText variant="caption" color={colors.textOnDarkMuted} style={styles.time}>
                  {formatDuration(duration)}
                </AppText>
              </View>
            </View>
          )}
        </Pressable>
      )}
    </View>
  );
}

/** expo-video selects captions by assigning `subtitleTrack` on the player. */
function applyCaptions(player: VideoPlayer, on: boolean, tracks: SubtitleTrack[]) {
  player.subtitleTrack = on ? (tracks.find((t) => t.language.startsWith('en')) ?? tracks[0] ?? null) : null;
}

/** Giant kid button. "go" is Sprout Green (play, again); "quiet" is Glasses Slate (go home). */
function BigButton({
  label,
  icon,
  tone,
  size,
  iconSize,
  onPress,
}: {
  label: string;
  icon: IconName;
  tone: 'go' | 'quiet';
  size: { width: number; height: number };
  iconSize: number;
  onPress: () => void;
}) {
  const go = tone === 'go';
  const ink = go ? colors.textOnGo : colors.textOnDark;
  return (
    <Tappable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={[
        styles.bigButton,
        size,
        {
          backgroundColor: go ? colors.go : colors.quiet,
          shadowColor: go ? colors.goShadow : colors.quietShadow,
        },
      ]}
    >
      <Icon name={icon} size={iconSize} color={ink} />
      <AppText variant="title" color={ink}>
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
    backgroundColor: colors.scrim,
  },
  center: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xl,
    paddingHorizontal: spacing.xl,
  },
  centerRow: {
    flexDirection: 'row',
    gap: spacing.xl,
  },
  titleBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: spacing.xxl,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.lg,
  },
  titlePill: {
    flexShrink: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.playerChrome,
    borderRadius: radius.full,
    paddingVertical: spacing.sm,
    paddingLeft: spacing.sm,
    paddingRight: spacing.lg,
  },
  titleDot: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.progress,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chromeButton: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: colors.playerButton,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chromeButtonOn: {
    backgroundColor: colors.textOnDark,
  },
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: spacing.md,
    paddingHorizontal: spacing.xxl,
    backgroundColor: colors.playerChrome,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  seek: {
    flex: 1,
  },
  time: {
    fontVariant: ['tabular-nums'],
    minWidth: 40,
    textAlign: 'center',
  },
  bigButton: {
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.md,
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: { width: 0, height: 6 },
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
  upNextThumb: {
    width: 200,
    height: 112,
    borderWidth: 3,
    borderColor: colors.surface,
  },
});
