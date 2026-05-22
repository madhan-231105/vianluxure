'use client';

/**
 * FeaturedCollection — Swiper carousel with luxury product cards.
 * Cream background for visual contrast against dark sections.
 */

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Heart } from 'lucide-react';
import FadeReveal from '@/components/ui/FadeReveal';

/* Swiper CSS */
import 'swiper/css';
import 'swiper/css/pagination';

const PRODUCTS = [
  {
    id: 1,
    name: 'Pure Linen Shirt — Ivory',
    price: '₹4,299',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=700&q=85',
    label: 'New Arrival',
    category: 'Ready-to-Wear',
  },
  {
    id: 2,
    name: 'Cotton Blend Classic — Stone',
    price: '₹3,899',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=700&q=85',
    label: 'Bestseller',
    category: 'Ready-to-Wear',
  },
  {
    id: 3,
    name: 'Slub Linen — Ecru',
    price: '₹5,499',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=700&q=85',
    label: 'Limited Edition',
    category: 'Made-to-Wear',
  },
  {
    id: 4,
    name: 'Belgian Linen — Midnight',
    price: '₹5,999',
    image: 'https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=700&q=85',
    label: 'Summer Collection',
    category: 'Made-to-Wear',
  },
  {
    id: 5,
    name: 'Bespoke Linen — Biscuit',
    price: '₹8,999',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=700&q=85',
    label: 'Bespoke',
    category: 'Custom Bespoke',
  },
  {
    id: 6,
    name: 'Washed Linen — Sage',
    price: '₹4,599',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=700&q=85',
    label: 'New Arrival',
    category: 'Fabric',
  },
];

function ProductCard({ product }) {
  return (
    <div
      className="group relative overflow-hidden h-full"
      id={`product-card-${product.id}`}
      style={{ background: '#F5F1E8' }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Hover overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: 'rgba(13,13,13,0.25)' }}
        />

        {/* Label badge */}
        <div
          className="absolute top-5 left-5 px-3 py-1"
          style={{ background: '#0D0D0D' }}
        >
          <span
            className="text-[9px] tracking-[0.25em] uppercase font-light"
            style={{ color: '#C8A97E', fontFamily: 'var(--font-body)' }}
          >
            {product.label}
          </span>
        </div>

        {/* Wishlist */}
        <button
          id={`wishlist-${product.id}`}
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute top-5 right-5 p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          style={{
            background: 'rgba(245,241,232,0.9)',
            color: '#0D0D0D',
          }}
        >
          <Heart size={14} strokeWidth={1.5} />
        </button>
      </div>

      {/* Info */}
      <div className="px-4 py-5">
        <p
          className="text-[9px] tracking-[0.25em] uppercase mb-2 font-light"
          style={{ color: 'rgba(13,13,13,0.4)', fontFamily: 'var(--font-body)' }}
        >
          {product.category}
        </p>
        <h3
          className="font-light mb-3 leading-snug"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(18px, 2vw, 22px)',
            color: '#0D0D0D',
          }}
        >
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <span
            className="text-lg font-light"
            style={{ fontFamily: 'var(--font-display)', color: '#0D0D0D' }}
          >
            {product.price}
          </span>
          <button
            id={`add-cart-${product.id}`}
            aria-label={`Add ${product.name} to cart`}
            className="text-[9px] tracking-[0.2em] uppercase font-light py-2 px-4 transition-all duration-300"
            style={{
              border: '1px solid rgba(13,13,13,0.3)',
              color: '#0D0D0D',
              fontFamily: 'var(--font-body)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#0D0D0D';
              e.currentTarget.style.color = '#C8A97E';
              e.currentTarget.style.borderColor = '#0D0D0D';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#0D0D0D';
              e.currentTarget.style.borderColor = 'rgba(13,13,13,0.3)';
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedCollection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      id="collection"
      className="relative py-28 lg:py-40"
      style={{ background: '#F5F1E8' }}
      aria-label="Featured collection"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-8">
          <div>
            <FadeReveal>
              <div className="flex items-center gap-4 mb-4">
                <span className="block w-8 h-[1px]" style={{ background: '#C8A97E' }} />
                <span
                  className="text-[10px] tracking-[0.35em] uppercase"
                  style={{ color: '#C8A97E', fontFamily: 'var(--font-body)' }}
                >
                  Featured Pieces
                </span>
              </div>
            </FadeReveal>
            <FadeReveal delay={0.1}>
              <h2
                className="font-light"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(42px, 5vw, 80px)',
                  color: '#0D0D0D',
                  lineHeight: '1',
                }}
              >
                The{' '}
                <span className="italic" style={{ color: '#C8A97E' }}>
                  Collection
                </span>
              </h2>
            </FadeReveal>
          </div>

          {/* Custom navigation */}
          <FadeReveal direction="left">
            <div className="flex items-center gap-3">
              <button
                ref={prevRef}
                id="collection-prev"
                aria-label="Previous slide"
                className="flex items-center justify-center w-12 h-12 transition-all duration-300 hover:bg-[#0D0D0D] hover:text-[#C8A97E] group"
                style={{ border: '1px solid rgba(13,13,13,0.25)', color: '#0D0D0D' }}
              >
                <ArrowLeft size={16} strokeWidth={1.5} />
              </button>
              <button
                ref={nextRef}
                id="collection-next"
                aria-label="Next slide"
                className="flex items-center justify-center w-12 h-12 transition-all duration-300 hover:bg-[#0D0D0D] hover:text-[#C8A97E]"
                style={{ border: '1px solid rgba(13,13,13,0.25)', color: '#0D0D0D' }}
              >
                <ArrowRight size={16} strokeWidth={1.5} />
              </button>
            </div>
          </FadeReveal>
        </div>

        {/* Swiper carousel */}
        <FadeReveal delay={0.2}>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640:  { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="pb-14"
          >
            {PRODUCTS.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </FadeReveal>

        {/* View all link */}
        <FadeReveal delay={0.3}>
          <div className="flex justify-center mt-8">
            <a
              id="view-all-btn"
              href="#products"
              className="group inline-flex items-center gap-4 py-4 transition-colors duration-300"
              style={{ color: '#0D0D0D', fontFamily: 'var(--font-body)' }}
            >
              <span className="text-[10px] tracking-[0.3em] uppercase font-light">
                View All Pieces
              </span>
              <span
                className="block h-[1px] w-8 transition-all duration-500 group-hover:w-16"
                style={{ background: '#C8A97E' }}
              />
            </a>
          </div>
        </FadeReveal>
      </div>
    </section>
  );
}
