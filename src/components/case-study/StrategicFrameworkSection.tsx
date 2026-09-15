import React from 'react';
import { Target, Award, CheckCircle2 } from 'lucide-react';
import { StrategicPillar, OkrItem } from '../../types';

interface StrategicFrameworkSectionProps {
  strategicPillars?: StrategicPillar[];
  okrsList?: OkrItem[];
}

export const StrategicFrameworkSection: React.FC<StrategicFrameworkSectionProps> = ({
  strategicPillars,
  okrsList,
}) => {
  if ((!strategicPillars || strategicPillars.length === 0) && (!okrsList || okrsList.length === 0)) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-[#18191c] rounded-xl border border-[#dadce0] dark:border-[#2d2f34] p-4 sm:p-8 space-y-6 shadow-xs min-w-0 max-w-full">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
        <Target className="w-4 h-4" />
        <span>Strategic Framework & Target OKRs</span>
      </div>

      {/* Strategic Pillars Table */}
      {strategicPillars && strategicPillars.length > 0 && (
        <div className="space-y-3 min-w-0">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#5f6368] dark:text-[#9aa0a6]">
            Strategic Product Pillars
          </h4>

          {/* Mobile Card Layout (sm:hidden) */}
          <div className="sm:hidden space-y-3">
            {strategicPillars.map((sp, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] space-y-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-xs text-[#202124] dark:text-[#f1f3f4]">
                    {sp.pillar}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 dark:bg-blue-950/60 text-[#1a73e8] dark:text-[#8ab4f8] border border-blue-200 dark:border-blue-900/40 shrink-0">
                    Pillar {idx + 1}
                  </span>
                </div>
                <p className="text-xs text-[#3c4043] dark:text-[#bdc1c6] leading-relaxed">
                  <strong className="text-[#202124] dark:text-[#f1f3f4]">Objective:</strong> {sp.goal}
                </p>
                <div className="text-xs text-[#1a73e8] dark:text-[#8ab4f8] font-semibold pt-1 border-t border-[#dadce0] dark:border-[#2d2f34]">
                  Key Capability: {sp.feature}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table View (hidden sm:block) */}
          <div className="hidden sm:block overflow-x-auto w-full max-w-full">
            <table className="w-full text-xs text-left border border-[#dadce0] dark:border-[#2d2f34] rounded-xl overflow-hidden">
              <thead className="bg-[#f1f3f4] dark:bg-[#202227] text-[#5f6368] dark:text-[#9aa0a6] uppercase font-bold text-[11px]">
                <tr>
                  <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34]">Strategic Pillar</th>
                  <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34]">Core Objective / Goal</th>
                  <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34] text-[#1a73e8] dark:text-[#8ab4f8]">Key Product Capability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#dadce0] dark:divide-[#2d2f34] bg-white dark:bg-[#18191c]">
                {strategicPillars.map((sp, idx) => (
                  <tr key={idx} className="hover:bg-[#f8fafd] dark:hover:bg-[#1f2025]">
                    <td className="p-3 font-bold text-[#202124] dark:text-[#f1f3f4] whitespace-nowrap">{sp.pillar}</td>
                    <td className="p-3 text-[#3c4043] dark:text-[#bdc1c6]">{sp.goal}</td>
                    <td className="p-3 text-[#1a73e8] dark:text-[#8ab4f8] font-semibold">{sp.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* OKRs List */}
      {okrsList && okrsList.length > 0 && (
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#5f6368] dark:text-[#9aa0a6]">
            Objectives & Key Results (OKRs)
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {okrsList.map((okr, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] space-y-1.5"
              >
                <span className="text-[11px] font-bold text-[#1a73e8] dark:text-[#8ab4f8] uppercase tracking-wider">
                  {okr.category}
                </span>
                <p className="text-xs font-semibold text-[#202124] dark:text-[#f1f3f4] leading-snug">
                  {okr.target}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
