import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy } from '../types';
import {
  ArrowUpRight,
  TrendingUp,
  Layers,
  FileText,
  Compass,
  Cpu,
  BarChart3,
  Users,
  Lightbulb,
  Star,
  Calendar
} from 'lucide-react';

interface CaseStudiesSectionProps {
  onSelectCaseStudy: (caseStudy: CaseStudy, mode?: 'prd' | 'exec') => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onSelectCaseStudy }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Mobility & Super-Apps', 'Fintech', 'Platforms & SaaS', 'Product Teardown'];

  const filteredStudies = selectedFilter === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(cs => cs.category === selectedFilter);

  const getPillarBadgeColor = (pillar?: string) => {
    switch (pillar) {
      case 'Product Sense':
        return 'bg-[#e8f0fe] text-[#1a73e8] border-[#d2e3fc] dark:bg-blue-950/40 dark:text-[#8ab4f8] dark:border-blue-900/40';
      case 'Technical Architecture':
        return 'bg-[#fce8e6] text-[#c5221f] border-[#fad2cf] dark:bg-rose-950/40 dark:text-[#f28b82] dark:border-rose-900/40';
      case 'Analytical Execution':
        return 'bg-[#e6f4ea] text-[#137333] border-[#ceead6] dark:bg-emerald-950/40 dark:text-[#81c995] dark:border-emerald-900/40';
      case 'Leadership':
        return 'bg-[#fef7e0] text-[#b06000] border-[#feefc3] dark:bg-amber-950/40 dark:text-[#fbbf24] dark:border-amber-900/40';
      default:
        return 'bg-[#f1f3f4] text-[#3c4043] border-[#dadce0] dark:bg-[#202227] dark:text-[#9aa0a6] dark:border-[#35383f]';
    }
  };

  const getPillarIcon = (pillar?: string) => {
    switch (pillar) {
      case 'Product Sense':
        return <Compass className="w-3 h-3 shrink-0" />;
      case 'Technical Architecture':
        return <Cpu className="w-3 h-3 shrink-0" />;
      case 'Analytical Execution':
        return <BarChart3 className="w-3 h-3 shrink-0" />;
      case 'Leadership':
        return <Users className="w-3 h-3 shrink-0" />;
      default:
        return <FileText className="w-3 h-3 shrink-0" />;
    }
  };

  const getMetricIcon = (studyId: string, index: number, label: string) => {
    if (label.toLowerCase().includes('rating') || label.toLowerCase().includes('star')) {
      return <Star className="w-3 h-3 text-[#f9ab00] dark:text-[#fdd663] shrink-0 fill-current" />;
    }
    if (label.toLowerCase().includes('user') || label.toLowerCase().includes('coverage') || label.toLowerCase().includes('delivery') || label.toLowerCase().includes('fraud') || label.toLowerCase().includes('active')) {
      return <Users className="w-3 h-3 text-[#1a73e8] dark:text-[#8ab4f8] shrink-0" />;
    }
    if (studyId.includes('google-maps') && index === 2) {
      return <BarChart3 className="w-3 h-3 text-[#1a73e8] dark:text-[#8ab4f8] shrink-0" />;
    }
    return <TrendingUp className="w-3 h-3 text-[#1a73e8] dark:text-[#8ab4f8] shrink-0" />;
  };

  const getStatusBadgeColor = (status?: string) => {
    switch (status) {
      case 'Production':
      case 'In Production':
      case 'Launched':
        return 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/60';
      case 'Strategic Handoff':
      case 'RFC / Proposed':
        return 'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800/60';
      case 'Strategic Teardown':
      default:
        return 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800/60';
    }
  };

  return (
    <section id="case-studies" className="py-16 md:py-24 border-t border-[#dadce0] dark:border-[#2d2f34] bg-[#fafbfd] dark:bg-[#0f1013] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
              <Calendar className="w-4 h-4 text-[#1a73e8] dark:text-[#8ab4f8]" />
              <span>GOOGLE PRD & PRODUCT CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] dark:text-[#f3f4f6] tracking-tight">
              10x Problem Framing to Scaled Production Systems
            </h2>
            <p className="text-sm sm:text-base text-[#4b5563] dark:text-[#9ca3af] leading-relaxed">
              Comprehensive case studies documenting first-principles discovery, non-goals, architecture trade-offs, and measurable North Star OKRs.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-[#1a73e8] text-white shadow-xs'
                    : 'bg-white dark:bg-[#1e2025] text-[#3c4043] dark:text-[#bdc1c6] border border-[#dadce0] dark:border-[#35383f] hover:bg-[#f1f3f4] dark:hover:bg-[#2b2e35] hover:text-[#202124] dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudies.map((study) => {
            // Determine metrics to display
            const metricsToDisplay = study.id.includes('google-maps')
              ? study.keyMetrics.slice(0, 3)
              : study.keyMetrics.slice(0, 2);

            const displayBadgeCode = study.badgeCode || study.prdMetadata?.docId || 'PRD • 2024';
            const displayStatus = study.statusBadge || study.prdMetadata?.status || 'Production';

            return (
              <div
                key={study.id}
                id={`case-card-${study.id}`}
                onClick={() => onSelectCaseStudy(study, 'prd')}
                className="group bg-white dark:bg-[#18191c] rounded-2xl border border-[#dadce0] dark:border-[#2d2f34] hover:border-[#1a73e8]/70 dark:hover:border-[#8ab4f8]/70 p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-lg cursor-pointer"
              >
                <div className="space-y-4">
                  
                  {/* Metadata Badges Row */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {/* Badge 1: PRD Code */}
                    <span className="font-mono text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-md bg-[#f1f3f4] dark:bg-[#202227] border border-[#dadce0]/80 dark:border-[#35383f] text-[#5f6368] dark:text-[#9aa0a6]">
                      {displayBadgeCode}
                    </span>

                    {/* Badge 2: Category */}
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md bg-[#eff6ff] dark:bg-blue-950/50 border border-[#d2e3fc] dark:border-blue-900/40 text-[#1a73e8] dark:text-[#8ab4f8]">
                      {study.category}
                    </span>

                    {/* Badge 3: Pillar Highlight (if available) */}
                    {study.googlePillarHighlight && (
                      <span className={`inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-full border ${getPillarBadgeColor(study.googlePillarHighlight)}`}>
                        {getPillarIcon(study.googlePillarHighlight)}
                        <span>{study.googlePillarHighlight}</span>
                      </span>
                    )}

                    {/* Badge 4: Status */}
                    <span className={`text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-full border ${getStatusBadgeColor(displayStatus)}`}>
                      {displayStatus}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-[#111827] dark:text-[#f3f4f6] group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] transition-colors leading-snug">
                      {study.title}
                    </h3>
                    <p className="text-xs text-[#4b5563] dark:text-[#9ca3af] leading-relaxed line-clamp-2">
                      {study.tagline}
                    </p>
                  </div>

                  {/* Key Metrics Strip */}
                  <div className={`grid ${metricsToDisplay.length === 3 ? 'grid-cols-3 gap-2' : 'grid-cols-2 gap-2.5'} pt-1`}>
                    {metricsToDisplay.map((m, i) => (
                      <div
                        key={i}
                        className="p-2.5 bg-[#f8fafd] dark:bg-[#1f2025] rounded-xl border border-[#e2e8f0] dark:border-[#2d3139] space-y-0.5"
                      >
                        <div className="flex items-center gap-1">
                          {getMetricIcon(study.id, i, m.label)}
                          <span className="text-sm sm:text-base font-extrabold text-[#111827] dark:text-white">
                            {m.value}
                          </span>
                        </div>
                        <div className="text-[10px] sm:text-[11px] font-medium text-[#64748b] dark:text-[#94a3b8] leading-tight line-clamp-2">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Light Blue "Key Highlights" Container matching reference */}
                  {study.keyHighlights && study.keyHighlights.length > 0 && (
                    <div className="p-3.5 rounded-xl bg-[#eff6ff] dark:bg-[#121c2e] border border-[#dbeafe] dark:border-[#1e3a8a]/40 space-y-1.5">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#1d4ed8] dark:text-[#60a5fa]">
                        <Lightbulb className="w-3.5 h-3.5 text-[#2563eb] dark:text-[#60a5fa] shrink-0" />
                        <span>Key Highlights</span>
                      </div>
                      <ul className="space-y-1 text-xs text-[#334155] dark:text-[#cbd5e1] leading-relaxed">
                        {study.keyHighlights.map((hl, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-[#2563eb] dark:text-[#60a5fa] font-bold shrink-0">•</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>

                {/* Card Footer CTA: Open PRD and Case Study */}
                <div className="pt-4 mt-5 border-t border-[#e2e8f0] dark:border-[#2d3139] flex items-center justify-end gap-2">
                  <button
                    id={`case-study-btn-${study.id}`}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectCaseStudy(study, 'exec');
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#475569] dark:text-[#cbd5e1] bg-[#f1f5f9] dark:bg-[#202227] hover:bg-[#e2e8f0] dark:hover:bg-[#2d3037] border border-[#e2e8f0] dark:border-[#35383f] transition-all cursor-pointer shadow-2xs"
                    title="Read deep-dive Case Study"
                  >
                    <Layers className="w-3.5 h-3.5 text-[#64748b] dark:text-[#94a3b8]" />
                    <span>Case Study</span>
                  </button>

                  <button
                    id={`open-prd-btn-${study.id}`}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectCaseStudy(study, 'prd');
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#1a73e8] dark:text-[#8ab4f8] bg-[#eff6ff] dark:bg-blue-950/40 hover:bg-[#1a73e8] hover:text-white dark:hover:bg-[#1a73e8] dark:hover:text-white border border-[#bfdbfe] dark:border-blue-900/60 transition-all cursor-pointer shadow-2xs group/btn"
                    title="Open PRD Specification"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Open PRD Spec</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
