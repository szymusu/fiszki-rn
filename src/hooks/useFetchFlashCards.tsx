import { useQuery } from '@tanstack/react-query';

import { fetchFlashCards } from '../api/challenges';
import { queryKeys } from '../api/queryKyes';

export const useFetchFlashCards = (id: string) => {
  return useQuery({
    queryKey: queryKeys.set(id),
    queryFn: () => fetchFlashCards(id),
  });
};
