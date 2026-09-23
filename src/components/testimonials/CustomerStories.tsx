'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Section, Container } from '@/components/ui';

interface Story {
  id: string;
  number: string;
  name: string;
  verticalTitle: string;
  role: string;
  location: string;
  quote: string;
  youtubeId: string;
  tag: string;
}

const stories: Story[] = [
  {
    id: 'bharat-neerja',
    number: '1',
    name: 'Bharat Singh & Neerja Ahuja',
    verticalTitle: 'Bharat & Neerja',
    role: 'VC Investor & Founder',
    location: 'Sarjapur, Bengaluru',
    quote: 'They helped me say no to impulse buying and yes to framework-based buying with zero broker pressure.',
    youtubeId: 'OZMT9fgbH_c',
    tag: 'Framework Buying',
  },
  {
    id: 'ankita',
    number: '2',
    name: 'Dr. Ankita Srivastava',
    verticalTitle: 'Dr. Ankita Srivastava',
    role: 'Healthcare Leader & Homebuyer',
    location: 'Whitefield, Bengaluru',
    quote: 'The Peace of Mind inspection report uncovered structural and legal points no agent had ever mentioned.',
    youtubeId: 'Nid3XKVEApg',
    tag: 'Technical Audit',
  },
  {
    id: 'narasimham',
    number: '3',
    name: 'D.L. Narasimham',
    verticalTitle: 'D.L. Narasimham',
    role: 'VP of Engineering',
    location: 'North Bengaluru',
    quote: 'Having an unbiased technical expert in your corner saves months of anxiety and lakhs in negotiation.',
    youtubeId: 'XrsfHS7tCN0',
    tag: 'Unbiased Advisory',
  },
  {
    id: 'roshik',
    number: '4',
    name: 'Roshik Shenoy',
    verticalTitle: 'Roshik Shenoy',
    role: 'Senior Consultant @ Deloitte',
    location: 'Outer Ring Road, Bengaluru',
    quote: 'Data-driven layout analysis showed us which 3BHK actually had 20% more usable carpet area.',
    youtubeId: 'OZMT9fgbH_c',
    tag: 'Layout & Space Analysis',
  },
  {
    id: 'priya-tanmay',
    number: '5',
    name: 'Priya & Tanmay Kulkarni',
    verticalTitle: 'Priya & Tanmay',
    role: 'Product Leaders in Tech',
    location: 'Bellandur, Bengaluru',
    quote: 'They treated our home purchase like a serious capital allocation, not an aggressive sales quota.',
    youtubeId: 'Nid3XKVEApg',
    tag: 'Zero Sales Bias',
  },
  {
    id: 'sriram-meenakshi',
    number: '6',
    name: 'Sriram & Meenakshi',
    verticalTitle: 'Sriram & Meenakshi',
    role: 'IT Directors & NRI Buyers',
    location: 'Devanahalli, Bengaluru',
    quote: 'Managing an NRI purchase remotely was seamless because of Propsoch ground truth verification.',
    youtubeId: 'XrsfHS7tCN0',
    tag: 'NRI Ground Check',
  },
];

