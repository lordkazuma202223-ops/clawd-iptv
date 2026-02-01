'use client';

import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

interface VideoPlayerProps {
  url: string;
  title?: string;
}

export default function VideoPlayer({ url, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;
    let timeout: NodeJS.Timeout;

    const cleanup = () => {
      if (hls) {
        hls.destroy();
        hls = null;
      }
      if (timeout) {
        clearTimeout(timeout);
      }
      video.removeEventListener('loadeddata', handleLoad);
      video.removeEventListener('error', handleError);
      video.removeEventListener('canplay', handleCanPlay);
    };

    const handleLoad = () => {
      setHasLoaded(true);
      setLoading(false);
    };

    const handleError = () => {
      setLoading(false);
      if (!hasLoaded) {
        setError('Unable to load this stream. Please try another channel.');
      }
    };

    const handleCanPlay = () => {
      setLoading(false);
    };

    // Set timeout for loading
    timeout = setTimeout(() => {
      if (loading && !hasLoaded) {
        setError('Stream taking too long to load. Please try another channel.');
      }
    }, 15000);

    video.addEventListener('loadeddata', handleLoad);
    video.addEventListener('error', handleError);
    video.addEventListener('canplay', handleCanPlay);

    setLoading(true);
    setError(null);

    // Initialize HLS
    try {
      if (Hls.isSupported()) {
        hls = new Hls({
          enableWorker: true,
          lowLatencyMode: false,
          maxBufferLength: 30,
          maxMaxBufferLength: 60,
        });

        hls.loadSource(url);
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          setLoading(false);
          setHasLoaded(true);
        });

        hls.on(Hls.Events.ERROR, (event, data) => {
          console.error('HLS Error:', data);
          if (data.fatal) {
            switch (data.type) {
              case Hls.ErrorTypes.NETWORK_ERROR:
                setError('Network error. Please check your connection and try again.');
                break;
              case Hls.ErrorTypes.MEDIA_ERROR:
                if (hls) hls.recoverMediaError();
                break;
              default:
                setError('Stream unavailable. Please try another channel.');
            }
            setLoading(false);
          }
        });
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = url;
      } else {
        setError('Your browser does not support HLS playback.');
        setLoading(false);
      }
    } catch (err) {
      console.error('Video player error:', err);
      setError('Failed to initialize video player.');
      setLoading(false);
    }

    return cleanup;
  }, [url]);

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Channel Header */}
      {title && (
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-3">
              {title}
            </h1>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-2 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Live
              </span>
              <span className="text-white/40 text-sm font-medium">HD Quality</span>
              <span className="text-white/40 text-sm font-medium">HLS Stream</span>
            </div>
          </div>
        </div>
      )}

      {/* Video Container */}
      <div className="relative bg-black aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/5">
        {/* Loading State */}
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/95">
            <div className="relative">
              <div className="w-20 h-20 border-4 border-white/10 border-t-white rounded-full animate-spin" />
              <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-white/30 rounded-full animate-spin" style={{ animationDirection: 'reverse' }} />
            </div>
            <p className="text-white/50 text-sm font-medium mt-6">Loading stream...</p>
            <p className="text-white/30 text-xs mt-2">Please wait a moment</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/95 p-8">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <p className="text-white/70 text-lg font-medium mb-2">Stream Unavailable</p>
            <p className="text-white/40 text-sm text-center max-w-md mb-6">
              {error}
            </p>
            <a
              href="/"
              className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-colors"
            >
              Try Another Channel
            </a>
          </div>
        )}

        {/* Video Element */}
        <video
          ref={videoRef}
          controls
          autoPlay
          className="w-full h-full"
          style={{ background: 'black', display: loading || error ? 'none' : 'block' }}
          controlsList="nodownload"
          playsInline
        />

        {/* Quality Badge */}
        {!loading && !error && (
          <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-white/10">
            <span className="text-white/80 text-xs font-semibold">HD 1080p</span>
          </div>
        )}
      </div>
    </div>
  );
}
