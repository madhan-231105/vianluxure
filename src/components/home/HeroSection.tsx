"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../common/Button';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  const scrollToExplore = () => {
    const nextSec = document.getElementById('collective');
    if (nextSec) {
      nextSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#E8DED1]">
      {/* Background cinematic imagery with zoom-out entrance animation */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/images/vian_hero_luxury_1779434551630.png"
          alt="Vian Luxure Quiet Luxury Linen"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center select-none"
        />
        {/* Soft vignette/scrim to improve reading accessibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/10 to-black/35 blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F3EE]/40 via-transparent to-[#F7F3EE]/95" />
      </motion.div>

      {/* Floating brand indicator */}
      <div className="absolute top-28 left-6 sm:left-12 font-mono text-[9px] uppercase tracking-[0.25em] text-[#1A1A1A]/55 z-10 hidden md:block select-none pointer-events-none">
        01 / LA GRANDE ENTRÉE
      </div>

      {/* Hero content container */}
      <div className="relative z-10 text-center px-6 sm:px-12 flex flex-col items-center max-w-4xl">
        {/* Subtitle letter-stagger */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-[11px] sm:text-xs text-[#C8A97E] uppercase tracking-[0.35em] font-semibold mb-5 sm:mb-6 leading-none"
        >
          Signature Raw Linen Atelier
        </motion.span>

        {/* Cinematic Premium Header */}
        <h1 className="overflow-visible py-2">
          <motion.span
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-[#1A1A1A] tracking-normal leading-[1.1] block"
          >
            Crafted For Comfort.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-[#1A1A1A] tracking-normal leading-[1.1] block italic mt-1"
          >
            Designed For Elegance.
          </motion.span>
        </h1>

        {/* Secondary description statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 font-sans text-xs sm:text-sm md:text-base text-[#1A1A1A]/75 max-w-lg leading-relaxed font-light tracking-wide"
        >
          Discover a collection sculpted from the finest French flax grass, celebrating the soft drapes, quiet textures, and raw luxury of organic tailoring.
        </motion.p>

        {/* Staggered action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <Button
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => {
              const el = document.getElementById('collection-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Shop Collection
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-[#1A1A1A]/40 bg-[#F7F3EE]/25 hover:border-[#1A1A1A]"
            onClick={() => {
              const el = document.getElementById('showcase-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Fabrics
          </Button>
        </motion.div>
      </div>

      {/* Floating coordinates indicator (Slightly technical styling removed contextually, replaced by pure design aesthetic coordinates) */}
      <div className="absolute bottom-10 right-6 sm:right-12 z-10 hidden sm:flex items-center gap-3">
        <span className="font-mono text-[9px] text-[#1A1A1A]/40 tracking-widest uppercase">
          N° 49.82 CAEN, NORMANDY
        </span>
      </div>

      {/* Animated micro-bouncing scroll indicator */}
      <motion.button
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        onClick={scrollToExplore}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 p-2 text-[#1A1A1A]/45 hover:text-[#C8A97E] transition-colors cursor-pointer"
        aria-label="Scroll to content"
      >
        <ArrowDown className="w-5 h-5 stroke-[1.5]" />
      </motion.button>
    </section>
  );
}
