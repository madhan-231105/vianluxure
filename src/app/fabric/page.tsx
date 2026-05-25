"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Page 1: FABRIC PAGE (/fabric)
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { Container } from '@/src/components/common/Container';
import { Button } from '@/src/components/common/Button';
import { StaggeredBlurReveal } from '@/src/components/animations/StaggeredBlurReveal';
import { FadeUp } from '@/src/components/animations/FadeUp';
import { Shield, Sparkles, Sliders, ChevronDown, Check, Star, ArrowUpRight } from 'lucide-react';

export default function FabricPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const reviews = [
    { name: "Arjun", date: "05.02.2026", rating: 3, text: "The fabric feels soft and breathable for everyday wear. The texture and overall quality looked really good." },
    { name: "Karthik", date: "24.02.2026", rating: 4, text: "I liked the natural linen feel, and the fabric width was perfect for shirt stitching." },
    { name: "Dinesh", date: "18.04.2026", rating: 3, text: "Good breathable fabric with a soft feel. Suitable for both casual and formal shirt stitching" },
    { name: "Karthik Raj", date: "19.01.2026", rating: 5, text: "Their ready-to-wear designs are modern, well-structured, and easy to style for both casual and formal occasions." },
    { name: "Sanjay Menon", date: "04.03.2026", rating: 4, text: "What I liked most was the consistency in quality. The shirts looked elegant, felt comfortable, and were ready to wear straight away." }
  ];

  const faqs = [
    { q: "What is pure linen fabric?", a: "Pure linen fabric is made from natural flax fibers known for breathable texture, durability, and lightweight everyday wear." },
    { q: "Is cotton-linen suitable for daily use?", a: "Yes, our cotton-linen blend fabric is engineered for maximum softness, daily durability, and breathability, making it the perfect choice for regular wash-and-wear shirting." },
    { q: "What is GSM in fabrics?", a: "GSM stands for Grams per Square Meter. It measures the weight and density of the fabric, helping you choose lightweight linen for hot summer climates or heavier weaves for structured draping." },
    { q: "Are these fabrics suitable for shirting?", a: "Absolutely. All our selected flax and Giza cotton fibers are double-enzymed and pre-shrunk, making them perfect for crafting high-quality, durable casual and formal shirts." },
    { q: "Does linen become softer after washing?", a: "Yes, unlike synthetic fibers, pure organic flax linen becomes significantly softer, more supple, and more comfortable against the skin with every gentle wash cycle." }
  ];

  return (
    <div className="min-h-screen bg-[#F7F3EE] selection:bg-[#C8A97E]/30 selection:text-[#1A1A1A] overflow-x-hidden">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/vian_fabric_showcase_1779434571577.webp"
              alt="Organic Flax Fabric Banner"
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
                lines={["Natural Fabrics", "For Everyday Use"]}
                as="h1"
                stagger={0.06}
                duration={1.2}
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight"
              />
              
              <FadeUp delay={0.4} y={15}>
                <p className="font-sans text-sm sm:text-base md:text-lg text-white/80 font-light leading-relaxed max-w-2xl mx-auto pt-4">
                  Explore linen and cotton fabrics selected for breathable texture, soft feel, and regular everyday wear.
                </p>
              </FadeUp>
            </div>
          </Container>
        </section>

        {/* SECTION 1: WHAT IS FABRIC COLLECTION? */}
        <section className="py-20 md:py-28 bg-[#F7F3EE]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-[1200px] mx-auto">
              {/* Left Column: Image */}
              <FadeUp className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl max-w-sm lg:max-w-md w-full mx-auto order-1">
                <img
                  src="/images/Category1.webp"
                  alt="VL Global Premium Fabrics"
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
                    text="Fabric Collection?"
                    as="h2"
                    className="font-serif text-3xl sm:text-4xl font-light text-[#1A1A1A]"
                  />
                  <FadeUp delay={0.25}>
                    <p className="font-sans text-base md:text-lg text-[#1A1A1A]/75 leading-relaxed font-light">
                      Explore linen and cotton fabrics designed for breathable wear, soft texture, and everyday shirting use.
                    </p>
                  </FadeUp>
                </div>

                {/* Three Features List */}
                <div className="space-y-6">
                  {/* Block 1 */}
                  <FadeUp delay={0.3} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#C8A97E]/10 flex items-center justify-center text-[#C8A97E] shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif text-lg text-[#1A1A1A]">Breathable Fabric Texture</h4>
                      <p className="font-sans text-sm text-[#1A1A1A]/60 font-light leading-relaxed">
                        Designed with natural linen and cotton fibers suitable for comfortable everyday wear.
                      </p>
                    </div>
                  </FadeUp>

                  {/* Block 2 */}
                  <FadeUp delay={0.4} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#C8A97E]/10 flex items-center justify-center text-[#C8A97E] shrink-0">
                      <Sliders className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif text-lg text-[#1A1A1A]">Everyday Fabric Options</h4>
                      <p className="font-sans text-sm text-[#1A1A1A]/60 font-light leading-relaxed">
                        Selected fabrics suitable for shirt construction, regular use, and balanced fabric feel.
                      </p>
                    </div>
                  </FadeUp>

                  {/* Block 3 */}
                  <FadeUp delay={0.5} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#C8A97E]/10 flex items-center justify-center text-[#C8A97E] shrink-0">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif text-lg text-[#1A1A1A]">Simple Fabric Selection</h4>
                      <p className="font-sans text-sm text-[#1A1A1A]/60 font-light leading-relaxed">
                        Choose fabrics based on texture, blend, and everyday shirting preference.
                      </p>
                    </div>
                  </FadeUp>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 2: WHY CHOOSE OUR FABRICS? */}
        <section className="py-20 md:py-24 bg-white border-y border-[#1A1A1A]/5">
          <Container>
            <div className="max-w-[1000px] mx-auto">
              <div className="text-center mb-16 space-y-4">
                <FadeUp delay={0.1}>
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-[#C8A97E]">Atelier Specs</span>
                </FadeUp>
                <StaggeredBlurReveal
                  text="Why Choose Our Fabrics?"
                  as="h2"
                  className="font-serif text-3xl sm:text-4xl font-light text-[#1A1A1A]"
                />
                <FadeUp delay={0.2}>
                  <p className="font-sans text-sm sm:text-base text-[#1A1A1A]/60 max-w-xl mx-auto font-light leading-relaxed">
                    Our linen and cotton fabrics are selected for breathable texture, soft feel, and everyday shirting use.
                  </p>
                </FadeUp>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Benefit 1 */}
                <FadeUp delay={0.15} className="bg-[#F7F3EE] p-8 rounded-[24px] border border-[#1A1A1A]/5 space-y-4">
                  <div className="w-8 h-8 rounded-full bg-[#C8A97E] text-[#1A1A1A] flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-xl text-[#1A1A1A]">Pure Linen Fabric</h4>
                  <p className="font-sans text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
                    European premium 70 lea pure linen fabric designed for breathable wear and natural texture.
                  </p>
                </FadeUp>

                {/* Benefit 2 */}
                <FadeUp delay={0.3} className="bg-[#F7F3EE] p-8 rounded-[24px] border border-[#1A1A1A]/5 space-y-4">
                  <div className="w-8 h-8 rounded-full bg-[#C8A97E] text-[#1A1A1A] flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-xl text-[#1A1A1A]">Cotton Linen Blend</h4>
                  <p className="font-sans text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
                    Balanced linen and cotton fabrics are created for soft texture and comfortable everyday use.
                  </p>
                </FadeUp>

                {/* Benefit 3 */}
                <FadeUp delay={0.45} className="bg-[#F7F3EE] p-8 rounded-[24px] border border-[#1A1A1A]/5 space-y-4">
                  <div className="w-8 h-8 rounded-full bg-[#C8A97E] text-[#1A1A1A] flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-xl text-[#1A1A1A]">Scallop Pattern Fabric</h4>
                  <p className="font-sans text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
                    Cotton-linen fabric with scallop-pattern detailing designed for clean and refined fabric styling.
                  </p>
                </FadeUp>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 3: CUSTOMER REVIEWS */}
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

              {/* Staggered Reviews Grid */}
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

        {/* SECTION 4: FAQs */}
        <section className="py-24 bg-[#F7F3EE]">
          <Container className="max-w-3xl">
            <div className="text-center mb-16 space-y-4">
              <FadeUp delay={0.1}>
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-[#C8A97E]">Everything You Need To Know</span>
              </FadeUp>
              <StaggeredBlurReveal
                text="Frequently Asked Questions"
                as="h2"
                className="font-serif text-3xl md:text-4xl font-light text-[#1A1A1A] text-center"
              />
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <FadeUp
                  key={idx}
                  delay={0.08 * (idx + 1)}
                  className="group bg-white rounded-xl border border-[#1A1A1A]/5 overflow-hidden transition-all duration-300 shadow-sm"
                >
                  <details
                    open={openFaq === idx}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenFaq(openFaq === idx ? null : idx);
                    }}
                    className="w-full"
                  >
                    <summary className="list-none p-6 flex justify-between items-center cursor-pointer font-sans font-medium text-[#1A1A1A] hover:bg-[#F5F5F3]">
                      <span className="text-sm md:text-base">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-[#C8A97E] transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                    </summary>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-[#1A1A1A]/70 text-sm leading-relaxed font-light border-t border-[#1A1A1A]/5 pt-4">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </details>
                </FadeUp>
              ))}
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
                  href="/ready_to_wear"
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
