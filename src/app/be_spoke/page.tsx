"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Page 4: BESPOKE PAGE (/be_spoke)
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { Container } from '@/src/components/common/Container';
import { Button } from '@/src/components/common/Button';
import { StaggeredBlurReveal } from '@/src/components/animations/StaggeredBlurReveal';
import { FadeUp } from '@/src/components/animations/FadeUp';
import { Shirt, User, Search, Check, Star, ArrowUpRight, Ban, ChevronDown, ChevronRight, Ruler } from 'lucide-react';

export default function BespokePage() {
  const [activeStep, setActiveStep] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Bespoke custom sizing inputs
  const [sizing, setSizing] = useState({
    neck: '15.5',
    chest: '40',
    waist: '36',
    sleeve: '34',
    shoulder: '18',
    length: '30'
  });

  const steps = [
    { num: 1, label: 'Fabric Selection', status: 'Selecting...' },
    { num: 2, label: 'Measurements', status: 'Pending' },
    { num: 3, label: 'Collar Style', status: 'Pending' },
    { num: 4, label: 'Cuff & Pocket', status: 'Pending' },
    { num: 5, label: 'Button & Accent', status: 'Pending' },
    { num: 6, label: 'Review Draft', status: 'Pending' }
  ];

  const reviews = [
    { name: "Hari", date: "04.02.2026", rating: 3, text: "The Bespoke option helped me get a shirt that actually matched my measurements properly. The overall fit felt much more natural compared to regular shirts." },
    { name: "Praveen", date: "10.1.2026", rating: 4, text: "I liked being able to choose every detail myself, from the collar style to the buttons. The final shirt looked exactly how I wanted." },
    { name: "Arun Kumar", date: "06.04.2026", rating: 3, text: "The fabric quality and stitching were really neat. After uploading my measurements, the shirt fit comfortably without needing additional alterations." },
    { name: "Kavin", date: "27.03.2026", rating: 5, text: "The customization process was simple to follow, and the final output preview helped me understand how the shirt would look before ordering." },
    { name: "Surya", date: "20.03.2026", rating: 4, text: "What I liked most was the freedom to personalize everything. The shirt felt more personal and better suited for my everyday wear." }
  ];

  const faqs = [
    { q: "What's Bespoke?", a: "Bespoke tailoring is a fully personalized process where shirts are created around individual body measurements, styling preferences, and selected design details." },
    { q: "Why are Bespoke shirts more expensive?", a: "Bespoke shirts require individual pattern drafting from scratch, premium hand-cut execution, hand-stitched detailing, and hours of artisan craftsmanship, making them a true wardrobe investment." },
    { q: "What is Savile Row?", a: "Savile Row is a street in London famous globally for traditional, world-class bespoke tailoring for men. We adopt these exact high-end standards in our atelier." },
    { q: "Why do you use Savile Row stitching methods?", a: "We use imported premium threads and high-density, single-needle flat felled seams (with 18-22 stitches per inch) to guarantee maximum seam strength, a clean premium drape, and zero puckering after washing." }
  ];

  const handleNext = () => {
    if (activeStep < 6) setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    if (activeStep > 1) setActiveStep(activeStep - 1);
  };

  return (
    <div className="min-h-screen bg-[#F7F3EE] selection:bg-[#C8A97E]/30 selection:text-[#1A1A1A] overflow-x-hidden">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/vian_hero_luxury_1779434551630.webp"
              alt="Bespoke Tailoring Banner"
              className="w-full h-full object-cover object-center opacity-65 select-none scale-102"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/60 z-[1]" />
          </div>

          <Container className="relative z-10 text-center text-[#F7F3EE] w-full pt-16">
            <div className="max-w-3xl mx-auto space-y-6">
              <FadeUp delay={0.1} y={15}>
                <span className="font-sans text-xs text-[#C8A97E] uppercase tracking-[0.3em] font-bold inline-block bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                  Your Style, Your Fit
                </span>
              </FadeUp>
              
              <StaggeredBlurReveal
                lines={["Built Around", "Your Measurements"]}
                as="h1"
                stagger={0.06}
                duration={1.2}
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight"
              />
              
              <FadeUp delay={0.4} y={15}>
                <p className="font-sans text-sm sm:text-base md:text-lg text-white/80 font-light leading-relaxed max-w-2xl mx-auto pt-4">
                  Create bespoke shirts with personalized measurements, fabric selections, and styling details designed specifically for your individual fit and preferences.
                </p>
              </FadeUp>
            </div>
          </Container>
        </section>

        {/* SECTION 1: BUILD YOUR BESPOKE SHIRT INTERFACE */}
        <section className="py-20 bg-white border-b border-[#1A1A1A]/5">
          <Container>
            <div className="max-w-[1100px] mx-auto bg-[#F5F5F3] rounded-[32px] p-8 sm:p-12 border border-[#1A1A1A]/5 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Left: Step Indicators (lg:col-span-5) */}
                <div className="lg:col-span-5 space-y-8">
                  <div className="space-y-3">
                    <span className="font-mono text-[9px] text-[#C8A97E] tracking-widest uppercase font-bold block">
                      Current Build | Step {activeStep} of 6
                    </span>
                    <h3 className="font-serif text-3xl font-light text-[#1A1A1A]">
                      Build Your Bespoke Shirt
                    </h3>
                    <p className="font-sans text-xs text-[#1A1A1A]/65 leading-relaxed font-light">
                      Select fabrics, measurements, collars, cuffs, buttons, sleeves, and finishing details to create a shirt designed specifically around your preferences.
                    </p>
                  </div>

                  {/* Steps list */}
                  <div className="space-y-3">
                    {steps.map((st) => (
                      <button
                        key={st.num}
                        onClick={() => setActiveStep(st.num)}
                        className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 text-left ${
                          activeStep === st.num
                            ? 'bg-[#1A1A1A] text-[#F7F3EE] border-[#1A1A1A] shadow-md'
                            : 'bg-white text-[#1A1A1A]/60 border-[#1A1A1A]/10 hover:border-[#1A1A1A]/20'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-6 h-6 rounded-full font-mono text-[10px] flex items-center justify-center font-bold ${
                            activeStep === st.num ? 'bg-[#C8A97E] text-[#1A1A1A]' : 'bg-[#F5F5F3] text-[#1A1A1A]/70'
                          }`}>
                            0{st.num}
                          </span>
                          <span className="font-sans text-xs uppercase tracking-wider font-semibold">
                            {st.label}
                          </span>
                        </div>
                        <span className={`font-mono text-[9px] uppercase tracking-wider ${
                          activeStep === st.num ? 'text-[#C8A97E]' : 'text-[#1A1A1A]/35'
                        }`}>
                          {st.num < activeStep ? 'Completed' : st.num === activeStep ? 'Active' : 'Pending'}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right: Step Content Selector (lg:col-span-7) */}
                <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 border border-[#1A1A1A]/5 min-h-[420px] flex flex-col justify-between shadow-sm">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="space-y-2 border-b border-[#1A1A1A]/5 pb-4">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#C8A97E] font-bold">
                          Atelier Configurator
                        </span>
                        <h4 className="font-serif text-2xl text-[#1A1A1A]">
                          {activeStep === 1 ? "Choose Your Fabric" : activeStep === 2 ? "Atelier Measurements" : steps[activeStep - 1].label}
                        </h4>
                        <p className="font-sans text-xs text-[#1A1A1A]/60 font-light">
                          {activeStep === 1 
                            ? "Handpicked, sustainable fabrics sourced with care." 
                            : activeStep === 2 
                              ? "Specify measurements in inches for your individual sartorial pattern draft." 
                              : "Configure custom design details for your tailored shirting."}
                        </p>
                      </div>

                      {/* Display Step-specific Selection State */}
                      {activeStep === 1 ? (
                        <div className="bg-[#F5F5F3] border border-[#1A1A1A]/5 rounded-xl p-8 flex flex-col items-center justify-center space-y-3 text-center my-6">
                          <Ban className="w-6 h-6 text-[#1A1A1A]/35" />
                          <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-[#1A1A1A]/70">
                            Available Materials
                          </span>
                          <p className="font-sans text-xs text-[#1A1A1A]/55 font-light">
                            No materials available at the moment.
                          </p>
                        </div>
                      ) : activeStep === 2 ? (
                        /* Sizing drafting board */
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-6">
                          {Object.keys(sizing).map((key) => (
                            <div key={key} className="space-y-1 bg-[#F5F5F3] p-3 rounded-lg border border-[#1A1A1A]/5">
                              <span className="font-mono text-[8px] uppercase tracking-wider text-[#C8A97E] font-bold block">
                                {key} (in)
                              </span>
                              <input
                                type="number"
                                step="0.25"
                                value={sizing[key as keyof typeof sizing]}
                                onChange={(e) => setSizing({ ...sizing, [key]: e.target.value })}
                                className="w-full bg-transparent border-none text-sm font-sans font-semibold text-[#1A1A1A] focus:outline-none"
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="bg-[#F5F5F3] border border-[#1A1A1A]/5 rounded-xl p-8 flex flex-col items-center justify-center space-y-2 text-center my-6">
                          <Ruler className="w-6 h-6 text-[#C8A97E]" />
                          <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-[#1A1A1A]/70">
                            Bespoke Customizer Action
                          </span>
                          <p className="font-sans text-xs text-[#1A1A1A]/55 font-light leading-relaxed">
                            Completed measurements selection required to activate pattern details.
                          </p>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* Controls */}
                  <div className="flex items-center gap-4 pt-6 border-t border-[#1A1A1A]/5">
                    <button
                      onClick={handleBack}
                      disabled={activeStep === 1}
                      className={`px-6 py-3 rounded-full border text-[10px] font-sans uppercase tracking-[0.2em] font-semibold transition-all duration-300 ${
                        activeStep === 1
                          ? 'border-[#1A1A1A]/5 text-[#1A1A1A]/20 cursor-not-allowed'
                          : 'border-[#1A1A1A]/15 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white cursor-pointer'
                      }`}
                    >
                      Back
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={activeStep === 6}
                      className="flex-grow flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1A1A1A] text-white hover:bg-[#C8A97E] hover:text-[#1A1A1A] text-[10px] font-sans uppercase tracking-[0.2em] font-semibold transition-all duration-300 cursor-pointer disabled:opacity-40"
                    >
                      <span>Continue</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 2: WHAT IS BESPOKE? */}
        <section className="py-20 bg-[#F7F3EE]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-[1200px] mx-auto">
              
              {/* Left Column: Image */}
              <FadeUp className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl max-w-sm lg:max-w-md w-full mx-auto order-1">
                <img
                  src="/images/vian_tailoring_bespoke_1779434589378.webp"
                  alt="Atelier bespoke drafting process"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/5" />
              </FadeUp>

              {/* Right Column: Content & Features */}
              <div className="space-y-10 order-2">
                <div className="space-y-4">
                  <FadeUp delay={0.1}>
                    <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-[#C8A97E]">WHAT IS</span>
                  </FadeUp>
                  <StaggeredBlurReveal
                    text="Be Spoke?"
                    as="h2"
                    className="font-serif text-3xl sm:text-4xl font-light text-[#1A1A1A]"
                  />
                  <FadeUp delay={0.25}>
                    <p className="font-sans text-base md:text-lg text-[#1A1A1A]/75 leading-relaxed font-light">
                      Bespoke tailoring is a fully personalized shirt-making process created around your measurements, styling preferences, and selected design details. Every element is individually chosen to achieve a more personal fit and overall look.
                    </p>
                  </FadeUp>
                </div>

                <div className="space-y-6">
                  {/* Feature 1 */}
                  <FadeUp delay={0.3} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#C8A97E]/10 flex items-center justify-center text-[#C8A97E] shrink-0">
                      <Shirt className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif text-lg text-[#1A1A1A]">Measurement-Based Fit</h4>
                      <p className="font-sans text-sm text-[#1A1A1A]/60 font-light leading-relaxed">
                        Shirts are created using your body measurements for a more natural and personalized fit.
                      </p>
                    </div>
                  </FadeUp>

                  {/* Feature 2 */}
                  <FadeUp delay={0.4} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#C8A97E]/10 flex items-center justify-center text-[#C8A97E] shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif text-lg text-[#1A1A1A]">Complete Style Freedom</h4>
                      <p className="font-sans text-sm text-[#1A1A1A]/60 font-light leading-relaxed">
                        Choose fabrics, collars, cuffs, buttons, sleeves, pockets, and finishing details without standard design limitations.
                      </p>
                    </div>
                  </FadeUp>

                  {/* Feature 3 */}
                  <FadeUp delay={0.5} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#C8A97E]/10 flex items-center justify-center text-[#C8A97E] shrink-0">
                      <Search className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif text-lg text-[#1A1A1A]">Individually Crafted</h4>
                      <p className="font-sans text-sm text-[#1A1A1A]/60 font-light leading-relaxed">
                        Each bespoke shirt is created specifically around your selections, measurements, and preferred styling choices.
                      </p>
                    </div>
                  </FadeUp>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* SECTION 3: WHY BESPOKE? */}
        <section className="py-20 md:py-24 bg-white border-y border-[#1A1A1A]/5">
          <Container>
            <div className="max-w-[1000px] mx-auto">
              <div className="text-center mb-16 space-y-4">
                <FadeUp delay={0.1}>
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-[#C8A97E]">Atelier Specs</span>
                </FadeUp>
                <StaggeredBlurReveal
                  text="Why Be Spoke?"
                  as="h2"
                  className="font-serif text-3xl sm:text-4xl font-light text-[#1A1A1A]"
                />
                <FadeUp delay={0.2}>
                  <p className="font-sans text-sm sm:text-base text-[#1A1A1A]/60 max-w-xl mx-auto font-light leading-relaxed">
                    Bespoke shirts are created using carefully selected fabrics, precision stitching techniques, structured construction methods, and detailed finishing processes designed for long-term wear and a more personal fit.
                  </p>
                </FadeUp>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Benefit 1 */}
                <FadeUp delay={0.15} className="bg-[#F7F3EE] p-8 rounded-[24px] border border-[#1A1A1A]/5 space-y-4">
                  <div className="w-8 h-8 rounded-full bg-[#C8A97E] text-[#1A1A1A] flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-xl text-[#1A1A1A]">Measurement-Based Fit</h4>
                  <p className="font-sans text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
                    Designed using individual body measurements for a more natural and balanced fit.
                  </p>
                </FadeUp>

                {/* Benefit 2 */}
                <FadeUp delay={0.3} className="bg-[#F7F3EE] p-8 rounded-[24px] border border-[#1A1A1A]/5 space-y-4">
                  <div className="w-8 h-8 rounded-full bg-[#C8A97E] text-[#1A1A1A] flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-xl text-[#1A1A1A]">Premium Fabric Selection</h4>
                  <p className="font-sans text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
                    Selected linen, Giza cotton, and cotton-linen fabrics are chosen for breathable wear, texture, durability, and everyday comfort.
                  </p>
                </FadeUp>

                {/* Benefit 3 */}
                <FadeUp delay={0.45} className="bg-[#F7F3EE] p-8 rounded-[24px] border border-[#1A1A1A]/5 space-y-4">
                  <div className="w-8 h-8 rounded-full bg-[#C8A97E] text-[#1A1A1A] flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-xl text-[#1A1A1A]">Precision Construction</h4>
                  <p className="font-sans text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
                    Built using refined stitching methods, imported threads, structured German fusing, and carefully finished detailing.
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

        {/* SECTION 5: FAQs */}
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

        {/* SECTION 6: CTA */}
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
                  href="/#details-cta"
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
