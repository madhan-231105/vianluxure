/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Category } from '../../types';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
  index: number;
}

export function CategoryCard({ category, index }: CategoryCardProps) {
  return (
    <a
      href={category.href}
      className="group relative block w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#1A1A1A]"
    >
      {/* Background Cinematic Image with zoom */}
      <img
        src={category.image}
        alt={category.title}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 select-none"
      />

      {/* Elegant global dark overlay */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-all duration-700 ease-in-out" />

      {/* Top dark gradient overlay for index marker legibility */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-10" />

      {/* Index marker */}
      <span className="absolute top-6 left-6 font-mono text-[10px] font-bold text-[#C8A97E] uppercase tracking-[0.25em] z-10">
        0{index + 1} / CATEGORY
      </span>

      {/* Content wrapper with a dedicated soft dark fade backdrop for maximum text legibility */}
      <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 pt-24 flex flex-col justify-end text-[#F7F3EE] bg-gradient-to-t from-black/95 via-black/70 to-transparent z-10">
        {/* Title */}
        <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-medium tracking-wide mb-2.5 group-hover:text-[#C8A97E] transition-colors duration-500">
          {category.title}
        </h3>

        {/* Always visible elegant description */}
        <p className="font-sans text-xs sm:text-sm font-normal text-white/90 group-hover:text-white leading-relaxed max-w-sm mb-4 transition-colors duration-500">
          {category.description}
        </p>

        {/* CTA link indicator */}
        <div className="flex items-center gap-2 text-[#C8A97E] text-[10px] uppercase font-sans tracking-[0.2em] font-bold">
          <span>Discover Collection</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1.5" />
        </div>
      </div>
    </a>
  );
}
