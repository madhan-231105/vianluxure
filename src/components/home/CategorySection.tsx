/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { CategoryCard } from '../cards/CategoryCard';
import { categories } from '../../data/categories';
import { FadeUp } from '../animations/FadeUp';

export function CategorySection() {
  return (
    <section id="collective" className="py-12 sm:py-16 bg-[#F7F3EE]">
      <Container>
        {/* Editorial Heading Grid */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 sm:mb-24 gap-6 md:gap-12">
          <SectionTitle
            subtitle="02 / The Segments"
            title="Sartorial Disciplines"
            align="left"
            className="md:max-w-xl"
          />
          <FadeUp delay={0.3} className="md:max-w-md pb-1">
            <p className="text-[#1A1A1A]/70 font-sans text-sm sm:text-base leading-relaxed font-light">
              We separate our creations into four distinct disciplines, ensuring whether you seek raw, uncut textiles or full hand-sculpted bespoke consultations, your desires are met with absolute devotion.
            </p>
          </FadeUp>
        </div>

        {/* Categories Grid (Asymmetrical styling for custom luxury feeling) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {categories.map((category, index) => {
            const delayMultiplier = index * 0.15;
            return (
              <FadeUp
                key={category.id}
                delay={delayMultiplier}
                y={30}
                className={index % 2 === 1 ? 'lg:translate-y-8' : ''}
              >
                <CategoryCard category={category} index={index} />
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
