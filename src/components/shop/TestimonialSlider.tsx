"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  date: string;
  rating: number;
  text: string;
  role?: string;
  location?: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="w-full overflow-hidden select-none py-4">
      {/* Horizontal Draggable Grid Container */}
      <motion.div
        drag="x"
        dragConstraints={containerRef}
        whileDrag={{ cursor: 'grabbing' }}
        className="flex gap-6 cursor-grab w-full md:max-w-max mx-auto px-4"
      >
        {testimonials.map((rev, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="w-[280px] sm:w-[350px] shrink-0 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#1A1A1A]/5 flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow duration-300"
          >
            <div className="space-y-4">
              {/* Star rating */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, starIdx) => (
                  <Star
                    key={starIdx}
                    className={`w-3.5 h-3.5 ${
                      starIdx < rev.rating
                        ? 'text-[#C8A97E] fill-[#C8A97E]'
                        : 'text-[#1A1A1A]/10'
                    }`}
                  />
                ))}
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#1A1A1A]/75 leading-relaxed font-light italic">
                "{rev.text}"
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#1A1A1A]/5 text-[10px] sm:text-xs font-sans">
              <div className="flex flex-col">
                <span className="font-bold text-[#1A1A1A]">{rev.name}</span>
                {rev.role && <span className="text-[#1A1A1A]/40 text-[9px]">{rev.role}</span>}
              </div>
              <span className="text-[#1A1A1A]/40">{rev.date}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="text-center mt-6 text-[10px] uppercase tracking-wider text-[#1A1A1A]/40 font-mono hidden sm:block">
        ← Drag or Swipe to Browse Stories →
      </div>
    </div>
  );
}
