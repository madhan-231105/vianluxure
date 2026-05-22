/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Testimonial } from '../../types';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex flex-col h-full bg-[#E8DED1]/15 border border-[#1A1A1A]/5 p-8 sm:p-10 justify-between">
      {/* Upper quote section */}
      <div>
        <Quote className="w-8 h-8 text-[#C8A97E]/30 stroke-[1] mb-6 block" />
        
        <blockquote className="font-serif text-base sm:text-lg lg:text-xl font-light text-[#1A1A1A] leading-relaxed tracking-wide mb-8 italic">
          "{testimonial.quote}"
        </blockquote>
      </div>

      {/* Footer / Author section */}
      <div className="flex flex-col border-t border-[#1A1A1A]/5 pt-6">
        <span className="font-sans text-sm font-medium text-[#1A1A1A] tracking-wider">
          {testimonial.author}
        </span>
        <span className="font-sans text-[11px] text-[#1A1A1A]/50 tracking-widest uppercase mt-1">
          {testimonial.role} — <span className="text-[#C8A97E]">{testimonial.location}</span>
        </span>
      </div>
    </div>
  );
}
