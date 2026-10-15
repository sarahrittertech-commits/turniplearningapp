import { useFonts, type FontSource } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

import { CatalogProvider, useCatalogState } from '@/data/CatalogProvider';
import { colors } from '@/theme/tokens';

SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({ fade: true, duration: 400 });

// iOS builds embed these with the expo-font config plugin. Loading them at
// runtime too covers web and any dev build made before a font change.
const FONTS: Record<string, FontSource> = {
  'FrauncesSoft-SemiBold': require('../../assets/fonts/FrauncesSoft-SemiBold.ttf'),
  'DMSans-Regular': require('../../assets/fonts/DMSans-Regular.ttf'),
  'DMSans-Medium': require('../../assets/fonts/DMSans-Medium.ttf'),
  'DMSans-SemiBold': require('../../assets/fonts/DMSans-SemiBold.ttf'),
  'DMSans-Bold': require('../../assets/fonts/DMSans-Bold.ttf'),
};

function HideSplashWhenReady() {
  const state = useCatalogState();
  const [fontsLoaded, fontError] = useFonts(FONTS);
  const ready = state.status !== 'loading' && (fontsLoaded || fontError !== null);
  useEffect(() => {
    if (ready) SplashScreen.hide();
  }, [ready]);
  return null;
}

export default function RootLayout() {
  return (
    <CatalogProvider>
      <HideSplashWhenReady />
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="topic/[slug]" options={{ animation: 'slide_from_right' }} />
        <Stack.Screen
          name="video/[id]"
          options={{
            presentation: 'fullScreenModal',
            animation: 'fade',
            contentStyle: { backgroundColor: colors.playerBackground },
          }}
        />
      </Stack>
    </CatalogProvider>
  );
}
