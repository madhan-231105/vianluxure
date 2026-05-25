'use client';

import { useEffect } from 'react';
import { loadGsap, scheduleScrollTriggerRefresh } from '@/src/lib/gsap';

/** Refreshes GSAP ScrollTrigger after hydration and lazy sections load */
export function ScrollTriggerRefresh() {
  useEffect(() => {
    let cancelled = false;

    loadGsap().then(() => {
      if (!cancelled) scheduleScrollTriggerRefresh();
    });

    const onResize = () => scheduleScrollTriggerRefresh();
    window.addEventListener('resize', onResize);

    return () => {
      cancelled = true;
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return null;
}
