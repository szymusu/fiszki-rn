import { StyleSheet } from 'react-native';

import { useQuery } from '@tanstack/react-query';

import { fetchFlashCardSets } from '@/api/challenges';
import { queryKeys } from '@/api/queryKyes';
import { BackgroundContainer, Typography } from '@/components';
import { useCreateFlashCardSet } from '@/hooks';

const Challenge = () => {
  const { mutate } = useCreateFlashCardSet();
  const { data } = useQuery({ queryKey: queryKeys.sets(), queryFn: fetchFlashCardSets });

  return (
    <BackgroundContainer>
        <Typography size="LARGE" font="REGULAR">
            Uzupełnij ten widok :)
          </Typography>
    </BackgroundContainer>
  );
};

export default Challenge;

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 100,
  },
  logo: {
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flashCardsButtons: { gap: 5, width: '90%' },
});
