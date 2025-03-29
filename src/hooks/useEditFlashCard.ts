import { useMutation } from '@tanstack/react-query';
import { useLocalSearchParams } from 'expo-router';

import { queryClient } from '@/api/client';
import { queryKeys } from '@/api/queryKyes';

import { type FlashCardUpload, editFlashCard } from '../api/challenges';

export const useEditFlashCard = () => {
  const { id: flashcardSet } = useLocalSearchParams<{ id: string }>();
  return useMutation({
    mutationFn: ({ question, answer, flashCardId }: FlashCardUpload) =>
      editFlashCard({ flashcardSet, flashCardId, question, answer }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.set(flashcardSet) });
    },
    onError: (error) => {
      console.error('Failed to edit flashcard:', error);
    },
  });
};
