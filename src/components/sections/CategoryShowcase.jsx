'use client';

/**
 * CategoryShowcase — Cinematic horizontal expanding panels.
 * Each panel expands on hover, shrinks others.
 * Fashion-editorial visual experience.
 */

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import FadeReveal from '@/components/ui/FadeReveal';

const CATEGORIES = [
  {
    id: 'fabrics',
    number: '01',
    title: 'Linen\nFabrics',
    subtitle: 'Pure Materials',
    desc: 'Hand-selected, sustainably sourced linen and cotton in over 25 curated shades.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85',
    href: '#fabrics',
  },
  {
    id: 'ready',
    number: '02',
    title: 'Ready\nTo Wear',
    subtitle: 'Effortless Elegance',
    desc: 'Precision-cut, relaxed silhouettes crafted for the modern discerning gentleman.',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=900&q=85',
    href: '#collection',
  },
  {
    id: 'made',
    number: '03',
    title: 'Made To\nMeasure',
    subtitle: 'Your Proportions',
    desc: 'Select your fabric, define your fit. Delivered in 14 days.',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=900&q=85',
    href: '#bespoke',
  },
  {
    id: 'bespoke',
    number: '04',
    title: 'Bespoke\nTailoring',
    subtitle: 'Fully Yours',
    desc: 'From first consultation to final fitting — a shirt that is unmistakably you.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=85',
    href: '#bespoke',
  },
];

export default function CategoryShowcase() {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <section
      id="categories"
      className="relative"
      style={{ background: '#0D0D0D' }}
      aria-label="Product categories"
    >
      {/* Section header */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 pt-28 pb-16">
        <FadeReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="block w-8 h-[1px]" style={{ background: '#C8A97E' }} />
            <span
              className="text-[10px] tracking-[0.35em] uppercase"
              style={{ color: '#C8A97E', fontFamily: 'var(--font-body)' }}
            >
              The Collection
            </span>
          </div>
        </FadeReveal>
        <FadeReveal delay={0.1}>
          <h2
            className="font-light"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(42px, 5vw, 80px)',
              color: '#F5F1E8',
            }}
          >
            Explore Our{' '}
            <span className="italic" style={{ color: '#C8A97E' }}>
              World
            </span>
          </h2>
        </FadeReveal>
      </div>

      {/* Expanding panels */}
      <div
        className="flex h-[70vh] lg:h-[85vh] min-h-[500px] max-h-[900px]"
        style={{ borderTop: '1px solid rgba(200,169,126,0.1)' }}
      >
        {CATEGORIES.map((cat, idx) => {
          const isActive  = activeIdx === idx;
          const isHovered = activeIdx !== null;

          return (
            <div
              key={cat.id}
              id={`category-panel-${cat.id}`}
              className="relative overflow-hidden cursor-pointer group"
              style={{
                flex: isActive ? '2 0 0' : isHovered ? '0.6 0 0' : '1 0 0',
                transition: 'flex 0.8s cubic-bezier(0.22,1,0.36,1)',
                borderRight: idx < CATEGORIES.length - 1
                  ? '1px solid rgba(200,169,126,0.08)'
                  : 'none',
              }}
              onMouseEnter={() => setActiveIdx(idx)}
              onMouseLeave={() => setActiveIdx(null)}
            >
              {/* Background image */}
              <Image
                src={cat.image}
                alt={cat.title.replace('\n', ' ')}
                fill
                className="object-cover object-center"
                style={{
                  transition: 'transform 0.9s cubic-bezier(0.22,1,0.36,1)',
                  transform: isActive ? 'scale(1.06)' : 'scale(1)',
                }}
                sizes="25vw"
              />

              {/* Dark overlay */}
              <div
                className="absolute inset-0 transition-all duration-700"
                style={{
                  background: isActive
                    ? 'linear-gradient(to top, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.3) 60%)'
                    : 'linear-gradient(to top, rgba(13,13,13,0.85) 0%, rgba(13,13,13,0.55) 100%)',
                }}
              />

              {/* Panel content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-10">

                {/* Top: number */}
                <div>
                  <span
                    className="text-[11px] font-light tracking-[0.3em]"
                    style={{
                      color: 'rgba(200,169,126,0.6)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {cat.number}
                  </span>
                </div>

                {/* Bottom: main content */}
                <div>
                  {/* Subtitle — always visible */}
                  <p
                    className="text-[9px] tracking-[0.3em] uppercase mb-3 font-light"
                    style={{
                      color: '#C8A97E',
                      fontFamily: 'var(--font-body)',
                      opacity: isActive ? 1 : 0.7,
                      transition: 'opacity 0.5s ease',
                    }}
                  >
                    {cat.subtitle}
                  </p>

                  {/* Title */}
                  <h3
                    className="font-light leading-[0.9] mb-0"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: isActive
                        ? 'clamp(36px, 3.5vw, 60px)'
                        : 'clamp(22px, 2.5vw, 40px)',
                      color: '#F5F1E8',
                      whiteSpace: 'pre-line',
                      transition: 'font-size 0.8s cubic-bezier(0.22,1,0.36,1)',
                    }}
                  >
                    {cat.title}
                  </h3>

                  {/* Description — appears on hover */}
                  <div
                    style={{
                      maxHeight: isActive ? '120px' : '0',
                      opacity:   isActive ? 1 : 0,
                      overflow:  'hidden',
                      transition: 'max-height 0.6s ease, opacity 0.5s ease',
                    }}
                  >
                    <p
                      className="text-sm font-light leading-relaxed mt-5 mb-6"
                      style={{
                        color: 'rgba(245,241,232,0.6)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {cat.desc}
                    </p>
                    <a
                      href={cat.href}
                      className="inline-flex items-center gap-2 group/link"
                    >
                      <span
                        className="text-[10px] tracking-[0.25em] uppercase font-light"
                        style={{ color: '#C8A97E', fontFamily: 'var(--font-body)' }}
                      >
                        Explore
                      </span>
                      <ArrowRight
                        size={12}
                        strokeWidth={1.5}
                        style={{ color: '#C8A97E' }}
                        className="transition-transform duration-300 group-hover/link:translate-x-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
