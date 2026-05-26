"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Brand: VIAN LUXURE (The 2024 Digital Atelier)
 * Page: SHOP PORTAL (/shop) - Premium Interactive E-Commerce & GSAP Animations
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { Container } from '@/src/components/common/Container';
import { Button } from '@/src/components/common/Button';
import { StaggeredBlurReveal } from '@/src/components/animations/StaggeredBlurReveal';
import { FadeUp } from '@/src/components/animations/FadeUp';
import { loadGsap } from '@/src/lib/gsap';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Wind, 
  Layers, 
  Scissors, 
  Shirt, 
  Maximize2, 
  Check, 
  Sparkles, 
  X,
  Phone,
  Mail,
  MapPin,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  SlidersHorizontal,
  Bookmark,
  Ruler
} from 'lucide-react';

// --- PREMIUM PRODUCTS SYSTEM ---
const PRODUCTS = [
  // --- PURE FABRICS ---
  {
    id: 'f1',
    name: 'Normandy Raw Flax',
    category: 'fabrics',
    price: 85,
    tag: 'Sustainable European Flax',
    image: '/images/fabrics/fabric_1.webp',
    description: 'European premium 70 lea pure linen fabric designed for breathable everyday wear and natural organic texture.',
    specs: ['Pure Organic Flax', 'Weight: 390g/m²', 'GSM: 140', 'Width: 58 inches']
  },
  {
    id: 'f2',
    name: 'Aurelia Crimson Blend',
    category: 'fabrics',
    price: 95,
    tag: 'Premium Cotton-Linen',
    image: '/images/fabrics/fabric_2.webp',
    description: 'Balanced linen and cotton fibers created for soft texture, comfort, and everyday durable wear.',
    specs: ['55% Linen, 45% Cotton', 'Weight: 280g/m²', 'GSM: 120', 'Pre-shrunk Double Enzyme']
  },
  {
    id: 'f3',
    name: 'Indigo Scallop Weave',
    category: 'fabrics',
    price: 110,
    tag: 'Special Edition Weave',
    image: '/images/fabrics/fabric_3.webp',
    description: 'Cotton-linen fabric with scallop-pattern detailing designed for clean, refined, and custom everyday shirting.',
    specs: ['Special Jacquard Weave', 'Scallop Detailing', 'GSM: 130', 'Imported Long-staple']
  },
  {
    id: 'f4',
    name: 'Imperial Giza Cotton',
    category: 'fabrics',
    price: 125,
    tag: 'Rare Egyptian Cotton',
    image: '/images/fabrics/fabric_4.webp',
    description: 'Rare double-twisted Giza Egyptian cotton weave, designed for an incredibly soft, smooth, and breathable sartorial handle.',
    specs: ['100% Giza Cotton', 'Weight: 240g/m²', 'GSM: 110', 'High Thread Count']
  },
  
  // --- READY-TO-WEAR ---
  {
    id: 'rtw1',
    name: 'The Solis Everyday Shirt',
    category: 'ready-to-wear',
    price: 180,
    tag: 'Atelier Classic Cut',
    image: '/images/product1.webp',
    description: 'Choose your preferred fabric, size, and fit from shirts designed with clean tailoring and balanced everyday styling.',
    specs: ['100% Normandy Linen', 'Premium Spread Collar', 'Rounded Single Cuffs', 'Standard Sizing S-XXL']
  },
  {
    id: 'rtw2',
    name: 'Normandy Classic Shirt',
    category: 'ready-to-wear',
    price: 195,
    tag: 'Signature Off-white',
    image: '/images/banner1.webp',
    description: 'Slightly relaxed, pre-washed everyday linen shirt with drop-shoulder styling and structured chest stitching.',
    specs: ['Sustainable French Flax', 'French Placket Front', '18 Stitches Per Inch', 'Horn Buttons']
  },
  {
    id: 'rtw3',
    name: 'Crimson Drop-Shoulder',
    category: 'ready-to-wear',
    price: 210,
    tag: 'Atelier Favorite Style',
    image: '/images/product2.webp',
    description: 'Vibrant dyed, breathable organic linen shirting with symmetric structured seams and double-rolled hems.',
    specs: ['Crimson Red Flax Weave', 'Hidden Button-down Collar', 'Soft Enzyme Washed', 'German Fused Cuffs']
  },
  
  // --- MADE-TO-WEAR ---
  {
    id: 'mtw1',
    name: 'Made-To-Wear Customizer',
    category: 'made-to-wear',
    price: 280,
    tag: 'Personalized Details Pathway',
    image: '/images/banner2.webp',
    description: 'Personalize collars, cuffs, buttons, and sleeves with your favorite styling choices on standard premium sizing slots.',
    specs: ['Collar, Button & Cuff Toggles', 'Double Needle Stitching', 'German Interlinings', 'Lead Time: 2-3 Weeks'],
    customizable: true
  },
  {
    id: 'mtw2',
    name: 'Aurelia Tailored Linen',
    category: 'made-to-wear',
    price: 295,
    tag: 'Atelier Semi-Custom Spec',
    image: '/images/banner3.webp',
    description: 'Linen-cotton blend shirting customizable across collar styles and pockets, offering a balance of ready-made convenience.',
    specs: ['Linen Cotton Blend', 'Monogram Options', 'Custom Pocket Accents', 'Lead Time: 2-3 Weeks'],
    customizable: true
  },
  
  // --- BESPOKE ---
  {
    id: 'bespoke1',
    name: 'Savile Row Bespoke',
    category: 'bespoke',
    price: 450,
    tag: 'Individual Custom Blueprint',
    image: '/images/vian_tailoring_bespoke_1779434589378.webp',
    description: 'Drafted strictly around your neck, chest, waist, and sleeve measurements. Authentic flat felled seams for ultimate fit.',
    specs: ['24-Point Posture Blueprint', 'Double-Needle Hand Felling', 'Imported Threading', 'Lead Time: 4-6 Weeks'],
    bespoke: true
  },
  {
    id: 'bespoke2',
    name: 'Heirloom Giza Cotton',
    category: 'bespoke',
    price: 490,
    tag: 'Sartorial Masterpiece',
    image: '/images/banner4.webp',
    description: '100% premium double-twisted Giza cotton crafted around body measurements, featuring authentic custom monograms.',
    specs: ['Giza Cotton Weave', 'German Collar Fusing', 'Genuine Mother of Pearl Buttons', 'Lead Time: 4-6 Weeks'],
    bespoke: true
  }
];

