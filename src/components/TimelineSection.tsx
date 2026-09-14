import React, { useState } from 'react';
import { CAREER_MILESTONES } from '../data/portfolioData';
import { 
  Briefcase, 
  MapPin, 
  Award, 
  GraduationCap, 
  Code, 
  Calendar,
  CheckCircle2,
  Trophy,
  ArrowDownCircle,
  Compass,
  Rocket,
  Users,
  TrendingUp
} from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'pm' | 'engineering' | 'education-recognition'>('all');

  const filterMilestones = CAREER_MILESTONES.filter((m) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'pm') return m.category === 'pm';
    if (activeFilter === 'engineering') return m.category === 'engineering';
    if (activeFilter === 'education-recognition') return m.category === 'education' || m.category === 'recognition';
    return true;
  });

  const getNodeColor = (id: string, category: string) => {
    switch (id) {
      case 'nexcent-pm':
        return 'bg-[#1a73e8] text-white border-white dark:border-[#111215]';
      case 'sharetrip-ios':
        return 'bg-[#16a34a] text-white border-white dark:border-[#111215]';
      case 'walletmix-ios':
        return 'bg-[#7c3aed] text-white border-white dark:border-[#111215]';
      case 'jr-consulting-ios':
        return 'bg-[#0284c7] text-white border-white dark:border-[#111215]';
      case 'ict-scholar':
        return 'bg-[#f59e0b] text-white border-white dark:border-[#111215]';
      case 'city-university-degree':
        return 'bg-[#1a73e8] text-white border-white dark:border-[#111215]';
      default:
        return category === 'pm' ? 'bg-[#1a73e8] text-white' : 'bg-[#16a34a] text-white';
    }
  };

  const getNodeIcon = (id: string, category: string) => {
    if (id === 'nexcent-pm' || id === 'sharetrip-ios') return <Briefcase className="w-4 h-4" />;
    if (id === 'walletmix-ios' || id === 'jr-consulting-ios') return <Code className="w-4 h-4" />;
    if (id === 'ict-scholar') return <GraduationCap className="w-4 h-4" />;
    if (id === 'city-university-degree') return <GraduationCap className="w-4 h-4" />;
    if (category === 'pm') return <Briefcase className="w-4 h-4" />;
    return <Code className="w-4 h-4" />;
  };

  const getPeriodColor = (id: string) => {
    switch (id) {
      case 'nexcent-pm':
        return 'text-[#1a73e8] dark:text-[#8ab4f8]';
      case 'sharetrip-ios':
        return 'text-[#16a34a] dark:text-[#4ade80]';
      case 'walletmix-ios':
        return 'text-[#7c3aed] dark:text-[#c084fc]';
      case 'jr-consulting-ios':
        return 'text-[#0284c7] dark:text-[#38bdf8]';
      case 'ict-scholar':
        return 'text-[#d97706] dark:text-[#fbbf24]';
      case 'city-university-degree':
        return 'text-[#1a73e8] dark:text-[#8ab4f8]';
      default:
        return 'text-[#1a73e8] dark:text-[#8ab4f8]';
    }
  };

  const getBadgeStyle = (id: string) => {
    switch (id) {
      case 'nexcent-pm':
        return 'bg-[#e8f0fe] text-[#1a73e8] border-[#d2e3fc] dark:bg-blue-950/50 dark:text-[#8ab4f8] dark:border-blue-900/40';
      case 'sharetrip-ios':
        return 'bg-[#dcfce7] text-[#15803d] border-[#bbf7d0] dark:bg-emerald-950/50 dark:text-[#4ade80] dark:border-emerald-900/40';
      case 'walletmix-ios':
        return 'bg-[#f3e8ff] text-[#7e22ce] border-[#e9d5ff] dark:bg-purple-950/50 dark:text-[#d8b4fe] dark:border-purple-900/40';
      case 'jr-consulting-ios':
        return 'bg-[#e0f2fe] text-[#0369a1] border-[#bae6fd] dark:bg-sky-950/50 dark:text-[#7dd3fc] dark:border-sky-900/40';
      case 'ict-scholar':
        return 'bg-[#fef3c7] text-[#b45309] border-[#fde68a] dark:bg-amber-950/50 dark:text-[#fcd34d] dark:border-amber-900/40';
      case 'city-university-degree':
        return 'bg-[#e8f0fe] text-[#1a73e8] border-[#d2e3fc] dark:bg-blue-950/50 dark:text-[#8ab4f8] dark:border-blue-900/40';
      default:
        return 'bg-[#f1f3f4] text-[#3c4043] border-[#dadce0] dark:bg-[#202227] dark:text-[#9aa0a6] dark:border-[#35383f]';
    }
  };

  return (
    <section id="timeline" className="py-16 md:py-24 bg-[#f8fafd] dark:bg-[#111215] border-t border-[#dadce0] dark:border-[#2d2f34] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
              <Calendar className="w-4 h-4 text-[#1a73e8] dark:text-[#8ab4f8]" />
              <span>CAREER TRAJECTORY & TRACK RECORD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] dark:text-[#f3f4f6] tracking-tight">
              Systems Engineering Roots to 0-to-1 Product Ownership
            </h2>
            <p className="text-sm sm:text-base text-[#4b5563] dark:text-[#9ca3af] leading-relaxed">
              Tracing my journey from deep iOS native architecture and distributed system specialization to cross-functional product leadership, PRD specification, and scaling fintech ecosystems.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { label: 'All Milestones', key: 'all' },
              { label: 'Product Management', key: 'pm' },
              { label: 'iOS Systems', key: 'engineering' },
              { label: 'Recognition & Degrees', key: 'education-recognition' }
            ].map((f) => (
              <button
                key={f.key}
                id={`timeline-filter-${f.key}`}
                onClick={() => setActiveFilter(f.key as any)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === f.key
                    ? 'bg-[#1a73e8] text-white shadow-xs'
                    : 'bg-white dark:bg-[#1e2025] text-[#4b5563] dark:text-[#bdc1c6] border border-[#dadce0] dark:border-[#35383f] hover:bg-[#f1f3f4] dark:hover:bg-[#282a30] hover:text-[#111827] dark:hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Stream */}
        <div className="relative border-l-2 border-[#dadce0] dark:border-[#2d3139] ml-4 sm:ml-7 pl-6 sm:pl-9 space-y-8">
          {filterMilestones.map((milestone) => {
            const isNexcent = milestone.id === 'nexcent-pm';

            return (
              <div
                key={milestone.id}
                id={`milestone-${milestone.id}`}
                className="relative group"
              >
                {/* Timeline Circular Icon Node */}
                <div className={`absolute -left-[38px] sm:-left-[50px] top-4 sm:top-5 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center shadow-xs ${getNodeColor(milestone.id, milestone.category)}`}>
                  {getNodeIcon(milestone.id, milestone.category)}
                </div>

                {/* Milestone Card Container */}
                <div className="bg-white dark:bg-[#18191c] rounded-2xl border border-[#dadce0] dark:border-[#2d2f34] hover:border-[#1a73e8]/60 dark:hover:border-[#8ab4f8]/60 p-5 sm:p-7 shadow-2xs hover:shadow-md transition-all duration-200">
                  
                  {/* Case 1: Nexcent (Product Manager) with 2-Column Wins & Scope */}
                  {isNexcent ? (
                    <div className="space-y-5">
                      {/* Top Header */}
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-xs font-bold uppercase tracking-wider ${getPeriodColor(milestone.id)}`}>
                            {milestone.period}
                          </span>
                          <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${getBadgeStyle(milestone.id)}`}>
                            {milestone.highlightBadge}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-[#111827] dark:text-[#f3f4f6]">
                          {milestone.role}
                        </h3>

                        <div className="flex items-center gap-2 text-xs sm:text-sm text-[#4b5563] dark:text-[#9ca3af] flex-wrap font-medium">
                          <span className="font-semibold text-[#111827] dark:text-white">{milestone.company}</span>
                          <span>|</span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-[#1a73e8] dark:text-[#8ab4f8]" />
                            {milestone.location}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-[#4b5563] dark:text-[#9ca3af] leading-relaxed pt-1">
                          {milestone.description}
                        </p>
                      </div>

                      {/* Two Box Callouts: Key Wins (Green) & Scope (Blue) */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-1">
                        
                        {/* Key Wins & Shipped Impact (Left Box) */}
                        <div className="p-4 sm:p-5 rounded-xl bg-[#f0fdf4] dark:bg-[#0f1f14] border border-[#bbf7d0] dark:border-emerald-900/40 space-y-3">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#15803d] dark:text-[#4ade80]">
                            <Trophy className="w-4 h-4 text-[#16a34a] dark:text-[#4ade80] shrink-0" />
                            <span>KEY WINS & SHIPPED IMPACT</span>
                          </div>
                          <ul className="space-y-2 text-xs sm:text-[13px] text-[#166534] dark:text-[#bbf7d0] leading-relaxed">
                            {milestone.keyWins.map((win, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#16a34a] dark:text-[#4ade80] shrink-0 mt-0.5" />
                                <span>{win}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Scope & Responsibilities (Right Box) */}
                        <div className="p-4 sm:p-5 rounded-xl bg-[#eff6ff] dark:bg-[#0e1b2f] border border-[#bfdbfe] dark:border-blue-900/40 space-y-3">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1d4ed8] dark:text-[#60a5fa]">
                            <Briefcase className="w-4 h-4 text-[#2563eb] dark:text-[#60a5fa] shrink-0" />
                            <span>SCOPE & RESPONSIBILITIES</span>
                          </div>
                          <ul className="space-y-2 text-xs sm:text-[13px] text-[#1e40af] dark:text-[#bfdbfe] leading-relaxed">
                            {milestone.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-[#2563eb] dark:text-[#60a5fa] font-bold shrink-0 mt-0.5">•</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>

                      {/* Tech & Competencies Tags */}
                      <div className="pt-2 flex flex-wrap items-center gap-2">
                        <span className="text-xs font-medium text-[#64748b] dark:text-[#94a3b8]">
                          Core Tech & Competencies:
                        </span>
                        {milestone.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-xs font-semibold bg-[#f1f5f9] dark:bg-[#202227] text-[#334155] dark:text-[#cbd5e1] border border-[#e2e8f0] dark:border-[#35383f]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    /* Case 2: Standard Milestone Card (ShareTrip, Walletmix, Jr Consulting, ICT Scholar, CSE Degree) */
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                        
                        {/* Left Info Column */}
                        <div className="lg:col-span-6 space-y-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className={`text-xs font-bold uppercase tracking-wider ${getPeriodColor(milestone.id)}`}>
                              {milestone.period}
                            </span>
                            <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${getBadgeStyle(milestone.id)}`}>
                              {milestone.highlightBadge}
                            </span>
                          </div>

                          <h3 className="text-lg sm:text-xl font-bold text-[#111827] dark:text-[#f3f4f6]">
                            {milestone.role}
                          </h3>

                          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#4b5563] dark:text-[#9ca3af] flex-wrap font-medium">
                            <span className="font-semibold text-[#111827] dark:text-white">{milestone.company}</span>
                            <span>|</span>
                            <span className="inline-flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-[#1a73e8] dark:text-[#8ab4f8]" />
                              {milestone.location}
                            </span>
                          </div>

                          <p className="text-xs sm:text-sm text-[#4b5563] dark:text-[#9ca3af] leading-relaxed pt-1">
                            {milestone.description}
                          </p>
                        </div>

                        {/* Right Callout Box */}
                        <div className="lg:col-span-6">
                          {/* Box color variations based on milestone */}
                          {milestone.id === 'sharetrip-ios' && (
                            <div className="p-4 rounded-xl bg-[#eff6ff] dark:bg-[#0e1b2f] border border-[#bfdbfe] dark:border-blue-900/40 space-y-2.5">
                              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1d4ed8] dark:text-[#60a5fa]">
                                <Briefcase className="w-4 h-4 text-[#2563eb] dark:text-[#60a5fa] shrink-0" />
                                <span>IMPACT & ACHIEVEMENTS</span>
                              </div>
                              <ul className="space-y-1.5 text-xs sm:text-[13px] text-[#1e40af] dark:text-[#bfdbfe] leading-relaxed">
                                {milestone.keyWins.map((win, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <span className="text-[#2563eb] dark:text-[#60a5fa] font-bold shrink-0 mt-0.5">•</span>
                                    <span>{win}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {milestone.id === 'walletmix-ios' && (
                            <div className="p-4 rounded-xl bg-[#faf5ff] dark:bg-[#1f152d] border border-[#e9d5ff] dark:border-purple-900/40 space-y-2.5">
                              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7e22ce] dark:text-[#c084fc]">
                                <ArrowDownCircle className="w-4 h-4 text-[#7e22ce] dark:text-[#c084fc] shrink-0" />
                                <span>IMPACT & ACHIEVEMENTS</span>
                              </div>
                              <ul className="space-y-1.5 text-xs sm:text-[13px] text-[#6b21a8] dark:text-[#e9d5ff] leading-relaxed">
                                {milestone.keyWins.map((win, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <span className="text-[#7e22ce] dark:text-[#c084fc] font-bold shrink-0 mt-0.5">•</span>
                                    <span>{win}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {milestone.id === 'jr-consulting-ios' && (
                            <div className="p-4 rounded-xl bg-[#f0f9ff] dark:bg-[#0c1f2e] border border-[#bae6fd] dark:border-sky-900/40 space-y-2.5">
                              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0369a1] dark:text-[#38bdf8]">
                                <Briefcase className="w-4 h-4 text-[#0284c7] dark:text-[#38bdf8] shrink-0" />
                                <span>IMPACT & ACHIEVEMENTS</span>
                              </div>
                              <ul className="space-y-1.5 text-xs sm:text-[13px] text-[#075985] dark:text-[#bae6fd] leading-relaxed">
                                {milestone.keyWins.map((win, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <span className="text-[#0284c7] dark:text-[#38bdf8] font-bold shrink-0 mt-0.5">•</span>
                                    <span>{win}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {milestone.id === 'ict-scholar' && (
                            <div className="p-4 rounded-xl bg-[#fffbeb] dark:bg-[#251b0f] border border-[#fde68a] dark:border-amber-900/40 space-y-2.5">
                              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b45309] dark:text-[#fbbf24]">
                                <Award className="w-4 h-4 text-[#d97706] dark:text-[#fbbf24] shrink-0" />
                                <span>IMPACT</span>
                              </div>
                              <ul className="space-y-1.5 text-xs sm:text-[13px] text-[#92400e] dark:text-[#fde68a] leading-relaxed">
                                {milestone.keyWins.map((win, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <span className="text-[#d97706] dark:text-[#fbbf24] font-bold shrink-0 mt-0.5">•</span>
                                    <span>{win}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {milestone.id === 'city-university-degree' && (
                            <div className="p-4 rounded-xl bg-[#eff6ff] dark:bg-[#0e1b2f] border border-[#bfdbfe] dark:border-blue-900/40 space-y-2.5">
                              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1d4ed8] dark:text-[#60a5fa]">
                                <GraduationCap className="w-4 h-4 text-[#2563eb] dark:text-[#60a5fa] shrink-0" />
                                <span>KEY SKILLS & LEARNINGS</span>
                              </div>
                              <ul className="space-y-1.5 text-xs sm:text-[13px] text-[#1e40af] dark:text-[#bfdbfe] leading-relaxed">
                                {milestone.keyWins.map((win, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <span className="text-[#2563eb] dark:text-[#60a5fa] font-bold shrink-0 mt-0.5">•</span>
                                    <span>{win}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                      </div>

                      {/* Tech & Competencies Tags */}
                      <div className="pt-2 flex flex-wrap items-center gap-2">
                        <span className="text-xs font-medium text-[#64748b] dark:text-[#94a3b8]">
                          {milestone.id === 'ict-scholar' ? 'Core Focus:' : milestone.id === 'city-university-degree' ? 'Core Courses:' : 'Core Tech & Competencies:'}
                        </span>
                        {milestone.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-xs font-semibold bg-[#f1f5f9] dark:bg-[#202227] text-[#334155] dark:text-[#cbd5e1] border border-[#e2e8f0] dark:border-[#35383f]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

        {/* The Bigger Picture Banner matching reference image */}
        <div className="mt-14 bg-[#0c1527] dark:bg-[#0a0f1d] text-white rounded-2xl p-6 sm:p-8 border border-[#1e293b] shadow-xl space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Header */}
            <div className="lg:col-span-5 space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#38bdf8]">
                <Compass className="w-4 h-4 text-[#38bdf8]" />
                <span>THE BIGGER PICTURE</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Building Scalable Products, Empowering Users
              </h3>
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                From systems engineering to product ownership, my journey is driven by one goal — using technology to solve real problems and create sustainable impact.
              </p>
            </div>

            {/* Right 3-Pillar Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#1e293b] lg:pl-8">
              
              {/* Pillar 1 */}
              <div className="space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-[#1e1b4b] flex items-center justify-center mb-2">
                  <Rocket className="w-4 h-4 text-[#818cf8]" />
                </div>
                <h4 className="text-sm font-bold text-white">Product Leadership</h4>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Turning ideas into products that scale.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-[#0c2840] flex items-center justify-center mb-2">
                  <Users className="w-4 h-4 text-[#38bdf8]" />
                </div>
                <h4 className="text-sm font-bold text-white">Cross-Functional Impact</h4>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Bridging business, tech, and user needs.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-[#063327] flex items-center justify-center mb-2">
                  <TrendingUp className="w-4 h-4 text-[#34d399]" />
                </div>
                <h4 className="text-sm font-bold text-white">Long-Term Vision</h4>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Contributing to fintech and digital ecosystems for a more inclusive future.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
