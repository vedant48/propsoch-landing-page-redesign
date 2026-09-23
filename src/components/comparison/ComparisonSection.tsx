'use client';

import React, { useState } from 'react';
import { Section, Container, Tabs } from '@/components/ui';
import {
  Users,
  FileSearch,
  Layers,
  Shield,
  Headphones,
  MapPin,
  Handshake,
  BarChart3,
  User,
  Check,
  Globe,
} from 'lucide-react';

function RealPropsochLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 106 107"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m105.269 34.12-.144-.11-.665-.498-.127-.092L63.916 3.143h-.005l-1.075-.803s-.006 0-.006-.006A13.6 13.6 0 0 0 55.186 0h-.075c-3.057 0-5.877 1-8.153 2.693-.058.04-.11.086-.168.127L5.726 33.576c-.006.006-.012.006-.017.011l-.451.341c-.006.006-.012.006-.017.012q-.65.51-1.231 1.092A13.64 13.64 0 0 0 0 44.71v48.426c0 7.557 6.13 13.688 13.688 13.688h5.593c12.487 0 22.656-10.071 22.725-22.558v-.294C42 83.926 42 83.874 42 83.827s0-.098.006-.144v-.006a17.2 17.2 0 0 0-.468-3.837 17.27 17.27 0 0 0-6.2-9.69 17.38 17.38 0 0 0-10.69-3.691h-.016a2.17 2.17 0 0 1-1.537-.636 2.17 2.17 0 0 1-.636-1.537c0-.6.243-1.144.636-1.537a2.17 2.17 0 0 1 1.537-.636c4.865 0 9.256-1.999 12.41-5.217A17.3 17.3 0 0 0 42 44.82v-.168c.018-.566.26-1.08.636-1.456a2.176 2.176 0 0 1 3.074 0c.393.393.635.936.635 1.537v.012a17.32 17.32 0 0 0 4.952 12.145c.046.046.087.093.133.139a17.3 17.3 0 0 0 12.284 5.084 2.166 2.166 0 0 1 2.172 2.173 2.174 2.174 0 0 1-2.155 2.173h-.011c-1.318 0-2.652.15-3.987.468a17.27 17.27 0 0 0-9.69 6.2 17.35 17.35 0 0 0-3.692 10.504v.098c0 .035.006.064.006.098v.416c.07 12.492 10.233 22.575 22.725 22.575h27.532a13.64 13.64 0 0 0 9.678-4.01 13.64 13.64 0 0 0 4.01-9.678V44.479a13.71 13.71 0 0 0-5.033-10.36m-18.131 9.793h-.006c-.67 0-1.346.075-2.022.237a8.78 8.78 0 0 0-4.917 3.149 8.8 8.8 0 0 0-1.872 5.327v.162a1.104 1.104 0 0 1-1.884.722 1.08 1.08 0 0 1-.318-.705v-.15a8.7 8.7 0 0 0-.237-1.947 8.82 8.82 0 0 0-8.575-6.79h-.005a1.1 1.1 0 0 1-.78-.323 1.08 1.08 0 0 1-.324-.78c0-.306.122-.578.324-.78a1.1 1.1 0 0 1 .78-.324 8.8 8.8 0 0 0 6.298-2.646 8.77 8.77 0 0 0 2.514-6.125v-.092a1.105 1.105 0 0 1 2.207.04v.012c0 1.202.243 2.346.676 3.386a8.9 8.9 0 0 0 1.837 2.78l.07.068a8.8 8.8 0 0 0 6.234 2.583c.306 0 .578.122.78.324.202.196.324.474.324.78a1.116 1.116 0 0 1-1.104 1.092"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ComparisonSection() {
  const [activeTab, setActiveTab] = useState<'brokers' | 'portals'>('brokers');

  const rows = [
    {
      feature: 'Sales practices',
      icon: Users,
      propsoch: 'Consultative, no pressure',
      brokers: 'High pressure sales tactics',
      portals: 'Automated leads sent to multiple brokers',
    },
    {
      feature: 'Transparency',
      icon: FileSearch,
      propsoch: 'Detailed pros & cons',
      brokers: 'Only pros highlighted',
      portals: 'Sponsored listings prioritised over truth',
    },
    {
      feature: 'Project curation',
      icon: Layers,
      propsoch: 'Based on 20+ factors',
      brokers: 'Not curated',
      portals: 'Unverified user ads & outdated listings',
    },
    {
      feature: 'Spam',
      icon: Shield,
      propsoch: 'No spam',
      brokers: 'High spamming until closure',
      portals: 'Number circulated to 10+ external agents',
    },
    {
      feature: 'Post sales support',
      icon: Headphones,
      propsoch: 'End-to-end support',
      brokers: 'None',
      portals: 'Zero post-sales guidance or legal help',
    },
    {
      feature: 'Site visits',
      icon: MapPin,
      propsoch: 'Assisted by on-ground market experts',
      brokers: 'No market expertise',
      portals: 'Self-guided visits without technical input',
    },
    {
      feature: 'Negotiation',
      icon: Handshake,
      propsoch: 'High leverage via insights',
      brokers: 'No insights to leverage',
      portals: 'No negotiation support',
    },
    {
      feature: 'In-depth reports',
      icon: BarChart3,
      propsoch: '2 complimentary Peace of Mind Reports',
      brokers: 'None',
      portals: 'Generic automated algorithmic estimates',
    },
    {
      feature: 'Advisor',
      icon: User,
      propsoch: 'Trained architects',
      brokers: 'Local sales people',
      portals: 'Call-centre telecallers',
    },
  ];

  return (
    <Section id="the-difference" ariaLabel="The Propsoch Difference" background="default" className="overflow-hidden">
      <Container>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6 sm:mb-8">
          <div className="max-w-[680px]">
            <span className="text-eyebrow uppercase text-primary font-bold tracking-[0.12em] block">
              THE PROPSOCH DIFFERENCE
            </span>
            <h2 className="mt-2 text-h2 font-bold text-text-main leading-tight tracking-tight">
              Same home search.<br />
              A completely <span className="text-primary">different experience.</span>
            </h2>
            <p className="mt-2.5 text-body-lg text-text-muted font-normal leading-relaxed">
              See how our independent guidance compares to traditional brokers.
            </p>
          </div>

          <div className="w-full lg:w-auto relative flex flex-col items-stretch lg:items-end gap-3 self-stretch lg:self-end">
            <div className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-2 sm:gap-3">
              <span className="text-label text-text-muted font-medium pl-1 shrink-0">
                Compare with
              </span>
              <Tabs
                ariaLabel="Compare with"
                activeTab={activeTab}
                onChange={(tab) => setActiveTab(tab as 'brokers' | 'portals')}
                tabs={[
                  { id: 'brokers', label: 'Local brokers' },
                  { id: 'portals', label: 'Online portals' },
                ]}
                fullWidth
                className="w-full sm:w-auto"
                tabClassName="px-3.5 sm:px-5 py-2 text-label sm:text-button"
              />
            </div>
          </div>
        </div>

        <div className="lg:hidden space-y-3">
          <div className="grid grid-cols-2 gap-2.5 mb-3.5">
            <div className="rounded-2xl bg-gradient-to-b from-primary-light/50 via-primary-light/25 to-surface-bg border border-primary/25 p-3 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 p-1.5">
                <RealPropsochLogo className="w-full h-full text-primary" />
              </div>
              <div className="min-w-0">
                <span className="text-button font-bold text-text-main leading-tight block truncate">
                  Propsoch
                </span>
                <span className="text-micro font-bold text-primary uppercase tracking-wider block truncate">
                  ON YOUR SIDE
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-surface-white border border-border-main p-3 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-surface-bg flex items-center justify-center text-text-muted shrink-0 border border-border-main">
                {activeTab === 'brokers' ? (
                  <Users className="w-4 h-4 text-text-muted" strokeWidth={2} />
                ) : (
                  <Globe className="w-4 h-4 text-text-muted" strokeWidth={2} />
                )}
              </div>
              <div className="min-w-0">
                <span className="text-button font-bold text-text-main leading-tight block truncate">
                  {activeTab === 'brokers' ? 'Local brokers' : 'Online portals'}
                </span>
                <span className="text-micro font-bold text-text-muted uppercase tracking-wider block truncate">
                  {activeTab === 'brokers' ? 'SALES-DRIVEN' : 'LEAD-DRIVEN'}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {rows.map((row, idx) => {
              const Icon = row.icon;
              const competitorText = activeTab === 'brokers' ? row.brokers : row.portals;
              const competitorName = activeTab === 'brokers' ? 'Brokers' : 'Portals';
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-border-main bg-surface-bg p-3.5"
                >
                  <div className="flex items-center gap-2.5 pb-2.5 border-b border-border-main mb-3">
                    <div className="w-7 h-7 rounded-full bg-surface-white flex items-center justify-center text-text-main shrink-0">
                      <Icon className="w-3.5 h-3.5 text-text-main" strokeWidth={2} />
                    </div>
                    <span className="text-label font-semibold text-text-main">
                      {row.feature}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 items-stretch">
                    <div className="rounded-xl bg-gradient-to-b from-primary-light/40 to-primary-light/15 border border-primary/20 p-3 flex flex-col justify-between">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <div className="w-4 h-4 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="text-micro font-bold text-primary uppercase tracking-wider">
                          Propsoch
                        </span>
                      </div>
                      <p className="text-caption font-medium text-text-main leading-snug">
                        {row.propsoch}
                      </p>
                    </div>

                    <div className="rounded-xl bg-surface-white/80 border border-border-main p-3 flex flex-col justify-between">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <div className="w-4 h-4 rounded-full bg-surface-bg text-text-muted flex items-center justify-center shrink-0 text-micro font-bold border border-border-main">
                          ✕
                        </div>
                        <span className="text-micro font-bold text-text-muted uppercase tracking-wider">
                          {competitorName}
                        </span>
                      </div>
                      <p className="text-caption text-text-muted leading-snug">
                        {competitorText}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="hidden lg:block pt-4 pb-6 px-1">
          <div className="grid grid-cols-12 gap-0 relative items-stretch">

            <div className="col-span-4 flex flex-col justify-between pr-4 pt-6">
              <div className="h-16 pb-4 border-b border-border-main flex items-center">
                <h3 className="text-card-title font-bold text-text-main tracking-tight">
                  What you care about
                </h3>
              </div>
              <div className="divide-y divide-border-main">
                {rows.map((row, idx) => {
                  const Icon = row.icon;
                  return (
                    <div key={idx} className="h-16 flex items-center gap-3.5 pr-2">
                      <div className="w-8 h-8 rounded-full bg-surface-white flex items-center justify-center text-text-main shrink-0">
                        <Icon className="w-4 h-4 text-text-main" strokeWidth={2} />
                      </div>
                      <span className="text-label font-medium text-text-main">
                        {row.feature}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-span-4 rounded-xl bg-primary-light border border-primary/20 p-6 sm:p-8 relative z-20 flex flex-col justify-between shadow-card">
              <div className="h-16 pb-4 border-b border-primary/15 flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center text-primary shrink-0 p-1.5">
                  <RealPropsochLogo className="w-full h-full text-primary" />
                </div>
                <div>
                  <h3 className="text-h4 font-bold text-text-main leading-tight tracking-tight">
                    Propsoch
                  </h3>
                  <span className="text-eyebrow font-bold tracking-wider text-text-subtle uppercase block mt-0.5">
                    INDEPENDENT. UNBIASED. ON YOUR SIDE.
                  </span>
                </div>
              </div>

              <div className="divide-y divide-primary/10">
                {rows.map((row, idx) => (
                  <div key={idx} className="h-16 flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-label font-medium text-text-main">
                      {row.propsoch}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-4 rounded-xl bg-surface-white p-6 sm:p-8 flex flex-col justify-between shadow-card">
              <div className="h-16 pb-4 border-b border-border-main flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-surface-white flex items-center justify-center text-text-muted shrink-0">
                  {activeTab === 'brokers' ? (
                    <Users className="w-5 h-5 text-text-muted" strokeWidth={2} />
                  ) : (
                    <Globe className="w-5 h-5 text-text-muted" strokeWidth={2} />
                  )}
                </div>
                <div>
                  <h3 className="text-h4 font-bold text-text-main leading-tight tracking-tight">
                    {activeTab === 'brokers' ? 'Local brokers' : 'Online portals'}
                  </h3>
                  <span className="text-eyebrow font-bold tracking-wider text-text-subtle uppercase block mt-0.5">
                    {activeTab === 'brokers' ? 'SALES-DRIVEN. LIMITED VIEW.' : 'AUTOMATED. LEAD-DRIVEN.'}
                  </span>
                </div>
              </div>

              <div className="divide-y divide-border-main">
                {rows.map((row, idx) => {
                  const competitorText = activeTab === 'brokers' ? row.brokers : row.portals;
                  return (
                    <div key={idx} className="h-16 flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-surface-white text-text-muted flex items-center justify-center shrink-0 text-xs font-bold">
                        ✕
                      </div>
                      <span className="text-label text-text-muted">
                        {competitorText}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </Container>
    </Section>
  );
}
