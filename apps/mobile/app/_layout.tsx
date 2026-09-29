import { useEffect, useRef, useState } from 'react';
import { Animated, Image, StyleSheet, View } from 'react-native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { colors, radius } from '../lib/theme';

SplashScreen.preventAutoHideAsync();

// How long to display the splash (ms) before fading out
const SPLASH_VISIBLE_MS = 2500;
const SPLASH_FADE_MS = 600;

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Quicksand-Regular':  require('../assets/fonts/Quicksand/static/Quicksand-Regular.ttf'),
    'Quicksand-Medium':   require('../assets/fonts/Quicksand/static/Quicksand-Medium.ttf'),
    'Quicksand-SemiBold': require('../assets/fonts/Quicksand/static/Quicksand-SemiBold.ttf'),
    'Quicksand-Bold':     require('../assets/fonts/Quicksand/static/Quicksand-Bold.ttf'),
  });

  const [splashDone, setSplashDone] = useState(false);

  // Fade-in on mount
  const fadeIn = useRef(new Animated.Value(0)).current;
  // Pulse scale for mascot
  const pulse = useRef(new Animated.Value(1)).current;
  // Fade-out when leaving
  const fadeOut = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Hide the native OS splash immediately — we show our own
    SplashScreen.hideAsync();

    // Fade in splash
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    // Start pulsing mascot
    const pulseLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, { toValue: 1.05, duration: 1250, useNativeDriver: true }),
        Animated.timing(pulse, { toValue: 1, duration: 1250, useNativeDriver: true }),
      ])
    );
    pulseLoop.start();

    // After display period (and fonts loaded), fade out and unmount
    const timer = setTimeout(() => {
      if (!fontsLoaded) return; // extra guard — fonts should be ready well within 2.5s
      pulseLoop.stop();
      Animated.timing(fadeOut, {
        toValue: 0,
        duration: SPLASH_FADE_MS,
        useNativeDriver: true,
      }).start(() => setSplashDone(true));
    }, SPLASH_VISIBLE_MS);

    return () => {
      clearTimeout(timer);
      pulseLoop.stop();
    };
  }, [fadeIn, fadeOut, pulse, fontsLoaded]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar hidden />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen
            name="video/[id]"
            options={{ presentation: 'fullScreenModal', animation: 'fade' }}
          />
          <Stack.Screen
            name="profile/select"
            options={{ presentation: 'fullScreenModal', animation: 'fade' }}
          />
          <Stack.Screen
            name="login"
            options={{ presentation: 'fullScreenModal', animation: 'fade' }}
          />
        </Stack>

        {/* In-app animated splash — sits on top until done */}
        {!splashDone && (
          <Animated.View style={[styles.splash, { opacity: fadeOut }]}>
            <Animated.View style={[styles.mascotBackdrop, { opacity: fadeIn }]}>
              <Animated.View style={{ transform: [{ scale: pulse }] }}>
                <Image
                  source={require('../assets/images/turnipMascot.png')}
                  style={styles.mascotImage}
                  resizeMode="contain"
                />
              </Animated.View>
            </Animated.View>
          </Animated.View>
        )}
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  splash: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.greenPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mascotBackdrop: {
    width: 340,
    height: 340,
    borderRadius: radius.xl,
    backgroundColor: 'rgba(0,0,0,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mascotImage: {
    width: 280,
    height: 280,
  },
});
