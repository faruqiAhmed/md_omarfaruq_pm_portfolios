import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Settings, 
  Layers, 
  BarChart3, 
  Wrench, 
  Box, 
  Compass, 
  GitFork, 
  FileText, 
  Search, 
  Layout, 
  Users, 
  Map, 
  TrendingUp, 
  Rocket, 
  Zap, 
  Target, 
  ShieldCheck, 
  Cloud,
  Cpu,
  Database,
  Smartphone,
  GitBranch,
  Terminal,
  Kanban,
  CheckCircle2
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getTabIcon = (index: number, isActive: boolean) => {
    switch (index) {
      case 0:
        return <Layers className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#1a73e8]'}`} />;
      case 1:
        return <Settings className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#ea4335]'}`} />;
      case 2:
        return <BarChart3 className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#34a853]'}`} />;
      case 3:
        return <Wrench className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#f9ab00]'}`} />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  const getSkillAvatar = (skillName: string, catIndex: number, skillIndex: number) => {
    // Specific icon and background matching reference
    if (catIndex === 0) {
      switch (skillIndex) {
        case 0: // Product Strategy & Vision
          return { icon: <Compass className="w-4 h-4 text-[#1a73e8]" />, bg: 'bg-[#eff6ff] dark:bg-blue-950/40' };
        case 1: // SDLC & Agile Delivery
          return { icon: <GitFork className="w-4 h-4 text-[#16a34a]" />, bg: 'bg-[#f0fdf4] dark:bg-emerald-950/40' };
        case 2: // Business Requirements & PRDs
          return { icon: <Users className="w-4 h-4 text-[#7c3aed]" />, bg: 'bg-[#f5f3ff] dark:bg-purple-950/40' };
        case 3: // User & Market Research
          return { icon: <Search className="w-4 h-4 text-[#059669]" />, bg: 'bg-[#ecfdf5] dark:bg-teal-950/40' };
        case 4: // Wireframing & UI/UX
          return { icon: <Layout className="w-4 h-4 text-[#e11d48]" />, bg: 'bg-[#fff1f2] dark:bg-rose-950/40' };
        case 5: // Stakeholder Management
          return { icon: <Users className="w-4 h-4 text-[#1a73e8]" />, bg: 'bg-[#eff6ff] dark:bg-blue-950/40' };
        case 6: // Product Roadmap Planning
          return { icon: <Map className="w-4 h-4 text-[#d97706]" />, bg: 'bg-[#fffbeb] dark:bg-amber-950/40' };
        case 7: // Data-Driven Decision Making
          return { icon: <TrendingUp className="w-4 h-4 text-[#7c3aed]" />, bg: 'bg-[#f5f3ff] dark:bg-purple-950/40' };
        case 8: // Go-to-Market Strategy
          return { icon: <Rocket className="w-4 h-4 text-[#0891b2]" />, bg: 'bg-[#f0fdfa] dark:bg-cyan-950/40' };
        default:
          return { icon: <CheckCircle2 className="w-4 h-4 text-[#1a73e8]" />, bg: 'bg-[#eff6ff] dark:bg-blue-950/40' };
      }
    }

    if (catIndex === 1) {
      const icons = [
        { icon: <Smartphone className="w-4 h-4 text-[#1a73e8]" />, bg: 'bg-[#eff6ff] dark:bg-blue-950/40' },
        { icon: <Cpu className="w-4 h-4 text-[#ea4335]" />, bg: 'bg-[#fff1f2] dark:bg-rose-950/40' },
        { icon: <Cloud className="w-4 h-4 text-[#f59e0b]" />, bg: 'bg-[#fffbeb] dark:bg-amber-950/40' },
        { icon: <Database className="w-4 h-4 text-[#16a34a]" />, bg: 'bg-[#f0fdf4] dark:bg-emerald-950/40' },
        { icon: <Rocket className="w-4 h-4 text-[#7c3aed]" />, bg: 'bg-[#f5f3ff] dark:bg-purple-950/40' },
        { icon: <GitBranch className="w-4 h-4 text-[#0891b2]" />, bg: 'bg-[#f0fdfa] dark:bg-cyan-950/40' }
      ];
      return icons[skillIndex % icons.length];
    }

    if (catIndex === 2) {
      const icons = [
        { icon: <Target className="w-4 h-4 text-[#1a73e8]" />, bg: 'bg-[#eff6ff] dark:bg-blue-950/40' },
        { icon: <Kanban className="w-4 h-4 text-[#16a34a]" />, bg: 'bg-[#f0fdf4] dark:bg-emerald-950/40' },
        { icon: <BarChart3 className="w-4 h-4 text-[#7c3aed]" />, bg: 'bg-[#f5f3ff] dark:bg-purple-950/40' },
        { icon: <GitFork className="w-4 h-4 text-[#d97706]" />, bg: 'bg-[#fffbeb] dark:bg-amber-950/40' },
        { icon: <Users className="w-4 h-4 text-[#0891b2]" />, bg: 'bg-[#f0fdfa] dark:bg-cyan-950/40' }
      ];
      return icons[skillIndex % icons.length];
    }

    // Category 3: Tools & Product Stack
    const toolIcons = [
      { icon: <Layout className="w-4 h-4 text-[#e11d48]" />, bg: 'bg-[#fff1f2] dark:bg-rose-950/40' },
      { icon: <Kanban className="w-4 h-4 text-[#1a73e8]" />, bg: 'bg-[#eff6ff] dark:bg-blue-950/40' },
      { icon: <BarChart3 className="w-4 h-4 text-[#7c3aed]" />, bg: 'bg-[#f5f3ff] dark:bg-purple-950/40' },
      { icon: <Terminal className="w-4 h-4 text-[#ea4335]" />, bg: 'bg-[#fff1f2] dark:bg-rose-950/40' },
      { icon: <FileText className="w-4 h-4 text-[#16a34a]" />, bg: 'bg-[#f0fdf4] dark:bg-emerald-950/40' }
    ];
    return toolIcons[skillIndex % toolIcons.length];
  };

  const getProficiencyBadge = (level: string) => {
    if (level === 'Expert') {
      return 'bg-[#eff6ff] text-[#1a73e8] dark:bg-blue-950/50 dark:text-[#8ab4f8]';
    }
    return 'bg-[#ecfdf5] text-[#059669] dark:bg-emerald-950/50 dark:text-[#4ade80]';
  };

  const currentCategory = SKILL_CATEGORIES[activeTab];

  return (
    <section id="skills" className="py-16 md:py-24 bg-[#fafbfd] dark:bg-[#0f1013] border-t border-[#dadce0] dark:border-[#2d2f34] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
            <Settings className="w-4 h-4 text-[#1a73e8] dark:text-[#8ab4f8]" />
            <span>PRODUCT & TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] dark:text-[#f3f4f6] tracking-tight">
            Skill Set & Strategic Toolchain
          </h2>
          <p className="text-sm sm:text-base text-[#4b5563] dark:text-[#9ca3af] leading-relaxed">
            A balanced matrix of business strategy, qualitative discovery, framework prioritization, and direct engineering systems fluency.
          </p>
        </div>

        {/* Tab Selection Navigation Pills */}
        <div className="flex flex-wrap items-center gap-2.5 pb-2 mb-10">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                id={`skills-tab-${idx}`}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#1a73e8] text-white shadow-xs'
                    : 'bg-white dark:bg-[#18191c] text-[#4b5563] dark:text-[#bdc1c6] hover:bg-[#f1f3f4] dark:hover:bg-[#25272c] hover:text-[#111827] dark:hover:text-white border border-[#dadce0] dark:border-[#35383f]'
                }`}
              >
                {getTabIcon(idx, isActive)}
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="space-y-6">
          {/* Active Category Header */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-1">
            <div className="flex items-center gap-2.5">
              <Box className="w-5 h-5 sm:w-6 sm:h-6 text-[#1a73e8] dark:text-[#8ab4f8]" />
              <h3 className="text-xl sm:text-2xl font-bold text-[#111827] dark:text-[#f3f4f6]">
                {currentCategory.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#64748b] dark:text-[#94a3b8]">
              {currentCategory.subtitle}.
            </p>
          </div>

          {/* 3x3 Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {currentCategory.skills.map((skill, sIdx) => {
              const avatar = getSkillAvatar(skill.name, activeTab, sIdx);
              return (
                <div
                  key={sIdx}
                  className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#18191c] border border-[#dadce0] dark:border-[#2d2f34] hover:border-[#1a73e8]/70 dark:hover:border-[#8ab4f8]/70 transition-all flex flex-col justify-between space-y-3 hover:shadow-md"
                >
                  <div className="space-y-3">
                    {/* Top Row: Icon Avatar + Title + Level Badge */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${avatar.bg}`}>
                          {avatar.icon}
                        </div>
                        <h4 className="text-sm font-bold text-[#111827] dark:text-[#f3f4f6] leading-snug truncate">
                          {skill.name}
                        </h4>
                      </div>
                      <span className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full shrink-0 ${getProficiencyBadge(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>

                    {/* Description Text */}
                    <p className="text-xs text-[#4b5563] dark:text-[#9ca3af] leading-relaxed">
                      {skill.context}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical PM Advantage Highlight Box (Dark Navy matching image) */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#0c1527] dark:bg-[#0a0f1d] text-white border border-[#1e293b] shadow-xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#38bdf8]">
            <Zap className="w-4 h-4 text-[#38bdf8]" />
            <span>THE TECHNICAL PRODUCT MANAGEMENT EDGE AT GOOGLE SCALE</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-1">
            {/* Card 1: Realistic Feasibility Scoping */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1e3a8a] flex items-center justify-center shrink-0">
                <Target className="w-5 h-5 text-[#60a5fa]" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-sm sm:text-base font-bold text-white">
                  Realistic Feasibility Scoping
                </h4>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  4+ years of native mobile and backend integration prevent overpromising features that incur hidden database refactors or latency spikes.
                </p>
              </div>
            </div>

            {/* Card 2: High-Velocity Engineering Trust */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#312e81] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#a5b4fc]" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-sm sm:text-base font-bold text-white">
                  High-Velocity Engineering Trust
                </h4>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  SWE's don't need to translate PRDs into tech tasks; edge cases, idempotency tokens, and caching policies are defined up-front.
                </p>
              </div>
            </div>

            {/* Card 3: Root-Cause Data Telemetry */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#064e3b] flex items-center justify-center shrink-0">
                <Cloud className="w-5 h-5 text-[#6ee7b7]" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-sm sm:text-base font-bold text-white">
                  Root-Cause Data Telemetry
                </h4>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Ability to decipher network errors, crash stack-traces, and server API payload bottlenecks to triage issues before they affect churn.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
