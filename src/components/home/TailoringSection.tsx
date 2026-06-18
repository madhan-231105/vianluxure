/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { FadeUp } from '../animations/FadeUp';
import { Button } from '../common/Button';
import { Paintbrush, Ruler, Compass, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function TailoringSection() {
  const steps = [
    {
      num: '01',
      title: "It Doesn't Just Fit. It Understands You.",
      icon: <Compass className="w-5 h-5" />,
      description: 'Our process begins not with a tape measure, but with a conversation. We account for every nuance: your posture, your dominant hand, the slope of your shoulders, and how you naturally move. This detailed understanding ensures your garment feels like a second skin.',
    },
    {
      num: '02',
      title: 'Select Your Fit',
      icon: <Paintbrush className="w-5 h-5" />,
      description: 'Ready-to-wear is made for the average person. ',
    },
    {
      num: '03',
      title: 'Add Details',
      icon: <Ruler className="w-5 h-5" />,
      description: "Tailoring fixes the mismatch between an 'off-the-rack' garment and your actual physique, Tailoring makes clothes fit your shoulders, and arms. ",
    },
  ];

  return (
    <section id="tailoring" className="py-12 sm:py-16 bg-[#F7F3EE]">
      <Container>
        {/* Title */}
        <SectionTitle
          subtitle="Custom"
          title="Tailored Just For You"
          description="Stop compromising with standard sizes. Your body is unique, and your clothing should reflect that individuality. This is where we move beyond ready-to-wear and create a garment designed for your exact silhouette, style, and success."
          className="mb-20 sm:mb-28"
        />

        {/* Timeline Grid */}
        <div className="relative mt-8">
          {/* Middle connecting line - hidden on mobile, shown on desktop */}
          <div className="absolute top-[44px] left-8 right-8 h-[1px] bg-[#1A1A1A]/10 hidden xl:block z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 lg:gap-8 z-10 relative items-stretch">
            {steps.map((step, idx) => (
              <FadeUp
                key={step.num}
                delay={idx * 0.15}
                y={25}
                className="group w-full"
              >
                <div className="flex gap-5 items-start xl:flex-col xl:items-start xl:gap-6 h-full">
                  {/* Visual Circle & Icon */}
                  <div className="h-14 w-14 flex-shrink-0 rounded-full bg-[#1A1A1A] text-[#F7F3EE] group-hover:bg-[#C8A97E] group-hover:text-[#1A1A1A] flex items-center justify-center transition-all duration-500 shadow-md relative z-10 border border-[#C8A97E]/10 cursor-pointer">
                    {step.icon}
                  </div>
                  
                  {/* Step details & text content */}
                  <div className="flex flex-col">
                    <span className="font-mono text-xs text-[#C8A97E] font-semibold uppercase tracking-widest leading-none block mb-1">
                      Step {step.num}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl text-[#1A1A1A] font-light tracking-wide leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#1A1A1A]/65 font-sans tracking-wide leading-relaxed font-light mt-3">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}

            {/* 4th Column Slot: Shirt Measurement Vector Illustration */}
            <FadeUp delay={0.45} y={25} className="w-full flex justify-center items-center">
              <div className="w-full max-w-[340px] xl:max-w-none bg-[#E5C56D] rounded-[24px] p-4 sm:p-5 shadow-lg relative flex items-center justify-center border border-white/20 select-none group">
                <svg 
                  viewBox="0 0 500 420" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                >
                  <defs>
                    <marker 
                      id="arrow-head" 
                      viewBox="0 0 10 10" 
                      refX="5" 
                      refY="5" 
                      markerWidth="6" 
                      markerHeight="6" 
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1.5 L 8 5 L 0 8.5 Z" fill="#8B1E1E" />
                    </marker>
                  </defs>

                  {/* --- SHIRT BLUEPRINT SKETCH (White Outline) --- */}
                  {/* Outer Shirt Frame */}
                  <path 
                    d="M 220 100 L 160 120 L 100 180 L 130 205 L 165 170 L 175 320 Q 250 330 325 320 L 335 170 L 370 205 L 400 180 L 340 120 L 280 100" 
                    stroke="white" 
                    strokeWidth="3.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />

                  {/* Neck Back Curve */}
                  <path 
                    d="M 220 100 Q 250 115 280 100" 
                    stroke="white" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeDasharray="4 4"
                  />

                  {/* Left Collar */}
                  <path 
                    d="M 220 100 L 250 130 L 215 140 L 205 105 Z" 
                    fill="#E5C56D" 
                    stroke="white" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />

                  {/* Right Collar */}
                  <path 
                    d="M 280 100 L 250 130 L 285 140 L 295 105 Z" 
                    fill="#E5C56D" 
                    stroke="white" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />

                  {/* Front Center Placket */}
                  <path 
                    d="M 250 130 L 250 326" 
                    stroke="white" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                  />

                  {/* Buttons */}
                  <circle cx="250" cy="160" r="3.5" fill="white" stroke="#E5C56D" strokeWidth="1" />
                  <circle cx="250" cy="200" r="3.5" fill="white" stroke="#E5C56D" strokeWidth="1" />
                  <circle cx="250" cy="240" r="3.5" fill="white" stroke="#E5C56D" strokeWidth="1" />
                  <circle cx="250" cy="280" r="3.5" fill="white" stroke="#E5C56D" strokeWidth="1" />

                  {/* --- MEASUREMENT SYSTEM (Dark Red / Maroon Guidelines & Arrows) --- */}
                  
                  {/* 1. Shoulder Width (Top Shoulder Seam to Seam) */}
                  <path d="M 160 120 L 160 55" stroke="#8B1E1E" strokeWidth="1.2" strokeDasharray="3 3" />
                  <path d="M 340 120 L 340 55" stroke="#8B1E1E" strokeWidth="1.2" strokeDasharray="3 3" />
                  <path 
                    d="M 162 62 L 338 62" 
                    stroke="#8B1E1E" 
                    strokeWidth="2" 
                    markerStart="url(#arrow-head)" 
                    markerEnd="url(#arrow-head)" 
                  />

                  {/* 2. Sleeve Length (Shoulder to Hem - Diagonal) */}
                  <path d="M 160 120 L 130 90" stroke="#8B1E1E" strokeWidth="1.2" strokeDasharray="3 3" />
                  <path d="M 100 180 L 70 150" stroke="#8B1E1E" strokeWidth="1.2" strokeDasharray="3 3" />
                  <path 
                    d="M 125 95 L 75 145" 
                    stroke="#8B1E1E" 
                    strokeWidth="2" 
                    markerStart="url(#arrow-head)" 
                    markerEnd="url(#arrow-head)" 
                  />

                  {/* 3. Sleeve Opening (Cuff Hem Width) */}
                  <path 
                    d="M 102 182 L 128 203" 
                    stroke="#8B1E1E" 
                    strokeWidth="2" 
                    markerStart="url(#arrow-head)" 
                    markerEnd="url(#arrow-head)" 
                  />

                  {/* 4. Chest Width (Pit to Pit) */}
                  <path d="M 165 170 L 125 170" stroke="#8B1E1E" strokeWidth="1.2" strokeDasharray="3 3" />
                  <path d="M 335 170 L 375 170" stroke="#8B1E1E" strokeWidth="1.2" strokeDasharray="3 3" />
                  <path 
                    d="M 167 170 L 333 170" 
                    stroke="#8B1E1E" 
                    strokeWidth="2" 
                    markerStart="url(#arrow-head)" 
                    markerEnd="url(#arrow-head)" 
                  />

                  {/* 5. Hem Width (Bottom Edge) */}
                  <path d="M 175 320 L 175 385" stroke="#8B1E1E" strokeWidth="1.2" strokeDasharray="3 3" />
                  <path d="M 325 320 L 325 385" stroke="#8B1E1E" strokeWidth="1.2" strokeDasharray="3 3" />
                  <path 
                    d="M 177 377 L 323 377" 
                    stroke="#8B1E1E" 
                    strokeWidth="2" 
                    markerStart="url(#arrow-head)" 
                    markerEnd="url(#arrow-head)" 
                  />

                  {/* 6. Body Shirt Length (Back Neck Collar Joint to Bottom Hem - Right Side) */}
                  <path d="M 340 120 L 440 120" stroke="#8B1E1E" strokeWidth="1.2" strokeDasharray="3 3" />
                  <path d="M 325 320 L 440 320" stroke="#8B1E1E" strokeWidth="1.2" strokeDasharray="3 3" />
                  <path 
                    d="M 425 122 L 425 318" 
                    stroke="#8B1E1E" 
                    strokeWidth="2" 
                    markerStart="url(#arrow-head)" 
                    markerEnd="url(#arrow-head)" 
                  />
                </svg>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* CTA below timeline */}
        <FadeUp delay={0.6} y={15} className="mt-16 sm:mt-24 text-center">
          <Button
            variant="outline"
            size="md"
            asAnchor
            href="#bespoke"
            className="border-[#C8A97E] text-[#C8A97E] hover:bg-[#C8A97E] hover:text-[#1A1A1A] transition-colors" >
           Bespoke
          </Button>
        </FadeUp>
      </Container>
    </section>
  );
}
