'use client';

import React from 'react';
import { Section, Container } from '@/components/ui';

export default function CompanyLogosMarquee() {
  const row1 = [
    { name: 'Amazon', src: 'https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/logos/amazon-logo.png?w=256' },
    { name: 'Google', src: 'https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/logos/google-logo.png?w=256' },
    { name: 'Microsoft', src: 'https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/logos/microsoft-logo.png?w=256' },
    { name: 'Jupiter', src: 'https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/logos/jupiter-logo.png?w=256' },
    { name: 'Deloitte', src: 'https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/logos/Deloitte-Logo.png?w=256' },
  ];

  const row2 = [
    { name: 'Flipkart', src: 'https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/logos/flipkart-logo.webp?w=256' },
    { name: 'Atlassian', src: 'https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/logos/atlassian-logo.webp?w=256' },
    { name: 'PhonePe', src: 'https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/logos/PhonePe-Logo.webp?w=256' },
    { name: 'Navi', src: 'https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/logos/navi-logo.png?w=256' },
    { name: 'Nvidia', src: 'https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/logos/nvidia-logo.png?w=256' },
  ];

  return (
    <Section id="company-logos" ariaLabel="Trusted by homebuyers from top companies" background="default" spacing="sm" className="overflow-hidden">
      <Container className="text-center mb-8">
        <p className="text-subheader text-text-muted">
          Trusted by homebuyers like you from
        </p>
      </Container>

      <div className="flex flex-col gap-6">
        <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee-infinite flex items-center gap-12 sm:gap-20 shrink-0">
            {row1.concat(row1).concat(row1).map((item, idx) => (
              <div key={`${item.name}-${idx}`} className="flex items-center justify-center h-10 w-32 shrink-0">
                <img
                  src={item.src}
                  alt={item.name}
                  className="max-h-7 max-w-[120px] object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee-infinite flex items-center gap-12 sm:gap-20 shrink-0" style={{ animationDirection: 'reverse' }}>
            {row2.concat(row2).concat(row2).map((item, idx) => (
              <div key={`${item.name}-${idx}`} className="flex items-center justify-center h-10 w-32 shrink-0">
                <img
                  src={item.src}
                  alt={item.name}
                  className="max-h-7 max-w-[120px] object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
