'use client';

/**
 * Clip-path curtain unveil for the Who Are We editorial shirt sketch.
 * A thin vertical slit opens outward as the section scrolls into view.
 */

import React, { useLayoutEffect, useRef } from 'react';
import { loadGsap, refreshScrollTriggers } from '@/src/lib/gsap';

const SLIT_CLIP = 'inset(0% 50% 0% 50%)';
const FULL_CLIP = 'inset(0% 0% 0% 0%)';

export function WhoAreWeSketchReveal() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      img.style.clipPath = FULL_CLIP;
      return;
    }

    let ctx: { revert: () => void } | null = null;
    let cancelled = false;

    loadGsap().then((lib) => {
      if (!lib || cancelled) return;
      const { gsap } = lib;

      ctx = gsap.context(() => {
        gsap.fromTo(
          img,
          { clipPath: SLIT_CLIP },
          {
            clipPath: FULL_CLIP,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: wrap,
              start: 'top 88%',
              end: 'top 32%',
              scrub: 0.65,
              invalidateOnRefresh: true,
            },
          }
        );

        refreshScrollTriggers();
      }, wrap);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
    >
      <img
        ref={imgRef}
        src="/images/whobg.svg"
        alt="shirt illustration"
        loading="lazy"
        decoding="async"
        className="
          w-[480px]
          sm:w-[560px]
          md:w-[620px]
          lg:w-[680px]
          xl:w-[740px]
          max-w-none
          opacity-[0.45]
          select-none
          object-contain
          will-change-[clip-path]
        "
        style={{ clipPath: SLIT_CLIP }}
      />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F5F5F3] to-transparent pointer-events-none" />
    </div>
  );
}
