/**
 * Offline download types for the mobile app.
 * Videos are downloaded as HLS streams and stored locally.
 */

export type DownloadStatus =
  | 'queued'
  | 'downloading'
  | 'paused'
  | 'completed'
  | 'failed'
  | 'expired';

export interface DownloadedVideo {
  videoId: string;
  profileId: string;
  /** Local file system path to the downloaded HLS manifest */
  localPath: string;
  /** File size in bytes */
  fileSizeBytes: number;
  downloadedAt: string; // ISO 8601
  /** Downloads expire 30 days after download date */
  expiresAt: string; // ISO 8601
  status: DownloadStatus;
  /** Download progress 0-100 */
  progressPercent: number;
}

export interface DownloadQueueItem {
  videoId: string;
  profileId: string;
  muxPlaybackId: string;
  title: string;
  thumbnailUrl: string;
  durationSeconds: number;
  addedAt: string;
}

export interface StorageQuota {
  /** Maximum storage in bytes (target: 3.3 GB for ~3 hours at 2.5 Mbps) */
  maxBytes: number;
  usedBytes: number;
  availableBytes: number;
}
