'use client';

import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Mail,
  Phone,
  ArrowUp,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

function PropsochSymbol({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 106 107"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="m105.269 34.12-.144-.11-.665-.498-.127-.092L63.916 3.143h-.005l-1.075-.803s-.006 0-.006-.006A13.6 13.6 0 0 0 55.186 0h-.075c-3.057 0-5.877 1-8.153 2.693-.058.04-.11.086-.168.127L5.726 33.576c-.006.006-.012.006-.017.011l-.451.341c-.006.006-.012.006-.017.012q-.65.51-1.231 1.092A13.64 13.64 0 0 0 0 44.71v48.426c0 7.557 6.13 13.688 13.688 13.688h5.593c12.487 0 22.656-10.071 22.725-22.558v-.294C42 83.926 42 83.874 42 83.827s0-.098.006-.144v-.006a17.2 17.2 0 0 0-.468-3.837 17.27 17.27 0 0 0-6.2-9.69 17.38 17.38 0 0 0-10.69-3.691h-.016a2.17 2.17 0 0 1-1.537-.636 2.17 2.17 0 0 1-.636-1.537c0-.6.243-1.144.636-1.537a2.17 2.17 0 0 1 1.537-.636c4.865 0 9.256-1.999 12.41-5.217A17.3 17.3 0 0 0 42 44.82v-.168c.018-.566.26-1.08.636-1.456a2.176 2.176 0 0 1 3.074 0c.393.393.635.936.635 1.537v.012a17.32 17.32 0 0 0 4.952 12.145c.046.046.087.093.133.139a17.3 17.3 0 0 0 12.284 5.084 2.166 2.166 0 0 1 2.172 2.173 2.174 2.174 0 0 1-2.155 2.173h-.011c-1.318 0-2.652.15-3.987.468a17.27 17.27 0 0 0-9.69 6.2 17.35 17.35 0 0 0-3.692 10.504v.098c0 .035.006.064.006.098v.416c.07 12.492 10.233 22.575 22.725 22.575h27.532a13.64 13.64 0 0 0 9.678-4.01 13.64 13.64 0 0 0 4.01-9.678V44.479a13.71 13.71 0 0 0-5.033-10.36m-18.131 9.793h-.006c-.67 0-1.346.075-2.022.237a8.78 8.78 0 0 0-4.917 3.149 8.8 8.8 0 0 0-1.872 5.327v.162a1.104 1.104 0 0 1-1.884.722 1.08 1.08 0 0 1-.318-.705v-.15a8.7 8.7 0 0 0-.237-1.947 8.82 8.82 0 0 0-8.575-6.79h-.005a1.1 1.1 0 0 1-.78-.323 1.08 1.08 0 0 1-.324-.78c0-.306.122-.578.324-.78a1.1 1.1 0 0 1 .78-.324 8.8 8.8 0 0 0 6.298-2.646 8.77 8.77 0 0 0 2.514-6.125v-.092a1.105 1.105 0 0 1 2.207.04v.012c0 1.202.243 2.346.676 3.386a8.9 8.9 0 0 0 1.837 2.78l.07.068a8.8 8.8 0 0 0 6.234 2.583c.306 0 .578.122.78.324.202.196.324.474.324.78a1.116 1.116 0 0 1-1.104 1.092"
        fill="currentColor"
      />
    </svg>
  );
}

interface FooterProps {
  onOpenConsultation?: () => void;
}

