import { type StyleProp, StyleSheet, TouchableOpacity, type ViewStyle } from 'react-native';

import { Typography, type baseTheme } from './Typography';

type ButtonProps = {
  children: string;
  onPress(): void;
  textColor?: keyof typeof baseTheme.color;
  style?: StyleProp<ViewStyle>;
};

export const Button = ({ children, onPress, style, textColor = 'LIGHT' }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Typography color={textColor}>{children}</Typography>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#112249',
    padding: 10,
    borderRadius: 6,
  },
});
