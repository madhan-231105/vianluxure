"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Brand: VIAN LUXURE (The 2024 Digital Atelier)
 * Component: CLIENT PORTAL MODAL (Over-lay login/signup workflow)
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock, User, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '../common/Button';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ClientPortalModal({ isOpen, onClose }: ClientPortalModalProps) {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  
  // --- FORM INPUT STATES ---
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // --- PROCESS STATES ---
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || (mode === 'signup' && !name)) return;

    setLoading(true);
    setStatusMessage(mode === 'signin' ? 'Authenticating patron credentials...' : 'Creating secure atelier profile...');

    // Simulate database lookup / encryption
    setTimeout(() => {
      setStatusMessage('Encrypting token handshake...');
      
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        
        // Auto-close modal after success message completes
        setTimeout(() => {
          setSuccess(false);
          onClose();
          // Reset fields
          setName('');
          setEmail('');
          setPassword('');
          setMode('signin');
        }, 2200);

      }, 800);
    }, 900);
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    setStatusMessage('Initiating Google secure handshake...');
    
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2200);
    }, 1200);
  };

  // Google SVG Icon Helper
  const GoogleIcon = () => (
    <svg className="w-4 h-4 fill-current mr-2" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
    </svg>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/65 backdrop-blur-md flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 15 }}
            transition={{ type: 'spring', stiffness: 360, damping: 28 }}
            className="bg-[#1D1D1D] text-[#F7F3EE] p-8 sm:p-10 max-w-md w-full relative rounded-2xl border border-[#C8A97E]/30 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Elegant luxury corner details */}
            <div className="absolute -top-[1px] -left-[1px] w-6 h-6 border-t border-l border-[#C8A97E]" />
            <div className="absolute -top-[1px] -right-[1px] w-6 h-6 border-t border-r border-[#C8A97E]" />
            <div className="absolute -bottom-[1px] -left-[1px] w-6 h-6 border-b border-l border-[#C8A97E]" />
            <div className="absolute -bottom-[1px] -right-[1px] w-6 h-6 border-b border-r border-[#C8A97E]" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white/50 hover:text-[#C8A97E] transition-colors cursor-pointer z-10"
              aria-label="Close portal"
            >
              <X className="w-5 h-5" />
            </button>

            <AnimatePresence mode="wait">
              {success ? (
                // --- SUCCESS CONFIRMATION STATE ---
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="text-center py-10 space-y-6 flex flex-col justify-center items-center"
                >
                  <div className="w-16 h-16 bg-[#C8A97E]/10 rounded-full flex items-center justify-center border border-[#C8A97E]/35 text-[#C8A97E] shadow-sm animate-pulse">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] text-[#C8A97E] uppercase tracking-[0.3em] font-bold">
                      Session Authenticated
                    </span>
                    <h3 className="font-serif text-2xl font-light text-white tracking-wide">
                      {mode === 'signin' ? 'Welcome Back, Patron' : 'Welcome to VL Global'}
                    </h3>
                    <p className="font-sans text-xs text-white/60 leading-relaxed font-light max-w-xs mx-auto">
                      {mode === 'signin' 
                        ? 'Your digital styling vault and sizing records have been securely decrypted.' 
                        : 'Your master record slot is active. Prepare your sizing blueprints.'
                      }
                    </p>
                  </div>
                  
                  <div className="text-[10px] font-mono text-[#C8A97E]/60 uppercase tracking-widest pt-2">
                    Redirecting to Atelier...
                  </div>
                </motion.div>
              ) : (
                // --- SIGN-IN / SIGN-UP FORM ---
                <motion.div
                  key={mode}
                  initial={{ opacity: 0, x: mode === 'signin' ? -15 : 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: mode === 'signin' ? 15 : -15 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="space-y-6"
                >
                  {/* Brand & Title */}
                  <div className="text-center space-y-1">
                    <div className="flex justify-center items-center gap-1.5 mb-1.5 select-none">
                      <img src="/images/FooterLogo.svg" alt="VL Global Logo" className="w-6 h-6 object-contain" />
                      <span className="font-serif text-lg font-bold tracking-[0.25em] text-white uppercase leading-none">
                        VL Global
                      </span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-light text-white tracking-wide">
                      {mode === 'signin' ? 'Client Portal' : 'Create Account'}
                    </h3>
                    <p className="font-sans text-[10px] text-white/50 tracking-wide font-light max-w-xs mx-auto leading-relaxed">
                      {mode === 'signin' 
                        ? 'Access your custom sizing, tailoring blueprints, and luxury selections.' 
                        : 'Register your signature profile for bespoke garments and custom swatches.'
                      }
                    </p>
                  </div>

                  {/* Standard Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {mode === 'signup' && (
                      <div className="space-y-1.5">
                        <label className="font-sans text-[9px] text-white/60 uppercase tracking-widest font-bold block">
                          Full Name *
                        </label>
                        <div className="relative flex items-center">
                          <User className="absolute left-3.5 w-4 h-4 text-white/30" />
                          <input
                            type="text"
                            required
                            placeholder="Rajesh Kumar"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 pl-11 pr-4 py-2.5 text-xs font-sans text-white focus:outline-none focus:border-[#C8A97E] transition-all rounded-lg placeholder-white/20"
                          />
                        </div>
                      </div>
                    )}

                    <div className="space-y-1.5">
                      <label className="font-sans text-[9px] text-white/60 uppercase tracking-widest font-bold block">
                        Email ID *
                      </label>
                      <div className="relative flex items-center">
                        <Mail className="absolute left-3.5 w-4 h-4 text-white/30" />
                        <input
                          type="email"
                          required
                          placeholder="patron@gmail.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 pl-11 pr-4 py-2.5 text-xs font-sans text-white focus:outline-none focus:border-[#C8A97E] transition-all rounded-lg placeholder-white/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-sans text-[9px] text-white/60 uppercase tracking-widest font-bold block">
                        Password *
                      </label>
                      <div className="relative flex items-center">
                        <Lock className="absolute left-3.5 w-4 h-4 text-white/30" />
                        <input
                          type="password"
                          required
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 pl-11 pr-4 py-2.5 text-xs font-sans text-white focus:outline-none focus:border-[#C8A97E] transition-all rounded-lg placeholder-white/20"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <Button 
                        type="submit" 
                        variant="primary-light" 
                        className="w-full py-3.5 rounded-lg font-bold flex items-center justify-center gap-2"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <div className="w-3.5 h-3.5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                            <span className="font-mono text-[9px] font-light lowercase text-neutral-800">{statusMessage}</span>
                          </>
                        ) : (
                          <span>{mode === 'signin' ? 'Sign In' : 'Create Account'}</span>
                        )}
                      </Button>
                    </div>
                  </form>

                  {/* Divider Line */}
                  <div className="relative flex items-center justify-center my-4">
                    <div className="absolute inset-x-0 w-full h-[1px] bg-white/10" />
                    <span className="relative font-mono text-[9px] text-white/30 bg-[#1D1D1D] px-3 uppercase tracking-wider">
                      OR SECURE AUTH
                    </span>
                  </div>

                  {/* Google Authenticator */}
                  <button
                    onClick={handleGoogleSignIn}
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 w-full border border-white/10 hover:border-white/20 py-3.5 text-xs font-sans uppercase tracking-widest bg-white/5 hover:bg-white/10 rounded-lg text-white font-bold transition-all cursor-pointer disabled:opacity-50"
                  >
                    <GoogleIcon />
                    <span>Sign in with Google</span>
                  </button>

                  {/* Switch Modes Toggle */}
                  <div className="text-center pt-2">
                    {mode === 'signin' ? (
                      <button
                        onClick={() => setMode('signup')}
                        className="font-sans text-[11px] text-white/50 hover:text-[#C8A97E] font-light cursor-pointer transition-colors"
                      >
                        New to VL Global? <span className="font-semibold text-white group-hover:text-[#C8A97E] underline decoration-dotted underline-offset-4">Create Account</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => setMode('signin')}
                        className="font-sans text-[11px] text-white/50 hover:text-[#C8A97E] font-light cursor-pointer transition-colors"
                      >
                        Already a Patron? <span className="font-semibold text-white group-hover:text-[#C8A97E] underline decoration-dotted underline-offset-4">Sign In</span>
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
