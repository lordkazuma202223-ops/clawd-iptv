'use client';

import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

interface VideoPlayerProps {
  url: string;
  title?: string;
}

export default function VideoPlayer({ url, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(video);

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          setError('Failed to load stream. Please try another channel.');
        }
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = url;
    } else {
      setError('Your browser does not support HLS playback.');
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [url]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {title && (
        <h1 className="text-white text-2xl font-semibold mb-4 tracking-tight">
          {title}
        </h1>
      )}
      <div className="relative bg-black aspect-video rounded-lg overflow-hidden border border-white/10">
        {error ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white/50">{error}</p>
          </div>
        ) : (
          <video
            ref={videoRef}
            controls
            autoPlay
            className="w-full h-full"
            style={{ background: 'black' }}
          />
        )}
      </div>
    </div>
  );
}
