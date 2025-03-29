import { useEffect, useState } from 'react';
import { BackHandler, Dimensions, FlatList, StyleSheet, View } from 'react-native';

import LogoIcon from 'assets/svgs/logo.svg';
import { useRouter } from 'expo-router';

import type { FlashCardSet } from '@/api/challenges';
import { BackgroundContainer, Button } from '@/components';
import { useFetchFlashCardSets } from '@/hooks/useFetchFlashCardSets';

const SetsList = ({ data }: { data: FlashCardSet[] }) => {
  const router = useRouter();

  return (
    <FlatList
      data={data}
      style={{ flex: 1 }}
      contentContainerStyle={{ alignItems: 'center' }}
      renderItem={({ item }) => {
        const { id, title } = item;

        return (
          <Button
            onPress={() => router.replace(`/flashcard_options?id=${id}`)}
            style={{ width: Dimensions.get('screen').width / 2, marginBottom: 30 }}
            font="BOLD"
          >
            {title}
          </Button>
        );
      }}
    />
  );
};

const SetsView = () => {
  const { data } = useFetchFlashCardSets();

  const router = useRouter();

  useEffect(() => {
    const handleBackPress = () => {
      router.navigate('/');
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, []);

  return (
    <BackgroundContainer>
      <View style={styles.innerContainer}>
        <LogoIcon />
      </View>
      <View style={{ flex: 2 }}>{data && <SetsList data={data} />}</View>
    </BackgroundContainer>
  );
};

export default SetsView;

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 100,
  },
  setsContainer: {
    flex: 1,
  },
  logo: {
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flashCardsButtons: { gap: 5, width: '90%' },
});
