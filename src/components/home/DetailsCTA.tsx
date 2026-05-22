"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, BookmarkCheck } from 'lucide-react';

export function DetailsCTA() {
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setShowModal(false);
        setEmail('');
        setAddress('');
      }, 4000);
    }
  };

  return (
    <section id="details-cta-section" className="py-14 sm:py-16 bg-[#1A1A1A] overflow-hidden relative">
      {/* Editorial styling background textures and lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 bottom-0 w-[1px] bg-[#F7F3EE]" />
        <div className="absolute top-0 right-1/4 bottom-0 w-[1px] bg-[#F7F3EE]" />
      </div>

      <Container>
        {/* Centered Bordered Linen Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto border border-[#C8A97E]/30 bg-[#1D1D1D] px-8 py-16 sm:py-20 md:px-16 text-center relative"
        >
          {/* Subtle aesthetic corner lines */}
          <div className="absolute -top-[1px] -left-[1px] w-8 h-8 border-t border-l border-[#C8A97E]" />
          <div className="absolute -top-[1px] -right-[1px] w-8 h-8 border-t border-r border-[#C8A97E]" />
          <div className="absolute -bottom-[1px] -left-[1px] w-8 h-8 border-b border-l border-[#C8A97E]" />
          <div className="absolute -bottom-[1px] -right-[1px] w-8 h-8 border-b border-r border-[#C8A97E]" />

          {/* Top category label */}

          {/* Main Statement */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F7F3EE] tracking-wide leading-tight max-w-2xl mx-auto mb-8">
          Looking for Linen in Your Style?          
          </h2>

          {/* Accent thin line details */}
          <div className="w-16 h-[1px] bg-[#C8A97E]/40 mx-auto mb-8" />

          {/* Secondary atmospheric explanation */}
          <p className="font-sans text-sm sm:text-base text-[#F7F3EE]/70 leading-relaxed font-light max-w-xl mx-auto mb-12">
          From ready-to-wear styles to personalized tailoring options, find linen shirts designed with natural fabrics and clean everyday detailing.
          </p>

          {/* Spring-loaded Action Button */}
          <Button
            variant="primary-light"
            size="lg"
            onClick={() => setShowModal(true)}
            className="shadow-xl"
          >
            Get More Details
          </Button>
        </motion.div>
      </Container>

      {/* Modal drawer for getting lookbook and details */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1A1A1A]/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
              className="bg-[#F7F3EE] text-[#1A1A1A] p-8 sm:p-12 max-w-lg w-full relative border border-[#1A1A1A]/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-6 right-6 text-[#1A1A1A]/60 hover:text-[#C8A97E] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {success ? (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-[#C8A97E]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#C8A97E]/20 text-[#C8A97E]">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-light mb-4">Request Enqueued</h3>
                  <p className="font-sans text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
                    Your physical lookbook and linen swatch envelope is prepared. Our atelier concierge will contact you at <strong>{email}</strong> shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="font-mono text-[9px] text-[#C8A97E] uppercase tracking-widest block mb-2 font-bold">
                      LOOKBOOK PACKET
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-light tracking-wide mb-3">
                      Order Swatches
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed font-light">
                      We will mail our physical linen fabric card showing organic flax textures, direct dye swatches, and our latest atelier lookbook.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="font-sans text-[10px] text-[#1A1A1A]/60 uppercase tracking-widest font-bold block mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="patron@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#E8DED1]/30 border border-[#1A1A1A]/10 px-4 py-3 text-xs font-sans text-[#1A1A1A] focus:outline-none focus:border-[#C8A97E] transition-all"
                      />
                    </div>

                    <div>
                      <label className="font-sans text-[10px] text-[#1A1A1A]/60 uppercase tracking-widest font-bold block mb-2">
                        Mailing Address for swatches (Optional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Apartment, Street, City, Country"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full bg-[#E8DED1]/30 border border-[#1A1A1A]/10 px-4 py-3 text-xs font-sans text-[#1A1A1A] focus:outline-none focus:border-[#C8A97E] transition-all resize-none"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                  >
                    Request Physical Packet
                  </Button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
