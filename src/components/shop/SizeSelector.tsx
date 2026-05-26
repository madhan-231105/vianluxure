"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ruler, X, Check } from 'lucide-react';

interface SizeSelectorProps {
  selectedSize: string;
  onChange: (size: string) => void;
}

export function SizeSelector({ selectedSize, onChange }: SizeSelectorProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  const sizeChart = [
    { size: 'S', neck: '14.5"', chest: '38"', waist: '34"', sleeve: '32.5"', shoulder: '17.5"' },
    { size: 'M', neck: '15.5"', chest: '40"', waist: '36"', sleeve: '33.5"', shoulder: '18.0"' },
    { size: 'L', neck: '16.5"', chest: '43"', waist: '39"', sleeve: '34.5"', shoulder: '18.7"' },
    { size: 'XL', neck: '17.5"', chest: '46"', waist: '42"', sleeve: '35.5"', shoulder: '19.5"' },
    { size: 'XXL', neck: '18.5"', chest: '49"', waist: '45"', sleeve: '36.5"', shoulder: '20.2"' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#C8A97E] font-bold">
          Select Fit Size
        </span>
        <button
          onClick={() => setModalOpen(true)}
          className="flex items-center gap-1.5 font-sans text-xs uppercase tracking-wider text-[#1A1A1A]/70 hover:text-[#C8A97E] transition-colors duration-300 font-semibold cursor-pointer"
        >
          <Ruler className="w-3.5 h-3.5" />
          Size Guide
        </button>
      </div>

      <div className="flex gap-2 p-1 bg-[#1A1A1A]/5 rounded-xl border border-[#1A1A1A]/5">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onChange(size)}
            className={`flex-1 py-3 rounded-lg font-sans text-xs font-bold transition-all duration-300 cursor-pointer ${
              selectedSize === size
                ? 'bg-[#1A1A1A] text-[#F7F3EE] shadow-md'
                : 'hover:bg-[#1A1A1A]/5 text-[#1A1A1A]/75'
            }`}
          >
            {size}
          </button>
        ))}
      </div>

      {/* Luxury Size Chart Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative w-full max-w-lg bg-[#F7F3EE] text-[#1A1A1A] p-6 sm:p-8 border border-[#1A1A1A]/10 shadow-2xl z-10 rounded-none"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 text-xl font-light hover:text-[#C8A97E] cursor-pointer"
              >
                <X className="w-5 h-5 text-[#1A1A1A]" />
              </button>

              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#C8A97E] font-bold block">
                    Atelier Measurement Sheet
                  </span>
                  <h4 className="font-serif text-2xl font-light text-[#1A1A1A] tracking-wide">
                    Ready-To-Wear Size Guide
                  </h4>
                  <p className="font-sans text-xs text-[#1A1A1A]/60 leading-relaxed font-light">
                    Our shirts are structured around classic luxury cuts. Compare body measurements below to discover your optimal fit.
                  </p>
                </div>

                {/* Size Table */}
                <div className="overflow-x-auto border border-[#1A1A1A]/10 bg-white">
                  <table className="w-full text-left border-collapse text-xs font-sans">
                    <thead>
                      <tr className="bg-[#1A1A1A]/5 border-b border-[#1A1A1A]/10 font-bold">
                        <th className="p-3 font-mono text-[9px] text-[#C8A97E] uppercase">Size</th>
                        <th className="p-3">Neck</th>
                        <th className="p-3">Chest</th>
                        <th className="p-3">Waist</th>
                        <th className="p-3">Sleeve</th>
                        <th className="p-3">Shoulder</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1A1A1A]/5 font-light">
                      {sizeChart.map((row) => (
                        <tr
                          key={row.size}
                          className={`hover:bg-[#C8A97E]/5 transition-colors ${
                            selectedSize === row.size ? 'bg-[#C8A97E]/10 font-semibold' : ''
                          }`}
                        >
                          <td className="p-3 font-bold font-mono text-[#C8A97E]">{row.size}</td>
                          <td className="p-3">{row.neck}</td>
                          <td className="p-3">{row.chest}</td>
                          <td className="p-3">{row.waist}</td>
                          <td className="p-3">{row.sleeve}</td>
                          <td className="p-3">{row.shoulder}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-[#1A1A1A]/5 p-4 border border-[#1A1A1A]/5 space-y-2 rounded-lg">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#C8A97E] font-bold block">
                    Tailoring Note
                  </span>
                  <p className="font-sans text-[11px] text-[#1A1A1A]/60 leading-relaxed font-light">
                    If your measurements fall between two sizes, we suggest opting for the larger size for a relaxed drape, or selecting our <strong>Made-To-Wear</strong> option to define your personalized fit.
                  </p>
                </div>

                <button
                  onClick={() => setModalOpen(false)}
                  className="w-full py-3.5 bg-[#1A1A1A] hover:bg-[#C8A97E] hover:text-[#1A1A1A] text-[#F7F3EE] uppercase tracking-widest text-[10px] font-sans font-bold transition-colors duration-500 cursor-pointer"
                >
                  Confirm & Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
