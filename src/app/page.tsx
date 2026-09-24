'use client';

import React from 'react';
import LoadingScreen from '@/components/loading/LoadingScreen';
import Navbar from '@/components/header/Navbar';
import HeroSection from '@/components/hero/HeroSection';
import TrustAuthoritySection from '@/components/trust/TrustAuthoritySection';
import ServicesSection from '@/components/services/ServicesSection';
import ComparisonSection from '@/components/comparison/ComparisonSection';
import StatsBar from '@/components/stats/StatsBar';
import CustomerStories from '@/components/testimonials/CustomerStories';
import BrochureVsReality from '@/components/brochure/BrochureVsReality';
import GuidedJourney25Days from '@/components/roadmap/GuidedJourney25Days';
import SaveSmartSection from '@/components/save/SaveSmartSection';
import FaqSection from '@/components/faq/FaqSection';
import MarketOverview from '@/components/overview/MarketOverview';
import Footer from '@/components/footer/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-bg text-text-main selection:bg-primary/20 selection:text-primary">
      
      <LoadingScreen />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-text-main focus:text-text-inverse focus:text-button focus:rounded-lg focus:shadow-lg focus:outline-hidden"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        
        <HeroSection />

        <TrustAuthoritySection />

        <ServicesSection />

        <ComparisonSection />

        <StatsBar />

        <CustomerStories />

        <BrochureVsReality />

        <GuidedJourney25Days />

        <SaveSmartSection />

        <FaqSection />

        <MarketOverview />
      </main>

      <Footer />
    </div>
  );
}
