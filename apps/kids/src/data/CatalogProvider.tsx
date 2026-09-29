import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

import { mockCatalogSource } from './mockCatalog';
import type { Catalog, CatalogSource, Journey, Topic, Video } from './types';

type CatalogState =
  | { status: 'loading' }
  | { status: 'error'; error: Error }
  | { status: 'ready'; catalog: Catalog };

const CatalogContext = createContext<CatalogState>({ status: 'loading' });

/**
 * Loads the whole catalog once at startup. The catalog is small (dozens to
 * hundreds of rows), so keeping it in memory keeps screens simple and makes an
 * offline cache easy later.
 */
export function CatalogProvider({
  source = mockCatalogSource,
  children,
}: {
  source?: CatalogSource;
  children: ReactNode;
}) {
  const [state, setState] = useState<CatalogState>({ status: 'loading' });

  useEffect(() => {
    let cancelled = false;
    source
      .load()
      .then((catalog) => !cancelled && setState({ status: 'ready', catalog }))
      .catch((error: unknown) => {
        if (!cancelled) {
          setState({ status: 'error', error: error instanceof Error ? error : new Error(String(error)) });
        }
      });
    return () => {
      cancelled = true;
    };
  }, [source]);

  return <CatalogContext.Provider value={state}>{children}</CatalogContext.Provider>;
}

export function useCatalogState(): CatalogState {
  return useContext(CatalogContext);
}

const EMPTY: Catalog = { topics: [], videos: [], journeys: [] };

function useCatalog(): Catalog {
  const state = useCatalogState();
  return state.status === 'ready' ? state.catalog : EMPTY;
}

export function useTopics(): Topic[] {
  return useCatalog().topics;
}

export function useTopic(slug: string | undefined): Topic | undefined {
  const { topics } = useCatalog();
  return topics.find((t) => t.slug === slug);
}

export function useVideos(filter?: { topicId?: string }): Video[] {
  const { videos } = useCatalog();
  const topicId = filter?.topicId;
  return useMemo(
    () => (topicId ? videos.filter((v) => v.topicIds.includes(topicId)) : videos),
    [videos, topicId]
  );
}

export function useVideo(id: string | undefined): Video | undefined {
  const { videos } = useCatalog();
  return videos.find((v) => v.id === id);
}

export function useJourneys(): Journey[] {
  return useCatalog().journeys;
}

/** Videos to suggest after `videoId` finishes: same topics first, then the rest. */
export function useUpNext(videoId: string | undefined, count = 4): Video[] {
  const { videos } = useCatalog();
  return useMemo(() => {
    const current = videos.find((v) => v.id === videoId);
    if (!current) return [];
    const others = videos.filter((v) => v.id !== videoId);
    const related = others.filter((v) => v.topicIds.some((t) => current.topicIds.includes(t)));
    const rest = others.filter((v) => !related.includes(v));
    return [...related, ...rest].slice(0, count);
  }, [videos, videoId, count]);
}
