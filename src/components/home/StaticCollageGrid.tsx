'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { loadGsap, refreshScrollTriggers } from '@/src/lib/gsap';

const images = [
  {
    url: '/images/image.webp',
    caption: 'La Grande Entrée — Heavy Organic Silhouette',
    aspect: 'aspect-[3/4]',
    margin: '',
    animDelay: '0ms',
  },
  {
    url: '/images/image1.webp',
    caption: 'Normandy Flax — Raw Pure Weave Density',
    aspect: 'aspect-[1/1]',
    margin: 'lg:mt-12 mt-0',
    animDelay: '80ms',
  },
  {
    url: '/images/image2.webp',
    caption: 'Bespoke Atelier — Made To Measure Precision',
    aspect: 'aspect-[4/5]',
    margin: 'lg:mt-24 mt-0',
    animDelay: '160ms',
  },
  {
    url: '/images/image3.webp',
    caption: 'Quiet Luxury — Comfortable Artisanal Linen',
    aspect: 'aspect-[3/4]',
    margin: 'lg:mt-6 mt-0',
    animDelay: '240ms',
  },
  {
    url: '/images/image4.webp',
    caption: 'Heritage Silhouette — Classic Tailoring',
    aspect: 'aspect-[1/1]',
    margin: 'lg:mt-16 mt-0',
    animDelay: '320ms',
  },
] as const;

function getParallaxOffsets() {
  const w = window.innerWidth;
  if (w >= 1024) return [-140, -85, 0, 75, 130];
  if (w >= 640) return [-90, -55, -90, 55, 90];
  return [-50, -30, -50, 30, 50];
}

export function StaticCollageGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    const trigger = document.getElementById('collage-section');
    if (!grid || !trigger) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ctx: { revert: () => void } | null = null;
    let cancelled = false;

    loadGsap().then((lib) => {
      if (!lib || cancelled) return;
      const { gsap } = lib;

      ctx = gsap.context(() => {
        const layers = parallaxRefs.current.filter(Boolean) as HTMLDivElement[];
        const offsets = getParallaxOffsets();

        layers.forEach((layer, idx) => {
          gsap.fromTo(
            layer,
            { y: 0 },
            {
              y: offsets[idx] ?? 0,
              ease: 'none',
              force3D: true,
              scrollTrigger: {
                trigger,
                start: 'top 85%',
                end: 'bottom 15%',
                scrub: 0.6,
                invalidateOnRefresh: true,
              },
            }
          );
        });

        refreshScrollTriggers();
      }, grid);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 items-start">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`collage-item flex flex-col group ${img.margin}`}
          style={{ animationDelay: img.animDelay }}
        >
          <div
            ref={(el) => {
              parallaxRefs.current[idx] = el;
            }}
            className="collage-parallax-inner will-change-transform"
          >
            <div
              className={`relative overflow-hidden bg-[#E8DED1] border border-[#1A1A1A]/5 shadow-xs transition-shadow duration-500 hover:shadow-md cursor-pointer ${img.aspect}`}
            >
              <img
                src={img.url}
                alt={img.caption}
                referrerPolicy="no-referrer"
                loading={idx === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className="w-full h-full object-cover object-center select-none transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-4 border border-[#F7F3EE]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
