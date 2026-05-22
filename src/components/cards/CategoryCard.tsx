"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import React from 'react';
import { Category } from '../../types';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
  index: number;
}

export function CategoryCard({ category, index }: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={category.href}
      className="group relative block w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#1A1A1A]"
      onMouseEnter={() => setIsHovered(false)} // handled beautifully via Tailwind group selectors
    >
      {/* Background Cinematic Image with zoom */}
      <img
        src={category.image}
        alt={category.title}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 select-none"
      />

      {/* Elegant dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10 group-hover:via-black/35 group-hover:to-black/20 transition-all duration-700 ease-in-out" />

      {/* Index marker */}
      <span className="absolute top-6 left-6 font-mono text-[10px] text-[#C8A97E]/70 uppercase tracking-widest">
        0{index + 1} / CATEGORY
      </span>

      {/* Content wrapper */}
      <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex flex-col justify-end text-[#F7F3EE]">
        {/* Title */}
        <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-light tracking-wide mb-2 sm:mb-3 group-hover:text-[#C8A97E] transition-colors duration-500">
          {category.title}
        </h3>

        {/* Height-collapsing description that fades in/out elegantly */}
        <p className="font-sans text-xs sm:text-sm font-light text-[#F7F3EE]/70 leading-relaxed max-w-sm max-h-0 opacity-0 group-hover:max-h-[80px] group-hover:opacity-100 transition-all duration-700 ease-in-out overflow-hidden">
          {category.description}
        </p>

        {/* CTA link indicator */}
        <div className="flex items-center gap-2 mt-4 text-[#C8A97E] text-[10px] uppercase font-sans tracking-[0.2em] font-semibold">
          <span>Discover Collection</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1.5" />
        </div>
      </div>
    </a>
  );
}
