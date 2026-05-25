import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { Container } from '@/src/components/common/Container';
import { Button } from '@/src/components/common/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F7F3EE] text-[#1A1A1A] flex flex-col justify-between selection:bg-[#C8A97E]/30 overflow-x-hidden">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main 404 Content */}
      <main className="flex-grow flex items-center justify-center pt-32 pb-24">
        <Container className="text-center">
          <span className="font-sans text-xs text-[#C8A97E] uppercase tracking-[0.3em] font-semibold mb-4 block">
            Collection Error 404
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light mb-6 tracking-wide text-[#1A1A1A]">
            Page Not Found
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#1A1A1A]/60 max-w-md mx-auto mb-10 font-light leading-relaxed">
            The page you are looking for does not exist, has been archived, or is temporarily unavailable under the current collection.
          </p>
          <Button variant="primary" asAnchor href="/" className="px-8 py-4 bg-[#C8A97E] text-[#1A1A1A] hover:bg-[#b0936b] transition-colors border-transparent cursor-pointer">
            Return to Atelier
          </Button>
        </Container>
      </main>

      {/* Global Brand Footer */}
      <Footer />
    </div>
  );
}
