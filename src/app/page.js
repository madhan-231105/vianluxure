/**
 * VL Global — Homepage
 * Assembles all cinematic luxury sections.
 */

import Navbar              from '@/components/layout/Navbar';
import GrainOverlay        from '@/components/ui/GrainOverlay';
import MouseGlow           from '@/components/ui/MouseGlow';
import HeroSection         from '@/components/sections/HeroSection';
import BrandStory          from '@/components/sections/BrandStory';
import CategoryShowcase    from '@/components/sections/CategoryShowcase';
import FeaturedCollection  from '@/components/sections/FeaturedCollection';
import BespokeProcess      from '@/components/sections/BespokeProcess';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection          from '@/components/sections/FAQSection';
import FooterSection       from '@/components/sections/FooterSection';

export default function Page() {
  return (
    <div className="relative overflow-x-hidden bg-[#0D0D0D]">
      {/* Global atmosphere */}
      <GrainOverlay />
      <MouseGlow />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <HeroSection />
        <BrandStory />
        <CategoryShowcase />
        <FeaturedCollection />
        <BespokeProcess />
        <TestimonialsSection />
        <FAQSection />
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
