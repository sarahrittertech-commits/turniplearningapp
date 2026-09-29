/**
 * Mux URL builders and playback helpers.
 *
 * Mux playback URL formats:
 *   HLS stream:  https://stream.mux.com/{PLAYBACK_ID}.m3u8
 *   Thumbnail:   https://image.mux.com/{PLAYBACK_ID}/thumbnail.jpg
 *   Animated:    https://image.mux.com/{PLAYBACK_ID}/animated.gif
 *
 * For signed playback (private videos), append ?token={JWT}
 */

const MUX_STREAM_BASE = 'https://stream.mux.com';
const MUX_IMAGE_BASE = 'https://image.mux.com';

export interface MuxThumbnailOptions {
  /** Time offset in seconds for the thumbnail frame. Defaults to 0. */
  time?: number;
  /** Width in pixels. Mux will maintain aspect ratio. */
  width?: number;
  /** Height in pixels. */
  height?: number;
  /** 'smartcrop' trims to fit, 'pad' adds letterboxing. */
  fitMode?: 'smartcrop' | 'pad' | 'preserve';
}

/**
 * Returns the HLS stream URL for a Mux playback ID.
 * Pass a signed token for private/DRM-protected assets.
 */
export function getMuxStreamUrl(playbackId: string, token?: string): string {
  const base = `${MUX_STREAM_BASE}/${playbackId}.m3u8`;
  return token ? `${base}?token=${token}` : base;
}

/**
 * Returns a thumbnail image URL for a given Mux playback ID.
 */
export function getMuxThumbnailUrl(
  playbackId: string,
  options: MuxThumbnailOptions = {}
): string {
  const params = new URLSearchParams();
  if (options.time !== undefined) params.set('time', String(options.time));
  if (options.width !== undefined) params.set('width', String(options.width));
  if (options.height !== undefined) params.set('height', String(options.height));
  if (options.fitMode) params.set('fit_mode', options.fitMode);

  const query = params.toString();
  return `${MUX_IMAGE_BASE}/${playbackId}/thumbnail.jpg${query ? `?${query}` : ''}`;
}

/**
 * Returns the animated GIF preview URL for a Mux playback ID.
 * Useful for hover-previews or video cards.
 */
export function getMuxAnimatedThumbnailUrl(
  playbackId: string,
  options: { width?: number; fps?: number } = {}
): string {
  const params = new URLSearchParams();
  if (options.width !== undefined) params.set('width', String(options.width));
  if (options.fps !== undefined) params.set('fps', String(options.fps));

  const query = params.toString();
  return `${MUX_IMAGE_BASE}/${playbackId}/animated.gif${query ? `?${query}` : ''}`;
}

/** Formats seconds into M:SS display string (e.g. 3:07). */
export function formatDuration(totalSeconds: number): string {
  const mins = Math.floor(totalSeconds / 60);
  const secs = Math.floor(totalSeconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}
