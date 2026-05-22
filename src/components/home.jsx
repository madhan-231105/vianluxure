'use client';

/**
 * VL Global — Homepage Component
 * Styling: 100% Tailwind CSS classes (no inline styles)
 * Icons:   Lucide React
 * Images:  Next.js <Image /> (optimised)
 */

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  ShoppingCart,
  Heart,
  User,
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Scissors,
  Shirt,
  Gem,
  Layers,
} from 'lucide-react';

/* ─── Static data ────────────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { label: 'Shop',    href: '#products' },
  { label: 'About',   href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const STATS = [
  { value: '100%', label: 'Natural Fabrics' },
  { value: '10K+', label: 'Happy Customers' },
  { value: '25+',  label: 'Fabric Varieties' },
];

const CATEGORIES = [
  {
    id: 'fabric',
    number: '01',
    title: 'Fabric',
    subtitle: 'Pure Materials',
    desc: 'Hand-selected linen and cotton rolls. Breathable, durable, and naturally beautiful — straight from the loom.',
    Icon: Layers,
    emoji: '🧵',
  },
  {
    id: 'ready',
    number: '02',
    title: 'Ready-to-Wear',
    subtitle: 'Effortless Everyday',
    desc: 'Relaxed silhouettes in premium linen. Pull it out of the wardrobe and look effortlessly refined.',
    Icon: Shirt,
    emoji: '👔',
  },
  {
    id: 'made',
    number: '03',
    title: 'Made-to-Wear',
    subtitle: 'Your Fit, Your Way',
    desc: 'Pick your fabric, choose your cut, and we craft a shirt tailored to your exact measurements.',
    Icon: Scissors,
    emoji: '✂️',
  },
  {
    id: 'bespoke',
    number: '04',
    title: 'Bespoke',
    subtitle: 'Fully Yours',
    desc: 'From thread to final stitch — every detail decided by you. True couture at an honest Indian price.',
    Icon: Gem,
    emoji: '👑',
  },
];

const SHOP_LINKS    = ['All Products', 'Fabrics', 'Ready-to-Wear', 'Bespoke'];
const COMPANY_LINKS = [
  'About Us',
  'Contact',
  'Terms & Conditions',
  'Privacy Policy',
  'Shipping Policy',
  'Cancellation & Refunds',
];
const SOCIALS = ['Instagram', 'Facebook', 'WhatsApp'];

const STAGGER = [
  'delay-100', 'delay-200', 'delay-300',
  'delay-400', 'delay-500', 'delay-600',
];

/* ─── Reusable micro-components ──────────────────────────────────────────────── */

/** Amber uppercase section tag */
function SectionTag({ children }) {
  return (
    <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-amber-400 font-body">
      {children}
    </span>
  );
}

/** Gradient amber divider line */
function AmberDivider() {
  return <div className="w-12 h-0.5 mt-4 mb-6 bg-gradient-to-r from-amber-400 to-amber-700 mx-auto" />;
}

