import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { colors } from '@/theme/tokens';

/** Tap anywhere on the bar to jump. Big hit area for small fingers. */
export function SeekBar({
  currentTime,
  duration,
  onSeek,
}: {
  currentTime: number;
  duration: number;
  onSeek: (seconds: number) => void;
}) {
  const [width, setWidth] = useState(0);
  const progress = duration > 0 ? Math.min(1, Math.max(0, currentTime / duration)) : 0;

  return (
    <Pressable
      style={styles.hitArea}
      onLayout={(e) => setWidth(e.nativeEvent.layout.width)}
      onPress={(e) => {
        if (width > 0 && duration > 0) onSeek((e.nativeEvent.locationX / width) * duration);
      }}
      accessibilityRole="adjustable"
      accessibilityLabel="Video progress"
      accessibilityValue={{ min: 0, max: Math.round(duration), now: Math.round(currentTime) }}
    >
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${progress * 100}%` }]} />
      </View>
      <View style={[styles.thumb, { left: progress * width - 12 }]} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  hitArea: {
    height: 36,
    justifyContent: 'center',
  },
  track: {
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.25)',
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: colors.accent,
  },
  thumb: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
  },
});
