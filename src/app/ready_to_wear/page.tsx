"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Page 2: READY-TO-WEAR PAGE (/ready_to_wear)
 * Updated with exact content from provided screenshots.
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
  // Exact Reviews from Screenshot 3
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

        {/* SECTION 1: CHOOSE YOUR FABRIC */}
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
              <FadeUp delay={0.35} className="bg-[#F5F5F3] border border-[#1A1A1A]/5 rounded-2xl p-8 max-w-md mx-auto flex flex-col items-center justify-center space-y-3 mt-8">
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

        {/* SECTION 2: WHAT IS READY-TO-WEAR? (Screenshot 1 Layout) */}
        <section className="py-20 md:py-24 bg-white">
          <Container>
            <div className="max-w-[1200px] mx-auto space-y-12">
              <div className="space-y-4">
                <FadeUp delay={0.1}>
                  <span className="font-sans text-lg text-[#1A1A1A]/60 font-light block">WHAT IS</span>
                </FadeUp>
                <StaggeredBlurReveal
                  text="Ready to wear?"
                  as="h2"
                  className="font-serif text-5xl md:text-7xl font-light text-[#1A1A1A] leading-tight"
                />
                <FadeUp delay={0.25}>
                  <p className="font-sans text-sm sm:text-base text-[#1A1A1A]/75 leading-relaxed font-light max-w-4xl pt-6">
                    Made-to-wear offers a more personalized approach than ready-made shirts while still using structured sizing. Customers can customize selected design elements such as collars, cuffs, buttons, sleeves, and finishing details.
                  </p>
                </FadeUp>
              </div>

              {/* Feature Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 border border-[#1A1A1A]/10 rounded-xl overflow-hidden mt-12 shadow-sm">
                {/* Easy Size Selection */}
                <FadeUp delay={0.3} className="p-10 border-b md:border-b-0 md:border-r border-[#1A1A1A]/10 space-y-4">
                  <div className="w-8 h-8 text-[#1A1A1A]/70"><Shirt strokeWidth={1.5} /></div>
                  <h4 className="font-sans font-bold text-lg text-[#1A1A1A]">Easy Size Selection</h4>
                  <p className="font-sans text-sm text-[#1A1A1A]/60 font-light leading-relaxed">
                    Choose from standard sizes designed for a simple and convenient shopping experience.
                  </p>
                </FadeUp>

                {/* Ready For Everyday Wear */}
                <FadeUp delay={0.4} className="p-10 border-b md:border-b-0 md:border-r border-[#1A1A1A]/10 space-y-4">
                  <div className="w-8 h-8 text-[#1A1A1A]/70"><User strokeWidth={1.5} /></div>
                  <h4 className="font-sans font-bold text-lg text-[#1A1A1A]">Ready For Everyday Wear</h4>
                  <p className="font-sans text-sm text-[#1A1A1A]/60 font-light leading-relaxed">
                    Designed with balanced fits and clean styling suited for regular use across different occasions.
                  </p>
                </FadeUp>

                {/* Simple Shopping Experience */}
                <FadeUp delay={0.5} className="p-10 space-y-4">
                  <div className="w-8 h-8 text-[#1A1A1A]/70"><Search strokeWidth={1.5} /></div>
                  <h4 className="font-sans font-bold text-lg text-[#1A1A1A]">Simple Shopping Experience</h4>
                  <p className="font-sans text-sm text-[#1A1A1A]/60 font-light leading-relaxed">
                    Select your preferred fabric, size, and fit without additional customization or tailoring steps.
                  </p>
                </FadeUp>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 3: WHY READY-TO-WEAR? (Screenshot 2 Layout) */}
        <section className="py-20 md:py-24 bg-white">
          <Container>
            <div className="max-w-[1000px] mx-auto space-y-10">
              <div className="space-y-4">
                <FadeUp delay={0.1}>
                  <span className="font-sans text-lg text-[#1A1A1A]/50 font-light block mb-2">Why</span>
                  <h2 className="font-serif text-6xl md:text-7xl font-light text-[#1A1A1A] tracking-tight">Ready to Wear?</h2>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <p className="font-sans text-sm sm:text-base text-[#1A1A1A]/70 leading-relaxed font-light pt-6">
                    Ready-to-wear shirts are designed for everyday use with breathable fabrics, balanced fits, and structured construction details.
                  </p>
                </FadeUp>
              </div>

              <div className="space-y-8 pt-8">
                {/* Bullet 1 */}
                <FadeUp delay={0.3} className="flex items-start gap-5">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#F5F5F3] border border-[#1A1A1A]/10 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-[#1A1A1A]/40" />
                  </div>
                  <p className="font-sans text-base md:text-lg">
                    <strong className="font-bold text-[#1A1A1A]">Easy Size Selection:</strong>{" "}
                    <span className="text-[#1A1A1A]/70 font-light">Choose from standard sizes designed for regular wear.</span>
                  </p>
                </FadeUp>

                {/* Bullet 2 */}
                <FadeUp delay={0.4} className="flex items-start gap-5">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#F5F5F3] border border-[#1A1A1A]/10 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-[#1A1A1A]/40" />
                  </div>
                  <p className="font-sans text-base md:text-lg">
                    <strong className="font-bold text-[#1A1A1A]">Everyday Fabric Options:</strong>{" "}
                    <span className="text-[#1A1A1A]/70 font-light">Selected linen and cotton fabrics designed for breathable and long-lasting use.</span>
                  </p>
                </FadeUp>

                {/* Bullet 3 */}
                <FadeUp delay={0.5} className="flex items-start gap-5">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#F5F5F3] border border-[#1A1A1A]/10 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-[#1A1A1A]/40" />
                  </div>
                  <p className="font-sans text-base md:text-lg">
                    <strong className="font-bold text-[#1A1A1A]">Clean Shirt Construction:</strong>{" "}
                    <span className="text-[#1A1A1A]/70 font-light">Finished using structured stitching and refined tailoring techniques.</span>
                  </p>
                </FadeUp>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 4: CUSTOMER STORIES (Screenshot 3 Layout) */}
        <section className="py-24 bg-[#F5F5F3] border-y border-[#1A1A1A]/5">
          <Container>
            <div className="max-w-[1000px] mx-auto">
              <div className="mb-20">
                <StaggeredBlurReveal
                  text="Customer Stories"
                  as="h2"
                  className="font-serif text-6xl md:text-7xl font-light text-[#1A1A1A]"
                />
              </div>

              <div className="space-y-16">
                {reviews.map((rev, i) => (
                  <FadeUp key={rev.name} delay={0.1 * i} className="flex flex-col md:flex-row gap-6 items-start group">
                    {/* User Avatar */}
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center">
                        <User className="text-white w-6 h-6" />
                      </div>
                    </div>

                    <div className="flex-grow space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="space-y-0.5">
                          <h4 className="font-sans text-xl font-bold text-[#1A1A1A]">{rev.name}</h4>
                          <p className="font-sans text-xs text-[#1A1A1A]/40">{rev.date}</p>
                        </div>
                        {/* Rating Stars */}
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, starIdx) => (
                            <Star
                              key={starIdx}
                              className={`w-4 h-4 ${
                                starIdx < rev.rating
                                  ? 'text-[#1A1A1A]/60 fill-[#1A1A1A]/60'
                                  : 'text-[#1A1A1A]/10'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="font-sans text-sm md:text-lg text-[#1A1A1A]/60 leading-relaxed font-light italic">
                        "{rev.text}"
                      </p>
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