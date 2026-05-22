'use client';

/**
 * LenisProvider — Wraps the app with Lenis smooth scrolling.
 * Integrates with GSAP ScrollTrigger when available.
 */
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    /* Expose globally for GSAP ScrollTrigger integration */
    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return children;
}
