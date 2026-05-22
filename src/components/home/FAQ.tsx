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
      question: 'Is linen cotton?',
      answer:
        'No. Linen and cotton are different natural fabrics. Linen is made from flax fibers, while cotton comes from the cotton plant. Linen is known for its breathable texture, durability, and naturally relaxed feel.',
    },
    {
      id: 'sizing',
      question: 'What are some interesting facts about linen?',
      answer:
        'Linen is one of the strongest natural fabrics and becomes softer with every wash. It is lightweight, breathable, long-lasting, and commonly preferred for warm weather and everyday comfort.',
    },
    {
      id: 'wearing-rule',
      question: 'What is the rule of wearing linen?',
      answer:
        'Linen can be worn throughout the year. Its breathable nature keeps you comfortable during warm weather, while layering makes it suitable for cooler seasons as well.',
    },
    {
      id: 'origin',
      question: 'Why is linen called linen?',
      answer:
        "The word linen derives from West Germanic, which is related to Latin 'linum' for flax and Greek 'linón'. Linen threads were used for making straight lines, and therefore the English word 'line' comes from that.",
    },
    {
      id: 'wrinkle',
      question: 'Does linen wrinkle easily?',
      answer:
        "Yes, linen naturally forms soft wrinkles because of its flax fibers. These relaxed creases are part of linen's natural texture and timeless character.",
    },
  ];

  return (
    <section
      id="faq-section"
      className="py-12 sm:py-16 bg-[#E8DED1]/10 overflow-hidden border-b border-[#1A1A1A]/5 relative"
    >
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E]/30 to-transparent" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left Centered Title */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="max-w-md text-center lg:text-left">
              <SectionTitle
                subtitle="Frequently Asked Questions"
                title="Everything You Need to Know"
                description="Vian Luxure · Linen Experts"
                align="center"
              />
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-[#1A1A1A]/10">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className="py-6 sm:py-8 first:pt-0 last:pb-0"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between text-left group cursor-pointer"
                  >
                    <h3 className="font-serif text-base sm:text-lg md:text-xl text-[#1A1A1A] font-light tracking-wide transition-colors duration-300 group-hover:text-[#C8A97E] pr-6">
                      {faq.question}
                    </h3>

                    <motion.div
                      animate={{ rotate: isOpen ? 135 : 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="flex-shrink-0 w-8 h-8 rounded-full border border-[#1A1A1A]/10 group-hover:border-[#C8A97E] flex items-center justify-center text-[#1A1A1A]/60 group-hover:text-[#C8A97E] transition-colors duration-300"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.45,
                          ease: [0.16, 1, 0.3, 1],
                        }}
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