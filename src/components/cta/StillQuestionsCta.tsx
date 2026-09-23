'use client';

import React from 'react';
import { Section, Container, Button } from '@/components/ui';

interface StillQuestionsCtaProps {
  onOpenConsultation?: () => void;
}

export default function StillQuestionsCta({ onOpenConsultation }: StillQuestionsCtaProps) {
  return (
    <Section spacing="compact" background="white" aria-labelledby="cta-questions-title">
      <Container>
        <div className="flex w-full flex-col items-center justify-center rounded-xl px-6 sm:px-8 py-6 sm:py-7 text-center lg:max-w-4xl lg:mx-auto lg:flex-row lg:justify-between lg:gap-8 lg:px-12 lg:text-left bg-gradient-to-r from-primary via-primary to-primary-hover shadow-card">
          <img
            src="https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/bromatkar_home_page/mobile/spectacles.png?w=1920"
            alt="Propsoch Spectacles"
            className="h-auto w-full max-w-44 select-none drop-shadow-md"
          />

          <div className="mt-4 lg:mt-0 flex flex-col items-center lg:items-start text-white flex-1">
            <h2 id="cta-questions-title" className="text-h2 font-bold text-white leading-tight tracking-tight">
              Still have questions?
            </h2>
            <p className="mt-1 text-body-lg font-normal text-white/90">
              We are always here for you
            </p>
          </div>

          <div className="mt-4 lg:mt-0">
            <Button
              variant="white"
              size="lg"
              onClick={onOpenConsultation}
              className="whitespace-nowrap"
            >
              Book A Free Call
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
