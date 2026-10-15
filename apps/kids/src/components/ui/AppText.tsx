import { Text, type TextProps } from 'react-native';

import { colors, typography, type TypographyVariant } from '@/theme/tokens';

interface AppTextProps extends TextProps {
  variant?: TypographyVariant;
  color?: string;
}

/** All app text goes through here so the font and type scale stay consistent. */
export function AppText({ variant = 'body', color = colors.text, style, ...rest }: AppTextProps) {
  return <Text maxFontSizeMultiplier={1.4} {...rest} style={[typography[variant], { color }, style]} />;
}
