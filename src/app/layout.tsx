import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Caveat } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-caveat',
  weight: ['400', '500', '600', '700'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ff6d33',
};

export const metadata: Metadata = {
  title: 'Propsoch - Bangalore - Real Estate - Search/Buy/Sell Properties | Propsoch',
  description:
    "Buy your dream home confidently with Propsoch - Bangalore's smartest real estate service for home buyers to get expert advice, property insights & reports.",
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://www.propsoch.com/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${caveat.variable} scroll-smooth`}>
      <body className="bg-surface-bg min-h-dvh text-text-main font-sans antialiased overflow-x-hidden selection:bg-primary/20 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
