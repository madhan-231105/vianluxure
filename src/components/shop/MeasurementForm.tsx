"use client";

import React, { useState } from 'react';
import { Ruler, ShieldCheck, HelpCircle } from 'lucide-react';

interface MeasurementFormProps {
  mode: 'made-to-wear' | 'bespoke';
  values: { [key: string]: string };
  onChange: (key: string, val: string) => void;
  fit: 'Slim Fit' | 'Classic Fit';
  onFitChange: (fit: 'Slim Fit' | 'Classic Fit') => void;
}

export function MeasurementForm({ mode, values, onChange, fit, onFitChange }: MeasurementFormProps) {
  const [unit, setUnit] = useState<'in' | 'cm'>('in');

  // Convert default values or show conversions
  const mtwFields = [
    { id: 'neck', label: 'Neck Circumference', defaultIn: '15.5', rangeIn: '13" - 19"', info: 'Measure around your neck where the collar sits.' },
    { id: 'chest', label: 'Chest Circumference', defaultIn: '40.0', rangeIn: '34" - 52"', info: 'Measure around the fullest part of your chest.' },
    { id: 'waist', label: 'Waist Circumference', defaultIn: '36.0', rangeIn: '28" - 48"', info: 'Measure around your natural waistline, where you wear trousers.' },
    { id: 'shoulder', label: 'Shoulder Width', defaultIn: '18.0', rangeIn: '15" - 22"', info: 'Measure from one shoulder point across the back to the other.' },
    { id: 'sleeve', label: 'Sleeve Length', defaultIn: '34.0', rangeIn: '30" - 38"', info: 'Measure from the back center of your neck, down the shoulder to your wrist.' },
    { id: 'shirtLength', label: 'Shirt Length', defaultIn: '30.0', rangeIn: '26" - 35"', info: 'Measure from the top of the shoulder down to your preferred hem length.' }
  ];

  const bespokeFields = [
    ...mtwFields,
    { id: 'hips', label: 'Hips Circumference', defaultIn: '41.0', rangeIn: '35" - 54"', info: 'Measure around the fullest part of your hips.' },
    { id: 'wrist', label: 'Wrist Circumference', defaultIn: '7.25', rangeIn: '6" - 9"', info: 'Measure around your wrist bone tightly.' },
    { id: 'biceps', label: 'Biceps Circumference', defaultIn: '14.0', rangeIn: '11" - 20"', info: 'Measure around the thickest part of your biceps.' },
    { id: 'backLength', label: 'Center Back Length', defaultIn: '30.5', rangeIn: '26" - 36"', info: 'Measure from the nape of your neck straight down your spine to the hem.' }
  ];

  const fields = mode === 'bespoke' ? bespokeFields : mtwFields;

  const handleUnitToggle = (newUnit: 'in' | 'cm') => {
    if (newUnit === unit) return;
    setUnit(newUnit);
    
    // Perform conversions for any inputs currently entered
    Object.keys(values).forEach(key => {
      const val = parseFloat(values[key]);
      if (!isNaN(val)) {
        if (newUnit === 'cm') {
          // Inches to CM
          onChange(key, (val * 2.54).toFixed(1));
        } else {
          // CM to Inches
          onChange(key, (val / 2.54).toFixed(2));
        }
      }
    });
  };

  const handleInputChange = (id: string, val: string) => {
    onChange(id, val);
  };

  return (
    <div className="space-y-6">
      {/* Fit Selector */}
      <div className="grid grid-cols-2 gap-4">
        {['Slim Fit', 'Classic Fit'].map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => onFitChange(f as 'Slim Fit' | 'Classic Fit')}
            className={`py-4 rounded-xl border text-center transition-all duration-300 cursor-pointer ${
              fit === f
                ? 'bg-[#1A1A1A] text-white border-transparent shadow-md'
                : 'bg-white border-[#1A1A1A]/10 text-[#1A1A1A]/70 hover:border-[#1A1A1A]/20'
            }`}
          >
            <span className="font-serif text-base block font-light">{f}</span>
            <span className="font-sans text-[9px] uppercase tracking-widest text-[#C8A97E] font-medium">
              {f === 'Slim Fit' ? 'Tailored Silhouette' : 'Comfort Silhouette'}
            </span>
          </button>
        ))}
      </div>

      {/* Unit Toggle */}
      <div className="flex items-center justify-between border-y border-[#1A1A1A]/5 py-4">
        <div className="flex items-center gap-2">
          <Ruler className="w-4 h-4 text-[#C8A97E]" />
          <span className="font-serif text-sm text-[#1A1A1A] font-light">Tailoring Scale</span>
        </div>
        <div className="flex gap-1 bg-[#1A1A1A]/5 p-0.5 rounded-full border border-[#1A1A1A]/5 select-none">
          <button
            type="button"
            onClick={() => handleUnitToggle('in')}
            className={`px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider font-mono cursor-pointer transition-all ${
              unit === 'in' ? 'bg-[#1A1A1A] text-[#F7F3EE] shadow-sm' : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
            }`}
          >
            Inches
          </button>
          <button
            type="button"
            onClick={() => handleUnitToggle('cm')}
            className={`px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider font-mono cursor-pointer transition-all ${
              unit === 'cm' ? 'bg-[#1A1A1A] text-[#F7F3EE] shadow-sm' : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
            }`}
          >
            CM
          </button>
        </div>
      </div>

      {/* Sizing Grid */}
      <div className="grid grid-cols-2 gap-4">
        {fields.map((field) => {
          const val = values[field.id] || '';
          return (
            <div key={field.id} className="space-y-1.5 group">
              <div className="flex items-center justify-between">
                <label className="text-[10px] sm:text-xs font-semibold text-[#1A1A1A]/85 uppercase tracking-wide">
                  {field.label}
                </label>
                <div className="relative group/tooltip">
                  <HelpCircle className="w-3 h-3 text-[#1A1A1A]/30 cursor-help hover:text-[#C8A97E] transition-colors" />
                  <div className="absolute right-0 bottom-5 w-48 bg-[#1A1A1A] text-[#F7F3EE] p-2 text-[9px] rounded-md opacity-0 group-hover/tooltip:opacity-100 pointer-events-none transition-opacity duration-300 z-20 leading-relaxed font-sans shadow-lg font-light">
                    {field.info}
                  </div>
                </div>
              </div>
              <div className="relative">
                <input
                  type="number"
                  step="0.1"
                  required
                  placeholder={unit === 'in' ? field.defaultIn : (parseFloat(field.defaultIn) * 2.54).toFixed(1)}
                  value={val}
                  onChange={(e) => handleInputChange(field.id, e.target.value)}
                  className="w-full p-3 bg-white border border-[#1A1A1A]/10 rounded-xl text-center text-sm font-semibold focus:outline-none focus:border-[#C8A97E] focus:ring-1 focus:ring-[#C8A97E]/30 transition-all duration-300"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[9px] text-[#1A1A1A]/40 uppercase tracking-widest font-bold">
                  {unit}
                </span>
              </div>
              <span className="text-[8px] uppercase tracking-wider text-[#1A1A1A]/40 font-mono block text-center">
                Ref: {unit === 'in' ? field.rangeIn : `${(parseFloat(field.rangeIn.split(' ')[0].replace('"', '')) * 2.54).toFixed(0)} - ${(parseFloat(field.rangeIn.split(' ')[2].replace('"', '')) * 2.54).toFixed(0)} cm`}
              </span>
            </div>
          );
        })}
      </div>

      <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 flex gap-3 rounded-xl items-center">
        <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
        <p className="font-sans text-[11px] text-emerald-800 leading-relaxed font-light">
          Our master fitters will verify your inputted body measurements against historical silhouette drafts. We will contact you if any parameter looks irregular prior to atelier fabric cutting.
        </p>
      </div>
    </div>
  );
}
