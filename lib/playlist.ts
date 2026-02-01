import { Channel } from '@/components/ChannelList';

// Real working HLS streams from trusted public sources
export const channels: Channel[] = [
  {
    id: 'big-buck-bunny',
    name: 'Big Buck Bunny',
    category: 'Entertainment',
    url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
  },
  {
    id: 'sintel',
    name: 'Sintel Movie',
    category: 'Movies',
    url: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
  },
  {
    id: 'akamai-test',
    name: 'Akamai Live Test',
    category: 'Sports',
    url: 'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8',
  },
  {
    id: 'bbb-4k',
    name: 'Big Buck Bunny 4K',
    category: 'Entertainment',
    url: 'https://bitmovin-a.akamaihd.net/content/playhouse-vr/m3u8s/f1080p.m3u8',
  },
  {
    id: 'bipbop',
    name: 'BIP BOP Test',
    category: 'Test',
    url: 'https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8',
  },
  {
    id: 'oceans',
    name: 'Oceans Documentary',
    category: 'Documentary',
    url: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
  },
];

export const categories = ['All', ...new Set(channels.map(c => c.category))];
