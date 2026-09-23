'use client';

import React from 'react';
import { Section, Container } from '@/components/ui';

export default function MediaCoverage() {
  return (
    <Section id="media-coverage" ariaLabel="Media Coverage" background="default" spacing="sm">
      <Container>
        <div className="relative flex h-[210px] w-full overflow-hidden rounded-2xl bg-surface-white border border-border-main">
          <div className="relative h-full w-[60%] shrink-0 overflow-hidden" aria-hidden="true">
            <img
              src="https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/bromatkar_home_page/desktop/company_banner_1_web.png?w=1920"
              alt="Media banner 1"
              className="absolute top-0 left-0 h-auto w-[90%] select-none object-contain object-left pointer-events-none"
            />
            <img
              src="https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/bromatkar_home_page/desktop/company_banner_2_web.png?w=1920"
              alt="Media banner 2"
              className="absolute top-[36%] left-0 h-auto w-[100%] select-none object-contain object-left pointer-events-none"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-48 bg-linear-to-r from-transparent to-surface-white" />
          </div>

          <div className="flex flex-1 items-center justify-start pl-2 pr-8 z-20">
            <h2 id="media-title" className="text-header text-text-main">
              Featured in<br />India&apos;s top media
            </h2>
          </div>
        </div>
      </Container>
    </Section>
  );
}
