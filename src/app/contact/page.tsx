"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Brand: VIAN LUXURE (The 2024 Digital Atelier)
 * Page: CONTACT & INQUIRY PORTAL (/contact) - Full GSAP ScrollTrigger Animations
 */

import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { Container } from '@/src/components/common/Container';
import { Button } from '@/src/components/common/Button';
import { StaggeredBlurReveal } from '@/src/components/animations/StaggeredBlurReveal';
import { FadeUp } from '@/src/components/animations/FadeUp';
import { FAQ } from '@/src/components/home/FAQ';
import { loadGsap, refreshScrollTriggers } from '@/src/lib/gsap';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  CheckCircle2, 
  Clock, 
  ExternalLink,
  Camera
} from 'lucide-react';

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // --- FORM STATES ---
  const [fullName, setFullName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [emailId, setEmailId] = useState('');
  const [message, setMessage] = useState('');
  
  // --- SUBMISSION STATE ---
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // --- GSAP SCROLLTRIGGER ENGINE ---
  useLayoutEffect(() => {
    let ctx: any = null;
    let cancelled = false;

    loadGsap().then((lib) => {
      if (!lib || cancelled) return;
      const { gsap, ScrollTrigger } = lib;

      ctx = gsap.context(() => {
        // 1. Hero banner parallax scale
        gsap.fromTo(
          '.contact-header-bg',
          { scale: 1.08 },
          {
            scale: 1,
            ease: 'power2.out',
            duration: 1.6
          }
        );

        // 2. Direct Channels Stagger Reveal (ScrollTrigger)
        gsap.fromTo(
          '.contact-info-card',
          { y: 55, opacity: 0, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.contact-info-cards-grid',
              start: 'top 85%',
              once: true,
            }
          }
        );

        // 3. Lookbook Elements Stagger Reveal (ScrollTrigger)
        gsap.fromTo(
          '.gallery-item-reveal',
          { y: 45, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.85,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.gallery-items-grid',
              start: 'top 85%',
              once: true,
            }
          }
        );

        // 4. Main Workspace Form & Map Reveal (ScrollTrigger)
        gsap.fromTo(
          '.workspace-reveal',
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.workspace-trigger',
              start: 'top 85%',
              once: true,
            }
          }
        );

        // 5. Deep Vertical Parallax Image Scrolling (Scrub-Triggered)
        gsap.utils.toArray('.parallax-image').forEach((img: any) => {
          gsap.to(img, {
            yPercent: 14,
            ease: 'none',
            scrollTrigger: {
              trigger: img.parentElement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
              invalidateOnRefresh: true,
            }
          });
        });

        // Refresh triggers on initial layout calculations
        refreshScrollTriggers();
      }, containerRef.current);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !whatsapp || !emailId || !message) return;

    setSubmitting(true);
    
    // Quick premium loading delay
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleResetForm = () => {
    setFullName('');
    setWhatsapp('');
    setEmailId('');
    setMessage('');
    setSubmitted(false);
  };

  const getWhatsAppHref = () => {
    const defaultText = `Hi Vian Luxure! I am ${fullName || 'a Patron'}. Inquiry details: ${message || 'I would like to consult about your collections.'}`;
    return `https://wa.me/919944944255?text=${encodeURIComponent(defaultText)}`;
  };

  const getEmailHref = () => {
    const subject = `Atelier Inquiry from ${fullName}`;
    const body = `Patron Name: ${fullName}\nWhatsApp: ${whatsapp}\nEmail ID: ${emailId}\n\nMessage:\n${message}`;
    return `mailto:vlglobalemart@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F7F3EE] text-[#1A1A1A] selection:bg-[#C8A97E]/30 selection:text-[#1A1A1A] overflow-x-hidden">
      <Navbar />

      <main>
        {/* --- BRAND HERO BANNER --- */}
        <section className="relative h-[48vh] min-h-[420px] flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/aboutus_atelier.png"
              alt="VL Atelier Workshop Banner"
              className="contact-header-bg w-full h-full object-cover object-center select-none opacity-45"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-[#F7F3EE] z-[1]" />
          </div>

          <Container className="relative z-10 text-center text-[#F7F3EE] w-full pt-16">
            <div className="max-w-4xl mx-auto space-y-4">
              <FadeUp delay={0.1} y={15}>
                <span className="font-sans text-[10px] text-[#C8A97E] uppercase tracking-[0.35em] font-bold inline-block bg-white/5 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-sm">
                  VL Global Atelier Concierge
                </span>
              </FadeUp>
              
              <StaggeredBlurReveal
                lines={["Get In-Touch", "With Us"]}
                as="h1"
                stagger={0.06}
                duration={1.2}
                className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight tracking-wide"
              />
              
              <FadeUp delay={0.4} y={15}>
                <p className="font-sans text-xs sm:text-sm md:text-base text-white/80 font-light leading-relaxed max-w-2xl mx-auto pt-2">
                  We love hearing from you! Whether you have questions about our products, need assistance with your order, or simply want to share your thoughts, our team is here to help.
                </p>
              </FadeUp>
            </div>
          </Container>
        </section>

        {/* --- INTEGRATED MULTI-CHANNEL CONTACT GRID --- */}
        <section className="py-16 bg-[#F7F3EE] relative">
          <Container>
            <div className="contact-info-cards-grid grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1250px] mx-auto">
              
              {/* Direct WhatsApp Callout */}
              <div className="contact-info-card bg-white border border-[#1A1A1A]/5 rounded-[20px] p-8 flex flex-col justify-between hover:shadow-xl hover:border-[#C8A97E]/30 transition-all duration-500 group">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-600 border border-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-light tracking-wide text-[#1A1A1A] group-hover:text-[#C8A97E] transition-colors duration-300">Direct WhatsApp</h3>
                    <p className="font-sans text-[9px] text-[#1A1A1A]/40 uppercase tracking-widest mt-1">Fastest response channel</p>
                  </div>
                  <p className="font-sans text-xs sm:text-sm font-light text-[#1A1A1A]/70 leading-relaxed">
                    Instantly connect with our master tailor for sizing consultations, bulk order quotes, or styling choices.
                  </p>
                </div>
                
                <div className="pt-6 border-t border-[#1A1A1A]/5 mt-6">
                  <a 
                    href="https://wa.me/919944944255" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <span>Message +91 99449 44255</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Email Communications */}
              <div className="contact-info-card bg-white border border-[#1A1A1A]/5 rounded-[20px] p-8 flex flex-col justify-between hover:shadow-xl hover:border-[#C8A97E]/30 transition-all duration-500 group">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#C8A97E]/10 rounded-full flex items-center justify-center text-[#C8A97E] border border-[#C8A97E]/20 group-hover:scale-105 transition-transform duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-light tracking-wide text-[#1A1A1A] group-hover:text-[#C8A97E] transition-colors duration-300">Official Email</h3>
                    <p className="font-sans text-[9px] text-[#1A1A1A]/40 uppercase tracking-widest mt-1">General & Support Desk</p>
                  </div>
                  <p className="font-sans text-xs sm:text-sm font-light text-[#1A1A1A]/70 leading-relaxed">
                    Ideal for order updates, general feedback, cancellation/refund inquiries, or design business proposals.
                  </p>
                </div>
                
                <div className="pt-6 border-t border-[#1A1A1A]/5 mt-6">
                  <a 
                    href="mailto:vlglobalemart@gmail.com" 
                    className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest font-bold text-[#C8A97E] hover:text-[#b0936b] transition-colors"
                  >
                    <span>vlglobalemart@gmail.com</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Physical Atelier Showroom */}
              <div className="contact-info-card bg-white border border-[#1A1A1A]/5 rounded-[20px] p-8 flex flex-col justify-between hover:shadow-xl hover:border-[#C8A97E]/30 transition-all duration-500 group">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#1A1A1A]/5 rounded-full flex items-center justify-center text-[#1A1A1A] border border-[#1A1A1A]/10 group-hover:scale-105 transition-transform duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-light tracking-wide text-[#1A1A1A] group-hover:text-[#C8A97E] transition-colors duration-300">Main Atelier</h3>
                    <p className="font-sans text-[9px] text-[#1A1A1A]/40 uppercase tracking-widest mt-1">In-person Sizing Fitting</p>
                  </div>
                  <p className="font-sans text-xs sm:text-sm font-light text-[#1A1A1A]/70 leading-relaxed">
                    36/11, CHB Colony Street No-04, Tiruchengode, Namakkal - 637211, Tamil Nadu, India.
                  </p>
                </div>
                
                <div className="pt-6 border-t border-[#1A1A1A]/5 mt-6">
                  <a 
                    href="https://maps.google.com/?q=11.371087,77.8701173" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest font-bold text-[#1A1A1A] hover:text-[#C8A97E] transition-colors"
                  >
                    <span>View Coordinates / Route</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* --- ATELIER EDITORIAL GALLERY --- */}
        <section className="py-10 bg-[#F7F3EE] overflow-hidden">
          <Container>
            <div className="max-w-[1250px] mx-auto space-y-6">
              <div className="text-center space-y-2 mb-10">
                <span className="font-sans text-[9px] text-[#C8A97E] uppercase tracking-[0.25em] font-bold block flex items-center justify-center gap-1.5">
                  <Camera className="w-3 h-3" /> Atelier Craftsmanship
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#1A1A1A]">Digital Lookbook Elements</h2>
                <div className="w-12 h-[1.5px] bg-[#C8A97E] mx-auto mt-2" />
              </div>
              
              <div className="gallery-items-grid grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Gallery Item 1 */}
                <div className="gallery-item-reveal relative aspect-[4/3] rounded-[16px] overflow-hidden border border-[#1A1A1A]/5 shadow-sm group">
                  <img 
                    src="/images/vian_fabric_showcase_1779434571577.webp" 
                    alt="Normandy Flax Thread Weaving close-up" 
                    className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-500" />
                  <div className="absolute bottom-5 left-5 text-[#F7F3EE] space-y-1">
                    <span className="font-mono text-[8px] text-[#C8A97E] uppercase tracking-wider">ELEMENT 01</span>
                    <h4 className="font-serif text-sm font-light uppercase tracking-wide">Normandy Flax Weave</h4>
                  </div>
                </div>

                {/* Gallery Item 2 */}
                <div className="gallery-item-reveal relative aspect-[4/3] rounded-[16px] overflow-hidden border border-[#1A1A1A]/5 shadow-sm group">
                  <img 
                    src="/images/Category1.webp" 
                    alt="Vian Crimson Weave Linen" 
                    className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-500" />
                  <div className="absolute bottom-5 left-5 text-[#F7F3EE] space-y-1">
                    <span className="font-mono text-[8px] text-[#C8A97E] uppercase tracking-wider">ELEMENT 02</span>
                    <h4 className="font-serif text-sm font-light uppercase tracking-wide">Atelier Crimson Linen</h4>
                  </div>
                </div>

                {/* Gallery Item 3 */}
                <div className="gallery-item-reveal relative aspect-[4/3] rounded-[16px] overflow-hidden border border-[#1A1A1A]/5 shadow-sm group">
                  <img 
                    src="/images/banner4.webp" 
                    alt="Sartorial shirt details alignment" 
                    className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-500" />
                  <div className="absolute bottom-5 left-5 text-[#F7F3EE] space-y-1">
                    <span className="font-mono text-[8px] text-[#C8A97E] uppercase tracking-wider">ELEMENT 03</span>
                    <h4 className="font-serif text-sm font-light uppercase tracking-wide">Structured Silhouette</h4>
                  </div>
                </div>

              </div>
            </div>
          </Container>
        </section>

        {/* --- MAIN INTERACTIVE WORKSPACE --- */}
        <section className="py-20 bg-[#F7F3EE] workspace-trigger">
          <Container>
            <div className="max-w-[1250px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* LEFT FRAME: EDITORIAL FORM COMPONENT WITH INTEGRATED VERTICAL IMAGE */}
              <div className="workspace-reveal lg:col-span-8 bg-white border border-[#1A1A1A]/5 rounded-[24px] overflow-hidden shadow-md relative flex flex-col md:grid md:grid-cols-12">
                
                {/* Left Side: Gorgeous Portrait Image Frame with Deep Parallax */}
                <div className="hidden md:block md:col-span-4 relative overflow-hidden bg-gray-950 border-r border-[#1A1A1A]/5">
                  <img 
                    src="/images/vian_tailoring_bespoke_1779434589378.webp" 
                    alt="Master tailor draping luxury linen fabric suit" 
                    className="parallax-image absolute -top-[10%] left-0 w-full h-[120%] object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  
                  {/* Overlay branding text on portrait */}
                  <div className="absolute bottom-8 left-6 right-6 text-white space-y-2">
                    <span className="font-sans text-[8px] text-[#C8A97E] uppercase tracking-[0.3em] font-bold block">
                      Made in India
                    </span>
                    <p className="font-serif text-sm leading-relaxed font-light text-white/90">
                      "Every fabric selection is an act of tailored intention."
                    </p>
                  </div>
                  
                  {/* Subtle gold line framing in portrait */}
                  <div className="absolute inset-4 border border-[#C8A97E]/20 pointer-events-none" />
                </div>

                {/* Right Side: The Interactive Contact Form */}
                <div className="col-span-12 md:col-span-8 p-8 sm:p-10 relative flex flex-col justify-between">
                  
                  {/* Corner framing lines */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#C8A97E]" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#C8A97E]" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#C8A97E]" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#C8A97E]" />

                  <AnimatePresence mode="wait">
                    {submitted ? (
                      // --- STANDARD CLEAN SUCCESS ENVELOPE ---
                      <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        className="py-12 text-center space-y-8 flex flex-col justify-center h-full"
                      >
                        <div className="w-16 h-16 bg-[#C8A97E]/10 rounded-full flex items-center justify-center mx-auto border border-[#C8A97E]/20 text-[#C8A97E] shadow-sm">
                          <CheckCircle2 className="w-7 h-7" />
                        </div>
                        
                        <div className="space-y-2">
                          <span className="font-mono text-[9px] text-[#C8A97E] uppercase tracking-[0.25em] font-bold">
                            Submission Enqueued
                          </span>
                          <h3 className="font-serif text-2xl font-light text-[#1A1A1A]">
                            Thanks for reaching out! 🎯
                          </h3>
                        </div>

                        <div className="bg-[#F7F3EE]/80 border border-[#1A1A1A]/5 p-6 rounded-lg text-left font-sans text-xs sm:text-sm space-y-3 shadow-inner leading-relaxed text-[#1A1A1A]/80">
                          <p>Your inquiry has been successfully received by our atelier team.</p>
                          <p className="font-semibold text-xs text-[#C8A97E] uppercase tracking-wider">Fastest ways to connect:</p>
                          <div className="font-mono text-[11px] sm:text-xs space-y-1.5 bg-[#1A1A1A]/5 p-3.5 rounded text-[#1A1A1A]/90">
                            <p>📱 WhatsApp: <a href={getWhatsAppHref()} target="_blank" rel="noopener noreferrer" className="underline font-bold">+91 99449 44255</a></p>
                            <p>📧 Email: <a href={getEmailHref()} className="underline font-bold">vlglobalemart@gmail.com</a></p>
                          </div>
                          <p className="text-[11px] italic">We will respond to your queries within 24 hours.</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                          <Button 
                            asAnchor 
                            href={getWhatsAppHref()} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg flex items-center justify-center gap-1.5"
                          >
                            Launch WhatsApp Chat
                          </Button>
                          <Button 
                            asAnchor 
                            href={getEmailHref()} 
                            variant="outline"
                            className="rounded-lg flex items-center justify-center gap-1.5"
                          >
                            Send Official Email
                          </Button>
                        </div>

                        <button
                          onClick={handleResetForm}
                          className="text-[10px] font-sans uppercase tracking-widest text-[#1A1A1A]/50 hover:text-[#C8A97E] underline underline-offset-4 cursor-pointer"
                        >
                          Submit another message
                        </button>
                      </motion.div>
                    ) : (
                      // --- ACTIVE INPUT FORM LAYOUT ---
                      <form onSubmit={handleFormSubmit} className="space-y-5">
                        
                        <div>
                          <span className="font-mono text-[9px] text-[#C8A97E] uppercase tracking-widest block mb-1 font-bold flex items-center gap-1.5">
                            <Clock className="w-3 h-3" /> response Desk
                          </span>
                          <h2 className="font-serif text-xl sm:text-2xl font-light tracking-wide text-[#1A1A1A]">
                            Leave a Message
                          </h2>
                          <p className="font-sans text-[10px] text-[#1A1A1A]/50 mt-1 italic">
                            "Comfort isn't just crafted, it's lived."
                          </p>
                        </div>

                        <div className="space-y-3.5">
                          {/* Name Input */}
                          <div>
                            <label className="font-sans text-[9px] text-[#1A1A1A]/60 uppercase tracking-widest font-bold block mb-1.5">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Rajesh Kumar"
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                              className="w-full bg-[#F7F3EE]/50 border border-[#1A1A1A]/10 px-3.5 py-2.5 text-xs font-sans text-[#1A1A1A] focus:outline-none focus:border-[#C8A97E] transition-all rounded-lg"
                            />
                          </div>

                          {/* WhatsApp & Email Row */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            <div>
                              <label className="font-sans text-[9px] text-[#1A1A1A]/60 uppercase tracking-widest font-bold block mb-1.5">
                                WhatsApp Number *
                              </label>
                              <input
                                type="tel"
                                required
                                placeholder="+91 99449 44255"
                                value={whatsapp}
                                onChange={(e) => setWhatsapp(e.target.value)}
                                className="w-full bg-[#F7F3EE]/50 border border-[#1A1A1A]/10 px-3.5 py-2.5 text-xs font-sans text-[#1A1A1A] focus:outline-none focus:border-[#C8A97E] transition-all rounded-lg"
                              />
                            </div>

                            <div>
                              <label className="font-sans text-[9px] text-[#1A1A1A]/60 uppercase tracking-widest font-bold block mb-1.5">
                                Email ID *
                              </label>
                              <input
                                type="email"
                                required
                                placeholder="viglobalemart@gmail.com"
                                value={emailId}
                                onChange={(e) => setEmailId(e.target.value)}
                                className="w-full bg-[#F7F3EE]/50 border border-[#1A1A1A]/10 px-3.5 py-2.5 text-xs font-sans text-[#1A1A1A] focus:outline-none focus:border-[#C8A97E] transition-all rounded-lg"
                              />
                            </div>
                          </div>

                          {/* Message Box */}
                          <div>
                            <label className="font-sans text-[9px] text-[#1A1A1A]/60 uppercase tracking-widest font-bold block mb-1.5 flex justify-between">
                              <span>Message *</span>
                              {message.length > 0 && <span className="font-mono text-[9px] text-[#C8A97E] font-normal lowercase">{message.length} chars</span>}
                            </label>
                            <textarea
                              required
                              rows={4}
                              placeholder="Please explain your product requests, custom tailoring needs, or order details here..."
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              className="w-full bg-[#F7F3EE]/50 border border-[#1A1A1A]/10 px-3.5 py-2.5 text-xs font-sans text-[#1A1A1A] focus:outline-none focus:border-[#C8A97E] transition-all resize-none rounded-lg"
                            />
                          </div>
                        </div>

                        {/* Submit button */}
                        <div>
                          <Button 
                            type="submit" 
                            variant="primary" 
                            className="w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2"
                            disabled={submitting}
                          >
                            {submitting ? (
                              <>
                                <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                <span>Securing Message...</span>
                              </>
                            ) : (
                              <span>Send Message</span>
                            )}
                          </Button>
                        </div>

                      </form>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* RIGHT FRAME: REAL GOOGLE MAPS BLOCK */}
              <div className="workspace-reveal lg:col-span-4 flex flex-col justify-between">
                <div className="bg-white border border-[#1A1A1A]/5 rounded-[24px] p-6 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between h-full min-h-[400px]">
                  <div className="space-y-1.5 mb-4">
                    <span className="font-sans text-[9px] text-[#C8A97E] uppercase tracking-widest font-bold block">
                      Atelier Location Map
                    </span>
                    <h4 className="font-serif text-lg font-light text-[#1A1A1A]">
                      Explore Our Tiruchengode Hub
                    </h4>
                  </div>
                  
                  <div className="w-full flex-grow rounded-lg overflow-hidden border border-[#1A1A1A]/5 shadow-inner relative min-h-[220px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.567073289053!2d77.8679286!3d11.371087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab07e155555555%3A0x7d6f519572b6ee8!2sV%20L%20Group!5e0!3m2!1sen!2sin!4v1716500000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Google Map V L Group Location"
                      className="absolute inset-0"
                    />
                  </div>
                  
                  <div className="flex justify-between text-[10px] font-sans text-[#1A1A1A]/60 pt-3 border-t border-[#1A1A1A]/5 mt-4">
                    <span>GPS: 11.371087, 77.8701173</span>
                    <span className="font-bold text-[#1A1A1A] uppercase tracking-widest">Namakkal Dist</span>
                  </div>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* --- REUSABLE SHIELD FAQ SECTION --- */}
        <FAQ />

        {/* --- DYNAMIC LINEN DEDICATED CTA SECTION WITH LANDSCAPE SPLIT IMAGE --- */}
        <section className="py-20 bg-[#1A1A1A] text-[#F7F3EE] overflow-hidden relative border-t border-[#F7F3EE]/5">
          <Container>
            <div className="max-w-[1250px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[#1D1D1D] border border-[#C8A97E]/20 rounded-[24px] overflow-hidden shadow-2xl">
              
              {/* Left Side: Stunning Fabric Landscape Image with Parallax Scrolling */}
              <div className="lg:col-span-5 relative min-h-[300px] overflow-hidden">
                <img 
                  src="/images/banner2.webp" 
                  alt="Vian Luxury linen fabric close-up texture details" 
                  className="parallax-image absolute -top-[10%] left-0 w-full h-[120%] object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1D1D1D]/90 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1D] via-transparent to-transparent lg:hidden" />
                <div className="absolute inset-4 border border-[#C8A97E]/10 pointer-events-none" />
              </div>

              {/* Right Side: The CTA text card content */}
              <div className="lg:col-span-7 p-8 sm:p-16 flex flex-col justify-center space-y-6 text-left relative">
                {/* Corner details */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#C8A97E]/30" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#C8A97E]/30" />

                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F7F3EE] tracking-wide leading-tight max-w-xl">
                  Looking for Linen in Your Style?
                </h2>
                
                <div className="w-16 h-[1px] bg-[#C8A97E]/40" />

                <p className="font-sans text-xs sm:text-sm md:text-base text-[#F7F3EE]/70 leading-relaxed font-light max-w-xl">
                  From ready-to-wear styles to personalized tailoring options, find linen shirts designed with natural fabrics and clean everyday detailing.
                </p>

                <div className="flex gap-4 pt-4 flex-wrap">
                  <Button 
                    asAnchor 
                    href="/shop" 
                    variant="primary-light"
                    className="rounded-lg"
                  >
                    Explore Linen Catalog
                  </Button>
                  <Button 
                    asAnchor 
                    href="https://wa.me/919944944255" 
                    variant="outline"
                    className="border-[#C8A97E] text-[#C8A97E] hover:bg-[#C8A97E]/10 rounded-lg"
                  >
                    Request Linen Consultation
                  </Button>
                </div>
              </div>

            </div>
          </Container>
        </section>

      </main>

      <Footer />
    </div>
  );
}