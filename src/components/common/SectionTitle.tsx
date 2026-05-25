'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { StaggeredBlurReveal } from '../animations/StaggeredBlurReveal';
import { FadeUp } from '../animations/FadeUp';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export function SectionTitle({
  subtitle,
  title,
  description,
  align = 'center',
  className = '',
}: SectionTitleProps) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end',
  };

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses[align]} ${className}`}>
      {subtitle && (
        <StaggeredBlurReveal
          text={subtitle}
          as="span"
          stagger={0.04}
          duration={0.9}
          className="font-sans text-[10px] sm:text-xs text-[#C8A97E] uppercase tracking-[0.25em] font-medium mb-3 sm:mb-4 block"
        />
      )}

      <StaggeredBlurReveal
        text={title}
        as="h2"
        stagger={0.05}
        duration={1.1}
        className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-[#1A1A1A] tracking-wide leading-[1.15]"
      />

      {description && (
        <FadeUp delay={0.3} y={15}>
          <p className="mt-5 text-[#1A1A1A]/70 font-sans text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-2xl">
            {description}
          </p>
        </FadeUp>
      )}
    </div>
  );
}
