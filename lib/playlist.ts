import { Channel } from '@/components/ChannelList';

// Sample public HLS streams
// Replace with your IPTV playlist URL for real channels
export const channels: Channel[] = [
  {
    id: 'big-buck-bunny',
    name: 'Big Buck Bunny',
    category: 'Entertainment',
    url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  },
  {
    id: 'sintel',
    name: 'Sintel',
    category: 'Movies',
    url: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
  },
  {
    id: 'akamai-test',
    name: 'Akamai Test Stream',
    category: 'Test',
    url: 'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8',
  },
];

export const categories = ['All', ...new Set(channels.map(c => c.category))];
