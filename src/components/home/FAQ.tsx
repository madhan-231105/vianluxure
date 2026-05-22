"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 'care',
      question: 'How do I care for my raw, unstructured organic linen garments?',
      answer: 'Pure French linen thrives on natural cycles. We recommend washing in lukewarm water with mild eco-friendly detergents, avoiding heavy spin cycles. Rather than high heat, tumble dry gently or air-dry flat to preserve the natural organic fiber density and enhance its cloud-like softness with age.'
    },
    {
      id: 'sizing',
      question: 'How does the Vian custom bespoke sizing journey work?',
      answer: 'Our bespoke commissions begin by selecting a silhouette. Upon checking out, you will receive a luxury measuring packet with step-by-step sizing guidance. You may also schedule a virtual 1-on-1 session with our master tailor. Garments are individually hand-sculpted in our micro-batches to your exact physique.'
    },
    {
      id: 'shipping',
      question: 'What is your ecological shipping and packaging commitment?',
      answer: 'We completely reject plastic wrappers and massive warehouse stocks. Every piece is wrapped carefully in protective raw linen travel pouches that double as permanent packaging. Orders are carbon-neutral shipped globally using certified sustainable couriers directly from our French studio.'
    },
    {
      id: 'sustainability',
      question: 'Where is the raw flax sourced and who crafts the garments?',
      answer: 'Our flax is certified organic, sourced entirely from multi-generational agricultural partners in northern France. Garments are hand-sewn, piped, and finished in small numbers by highly skilled tailors in our zero-waste ateliers, ensuring absolute quality control and beautiful working environments.'
    }
  ];

  return (
    <section id="faq-section" className="py-12 sm:py-16 bg-[#E8DED1]/10 overflow-hidden border-b border-[#1A1A1A]/5 relative">
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E]/30 to-transparent" />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Sticky/Ethos Title Panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionTitle
              subtitle="08 / Patron Queries"
              title="Frequently Answered FAQ"
              description="A slow-crafted guide to raw organic textiles, bespoke tailoring timelines, eco-conscious shipments, and structural styling details."
              align="left"
            />
            
            {/* Visual aesthetic accent card */}
            <div className="hidden lg:block mt-12 p-8 bg-[#E8DED1]/20 border border-[#1A1A1A]/5 relative">
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#C8A97E]" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#C8A97E]" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#C8A97E]" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#C8A97E]" />
              
              <span className="font-serif italic text-base text-[#1A1A1A] font-light leading-relaxed block">
                "Real luxury is never rushed. From seeds in French soil to hand-stitched silk pipings, we answer every detail with absolute honesty."
              </span>
              <span className="font-mono text-[9px] text-[#C8A97E] tracking-widest uppercase block mt-4 font-bold">
                — L'ATELIER VIAN
              </span>
            </div>
          </div>

          {/* Right Accordion List Panel */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-[#1A1A1A]/10">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div key={faq.id} className="py-6 sm:py-8 first:pt-0 last:pb-0">
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between text-left group cursor-pointer"
                  >
                    <h3 className="font-serif text-base sm:text-lg md:text-xl text-[#1A1A1A] font-light tracking-wide transition-colors duration-300 group-hover:text-[#C8A97E] pr-6">
                      {faq.question}
                    </h3>
                    
                    <motion.div
                      animate={{ rotate: isOpen ? 135 : 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="flex-shrink-0 w-8 h-8 rounded-full border border-[#1A1A1A]/10 group-hover:border-[#C8A97E] flex items-center justify-center text-[#1A1A1A]/60 group-hover:text-[#C8A97E] transition-colors duration-300"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pr-10">
                          <p className="text-xs sm:text-sm text-[#1A1A1A]/70 font-sans tracking-wide leading-relaxed font-light">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
