import type { VideoSource } from '@/data/types';

/**
 * Mux URL builders.
 *   HLS stream:  https://stream.mux.com/{PLAYBACK_ID}.m3u8
 *   Thumbnail:   https://image.mux.com/{PLAYBACK_ID}/thumbnail.jpg
 *   MP4 (offline download, needs static renditions): https://stream.mux.com/{PLAYBACK_ID}/{rendition}.mp4
 *
 * Signed playback (later, with subscriptions) appends ?token={JWT}.
 */
const STREAM = 'https://stream.mux.com';
const IMAGE = 'https://image.mux.com';

export function muxStreamUrl(playbackId: string, token?: string): string {
  const url = `${STREAM}/${playbackId}.m3u8`;
  return token ? `${url}?token=${token}` : url;
}

export function muxThumbnailUrl(playbackId: string, opts: { time?: number; width?: number } = {}): string {
  const params = new URLSearchParams();
  if (opts.time !== undefined) params.set('time', String(opts.time));
  if (opts.width !== undefined) params.set('width', String(opts.width));
  const query = params.toString();
  return `${IMAGE}/${playbackId}/thumbnail.jpg${query ? `?${query}` : ''}`;
}

export function muxMp4Url(playbackId: string, rendition: '720p' | '480p' = '720p'): string {
  return `${STREAM}/${playbackId}/${rendition}.mp4`;
}

/** Resolves a catalog video source to something expo-video can play. */
export function playableUri(source: VideoSource): string {
  return source.kind === 'mux' ? muxStreamUrl(source.playbackId) : source.uri;
}

/** Formats seconds as M:SS. */
export function formatDuration(totalSeconds: number): string {
  const safe = Math.max(0, Math.floor(totalSeconds));
  const mins = Math.floor(safe / 60);
  const secs = safe % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}
