import { useCallback, useRef, useState } from 'react';
import type { VideoRef } from 'react-native-video';

export interface VideoPlayerState {
  paused: boolean;
  currentTime: number;
  duration: number;
  isBuffering: boolean;
  hasError: boolean;
  isLoaded: boolean;
  isEnded: boolean;
}

export interface VideoPlayerControls {
  videoRef: React.RefObject<VideoRef>;
  state: VideoPlayerState;
  play: () => void;
  pause: () => void;
  togglePlayPause: () => void;
  seek: (seconds: number) => void;
  /** Callbacks to wire directly into the <Video> component */
  handlers: {
    onLoad: (data: { duration: number }) => void;
    onProgress: (data: { currentTime: number; seekableDuration: number }) => void;
    onBuffer: (data: { isBuffering: boolean }) => void;
    onError: () => void;
    onEnd: () => void;
    onReadyForDisplay: () => void;
  };
}

const INITIAL_STATE: VideoPlayerState = {
  paused: false,
  currentTime: 0,
  duration: 0,
  isBuffering: true,
  hasError: false,
  isLoaded: false,
  isEnded: false,
};

export function useVideoPlayer(): VideoPlayerControls {
  const videoRef = useRef<VideoRef>(null);
  const [state, setState] = useState<VideoPlayerState>(INITIAL_STATE);

  const play = useCallback(() => {
    setState((prev) => ({ ...prev, paused: false, isEnded: false }));
  }, []);

  const pause = useCallback(() => {
    setState((prev) => ({ ...prev, paused: true }));
  }, []);

  const togglePlayPause = useCallback(() => {
    setState((prev) => {
      if (prev.isEnded) {
        videoRef.current?.seek(0);
        return { ...prev, paused: false, isEnded: false };
      }
      return { ...prev, paused: !prev.paused };
    });
  }, []);

  const seek = useCallback((seconds: number) => {
    videoRef.current?.seek(seconds);
    setState((prev) => ({ ...prev, currentTime: seconds, isEnded: false }));
  }, []);

  const onLoad = useCallback((data: { duration: number }) => {
    setState((prev) => ({
      ...prev,
      duration: data.duration,
      isLoaded: true,
      isBuffering: false,
    }));
  }, []);

  const onProgress = useCallback(
    (data: { currentTime: number; seekableDuration: number }) => {
      setState((prev) => ({
        ...prev,
        currentTime: data.currentTime,
        // seekableDuration can be more accurate than the initial onLoad duration
        duration: data.seekableDuration > 0 ? data.seekableDuration : prev.duration,
      }));
    },
    []
  );

  const onBuffer = useCallback((data: { isBuffering: boolean }) => {
    setState((prev) => ({ ...prev, isBuffering: data.isBuffering }));
  }, []);

  const onError = useCallback(() => {
    setState((prev) => ({ ...prev, hasError: true, isBuffering: false }));
  }, []);

  const onEnd = useCallback(() => {
    setState((prev) => ({ ...prev, isEnded: true, paused: true }));
  }, []);

  const onReadyForDisplay = useCallback(() => {
    setState((prev) => ({ ...prev, isBuffering: false }));
  }, []);

  return {
    videoRef,
    state,
    play,
    pause,
    togglePlayPause,
    seek,
    handlers: {
      onLoad,
      onProgress,
      onBuffer,
      onError,
      onEnd,
      onReadyForDisplay,
    },
  };
}
