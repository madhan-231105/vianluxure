import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
