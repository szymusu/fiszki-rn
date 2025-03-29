import { useQuery } from '@tanstack/react-query';

import { fetchFlashCardSet } from '../api/challenges';
import { queryKeys } from '../api/queryKyes';

export const useFetchSet = (id: string) => {
  return useQuery({
    queryKey: queryKeys.set(id),
    queryFn: () => fetchFlashCardSet(id),
  });
};
