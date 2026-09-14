import React from 'react';
import { Lightbulb, CheckCircle2, Sparkles } from 'lucide-react';
import { ProposedSolution } from '../../types';

interface ProposedSolutionsSectionProps {
  proposedSolutions?: ProposedSolution[];
}

export const ProposedSolutionsSection: React.FC<ProposedSolutionsSectionProps> = ({
  proposedSolutions,
}) => {
  if (!proposedSolutions || proposedSolutions.length === 0) return null;

  return (
    <div className="bg-white dark:bg-[#18191c] rounded-xl border border-[#dadce0] dark:border-[#2d2f34] p-6 sm:p-8 space-y-6 shadow-xs">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
        <Lightbulb className="w-4 h-4" />
        <span>Proposed Solutions & Core Feature Specifications</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {proposedSolutions.map((sol, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-6 h-6 rounded-full bg-[#e8f0fe] dark:bg-[#1e2738] text-[#1a73e8] dark:text-[#8ab4f8] text-xs font-bold flex items-center justify-center">
                  {idx + 1}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300">
                  Feature {idx + 1}
                </span>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#202124] dark:text-[#f1f3f4] mb-1">
                  {sol.title}
                </h4>
                <p className="text-xs text-[#5f6368] dark:text-[#9aa0a6] leading-relaxed">
                  {sol.description}
                </p>
              </div>

              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-bold text-[#5f6368] dark:text-[#9aa0a6] uppercase tracking-wider block">
                  Key Capabilities & Specifications:
                </span>
                <ul className="space-y-1.5 text-xs text-[#3c4043] dark:text-[#bdc1c6]">
                  {(sol.bullets || sol.keyPoints || []).map((pt, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1a73e8] dark:text-[#8ab4f8] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {('impact' in sol && (sol as any).impact) && (
              <div className="pt-3 border-t border-[#dadce0] dark:border-[#2d2f34]">
                <div className="p-2.5 rounded-lg bg-[#e8f0fe] dark:bg-[#1e2738] border border-[#d2e3fc] dark:border-[#2a3852] text-xs">
                  <span className="text-[10px] font-bold text-[#1a73e8] dark:text-[#8ab4f8] uppercase tracking-wider block mb-0.5">
                    Target Impact:
                  </span>
                  <p className="text-[11px] font-semibold text-[#202124] dark:text-[#e8eaed]">
                    {(sol as any).impact}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
