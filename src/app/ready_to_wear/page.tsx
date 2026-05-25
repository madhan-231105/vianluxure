"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Page 2: READY-TO-WEAR PAGE (/ready_to_wear)
 */

import React from 'react';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { Container } from '@/src/components/common/Container';
import { Button } from '@/src/components/common/Button';
import { StaggeredBlurReveal } from '@/src/components/animations/StaggeredBlurReveal';
import { FadeUp } from '@/src/components/animations/FadeUp';
import { Shirt, User, Search, Check, Star, ArrowUpRight, Ban } from 'lucide-react';

export default function ReadyToWearPage() {
  const reviews = [
    { name: "Arun Prakash", date: "05.02.2026", rating: 3, text: "The Ready-to-Wear collection gave me the perfect fit and premium feel for everyday office wear. The fabric quality and stitching were really impressive." },
    { name: "Vignesh Kumar", date: "24.02.2026", rating: 4, text: "I was looking for stylish ready-to-wear shirts with a clean professional look, and this collection matched exactly what I needed." },
    { name: "Rahul Srinivasan", date: "18.04.2026", rating: 3, text: "The fitting, fabric comfort, and finishing details were excellent. It feels premium while still being comfortable for daily use." },
    { name: "Karthik Raj", date: "19.01.2026", rating: 5, text: "Their ready-to-wear designs are modern, well-structured, and easy to style for both casual and formal occasions." },
    { name: "Sanjay Menon", date: "04.03.2026", rating: 4, text: "What I liked most was the consistency in quality. The shirts looked elegant, felt comfortable, and were ready to wear straight away." }
  ];

  return (
    <div className="min-h-screen bg-[#F7F3EE] selection:bg-[#C8A97E]/30 selection:text-[#1A1A1A] overflow-x-hidden">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/product1.webp"
              alt="Ready to Wear Banner"
              className="w-full h-full object-cover object-center opacity-65 select-none scale-102"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/60 z-[1]" />
          </div>

          <Container className="relative z-10 text-center text-[#F7F3EE] w-full pt-16">
            <div className="max-w-3xl mx-auto space-y-6">
              <FadeUp delay={0.1} y={15}>
                <span className="font-sans text-xs text-[#C8A97E] uppercase tracking-[0.3em] font-bold inline-block bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                  Classic Collection
                </span>
              </FadeUp>
              
              <StaggeredBlurReveal
                lines={["Ready Styles", "For Everyday Wear"]}
                as="h1"
                stagger={0.06}
                duration={1.2}
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight"
              />
              
              <FadeUp delay={0.4} y={15}>
                <p className="font-sans text-sm sm:text-base md:text-lg text-white/80 font-light leading-relaxed max-w-2xl mx-auto pt-4">
                  Choose your preferred fabric, size, and fit from shirts designed with clean tailoring and balanced everyday styling.
                </p>
              </FadeUp>
            </div>
          </Container>
        </section>

        {/* SECTION 1: CHOOSE YOUR FABRIC (Minimalist empty status block) */}
        <section className="py-16 bg-white border-b border-[#1A1A1A]/5">
          <Container>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <FadeUp delay={0.1}>
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] font-bold text-[#C8A97E] block">
                  Material Catalog
                </span>
              </FadeUp>
              <StaggeredBlurReveal
                text="Choose Your Fabric"
                as="h2"
                className="font-serif text-3xl font-light text-[#1A1A1A]"
              />
              <FadeUp delay={0.25}>
                <p className="font-sans text-sm text-[#1A1A1A]/60 max-w-md mx-auto font-light">
                  Handpicked, sustainable fabrics sourced with care.
                </p>
              </FadeUp>

              {/* Status Banner */}
              <FadeUp delay={0.35} className="bg-[#F5F5F3] border border-[#1A1A1A]/5 rounded-2xl p-8 max-w-md mx-auto flex flex-col items-center justify-center space-y-3">
                <Ban className="w-6 h-6 text-[#1A1A1A]/35" />
                <span className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#1A1A1A]/70">
                  Status Notification
                </span>
                <p className="font-sans text-xs text-[#1A1A1A]/55 font-light leading-relaxed">
                  No materials available at the moment.
                </p>
              </FadeUp>
            </div>
          </Container>
        </section>

        {/* SECTION 2: WHAT IS READY-TO-WEAR? */}
        <section className="py-20 md:py-28 bg-[#F7F3EE]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-[1200px] mx-auto">
              
              {/* Left Column: Premium Image */}
              <FadeUp className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl max-w-sm lg:max-w-md w-full mx-auto order-1">
                <img
                  src="/images/Category1.webp"
                  alt="Ready to wear shirting model"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
                />
                <div className="absolute inset-0 bg-black/5" />
              </FadeUp>

              {/* Right Column: Narrative & Features */}
              <div className="space-y-10 order-2">
                <div className="space-y-4">
                  <FadeUp delay={0.1}>
                    <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-[#C8A97E]">WHAT IS</span>
                  </FadeUp>
                  <StaggeredBlurReveal
                    text="Ready to wear?"
                    as="h2"
                    className="font-serif text-3xl sm:text-4xl font-light text-[#1A1A1A]"
                  />
                  <FadeUp delay={0.25}>
                    <p className="font-sans text-base md:text-lg text-[#1A1A1A]/75 leading-relaxed font-light">
                      Ready-to-wear shirts are designed with standard sizes, offering a simple and convenient shopping experience. Choose from curated everyday styles tailored from premium breathable fabrics that are ready to wear straight away.
                    </p>
                  </FadeUp>
                </div>

                {/* Three Features List */}
                <div className="space-y-6">
                  {/* Block 1 */}
                  <FadeUp delay={0.3} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#C8A97E]/10 flex items-center justify-center text-[#C8A97E] shrink-0">
                      <Shirt className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif text-lg text-[#1A1A1A]">Easy Size Selection</h4>
                      <p className="font-sans text-sm text-[#1A1A1A]/60 font-light leading-relaxed">
                        Choose from standard sizes designed for a simple and convenient shopping experience.
                      </p>
                    </div>
                  </FadeUp>

                  {/* Block 2 */}
                  <FadeUp delay={0.4} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#C8A97E]/10 flex items-center justify-center text-[#C8A97E] shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif text-lg text-[#1A1A1A]">Ready For Everyday Wear</h4>
                      <p className="font-sans text-sm text-[#1A1A1A]/60 font-light leading-relaxed">
                        Designed with balanced fits and clean styling suited for regular use across different occasions.
                      </p>
                    </div>
                  </FadeUp>

                  {/* Block 3 */}
                  <FadeUp delay={0.5} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#C8A97E]/10 flex items-center justify-center text-[#C8A97E] shrink-0">
                      <Search className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif text-lg text-[#1A1A1A]">Simple Shopping Experience</h4>
                      <p className="font-sans text-sm text-[#1A1A1A]/60 font-light leading-relaxed">
                        Select your preferred fabric, size, and fit without additional customization or tailoring steps.
                      </p>
                    </div>
                  </FadeUp>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* SECTION 3: WHY READY-TO-WEAR? */}
        <section className="py-20 md:py-24 bg-white border-y border-[#1A1A1A]/5">
          <Container>
            <div className="max-w-[1000px] mx-auto">
              <div className="text-center mb-16 space-y-4">
                <FadeUp delay={0.1}>
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-[#C8A97E]">Atelier Specs</span>
                </FadeUp>
                <StaggeredBlurReveal
                  text="Why Ready to Wear?"
                  as="h2"
                  className="font-serif text-3xl sm:text-4xl font-light text-[#1A1A1A]"
                />
                <FadeUp delay={0.2}>
                  <p className="font-sans text-sm sm:text-base text-[#1A1A1A]/60 max-w-xl mx-auto font-light leading-relaxed">
                    Ready-to-wear shirts are designed for everyday use with breathable fabrics, balanced fits, and structured construction details.
                  </p>
                </FadeUp>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Benefit 1 */}
                <FadeUp delay={0.15} className="bg-[#F7F3EE] p-8 rounded-[24px] border border-[#1A1A1A]/5 space-y-4">
                  <div className="w-8 h-8 rounded-full bg-[#C8A97E] text-[#1A1A1A] flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-xl text-[#1A1A1A]">Easy Size Selection</h4>
                  <p className="font-sans text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
                    Choose from standard sizes designed for regular wear.
                  </p>
                </FadeUp>

                {/* Benefit 2 */}
                <FadeUp delay={0.3} className="bg-[#F7F3EE] p-8 rounded-[24px] border border-[#1A1A1A]/5 space-y-4">
                  <div className="w-8 h-8 rounded-full bg-[#C8A97E] text-[#1A1A1A] flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-xl text-[#1A1A1A]">Everyday Fabric Options</h4>
                  <p className="font-sans text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
                    Selected linen and cotton fabrics designed for breathable and long-lasting use.
                  </p>
                </FadeUp>

                {/* Benefit 3 */}
                <FadeUp delay={0.45} className="bg-[#F7F3EE] p-8 rounded-[24px] border border-[#1A1A1A]/5 space-y-4">
                  <div className="w-8 h-8 rounded-full bg-[#C8A97E] text-[#1A1A1A] flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-xl text-[#1A1A1A]">Clean Shirt Construction</h4>
                  <p className="font-sans text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
                    Finished using structured stitching and refined tailoring techniques.
                  </p>
                </FadeUp>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 4: CUSTOMER REVIEWS */}
        <section className="py-20 bg-[#F5F5F3]">
          <Container>
            <div className="max-w-[1100px] mx-auto">
              <div className="text-center mb-16 space-y-4">
                <FadeUp delay={0.1}>
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-[#C8A97E]">Atelier Journal</span>
                </FadeUp>
                <StaggeredBlurReveal
                  text="Customer Stories"
                  as="h2"
                  className="font-serif text-3xl sm:text-4xl font-light text-[#1A1A1A]"
                />
              </div>

              {/* Reviews Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((rev, i) => (
                  <FadeUp key={rev.name} delay={0.08 * i} className="bg-white p-6 sm:p-8 rounded-[20px] shadow-sm border border-[#1A1A1A]/5 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      {/* Star rating */}
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, starIdx) => (
                          <Star
                            key={starIdx}
                            className={`w-3.5 h-3.5 ${
                              starIdx < rev.rating
                                ? 'text-[#C8A97E] fill-[#C8A97E]'
                                : 'text-[#1A1A1A]/10'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="font-sans text-xs sm:text-sm text-[#1A1A1A]/75 leading-relaxed font-light italic">
                        "{rev.text}"
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[#1A1A1A]/5 text-[10px] sm:text-xs font-sans">
                      <span className="font-semibold text-[#1A1A1A]">{rev.name}</span>
                      <span className="text-[#1A1A1A]/40">{rev.date}</span>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 5: CTA */}
        <section className="py-24 bg-[#1A1A1A] text-[#F7F3EE] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A97E] rounded-full blur-[100px]" />
          </div>

          <Container className="relative z-10 text-center">
            <div className="max-w-2xl mx-auto space-y-8">
              <StaggeredBlurReveal
                lines={["Looking for Linen", "in Your Style?"]}
                as="h2"
                className="font-serif text-4xl md:text-5xl font-light text-white leading-tight"
              />
              <FadeUp delay={0.3}>
                <p className="font-sans text-base md:text-lg text-white/70 font-light leading-relaxed max-w-xl mx-auto">
                  From ready-to-wear styles to personalized tailoring options, find linen shirts designed with natural fabrics and clean everyday detailing.
                </p>
              </FadeUp>

              <FadeUp delay={0.4} className="pt-4">
                <Button
                  variant="primary"
                  className="bg-[#C8A97E] text-[#1A1A1A] hover:bg-[#b0936b] transition-all px-10 py-4 rounded-full inline-flex items-center gap-2 group"
                  asAnchor
                  href="/made_to_wear"
                >
                  Get More Details
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </FadeUp>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
