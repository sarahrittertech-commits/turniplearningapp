/**
 * User and profile types.
 * Supports parent accounts with multiple child profiles.
 */

export type ProfileAvatarId =
  | 'bunny'
  | 'bear'
  | 'cat'
  | 'dog'
  | 'elephant'
  | 'fox'
  | 'giraffe'
  | 'hippo';

export interface ChildProfile {
  id: string;
  parentUserId: string;
  name: string;
  avatarId: ProfileAvatarId;
  dateOfBirth: string; // ISO 8601 date only (YYYY-MM-DD)
  /** Derived from dateOfBirth for content filtering */
  ageGroup: import('./video').AgeGroup;
  /** PIN for switching to parent controls (set by parent, stored hashed) */
  createdAt: string;
  updatedAt: string;
}

export interface ParentalSettings {
  profileId: string;
  /** Daily watch time limit in minutes. null = unlimited */
  dailyWatchLimitMinutes: number | null;
  /** Allowed content categories. null = all allowed */
  allowedCategories: import('./video').ContentCategory[] | null;
  /** Lock settings behind 4-digit PIN */
  parentalPinHash: string;
}

export interface WatchProgress {
  profileId: string;
  videoId: string;
  watchedSeconds: number;
  totalSeconds: number;
  completedAt: string | null;
  lastWatchedAt: string;
}

/** Parent account (Firebase Auth user) */
export interface ParentAccount {
  uid: string;
  email: string;
  displayName: string | null;
  createdAt: string;
  profiles: ChildProfile[];
}
