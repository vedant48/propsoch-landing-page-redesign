'use client';

import React from 'react';
import { Section, Container, Button } from '@/components/ui';

interface SaveSmartSectionProps {
  onOpenConsultation?: () => void;
}

export default function SaveSmartSection({ onOpenConsultation }: SaveSmartSectionProps) {
  const features = [
    {
      title: 'Work with trained architects',
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" className="shrink-0" aria-hidden="true">
          <path
            d="M39.79 34.49c0 2.24 0 3.36-.435 4.216a4 4 0 0 1-1.748 1.748c-.856.436-1.976.436-4.216.436H14.599c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C8.2 37.851 8.2 36.731 8.2 34.49v-1.367c0-1.53 0-2.296.244-2.961a4 4 0 0 1 1.022-1.546c.517-.484 1.22-.784 2.63-1.383l9.4-3.998c.924-.393 1.386-.59 1.864-.667a4 4 0 0 1 1.282 0c.479.078.941.275 1.865.668l9.391 3.997c1.408.6 2.112.899 2.629 1.383a4 4 0 0 1 1.021 1.545c.244.666.244 1.43.244 2.96z"
            fill="var(--color-primary)"
          />
          <path d="M23.993 20.972a7.118 7.118 0 1 0 0-14.236 7.118 7.118 0 0 0 0 14.236" fill="var(--color-primary)" />
          <path
            d="M36.744 33.475a.306.306 0 0 0 0-.436.32.32 0 0 0-.223-.09 2.55 2.55 0 0 1-1.807-.741 2.43 2.43 0 0 1-.722-1.715v-.002q.003-.005.002-.009v-.001q0-.006-.002-.011a.3.3 0 0 0-.092-.207.32.32 0 0 0-.447 0 .3.3 0 0 0-.093.218v.001c0 .336-.067.656-.193.948a2.5 2.5 0 0 1-.546.797 2.55 2.55 0 0 1-1.788.723.32.32 0 0 0-.223.089.3.3 0 0 0-.094.218c0 .17.142.308.316.31h.001q.288-.001.58.065a2.5 2.5 0 0 1 1.41.88c.336.42.532.943.539 1.492v.017l-.002.011.002.013v.003a.313.313 0 0 0 .315.293.316.316 0 0 0 .315-.289l.002-.02-.002-.019v-.001q.003-.27.068-.546a2.45 2.45 0 0 1 .903-1.376 2.57 2.57 0 0 1 1.555-.524h.003a.32.32 0 0 0 .223-.09M24 26.244l-2.781-3.35h5.559zl2.778 7.808L24 37.582l-2.781-3.53z"
            fill="white"
          />
          <path d="m24 26.244-2.781-3.35h5.559zm0 0-2.781 7.808 2.78 3.53 2.779-3.53z" stroke="white" />
        </svg>
      ),
    },
    {
      title: 'Check builders, areas & projects',
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" className="shrink-0" aria-hidden="true">
          <path
            d="M38.611 35.6c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748c-.856.436-1.976.436-4.216.436H15.78c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C9.38 38.96 9.38 37.84 9.38 35.6V16.148c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748c.856-.436 1.976-.436 4.216-.436h16.43c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748c.436.855.436 1.975.436 4.216z"
            fill="var(--color-primary)"
          />
          <path d="M15.074 21.07h15.882m-15.882 4.804h9.53" stroke="white" />
          <path d="M15.79 13.326h16.42a2 2 0 0 0 2-2V8.342a2 2 0 0 0-2-2H15.79a2 2 0 0 0-2 2v2.984a2 2 0 0 0 2 2Z" fill="var(--color-primary)" stroke="white" />
          <path d="M35.103 29.663a1 1 0 0 1 1.794 0l1.753 3.55 3.92.573a1 1 0 0 1 .554 1.706l-2.837 2.763.67 3.902a1 1 0 0 1-1.452 1.054L36 41.368l-3.505 1.843a1 1 0 0 1-1.451-1.054l.669-3.902-2.836-2.763a1 1 0 0 1 .553-1.706l3.92-.573z" fill="var(--color-primary)" stroke="white" />
        </svg>
      ),
    },
    {
      title: 'See pros & cons exhaustively',
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" className="shrink-0" aria-hidden="true">
          <path
            d="M41.4689 35.2983V11.0162C41.4689 9.26193 40.0468 7.83984 38.2925 7.83984H16.0584C14.3041 7.83984 12.8821 9.26193 12.8821 11.0162V26.8977C12.8821 28.652 14.3041 30.074 16.0584 30.074H33.5896C34.5545 30.074 35.4671 30.5127 36.0699 31.2661L39.7719 35.8935C40.3346 36.5969 41.4689 36.1991 41.4689 35.2983Z"
            fill="var(--color-primary)"
          />
          <path
            d="M6.53125 40.8581V16.576C6.53125 14.8217 7.95333 13.3997 9.70756 13.3997H31.9417C33.696 13.3997 35.118 14.8217 35.118 16.576V32.4575C35.118 34.2118 33.696 35.6338 31.9417 35.6338H14.4105C13.4456 35.6338 12.533 36.0725 11.9302 36.8259L8.22823 41.4533C7.66553 42.1567 6.53125 41.7589 6.53125 40.8581Z"
            fill="var(--color-primary)"
          />
          <path d="M12.8828 27.6931H28.7644" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M12.8828 21.3406H22.4117" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Assess livability & financial risks',
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" className="shrink-0" aria-hidden="true">
          <path
            d="M39.79 34.49c0 2.24 0 3.36-.435 4.216a4 4 0 0 1-1.748 1.748c-.856.436-1.976.436-4.216.436H14.599c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C8.2 37.851 8.2 36.731 8.2 34.49v-1.367c0-1.53 0-2.296.244-2.961a4 4 0 0 1 1.022-1.546c.517-.484 1.22-.784 2.63-1.383l9.4-3.998c.924-.393 1.386-.59 1.864-.667a4 4 0 0 1 1.282 0c.479.078.941.275 1.865.668l9.391 3.997c1.408.6 2.112.899 2.629 1.383a4 4 0 0 1 1.021 1.545c.244.666.244 1.43.244 2.96z"
            fill="var(--color-primary)"
          />
          <path d="M23.993 20.972a7.118 7.118 0 1 0 0-14.236 7.118 7.118 0 0 0 0 14.236" fill="var(--color-primary)" />
          <path
            d="M36.744 33.475a.306.306 0 0 0 0-.436.32.32 0 0 0-.223-.09 2.55 2.55 0 0 1-1.807-.741 2.43 2.43 0 0 1-.722-1.715v-.002q.003-.005.002-.009v-.001q0-.006-.002-.011a.3.3 0 0 0-.092-.207.32.32 0 0 0-.447 0 .3.3 0 0 0-.093.218v.001c0 .336-.067.656-.193.948a2.5 2.5 0 0 1-.546.797 2.55 2.55 0 0 1-1.788.723.32.32 0 0 0-.223.089.3.3 0 0 0-.094.218c0 .17.142.308.316.31h.001q.288-.001.58.065a2.5 2.5 0 0 1 1.41.88c.336.42.532.943.539 1.492v.017l-.002.011.002.013v.003a.313.313 0 0 0 .315.293.316.316 0 0 0 .315-.289l.002-.02-.002-.019v-.001q.003-.27.068-.546a2.45 2.45 0 0 1 .903-1.376 2.57 2.57 0 0 1 1.555-.524h.003a.32.32 0 0 0 .223-.09M24 26.244l-2.781-3.35h5.559zl2.778 7.808L24 37.582l-2.781-3.53z"
            fill="white"
          />
          <path d="m24 26.244-2.781-3.35h5.559zm0 0-2.781 7.808 2.78 3.53 2.779-3.53z" stroke="white" />
        </svg>
      ),
    },
    {
      title: 'Lowest price negotiations',
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" className="shrink-0" aria-hidden="true">
          <path
            d="M41.4689 35.2983V11.0162C41.4689 9.26193 40.0468 7.83984 38.2925 7.83984H16.0584C14.3041 7.83984 12.8821 9.26193 12.8821 11.0162V26.8977C12.8821 28.652 14.3041 30.074 16.0584 30.074H33.5896C34.5545 30.074 35.4671 30.5127 36.0699 31.2661L39.7719 35.8935C40.3346 36.5969 41.4689 36.1991 41.4689 35.2983Z"
            fill="var(--color-primary)"
          />
          <path
            d="M6.53125 40.8581V16.576C6.53125 14.8217 7.95333 13.3997 9.70756 13.3997H31.9417C33.696 13.3997 35.118 14.8217 35.118 16.576V32.4575C35.118 34.2118 33.696 35.6338 31.9417 35.6338H14.4105C13.4456 35.6338 12.533 36.0725 11.9302 36.8259L8.22823 41.4533C7.66553 42.1567 6.53125 41.7589 6.53125 40.8581Z"
            fill="var(--color-primary)"
          />
          <path d="M12.8828 27.6931H28.7644" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M12.8828 21.3406H22.4117" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Get rewarded handsomely',
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" className="shrink-0" aria-hidden="true">
          <path
            d="M38.611 35.6c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748c-.856.436-1.976.436-4.216.436H15.78c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C9.38 38.96 9.38 37.84 9.38 35.6V16.148c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748c.856-.436 1.976-.436 4.216-.436h16.43c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748c.436.855.436 1.975.436 4.216z"
            fill="var(--color-primary)"
          />
          <path d="M15.074 21.07h15.882m-15.882 4.804h9.53" stroke="white" />
          <path d="M15.79 13.326h16.42a2 2 0 0 0 2-2V8.342a2 2 0 0 0-2-2H15.79a2 2 0 0 0-2 2v2.984a2 2 0 0 0 2 2Z" fill="var(--color-primary)" stroke="white" />
          <path d="M35.103 29.663a1 1 0 0 1 1.794 0l1.753 3.55 3.92.573a1 1 0 0 1 .554 1.706l-2.837 2.763.67 3.902a1 1 0 0 1-1.452 1.054L36 41.368l-3.505 1.843a1 1 0 0 1-1.451-1.054l.669-3.902-2.836-2.763a1 1 0 0 1 .553-1.706l3.92-.573z" fill="var(--color-primary)" stroke="white" />
        </svg>
      ),
    },
  ];

  return (
    <Section background="dark" spacing="default" aria-labelledby="save-smart-title">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6 sm:gap-8">
            <div>
              <span className="text-eyebrow uppercase text-primary block font-bold tracking-[0.12em]">
                INTELLIGENT SAVINGS
              </span>
              <h2 id="save-smart-title" className="mt-2 text-h2 font-bold text-white leading-tight tracking-tight">
                Choose the smart way to save <br />
                <span className="text-primary">~₹4.78 L &amp; 3 months of your life.</span>
              </h2>
              <p className="mt-2.5 text-body-lg font-normal text-text-subtle leading-relaxed">
                You&apos;re about to make the biggest purchase of your life.<br />
                We make sure you do it intelligently.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  {feat.icon}
                  <span className="text-body-sm sm:text-body text-white font-medium leading-snug">
                    {feat.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg rounded-xl overflow-hidden p-[1px] shadow-card bg-gradient-to-br from-primary/40 to-white/10">
              <div className="bg-surface-dark rounded-[11px] p-6 sm:p-8 flex flex-col justify-between gap-6 border border-white/10">
                <div>
                  <h3 className="text-h4 font-bold text-white">Guided Home Buying</h3>
                  <p className="mt-2 text-body-sm text-text-subtle font-normal leading-relaxed">
                    9 in 10 homebuyers have bought a home via us within 25 days.<br />
                    Trusted by 1000+ buyers from Google, Amazon, Peak XV etc.
                  </p>
                </div>

                <div className="py-2">
                  <span className="text-stat font-bold text-white leading-none">
                    Save ₹4,78,125/-
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  <p className="text-body-sm text-text-subtle font-normal">
                    Experience truly unbiased advisory &amp; get total peace of mind
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Button
                      variant="primary"
                      size="md"
                      onClick={onOpenConsultation}
                      className="w-full sm:flex-1"
                    >
                      Book A Free Call
                    </Button>

                    <a
                      href="#calculator"
                      className="w-full sm:flex-1 h-10 px-4 py-2 border border-white/20 hover:border-white/50 hover:bg-white/5 text-btn text-white rounded-md text-center flex items-center justify-center transition-colors"
                    >
                      See How You Will Save
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
