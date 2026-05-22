import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import LenisProvider from '@/components/providers/LenisProvider';

const cormorant = Cormorant_Garamond({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
});

export const metadata = {
  title: 'VL Global — Luxury Linen Tailoring Redefined',
  description:
    'Premium handcrafted linen shirts and bespoke tailoring from Tiruchengode. Crafted for the modern gentleman.',
  keywords: ['luxury linen shirts', 'bespoke tailoring', 'VL Global', 'premium linen', 'Tiruchengode'],
  openGraph: {
    title: 'VL Global — Crafted For The Modern Gentleman',
    description: 'Luxury Linen Tailoring Redefined.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-white text-[#1A1A1A] antialiased overflow-x-hidden">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
