import { View, StyleSheet, Dimensions, Alert } from 'react-native';

import { useQueryClient } from '@tanstack/react-query';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { deleteFlashCardSet } from '@/api/challenges';
import { queryKeys } from '@/api/queryKyes';
import { BackgroundContainer, Button, Typography } from '@/components';
import { useFetchSet } from '@/hooks';

import LogoIcon from '../assets/svgs/logo.svg';

const FlashCardOptions = () => {
  const { t } = useTranslation();
  const { id } = useLocalSearchParams();

  const queryClient = useQueryClient();

  const { data } = useFetchSet(id as string);

  const router = useRouter();

  const handleSetDelete = async () => {
    try {
      await deleteFlashCardSet(id as string);
      await queryClient.invalidateQueries({ queryKey: [queryKeys.sets()] });
      router.navigate('/sets');
    } catch (error) {
      Alert.alert('Błąd', 'Nie udało się usunąć zestawu');
    }
  };

  return (
    <BackgroundContainer>
      <View style={styles.innerContainer}>
        <LogoIcon />
        {data && (
          <Typography marginTop={20} size="LARGE">
            {data.title}
          </Typography>
        )}
      </View>
      <View style={styles.buttonsContainer}>
        <Button onPress={() => router.navigate('/flashcard')} font="BOLD" style={styles.button}>
          {t('settings.testYourself')}
        </Button>
        <Button onPress={() => console.log()} font="BOLD" style={styles.button}>
          {t('settings.editSet')}
        </Button>
        <Button
          onPress={() => {
            void handleSetDelete();
          }}
          font="BOLD"
          style={styles.button}
        >
          {t('settings.deleteSet')}
        </Button>
      </View>
    </BackgroundContainer>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 100,
  },
  buttonsContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    marginBottom: 30,
    width: Dimensions.get('screen').width / 2,
  },
  logo: {
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flashCardsButtons: { gap: 5, width: '90%' },
});

export default FlashCardOptions;
