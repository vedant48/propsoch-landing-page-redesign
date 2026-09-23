'use client';

import React from 'react';
import { Clock, FileText, FlaskConical, Users, CheckCircle2 } from 'lucide-react';
import { Section, Container } from '@/components/ui';

export default function TrustAuthoritySection() {
  const pillars = [
    {
      icon: Clock,
      title: '25-day',
      tag: 'FAST-TRACK',
      subtitle: 'Home Buying Journey',
      description: 'Structured property selection',
    },
    {
      icon: FileText,
      title: '80+ Point',
      tag: 'DEEP AUDIT',
      subtitle: 'Property Analysis',
      description: 'Floorplans, vastu & liveability',
    },
    {
      icon: FlaskConical,
      title: 'Save Time',
      tag: 'ZERO BIAS',
      subtitle: '& Costly Errors',
      description: 'Avoid overpriced dead-ends',
    },
    {
      icon: Users,
      title: 'Real People',
      tag: 'ARCHITECTS',
      subtitle: 'Salaried Advisory',
      description: 'Zero broker sales pitch',
    },
  ];

  const companyLogos = [
    { name: 'Google', src: 'https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/logos/google-logo.png?w=256' },
    { name: 'Microsoft', src: 'https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/logos/microsoft-logo.png?w=256' },
    { name: 'Jupiter', src: 'https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/logos/jupiter-logo.png?w=256' },
    { name: 'Deloitte', src: 'https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/logos/Deloitte-Logo.png?w=256' },
    { name: 'Amazon', src: 'https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/logos/amazon-logo.png?w=256' },
    { name: 'Navi', src: 'https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/logos/navi-logo.png?w=256' },
    { name: 'Nvidia', src: 'https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/logos/nvidia-logo.png?w=256' },
    { name: 'Flipkart', src: 'https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/logos/flipkart-logo.webp?w=256' },
    { name: 'Atlassian', src: 'https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/logos/atlassian-logo.webp?w=256' },
    { name: 'PhonePe', src: 'https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/logos/PhonePe-Logo.webp?w=256' },
  ];

  const mediaLogos = [
    {
      name: 'The Hindu',
      src: 'https://cdn.brandfetch.io/idH57NE6od/theme/dark/logo.svg?c=1bxvppn4h2jdok13ahbac9bw5ndX-aE950d',
      tag: 'National Daily',
    },
    {
      name: 'The Economic Times',
      src: 'https://cdn.brandfetch.io/idDvP5_hsq/w/928/h/102/theme/dark/logo.png?c=1bxvppn4h2jdok13ahbac9bw5ndX-aE950d',
      tag: 'Financial Daily',
    },
    {
      name: 'The Times of India',
      src: 'https://cdn.brandfetch.io/id7ncM9RiX/theme/dark/logo.svg?c=1bxvppn4h2jdok13ahbac9bw5ndX-aE950d',
      tag: 'Special Report',
    },
    {
      name: 'CNBC-TV18',
      src: 'https://cdn.brandfetch.io/id5PkSQBPN/theme/light/logo.svg?c=1bxvppn4h2jdok13ahbac9bw5ndX-aE950d',
      tag: 'Market Intelligence',
    },
    {
      name: 'Mint',
      src: 'https://cdn.brandfetch.io/id0JKCMkmg/w/218/h/78/theme/dark/logo.png?c=1bxvppn4h2jdok13ahbac9bw5ndX-aE950d',
      tag: 'Livemint',
    },
    {
      name: 'ThePrint',
      src: 'https://cdn.brandfetch.io/id5CK5W-VF/w/800/h/149/theme/dark/logo.png?c=1bxvppn4h2jdok13ahbac9bw5ndX-aE950d',
      tag: 'In-depth Report',
    },
    {
      name: 'Business Standard',
      src: 'https://cdn.brandfetch.io/id5RIjlmM-/w/341/h/46/theme/dark/logo.png?c=1bxvppn4h2jdok13ahbac9bw5ndX-aE950d',
      tag: 'Markets & Economy',
    },
    {
      name: 'Outlook India',
      src: 'https://cdn.brandfetch.io/idRoK8c8Pq/theme/dark/logo.svg?c=1bxvppn4h2jdok13ahbac9bw5ndX-aE950d',
      tag: 'Special Feature',
    },
    {
      name: 'ANI News',
      src: 'https://cdn.brandfetch.io/idUmKxNBGD/theme/dark/logo.svg?c=1bxvppn4h2jdok13ahbac9bw5ndX-aE950d',
      tag: 'Wire Service',
    },
    {
      name: 'Financial Express',
      src: 'https://cdn.brandfetch.io/idCCt61cvH/theme/dark/logo.svg?c=1bxvppn4h2jdok13ahbac9bw5ndX-aE950d',
      tag: 'Express Group',
    },
    {
      name: 'RealtyNXT',
      src: 'https://cdn.brandfetch.io/id8K7gF82w/theme/dark/logo.svg?c=1bxvppn4h2jdok13ahbac9bw5ndX-aE950d',
      tag: 'PropTech Media',
    },
  ];

  return (
    <Section id="trust-authority" ariaLabel="Trust and Authority" background="subtle" className="overflow-hidden">
      <Container className="space-y-8 sm:space-y-10">
        <div className="rounded-xl bg-surface-white border border-border-main shadow-card">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border-main">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="flex items-start gap-4 p-6 sm:p-8">
                  <div className="w-11 h-11 rounded-full bg-primary-light flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-eyebrow font-bold text-primary uppercase tracking-wider">
                      {pillar.tag}
                    </span>
                    <span className="text-h4 font-bold text-text-main leading-snug tracking-tight mt-0.5">
                      {pillar.subtitle}
                    </span>
                    <span className="text-body-sm text-text-muted mt-1">
                      {pillar.description}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-center">
            <span className="text-eyebrow font-bold text-text-muted tracking-[0.12em] uppercase">
              TRUSTED BY HOMEBUYERS LIKE YOU FROM
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 items-center justify-items-center max-w-5xl mx-auto px-2">
            {companyLogos.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center h-10 w-full max-w-[140px] transition-all"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="max-h-7 max-w-[120px] object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all select-none"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-surface-white border border-border-main p-6 sm:p-8 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col items-start">
              <span className="text-eyebrow font-bold text-primary uppercase tracking-[0.12em] block mb-2">
                PRESS &amp; COVERAGE
              </span>
              <h3 className="text-h3 font-bold text-text-main leading-tight tracking-tight">
                Featured in India&apos;s<br />top financial media
              </h3>
              <p className="text-body-lg text-text-muted mt-2.5 leading-relaxed">
                Recognized as India&apos;s leading buyer-first real estate intelligence &amp; advisory platform.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {mediaLogos.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg bg-surface-white border border-border-main p-3 flex flex-col items-center justify-center text-center h-20 shadow-card hover:border-primary/40 hover:shadow-card-hover transition-all group"
                  >
                    <div className="h-7 w-full flex items-center justify-center">
                      <img
                        src={item.src}
                        alt={item.name}
                        className="max-h-6 max-w-[90px] object-contain select-none group-hover:scale-105 transition-transform"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-body-sm font-medium text-text-muted mt-1 leading-tight truncate max-w-full">
                      {item.tag}
                    </span>
                  </div>
                ))}

                <div className="rounded-lg bg-primary-light border border-primary/20 p-3 flex flex-col items-center justify-center text-center h-20 shadow-card hover:border-primary/40 transition-colors">
                  <span className="font-extrabold text-h3 text-primary leading-tight">
                    100%
                  </span>
                  <span className="text-label font-bold text-text-main leading-tight mt-0.5">
                    Objective Data
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border-main mt-8 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div className="flex items-center gap-2 text-body-sm font-medium text-text-muted">
              <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
              <span>Zero commissions from developers — 100% consumer-aligned real estate representation.</span>
            </div>
            <span className="text-body-sm text-text-subtle text-left sm:text-right shrink-0">
              Updated Q2 2024 Audit Data
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
