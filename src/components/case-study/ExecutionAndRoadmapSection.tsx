import React from 'react';
import { Cpu, Clock, Award, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { EdgeCaseItem, ArchitectureRiskItem, GoToMarketPhase, SixMonthSuccessCriteriaItem, MilestoneItem } from '../../types';

interface ExecutionAndRoadmapSectionProps {
  edgeCases?: EdgeCaseItem[];
  architectureRisks?: ArchitectureRiskItem[];
  goToMarketPhases?: GoToMarketPhase[];
  sixMonthSuccessCriteria?: SixMonthSuccessCriteriaItem[];
  milestonesList?: MilestoneItem[];
}

export const ExecutionAndRoadmapSection: React.FC<ExecutionAndRoadmapSectionProps> = ({
  edgeCases,
  architectureRisks,
  goToMarketPhases,
  sixMonthSuccessCriteria,
  milestonesList,
}) => {
  const hasContent = (edgeCases && edgeCases.length > 0) ||
    (architectureRisks && architectureRisks.length > 0) ||
    (goToMarketPhases && goToMarketPhases.length > 0) ||
    (sixMonthSuccessCriteria && sixMonthSuccessCriteria.length > 0) ||
    (milestonesList && milestonesList.length > 0);

  if (!hasContent) return null;

  return (
    <div className="space-y-6">
      {/* Edge Cases & Failure Handling */}
      {edgeCases && edgeCases.length > 0 && (
        <div className="bg-white dark:bg-[#18191c] rounded-xl border border-[#dadce0] dark:border-[#2d2f34] p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
            <ShieldAlert className="w-4 h-4" />
            <span>Edge Cases & Exception Scenarios</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#dadce0] dark:border-[#2d2f34] rounded-xl overflow-hidden">
              <thead className="bg-[#f1f3f4] dark:bg-[#202227] text-[#5f6368] dark:text-[#9aa0a6] uppercase font-bold text-[11px]">
                <tr>
                  <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34]">Scenario / Edge Case</th>
                  <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34] text-[#1a73e8] dark:text-[#8ab4f8]">Product Resolution & Behavior</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#dadce0] dark:divide-[#2d2f34] bg-white dark:bg-[#18191c]">
                {edgeCases.map((ec, idx) => (
                  <tr key={idx} className="hover:bg-[#f8fafd] dark:hover:bg-[#1f2025]">
                    <td className="p-3 font-bold text-[#202124] dark:text-[#f1f3f4] whitespace-nowrap">
                      {ec.feature ? <span className="text-[#1a73e8] dark:text-[#8ab4f8] mr-1">[{ec.feature}]</span> : null}
                      {ec.scenario}
                    </td>
                    <td className="p-3 text-[#3c4043] dark:text-[#bdc1c6]">{ec.expectedBehavior || ec.solution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Technical Architecture & Primary Risks */}
      {architectureRisks && architectureRisks.length > 0 && (
        <div className="bg-white dark:bg-[#18191c] rounded-xl border border-[#dadce0] dark:border-[#2d2f34] p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
            <Cpu className="w-4 h-4" />
            <span>Technical Architecture & Engineering Risk Matrix</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#dadce0] dark:border-[#2d2f34] rounded-xl overflow-hidden">
              <thead className="bg-[#f1f3f4] dark:bg-[#202227] text-[#5f6368] dark:text-[#9aa0a6] uppercase font-bold text-[11px]">
                <tr>
                  <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34]">Domain / Solution</th>
                  <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34]">Architecture & Components</th>
                  <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34] text-[#c5221f] dark:text-[#f28b82]">Primary Risk</th>
                  <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34] text-[#137333] dark:text-[#81c995]">Mitigation Strategy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#dadce0] dark:divide-[#2d2f34] bg-white dark:bg-[#18191c]">
                {architectureRisks.map((ar, idx) => (
                  <tr key={idx} className="hover:bg-[#f8fafd] dark:hover:bg-[#1f2025]">
                    <td className="p-3 font-bold text-[#202124] dark:text-[#f1f3f4] whitespace-nowrap">{ar.solution || ar.component}</td>
                    <td className="p-3 text-[#3c4043] dark:text-[#bdc1c6]">{ar.keyComponents || 'Core service layers'}</td>
                    <td className="p-3 text-[#c5221f] dark:text-[#f28b82] font-medium">{ar.primaryRisk || ar.risk}</td>
                    <td className="p-3 text-[#137333] dark:text-[#81c995] font-semibold">{ar.mitigation || 'Proactive architecture isolation'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Go-to-Market Phased Rollout */}
      {goToMarketPhases && goToMarketPhases.length > 0 && (
        <div className="bg-white dark:bg-[#18191c] rounded-xl border border-[#dadce0] dark:border-[#2d2f34] p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
            <Clock className="w-4 h-4" />
            <span>Go-To-Market & Staged Rollout Strategy</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#dadce0] dark:border-[#2d2f34] rounded-xl overflow-hidden">
              <thead className="bg-[#f1f3f4] dark:bg-[#202227] text-[#5f6368] dark:text-[#9aa0a6] uppercase font-bold text-[11px]">
                <tr>
                  <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34]">Rollout Phase</th>
                  <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34] text-center">Timeline / Audience</th>
                  <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34]">Core Focus / Gate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#dadce0] dark:divide-[#2d2f34] bg-white dark:bg-[#18191c]">
                {goToMarketPhases.map((gtm, idx) => (
                  <tr key={idx} className="hover:bg-[#f8fafd] dark:hover:bg-[#1f2025]">
                    <td className="p-3 font-bold text-[#202124] dark:text-[#f1f3f4] whitespace-nowrap">{gtm.phase}</td>
                    <td className="p-3 text-center font-bold text-[#1a73e8] dark:text-[#8ab4f8]">{gtm.timeline || gtm.audience}</td>
                    <td className="p-3 text-[#3c4043] dark:text-[#bdc1c6]">{gtm.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Six-Month Success Criteria */}
      {sixMonthSuccessCriteria && sixMonthSuccessCriteria.length > 0 && (
        <div className="bg-white dark:bg-[#18191c] rounded-xl border border-[#dadce0] dark:border-[#2d2f34] p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#137333] dark:text-[#81c995]">
            <Award className="w-4 h-4" />
            <span>6-Month Post-Launch Success Criteria</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#dadce0] dark:border-[#2d2f34] rounded-xl overflow-hidden">
              <thead className="bg-[#f1f3f4] dark:bg-[#202227] text-[#5f6368] dark:text-[#9aa0a6] uppercase font-bold text-[11px]">
                <tr>
                  <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34]">Key Metric</th>
                  <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34] text-center">Baseline</th>
                  <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34] text-center text-[#137333] dark:text-[#81c995]">6-Month Target</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#dadce0] dark:divide-[#2d2f34] bg-white dark:bg-[#18191c]">
                {sixMonthSuccessCriteria.map((sc, idx) => (
                  <tr key={idx} className="hover:bg-[#f8fafd] dark:hover:bg-[#1f2025]">
                    <td className="p-3 font-bold text-[#202124] dark:text-[#f1f3f4]">{sc.metric}</td>
                    <td className="p-3 text-center text-[#5f6368] dark:text-[#9aa0a6]">{sc.current || 'Current Baseline'}</td>
                    <td className="p-3 text-center font-extrabold text-[#137333] dark:text-[#81c995] text-sm">{sc.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Milestones List */}
      {milestonesList && milestonesList.length > 0 && (
        <div className="bg-white dark:bg-[#18191c] rounded-xl border border-[#dadce0] dark:border-[#2d2f34] p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
            <Clock className="w-4 h-4" />
            <span>Target Execution Milestones</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {milestonesList.map((ms, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] space-y-1.5"
              >
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#e8f0fe] dark:bg-[#1e2738] text-[#1a73e8] dark:text-[#8ab4f8]">
                  {ms.timeline}
                </span>
                <p className="text-xs font-semibold text-[#202124] dark:text-[#f1f3f4] leading-snug">
                  {ms.milestone}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
