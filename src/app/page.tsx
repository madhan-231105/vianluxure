import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Navbar } from '@/src/components/layout/Navbar';
import { HeroSection } from '@/src/components/home/HeroSection';
import { StaticCollage } from '@/src/components/home/StaticCollage';
import { ScrollTriggerRefresh } from '@/src/components/common/ScrollTriggerRefresh';

// Below-the-fold sections: dynamically imported for better LCP & TBT
const WhoAreWe = dynamic(() => import('@/src/components/home/WhoAreWe').then(m => ({ default: m.WhoAreWe })));
const CategorySection = dynamic(() => import('@/src/components/home/CategorySection').then(m => ({ default: m.CategorySection })));
const MovingGallery = dynamic(() => import('@/src/components/home/MovingGallery').then(m => ({ default: m.MovingGallery })));
const TailoringSection = dynamic(() => import('@/src/components/home/TailoringSection').then(m => ({ default: m.TailoringSection })));
const FeaturedProductsTwo = dynamic(() => import('@/src/components/home/FeaturedProductsTwo').then(m => ({ default: m.FeaturedProductsTwo })));
const FAQ = dynamic(() => import('@/src/components/home/FAQ').then(m => ({ default: m.FAQ })));
const DetailsCTA = dynamic(() => import('@/src/components/home/DetailsCTA').then(m => ({ default: m.DetailsCTA })));
const Footer = dynamic(() => import('@/src/components/layout/Footer').then(m => ({ default: m.Footer })));

// Lightweight section-height skeleton fallbacks to prevent layout shift
function SectionSkeleton({ minHeight = '200px' }: { minHeight?: string }) {
  return <div style={{ minHeight }} aria-hidden="true" />;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F3EE] selection:bg-[#C8A97E]/30 selection:text-[#1A1A1A] overflow-x-hidden">
      <ScrollTriggerRefresh />
      {/* Absolute top navbar sticky */}
      <Navbar />

      {/* Main Sections stack */}
      <main>
        {/* Fullscreen Hero — above the fold, loaded eagerly */}
        <HeroSection />

        {/* Static collage pics of collection — near fold, loaded eagerly */}
        <StaticCollage />

        {/* Below-the-fold sections — dynamically imported */}
        <Suspense fallback={<SectionSkeleton minHeight="400px" />}>
          <WhoAreWe />
        </Suspense>

        <Suspense fallback={<SectionSkeleton minHeight="300px" />}>
          <CategorySection />
        </Suspense>

        {/* Moving Gallery */}
        <Suspense fallback={<SectionSkeleton minHeight="300px" />}>
          <MovingGallery />
        </Suspense>

        {/* Custom Tailored Just For You */}
        <Suspense fallback={<SectionSkeleton minHeight="400px" />}>
          <TailoringSection />
        </Suspense>

        {/* Featured Products (2 products, 2 large grids) */}
        <Suspense fallback={<SectionSkeleton minHeight="500px" />}>
          <FeaturedProductsTwo />
        </Suspense>

        {/* Frequently Asked Questions */}
        <Suspense fallback={<SectionSkeleton minHeight="300px" />}>
          <FAQ />
        </Suspense>

        {/* Session Box with some lines and get more details button */}
        <Suspense fallback={<SectionSkeleton minHeight="200px" />}>
          <DetailsCTA />
        </Suspense>
      </main>

      {/* Standard brand footer */}
      <Suspense fallback={<SectionSkeleton minHeight="100px" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
