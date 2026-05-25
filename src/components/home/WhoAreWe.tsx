/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// React Server Component — all static HTML rendered server-side.
// Only the 3 animated elements (heading, glass card, button) are delegated
// to WhoAreWeClient which holds the "use client" boundary.

import React from 'react';
import { Container } from '../common/Container';
import { WhoAreWeClient } from './WhoAreWeClient';
import { WhoAreWeSketchReveal } from './WhoAreWeSketchReveal';

export function WhoAreWe() {
  return (
    <section
      id="who-are-we"
      className="
        relative
        overflow-hidden
        bg-[#F5F5F3]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      <Container>
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-12
            lg:gap-16
            xl:gap-24
            items-center
            mx-auto
            max-w-[1200px]
          "
        >
          {/* LEFT COLUMN — label (RSC) + animated heading (client) */}
          <div className="lg:col-span-5 relative z-10 flex flex-col justify-center">
            <p
              className="
                mb-5
                text-[11px]
                uppercase
                tracking-[0.25em]
                font-sans
                font-semibold
                text-[#7A7A7A]
              "
            >
              WHO WE ARE?
            </p>

            {/* Animated heading — client boundary */}
            <WhoAreWeClient part="heading" />
          </div>

          {/* RIGHT COLUMN — SVG background (RSC) + animated glass card (client) */}
          <div
            className="
              lg:col-span-7
              relative
              flex
              items-center
              justify-center
              min-h-[460px]
              sm:min-h-[520px]
              w-full
              py-6
              lg:py-0
            "
          >
            {/* Shirt sketch — clip-path curtain unveil on scroll */}
            <WhoAreWeSketchReveal />

            {/* Animated glass card — client boundary */}
            <WhoAreWeClient part="card" />
          </div>
        </div>
      </Container>
    </section>
  );
}