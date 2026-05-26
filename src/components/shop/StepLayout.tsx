"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface StepLayoutProps {
  currentStep: number;
  totalSteps: number;
  stepNames: string[];
  onBack: () => void;
  onNext: () => void;
  canContinue?: boolean;
  children: React.ReactNode;
}

export function StepLayout({
  currentStep,
  totalSteps,
  stepNames,
  onBack,
  onNext,
  canContinue = true,
  children
}: StepLayoutProps) {
  const progressPercent = ((currentStep) / totalSteps) * 100;
  const currentStepName = stepNames[currentStep - 1] || '';

  return (
    <div className="space-y-6 w-full">
      {/* Visual Progress Bar Section */}
      <div className="space-y-2 select-none">
        <div className="flex justify-between items-end text-xs">
          <div className="space-y-1">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#C8A97E] font-bold block">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="font-serif text-lg font-light text-[#1A1A1A]">
              {currentStepName}
            </span>
          </div>
          <span className="font-mono text-[10px] font-bold text-[#1A1A1A]/55">
            {Math.round(progressPercent)}% Complete
          </span>
        </div>

        {/* Progress Bar Track */}
        <div className="w-full h-[3px] bg-[#1A1A1A]/10 relative overflow-hidden rounded-full">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="absolute h-full left-0 top-0 bg-[#DA291C]" // Brand luxury red accent
          />
        </div>
      </div>

      {/* Step Content with slider animations */}
      <div className="relative min-h-[350px] bg-white p-6 sm:p-8 rounded-2xl border border-[#1A1A1A]/5 shadow-sm overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="w-full h-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Control Buttons */}
      <div className="flex gap-4">
        <button
          onClick={onBack}
          disabled={currentStep === 1}
          className={`px-5 py-4 border rounded-full font-sans text-xs uppercase tracking-widest font-bold flex items-center gap-1.5 transition-all duration-300 ${
            currentStep === 1
              ? 'border-gray-200 text-gray-400 cursor-not-allowed'
              : 'border-[#1A1A1A]/10 hover:border-[#1A1A1A] text-[#1A1A1A]/70 hover:text-[#1A1A1A] cursor-pointer'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <button
          onClick={onNext}
          disabled={!canContinue}
          className={`flex-grow py-4 rounded-full font-sans text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer shadow-sm ${
            canContinue
              ? 'bg-[#1A1A1A] text-[#F7F3EE] hover:bg-[#DA291C]'
              : 'bg-[#1A1A1A]/20 text-[#1A1A1A]/40 cursor-not-allowed'
          }`}
        >
          <span>{currentStep === totalSteps ? 'Finalize Order' : 'Continue'}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
