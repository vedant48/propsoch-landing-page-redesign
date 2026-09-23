'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Section, Container } from '@/components/ui';

export default function MarketOverview() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Section spacing="compact" background="white" border="top" aria-label="Bangalore and Mumbai real estate overview">
      <Container>
        <h2 className="sr-only">Bangalore and Mumbai Real Estate Market Guide</h2>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-start gap-2 py-3 text-body-sm sm:text-body text-text-secondary hover:text-text-main transition-colors cursor-pointer"
          aria-expanded={isOpen}
        >
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-300 text-text-muted ${isOpen ? 'rotate-180' : ''}`}
          />
          <span className="font-normal">
            More details about Bangalore &amp; Mumbai Real estate from Propsoch
          </span>
        </button>

        {isOpen && (
          <div className="flex flex-col gap-8 py-6 text-body-sm text-text-muted border-t border-border-main mt-2 font-normal leading-relaxed">
            <div>
              <h3 className="text-eyebrow uppercase text-primary font-bold tracking-[0.12em] mb-2">Introduction to Propsoch</h3>
              <p>
                Propsoch is an intelligent homebuyer&apos;s concierge and their true friend. Propsoch is designed to eliminate stress and bring transparency to your homebuying journey. Whether you&apos;re exploring an apartment for sale in Bangalore or checking the Mumbai real estate prices before a big decision, we offer personalized property recommendations, verified insights, and end-to-end guidance. Discover handpicked flats for sale in Mumbai, affordable apartments in Bangalore, or luxury homes in top neighborhoods — all tailored for you.
              </p>
            </div>

            <div>
              <h3 className="text-eyebrow uppercase text-primary font-bold tracking-[0.12em] mb-2">Why Propsoch?</h3>
              <p>
                Buy your next home with confidence. Propsoch provides 100% independent advisory with trained architects, exhaustive pros and cons analysis, zero builder bias, zero spam, and scientific negotiation leverage.
              </p>
            </div>

            <div>
              <h3 className="text-eyebrow uppercase text-primary font-bold tracking-[0.12em] mb-2">Top Locations We Cover</h3>
              <p className="mb-2">
                <strong className="text-text-main font-semibold">Bangalore:</strong> Whitefield, HSR Layout, Sarjapur, Electronic City, JP Nagar, Yelahanka, Begur Road, Hosur Road, Marathalli, Bellandur, Koramangala, Indiranagar, Bannerghatta &amp; more.
              </p>
              <p className="mb-2">
                <strong className="text-text-main font-semibold">Mumbai:</strong> Andheri, Bandra, BKC, Khar, Santacruz, Vile Parle, Eastern Suburb, Central Suburbs, Navi Mumbai &amp; beyond.
              </p>
              <p>
                From ready-to-move homes to new launches, find the perfect apartment in Mumbai or an apartment for sale in Bangalore with Propsoch.
              </p>
            </div>

            <div>
              <h3 className="text-eyebrow uppercase text-primary font-bold tracking-[0.12em] mb-2">Compare Before You Commit</h3>
              <p>
                Use our Property Comparison Tool to evaluate up to 3 properties side by side. Get clarity on pricing, builder reputation, timeline, amenities, floor plans, and more. Make an informed decision by comparing properties in Bangalore, understanding Mumbai flat price trends, and more.
              </p>
            </div>

            <div>
              <h3 className="text-eyebrow uppercase text-primary font-bold tracking-[0.12em] mb-2">Join the Propsoch Community</h3>
              <p>
                Looking to buy a house in Bangalore or explore the Mumbai real estate market? Don&apos;t do it alone. Join 1,000+ intelligent families who&apos;ve used Propsoch to find the right apartment for sale in Bangalore, discover flats for sale in Mumbai, and make confident, data-backed decisions.
              </p>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
