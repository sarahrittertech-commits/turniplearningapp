import { ScrollView, StyleSheet, View } from 'react-native';

import { TopicTile } from '@/components/cards';
import { ScreenHeader, useCollapsingHeader } from '@/components/ui/ScreenHeader';
import { useTopics } from '@/data/CatalogProvider';
import { useLayout } from '@/theme/layout';
import { spacing } from '@/theme/tokens';

/** Explore: a big grid of topics. Tapping one opens that topic's videos. */
export default function BrowseScreen() {
  const topics = useTopics();
  const { gutter, width, gridColumns } = useLayout();
  const { collapsed, ...scroll } = useCollapsingHeader();
  const gap = spacing.lg;
  const tileSize = Math.floor((width - gutter * 2 - gap * (gridColumns - 1)) / gridColumns);

  return (
    <View style={styles.screen}>
      <ScreenHeader eyebrow="Explore" title="What do you want to learn about?" collapsed={collapsed} />
      <ScrollView contentContainerStyle={[styles.content, { paddingHorizontal: gutter }]} {...scroll}>
        <View style={[styles.grid, { gap }]}>
          {topics.map((t) => (
            <TopicTile key={t.id} topic={t} size={tileSize} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    paddingTop: spacing.xl,
    paddingBottom: spacing.xxl,
    gap: spacing.lg,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
