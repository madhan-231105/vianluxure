'use client';

/**
 * BrandStory — Premium split-screen storytelling section.
 * - Left: Cinematic tall image with clip-path mask reveal
 * - Right: Staggered text reveal + brand stats
 */

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import FadeReveal from '@/components/ui/FadeReveal';

const STATS = [
  { value: '10K+',   label: 'Satisfied Clients' },
  { value: '25+',    label: 'Linen Varieties' },
  { value: '100%',   label: 'Natural Fibres' },
  { value: '15 yrs', label: 'Craftsmanship' },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};
const word = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function BrandStory() {
  const sectionRef = useRef(null);
  const inView     = useInView(sectionRef, { once: true, margin: '-120px' });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: '#FFFFFF' }}
      aria-label="About VL Global"
    >
      {/* Subtle top border */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(184,149,101,0.4), transparent)' }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-32 lg:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-24 items-center">

          {/* ── Left: image with mask reveal ────────────────────────────── */}
          <motion.div
            className="relative mb-16 lg:mb-0"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={inView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            {/* Gold accent bar */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[2px] z-10"
              style={{ background: 'linear-gradient(to bottom, transparent, #B89565 30%, #B89565 70%, transparent)' }}
            />
            <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85"
                alt="Fine linen fabric — VL Global craftsmanship"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(255,255,255,0.4) 0%, transparent 50%)' }}
              />
            </div>

            {/* Floating label */}
            <motion.div
              className="absolute bottom-8 right-8 px-6 py-4"
              style={{
                background: 'rgba(255,255,255,0.85)',
                border: '1px solid rgba(26,26,26,0.1)',
                backdropFilter: 'blur(12px)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              <p
                className="text-[10px] tracking-[0.3em] uppercase mb-1"
                style={{ color: '#B89565', fontFamily: 'var(--font-body)' }}
              >
                Since 2009
              </p>
              <p
                className="text-lg font-light"
                style={{ fontFamily: 'var(--font-display)', color: '#1A1A1A' }}
              >
                Tiruchengode, Tamil Nadu
              </p>
            </motion.div>
          </motion.div>

          {/* ── Right: text content ──────────────────────────────────────── */}
          <div className="lg:pl-8">
            <FadeReveal delay={0.1}>
              <div className="flex items-center gap-4 mb-6">
                <span className="block w-10 h-[1px]" style={{ background: '#B89565' }} />
                <span
                  className="text-[10px] tracking-[0.35em] uppercase"
                  style={{ color: '#B89565', fontFamily: 'var(--font-body)' }}
                >
                  Our Story
                </span>
              </div>
            </FadeReveal>

            {/* Staggered headline */}
            <motion.div
              variants={container}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {['Woven', 'With Purpose.'].map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h2
                    variants={word}
                    className="font-light leading-[0.95]"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(52px, 6vw, 96px)',
                      color: i === 1 ? '#B89565' : '#1A1A1A',
                      fontStyle: i === 1 ? 'italic' : 'normal',
                    }}
                  >
                    {line}
                  </motion.h2>
                </div>
              ))}
            </motion.div>

            {/* Gold rule */}
            <FadeReveal delay={0.5}>
              <div className="w-16 h-[1px] my-10" style={{ background: '#B89565' }} />
            </FadeReveal>

            <FadeReveal delay={0.55}>
              <p
                className="text-base font-light leading-[1.9] mb-6"
                style={{ color: 'rgba(26,26,26,0.65)', fontFamily: 'var(--font-body)' }}
              >
                At VL Global, we believe that a truly great shirt begins long before the
                needle meets the fabric. It begins with an understanding of the wearer —
                their rhythm, their refinement, their way of moving through the world.
              </p>
            </FadeReveal>

            <FadeReveal delay={0.65}>
              <p
                className="text-base font-light leading-[1.9] mb-14"
                style={{ color: 'rgba(26,26,26,0.5)', fontFamily: 'var(--font-body)' }}
              >
                Rooted in Tiruchengode, our craft draws from generations of Tamil
                textile heritage — fused with contemporary precision. Every piece is
                cut by hand, finished with intention, and designed to last.
              </p>
            </FadeReveal>

            {/* Stats */}
            <FadeReveal delay={0.75}>
              <div
                className="grid grid-cols-2 gap-8"
                style={{ borderTop: '1px solid rgba(26,26,26,0.1)' }}
              >
                {STATS.map(({ value, label }) => (
                  <div key={label} className="pt-8">
                    <p
                      className="text-3xl lg:text-4xl font-light mb-2"
                      style={{ fontFamily: 'var(--font-display)', color: '#B89565' }}
                    >
                      {value}
                    </p>
                    <p
                      className="text-[11px] tracking-[0.2em] uppercase font-light"
                      style={{ color: 'rgba(26,26,26,0.5)', fontFamily: 'var(--font-body)' }}
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
