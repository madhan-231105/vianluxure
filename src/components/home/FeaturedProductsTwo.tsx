"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Container } from '../common/Container';
import { SectionTitle } from '../common/SectionTitle';
import { Button } from '../common/Button';
import { products } from '../../data/products';
import { formatPrice } from '../../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { Badge } from '../common/Badge';

export function FeaturedProductsTwo() {
  // Grab the first two signature featured products (Aurelia Blazer & Normandy Trousers)
  const featured = products.slice(0, 2);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = useState<Record<string, 'description' | 'specifications'>>({
    [featured[0].id]: 'description',
    [featured[1].id]: 'description',
  });

  const toggleWishlist = (id: string) => {
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleTabChange = (productId: string, tab: 'description' | 'specifications') => {
    setActiveTab(prev => ({ ...prev, [productId]: tab }));
  };

  return (
    <section id="featured-products" className="py-12 sm:py-16 bg-[#F7F3EE] overflow-hidden border-b border-[#1A1A1A]/5 relative">
      {/* Decorative details */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E]/30 to-transparent" />

      <Container>
        <div className="mb-20 text-center">
          <SectionTitle
            subtitle="07 / The Atelier Duet"
            title="Featured Ensembles"
            description="Two foundational unstructured masterworks meticulously handcrafted to work in absolute cohesion or command an independent presence."
            align="center"
          />
        </div>

        {/* Large side-by-side grids */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
          {featured.map((product, idx) => {
            const isHovered = hoveredIndex === idx;
            const currentTab = activeTab[product.id] || 'description';

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 1.2, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col h-full bg-[#E8DED1]/20 border border-[#1A1A1A]/5 relative"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image Frame */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#E8DED1] cursor-pointer group">
                  {/* Badges */}
                  <div className="absolute top-6 left-6 z-10 flex flex-col gap-2">
                    {product.isNew && <Badge variant="gold">New Release</Badge>}
                    <Badge variant="dark">1 of 50 Atelier</Badge>
                  </div>

                  {/* Wishlist Heart */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product.id);
                    }}
                    className="absolute top-6 right-6 z-10 p-3 rounded-full bg-[#F7F3EE]/80 text-[#1A1A1A] hover:bg-[#C8A97E] hover:text-[#F7F3EE] transition-all duration-350 shadow-sm cursor-pointer"
                    aria-label="Add to wishlist"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors duration-300 ${wishlist[product.id] ? 'fill-red-500 text-red-500' : 'text-current'}`}
                    />
                  </button>

                  {/* Primary Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out select-none ${
                      isHovered && product.secondaryImage ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
                    }`}
                  />

                  {/* Secondary Image */}
                  {product.secondaryImage && (
                    <img
                      src={product.secondaryImage}
                      alt={`${product.name} alternate view`}
                      referrerPolicy="no-referrer"
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out select-none ${
                        isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                      }`}
                    />
                  )}

                  {/* Aesthetic frame overlays */}
                  <div className="absolute inset-6 border border-[#F7F3EE]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>

                {/* Content Section */}
                <div className="p-8 sm:p-10 flex flex-col flex-grow">
                  {/* Category & Price */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#C8A97E] font-bold">
                      {product.category} // MODEL {idx + 1}
                    </span>
                    <span className="font-sans text-sm sm:text-base text-[#1A1A1A]/80 font-light">
                      {formatPrice(product.price)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#1A1A1A] font-light tracking-wide mb-6">
                    {product.name}
                  </h3>

                  {/* Mini Tab Switcher */}
                  <div className="flex items-center gap-6 border-b border-[#1A1A1A]/10 pb-2 mb-6">
                    <button
                      onClick={() => handleTabChange(product.id, 'description')}
                      className={`font-sans text-[10px] tracking-widest uppercase transition-colors duration-300 pb-1 relative cursor-pointer ${
                        currentTab === 'description' ? 'text-[#1A1A1A] font-medium' : 'text-[#1A1A1A]/40 hover:text-[#1A1A1A]'
                      }`}
                    >
                      Ethos
                      {currentTab === 'description' && (
                        <span className="absolute bottom-[-9px] inset-x-0 h-[1px] bg-[#C8A97E]" />
                      )}
                    </button>
                    <button
                      onClick={() => handleTabChange(product.id, 'specifications')}
                      className={`font-sans text-[10px] tracking-widest uppercase transition-colors duration-300 pb-1 relative cursor-pointer ${
                        currentTab === 'specifications' ? 'text-[#1A1A1A] font-medium' : 'text-[#1A1A1A]/40 hover:text-[#1A1A1A]'
                      }`}
                    >
                      Specifications
                      {currentTab === 'specifications' && (
                        <span className="absolute bottom-[-9px] inset-x-0 h-[1px] bg-[#C8A97E]" />
                      )}
                    </button>
                  </div>

                  {/* Tab Contents with AnimatePresence */}
                  <div className="h-32 overflow-hidden mb-8">
                    <AnimatePresence mode="wait">
                      {currentTab === 'description' ? (
                        <motion.p
                          key="desc"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.3 }}
                          className="text-xs sm:text-sm text-[#1A1A1A]/70 font-sans tracking-wide leading-relaxed font-light"
                        >
                          {product.description}
                        </motion.p>
                      ) : (
                        <motion.ul
                          key="specs"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-2"
                        >
                          {product.details?.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-center gap-2.5 text-xs text-[#1A1A1A]/70 font-sans font-light">
                              <Sparkles className="w-2.5 h-2.5 text-[#C8A97E] flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Actions */}
                  <div className="mt-auto pt-6 border-t border-[#1A1A1A]/5 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] tracking-wider text-[#1A1A1A]/50 font-mono">
                        ATELIER SLOTS AVAILABLE
                      </span>
                    </div>

                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => alert(`Custom order inquiry received for ${product.name}. Our master clothier will contact you within 24 hours.`)}
                      className="group"
                    >
                      <span className="flex items-center gap-2">
                        Inquire & Order <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                      </span>
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
