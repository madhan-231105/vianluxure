"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../common/Button';
import { ArrowDown } from 'lucide-react';

const slides = [
  {
    image: "/images/banner1.webp",
    subtitle: "Signature Raw Linen Atelier",
    title: "Crafted For Comfort.",
    italicTitle: "Designed For Elegance.",
    description: "Discover a collection sculpted from the finest French flax grass, celebrating the soft drapes, quiet textures, and raw luxury of organic tailoring."
  },
  {
    image: "/images/banner2.png",
    subtitle: "The French Flax Heritage",
    title: "Normandy Fields.",
    italicTitle: "Pure Honest Weave.",
    description: "Sourced directly from northern France. Every fiber is woven with history, boasting rich textures, organic purity, and highly breathable drapes."
  },
  {
    image: "/images/banner3.png",
    subtitle: "The Bespoke Tailoring Experience",
    title: "Sculpted To Order.",
    italicTitle: "Refined To Perfection.",
    description: "Indulge in personalized fits created by hand. Tailored to hang beautifully, breathing life and quiet luxury into your daily capsule wardrobe."
  },
  {
    image: "/images/banner4.png",
    subtitle: "The Warm Season Wardrobe",
    title: "Timeless Minimalist.",
    italicTitle: "Sophisticated Comfort.",
    description: "Embrace lightweight elegance designed for transitions. Breathable pieces that flow effortlessly with you throughout summer and autumn days."
  }
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const scrollToExplore = () => {
    const nextSec = document.getElementById('collective');
    if (nextSec) {
      nextSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#E8DED1]">
      {/* Background cinematic imagery with smooth opacity cross-fade and scale transition */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slides[currentImageIndex].image}
              alt={`Vian Luxure Quiet Luxury Linen ${currentImageIndex + 1}`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center select-none"
            />
          </motion.div>
        </AnimatePresence>
        {/* Dark cinematic overlay that keeps the background banner images crisp, vivid, and highly visible without any washed-out faded look */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/50 z-[1]" />
      </div>

      {/* Floating brand indicator */}
      <div className="absolute top-28 left-6 sm:left-12 font-mono text-[9px] uppercase tracking-[0.25em] text-[#F7F3EE]/75 z-10 hidden md:block select-none pointer-events-none">
        01 / LA GRANDE ENTRÉE
      </div>

      {/* Hero content container */}
      <div className="relative z-10 text-center px-6 sm:px-12 flex flex-col items-center max-w-4xl min-h-[380px] sm:min-h-[460px] justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            {/* Subtitle letter-stagger */}
            <span className="font-sans text-[11px] sm:text-xs text-[#C8A97E] uppercase tracking-[0.35em] font-bold mb-5 sm:mb-6 leading-none">
              {slides[currentImageIndex].subtitle}
            </span>

            {/* Cinematic Premium Header */}
            <h1 className="overflow-visible py-2">
              <span
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-[#F7F3EE] tracking-normal leading-[1.1] block"
                style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.25), 0 1px 3px rgba(0, 0, 0, 0.15)' }}
              >
                {slides[currentImageIndex].title}
              </span>
              <span
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-[#F7F3EE] tracking-normal leading-[1.1] block italic mt-1"
                style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.25), 0 1px 3px rgba(0, 0, 0, 0.15)' }}
              >
                {slides[currentImageIndex].italicTitle}
              </span>
            </h1>

            {/* Secondary description statement */}
            <p
              className="mt-6 sm:mt-8 font-sans text-xs sm:text-sm md:text-base text-[#F7F3EE] max-w-lg leading-relaxed font-medium tracking-wide"
              style={{ textShadow: '0 1px 5px rgba(0, 0, 0, 0.25)' }}
            >
              {slides[currentImageIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Staggered action buttons remain stable and interactive outside AnimatePresence */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <Button
            variant="primary-light"
            size="lg"
            className="w-full sm:w-auto font-medium"
            onClick={() => {
              const el = document.getElementById('collection-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Shop Collection
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-[#F7F3EE]/55 text-[#F7F3EE] hover:border-[#C8A97E] hover:text-[#C8A97E] hover:bg-[#F7F3EE]/5 bg-black/10 font-medium"
            onClick={() => {
              const el = document.getElementById('showcase-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Fabrics
          </Button>
        </div>
      </div>

      {/* Interactive premium line indicator dots */}
      <div className="absolute bottom-10 left-6 sm:left-12 z-10 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className="group relative py-3 px-1 focus:outline-none cursor-pointer"
            aria-label={`Go to slide ${index + 1}`}
          >
            {/* The elegant aesthetic dot indicator */}
            <div className={`h-[2px] transition-all duration-700 ease-out bg-[#F7F3EE] ${
              index === currentImageIndex 
                ? 'w-10 opacity-80' 
                : 'w-4 opacity-35 group-hover:w-7 group-hover:opacity-60'
            }`} />
          </button>
        ))}
      </div>

      {/* Floating coordinates indicator (Slightly technical styling removed contextually, replaced by pure design aesthetic coordinates) */}
      <div className="absolute bottom-10 right-6 sm:right-12 z-10 hidden sm:flex items-center gap-3">
        <span className="font-mono text-[9px] text-[#F7F3EE]/60 tracking-widest uppercase">
          N° 49.82 CAEN, NORMANDY
        </span>
      </div>

      {/* Animated micro-bouncing scroll indicator */}
      <motion.button
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        onClick={scrollToExplore}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 p-2 text-[#F7F3EE]/70 hover:text-[#C8A97E] transition-colors cursor-pointer"
        aria-label="Scroll to content"
      >
        <ArrowDown className="w-5 h-5 stroke-[1.5]" />
      </motion.button>
    </section>
  );
}
