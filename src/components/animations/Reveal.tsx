"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: 'horizontal' | 'vertical';
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.9,
  className = '',
  direction = 'horizontal',
}: RevealProps) {
  const isHorizontal = direction === 'horizontal';

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + duration * 0.3, duration: 0.1 }}
      >
        {children}
      </motion.div>
      <motion.div
        initial={
          isHorizontal
            ? { left: '0%', width: '0%' }
            : { top: '0%', height: '0%' }
        }
        whileInView={
          isHorizontal
            ? {
                left: ['0%', '0%', '100%'],
                width: ['0%', '100%', '0%'],
              }
            : {
                top: ['0%', '0%', '100%'],
                height: ['0%', '100%', '0%'],
              }
        }
        viewport={{ once: true, margin: '-5%' }}
        transition={{
          duration,
          delay,
          ease: [0.76, 0, 0.24, 1], // cinematic slow ease-in-out
        }}
        className="absolute inset-0 bg-[#C8A97E] z-10"
      />
    </div>
  );
}
