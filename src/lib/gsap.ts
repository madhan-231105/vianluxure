/**
 * Lazy-load GSAP on the client only — avoids RSC / webpack manifest issues.
 */

type GsapRuntime = {
  gsap: typeof import('gsap').default;
  ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger;
};

let runtime: GsapRuntime | null = null;
let loadPromise: Promise<GsapRuntime> | null = null;

export async function loadGsap(): Promise<GsapRuntime | null> {
  if (typeof window === 'undefined') return null;

  if (runtime) return runtime;

  if (!loadPromise) {
    loadPromise = (async () => {
      const gsapModule = await import('gsap');
      const stModule = await import('gsap/ScrollTrigger');
      const gsap = gsapModule.default;
      const { ScrollTrigger } = stModule;
      gsap.registerPlugin(ScrollTrigger);
      runtime = { gsap, ScrollTrigger };
      return runtime;
    })();
  }

  return loadPromise;
}

export function refreshScrollTriggers() {
  runtime?.ScrollTrigger.refresh();
}

export function scheduleScrollTriggerRefresh() {
  if (typeof window === 'undefined') return;

  const run = () => refreshScrollTriggers();

  requestAnimationFrame(run);
  setTimeout(run, 150);
  setTimeout(run, 600);
  setTimeout(run, 1500);

  window.addEventListener('load', run, { once: true });
  document.fonts?.ready?.then(run);
}
