import {BackgroundContainer, Button, Typography} from "@/components";
import {Dimensions, StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";
import {_flashCards} from "@/api/loremIpsumator";
import {useTranslation} from "react-i18next";
import {useRouter} from "expo-router";

export default function EditFlashcard() {
  const { t } = useTranslation()
  const router = useRouter()

  const [cards, setCards] = useState(_flashCards())
  const [currentCardIndex, setCurrentCardIndex] = useState(0)

  return (
    <BackgroundContainer imagePath={require('../assets/images/home.png')}>
      <View style={styles.innerContainer}>

        <Typography font={"BOLD"} size={"SUPER_LARGE"}>
          {`${currentCardIndex + 1} z ${cards.length}`}
        </Typography>

        <View style={{ width: Dimensions.get("screen").width * .8 }}>
          <View style={[styles.card, {
            backgroundColor: "#ffe",
          }]}>
            <TextInput
              style={{
                padding: 20,
                textAlign: "center",
                fontFamily: "Jost_300Light"
              }}
              onChangeText={value => {
                cards[currentCardIndex].question = value
                setCards([...cards])
              }}
              value={cards[currentCardIndex].question}
            />
          </View>

          <View style={[styles.card, {
            backgroundColor: "#eef",
          }]}>
            <TextInput
              style={{
                padding: 20,
                textAlign: "center",
                fontFamily: "Jost_300Light"
              }}
              onChangeText={value => {
                cards[currentCardIndex].answer = value
                setCards([...cards])
              }}
              value={cards[currentCardIndex].answer}
            />
          </View>
        </View>

        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: Dimensions.get("screen").width * .8
        }}>
          {currentCardIndex !== 0 ?
            <Button font="BOLD" onPress={() => {
              setCurrentCardIndex(currentCardIndex - 1);
            }}>
              {"<-   "}
            </Button>
            :
            <View />
          }
          {currentCardIndex !== cards.length - 1 ?
            <Button font="BOLD" onPress={() => {
              setCurrentCardIndex(currentCardIndex + 1);
            }}>
              {"->   "}
            </Button>
            :
            <Button font="BOLD" onPress={() => {
              setCards([...cards, {
                id: -1,
                question: "",
                answer: "",
                flashcard_set: cards[0].flashcard_set
              }])
              setCurrentCardIndex(currentCardIndex + 1)
            }}>
              {"+    "}
            </Button>
          }
        </View>

        <Button font="BOLD" onPress={router.back}>
          {t("create.save")}
        </Button>

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
    marginBottom: 50,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3, },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  }
});