export default function CustomerStories() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveVideoId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (activeVideoId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeVideoId]);

  const handleSelectStory = (idx: number) => {
    setActiveIdx(idx);
    if (mobileScrollRef.current) {
      const cards = mobileScrollRef.current.children;
      if (cards[idx]) {
        cards[idx].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  };

  const handleMobileScroll = () => {
    if (mobileScrollRef.current) {
      const scrollLeft = mobileScrollRef.current.scrollLeft;
      const firstCard = mobileScrollRef.current.firstElementChild as HTMLElement;
      if (firstCard) {
        const itemWidth = firstCard.clientWidth + 16;
        const newIdx = Math.round(scrollLeft / itemWidth);
        if (newIdx >= 0 && newIdx < stories.length && newIdx !== activeIdx) {
          setActiveIdx(newIdx);
        }
      }
    }
  };

  const handlePrev = () => {
    const nextIdx = activeIdx === 0 ? stories.length - 1 : activeIdx - 1;
    handleSelectStory(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = activeIdx === stories.length - 1 ? 0 : activeIdx + 1;
    handleSelectStory(nextIdx);
  };

  return (
    <Section id="customer-stories" ariaLabel="Customer stories" background="default">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-4 xl:col-span-3 flex flex-col justify-between self-stretch">
            <div>
              <span className="text-eyebrow uppercase text-primary font-bold tracking-[0.12em] block">
                CUSTOMER STORIES
              </span>
              <h2 className="mt-2 text-h2 font-bold text-text-main leading-tight tracking-tight">
                Real stories from people who&apos;ve been there, bought that.
              </h2>
              <p className="mt-2.5 text-body-lg text-text-muted font-normal leading-relaxed">
                From complex market comparisons to finding verified, zero-compromise homes - our advisory helps buyers make confident decisions with 100% peace of mind.
              </p>
            </div>

            <div className="mt-8 lg:mt-auto pt-6 border-t border-border-main">
              <a
                href="https://www.youtube.com/@Propsoch"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-link text-text-main hover:text-primary transition-colors"
              >
                <span>Watch all stories on YouTube</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 xl:col-span-9">
            <div className="hidden lg:flex border border-border-main bg-surface-white rounded-xl overflow-hidden shadow-card h-[560px] w-full divide-x divide-border-main">
              {stories.map((story, idx) => {
                const isExpanded = activeIdx === idx;

                if (isExpanded) {
                  return (
                    <div
                      key={story.id}
                      className="flex-1 min-w-0 flex flex-col h-full bg-surface-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    >
                      <div className="relative h-[340px] w-full overflow-hidden bg-surface-white group">
                        <img
                          src={`https://img.youtube.com/vi/${story.youtubeId}/hqdefault.jpg`}
                          alt={`Customer story thumbnail for ${story.name}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute top-4 left-4 z-10 bg-surface-white/90 backdrop-blur-md px-3 py-1 rounded-full text-label text-text-main shadow-card">
                          {story.tag}
                        </div>
                        <button
                          type="button"
                          onClick={() => setActiveVideoId(story.youtubeId)}
                          className="absolute inset-0 flex items-center justify-center bg-black/25 hover:bg-black/35 transition-colors cursor-pointer group/btn"
                          aria-label={`Watch video of ${story.name}`}
                        >
                          <div className="w-16 h-16 rounded-full bg-primary hover:bg-primary-hover text-text-inverse flex items-center justify-center shadow-card-hover group-hover/btn:scale-110 transition-transform">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                              <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                          </div>
                        </button>
                      </div>

                      <div className="p-6 xl:p-8 flex flex-col justify-between flex-1 relative bg-surface-white">
                        <div>
                          <div className="flex items-baseline justify-between gap-4">
                            <h3 className="text-h4 font-bold text-text-main">
                              {story.name}
                            </h3>
                            <span className="text-label text-primary px-2.5 py-0.5 rounded-full bg-primary-light">
                              {story.location}
                            </span>
                          </div>
                          <p className="text-body-sm text-text-muted mt-1">
                            {story.role}
                          </p>
                          <p className="mt-3 text-body-sm text-text-secondary line-clamp-2">
                            {story.quote}
                          </p>
                          <button
                            type="button"
                            onClick={() => setActiveVideoId(story.youtubeId)}
                            className="mt-3 inline-flex items-center gap-1.5 text-btn text-text-main hover:text-primary underline underline-offset-4 cursor-pointer transition-colors"
                          >
                            <span>Watch story</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>

                        <div className="mt-4 flex items-end">
                          <span className="text-stat text-text-subtle/30 leading-none select-none">
                            {story.number}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <button
                    key={story.id}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    onMouseEnter={() => setActiveIdx(idx)}
                    className="w-14 xl:w-16 flex-none h-full bg-surface-white hover:bg-surface-active flex flex-col items-center justify-between py-6 cursor-pointer select-none transition-all duration-300 group"
                    aria-label={`Open story ${story.number}: ${story.name}`}
                  >
                    <div className="text-text-muted group-hover:text-primary group-hover:rotate-90 transition-all duration-300 text-h4 font-light leading-none">
                      +
                    </div>

                    <div className="[writing-mode:vertical-rl] rotate-180 text-label text-text-secondary group-hover:text-primary transition-colors whitespace-nowrap overflow-hidden text-ellipsis max-h-[300px]">
                      {story.verticalTitle}
                    </div>

                    <div className="text-stat text-text-subtle/30 group-hover:text-text-main transition-colors leading-none">
                      {story.number}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="block lg:hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
                  {stories.map((story, idx) => (
                    <button
                      key={story.id}
                      type="button"
                      onClick={() => handleSelectStory(idx)}
                      className={`px-3 py-1.5 rounded-full text-label transition-all cursor-pointer ${
                        activeIdx === idx
                          ? 'bg-primary text-text-inverse shadow-card'
                          : 'bg-surface-white text-text-muted hover:bg-border-main'
                      }`}
                    >
                      {story.number}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 shrink-0 ml-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous customer story"
                    className="p-2 rounded-full border border-border-main text-text-main hover:border-primary hover:text-primary transition-colors cursor-pointer"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next customer story"
                    className="p-2 rounded-full border border-border-main text-text-main hover:border-primary hover:text-primary transition-colors cursor-pointer"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>

              <div
                ref={mobileScrollRef}
                onScroll={handleMobileScroll}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 pt-1"
              >
                {stories.map((story, idx) => (
                  <div
                    key={story.id}
                    className={`w-[84vw] max-w-[340px] shrink-0 snap-center rounded-lg border transition-all duration-300 bg-surface-white overflow-hidden shadow-card flex flex-col ${
                      activeIdx === idx
                        ? 'border-primary/50 ring-2 ring-primary/15'
                        : 'border-border-main'
                    }`}
                  >
                    <div className="relative aspect-video w-full overflow-hidden bg-surface-white group">
                      <img
                        src={`https://img.youtube.com/vi/${story.youtubeId}/hqdefault.jpg`}
                        alt={`Story thumbnail for ${story.name}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-surface-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-label text-text-main shadow-card">
                        {story.tag}
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveVideoId(story.youtubeId)}
                        className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer"
                        aria-label={`Watch video of ${story.name}`}
                      >
                        <div className="w-12 h-12 rounded-full bg-primary text-text-inverse flex items-center justify-center shadow-card-hover">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5">
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                        </div>
                      </button>
                    </div>

                    <div className="p-5 flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-h4 font-bold text-text-main">
                            {story.name}
                          </h3>
                          <span className="text-label text-primary px-2 py-0.5 rounded-full bg-primary-light">
                            {story.location}
                          </span>
                        </div>
                        <p className="text-body-sm text-text-muted mt-1">
                          {story.role}
                        </p>
                        <p className="mt-2.5 text-body-sm text-text-secondary line-clamp-3">
                          {story.quote}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-border-main flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setActiveVideoId(story.youtubeId)}
                          className="inline-flex items-center gap-1 text-btn text-primary underline underline-offset-4 cursor-pointer"
                        >
                          <span>Watch story</span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </button>
                        <span className="text-stat text-text-subtle/30 leading-none">
                          {story.number}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {activeVideoId && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 animate-in fade-in duration-200"
          onClick={() => setActiveVideoId(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-card aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideoId(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 hover:bg-black text-text-inverse transition-colors cursor-pointer"
              aria-label="Close video modal"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?autoplay=1`}
              title="Customer Story Video Player"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </Section>
  );
}
