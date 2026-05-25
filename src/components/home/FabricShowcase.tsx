"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Container } from '../common/Container';
import { FadeUp } from '../animations/FadeUp';
import { Button } from '../common/Button';

export function FabricShowcase() {
  return (
    <section id="showcase-section" className="relative py-32 sm:py-48 bg-[#1A1A1A] overflow-hidden">
      {/* Fabric image backdrop */}
      <div className="absolute inset-0 z-0 opacity-60">
        <img
          src="/images/vian_fabric_showcase_1779434571577.webp"
          alt="Premium raw French flax linen texture close-up"
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover object-center scale-102 hover:scale-105 transition-transform duration-[4000ms] ease-out-quint select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
      </div>

      <Container className="relative z-10 text-left">
        <div className="max-w-xl md:max-w-2xl text-[#F7F3EE]">
          <FadeUp delay={0.1} y={15}>
            <span className="font-sans text-[11px] sm:text-xs text-[#C8A97E] uppercase tracking-[0.3em] font-semibold block mb-4">
              06 / Raw Textiles Journal
            </span>
          </FadeUp>

          <FadeUp delay={0.2} y={25}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide leading-tight mb-6">
              Woven From Organic Normandy Earth.
            </h2>
          </FadeUp>

          <FadeUp delay={0.3} y={20}>
            <p className="font-sans text-xs sm:text-sm md:text-base font-light text-[#F7F3EE]/80 leading-relaxed mb-10 max-w-lg">
              Our French flax is nurtured strictly by local rain cycles on coastal lowlands, giving each harvested thread unparalleled stretch, durability, and a raw organic weight. It is then double enzymed at our legacy atelier to guarantee peak comfort next to the skin.
            </p>
          </FadeUp>

          <FadeUp delay={0.4} y={15}>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button
                variant="secondary"
                size="md"
                className="w-full sm:w-auto"
                onClick={() => alert('Luxury fabric swatches packet has been selected for inquiry!')}
              >
                Inquire Swatches
              </Button>
              <Button
                variant="outline"
                size="md"
                asAnchor
                href="#collective"
                className="w-full sm:w-auto text-[#F7F3EE] border-[#F7F3EE]/40 hover:border-[#F7F3EE] hover:bg-[#F7F3EE]/5"
              >
                Learn Sourcing
              </Button>
            </div>
          </FadeUp>
        </div>
      </Container>

      {/* Side-by-side weave structure details floating on down right */}
      <div className="absolute bottom-12 right-6 sm:right-12 z-10 hidden xl:flex flex-col gap-1 items-end text-[#F7F3EE]/55 text-right font-sans max-w-sm">
        <span className="font-mono text-[10px] text-[#C8A97E] tracking-widest font-semibold uppercase">WEAVE SPECIFICATION</span>
        <p className="text-[11px] font-light leading-relaxed mt-1">Cross-check standard 390g/m² heritage flax basketweave. Preshrunk via traditional stone-wash mills.</p>
      </div>
    </section>
  );
}
