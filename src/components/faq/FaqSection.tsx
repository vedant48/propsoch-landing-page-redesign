'use client';

import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, Check, Copy, ThumbsUp, ThumbsDown, X } from 'lucide-react';
import { Section, Container, Button, Tabs } from '@/components/ui';

interface FaqSectionProps {
  onOpenConsultation?: () => void;
}

interface FaqItem {
  id: string;
  tab: 'About the Service' | 'Fees' | 'Why Work With Us' | 'Trust';
  q: string;
  a: string;
}

const faqData: FaqItem[] = [
  {
    id: 'faq-service-workflow',
    tab: 'About the Service',
    q: 'What is Guided Home Buying? How does it work?',
    a: `We have divided the home-buying journey into five stages:

1. Discovery: This is where we understand your needs in incredible detail so we can really personalise your journey. Usually it takes ~10 minutes for you to share the details with us.
2. Shortlisting: We will curate a list of projects that closely match your preferences & discuss pros & cons of the neighbourhood, developer, project & its floor plans so you’re well armed with information before visiting the site.
3. Site Visits: Our architects will schedule and accompany you to visit the shortlisted projects with a checklist of tradeoffs to review. We will get the exact availability & quoted price of the units while inspecting the location, the approach road and the project along with you.
4. Deep Dive: Once we know the exact units you like, we analyse the floor plans in detail, check ventilation, lighting, vastu, pricing and a lot more so we can see the complete picture and identify the levers we need to either reject it or negotiate a great deal for you.
5. Booking: We will help you negotiate, connect with loan & financing experts, navigate the payment terms, and seal the deal for a property you can really call home. But that’s not all, we will help you after you book the property too.`,
  },
  {
    id: 'faq-negotiation-assist',
    tab: 'Why Work With Us',
    q: 'Will you assist with negotiations?',
    a: `Yes absolutely. Our market experts have been trained on various negotiation strategies. They also leverage the insights we find during our research to get you the best-possible offer for the deal.

Since we are aware of the transactions being done on-ground in real time, we understand the demand, the supply and how far we can push the builder on your behalf.`,
  },
  {
    id: 'faq-options-confusion',
    tab: 'About the Service',
    q: 'I am confused looking at various options, how can this service help?',
    a: `Home Buying is overwhelming. If you’ve been in the market for a couple of weeks / months, you would have already got these questions keeping you awake at night:

- How do I even know if I'm getting a good deal?
- Is this neighborhood safe?
- Is the developer reliable?
- Am I paying too much?
- Will I regret this decision later?

Our team has expertly crafted the guided home buying so you can confidently answer these questions with our insights, tools and intel. Guided Home Buying is a structured approach, a method to the madness of home buying.`,
  },
  {
    id: 'faq-service-timelines',
    tab: 'About the Service',
    q: 'What are the timelines?',
    a: `On an average, every homebuyer takes 24 days to book a property with us. Once you sign up:

- Direct WhatsApp Group: Instant connect with your dedicated advisor and Customer Success Partner.
- Discovery Call within 24 hours: Tailoring your requirements with an architect.
- Curated Shortlist in 48 hours: 10-12 verified options from 500+ RERA-approved projects.
- Guided Property Tours: Accompanied by our Subject Matter Experts.
- Peace of Mind Report within 24h: 80+ parameters on masterplan, livability, and builder track record.
- Price Negotiation & Closing: 5-7 days for deal finalisation.`,
  },
  {
    id: 'faq-loans-tax-legal',
    tab: 'Fees',
    q: 'Do you also assist with home loans, taxation & legal matters?',
    a: `Yes, we have tied up with vendors and experts who can help you understand the financial implications, compare home loans, choose banks and get home loans hassle free.

We have also tied with CAs who can help you with capital gains, taxes and related matters. Whether you’re selling a property and buying a new one, or buying it for investments, we have built tools to help you visualise your cash flows and make informed decisions.

On legal matters, we have tied up with lawyers who bring many years of experience reviewing real estate agreements. So you can be rest assured that what you’ll consider will be legally clean.`,
  },
  {
    id: 'faq-property-types',
    tab: 'About the Service',
    q: 'What kind of properties will you recommend?',
    a: `We specialise in gated communities across Bangalore. So we can help buy:

- Under Construction - RERA approved plots, villas or apartments directly from the builder
- Ready to Move - RERA approved plots, villas or apartments directly from the builder
- Plots, villas or apartments in pre-launch phase which are set to receive RERA approval soon
- We have also slowly started building a database of resale opportunities in the market.`,
  },
  {
    id: 'faq-standalone-homes',
    tab: 'About the Service',
    q: 'Will you also help me buy individual / standalone houses?',
    a: 'Unfortunately no, we do not work on individual houses / standalone buildings yet.',
  },
  {
    id: 'faq-builder-liaison',
    tab: 'Trust',
    q: 'Will you directly liaise with the builder for the deal, or is there a third party involved?',
    a: 'Propsoch will liaise directly with the builders and keep you posted on the progress. Unless you want to visit the site or proceed with the negotiations, we will not share your information with the builders. Also, there is no third party involved in this journey. You will have a single point of contact for a hassle-free experience.',
  },
  {
    id: 'faq-site-visit-limits',
    tab: 'About the Service',
    q: 'How many properties can I visit with you?',
    a: 'You can visit as many properties as you like, but it wouldn’t be the best use of your time or ours. Our shortlisting process helps you make informed decisions about which properties are relevant for you and once we have the latest availability and pricing, we plan the site visits accordingly. On an average, our customers visit 4-6 sites before making a decision.',
  },
  {
    id: 'faq-already-visited-sites',
    tab: 'Fees',
    q: 'What happens if I have already seen or visited a few properties?',
    a: `If you have already seen / visited a few properties, we can provide you with a quick analysis on how they compare with the curation we have done for you:

- Proceed with a property you’ve already visited: Since we are not the registered partner, we cannot negotiate on your behalf or collect builder referral fees; you can avail the Peace of Mind report at ₹9,999.
- Proceed with a property we’ve recommended: As registered partners, you receive end-to-end support, professional negotiation and 2 complimentary Peace of Mind reports (worth ₹14,999).`,
  },
  {
    id: 'faq-on-ground-inspection',
    tab: 'Trust',
    q: 'Does someone physically travel to the property to analyse them?',
    a: 'Yes, our on-ground team is constantly monitoring the latest pricing, availability, and upcoming developments across Bangalore. They will help you with both pros and cons of the neighbourhood, give you insights into pricing strategies and builder’s pedigree when you visit the sites with them.',
  },
  {
    id: 'faq-questions-answered',
    tab: 'About the Service',
    q: 'What kind of questions will I get answers to during the process?',
    a: `We will answer all your queries like:

- Should I buy an apartment, villa or a plot? What is the ideal step for me, personally?
- How can we compare all the neighbourhoods, builders, projects, floor plans exhaustively?
- Which projects are coming up? What is the future development planned around?
- How do I invest my capital gains well? How do I assess the resalability of my investment?
- What is the right budget for my needs? Is the market overpriced or undervalued?
- What is the history of the XYZ builder? What’s the construction quality? Can I trust them?
- What are the key risks in a particular project or a builder? How can I mitigate them?
- What will be the approximate rental yield or CAGR of my investment? and a lot more…`,
  },
];

