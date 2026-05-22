'use client';

/**
 * FooterSection — Cinematic premium footer.
 * - Newsletter signup
 * - Luxury brand statement
 * - Navigation + contact
 * - Social links
 */

import { useState } from 'react';
import { ArrowRight, Share2, Globe, Link } from 'lucide-react';
import FadeReveal from '@/components/ui/FadeReveal';

const SHOP_LINKS    = ['Linen Fabrics', 'Ready To Wear', 'Made To Measure', 'Bespoke Tailoring'];
const COMPANY_LINKS = ['About Us', 'Sustainability', 'Terms & Conditions', 'Privacy Policy', 'Shipping Policy', 'Cancellation & Refunds'];

export default function FooterSection() {
  const [email,     setEmail]     = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubscribe(e) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <footer id="contact" className="relative overflow-hidden bg-[#0D0D0D]" aria-label="Site footer">
      {/* Top gold rule */}
      <div className="w-full h-[1px]" style={{ background: 'linear-gradient(to right, transparent, rgba(200,169,126,0.4), transparent)' }} />

      {/* ── Newsletter banner ──────────────────────────────────────────────── */}
      <div
        className="relative py-20 lg:py-28"
        style={{ borderBottom: '1px solid rgba(200,169,126,0.08)' }}
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 0%, rgba(200,169,126,0.04) 0%, transparent 70%)' }}
        />

        <div className="relative vl-container text-center">
          <FadeReveal>
            <p className="text-[10px] tracking-[0.4em] uppercase mb-6" style={{ color: 'var(--color-luxury-gold)', fontFamily: 'var(--font-body)' }}>Join the Circle</p>
          </FadeReveal>
          <FadeReveal delay={0.1}>
            <h2 className="font-light mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 80px)', color: 'var(--color-luxury-cream)', lineHeight: '1' }}>Wear Something <span className="italic" style={{ color: 'var(--color-luxury-gold)' }}>Meaningful</span></h2>
          </FadeReveal>
          <FadeReveal delay={0.2}>
            <p className="text-sm font-light mb-12 max-w-md mx-auto" style={{ color: 'rgba(245,241,232,0.4)', fontFamily: 'var(--font-body)' }}>Early access to new collections, exclusive fabric drops, and style notes from our atelier.</p>
          </FadeReveal>

          <FadeReveal delay={0.3}>
              {submitted ? (
              <div className="flex items-center justify-center gap-3">
                  <span className="block w-6 h-[1px]" style={{ background: 'var(--color-luxury-gold)' }} />
                  <p className="text-sm font-light italic" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-luxury-gold)' }}>Thank you. We&apos;ll be in touch.</p>
                  <span className="block w-6 h-[1px]" style={{ background: 'var(--color-luxury-gold)' }} />
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto"
                aria-label="Newsletter signup"
              >
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                    className="flex-1 px-6 py-4 text-sm font-light bg-transparent outline-none transition-colors duration-300"
                    style={{ border: '1px solid rgba(200,169,126,0.25)', borderRight: 'none', color: 'var(--color-luxury-cream)', fontFamily: 'var(--font-body)', letterSpacing: '0.05em' }}
                />
                <button
                  type="submit"
                  id="newsletter-submit-btn"
                  aria-label="Subscribe to newsletter"
                    className="flex items-center justify-center gap-2 px-8 py-4 transition-all duration-300 shrink-0 hero-cta primary"
                    style={{ color: '#0D0D0D' }}
                >
                  <span
                    className="text-[10px] tracking-[0.25em] uppercase font-medium"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Subscribe
                  </span>
                  <ArrowRight size={12} strokeWidth={2} />
                </button>
              </form>
            )}
          </FadeReveal>
        </div>
      </div>

      {/* ── Main footer grid ───────────────────────────────────────────────── */}
      <div className="vl-container py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Brand column */}
          <div className="lg:col-span-4">
            <FadeReveal>
              {/* Large logo */}
              <h2 className="font-light tracking-[0.2em] uppercase mb-6 leading-none" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 72px)', color: 'var(--color-luxury-cream)' }}>VL <span className="italic" style={{ color: 'var(--color-luxury-gold)' }}>Global</span></h2>
            </FadeReveal>
            <FadeReveal delay={0.1}>
              <p className="text-sm font-light leading-[1.9] mb-10" style={{ color: 'rgba(245,241,232,0.35)', fontFamily: 'var(--font-body)', maxWidth: '280px' }}>Premium handcrafted linen tailoring from the heart of Tamil Nadu. Crafted for the modern gentleman since 2009.</p>
            </FadeReveal>

            {/* Social icons */}
            <FadeReveal delay={0.2}>
              <div className="flex gap-4">
                {[
                  { Icon: Share2, label: 'Share',    href: '#' },
                  { Icon: Globe,  label: 'Website',  href: '#' },
                  { Icon: Link,   label: 'Links',    href: '#' },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={`VL Global on ${label}`}
                    className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:border-amber-400 hover:text-amber-400"
                    style={{ border: '1px solid rgba(200,169,126,0.2)', color: 'rgba(245,241,232,0.4)' }}
                  >
                    <Icon size={15} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </FadeReveal>
          </div>

          {/* Shop links */}
          <div className="lg:col-span-2">
            <FadeReveal delay={0.1}>
              <h3
                className="text-[10px] tracking-[0.35em] uppercase mb-7"
                style={{ color: 'var(--color-luxury-gold)', fontFamily: 'var(--font-body)' }}
              >
                Shop
              </h3>
              <ul className="flex flex-col gap-4">
                {SHOP_LINKS.map((label) => (
                  <li key={label}>
                    <a href="#collection" className="text-sm font-light transition-colors duration-300 hover:text-amber-400" style={{ color: 'rgba(245,241,232,0.4)', fontFamily: 'var(--font-body)' }}>{label}</a>
                  </li>
                ))}
              </ul>
            </FadeReveal>
          </div>

          {/* Company links */}
          <div className="lg:col-span-2">
            <FadeReveal delay={0.15}>
              <h3
                className="text-[10px] tracking-[0.35em] uppercase mb-7"
                style={{ color: 'var(--color-luxury-gold)', fontFamily: 'var(--font-body)' }}
              >
                Company
              </h3>
              <ul className="flex flex-col gap-4">
                {COMPANY_LINKS.map((label) => (
                  <li key={label}>
                    <a href="#" className="text-sm font-light transition-colors duration-300 hover:text-amber-400" style={{ color: 'rgba(245,241,232,0.4)', fontFamily: 'var(--font-body)' }}>{label}</a>
                  </li>
                ))}
              </ul>
            </FadeReveal>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-4" id="contact-info">
            <FadeReveal delay={0.2}>
              <h3 className="text-[10px] tracking-[0.35em] uppercase mb-7" style={{ color: 'var(--color-luxury-gold)', fontFamily: 'var(--font-body)' }}>Atelier</h3>
              <div className="flex flex-col gap-5">
                <a
                  href="tel:+919944944255"
                  aria-label="Call VL Global"
                  className="flex flex-col gap-1 group"
                >
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase font-light"
                    style={{ color: 'rgba(200,169,126,0.5)', fontFamily: 'var(--font-body)' }}
                  >
                    Phone
                  </span>
                  <span className="text-sm font-light transition-colors duration-300 group-hover:text-[#F5F1E8]" style={{ color: 'rgba(245,241,232,0.45)', fontFamily: 'var(--font-body)' }}>+91 99449 44255</span>
                </a>
                <a
                  href="mailto:vlglobalemart@gmail.com"
                  aria-label="Email VL Global"
                  className="flex flex-col gap-1 group"
                >
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase font-light"
                    style={{ color: 'rgba(200,169,126,0.5)', fontFamily: 'var(--font-body)' }}
                  >
                    Email
                  </span>
                  <span
                    className="text-sm font-light transition-colors duration-300 group-hover:text-[#F5F1E8]"
                    style={{ color: 'rgba(245,241,232,0.45)', fontFamily: 'var(--font-body)' }}
                  >
                    vlglobalemart@gmail.com
                  </span>
                </a>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-light" style={{ color: 'rgba(200,169,126,0.5)', fontFamily: 'var(--font-body)' }}>Studio Address</span>
                  <address className="text-sm font-light not-italic leading-[1.8]" style={{ color: 'rgba(245,241,232,0.45)', fontFamily: 'var(--font-body)' }}>36/11, CHB Colony Street No-04<br />Tiruchengode, Namakkal — 637211<br />Tamil Nadu, India</address>
                </div>
              </div>
            </FadeReveal>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ─────────────────────────────────────────────────────── */}
      <div className="vl-container py-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(200,169,126,0.08)' }}>
        <p className="text-[10px] tracking-[0.15em] uppercase font-light" style={{ color: 'rgba(245,241,232,0.2)', fontFamily: 'var(--font-body)' }}>© {new Date().getFullYear()} VL Global. All rights reserved.</p>
        <p className="text-[10px] tracking-[0.15em] uppercase font-light italic" style={{ color: 'rgba(200,169,126,0.3)', fontFamily: 'var(--font-display)' }}>Crafted For The Modern Gentleman</p>
      </div>
    </footer>
  );
}
