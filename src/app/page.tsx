import React from 'react';
import { Navbar } from '@/src/components/layout/Navbar';
import { HeroSection } from '@/src/components/home/HeroSection';
import { CategorySection } from '@/src/components/home/CategorySection';
import { WhyLinenSection } from '@/src/components/home/WhyLinenSection';
import { TailoringSection } from '@/src/components/home/TailoringSection';
import { FeaturedCollection } from '@/src/components/home/FeaturedCollection';
import { FabricShowcase } from '@/src/components/home/FabricShowcase';
import { Testimonials } from '@/src/components/home/Testimonials';
import { CTASection } from '@/src/components/home/CTASection';
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

        {/* 4 Premium Category segments */}
        <CategorySection />

        {/* Brand Core - Why Linen Materials Grid */}
        <WhyLinenSection />

        {/* Step-by-Step Atelier Sizing Tailoring Journey */}
        <TailoringSection />

        {/* Reusable premium Product showcase with active filter tabs */}
        <FeaturedCollection />

        {/* Full-width aesthetic raw texture showcase */}
        <FabricShowcase />

        {/* Patron Reviews */}
        <Testimonials />

        {/* Atelier Appointment & Consultations Request */}
        <CTASection />
      </main>

      {/* Standard brand footer */}
      <Footer />
    </div>
  );
}
