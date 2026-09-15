import React from 'react';
import { 
  LayoutGrid, 
  User, 
  Code2, 
  BarChart3, 
  Users, 
  Target, 
  Rocket, 
  ArrowRight 
} from 'lucide-react';

export const GooglePmPillarsSection: React.FC = () => {
  return (
    <section id="google-pillars" className="py-20 bg-[#f8fafd] dark:bg-[#0b0f17] border-y border-[#e2e8f0] dark:border-[#1e293b] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badge */}
        <div className="mb-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eff6ff] dark:bg-[#1e293b] border border-[#bfdbfe] dark:border-[#2563eb]/40 text-xs font-semibold text-[#2563eb] dark:text-[#60a5fa] shadow-2xs">
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>PM Competency Framework</span>
          </div>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="max-w-4xl mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0f172a] dark:text-white tracking-tight leading-tight">
            How I Apply Core PM Competencies
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569] dark:text-[#94a3b8] leading-relaxed">
            I combine product thinking, technical depth, analytical rigor, and cross-functional leadership to turn ambiguous customer problems into measurable product outcomes.
          </p>
        </div>

        {/* Top 4 PM Competency Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Card 1: Product Sense & Problem Framing */}
          <div className="bg-white dark:bg-[#131b2e] rounded-2xl p-6 border border-[#e2e8f0] dark:border-[#1e293b] flex flex-col justify-between shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#eff6ff] dark:bg-[#1e293b] text-[#2563eb] dark:text-[#60a5fa] flex items-center justify-center mb-5">
                <User className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-[#0f172a] dark:text-white leading-snug">
                1. Product Sense &amp; Problem Framing
              </h3>
              <p className="mt-2 text-xs sm:text-[13px] text-[#64748b] dark:text-[#94a3b8] leading-relaxed">
                Understand users, identify real problems, and define the right opportunity.
              </p>
            </div>
            <div className="mt-6 p-3.5 rounded-xl bg-[#f0f7ff] dark:bg-[#0f1d38] border border-[#dbeafe]/80 dark:border-[#1e3a8a]/40 text-xs font-medium text-[#1d4ed8] dark:text-[#93c5fd] space-y-1.5">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]"></span>
                  User empathy
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]"></span>
                  First-principles thinking
                </span>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]"></span>
                  Problem discovery
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]"></span>
                  Scope definition
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Technical Depth & Product Engineering */}
          <div className="bg-white dark:bg-[#131b2e] rounded-2xl p-6 border border-[#e2e8f0] dark:border-[#1e293b] flex flex-col justify-between shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#f5f3ff] dark:bg-[#251b3d] text-[#7c3aed] dark:text-[#c084fc] flex items-center justify-center mb-5">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-[#0f172a] dark:text-white leading-snug">
                2. Technical Depth &amp; Product Engineering
              </h3>
              <p className="mt-2 text-xs sm:text-[13px] text-[#64748b] dark:text-[#94a3b8] leading-relaxed">
                Understand system architecture, apis, dependencies and make the right trade-offs.
              </p>
            </div>
            <div className="mt-6 p-3.5 rounded-xl bg-[#faf7ff] dark:bg-[#1f1533] border border-[#ede9fe]/80 dark:border-[#4c1d95]/40 text-xs font-medium text-[#6d28d9] dark:text-[#d8b4fe] space-y-1.5">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]"></span>
                  Architecture
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]"></span>
                  APIs
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]"></span>
                  Technical trade-offs
                </span>
              </div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]"></span>
                  Engineering collaboration
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Analytics, Metrics & Execution */}
          <div className="bg-white dark:bg-[#131b2e] rounded-2xl p-6 border border-[#e2e8f0] dark:border-[#1e293b] flex flex-col justify-between shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#ecfdf5] dark:bg-[#122e23] text-[#059669] dark:text-[#34d399] flex items-center justify-center mb-5">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-[#0f172a] dark:text-white leading-snug">
                3. Analytics, Metrics &amp; Execution
              </h3>
              <p className="mt-2 text-xs sm:text-[13px] text-[#64748b] dark:text-[#94a3b8] leading-relaxed">
                Use data to validate decisions, measure impact and drive continuous improvement.
              </p>
            </div>
            <div className="mt-6 p-3.5 rounded-xl bg-[#f0fdf4] dark:bg-[#0c2419] border border-[#d1fae5]/80 dark:border-[#065f46]/40 text-xs font-medium text-[#047857] dark:text-[#86efac] space-y-1.5">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669]"></span>
                  OKRs
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669]"></span>
                  North Star metrics
                </span>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669]"></span>
                  Experimentation
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669]"></span>
                  Data-driven prioritization
                </span>
              </div>
            </div>
          </div>

          {/* Card 4: Leadership & Cross-Functional Alignment */}
          <div className="bg-white dark:bg-[#131b2e] rounded-2xl p-6 border border-[#e2e8f0] dark:border-[#1e293b] flex flex-col justify-between shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#fffbeb] dark:bg-[#34240f] text-[#d97706] dark:text-[#fbbf24] flex items-center justify-center mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-[#0f172a] dark:text-white leading-snug">
                4. Leadership &amp; Cross-Functional Alignment
              </h3>
              <p className="mt-2 text-xs sm:text-[13px] text-[#64748b] dark:text-[#94a3b8] leading-relaxed">
                Build trust, influence without authority, and get things done together.
              </p>
            </div>
            <div className="mt-6 p-3.5 rounded-xl bg-[#fffdf0] dark:bg-[#281b0a] border border-[#fef3c7]/80 dark:border-[#78350f]/40 text-xs font-medium text-[#b45309] dark:text-[#fde68a] space-y-1.5">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]"></span>
                  Stakeholder alignment
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]"></span>
                  Decision-making
                </span>
              </div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]"></span>
                  Agile execution
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]"></span>
                  Team collaboration
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Omar's Track Record Container */}
        <div className="mt-10 rounded-3xl bg-[#f0f6ff] dark:bg-[#0f172a] p-6 sm:p-8 border border-[#dbeafe] dark:border-[#1e293b]">
          
          {/* Track Record Section Header */}
          <div className="flex items-start gap-3.5 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#dbeafe] dark:bg-[#1e3a8a]/50 text-[#2563eb] dark:text-[#60a5fa] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] dark:text-white tracking-tight">
                Omar's Track Record
              </h3>
              <p className="text-xs sm:text-sm text-[#64748b] dark:text-[#94a3b8] mt-1">
                These are the real-world examples from my experience that show how I apply these competencies across product, engineering, and business.
              </p>
            </div>
          </div>

          {/* 4 White Evidence Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Track 1: Product Sense */}
            <div className="bg-white dark:bg-[#131b2e] rounded-2xl p-5 border border-[#e2e8f0] dark:border-[#1e293b] flex flex-col justify-between shadow-2xs hover:border-[#93c5fd] dark:hover:border-[#2563eb] transition-all">
              <div>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#eff6ff] dark:bg-[#1e293b] text-[#2563eb] dark:text-[#60a5fa] flex items-center justify-center shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-[#0f172a] dark:text-white text-sm sm:text-[15px]">
                    Product Sense
                  </h4>
                </div>
                <p className="text-xs text-[#475569] dark:text-[#cbd5e1] leading-relaxed my-3">
                  Identified user friction in Google Maps mobility and translated it into a structured PRD with clear user needs and business goals.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="#case-studies"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#2563eb] dark:text-[#60a5fa] bg-[#eff6ff] dark:bg-[#1e293b] hover:bg-[#dbeafe] dark:hover:bg-[#2563eb]/20 transition-colors w-fit group"
                >
                  <span>Google Maps Mobility PRD</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* Track 2: Technical Depth */}
            <div className="bg-white dark:bg-[#131b2e] rounded-2xl p-5 border border-[#e2e8f0] dark:border-[#1e293b] flex flex-col justify-between shadow-2xs hover:border-[#c084fc] dark:hover:border-[#7c3aed] transition-all">
              <div>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#f5f3ff] dark:bg-[#251b3d] text-[#7c3aed] dark:text-[#c084fc] flex items-center justify-center shrink-0">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-[#0f172a] dark:text-white text-sm sm:text-[15px]">
                    Technical Depth
                  </h4>
                </div>
                <p className="text-xs text-[#475569] dark:text-[#cbd5e1] leading-relaxed my-3">
                  4+ years of iOS engineering experience with Swift, SwiftUI, UIKit and mobile product architecture, enabling better technical decisions and collaboration.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="#tech-experience"
                  id="track-record-ios-engineer-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent('set-timeline-filter', { detail: 'engineering' }));
                    const target = document.getElementById('milestone-sharetrip-ios') || document.getElementById('tech-experience') || document.getElementById('timeline');
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#2563eb] dark:text-[#60a5fa] bg-[#eff6ff] dark:bg-[#1e293b] hover:bg-[#dbeafe] dark:hover:bg-[#2563eb]/20 transition-colors w-fit group cursor-pointer"
                >
                  <span>iOS Engineer Experience</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* Track 3: Analytics & Execution */}
            <div className="bg-white dark:bg-[#131b2e] rounded-2xl p-5 border border-[#e2e8f0] dark:border-[#1e293b] flex flex-col justify-between shadow-2xs hover:border-[#6ee7b7] dark:hover:border-[#059669] transition-all">
              <div>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#ecfdf5] dark:bg-[#122e23] text-[#059669] dark:text-[#34d399] flex items-center justify-center shrink-0">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-[#0f172a] dark:text-white text-sm sm:text-[15px]">
                    Analytics &amp; Execution
                  </h4>
                </div>
                <p className="text-xs text-[#475569] dark:text-[#cbd5e1] leading-relaxed my-3">
                  Defined success metrics, OKRs and prioritization frameworks, and drove measurable outcomes across multiple product case studies.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="#case-studies"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#2563eb] dark:text-[#60a5fa] bg-[#eff6ff] dark:bg-[#1e293b] hover:bg-[#dbeafe] dark:hover:bg-[#2563eb]/20 transition-colors w-fit group"
                >
                  <span>Case Studies &amp; Roadmaps</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* Track 4: Leadership */}
            <div className="bg-white dark:bg-[#131b2e] rounded-2xl p-5 border border-[#e2e8f0] dark:border-[#1e293b] flex flex-col justify-between shadow-2xs hover:border-[#fcd34d] dark:hover:border-[#d97706] transition-all">
              <div>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#fffbeb] dark:bg-[#34240f] text-[#d97706] dark:text-[#fbbf24] flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-[#0f172a] dark:text-white text-sm sm:text-[15px]">
                    Leadership
                  </h4>
                </div>
                <p className="text-xs text-[#475569] dark:text-[#cbd5e1] leading-relaxed my-3">
                  Led cross-functional teams, aligned stakeholders, and delivered 0→1 products from ideation to launch.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="#experience"
                  id="track-record-leadership-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent('set-timeline-filter', { detail: 'pm' }));
                    const target = document.getElementById('milestone-nexcent-pm') || document.getElementById('experience') || document.getElementById('timeline');
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#2563eb] dark:text-[#60a5fa] bg-[#eff6ff] dark:bg-[#1e293b] hover:bg-[#dbeafe] dark:hover:bg-[#2563eb]/20 transition-colors w-fit group cursor-pointer"
                >
                  <span>0→1 Product Experience</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Banner: Turning Insights into Impact */}
        <div className="mt-8 rounded-2xl bg-[#f0f6ff]/90 dark:bg-[#0f172a]/90 border border-[#dbeafe] dark:border-[#1e293b] p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#dbeafe] dark:bg-[#1e3a8a]/60 text-[#2563eb] dark:text-[#60a5fa] flex items-center justify-center shrink-0">
              <Rocket className="w-5 h-5" />
            </div>
            <div className="h-9 w-px bg-[#bfdbfe] dark:bg-[#1e3a8a] hidden md:block"></div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#1d4ed8] dark:text-[#60a5fa]">
                Turning Insights into Impact
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94a3b8] mt-0.5">
                With the right mix of product sense, engineering depth, and execution mindset, I build products that users love and businesses grow.
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-end md:shrink-0 pr-2">
            <div className="relative inline-block text-right">
              <span className="font-['Caveat',_'Brush_Script_MT',_cursive] text-2xl sm:text-3xl font-semibold text-[#334155] dark:text-[#cbd5e1] select-none tracking-wide">
                Omar Faruq
              </span>
              <svg className="w-24 h-2 text-[#475569] dark:text-[#94a3b8] -mt-1 ml-auto" viewBox="0 0 100 10" fill="none">
                <path d="M2 7C30 3 70 2 98 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
