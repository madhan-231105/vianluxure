/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { TestimonialCard } from '../cards/TestimonialCard';
import { testimonials } from '../../data/testimonials';
import { FadeUp } from '../animations/FadeUp';

export function Testimonials() {
  return (
    <section id="journal" className="py-24 sm:py-32 bg-[#F7F3EE]">
      <Container>
        {/* Title */}
        <SectionTitle
          subtitle="07 / Client Correspondence"
          title="Atelier Testimonials"
          description="Read real chronicles from collectors, artists, and curators experiencing the unique texture and fit of Vian Luxure wardrobe pieces."
          className="mb-16 sm:mb-24"
        />

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <FadeUp
              key={test.id}
              delay={index * 0.15}
              y={25}
              className="h-full"
            >
              <TestimonialCard testimonial={test} />
            </FadeUp>
          ))}
        </div>

        {/* Dynamic client count floating bar */}
        <FadeUp delay={0.5} y={15} className="mt-16 text-center">
          <p className="font-sans text-xs text-[#1A1A1A]/40 uppercase tracking-[0.25em] font-medium">
            Verified Global Patron Reviews — Milan · Geneva · London · Paris
          </p>
        </FadeUp>
      </Container>
    </section>
  );
}
