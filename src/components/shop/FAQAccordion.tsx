"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4 w-full">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="group bg-white rounded-xl border border-[#1A1A1A]/5 overflow-hidden transition-all duration-300 shadow-sm"
          >
            <button
              onClick={() => handleToggle(idx)}
              className="w-full text-left p-5 sm:p-6 flex justify-between items-center cursor-pointer font-sans font-medium text-[#1A1A1A] hover:bg-[#F5F5F3] transition-colors duration-300"
            >
              <span className="text-sm md:text-base font-light tracking-wide">{item.q}</span>
              <ChevronDown
                className={`w-5 h-5 text-[#C8A97E] transition-transform duration-300 shrink-0 ml-4 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pb-6 text-[#1A1A1A]/70 text-xs sm:text-sm leading-relaxed font-light border-t border-[#1A1A1A]/5 pt-4">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
