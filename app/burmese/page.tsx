import ChannelList from '@/components/ChannelList';

export default function BurmesePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          🇲🇲 Burmese Channels
        </h1>
        <p className="text-white/70 text-center mb-8 max-w-2xl mx-auto">
          Myanmar TV channels and content
        </p>
        <ChannelList filter="burmese" />
      </div>
    </main>
  );
}
