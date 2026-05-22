"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import React from 'react';
import { Menu, X, Search, ShoppingBag, User, ArrowRight } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Eternity Linen', href: '#collective' },
    { label: 'Ready To Wear', href: '#ready-to-wear' },
    { label: 'Bespoke Experience', href: '#tailoring' },
    { label: 'Fabric Journal', href: '#journal' },
    { label: 'Our Heritage', href: '#heritage' }
  ];

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-[#F7F3EE]/95 backdrop-blur-md border-b border-[#1A1A1A]/5 py-4 shadow-sm'
            : 'bg-transparent py-6 sm:py-8'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Left Nav links - desktop */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-11">
              {navLinks.slice(0, 3).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-sans text-[11px] uppercase tracking-[0.2em] hover:text-[#C8A97E] transition-colors duration-500 font-semibold relative py-1 group ${
                    isScrolled ? 'text-[#1A1A1A]/85' : 'text-[#F7F3EE]'
                  }`}
                  style={{ textShadow: isScrolled ? 'none' : '0 1px 4px rgba(0,0,0,0.35)' }}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C8A97E] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                </a>
              ))}
            </div>
 
            {/* Mobile menu and search buttons - left side for small devices */}
            <div className="flex items-center lg:hidden gap-4">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-1 cursor-pointer hover:text-[#C8A97E] transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className={`w-5 h-5 transition-colors duration-500 ${isScrolled ? 'text-[#1A1A1A]' : 'text-[#F7F3EE]'}`} />
              </button>
              <button
                onClick={() => setSearchOpen(true)}
                className="p-1 cursor-pointer hover:text-[#C8A97E] transition-colors"
                aria-label="Search"
              >
                <Search className={`w-4 h-4 transition-colors duration-500 ${isScrolled ? 'text-[#1A1A1A]' : 'text-[#F7F3EE]'}`} />
              </button>
            </div>
 
            {/* Center Brand Identity */}
            <a
              href="#"
              className="flex flex-col items-center select-none text-center group"
            >
              <span 
                className={`font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.3em] group-hover:text-[#C8A97E] transition-colors duration-500 uppercase ${
                  isScrolled ? 'text-black' : 'text-[#F7F3EE]'
                }`}
                style={{ textShadow: isScrolled ? 'none' : '0 2px 8px rgba(0,0,0,0.35)' }}
              >
                Vian Luxure
              </span>
              <span className="font-sans text-[7px] sm:text-[8px] uppercase tracking-[0.45em] text-[#C8A97E] font-bold mt-0.5 sm:mt-1">
                La Collection d'Flax
              </span>
            </a>
 
            {/* Right Nav links - desktop */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-11">
              {navLinks.slice(3).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-sans text-[11px] uppercase tracking-[0.2em] hover:text-[#C8A97E] transition-colors duration-500 font-semibold relative py-1 group ${
                    isScrolled ? 'text-[#1A1A1A]/85' : 'text-[#F7F3EE]'
                  }`}
                  style={{ textShadow: isScrolled ? 'none' : '0 1px 4px rgba(0,0,0,0.35)' }}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C8A97E] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                </a>
              ))}
              
              <div className={`h-4 w-[1px] ml-2 transition-colors duration-500 ${isScrolled ? 'bg-[#1A1A1A]/10' : 'bg-[#F7F3EE]/25'}`} />
 
              <div className="flex items-center gap-5">
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-1 cursor-pointer hover:text-[#C8A97E] transition-colors"
                  aria-label="Search"
                >
                  <Search className={`w-4 h-4 transition-colors duration-500 ${isScrolled ? 'text-[#1A1A1A]' : 'text-[#F7F3EE]'}`} />
                </button>
                <a
                  href="#profile"
                  className="p-1 cursor-pointer hover:text-[#C8A97E] transition-colors"
                  aria-label="Account details"
                  onClick={(e) => { e.preventDefault(); alert("Clients portal will launch soon."); }}
                >
                  <User className={`w-4 h-4 transition-colors duration-500 ${isScrolled ? 'text-[#1A1A1A]' : 'text-[#F7F3EE]'}`} />
                </a>
                <button
                  onClick={() => alert("Your luxury selection bag is empty.")}
                  className="p-1 relative cursor-pointer hover:text-[#C8A97E] transition-colors"
                  aria-label="View bag"
                >
                  <ShoppingBag className={`w-4 h-4 transition-colors duration-500 ${isScrolled ? 'text-[#1A1A1A]' : 'text-[#F7F3EE]'}`} />
                  <span className="absolute -top-1 -right-1.5 flex items-center justify-center bg-[#C8A97E] text-[#F7F3EE] font-mono text-[8px] h-3.5 w-3.5 rounded-full font-bold">
                    0
                  </span>
                </button>
              </div>
            </div>
 
            {/* Mobile selection indicators - right side for small devices */}
            <div className="flex items-center lg:hidden gap-3.5">
              <a
                href="#profile"
                className="p-1 cursor-pointer hover:text-[#C8A97E] transition-colors"
                onClick={(e) => { e.preventDefault(); alert("Profile portal active in next release."); }}
                aria-label="Account details"
              >
                <User className={`w-4.5 h-4.5 transition-colors duration-500 ${isScrolled ? 'text-[#1A1A1A]' : 'text-[#F7F3EE]'}`} />
              </a>
              <button
                onClick={() => alert("Your selection is currently empty.")}
                className="p-1 relative cursor-pointer hover:text-[#C8A97E] transition-colors"
                aria-label="View bag"
              >
                <ShoppingBag className={`w-4.5 h-4.5 transition-colors duration-500 ${isScrolled ? 'text-[#1A1A1A]' : 'text-[#F7F3EE]'}`} />
                <span className="absolute -top-1 -right-1.5 flex items-center justify-center bg-[#C8A97E] text-[#F7F3EE] font-mono text-[7px] h-3.5 w-3.5 rounded-full font-bold">
                  0
                </span>
              </button>
            </div>
          </div>
        </Container>
      </nav>

      {/* Slide-out Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/45 backdrop-blur-xs"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer container */}
        <div
          className={`absolute top-0 left-0 bottom-0 max-w-sm w-full bg-[#F7F3EE] p-8 shadow-2xl transition-transform duration-500 ease-out-quint flex flex-col justify-between ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-12">
              <span className="font-serif text-lg font-normal tracking-widest text-[#1A1A1A] uppercase">
                Vian Luxure
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 hover:text-[#C8A97E] cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-[#1A1A1A]" />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-sm uppercase tracking-[0.2em] text-[#1A1A1A] hover:text-[#C8A97E] font-medium transition-colors"
                >
                  <span className="text-[#C8A97E]/60 text-xs font-mono mr-3">0{idx + 1}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-[#1A1A1A]/15 pt-8">
            <span className="font-sans text-[10px] text-[#1A1A1A]/50 tracking-[0.2em] uppercase block mb-4">
              Connect with Atelier
            </span>
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              asAnchor
              href="#bespoke"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Luxury Full-Screen Search Overlay */}
      <div
        className={`fixed inset-0 z-50 flex flex-col justify-center bg-[#F7F3EE]/95 backdrop-blur-md px-6 sm:px-16 transition-opacity duration-500 ${
          searchOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={() => setSearchOpen(false)}
          className="absolute top-8 right-8 p-2 text-[#1A1A1A] hover:text-[#C8A97E] cursor-pointer transition-colors"
          aria-label="Close search"
        >
          <X className="w-8 h-8 stroke-[1]" />
        </button>

        <div className="max-w-4xl mx-auto w-full">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#C8A97E] block mb-4">
            Search the Collection
          </span>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(`Searching archive for "${searchQuery}"...`);
              setSearchOpen(false);
            }}
            className="relative border-b border-[#1A1A1A]/20 pb-4 flex items-center"
          >
            <input
              type="text"
              placeholder="Search by Fabric, Cut, or Silhouette..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none text-[#1A1A1A] placeholder-[#1A1A1A]/35 text-2xl sm:text-4xl md:text-5xl font-serif font-light focus:outline-none tracking-wide"
              autoFocus={searchOpen}
            />
            <button
              type="submit"
              className="p-2 text-[#1A1A1A] hover:text-[#C8A97E] transition-colors cursor-pointer"
            >
              <ArrowRight className="w-8 h-8 stroke-[1]" />
            </button>
          </form>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="text-[#1A1A1A]/40 text-xs font-sans self-center mr-2">Featured:</span>
            {['Linen Suit', 'Solis Shirt', 'Bespoke Jacket', 'Double pleats'].map((term) => (
              <button
                key={term}
                onClick={() => setSearchQuery(term)}
                className="text-xs font-sans tracking-wide text-[#1A1A1A]/70 hover:text-[#C8A97E] underline decoration-dotted underline-offset-4 cursor-pointer"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
