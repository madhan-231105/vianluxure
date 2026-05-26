"use client";

import React, { useState, useEffect } from 'react';
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
import { formatPrice } from '@/src/lib/utils';
import { ArrowLeft, Check, Sparkles, SlidersHorizontal, Info, ShieldCheck, CreditCard, ChevronRight } from 'lucide-react';

export default function MadeToWearStudioPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  // Customization States
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedFabric, setSelectedFabric] = useState<typeof products[0] | null>(null);
  const [selectedCollar, setSelectedCollar] = useState('Classic Spread');
  const [selectedButton, setSelectedButton] = useState('Mother-of-Pearl Pearl');
  const [selectedPocket, setSelectedPocket] = useState('No Pocket');
  const [selectedSleeve, setSelectedSleeve] = useState('Full Sleeve');
  const [selectedFit, setSelectedFit] = useState<'Slim Fit' | 'Classic Fit'>('Slim Fit');
  
  // Sizing inputs
  const [measurements, setMeasurements] = useState<{ [key: string]: string }>({
    neck: '15.5',
    chest: '40.0',
    waist: '36.0',
    shoulder: '18.0',
    sleeve: '34.0',
    shirtLength: '30.0'
  });

  // User details
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const [orderConfirmed, setOrderConfirmed] = useState(false);

  // Set default fabric based on slug
  useEffect(() => {
    const matchedProduct = products.find(p => p.slug === slug && p.category === 'made-to-wear');
    if (matchedProduct) {
      setSelectedFabric(matchedProduct);
    } else {
      // Default to Normandy Raw Flax or first fabric in lists
      setSelectedFabric(products.find(p => p.category === 'fabrics') || products[0]);
    }
  }, [slug]);

  const handleMeasurementChange = (key: string, val: string) => {
    setMeasurements(prev => ({ ...prev, [key]: val }));
  };

  const handleUserInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  const steps = [
    'Fabric Selection',
    'Collar Selection',
    'Button Selection',
    'Pocket Selection',
    'Sleeve Selection',
    'Fit & Measurements',
    'Design Summary',
    'User Info & Checkout'
  ];

  const totalSteps = steps.length;

  const handleNext = () => {
    if (currentStep === totalSteps) {
      // Complete transaction
      setOrderConfirmed(true);
    } else {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  // Check if current step inputs are valid to allow moving forward
  const canContinue = () => {
    if (currentStep === 1 && !selectedFabric) return false;
    if (currentStep === 6) {
      // Check that all 6 fields have values
      return Object.values(measurements).every(val => val !== '');
    }
    if (currentStep === 8) {
      // Check user details
      return !!(userInfo.name && userInfo.email && userInfo.phone && userInfo.address);
    }
    return true;
  };

  const mtwPrice = selectedFabric ? selectedFabric.price + 180 : 280; // Swatch base + custom cutting studio fees

  const mtwFaqs = [
    { q: "How long does custom Made-To-Wear delivery take?", a: "Each Made-to-Wear shirt is cut, structured, and lock-stitched individually. The standard delivery timeline is 2 to 3 weeks from receipt of payment and design measurements blueprint confirmation." },
    { q: "Can I adjust cuffs and monogram settings?", a: "Yes. Our standard Made-To-Wear blueprints accommodate collar and sleeve cuts. If you require specialized cuffs or custom monogram details, simply write them in our Artisan Bespoke tailoring portal." },
    { q: "What happens if the shirt does not fit correctly?", a: "Vian Luxure provides a complimentary fit assurance check. If your Made-To-Wear shirt requires slight alteration, we provide a lifetime credit or adjustment support at a local tailoring workshop near you." }
  ];

  const mtwReviews = [
    { name: "Aditya Verma", role: "Creative Director", date: "10.05.2026", rating: 5, text: "Designing my own cotton-linen shirt was a seamless experience. The classic spread collar sits perfectly, and slim fit is extremely flattering." },
    { name: "Karan Malhotra", role: "UX Lead", date: "22.04.2026", rating: 5, text: "Excellent dynamic customized steps. The 3D sleeve and button choices matched what arrived exactly. High-quality sewing craftsmanship." }
  ];

  return (
    <div className="min-h-screen bg-[#F7F3EE] text-[#1A1A1A] selection:bg-[#C8A97E]/30 selection:text-[#1A1A1A] overflow-x-hidden">
      <Navbar theme="light" />

      <main className="pt-24 sm:pt-32 pb-16">
        {/* Back navigation */}
        <Container className="mb-6 select-none">
          <button
            onClick={() => router.push('/shop')}
            className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#1A1A1A]/60 hover:text-[#C8A97E] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Atelier Catalog
          </button>
        </Container>

        <Container>
          {/* Immersive Customization Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 select-none">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] font-bold text-[#C8A97E] block flex justify-center items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5" /> Interactive Customization Atelier
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1A1A1A] tracking-wide leading-tight">
              Design Your Own Shirt
            </h1>
            <p className="font-sans text-xs text-[#1A1A1A]/60 leading-relaxed font-light">
              Toggle collars, buttons, pockets, and sleeves. Shape your measurements, and watch your premium shirting outline resolve in real time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
            {/* Left/Center Column: Customization steps slider */}
            <div className="lg:col-span-8 space-y-6">
              
              <AnimatePresence mode="wait">
                {orderConfirmed ? (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white p-8 sm:p-12 border border-[#1A1A1A]/10 text-center rounded-2xl shadow-xl space-y-6"
                  >
                    <div className="w-16 h-16 bg-[#DA291C]/10 text-[#DA291C] rounded-full flex items-center justify-center mx-auto">
                      <Sparkles className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#C8A97E] font-bold block">Order Draft Completed</span>
                      <h2 className="font-serif text-3xl font-light">Your Shirt is Drafted</h2>
                      <p className="font-sans text-sm text-[#1A1A1A]/65 leading-relaxed max-w-md mx-auto font-light">
                        Excellent! Your Made-To-Wear blueprint has been authorized and dispatched to our boutique tailors. We will reach out to you via email shortly.
                      </p>
                    </div>

                    <div className="border border-[#1A1A1A]/5 p-4 max-w-xs mx-auto text-left font-sans text-xs rounded-xl space-y-2.5 bg-[#F7F3EE]/40">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[#C8A97E] font-bold block">Order Sheet summary</span>
                      <div><strong className="font-bold text-[#1a1a1a]/60">Client:</strong> {userInfo.name}</div>
                      <div><strong className="font-bold text-[#1a1a1a]/60">Fabric:</strong> {selectedFabric?.name}</div>
                      <div><strong className="font-bold text-[#1a1a1a]/60">Collar:</strong> {selectedCollar}</div>
                      <div><strong className="font-bold text-[#1a1a1a]/60">Sleeve:</strong> {selectedSleeve}</div>
                      <div><strong className="font-bold text-[#1a1a1a]/60">Fit Scale:</strong> {selectedFit}</div>
                    </div>

                    <button
                      onClick={() => router.push('/shop')}
                      className="px-8 py-3.5 bg-[#1A1A1A] hover:bg-[#DA291C] text-white uppercase text-xs tracking-widest font-bold font-sans rounded-full transition-all duration-300 shadow-md cursor-pointer"
                    >
                      Return to Shop
                    </button>
                  </motion.div>
                ) : (
                  <StepLayout
                    currentStep={currentStep}
                    totalSteps={totalSteps}
                    stepNames={steps}
                    onBack={handleBack}
                    onNext={handleNext}
                    canContinue={canContinue()}
                  >
                    {/* STEP 1: FABRIC SELECTION */}
                    {currentStep === 1 && (
                      <div className="space-y-6">
                        <span className="font-serif text-lg font-light text-[#1A1A1A] block border-b border-[#1A1A1A]/5 pb-2">
                          Select Base Premium Swatch
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {products.filter(p => p.category === 'fabrics').map((fab) => (
                            <div
                              key={fab.id}
                              onClick={() => setSelectedFabric(fab)}
                              className={`p-4 border rounded-xl flex flex-col justify-between h-full cursor-pointer transition-all duration-300 relative group overflow-hidden ${
                                selectedFabric?.id === fab.id
                                  ? 'border-[#C8A97E] ring-1 ring-[#C8A97E]/30 bg-[#C8A97E]/5'
                                  : 'border-[#1A1A1A]/10 bg-white hover:border-[#1A1A1A]/20'
                              }`}
                            >
                              <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-3">
                                <img src={fab.image} alt={fab.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                              </div>
                              <div className="space-y-1">
                                <div className="flex justify-between items-baseline">
                                  <h4 className="font-serif text-sm font-semibold">{fab.name}</h4>
                                  {selectedFabric?.id === fab.id && <Check className="w-3.5 h-3.5 text-[#C8A97E] shrink-0 ml-1.5" />}
                                </div>
                                <span className="font-mono text-[9px] uppercase tracking-wider text-[#1A1A1A]/55 font-bold block">{fab.tag}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* STEP 2: COLLAR SELECTION */}
                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <span className="font-serif text-lg font-light text-[#1A1A1A] block border-b border-[#1A1A1A]/5 pb-2">
                          Choose Collar Profile Cut
                        </span>
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            { name: 'Classic Spread', desc: 'Atelier standard spread cut, suitable for formal and smart-casual styling.', img: '/images/image2.webp' },
                            { name: 'Mandarin Cutaway', desc: 'A minimalist banded neck collar, designed for relaxed, necktie-free comfort.', img: '/images/image4.webp' },
                            { name: 'Wide Cutaway', desc: 'Elegant horizontal collar wings designed to emphasize structured silk tie knots.', img: '/images/image1.webp' },
                            { name: 'Button-down Roll', desc: 'A masculine rolled shape that stays perfectly locked to the chest.', img: '/images/image3.webp' }
                          ].map((collar) => (
                            <div
                              key={collar.name}
                              onClick={() => setSelectedCollar(collar.name)}
                              className={`p-4 border rounded-xl flex items-center gap-4 cursor-pointer transition-all duration-300 relative ${
                                selectedCollar === collar.name
                                  ? 'border-[#C8A97E] bg-[#C8A97E]/5 ring-1 ring-[#C8A97E]/30'
                                  : 'border-[#1A1A1A]/10 bg-white hover:border-[#1A1A1A]/20'
                              }`}
                            >
                              <img src={collar.img} alt={collar.name} className="w-14 h-14 object-cover rounded-lg shrink-0" />
                              <div className="space-y-1">
                                <h4 className="font-serif text-sm font-semibold flex items-center justify-between">
                                  <span>{collar.name}</span>
                                  {selectedCollar === collar.name && <Check className="w-3.5 h-3.5 text-[#C8A97E]" />}
                                </h4>
                                <p className="font-sans text-[11px] text-[#1A1A1A]/60 leading-relaxed font-light">{collar.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* STEP 3: BUTTON SELECTION */}
                    {currentStep === 3 && (
                      <div className="space-y-6">
                        <span className="font-serif text-lg font-light text-[#1A1A1A] block border-b border-[#1A1A1A]/5 pb-2">
                          Toggle Premium Button Shells
                        </span>
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            { name: 'Mother-of-Pearl Pearl', desc: 'Sourced from organic oysters. Gorgeous reflective sheen.', hex: '#FAF5EF' },
                            { name: 'Matte Horn Shell', desc: 'Polished organic dark horn inserts. Sleek vintage styling.', hex: '#2A2A2A' },
                            { name: 'Gold-edge Metallic', desc: 'Hand-finished metallic alloys. Sharp masculine accents.', hex: '#D4AF37' },
                            { name: 'Natural Olive Wood', desc: 'Organic dense olive woods. Perfect casual shirting.', hex: '#B8860B' }
                          ].map((btn) => (
                            <div
                              key={btn.name}
                              onClick={() => setSelectedButton(btn.name)}
                              className={`p-4 border rounded-xl flex items-center gap-4 cursor-pointer transition-all duration-300 relative ${
                                selectedButton === btn.name
                                  ? 'border-[#C8A97E] bg-[#C8A97E]/5 ring-1 ring-[#C8A97E]/30'
                                  : 'border-[#1A1A1A]/10 bg-white hover:border-[#1A1A1A]/20'
                              }`}
                            >
                              <div
                                className="w-10 h-10 rounded-full border border-black/10 shrink-0 shadow-inner flex items-center justify-center font-bold text-[10px]"
                                style={{ backgroundColor: btn.hex }}
                              >
                                :::
                              </div>
                              <div className="space-y-1">
                                <h4 className="font-serif text-sm font-semibold flex items-center justify-between">
                                  <span>{btn.name}</span>
                                  {selectedButton === btn.name && <Check className="w-3.5 h-3.5 text-[#C8A97E]" />}
                                </h4>
                                <p className="font-sans text-[11px] text-[#1A1A1A]/60 leading-relaxed font-light">{btn.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* STEP 4: POCKET SELECTION */}
                    {currentStep === 4 && (
                      <div className="space-y-6">
                        <span className="font-serif text-lg font-light text-[#1A1A1A] block border-b border-[#1A1A1A]/5 pb-2">
                          Pocket Design Specification
                        </span>
                        <div className="grid grid-cols-3 gap-4">
                          {[
                            { name: 'No Pocket', desc: 'Most clean, minimalistic modern menswear look.', icon: '✕' },
                            { name: 'Single Pocket', desc: 'A classic rounded left-side pocket stitch.', icon: '⊔' },
                            { name: 'Double Pockets', desc: 'Symmetrical flap-lock safari pockets.', icon: '⊔ ⊔' }
                          ].map((pock) => (
                            <div
                              key={pock.name}
                              onClick={() => setSelectedPocket(pock.name)}
                              className={`p-5 border rounded-xl flex flex-col justify-center items-center text-center h-full cursor-pointer transition-all duration-300 relative ${
                                selectedPocket === pock.name
                                  ? 'border-[#C8A97E] bg-[#C8A97E]/5 ring-1 ring-[#C8A97E]/30'
                                  : 'border-[#1A1A1A]/10 bg-white hover:border-[#1A1A1A]/20'
                              }`}
                            >
                              <div className="w-12 h-12 bg-[#1A1A1A]/5 rounded-full flex items-center justify-center font-serif text-lg font-light text-[#C8A97E] mb-3">
                                {pock.icon}
                              </div>
                              <h4 className="font-serif text-sm font-semibold flex items-center gap-1.5">
                                <span>{pock.name}</span>
                                {selectedPocket === pock.name && <Check className="w-3.5 h-3.5 text-[#C8A97E] shrink-0" />}
                              </h4>
                              <p className="font-sans text-[10px] text-[#1A1A1A]/65 mt-1 font-light leading-relaxed">{pock.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* STEP 5: SLEEVE SELECTION */}
                    {currentStep === 5 && (
                      <div className="space-y-6">
                        <span className="font-serif text-lg font-light text-[#1A1A1A] block border-b border-[#1A1A1A]/5 pb-2">
                          Sleeve & Cuff Outline
                        </span>
                        <div className="grid grid-cols-3 gap-4">
                          {[
                            { name: 'Full Sleeve', desc: 'Standard single-button rounded cuffs.', label: 'Classic Long' },
                            { name: 'Half Sleeve', desc: 'Pre-rolled smart casual summer sleeve hem.', label: 'Classic Short' },
                            { name: 'French Cuff', desc: 'Square wings designed specifically for cufflinks.', label: 'Artisan Double' }
                          ].map((sl) => (
                            <div
                              key={sl.name}
                              onClick={() => setSelectedSleeve(sl.name)}
                              className={`p-5 border rounded-xl flex flex-col justify-between h-full cursor-pointer transition-all duration-300 relative ${
                                selectedSleeve === sl.name
                                  ? 'border-[#C8A97E] bg-[#C8A97E]/5 ring-1 ring-[#C8A97E]/30'
                                  : 'border-[#1A1A1A]/10 bg-white hover:border-[#1A1A1A]/20'
                              }`}
                            >
                              <div className="font-mono text-[8px] uppercase tracking-wider text-[#C8A97E] font-bold">
                                {sl.label}
                              </div>
                              <div className="my-6">
                                <h4 className="font-serif text-base font-semibold flex items-center justify-between">
                                  <span>{sl.name}</span>
                                  {selectedSleeve === sl.name && <Check className="w-3.5 h-3.5 text-[#C8A97E]" />}
                                </h4>
                                <p className="font-sans text-[10px] text-[#1A1A1A]/65 mt-1 font-light leading-relaxed">{sl.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* STEP 6: FIT & MEASUREMENTS */}
                    {currentStep === 6 && (
                      <div className="space-y-6">
                        <span className="font-serif text-lg font-light text-[#1A1A1A] block border-b border-[#1A1A1A]/5 pb-2">
                          Blueprint Body Measurements
                        </span>
                        <MeasurementForm
                          mode="made-to-wear"
                          values={measurements}
                          onChange={handleMeasurementChange}
                          fit={selectedFit}
                          onFitChange={setSelectedFit}
                        />
                      </div>
                    )}

                    {/* STEP 7: DESIGN SUMMARY */}
                    {currentStep === 7 && (
                      <div className="space-y-6">
                        <span className="font-serif text-lg font-light text-[#1A1A1A] block border-b border-[#1A1A1A]/5 pb-2">
                          Atelier Specification Review
                        </span>
                        
                        <div className="bg-[#1A1A1A]/5 p-6 rounded-xl border border-[#1A1A1A]/5 space-y-4">
                          <p className="font-sans text-xs text-[#1A1A1A]/70 leading-relaxed font-light">
                            Please verify your toggled options. Click <strong>Edit Design</strong> if you need to alter fabric or collar selections, or click <strong>Continue</strong> to lock in your checkout parameters.
                          </p>

                          <div className="grid grid-cols-2 gap-4 text-xs font-sans">
                            <div className="bg-white p-3 rounded-lg border border-[#1A1A1A]/5">
                              <span className="block font-bold text-[#1A1A1A]/50 uppercase tracking-wider text-[9px] mb-1">Fabric Collection</span>
                              <span className="font-semibold text-sm">{selectedFabric?.name}</span>
                            </div>
                            <div className="bg-white p-3 rounded-lg border border-[#1A1A1A]/5">
                              <span className="block font-bold text-[#1A1A1A]/50 uppercase tracking-wider text-[9px] mb-1">Collar Profile</span>
                              <span className="font-semibold text-sm">{selectedCollar}</span>
                            </div>
                            <div className="bg-white p-3 rounded-lg border border-[#1A1A1A]/5">
                              <span className="block font-bold text-[#1A1A1A]/50 uppercase tracking-wider text-[9px] mb-1">Buttons Spec</span>
                              <span className="font-semibold text-sm">{selectedButton}</span>
                            </div>
                            <div className="bg-white p-3 rounded-lg border border-[#1A1A1A]/5">
                              <span className="block font-bold text-[#1A1A1A]/50 uppercase tracking-wider text-[9px] mb-1">Sleeve Cut</span>
                              <span className="font-semibold text-sm">{selectedSleeve}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <button
                            onClick={() => setCurrentStep(1)}
                            className="flex-1 py-3 border border-[#1A1A1A]/10 hover:border-[#1A1A1A] text-[#1A1A1A]/70 hover:text-[#1A1A1A] font-sans text-xs uppercase tracking-widest font-bold rounded-full transition-all cursor-pointer"
                          >
                            Edit Design
                          </button>
                          <button
                            onClick={handleNext}
                            className="flex-1 py-3 bg-[#C8A97E] text-[#1A1A1A] font-sans text-xs uppercase tracking-widest font-bold rounded-full hover:bg-[#b0936b] transition-all cursor-pointer flex items-center justify-center gap-1.5"
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Finalize Design</span>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 8: USER INFO & PAYMENT */}
                    {currentStep === 8 && (
                      <div className="space-y-6">
                        <span className="font-serif text-lg font-light text-[#1A1A1A] block border-b border-[#1A1A1A]/5 pb-2">
                          Client Shipping & Checkout
                        </span>

                        <div className="space-y-4">
                          {/* Shipping Fields */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label className="text-[10px] sm:text-xs font-semibold text-[#1A1A1A]/80 uppercase tracking-wider block">Full Name</label>
                              <input
                                type="text"
                                name="name"
                                required
                                value={userInfo.name}
                                onChange={handleUserInputChange}
                                placeholder="E.g. Arthur Pendragon"
                                className="w-full p-3 bg-white border border-[#1A1A1A]/10 rounded-xl text-sm focus:outline-none focus:border-[#C8A97E] transition-all"
                              />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[10px] sm:text-xs font-semibold text-[#1A1A1A]/80 uppercase tracking-wider block">Email Address</label>
                              <input
                                type="email"
                                name="email"
                                required
                                value={userInfo.email}
                                onChange={handleUserInputChange}
                                placeholder="E.g. arthur@camelot.com"
                                className="w-full p-3 bg-white border border-[#1A1A1A]/10 rounded-xl text-sm focus:outline-none focus:border-[#C8A97E] transition-all"
                              />
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[10px] sm:text-xs font-semibold text-[#1A1A1A]/80 uppercase tracking-wider block">Phone Number</label>
                            <input
                              type="tel"
                              name="phone"
                              required
                              value={userInfo.phone}
                              onChange={handleUserInputChange}
                              placeholder="E.g. +91 98765 43210"
                              className="w-full p-3 bg-white border border-[#1A1A1A]/10 rounded-xl text-sm focus:outline-none focus:border-[#C8A97E] transition-all"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[10px] sm:text-xs font-semibold text-[#1A1A1A]/80 uppercase tracking-wider block">Atelier Shipping Address</label>
                            <textarea
                              name="address"
                              rows={2}
                              required
                              value={userInfo.address}
                              onChange={handleUserInputChange}
                              placeholder="Complete address including state and zip code..."
                              className="w-full p-3 bg-white border border-[#1A1A1A]/10 rounded-xl text-sm focus:outline-none focus:border-[#C8A97E] transition-all"
                            />
                          </div>

                          {/* Stripe integration card block */}
                          <div className="bg-[#1A1A1A] p-4 text-[#F7F3EE] rounded-xl space-y-4 shadow-lg select-none">
                            <div className="flex justify-between items-center border-b border-white/10 pb-3">
                              <span className="font-serif text-xs uppercase tracking-widest text-[#C8A97E]">Credit Card Checkout</span>
                              <CreditCard className="w-5 h-5 text-[#C8A97E]" />
                            </div>
                            <div className="space-y-3 font-mono text-[9px]">
                              <div className="grid grid-cols-3 gap-2">
                                <div className="col-span-2 space-y-1">
                                  <label className="text-[7px] text-white/50 uppercase tracking-widest">Card number</label>
                                  <input
                                    type="text"
                                    placeholder="4111 2222 3333 4444"
                                    className="w-full bg-white/5 border border-white/10 p-2 rounded text-white focus:outline-none focus:border-[#C8A97E]"
                                  />
                                </div>
                                <div className="space-y-1">
                                  <label className="text-[7px] text-white/50 uppercase tracking-widest">CVV</label>
                                  <input
                                    type="password"
                                    maxLength={3}
                                    placeholder="•••"
                                    className="w-full bg-white/5 border border-white/10 p-2 rounded text-white focus:outline-none focus:border-[#C8A97E] text-center"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </StepLayout>
                )}
              </AnimatePresence>
            </div>

            {/* Right Column: Sticky Summary sidebar */}
            <div className="lg:col-span-4">
              <StickySummary
                fabric={selectedFabric ? { name: selectedFabric.name, price: selectedFabric.price, image: selectedFabric.image } : null}
                collar={selectedCollar}
                buttons={selectedButton}
                pocket={selectedPocket}
                sleeve={selectedSleeve}
                measurements={measurements}
                fit={selectedFit}
                totalPrice={mtwPrice}
                mode="made-to-wear"
              />
            </div>
          </div>
        </Container>

        {/* BELOW IMMERSIVE STUDIO: RICH SECTIONS */}
        {/* SECTION 1: WHAT IS MADE TO WEAR */}
        <section className="py-24 bg-white border-y border-[#1A1A1A]/5 mt-28">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-[1100px] mx-auto">
              {/* Left Image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl max-w-sm lg:max-w-md w-full mx-auto select-none">
                <img
                  src="/images/vian_fabric_showcase_1779434571577.webp"
                  alt="VL Made To Wear Studio"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-103"
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute inset-4 border border-white/10 pointer-events-none" />
              </div>

              {/* Right text */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#C8A97E] font-bold block">
                    Atelier Custom Pathway
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#1A1A1A] leading-tight">
                    What is Made-To-Wear?
                  </h2>
                  <p className="font-sans text-base text-[#1A1A1A]/75 leading-relaxed font-light">
                    Made-To-Wear represents the balanced bridge between standardized sizing convenience and bespoke artistic liberty. You select the base fabric and toggle sleeves, pockets, and collars, and our boutique studio cuts and drafts the shirt around standard sizes optimized by custom length specs.
                  </p>
                </div>

                <div className="bg-[#F7F3EE] p-5 border border-[#1A1A1A]/5 rounded-xl space-y-3">
                  <span className="font-mono text-[8px] uppercase tracking-wider text-[#C8A97E] font-bold block">
                    Tailoring Details
                  </span>
                  <p className="font-sans text-xs text-[#1A1A1A]/70 leading-relaxed font-light">
                    This customization is designed to save time while ensuring you get the exact styling elements you prefer. Handcrafted double-needle joints with authentic long-staple threads.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 2: WHY CHOOSE MADE TO WEAR */}
        <section className="py-20 bg-[#F7F3EE]">
          <Container>
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-2 select-none">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#C8A97E] font-bold block">
                  Studio Virtues
                </span>
                <h3 className="font-serif text-3xl font-light text-[#1A1A1A]">
                  Why Choose Made-To-Wear?
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Personalized Collars', desc: 'Toggle cutaway or mandarin wings to suit your personal aesthetic profile.' },
                  { title: 'Premium Buttons', desc: 'Choose Mother-of-pearl or natural wood inserts that contrast beautifully.' },
                  { title: 'Fit Customizations', desc: 'Refine standard sleeve and shoulder settings on classic/slim fit blueprints.' }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-[#1A1A1A]/5 shadow-sm space-y-3">
                    <div className="w-8 h-8 rounded-full bg-[#DA291C]/5 text-[#DA291C] flex items-center justify-center">
                      <Check className="w-4 h-4" />
                    </div>
                    <h4 className="font-serif text-lg font-semibold text-[#1A1A1A]">{item.title}</h4>
                    <p className="font-sans text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* SECTION 3: CUSTOMER STORIES */}
        <section className="py-20 bg-[#F5F5F3] border-y border-[#1A1A1A]/5">
          <Container>
            <div className="space-y-12">
              <div className="text-center space-y-2 select-none">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#C8A97E] font-bold block">
                  Atelier Journal
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#1A1A1A]">
                  Customization Stories
                </h3>
              </div>
              <TestimonialSlider testimonials={mtwReviews} />
            </div>
          </Container>
        </section>

        {/* SECTION 4: FAQ */}
        <section className="py-24 bg-[#F7F3EE]">
          <Container className="max-w-3xl">
            <div className="text-center mb-16 space-y-3 select-none">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#C8A97E] font-bold block">
                Atelier Assistance
              </span>
              <h2 className="font-serif text-3xl font-light text-[#1A1A1A]">
                Made-To-Wear Studio FAQ
              </h2>
            </div>
            <FAQAccordion items={mtwFaqs} />
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
