'use client';

/**
 * BespokeProcess — Premium cinematic timeline showing the tailoring journey.
 * Uses GSAP ScrollTrigger for scroll-linked gold line progress animation.
 */

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import FadeReveal from '@/components/ui/FadeReveal';

const STEPS = [
  {
    number: '01',
    title: 'Consultation',
    desc: 'A personal conversation about your lifestyle, preferences, and the occasions your garment will grace.',
    detail: '30 min session',
  },
  {
    number: '02',
    title: 'Fabric Selection',
    desc: 'Walk through our curated library of 25+ premium linens and cottons, chosen from the finest mills.',
    detail: 'In-studio or online',
  },
  {
    number: '03',
    title: 'Measurements',
    desc: 'Precise measurements taken by our master tailor — over 22 individual points for a perfect drape.',
    detail: '22-point precision',
  },
  {
    number: '04',
    title: 'Tailoring',
    desc: 'Each piece is hand-cut and stitched in our Tiruchengode atelier, with three rounds of quality review.',
    detail: '10–14 working days',
  },
  {
    number: '05',
    title: 'Delivery',
    desc: 'Your garment arrives tissue-wrapped, with a handwritten note and a complimentary care guide.',
    detail: 'Pan-India delivery',
  },
];

export default function BespokeProcess() {
  const lineRef   = useRef(null);
  const sectionRef = useRef(null);
  const inView    = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!inView) return;

    async function initGSAP() {
      try {
        const { gsap }          = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);

        /* Integrate with Lenis if available */
        if (window.__lenis) {
          window.__lenis.on('scroll', ScrollTrigger.update);
        }

        gsap.fromTo(
          lineRef.current,
          { scaleY: 0, transformOrigin: 'top center' },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start:   'top 70%',
              end:     'bottom 30%',
              scrub:   1.5,
            },
          }
        );
      } catch {
        /* GSAP not critical — section still displays */
      }
    }

    initGSAP();
  }, [inView]);

  return (
    <section id="bespoke" ref={sectionRef} className="relative py-32 lg:py-48 bg-[#1A1A1A]" aria-label="The bespoke tailoring process">
      {/* Background texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(200,169,126,0.05) 0%, transparent 50%),
                            radial-gradient(circle at 80% 50%, rgba(200,169,126,0.03) 0%, transparent 50%)`,
        }}
      />

      <div className="relative vl-container">
        {/* Section header */}
        <div className="max-w-xl mb-20 lg:mb-28">
          <FadeReveal>
            <div className="flex items-center gap-4 mb-6">
              <span className="block w-8 h-[1px]" style={{ background: 'var(--color-luxury-gold)' }} />
              <span className="text-[10px] tracking-[0.35em] uppercase" style={{ color: 'var(--color-luxury-gold)', fontFamily: 'var(--font-body)' }}>
                The Experience
              </span>
            </div>
          </FadeReveal>
          <FadeReveal delay={0.1}>
            <h2 className="font-light leading-[1]" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(42px, 5vw, 80px)', color: 'var(--color-luxury-cream)' }}>
              From Vision{' '}
              <span className="italic" style={{ color: 'var(--color-luxury-gold)' }}>
                to Reality
              </span>
            </h2>
          </FadeReveal>
          <FadeReveal delay={0.2}>
            <p className="text-sm font-light leading-relaxed mt-6" style={{ color: 'rgba(245,241,232,0.45)', fontFamily: 'var(--font-body)' }}>
              Five deliberate steps. One garment that tells your story.
            </p>
          </FadeReveal>
        </div>

        {/* Timeline */}
        <div className="relative flex gap-8 lg:gap-20">

          {/* Vertical gold line (GSAP animated) */}
          <div className="relative hidden lg:flex flex-col items-center pt-4">
            <div className="relative w-[1px] h-full" style={{ background: 'rgba(200,169,126,0.15)' }}>
              <div ref={lineRef} className="absolute top-0 left-0 w-full h-full origin-top" style={{ background: 'var(--color-luxury-gold)', transformOrigin: 'top center', transform: 'scaleY(0)' }} />
            </div>
          </div>

          {/* Steps */}
          <div className="flex-1 flex flex-col gap-0">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                className="relative flex gap-6 lg:gap-12 pb-16 lg:pb-20"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Gold dot — mobile timeline */}
                <div className="flex flex-col items-center lg:hidden">
                  <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: 'var(--color-luxury-gold)' }} />
                  {i < STEPS.length - 1 && (
                    <div className="flex-1 w-[1px] mt-2" style={{ background: 'rgba(200,169,126,0.2)' }} />
                  )}
                </div>

                <div className="flex-1">
                  {/* Number + detail */}
                  <div className="flex items-center gap-5 mb-4">
                    <span className="text-sm font-light" style={{ color: 'var(--color-luxury-gold)', fontFamily: 'var(--font-body)' }}>{step.number}</span>
                    <span className="h-[1px] w-8" style={{ background: 'rgba(200,169,126,0.3)' }} />
                    <span className="text-[9px] tracking-[0.25em] uppercase font-light" style={{ color: 'rgba(200,169,126,0.5)', fontFamily: 'var(--font-body)' }}>{step.detail}</span>
                  </div>

                  <h3 className="font-light mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3vw, 44px)', color: 'var(--color-luxury-cream)' }}>{step.title}</h3>

                  <p className="text-sm font-light leading-[1.9] max-w-lg" style={{ color: 'rgba(245,241,232,0.45)', fontFamily: 'var(--font-body)' }}>{step.desc}</p>

                  {/* Separator line */}
                  {i < STEPS.length - 1 && (
                    <div className="mt-16 w-full h-[1px]" style={{ background: 'rgba(200,169,126,0.08)' }} />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <FadeReveal delay={0.3}>
          <div className="mt-4 pt-16 flex flex-col sm:flex-row items-start sm:items-center gap-8" style={{ borderTop: '1px solid rgba(200,169,126,0.12)' }}>
            <a id="bespoke-cta-btn" href="#contact" className="hero-cta primary">
              <span className="text-[11px] tracking-[0.25em] uppercase font-medium" style={{ fontFamily: 'var(--font-body)' }}>Book a Consultation</span>
            </a>
            <p className="text-[11px] tracking-[0.2em] uppercase font-light" style={{ color: 'rgba(245,241,232,0.3)', fontFamily: 'var(--font-body)' }}>+91 99449 44255 &nbsp;·&nbsp; vlglobalemart@gmail.com</p>
          </div>
        </FadeReveal>
      </div>
    </section>
  );
}
