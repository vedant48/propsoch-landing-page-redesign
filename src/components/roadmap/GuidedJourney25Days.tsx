'use client';

import React from 'react';
import {
  Calendar,
  Phone,
  FileText,
  Home,
  FileSearch,
  Handshake,
  ArrowRight,
  Check,
  Sparkles,
  Quote,
} from 'lucide-react';
import { Section, Container, Button } from '@/components/ui';

interface GuidedJourneyProps {
  onOpenConsultation?: () => void;
}

export default function GuidedJourney25Days({ onOpenConsultation }: GuidedJourneyProps) {
  const steps = [
    {
      number: '01',
      phase: 'START',
      title: 'A quick free call',
      description: "We walk you through our services, answer any immediate questions and set the stage for what's next.",
      icon: Phone,
      isPrimaryNode: true,
    },
    {
      number: '02',
      phase: 'WEEK 1',
      title: 'Discovery & shortlisting',
      description: 'We curate a list of 10-12 verified properties tailored to your preferences and walk you through them in detail.',
      icon: FileText,
      checklist: ['Discovery form', 'Longlist call'],
      isPrimaryNode: false,
    },
    {
      number: '03',
      phase: 'WEEK 2',
      title: 'Site visits',
      description: "Once we've narrowed down the final 4-5 properties, it's time for seeing and analysing them in person.",
      icon: Home,
      isPrimaryNode: false,
    },
    {
      number: '04',
      phase: 'WEEK 3',
      title: 'Deep dive',
      description: 'Get your “Peace of Mind” report within a day. Everything you need to know about the property, in one place. Along with loan assistance.',
      icon: FileSearch,
      isPrimaryNode: false,
    },
    {
      number: '05',
      phase: 'LAST WEEK',
      title: 'Negotiation & closure',
      description: "Take your time and once you're ready, we'll handle the negotiation and seal the best deal for you. Congratulations! You found your home sweet home!",
      icon: Handshake,
      isPrimaryNode: false,
    },
  ];

  return (
    <Section id="process-section" ariaLabel="Guided Home Buying Process" background="default">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-28 flex flex-col gap-6">
              <div>
                <span className="text-eyebrow uppercase text-primary font-bold tracking-[0.12em] block">
                  GUIDED HOME BUYING
                </span>
                <h2 id="roadmap-title" className="mt-2 text-h2 font-bold text-text-main leading-tight tracking-tight">
                  From &ldquo;where do I start?&rdquo; to <span className="text-primary block sm:inline">&ldquo;this is the one.&rdquo;</span>
                </h2>
                <p className="mt-2.5 text-body-lg text-text-muted font-normal leading-relaxed">
                  A structured, research-backed journey that takes you from your first conversation to a confident home-buying decision.
                </p>
              </div>

              <div className="rounded-xl bg-primary-light border border-primary/20 p-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-stat font-bold text-primary leading-none">
                      25
                    </span>
                    <span className="text-label font-bold text-text-main uppercase tracking-wider">
                      DAYS
                    </span>
                  </div>
                </div>

                <div className="h-9 w-px bg-primary/20 shrink-0" />

                <div className="text-body-sm font-medium text-text-muted leading-snug">
                  <span className="block">Clear steps.</span>
                  <span className="block">Expert guidance.</span>
                  <span className="block">A home you&apos;ll love.</span>
                </div>
              </div>

              <Button
                variant="primary"
                size="lg"
                onClick={onOpenConsultation}
                className="w-full flex items-center justify-center gap-2"
              >
                <span>Book an appointment</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <div className="rounded-xl bg-surface-white border border-border-main p-5 shadow-card">
                <div className="flex items-start gap-3">
                  <Quote className="w-5 h-5 text-primary shrink-0 mt-0.5 fill-primary/20" />
                  <p className="text-body-sm text-text-secondary leading-relaxed">
                    &ldquo;Their scientific and research-based approach to homebuying gave us a lot of comfort and solved our biggest pain point.&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-4 pt-3.5 border-t border-border-main">
                  <img
                    src="https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/testimonial/roshik-shenoy.png"
                    alt="Roshik Shenoy"
                    className="w-10 h-10 rounded-full object-cover border border-border-main shrink-0"
                  />
                  <div className="min-w-0">
                    <span className="text-label font-bold text-text-main block leading-tight truncate">
                      Roshik Shenoy
                    </span>
                    <span className="text-body-sm text-text-muted block mt-0.5 truncate">
                      Partner, Human Capital @ Deloitte
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="relative space-y-4 sm:space-y-5">
              <div className="absolute left-4 sm:left-4.5 top-6 bottom-6 w-0.5 bg-border-main" />

              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="relative flex items-start gap-3.5 sm:gap-5 group">
                    <div
                      className={`relative z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-label font-bold shrink-0 transition-colors ${
                        step.isPrimaryNode
                          ? 'bg-primary text-text-inverse shadow-card'
                          : 'bg-surface-bg border-2 border-border-main text-text-main group-hover:border-primary/60'
                      }`}
                    >
                      {step.number}
                    </div>

                    <div className="flex-1 rounded-lg border border-border-main bg-surface-white hover:border-primary/40 transition-all p-5 shadow-card min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3 min-w-0">
                          <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary shrink-0 p-2.5">
                            <Icon className="w-full h-full text-primary" strokeWidth={2} />
                          </div>
                          <div className="min-w-0">
                            <span className="text-label font-bold text-primary tracking-widest uppercase block">
                              {step.phase}
                            </span>
                            <h3 className="text-h4 font-bold text-text-main leading-tight mt-1">
                              {step.title}
                            </h3>
                          </div>
                        </div>

                        <div className="w-7 h-7 rounded-full bg-surface-white flex items-center justify-center text-text-muted group-hover:text-primary group-hover:bg-primary-light transition-colors shrink-0">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {step.checklist && (
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-3 pt-3 border-t border-border-main">
                          {step.checklist.map((item, cIdx) => (
                            <div key={cIdx} className="flex items-center gap-1.5 text-label font-medium text-text-main">
                              <Check className="w-3.5 h-3.5 text-primary stroke-[3]" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <p className="text-body-sm text-text-muted mt-2.5 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 lg:mt-10 rounded-xl bg-surface-white border border-border-main p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-card relative overflow-hidden">
          <div className="flex items-center gap-3.5 relative z-10">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="text-h4 font-bold text-text-main leading-tight">
                Let&apos;s find your home, the smart way.
              </h4>
              <p className="text-body-sm text-text-muted mt-1">
                Book a free appointment and take the first step today.
              </p>
            </div>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={onOpenConsultation}
            className="shrink-0 flex items-center justify-center gap-2 relative z-10"
          >
            <span>Book an appointment</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
