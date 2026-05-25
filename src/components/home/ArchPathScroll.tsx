'use client';

/**
 * Floating editorial frames follow an invisible arched SVG path
 * (bottom-right → center → top-left) scrubbed to scroll.
 */

import React, { useLayoutEffect, useRef } from 'react';
import { loadGsap, refreshScrollTriggers } from '@/src/lib/gsap';

const FLOATING_ITEMS = [
  { src: '/images/product1.webp', alt: 'Linen shirt editorial', size: 'w-[140px] sm:w-[180px] md:w-[220px]' },
  { src: '/images/imageshow1.webp', alt: 'Atelier gallery frame', size: 'w-[120px] sm:w-[160px] md:w-[190px]' },
  { src: '/images/product2.webp', alt: 'Pleated linen trouser', size: 'w-[130px] sm:w-[170px] md:w-[200px]' },
  { src: '/images/imageshow3.webp', alt: 'Fabric drape study', size: 'w-[110px] sm:w-[150px] md:w-[180px]' },
] as const;

/** Normalized path: enters bottom-right, arcs through center, exits top-left */
const ARCH_PATH =
  'M 94 92 C 78 72, 62 58, 50 50 C 38 42, 22 26, 6 8';

async function loadGsapWithMotionPath() {
  const lib = await loadGsap();
  if (!lib) return null;

  const { MotionPathPlugin } = await import('gsap/MotionPathPlugin');
  lib.gsap.registerPlugin(MotionPathPlugin);

  return { ...lib, MotionPathPlugin };
}

export function ArchPathScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const items = itemRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!section || items.length === 0) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach((el, i) => {
        const t = 0.2 + i * 0.18;
        el.style.left = `${94 - t * 88}%`;
        el.style.top = `${92 - t * 84}%`;
        el.style.opacity = '1';
      });
      return;
    }

    let ctx: { revert: () => void } | null = null;
    let cancelled = false;

    loadGsapWithMotionPath().then((lib) => {
      if (!lib || cancelled) return;
      const { gsap } = lib;

      ctx = gsap.context(() => {
        items.forEach((el, index) => {
          const pathStart = index * 0.12;

          gsap.fromTo(
            el,
            {
              opacity: 0.4,
              scale: 0.9,
              motionPath: {
                path: '#gallery-arch-path',
                align: '#gallery-arch-path',
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
                start: pathStart,
                end: pathStart + 0.001,
              },
            },
            {
              opacity: 1,
              scale: 1,
              ease: 'none',
              motionPath: {
                path: '#gallery-arch-path',
                align: '#gallery-arch-path',
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
                start: pathStart,
                end: Math.min(pathStart + 0.88, 1),
              },
              scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.85,
                invalidateOnRefresh: true,
              },
            }
          );
        });

        refreshScrollTriggers();
      }, section);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative h-[115vh] min-h-[640px] max-h-[920px] w-full my-4 sm:my-8"
    >
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none opacity-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path id="gallery-arch-path" d={ARCH_PATH} fill="none" />
      </svg>

      {FLOATING_ITEMS.map((item, index) => (
        <div
          key={item.src}
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
          className={`
            absolute left-0 top-0 opacity-0
            ${item.size}
            aspect-[3/4]
            overflow-hidden
            border border-[#1A1A1A]/10
            bg-[#E8DED1]
            shadow-[0_20px_50px_rgba(26,26,26,0.12)]
            will-change-transform
          `}
        >
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center select-none"
          />
          <div className="pointer-events-none absolute inset-0 bg-[#1A1A1A]/5" />
        </div>
      ))}
    </div>
  );
}
