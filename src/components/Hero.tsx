import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin,
  Check, 
  Copy, 
  Smartphone,
  ShieldCheck,
  Search,
  Compass,
  Code2,
  BarChart3,
  Users,
  RotateCw,
  User,
  Calendar
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  onOpenScheduleCall?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact, onOpenScheduleCall }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const caseSection = document.getElementById('case-studies');
      if (caseSection) {
        caseSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const quickFilterChips = [
    { label: 'Google Maps PRD', target: 'case-studies' },
    { label: 'Pathao Case Study', target: 'case-studies' },
    { label: 'bKash Inclusion', target: 'case-studies' },
    { label: 'Fintech Product Strategy', target: 'case-studies' },
    { label: '0→1 Product Strategy', target: 'case-studies' },
  ];

  const handleChipClick = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white dark:bg-[#111215] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Google Search Omnibar */}
        <div className="max-w-2xl mx-auto mb-12">
          <form 
            onSubmit={handleSearchSubmit}
            className="flex items-center gap-3 px-4 py-2.5 bg-white dark:bg-[#1a1b1f] rounded-full border border-[#dadce0] dark:border-[#35383f] shadow-[0_1px_6px_rgba(32,33,36,0.12)] hover:shadow-[0_1px_6px_rgba(32,33,36,0.2)] focus-within:shadow-[0_1px_6px_rgba(32,33,36,0.28)] focus-within:border-[#1a73e8] dark:focus-within:border-[#8ab4f8] transition-all"
          >
            <div className="flex gap-1 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4285f4]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#ea4335]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#fbbc04]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#34a853]"></span>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search product, PRDs, OKRs, roadmaps, or product teardown..."
              className="flex-1 text-xs sm:text-sm text-[#202124] dark:text-[#e8eaed] placeholder-[#80868b] dark:placeholder-[#9aa0a6] bg-transparent outline-hidden"
            />
            <button
              type="submit"
              aria-label="Search"
              className="p-1 text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs text-[#5f6368] dark:text-[#9aa0a6]">
            <span className="text-[11px] font-medium text-[#80868b] dark:text-[#9aa0a6]">Suggested queries:</span>
            {quickFilterChips.map((chip, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleChipClick(chip.target)}
                className="px-2.5 py-1 rounded-full bg-[#f1f3f4] dark:bg-[#202227] hover:bg-[#e8eaed] dark:hover:bg-[#2b2e35] text-[#3c4043] dark:text-[#bdc1c6] font-medium transition-colors cursor-pointer"
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Badges directly above Heading */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8f0fe] dark:bg-[#172b47] border border-[#d2e3fc] dark:border-[#233d63] text-xs font-semibold text-[#1a73e8] dark:text-[#8ab4f8]">
                <span className="w-2 h-2 rounded-full bg-[#1a73e8] dark:bg-[#8ab4f8]"></span>
                <span>Technical Product Manager & Product Strategist</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#e8f0fe] dark:bg-[#172b47] border border-[#d2e3fc] dark:border-[#233d63] text-xs font-medium text-[#3c4043] dark:text-[#bdc1c6]">
                <span className="font-bold text-[#1a73e8] dark:text-[#8ab4f8]">PM</span>
                <span>Core Pillars</span>
                <span className="text-[#1a73e8] dark:text-[#8ab4f8]">•</span>
                <span>Product Sense + Engineering Depth</span>
              </div>
            </div>

            {/* Display Heading */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-[#202124] dark:text-[#f1f3f4] tracking-tight leading-[1.15]">
                Building user-focused products with <br className="hidden sm:inline" />
                <span className="text-[#1a73e8] dark:text-[#8ab4f8]">engineering precision.</span>
              </h1>
            </div>

            {/* Core Narrative Paragraphs */}
            <div className="space-y-4 text-[#3c4043] dark:text-[#bdc1c6] text-base sm:text-lg leading-relaxed max-w-3xl">
              <p>
                I’m <strong className="text-[#202124] dark:text-[#f1f3f4] font-bold">{PERSONAL_INFO.name}</strong>, a Product Manager with <strong className="text-[#202124] dark:text-[#f1f3f4] font-semibold">1+ years of dedicated product leadership experience</strong> and <strong className="text-[#202124] dark:text-[#f1f3f4] font-semibold">4+ years of hands-on iOS engineering experience</strong>.
              </p>

              <p>
                I bridge the gap between <strong className="text-[#202124] dark:text-[#f1f3f4] font-semibold">customer problems, product strategy, and technical execution</strong> — turning ambiguous problems into structured <strong className="text-[#202124] dark:text-[#f1f3f4] font-semibold">PRDs, data-driven OKRs, prioritized roadmaps</strong>, and buildable product <strong className="text-[#202124] dark:text-[#f1f3f4] font-semibold">solutions</strong>.
              </p>

              <p className="text-sm sm:text-base text-[#5f6368] dark:text-[#9aa0a6]">
                My experience spans <strong className="text-[#202124] dark:text-[#f1f3f4] font-semibold">Fintech, On-Demand Mobility</strong>, and <strong className="text-[#202124] dark:text-[#f1f3f4] font-semibold">Multi-Product SaaS</strong>, with a focus on <strong className="text-[#202124] dark:text-[#f1f3f4] font-semibold">0→1 product development, user-centric product thinking, cross-functional collaboration</strong>, and measurable business outcomes.
              </p>
            </div>

            {/* Quick Contact: Mobile View Capsule */}
            <div 
              id="hero-contact-mobile-capsule"
              className="flex sm:hidden items-center justify-between w-full max-w-md rounded-full bg-[#f8f9fa] dark:bg-[#1a1b1f] border border-[#dadce0] dark:border-[#35383f] p-1 text-[11px] text-[#5f6368] dark:text-[#9aa0a6] shadow-2xs overflow-x-auto"
            >
              <div className="inline-flex items-center gap-1 pl-2 pr-1 py-1 text-[#202124] dark:text-[#f1f3f4] font-medium shrink-0">
                <MapPin className="w-3 h-3 text-[#1a73e8] dark:text-[#8ab4f8]" />
                <span>Dhaka</span>
              </div>

              <span className="text-[#dadce0] dark:text-[#35383f] select-none">•</span>

              <button
                type="button"
                id="hero-mobile-email-btn"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1 px-1.5 py-1 rounded-full hover:bg-white dark:hover:bg-[#25272c] text-[#202124] dark:text-[#f1f3f4] font-medium transition-colors cursor-pointer shrink-0"
                title="faruqdeveloper@gmail.com (Tap to copy)"
              >
                {copiedEmail ? (
                  <Check className="w-3 h-3 text-[#34a853] dark:text-[#81c995] shrink-0" />
                ) : (
                  <Mail className="w-3 h-3 text-[#5f6368] dark:text-[#9aa0a6] shrink-0" />
                )}
                <span>{copiedEmail ? "Copied!" : "Email"}</span>
              </button>

              <span className="text-[#dadce0] dark:text-[#35383f] select-none">•</span>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                id="hero-mobile-linkedin-link"
                className="inline-flex items-center gap-1 px-1.5 py-1 rounded-full hover:bg-white dark:hover:bg-[#25272c] text-[#0a66c2] dark:text-[#70b5f9] font-medium transition-colors shrink-0"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-3 h-3 shrink-0" />
                <span>LinkedIn</span>
              </a>

              <span className="text-[#dadce0] dark:text-[#35383f] select-none">•</span>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                id="hero-mobile-github-link"
                className="inline-flex items-center gap-1 pr-2 pl-1 py-1 rounded-full hover:bg-white dark:hover:bg-[#25272c] text-[#1a73e8] dark:text-[#8ab4f8] font-medium transition-colors shrink-0"
                title="github.com/faruqiAhmed"
              >
                <Github className="w-3 h-3 shrink-0" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Quick Contact: Desktop / Tablet Individual Badges */}
            <div className="hidden sm:flex flex-wrap items-center gap-3 pt-1 text-xs sm:text-sm text-[#5f6368] dark:text-[#9aa0a6]">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f8f9fa] dark:bg-[#1a1b1f] border border-[#dadce0] dark:border-[#35383f]">
                <MapPin className="w-3.5 h-3.5 text-[#5f6368] dark:text-[#9aa0a6]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <button
                id="hero-copy-email-btn"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f8f9fa] dark:bg-[#1a1b1f] border border-[#dadce0] dark:border-[#35383f] hover:border-[#1a73e8] dark:hover:border-[#8ab4f8] hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] transition-colors cursor-pointer group"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-[#34a853] dark:text-[#81c995]" />
                ) : (
                  <Mail className="w-3.5 h-3.5 text-[#5f6368] dark:text-[#9aa0a6] group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8]" />
                )}
                <span className={copiedEmail ? "text-[#34a853] dark:text-[#81c995] font-medium" : ""}>
                  {copiedEmail ? "Copied to clipboard!" : PERSONAL_INFO.email}
                </span>
                {!copiedEmail && <Copy className="w-3 h-3 opacity-60 group-hover:opacity-100" />}
              </button>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                id="hero-linkedin-link"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f8f9fa] dark:bg-[#1a1b1f] border border-[#dadce0] dark:border-[#35383f] hover:border-[#0a66c2] dark:hover:border-[#70b5f9] hover:text-[#0a66c2] dark:hover:text-[#70b5f9] text-[#5f6368] dark:text-[#9aa0a6] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0a66c2] dark:text-[#70b5f9]" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                id="hero-github-link"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f8f9fa] dark:bg-[#1a1b1f] border border-[#dadce0] dark:border-[#35383f] hover:border-[#1a73e8] dark:hover:border-[#8ab4f8] hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] text-[#5f6368] dark:text-[#9aa0a6] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-schedule-call-btn"
                type="button"
                onClick={onOpenScheduleCall}
                className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#1a73e8] hover:bg-[#1557b0] dark:bg-[#1a73e8] dark:hover:bg-[#1765cc] transition-all shadow-sm hover:shadow-md cursor-pointer group"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Schedule a 1:1 Call</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/25 text-white">15–30m</span>
              </button>

              <a
                href="#case-studies"
                id="hero-explore-cases-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-[#1a73e8] dark:text-[#8ab4f8] bg-[#e8f0fe] dark:bg-[#182a46] hover:bg-[#d2e3fc] dark:hover:bg-[#233d63] border border-[#d2e3fc] dark:border-[#233d63] transition-all"
              >
                <span>Explore Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#google-pillars"
                id="hero-view-pillars-btn"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-[#3c4043] dark:text-[#bdc1c6] bg-white dark:bg-[#1a1b1f] border border-[#dadce0] dark:border-[#35383f] hover:bg-[#f1f3f4] dark:hover:bg-[#25272c] hover:border-[#bdc1c6] dark:hover:border-[#4d5156] transition-colors"
              >
                <Compass className="w-4 h-4 text-[#5f6368] dark:text-[#9aa0a6]" />
                <span>PM Pillars</span>
              </a>

              <button
                id="hero-download-resume-btn"
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-[#3c4043] dark:text-[#e8eaed] bg-white dark:bg-[#1a1b1f] border border-[#dadce0] dark:border-[#35383f] hover:bg-[#f1f3f4] dark:hover:bg-[#25272c] hover:border-[#bdc1c6] dark:hover:border-[#4d5156] transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#5f6368] dark:text-[#9aa0a6]" />
                <span>CV / Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column: PM Core Pillars Card */}
          <div className="lg:col-span-4">
            <div className="bg-white dark:bg-[#18191c] rounded-2xl border border-[#dadce0] dark:border-[#2d2f34] p-5 sm:p-6 shadow-[0_1px_4px_0_rgba(60,64,67,0.12)] space-y-4">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-1">
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1 shrink-0">
                    <span className="w-2 h-2 rounded-full bg-[#4285f4]"></span>
                    <span className="w-2 h-2 rounded-full bg-[#ea4335]"></span>
                    <span className="w-2 h-2 rounded-full bg-[#fbbc04]"></span>
                    <span className="w-2 h-2 rounded-full bg-[#34a853]"></span>
                  </div>
                  <h2 className="text-xs font-extrabold text-[#202124] dark:text-[#f1f3f4] uppercase tracking-wider">
                    PM CORE PILLARS
                  </h2>
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#e8f0fe] dark:bg-[#1a2d48] text-[#1a73e8] dark:text-[#8ab4f8]">
                  4 Dimensions
                </span>
              </div>

              {/* 4 Pillars List */}
              <div className="space-y-3">
                {/* 1. Product Sense */}
                <div className="p-3 rounded-xl bg-white dark:bg-[#1f2025] border border-[#e8eaed] dark:border-[#33363d] flex items-center gap-3 hover:border-[#1a73e8] dark:hover:border-[#8ab4f8] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#e8f0fe] dark:bg-[#172b47] text-[#1a73e8] dark:text-[#8ab4f8] flex items-center justify-center shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold text-[#202124] dark:text-[#f1f3f4] leading-tight">
                      Product Sense
                    </h3>
                    <p className="text-xs text-[#5f6368] dark:text-[#9aa0a6] mt-0.5">
                      User empathy, problem framing, frictionless UX
                    </p>
                  </div>
                </div>

                {/* 2. Technical PM */}
                <div className="p-3 rounded-xl bg-white dark:bg-[#1f2025] border border-[#e8eaed] dark:border-[#33363d] flex items-center gap-3 hover:border-[#a142f4] dark:hover:border-[#d7aefb] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#f3e8fd] dark:bg-[#2b183d] text-[#9334e6] dark:text-[#d7aefb] flex items-center justify-center shrink-0">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold text-[#202124] dark:text-[#f1f3f4] leading-tight">
                      Technical PM
                    </h3>
                    <p className="text-xs text-[#5f6368] dark:text-[#9aa0a6] mt-0.5">
                      APIs, architecture, dependencies, technical trade-offs
                    </p>
                  </div>
                </div>

                {/* 3. Analytics & OKRs */}
                <div className="p-3 rounded-xl bg-white dark:bg-[#1f2025] border border-[#e8eaed] dark:border-[#33363d] flex items-center gap-3 hover:border-[#34a853] dark:hover:border-[#81c995] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#e6f4ea] dark:bg-[#133824] text-[#1e8e3e] dark:text-[#81c995] flex items-center justify-center shrink-0">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold text-[#202124] dark:text-[#f1f3f4] leading-tight">
                      Analytics & OKRs
                    </h3>
                    <p className="text-xs text-[#5f6368] dark:text-[#9aa0a6] mt-0.5">
                      North Star metrics, experimentation, outcome measurement
                    </p>
                  </div>
                </div>

                {/* 4. Leadership */}
                <div className="p-3 rounded-xl bg-white dark:bg-[#1f2025] border border-[#e8eaed] dark:border-[#33363d] flex items-center gap-3 hover:border-[#f9ab00] dark:hover:border-[#fdd663] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#fef7e0] dark:bg-[#3d3013] text-[#e37400] dark:text-[#fdd663] flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold text-[#202124] dark:text-[#f1f3f4] leading-tight">
                      Leadership
                    </h3>
                    <p className="text-xs text-[#5f6368] dark:text-[#9aa0a6] mt-0.5">
                      Influence without authority, cross-functional alignment
                    </p>
                  </div>
                </div>
              </div>

              {/* Shipped Matrix Indicator */}
              <div className="pt-3 border-t border-[#e8eaed] dark:border-[#2d2f34] flex items-center justify-between text-xs text-[#5f6368] dark:text-[#9aa0a6]">
                <span className="flex items-center gap-1.5 font-medium text-[#202124] dark:text-[#e8eaed]">
                  <ShieldCheck className="w-4 h-4 text-[#34a853] dark:text-[#81c995]" />
                  HDNB Certified PM
                </span>
                <span className="text-[#dadce0] dark:text-[#35383f] select-none">|</span>
                <span className="text-[#1a73e8] dark:text-[#8ab4f8] font-medium">6+ Shipped Mobile Products</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Key Stats Bar - Matching 4 horizontal blocks with icons */}
        <div className="mt-14 pt-8 border-t border-[#dadce0] dark:border-[#2d2f34] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Stat 1: Shipped Products */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#f8fafd] dark:bg-[#18191c] border border-[#dadce0] dark:border-[#2d2f34]">
            <div className="w-12 h-12 rounded-xl bg-[#e8f0fe] dark:bg-[#182a46] text-[#1a73e8] dark:text-[#8ab4f8] flex items-center justify-center shrink-0">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-[#1a73e8] dark:text-[#8ab4f8] tracking-tight">
                6+
              </div>
              <div className="text-sm font-semibold text-[#202124] dark:text-[#f1f3f4]">
                Shipped Products
              </div>
            </div>
          </div>

          {/* Stat 2: Engineering Craft */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#f8fafd] dark:bg-[#18191c] border border-[#dadce0] dark:border-[#2d2f34]">
            <div className="w-12 h-12 rounded-xl bg-[#e8f0fe] dark:bg-[#182a46] text-[#1a73e8] dark:text-[#8ab4f8] flex items-center justify-center shrink-0">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-[#1a73e8] dark:text-[#8ab4f8] tracking-tight">
                4+ Yrs
              </div>
              <div className="text-sm font-semibold text-[#202124] dark:text-[#f1f3f4]">
                Engineering Craft
              </div>
            </div>
          </div>

          {/* Stat 3: Product Leadership */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#f8fafd] dark:bg-[#18191c] border border-[#dadce0] dark:border-[#2d2f34]">
            <div className="w-12 h-12 rounded-xl bg-[#e8f0fe] dark:bg-[#182a46] text-[#1a73e8] dark:text-[#8ab4f8] flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-[#1a73e8] dark:text-[#8ab4f8] tracking-tight">
                1+ Yrs
              </div>
              <div className="text-sm font-semibold text-[#202124] dark:text-[#f1f3f4]">
                Product Leadership
              </div>
            </div>
          </div>

          {/* Stat 4: Agile Sprints Led */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#f8fafd] dark:bg-[#18191c] border border-[#dadce0] dark:border-[#2d2f34]">
            <div className="w-12 h-12 rounded-xl bg-[#e8f0fe] dark:bg-[#182a46] text-[#1a73e8] dark:text-[#8ab4f8] flex items-center justify-center shrink-0">
              <RotateCw className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-[#1a73e8] dark:text-[#8ab4f8] tracking-tight">
                45+
              </div>
              <div className="text-sm font-semibold text-[#202124] dark:text-[#f1f3f4]">
                Agile Sprints Led
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};


