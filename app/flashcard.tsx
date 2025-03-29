import { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';

import { useLocalSearchParams, useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import FlipCard from 'react-native-flip-card';

import { fetchFlashCards, type FlashCardResponse } from '@/api/challenges';
import { _flashCards } from '@/api/loremIpsumator';
import { BackgroundContainer, Button, Typography } from '@/components';

export default function Flashcard() {
  const { t } = useTranslation();
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const [cards, setCards] = useState<FlashCardResponse[] | undefined>(undefined);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isCurrentRevealed, setIsCurrentRevealed] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  // card flips when this value changes, no matter if its true or false, so it doesent actually mean anything lol
  const [flipTrigger, setFlipTrigger] = useState(false);

  useEffect(() => {
    (async () => {
      const cards = await fetchFlashCards(id as string);
      setCards(cards);
    })();
  }, []);

  return (
    <BackgroundContainer imagePath={require('../assets/images/home.png')}>
      <View style={styles.innerContainer}>
        {cards && cards.length > 0 ? (
          <>
            <Typography font={'BOLD'} size={'SUPER_LARGE'}>
              {`${currentCardIndex + 1} z ${cards.length}`}
            </Typography>

            <FlipCard
              style={{ width: Dimensions.get('screen').width * 0.8 }}
              flipHorizontal={true}
              flipVertical={false}
              onFlipStart={() => {
                if (!isFlipped) {
                  setIsCurrentRevealed(true);
                }
                setIsFlipped(!isFlipped);
              }}
              flip={flipTrigger}
            >
              {/* Face Side */}
              <View
                style={[
                  styles.card,
                  {
                    backgroundColor: '#ffe',
                  },
                ]}
              >
                <Typography>{cards[currentCardIndex].question}</Typography>
              </View>
              {/* Back Side */}
              <View
                style={[
                  styles.card,
                  {
                    backgroundColor: '#eef',
                  },
                ]}
              >
                <Typography>{cards[currentCardIndex].answer}</Typography>
              </View>
            </FlipCard>

            <View
              style={{
                flexDirection: 'row',
                gap: 100,
              }}
            >
              {isCurrentRevealed && (
                <Button
                  font="BOLD"
                  onPress={() => {
                    setIsCurrentRevealed(false);
                    if (currentCardIndex === cards.length - 1) {
                      console.log(cards.length);
                      router.replace(`/summary?id=${id}&total=${cards.length}&known=1`);
                      return;
                    }
                    setCurrentCardIndex(currentCardIndex + 1);
                    if (isFlipped) setFlipTrigger(!flipTrigger);
                  }}
                >
                  {currentCardIndex === cards.length - 1
                    ? t('challenge.back')
                    : t('flashcard.continue')}
                </Button>
              )}
            </View>
          </>
        ) : (
          <ActivityIndicator color="black" size="large" />
        )}
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
  card: {
    minHeight: 200,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
