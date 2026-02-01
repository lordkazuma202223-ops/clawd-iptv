'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b border-white/20 bg-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-white hover:text-white/80 font-semibold">
            📺 IPTV Player
          </Link>
          <div className="flex gap-4">
            <Link href="/sports" className="text-white/70 hover:text-white">
              Sports
            </Link>
            <Link href="/burmese" className="text-white/70 hover:text-white">
              Burmese
            </Link>
            <Link href="/favorites" className="text-white/70 hover:text-white">
              ⭐ Favorites
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
