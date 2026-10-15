import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import { colors } from '@/theme/tokens';

const MASCOT = require('../../../assets/images/mascot.png');

/** Directions for the outline copies: a ring of eight around the mascot. */
const OFFSETS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
  [-0.7, -0.7],
  [0.7, -0.7],
  [-0.7, 0.7],
  [0.7, 0.7],
] as const;

/**
 * Turnip, shown whole, with a white "sticker" edge so it stands out on
 * colored backgrounds (brand guide §13.10). The edge is made from white
 * silhouettes of the art placed just behind it.
 */
export function Mascot({ height, outline = 3 }: { height: number; outline?: number }) {
  const width = Math.round(height * 0.82); // mascot.png is 392 × 480
  return (
    <View
      style={{ width: width + outline * 2, height: height + outline * 2 }}
      accessible
      accessibilityRole="image"
      accessibilityLabel="Turnip, your guide"
    >
      {OFFSETS.map(([dx, dy]) => (
        <Image
          key={`${dx},${dy}`}
          source={MASCOT}
          tintColor={colors.surface}
          contentFit="contain"
          style={[styles.layer, { width, height, left: outline + dx * outline, top: outline + dy * outline }]}
        />
      ))}
      <Image source={MASCOT} contentFit="contain" style={[styles.layer, { width, height, left: outline, top: outline }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  layer: {
    position: 'absolute',
  },
});
