import { useMutation } from '@tanstack/react-query';

import { queryClient } from '@/api/client';
import { queryKeys } from '@/api/queryKyes';

import { createFlashCardSet } from '../api/challenges';

export function useCreateFlashCardSet() {
  return useMutation({
    mutationFn: (title: string) => {
      return createFlashCardSet(title);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.sets() });
    },
    onError: (error) => {
      console.error('Mutation failed with error:', error);
    },
  });
}
