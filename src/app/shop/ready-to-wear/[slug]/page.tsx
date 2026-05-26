"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { Container } from '@/src/components/common/Container';
import { Button } from '@/src/components/common/Button';
import { ProductGallery } from '@/src/components/shop/ProductGallery';
import { SizeSelector } from '@/src/components/shop/SizeSelector';
import { FAQAccordion } from '@/src/components/shop/FAQAccordion';
import { TestimonialSlider } from '@/src/components/shop/TestimonialSlider';
import { products } from '@/src/data/products';
import { formatPrice } from '@/src/lib/utils';
import { ShieldCheck, ShoppingBag, Sparkles, Layers, ArrowLeft, Heart, Check, ChevronDown } from 'lucide-react';

export default function ReadyToWearDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const [selectedSize, setSelectedSize] = useState('M');
  const [addedToCart, setAddedToCart] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeSpecIdx, setActiveSpecIdx] = useState(0);

  // Find product
  const product = products.find(p => p.slug === slug && p.category === 'ready-to-wear') || products.find(p => p.category === 'ready-to-wear') || products[3];

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  const relatedProducts = products.filter(p => p.category === 'ready-to-wear' && p.id !== product.id);

  const rtwFaqs = [
    { q: "What is your return policy on Ready-To-Wear shirts?", a: "We provide 30-day complimentary exchanges and returns for all standard size ready-to-wear shirting, provided the item has not been washed and retains all original boutique tags." },
    { q: "Can I adjust sleeve lengths on ready-to-wear garments?", a: "Ready-to-wear shirts come stitched to standardized tailors scales. If you require precise arm, chest, or waist adjustments, we recommend customizing our Made-To-Wear shirts where you can specify custom measurement slots." },
    { q: "What wash care do you advise?", a: "For 100% pure Normandy flax linen and high-end Giza cotton blends, we advise a gentle cold machine wash cycle with mild ecological detergents, followed by line drying in the shade. Steam iron while damp for ultimate crispness." }
  ];

  const rtwReviews = [
    { name: "Arun Prakash", role: "Business Lead", date: "05.02.2026", rating: 5, text: "The Ready-to-Wear collection gave me the perfect fit and premium feel for everyday office wear. The fabric quality and stitching were really impressive." },
    { name: "Vignesh Kumar", role: "Creative Director", date: "24.02.2026", rating: 4, text: "I was looking for stylish ready-to-wear shirts with a clean professional look, and this collection matched exactly what I needed." },
    { name: "Rahul Srinivasan", role: "Consultant", date: "18.04.2026", rating: 4, text: "The fitting, fabric comfort, and finishing details were excellent. It feels premium while still being comfortable for daily use." },
    { name: "Karthik Raj", role: "Sartorial Enthusiast", date: "19.01.2026", rating: 5, text: "Their ready-to-wear designs are modern, well-structured, and easy to style for both casual and formal occasions." },
    { name: "Sanjay Menon", role: "Management Consultant", date: "12.04.2026", rating: 5, text: "The quality is absolutely amazing. 18 stitches per inch, clean flat-felled seams, and the linen stays fresh all day long. Strongly recommended." },
    { name: "Dinesh Kumar", role: "Financial Advisor", date: "29.03.2026", rating: 4, text: "Perfect fit around the shoulders. The French placket front looks extremely clean and modern. Great shirt." }
  ];

  const specsAccordionItems = [
    { q: "Premium Materials", a: "Crafted from 100% organic French flax fibers or double-twisted Giza cotton. Highly breathable, soft, and stays comfortable throughout the day." },
    { q: "Wash & Longevity Care", a: "Cold gentle wash with like colors. Avoid bleaching. Line dry in shade. Warm iron while slightly damp. Safe for professional dry cleaning." },
    { q: "Double Needle Stitching", a: "Features high-density single-needle stitching with 18 stitches per inch (SPI). Reinforced side seams and lock-stitched buttonholes for high durability." },
    { q: "Collar Construction", a: "Assembled with high-end German interlinings, ensuring the spread collar remains structured, neat, and elegant throughout multiple wears and wash cycles." },
    { q: "Silhouette & Fit Details", a: "Designed around a comfortable, modern tailoring silhouette. Slight curve at the waist for an elegant tuck, and a standard length that stays secure all day." }
  ];

  return (
    <div className="min-h-screen bg-[#F7F3EE] text-[#1A1A1A] selection:bg-[#C8A97E]/30 selection:text-[#1A1A1A] overflow-x-hidden">
      <Navbar theme="light" />

      <main className="pt-24 sm:pt-32 pb-16">
        {/* Back navigation */}
        <Container className="mb-6 select-none">
          <button
            onClick={() => router.push('/shop')}
            className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#1A1A1A]/60 hover:text-[#C8A97E] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Atelier Catalog
          </button>
        </Container>

        {/* HERO SECTION */}
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Left: Product gallery */}
            <div className="lg:col-span-7">
              <ProductGallery images={product.images || [product.image]} name={product.name} />
            </div>

            {/* Right: Specifications & CTA */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#C8A97E] font-bold">
                    {product.tag}
                  </span>
                  <span className="text-[10px] uppercase font-mono text-[#DA291C] bg-[#DA291C]/10 px-2.5 py-0.5 rounded font-bold">
                    Boutique Classic
                  </span>
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1A1A1A] tracking-wide leading-tight">
                  {product.name}
                </h1>
                <div className="flex items-baseline gap-2 pt-1 select-none">
                  <span className="font-serif text-2xl font-bold text-[#1A1A1A]">
                    {formatPrice(product.price)}
                  </span>
                </div>
              </div>

              <div className="font-sans text-sm text-[#1A1A1A]/75 leading-relaxed font-light">
                {product.description}
              </div>

              {/* SECTION 2: SIZE SELECTION */}
              <div className="border-t border-[#1A1A1A]/10 pt-6 select-none">
                <SizeSelector selectedSize={selectedSize} onChange={setSelectedSize} />
              </div>

              {/* SECTION 3: PRODUCT SPECIFICATIONS DROPDOWN */}
              <div className="border-t border-[#1A1A1A]/10 pt-6 space-y-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#C8A97E] font-bold block select-none">
                  Product Specifications
                </span>
                
                <div className="relative">
                  <select
                    value={activeSpecIdx}
                    onChange={(e) => setActiveSpecIdx(parseInt(e.target.value))}
                    className="w-full p-3.5 bg-white border border-[#1A1A1A]/10 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#C8A97E] appearance-none cursor-pointer pr-10 shadow-xs text-[#1A1A1A]"
                  >
                    {specsAccordionItems.map((item, idx) => (
                      <option key={idx} value={idx}>
                        {item.q}
                      </option>
                    ))}
                  </select>
                  {/* Custom elegant chevron arrow inside the select */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#C8A97E]">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                {/* Display active spec details inside a beautiful luxury card */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSpecIdx}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.25 }}
                    className="bg-white p-4 border border-[#1A1A1A]/5 rounded-xl text-xs font-sans font-light leading-relaxed text-[#1A1A1A]/75 shadow-inner min-h-[72px]"
                  >
                    <p>{specsAccordionItems[activeSpecIdx].a}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* SECTION 4: ACTIONS */}
              <div className="space-y-3 pt-6 border-t border-[#1A1A1A]/10 select-none">
                <div className="flex gap-4">
                  <button
                    onClick={handleAddToCart}
                    className={`flex-1 py-4 uppercase font-sans text-xs tracking-widest font-bold rounded-full transition-all duration-500 cursor-pointer flex items-center justify-center gap-2 shadow-sm ${
                      addedToCart
                        ? 'bg-[#C8A97E] text-[#1A1A1A]'
                        : 'bg-white hover:bg-[#1A1A1A]/5 text-[#1A1A1A] border border-[#1A1A1A]/10'
                    }`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>{addedToCart ? 'Added to Bag' : 'Add to Bag'}</span>
                  </button>

                  <button
                    onClick={() => setShowCheckoutModal(true)}
                    className="flex-1 py-4 bg-[#1A1A1A] hover:bg-[#DA291C] text-[#F7F3EE] uppercase font-sans text-xs tracking-widest font-bold rounded-full transition-all duration-300 cursor-pointer shadow-sm"
                  >
                    Purchase {selectedSize}
                  </button>
                </div>
                
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="w-full py-3.5 border border-[#1A1A1A]/5 hover:border-[#1A1A1A]/20 bg-white/50 text-[#1A1A1A]/75 text-xs font-sans uppercase tracking-widest font-bold rounded-full cursor-pointer flex items-center justify-center gap-2 hover:bg-[#1A1A1A]/5 transition-all"
                >
                  <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-red-500 text-red-500 stroke-transparent' : ''}`} />
                  <span>{isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}</span>
                </button>
              </div>
            </div>
          </div>
        </Container>

        {/* SECTION 6: WHAT IS READY TO WEAR */}
        <section className="py-24 bg-white border-y border-[#1A1A1A]/5 mt-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-[1100px] mx-auto">
              
              {/* Left Column: Rich editorial image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl max-w-sm lg:max-w-md w-full mx-auto select-none">
                <img
                  src="/images/Category2.webp"
                  alt="Ready to Wear Customization"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-103"
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute inset-4 border border-white/10" />
              </div>

              {/* Right Column: Editorial Narrative */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#C8A97E] font-bold block">
                    The Modern Standard
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#1A1A1A] leading-tight">
                    What is Ready-To-Wear?
                  </h2>
                  <p className="font-sans text-base text-[#1A1A1A]/75 leading-relaxed font-light">
                    An elegant collection designed with absolute attention to clean, minimal lines and high-end tailoring details. These pieces are fully crafted on pre-designed luxury fit templates, ready to be integrated into your styling repertoire immediately.
                  </p>
                </div>

                <div className="space-y-6 text-xs sm:text-sm font-sans font-light text-[#1A1A1A]/70 leading-relaxed">
                  <p>
                    Each shirt features high-density side seam sewing with genuine Mother of Pearl buttons and premium German fusible collars. Perfect for quick sartorial excellence.
                  </p>
                  <div className="grid grid-cols-2 gap-4 border-t border-[#1A1A1A]/5 pt-6 text-[10px] uppercase font-bold tracking-wider text-[#C8A97E] font-mono">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#DA291C]" />
                      <span>Ready to wear immediately</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#DA291C]" />
                      <span>Clean French Plackets</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* SECTION 5: RELATED PRODUCTS */}
        <section className="py-20 bg-[#F7F3EE]">
          <Container>
            <div className="space-y-12">
              <div className="flex justify-between items-end border-b border-[#1A1A1A]/10 pb-4 select-none">
                <div className="space-y-2">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#C8A97E] font-bold block">
                    Tailored collection
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#1A1A1A]">
                    Related Ready-To-Wear Shirts
                  </h3>
                </div>
              </div>

              {/* Horizontal slider of product cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[900px] mx-auto">
                {relatedProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => router.push(`/shop/ready-to-wear/${p.slug}`)}
                    className="group bg-white border border-[#1A1A1A]/5 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col md:flex-row h-full"
                  >
                    <div className="w-full md:w-1/2 aspect-[4/5] overflow-hidden bg-gray-100 relative">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 md:w-1/2 flex flex-col justify-between space-y-6">
                      <div className="space-y-2">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#C8A97E] font-bold block">
                          {p.tag}
                        </span>
                        <h4 className="font-serif text-lg font-light text-[#1A1A1A] group-hover:text-[#C8A97E] transition-colors">
                          {p.name}
                        </h4>
                        <p className="font-sans text-xs text-[#1A1A1A]/60 line-clamp-3 font-light leading-relaxed">
                          {p.description}
                        </p>
                      </div>
                      <div className="flex justify-between items-baseline border-t border-[#1A1A1A]/5 pt-4">
                        <span className="font-sans text-[10px] text-[#1A1A1A]/50 uppercase tracking-widest font-semibold">
                          View details
                        </span>
                        <span className="font-serif text-base font-bold text-[#1A1A1A]">
                          {formatPrice(p.price)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 8: CUSTOMER STORIES */}
        <section className="py-20 bg-[#F5F5F3] border-y border-[#1A1A1A]/5">
          <Container>
            <div className="space-y-12">
              <div className="text-center space-y-2 select-none">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#C8A97E] font-bold block">
                  Atelier Journal
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#1A1A1A]">
                  Ready-To-Wear Stories
                </h3>
              </div>
              <TestimonialSlider testimonials={rtwReviews} />
            </div>
          </Container>
        </section>

        {/* SECTION 9: FAQ */}
        <section className="py-24 bg-[#F7F3EE]">
          <Container className="max-w-3xl">
            <div className="text-center mb-16 space-y-3 select-none">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#C8A97E] font-bold block">
                Atelier Assistance
              </span>
              <h2 className="font-serif text-3xl font-light text-[#1A1A1A]">
                Garment Care & Sizing FAQ
              </h2>
            </div>
            <FAQAccordion items={rtwFaqs} />
          </Container>
        </section>
      </main>

      {/* LUXURY SECURE TRANSACTION CHECKOUT MODAL */}
      <AnimatePresence>
        {showCheckoutModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCheckoutModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.4 }}
              className="relative bg-[#F7F3EE] text-[#1A1A1A] p-6 sm:p-8 max-w-md w-full border border-[#1A1A1A]/10 shadow-2xl z-10 rounded-none"
            >
              <button
                onClick={() => setShowCheckoutModal(false)}
                className="absolute top-4 right-4 text-xl font-light hover:text-[#C8A97E] cursor-pointer"
              >
                ✕
              </button>
              <div className="space-y-6">
                <div className="border-b border-[#1A1A1A]/10 pb-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#C8A97E] font-bold block">
                    Secure Checkout Portal
                  </span>
                  <h4 className="font-serif text-2xl font-light text-[#1A1A1A] mt-1">
                    Boutique Classic Purchase
                  </h4>
                </div>

                <div className="space-y-3 font-sans text-xs">
                  <div className="flex justify-between items-baseline font-serif text-sm border-b border-[#1A1A1A]/5 pb-2">
                    <span className="font-light">{product.name} (Size: {selectedSize})</span>
                    <span className="font-bold">{formatPrice(product.price)}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-[#1A1A1A]/60">Atelier Standard Courier</span>
                    <span className="font-mono text-emerald-600 font-bold uppercase">Complimentary</span>
                  </div>
                </div>

                {/* Fake Credit Card Form */}
                <div className="bg-[#1A1A1A] p-4 text-[#F7F3EE] rounded-xl space-y-4 shadow-lg select-none">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-serif text-xs uppercase tracking-widest text-[#C8A97E]">Credit / Debit Card</span>
                    <Layers className="w-5 h-5 text-[#C8A97E]" />
                  </div>
                  <div className="space-y-3 font-mono text-[10px]">
                    <div className="space-y-1">
                      <label className="text-[8px] text-white/50 uppercase tracking-widest">Cardholder Name</label>
                      <input
                        type="text"
                        placeholder="Johnathan Doe"
                        defaultValue="Sartorial Enthusiast"
                        className="w-full bg-white/5 border border-white/10 p-2 rounded text-white focus:outline-none focus:border-[#C8A97E]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[8px] text-white/50 uppercase tracking-widest">Card Number</label>
                      <input
                        type="text"
                        placeholder="4111 2222 3333 4444"
                        className="w-full bg-white/5 border border-white/10 p-2 rounded text-white focus:outline-none focus:border-[#C8A97E] tracking-widest"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[8px] text-white/50 uppercase tracking-widest">Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full bg-white/5 border border-white/10 p-2 rounded text-white focus:outline-none focus:border-[#C8A97E] text-center"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[8px] text-white/50 uppercase tracking-widest">CVV</label>
                        <input
                          type="password"
                          maxLength={3}
                          placeholder="•••"
                          className="w-full bg-white/5 border border-white/10 p-2 rounded text-white focus:outline-none focus:border-[#C8A97E] text-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    alert(`Secure transaction successful! Your shirt (${product.name}, Size: ${selectedSize}) is being boxed in our boutique packing rooms.`);
                    setShowCheckoutModal(false);
                  }}
                  className="w-full py-4 bg-[#DA291C] hover:bg-[#b52217] text-white font-sans text-xs uppercase tracking-widest font-bold transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Authorize secure payment {formatPrice(product.price)}</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
