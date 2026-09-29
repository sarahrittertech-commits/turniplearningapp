/**
 * API response wrapper types used by Firebase Functions.
 */

export interface ApiSuccess<T> {
  success: true;
  data: T;
}

export interface ApiError {
  success: false;
  error: {
    code: string;
    message: string;
  };
}

export type ApiResponse<T> = ApiSuccess<T> | ApiError;

/** Mux webhook event types we handle */
export type MuxWebhookEventType =
  | 'video.asset.ready'
  | 'video.asset.errored'
  | 'video.asset.deleted'
  | 'video.upload.cancelled'
  | 'video.upload.created';

export interface MuxWebhookPayload {
  type: MuxWebhookEventType;
  data: {
    id: string;
    status: string;
    playback_ids?: Array<{ id: string; policy: string }>;
    passthrough?: string; // Firestore document ID
  };
}

/** Firestore collection names */
export const COLLECTIONS = {
  VIDEOS: 'videos',
  SERIES: 'series',
  PARENT_ACCOUNTS: 'parentAccounts',
  CHILD_PROFILES: 'childProfiles',
  WATCH_PROGRESS: 'watchProgress',
  PARENTAL_SETTINGS: 'parentalSettings',
} as const;
