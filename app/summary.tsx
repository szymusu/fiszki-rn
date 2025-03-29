import { Dimensions, StyleSheet, View } from 'react-native';

import { useLocalSearchParams, useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { BackgroundContainer, Button, Typography } from '@/components';

import LogoIcon from '../assets/svgs/logo.svg';

const Summary = () => {
  const { total, known, id } = useLocalSearchParams();

  const { t } = useTranslation();

  const router = useRouter();

  return (
    <BackgroundContainer imagePath={require('../assets/images/summary-background.png')}>
      <View style={styles.innerContainer}>
        <LogoIcon />
      </View>
      <View style={styles.summaryContainer}>
        <Typography font="BOLD" size="LARGE">
          {t('summary.knowIt')}
        </Typography>
        <Typography
          marginBottom={50}
          size="LARGE"
        >{`${known} ${t('summary.of')} ${total}`}</Typography>
        <Typography font="BOLD" size="LARGE">
          {t('summary.needToReview')}
        </Typography>
        <Typography size="LARGE">{`${parseInt(total as string) - parseInt(known as string)} ${t('summary.of')} ${total}`}</Typography>
      </View>
      <Button
        onPress={() => router.replace(`/flashcard_options?id=${id}`)}
        style={{ width: Dimensions.get('screen').width / 2, marginBottom: 50, alignSelf: 'center' }}
      >
        {t('summary.finish')}
      </Button>
    </BackgroundContainer>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 100,
  },
  summaryContainer: {
    flex: 9,
    alignItems: 'flex-start',
    paddingLeft: 30,
  },
  logo: {
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flashCardsButtons: { gap: 5, width: '90%' },
});

export default Summary;
