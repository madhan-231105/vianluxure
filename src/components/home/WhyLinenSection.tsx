/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { FadeUp } from '../animations/FadeUp';
import { Wind, Shield, Droplets, ArrowUpRight } from 'lucide-react';

export function WhyLinenSection() {
  const benefits = [
    {
      icon: <Wind className="w-5 h-5 text-[#C8A97E] stroke-[1.25]" />,
      title: 'Thermal Intelligence',
      description: 'Linen fibers possess hollow cores that act as natural insulation, trapping warmth in winter breezes and releasing extra body moisture in active summer days.',
    },
    {
      icon: <Shield className="w-5 h-5 text-[#C8A97E] stroke-[1.25]" />,
      title: 'Structural Durability',
      description: 'Historically documented as the world’s strongest organic thread, our long-staple French flax grows stronger and softer with every laundry wash.',
    },
    {
      icon: <Droplets className="w-5 h-5 text-[#C8A97E] stroke-[1.25]" />,
      title: 'Ecological Balance',
      description: 'Our flax is entirely watered by natural lowlands precipitation, requiring zero extra synthetic fertilizers and absorbing massive levels of atmospheric carbon.',
    },
  ];

  return (
    <section id="heritage" className="py-24 sm:py-32 bg-[#E8DED1]/30">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left panel: Minimal text and cards benefits */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col">
            <SectionTitle
              subtitle="03 / Organic Chemistry"
              title="Why French Flax Linen?"
              align="left"
              className="mb-12"
            />

            <div className="flex flex-col gap-10">
              {benefits.map((benefit, idx) => (
                <FadeUp key={idx} delay={0.15 * idx} y={20} className="flex gap-6">
                  {/* Icon Frame */}
                  <div className="flex-shrink-0 p-4 h-12 w-12 bg-[#F7F3EE] flex items-center justify-center border border-[#1A1A1A]/5 rounded-none shadow-xs">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl text-[#1A1A1A] font-light tracking-wide mb-2 flex items-center gap-2">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#1A1A1A]/70 font-sans tracking-wide leading-relaxed font-light">
                      {benefit.description}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.5} y={15} className="mt-12">
              <a
                href="#journal"
                className="inline-flex items-center gap-2 text-[10px] uppercase font-sans tracking-[0.25em] font-semibold text-[#1A1A1A] hover:text-[#C8A97E] transition-colors duration-400 group"
              >
                <span>Read materials journal</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </FadeUp>
          </div>

          {/* Right panel: Cinematic large lifestyle linen image banner */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <FadeUp delay={0.2} y={35}>
              <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden bg-gray-100">
                {/* Visual marker element */}
                <div className="absolute top-6 right-6 font-mono text-[9px] text-[#F7F3EE] uppercase tracking-[0.2em] bg-[#1A1A1A]/70 px-3 py-1.5 backdrop-blur-xs z-10 select-none">
                  Fibre d'Origine France
                </div>

                <img
                  src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop"
                  alt="Folded premium raw linen textiles"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none transition-transform duration-1000 ease-out hover:scale-102"
                />

                {/* Left/Bottom border shadows adding beautiful framing */}
                <div className="absolute inset-0 border border-[#1A1A1A]/5" />
              </div>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  );
}
