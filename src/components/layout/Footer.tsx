/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Container } from '../common/Container';
import { ArrowUp, Instagram, Facebook, Youtube } from 'lucide-react';

const XIcon = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#F7F3EE] pt-24 pb-12 overflow-hidden border-t border-[#F7F3EE]/5">
      <Container>
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#F7F3EE]/10">
          
          {/* Brand & Socials Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <img src="/images/FooterLogo.svg" alt="Vian Luxure Logo" className="w-32 mb-6" />
              <p className="mt-6 text-[#F7F3EE]/60 font-sans text-sm font-light leading-relaxed max-w-sm">
                Comfort isn't just crafted, it's lived. Every thread tells a story of intention.
              </p>
              
              {/* Social Icons */}
              <div className="flex items-center gap-3 mt-6">
                <a
                  href="#facebook"
                  className="w-9 h-9 flex items-center justify-center rounded border border-[#F7F3EE]/10 bg-[#F7F3EE]/5 text-[#F7F3EE]/60 hover:bg-[#C8A97E] hover:text-[#1A1A1A] hover:border-transparent transition-all duration-350"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 stroke-[1.5]" />
                </a>
                <a
                  href="#instagram"
                  className="w-9 h-9 flex items-center justify-center rounded border border-[#F7F3EE]/10 bg-[#F7F3EE]/5 text-[#F7F3EE]/60 hover:bg-[#C8A97E] hover:text-[#1A1A1A] hover:border-transparent transition-all duration-350"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 stroke-[1.5]" />
                </a>
                <a
                  href="#x"
                  className="w-9 h-9 flex items-center justify-center rounded border border-[#F7F3EE]/10 bg-[#F7F3EE]/5 text-[#F7F3EE]/60 hover:bg-[#C8A97E] hover:text-[#1A1A1A] hover:border-transparent transition-all duration-350"
                  aria-label="Twitter X"
                >
                  <XIcon />
                </a>
                <a
                  href="#youtube"
                  className="w-9 h-9 flex items-center justify-center rounded border border-[#F7F3EE]/10 bg-[#F7F3EE]/5 text-[#F7F3EE]/60 hover:bg-[#C8A97E] hover:text-[#1A1A1A] hover:border-transparent transition-all duration-350"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4 stroke-[1.5]" />
                </a>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Links, Policy, Contacts Columns */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Links Column */}
            <div>
              <h4 className="font-sans text-[11px] text-[#C8A97E] uppercase tracking-[0.2em] font-semibold mb-6">
                Links
              </h4>
              <ul className="space-y-4 font-sans text-xs sm:text-sm font-light text-[#F7F3EE]/65">
                <li><a href="/" className="hover:text-[#F7F3EE] transition-colors">Home</a></li>
                <li><a href="/shop" className="hover:text-[#F7F3EE] transition-colors">Shop</a></li>
                <li><a href="/aboutus" className="hover:text-[#F7F3EE] transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-[#F7F3EE] transition-colors">Contact US</a></li>
              </ul>
            </div>

            {/* Policy Column */}
            <div>
              <h4 className="font-sans text-[11px] text-[#C8A97E] uppercase tracking-[0.2em] font-semibold mb-6">
                Policy
              </h4>
              <ul className="space-y-4 font-sans text-xs sm:text-sm font-light text-[#F7F3EE]/65">
                <li><a href="#shipping-policy" className="hover:text-[#F7F3EE] transition-colors">Shipping Policy</a></li>
                <li><a href="#terms" className="hover:text-[#F7F3EE] transition-colors">Terms and Condition</a></li>
                <li><a href="#refunds" className="hover:text-[#F7F3EE] transition-colors">Cancellation and Refunds</a></li>
                <li><a href="#privacy" className="hover:text-[#F7F3EE] transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Contacts Column */}
            <div>
              <h4 className="font-sans text-[11px] text-[#C8A97E] uppercase tracking-[0.2em] font-semibold mb-6">
                Contacts
              </h4>
              <ul className="space-y-4 font-sans text-xs sm:text-sm font-light text-[#F7F3EE]/65 leading-relaxed">
                <li>
                  <a href="tel:+919944944255" className="hover:text-[#F7F3EE] transition-colors">
                    +91 99449 44255
                  </a>
                </li>
                <li>
                  <a href="mailto:viglobalemart@gmail.com" className="hover:text-[#F7F3EE] transition-colors break-all">
                    viglobalemart@gmail.com
                  </a>
                </li>
                <li className="text-[#F7F3EE]/65 text-xs sm:text-sm">
                  36/11, CHB Colony Street No-04<br />
                  Tiruchengode<br />
                  Namakkal-637211
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lower Layout: Copyright & Back To Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-12 text-[#F7F3EE]/40 text-[11px] font-sans">
          <span>&copy; 2025 | All Rights Reserved by VL Global. Designed by Xplore Intellects</span>
          
          <a
            href="#"
            className="group flex items-center gap-2 text-[#C8A97E] text-[10px] uppercase font-sans tracking-[0.2em] font-semibold mt-6 sm:mt-0 transition-opacity hover:opacity-80"
            aria-label="Back to top"
          >
            <span>Back To Top</span>
            <span className="p-1.5 border border-[#C8A97E]/30 rounded-full group-hover:-translate-y-1 transition-transform duration-300">
              <ArrowUp className="w-3" />
            </span>
          </a>
        </div>
      </Container>
    </footer>
  );
}
