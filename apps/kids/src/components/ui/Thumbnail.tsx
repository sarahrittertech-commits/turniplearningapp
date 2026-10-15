import { Image } from 'expo-image';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import { Icon } from './Icon';
import type { Video } from '@/data/types';
import { muxThumbnailUrl } from '@/lib/mux';
import { colors, radius, tileColors } from '@/theme/tokens';

function colorFor(id: string): string {
  let hash = 0;
  for (const ch of id) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  return tileColors[hash % tileColors.length] ?? tileColors[0];
}

/**
 * Video artwork: explicit thumbnail → Mux-generated thumbnail → colored tile
 * with a play mark (no emoji pictures).
 */
export function Thumbnail({ video, style }: { video: Video; style?: StyleProp<ViewStyle> }) {
  const source =
    video.thumbnail ??
    (video.source.kind === 'mux' ? muxThumbnailUrl(video.source.playbackId, { width: 640 }) : undefined);

  return (
    <View style={[styles.frame, { backgroundColor: colorFor(video.id) }, style]}>
      {source ? (
        <Image source={source} style={StyleSheet.absoluteFill} contentFit="cover" transition={150} />
      ) : (
        <Icon name="play" size={40} color={colors.textOnDark} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    borderRadius: radius.md,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
