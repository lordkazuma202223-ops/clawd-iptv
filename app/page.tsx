'use client';

import Navbar from '@/components/Navbar';
import ChannelList, { Channel } from '@/components/ChannelList';
import { channels, categories } from '@/lib/playlist';
import { useState } from 'react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />

        <div className="relative max-w-8xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">Live Streaming Platform</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
                Your Premium
              </span>
              <br />
              <span className="bg-gradient-to-r from-white/70 to-white/30 bg-clip-text text-transparent">
                IPTV Experience
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/40 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Watch your favorite channels in stunning HD quality. A minimalistic, fast, and reliable streaming platform built for the modern viewer.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#channels"
                className="inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-2xl hover:bg-white/90 transition-all hover:scale-105 shadow-xl shadow-white/10"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Start Watching
              </a>
              <a
                href="#categories"
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/10 transition-all"
              >
                Browse Channels
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 pt-12 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-white">{channels.length}+</div>
                <div className="text-white/40 text-sm">Channels</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">{categories.length - 1}</div>
                <div className="text-white/40 text-sm">Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">HD</div>
                <div className="text-white/40 text-sm">Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="max-w-8xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-2xl font-medium whitespace-nowrap transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-white text-black shadow-xl shadow-white/10 scale-105'
                  : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white hover:border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Channels Section */}
      <section id="channels" className="max-w-8xl mx-auto px-6 lg:px-12 py-12 pb-24">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              {selectedCategory === 'All' ? 'All Channels' : selectedCategory}
            </h2>
            <p className="text-white/40 text-sm">
              {selectedCategory === 'All' ? 'Explore our complete channel lineup' : `Channels in ${selectedCategory} category`}
            </p>
          </div>
          <div className="text-white/30 text-sm">
            {selectedCategory === 'All' ? channels.length : channels.filter(c => c.category === selectedCategory).length} channels
          </div>
        </div>

        <ChannelList channels={channels} category={selectedCategory === 'All' ? undefined : selectedCategory} />
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center">
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/>
                </svg>
              </div>
              <span className="text-white/60 text-sm font-medium">StreamHub IPTV</span>
            </div>
            <p className="text-white/30 text-sm">© 2024 StreamHub. Built with Next.js.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
