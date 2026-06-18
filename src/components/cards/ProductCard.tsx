"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import React from 'react';
import { Product } from '../../types';
import { formatPrice } from '../../lib/utils';
import { Plus, Heart } from 'lucide-react';
import { Badge } from '../common/Badge';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);

  return (
    <div
      className="group relative flex flex-col w-full h-full bg-[#F7F3EE]/40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#E8DED1]/50 cursor-pointer">
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {product.isNew && <Badge variant="gold">New</Badge>}
          {product.price > 1000 && <Badge variant="dark">Limited</Badge>}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-[#F7F3EE]/80 text-[#1A1A1A] hover:bg-[#C8A97E] hover:text-[#F7F3EE] transition-all duration-350 shadow-sm md:opacity-0 md:group-hover:opacity-100 cursor-pointer"
          aria-label="Add to wishlist"
        >
          <Heart
            className={`w-3.5 h-3.5 transition-colors duration-300 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-current'}`}
          />
        </button>

        {/* Main image */}
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out select-none ${
            isHovered && product.secondaryImage ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />

        {/* Secondary hover-swap image */}
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

        {/* Subtle Bottom Bar on Hover */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1A1A1A]/30 to-transparent p-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <button
            onClick={() => setShowQuickView(true)}
            className="text-[10px] uppercase font-sans tracking-widest text-[#F7F3EE] hover:text-[#C8A97E] transition-colors duration-300 text-left cursor-pointer"
          >
            Quick View
          </button>
          <button 
            className="flex items-center gap-1.5 text-[10px] uppercase font-sans tracking-widest text-[#F7F3EE] hover:text-[#C8A97E] transition-colors duration-300 cursor-pointer"
            onClick={() => alert(`Standard product detailed view would load for item: ${product.name}`)}
          >
            <Plus className="w-3 h-3" /> Select Size
          </button>
        </div>
      </div>

      {/* Info elements */}
      <div className="pt-4 pb-2 flex flex-col flex-grow">
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#C8A97E] font-medium mb-1">
          {product.category}
        </span>
        <h3 className="font-serif text-base sm:text-lg text-[#1A1A1A] font-light tracking-wide hover:text-[#C8A97E] transition-colors duration-300 cursor-pointer block truncate">
          {product.name}
        </h3>
        <span className="mt-2 text-xs sm:text-sm text-[#1A1A1A]/70 font-sans font-light">
          {formatPrice(product.price)}
        </span>
      </div>

      {/* Quick View Modal (Simple modal context as React element without full portal to prevent mounting overhead) */}
      {showQuickView && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setShowQuickView(false)}
        >
          <div
            className="relative bg-[#F7F3EE] text-[#1A1A1A] p-6 sm:p-10 max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-none shadow-2xl flex flex-col md:flex-row gap-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQuickView(false)}
              className="absolute top-4 right-4 text-xl font-light hover:text-[#C8A97E] cursor-pointer"
            >
              ✕
            </button>
            <div className="w-full md:w-1/2 aspect-[3/4] overflow-hidden bg-gray-100">
              <img
                src={product.secondaryImage || product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#C8A97E] font-semibold">
                  {product.category}
                </span>
                <h4 className="font-serif text-2xl font-light tracking-wide mt-2 mb-3">
                  {product.name}
                </h4>
                <p className="text-lg font-light text-[#C8A97E] mb-4">
                  {formatPrice(product.price)}
                </p>
                <p className="text-xs sm:text-sm text-[#1A1A1A]/70 font-sans tracking-wide leading-relaxed font-light mb-6">
                  {product.description}
                </p>
                
                {product.details && (
                  <div className="mb-6">
                    <h5 className="text-[10px] uppercase tracking-wider font-sans font-semibold mb-2 text-[#1A1A1A]/65">
                      Specifications
                    </h5>
                    <ul className="text-xs text-[#1A1A1A]/70 space-y-1.5 list-disc pl-4 font-light">
                      {product.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <button
                className="w-full bg-[#1A1A1A] text-[#F7F3EE] uppercase tracking-widest text-xs py-3.5 hover:bg-[#C8A97E] hover:text-[#1A1A1A] transition-colors duration-500 font-sans cursor-pointer"
                onClick={() => {
                  alert(`Added ${product.name} to luxury selection!`);
                  setShowQuickView(false);
                }}
              >
                Inquire & Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
