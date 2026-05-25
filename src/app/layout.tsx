import React from 'react';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Playfair_Display, Inter, Manrope } from 'next/font/google';
import './globals.css';

// next/font/google self-hosts fonts at build time — no external request, no render-blocking,
// automatic font-display:swap, and preload links injected by Next.js automatically.
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vian Luxure',
  description: 'Experience French flax linen custom sizing and luxury tailoring atelier solutions.',
  icons: {
    icon: '/images/FooterLogo.svg',
    shortcut: '/images/FooterLogo.svg',
    apple: '/images/FooterLogo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${playfair.variable} ${inter.variable} ${manrope.variable}`}
    >
      <head>
        {/* Preload the first hero banner image for improved LCP */}
        <link
          rel="preload"
          as="image"
          href="/images/banner1.webp"
          fetchPriority="high"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
