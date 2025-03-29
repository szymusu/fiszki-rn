import { StyleSheet, View } from 'react-native';

import { useQuery } from '@tanstack/react-query';
import LogoIcon from 'assets/svgs/logo.svg';

import { fetchFlashCardSets } from '@/api/challenges';
import { queryKeys } from '@/api/queryKyes';
import { BackgroundContainer, Typography } from '@/components';
import { useCreateFlashCardSet } from '@/hooks';
import { useFetchFlashCards } from '@/hooks';

interface ChallengeProps {
  id: string;
}

const Challenge = ({ id }: ChallengeProps) => {
  const { mutate } = useCreateFlashCardSet();
  const { data } = useFetchFlashCards(id);

  return (
    <BackgroundContainer>
      <View style={styles.innerContainer}>
        <LogoIcon />
      </View>
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
