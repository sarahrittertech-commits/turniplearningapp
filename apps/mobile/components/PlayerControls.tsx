import { useCallback, useEffect, useRef } from 'react';
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

import { colors, fonts, radius, PLAYER_BTN_WIDTH, PLAYER_BTN_HEIGHT } from '../lib/theme';

const CONTROLS_HIDE_DELAY = 3500;

export interface PlayerControlsProps {
  paused: boolean;
  isBuffering: boolean;
  isLoaded: boolean;
  hasError: boolean;
  isEnded: boolean;
  onTogglePlayPause: () => void;
  onBack: () => void;
}

export function PlayerControls({
  paused,
  isBuffering,
  isLoaded,
  hasError,
  isEnded,
  onTogglePlayPause,
  onBack,
}: PlayerControlsProps) {
  const opacity = useRef(new Animated.Value(1)).current;
  const isVisibleRef = useRef(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    isVisibleRef.current = true;
    Animated.timing(opacity, { toValue: 1, duration: 200, useNativeDriver: true }).start();
  }, [opacity]);

  const scheduleHide = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (!paused) {
        isVisibleRef.current = false;
        Animated.timing(opacity, { toValue: 0, duration: 500, useNativeDriver: true }).start();
      }
    }, CONTROLS_HIDE_DELAY);
  }, [paused, opacity]);

  useEffect(() => {
    if (paused || isEnded) {
      show();
    } else {
      scheduleHide();
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [paused, isEnded, show, scheduleHide]);

  const handleTap = useCallback(() => {
    if (isVisibleRef.current) {
      scheduleHide();
    } else {
      show();
      scheduleHide();
    }
  }, [show, scheduleHide]);

  const handlePlayPause = useCallback(() => {
    onTogglePlayPause();
    show();
  }, [onTogglePlayPause, show]);

  // Loading state
  if (!isLoaded && !hasError) {
    return (
      <View style={styles.loadingOverlay} pointerEvents="none">
        <ActivityIndicator size="large" color={colors.white} />
      </View>
    );
  }

  // Error state
  if (hasError) {
    return (
      <View style={styles.errorOverlay}>
        <Text style={styles.errorEmoji}>😕</Text>
        <Text style={styles.errorText}>Something went wrong</Text>
        <Pressable style={styles.errorBackBtn} onPress={onBack}>
          <Text style={styles.errorBackText}>Go Back</Text>
        </Pressable>
      </View>
    );
  }

  const playLabel = isEnded ? 'REPLAY' : paused ? 'PLAY' : 'PAUSE';
  const playIcon = isEnded ? '↩' : paused ? '▶' : '⏸';

  return (
    <Pressable style={StyleSheet.absoluteFill} onPress={handleTap}>
      <Animated.View style={[StyleSheet.absoluteFill, { opacity }]}>
        {/* Dark overlay scrim */}
        <View style={styles.scrim} pointerEvents="none" />

        {/* Center: large Play + Go Home buttons */}
        <View style={styles.centerRow}>
          {/* Play / Pause */}
          <Pressable onPress={handlePlayPause}>
            <View style={styles.playBtn}>
              <Text style={styles.centerBtnIcon}>{playIcon}</Text>
            </View>
            <Text style={styles.centerBtnLabel}>{playLabel}</Text>
          </Pressable>

          {/* Go Home */}
          <Pressable onPress={onBack}>
            <View style={styles.homeBtn}>
              <Text style={styles.centerBtnIcon}>🏠</Text>
            </View>
            <Text style={styles.centerBtnLabel}>GO HOME</Text>
          </Pressable>
        </View>

        {/* Buffering indicator */}
        {isBuffering && (
          <ActivityIndicator
            style={styles.bufferIndicator}
            size="large"
            color={colors.greenPrimary}
          />
        )}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  errorEmoji: {
    fontSize: 64,
    fontFamily: fonts.regular,
  },
  errorText: {
    fontSize: 24,
    color: colors.white,
    fontWeight: '600',
    fontFamily: fonts.semiBold,
  },
  errorBackBtn: {
    marginTop: 16,
    paddingHorizontal: 32,
    paddingVertical: 14,
    backgroundColor: colors.red,
    borderRadius: radius.lg,
  },
  errorBackText: {
    fontSize: 20,
    color: colors.white,
    fontWeight: '700',
    fontFamily: fonts.bold,
  },
  scrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  centerRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 64,
  },
  playBtn: {
    width: PLAYER_BTN_WIDTH,
    height: PLAYER_BTN_HEIGHT,
    backgroundColor: colors.greenPrimary,
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  homeBtn: {
    width: PLAYER_BTN_WIDTH,
    height: PLAYER_BTN_HEIGHT,
    backgroundColor: colors.red,
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  centerBtnIcon: {
    fontSize: 72,
    fontFamily: fonts.regular,
    color: colors.white,
  },
  centerBtnLabel: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '800',
    fontFamily: fonts.bold,
    textAlign: 'center',
    marginTop: 8,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  bufferIndicator: {
    position: 'absolute',
    top: '50%',
    right: 32,
    marginTop: -18,
  },
});
