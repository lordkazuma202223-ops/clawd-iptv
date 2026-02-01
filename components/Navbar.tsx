'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white text-xl font-semibold tracking-tight hover:opacity-70 transition-opacity">
            IPTV
          </Link>
          <div className="flex gap-6">
            <Link href="/#channels" className="text-sm text-white/70 hover:text-white transition-colors">
              Channels
            </Link>
            <Link href="/#categories" className="text-sm text-white/70 hover:text-white transition-colors">
              Categories
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
