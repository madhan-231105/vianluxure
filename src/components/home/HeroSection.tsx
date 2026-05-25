"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Button } from '../common/Button';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { loadGsap, refreshScrollTriggers } from '@/src/lib/gsap';

const slides = [
  {
    image: "/videos/banner3.webm",
    subtitle: "01 / Ready To Wear Atelier",
    title: "Ready Shirts",
    italicTitle: "For Everyday Wear.",
    description: "Shop ready-to-wear linen shirts designed with comfortable fits and clean everyday styling.",
    buttonText: "View Fabrics",
    targetId: "collective"
  },
  {
    image: "/images/banner2.webp",
    subtitle: "02 / Signature Daily Fit",
    title: "Ready Shirts",
    italicTitle: "For Everyday Wear.",
    description: "Shop ready-to-wear linen shirts designed with comfortable fits and clean everyday styling.",
    buttonText: "Shop Now",
    targetId: "featured-products"
  },
  {
    image: "/images/banner1.webp",
    subtitle: "03 / Tailor Customizations",
    title: "Choose The Details",
    italicTitle: "You Like.",
    description: "Select collars, cuffs, buttons, sleeves, and fabrics to create a shirt suited for your style.",
    buttonText: "Explore More",
    targetId: "collective"
  },
  {
    image: "/images/banner4.webp",
    subtitle: "04 / Personalized Artisanal Fits",
    title: "Shirts Made Around",
    italicTitle: "Your Measurements.",
    description: "Create fully personalized shirts designed around your measurements and preferred styling details.",
    buttonText: "Customize Now",
    targetId: "tailoring"
  }
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Dynamic Timeout: Play video slide for 8 seconds, others for 6 seconds
  useEffect(() => {
    const isVideo = slides[currentImageIndex].image.endsWith('.webm');
    const delay = isVideo ? 8000 : 6000;
    const timer = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, delay);
    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  // Preload all hero banners so cross-fades never show an empty frame
  useEffect(() => {
    slides.forEach((slide) => {
      if (!slide.image.endsWith('.webm')) {
        const img = new window.Image();
        img.src = slide.image;
      }
    });
  }, []);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const parallax = parallaxRef.current;
    if (!section || !parallax) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ctx: { revert: () => void } | null = null;
    let cancelled = false;

    loadGsap().then((lib) => {
      if (!lib || cancelled) return;
      const { gsap } = lib;

      ctx = gsap.context(() => {
        gsap.set(parallax, { scale: 1, y: 0, force3D: true });

        gsap.to(parallax, {
          scale: 1.22,
          y: 90,
          ease: 'none',
          force3D: true,
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${Math.round(window.innerHeight * 0.95)}`,
            pin: true,
            pinSpacing: true,
            scrub: 0.5,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        refreshScrollTriggers();
      }, section);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  const scrollToExplore = () => {
    const nextSec = document.getElementById('collective');
    if (nextSec) {
      nextSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero-section"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1A1A1A]"
    >
      {/* Background: stacked cross-fade (no wait gap) + GSAP scroll scrub */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#1A1A1A]">
        <div
          ref={parallaxRef}
          className="absolute inset-0 w-full h-[130%] -top-[15%] will-change-transform origin-center"
        >
          {slides.map((slide, index) => {
            const isVideo = slide.image.endsWith('.webm');
            return (
              <motion.div
                key={slide.image}
                initial={false}
                animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full"
                style={{ zIndex: currentImageIndex === index ? 2 : 1 }}
                aria-hidden={currentImageIndex !== index}
              >
                {isVideo ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    ref={(el) => {
                      if (el) {
                        el.muted = true;
                        el.play().catch((err) => {
                          console.warn("Autoplay blocked or interrupted:", err);
                        });
                      }
                    }}
                    className="absolute inset-0 w-full h-full object-cover select-none bg-[#1A1A1A]"
                  >
                    <source src={slide.image} type="video/webm" />
                  </video>
                ) : (
                  <Image
                    src={slide.image}
                    alt={`Vian Luxure Quiet Luxury Linen ${index + 1}`}
                    fill
                    priority={index === 2}
                    loading={index === 2 ? undefined : 'eager'}
                    quality={75}
                    sizes="100vw"
                    className="object-cover object-center select-none bg-[#1A1A1A]"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
        {/* Dark cinematic overlay — fixed, not parallaxed */}
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col items-center"
          >
            {/* Subtitle */}
            <span className="font-sans text-[11px] sm:text-xs text-[#C8A97E] uppercase tracking-[0.35em] font-bold mb-5 sm:mb-6 leading-none">
              {slides[currentImageIndex].subtitle}
            </span>

            {/* Cinematic Premium Header */}
            <h1 className="overflow-visible py-2">
              <span
                className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-medium text-[#F7F3EE] tracking-normal leading-[1.1] block"
                style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.25), 0 1px 3px rgba(0, 0, 0, 0.15)' }}
              >
                {slides[currentImageIndex].title}
              </span>
              <span
                className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-medium text-[#F7F3EE] tracking-normal leading-[1.1] block italic mt-1"
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

        {/* Dynamic single action button */}
        <div className="mt-10 sm:mt-12 w-full sm:w-auto flex justify-center z-10">
          <Button
            variant="primary-light"
            size="lg"
            className="w-full sm:w-auto font-medium shadow-lg"
            onClick={() => {
              const targetId = slides[currentImageIndex].targetId;
              const el = document.getElementById(targetId);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {slides[currentImageIndex].buttonText}
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
            <div className={`h-[2px] transition-all duration-700 ease-out bg-[#F7F3EE] ${
              index === currentImageIndex 
                ? 'w-10 opacity-80' 
                : 'w-4 opacity-35 group-hover:w-7 group-hover:opacity-60'
            }`} />
          </button>
        ))}
      </div>

      {/* Floating coordinates indicator */}
      <div className="absolute bottom-10 right-6 sm:right-12 z-10 hidden sm:flex items-center gap-3">
        <span className="font-mono text-[9px] text-[#F7F3EE]/60 tracking-widest uppercase">
          N° 49.82 CAEN, NORMANDY
        </span>
      </div>

      {/* Micro-bouncing scroll indicator */}
      <button
        onClick={scrollToExplore}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 p-2 text-[#F7F3EE]/70 hover:text-[#C8A97E] transition-colors cursor-pointer animate-bounce"
        aria-label="Scroll to content"
      >
        <ArrowDown className="w-5 h-5 stroke-[1.5]" />
      </button>
    </section>
  );
}
