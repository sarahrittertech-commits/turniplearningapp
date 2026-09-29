import { Text, type TextProps } from 'react-native';

import { colors, typography, type TypographyVariant } from '@/theme/tokens';

interface AppTextProps extends TextProps {
  variant?: TypographyVariant;
  color?: string;
}

/** All app text goes through here so the font and type scale stay consistent. */
export function AppText({ variant = 'body', color = colors.textOnDark, style, ...rest }: AppTextProps) {
  return <Text {...rest} style={[typography[variant], { color }, style]} />;
}
