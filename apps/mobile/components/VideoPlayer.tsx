import { useCallback, useRef } from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Video from 'react-native-video';

import { PlayerControls } from './PlayerControls';
import { useVideoPlayer } from '../hooks/useVideoPlayer';
import { getMuxStreamUrl, formatDuration } from '../lib/mux';
import { colors, fonts, radius, spacing, CONTROL_ICON_SIZE } from '../lib/theme';

export interface VideoPlayerProps {
  /** Display title shown in the bottom info bar */
  title: string;
  /** Called when the user taps Go Home */
  onClose: () => void;
  /** Local bundled asset (require() result). Takes priority over playbackId. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  localSource?: any;
  /** Mux playback ID (e.g. "abc123xyz"). Used when localSource is not provided. */
  playbackId?: string;
  /** Signed token for private/DRM Mux assets. Omit for public playback. */
  token?: string;
}

const CONTROLS = [
  { emoji: '🔊', label: 'SOUND', active: true },
  { emoji: '💬', label: 'CAPTIONS', active: false },
  { emoji: '⏪', label: 'REWIND', active: false },
  { emoji: '⏩', label: 'SKIP', active: false },
] as const;

interface SeekBarProps {
  currentTime: number;
  duration: number;
  onSeek: (s: number) => void;
}

function SeekBar({ currentTime, duration, onSeek }: SeekBarProps) {
  const barRef = useRef<View>(null);
  const progress = duration > 0 ? Math.min(1, currentTime / duration) : 0;

  const handlePress = useCallback(
    (e: GestureResponderEvent) => {
      if (duration <= 0) return;
      barRef.current?.measure((_x, _y, width, _h, pageX) => {
        const fraction = Math.max(0, Math.min(1, (e.nativeEvent.pageX - pageX) / width));
        onSeek(fraction * duration);
      });
    },
    [duration, onSeek]
  );

  return (
    <Pressable onPress={handlePress} style={styles.seekHitArea}>
      <View ref={barRef} style={styles.seekTrack} collapsable={false}>
        <View style={[styles.seekFill, { width: `${progress * 100}%` }]} />
        <View style={[styles.seekThumb, { left: `${Math.min(progress * 100, 98)}%` }]} />
      </View>
    </Pressable>
  );
}

export function VideoPlayer({ localSource, playbackId, title, token, onClose }: VideoPlayerProps) {
  const { videoRef, state, togglePlayPause, seek, handlers } = useVideoPlayer();

  const source = localSource ?? { uri: getMuxStreamUrl(playbackId ?? '', token) };

  return (
    <View style={styles.container}>
      {/* ── Video area ── */}
      <View style={styles.videoArea}>
        <Video
          ref={videoRef}
          source={source}
          style={StyleSheet.absoluteFill}
          resizeMode="contain"
          paused={state.paused}
          repeat={false}
          playInBackground={false}
          playWhenInactive={false}
          ignoreSilentSwitch="ignore"
          onLoad={handlers.onLoad}
          onProgress={handlers.onProgress}
          onBuffer={handlers.onBuffer}
          onError={handlers.onError}
          onEnd={handlers.onEnd}
          onReadyForDisplay={handlers.onReadyForDisplay}
        />
        <PlayerControls
          paused={state.paused}
          isBuffering={state.isBuffering}
          isLoaded={state.isLoaded}
          hasError={state.hasError}
          isEnded={state.isEnded}
          onTogglePlayPause={togglePlayPause}
          onBack={onClose}
        />
      </View>

      {/* ── Seek bar (dark) ── */}
      <View style={styles.seekSection}>
        <SeekBar currentTime={state.currentTime} duration={state.duration} onSeek={seek} />
        <View style={styles.timeRow}>
          <Text style={styles.timeText}>{formatDuration(state.currentTime)}</Text>
          <Text style={styles.timeText}>{formatDuration(state.duration)}</Text>
        </View>
      </View>

      {/* ── Green info bar ── */}
      <View style={styles.infoBar}>
        <View style={styles.infoText}>
          <Text style={styles.infoTitle} numberOfLines={1}>{title}</Text>
        </View>
        <View style={styles.controlIcons}>
          {CONTROLS.map((ctrl) => (
            <View key={ctrl.label} style={styles.controlIconWrap}>
              <View
                style={[
                  styles.controlIconBox,
                  ctrl.active ? styles.controlIconActive : styles.controlIconDefault,
                ]}
              >
                <Text style={styles.controlIconEmoji}>{ctrl.emoji}</Text>
              </View>
              <Text style={styles.controlIconLabel}>{ctrl.label}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.darkNav,
  },
  videoArea: {
    flex: 1,
    backgroundColor: '#000000',
  },
  seekSection: {
    backgroundColor: colors.darkNav,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.sm,
    paddingBottom: 4,
  },
  seekHitArea: {
    paddingVertical: 10,
    justifyContent: 'center',
  },
  seekTrack: {
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 3,
    overflow: 'visible',
  },
  seekFill: {
    height: '100%',
    backgroundColor: colors.greenPrimary,
    borderRadius: 3,
  },
  seekThumb: {
    position: 'absolute',
    top: -9,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.white,
    marginLeft: -12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  timeText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 13,
    fontWeight: '600',
    fontFamily: fonts.semiBold,
    fontVariant: ['tabular-nums'],
  },
  infoBar: {
    backgroundColor: colors.greenPrimary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderTopLeftRadius: radius.lg,
    borderTopRightRadius: radius.lg,
  },
  infoText: {
    flex: 1,
    marginRight: spacing.xl,
  },
  infoTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '800',
    fontFamily: fonts.bold,
  },
  controlIcons: {
    flexDirection: 'row',
    gap: spacing.xl,
  },
  controlIconWrap: {
    alignItems: 'center',
    gap: 4,
  },
  controlIconBox: {
    width: CONTROL_ICON_SIZE,
    height: CONTROL_ICON_SIZE,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlIconActive: {
    backgroundColor: colors.purpleDark,
  },
  controlIconDefault: {
    backgroundColor: colors.blue,
  },
  controlIconEmoji: {
    fontSize: 28,
    fontFamily: fonts.regular,
  },
  controlIconLabel: {
    color: colors.white,
    fontSize: 11,
    fontWeight: '700',
    fontFamily: fonts.bold,
  },
});
