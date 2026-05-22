'use client';

/**
 * Navbar — Floating luxury navigation.
 * - Transparent by default, blurs on scroll
 * - Hides on scroll down, reveals on scroll up
 * - Elegant hover underline animation
 * - Mobile slide-in drawer
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Heart, ShoppingCart, User, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home',         href: '#home' },
  { label: 'Fabrics',      href: '#fabrics' },
  { label: 'Ready To Wear', href: '#collection' },
  { label: 'Bespoke',      href: '#bespoke' },
  { label: 'About',        href: '#about' },
  { label: 'Contact',      href: '#contact' },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [visible,     setVisible]     = useState(true);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 60);
      setVisible(y < lastScrollY.current || y < 100);
      lastScrollY.current = y;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={`transition-all duration-700 ease-in-out nav-root ${scrolled ? 'nav-scrolled' : 'nav-transparent'}`}>
          <div className="vl-container">
            <div className="flex items-center justify-between h-20 lg:h-24">

              {/* Logo */}
              <a href="#home" aria-label="VL Global home" className="group">
                <span className="text-xl lg:text-2xl font-light tracking-wide uppercase transition-opacity duration-300 group-hover:opacity-80" style={{ fontFamily: 'var(--font-display)' }}>
                  VL <span style={{ color: 'var(--color-luxury-gold)' }}>GLOBAL</span>
                </span>
              </a>

              {/* Desktop Links */}
              <nav className="hidden lg:flex items-center gap-10" aria-label="Primary navigation">
                {NAV_LINKS.map(({ label, href }) => (
                  <a key={label} href={href} className="relative group py-1 nav-link-underline" style={{ fontFamily: 'var(--font-body)' }}>
                    <span className="text-xs font-light uppercase tracking-widest transition-colors duration-300">
                      {label}
                    </span>
                  </a>
                ))}
              </nav>

              {/* Right icons */}
              <div className="hidden lg:flex items-center gap-5">
                {[
                  { Icon: Search,      id: 'nav-search',   label: 'Search' },
                  { Icon: Heart,       id: 'nav-wishlist',  label: 'Wishlist' },
                  { Icon: ShoppingCart,id: 'nav-cart',      label: 'Cart' },
                  { Icon: User,        id: 'nav-account',   label: 'Account' },
                ].map(({ Icon, id, label }) => (
                  <button
                    key={id}
                    id={id}
                    aria-label={label}
                    className="p-1 transition-all duration-300 hover:scale-110 group"
                  >
                    <Icon
                      size={17}
                      className="transition-colors duration-300 group-hover:text-[#B89565]"
                      strokeWidth={1.5}
                    />
                  </button>
                ))}
              </div>

              {/* Mobile hamburger */}
              <button
                id="mobile-menu-btn"
                className="lg:hidden p-1 transition-colors duration-300"
                onClick={() => setMobileOpen((o) => !o)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40"
              style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 w-80 flex flex-col"
              style={{ background: '#FFFFFF', borderLeft: '1px solid rgba(26,26,26,0.05)' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Drawer header */}
              <div
                className="flex items-center justify-between px-8 py-7"
                style={{ borderBottom: '1px solid rgba(26,26,26,0.08)' }}
              >
                <span
                  className="text-lg font-light tracking-[0.35em] uppercase"
                  style={{ fontFamily: 'var(--font-display)', color: '#1A1A1A' }}
                >
                  VL <span style={{ color: '#B89565' }}>GLOBAL</span>
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  style={{ color: '#1A1A1A' }}
                  aria-label="Close menu"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              {/* Drawer links */}
              <nav className="flex flex-col px-8 py-10 gap-6 flex-1">
                {NAV_LINKS.map(({ label, href }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="group flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span
                      className="w-5 h-[1px] transition-all duration-300 group-hover:w-10"
                      style={{ background: '#B89565' }}
                    />
                    <span
                      className="text-sm font-light tracking-[0.2em] uppercase transition-colors duration-300 group-hover:text-[#B89565]"
                      style={{ color: '#1A1A1A' }}
                    >
                      {label}
                    </span>
                  </motion.a>
                ))}
              </nav>

              {/* Drawer bottom */}
              <div
                className="px-8 py-8 flex gap-6"
                style={{ borderTop: '1px solid rgba(26,26,26,0.08)' }}
              >
                {[Search, Heart, ShoppingCart, User].map((Icon, i) => (
                  <button
                    key={i}
                    className="transition-colors duration-300"
                    style={{ color: '#1A1A1A' }}
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
