import {Typography} from "./Typography";
import {StyleSheet, View} from "react-native";
import type {FlashCardResponse} from "@/api/challenges";

export default function FlashCardDisplay({card}: {card: FlashCardResponse}) {
    return (
        <View style={{
            flexDirection: "row",
            padding: 30
        }}>
            <View style={style.card}>
                <Typography>{card.question}</Typography>
                <Typography>{card.answer}</Typography>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: "#ffe",
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
