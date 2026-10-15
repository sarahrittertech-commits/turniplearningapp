import { Tabs } from 'expo-router';
import type { ComponentProps } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '@/components/ui/AppText';
import { Icon, type IconName } from '@/components/ui/Icon';
import { colors, radius, spacing } from '@/theme/tokens';

type TabBarProps = Parameters<NonNullable<ComponentProps<typeof Tabs>['tabBar']>>[0];

const TAB_ICONS: Record<string, IconName> = {
  index: 'home',
  browse: 'compass',
  'my-videos': 'backpack',
};

/**
 * Backpack (offline downloads) is hidden until downloads are built; Apple
 * rejects placeholder features. The screen still exists for later.
 */
const HIDDEN_TABS = new Set(['my-videos']);

/** Teal menu bar; the current tab is a Sprout Green pill (Version B · Field notebook). */
function TurnipTabBar({ state, descriptors, navigation, insets }: TabBarProps) {
  return (
    <View style={[styles.bar, { paddingBottom: Math.max(insets.bottom, spacing.md) }]}>
      {state.routes.map((route, index) => {
        if (HIDDEN_TABS.has(route.name)) return null;
        const focused = state.index === index;
        const label = descriptors[route.key]?.options.title ?? route.name;
        const color = focused ? colors.textOnGo : colors.tabInactive;
        return (
          <Pressable
            key={route.key}
            accessibilityRole="tab"
            accessibilityState={{ selected: focused }}
            accessibilityLabel={label}
            onPress={() => {
              const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
              if (!focused && !event.defaultPrevented) navigation.navigate(route.name, route.params);
            }}
            style={[styles.tab, focused && styles.tabActive]}
          >
            <Icon name={TAB_ICONS[route.name] ?? 'compass'} size={22} color={color} />
            <AppText variant="label" color={color}>
              {label}
            </AppText>
          </Pressable>
        );
      })}
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <TurnipTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        sceneStyle: { backgroundColor: colors.background },
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="browse" options={{ title: 'Explore' }} />
      <Tabs.Screen name="my-videos" options={{ title: 'Backpack', href: null }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.tabBar,
    paddingTop: spacing.md,
    paddingHorizontal: spacing.sm,
  },
  tab: {
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.full,
  },
  tabActive: {
    backgroundColor: colors.tabActive,
  },
});
