import React from 'react';
import { Navbar } from '@/src/components/layout/Navbar';
import { HeroSection } from '@/src/components/home/HeroSection';
import { StaticCollage } from '@/src/components/home/StaticCollage';
import { WhoAreWe } from '@/src/components/home/WhoAreWe';
import { CategorySection } from '@/src/components/home/CategorySection';
import { MovingGallery } from '@/src/components/home/MovingGallery';
import { TailoringSection } from '@/src/components/home/TailoringSection';
import { FeaturedProductsTwo } from '@/src/components/home/FeaturedProductsTwo';
import { FAQ } from '@/src/components/home/FAQ';
import { DetailsCTA } from '@/src/components/home/DetailsCTA';
import { Footer } from '@/src/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F3EE] selection:bg-[#C8A97E]/30 selection:text-[#1A1A1A] overflow-x-hidden">
      {/* Absolute top navbar sticky */}
      <Navbar />

      {/* Main Sections stack */}
      <main>
        {/* Fullscreen Hero */}
        <HeroSection />

        {/* Static collage pics of collection */}
        <StaticCollage />

        {/* Who Are We */}
        <WhoAreWe />

        {/* Shop by Category */}
        <CategorySection />

        {/* Moving Gallery */}
        <MovingGallery />

        {/* Custom Tailored Just For You */}
        <TailoringSection />

        {/* Featured Products (2 products, 2 large grids) */}
        <FeaturedProductsTwo />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Session Box with some lines and get more details button */}
        <DetailsCTA />
      </main>

      {/* Standard brand footer */}
      <Footer />
    </div>
  );
}
