'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, Shield, Calendar, Clock, Sparkles } from 'lucide-react';
import { City } from '@/types';
import { Button } from '@/components/ui';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCity?: City;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  defaultCity = 'bengaluru',
}: ConsultationModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState<City>(defaultCity);
  const [budget, setBudget] = useState('1.5-3cr');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    const timer = setTimeout(() => closeButtonRef.current?.focus(), 50);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleModalClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity"
    >
      <div className="relative w-full max-w-lg bg-surface-white rounded-xl shadow-card border border-border-main overflow-hidden transform transition-all">
        <div className="h-1.5 w-full bg-linear-to-r from-primary via-primary-hover to-primary" />

        <button
          ref={closeButtonRef}
          onClick={handleModalClose}
          aria-label="Close booking modal"
          className="absolute top-4 right-4 p-2 text-text-disabled hover:text-text-main hover:bg-surface-white rounded-full transition-colors focus:outline-hidden focus:ring-2 focus:ring-focus-ring cursor-pointer"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        <div className="p-6 sm:p-8">
          {!isSubmitted ? (
            <div>
              <div className="flex items-center gap-2 mb-2 text-eyebrow uppercase text-primary bg-primary-light px-2.5 py-1 rounded-full w-max font-bold">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Zero Sales Pressure • 100% Unbiased</span>
              </div>

              <h2 id="modal-headline" className="mt-3 text-h2 font-bold text-text-main leading-tight tracking-tight">
                Book a Free 1-on-1 Advisory Call
              </h2>
              <p className="mt-2 text-body-sm text-text-muted font-normal leading-relaxed">
                Talk directly with an experienced architect from Propsoch. We’ll analyze your criteria and explain our 25-day homebuying roadmap.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="user-name" className="block text-label uppercase text-text-main mb-1 font-bold">
                    Full Name *
                  </label>
                  <input
                    id="user-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Vedant Sharma"
                    className="w-full px-3.5 py-2.5 rounded-md border border-border-main text-text-main text-body-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-hidden transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="user-phone" className="block text-label uppercase text-text-main mb-1 font-bold">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="flex rounded-md border border-border-main overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20">
                    <span className="inline-flex items-center px-3 bg-surface-white text-text-muted text-label border-r border-border-main">
                      +91
                    </span>
                    <input
                      id="user-phone"
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      placeholder="9876543210"
                      className="w-full px-3 py-2 text-text-main text-body-sm outline-hidden"
                    />
                  </div>
                  <p className="mt-1 text-label text-text-muted">Zero spam guarantee. Your number is never shared with third parties.</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="city-select" className="block text-label uppercase text-text-main mb-1 font-bold">
                      Target City
                    </label>
                    <select
                      id="city-select"
                      value={city}
                      onChange={(e) => setCity(e.target.value as City)}
                      className="w-full px-3 py-2.5 rounded-md border border-border-main text-text-main text-body-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-hidden bg-surface-white"
                    >
                      <option value="bengaluru">Bengaluru</option>
                      <option value="mumbai">Mumbai</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget-select" className="block text-label uppercase text-text-main mb-1 font-bold">
                      Budget Range
                    </label>
                    <select
                      id="budget-select"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-md border border-border-main text-text-main text-body-sm focus:border-primary focus:ring-1 focus:ring-primary/20 outline-hidden bg-surface-white"
                    >
                      <option value="75l-1.5cr">₹75 L – ₹1.5 Cr</option>
                      <option value="1.5-3cr">₹1.5 Cr – ₹3.0 Cr</option>
                      <option value="3-5cr">₹3.0 Cr – ₹5.0 Cr</option>
                      <option value="5cr+">₹5.0 Cr+</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-4 h-4 border-2 border-text-inverse border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Calendar className="w-4 h-4" aria-hidden="true" />
                        <span>Confirm Free Consultation</span>
                      </>
                    )}
                  </Button>
                </div>
              </form>

              <div className="mt-4 pt-4 border-t border-border-main flex items-center justify-between text-label text-text-muted">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-emerald-500" aria-hidden="true" />
                  100% Unbiased &amp; Confidential
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-primary" aria-hidden="true" />
                  15-min call with an Architect
                </span>
              </div>
            </div>
          ) : (
            <div className="text-center py-6">
              <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-500">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-h3 font-bold text-text-main">Consultation Confirmed!</h3>
              <p className="mt-2 text-body-sm text-text-muted max-w-sm mx-auto font-normal leading-relaxed">
                Thank you, <span className="font-semibold text-text-main">{name}</span>. An assigned architect will call you at{' '}
                <span className="font-semibold text-text-main">+91 {phone}</span> within 2 business hours.
              </p>

              <div className="mt-6 p-4 bg-surface-white rounded-md text-left border border-border-main text-body-sm text-text-muted space-y-1.5 font-normal leading-relaxed">
                <p className="font-semibold text-text-main">What to expect next:</p>
                <p>• Zero sales pitch; we will review your exact lifestyle and location filters.</p>
                <p>• We prepare an initial longlist of 3 verified projects before the call.</p>
                <p>• Complimentary sample Peace of Mind report sent to your WhatsApp.</p>
              </div>

              <div className="mt-6">
                <Button
                  onClick={handleModalClose}
                  variant="dark"
                  size="md"
                  className="w-full"
                >
                  Done
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
