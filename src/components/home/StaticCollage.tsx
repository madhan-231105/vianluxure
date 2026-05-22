"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { motion } from 'motion/react';

export function StaticCollage() {
  const images = [
    {
      url: '/images/vian_hero_luxury_1779434551630.png',
      caption: 'La Grande Entrée — Heavy Organic Silhouette',
      aspect: 'aspect-[3/4]',
      margin: '',
      delay: 0.1
    },
    {
      url: '/images/vian_fabric_showcase_1779434571577.png',
      caption: 'Normandy Flax — Raw Pure Weave Density',
      aspect: 'aspect-[1/1]',
      margin: 'md:mt-12 mt-0',
      delay: 0.3
    },
    {
      url: '/images/vian_tailoring_bespoke_1779434589378.png',
      caption: 'Bespoke Atelier — Made To Measure Precision',
      aspect: 'aspect-[4/5]',
      margin: 'md:mt-24 mt-0',
      delay: 0.5
    }
  ];

  return (
    <section id="collage-section" className="py-12 sm:py-16 bg-[#F7F3EE] overflow-hidden border-b border-[#1A1A1A]/5">
      <Container>
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <SectionTitle
            subtitle="02 / Sartorial Visuals"
            title="The Collection Collage"
            description="An asymmetric visual diary celebrating raw organic textures, unstructured premium silhouettes, and the quiet luxury of Normandy craftsmanship."
            align="left"
          />
        </div>

        {/* Collage Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, delay: img.delay, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col group ${img.margin}`}
            >
              {/* Image Frame with gold border details */}
              <div className={`relative overflow-hidden bg-[#E8DED1] border border-[#1A1A1A]/5 shadow-xs transition-shadow duration-500 hover:shadow-md cursor-pointer ${img.aspect}`}>
                <motion.img
                  src={img.url}
                  alt={img.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center select-none transition-transform duration-1000 ease-out group-hover:scale-103"
                />
                {/* Thin overlay border grid detail */}
                <div className="absolute inset-4 border border-[#F7F3EE]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>

              {/* Minimal caption */}
              <div className="mt-4 flex items-center justify-between border-b border-[#1A1A1A]/10 pb-2">
                <span className="font-mono text-[9px] text-[#C8A97E] tracking-widest uppercase font-semibold">
                  PL. {idx + 1} // DIARY
                </span>
                <span className="font-sans text-[10px] sm:text-xs text-[#1A1A1A]/70 font-light tracking-wide">
                  {img.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
