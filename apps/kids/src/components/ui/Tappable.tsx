import { Pressable, type PressableProps, type StyleProp, type ViewStyle } from 'react-native';

interface TappableProps extends Omit<PressableProps, 'style'> {
  style?: StyleProp<ViewStyle>;
}

/** A Pressable that visibly squishes when touched — kids need clear feedback. */
export function Tappable({ style, ...rest }: TappableProps) {
  return (
    <Pressable
      {...rest}
      style={({ pressed }) => [style, pressed && { transform: [{ scale: 0.96 }], opacity: 0.9 }]}
    />
  );
}
