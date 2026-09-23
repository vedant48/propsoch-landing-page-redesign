'use client';

import React, { useState, useRef, useCallback } from 'react';
import { Ban, CheckCircle2, ArrowRight, Search } from 'lucide-react';
import { Section, Container } from '@/components/ui';

interface BrochureVsRealityProps {
  onOpenConsultation?: () => void;
}

export default function BrochureVsReality({ onOpenConsultation }: BrochureVsRealityProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <Section id="floorplan-audit" ariaLabel="Floorplan and Masterplan Reality Audit" background="default">
      <Container>
        <div className="text-center max-w-[680px] mx-auto mb-6 sm:mb-8">
          <span className="text-eyebrow uppercase text-primary font-bold tracking-[0.12em] block">
            FLOORPLAN &amp; MASTERPLAN REALITY AUDIT
          </span>
          <h2 id="brochure-reality-title" className="mt-2 text-h2 font-bold text-text-main leading-tight tracking-tight">
            Brokers show you the brochure. <br />
            <span className="text-primary">We show you the reality.</span>
          </h2>
          <p className="mt-2.5 text-body-lg text-text-muted font-normal leading-relaxed">
            Uncover layout missteps, internal carpet loss, and amenity shadows before spending your precious weekends travelling for misleading site visits.
          </p>
        </div>

        <div className="bg-surface-white rounded-xl border border-border-main p-6 sm:p-8 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col items-center justify-center">
              <div
                ref={containerRef}
                className="relative aspect-16/10 w-full select-none overflow-hidden rounded-lg cursor-ew-resize border border-border-main bg-surface-dark shadow-inner"
                onMouseDown={(e) => {
                  setIsDragging(true);
                  handleMove(e.clientX);
                }}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchStart={(e) => {
                  setIsDragging(true);
                  handleMove(e.touches[0].clientX);
                }}
                onTouchEnd={() => setIsDragging(false)}
                onTouchMove={handleTouchMove}
              >
                <div
                  className="absolute inset-0 h-full w-full pointer-events-none transition-none"
                  style={{ clipPath: `inset(0px ${100 - sliderPosition}% 0px 0px)` }}
                >
                  <img
                    src="https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/product-page/pom-master-plan-before.png?w=1920"
                    alt="Broker Brochure Master Plan View"
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>

                <div
                  className="absolute inset-0 h-full w-full pointer-events-none transition-none"
                  style={{ clipPath: `inset(0px 0px 0px ${sliderPosition}%)` }}
                >
                  <img
                    src="https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/product-page/pom-master-plan-after.png?w=1920"
                    alt="Propsoch Technical Reality Master Plan with annotations"
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>

                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-surface-bg z-20 pointer-events-none shadow-card"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 rounded-full bg-text-main text-text-inverse px-3 py-1.5 text-btn shadow-card whitespace-nowrap cursor-grab active:cursor-grabbing border border-border-main select-none">
                    <span>‹</span>
                    <span className="font-bold text-eyebrow uppercase tracking-wider">Drag</span>
                    <span>›</span>
                  </div>
                </div>

                <span className="pointer-events-none absolute top-4 left-4 rounded-full bg-surface-white/90 backdrop-blur-md px-3.5 py-1.5 text-label text-text-main shadow-card z-30 border border-border-main">
                  Brochure 3D Render
                </span>

                <span className="pointer-events-none absolute top-4 right-4 rounded-full bg-primary px-3.5 py-1.5 text-label text-text-inverse shadow-card z-30 font-bold inline-flex items-center gap-1.5">
                  <Search className="w-3.5 h-3.5" />
                  Propsoch Reality Audit
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center">
              <h3 className="text-h4 font-bold text-text-main leading-snug">
                Architectural Redline Audit
              </h3>
              <p className="mt-2 text-body-sm text-text-muted font-normal leading-relaxed">
                Our in-house architects dissect every floorplan into usable liveable space versus dead circulation corridors.
              </p>

              <div className="mt-6 rounded-lg bg-surface-white p-5 border border-border-main flex flex-col gap-3">
                <div className="flex items-center gap-2 text-text-main font-semibold text-h4">
                  <Ban className="w-4 h-4 text-error shrink-0" />
                  <span>Common Hidden Traps</span>
                </div>
                <ul className="flex flex-col gap-2 text-body-sm text-text-secondary font-normal leading-snug">
                  <li className="flex items-start gap-2">
                    <span className="text-text-muted mt-0.5">•</span>
                    <span>Dead passage spaces counted as carpet area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-text-muted mt-0.5">•</span>
                    <span>Balconies with direct line of sight into neighbors&apos; master bedrooms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-text-muted mt-0.5">•</span>
                    <span>Transformer yard placement adjacent to podium children&apos;s play zones</span>
                  </li>
                </ul>
              </div>

              <div className="mt-4 rounded-lg bg-success/5 p-5 border border-success/20 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-text-main font-semibold text-h4">
                  <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                  <span>Propsoch Verification Standard</span>
                </div>
                <p className="text-body-sm text-text-secondary font-normal leading-relaxed">
                  Every recommendation comes with an annotated CAD verification sheet and sun-path simulator for peak natural lighting.
                </p>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-bold text-btn transition-colors group cursor-pointer text-left"
                >
                  <span>Request a floorplan audit for your shortlisted home</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
