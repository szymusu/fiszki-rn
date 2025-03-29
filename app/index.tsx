import { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import {Link, useRouter} from 'expo-router';
import { useTranslation } from 'react-i18next';

import { BackgroundContainer, Button, Popup, Typography } from '@/components';
import { useCreateFlashCardSet } from '@/hooks';
import { useFetchFlashCardSets } from '@/hooks/useFetchFlashCardSets';

import LogoIcon from '../assets/svgs/logo.svg';

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

  const handleTestYourself = () => {
    router.navigate('/sets');
  };

  return (
    <BackgroundContainer imagePath={require('../assets/images/home.png')}>
      <View style={styles.innerContainer}>
        <Popup visible={popupVisible} onClose={() => setPopupVisible(false)} onSave={handleSave} />
        <View style={{ flex: 1 }}>
          <LogoIcon />
        </View>

        <Link href={"/flashcard"}>
          <Typography>fiszka test</Typography>
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
});
