import { useState } from 'react';
import { Modal, View, TextInput, StyleSheet } from 'react-native';

import { useTranslation } from 'react-i18next';

import { Button } from './Button';
import { Typography } from './Typography';

interface PopupProps {
  visible: boolean;
  onClose: () => void;
  onSave: (name: string) => void;
}

export const Popup = ({ visible, onClose, onSave }: PopupProps) => {
  const [name, setName] = useState('');
  const { t } = useTranslation();

  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.popup}>
          <Typography textAlign="left">{t('create.enterSetName')}</Typography>
          <TextInput
            style={styles.input}
            placeholder={t('create.placeholder')}
            placeholderTextColor="#999"
            value={name}
            onChangeText={setName}
          />
          <View style={styles.buttonContainer}>
            <Button
              onPress={onClose}
              style={{ backgroundColor: 'white', borderColor: '#112249', borderWidth: 1 }}
              textColor="DARK"
            >
              {t('create.cancel')}
            </Button>
            <Button
              onPress={() => {
                onSave(name);
                onClose();
              }}
            >
              {t('create.save')}
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
