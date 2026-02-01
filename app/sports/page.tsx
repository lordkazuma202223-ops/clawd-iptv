import ChannelList from '@/components/ChannelList';

export default function SportsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          ⚽ Sports Channels
        </h1>
        <ChannelList filter="sports" />
      </div>
    </main>
  );
}