export default function Footer({ onOpenConsultation }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const advisoryServices = [
    { label: '25-Day Guided Homebuying', href: '#how-it-works' },
    { label: '80+ Point Property Analysis', href: '#features' },
    { label: 'Layout & Carpet Area Audit', href: '#features' },
    { label: 'Price & Negotiation Leverage', href: '#features' },
    { label: 'Legal & Title Verification', href: '#features' },
    { label: 'RERA Compliance Screening', href: '#features' },
    { label: 'Remote NRI Concierge', href: '#features' },
  ];

  const bangaloreLocalities = [
    { label: 'Whitefield Tech Corridor', href: '/search?city=Bangalore&area=Whitefield' },
    { label: 'Sarjapur Road & ORR', href: '/search?city=Bangalore&area=Sarjapur' },
    { label: 'Bellandur & Haralur', href: '/search?city=Bangalore&area=Bellandur' },
    { label: 'HSR Layout & Koramangala', href: '/search?city=Bangalore&area=HSR' },
    { label: 'Yelahanka & North Bengaluru', href: '/search?city=Bangalore&area=Yelahanka' },
    { label: 'Devanahalli Airport Zone', href: '/search?city=Bangalore&area=Devanahalli' },
  ];

  const mumbaiLocalities = [
    { label: 'Bandra & Khar West', href: '/search?city=Mumbai&area=Bandra' },
    { label: 'BKC & Kalina Corridor', href: '/search?city=Mumbai&area=BKC' },
    { label: 'Powai & Chandivali', href: '/search?city=Mumbai&area=Powai' },
    { label: 'Thane West & Ghodbunder', href: '/search?city=Mumbai&area=Thane' },
    { label: 'Goregaon & Malad West', href: '/search?city=Mumbai&area=Goregaon' },
    { label: 'Worli & Lower Parel', href: '/search?city=Mumbai&area=Worli' },
  ];

  const developersAudited = [
    { label: 'Prestige Group Analysis', href: '/search?developer=Prestige' },
    { label: 'Godrej Properties Audit', href: '/search?developer=Godrej' },
    { label: 'Brigade Group Review', href: '/search?developer=Brigade' },
    { label: 'Sobha Limited Inspection', href: '/search?developer=Sobha' },
    { label: 'Total Environment Deep-Dive', href: '/search?developer=Total+Environment' },
    { label: 'Lodha (Macrotech) Report', href: '/search?developer=Lodha' },
  ];

  return (
    <footer className="bg-surface-darker text-white pt-10 sm:pt-12 pb-8 overflow-hidden relative border-t border-white/10" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex w-full flex-col items-center justify-center rounded-xl px-6 sm:px-8 py-6 sm:py-7 text-center lg:flex-row lg:justify-between lg:gap-8 lg:px-12 lg:text-left bg-white/5 border border-primary/40 shadow-card mb-8 sm:mb-10">
          <img
            src="https://d1zk2x7mtoyb2b.cloudfront.net/websiteAssets/bromatkar_home_page/mobile/spectacles.png?w=1920"
            alt="Propsoch Spectacles"
            loading="lazy"
            decoding="async"
            className="h-auto w-full max-w-44 select-none drop-shadow-md"
          />

          <div className="mt-4 lg:mt-0 flex flex-col items-center lg:items-start text-white flex-1">
            <h2 className="text-h2 font-bold text-white leading-tight tracking-tight">
              Still have questions?
            </h2>
            <p className="mt-1 text-body-lg font-normal text-white/90">
              We are always here for you
            </p>
          </div>

          <div className="mt-4 lg:mt-0">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-surface-white text-primary font-bold text-button shadow-card hover:bg-surface-muted transition-colors whitespace-nowrap cursor-pointer"
            >
              Book A Free Call
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-10 border-b border-white/10">

          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 w-fit group" aria-label="Propsoch Homepage">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center p-1.5 shadow-md shadow-primary/30 group-hover:scale-105 transition-transform">
                <PropsochSymbol className="w-full h-full text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                Propsoch
              </span>
            </Link>

            <p className="text-[12.5px] text-text-subtle font-light leading-relaxed">
              Propsoch is India&apos;s first conflict-free homebuyer concierge. We work exclusively for property buyers with qualified architects, running 80+ point ground audits to save you months of stress and millions in costly mistakes.
            </p>

            <div className="p-3.5 rounded-xl bg-surface-dark border border-white/10 flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-white text-[12.5px] font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                  <span>State RERA Verified Entity</span>
                </div>
                <span className="text-[10px] text-success font-medium bg-success/10 px-1.5 py-0.5 rounded-full border border-success/20">
                  Active
                </span>
              </div>
              <div className="flex flex-col gap-1.5 pt-1 border-t border-white/5 text-[11.5px]">
                <div className="flex flex-col">
                  <span className="text-text-muted">Karnataka RERA Reg:</span>
                  <a
                    href="https://rera.karnataka.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-white hover:text-primary transition-colors flex items-center gap-1"
                  >
                    <span>PRM/KA/RERA/1251/446/AG/220927/003103</span>
                    <ExternalLink className="w-2.5 h-2.5 text-text-muted" />
                  </a>
                </div>
                <div className="flex flex-col">
                  <span className="text-text-muted">Maharashtra RERA Reg:</span>
                  <a
                    href="https://maharera.maharashtra.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-white hover:text-primary transition-colors flex items-center gap-1"
                  >
                    <span>A041182600110</span>
                    <ExternalLink className="w-2.5 h-2.5 text-text-muted" />
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center gap-3">
                <img
                  src="/maharera-qr.png"
                  alt="Maharashtra RERA QR Code"
                  loading="lazy"
                  decoding="async"
                  className="w-18 h-18 bg-white p-1 rounded-lg shrink-0 object-contain shadow-xs"
                />
                <div className="flex flex-col text-[10.5px] text-text-muted leading-tight">
                  <span className="text-white/80 font-medium">Scan for MahaRERA verification</span>
                  <span>Official agent certificate &amp; public compliance status</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-text-muted">
              <span>GSTIN: 29AAGCT2841M1ZX</span>
              <span>•</span>
              <span>CIN: U72900KA2022PTC160541</span>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="text-eyebrow font-bold uppercase tracking-[0.12em] text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Advisory
            </h3>
            <ul className="flex flex-col gap-2 text-body-sm text-text-subtle font-normal">
              {advisoryServices.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="text-eyebrow font-bold uppercase tracking-[0.12em] text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Bengaluru
            </h3>
            <ul className="flex flex-col gap-2 text-body-sm text-text-subtle font-normal">
              {bangaloreLocalities.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="text-eyebrow font-bold uppercase tracking-[0.12em] text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Mumbai MMR
            </h3>
            <ul className="flex flex-col gap-2 text-body-sm text-text-subtle font-normal">
              {mumbaiLocalities.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="text-eyebrow font-bold uppercase tracking-[0.12em] text-white flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Developers
            </h3>
            <ul className="flex flex-col gap-2 text-body-sm text-text-subtle font-normal">
              {developersAudited.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 text-body-sm text-text-subtle">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5 text-center sm:text-left">
            <span>&copy; {new Date().getFullYear()} Thinkr Proptech Pvt. Ltd. All rights reserved.</span>
            <div className="flex items-center gap-3 text-text-muted">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
                Terms of Advisory
              </Link>
              <span>•</span>
              <Link href="/rera-disclaimer" className="hover:text-white transition-colors">
                RERA Compliance
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/propsoch"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-surface-dark border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white text-text-subtle transition-all cursor-pointer"
                aria-label="Follow Propsoch on LinkedIn"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@Propsoch"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-surface-dark border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white text-text-subtle transition-all cursor-pointer"
                aria-label="Subscribe to Propsoch on YouTube"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <polygon points="10 15 15 12 10 9 10 15" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/propsoch"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-surface-dark border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white text-text-subtle transition-all cursor-pointer"
                aria-label="Follow Propsoch on Instagram"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="mailto:contact@propsoch.com"
                className="w-8 h-8 rounded-lg bg-surface-dark border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white text-text-subtle transition-all cursor-pointer"
                aria-label="Email Propsoch Advisory"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
              <a
                href="tel:+918047361234"
                className="w-8 h-8 rounded-lg bg-surface-dark border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white text-text-subtle transition-all cursor-pointer"
                aria-label="Call Propsoch Advisory Hotline"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[11px] transition-colors cursor-pointer"
              aria-label="Scroll back to top of the page"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3 text-primary" />
            </button>
          </div>
        </div>

        <div className="mt-8 select-none pointer-events-none text-center opacity-5 overflow-hidden">
          <span className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[190px] font-black tracking-tighter bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent block leading-none">
            Propsoch
          </span>
        </div>
      </div>
    </footer>
  );
}