const categories = ['All', 'About the Service', 'Fees', 'Why Work With Us', 'Trust'] as const;

export default function FaqSection({ onOpenConsultation }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [feedbackState, setFeedbackState] = useState<Record<string, 'up' | 'down'>>({});

  const filteredItems = useMemo(() => {
    return faqData.filter((item) => {
      const matchesTab = activeTab === 'All' || item.tab === activeTab;
      if (!searchQuery.trim()) return matchesTab;
      const qLow = searchQuery.toLowerCase();
      return matchesTab && (item.q.toLowerCase().includes(qLow) || item.a.toLowerCase().includes(qLow));
    });
  }, [activeTab, searchQuery]);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleFeedback = (id: string, type: 'up' | 'down') => {
    setFeedbackState((prev) => ({ ...prev, [id]: type }));
  };

  return (
    <Section id="faq-section" ariaLabel="Frequently Asked Questions" background="default">
      <Container className="flex flex-col items-center gap-6 sm:gap-8">
        <div className="flex flex-col items-center text-center max-w-[680px]">
          <span className="text-eyebrow uppercase text-primary tracking-[0.12em] font-bold block">
            Frequently Asked Questions
          </span>
          <h2 id="faq-title" className="mt-2 text-h2 font-bold text-text-main leading-tight tracking-tight">
            99% of your queries should get answered here, for others, you can always talk to us
          </h2>
          <p className="mt-2.5 text-body-lg text-text-muted font-normal leading-relaxed">
            Transparent answers on our 25-day guided home buying process, fees, architect advisory, and developer negotiations.
          </p>
        </div>

        <div className="w-full max-w-xl">
          <div className="relative flex items-center bg-surface-white hover:bg-surface-active focus-within:bg-surface-white border border-border-main focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 rounded-md px-4 py-2.5 transition-all shadow-card">
            <Search className="w-4 h-4 text-text-disabled shrink-0 mr-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setOpenIndex(0);
              }}
              placeholder="Search questions (e.g. fees, negotiation, timeline)..."
              className="w-full bg-transparent text-body text-text-main placeholder-text-disabled outline-hidden"
              aria-label="Search questions"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="p-1 text-text-disabled hover:text-text-main rounded-md transition-colors cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <Tabs
          ariaLabel="FAQ categories"
          activeTab={activeTab}
          onChange={(tab) => {
            setActiveTab(tab as typeof activeTab);
            setOpenIndex(0);
          }}
          tabs={categories.map((tab) => ({
            id: tab,
            label: tab,
            count: tab === 'All' ? faqData.length : faqData.filter((i) => i.tab === tab).length,
          }))}
          className="flex-wrap justify-center"
          tabClassName="px-3.5 sm:px-4 py-2"
        />

        <div className="flex w-full max-w-3xl flex-col gap-3.5">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center rounded-lg border border-border-main bg-surface-white flex flex-col items-center gap-3 shadow-card">
              <p className="text-h4 font-bold text-text-main">No matching questions found</p>
              <p className="text-body-sm text-text-muted">
                We couldn&apos;t find an answer for &quot;{searchQuery}&quot;. Connect with our team directly.
              </p>
              <div className="flex gap-3 mt-1">
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => setSearchQuery('')}
                >
                  Clear search
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  onClick={onOpenConsultation}
                >
                  Talk To Us
                </Button>
              </div>
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isOpen = openIndex === idx;
              const isCopied = copiedId === item.id;
              const currentFeedback = feedbackState[item.id];

              return (
                <div
                  key={item.id}
                  className={`border rounded-lg overflow-hidden bg-surface-white transition-all duration-200 shadow-card ${
                    isOpen
                      ? 'border-primary/40 ring-1 ring-primary/20'
                      : 'border-border-main hover:border-border-subtle'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex items-center justify-between p-5 text-left gap-4 text-h4 font-semibold text-text-main hover:text-primary transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-2 leading-snug">{item.q}</span>
                    <div
                      className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-200 ${
                        isOpen
                          ? 'rotate-180 bg-primary-light border-primary/30 text-primary'
                          : 'bg-surface-white border-border-main text-text-muted'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-body-sm text-text-secondary border-t border-border-main whitespace-pre-line font-normal leading-relaxed">
                      <div className="py-1">{item.a}</div>

                      <div className="mt-4 pt-3 border-t border-border-main flex flex-wrap items-center justify-between gap-3 text-label text-text-muted">
                        <div className="flex items-center gap-2">
                          <span>Was this helpful?</span>
                          <button
                            type="button"
                            onClick={() => handleFeedback(item.id, 'up')}
                            className={`px-2 py-1 rounded-md border flex items-center gap-1 transition-colors cursor-pointer ${
                              currentFeedback === 'up'
                                ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                                : 'bg-surface-white border-border-main hover:bg-surface-active text-text-muted'
                            }`}
                            aria-label="Helpful"
                          >
                            <ThumbsUp className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Yes</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleFeedback(item.id, 'down')}
                            className={`px-2 py-1 rounded-md border flex items-center gap-1 transition-colors cursor-pointer ${
                              currentFeedback === 'down'
                                ? 'bg-red-50 border-red-300 text-red-700'
                                : 'bg-surface-white border-border-main hover:bg-surface-active text-text-muted'
                            }`}
                            aria-label="Not helpful"
                          >
                            <ThumbsDown className="w-3.5 h-3.5 text-red-500" />
                            <span>No</span>
                          </button>
                          {currentFeedback && (
                            <span className="text-label text-emerald-600 ml-1">
                              ✓ Thanks!
                            </span>
                          )}
                        </div>

                        <button
                          type="button"
                          onClick={() => handleCopy(item.id, item.q)}
                          className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-white hover:bg-surface-active border border-border-main text-text-muted hover:text-text-main transition-colors cursor-pointer"
                          aria-label="Copy question"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="text-emerald-600">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy Link</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </Container>
    </Section>
  );
}
