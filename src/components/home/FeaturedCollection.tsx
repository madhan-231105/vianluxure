"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import React from 'react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { ProductCard } from '../cards/ProductCard';
import { products } from '../../data/products';
import { FadeUp } from '../animations/FadeUp';

export function FeaturedCollection() {
  const [activeTab, setActiveTab] = useState<'All' | 'Ready To Wear' | 'Made To Order'>('All');

  const filteredProducts = products.filter((product) => {
    if (activeTab === 'All') return true;
    return product.category === activeTab;
  });

  const categories = ['All', 'Ready To Wear', 'Made To Order'] as const;

  return (
    <section id="collection-section" className="py-24 sm:py-32 bg-[#E8DED1]/10">
      <Container>
        {/* Title and category tabs */}
        <div className="flex flex-col items-center mb-16 sm:mb-24">
          <SectionTitle
            subtitle="05 / The Wardrobe"
            title="Featured Collection"
            description="Timeless structural designs highlighting French craftsmanship. Designed to look effortlessly relaxed yet hold a commanding editorial presence."
            className="mb-12"
          />

          {/* Interactive filter switcher */}
          <FadeUp delay={0.3} y={15} className="flex items-center gap-6 sm:gap-10 border-b border-[#1A1A1A]/10 pb-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-300 pb-1 relative cursor-pointer ${
                  activeTab === cat ? 'text-[#C8A97E] font-medium' : 'text-[#1A1A1A]/50 hover:text-[#1A1A1A]'
                }`}
              >
                {cat}
                {activeTab === cat && (
                  <span className="absolute bottom-[-13px] inset-x-0 h-[1.5px] bg-[#C8A97E]" />
                )}
              </button>
            ))}
          </FadeUp>
        </div>

        {/* Dynamic products layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProducts.map((product, idx) => (
            <FadeUp
              key={product.id}
              delay={(idx % 3) * 0.15}
              y={30}
              className="h-full"
            >
              <ProductCard product={product} />
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
