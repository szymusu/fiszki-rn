import { useEffect } from 'react';

import { Jost_300Light, Jost_400Regular, Jost_700Bold, useFonts } from '@expo-google-fonts/jost';
import { QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { I18nextProvider } from 'react-i18next';

import { queryClient } from '@/api/client';
import i18n from '@/i18n';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Jost_300Light,
    Jost_400Regular,
    Jost_700Bold,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="challenge" />
        </Stack>
      </I18nextProvider>
    </QueryClientProvider>
  );
}
