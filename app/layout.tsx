import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'StreamHub - Premium IPTV Player',
  description: 'Watch your favorite TV channels online with our premium IPTV player. HD quality, minimalistic design, and seamless streaming experience.',
  keywords: ['IPTV', 'TV channels', 'live streaming', 'online TV', 'HLS player'],
  openGraph: {
    title: 'StreamHub - Premium IPTV Player',
    description: 'Watch your favorite TV channels online with our premium IPTV player.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen bg-black text-white font-sans">
        {children}
      </body>
    </html>
  );
}
