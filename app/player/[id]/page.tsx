import VideoPlayer from '@/components/VideoPlayer';

// Simulated channel data - replace with real playlist fetch
const channels: Record<string, { name: string; url: string }> = {
  '1': { name: 'MRTV', url: 'https://iptv-org.github.io/iptv/index.m3u' },
  '2': { name: 'Mizzima', url: 'https://iptv-org.github.io/iptv/index.m3u' },
  '3': { name: 'Sky Sports', url: 'https://iptv-org.github.io/iptv/index.m3u' },
};

export default function PlayerPage({ params }: { params: { id: string } }) {
  const channel = channels[params.id];

  if (!channel) {
    return <div className="text-white p-8">Channel not found</div>;
  }

  return <VideoPlayer url={channel.url} name={channel.name} />;
}
