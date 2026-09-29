import { useFonts, type FontSource } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Platform } from 'react-native';

import { CatalogProvider, useCatalogState } from '@/data/CatalogProvider';
import { colors } from '@/theme/tokens';

SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({ fade: true, duration: 400 });

// On iOS/Android the fonts are embedded at build time by the expo-font config
// plugin. Web has no build-time embedding, so load them at runtime there.
const WEB_FONTS: Record<string, FontSource> =
  Platform.OS === 'web'
    ? {
        'Quicksand-Regular': require('../../assets/fonts/Quicksand-Regular.ttf'),
        'Quicksand-Medium': require('../../assets/fonts/Quicksand-Medium.ttf'),
        'Quicksand-SemiBold': require('../../assets/fonts/Quicksand-SemiBold.ttf'),
        'Quicksand-Bold': require('../../assets/fonts/Quicksand-Bold.ttf'),
      }
    : {};

function HideSplashWhenReady() {
  const state = useCatalogState();
  const [fontsLoaded] = useFonts(WEB_FONTS);
  const ready = state.status !== 'loading' && fontsLoaded;
  useEffect(() => {
    if (ready) SplashScreen.hide();
  }, [ready]);
  return null;
}

export default function RootLayout() {
  return (
    <CatalogProvider>
      <HideSplashWhenReady />
      <StatusBar style="light" />
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
