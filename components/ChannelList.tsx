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

  if (filteredChannels.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">📺</div>
        <p className="text-white/40 text-lg">No channels found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
      {filteredChannels.map((channel) => (
        <Link
          key={channel.id}
          href={`/player/${channel.id}`}
          className="group relative block"
        >
          {/* Card */}
          <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5 hover:border-white/10 hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1">
            {/* Thumbnail */}
            <div className="relative aspect-video bg-gradient-to-br from-black/60 to-black/40 flex items-center justify-center overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#grid)"/>
                </svg>
              </div>

              {/* Logo */}
              {channel.logo ? (
                <img
                  src={channel.logo}
                  alt={channel.name}
                  className="relative w-16 h-16 object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl"
                />
              ) : (
                <div className="relative text-5xl opacity-40 transition-all duration-500 group-hover:opacity-60 group-hover:scale-110">
                  📺
                </div>
              )}

              {/* Live Badge */}
              <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg shadow-red-900/50">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                LIVE
              </div>

              {/* Play Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-2xl transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-75">
                  <svg className="w-6 h-6 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                <span className="text-white/80 text-xs font-medium">{channel.category}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-white transition-colors line-clamp-1">
                {channel.name}
              </h3>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <span>{channel.category}</span>
              </div>
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
          </div>
        </Link>
      ))}
    </div>
  );
}
