/**
 * Catalog types. These mirror the `topics`, `videos`, and `journeys` tables in
 * docs/architecture.md §4.5 so swapping the mock source for Supabase is a
 * data-mapping change only.
 */

export type AgeBand = '3-5' | '6-9';

export interface Topic {
  id: string;
  slug: string;
  name: string;
  emoji: string;
  color: string;
}

/** Where the video actually plays from. Screens never build URLs themselves. */
export type VideoSource =
  /** Production: a Mux asset. */
  | { kind: 'mux'; playbackId: string }
  /** Development: any direct URL (e.g. the local sample-video server). */
  | { kind: 'url'; uri: string };

export interface Video {
  id: string;
  title: string;
  description: string;
  durationSeconds: number;
  emoji: string;
  topicIds: string[];
  ageMin: number;
  ageMax: number;
  source: VideoSource;
  /** Local bundled image (require) or remote URL; falls back to emoji tile. */
  thumbnail?: number | string;
  isNew?: boolean;
}

export interface Journey {
  id: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
  videoIds: string[];
}

export interface Catalog {
  topics: Topic[];
  videos: Video[];
  journeys: Journey[];
}

/** Anything that can supply the catalog: the local mock today, Supabase later. */
export interface CatalogSource {
  load(): Promise<Catalog>;
}
