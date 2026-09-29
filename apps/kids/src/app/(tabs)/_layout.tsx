import { Tabs } from 'expo-router';
import { Text } from 'react-native';

import { colors, fonts } from '@/theme/tokens';

function TabEmoji({ emoji, focused }: { emoji: string; focused: boolean }) {
  return <Text style={{ fontSize: 24, opacity: focused ? 1 : 0.6 }}>{emoji}</Text>;
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.tabInactive,
        tabBarStyle: { backgroundColor: colors.tabBar, borderTopWidth: 0 },
        tabBarLabelStyle: { fontFamily: fonts.bold, fontSize: 12 },
        sceneStyle: { backgroundColor: colors.background },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: 'Home', tabBarIcon: ({ focused }) => <TabEmoji emoji="🏠" focused={focused} /> }}
      />
      <Tabs.Screen
        name="browse"
        options={{ title: 'Explore', tabBarIcon: ({ focused }) => <TabEmoji emoji="🧭" focused={focused} /> }}
      />
      <Tabs.Screen
        name="my-videos"
        options={{ title: 'My Videos', tabBarIcon: ({ focused }) => <TabEmoji emoji="⬇️" focused={focused} /> }}
      />
    </Tabs>
  );
}
