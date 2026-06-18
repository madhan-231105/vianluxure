/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'dark' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'gold', className = '' }: BadgeProps) {
  const baseClasses = 'inline-flex items-center justify-center text-[9px] uppercase tracking-[0.2em] font-sans font-semibold px-2.5 py-1 select-none rounded-[1px]';
  
  const variantClasses = {
    gold: 'bg-[#C8A97E] text-[#F7F3EE]',
    dark: 'bg-[#1A1A1A] text-[#F7F3EE]',
    outline: 'border border-[#1A1A1A]/20 text-[#1A1A1A]/70',
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
