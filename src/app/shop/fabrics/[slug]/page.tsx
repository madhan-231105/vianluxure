"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { Container } from '@/src/components/common/Container';
import { Button } from '@/src/components/common/Button';
import { ProductGallery } from '@/src/components/shop/ProductGallery';
import { FAQAccordion } from '@/src/components/shop/FAQAccordion';
import { TestimonialSlider } from '@/src/components/shop/TestimonialSlider';
import { products } from '@/src/data/products';
import { formatPrice } from '@/src/lib/utils';
import { ShieldCheck, Flame, ShoppingBag, ArrowRight, ArrowLeft, Layers, Sparkles, Check } from 'lucide-react';

const FABRIC_SWATCHES = [
  {
    id: 'f1',
    slug: 'normandy-raw-flax',
    name: 'Normandy Raw Flax',  
    tag: 'Sustainable European Flax',
    price: 85,
    image: '/images/fabrics/fabric_1.webp',
    images: [
      '/images/fabrics/fabric_1.webp',
      '/images/Category1.webp',
      '/images/image1.webp',
      '/images/image2.webp'
    ],
    description: 'European premium 70 lea pure linen fabric designed for breathable everyday wear and natural organic texture.',
    specs: ['Pure Organic Flax', 'Weight: 390g/m²', 'GSM: 140', 'Width: 58 inches'],
    details: [
      'Sourced directly from the Normandy flax fields of northern France.',
      'Extremely breathable and moisture-wicking weave for summer comfort.',
      'Naturally hypoallergenic and anti-bacterial organic threads.',
      'Highly durable construction that softens gracefully with each wash.',
      'Crafted with 100% biodegradable zero-waste flax fibers.'
    ]
  },
  {
    id: 'f2',
    slug: 'aurelia-crimson-blend',
    name: 'Aurelia Crimson Blend',
    tag: 'Premium Cotton-Linen',
    price: 95,
    image: '/images/fabrics/fabric_2.webp',
    images: [
      '/images/fabrics/fabric_2.webp',
      '/images/Category2.webp',
      '/images/image3.webp',
      '/images/image4.webp'
    ],
    description: 'Balanced linen and cotton fibers created for soft texture, comfort, and everyday durable wear.',
    specs: ['55% Linen, 45% Cotton', 'Weight: 280g/m²', 'GSM: 120', 'Pre-shrunk Double Enzyme'],
    details: [
      'Perfect blend of premium cotton softness and linen breathability.',
      'Double-enzyme pre-shrunk for premium tactile stability.',
      'Rich crimson coloration obtained via organic luxury dyes.',
      'Perfect choice for regular wash-and-wear shirts.',
      'Optimal drape with 120 GSM ideal for casual tailoring.'
    ]
  },
  {
    id: 'f3',
    slug: 'indigo-scallop-weave',
    name: 'Indigo Scallop Weave',
    tag: 'Special Edition Weave',
    price: 110,
    image: '/images/fabrics/fabric_3.webp',
    images: [
      '/images/fabrics/fabric_3.webp',
      '/images/vian_fabric_showcase_1779434571577.webp',
      '/images/image2.webp',
      '/images/image4.webp'
    ],
    description: 'Cotton-linen fabric with scallop-pattern detailing designed for clean, refined, and custom everyday shirting.',
    specs: ['Special Jacquard Weave', 'Scallop Detailing', 'GSM: 130', 'Imported Long-staple'],
    details: [
      'Features an elegant micro-scallop pattern woven on high-end Jacquard looms.',
      'Imported long-staple cotton-linen threads for ultimate luxury touch.',
      'Designed specifically for premium semi-formal and custom shirting.',
      'Subtle indigo hues that present gorgeous light reflections.',
      'Excellent breathability with high tensile fiber durability.'
    ]
  },
  {
    id: 'f4',
    slug: 'imperial-giza-cotton',
    name: 'Imperial Giza Cotton',
    tag: 'Rare Egyptian Cotton',
    price: 125,
    image: '/images/fabrics/fabric_4.webp',
    images: [
      '/images/fabrics/fabric_4.webp',
      '/images/banner4.webp',
      '/images/image1.webp',
      '/images/image3.webp'
    ],
    description: 'Rare double-twisted Giza Egyptian cotton weave, designed for an incredibly soft, smooth, and breathable sartorial handle.',
    specs: ['100% Giza Cotton', 'Weight: 240g/m²', 'GSM: 110', 'High Thread Count'],
    details: [
      'Woven from the finest extra-long staple Egyptian Giza cotton.',
      'High thread count weave for a silky smooth finish and pristine luster.',
      'Extremely breathable and naturally hypoallergenic fabric body.',
      'Premium lock-stitch durability designed for custom shirting.',
      'Eco-friendly cultivation using Nile-delta sustainable agriculture.'
    ]
  }
];

