/**
 * Local video catalog for development.
 * Videos are bundled as assets so they can be played without Mux/network.
 * When Firebase + Mux are wired up, this is replaced by Firestore data.
 */

export type VideoCategory = 'ocean' | 'animals' | 'science';

export interface LocalVideo {
  id: string;
  title: string;
  category: VideoCategory;
  emoji: string;
  // Metro bundler require() result — used as react-native-video source
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  source: any;
}

// Static requires are necessary — Metro cannot resolve dynamic require() calls.
export const LOCAL_VIDEOS: LocalVideo[] = [
  {
    id: 'blue-whale',
    title: 'Blue Whale',
    category: 'ocean',
    emoji: '🐋',
    source: require('../assets/videos/blue-whale.mp4'),
  },
  {
    id: 'dolphins',
    title: 'Dolphins',
    category: 'ocean',
    emoji: '🐬',
    source: require('../assets/videos/dolphins.mp4'),
  },
  {
    id: 'frogfish',
    title: 'Frogfish',
    category: 'ocean',
    emoji: '🐟',
    source: require('../assets/videos/frogfish.mp4'),
  },
  {
    id: 'sea-horse',
    title: 'Sea Horse',
    category: 'ocean',
    emoji: '🐠',
    source: require('../assets/videos/sea-horse.mp4'),
  },
  {
    id: 'tree-frog',
    title: 'Tree Frog',
    category: 'animals',
    emoji: '🐸',
    source: require('../assets/videos/tree-frog.mp4'),
  },
  {
    id: 'tree-kangaroo',
    title: 'Tree Kangaroo',
    category: 'animals',
    emoji: '🦘',
    source: require('../assets/videos/tree-kangaroo.mp4'),
  },
  {
    id: 'science-rainbow',
    title: 'How Rainbows Work',
    category: 'science',
    emoji: '🌈',
    source: require('../assets/videos/science-rainbow.mp4'),
  },
  {
    id: 'science-vinegar-balloon',
    title: 'Vinegar Balloon Experiment',
    category: 'science',
    emoji: '🎈',
    source: require('../assets/videos/science-vinegar-balloon.mp4'),
  },
];

export const CATEGORY_LABELS: Record<VideoCategory, string> = {
  ocean: 'Ocean Animals 🌊',
  animals: 'Animals 🐾',
  science: 'Science 🔬',
};

export function getLocalVideoById(id: string): LocalVideo | undefined {
  return LOCAL_VIDEOS.find((v) => v.id === id);
}

export function getVideosByCategory(category: VideoCategory): LocalVideo[] {
  return LOCAL_VIDEOS.filter((v) => v.category === category);
}
