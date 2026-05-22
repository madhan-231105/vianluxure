"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { ArrowUp, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed successfully! Welcome to the Vian Luxure Atelier Circle.`);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1A1A] text-[#F7F3EE] pt-24 pb-12 overflow-hidden border-t border-[#F7F3EE]/5">
      <Container>
        {/* Upper Layout: Editorial banner & newsletter signup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#F7F3EE]/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-serif text-2xl sm:text-3xl font-light tracking-[0.25em] text-[#F7F3EE] uppercase block">
                Vian Luxure
              </span>
              <span className="font-sans text-[8px] uppercase tracking-[0.45em] text-[#C8A97E] font-bold block mt-1.5">
                La Collection d'Flax
              </span>
              <p className="mt-6 text-[#F7F3EE]/60 font-sans text-sm font-light leading-relaxed max-w-sm">
                Consciously sourced raw materials woven with legacy techniques. Vian Luxure values durability, tactile elegance, and timeless silhouettes for the worldly citizen.
              </p>
            </div>
            
            <div className="flex items-center gap-6 mt-8">
              <a
                href="#instagram"
                className="text-[#F7F3EE]/65 hover:text-[#C8A97E] transition-colors duration-400"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 stroke-[1.5]" />
              </a>
              <a
                href="#facebook"
                className="text-[#F7F3EE]/65 hover:text-[#C8A97E] transition-colors duration-400"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 stroke-[1.5]" />
              </a>
              <a
                href="#atelier"
                className="text-[#F7F3EE]/65 hover:text-[#C8A97E] transition-colors duration-400"
                aria-label="Atelier"
              >
                <MapPin className="w-5 h-5 stroke-[1.5]" />
              </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Newsletter Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="font-sans text-[11px] sm:text-xs text-[#C8A97E] uppercase tracking-[0.25em] font-medium block mb-3">
              The Atelier Circle
            </span>
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-light tracking-wide mb-5">
              Receive private design logs, advance collection capsules, and bespoke reservation slots.
            </h3>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 mt-2">
              <input
                type="email"
                required
                placeholder="Enquire your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-b border-[#F7F3EE]/25 text-[#F7F3EE] placeholder-[#F7F3EE]/35 py-3 text-sm font-sans font-light focus:outline-none focus:border-[#C8A97E] transition-colors flex-grow"
              />
              <Button type="submit" variant="secondary" size="sm" className="sm:w-auto">
                Join Atelier
              </Button>
            </form>
          </div>
        </div>

        {/* Middle Layout: Nav Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-b border-[#F7F3EE]/10">
          {/* Column 1 */}
          <div>
            <h4 className="font-sans text-[11px] text-[#C8A97E] uppercase tracking-[0.2em] font-semibold mb-6">
              The Collection
            </h4>
            <ul className="space-y-4 font-sans text-xs sm:text-sm font-light text-[#F7F3EE]/65">
              <li><a href="#fabrics" className="hover:text-[#F7F3EE] transition-colors">Raw Linen Fabrics</a></li>
              <li><a href="#ready-to-wear" className="hover:text-[#F7F3EE] transition-colors">Women's Ready To Wear</a></li>
              <li><a href="#ready-to-wear" className="hover:text-[#F7F3EE] transition-colors">Men's Casual Tailored</a></li>
              <li><a href="#bespoke" className="hover:text-[#F7F3EE] transition-colors">Seasonal Signature Duster</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-sans text-[11px] text-[#C8A97E] uppercase tracking-[0.2em] font-semibold mb-6">
              Bespoke Services
            </h4>
            <ul className="space-y-4 font-sans text-xs sm:text-sm font-light text-[#F7F3EE]/65">
              <li><a href="#tailoring" className="hover:text-[#F7F3EE] transition-colors">Atelier Custom Tailoring</a></li>
              <li><a href="#measurement" className="hover:text-[#F7F3EE] transition-colors">Digital Measurement Guide</a></li>
              <li><a href="#fittings" className="hover:text-[#F7F3EE] transition-colors">Book Atelier Consultation</a></li>
              <li><a href="#fabric-samples" className="hover:text-[#F7F3EE] transition-colors">Order Swatch Samples</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-sans text-[11px] text-[#C8A97E] uppercase tracking-[0.2em] font-semibold mb-6">
              The Brand
            </h4>
            <ul className="space-y-4 font-sans text-xs sm:text-sm font-light text-[#F7F3EE]/65">
              <li><a href="#heritage" className="hover:text-[#F7F3EE] transition-colors">Elysian Grasslands Legacy</a></li>
              <li><a href="#sustainability" className="hover:text-[#F7F3EE] transition-colors">Sourcing French Flax</a></li>
              <li><a href="#curation" className="hover:text-[#F7F3EE] transition-colors">Editorial Journal</a></li>
              <li><a href="#careers" className="hover:text-[#F7F3EE] transition-colors">Artisan Careers</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-sans text-[11px] text-[#C8A97E] uppercase tracking-[0.2em] font-semibold mb-6">
              Inquiries
            </h4>
            <ul className="space-y-4 font-sans text-xs sm:text-sm font-light text-[#F7F3EE]/65">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C8A97E]/70" />
                <span>atelier@vianluxure.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C8A97E]/70" />
                <span>+39 (02) 8092-4112</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C8A97E]/70" />
                <span>Via Montenapoleone 14, Milan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower Layout: Copyright & Back To Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-12 text-[#F7F3EE]/40 text-[11px] font-sans">
          <span>&copy; {new Date().getFullYear()} VIAN LUXURE S.P.A. ALL RIGHTS RESERVED.</span>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[#C8A97E] text-[10px] uppercase font-sans tracking-[0.2em] font-semibold mt-6 sm:mt-0 transition-opacity hover:opacity-80 cursor-pointer"
          >
            <span>Back To Top</span>
            <span className="p-1.5 border border-[#C8A97E]/30 rounded-full group-hover:-translate-y-1 transition-transform duration-300">
              <ArrowUp className="w-3" />
            </span>
          </button>
        </div>
      </Container>
    </footer>
  );
}
