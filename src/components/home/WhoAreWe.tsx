"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { motion } from 'motion/react';
import { Sparkles, Leaf, Recycle } from 'lucide-react';

export function WhoAreWe() {
  const philosophy = [
    {
      num: '01',
      title: 'French Flax Heritage',
      icon: <Leaf className="w-4 h-4 text-[#C8A97E]" />,
      desc: 'Our long-staple flax is exclusively cultivated in the historic lowlands of northern France, relying entirely on natural precipitation and traditional organic processes.'
    },
    {
      num: '02',
      title: 'Slow Handcrafted Tailoring',
      icon: <Sparkles className="w-4 h-4 text-[#C8A97E]" />,
      desc: 'Every silhouette is individualistically custom sculpted and flat-felled by hand. We use genuine sustainably-sourced water buffalo horn buttons and seamless silk internal pipings.'
    },
    {
      num: '03',
      title: 'Zero-Waste & Circular Ethos',
      icon: <Recycle className="w-4 h-4 text-[#C8A97E]" />,
      desc: 'We reject massive factory stocks. Operating in micro-batches and bespoke commissions, our packaging is fully reusable linen pouches designed for permanent travel.'
    }
  ];

  return (
    <section id="about-section" className="py-12 sm:py-16 bg-[#E8DED1]/15 border-b border-[#1A1A1A]/5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Panel: Massive Serif Statement */}
          <div className="lg:col-span-6 flex flex-col">
            <SectionTitle
              subtitle="03 / Sanctuary of Slow Craft"
              title="Who Are We?"
              align="left"
              className="mb-8"
            />
            
            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1A1A1A] font-light leading-relaxed tracking-wide italic border-l border-[#C8A97E] pl-6 sm:pl-8 mt-4"
            >
              "We believe that true luxury is quiet. It lives in the spaces between seams, in the heavy drape of uncompromised flax, and in garments crafted to outlive seasons."
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-xs sm:text-sm text-[#1A1A1A]/70 font-sans tracking-wide leading-relaxed font-light pr-4"
            >
              Founded with a commitment to pure, unadulterated textiles, Vian Luxure bridges traditional tailoring heritage with modern architectural silhouettes, letting the honesty of pure French linen tell its own story.
            </motion.p>
          </div>

          {/* Right Panel: Clean Philosophy Tenets Grid */}
          <div className="lg:col-span-6 flex flex-col gap-10 xl:pt-20 lg:pt-10 pt-0">
            {philosophy.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 1.2, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-6 group"
              >
                {/* Number Frame */}
                <div className="flex-shrink-0 w-12 h-12 bg-[#F7F3EE] border border-[#1A1A1A]/5 flex items-center justify-center relative shadow-xs">
                  <span className="font-mono text-xs text-[#C8A97E] font-bold tracking-widest select-none">
                    {item.num}
                  </span>
                  <div className="absolute -bottom-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.icon}
                  </div>
                </div>

                {/* Text description */}
                <div className="flex flex-col">
                  <h3 className="font-serif text-lg sm:text-xl text-[#1A1A1A] font-light tracking-wide mb-2 transition-colors duration-350 group-hover:text-[#C8A97E]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1A1A1A]/65 font-sans tracking-wide leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
