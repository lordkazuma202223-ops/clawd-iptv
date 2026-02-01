'use client';

import { useState, useEffect } from 'react';
import Hls from 'hls.js';

interface Channel {
  id: string;
  name: string;
  url: string;
  logo?: string;
  category?: string;
}

export default function VideoPlayer({ url, name }: { url: string; name: string }) {
  const [video, setVideo] = useState<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (video && url) {
      const hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(video);
    }
  }, [video, url]);

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="mb-6 flex items-center gap-4">
        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded"
        >
          ← Back
        </button>
        <h1 className="text-2xl font-bold text-white">{name}</h1>
      </div>
      <div className="bg-black aspect-video rounded-lg overflow-hidden border border-white/20">
        <video
          ref={setVideo}
          controls
          autoPlay
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
