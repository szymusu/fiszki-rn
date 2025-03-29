import type {FlashCardResponse} from "./challenges";

export function _flashCards(): FlashCardResponse[] {
    return [
        {
            id: 1,
            question: "Najlepszy jeżyk programowania",
            answer: "Młody jeżyk",
            flashcard_set: "fiszki loremowe"
        },
        {
            id: 2,
            question: "Najgorszy jeżyk programowania",
            answer: "Stary jeżyk",
            flashcard_set: "fiszki loremowe"
        },
        {
            id: 3,
            question: "Co to jest, długie i jest patykiem",
            answer: "Patyk",
            flashcard_set: "fiszki loremowe"
        },
    ]
}
