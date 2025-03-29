import {BackgroundContainer, Button, Typography} from "@/components";
import {Dimensions, StyleSheet, View} from "react-native";
import {useMemo, useState} from "react";
import {_flashCards} from "@/api/loremIpsumator";
import FlipCard from "react-native-flip-card";
import {useTranslation} from "react-i18next";
import {useRouter} from "expo-router";

export default function Flashcard() {
  const { t } = useTranslation()
  const router = useRouter()

  const cards = useMemo(_flashCards, [])
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isCurrentRevealed, setIsCurrentRevealed] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)

  // card flips when this value changes, no matter if its true or false, so it doesent actually mean anything lol
  const [flipTrigger, setFlipTrigger] = useState(false)

  return (
    <BackgroundContainer imagePath={require('../assets/images/home.png')}>
      <View style={styles.innerContainer}>

        <Typography font={"BOLD"} size={"SUPER_LARGE"}>
          {`${currentCardIndex + 1} z ${cards.length}`}
        </Typography>

        <FlipCard
          style={{ width: Dimensions.get("screen").width * .8 }}
          flipHorizontal={true}
          flipVertical={false}
          onFlipStart={() => {
            if (!isFlipped)  {
              setIsCurrentRevealed(true)
            }
            setIsFlipped(!isFlipped)
          }}
          flip={flipTrigger}
        >
          {/* Face Side */}
          <View style={[styles.card, {
            backgroundColor: "#ffe",
          }]}>
            <Typography>{cards[currentCardIndex].question}</Typography>
          </View>
          {/* Back Side */}
          <View style={[styles.card, {
            backgroundColor: "#eef",
          }]}>
            <Typography>{cards[currentCardIndex].answer}</Typography>
          </View>
        </FlipCard>

        <View style={{
          flexDirection: "row",
          gap: 100
        }}>
          {isCurrentRevealed &&
            <Button font="BOLD" onPress={() => {
              setIsCurrentRevealed(false)
              if (currentCardIndex === cards.length - 1) {
                router.back()
                return
              }
              setCurrentCardIndex(currentCardIndex + 1);
              if (isFlipped) setFlipTrigger(!flipTrigger)
            }}>
              {currentCardIndex === cards.length - 1 ? t('challenge.back') : t('flashcard.continue')}
            </Button>
          }

        </View>
      </View>
    </BackgroundContainer>
  )
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
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3, },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  }
});
