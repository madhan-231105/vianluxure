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

export function TailoringSection() {
  const steps = [
    {
      num: '01',
      title: 'Choose Fabric',
      icon: <Compass className="w-5 h-5" />,
      description: 'Select your organic foundation from our curated library of lowlands French flax linen, raw Belgian blends, and luxurious mulberry silks.',
    },
    {
      num: '02',
      title: 'Customize Details',
      icon: <Paintbrush className="w-5 h-5" />,
      description: 'Tailor every single nuance, including collar shapes, hem styles, genuine horn button setups, and custom contrast interior pipings.',
    },
    {
      num: '03',
      title: 'Share Measurements',
      icon: <Ruler className="w-5 h-5" />,
      description: 'Consult our digital sizing advisor or schedule a virtual measurement video call with our skilled head cutter to guide your fit curves.',
    },
    {
      num: '04',
      title: 'Tailored Delivery',
      icon: <Sparkles className="w-5 h-5" />,
      description: 'Receive your uniquely sculpted linen garments within 14 business days, beautifully wrapped in reusable organic garment packaging.',
    },
  ];

  return (
    <section id="tailoring" className="py-12 sm:py-16 bg-[#F7F3EE]">
      <Container>
        {/* Title */}
        <SectionTitle
          subtitle="04 / Bespoke Atelier"
          title="The Tailoring Experience"
          description="A seamless, sensory journey from raw plant fibre to standard customized fit, engineered to bring world-class styling right to your home."
          className="mb-20 sm:mb-28"
        />

        {/* Timeline Grid */}
        <div className="relative mt-8">
          {/* Middle connecting line - hidden on mobile, shown on desktop */}
          <div className="absolute top-[44px] left-8 right-8 h-[1px] bg-[#1A1A1A]/10 hidden xl:block z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 lg:gap-8 z-10 relative">
            {steps.map((step, idx) => (
              <FadeUp
                key={step.num}
                delay={idx * 0.15}
                y={25}
                className="group flex flex-col items-start"
              >
                {/* Visual Circle & Icon */}
                <div className="flex items-center gap-4 xl:flex-col xl:items-start xl:gap-6 mb-5">
                  <div className="h-14 w-14 rounded-full bg-[#1A1A1A] text-[#F7F3EE] group-hover:bg-[#C8A97E] group-hover:text-[#1A1A1A] flex items-center justify-center transition-all duration-500 shadow-md relative z-10 border border-[#C8A97E]/10 cursor-pointer">
                    {step.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-xs text-[#C8A97E] font-semibold uppercase tracking-widest leading-none">
                      Step {step.num}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl text-[#1A1A1A] font-light tracking-wide mt-1 leading-tight">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#1A1A1A]/65 font-sans tracking-wide leading-relaxed font-light pl-18 xl:pl-0">
                  {step.description}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* CTA below timeline */}
        <FadeUp delay={0.6} y={15} className="mt-16 sm:mt-24 text-center">
          <Button
            variant="outline"
            size="md"
            asAnchor
            href="#bespoke"
            className="border-[#C8A97E] text-[#C8A97E] hover:bg-[#C8A97E] hover:text-[#1A1A1A] transition-colors"
          >
            Start Bespoke Commission
          </Button>
        </FadeUp>
      </Container>
    </section>
  );
}
