'use client';

import React from 'react';
import { ArrowRight, Home, FileText, Globe, CreditCard, Scale, Map } from 'lucide-react';
import { Section, Container } from '@/components/ui';

const services = [
  {
    icon: Home,
    title: 'Guided Homebuying',
    description:
      'End-to-end architect-led support from search to possession. Trusted by 1000+ intelligent buyers.',
    badge: null,
    href: '#guided-journey',
  },
  {
    icon: FileText,
    title: 'Peace of Mind Report',
    description:
      "India's most comprehensive property analysis — 80+ critical data points covering floorplans, vastu, legal title & liveability.",
    badge: null,
    href: '#brochure-vs-reality',
  },
  {
    icon: Globe,
    title: 'NRI Advisory',
    description:
      'Independent guidance for NRIs buying property in India remotely. Verified data, zero builder bias, full remote coordination.',
    badge: 'New',
    href: '#',
  },
  {
    icon: CreditCard,
    title: 'Home Loans',
    description:
      'Compare lenders, secure the best rate & get end-to-end disbursement guidance without chasing banks yourself.',
    badge: null,
    href: '#',
  },
  {
    icon: Scale,
    title: 'Legal Services',
    description:
      'Complete title due diligence, agreement review & independent legal advisory at pre-negotiated prices.',
    badge: null,
    href: '#',
  },
  {
    icon: Map,
    title: 'Area Intelligence',
    description:
      'Hyperlocal infrastructure reports — connectivity, upcoming metro lines, school zones & appreciation potential.',
    badge: null,
    href: '#',
  },
];

export default function ServicesSection() {
  return (
    <Section id="services" ariaLabel="Our Services" background="dark">
      <Container>
        <div className="mb-10 sm:mb-12">
          <span className="text-eyebrow uppercase text-primary block font-bold tracking-[0.12em]">
            OUR SERVICES
          </span>
          <h2 className="mt-2 text-h2 font-bold text-white leading-tight tracking-tight">
            Everything a buyer needs.{' '}
            <span className="text-primary">Nothing you don&apos;t.</span>
          </h2>
          <p className="mt-3 text-body-lg text-text-subtle leading-relaxed max-w-xl">
            Independent, architect-led services built entirely around you — not the builder.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <a
                key={idx}
                href={service.href}
                className="group flex flex-col gap-4 bg-surface-dark border border-white/10 rounded-xl p-6 hover:border-primary/40 hover:bg-white/5 transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                  </div>
                  {service.badge && (
                    <span className="text-eyebrow font-bold text-primary bg-primary/15 border border-primary/25 px-2.5 py-0.5 rounded-full shrink-0">
                      {service.badge}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5 flex-1">
                  <h3 className="text-h4 font-bold text-white leading-snug tracking-tight group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-body-sm text-text-subtle leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-label font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                </div>
              </a>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
