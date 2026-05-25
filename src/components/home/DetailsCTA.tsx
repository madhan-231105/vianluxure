/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// React Server Component — all static content rendered server-side.
// Only the interactive button + modal are delegated to DetailsCTAModal (client).
// The motion.div whileInView wrapper has been replaced with a CSS fade-in animation.

import React from 'react';
import { Container } from '../common/Container';
import { DetailsCTAModal } from './DetailsCTAModal';

export function DetailsCTA() {
  return (
    <section id="details-cta-section" className="py-14 sm:py-16 bg-[#1A1A1A] overflow-hidden relative">
      {/* Editorial styling background textures and lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 bottom-0 w-[1px] bg-[#F7F3EE]" />
        <div className="absolute top-0 right-1/4 bottom-0 w-[1px] bg-[#F7F3EE]" />
      </div>

      <Container>
        {/* Centered Bordered Linen Box — CSS fade-in replaces motion.div whileInView */}
        <div className="max-w-4xl mx-auto border border-[#C8A97E]/30 bg-[#1D1D1D] px-8 py-16 sm:py-20 md:px-16 text-center relative cta-box-reveal">
          {/* Subtle aesthetic corner lines */}
          <div className="absolute -top-[1px] -left-[1px] w-8 h-8 border-t border-l border-[#C8A97E]" />
          <div className="absolute -top-[1px] -right-[1px] w-8 h-8 border-t border-r border-[#C8A97E]" />
          <div className="absolute -bottom-[1px] -left-[1px] w-8 h-8 border-b border-l border-[#C8A97E]" />
          <div className="absolute -bottom-[1px] -right-[1px] w-8 h-8 border-b border-r border-[#C8A97E]" />

          {/* Main Statement */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F7F3EE] tracking-wide leading-tight max-w-2xl mx-auto mb-8">
            Looking for Linen in Your Style?
          </h2>

          {/* Accent thin line details */}
          <div className="w-16 h-[1px] bg-[#C8A97E]/40 mx-auto mb-8" />

          {/* Secondary atmospheric explanation */}
          <p className="font-sans text-sm sm:text-base text-[#F7F3EE]/70 leading-relaxed font-light max-w-xl mx-auto mb-12">
            From ready-to-wear styles to personalized tailoring options, find linen shirts designed with natural fabrics and clean everyday detailing.
          </p>

          {/* Interactive button + modal — client boundary */}
          <DetailsCTAModal />
        </div>
      </Container>
    </section>
  );
}