/** Primary amber CTA button */
function BtnPrimary({ id, href, children }) {
  return (
    <a
      id={id}
      href={href}
      className="
        inline-flex items-center justify-center gap-2
        px-8 py-3.5 rounded-md font-semibold text-sm tracking-wide
        bg-amber-400 text-black
        hover:bg-amber-300
        transition-all duration-300
        hover:scale-[1.04] hover:shadow-[0_0_24px_rgba(251,191,36,0.3)]
      "
    >
      {children}
    </a>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────────────── */

export default function VLGlobalHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [wishlist, setWishlist]             = useState([]);
  const [products, setProducts]             = useState([]);
  const [loading, setLoading]               = useState(true);

  /* Fetch products from the API route */
  useEffect(() => {
    const t = setTimeout(async () => {
      try {
        const res  = await fetch('/api/products');
        const json = await res.json();
        if (json.success) setProducts(json.data);
      } catch {
        /* fail silently — UI handles empty state */
      } finally {
        setLoading(false);
      }
    }, 500);
    return () => clearTimeout(t);
  }, []);

  function toggleWishlist(id) {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  /* ────────────────────────────────────────────────────────────────────────── */
  return (
    <div className="bg-black text-white min-h-screen font-body">

      {/* ═══════════════════════════════════════════════════════════════════════
          HEADER — fixed, frosted-glass, amber bottom border
      ═══════════════════════════════════════════════════════════════════════ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-amber-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a href="#" aria-label="VL Global — go to homepage" className="group">
              <span className="text-2xl font-black tracking-widest font-display group-hover:opacity-80 transition-opacity duration-300">
                VL <span className="text-amber-400">GLOBAL</span>
              </span>
            </a>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm font-semibold tracking-wide text-gray-300 hover:text-amber-400 transition-colors duration-300"
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Desktop icon cluster */}
            <div className="hidden md:flex items-center gap-3">
              {/* Wishlist */}
              <button
                id="wishlist-icon-btn"
                aria-label="View wishlist"
                className="relative p-2 rounded-full text-gray-400 hover:text-amber-400 transition-all duration-300 hover:scale-110"
              >
                <Heart size={20} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center bg-amber-400 text-black">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Cart */}
              <button
                id="cart-icon-btn"
                aria-label="View shopping cart"
                className="p-2 rounded-full text-gray-400 hover:text-amber-400 transition-all duration-300 hover:scale-110"
              >
                <ShoppingCart size={20} />
              </button>

              {/* Account */}
              <button
                id="account-icon-btn"
                aria-label="My account"
                className="p-2 rounded-full text-gray-400 hover:text-amber-400 transition-all duration-300 hover:scale-110"
              >
                <User size={20} />
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              id="mobile-menu-btn"
              className="md:hidden p-2 rounded-md text-gray-400 hover:text-amber-400 transition-colors duration-300"
              onClick={() => setMobileMenuOpen((o) => !o)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile dropdown nav */}
          {mobileMenuOpen && (
            <nav
              className="md:hidden py-4 pb-6 border-t border-amber-700/30 animate-fade-in flex flex-col gap-4"
              aria-label="Mobile navigation"
            >
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="px-2 py-1 text-base font-semibold text-gray-300 hover:text-amber-400 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════════════════
          MAIN CONTENT
      ═══════════════════════════════════════════════════════════════════════ */}
      <main>

        {/* ─── HERO ──────────────────────────────────────────────────────────── */}
        <section
          id="home"
          className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-black via-[#0d0500] to-[#1a0800] overflow-hidden"
          aria-label="Hero — Linen and Cotton Elegance"
        >
          {/* Radial amber glow (decorative) */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_70%_50%,rgba(180,83,9,0.12),transparent)]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Left — text */}
              <div className="animate-slide-in-left">
                <SectionTag>Luxury Redefined</SectionTag>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 font-display">
                  <span className="block text-white">Linen &amp;</span>
                  <span className="block text-amber-400">Cotton</span>
                  <span className="block text-white">Elegance</span>
                </h1>

                <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-8 max-w-lg">
                  Breathable fabrics designed for comfort, simplicity, and everyday
                  elegance. Every thread crafted with intention.
                </p>

                {/* CTA pair */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <BtnPrimary id="hero-explore-btn" href="#products">
                    Explore Collection <ArrowRight size={16} />
                  </BtnPrimary>

                  <a
                    id="hero-fabrics-btn"
                    href="#categories"
                    className="
                      inline-flex items-center justify-center gap-2
                      px-8 py-3.5 rounded-md font-semibold text-sm tracking-wide
                      border-2 border-amber-400 text-amber-400
                      hover:bg-amber-400/10
                      transition-all duration-300 hover:scale-[1.04]
                    "
                  >
                    View Fabrics
                  </a>
                </div>

                {/* Stats strip */}
                <div className="flex flex-wrap rounded-xl overflow-hidden border border-amber-700/35 bg-white/[0.03]">
                  {STATS.map(({ value, label }, i) => (
                    <div
                      key={label}
                      className={`flex-1 min-w-[120px] px-5 py-4 ${i < STATS.length - 1 ? 'border-r border-amber-700/35' : ''}`}
                    >
                      <p className="text-2xl font-black text-amber-400 font-display leading-none mb-1">
                        {value}
                      </p>
                      <p className="text-xs text-gray-400">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — hero image */}
              <div className="animate-slide-in-right">
                <div className="relative rounded-2xl overflow-hidden border-2 border-amber-700/45 group max-h-[580px] aspect-[3/4]">
                  <Image
                    src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=85"
                    alt="Premium linen shirt from the VL Global 2026 collection"
                    fill
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Bottom gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  {/* Badge */}
                  <span className="absolute bottom-6 left-6 px-4 py-2 rounded-full text-xs font-semibold tracking-wide bg-amber-400 text-black">
                    ✦ New Collection 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PRODUCTS ──────────────────────────────────────────────────────── */}
        <section
          id="products"
          className="py-24 bg-black"
          aria-label="Featured products"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section header */}
            <div className="text-center mb-14">
              <SectionTag>Our Collection</SectionTag>
              <h2 className="text-4xl sm:text-5xl font-black font-display mb-4">
                Featured <span className="text-amber-400">Products</span>
              </h2>
              <AmberDivider />
              <p className="text-base text-gray-400 max-w-xl mx-auto">
                Handpicked fabrics and finished garments — each one reflecting our
                commitment to natural materials and refined craftsmanship.
              </p>
            </div>

            {/* Loading spinner */}
            {loading ? (
              <div className="flex flex-col items-center justify-center gap-4 py-24">
                <div className="w-10 h-10 rounded-full border-2 border-amber-400 border-t-transparent animate-spin" />
                <p className="text-gray-400 text-sm">Loading products…</p>
              </div>
            ) : (
              <>
                {/* Product grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {products.map((product, idx) => {
                    const inWishlist  = wishlist.includes(product.id);
                    const delayClass  = STAGGER[idx] ?? '';

                    return (
                      <article
                        key={product.id}
                        id={`product-card-${product.id}`}
                        className={`
                          group rounded-2xl overflow-hidden
                          border border-amber-700/30
                          bg-gradient-to-b from-white/[0.04] to-white/[0.01]
                          hover:border-amber-400/60 hover:-translate-y-1
                          transition-all duration-300
                          animate-fade-in-up ${delayClass}
                        `}
                      >
                        {/* Image area */}
                        <div className="relative overflow-hidden aspect-[4/3]">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />

                          {/* Hover darkening overlay */}
                          <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                          {/* Category badge */}
                          <span className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-amber-400 text-black">
                            {product.category}
                          </span>

                          {/* Wishlist toggle */}
                          <button
                            id={`wishlist-btn-${product.id}`}
                            aria-label={inWishlist ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
                            onClick={() => toggleWishlist(product.id)}
                            className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 backdrop-blur-sm hover:scale-110 transition-all duration-300"
                          >
                            <Heart
                              size={16}
                              strokeWidth={2}
                              className={inWishlist ? 'text-amber-400' : 'text-white'}
                              fill={inWishlist ? '#fbbf24' : 'none'}
                            />
                          </button>

                          {/* Quick View — fades in on hover */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                            <button
                              id={`quick-view-btn-${product.id}`}
                              className="px-5 py-2 rounded-full text-xs font-semibold tracking-wide bg-amber-400 text-black hover:bg-amber-300 transition-colors duration-300"
                            >
                              Quick View
                            </button>
                          </div>
                        </div>

                        {/* Card body */}
                        <div className="p-5">
                          <h3 className="text-base font-semibold text-white hover:text-amber-400 transition-colors duration-300 mb-1 cursor-default">
                            {product.name}
                          </h3>
                          <p className="text-xs text-gray-400 mb-3">{product.category}</p>

                          <div className="flex items-center justify-between">
                            <span className="text-xl font-black text-amber-400 font-display">
                              {product.price}
                            </span>
                            <button
                              id={`add-cart-btn-${product.id}`}
                              aria-label={`Add ${product.name} to cart`}
                              className="p-2 rounded-full border border-amber-400/40 text-amber-400 hover:bg-amber-400/10 hover:scale-110 transition-all duration-300"
                            >
                              <ShoppingCart size={16} />
                            </button>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>

                {/* View all link */}
                <div className="text-center mt-12">
                  <a
                    id="view-all-products-btn"
                    href="#products"
                    className="group inline-flex items-center gap-2 font-semibold text-amber-400 hover:text-amber-300 transition-colors duration-300"
                  >
                    View All Products
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </>
            )}
          </div>
        </section>

        {/* ─── CATEGORIES ────────────────────────────────────────────────────── */}
        <section
          id="categories"
          className="py-24 bg-gradient-to-b from-black to-[#0a0300]"
          aria-label="Shop by category"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-14">
              <SectionTag>What We Offer</SectionTag>
              <h2 className="text-4xl sm:text-5xl font-black font-display mb-4">
                Shop by <span className="text-amber-400">Category</span>
              </h2>
              <AmberDivider />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CATEGORIES.map(({ id, number, title, subtitle, desc, emoji }) => (
                <div
                  key={id}
                  id={`category-card-${id}`}
                  className="
                    group rounded-2xl p-6
                    border border-amber-700/30
                    bg-gradient-to-b from-white/[0.05] to-white/[0.02]
                    hover:border-amber-400/70 hover:-translate-y-1
                    hover:bg-amber-400/[0.03]
                    transition-all duration-300
                  "
                >
                  {/* Number + emoji */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl font-black leading-none text-amber-400/20 font-display">
                      {number}
                    </span>
                    <span className="text-2xl" aria-hidden="true">{emoji}</span>
                  </div>

                  <h3 className="text-xl font-bold font-display mb-1">{title}</h3>
                  <p className="text-xs font-semibold tracking-wide text-amber-400 mb-3">{subtitle}</p>
                  <p className="text-sm text-gray-400 leading-relaxed mb-5">{desc}</p>

                  <a
                    href="#products"
                    className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors duration-300"
                  >
                    Explore
                    <ChevronRight
                      size={14}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── ABOUT ─────────────────────────────────────────────────────────── */}
        <section
          id="about"
          className="py-24 bg-gradient-to-b from-[#0a0300] to-black"
          aria-label="About VL Global"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

              {/* Image side */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden border-2 border-amber-700/45 group aspect-[4/5]">
                  <Image
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85"
                    alt="VL Global — natural linen fabric craftsmanship"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating rating badge */}
                <div className="absolute -bottom-6 right-4 px-6 py-4 rounded-xl shadow-2xl bg-[#0a0300]/90 border border-amber-400/45 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <Star size={18} fill="#fbbf24" stroke="#fbbf24" />
                    <div>
                      <p className="text-sm font-bold text-amber-400">4.9 / 5.0</p>
                      <p className="text-xs text-gray-400">Customer Rating</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div>
                <SectionTag>Who We Are</SectionTag>
                <h2 className="text-4xl sm:text-5xl font-black font-display leading-tight mb-6">
                  Weaving{' '}
                  <span className="text-amber-400">Elegance</span>{' '}
                  Into Everyday
                </h2>
                {/* Left-align divider on this side */}
                <div className="w-12 h-0.5 mt-4 mb-6 bg-gradient-to-r from-amber-400 to-amber-700" />

                <p className="text-base text-gray-300 leading-relaxed mb-5">
                  At VL Global, we create thoughtfully crafted linen shirts designed for
                  comfort, simplicity, and everyday living. From carefully selected fabrics
                  to refined tailoring details, every piece is made to feel natural,
                  breathable, and timeless.
                </p>
                <p className="text-base text-gray-400 leading-relaxed mb-8">
                  Based in Tiruchengode, Namakkal, we blend traditional Tamil craftsmanship
                  with contemporary silhouettes — bringing premium quality linen and cotton
                  fashion to the modern wardrobe at honest Indian prices.
                </p>

                <BtnPrimary id="about-discover-btn" href="#contact">
                  Discover Our Story <ArrowRight size={16} />
                </BtnPrimary>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CUSTOM ORDER CTA ──────────────────────────────────────────────── */}
        <section
          id="custom-order"
          className="py-24 bg-black"
          aria-label="Start a custom order"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="
              max-w-3xl mx-auto text-center px-8 py-16 rounded-2xl
              border-2 border-amber-400/35
              bg-gradient-to-br from-amber-700/10 to-amber-400/5
            ">
              <SectionTag>Premium Customisation</SectionTag>
              <h2 className="text-4xl sm:text-5xl font-black font-display mb-6">
                Your Fit,{' '}
                <span className="text-amber-400">Your Way</span>
              </h2>
              <p className="text-base text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto">
                Choose your fabric, define your cut, personalise every detail. Our master
                tailors bring your vision to life — one stitch at a time — with a turnaround
                that respects your time.
              </p>
              <BtnPrimary id="custom-order-btn" href="#contact">
                Start Custom Order <ArrowRight size={18} />
              </BtnPrimary>
            </div>
          </div>
        </section>

      </main>

      {/* ═══════════════════════════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════════════════════════ */}
      <footer
        id="contact"
        className="pt-16 pb-8 bg-gradient-to-b from-black to-[#050200] border-t border-amber-700/35"
        aria-label="Site footer"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* 4-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">

            {/* Brand */}
            <div>
              <h2 className="text-2xl font-black tracking-widest font-display mb-3">
                VL <span className="text-amber-400">Global</span>
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Comfort isn&apos;t just crafted — it&apos;s curated. Premium linen &amp;
                cotton fashion from the heart of Tamil Nadu.
              </p>
            </div>

            {/* Shop links */}
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase mb-5 text-amber-400">
                Shop
              </h3>
              <ul className="flex flex-col gap-3">
                {SHOP_LINKS.map((label) => (
                  <li key={label}>
                    <a
                      href="#products"
                      className="text-sm text-gray-400 hover:text-amber-400 transition-colors duration-300"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company links */}
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase mb-5 text-amber-400">
                Company
              </h3>
              <ul className="flex flex-col gap-3">
                {COMPANY_LINKS.map((label) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-amber-400 transition-colors duration-300"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div id="contact-info">
              <h3 className="text-sm font-bold tracking-widest uppercase mb-5 text-amber-400">
                Contact Us
              </h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="tel:+919944944255"
                    aria-label="Call VL Global"
                    className="flex items-start gap-3 text-sm text-gray-400 hover:text-amber-400 transition-colors duration-300"
                  >
                    <Phone size={15} className="mt-0.5 shrink-0" />
                    +91 99449 44255
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:vlglobalemart@gmail.com"
                    aria-label="Email VL Global"
                    className="flex items-start gap-3 text-sm text-gray-400 hover:text-amber-400 transition-colors duration-300"
                  >
                    <Mail size={15} className="mt-0.5 shrink-0" />
                    vlglobalemart@gmail.com
                  </a>
                </li>
                <li>
                  <address className="flex items-start gap-3 text-sm text-gray-400 not-italic">
                    <MapPin size={15} className="mt-0.5 shrink-0 text-amber-400" />
                    <span>
                      36/11, CHB Colony Street No-04,<br />
                      Tiruchengode, Namakkal — 637211,<br />
                      Tamil Nadu, India
                    </span>
                  </address>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-amber-700/30">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} VL Global. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {SOCIALS.map((name) => (
                <a
                  key={name}
                  href="#"
                  aria-label={`VL Global on ${name}`}
                  className="text-xs font-semibold text-gray-500 hover:text-amber-400 transition-colors duration-300"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
