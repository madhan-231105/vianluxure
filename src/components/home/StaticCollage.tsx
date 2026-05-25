/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { StaticCollageGrid } from './StaticCollageGrid';

export function StaticCollage() {
  return (
    <section id="collage-section" className="py-12 sm:py-16 bg-[#F7F3EE] overflow-hidden border-b border-[#1A1A1A]/5">
      <Container>
        <div className="max-w-3xl mb-16 sm:mb-24">
          <SectionTitle
            subtitle="Some of"
            title="Our Collections"
            description="An asymmetric visual diary celebrating raw organic textures, unstructured premium silhouettes, and the quiet luxury of Normandy craftsmanship."
            align="left"
          />
        </div>

        <StaticCollageGrid />
      </Container>
    </section>
  );
}
