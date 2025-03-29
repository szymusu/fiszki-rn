import { TextInput } from 'react-native-paper';
import { Typography } from './Typography';
import { View, StyleSheet } from 'react-native';

interface CustomTextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  backgroundColor?: string;
}

export const FlashCardInput = ({ label, value, onChangeText, placeholder, backgroundColor }: CustomTextInputProps) => {
  return (
    <View style={styles.container}>
      <Typography textAlign="left">{label}</Typography>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        underlineColor="transparent"
        selectionColor="red"
        activeUnderlineColor="transparent"
        cursorColor="red"
        style={[styles.input, { backgroundColor }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    fontSize: 16,
    fontFamily: 'Jost_400Regular',
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