export default function FabricDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const [meters, setMeters] = useState(2);
  const [customMeters, setCustomMeters] = useState('');
  const [activeMeters, setActiveMeters] = useState(2);
  const [addedToCart, setAddedToCart] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [showStickyCard, setShowStickyCard] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Find dynamic swatch by slug or default to first
  const initialSwatch = FABRIC_SWATCHES.find(sw => sw.slug === slug) || FABRIC_SWATCHES[0];
  const [selectedFabric, setSelectedFabric] = useState(initialSwatch);

  // Sync selectedFabric when slug changes
  useEffect(() => {
    const swatch = FABRIC_SWATCHES.find(sw => sw.slug === slug);
    if (swatch) {
      setSelectedFabric(swatch);
    }
  }, [slug]);

  // Find product by slug
  const product = products.find(p => p.slug === slug && p.category === 'fabrics') || products[0];

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const heroHeight = heroRef.current.getBoundingClientRect().height;
      if (window.scrollY > heroHeight - 100) {
        setShowStickyCard(true);
      } else {
        setShowStickyCard(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMeterChange = (val: number) => {
    setActiveMeters(val);
    setMeters(val);
    setCustomMeters('');
  };

  const handleCustomMeterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomMeters(val);
    const parsed = parseFloat(val);
    if (!isNaN(parsed) && parsed > 0) {
      setActiveMeters(parsed);
    }
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  // Get other fabrics
  const relatedFabrics = products.filter(p => p.category === 'fabrics' && p.id !== product.id);

  const fabricFaqs = [
    { q: "What is the minimum fabric order length?", a: "Our minimum order length is 0.5 meters. You can select standard quantities (1m, 1.5m, 2m) or specify a custom decimal quantity to match your tailor's specification." },
    { q: "How is the fabric shipped?", a: "Each fabric order is neatly rolled on protective cylinders, wrapped in organic acid-free VL tissue paper, and placed inside a water-resistant, wax-sealed luxury cylindrical tube." },
    { q: "Is the fabric pre-washed or pre-shrunk?", a: "Yes, all Normandy flax and Giza cotton fibers are double-enzymed and pre-shrunk at our yarn mill, ensuring less than 1.5% shrinkage upon future dry cleans." },
    { q: "Can I customize shirts using these fabrics directly?", a: "Absolutely. If you wish to tailor these fabrics into finished shirts, we highly recommend utilizing our immersive Made-To-Wear Customizer or Artisan Bespoke studio directly, which includes these premium swatches." }
  ];

  const fabricReviews = [
    { name: "Arjun Mehta", role: "Sartorial Enthusiast", date: "15.05.2026", rating: 5, text: "The Normandy Flax texture is absolutely sublime. It drapes beautifully, stays cool under the heat, and has a very rich tactile handfeel." },
    { name: "Karthik Raj", role: "Menswear Designer", date: "24.04.2026", rating: 5, text: "Excellent GSM consistency. The weave is uniform and does not thin out. Perfect choice for lightweight summer shirting." }
  ];

  const totalPrice = selectedFabric.price * activeMeters;

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
        <div ref={heroRef}>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              
              {/* Left Column: Image Gallery */}
              <div className="lg:col-span-7">
                <ProductGallery key={selectedFabric.id} images={selectedFabric.images} name={selectedFabric.name} />
              </div>

              {/* Right Column: Information & Selection */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#C8A97E] font-bold">
                      {selectedFabric.tag}
                    </span>
                    <span className="text-xs uppercase font-mono text-emerald-600 bg-emerald-500/10 px-2.5 py-0.5 rounded font-bold">
                      Atelier Swatch In Stock
                    </span>
                  </div>
                  <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1A1A1A] tracking-wide leading-tight">
                    {selectedFabric.name}
                  </h1>
                  <div className="flex items-baseline gap-2 pt-1 select-none">
                    <span className="font-serif text-2xl font-bold text-[#DA291C]">
                      {formatPrice(selectedFabric.price)}
                    </span>
                    <span className="font-sans text-xs text-[#1A1A1A]/55">per Meter</span>
                  </div>
                </div>

                <div className="font-sans text-sm text-[#1A1A1A]/75 leading-relaxed font-light">
                  {selectedFabric.description}
                </div>

                {/* PREMIUM INTERACTIVE FABRIC SWATCH SELECTOR */}
                <div className="space-y-4 border-t border-[#1A1A1A]/10 pt-6">
                  <div className="flex justify-between items-baseline select-none">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#C8A97E] font-bold">
                      Select Atelier Swatch
                    </span>
                    <span className="font-sans text-[10px] uppercase text-[#1A1A1A]/50 font-bold">
                      4 Swatches Available
                    </span>
                  </div>

                  <div className="grid grid-cols-4 gap-2.5 select-none">
                    {FABRIC_SWATCHES.map((sw) => {
                      const isSelected = selectedFabric.id === sw.id;
                      return (
                        <button
                          key={sw.id}
                          onClick={() => setSelectedFabric(sw)}
                          className={`relative p-2 rounded-xl border transition-all duration-300 flex flex-col items-center gap-2 cursor-pointer ${
                            isSelected
                              ? 'bg-white border-[#C8A97E] text-[#1A1A1A] shadow-md scale-105 ring-1 ring-[#C8A97E]/30'
                              : 'bg-white border-[#1A1A1A]/5 hover:border-[#1A1A1A]/15 text-[#1A1A1A]/70'
                          }`}
                        >
                          {/* Circular Swatch Image */}
                          <div className="relative w-11 h-11 rounded-full overflow-hidden border border-black/5 shadow-inner">
                            <img
                              src={sw.image}
                              alt={sw.name}
                              className={`w-full h-full object-cover transition-transform duration-500 ${
                                isSelected ? 'scale-110' : 'hover:scale-105'
                              }`}
                            />
                          </div>
                          {/* Small Label */}
                          <span className="font-sans text-[8px] uppercase tracking-wider font-bold text-center line-clamp-1 w-full">
                            {sw.name.split(' ').slice(1).join(' ')}
                          </span>
                          {/* Checkmark Indicator */}
                          {isSelected && (
                            <span className="absolute -top-1 -right-1 bg-[#C8A97E] text-white p-0.5 rounded-full text-[8px] w-4 h-4 flex items-center justify-center border border-white font-bold font-sans">
                              ✓
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Technical Specifications */}
                <div className="grid grid-cols-2 gap-2.5 bg-white p-4 border border-[#1A1A1A]/5 rounded-xl text-xs font-sans font-light">
                  {selectedFabric.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* SECTION 2: METER SELECTION */}
                <div className="space-y-4 border-t border-[#1A1A1A]/10 pt-6">
                  <div className="flex justify-between items-baseline select-none">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#C8A97E] font-bold">
                      Length (Meters)
                    </span>
                    <span className="font-sans text-xs text-[#1A1A1A]/60">
                      Total fabric width is 58 inches
                    </span>
                  </div>

                  {/* Meter Quick buttons */}
                  <div className="grid grid-cols-5 gap-2 select-none">
                    {[0.5, 1, 1.5, 2, 3].map((meterVal) => (
                      <button
                        key={meterVal}
                        onClick={() => handleMeterChange(meterVal)}
                        className={`py-3 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer ${
                          activeMeters === meterVal && customMeters === ''
                            ? 'bg-[#1A1A1A] text-[#F7F3EE] shadow-sm'
                            : 'bg-white hover:bg-[#1A1A1A]/5 text-[#1A1A1A]/70 border border-[#1A1A1A]/5'
                        }`}
                      >
                        {meterVal}m
                      </button>
                    ))}
                  </div>

                  {/* Custom meter selection */}
                  <div className="space-y-2 select-none">
                    <label className="text-[10px] uppercase tracking-wider font-sans font-bold text-[#1A1A1A]/60">
                      Custom Length
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        step="0.1"
                        min="0.5"
                        placeholder="Specify custom cut (e.g. 2.7)"
                        value={customMeters}
                        onChange={handleCustomMeterChange}
                        className="w-full p-3.5 bg-white border border-[#1A1A1A]/10 rounded-xl text-center text-sm font-semibold focus:outline-none focus:border-[#C8A97E] transition-all"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-[10px] text-[#1A1A1A]/40 font-bold uppercase tracking-widest">
                        Meters
                      </span>
                    </div>
                  </div>

                  {/* Summary Pricing */}
                  <div className="bg-[#1A1A1A]/5 p-4 rounded-xl border border-[#1A1A1A]/5 flex justify-between items-baseline select-none">
                    <span className="font-serif text-sm font-light">Custom Cut Swatch ({activeMeters}m)</span>
                    <span className="font-serif text-xl font-bold text-[#DA291C]">{formatPrice(totalPrice)}</span>
                  </div>
                </div>

                {/* SECTION 3: ACTION BUTTONS */}
                <div className="space-y-3 pt-4 border-t border-[#1A1A1A]/10 select-none">
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
                      Buy Now
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-2 text-[10px] text-[#1A1A1A]/50 font-sans tracking-wide uppercase justify-center mt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C8A97E]" />
                    <span>Free Shipping on Swatches & 30-Day Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* SECTION 5: WHY OUR FABRICS */}
        <section className="py-24 bg-white border-y border-[#1A1A1A]/5 mt-24">
          <Container>
            <div className="max-w-4xl mx-auto space-y-16">
              <div className="text-center space-y-4">
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-[#C8A97E] block">Sartorial Standards</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#1A1A1A]">Handpicked Flax & Cotton</h2>
                <p className="font-sans text-sm text-[#1A1A1A]/60 max-w-lg mx-auto font-light leading-relaxed">
                  Every Vian Luxure fabric selection represents the pinnacle of sustainable organic harvesting and traditional weaving crafts.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {selectedFabric.details?.map((detail, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-full bg-[#DA291C]/5 text-[#DA291C] flex items-center justify-center shrink-0">
                      <Check className="w-4.5 h-4.5" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="font-serif text-base font-semibold text-[#1A1A1A]">
                        {index === 0 ? 'Fiber Harvesting & Cultivation' : index === 1 ? 'Thermal Regulation & Weight' : index === 2 ? 'Hypoallergenic Properties' : index === 3 ? 'Soft Wash & Tensile Durability' : 'Atelier Ecological Sourcing'}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
                        {detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 4: RELATED FABRICS */}
        <section className="py-20 bg-[#F7F3EE]">
          <Container>
            <div className="space-y-12">
              <div className="flex justify-between items-end border-b border-[#1A1A1A]/10 pb-4 select-none">
                <div className="space-y-2">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#C8A97E] font-bold block">
                    Swatches collection
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#1A1A1A]">
                    Related Luxury Fabrics
                  </h3>
                </div>
                <button
                  onClick={() => router.push('/shop')}
                  className="font-sans text-xs uppercase tracking-wider font-semibold text-[#C8A97E] hover:text-[#1A1A1A] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>View All</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Horizontal slider of product cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {relatedFabrics.map((fab) => (
                  <div
                    key={fab.id}
                    onClick={() => router.push(`/shop/fabrics/${fab.slug}`)}
                    className="group bg-white border border-[#1A1A1A]/5 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col md:flex-row h-full"
                  >
                    <div className="w-full md:w-1/2 aspect-[4/5] overflow-hidden bg-gray-100 relative">
                      <img
                        src={fab.image}
                        alt={fab.name}
                        className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 md:w-1/2 flex flex-col justify-between space-y-6">
                      <div className="space-y-2">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#C8A97E] font-bold block">
                          {fab.tag}
                        </span>
                        <h4 className="font-serif text-xl font-light text-[#1A1A1A] group-hover:text-[#C8A97E] transition-colors">
                          {fab.name}
                        </h4>
                        <p className="font-sans text-xs text-[#1A1A1A]/60 line-clamp-3 font-light leading-relaxed">
                          {fab.description}
                        </p>
                      </div>
                      <div className="flex justify-between items-baseline border-t border-[#1A1A1A]/5 pt-4">
                        <span className="font-sans text-[10px] text-[#1A1A1A]/50 uppercase tracking-widest font-semibold">
                          View details
                        </span>
                        <span className="font-serif text-base font-bold text-[#DA291C]">
                          {formatPrice(fab.price)} / m
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 6: CUSTOMER STORIES */}
        <section className="py-24 bg-[#F5F5F3] border-y border-[#1A1A1A]/5">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Premium Framed Review Image */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative group">
                  {/* Outer glow and elegant border framing */}
                  <div className="absolute inset-0 bg-[#C8A97E]/10 rounded-2xl blur-lg group-hover:bg-[#C8A97E]/15 transition-all duration-300" />
                  <div className="relative p-3 bg-white border border-[#1A1A1A]/10 rounded-2xl shadow-xl transition-transform duration-[800ms] group-hover:scale-[1.01]">
                    <div className="overflow-hidden rounded-xl aspect-[4/3] relative">
                      <img
                        src="/images/fabrics/reviewimage.webp"
                        alt="Atelier Tailored Client Suit Showcase"
                        className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 select-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                      
                      {/* Brand Tag overlay on the image */}
                      <span className="absolute bottom-4 left-4 font-mono text-[8px] uppercase tracking-[0.2em] text-[#F7F3EE] bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 font-bold">
                        Client Sartorial Review
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Micro-caption below the image */}
                <div className="text-center lg:text-left space-y-1 px-2 select-none">
                  <span className="font-serif text-sm font-semibold italic text-[#1A1A1A]/80 block">"Hand-finished bespoke shirt featuring our raw Normandy flax."</span>
                  <span className="font-sans text-[9px] uppercase tracking-widest text-[#C8A97E] font-bold">— Tailor Studio Archives</span>
                </div>
              </div>

              {/* Right Column: Customer Stories Slider */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-3 text-center lg:text-left select-none">
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#C8A97E] font-bold block">
                    Atelier Journal
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#1A1A1A] tracking-wide">
                    Fabric Testimonials
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#1A1A1A]/60 font-light leading-relaxed max-w-md mx-auto lg:mx-0">
                    Discover how sartorial enthusiasts and master designers around the world utilize Vian Luxure swatches to create premium custom shirting.
                  </p>
                </div>
                <div className="w-full">
                  <TestimonialSlider testimonials={fabricReviews} />
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* SECTION 7: FAQ ACCORDION */}
        <section className="py-24 bg-[#F7F3EE]">
          <Container className="max-w-3xl">
            <div className="text-center mb-16 space-y-3 select-none">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#C8A97E] font-bold block">
                Atelier Assistance
              </span>
              <h2 className="font-serif text-3xl font-light text-[#1A1A1A]">
                Fabric Specifications FAQ
              </h2>
            </div>
            <FAQAccordion items={fabricFaqs} />
          </Container>
        </section>
      </main>

      {/* SECTION 3: STICKY PURCHASE CARD ON SCROLL */}
      <AnimatePresence>
        {showStickyCard && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#1A1A1A]/10 shadow-2xl py-4 select-none"
          >
            <Container className="flex items-center justify-between gap-4 max-w-5xl">
              <div className="flex items-center gap-3">
                <img src={selectedFabric.image} alt={selectedFabric.name} className="w-12 h-12 object-cover rounded-lg hidden sm:block border border-black/10" />
                <div>
                  <h4 className="font-serif text-sm sm:text-base font-semibold text-[#1A1A1A]">{selectedFabric.name}</h4>
                  <span className="font-sans text-[10px] text-[#1A1A1A]/60 block sm:inline-block">Cut swatches ({activeMeters}m)</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-serif text-base sm:text-lg font-bold text-[#DA291C]">{formatPrice(totalPrice)}</span>
                <button
                  onClick={() => setShowCheckoutModal(true)}
                  className="px-6 sm:px-8 py-3 bg-[#1A1A1A] hover:bg-[#DA291C] text-[#F7F3EE] uppercase font-sans text-[10px] tracking-widest font-bold rounded-full transition-all duration-300 cursor-pointer shadow-sm"
                >
                  Instant Purchase
                </button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LUXURY TRANSACTION MODAL */}
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
                    Atelier Custom Purchase
                  </h4>
                </div>

                <div className="space-y-3 font-sans text-xs">
                  <div className="flex justify-between items-baseline font-serif text-sm border-b border-[#1A1A1A]/5 pb-2">
                    <span className="font-light">{selectedFabric.name} ({activeMeters}m)</span>
                    <span className="font-bold">{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-[#1A1A1A]/60">Atelier Courier Delivery</span>
                    <span className="font-mono text-emerald-600 font-bold uppercase">Complimentary</span>
                  </div>
                </div>

                {/* Fake Credit Card Form */}
                <div className="bg-[#1A1A1A] p-4 text-[#F7F3EE] rounded-xl space-y-4 shadow-lg select-none">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="font-serif text-xs uppercase tracking-widest text-[#C8A97E]">Credit / Debit Card</span>
                    <div className="flex items-center gap-2">
                      <img src={selectedFabric.image} alt={selectedFabric.name} className="w-6 h-6 object-cover rounded-full border border-white/20" />
                      <span className="text-[9px] text-[#F7F3EE]/80 font-mono line-clamp-1 max-w-[120px]">{selectedFabric.name}</span>
                    </div>
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
                    alert("Your luxury fabric custom order has been drafted! Check your email for measurement confirmations.");
                    setShowCheckoutModal(false);
                  }}
                  className="w-full py-4 bg-[#DA291C] hover:bg-[#b52217] text-white font-sans text-xs uppercase tracking-widest font-bold transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Authorize Secure Payment {formatPrice(totalPrice)}</span>
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
