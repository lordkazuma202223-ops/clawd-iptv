import Navbar from '@/components/Navbar';
import ChannelList from '@/components/ChannelList';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          📺 IPTV Channels
        </h1>
        <p className="text-white/70 text-center mb-8 max-w-2xl mx-auto">
          Select a channel to start watching
        </p>
        <ChannelList />
      </div>
    </main>
  );
}
