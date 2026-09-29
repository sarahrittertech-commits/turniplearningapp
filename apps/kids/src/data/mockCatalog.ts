import { tileColors } from '@/theme/tokens';

import type { Catalog, CatalogSource, VideoSource } from './types';

/**
 * Local development catalog — the 8 sample videos from v0.
 *
 * Videos are NOT bundled into the app. In development they stream from a tiny
 * local web server (`pnpm samples` at the repo root serves
 * `artifacts/TurnipAppSampleVideo/` on port 8765). The iOS simulator can reach
 * the Mac's localhost; a physical device needs EXPO_PUBLIC_SAMPLE_VIDEO_BASE
 * set to the Mac's LAN address.
 *
 * Once the videos are uploaded to Mux, replace each `sample(...)` with
 * `{ kind: 'mux', playbackId: '...' }` — or switch to the Supabase source.
 */
const SAMPLE_BASE = process.env.EXPO_PUBLIC_SAMPLE_VIDEO_BASE ?? 'http://localhost:8765';

function sample(fileName: string): VideoSource {
  return { kind: 'url', uri: `${SAMPLE_BASE}/${encodeURIComponent(fileName)}` };
}

const [sky, cyan, violet, orange, coral, green, pink] = tileColors;

export const MOCK_CATALOG: Catalog = {
  topics: [
    { id: 'ocean', slug: 'ocean', name: 'Ocean', emoji: '🌊', color: cyan },
    { id: 'animals', slug: 'animals', name: 'Animals', emoji: '🐾', color: orange },
    { id: 'science', slug: 'science', name: 'Science', emoji: '🔬', color: violet },
    { id: 'frogs', slug: 'frogs', name: 'Frogs', emoji: '🐸', color: green },
    { id: 'whales', slug: 'whales', name: 'Whales', emoji: '🐋', color: sky },
    { id: 'experiments', slug: 'experiments', name: 'Experiments', emoji: '🧪', color: pink },
  ],
  videos: [
    {
      id: 'blue-whale',
      title: 'Blue Whale',
      description: 'Meet the biggest animal that has ever lived.',
      durationSeconds: 70,
      emoji: '🐋',
      topicIds: ['ocean', 'animals', 'whales'],
      ageMin: 3,
      ageMax: 9,
      source: sample('Blue Whale.mp4'),
      thumbnail: require('../../assets/thumbnails/blue-whale.jpg'),
      isNew: true,
    },
    {
      id: 'dolphins',
      title: 'Dolphins',
      description: 'Playful dolphins leap and splash.',
      durationSeconds: 71,
      emoji: '🐬',
      topicIds: ['ocean', 'animals'],
      ageMin: 3,
      ageMax: 9,
      source: sample('Dolphins.mp4'),
      thumbnail: require('../../assets/thumbnails/dolphins.jpg'),
    },
    {
      id: 'frogfish',
      title: 'Frogfish',
      description: 'A fish that walks on its fins!',
      durationSeconds: 74,
      emoji: '🐟',
      topicIds: ['ocean', 'animals'],
      ageMin: 3,
      ageMax: 9,
      source: sample('FrogfishClip.mp4'),
      thumbnail: require('../../assets/thumbnails/frogfish.jpg'),
    },
    {
      id: 'sea-horse',
      title: 'Sea Horse',
      description: 'Tiny horses of the sea.',
      durationSeconds: 68,
      emoji: '🐠',
      topicIds: ['ocean', 'animals'],
      ageMin: 3,
      ageMax: 9,
      source: sample('Sea Horse.mp4'),
      thumbnail: require('../../assets/thumbnails/sea-horse.jpg'),
      isNew: true,
    },
    {
      id: 'tree-frog',
      title: 'Tree Frog',
      description: 'Sticky feet and big eyes in the rainforest.',
      durationSeconds: 73,
      emoji: '🐸',
      topicIds: ['animals', 'frogs'],
      ageMin: 3,
      ageMax: 9,
      source: sample('Tree Frog.mp4'),
      thumbnail: require('../../assets/thumbnails/tree-frog.jpg'),
    },
    {
      id: 'tree-kangaroo',
      title: 'Tree Kangaroo',
      description: 'A kangaroo that climbs trees.',
      durationSeconds: 74,
      emoji: '🦘',
      topicIds: ['animals'],
      ageMin: 3,
      ageMax: 9,
      source: sample('Tree Kangaroo.mp4'),
    },
    {
      id: 'science-rainbow',
      title: 'How Rainbows Work',
      description: 'Where do all those colors come from?',
      durationSeconds: 335,
      emoji: '🌈',
      topicIds: ['science'],
      ageMin: 4,
      ageMax: 9,
      source: sample('Kids Science Rainbow.mp4'),
    },
    {
      id: 'science-vinegar-balloon',
      title: 'Vinegar Balloon Experiment',
      description: 'Blow up a balloon with a kitchen experiment.',
      durationSeconds: 298,
      emoji: '🎈',
      topicIds: ['science', 'experiments'],
      ageMin: 5,
      ageMax: 9,
      source: sample('Kids Science Vinegar Balloon.mp4'),
    },
  ],
  journeys: [
    {
      id: 'ocean-friends',
      title: 'Ocean Friends',
      description: 'Dive in and meet the sea',
      emoji: '🌊',
      color: cyan,
      videoIds: ['blue-whale', 'dolphins', 'frogfish', 'sea-horse'],
    },
    {
      id: 'kitchen-science',
      title: 'Kitchen Science',
      description: 'Experiments you can try at home',
      emoji: '🧪',
      color: coral,
      videoIds: ['science-rainbow', 'science-vinegar-balloon'],
    },
  ],
};

export const mockCatalogSource: CatalogSource = {
  load: async () => MOCK_CATALOG,
};
