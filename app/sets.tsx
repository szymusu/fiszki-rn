import { Dimensions, FlatList, StyleSheet, View } from 'react-native';

import LogoIcon from 'assets/svgs/logo.svg';

import { BackgroundContainer, Button } from '@/components';
import { useFetchFlashCardSets } from '@/hooks/useFetchFlashCardSets';

const Challenge = () => {
  const { data } = useFetchFlashCardSets();

  return (
    <BackgroundContainer>
      <View style={styles.innerContainer}>
        <LogoIcon />
      </View>
      <View style={{ flex: 2 }}>
        {data && (
          <FlatList
            data={data}
            style={{ flex: 1 }}
            contentContainerStyle={{ alignItems: 'center' }}
            renderItem={({ item }) => {
              return (
                <Button
                  onPress={() => console.log(item.id)}
                  style={{ width: Dimensions.get('screen').width / 2, marginBottom: 30 }}
                  font="BOLD"
                >
                  {item.title}
                </Button>
              );
            }}
          />
        )}
      </View>
    </BackgroundContainer>
  );
};

export default Challenge;

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
