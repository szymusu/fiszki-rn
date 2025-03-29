import {Typography} from "./Typography";
import {Pressable, StyleSheet, View} from "react-native";
import type {FlashCardResponse} from "@/api/challenges";
import {useState} from "react";

export default function FlashCardDisplay({card}: {card: FlashCardResponse}) {
    const [isReverse, setIsReverse] = useState(false)

    return (
        <View style={{
            flexDirection: "row",
            padding: 30
        }}>
            <Pressable
                style={[style.card, {
                    backgroundColor: isReverse ? "#eef" : "#ffe",
                }]}
                onPress={() => setIsReverse(!isReverse)}
            >
                <Typography>{isReverse ? card.answer : card.question}</Typography>
            </Pressable>

        </View>
    )
}

const style = StyleSheet.create({
    card: {
        flex: 1,
        minHeight: 200,
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    }
})
