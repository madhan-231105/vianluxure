"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Brand: VIAN LUXURE (VL Global)
 */

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { Container } from '@/src/components/common/Container';
import { Button } from '@/src/components/common/Button';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { StaggeredBlurReveal } from '@/src/components/animations/StaggeredBlurReveal';
import { FadeUp } from '@/src/components/animations/FadeUp';
import { FAQ } from '@/src/components/home/FAQ';

// Animation variants for reusability and clean SSR hydration
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#F7F3EE] selection:bg-[#C8A97E]/30 selection:text-[#1A1A1A] overflow-x-hidden">
      <Navbar />

      <main>
        {/* --- SECTION 1: HERO SECTION --- */}
        <section className="relative h-[75vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
          <motion.div 
            initial={{ scale: 1.08, opacity: 0.4 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
            className="absolute inset-0 z-0"
          >
            <Image
              src="/images/banner1.webp" // Optimized via Next.js
              alt="Vian Luxure organic linen luxury banner"
              fill
              priority // High priority for LCP speed
              className="object-cover object-center"
              quality={90}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-[#F7F3EE] z-[1]" />

          <Container className="relative z-10 text-center text-[#F7F3EE]">
            <div className="max-w-4xl mx-auto space-y-6">
              <FadeUp delay={0.1} y={15}>
                <span className="font-sans text-xs text-[#C8A97E] uppercase tracking-[0.4em] font-bold inline-block bg-white/5 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10">
                  Premium Linen Crafts
                </span>
              </FadeUp>
              
              <StaggeredBlurReveal
                lines={["Made Around", "Natural Linen"]}
                as="h1"
                stagger={0.06}
                duration={1.2}
                className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[1.1]"
              />
              
              <FadeUp delay={0.4} y={15}>
                <p className="font-serif text-xl md:text-2xl text-[#C8A97E] italic font-light tracking-wide">
                  Into The Fabric of Life
                </p>
              </FadeUp>

              <FadeUp delay={0.5} y={15}>
                <p className="font-sans text-sm sm:text-base md:text-lg text-[#F7F3EE]/80 font-light leading-relaxed max-w-2xl mx-auto pt-4">
                  From lightweight textures to structured tailoring, our linen shirts are designed for regular wear with breathable fabrics and timeless everyday detailing.
                </p>
              </FadeUp>
            </div>
          </Container>
        </section>

        {/* --- SECTION 2: WHO WE ARE --- */}
        <section className="py-16 md:py-20 bg-[#F7F3EE]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <FadeUp className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl max-w-sm lg:max-w-md w-full mx-auto">
                <Image
                  src="/images/aboutus_atelier.png"
                  alt="Vian Luxure atelier and craftsmanship"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </FadeUp>

              <div className="space-y-6">
                <FadeUp delay={0.1}>
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-[#C8A97E]">Who We Are</span>
                </FadeUp>
                
                <StaggeredBlurReveal
                  text="VL Global"
                  as="h2"
                  className="font-serif text-4xl md:text-5xl font-light text-[#1A1A1A]"
                />
                
                <FadeUp delay={0.25}>
                  <p className="font-sans text-base md:text-lg text-[#1A1A1A]/75 leading-relaxed font-light">
                    VL Global is a premium clothing brand focused on creating refined everyday wear through carefully selected linen and cotton fabrics. With breathable textures, precise tailoring, and sophisticated fits, every piece is designed to deliver comfort, elegance, and timeless style.
                  </p>
                </FadeUp>
                
                <FadeUp delay={0.35}>
                  <p className="font-sans text-base text-[#1A1A1A]/75 leading-relaxed font-light">
                    Thoughtful craftsmanship and premium detailing create shirts that feel versatile, elevated, and effortlessly distinctive. We are owned by VIJAYLAKSHMI GLOBAL EMART OPC PRIVATE LIMITED.
                  </p>
                </FadeUp>
                
                <FadeUp delay={0.45} className="grid grid-cols-2 gap-6 pt-6 border-t border-[#1A1A1A]/10 font-sans text-xs">
                  <div>
                    <span className="text-[#C8A97E] uppercase tracking-[0.2em] block font-semibold mb-1">Origin Sourcing</span>
                    <span className="text-[#1A1A1A]/70 leading-relaxed block font-light">Certified Normandy Flax fields in Northern France.</span>
                  </div>
                  <div>
                    <span className="text-[#C8A97E] uppercase tracking-[0.2em] block font-semibold mb-1">Weave Technique</span>
                    <span className="text-[#1A1A1A]/70 leading-relaxed block font-light">Stone-washed mills producing dynamic breathability.</span>
                  </div>
                </FadeUp>
              </div>
            </div>
          </Container>
        </section>

        {/* --- SECTION 3: VISION & MISSION --- */}
        <section className="py-24 bg-[#F5F5F3]">
          <Container>
            <div className="text-center mb-16 space-y-4">
              <FadeUp delay={0.1}>
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-[#C8A97E]">Our Foundation</span>
              </FadeUp>
              <StaggeredBlurReveal
                text="Vision & Mission"
                as="h2"
                className="font-serif text-4xl md:text-5xl font-light text-[#1A1A1A]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision Card */}
              <FadeUp delay={0.15} className="bg-[#F7F3EE] p-8 md:p-12 rounded-3xl border border-[#1A1A1A]/5 shadow-sm">
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-[#C8A97E] mb-6 block">Vision</span>
                <h3 className="font-serif text-2xl mb-4 font-light text-[#1A1A1A]">Creating Timeless Wear</h3>
                <p className="font-sans text-sm text-[#1A1A1A]/70 mb-8 leading-relaxed">
                  Our vision is to create linen shirts designed for everyday wear, combining breathable fabrics, clean tailoring, and timeless simplicity. We aim to remain relevant beyond changing trends.
                </p>
                <ul className="space-y-3">
                  {[
                    "Breathable linen fabrics for everyday use",
                    "Tailored fits that feel balanced",
                    "Timeless designs with refined detailing",
                    "Carefully selected natural fabrics",
                    "Thoughtful craftsmanship"
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs font-sans text-[#1A1A1A]/75">
                      <CheckCircle2 className="w-4 h-4 text-[#C8A97E] shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </FadeUp>

              {/* Mission Card */}
              <FadeUp delay={0.3} className="bg-[#1A1A1A] p-8 md:p-12 rounded-3xl text-[#F7F3EE]">
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-[#C8A97E] mb-6 block">Mission</span>
                <h3 className="font-serif text-2xl mb-4 font-light text-white">Crafting with Purpose</h3>
                <p className="font-sans text-sm text-white/70 mb-8 leading-relaxed">
                  Our mission is to create thoughtfully tailored linen wear using refined construction techniques. Every piece brings together natural texture and everyday functionality.
                </p>
                <ul className="space-y-3">
                  {[
                    "Linen shirts with breathable natural fabrics",
                    "Clean tailoring for everyday movement",
                    "Materials selected for durability",
                    "Refined details for modern wardrobes",
                    "Consistent craftsmanship"
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs font-sans text-white/75">
                      <CheckCircle2 className="w-4 h-4 text-[#C8A97E] shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </FadeUp>
            </div>
          </Container>
        </section>

        {/* --- SECTION 4: WHAT WE DO --- */}
        <section className="py-16 md:py-20 bg-[#F7F3EE]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <FadeUp delay={0.1}>
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-[#C8A97E]">Our Approach</span>
                </FadeUp>
                <StaggeredBlurReveal
                  text="Creating Thoughtfully Tailored Linen"
                  as="h2"
                  className="font-serif text-4xl md:text-5xl font-light text-[#1A1A1A]"
                />
                <FadeUp delay={0.25}>
                  <p className="font-sans text-base md:text-lg text-[#1A1A1A]/75 leading-relaxed font-light">
                    We create thoughtfully tailored linen shirts using natural fabrics chosen for their texture, durability, and everyday wearability. From refined finishes to balanced fits, every detail is designed with simplicity and long-term comfort in mind.
                  </p>
                </FadeUp>
                
                <FadeUp delay={0.35} className="grid grid-cols-2 gap-6 pt-6 border-t border-[#1A1A1A]/10 font-sans text-xs">
                  <div>
                    <span className="text-[#C8A97E] uppercase tracking-[0.2em] block font-semibold mb-1">Tailor Focus</span>
                    <span className="text-[#1A1A1A]/70 leading-relaxed block font-light">Precise cuff cuts, balanced drops, and strong seams.</span>
                  </div>
                  <div>
                    <span className="text-[#C8A97E] uppercase tracking-[0.2em] block font-semibold mb-1">Material Integrity</span>
                    <span className="text-[#1A1A1A]/70 leading-relaxed block font-light">Hypoallergenic and thermoregulating organic flax.</span>
                  </div>
                </FadeUp>
              </div>

              <FadeUp className="order-1 lg:order-2 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl max-w-sm lg:max-w-md w-full mx-auto">
                <Image
                  src="/images/vian_fabric_showcase_1779434571577.webp"
                  alt="Vian Luxure linen tailoring process"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </FadeUp>
            </div>
          </Container>
        </section>

        {/* --- SECTION 5: BESPOKE TAILORING --- */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-12">
                <div className="space-y-4">
                  <FadeUp delay={0.1}>
                    <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-[#C8A97E]">Personalized</span>
                  </FadeUp>
                  <StaggeredBlurReveal
                    text="Bespoke Tailoring"
                    as="h2"
                    className="font-serif text-4xl md:text-5xl font-light text-[#1A1A1A]"
                  />
                  <FadeUp delay={0.25}>
                    <p className="font-sans text-base text-[#1A1A1A]/70 font-light">
                      You are one of a kind, thus your clothes must fit you like a glove. We offer bespoke tailoring to create shirts in harmony with your style.
                    </p>
                  </FadeUp>
                </div>

                <div className="space-y-8">
                  {[
                    { step: 1, title: "Pick Your Fabric", desc: "Select from our soft, durable, high-quality fabrics." },
                    { step: 2, title: "Choose Your Fit", desc: "Slim, Classic, Relaxed, or provide custom measurements." },
                    { step: 3, title: "Add Your Touch", desc: "Choose collar style, sleeve length, buttons, or a monogram." }
                  ].map((item, idx) => (
                    <FadeUp key={item.step} delay={0.15 * (idx + 1)} className="flex gap-6 items-start group">
                      <div className="w-12 h-12 rounded-full border border-[#C8A97E] flex items-center justify-center font-serif text-[#C8A97E] group-hover:bg-[#C8A97E] group-hover:text-white transition-colors duration-300 shrink-0">
                        {item.step}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-serif text-xl text-[#1A1A1A]">{item.title}</h4>
                        <p className="text-sm text-[#1A1A1A]/60 font-light">{item.desc}</p>
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </div>

              <FadeUp className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl max-w-sm lg:max-w-md w-full mx-auto">
                <Image
                  src="/images/vian_tailoring_bespoke_1779434589378.webp"
                  alt="Vian Luxure custom bespoke tailoring service"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </FadeUp>
            </div>
          </Container>
        </section>

        {/* --- SECTION 6: FAQ (Unified Reusable Accordion) --- */}
        <FAQ />

        {/* --- SECTION 7: CTA --- */}
        <section className="py-24 md:py-32 bg-[#1A1A1A] text-[#F7F3EE] relative overflow-hidden">
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
                <p className="font-sans text-base md:text-lg text-white/70 font-light">
                  From ready-to-wear styles to personalized tailoring options, find linen shirts designed with natural fabrics and clean everyday detailing.
                </p>
              </FadeUp>

              <FadeUp delay={0.4} className="pt-4">
                <Button
                  variant="primary"
                  className="bg-[#C8A97E] text-[#1A1A1A] hover:bg-[#b0936b] transition-all px-10 py-4 rounded-full inline-flex items-center gap-2 group"
                  asAnchor
                  href="/#featured-products"
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