"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Search } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export function ProductGallery({ images = [], name }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  const currentImage = images[activeIndex] || images[0] || '/images/image.webp';

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 w-full">
      {/* Thumbnail column */}
      <div className="flex flex-row md:flex-col gap-3 shrink-0 overflow-x-auto md:overflow-y-auto max-h-[500px] py-1 select-none scrollbar-none">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`relative aspect-[3/4] w-16 sm:w-20 md:w-24 overflow-hidden border transition-all duration-500 rounded-lg shrink-0 cursor-pointer ${
              activeIndex === idx
                ? 'border-[#C8A97E] ring-1 ring-[#C8A97E]'
                : 'border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30'
            }`}
          >
            <img
              src={img}
              alt={`${name} thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-[#1A1A1A]/5 transition-opacity ${activeIndex === idx ? 'opacity-0' : 'opacity-100'}`} />
          </button>
        ))}
      </div>

      {/* Main Image Viewport */}
      <div className="relative flex-grow aspect-[3/4] overflow-hidden bg-[#E8DED1]/30 rounded-2xl group border border-[#1A1A1A]/5">
        {/* Subtle Luxury Pattern Layer */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03] z-[1]" />
        
        {/* Zoom Icon indicator */}
        <div className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/75 backdrop-blur-md text-[#1A1A1A] border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <Search className="w-4 h-4 text-[#1A1A1A]/60" />
        </div>

        {/* Dynamic Image with AnimatePresence */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          className="relative w-full h-full cursor-zoom-in overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIndex}
              src={currentImage}
              alt={name}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full object-cover select-none"
              style={{
                transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                transform: isZoomed ? 'scale(2.2)' : 'scale(1)',
                transition: isZoomed ? 'none' : 'transform 0.5s ease-out',
              }}
            />
          </AnimatePresence>

          {/* Microscopic texture overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
