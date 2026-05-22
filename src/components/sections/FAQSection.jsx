'use client';

/**
 * FAQSection — Glassmorphism accordion with Framer Motion height animation.
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import FadeReveal from '@/components/ui/FadeReveal';

const FAQS = [
  {
    id: 1,
    question: 'What is the difference between Ready-to-Wear and Bespoke?',
    answer:
      'Ready-to-Wear pieces are crafted in standard sizes with room for minor alterations. Bespoke garments are built entirely from scratch to your individual measurements — every seam, every panel, tailored to you.',
  },
  {
    id: 2,
    question: 'How long does a bespoke shirt take?',
    answer:
      'Typically 10–14 working days from measurement to delivery. For rush orders, please contact us directly — we accommodate where possible.',
  },
  {
    id: 3,
    question: 'Can I select my own fabric and collar style?',
    answer:
      'Absolutely. Our Made-to-Measure and Bespoke services offer full customisation: fabric, collar, cuff, placket, back pleat, and monogram options.',
  },
  {
    id: 4,
    question: 'Do you offer fabric samples before ordering?',
    answer:
      'Yes. We offer a swatch kit with 10 hand-selected fabric samples. Visit our studio in Tiruchengode or order the kit online for ₹199 (redeemable on your first purchase).',
  },
  {
    id: 5,
    question: 'What is your return and alteration policy?',
    answer:
      'Ready-to-Wear pieces can be returned within 14 days of delivery in original condition. Bespoke and Made-to-Measure garments are non-refundable, but we offer one complimentary alteration round.',
  },
  {
    id: 6,
    question: 'Do you ship outside India?',
    answer:
      'We currently ship across India with free delivery on orders above ₹2,000. International shipping is available on request — please email us for a quote.',
  },
];

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div
      className="group"
      style={{ borderBottom: '1px solid rgba(200,169,126,0.1)' }}
    >
      <button
        id={`faq-btn-${faq.id}`}
        className="w-full flex items-center justify-between py-7 text-left gap-6 transition-colors duration-300"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <span
          className="font-light leading-snug text-base lg:text-lg"
          style={{
            fontFamily: 'var(--font-display)',
            color: isOpen ? '#F5F1E8' : 'rgba(245,241,232,0.7)',
            transition: 'color 0.3s ease',
          }}
        >
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0"
        >
          <Plus
            size={16}
            strokeWidth={1.5}
            style={{ color: isOpen ? '#C8A97E' : 'rgba(200,169,126,0.5)' }}
          />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${faq.id}`}
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p
              className="pb-8 text-sm font-light leading-[1.9] max-w-2xl"
              style={{ color: 'rgba(245,241,232,0.45)', fontFamily: 'var(--font-body)' }}
            >
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);

  function toggle(id) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <section
      id="faq"
      className="relative py-28 lg:py-40"
      style={{ background: '#1A1A1A' }}
      aria-label="Frequently asked questions"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left: header */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <FadeReveal>
                <div className="flex items-center gap-4 mb-6">
                  <span className="block w-8 h-[1px]" style={{ background: '#C8A97E' }} />
                  <span
                    className="text-[10px] tracking-[0.35em] uppercase"
                    style={{ color: '#C8A97E', fontFamily: 'var(--font-body)' }}
                  >
                    FAQ
                  </span>
                </div>
              </FadeReveal>
              <FadeReveal delay={0.1}>
                <h2
                  className="font-light leading-[1]"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(42px, 4vw, 70px)',
                    color: '#F5F1E8',
                  }}
                >
                  Common{' '}
                  <span className="italic" style={{ color: '#C8A97E' }}>
                    Questions
                  </span>
                </h2>
              </FadeReveal>
              <FadeReveal delay={0.2}>
                <p
                  className="text-sm font-light leading-relaxed mt-8"
                  style={{ color: 'rgba(245,241,232,0.4)', fontFamily: 'var(--font-body)' }}
                >
                  Can&apos;t find what you&apos;re looking for?{' '}
                  <a
                    href="#contact"
                    className="underline underline-offset-4 transition-colors duration-300 hover:text-[#C8A97E]"
                    style={{ color: 'rgba(245,241,232,0.6)' }}
                  >
                    Write to us
                  </a>
                  .
                </p>
              </FadeReveal>
            </div>
          </div>

          {/* Right: accordion */}
          <div
            className="lg:col-span-8"
            style={{ borderTop: '1px solid rgba(200,169,126,0.1)' }}
          >
            {FAQS.map((faq, i) => (
              <FadeReveal key={faq.id} delay={i * 0.06}>
                <FaqItem
                  faq={faq}
                  isOpen={openId === faq.id}
                  onToggle={() => toggle(faq.id)}
                />
              </FadeReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
