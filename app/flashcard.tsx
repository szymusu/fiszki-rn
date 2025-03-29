import {BackgroundContainer, Button, Typography} from "@/components";
import {StyleSheet, View} from "react-native";
import {useMemo, useState} from "react";
import {_flashCards} from "@/api/loremIpsumator";
import FlashCardDisplay from "@/components/FlashCardDisplay";

export default function Flashcard() {
    const cards = useMemo(_flashCards, [])
    const [currentCardIndex, setCurrentCardIndex] = useState(0)

    return (
        <BackgroundContainer imagePath={require('../assets/images/home.png')}>
            <View style={styles.innerContainer}>

                <Typography font={"BOLD"} size={"SUPER_LARGE"}>
                    {`${currentCardIndex + 1} z ${cards.length}`}
                </Typography>

                <FlashCardDisplay card={cards[currentCardIndex]} />

                <View style={{
                    flexDirection: "row",
                    gap: 100
                }}>
                    <Button onPress={() => {
                        if (currentCardIndex === 0) return
                        setCurrentCardIndex(currentCardIndex - 1);
                    }} >
                        prev
                    </Button>

                    <Button onPress={() => {
                        if (currentCardIndex === cards.length - 1) return
                        setCurrentCardIndex(currentCardIndex + 1);
                    }}>
                        next
                    </Button>
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