interface CartItem {
  cartId: string; // Unique ID representing unique combinations
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  quantity: number;
  collar?: string;
  button?: string;
  cuffs?: string;
  measurements?: {
    neck: string;
    chest: string;
    waist: string;
    sleeve: string;
    shoulder: string;
    length: string;
  };
  meters?: number;
  size?: string;
  color?: string;
}

const getProductSlug = (name: string) => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

const getProductHref = (category: string, name: string) => {
  const slug = getProductSlug(name);
  let catSlug = category.toLowerCase();
  if (catSlug === 'fabrics' || catSlug === 'fabric') {
    catSlug = 'fabrics';
  } else if (catSlug === 'ready-to-wear' || catSlug === 'ready_to_wear') {
    catSlug = 'ready-to-wear';
  } else if (catSlug === 'made-to-wear' || catSlug === 'made_to_wear') {
    catSlug = 'made-to-wear';
  } else if (catSlug === 'bespoke' || catSlug === 'be_spoke') {
    catSlug = 'bespoke';
  }
  return `/shop/${catSlug}/${slug}`;
};

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState<boolean>(false);

  // Sizing & Customization Choices
  const [selectedMeters, setSelectedMeters] = useState<{ [productId: string]: number }>({});
  const [selectedSize, setSelectedSize] = useState<{ [productId: string]: string }>({});
  const [selectedColor, setSelectedColor] = useState<{ [productId: string]: string }>({});

  // Customization States
  const [customizingId, setCustomizingId] = useState<string | null>(null);
  const [collarStyle, setCollarStyle] = useState<string>('Classic Spread');
  const [buttonType, setButtonType] = useState<string>('Mother-of-Pearl');
  const [cuffsType, setCuffsType] = useState<string>('Classic Rounded');

  // Bespoke Sizing States
  const [bespokeId, setBespokeId] = useState<string | null>(null);
  const [neckSize, setNeckSize] = useState<string>('15.5');
  const [chestSize, setChestSize] = useState<string>('40.0');
  const [waistSize, setWaistSize] = useState<string>('36.0');
  const [sleeveSize, setSleeveSize] = useState<string>('34.0');
  const [shoulderSize, setShoulderSize] = useState<string>('18.0');
  const [lengthSize, setLengthSize] = useState<string>('30.0');

  const containerRef = useRef<HTMLDivElement>(null);

  // --- CLIENT-SIDE GSAP ANIMATIONS ---
  useEffect(() => {
    let ctx: any = null;

    loadGsap().then((lib) => {
      if (!lib) return;
      const { gsap, ScrollTrigger } = lib;

      ctx = gsap.context(() => {
        // Staggered reveal of product cards when category changes or page loads
        gsap.fromTo(
          '.shop-product-card',
          { y: 50, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.shop-products-grid',
              start: 'top 90%',
              once: true,
            }
          }
        );

        // Slow hover bounce on category buttons
        gsap.fromTo(
          '.category-tab-btn',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: 'back.out(1.5)' }
        );

        // Elegant infinite float on badges
        gsap.to('.floating-badge', {
          y: -6,
          duration: 1.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          stagger: 0.15
        });

        // Parallax image scrolling on lifestyle banners
        gsap.utils.toArray('.parallax-image').forEach((img: any) => {
          gsap.to(img, {
            yPercent: 12,
            ease: 'none',
            scrollTrigger: {
              trigger: img.parentElement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            }
          });
        });
      }, containerRef.current);
    });

    return () => ctx?.revert();
  }, [activeCategory]);

  // --- ADD TO CART COMMANDS ---
  const handleAddToCart = (product: typeof PRODUCTS[0], customData?: Partial<CartItem>) => {
    // Generate a unique ID for the item depending on choices
    const collar = customData?.collar || '';
    const button = customData?.button || '';
    const cuffs = customData?.cuffs || '';
    const mStr = customData?.measurements 
      ? `${customData.measurements.neck}-${customData.measurements.chest}-${customData.measurements.waist}`
      : '';
    const meters = customData?.meters ? `${customData.meters}` : '';
    const size = customData?.size || '';
    const color = customData?.color || '';
    const cartId = `${product.id}-${collar}-${button}-${cuffs}-${mStr}-${meters}-${size}-${color}`;

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(item => item.cartId === cartId);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [
          ...prevCart,
          {
            cartId,
            id: product.id,
            name: product.name,
            price: product.price,
            category: product.category,
            image: product.image,
            quantity: 1,
            collar: customData?.collar,
            button: customData?.button,
            cuffs: customData?.cuffs,
            measurements: customData?.measurements,
            meters: customData?.meters,
            size: customData?.size,
            color: customData?.color
          }
        ];
      }
    });

    // Automatically slide open the bag
    setCartOpen(true);
    // Reset configuration panels
    setCustomizingId(null);
    setBespokeId(null);
  };

  const updateQuantity = (cartId: string, delta: number) => {
    setCart((prevCart) => {
      return prevCart.map(item => {
        if (item.cartId === cartId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean) as CartItem[];
    });
  };

  const removeFromCart = (cartId: string) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
  };

  const getSubtotal = () => {
    return cart.reduce((total, item) => {
      const itemPrice = item.meters ? item.price * item.meters : item.price;
      return total + (itemPrice * item.quantity);
    }, 0);
  };

  const handleCheckout = () => {
    setCheckoutSuccess(true);
    setTimeout(() => {
      setCheckoutSuccess(false);
      setCart([]);
      setCartOpen(false);
    }, 3200);
  };

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F7F3EE] text-[#1A1A1A] selection:bg-[#C8A97E]/30 selection:text-[#1A1A1A] overflow-x-hidden">
      <Navbar />

      <main>
        {/* --- LUXURY CINEMATIC HERO --- */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
          <div className="absolute inset-0 z-0">
            <motion.img
              initial={{ scale: 1.08, opacity: 0.4 }}
              animate={{ scale: 1, opacity: 0.65 }}
              transition={{ duration: 1.8, ease: 'easeOut' }}
              src="/images/vian_hero_luxury_1779434551630.webp"
              alt="VL Global Premium Shop Banner"
              className="w-full h-full object-cover object-center select-none"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-[#F7F3EE] z-[1]" />
          </div>

          <Container className="relative z-10 text-center text-[#F7F3EE] w-full pt-20">
            <div className="max-w-3xl mx-auto space-y-6">
              <FadeUp delay={0.15} y={15}>
                <span className="font-sans text-xs text-[#C8A97E] uppercase tracking-[0.35em] font-bold inline-block bg-white/5 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-sm floating-badge">
                  VL Global Atelier
                </span>
              </FadeUp>
              
              <StaggeredBlurReveal
                lines={["Tactile Immersion", "Premium E-Store"]}
                as="h1"
                stagger={0.07}
                duration={1.3}
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light text-white leading-none tracking-tight"
              />
              
              <FadeUp delay={0.5} y={15}>
                <p className="font-sans text-sm sm:text-base md:text-lg text-white/95 font-light leading-relaxed max-w-xl mx-auto pt-4">
                  Explore linen and cotton fabrics, ready collections, or customize made-to-wear and artisan bespoke shirts immediately. Add your tailored creations directly to your bag.
                </p>
              </FadeUp>
            </div>
          </Container>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 opacity-50">
            <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#1A1A1A]">SCROLL TO SHOP</span>
            <div className="w-[1px] h-10 bg-[#1A1A1A]/30 relative overflow-hidden">
              <motion.div 
                animate={{ y: [0, 40] }} 
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} 
                className="absolute top-0 left-0 w-full h-1/2 bg-[#C8A97E]" 
              />
            </div>
          </div>
        </section>

        {/* --- DYNAMIC INTERACTIVE CATEGORY TABS --- */}
        <section id="shop-catalog" className="py-16 bg-[#F7F3EE] border-b border-[#1A1A1A]/5">
          <Container>
            <div className="flex flex-col items-center gap-10">
              <div className="text-center space-y-3">
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-[#C8A97E] block">Atelier Catalog</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#1A1A1A]">Select Your Mode</h2>
              </div>

              {/* Staggered GSAP Category Filters */}
              <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
                {[
                  { id: 'all', label: 'All Catalog' },
                  { id: 'fabrics', label: 'Pure Fabrics' },
                  { id: 'ready-to-wear', label: 'Ready-To-Wear' },
                  { id: 'made-to-wear', label: 'Made-To-Wear' },
                  { id: 'bespoke', label: 'Artisan Bespoke' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`category-tab-btn px-6 py-3 rounded-full font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 border cursor-pointer ${
                      activeCategory === tab.id
                        ? 'bg-[#1A1A1A] text-[#F7F3EE] border-transparent shadow-md'
                        : 'bg-white text-[#1A1A1A]/60 border-[#1A1A1A]/5 hover:border-[#1A1A1A]/15'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}

                {/* Inline bag trigger next to filter tabs */}
                <button
                  onClick={() => setCartOpen(true)}
                  className="px-6 py-3 rounded-full bg-[#C8A97E] text-[#1A1A1A] border border-transparent font-sans text-xs uppercase tracking-widest font-bold hover:bg-[#b0936b] transition-all cursor-pointer flex items-center gap-2 shadow-sm"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Selection Bag ({cart.reduce((s, i) => s + i.quantity, 0)})</span>
                </button>
              </div>
            </div>
          </Container>
        </section>

        {/* --- DYNAMIC PRODUCT GRID SYSTEM --- */}
        <section className="py-20 bg-[#F7F3EE]">
          <Container>
            <div className="shop-products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 max-w-[1300px] mx-auto">
              {filteredProducts.map((product) => {
                const isCustomizing = customizingId === product.id;
                const isBespokeCustom = bespokeId === product.id;

                return (
                  <div
                    key={product.id}
                    className="shop-product-card flex flex-col h-full bg-[#E8DED1]/20 border border-[#1A1A1A]/5 rounded-[24px] overflow-hidden hover:shadow-xl transition-all duration-500 relative"
                  >
                    {/* Image frame */}
                    <Link href={getProductHref(product.category, product.name)} className="relative aspect-[4/5] overflow-hidden bg-gray-100 group block cursor-pointer">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 select-none"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-all duration-700" />
                      
                      <div className="absolute top-4 left-4 z-10">
                        <span className="font-mono text-[9px] text-[#F7F3EE] uppercase tracking-[0.2em] bg-[#1A1A1A]/70 px-3 py-1.5 rounded-full backdrop-blur-xs select-none">
                          {product.tag}
                        </span>
                      </div>

                      {/* Small visual accent frame */}
                      <div className="absolute inset-4 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    </Link>

                    {/* Description Body */}
                    <div className="p-6 sm:p-8 flex flex-col flex-grow space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between items-baseline">
                          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#C8A97E] font-bold">
                            {product.category}
                          </span>
                          <span className="font-serif text-lg font-semibold text-[#1A1A1A]">
                            ${product.price} {product.category === 'fabrics' && '/ Meter'}
                          </span>
                        </div>
                        <Link href={getProductHref(product.category, product.name)} className="hover:text-[#C8A97E] transition-colors block cursor-pointer">
                          <h3 className="font-serif text-xl sm:text-2xl font-light text-[#1A1A1A] tracking-wide">
                            {product.name}
                          </h3>
                        </Link>
                        <p className="font-sans text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
                          {product.description}
                        </p>
                      </div>

                      {/* Specs stack */}
                      <div className="flex flex-wrap gap-1.5">
                        {product.specs.map((sp) => (
                          <span 
                            key={sp}
                            className="font-sans text-[8px] uppercase tracking-wider text-[#1A1A1A]/60 bg-white border border-[#1A1A1A]/5 px-2.5 py-1 rounded"
                          >
                            {sp}
                          </span>
                        ))}
                      </div>





                      {/* --- CUSTOMIZABLE ACTION ACCORDIONS --- */}
                      <AnimatePresence>
                        {/* Made-To-Wear Mini Customizer Drawer */}
                        {isCustomizing && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden border-t border-[#1A1A1A]/10 pt-4 mt-2 space-y-4"
                          >
                            <span className="font-mono text-[9px] uppercase tracking-widest text-[#C8A97E] font-bold block flex items-center gap-1.5">
                              <SlidersHorizontal className="w-3 h-3" /> Select Custom Elements
                            </span>

                            <div className="space-y-3 font-sans text-xs">
                              {/* Collar option */}
                              <div className="space-y-1">
                                <label className="text-[9px] uppercase font-bold text-[#1A1A1A]/55">Collar Style</label>
                                <div className="grid grid-cols-3 gap-1">
                                  {['Classic Spread', 'Button-Down', 'Banded Grandad'].map((opt) => (
                                    <button
                                      key={opt}
                                      onClick={() => setCollarStyle(opt)}
                                      className={`py-1.5 text-[10px] rounded border transition-all ${
                                        collarStyle === opt 
                                          ? 'bg-[#1A1A1A] text-white border-transparent' 
                                          : 'bg-white border-[#1A1A1A]/10 text-[#1A1A1A]/70 hover:border-[#1A1A1A]/20'
                                      }`}
                                    >
                                      {opt}
                                    </button>
                                  ))}
                                </div>
                              </div>

                              {/* Button options */}
                              <div className="space-y-1">
                                <label className="text-[9px] uppercase font-bold text-[#1A1A1A]/55">Button Element</label>
                                <div className="grid grid-cols-3 gap-1">
                                  {['Mother-of-Pearl', 'Horn Button', 'Resin Button'].map((opt) => (
                                    <button
                                      key={opt}
                                      onClick={() => setButtonType(opt)}
                                      className={`py-1.5 text-[10px] rounded border transition-all ${
                                        buttonType === opt 
                                          ? 'bg-[#1A1A1A] text-white border-transparent' 
                                          : 'bg-white border-[#1A1A1A]/10 text-[#1A1A1A]/70 hover:border-[#1A1A1A]/20'
                                      }`}
                                    >
                                      {opt}
                                    </button>
                                  ))}
                                </div>
                              </div>

                              {/* Cuff option */}
                              <div className="space-y-1">
                                <label className="text-[9px] uppercase font-bold text-[#1A1A1A]/55">Cuff Detail</label>
                                <div className="grid grid-cols-3 gap-1">
                                  {['Classic Rounded', 'Mitered Angle', 'Elegant French'].map((opt) => (
                                    <button
                                      key={opt}
                                      onClick={() => setCuffsType(opt)}
                                      className={`py-1.5 text-[10px] rounded border transition-all ${
                                        cuffsType === opt 
                                          ? 'bg-[#1A1A1A] text-white border-transparent' 
                                          : 'bg-white border-[#1A1A1A]/10 text-[#1A1A1A]/70 hover:border-[#1A1A1A]/20'
                                      }`}
                                    >
                                      {opt}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <button
                              onClick={() => handleAddToCart(product, { collar: collarStyle, button: buttonType, cuffs: cuffsType })}
                              className="w-full py-3 bg-[#C8A97E] text-[#1A1A1A] font-sans text-xs uppercase tracking-widest font-semibold hover:bg-[#b0936b] transition-all rounded-full cursor-pointer flex items-center justify-center gap-2"
                            >
                              <Check className="w-3.5 h-3.5" /> Confirm & Add To Bag
                            </button>
                          </motion.div>
                        )}

                        {/* Artisan Bespoke Measurement Input Grid */}
                        {isBespokeCustom && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden border-t border-[#1A1A1A]/10 pt-4 mt-2 space-y-4"
                          >
                            <span className="font-mono text-[9px] uppercase tracking-widest text-[#C8A97E] font-bold block flex items-center gap-1.5">
                              <Ruler className="w-3.5 h-3.5" /> Draft Sizing blueprint
                            </span>

                            <div className="grid grid-cols-3 gap-2 text-[10px] font-sans">
                              {/* Neck */}
                              <div className="space-y-1">
                                <label className="text-[8px] uppercase tracking-wider text-[#1A1A1A]/55 font-bold">Neck (in)</label>
                                <input
                                  type="number"
                                  step="0.25"
                                  value={neckSize}
                                  onChange={(e) => setNeckSize(e.target.value)}
                                  className="w-full p-2 bg-white border border-[#1A1A1A]/10 rounded text-center text-xs font-semibold focus:outline-none focus:border-[#C8A97E]"
                                />
                              </div>

                              {/* Chest */}
                              <div className="space-y-1">
                                <label className="text-[8px] uppercase tracking-wider text-[#1A1A1A]/55 font-bold">Chest (in)</label>
                                <input
                                  type="number"
                                  step="0.5"
                                  value={chestSize}
                                  onChange={(e) => setChestSize(e.target.value)}
                                  className="w-full p-2 bg-white border border-[#1A1A1A]/10 rounded text-center text-xs font-semibold focus:outline-none focus:border-[#C8A97E]"
                                />
                              </div>

                              {/* Waist */}
                              <div className="space-y-1">
                                <label className="text-[8px] uppercase tracking-wider text-[#1A1A1A]/55 font-bold">Waist (in)</label>
                                <input
                                  type="number"
                                  step="0.5"
                                  value={waistSize}
                                  onChange={(e) => setWaistSize(e.target.value)}
                                  className="w-full p-2 bg-white border border-[#1A1A1A]/10 rounded text-center text-xs font-semibold focus:outline-none focus:border-[#C8A97E]"
                                />
                              </div>

                              {/* Sleeve */}
                              <div className="space-y-1">
                                <label className="text-[8px] uppercase tracking-wider text-[#1A1A1A]/55 font-bold">Sleeve (in)</label>
                                <input
                                  type="number"
                                  step="0.5"
                                  value={sleeveSize}
                                  onChange={(e) => setSleeveSize(e.target.value)}
                                  className="w-full p-2 bg-white border border-[#1A1A1A]/10 rounded text-center text-xs font-semibold focus:outline-none focus:border-[#C8A97E]"
                                />
                              </div>

                              {/* Shoulder */}
                              <div className="space-y-1">
                                <label className="text-[8px] uppercase tracking-wider text-[#1A1A1A]/55 font-bold">Shoulder (in)</label>
                                <input
                                  type="number"
                                  step="0.5"
                                  value={shoulderSize}
                                  onChange={(e) => setShoulderSize(e.target.value)}
                                  className="w-full p-2 bg-white border border-[#1A1A1A]/10 rounded text-center text-xs font-semibold focus:outline-none focus:border-[#C8A97E]"
                                />
                              </div>

                              {/* Length */}
                              <div className="space-y-1">
                                <label className="text-[8px] uppercase tracking-wider text-[#1A1A1A]/55 font-bold">Length (in)</label>
                                <input
                                  type="number"
                                  step="0.5"
                                  value={lengthSize}
                                  onChange={(e) => setLengthSize(e.target.value)}
                                  className="w-full p-2 bg-white border border-[#1A1A1A]/10 rounded text-center text-xs font-semibold focus:outline-none focus:border-[#C8A97E]"
                                />
                              </div>
                            </div>

                            <button
                              onClick={() => handleAddToCart(product, {
                                measurements: {
                                  neck: neckSize,
                                  chest: chestSize,
                                  waist: waistSize,
                                  sleeve: sleeveSize,
                                  shoulder: shoulderSize,
                                  length: lengthSize
                                }
                              })}
                              className="w-full py-3 bg-[#C8A97E] text-[#1A1A1A] font-sans text-xs uppercase tracking-widest font-semibold hover:bg-[#b0936b] transition-all rounded-full cursor-pointer flex items-center justify-center gap-2"
                            >
                              <Check className="w-3.5 h-3.5" /> Confirm Sizing & Add To Bag
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Standard purchase CTA triggers */}
                      <div className="pt-4 mt-auto border-t border-[#1A1A1A]/5 flex items-center gap-4 w-full">
                        {!isCustomizing && !isBespokeCustom && (
                          <div className="flex gap-2 w-full">
                            {product.customizable && (
                              <button
                                onClick={() => setCustomizingId(product.id)}
                                className="flex-1 py-3 bg-[#1A1A1A] hover:bg-[#C8A97E] hover:text-[#1A1A1A] text-[#F7F3EE] font-sans text-[10px] uppercase tracking-widest font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                              >
                                <Scissors className="w-3.5 h-3.5" /> Customize
                              </button>
                            )}

                            {product.bespoke && (
                              <button
                                onClick={() => setBespokeId(product.id)}
                                className="flex-1 py-3 bg-[#1A1A1A] hover:bg-[#C8A97E] hover:text-[#1A1A1A] text-[#F7F3EE] font-sans text-[10px] uppercase tracking-widest font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                              >
                                <Ruler className="w-3.5 h-3.5" /> Size Drape
                              </button>
                            )}

                            {!product.customizable && !product.bespoke && (
                              <button
                                onClick={() => {
                                  if (product.category === 'fabrics') {
                                    handleAddToCart(product, {
                                      meters: 1
                                    });
                                  } else if (product.category === 'ready-to-wear') {
                                    const defaultColor = product.id === 'rtw1' ? 'Pure White' : product.id === 'rtw2' ? 'Ivory Cream' : 'Crimson Red';
                                    handleAddToCart(product, {
                                      size: 'M',
                                      color: defaultColor
                                    });
                                  } else {
                                    handleAddToCart(product);
                                  }
                                }}
                                className="w-full py-3 bg-[#1A1A1A] hover:bg-[#C8A97E] hover:text-[#1A1A1A] text-[#F7F3EE] font-sans text-[10px] uppercase tracking-widest font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                              >
                                <ShoppingBag className="w-3.5 h-3.5" />
                                Add to Bag
                              </button>
                            )}
                          </div>
                        )}

                        {(isCustomizing || isBespokeCustom) && (
                          <div className="w-full flex justify-end">
                            <button
                              onClick={() => {
                                setCustomizingId(null);
                                setBespokeId(null);
                              }}
                              className="px-4 py-2 border border-[#1A1A1A]/10 hover:border-[#1A1A1A] font-sans text-[9px] uppercase tracking-wider rounded-full text-[#1A1A1A]/60 hover:text-[#1A1A1A] cursor-pointer"
                            >
                              Cancel
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* --- COMPARATIVE SPECIFICATION MATRIX --- */}
        <section className="py-24 bg-white border-y border-[#1A1A1A]/5">
          <Container>
            <div className="max-w-[1000px] mx-auto">
              <div className="text-center mb-16 space-y-4">
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-[#C8A97E] block">Atelier Guide</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#1A1A1A]">Compare Services</h2>
                <p className="font-sans text-sm text-[#1A1A1A]/60 max-w-lg mx-auto font-light">
                  Understand the precise structural, operational, and craftsmanship differences across our four tailoring offerings.
                </p>
              </div>

              <div className="overflow-hidden rounded-[20px] border border-[#1A1A1A]/10 bg-[#F7F3EE]/45">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#1A1A1A]/10 bg-[#F5F5F3]">
                      <th className="p-6 font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#1A1A1A]/50">Method Criteria</th>
                      <th className="p-6 font-serif text-sm font-semibold text-[#1A1A1A]">Fabric collection</th>
                      <th className="p-6 font-serif text-sm font-semibold text-[#1A1A1A]">Ready-To-Wear</th>
                      <th className="p-6 font-serif text-sm font-semibold text-[#1A1A1A]">Made-To-Wear</th>
                      <th className="p-6 font-serif text-sm font-semibold text-[#C8A97E]">Artisan Bespoke</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_MATRIX.map((row, idx) => (
                      <tr 
                        key={idx} 
                        className={`border-b border-[#1A1A1A]/5 hover:bg-[#F5F5F3]/50 transition-colors ${
                          idx === COMPARISON_MATRIX.length - 1 ? 'border-b-0' : ''
                        }`}
                      >
                        <td className="p-6 font-sans text-xs uppercase tracking-wider font-semibold text-[#1A1A1A]/70">{row.criteria}</td>
                        <td className="p-6 font-sans text-xs font-light text-[#1A1A1A]/70">{row.fabric}</td>
                        <td className="p-6 font-sans text-xs font-light text-[#1A1A1A]/70">{row.ready}</td>
                        <td className="p-6 font-sans text-xs font-light text-[#1A1A1A]/70">{row.made}</td>
                        <td className="p-6 font-sans text-xs font-light text-[#1A1A1A]/85 bg-[#C8A97E]/5 font-medium">{row.bespoke}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Container>
        </section>

        {/* --- THE SARTORIAL PROMISE SECTION --- */}
        <section className="py-24 bg-[#1A1A1A] text-[#F7F3EE] relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full" />
          </div>

          <Container>
            <div className="max-w-[1100px] mx-auto space-y-16">
              <div className="text-center space-y-4">
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-[#C8A97E] block animate-pulse">
                  The VL Global Standard
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white">
                  Our Sartorial Promise
                </h2>
                <p className="font-sans text-xs sm:text-sm text-white/50 max-w-md mx-auto leading-relaxed font-light">
                  Comfort isn't just crafted, it's lived. Every thread tells a story of intention.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
                <FadeUp delay={0.1} className="space-y-4 border-t border-white/10 pt-6">
                  <div className="w-10 h-10 rounded-full bg-[#C8A97E]/10 flex items-center justify-center text-[#C8A97E]">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-xl text-white">Premium Pure Weaves</h4>
                  <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed font-light">
                    We only source premium Giza cotton and eco-certified organic flax linen harvested under Normandy coastal cycles, ensuring long-lasting durability.
                  </p>
                </FadeUp>

                <FadeUp delay={0.25} className="space-y-4 border-t border-white/10 pt-6">
                  <div className="w-10 h-10 rounded-full bg-[#C8A97E]/10 flex items-center justify-center text-[#C8A97E]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-xl text-white">German Interlinings</h4>
                  <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed font-light">
                    Collars, cuffs, and button bands are stabilized using imported premium German fusing, maintaining collar roll and crisp form for years.
                  </p>
                </FadeUp>

                <FadeUp delay={0.4} className="space-y-4 border-t border-white/10 pt-6">
                  <div className="w-10 h-10 rounded-full bg-[#C8A97E]/10 flex items-center justify-center text-[#C8A97E]">
                    <Scissors className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-xl text-white">Savile Row Stitching</h4>
                  <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed font-light">
                    Bespoke shirting utilizes authentic Savile Row double-needle flat felled seams with 18-21 stitches per inch for unmatched durability and clean lines.
                  </p>
                </FadeUp>
              </div>
            </div>
          </Container>
        </section>

        {/* --- UNIFIED CTA SECTION --- */}
        <section className="py-28 bg-[#F7F3EE] relative overflow-hidden text-center border-t border-[#1A1A1A]/5">
          <Container className="relative z-10">
            <div className="max-w-2xl mx-auto space-y-8">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-[#C8A97E] block">
                SARTORIAL ENQUIRY
              </span>
              <StaggeredBlurReveal
                lines={["Looking for Linen", "in Your Style?"]}
                as="h2"
                className="font-serif text-4xl md:text-5xl font-light text-[#1A1A1A] leading-tight"
              />
              <FadeUp delay={0.3}>
                <p className="font-sans text-base md:text-lg text-[#1A1A1A]/70 font-light leading-relaxed max-w-xl mx-auto">
                  From ready-to-wear styles to personalized tailoring options, find linen shirts designed with natural fabrics and clean everyday detailing.
                </p>
              </FadeUp>

              <FadeUp delay={0.4} className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#shop-catalog"
                  className="bg-[#1A1A1A] text-[#F7F3EE] hover:bg-[#C8A97E] hover:text-[#1A1A1A] transition-all px-10 py-4 rounded-full inline-flex items-center gap-2 group font-semibold shadow-md w-full sm:w-auto justify-center text-xs uppercase tracking-widest cursor-pointer"
                >
                  Start Fabric Sizing Selection
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </FadeUp>
            </div>
          </Container>
        </section>
      </main>


      {/* --- PREMIUM BAG DRAWERS SLIDE-OVER --- */}
      <AnimatePresence>
        {cartOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/65 backdrop-blur-xs cursor-pointer"
              onClick={() => setCartOpen(false)}
            />

            {/* Slide-over panel */}
            <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.4, ease: 'easeOut' }}
                className="w-screen max-w-md bg-[#1A1A1A] text-[#F7F3EE] border-l border-[#C8A97E]/30 relative flex flex-col shadow-2xl"
              >
                {/* Header */}
                <div className="p-6 sm:p-8 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShoppingBag className="text-[#C8A97E] w-5 h-5" />
                    <h3 className="font-serif text-lg sm:text-xl uppercase tracking-widest">
                      Selection Bag
                    </h3>
                  </div>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="p-1 hover:text-[#C8A97E] transition-colors cursor-pointer"
                    aria-label="Close bag"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Bag Content */}
                <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 scrollbar-thin">
                  <AnimatePresence mode="popLayout">
                    {checkoutSuccess ? (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        className="h-full flex flex-col items-center justify-center text-center space-y-4"
                      >
                        <div className="w-14 h-14 rounded-full bg-[#C8A97E]/20 text-[#C8A97E] flex items-center justify-center">
                          <Check className="w-8 h-8 stroke-[2.5]" />
                        </div>
                        <h4 className="font-serif text-2xl text-[#C8A97E] tracking-wider uppercase">
                          Payment Complete
                        </h4>
                        <p className="font-sans text-xs text-white/50 max-w-xs leading-relaxed">
                          Your order has been authorized in our registers. A master designer will review your measurements and cloth selections immediately.
                        </p>
                      </motion.div>
                    ) : cart.length === 0 ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-[60vh] flex flex-col items-center justify-center text-center space-y-3 opacity-40"
                      >
                        <ShoppingBag className="w-10 h-10 stroke-[1.25]" />
                        <span className="font-mono text-xs uppercase tracking-widest">Bag is Empty</span>
                      </motion.div>
                    ) : (
                      cart.map((item) => (
                        <motion.div
                          layout
                          key={item.cartId}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, x: 50 }}
                          className="flex gap-4 border-b border-white/5 pb-5 last:border-0 last:pb-0"
                        >
                          <div className="w-20 h-24 bg-[#E8DED1]/20 rounded-lg overflow-hidden shrink-0 border border-white/10">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>

                          <div className="flex-1 flex flex-col justify-between font-sans">
                            <div className="space-y-1.5">
                              <div className="flex justify-between items-start gap-2">
                                <h4 className="font-serif text-sm font-medium text-white tracking-wide">
                                  {item.name}
                                </h4>
                                <button
                                  onClick={() => removeFromCart(item.cartId)}
                                  className="text-white/30 hover:text-red-400 p-1 cursor-pointer transition-colors"
                                  aria-label="Remove item"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                              <span className="font-mono text-[9px] text-[#C8A97E] uppercase tracking-wider block">
                                {item.category} // ${item.price}
                              </span>

                              {/* Custom Specifications indicators */}
                              {(item.collar || item.button || item.cuffs) && (
                                <div className="text-[9px] text-white/50 space-y-0.5 bg-white/5 p-2 rounded border border-white/5">
                                  {item.collar && <div>Collar: {item.collar}</div>}
                                  {item.button && <div>Button: {item.button}</div>}
                                  {item.cuffs && <div>Cuffs: {item.cuffs}</div>}
                                </div>
                              )}

                              {item.meters && (
                                <div className="text-[9px] text-white/50 space-y-0.5 bg-white/5 p-2 rounded border border-white/5">
                                  <div>Length: {item.meters} Meters</div>
                                </div>
                              )}

                              {(item.size || item.color) && (
                                <div className="text-[9px] text-[#C8A97E] space-y-0.5 bg-[#C8A97E]/5 p-2 rounded border border-[#C8A97E]/10 grid grid-cols-2 gap-x-2">
                                  {item.size && <div>Size: {item.size}</div>}
                                  {item.color && <div>Color: {item.color}</div>}
                                </div>
                              )}

                              {item.measurements && (
                                <div className="text-[9px] text-[#C8A97E] space-y-0.5 bg-[#C8A97E]/5 p-2 rounded border border-[#C8A97E]/10 grid grid-cols-2 gap-x-2">
                                  <div>Neck: {item.measurements.neck}"</div>
                                  <div>Chest: {item.measurements.chest}"</div>
                                  <div>Waist: {item.measurements.waist}"</div>
                                  <div>Sleeve: {item.measurements.sleeve}"</div>
                                  <div className="col-span-2">Shoulder: {item.measurements.shoulder}" | L: {item.measurements.length}"</div>
                                </div>
                              )}
                            </div>

                            {/* Quantity updates */}
                            <div className="flex items-center justify-between pt-2">
                              <span className="font-serif text-sm text-[#C8A97E] font-semibold font-mono">
                                ${(item.meters ? item.price * item.meters : item.price) * item.quantity}
                              </span>
                              <div className="flex items-center border border-white/10 rounded-lg overflow-hidden bg-white/5">
                                <button
                                  onClick={() => updateQuantity(item.cartId, -1)}
                                  className="px-2.5 py-1 text-white/50 hover:text-white hover:bg-white/10 cursor-pointer"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="px-3 py-1 font-mono text-[11px] font-bold">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.cartId, 1)}
                                  className="px-2.5 py-1 text-white/50 hover:text-white hover:bg-white/10 cursor-pointer"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))
                    )}
                  </AnimatePresence>
                </div>

                {/* Footer and Checkout */}
                {!checkoutSuccess && cart.length > 0 && (
                  <div className="p-6 sm:p-8 border-t border-white/10 space-y-4 bg-black/40">
                    <div className="flex justify-between items-baseline font-sans text-sm">
                      <span className="text-white/60">Subtotal Selection</span>
                      <span className="font-serif text-xl text-[#C8A97E] font-semibold">
                        ${getSubtotal()}
                      </span>
                    </div>
                    <p className="text-[10px] text-white/40 font-light font-sans text-center leading-relaxed">
                      Custom measurements are drafted immediately in physical cards. Includes free global express secure courier delivery.
                    </p>
                    <button
                      onClick={handleCheckout}
                      className="w-full py-4 bg-[#C8A97E] hover:bg-[#b0936b] text-[#1A1A1A] font-sans text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                    >
                      <span>Proceed to Atelier Checkout</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

// Complete specifications comparator matrix values
const COMPARISON_MATRIX = [
  {
    criteria: 'Customization Level',
    fabric: 'None (Raw Cloth Only)',
    ready: 'None (Symmetric Standard Block)',
    made: 'Collar styles, Button types, Pockets',
    bespoke: '100% Fully Custom Tailored Drafting'
  },
  {
    criteria: 'Stitching Style',
    fabric: 'Raw (Unstitched Yarn)',
    ready: 'Refined Standard Machine Stitching',
    made: 'Precision Professional Stitching',
    bespoke: 'Authentic Savile Row Flat Felled Seams'
  },
  {
    criteria: 'Anatomical Profile',
    fabric: 'N/A',
    ready: 'Standard Off-The-Rack Size Block',
    made: 'Standard fits with personal configurations',
    bespoke: 'Individual 24-Point Posture drafting'
  },
  {
    criteria: 'Sartorial Lead Time',
    fabric: '2 - 3 Days Shipping',
    ready: '1 - 2 Days Shipping',
    made: '2 - 3 Weeks Hand Finishing',
    bespoke: '4 - 6 Weeks Master Crafting'
  }
];