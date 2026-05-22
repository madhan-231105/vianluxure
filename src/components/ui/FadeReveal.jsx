'use client';

/**
 * FadeReveal — Scroll-triggered fade + slide reveal using Framer Motion.
 * Wraps any content to animate it into view when it enters the viewport.
 */
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const directionMap = {
  up:    { y: 48, x: 0 },
  down:  { y: -48, x: 0 },
  left:  { y: 0, x: 48 },
  right: { y: 0, x: -48 },
  none:  { y: 0, x: 0 },
};

/**
 * @param {object}  props
 * @param {React.ReactNode} props.children
 * @param {number}  [props.delay=0]
 * @param {'up'|'down'|'left'|'right'|'none'} [props.direction='up']
 * @param {string}  [props.className]
 * @param {number}  [props.duration=0.9]
 * @param {string}  [props.margin='-80px']
 */
export default function FadeReveal({
  children,
  delay = 0,
  direction = 'up',
  className,
  duration = 0.9,
  margin = '-80px',
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin });

  const initial = { opacity: 0, ...directionMap[direction] };
  const animate = inView
    ? { opacity: 1, y: 0, x: 0 }
    : initial;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={animate}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
