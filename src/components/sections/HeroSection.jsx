'use client';

/**
 * HeroSection — Fullscreen cinematic luxury hero.
 * - Background image with slow-zoom CSS animation
 * - Staggered editorial typography reveal (Framer Motion)
 * - Mouse-position parallax glow
 * - Animated scroll indicator
 */

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

/* ─── Animation variants ─────────────────────────────────────────────────── */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.6 } },
};
const lineReveal = {
  hidden:  { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};
const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};
const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2, ease: 'easeOut' } },
};

export default function HeroSection() {
  return (
    <section id="home" className="hero-root" aria-label="Hero — Crafted For The Modern Gentleman">
      {/* ── Background image with slow-zoom ─────────────────────────────── */}
      <div className="hero-bg">
        <Image
          src="https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=1920&q=85"
          alt=""
          fill
          loading="eager"
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* ── Multi-layer cinematic overlay ─────────────────────────────────── */}
      <div className="hero-overlay" />

      {/* ── Atmospheric gold vignette ──────────────────────────────────────── */}
      <div className="hero-vignette" />

      {/* ── Hero content ──────────────────────────────────────────────────── */}
      <div className="hero-inner vl-container">

        <motion.div variants={container} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left column: constrained text */}
          <div className="lg:col-span-7">
            <div className="max-width-sm">
              {/* Pre-headline */}
              <motion.div variants={fadeIn} className="flex items-center gap-4 mb-8">
                <span className="block w-10 h-[1px]" style={{ background: 'var(--color-luxury-gold)' }} />
                <span className="text-xs tracking-widest uppercase font-light" style={{ color: 'var(--color-luxury-gold)', fontFamily: 'var(--font-body)' }}>
                  Luxury Linen Tailoring
                </span>
              </motion.div>

              {/* Main headline — editorial split (capped for large monitors) */}
              <div className="overflow-hidden mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                <motion.h1 variants={lineReveal} className="leading-[0.9] font-light italic" style={{ color: '#1A1A1A', fontSize: 'clamp(42px, 5.5vw, 88px)' }}>
                  Crafted For
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-2">
                <motion.p variants={lineReveal} className="leading-[0.9] font-light" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-luxury-gold)', fontSize: 'clamp(42px, 5.5vw, 88px)' }}>
                  The Modern
                </motion.p>
              </div>
              <div className="overflow-hidden mb-10">
                <motion.p variants={lineReveal} className="leading-[0.9] font-light italic" style={{ fontFamily: 'var(--font-display)', color: '#1A1A1A', fontSize: 'clamp(42px, 5.5vw, 88px)' }}>
                  Gentleman
                </motion.p>
              </div>

              {/* Sub-headline */}
              <motion.p variants={fadeUp} className="text-sm font-light tracking-widest uppercase mb-12" style={{ color: 'rgba(26,26,26,0.6)', fontFamily: 'var(--font-body)' }}>
                Luxury Linen Tailoring Redefined
              </motion.p>

              {/* CTA buttons */}
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <a id="hero-explore-btn" href="#collection" className="hero-cta primary">
                  <span className="text-xs font-medium tracking-widest uppercase" style={{ fontFamily: 'var(--font-body)' }}>Explore Collection</span>
                  <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <a id="hero-customize-btn" href="#bespoke" className="hero-cta outline">
                  <span className="text-xs font-medium tracking-widest uppercase" style={{ fontFamily: 'var(--font-body)' }}>Customize Yours</span>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right column: image card */}
          <div className="lg:col-span-5 flex justify-end">
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-700/45 group max-h-[580px] aspect-[3/4] w-full lg:w-[360px]">
              <Image
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=85"
                alt="Premium linen shirt from the VL Global collection"
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 360px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-6 left-6 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-amber-400 text-black">✦ New Collection</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 right-8 lg:right-20 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          aria-hidden="true"
        >
          <span
            className="text-[9px] tracking-[0.3em] uppercase font-light"
            style={{
              color: 'rgba(26,26,26,0.5)',
              fontFamily: 'var(--font-body)',
              writingMode: 'vertical-rl',
              letterSpacing: '0.3em',
            }}
          >
            Scroll
          </span>
          <div
            className="w-[1px] h-16"
            style={{
              background: 'linear-gradient(to bottom, rgba(26,26,26,0.3), transparent)',
              animation: 'scroll-bounce 1.8s ease-in-out infinite',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
