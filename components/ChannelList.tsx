import Link from 'next/link';

const channels = [
  { id: '1', name: 'MRTV', url: 'https://example.com/stream1.m3u8', category: 'burmese' },
  { id: '2', name: 'Mizzima', url: 'https://example.com/stream2.m3u8', category: 'burmese' },
  { id: '3', name: 'Sky Sports', url: 'https://example.com/stream3.m3u8', category: 'sports' },
  { id: '4', name: 'ESPN', url: 'https://example.com/stream4.m3u8', category: 'sports' },
];

export default function ChannelList() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {channels.map((channel) => (
          <Link
            key={channel.id}
            href={`/player/${channel.id}`}
            className="block p-6 border border-white/20 hover:border-white/40 rounded-lg transition-colors"
          >
            <h2 className="text-xl font-bold text-white mb-2">{channel.name}</h2>
            <span className="text-white/60 text-sm capitalize">{channel.category}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
