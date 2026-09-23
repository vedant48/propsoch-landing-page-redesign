'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Tabs } from '@/components/ui';
import {
  Users,
  ShieldCheck,
  BarChart3,
  MapPin,
  Building2,
  Scale,
  Wifi,
  ShieldAlert,
  ArrowRight,
} from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultation?: () => void;
}

export default function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  const [selectedCity, setSelectedCity] = useState<'bangalore' | 'mumbai'>('bangalore');

  const handleConsultation = () => {
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      const el = document.getElementById('guided-journey') || document.getElementById('consultation');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-surface-muted text-text-main overflow-hidden pt-4 sm:pt-6 lg:pt-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-primary-light/60 to-transparent blur-3xl -z-10"
      />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-start pb-8 sm:pb-10 lg:pb-12">
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-start z-10 lg:pt-1">
            <span className="text-eyebrow uppercase text-primary font-bold tracking-[0.12em] block">
              INDEPENDENT. UNBIASED. ON YOUR SIDE.
            </span>

            <h1 className="mt-2.5 text-display font-extrabold text-text-main leading-tight tracking-tight">
              Make a smarter<br />
              <span className="text-primary">home-buying</span><br />
              decision.
            </h1>

            <p className="mt-3 text-body-lg text-text-secondary leading-relaxed max-w-[560px] font-normal">
              Independent property guidance that helps you shortlist better homes, uncover hidden risks, and negotiate with confidence.
            </p>

            <div className="flex flex-col gap-2 mt-7">
              <span className="text-label text-text-muted font-medium">
                Select City
              </span>
              <Tabs
                ariaLabel="Select City"
                activeTab={selectedCity}
                onChange={(city) => setSelectedCity(city as 'bangalore' | 'mumbai')}
                tabs={[
                  { id: 'bangalore', label: 'Bengaluru' },
                  { id: 'mumbai', label: 'Mumbai' },
                ]}
                tabClassName="px-7 py-2"
              />
            </div>

            <div className="flex flex-col mt-6">
              <div>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleConsultation}
                  className="group shadow-xs hover:shadow-md"
                >
                  <span>Book a free call</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <p className="mt-3.5 text-caption text-text-secondary">
                Already a member?{' '}
                <Link
                  href="/verify"
                  className="text-primary text-link hover:underline underline-offset-2"
                >
                  Login
                </Link>
              </p>
            </div>

            <div className="hidden lg:flex items-center gap-7 xl:gap-8 mt-2 pt-4 border-t border-border-main">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-surface-white flex items-center justify-center text-text-main">
                  <Users className="w-4 h-4 text-text-main" strokeWidth={2.2} />
                </div>
                <div>
                  <div className="font-bold text-label text-text-main leading-none">1000+</div>
                  <div className="text-caption text-text-muted mt-0.5 whitespace-nowrap">Families Guided</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-surface-white flex items-center justify-center text-text-main">
                  <ShieldCheck className="w-4 h-4 text-text-main" strokeWidth={2.2} />
                </div>
                <div>
                  <div className="font-bold text-label text-text-main leading-none">Independent</div>
                  <div className="text-caption text-text-muted mt-0.5 whitespace-nowrap">Advice</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-surface-white flex items-center justify-center text-text-main">
                  <BarChart3 className="w-4 h-4 text-text-main" strokeWidth={2.2} />
                </div>
                <div>
                  <div className="font-bold text-label text-text-main leading-none">Better</div>
                  <div className="text-caption text-text-muted mt-0.5 whitespace-nowrap">Buying Decisions</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 xl:col-span-6 relative flex flex-col items-center justify-start lg:pt-12">
            <div className="relative w-full max-w-[440px] sm:max-w-[490px] lg:max-w-[540px] flex items-center justify-center min-h-[380px] sm:min-h-[460px]">
              <div
                aria-hidden="true"
                className="absolute inset-0 m-auto w-[88%] sm:w-[86%] h-[84%] sm:h-[88%] bg-hero-peach/70 rounded-[48px] sm:rounded-[60px] -rotate-6 transition-transform"
              />

              <div className="relative z-10 w-[84%] sm:w-[74%] max-w-[390px] pt-1 sm:pt-4 translate-x-3 sm:translate-x-0">
                <img
                  src="/hero-character.png"
                  alt="Propsoch client making smarter home decisions"
                  className="w-full h-auto object-contain select-none drop-shadow-md [mask-image:linear-gradient(to_bottom,black_74%,transparent_98%)]"
                  loading="eager"
                  decoding="async"
                />
              </div>

              <div className="hidden lg:block absolute top-1 xl:top-2 -left-2 xl:-left-6 z-20 -rotate-[4deg] transition-transform hover:rotate-0 hover:scale-105 duration-300">
                <div className="absolute -top-16 left-2 sm:left-4 flex flex-col items-start pointer-events-none select-none z-30">
                  <div className="font-caveat text-2xl xl:text-[26px] text-text-main font-semibold leading-[1.05]">
                    <span>Looks great</span><br />
                    <span>on paper?</span>
                  </div>
                  <svg
                    width="28"
                    height="24"
                    viewBox="0 0 28 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-text-main translate-x-10 -mt-0.5"
                  >
                    <path
                      d="M3 2 C 10 3, 18 8, 18 18"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M13 14 L 18 19 L 22 13"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="bg-surface-white/95 backdrop-blur-xs rounded-lg p-5 shadow-card border border-border-main w-[190px] sm:w-[215px]">
                  <h3 className="font-semibold text-h4 text-text-main mb-2.5 tracking-tight">
                    What brokers show you
                  </h3>

                  <ul className="space-y-2 text-body-sm text-text-secondary">
                    <li className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-error/15 text-error flex items-center justify-center text-micro font-bold shrink-0">
                        ✕
                      </span>
                      <span>Beautiful brochure</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-error/15 text-error flex items-center justify-center text-micro font-bold shrink-0">
                        ✕
                      </span>
                      <span>Selective information</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-error/15 text-error flex items-center justify-center text-micro font-bold shrink-0">
                        ✕
                      </span>
                      <span>Sales-driven advice</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-error/15 text-error flex items-center justify-center text-micro font-bold shrink-0">
                        ✕
                      </span>
                      <span>Hidden risks</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:hidden absolute top-2 left-2 z-20 flex items-end gap-1 pointer-events-none select-none">
                <span className="font-caveat text-xl text-text-main font-semibold whitespace-nowrap">
                  Looks great on paper?
                </span>
                <svg
                  width="26"
                  height="24"
                  viewBox="0 0 34 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-text-main -mb-1 translate-y-1"
                >
                  <path
                    d="M3 4 C 14 3, 24 10, 24 23"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M18 19 L 24 24 L 28 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="absolute -bottom-2 sm:bottom-6 lg:bottom-8 -left-1 sm:left-4 lg:left-auto lg:-right-6 xl:-right-10 z-20 lg:rotate-[3deg] transition-transform hover:rotate-0 duration-300">
                <div className="hidden lg:flex flex-col items-end absolute -top-16 -right-6 xl:-right-12 pointer-events-none select-none z-30">
                  <div className="font-caveat text-2xl xl:text-[26px] text-text-main font-semibold leading-[1.05] text-right">
                    <span>We show</span><br />
                    <span className="whitespace-nowrap">you the reality.</span>
                  </div>
                  <svg
                    width="28"
                    height="24"
                    viewBox="0 0 28 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-text-main -translate-x-6 -mt-0.5"
                  >
                    <path
                      d="M20 2 C 16 8, 8 10, 6 18"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M11 15 L 6 19 L 3 13"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="bg-surface-white rounded-lg p-4 sm:p-5 shadow-card-hover border border-border-main w-[220px] sm:w-[225px] lg:w-[245px]">
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center text-surface-bg shrink-0 p-1">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-label sm:text-h4 text-text-main leading-tight whitespace-nowrap">
                        Property Intelligence
                      </h4>
                      <p className="text-body-sm text-text-muted">
                        A clearer, unbiased view
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1 sm:space-y-1.5 text-caption">
                    <div className="flex items-center justify-between py-0.5">
                      <span className="flex items-center gap-1.5 text-text-secondary">
                        <MapPin className="w-3 h-3 text-text-muted" />
                        <span>Location</span>
                      </span>
                      <span className="bg-success/15 text-success text-badge font-bold px-1.5 py-0.5 rounded-full">
                        92
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-0.5">
                      <span className="flex items-center gap-1.5 text-text-secondary">
                        <Building2 className="w-3 h-3 text-text-muted" />
                        <span>Builder</span>
                      </span>
                      <span className="bg-warning/15 text-warning text-badge font-bold px-1.5 py-0.5 rounded-full">
                        78
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-0.5">
                      <span className="flex items-center gap-1.5 text-text-secondary">
                        <Scale className="w-3 h-3 text-text-muted" />
                        <span>Legal</span>
                      </span>
                      <span className="bg-success/15 text-success text-badge font-bold px-1.5 py-0.5 rounded-full">
                        88
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-0.5">
                      <span className="flex items-center gap-1.5 text-text-secondary">
                        <Wifi className="w-3 h-3 text-text-muted" />
                        <span>Connectivity</span>
                      </span>
                      <span className="bg-success/15 text-success text-badge font-bold px-1.5 py-0.5 rounded-full">
                        90
                      </span>
                    </div>

                    <div className="flex items-center justify-between py-0.5">
                      <span className="flex items-center gap-1.5 text-text-secondary">
                        <ShieldAlert className="w-3 h-3 text-text-muted" />
                        <span>Financial Risk</span>
                      </span>
                      <span className="bg-warning/15 text-warning text-badge font-bold px-1.5 py-0.5 rounded-full">
                        75
                      </span>
                    </div>
                  </div>

                  <div className="bg-success/10 border border-success/20 rounded-xl p-2 sm:p-2.5 mt-2 sm:mt-2.5">
                    <div className="flex items-center gap-1.5 text-success font-bold text-badge">
                      <div className="w-3.5 h-3.5 rounded-full bg-success text-surface-bg flex items-center justify-center shrink-0">
                        <svg viewBox="0 0 16 16" fill="currentColor" className="w-2.5 h-2.5">
                          <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Our Take</span>
                    </div>
                    <p className="text-caption text-text-main font-medium leading-snug mt-0.5">
                      A well-located project with strong long-term potential.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:hidden absolute bottom-3 right-2 z-20 pointer-events-none select-none text-right">
                <div className="relative inline-block">
                  <span className="relative z-10 font-caveat text-lg text-text-main font-semibold">
                    We show you the reality.
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-1 right-0 h-1.5 bg-hero-highlight/80 rounded-full -rotate-1 pointer-events-none"
                  />
                </div>
              </div>
            </div>

            <div className="hidden lg:block absolute -bottom-5 right-2 sm:right-6 select-none pointer-events-none text-right z-20">
              <div className="relative inline-block">
                <span className="relative z-10 font-caveat text-xl text-text-main font-semibold">
                  Make informed decisions, not assumptions.
                </span>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-2 right-0 h-2 bg-hero-highlight/80 rounded-full -rotate-1 pointer-events-none"
                />
              </div>
            </div>
          </div>

          <div className="lg:hidden col-span-1 flex flex-col gap-6 mt-4 pt-6 border-t border-border-main">
            <div className="grid grid-cols-3 gap-2 text-left">
              <div className="flex items-start gap-2">
                <Users className="w-4 h-4 text-text-main mt-0.5 shrink-0" strokeWidth={2.2} />
                <div>
                  <div className="font-bold text-caption sm:text-label text-text-main leading-tight">1000+</div>
                  <div className="text-micro text-text-muted leading-tight">Families Guided</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-text-main mt-0.5 shrink-0" strokeWidth={2.2} />
                <div>
                  <div className="font-bold text-caption sm:text-label text-text-main leading-tight">Independent</div>
                  <div className="text-micro text-text-muted leading-tight">Advice</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <BarChart3 className="w-4 h-4 text-text-main mt-0.5 shrink-0" strokeWidth={2.2} />
                <div>
                  <div className="font-bold text-caption sm:text-label text-text-main leading-tight">Better</div>
                  <div className="text-micro text-text-muted leading-tight">Decisions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
