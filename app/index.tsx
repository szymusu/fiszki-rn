import { useState } from 'react';
import { Dimensions, StyleSheet, TextInput, View } from 'react-native';

import { Link, useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { createFlashCard } from '@/api/challenges';
import { BackgroundContainer, Button, Popup, Typography } from '@/components';
import { useCreateFlashCardSet } from '@/hooks';
import { useFetchFlashCardSets } from '@/hooks/useFetchFlashCardSets';

import LogoIcon from '../assets/svgs/logo.svg';

interface PopupProps {
  onClose: () => void;
  onSave: (name: string) => void;
}

const HomePopup = ({ onSave, onClose }: PopupProps) => {
  const [name, setName] = useState('');
  const { t } = useTranslation();

  return (
    <>
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
            setName('');
            onClose();
          }}
        >
          {t('create.save')}
        </Button>
      </View>
    </>
  );
};

export default function Index() {
  const { t } = useTranslation();
  const router = useRouter();
  const [popupVisible, setPopupVisible] = useState(false);
  const { mutate } = useCreateFlashCardSet();
  const { data } = useFetchFlashCardSets();

  const handleCreateFlashCards = () => {
    setPopupVisible(true);
  };

  const handleSave = (name: string) => {
    if (!name.trim()) {
      console.warn('Name cannot be empty');
      return;
    }

    mutate(name);
  };

  const handleTestYourself = async () => {
    router.navigate('/sets');
  };

  return (
    <BackgroundContainer imagePath={require('../assets/images/home.png')}>
      <View style={styles.innerContainer}>
        <Popup
          visible={popupVisible}
          children={<HomePopup onSave={handleSave} onClose={() => setPopupVisible(false)} />}
        />
        <View style={{ flex: 1 }}>
          <LogoIcon />
        </View>

        <Link href={'/flashcard'}>
          <Typography>fiszka test</Typography>
        </Link>
        <Link href={"/flashcard-edit"}>
          <Typography>fiszka edit test</Typography>
        </Link>

        <View style={{ flex: 1, justifyContent: 'space-around' }}>
          <View style={styles.content}>
            <Typography>{t('home.createFlashcards')}</Typography>
            <Button onPress={handleCreateFlashCards} font="BOLD">
              {t('home.startHere')}
            </Button>
          </View>

          {data && data.length > 0 && (
            <View style={styles.content}>
              <Typography textAlign="center" width={(Dimensions.get('screen').width / 10) * 7}>
                {t('home.challengeYourself')}
              </Typography>
              <Button onPress={handleTestYourself} font="BOLD">
                {t('home.testYourself')}
              </Button>
            </View>
          )}
        </View>
      </View>
    </BackgroundContainer>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 100,
  },
  content: {
    rowGap: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
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
