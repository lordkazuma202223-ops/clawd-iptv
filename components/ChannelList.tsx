'use client';

import Link from 'next/link';

export interface Channel {
  id: string;
  name: string;
  category: string;
  logo?: string;
  url: string;
}

interface ChannelListProps {
  channels: Channel[];
  category?: string;
}

export default function ChannelList({ channels, category }: ChannelListProps) {
  const filteredChannels = category
    ? channels.filter(c => c.category === category)
    : channels;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredChannels.map((channel) => (
        <Link
          key={channel.id}
          href={`/player/${channel.id}`}
          className="group bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
        >
          <div className="aspect-video bg-black/50 rounded-md mb-3 flex items-center justify-center">
            {channel.logo ? (
              <img
                src={channel.logo}
                alt={channel.name}
                className="w-12 h-12 object-contain"
              />
            ) : (
              <span className="text-white/30 text-2xl">📺</span>
            )}
          </div>
          <h3 className="text-white text-sm font-medium group-hover:text-white/80 transition-colors line-clamp-1">
            {channel.name}
          </h3>
          <p className="text-white/40 text-xs mt-1">{channel.category}</p>
        </Link>
      ))}
    </div>
  );
}
