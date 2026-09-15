import React, { useEffect, useState } from 'react';
import { CaseStudy } from '../types';
import { GoogleMapsWireframe } from './case-study/GoogleMapsWireframe';
import { PathaoWireframe } from './case-study/PathaoWireframe';
import { MarketAndCompetitiveSection } from './case-study/MarketAndCompetitiveSection';
import { UxAuditSection } from './case-study/UxAuditSection';
import { StrategicFrameworkSection } from './case-study/StrategicFrameworkSection';
import { ProposedSolutionsSection } from './case-study/ProposedSolutionsSection';
import { ExecutionAndRoadmapSection } from './case-study/ExecutionAndRoadmapSection';
import { 
  X, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Lightbulb, 
  Cpu, 
  TrendingUp, 
  Clock, 
  Building2, 
  Target,
  Sparkles,
  FileText,
  Copy,
  Check,
  ShieldAlert,
  Compass,
  Users,
  Layers,
  Printer,
  Search,
  Filter,
  Download,
  HelpCircle,
  ChevronRight,
  BarChart3,
  PieChart,
  ShieldCheck,
  Smartphone,
  Calendar,
  Award,
  Globe
} from 'lucide-react';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  initialMode?: 'prd' | 'exec';
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, initialMode = 'prd', onClose }) => {
  const [viewMode, setViewMode] = useState<'prd' | 'exec'>(initialMode);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    if (initialMode) {
      setViewMode(initialMode);
    }
  }, [initialMode, caseStudy]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  const handleCopySummary = () => {
    const textToCopy = `Google PRD: ${caseStudy.title}\nDoc ID: ${caseStudy.prdMetadata?.docId || 'PRD-DOC'}\nOwner: ${caseStudy.prdMetadata?.docOwner || caseStudy.role}\nNorth Star: ${caseStudy.northStarAndGuardrails?.northStar.metric || 'N/A'}\nOverview: ${caseStudy.overview}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div
      id="case-study-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden bg-[#202124]/65 dark:bg-black/75 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 lg:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="case-study-modal-card"
        className="relative w-full max-w-[calc(100vw-16px)] sm:max-w-5xl min-w-0 bg-white dark:bg-[#18191c] rounded-2xl shadow-2xl border border-[#dadce0] dark:border-[#2d2f34] overflow-hidden my-auto sm:my-6 text-[#202124] dark:text-[#f1f3f4] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Google Workspace / Docs Top Bar */}
        <div className="sticky top-0 z-20 bg-white dark:bg-[#18191c] border-b border-[#dadce0] dark:border-[#2d2f34] px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2 shadow-2xs min-w-0">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <div className="w-8 h-8 rounded-lg bg-[#e8f0fe] dark:bg-[#1e2738] border border-[#d2e3fc] dark:border-[#2a3852] flex items-center justify-center text-[#1a73e8] dark:text-[#8ab4f8] shrink-0">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="font-bold text-xs sm:text-sm text-[#202124] dark:text-[#f1f3f4] truncate">
                  {caseStudy.prdMetadata?.docId ? `[${caseStudy.prdMetadata.docId}] ` : ''}{caseStudy.title}
                </span>
                <span className="hidden md:inline-flex text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 shrink-0">
                  {caseStudy.prdMetadata?.status || 'Active PRD'}
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-[#5f6368] dark:text-[#9aa0a6] truncate block">
                PRD Document • Owner: {caseStudy.prdMetadata?.docOwner || 'MD Omar Faruq'}
              </span>
            </div>
          </div>

          {/* Right Controls: View Switcher & Close */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {/* View Mode Toggle */}
            <div className="flex items-center p-0.5 sm:p-1 bg-[#f1f3f4] dark:bg-[#202227] rounded-full text-xs font-semibold">
              <button
                type="button"
                onClick={() => setViewMode('prd')}
                className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full transition-all cursor-pointer text-xs ${
                  viewMode === 'prd'
                    ? 'bg-white dark:bg-[#2d3037] text-[#1a73e8] dark:text-[#8ab4f8] shadow-2xs font-bold'
                    : 'text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#202124] dark:hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>PRD</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('exec')}
                className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full transition-all cursor-pointer text-xs ${
                  viewMode === 'exec'
                    ? 'bg-white dark:bg-[#2d3037] text-[#1a73e8] dark:text-[#8ab4f8] shadow-2xs font-bold'
                    : 'text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#202124] dark:hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Case Study</span>
                <span className="sm:hidden">Case</span>
              </button>
            </div>

            <button
              onClick={handleCopySummary}
              title="Copy PRD Summary"
              className="hidden xs:flex p-1.5 rounded-full text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] hover:bg-[#f1f3f4] dark:hover:bg-[#25272c] transition-colors cursor-pointer"
            >
              {copiedLink ? <Check className="w-4 h-4 text-[#34a853] dark:text-[#81c995]" /> : <Copy className="w-4 h-4" />}
            </button>

            <button
              onClick={() => {
                try {
                  window.print();
                } catch (e) {
                  console.warn("Print error in case study modal", e);
                }
              }}
              title="Print PRD Document"
              className="hidden sm:flex p-1.5 rounded-full text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] hover:bg-[#f1f3f4] dark:hover:bg-[#25272c] transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              id="close-case-study-modal"
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-full text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#202124] dark:hover:text-white hover:bg-[#f1f3f4] dark:hover:bg-[#25272c] transition-colors cursor-pointer shrink-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-3 sm:p-8 space-y-6 sm:space-y-8 max-h-[78vh] sm:max-h-[82vh] overflow-y-auto overflow-x-hidden min-w-0 max-w-full bg-[#fafafa] dark:bg-[#121316] flex-1">
          
          {/* PRD VIEW MODE */}
          {viewMode === 'prd' ? (
            <div className="bg-white dark:bg-[#18191c] rounded-xl border border-[#dadce0] dark:border-[#2d2f34] p-6 sm:p-8 space-y-8 shadow-xs">
              
              {/* Document Header Table */}
              <div className="border border-[#dadce0] dark:border-[#2d2f34] rounded-xl overflow-hidden bg-[#f8fafd] dark:bg-[#1f2025]">
                <div className="bg-[#e8f0fe] dark:bg-[#202838] px-4 py-2.5 border-b border-[#dadce0] dark:border-[#2d2f34] flex items-center justify-between">
                  <span className="font-bold text-xs uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
                    1. Product Requirements Document (PRD) Header
                  </span>
                  <span className="font-mono text-xs font-semibold text-[#1a73e8] dark:text-[#8ab4f8]">
                    {caseStudy.prdMetadata?.docId || 'PRD-SPEC'}
                  </span>
                </div>
                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="text-[#5f6368] dark:text-[#9aa0a6] block mb-0.5">Author / Owner:</span>
                    <strong className="text-[#202124] dark:text-[#f1f3f4] font-semibold">{caseStudy.prdMetadata?.docOwner || 'MD Omar Faruq'}</strong>
                  </div>
                  <div>
                    <span className="text-[#5f6368] dark:text-[#9aa0a6] block mb-0.5">Document Status:</span>
                    <strong className="text-[#1a73e8] dark:text-[#8ab4f8] font-semibold">{caseStudy.prdMetadata?.status || 'Production'}</strong>
                  </div>
                  <div>
                    <span className="text-[#5f6368] dark:text-[#9aa0a6] block mb-0.5">Target Release:</span>
                    <strong className="text-[#202124] dark:text-[#f1f3f4] font-semibold">{caseStudy.prdMetadata?.targetLaunch || caseStudy.timeline}</strong>
                  </div>
                  <div>
                    <span className="text-[#5f6368] dark:text-[#9aa0a6] block mb-0.5">PM Core Pillar:</span>
                    <strong className="text-[#34a853] dark:text-[#81c995] font-semibold">{caseStudy.googlePillarHighlight || 'Product Sense'}</strong>
                  </div>
                </div>

                {/* Approvers Strip */}
                {caseStudy.prdMetadata?.approvers && (
                  <div className="border-t border-[#dadce0] dark:border-[#2d2f34] p-3 bg-white dark:bg-[#18191c] flex flex-wrap items-center gap-3 text-xs">
                    <span className="font-semibold text-[#5f6368] dark:text-[#9aa0a6]">Cross-Functional Sign-offs:</span>
                    {caseStudy.prdMetadata.approvers.map((app, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#f1f3f4] dark:bg-[#202227] text-[#3c4043] dark:text-[#bdc1c6]">
                        <CheckCircle2 className="w-3 h-3 text-[#34a853] dark:text-[#81c995]" />
                        <span className="font-medium">{app.role}:</span>
                        <span>{app.name}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Title & Strategic Overview */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
                  2. Executive Summary & Problem Scope
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202124] dark:text-[#f1f3f4] tracking-tight">
                  {caseStudy.title}
                </h2>
                <p className="text-base text-[#3c4043] dark:text-[#bdc1c6] leading-relaxed">
                  {caseStudy.overview}
                </p>
                
                {/* Core Problem Statement Callout */}
                <div className="p-4 rounded-xl bg-[#fef7e0] dark:bg-[#2a2215] border border-[#feefc3] dark:border-[#423318] space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b06000] dark:text-[#fdd663]">
                    <AlertCircle className="w-4 h-4" />
                    <span>The Core User & System Friction</span>
                  </div>
                  <p className="text-sm text-[#202124] dark:text-[#e8eaed] leading-relaxed">
                    {caseStudy.problemStatement}
                  </p>
                </div>
              </div>

              {/* Goals and Non-Goals (Strict Google Requirement) */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
                  3. Goals & Non-Goals (Scope Boundaries)
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Goals */}
                  <div className="p-4 rounded-xl bg-[#e6f4ea] dark:bg-[#16271c] border border-[#ceead6] dark:border-[#1d4029] space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#137333] dark:text-[#81c995] flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#137333] dark:text-[#81c995]" />
                      <span>Explicit Goals (In-Scope)</span>
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#202124] dark:text-[#e8eaed]">
                      {caseStudy.goalsAndNonGoals ? (
                        caseStudy.goalsAndNonGoals.goals.map((g, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#137333] dark:text-[#81c995] font-bold">✓</span>
                            <span>{g}</span>
                          </li>
                        ))
                      ) : (
                        caseStudy.keyMetrics.map((m, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#137333] dark:text-[#81c995] font-bold">✓</span>
                            <span>Achieve {m.label}: {m.value} ({m.detail})</span>
                          </li>
                        ))
                      )}
                    </ul>
                  </div>

                  {/* Non-Goals */}
                  <div className="p-4 rounded-xl bg-[#fce8e6] dark:bg-[#2b1717] border border-[#fad2cf] dark:border-[#482020] space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#c5221f] dark:text-[#f28b82] flex items-center gap-1.5">
                      <ShieldAlert className="w-4 h-4 text-[#c5221f] dark:text-[#f28b82]" />
                      <span>Explicit Non-Goals (Out-of-Scope)</span>
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#202124] dark:text-[#e8eaed]">
                      {caseStudy.goalsAndNonGoals?.nonGoals.map((ng, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#c5221f] dark:text-[#f28b82] font-bold">✗</span>
                          <span>{ng}</span>
                        </li>
                      )) || (
                        <li className="flex items-start gap-2">
                          <span className="text-[#c5221f] dark:text-[#f28b82] font-bold">✗</span>
                          <span>We are NOT rebuilding core legacy infrastructure outside this targeted release scope.</span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {/* North Star Metric & Guardrails */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
                  4. OKR Framework: North Star & System Guardrails
                </span>
                <div className="p-5 rounded-xl bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] space-y-4">
                  {caseStudy.northStarAndGuardrails && (
                    <div className="p-4 rounded-xl bg-white dark:bg-[#18191c] border border-[#1a73e8] dark:border-[#8ab4f8] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#1a73e8] dark:text-[#8ab4f8] uppercase tracking-wider flex items-center gap-1.5">
                          <Target className="w-4 h-4" />
                          <span>Primary North Star Metric</span>
                        </span>
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#e8f0fe] dark:bg-[#1e2738] text-[#1a73e8] dark:text-[#8ab4f8]">
                          Target: {caseStudy.northStarAndGuardrails.northStar.target}
                        </span>
                      </div>
                      <h4 className="font-extrabold text-base text-[#202124] dark:text-[#f1f3f4]">
                        {caseStudy.northStarAndGuardrails.northStar.metric}
                      </h4>
                      <p className="text-xs text-[#5f6368] dark:text-[#9aa0a6]">
                        <strong>Why this matters: </strong>
                        {caseStudy.northStarAndGuardrails.northStar.rationale}
                      </p>
                    </div>
                  )}

                  {/* Guardrails */}
                  {caseStudy.northStarAndGuardrails?.guardrails && (
                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#5f6368] dark:text-[#9aa0a6]">
                        Non-Negotiable System Guardrails (Preventing Metric Hacking)
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {caseStudy.northStarAndGuardrails.guardrails.map((gr, i) => (
                          <div key={i} className="p-3 rounded-lg bg-white dark:bg-[#18191c] border border-[#dadce0] dark:border-[#2d2f34] space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-xs text-[#202124] dark:text-[#f1f3f4]">{gr.metric}</span>
                              <span className="font-mono text-[11px] font-semibold text-[#c5221f] dark:text-[#f28b82] bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded-md">
                                {gr.threshold}
                              </span>
                            </div>
                            <p className="text-[11px] text-[#5f6368] dark:text-[#9aa0a6]">
                              <strong>Risk Prevented: </strong>{gr.risk}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* User Research & Friction Points */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
                  5. User Discovery & Empathy Insights
                </span>
                <div className="p-5 rounded-xl bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] space-y-3">
                  <div>
                    <span className="text-xs font-bold text-[#5f6368] dark:text-[#9aa0a6] uppercase">Target Persona Profile:</span>
                    <p className="text-sm font-semibold text-[#202124] dark:text-[#f1f3f4] mt-0.5">{caseStudy.userResearch.persona}</p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-[#5f6368] dark:text-[#9aa0a6] uppercase">Identified Friction Points:</span>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-[#3c4043] dark:text-[#bdc1c6]">
                      {caseStudy.userResearch.painPoints.map((pain, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#ea4335] dark:text-[#f28b82] mt-0.5">•</span>
                          <span>{pain}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-[#dadce0] dark:border-[#2d2f34]">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm bg-white dark:bg-[#18191c] p-3 rounded-lg border border-[#dadce0] dark:border-[#2d2f34]">
                      <Lightbulb className="w-4 h-4 text-[#f9ab00] dark:text-[#fdd663] shrink-0 mt-0.5" />
                      <p className="text-[#202124] dark:text-[#e8eaed]">
                        <strong className="font-semibold text-[#1a73e8] dark:text-[#8ab4f8]">Qualitative Insight: </strong>
                        “{caseStudy.userResearch.insight}”
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Architecture & Systems PM */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
                  6. Technical Architecture & Engineering Collaboration
                </span>
                <div className="p-5 rounded-xl bg-white dark:bg-[#18191c] border border-[#dadce0] dark:border-[#2d2f34] space-y-3 shadow-2xs">
                  <div>
                    <span className="text-xs font-bold text-[#5f6368] dark:text-[#9aa0a6] uppercase">Strategic Architecture:</span>
                    <p className="text-sm text-[#202124] dark:text-[#f1f3f4] mt-1 leading-relaxed">
                      {caseStudy.strategyAndTradeoffs.approach}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {caseStudy.technicalArchitecturePM.map((tech, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] text-xs text-[#3c4043] dark:text-[#bdc1c6] flex items-start gap-2">
                        <Cpu className="w-3.5 h-3.5 text-[#1a73e8] dark:text-[#8ab4f8] shrink-0 mt-0.5" />
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>

                  {/* Trade-offs */}
                  <div className="pt-2 border-t border-[#dadce0] dark:border-[#2d2f34]">
                    <span className="text-xs font-bold text-[#5f6368] dark:text-[#9aa0a6] uppercase block mb-1.5">
                      Explicit Trade-offs Evaluated:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#3c4043] dark:text-[#bdc1c6]">
                      {caseStudy.strategyAndTradeoffs.tradeoffsConsidered.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#34a853] dark:text-[#81c995] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Execution Milestones */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
                  7. Delivery Phases & Production Milestones
                </span>
                <div className="space-y-2.5">
                  {caseStudy.executionMilestones.map((phase, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs sm:text-sm font-bold text-[#202124] dark:text-[#f1f3f4]">{phase.phase}</h4>
                        <span className="text-[11px] font-semibold text-[#137333] dark:text-[#81c995] bg-[#e6f4ea] dark:bg-[#16271c] px-2 py-0.5 rounded-full">
                          Delivered
                        </span>
                      </div>
                      <p className="text-xs text-[#5f6368] dark:text-[#9aa0a6]">{phase.description}</p>
                      <p className="text-xs font-semibold text-[#1a73e8] dark:text-[#8ab4f8] pt-0.5">
                        Result: <span className="text-[#202124] dark:text-[#e8eaed] font-normal">{phase.result}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcomes & Retrospective */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
                  8. Quantifiable Outcomes & Blameless Retrospective
                </span>
                <div className="p-4 rounded-xl bg-[#e6f4ea] dark:bg-[#16271c] border border-[#ceead6] dark:border-[#1d4029] space-y-2">
                  <h4 className="text-xs font-bold text-[#137333] dark:text-[#81c995] uppercase tracking-wider">
                    Measurable Impact
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#202124] dark:text-[#e8eaed]">
                    {caseStudy.outcomesAndImpact.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#137333] dark:text-[#81c995] font-bold">✓</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#f1f3f4] dark:bg-[#202227] border border-[#dadce0] dark:border-[#2d2f34] space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#5f6368] dark:text-[#9aa0a6]">
                    Post-Mortem Takeaway
                  </span>
                  <p className="text-xs sm:text-sm text-[#202124] dark:text-[#e8eaed] italic leading-relaxed">
                    “{caseStudy.retrospective}”
                  </p>
                </div>
              </div>

            </div>
          ) : (
            /* PRODUCT CASE STUDY VIEW MODE */
            <div className="space-y-8">
              
              {/* Case Study Header & Hero */}
              <div className="bg-white dark:bg-[#18191c] rounded-xl border border-[#dadce0] dark:border-[#2d2f34] p-6 sm:p-8 space-y-5 shadow-xs">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a73e8] text-white text-xs font-bold tracking-wide uppercase shadow-2xs">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{caseStudy.heroBadge || 'Product Case Study'}</span>
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#e8f0fe] dark:bg-[#1e2738] text-[#1a73e8] dark:text-[#8ab4f8] border border-[#d2e3fc] dark:border-[#2a3852]">
                    {caseStudy.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                    {caseStudy.statusBadge || 'Strategic Handoff'}
                  </span>
                  <span className="font-mono text-xs text-[#5f6368] dark:text-[#9aa0a6] ml-auto">
                    {caseStudy.timeline}
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#202124] dark:text-[#f1f3f4] tracking-tight">
                    {caseStudy.title}
                  </h2>
                  <p className="text-base sm:text-lg text-[#5f6368] dark:text-[#9aa0a6] leading-relaxed">
                    {caseStudy.tagline}
                  </p>
                </div>

                {/* Author & Context Strip */}
                <div className="p-3.5 rounded-xl bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-[#3c4043] dark:text-[#bdc1c6]">
                    <Users className="w-4 h-4 text-[#1a73e8] dark:text-[#8ab4f8]" />
                    <span><strong>Created by:</strong> {caseStudy.prdMetadata?.docOwner || caseStudy.role}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#3c4043] dark:text-[#bdc1c6]">
                    <Building2 className="w-4 h-4 text-[#34a853] dark:text-[#81c995]" />
                    <span><strong>Product:</strong> {caseStudy.clientOrCompany}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#3c4043] dark:text-[#bdc1c6]">
                    <Calendar className="w-4 h-4 text-[#f9ab00] dark:text-[#fdd663]" />
                    <span><strong>Published:</strong> {caseStudy.timeline}</span>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {caseStudy.keyMetrics.map((m, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] space-y-1">
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#1a73e8] dark:text-[#8ab4f8]">{m.value}</div>
                      <div className="text-xs font-bold text-[#202124] dark:text-[#f1f3f4]">{m.label}</div>
                      <div className="text-[11px] text-[#5f6368] dark:text-[#9aa0a6] leading-tight">{m.detail}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 1: Executive Summary & Context */}
              <div className="bg-white dark:bg-[#18191c] rounded-xl border border-[#dadce0] dark:border-[#2d2f34] p-6 sm:p-8 space-y-4 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
                  <FileText className="w-4 h-4" />
                  <span>Executive Summary & Product Overview</span>
                </div>
                <p className="text-sm sm:text-base text-[#3c4043] dark:text-[#bdc1c6] leading-relaxed">
                  {caseStudy.overview}
                </p>
                <div className="p-4 rounded-xl bg-[#fef7e0] dark:bg-[#2a2215] border border-[#feefc3] dark:border-[#423318] space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b06000] dark:text-[#fbbc04]">
                    <AlertCircle className="w-4 h-4" />
                    <span>Problem Statement & Business Context</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#202124] dark:text-[#e8eaed] leading-relaxed">
                    {caseStudy.problemStatement}
                  </p>
                </div>

                {/* Key Strategic Recommendation (if present) */}
                {caseStudy.keyRecommendation && (
                  <div className="p-4 rounded-xl bg-[#e6f4ea] dark:bg-[#16271c] border border-[#ceead6] dark:border-[#1d4029] space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#137333] dark:text-[#81c995]">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Primary Strategic Recommendation</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#202124] dark:text-[#e8eaed] leading-relaxed">
                      {caseStudy.keyRecommendation}
                    </p>
                  </div>
                )}
              </div>

              {/* Section 2: Market Context & Competitive Benchmarking (if available) */}
              <MarketAndCompetitiveSection
                marketSize={caseStudy.marketSize}
                competitiveBenchmark={caseStudy.competitiveBenchmark}
              />

              {/* Section 3: User Research Findings (if available) */}
              {caseStudy.userResearchFindings && caseStudy.userResearchFindings.length > 0 && (
                <div className="bg-white dark:bg-[#18191c] rounded-xl border border-[#dadce0] dark:border-[#2d2f34] p-6 sm:p-8 space-y-5 shadow-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
                      <BarChart3 className="w-4 h-4" />
                      <span>User Research & Survey Findings</span>
                    </div>
                    <span className="text-xs text-[#5f6368] dark:text-[#9aa0a6]">
                      Sample: {caseStudy.userResearch?.sampleSize || '20 Frequent Users'}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {caseStudy.userResearchFindings.map((finding, idx) => {
                      const numVal = parseInt(finding.percentage, 10) || 50;
                      return (
                        <div key={idx} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs sm:text-sm">
                            <span className="font-semibold text-[#202124] dark:text-[#f1f3f4]">{finding.finding}</span>
                            <span className="font-bold text-[#1a73e8] dark:text-[#8ab4f8]">{finding.percentage}</span>
                          </div>
                          <div className="w-full bg-[#f1f3f4] dark:bg-[#2a2d34] h-2.5 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-[#1a73e8] to-[#4285f4] dark:from-[#8ab4f8] dark:to-[#aecbfa]"
                              style={{ width: `${numVal}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-4 rounded-xl bg-[#e8f0fe] dark:bg-[#1e2738] border border-[#d2e3fc] dark:border-[#2a3852] flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-[#1a73e8] dark:text-[#8ab4f8] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8] mb-1">
                        Core User Discovery Insight
                      </h4>
                      <p className="text-xs sm:text-sm text-[#202124] dark:text-[#e8eaed] leading-relaxed">
                        “{caseStudy.userResearch.insight}”
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Section 3: User Personas (if available) */}
              {caseStudy.userPersonas && caseStudy.userPersonas.length > 0 && (
                <div className="bg-white dark:bg-[#18191c] rounded-xl border border-[#dadce0] dark:border-[#2d2f34] p-6 sm:p-8 space-y-5 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
                    <Users className="w-4 h-4" />
                    <span>Target User Personas</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {caseStudy.userPersonas.map((persona, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] flex flex-col justify-between space-y-4"
                      >
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-bold text-[#202124] dark:text-[#f1f3f4]">{persona.name}</h4>
                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#e8f0fe] dark:bg-[#1e2738] text-[#1a73e8] dark:text-[#8ab4f8]">
                              Age {persona.age}
                            </span>
                          </div>
                          <p className="text-xs font-medium text-[#5f6368] dark:text-[#9aa0a6]">{persona.occupation}</p>
                          
                          <div className="space-y-1 pt-1">
                            <span className="text-[11px] font-bold text-[#137333] dark:text-[#81c995] uppercase tracking-wider block">Goals:</span>
                            <ul className="space-y-1 text-xs text-[#3c4043] dark:text-[#bdc1c6]">
                              {persona.goals.map((g, i) => (
                                <li key={i} className="flex items-start gap-1.5">
                                  <span className="text-[#137333] dark:text-[#81c995] font-bold">•</span>
                                  <span>{g}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-1 pt-1">
                            <span className="text-[11px] font-bold text-[#c5221f] dark:text-[#f28b82] uppercase tracking-wider block">Pain Points:</span>
                            <ul className="space-y-1 text-xs text-[#3c4043] dark:text-[#bdc1c6]">
                              {persona.painPoints.map((p, i) => (
                                <li key={i} className="flex items-start gap-1.5">
                                  <span className="text-[#c5221f] dark:text-[#f28b82] font-bold">•</span>
                                  <span>{p}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-[#dadce0] dark:border-[#2d2f34]">
                          <span className="text-[11px] font-bold text-[#1a73e8] dark:text-[#8ab4f8] uppercase tracking-wider block mb-1">Key Needs:</span>
                          <div className="flex flex-wrap gap-1">
                            {persona.needs.map((need, i) => (
                              <span key={i} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white dark:bg-[#282a30] border border-[#dadce0] dark:border-[#35383f] text-[#202124] dark:text-[#e8eaed]">
                                {need}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Section 4: UX Audit & Heuristics Evaluation */}
              <UxAuditSection
                heuristicsAudit={caseStudy.heuristicsAudit}
                usabilityIssuesSummary={caseStudy.usabilityIssuesSummary}
                uxAudit={caseStudy.uxAudit}
              />

              {/* Section 5: Strategic Framework & Measurable OKRs */}
              <StrategicFrameworkSection
                strategicPillars={caseStudy.strategicPillars}
                okrsList={caseStudy.okrsList}
              />

              {/* Section 6: Proposed Solutions & Feature Specifications */}
              <ProposedSolutionsSection
                proposedSolutions={caseStudy.proposedSolutions}
              />

              {/* Section 7: Interactive Product Wireframes & Solution Visuals */}
              {caseStudy.id.includes('google-maps') ? (
                <GoogleMapsWireframe />
              ) : caseStudy.id === 'pathao-smart-activity-center' ? (
                <PathaoWireframe />
              ) : null}

              {/* Persona Journey Scenarios (if available) */}
              {caseStudy.personaJourneys && caseStudy.personaJourneys.length > 0 && (
                <div className="bg-white dark:bg-[#18191c] rounded-xl border border-[#dadce0] dark:border-[#2d2f34] p-6 sm:p-8 space-y-5 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
                    <Users className="w-4 h-4" />
                    <span>Target Persona Journey Scenarios</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {caseStudy.personaJourneys.map((pj, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-[#202124] dark:text-[#f1f3f4]">
                            {pj.personaName}
                          </h4>
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-[#1a73e8] dark:text-[#8ab4f8] font-semibold">
                            {pj.scenario}
                          </span>
                        </div>

                        <div className="space-y-2 text-xs">
                          <div className="p-2.5 rounded-lg bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40">
                            <span className="font-bold text-[#c5221f] dark:text-[#f28b82] block mb-1">Current State Pain:</span>
                            <p className="text-[#3c4043] dark:text-[#bdc1c6]">{pj.currentState}</p>
                          </div>

                          <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40">
                            <span className="font-bold text-[#137333] dark:text-[#81c995] block mb-1">Proposed Future State:</span>
                            <p className="text-[#3c4043] dark:text-[#bdc1c6]">{pj.proposedState}</p>
                          </div>

                          <div className="flex items-center justify-between text-[11px] pt-1 font-semibold text-[#1a73e8] dark:text-[#8ab4f8]">
                            <span>Impact:</span>
                            <span>{pj.impact}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* User Journey Map & Opportunity Space (if available) */}
              {caseStudy.userJourneyMap && caseStudy.userJourneyMap.length > 0 && (
                <div className="bg-white dark:bg-[#18191c] rounded-xl border border-[#dadce0] dark:border-[#2d2f34] p-4 sm:p-8 space-y-4 sm:space-y-5 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
                    <Compass className="w-4 h-4" />
                    <span>End-to-End User Journey Map & Product Opportunities</span>
                  </div>

                  {/* Mobile Journey Cards */}
                  <div className="sm:hidden space-y-3">
                    {caseStudy.userJourneyMap.map((step, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs text-[#1a73e8] dark:text-[#8ab4f8] uppercase tracking-wider">
                            {step.stage}
                          </span>
                        </div>
                        <div className="text-xs space-y-1.5">
                          <p className="text-[#202124] dark:text-[#f1f3f4]">
                            <strong>Action:</strong> {step.userAction}
                          </p>
                          <p className="text-[#c5221f] dark:text-[#f28b82]">
                            <strong>Pain Point:</strong> {step.painPoint}
                          </p>
                          <p className="text-[#137333] dark:text-[#81c995]">
                            <strong>Opportunity:</strong> {step.opportunity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Desktop Journey Table */}
                  <div className="hidden sm:block overflow-x-auto w-full max-w-full">
                    <table className="w-full text-xs text-left border border-[#dadce0] dark:border-[#2d2f34] rounded-xl overflow-hidden">
                      <thead className="bg-[#f1f3f4] dark:bg-[#202227] text-[#5f6368] dark:text-[#9aa0a6] uppercase font-bold text-[11px]">
                        <tr>
                          <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34]">Journey Stage</th>
                          <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34]">User Action</th>
                          <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34]">Pain Point</th>
                          <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34] text-[#1a73e8] dark:text-[#8ab4f8]">Product Opportunity</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#dadce0] dark:divide-[#2d2f34] bg-white dark:bg-[#18191c]">
                        {caseStudy.userJourneyMap.map((step, idx) => (
                          <tr key={idx} className="hover:bg-[#f8fafd] dark:hover:bg-[#1f2025]">
                            <td className="p-3 font-bold text-[#202124] dark:text-[#f1f3f4] whitespace-nowrap">{step.stage}</td>
                            <td className="p-3 text-[#3c4043] dark:text-[#bdc1c6]">{step.userAction}</td>
                            <td className="p-3 text-[#c5221f] dark:text-[#f28b82] font-medium">{step.painPoint}</td>
                            <td className="p-3 text-[#137333] dark:text-[#81c995] font-semibold">{step.opportunity}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Section 8: Feature Prioritization RICE Framework (if available) */}
              {caseStudy.ricePrioritization && caseStudy.ricePrioritization.length > 0 && (
                <div className="bg-white dark:bg-[#18191c] rounded-xl border border-[#dadce0] dark:border-[#2d2f34] p-4 sm:p-8 space-y-4 sm:space-y-5 shadow-xs">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
                      <Target className="w-4 h-4" />
                      <span>Feature Prioritization (RICE Framework)</span>
                    </div>
                    <span className="font-mono text-[11px] sm:text-xs text-[#5f6368] dark:text-[#9aa0a6]">
                      Formula: (Reach × Impact × Confidence) ÷ Effort
                    </span>
                  </div>

                  {/* Mobile RICE Cards */}
                  <div className="sm:hidden space-y-3">
                    {caseStudy.ricePrioritization.map((row, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <span className="font-bold text-xs text-[#202124] dark:text-[#f1f3f4] leading-snug">
                            {row.feature}
                          </span>
                          <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold shrink-0 ${
                            row.priority.startsWith('P1')
                              ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                              : row.priority.startsWith('P2')
                              ? 'bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-800'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700'
                          }`}>
                            {row.priority}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[11px] text-[#5f6368] dark:text-[#9aa0a6] pt-1 border-t border-[#dadce0] dark:border-[#2d2f34]">
                          <div>Reach: <strong className="text-[#202124] dark:text-[#f1f3f4]">{row.reach}</strong></div>
                          <div>Impact: <strong className="text-[#202124] dark:text-[#f1f3f4]">{row.impact}</strong></div>
                          <div>Confidence: <strong className="text-[#202124] dark:text-[#f1f3f4]">{row.confidence}</strong></div>
                          <div>Effort: <strong className="text-[#202124] dark:text-[#f1f3f4]">{row.effort}</strong></div>
                        </div>
                        <div className="flex items-center justify-between pt-1 border-t border-[#dadce0] dark:border-[#2d2f34] text-xs font-bold">
                          <span className="text-[#5f6368] dark:text-[#9aa0a6]">RICE Score:</span>
                          <span className="text-[#1a73e8] dark:text-[#8ab4f8] text-sm font-extrabold">{row.riceScore}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Desktop RICE Table */}
                  <div className="hidden sm:block overflow-x-auto w-full max-w-full">
                    <table className="w-full text-xs text-left border border-[#dadce0] dark:border-[#2d2f34] rounded-xl overflow-hidden">
                      <thead className="bg-[#f1f3f4] dark:bg-[#202227] text-[#5f6368] dark:text-[#9aa0a6] uppercase font-bold text-[11px]">
                        <tr>
                          <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34]">Proposed Feature</th>
                          <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34] text-center">Reach</th>
                          <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34] text-center">Impact</th>
                          <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34] text-center">Confidence</th>
                          <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34] text-center">Effort</th>
                          <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34] text-center text-[#1a73e8] dark:text-[#8ab4f8]">RICE Score</th>
                          <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34] text-center">Priority</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#dadce0] dark:divide-[#2d2f34] bg-white dark:bg-[#18191c]">
                        {caseStudy.ricePrioritization.map((row, idx) => (
                          <tr key={idx} className="hover:bg-[#f8fafd] dark:hover:bg-[#1f2025]">
                            <td className="p-3 font-bold text-[#202124] dark:text-[#f1f3f4]">{row.feature}</td>
                            <td className="p-3 text-center text-[#3c4043] dark:text-[#bdc1c6]">{row.reach}</td>
                            <td className="p-3 text-center text-[#3c4043] dark:text-[#bdc1c6]">{row.impact}</td>
                            <td className="p-3 text-center text-[#3c4043] dark:text-[#bdc1c6]">{row.confidence}</td>
                            <td className="p-3 text-center text-[#3c4043] dark:text-[#bdc1c6] font-semibold">{row.effort}</td>
                            <td className="p-3 text-center font-extrabold text-[#1a73e8] dark:text-[#8ab4f8] text-sm">{row.riceScore}</td>
                            <td className="p-3 text-center">
                              <span className={`inline-flex px-2 py-0.5 rounded-full text-[11px] font-bold ${
                                row.priority.startsWith('P1')
                                  ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                                  : row.priority.startsWith('P2')
                                  ? 'bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-800'
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700'
                              }`}>
                                {row.priority}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Section 9: Impact vs. Effort Matrix & MVP Scope (if available) */}
              {(caseStudy.impactEffortMatrix || caseStudy.mvpScope) && (
                <div className="bg-white dark:bg-[#18191c] rounded-xl border border-[#dadce0] dark:border-[#2d2f34] p-6 sm:p-8 space-y-5 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
                    <Layers className="w-4 h-4" />
                    <span>Impact vs. Effort Matrix & MVP Scoping</span>
                  </div>

                  {caseStudy.impactEffortMatrix && (
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left border border-[#dadce0] dark:border-[#2d2f34] rounded-xl overflow-hidden">
                        <thead className="bg-[#f1f3f4] dark:bg-[#202227] text-[#5f6368] dark:text-[#9aa0a6] uppercase font-bold text-[11px]">
                          <tr>
                            <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34]">Feature</th>
                            <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34]">User Impact</th>
                            <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34]">Development Effort</th>
                            <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34] text-[#1a73e8] dark:text-[#8ab4f8]">Decision</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#dadce0] dark:divide-[#2d2f34] bg-white dark:bg-[#18191c]">
                          {caseStudy.impactEffortMatrix.map((m, idx) => (
                            <tr key={idx} className="hover:bg-[#f8fafd] dark:hover:bg-[#1f2025]">
                              <td className="p-3 font-bold text-[#202124] dark:text-[#f1f3f4]">{m.feature}</td>
                              <td className="p-3 text-[#3c4043] dark:text-[#bdc1c6]">{m.userImpact}</td>
                              <td className="p-3 text-[#3c4043] dark:text-[#bdc1c6]">{m.developmentEffort}</td>
                              <td className="p-3 font-semibold text-[#1a73e8] dark:text-[#8ab4f8]">{m.decision}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {caseStudy.mvpScope && (
                    <div className="p-4 rounded-xl bg-[#e6f4ea] dark:bg-[#16271c] border border-[#ceead6] dark:border-[#1d4029] space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#137333] dark:text-[#81c995] flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#137333] dark:text-[#81c995]" />
                        <span>MVP Implementation Scope</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-[#202124] dark:text-[#e8eaed]">
                        {caseStudy.mvpScope.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#137333] dark:text-[#81c995] font-bold">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Section 10: Comprehensive Execution, Edge Cases & Roadmap */}
              <ExecutionAndRoadmapSection
                edgeCases={caseStudy.edgeCases}
                architectureRisks={caseStudy.architectureRisks}
                goToMarketPhases={caseStudy.goToMarketPhases}
                sixMonthSuccessCriteria={caseStudy.sixMonthSuccessCriteria}
                milestonesList={caseStudy.milestonesList}
              />

              {/* Risks & Mitigation (if available) */}
              {caseStudy.risksAndMitigation && caseStudy.risksAndMitigation.length > 0 && (
                <div className="bg-white dark:bg-[#18191c] rounded-xl border border-[#dadce0] dark:border-[#2d2f34] p-6 sm:p-8 space-y-5 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
                    <ShieldAlert className="w-4 h-4" />
                    <span>Identified Risks & Engineering Mitigation</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border border-[#dadce0] dark:border-[#2d2f34] rounded-xl overflow-hidden">
                      <thead className="bg-[#f1f3f4] dark:bg-[#202227] text-[#5f6368] dark:text-[#9aa0a6] uppercase font-bold text-[11px]">
                        <tr>
                          <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34]">Identified Risk</th>
                          <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34]">Potential Impact</th>
                          <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34] text-[#137333] dark:text-[#81c995]">Mitigation Strategy</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#dadce0] dark:divide-[#2d2f34] bg-white dark:bg-[#18191c]">
                        {caseStudy.risksAndMitigation.map((risk, idx) => (
                          <tr key={idx} className="hover:bg-[#f8fafd] dark:hover:bg-[#1f2025]">
                            <td className="p-3 font-bold text-[#c5221f] dark:text-[#f28b82]">{risk.risk}</td>
                            <td className="p-3 text-[#3c4043] dark:text-[#bdc1c6]">{risk.impact}</td>
                            <td className="p-3 font-medium text-[#137333] dark:text-[#81c995]">{risk.mitigation}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Product Roadmap (if available and no Go-to-Market phases) */}
              {!caseStudy.goToMarketPhases && caseStudy.productRoadmap && caseStudy.productRoadmap.length > 0 && (
                <div className="bg-white dark:bg-[#18191c] rounded-xl border border-[#dadce0] dark:border-[#2d2f34] p-6 sm:p-8 space-y-5 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
                    <Clock className="w-4 h-4" />
                    <span>Phased Product Rollout Roadmap</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {caseStudy.productRoadmap.map((phase, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#e8f0fe] dark:bg-[#1e2738] text-[#1a73e8] dark:text-[#8ab4f8]">
                            {phase.timeline}
                          </span>
                          <span className="text-[11px] font-semibold text-[#5f6368] dark:text-[#9aa0a6]">
                            Step {idx + 1}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-[#202124] dark:text-[#f1f3f4]">{phase.phase}</h4>
                        <ul className="space-y-1.5 text-xs text-[#3c4043] dark:text-[#bdc1c6]">
                          {phase.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#1a73e8] dark:text-[#8ab4f8] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Section 11: Final Recommendation & Retrospective */}
              <div className="bg-white dark:bg-[#18191c] rounded-xl border border-[#dadce0] dark:border-[#2d2f34] p-6 sm:p-8 space-y-4 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#137333] dark:text-[#81c995]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Final Strategic Recommendation</span>
                </div>
                <p className="text-sm sm:text-base text-[#3c4043] dark:text-[#bdc1c6] leading-relaxed">
                  {caseStudy.keyRecommendation
                    ? caseStudy.keyRecommendation
                    : `${caseStudy.title} aligns directly with ${caseStudy.clientOrCompany || 'the platform'}'s long-term vision of providing high-leverage, user-centric experiences. By systematically reducing friction and engineering resilient real-world primitives, this initiative unlocks measurable engagement gains, lifts retention, and accelerates product-led growth.`}
                </p>
                {caseStudy.retrospective && (
                  <div className="p-4 rounded-xl bg-[#f1f3f4] dark:bg-[#202227] border border-[#dadce0] dark:border-[#2d2f34] space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#5f6368] dark:text-[#9aa0a6]">
                      PM Retrospective & Guiding Principle
                    </span>
                    <p className="text-xs sm:text-sm text-[#202124] dark:text-[#e8eaed] italic leading-relaxed">
                      “{caseStudy.retrospective}”
                    </p>
                  </div>
                )}
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer Bar */}
        <div className="sticky bottom-0 z-20 bg-[#f8fafd] dark:bg-[#141518] px-3 sm:px-6 py-2.5 sm:py-3 border-t border-[#dadce0] dark:border-[#2d2f34] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 shadow-xs">
          <div className="flex items-center justify-between sm:justify-start gap-2 text-xs text-[#5f6368] dark:text-[#9aa0a6]">
            <div className="flex items-center gap-1.5 truncate">
              <FileText className="w-3.5 h-3.5 text-[#1a73e8] dark:text-[#8ab4f8] shrink-0" />
              <span className="truncate">
                Format: <strong className="font-semibold text-[#202124] dark:text-[#f1f3f4]">{viewMode === 'prd' ? 'PRD Specification' : 'Product Case Study'}</strong>
              </span>
            </div>
            {/* Quick toggle pill on mobile */}
            <button
              type="button"
              onClick={() => setViewMode(viewMode === 'prd' ? 'exec' : 'prd')}
              className="sm:hidden inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white dark:bg-[#202227] border border-[#dadce0] dark:border-[#35383f] text-[#1a73e8] dark:text-[#8ab4f8] shrink-0 cursor-pointer"
            >
              <span>Switch to {viewMode === 'prd' ? 'Case Study' : 'PRD'}</span>
            </button>
          </div>
          
          <div className="flex items-center gap-2 justify-end">
            <button
              type="button"
              onClick={() => setViewMode(viewMode === 'prd' ? 'exec' : 'prd')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-[#202227] border border-[#dadce0] dark:border-[#35383f] text-[#1a73e8] dark:text-[#8ab4f8] hover:bg-[#f1f3f4] dark:hover:bg-[#2a2d34] transition-colors cursor-pointer"
            >
              <span>Switch to {viewMode === 'prd' ? 'Case Study' : 'PRD'}</span>
            </button>
            <button
              id="modal-bottom-close-btn"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2 rounded-full text-xs sm:text-sm font-semibold bg-[#1a73e8] dark:bg-[#8ab4f8] text-white dark:text-[#202124] hover:bg-[#1557b0] dark:hover:bg-[#aecbfa] transition-colors cursor-pointer shadow-2xs text-center"
            >
              Done Reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

