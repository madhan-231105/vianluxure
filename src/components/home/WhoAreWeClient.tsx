"use client";

/**
 * Thin client boundary for WhoAreWe animated elements.
 * Accepts `part` prop to render in the correct grid column:
 *   - "heading"  → motion.h2 in the left column
 *   - "card"     → motion.div glass card in the right column
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { StaggeredBlurReveal } from '../animations/StaggeredBlurReveal';

interface Props {
  part: 'heading' | 'card';
}

export function WhoAreWeClient({ part }: Props) {
  if (part === 'heading') {
    return (
      <StaggeredBlurReveal
        lines={['Weaving', 'Elegance', 'into', 'Everyday']}
        as="h2"
        stagger={0.05}
        duration={1.15}
        triggerStart="top 85%"
        className="
          font-sans
          font-bold
          tracking-[-0.03em]
          text-[#1A1A1A]
          leading-[0.88]
          text-[52px]
          sm:text-[68px]
          md:text-[80px]
          lg:text-[84px]
          xl:text-[96px]
        "
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="
        relative
        z-10
        w-full
        max-w-[420px]
        rounded-[28px]
        border
        border-white/20
        bg-[#2E2E2E]/50
        backdrop-blur-xl
        p-8
        sm:p-10
        shadow-[0_25px_80px_rgba(0,0,0,0.18)]
      "
    >
      <p
        className="
          mb-8
          text-sm
          sm:text-base
          leading-[1.8]
          font-light
          text-white/95
        "
      >
        At VL Global, we create thoughtfully crafted linen shirts
        designed for comfort, simplicity, and everyday living.
        From carefully selected fabrics to refined tailoring details,
        every piece is made to feel natural, breathable, and timeless.
      </p>

      <a href="#tailoring" className="inline-block">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="
            inline-flex
            items-center
            gap-3
            rounded-[14px]
            bg-[#E5C56D]
            px-6
            py-4
            text-sm
            font-semibold
            text-[#1A1A1A]
            shadow-lg
            shadow-black/10
            hover:bg-[#D4B45C]
            transition-all
          "
        >
          Discover Our Story
          <ArrowUpRight className="h-4 w-4 stroke-[2.5px]" />
        </motion.button>
      </a>
    </motion.div>
  );
}
