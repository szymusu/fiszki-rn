import { Text } from 'react-native';

export const baseTheme = {
  fonts: {
    LIGHT: 'Jost_300Light',
    REGULAR: 'Jost_400Regular',
    BOLD: 'Jost_700Bold',
  },
  fontSizes: {
    SMALL: 14,
    MEDIUM: 16,
    LARGE: 20,
    SUPER_LARGE: 40
  },
  color: {
    DARK: '#000',
    LIGHT: '#ccc',
  },
} as const;

type TypographyType = {
  children: string | number;
  font?: keyof typeof baseTheme.fonts;
  size?: keyof typeof baseTheme.fontSizes;
  color?: keyof typeof baseTheme.color;
  textAlign?: 'center' | 'left';
};

export const Typography = ({
  children,
  font = 'LIGHT',
  size = 'MEDIUM',
  color = 'DARK',
 textAlign = 'center',
}: TypographyType) => {
  return (
    <Text
      style={{
        fontFamily: baseTheme.fonts[font],
        fontSize: baseTheme.fontSizes[size],
        color: baseTheme.color[color],
        textAlign
      }}
    >
      {children}
    </Text>
  );
};
