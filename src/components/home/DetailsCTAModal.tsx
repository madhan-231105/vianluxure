"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Thin client boundary — ONLY the modal trigger button and animated modal.
// The section shell, h2, p, and decorative border box are server-rendered
// in DetailsCTA.tsx (RSC).

import React, { useState } from 'react';
import { Button } from '../common/Button';
import { AnimatePresence, motion } from 'motion/react';
import { X, Check } from 'lucide-react';

export function DetailsCTAModal() {
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
    <>
      {/* Trigger button */}
      <Button
        variant="primary-light"
        size="lg"
        onClick={() => setShowModal(true)}
        className="shadow-xl"
      >
        Get More Details
      </Button>

      {/* Animated modal — only mounts when opened */}
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
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              className="bg-[#F7F3EE] text-[#1A1A1A] p-8 sm:p-12 max-w-lg w-full relative border border-[#1A1A1A]/10"
              onClick={(e) => e.stopPropagation()}
            >
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

                  <Button type="submit" variant="primary" className="w-full">
                    Request Physical Packet
                  </Button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
