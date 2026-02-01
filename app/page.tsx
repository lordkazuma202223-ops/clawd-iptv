import Navbar from '@/components/Navbar';
import ChannelList, { Channel } from '@/components/ChannelList';
import { channels, categories } from '@/lib/playlist';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            IPTV Player
          </h1>
          <p className="text-white/50 text-lg max-w-2xl">
            Minimalistic IPTV streaming experience. Watch your favorite channels
            in high quality.
          </p>
        </section>

        {/* Categories Section */}
        <section id="categories" className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex gap-3 overflow-x-auto pb-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all whitespace-nowrap"
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Channels Section */}
        <section id="channels" className="max-w-7xl mx-auto px-6 py-8 pb-20">
          <h2 className="text-2xl font-semibold mb-6">All Channels</h2>
          <ChannelList channels={channels} />
        </section>
      </div>
    </main>
  );
}
