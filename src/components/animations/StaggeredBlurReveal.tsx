'use client';

import React, { useLayoutEffect, useRef, useMemo } from 'react';
import { loadGsap } from '@/src/lib/gsap';

type TextTag = 'h1' | 'h2' | 'h3' | 'p' | 'span';

interface StaggeredBlurRevealProps {
  /** Single-line string — split by spaces */
  text?: string;
  /** Multi-line heading — each entry is one line */
  lines?: string[];
  as?: TextTag;
  className?: string;
  wordClassName?: string;
  stagger?: number;
  duration?: number;
  /** ScrollTrigger start position */
  triggerStart?: string;
}

function splitWords(value: string) {
  return value.trim().split(/\s+/).filter(Boolean);
}

export function StaggeredBlurReveal({
  text,
  lines,
  as: Tag = 'span',
  className = '',
  wordClassName = '',
  stagger = 0.05,
  duration = 1.1,
  triggerStart = 'top 88%',
}: StaggeredBlurRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  const lineGroups = useMemo(() => {
    if (lines?.length) return lines.map(splitWords);
    if (text) return [splitWords(text)];
    return [];
  }, [text, lines]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container || lineGroups.length === 0) return;

    const words = container.querySelectorAll<HTMLElement>('[data-blur-word]');
    if (words.length === 0) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      words.forEach((el) => {
        el.style.opacity = '1';
        el.style.filter = 'none';
        el.style.transform = 'none';
      });
      return;
    }

    let ctx: { revert: () => void } | null = null;
    let cancelled = false;

    loadGsap().then((lib) => {
      if (!lib || cancelled) return;
      const { gsap, ScrollTrigger } = lib;

      ctx = gsap.context(() => {
        gsap.fromTo(
          words,
          { y: 40, opacity: 0, filter: 'blur(10px)' },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration,
            stagger,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: container,
              start: triggerStart,
              once: true,
            },
          }
        );
        ScrollTrigger?.refresh();
      }, container);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [lineGroups, stagger, duration, triggerStart]);

  return (
    <Tag ref={containerRef as React.RefObject<never>} className={className}>
      {lineGroups.map((words, lineIdx) => (
        <span key={lineIdx} className={lineGroups.length > 1 ? 'block' : undefined}>
          {words.map((word, wordIdx) => (
            <span
              key={`${lineIdx}-${wordIdx}`}
              data-blur-word
              className={`inline-block will-change-[transform,filter,opacity] ${wordClassName}`}
              style={{ opacity: 0, filter: 'blur(10px)', transform: 'translateY(40px)' }}
            >
              {word}
              {wordIdx < words.length - 1 ? '\u00A0' : null}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
