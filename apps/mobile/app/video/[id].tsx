import { useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

import { VideoPlayer } from '../../components/VideoPlayer';
import { getLocalVideoById } from '../../lib/localCatalog';

/**
 * Full-screen video player route.
 *
 * Route params:
 *   id          — video ID. Checked against localCatalog first; falls back to Mux.
 *   playbackId  — Mux playback ID (used only if no local catalog entry exists)
 *   title       — Override title (optional; catalog title used if omitted)
 *   token       — Signed JWT for private Mux assets (optional)
 *
 * Navigate here with:
 *   router.push({ pathname: '/video/[id]', params: { id: 'blue-whale' } });
 *   router.push({ pathname: '/video/[id]', params: { id: 'abc', playbackId: 'muxId', title: 'My Video' } });
 */
export default function VideoPlayerScreen() {
  const router = useRouter();
  const { id, playbackId, title, token } = useLocalSearchParams<{
    id: string;
    playbackId?: string;
    title?: string;
    token?: string;
  }>();

  // Prefer local bundled asset; fall back to Mux stream
  const localVideo = getLocalVideoById(id);
  const resolvedTitle = title ?? localVideo?.title ?? 'Untitled';

  if (!localVideo && !playbackId) {
    return (
      <View style={styles.missing}>
        <Text style={styles.missingText}>No source found for video "{id}"</Text>
      </View>
    );
  }

  return (
    <VideoPlayer
      localSource={localVideo?.source}
      playbackId={playbackId}
      token={token}
      title={resolvedTitle}
      onClose={() => router.back()}
    />
  );
}

const styles = StyleSheet.create({
  missing: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  missingText: {
    color: '#888',
    fontSize: 16,
  },
});
