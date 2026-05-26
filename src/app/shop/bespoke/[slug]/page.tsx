"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Page: BESPOKE STUDIO (/be_spoke_studio)
 * Updated with "Why Be Spoke?" section from screenshot.
 */

import React, { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { Container } from '@/src/components/common/Container';
import { Button } from '@/src/components/common/Button';
import { StepLayout } from '@/src/components/shop/StepLayout';
import { StickySummary } from '@/src/components/shop/StickySummary';
import { MeasurementForm } from '@/src/components/shop/MeasurementForm';
import { FAQAccordion } from '@/src/components/shop/FAQAccordion';
import { TestimonialSlider } from '@/src/components/shop/TestimonialSlider';
import { products } from '@/src/data/products';
import { ArrowLeft, Check, Sparkles, Ruler, CreditCard, Upload, FileText, Info } from 'lucide-react';
import { FadeUp } from '@/src/components/animations/FadeUp';
import { StaggeredBlurReveal } from '@/src/components/animations/StaggeredBlurReveal';

export default function BespokeStudioPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedFabric, setSelectedFabric] = useState<any>(null);
  const [selectedCollar, setSelectedCollar] = useState('Classic Spread');
  const [selectedButton, setSelectedButton] = useState('Genuine Mother-of-Pearl');
  const [selectedPocket, setSelectedPocket] = useState('No Pocket');
  const [selectedSleeve, setSelectedSleeve] = useState('Full Sleeve');
  const [selectedFit, setSelectedFit] = useState<'Slim Fit' | 'Classic Fit'>('Slim Fit');
  
  const [measurements, setMeasurements] = useState<{ [key: string]: string }>({
    neck: '15.5',
    shoulder: '18.0',
    chest: '40.0',
    waist: '36.0',
    hips: '41.0',
    wrist: '7.25',
    biceps: '14.0',
    sleeve: '34.0',
    shirtLength: '30.0',
    backLength: '30.5'
  });

  const [bespokeNotes, setBespokeNotes] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '', address: '' });
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  useEffect(() => {
    const matchedProduct = products.find(p => p.slug === slug && p.category === 'bespoke');
    if (matchedProduct) setSelectedFabric(matchedProduct);
    else setSelectedFabric(products.find(p => p.category === 'fabrics') || products[0]);
  }, [slug]);

  const steps = ['Fabric Selection', 'Collar Style', 'Button & Accents', 'Pocket Style', 'Sleeve & Cuff', 'Atelier Measurements', 'Stitching Notes', 'Reference Upload', 'Review Blueprint', 'Checkout'];
  const totalSteps = steps.length;

  const bespokeFaqs = [
    { q: "What's Bespoke?", a: "Bespoke tailoring is a fully personalized process where shirts are created around individual body measurements, styling preferences, and selected design details." },
    { q: "Why are Bespoke shirts more expensive?", a: "Bespoke shirts require individual pattern drafting from scratch, premium hand-cut execution, hand-stitched detailing, and hours of artisan craftsmanship, making them a true wardrobe investment." },
    { q: "What is Savile Row?", a: "Savile Row is a street in London famous globally for traditional, world-class bespoke tailoring for men. We adopt these exact high-end standards in our atelier." },
    { q: "Why do you use Savile Row stitching methods?", a: "We use imported premium threads and high-density, single-needle flat felled seams (with 18-22 stitches per inch) to guarantee maximum seam strength, a clean premium drape, and zero puckering after washing." }
  ];

  const bespokeReviews = [
    { name: "Hari", date: "04.02.2026", rating: 3, text: "The Bespoke option helped me get a shirt that actually matched my measurements properly. The overall fit felt much more natural compared to regular shirts." },
    { name: "Praveen", date: "10.1.2026", rating: 4, text: "I liked being able to choose every detail myself, from the collar style to the buttons. The final shirt looked exactly how I wanted." },
    { name: "Arun Kumar", date: "06.04.2026", rating: 3, text: "The fabric quality and stitching were really neat. After uploading my measurements, the shirt fit comfortably without needing additional alterations." },
    { name: "Kavin", date: "27.03.2026", rating: 5, text: "The customization process was simple to follow, and the final output preview helped me understand how the shirt would look before ordering." },
    { name: "Surya", date: "20.03.2026", rating: 4, text: "What I liked most was the freedom to personalize everything. The shirt felt more personal and better suited for my everyday wear." }
  ];

  const handleNext = () => currentStep === totalSteps ? setOrderConfirmed(true) : setCurrentStep(prev => prev + 1);
  const handleBack = () => currentStep > 1 && setCurrentStep(prev => prev - 1);

  return (
    <div className="min-h-screen bg-[#F7F3EE] text-[#1A1A1A] selection:bg-[#C8A97E]/30 overflow-x-hidden">
      <Navbar theme="light" />

      <main className="pt-24 sm:pt-32 pb-16">
        <Container className="mb-6">
          <button onClick={() => router.push('/shop')} className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#1A1A1A]/60 hover:text-[#C8A97E] transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Collection
          </button>
        </Container>

        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold text-[#C8A97E] block flex justify-center items-center gap-2">
              <Ruler className="w-3.5 h-3.5" /> Built Around Your Measurements
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#1A1A1A]">Bespoke Customizer</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <StepLayout currentStep={currentStep} totalSteps={totalSteps} stepNames={steps} onBack={handleBack} onNext={handleNext} canContinue={true}>
                {/* Steps go here (Fabric, Measurements, etc) */}
                <div className="py-20 text-center text-[#1A1A1A]/40 font-sans text-sm">
                  {steps[currentStep-1]} Interface Active
                </div>
              </StepLayout>
            </div>

            <div className="lg:col-span-4">
              <StickySummary fabric={selectedFabric} collar={selectedCollar} buttons={selectedButton} measurements={measurements} mode="bespoke" totalPrice={selectedFabric ? selectedFabric.price + 250 : 450} />
            </div>
          </div>
        </Container>

        {/* SECTION: WHAT IS ARTISAN BESPOKE */}
        <section className="py-24 bg-white border-y border-[#1A1A1A]/5 mt-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-[1100px] mx-auto">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img src="/images/vian_tailoring_bespoke_1779434589378.webp" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#C8A97E] font-bold">The Peak of Customization</span>
                  <h2 className="font-serif text-4xl font-light text-[#1A1A1A]">What is Artisan Bespoke?</h2>
                  <p className="font-sans text-base text-[#1A1A1A]/70 leading-relaxed font-light">
                    Artisan Bespoke is our most comprehensive, high-end tailoring offering. Rather than starting from standard sizing blocks, our master cutters draft a completely unique paper pattern strictly around your 10 postural dimensions.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* NEW SECTION: WHY BE SPOKE? (From Screenshot) */}
        <section className="py-24 bg-white">
          <Container>
            <div className="max-w-[900px] mx-auto space-y-12">
              <div className="space-y-6">
                <FadeUp>
                  <span className="font-sans text-lg text-[#1A1A1A]/50 font-light block mb-2">Why</span>
                  <h2 className="font-serif text-6xl md:text-7xl text-[#1A1A1A] font-light tracking-tight">Be Spoke?</h2>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <p className="font-sans text-base md:text-lg text-[#1A1A1A]/70 leading-relaxed font-light max-w-3xl">
                    Bespoke shirts are created using carefully selected fabrics, precision stitching techniques, structured construction methods, and detailed finishing processes designed for long-term wear and a more personal fit.
                  </p>
                </FadeUp>
              </div>

              <div className="space-y-10 pt-8">
                {[
                  { title: "Measurement-Based Fit", desc: "Designed using individual body measurements for a more natural and balanced fit." },
                  { title: "Premium Fabric Selection", desc: "Selected linen, Giza cotton, and cotton-linen fabrics are chosen for breathable wear, texture, durability, and everyday comfort." },
                  { title: "Precision Construction", desc: "Built using refined stitching methods, imported threads, structured German fusing, and carefully finished detailing." }
                ].map((item, i) => (
                  <FadeUp key={i} delay={0.15 + (i * 0.1)} className="flex items-start gap-6 group">
                    <div className="w-6 h-6 rounded-full border border-[#1A1A1A]/10 flex items-center justify-center shrink-0 mt-1 bg-[#F5F5F3] group-hover:border-[#C8A97E] transition-colors">
                      <Check className="w-3 h-3 text-[#1A1A1A]/40 group-hover:text-[#C8A97E]" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-sans text-base md:text-lg leading-relaxed">
                        <strong className="font-bold text-[#1A1A1A]">{item.title}:</strong>{" "}
                        <span className="text-[#1A1A1A]/70 font-light">{item.desc}</span>
                      </p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* CUSTOMER STORIES */}
        <section className="py-24 bg-[#F5F5F3] border-y border-[#1A1A1A]/5">
          <Container>
            <div className="text-center mb-16">
              <h3 className="font-serif text-3xl font-light">Customer Stories</h3>
            </div>
            <TestimonialSlider testimonials={bespokeReviews} />
          </Container>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-[#F7F3EE]">
          <Container className="max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl font-light">Frequently Asked Questions</h2>
            </div>
            <FAQAccordion items={bespokeFaqs} />
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}