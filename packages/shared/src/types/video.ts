/**
 * Video content types shared between mobile and admin apps.
 * Based on Plan B: Firebase + Mux architecture.
 */

export type VideoStatus = 'preparing' | 'ready' | 'errored' | 'deleted';

export type AgeGroup = '2-4' | '4-6' | '6-8' | '8-12';

export type ContentCategory =
  | 'animals'
  | 'colors'
  | 'numbers'
  | 'letters'
  | 'music'
  | 'stories'
  | 'science'
  | 'movement';

export interface VideoMetadata {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  durationSeconds: number;
  ageGroups: AgeGroup[];
  categories: ContentCategory[];
  tags: string[];
  createdAt: string; // ISO 8601
  updatedAt: string; // ISO 8601
  publishedAt: string | null;
  isPublished: boolean;
}

export interface MuxAsset {
  muxAssetId: string;
  muxPlaybackId: string;
  status: VideoStatus;
  /** Mux HLS playback URL template */
  playbackUrl: string;
  /** Mux thumbnail URL template */
  thumbnailUrl: string;
  aspectRatio: string;
  maxResolution: 'SD' | 'HD' | 'FHD' | '2K' | '4K';
}

/** Full video document as stored in Firestore */
export interface Video extends VideoMetadata, MuxAsset {
  seriesId: string | null;
  episodeNumber: number | null;
  /** Firebase Storage path for the source file (admin only) */
  sourceFilePath?: string;
}

export interface VideoSeries {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  ageGroups: AgeGroup[];
  categories: ContentCategory[];
  episodeCount: number;
  createdAt: string;
  updatedAt: string;
}
