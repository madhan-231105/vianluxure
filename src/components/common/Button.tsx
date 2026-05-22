"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  asAnchor?: boolean;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  asAnchor = false,
  href,
  onClick,
  type = 'button',
  disabled = false,
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-sans uppercase tracking-[0.15em] text-xs transition-all duration-500 ease-out select-none cursor-pointer';
  
  const sizeClasses = {
    sm: 'px-5 py-2.5 text-[10px]',
    md: 'px-8 py-3.5 text-[11px]',
    lg: 'px-11 py-4.5 text-[12.5px]',
  };

  const variantClasses = {
    primary: 'bg-[#1A1A1A] text-[#F7F3EE] hover:bg-[#C8A97E] hover:text-[#1A1A1A]',
    secondary: 'bg-[#E8DED1] text-[#1A1A1A] hover:bg-[#C8A97E] hover:text-[#F7F3EE]',
    outline: 'border border-[#1A1A1A]/30 text-[#1A1A1A] hover:border-[#C8A97E] hover:bg-[#C8A97E]/5 hover:text-[#C8A97E]',
    text: 'text-[#1A1A1A] relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:scale-x-0 hover:after:scale-x-100 after:origin-bottom-left after:bg-[#1A1A1A] after:transition-transform after:duration-500',
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (asAnchor && href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {children}
      </a>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={combinedClasses}
      type={type}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
}
