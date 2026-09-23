'use client';

import React from 'react';
import { Section, Container } from '@/components/ui';

export default function StatsBar() {
  const stats = [
    { number: '8500+', label: 'Hours of Research' },
    { number: '290+', label: 'Builder Partners' },
    { number: '2,500+', label: 'Intelligent Homebuyers' },
    { number: '700+', label: 'Projects Across Bangalore' },
  ];

  return (
    <Section spacing="compact" background="muted" border="both" aria-label="Key statistics">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-stat text-text-main">
                {stat.number}
              </span>
              <span className="text-label text-text-muted mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
