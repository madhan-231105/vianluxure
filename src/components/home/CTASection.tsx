"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import React from 'react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { FadeUp } from '../animations/FadeUp';
import { Calendar, UserCheck, Clock, BookmarkCheck } from 'lucide-react';


export function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    serviceType: 'Bespoke Suit',
    date: '',
    notes: '',
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.date) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setFormData({ name: '', serviceType: 'Bespoke Suit', date: '', notes: '' });
      }, 5000);
    } else {
      alert('Please fill out your name and desired date to request a consultation.');
    }
  };

  return (
    <section id="bespoke" className="py-24 sm:py-32 bg-[#E8DED1]/15">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left panel: Bespoke Sizing details and luxury image crop */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <FadeUp delay={0.2} y={30} className="relative group">
              <div className="absolute inset-0 bg-[#C8A97E]/10 translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 border border-[#1A1A1A]/5">
                <img
                  src="/images/vian_tailoring_bespoke_1779434589378.png"
                  alt="Tailor's room in private Vian Luxure Sunlit Atelier"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-103"
                />
              </div>
              
              {/* Overlaid location tag */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#F7F3EE]/95 backdrop-blur-md p-5 border border-[#1A1A1A]/5 shadow-sm">
                <span className="font-sans text-[10px] text-[#C8A97E] uppercase tracking-widest font-semibold block mb-1">
                  Atelier Address
                </span>
                <p className="font-serif text-sm text-[#1A1A1A] tracking-wide">
                  Via Montenapoleone 14, Milan
                </p>
                <span className="font-sans text-[9px] text-[#1A1A1A]/40 uppercase tracking-widest block mt-2">
                  Closed on Sundays · By Appointment Only
                </span>
              </div>
            </FadeUp>
          </div>

          {/* Right panel: Sizing / Booking Form */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <FadeUp delay={0.1} y={20}>
              <span className="font-sans text-[11px] sm:text-xs text-[#C8A97E] uppercase tracking-[0.25em] font-semibold block mb-3">
                08 / Request Consultation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#1A1A1A] tracking-normal leading-[1.15] mb-6">
                Let Us Stitch Your Story.
              </h2>
              <p className="font-sans text-xs sm:text-sm md:text-base font-light text-[#1A1A1A]/75 leading-relaxed mb-10 max-w-xl">
                Our bespoke tailoring system ensures whether you are in Milan or ordering online, our artisans sculpt linen templates matched entirely to your personal physical curvatures. Reserve a private atelier consult below.
              </p>
            </FadeUp>

            {success ? (
              <FadeUp delay={0.1} y={15} className="bg-emerald-500/10 border border-emerald-500/20 p-8 text-[#1A1A1A] max-w-lg">
                <div className="flex items-center gap-3 text-emerald-700 font-semibold mb-3">
                  <BookmarkCheck className="w-5 h-5 flex-shrink-0" />
                  <span className="font-serif text-lg">Consultation Enqueued</span>
                </div>
                <p className="font-sans text-sm text-[#1A1A1A]/75 font-light leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Our personal concierge desk in Milan is analyzing slot availability for <strong>{formData.date}</strong>. A private messenger will communicate with you inside 12 hours.
                </p>
              </FadeUp>
            ) : (
              <FadeUp delay={0.25} y={20} className="max-w-xl bg-[#F7F3EE] p-8 border border-[#1A1A1A]/10 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1: Name & Service type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="font-sans text-[10px] text-[#1A1A1A]/60 uppercase tracking-widest font-semibold block mb-2">
                        FullName / Patron
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Johnathan Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#E8DED1]/30 border border-[#1A1A1A]/10 px-4 py-2.5 text-xs font-sans text-[#1A1A1A] focus:outline-none focus:border-[#C8A97E] transition-all"
                      />
                    </div>
                    <div>
                      <label className="font-sans text-[10px] text-[#1A1A1A]/60 uppercase tracking-widest font-semibold block mb-2">
                        Desired Service
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full bg-[#E8DED1]/30 border border-[#1A1A1A]/10 px-4 py-2.5 text-xs font-sans text-[#1A1A1A] focus:outline-none focus:border-[#C8A97E] transition-all"
                      >
                        <option value="Bespoke Suit">Bespoke Suite Consultation</option>
                        <option value="Ready To Wear">Ready To Wear Curations</option>
                        <option value="Custom Duster">Bespoke Linens Swatches</option>
                        <option value="Virtual Fitted">Virtual Sizing Guidance</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 2: Date and notes */}
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="font-sans text-[10px] text-[#1A1A1A]/60 uppercase tracking-widest font-semibold block mb-2">
                        Desiderated Consultation Date
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-[#E8DED1]/30 border border-[#1A1A1A]/10 px-4 py-2.5 text-xs font-sans text-[#1A1A1A] focus:outline-none focus:border-[#C8A97E] transition-all"
                      />
                    </div>
                    <div>
                      <label className="font-sans text-[10px] text-[#1A1A1A]/60 uppercase tracking-widest font-semibold block mb-2">
                        Specific Requests or Proportion Notes (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Double pleated trouser adjustments, sleeve lengths, fabric blends preference..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full bg-[#E8DED1]/30 border border-[#1A1A1A]/10 px-4 py-2.5 text-xs font-sans text-[#1A1A1A] focus:outline-none focus:border-[#C8A97E] transition-all resize-none"
                      />
                    </div>
                  </div>

                  <Button type="submit" variant="primary" className="w-full sm:w-auto">
                    Submit Request
                  </Button>
                </form>
              </FadeUp>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
