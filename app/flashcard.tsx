import {BackgroundContainer, Button, Typography} from "@/components";
import {StyleSheet, View} from "react-native";
import {useMemo, useState} from "react";
import {_flashCards} from "@/api/loremIpsumator";

export default function Flashcard() {
    const cards = useMemo(_flashCards, [])
    const [currentCardIndex, setCurrentCardIndex] = useState(0)

    return (
        <BackgroundContainer imagePath={require('../assets/images/home.png')}>
            <View style={styles.innerContainer}>
                <Typography>{cards[currentCardIndex].id}</Typography>
                <Typography>{cards[currentCardIndex].question}</Typography>
                <Typography>{cards[currentCardIndex].answer}</Typography>
            </View>
            <Button onPress={() => setCurrentCardIndex(currentCardIndex + 1)} >
                next
            </Button>
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

