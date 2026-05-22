'use client';

/**
 * TestimonialsSection — Auto-scrolling marquee with luxury quote cards.
 * Two rows moving in opposite directions for editorial depth.
 */

import FadeReveal from '@/components/ui/FadeReveal';

const TESTIMONIALS_ROW1 = [
  {
    id: 1,
    quote: 'The finest linen shirt I have ever worn. The drape is impeccable and the fabric breathes beautifully.',
    name: 'Arjun Krishnamurthy',
    location: 'Chennai',
    rating: 5,
  },
  {
    id: 2,
    quote: 'VL Global has completely changed how I think about everyday dressing. Effortless elegance.',
    name: 'Siddharth Menon',
    location: 'Bangalore',
    rating: 5,
  },
  {
    id: 3,
    quote: 'The bespoke consultation was a genuine pleasure. They understood exactly what I needed.',
    name: 'Rajesh Naidu',
    location: 'Hyderabad',
    rating: 5,
  },
  {
    id: 4,
    quote: 'I have ordered three bespoke pieces now. Each one surpasses the last in craft and quality.',
    name: 'Vikram Iyer',
    location: 'Mumbai',
    rating: 5,
  },
];

const TESTIMONIALS_ROW2 = [
  {
    id: 5,
    quote: 'Exceptional tailoring, exceptional service. My go-to for premium linen wear.',
    name: 'Karthik Selvam',
    location: 'Coimbatore',
    rating: 5,
  },
  {
    id: 6,
    quote: 'The attention to detail in every stitch is remarkable. Truly world-class craftsmanship.',
    name: 'Anand Rajan',
    location: 'Delhi',
    rating: 5,
  },
  {
    id: 7,
    quote: 'Worth every rupee. The linen quality is unlike anything available off-the-rack.',
    name: 'Suresh Babu',
    location: 'Tirupur',
    rating: 5,
  },
  {
    id: 8,
    quote: 'From fabric selection to delivery — a seamless, luxurious experience.',
    name: 'Mohan Das',
    location: 'Kochi',
    rating: 5,
  },
];

function TestimonialCard({ item }) {
  return (
    <div
      className="shrink-0 w-[340px] lg:w-[400px] p-8 mx-3"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(200,169,126,0.12)',
      }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {Array.from({ length: item.rating }).map((_, i) => (
          <span key={i} style={{ color: '#C8A97E', fontSize: '12px' }}>★</span>
        ))}
      </div>

      {/* Quote */}
      <p
        className="font-light leading-[1.8] mb-8"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(17px, 2vw, 20px)',
          color: 'rgba(245,241,232,0.75)',
          fontStyle: 'italic',
        }}
      >
        &ldquo;{item.quote}&rdquo;
      </p>

      {/* Attribution */}
      <div className="flex items-center gap-3">
        <span className="block w-5 h-[1px]" style={{ background: '#C8A97E' }} />
        <div>
          <p
            className="text-xs tracking-[0.15em] uppercase font-light"
            style={{ color: '#F5F1E8', fontFamily: 'var(--font-body)' }}
          >
            {item.name}
          </p>
          <p
            className="text-[10px] tracking-[0.1em] font-light mt-0.5"
            style={{ color: 'rgba(200,169,126,0.5)', fontFamily: 'var(--font-body)' }}
          >
            {item.location}
          </p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }) {
  /* Duplicate for seamless loop */
  const doubled = [...items, ...items];

  return (
    <div className="flex overflow-hidden">
      <div
        className="flex"
        style={{
          animation: reverse ? 'marquee-rev 50s linear infinite' : 'marquee 50s linear infinite',
        }}
      >
        {doubled.map((item, i) => (
          <TestimonialCard key={`${item.id}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{ background: '#0D0D0D' }}
      aria-label="Client testimonials"
    >
      {/* Section header */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <FadeReveal>
              <div className="flex items-center gap-4 mb-4">
                <span className="block w-8 h-[1px]" style={{ background: '#C8A97E' }} />
                <span
                  className="text-[10px] tracking-[0.35em] uppercase"
                  style={{ color: '#C8A97E', fontFamily: 'var(--font-body)' }}
                >
                  Testimonials
                </span>
              </div>
            </FadeReveal>
            <FadeReveal delay={0.1}>
              <h2
                className="font-light"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(42px, 5vw, 80px)',
                  color: '#F5F1E8',
                  lineHeight: '1',
                }}
              >
                What Clients{' '}
                <span className="italic" style={{ color: '#C8A97E' }}>
                  Say
                </span>
              </h2>
            </FadeReveal>
          </div>
          <FadeReveal direction="left" delay={0.15}>
            <p
              className="text-sm font-light max-w-xs leading-relaxed"
              style={{ color: 'rgba(245,241,232,0.4)', fontFamily: 'var(--font-body)' }}
            >
              Over 10,000 gentlemen trust VL Global for their finest occasions.
            </p>
          </FadeReveal>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="flex flex-col gap-6">
        <MarqueeRow items={TESTIMONIALS_ROW1} />
        <MarqueeRow items={TESTIMONIALS_ROW2} reverse />
      </div>

      {/* Edge fade masks */}
      <div
        className="absolute inset-y-0 left-0 w-32 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to right, #0D0D0D, transparent)' }}
      />
      <div
        className="absolute inset-y-0 right-0 w-32 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to left, #0D0D0D, transparent)' }}
      />
    </section>
  );
}
