import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import faruqPortrait from '../assets/images/faruq.png';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin,
  Check, 
  Copy, 
  ShieldCheck,
  Search,
  Code2,
  BarChart3,
  Users,
  User,
  Calendar,
  Briefcase,
  Package,
  Target
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  onOpenScheduleCall?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenScheduleCall }) => {
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
    <section id="hero" className="pt-24 pb-14 md:pt-32 md:pb-20 overflow-hidden bg-white dark:bg-[#111215] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Google Search Omnibar */}
        <div className="max-w-2xl mx-auto mb-10">
          <form 
            onSubmit={handleSearchSubmit}
            className="flex items-center gap-3 px-4 py-2 bg-white dark:bg-[#1a1b1f] rounded-full border border-[#dadce0] dark:border-[#35383f] shadow-[0_1px_6px_rgba(32,33,36,0.12)] hover:shadow-[0_1px_6px_rgba(32,33,36,0.2)] focus-within:shadow-[0_1px_6px_rgba(32,33,36,0.28)] focus-within:border-[#1a73e8] dark:focus-within:border-[#8ab4f8] transition-all"
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
          <div className="flex flex-wrap items-center justify-center gap-2 mt-2.5 text-xs text-[#5f6368] dark:text-[#9aa0a6]">
            <span className="text-[11px] font-medium text-[#80868b] dark:text-[#9aa0a6]">Suggested queries:</span>
            {quickFilterChips.map((chip, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleChipClick(chip.target)}
                className="px-2.5 py-0.5 rounded-full bg-[#f1f3f4] dark:bg-[#202227] hover:bg-[#e8eaed] dark:hover:bg-[#2b2e35] text-[#3c4043] dark:text-[#bdc1c6] font-medium transition-colors cursor-pointer text-xs"
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Badges directly above Heading */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#e8f0fe] dark:bg-[#172b47] border border-[#d2e3fc] dark:border-[#233d63] text-xs font-semibold text-[#1a73e8] dark:text-[#8ab4f8]">
                <User className="w-3.5 h-3.5 text-[#1a73e8] dark:text-[#8ab4f8]" />
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-[#202124] dark:text-[#f1f3f4] tracking-tight leading-[1.18]">
                Building user-focused products <br className="hidden sm:inline" />
                with <br className="sm:hidden" />
                <span className="text-[#1a73e8] dark:text-[#8ab4f8]">engineering precision.</span>
              </h1>
            </div>

            {/* Core Narrative Paragraphs */}
            <div className="space-y-3.5 text-[#3c4043] dark:text-[#bdc1c6] text-sm sm:text-base leading-relaxed">
              <p>
                I’m <strong className="text-[#202124] dark:text-[#f1f3f4] font-bold">{PERSONAL_INFO.name}</strong>, a Product Manager with <strong className="text-[#202124] dark:text-[#f1f3f4] font-semibold">1+ years</strong> of dedicated product leadership experience and <strong className="text-[#202124] dark:text-[#f1f3f4] font-semibold">4+ years</strong> of hands-on iOS engineering experience.
              </p>

              <p>
                I bridge the gap between <strong className="text-[#202124] dark:text-[#f1f3f4] font-semibold">customer problems, product strategy</strong>, and <strong className="text-[#202124] dark:text-[#f1f3f4] font-semibold">technical execution</strong> — turning ambiguous problems into structured <strong className="text-[#202124] dark:text-[#f1f3f4] font-semibold">PRDs, data-driven OKRs, prioritized roadmaps</strong>, and buildable product solutions.
              </p>
            </div>

            {/* Contact Pills Row */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs sm:text-sm text-[#5f6368] dark:text-[#9aa0a6]">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-[#1a1b1f] border border-[#dadce0] dark:border-[#35383f] text-[#3c4043] dark:text-[#bdc1c6]">
                <MapPin className="w-3.5 h-3.5 text-[#5f6368] dark:text-[#9aa0a6]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              <button
                id="hero-copy-email-btn"
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-[#1a1b1f] border border-[#dadce0] dark:border-[#35383f] hover:border-[#1a73e8] dark:hover:border-[#8ab4f8] hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] text-[#3c4043] dark:text-[#bdc1c6] transition-colors cursor-pointer group"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-[#34a853] dark:text-[#81c995]" />
                ) : (
                  <Mail className="w-3.5 h-3.5 text-[#5f6368] dark:text-[#9aa0a6] group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8]" />
                )}
                <span className={copiedEmail ? "text-[#34a853] dark:text-[#81c995] font-medium" : ""}>
                  {copiedEmail ? "Copied!" : PERSONAL_INFO.email}
                </span>
                {!copiedEmail && <Copy className="w-3 h-3 opacity-60 group-hover:opacity-100" />}
              </button>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                id="hero-linkedin-link"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-[#1a1b1f] border border-[#dadce0] dark:border-[#35383f] hover:border-[#0a66c2] dark:hover:border-[#70b5f9] hover:text-[#0a66c2] dark:hover:text-[#70b5f9] text-[#3c4043] dark:text-[#bdc1c6] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0a66c2] dark:text-[#70b5f9]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                id="hero-github-link"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-[#1a1b1f] border border-[#dadce0] dark:border-[#35383f] hover:border-[#1a73e8] dark:hover:border-[#8ab4f8] hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] text-[#3c4043] dark:text-[#bdc1c6] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                id="hero-schedule-call-btn"
                type="button"
                onClick={onOpenScheduleCall}
                className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#1a73e8] hover:bg-[#1557b0] dark:bg-[#1a73e8] dark:hover:bg-[#1765cc] transition-all shadow-sm hover:shadow-md cursor-pointer group"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Schedule 1:1 Call</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/20 text-white">15–30m</span>
              </button>

              <a
                href="#case-studies"
                id="hero-explore-cases-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-[#1a73e8] dark:text-[#8ab4f8] bg-white dark:bg-[#1a1b1f] hover:bg-[#f1f3f4] dark:hover:bg-[#25272c] border border-[#dadce0] dark:border-[#35383f] transition-all"
              >
                <FileText className="w-4 h-4 text-[#1a73e8] dark:text-[#8ab4f8]" />
                <span>Explore Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                id="hero-download-resume-btn"
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-full text-xs font-medium text-[#5f6368] dark:text-[#9aa0a6] bg-transparent hover:bg-[#f1f3f4] dark:hover:bg-[#25272c] transition-colors cursor-pointer"
                title="View Resume / CV"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            </div>

            {/* Key Metrics Strip (Directly below buttons as shown in image) */}
            <div className="pt-2">
              <div className="p-3 sm:p-4 rounded-2xl bg-[#f8fafd] dark:bg-[#18191c] border border-[#dadce0] dark:border-[#2d2f34] shadow-2xs">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#dadce0] dark:divide-[#2d2f34]">
                  
                  {/* Stat 1: 4+ Years Engineering */}
                  <div className="flex items-center gap-3 pt-2 sm:pt-0">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#1a73e8] dark:text-[#8ab4f8] flex items-center justify-center shrink-0 font-mono font-bold text-xs">
                      &lt;/&gt;
                    </div>
                    <div className="min-w-0">
                      <div className="text-base sm:text-lg font-bold text-[#202124] dark:text-[#f1f3f4] leading-tight">
                        4+
                      </div>
                      <div className="text-[11px] text-[#5f6368] dark:text-[#9aa0a6] truncate">
                        Years Engineering
                      </div>
                    </div>
                  </div>

                  {/* Stat 2: 1+ Years Product Leadership */}
                  <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:pl-3">
                    <div className="w-9 h-9 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-base sm:text-lg font-bold text-[#202124] dark:text-[#f1f3f4] leading-tight">
                        1+
                      </div>
                      <div className="text-[11px] text-[#5f6368] dark:text-[#9aa0a6] truncate">
                        Years Product Leadership
                      </div>
                    </div>
                  </div>

                  {/* Stat 3: 8+ Products Delivered */}
                  <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:pl-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <Package className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-base sm:text-lg font-bold text-[#202124] dark:text-[#f1f3f4] leading-tight">
                        8+
                      </div>
                      <div className="text-[11px] text-[#5f6368] dark:text-[#9aa0a6] truncate">
                        Products Delivered
                      </div>
                    </div>
                  </div>

                  {/* Stat 4: 94% On-Time Delivery */}
                  <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:pl-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                      <Target className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-base sm:text-lg font-bold text-[#202124] dark:text-[#f1f3f4] leading-tight">
                        94%
                      </div>
                      <div className="text-[11px] text-[#5f6368] dark:text-[#9aa0a6] truncate">
                        On-Time Delivery
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Profile Presentation Card Matching Screenshot */}
          <div className="lg:col-span-5 relative w-full">
            {/* Ambient subtle glow background */}
            <div 
              className="absolute -inset-1 bg-gradient-to-tr from-blue-500/10 via-emerald-500/5 to-indigo-500/10 rounded-[28px] blur-xl -z-10 pointer-events-none" 
              aria-hidden="true" 
            />

            <div className="bg-white dark:bg-[#18191c] rounded-3xl border border-[#dadce0] dark:border-[#2d2f34] p-4 sm:p-5 shadow-[0_4px_20px_rgba(60,64,67,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] space-y-4">
              
              {/* Profile Image Frame with Clean Background */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#e8f0fe] via-[#f1f5f9] to-[#e2e8f0] dark:from-[#1b2433] dark:via-[#161a23] dark:to-[#12141a] border border-[#d2e3fc]/60 dark:border-[#26354d] flex items-end justify-center pt-5 sm:pt-6 px-4">
                
                {/* Active Availability Badge (Top Left) */}
                <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 dark:bg-[#18191c]/95 backdrop-blur-xs border border-[#dadce0] dark:border-[#35383f] text-xs font-semibold text-[#16a34a] dark:text-[#4ade80] shadow-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Active PM Availability</span>
                </div>

                {/* Experience Badge (Top Right) */}
                <div className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 dark:bg-[#18191c]/95 backdrop-blur-xs border border-[#dadce0] dark:border-[#35383f] text-[11px] font-semibold text-[#1a73e8] dark:text-[#8ab4f8] shadow-xs">
                  <span>1+ Yr PM</span>
                  <span className="text-[#80868b] select-none">•</span>
                  <span>4+ Yrs iOS</span>
                </div>

                {/* Omar Faruq Cutout Portrait */}
                <img
                  id="hero-profile-image"
                  src={faruqPortrait}
                  alt={`${PERSONAL_INFO.name} - Technical Product Manager`}
                  referrerPolicy="no-referrer"
                  className="w-full max-w-[300px] sm:max-w-[330px] h-[320px] sm:h-[360px] object-cover object-top filter contrast-[1.02] drop-shadow-md hover:scale-[1.01] transition-transform duration-300 select-none"
                />

                {/* Soft subtle gradient blend at image bottom */}
                <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white/30 dark:from-[#18191c]/30 to-transparent pointer-events-none" />
              </div>

              {/* Profile Bio Details */}
              <div className="space-y-3 px-0.5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h2 className="text-xl font-bold text-[#202124] dark:text-[#f1f3f4] leading-tight">
                      {PERSONAL_INFO.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#1a73e8] dark:text-[#8ab4f8] font-semibold mt-0.5">
                      {PERSONAL_INFO.title}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#f1f3f4] dark:bg-[#25272c] text-[#5f6368] dark:text-[#9aa0a6] shrink-0 border border-[#dadce0]/50 dark:border-[#35383f]">
                    <MapPin className="w-3 h-3 text-[#1a73e8] dark:text-[#8ab4f8]" />
                    <span>Mirpur-11, Dhaka / Remote</span>
                  </div>
                </div>

                {/* PM CORE PILLARS Header & Badge */}
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#4285f4]" />
                      <span className="w-2 h-2 rounded-full bg-[#fbbc04]" />
                      <span className="w-2 h-2 rounded-full bg-[#34a853]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#3c4043] dark:text-[#bdc1c6]">
                      PM CORE PILLARS
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#1a73e8] dark:text-[#8ab4f8] border border-blue-200 dark:border-blue-900/40">
                    4 Dimensions
                  </span>
                </div>

                {/* 4 Dimension Cards (2x2 Grid with icons & descriptions) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  
                  {/* Dimension 1: Product Sense */}
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#f8fafd] dark:bg-[#1f2025] border border-[#e8eaed] dark:border-[#2d2f34]">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#1a73e8] dark:text-[#8ab4f8] flex items-center justify-center shrink-0">
                      <User className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-xs text-[#202124] dark:text-[#f1f3f4]">
                        Product Sense
                      </div>
                      <div className="text-[11px] text-[#5f6368] dark:text-[#9aa0a6] leading-snug mt-0.5">
                        User empathy, problem framing, frictionless UX
                      </div>
                    </div>
                  </div>

                  {/* Dimension 2: Technical PM */}
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#f8fafd] dark:bg-[#1f2025] border border-[#e8eaed] dark:border-[#2d2f34]">
                    <div className="w-9 h-9 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-xs text-[#202124] dark:text-[#f1f3f4]">
                        Technical PM
                      </div>
                      <div className="text-[11px] text-[#5f6368] dark:text-[#9aa0a6] leading-snug mt-0.5">
                        APIs, architecture, dependencies, technical trade-offs
                      </div>
                    </div>
                  </div>

                  {/* Dimension 3: Analytics & OKRs */}
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#f8fafd] dark:bg-[#1f2025] border border-[#e8eaed] dark:border-[#2d2f34]">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-xs text-[#202124] dark:text-[#f1f3f4]">
                        Analytics & OKRs
                      </div>
                      <div className="text-[11px] text-[#5f6368] dark:text-[#9aa0a6] leading-snug mt-0.5">
                        North Star metrics, experimentation, outcome measurement
                      </div>
                    </div>
                  </div>

                  {/* Dimension 4: Leadership */}
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#f8fafd] dark:bg-[#1f2025] border border-[#e8eaed] dark:border-[#2d2f34]">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-xs text-[#202124] dark:text-[#f1f3f4]">
                        Leadership
                      </div>
                      <div className="text-[11px] text-[#5f6368] dark:text-[#9aa0a6] leading-snug mt-0.5">
                        Influence without authority, cross-functional alignment
                      </div>
                    </div>
                  </div>

                </div>

                {/* PROMINENT HDNB CERTIFIED PM SECTION - Explicitly Retained & Highlighted */}
                <div className="pt-2.5 border-t border-[#e8eaed] dark:border-[#2d2f34] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-[#137333] dark:text-[#81c995] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-bold text-xs text-[#202124] dark:text-[#e8eaed]">
                        HDNB Certified PM
                      </span>
                      <span className="text-[10px] text-[#5f6368] dark:text-[#9aa0a6]">
                        • Human Development Network (Batch 1B8)
                      </span>
                    </div>
                  </div>
                  <a
                    href="#certifications"
                    className="text-[#1a73e8] dark:text-[#8ab4f8] hover:underline font-semibold text-[11px] flex items-center gap-1 shrink-0"
                  >
                    <span>Credentials</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


