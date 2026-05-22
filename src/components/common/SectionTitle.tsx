/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
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
        <FadeUp delay={0.1} y={15}>
          <span className="font-sans text-[10px] sm:text-xs text-[#C8A97E] uppercase tracking-[0.25em] font-medium mb-3 sm:mb-4 block">
            {subtitle}
          </span>
        </FadeUp>
      )}
      
      <FadeUp delay={0.2} y={20}>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-[#1A1A1A] tracking-wide leading-[1.15]">
          {title}
        </h2>
      </FadeUp>

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
