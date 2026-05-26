"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shirt, Scissors, ChevronDown, ChevronUp, Check, Ruler, Info } from 'lucide-react';
import { formatPrice } from '../../lib/utils';

interface StickySummaryProps {
  fabric: { name: string; price: number; image: string } | null;
  collar: string;
  buttons: string;
  pocket: string;
  sleeve: string;
  measurements: { [key: string]: string };
  fit: string;
  totalPrice: number;
  mode: 'made-to-wear' | 'bespoke';
  notes?: string;
  uploadedFile?: File | null;
}

export function StickySummary({
  fabric,
  collar,
  buttons,
  pocket,
  sleeve,
  measurements,
  fit,
  totalPrice,
  mode,
  notes,
  uploadedFile
}: StickySummaryProps) {
  const [mobileExpanded, setMobileExpanded] = useState(false);

  const hasMeasurements = Object.keys(measurements).some(k => measurements[k] !== '');

  const SummaryContent = () => (
    <div className="space-y-6 text-[#1A1A1A]">
      <div className="border-b border-[#1A1A1A]/10 pb-4">
        <span className="font-mono text-[9px] uppercase tracking-widest text-[#C8A97E] font-bold block">
          VL Atelier Blueprint
        </span>
        <h4 className="font-serif text-xl font-light tracking-wide uppercase mt-1">
          {mode === 'bespoke' ? 'Artisan Bespoke Specification' : 'Made-To-Wear Specification'}
        </h4>
      </div>

      {/* Fabric Selection */}
      <div className="space-y-2">
        <span className="text-[9px] uppercase font-bold tracking-wider text-[#1A1A1A]/50 font-sans block">Selected Fabric</span>
        {fabric ? (
          <div className="flex gap-3 items-center bg-[#1A1A1A]/5 p-2 rounded-lg">
            <img src={fabric.image} alt={fabric.name} className="w-12 h-12 object-cover rounded" />
            <div className="flex flex-col">
              <span className="font-serif text-sm font-semibold text-[#1A1A1A]">{fabric.name}</span>
              <span className="font-sans text-[10px] text-[#1A1A1A]/60">Studio collection</span>
            </div>
          </div>
        ) : (
          <span className="text-xs italic text-[#1A1A1A]/40 font-light block">No fabric chosen yet</span>
        )}
      </div>

      {/* Toggles */}
      <div className="grid grid-cols-2 gap-4 border-t border-[#1A1A1A]/5 pt-4">
        {/* Collar */}
        <div>
          <span className="text-[9px] uppercase font-bold tracking-wider text-[#1A1A1A]/50 font-sans block">Collar Cut</span>
          <span className="font-serif text-sm font-medium text-[#1A1A1A]">{collar || 'Default Classic'}</span>
        </div>
        {/* Buttons */}
        <div>
          <span className="text-[9px] uppercase font-bold tracking-wider text-[#1A1A1A]/50 font-sans block">Button Shell</span>
          <span className="font-serif text-sm font-medium text-[#1A1A1A]">{buttons || 'Default Pearl'}</span>
        </div>
        {/* Pocket */}
        <div>
          <span className="text-[9px] uppercase font-bold tracking-wider text-[#1A1A1A]/50 font-sans block">Pocket Spec</span>
          <span className="font-serif text-sm font-medium text-[#1A1A1A]">{pocket || 'No Pocket'}</span>
        </div>
        {/* Sleeve */}
        <div>
          <span className="text-[9px] uppercase font-bold tracking-wider text-[#1A1A1A]/50 font-sans block">Sleeve / Cuff</span>
          <span className="font-serif text-sm font-medium text-[#1A1A1A]">{sleeve || 'Full Sleeve'}</span>
        </div>
      </div>

      {/* Sizing and Silhouette */}
      <div className="border-t border-[#1A1A1A]/5 pt-4 space-y-3">
        <div className="flex justify-between items-baseline">
          <span className="text-[9px] uppercase font-bold tracking-wider text-[#1A1A1A]/50 font-sans">Sizing Blueprint</span>
          <span className="font-mono text-[9px] text-[#DA291C] uppercase font-bold bg-[#DA291C]/10 px-2 py-0.5 rounded">
            {fit}
          </span>
        </div>

        {hasMeasurements ? (
          <div className="grid grid-cols-3 gap-2 bg-[#1A1A1A]/5 p-3 rounded-lg text-center font-mono text-[10px] font-bold">
            {Object.keys(measurements).map((key) => {
              const val = measurements[key];
              if (!val) return null;
              return (
                <div key={key} className="bg-white/80 p-1.5 border border-[#1A1A1A]/5 rounded">
                  <span className="block text-[8px] uppercase tracking-wider text-[#1A1A1A]/40 font-sans font-bold">
                    {key}
                  </span>
                  <span className="text-xs text-[#1A1A1A]">{val}</span>
                </div>
              );
            })}
          </div>
        ) : (
          <span className="text-xs italic text-[#1A1A1A]/40 font-light block">Measurements not drafted yet</span>
        )}

        {/* Bespoke upload / notes */}
        {mode === 'bespoke' && (
          <div className="space-y-2 text-[10px] font-sans">
            {notes && (
              <div>
                <span className="block font-bold text-[#1A1A1A]/50 uppercase tracking-wider">Tailoring Notes</span>
                <p className="text-[#1A1A1A]/70 font-light line-clamp-2 italic bg-white p-2 border border-[#1A1A1A]/5 rounded">
                  "{notes}"
                </p>
              </div>
            )}
            {uploadedFile && (
              <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-500/5 p-2 border border-emerald-500/10 rounded">
                <Ruler className="w-3.5 h-3.5" />
                <span className="font-semibold truncate">Ref: {uploadedFile.name}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Pricing Sheet */}
      <div className="border-t border-[#1A1A1A]/10 pt-4 flex justify-between items-baseline select-none">
        <span className="font-serif text-lg font-light">Estimation Total</span>
        <div className="text-right">
          <span className="font-serif text-2xl font-bold text-[#DA291C]">{formatPrice(totalPrice)}</span>
          <span className="block font-sans text-[8px] text-[#1A1A1A]/45 uppercase tracking-wider font-semibold">
            All Atelier Cuts Included
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <div className="hidden lg:block w-full sticky top-32 bg-[#F7F3EE]/60 backdrop-blur-md p-6 border border-[#1A1A1A]/10 rounded-2xl shadow-sm space-y-6">
        <SummaryContent />
      </div>

      {/* MOBILE FLOATING TRAY */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#1A1A1A]/10 shadow-2xl select-none">
        {/* Mobile Header Toggle */}
        <div
          onClick={() => setMobileMenuExpanded => setMobileExpanded(!mobileExpanded)}
          className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-[#F5F5F3] transition-colors"
        >
          <div className="flex items-center gap-2">
            <Scissors className="w-4.5 h-4.5 text-[#C8A97E]" />
            <div>
              <span className="font-mono text-[8px] uppercase tracking-widest text-[#C8A97E] font-bold block">
                Live Specification
              </span>
              <span className="font-serif text-sm font-semibold text-[#1A1A1A]">
                {fabric ? fabric.name : 'Choose Fabric'} • {fit}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-serif text-base font-bold text-[#DA291C]">{formatPrice(totalPrice)}</span>
            {mobileExpanded ? (
              <ChevronDown className="w-5 h-5 text-[#1A1A1A]/60" />
            ) : (
              <ChevronUp className="w-5 h-5 text-[#1A1A1A]/60 animate-bounce" />
            )}
          </div>
        </div>

        {/* Collapsible content drawer */}
        <AnimatePresence>
          {mobileExpanded && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-y-auto max-h-[60vh] px-5 pb-6 border-t border-[#1A1A1A]/5"
            >
              <div className="pt-4">
                <SummaryContent />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
