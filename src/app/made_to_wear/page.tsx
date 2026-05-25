"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Page 3: MADE-TO-WEAR PAGE (/made_to_wear)
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { Container } from '@/src/components/common/Container';
import { Button } from '@/src/components/common/Button';
import { StaggeredBlurReveal } from '@/src/components/animations/StaggeredBlurReveal';
import { FadeUp } from '@/src/components/animations/FadeUp';
import { Shirt, User, Search, Check, Star, ArrowUpRight, Ban, ChevronDown, ChevronRight, Sliders } from 'lucide-react';

export default function MadeToWearPage() {
  const [activeStep, setActiveStep] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const steps = [
    { num: 1, label: 'Fabric', status: 'Selecting...' },
    { num: 2, label: 'Collar', status: 'Pending' },
    { num: 3, label: 'Button', status: 'Pending' },
    { num: 4, label: 'Pocket', status: 'Pending' },
    { num: 5, label: 'Sleeve', status: 'Pending' },
    { num: 6, label: 'Review', status: 'Pending' }
  ];

  const stepContents = [
    { title: "Choose Your Fabric", desc: "Handpicked, sustainable fabrics sourced with care.", status: "No materials available at the moment." },
    { title: "Select Collar Style", desc: "Choose between Classic Spread, Hidden Button Down, or Banded grandad collar.", status: "Please complete fabric selection first." },
    { title: "Choose Buttons", desc: "Select natural mother-of-pearl shell, organic horn, or simple resin buttons.", status: "Please complete previous steps first." },
    { title: "Select Pocket Detail", desc: "Opt for a minimalist single chest pocket, double flaps, or a clean pocketless front.", status: "Please complete previous steps first." },
    { title: "Choose Sleeve Length", desc: "Pick classic long sleeves with rounded cuffs, or relaxed summer short sleeves.", status: "Please complete previous steps first." },
    { title: "Confirm Customization", desc: "Review all selected styles, parameters, and details before atelier submission.", status: "Awaiting preceding step confirmations." }
  ];

  const reviews = [
    { name: "Karthik", date: "05.03.2026", rating: 3, text: "I was able to choose the collar and button style I wanted. The whole process was simple, and the shirt looked really clean." },
    { name: "Aravind", date: "10.02.2026", rating: 4, text: "The shirt feels really comfortable for daily wear. I liked the fabric quality, and the fit was much better than regular ready-made shirts." },
    { name: "Rahul", date: "08.04.2026", rating: 3, text: "The linen fabric feels soft and easy to wear, even for long hours. The stitching and finishing were also done neatly." },
    { name: "Vignesh", date: "12.01.2026", rating: 5, text: "I liked how the shirt looked after customization. The fit, sleeve style, and overall feel matched what I selected." },
    { name: "Dinesh", date: "15.03.2026", rating: 4, text: "Good fabric quality and comfortable fit. The shirt feels light, breathable, and suitable for everyday use." }
  ];

  const faqs = [
    { q: "What is made-to-wear?", a: "Made-to-wear allows you to personalize selected shirt details such as collars, cuffs, buttons, and sleeves while maintaining a structured standard fit." },
    { q: "How is made-to-wear different from ready-to-wear?", a: "While ready-to-wear is pre-made to off-the-shelf standard sizes, made-to-wear allows you to customize the collar styles, cuff styles, pocket placements, and buttons to your exact taste while using standard structured fits." },
    { q: "Can I customize the shirt design?", a: "Yes. You have the creative freedom to select your preferred collar type (e.g. spread, button-down), cuff styles, monograms, and custom button materials like mother-of-pearl or natural horn." },
    { q: "Do I need to provide body measurements?", a: "No, made-to-wear uses standard chest and neck sizes (e.g. Size 38, 40, 42). If you want full custom measurement-based drafting, please visit our Bespoke page." },
    { q: "Is made-to-wear suitable for everyday use?", a: "Absolutely. All made-to-wear shirts are crafted from highly durable, double-stitched organic fabrics designed for regular everyday wash and wear." }
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
              src="/images/Category2.webp"
              alt="Made to Wear Customizing Banner"
              className="w-full h-full object-cover object-center opacity-60 select-none scale-102"
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
                lines={["Personalize", "Every Detail"]}
                as="h1"
                stagger={0.06}
                duration={1.2}
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight"
              />
              
              <FadeUp delay={0.4} y={15}>
                <p className="font-sans text-sm sm:text-base md:text-lg text-white/80 font-light leading-relaxed max-w-2xl mx-auto pt-4">
                  Create shirts with selected fabrics, structured styling, and finishing details suited for everyday wear.
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

                  {/* Vertically Stacked Interactive Steps */}
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
                <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 border border-[#1A1A1A]/5 min-h-[380px] flex flex-col justify-between shadow-sm">
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
                          Step Configurator
                        </span>
                        <h4 className="font-serif text-2xl text-[#1A1A1A]">
                          {stepContents[activeStep - 1].title}
                        </h4>
                        <p className="font-sans text-xs text-[#1A1A1A]/60 font-light">
                          {stepContents[activeStep - 1].desc}
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
                      ) : (
                        <div className="bg-[#F5F5F3] border border-[#1A1A1A]/5 rounded-xl p-8 flex flex-col items-center justify-center space-y-2 text-center my-6">
                          <Sliders className="w-6 h-6 text-[#C8A97E]" />
                          <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-[#1A1A1A]/70">
                            Active Step Action
                          </span>
                          <p className="font-sans text-xs text-[#1A1A1A]/55 font-light leading-relaxed">
                            {stepContents[activeStep - 1].status}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* Back / Continue controls */}
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
                      className={`flex-grow flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1A1A1A] text-white hover:bg-[#C8A97E] hover:text-[#1A1A1A] text-[10px] font-sans uppercase tracking-[0.2em] font-semibold transition-all duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed`}
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

        {/* SECTION 2: WHAT IS MADE-TO-WEAR? */}
        <section className="py-20 bg-[#F7F3EE]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-[1200px] mx-auto">
              
              {/* Left Column: Image */}
              <FadeUp className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl max-w-sm lg:max-w-md w-full mx-auto order-1">
                <img
                  src="/images/Category2.webp"
                  alt="VL Global Made-To-Wear Story"
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
                    text="Made to wear?"
                    as="h2"
                    className="font-serif text-3xl sm:text-4xl font-light text-[#1A1A1A]"
                  />
                  <FadeUp delay={0.25}>
                    <p className="font-sans text-base md:text-lg text-[#1A1A1A]/75 leading-relaxed font-light">
                      Made-to-wear shirts offer a more personalized approach to everyday dressing. Choose your preferred fabrics, collars, cuffs, and finishing details while maintaining a clean and well-structured fit designed for regular wear.
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
                      <h4 className="font-serif text-lg text-[#1A1A1A]">Refined Everyday Fit</h4>
                      <p className="font-sans text-sm text-[#1A1A1A]/60 font-light leading-relaxed">
                        Designed with balanced sizing and clean tailoring details suited for everyday movement and regular wear.
                      </p>
                    </div>
                  </FadeUp>

                  {/* Feature 2 */}
                  <FadeUp delay={0.4} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#C8A97E]/10 flex items-center justify-center text-[#C8A97E] shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif text-lg text-[#1A1A1A]">Personalized Details</h4>
                      <p className="font-sans text-sm text-[#1A1A1A]/60 font-light leading-relaxed">
                        Select collars, cuffs, buttons, and finishing elements that match your preferred style and overall look.
                      </p>
                    </div>
                  </FadeUp>

                  {/* Feature 3 */}
                  <FadeUp delay={0.5} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#C8A97E]/10 flex items-center justify-center text-[#C8A97E] shrink-0">
                      <Search className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif text-lg text-[#1A1A1A]">Thoughtful Craftsmanship</h4>
                      <p className="font-sans text-sm text-[#1A1A1A]/60 font-light leading-relaxed">
                        Every piece is carefully finished using selected fabrics and refined construction techniques for long-lasting everyday wear.
                      </p>
                    </div>
                  </FadeUp>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* SECTION 3: WHY MADE-TO-WEAR? */}
        <section className="py-20 md:py-24 bg-white border-y border-[#1A1A1A]/5">
          <Container>
            <div className="max-w-[1000px] mx-auto">
              <div className="text-center mb-16 space-y-4">
                <FadeUp delay={0.1}>
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-[#C8A97E]">Atelier Specs</span>
                </FadeUp>
                <StaggeredBlurReveal
                  text="Why Made to wear?"
                  as="h2"
                  className="font-serif text-3xl sm:text-4xl font-light text-[#1A1A1A]"
                />
                <FadeUp delay={0.2}>
                  <p className="font-sans text-sm sm:text-base text-[#1A1A1A]/60 max-w-xl mx-auto font-light leading-relaxed">
                    Made-to-wear shirts combine structured sizing with selected personalization options, offering a balance between ready-made convenience and more individual everyday styling.
                  </p>
                </FadeUp>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Benefit 1 */}
                <FadeUp delay={0.15} className="bg-[#F7F3EE] p-8 rounded-[24px] border border-[#1A1A1A]/5 space-y-4">
                  <div className="w-8 h-8 rounded-full bg-[#C8A97E] text-[#1A1A1A] flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-xl text-[#1A1A1A]">Flexible Styling</h4>
                  <p className="font-sans text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
                    Choose collars, cuffs, buttons, sleeves, and finishing details based on your preferred style.
                  </p>
                </FadeUp>

                {/* Benefit 2 */}
                <FadeUp delay={0.3} className="bg-[#F7F3EE] p-8 rounded-[24px] border border-[#1A1A1A]/5 space-y-4">
                  <div className="w-8 h-8 rounded-full bg-[#C8A97E] text-[#1A1A1A] flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-xl text-[#1A1A1A]">Balanced Everyday Fit</h4>
                  <p className="font-sans text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
                    Designed with structured sizing and clean tailoring details suited for regular wear.
                  </p>
                </FadeUp>

                {/* Benefit 3 */}
                <FadeUp delay={0.45} className="bg-[#F7F3EE] p-8 rounded-[24px] border border-[#1A1A1A]/5 space-y-4">
                  <div className="w-8 h-8 rounded-full bg-[#C8A97E] text-[#1A1A1A] flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-xl text-[#1A1A1A]">Refined Construction</h4>
                  <p className="font-sans text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
                    Finished using selected fabrics, structured stitching, and carefully detailed finishing techniques.
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
                  href="/be_spoke"
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
