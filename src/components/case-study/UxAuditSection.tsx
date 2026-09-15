import React from 'react';
import { AlertCircle, CheckCircle2, ShieldAlert } from 'lucide-react';
import { HeuristicsAuditItem, UsabilityIssueSummaryItem, UxAuditItem } from '../../types';

interface UxAuditSectionProps {
  heuristicsAudit?: HeuristicsAuditItem[];
  usabilityIssuesSummary?: UsabilityIssueSummaryItem[];
  uxAudit?: UxAuditItem[];
}

export const UxAuditSection: React.FC<UxAuditSectionProps> = ({
  heuristicsAudit,
  usabilityIssuesSummary,
  uxAudit,
}) => {
  const hasContent = (heuristicsAudit && heuristicsAudit.length > 0) ||
    (usabilityIssuesSummary && usabilityIssuesSummary.length > 0) ||
    (uxAudit && uxAudit.length > 0);

  if (!hasContent) return null;

  return (
    <div className="bg-white dark:bg-[#18191c] rounded-xl border border-[#dadce0] dark:border-[#2d2f34] p-4 sm:p-8 space-y-6 shadow-xs min-w-0 max-w-full">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
        <AlertCircle className="w-4 h-4" />
        <span>UX Audit & Usability Heuristics Evaluation</span>
      </div>

      {/* Nielsen's Usability Heuristics Table */}
      {heuristicsAudit && heuristicsAudit.length > 0 && (
        <div className="space-y-3 min-w-0">
          <div className="flex items-center justify-between flex-wrap gap-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#5f6368] dark:text-[#9aa0a6]">
              Jakob Nielsen's 10 Usability Heuristics Evaluation
            </h4>
            <span className="text-xs text-[#5f6368] dark:text-[#9aa0a6]">Scored 1 to 5</span>
          </div>

          {/* Mobile Card Layout (sm:hidden) - Perfect readability with zero clipping */}
          <div className="sm:hidden space-y-3">
            {heuristicsAudit.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] space-y-2"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-bold text-xs text-[#202124] dark:text-[#f1f3f4] leading-snug">
                    {item.heuristic}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950/60 text-[#1a73e8] dark:text-[#8ab4f8] border border-blue-200 dark:border-blue-900/40 shrink-0">
                    {item.rating.includes('/') ? item.rating : `${item.rating}/5`}
                  </span>
                </div>
                <div className="text-xs text-[#3c4043] dark:text-[#bdc1c6] leading-relaxed">
                  {item.keyWeakness || item.observation || (
                    <span>
                      {item.status && <strong className="text-[#202124] dark:text-[#f1f3f4] mr-1">{item.status}:</strong>}
                      {item.recommendation}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table View (hidden sm:block) */}
          <div className="hidden sm:block overflow-x-auto w-full max-w-full">
            <table className="w-full text-xs text-left border border-[#dadce0] dark:border-[#2d2f34] rounded-xl overflow-hidden">
              <thead className="bg-[#f1f3f4] dark:bg-[#202227] text-[#5f6368] dark:text-[#9aa0a6] uppercase font-bold text-[11px]">
                <tr>
                  <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34]">Heuristic</th>
                  <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34] text-center">Score</th>
                  <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34]">Key Findings & Identified Friction</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#dadce0] dark:divide-[#2d2f34] bg-white dark:bg-[#18191c]">
                {heuristicsAudit.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#f8fafd] dark:hover:bg-[#1f2025]">
                    <td className="p-3 font-bold text-[#202124] dark:text-[#f1f3f4] whitespace-nowrap">{item.heuristic}</td>
                    <td className="p-3 text-center font-bold text-[#1a73e8] dark:text-[#8ab4f8]">
                      {item.rating.includes('/') ? item.rating : `${item.rating}/5`}
                    </td>
                    <td className="p-3 text-[#3c4043] dark:text-[#bdc1c6] leading-relaxed">
                      {item.keyWeakness || item.observation || (
                        <span>
                          {item.status && <strong className="text-[#202124] dark:text-[#f1f3f4] mr-1">{item.status}:</strong>}
                          {item.recommendation}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Usability Issues Summary */}
      {usabilityIssuesSummary && usabilityIssuesSummary.length > 0 && (
        <div className="space-y-3 pt-2 min-w-0">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#5f6368] dark:text-[#9aa0a6]">
            Summary of Usability Findings
          </h4>

          {/* Mobile Card Layout */}
          <div className="sm:hidden space-y-2.5">
            {usabilityIssuesSummary.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] flex items-start justify-between gap-3"
              >
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-[#202124] dark:text-[#f1f3f4] leading-snug">{item.issue}</p>
                  <span className="text-[11px] text-[#5f6368] dark:text-[#9aa0a6] block">Frequency: {item.frequency}</span>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold shrink-0 ${
                  item.severity === 'High'
                    ? 'bg-rose-100 text-rose-800 dark:bg-rose-950/50 dark:text-rose-300'
                    : item.severity === 'Medium'
                    ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-300'
                    : 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300'
                }`}>
                  {item.severity}
                </span>
              </div>
            ))}
          </div>

          {/* Desktop Table */}
          <div className="hidden sm:block overflow-x-auto w-full max-w-full">
            <table className="w-full text-xs text-left border border-[#dadce0] dark:border-[#2d2f34] rounded-xl overflow-hidden">
              <thead className="bg-[#f1f3f4] dark:bg-[#202227] text-[#5f6368] dark:text-[#9aa0a6] uppercase font-bold text-[11px]">
                <tr>
                  <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34]">Identified Issue</th>
                  <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34] text-center">Severity</th>
                  <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34] text-center">Frequency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#dadce0] dark:divide-[#2d2f34] bg-white dark:bg-[#18191c]">
                {usabilityIssuesSummary.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#f8fafd] dark:hover:bg-[#1f2025]">
                    <td className="p-3 font-semibold text-[#202124] dark:text-[#f1f3f4]">{item.issue}</td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        item.severity === 'High'
                          ? 'bg-rose-100 text-rose-800 dark:bg-rose-950/50 dark:text-rose-300'
                          : item.severity === 'Medium'
                          ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-300'
                          : 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300'
                      }`}>
                        {item.severity}
                      </span>
                    </td>
                    <td className="p-3 text-center text-[#5f6368] dark:text-[#9aa0a6] font-medium">{item.frequency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 6-Point UX Audit (Pathao Style) */}
      {uxAudit && uxAudit.length > 0 && (
        <div className="space-y-4 pt-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#5f6368] dark:text-[#9aa0a6]">
            Detailed Usability Friction Points
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {uxAudit.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] space-y-3"
              >
                <h5 className="text-sm font-bold text-[#202124] dark:text-[#f1f3f4] flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#fee2e2] dark:bg-[#3b1c1c] text-[#dc2626] dark:text-[#f87171] text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span>{item.issue.replace(/Issue \d+:\s*/, '')}</span>
                </h5>
                <p className="text-xs text-[#5f6368] dark:text-[#9aa0a6] leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-[#c5221f] dark:text-[#f28b82] uppercase tracking-wider block">Observed Impact:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.impact.map((imp, i) => (
                      <span key={i} className="text-[11px] px-2 py-0.5 rounded-md bg-rose-50 dark:bg-rose-950/40 text-[#c5221f] dark:text-[#f28b82] border border-rose-200 dark:border-rose-900/40">
                        {imp}
                      </span>
                    ))}
                  </div>
                </div>

                {item.recommendations && item.recommendations.length > 0 && (
                  <div className="space-y-1 pt-1 border-t border-[#dadce0] dark:border-[#2d2f34]">
                    <span className="text-[11px] font-bold text-[#137333] dark:text-[#81c995] uppercase tracking-wider block">Redesign Recommendations:</span>
                    <ul className="space-y-1 text-xs text-[#3c4043] dark:text-[#bdc1c6]">
                      {item.recommendations.map((rec, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#137333] dark:text-[#81c995] shrink-0 mt-0.5" />
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
