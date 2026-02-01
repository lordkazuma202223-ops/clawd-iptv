import Navbar from '@/components/Navbar';
import VideoPlayer from '@/components/VideoPlayer';
import { channels } from '@/lib/playlist';
import Link from 'next/link';

export default function PlayerPage({ params }: { params: { id: string } }) {
  const channel = channels.find(c => c.id === params.id);

  if (!channel) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Channel not found</h1>
          <Link
            href="/"
            className="px-4 py-2 bg-white text-black rounded-lg hover:opacity-90 transition-opacity"
          >
            Back to Channels
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-24 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <VideoPlayer url={channel.url} title={channel.name} />

          <div className="mt-8 flex items-center justify-between">
            <div>
              <p className="text-white/50 text-sm">{channel.category}</p>
              <p className="text-white/30 text-xs mt-1">Channel ID: {channel.id}</p>
            </div>
            <Link
              href="/"
              className="px-4 py-2 bg-white text-black rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
            >
              ← Back to Channels
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
