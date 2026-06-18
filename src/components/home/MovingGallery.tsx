"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export function MovingGallery() {
  const images = [
    '/images/imageshow.webp',
    '/images/imageshow1.webp',
    '/images/imageshow2.webp',
    '/images/imageshow3.webp',
  ];

  // Quadruple the images list to enable endless, gap-free looping marquee on all viewport widths
  const marqueeImages = [...images, ...images, ...images, ...images];

  return (
    <section id="gallery-section" className="py-10 bg-[#F7F3EE] overflow-hidden border-b border-[#1A1A1A]/5 relative">
      {/* Decorative Top Line Details */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E]/30 to-transparent" />

      <div className="mb-10 text-center px-6">
        <span className="font-mono text-[9px] text-[#C8A97E] uppercase tracking-[0.35em] font-bold leading-none block mb-3">
          05 / L'Atelier Vivant
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#1A1A1A] tracking-wider leading-none">
          The Moving Gallery
        </h2>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden flex select-none pointer-events-none mt-6">
        <div className="flex gap-6 animate-marquee whitespace-nowrap min-w-max">
          {marqueeImages.map((src, index) => (
            <div
              key={index}
              className="w-[260px] sm:w-[340px] md:w-[420px] aspect-[4/5] overflow-hidden flex-shrink-0 bg-[#E8DED1] border border-[#1A1A1A]/5 shadow-xs relative"
            >
              <img
                src={src}
                alt={`Vian Gallery Image ${index + 1}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out hover:scale-102"
              />
              <div className="absolute inset-0 bg-[#1A1A1A]/5" />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Bottom Line Details */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E]/30 to-transparent" />

      {/* CSS Stylesheet injection to run clean infinite animation loop */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 45s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
