'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/95 backdrop-blur-xl shadow-2xl shadow-black/50' : 'bg-black/80 backdrop-blur-md'
      }`}>
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 bg-gradient-to-br from-white to-gray-300 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-300">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 rounded-2xl" />
              </div>
              <div>
                <span className="block text-white font-bold text-xl tracking-tight group-hover:opacity-90 transition-opacity">
                  StreamHub
                </span>
                <span className="block text-white/40 text-xs font-medium tracking-wide">
                  IPTV PLAYER
                </span>
              </div>
            </a>

            {/* Navigation */}
            <div className="hidden md:flex items-center gap-10">
              <a href="/#channels" className="text-white/60 hover:text-white font-medium transition-all hover:text-white/90 relative group">
                Channels
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 group-hover:w-full transition-all duration-300" />
              </a>
              <a href="/#categories" className="text-white/60 hover:text-white font-medium transition-all hover:text-white/90 relative group">
                Categories
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 group-hover:w-full transition-all duration-300" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white p-2 hover:bg-white/10 rounded-xl transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Bottom padding for fixed navbar */}
      <div className="h-20" />
    </>
  );
}
