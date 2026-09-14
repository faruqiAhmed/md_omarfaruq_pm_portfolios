import React from 'react';
import { TrendingUp, Globe, Check, AlertCircle } from 'lucide-react';
import { MarketSize, CompetitiveBenchmark } from '../../types';

interface MarketAndCompetitiveSectionProps {
  marketSize?: MarketSize;
  competitiveBenchmark?: CompetitiveBenchmark[];
}

export const MarketAndCompetitiveSection: React.FC<MarketAndCompetitiveSectionProps> = ({
  marketSize,
  competitiveBenchmark,
}) => {
  if (!marketSize && (!competitiveBenchmark || competitiveBenchmark.length === 0)) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-[#18191c] rounded-xl border border-[#dadce0] dark:border-[#2d2f34] p-6 sm:p-8 space-y-6 shadow-xs">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
        <Globe className="w-4 h-4" />
        <span>Market Opportunity & Competitive Landscape</span>
      </div>

      {/* Market Sizing (TAM / SAM / SOM) */}
      {marketSize && (
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#5f6368] dark:text-[#9aa0a6]">
            Market Sizing (TAM • SAM • SOM)
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array.isArray(marketSize) ? (
              marketSize.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] space-y-1"
                >
                  <span className="text-[11px] font-bold text-[#5f6368] dark:text-[#9aa0a6] uppercase tracking-wider">
                    {item.layer}
                  </span>
                  <div className={`text-xl font-extrabold ${
                    idx === 0
                      ? 'text-[#1a73e8] dark:text-[#8ab4f8]'
                      : idx === 1
                      ? 'text-[#34a853] dark:text-[#81c995]'
                      : 'text-[#f9ab00] dark:text-[#fdd663]'
                  }`}>
                    {item.estSize}
                  </div>
                  <p className="text-xs text-[#3c4043] dark:text-[#bdc1c6] leading-relaxed">
                    {item.definition}
                  </p>
                </div>
              ))
            ) : (
              <>
                <div className="p-4 rounded-xl bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] space-y-1">
                  <span className="text-[11px] font-bold text-[#5f6368] dark:text-[#9aa0a6] uppercase tracking-wider">
                    Total Addressable (TAM)
                  </span>
                  <div className="text-xl font-extrabold text-[#1a73e8] dark:text-[#8ab4f8]">
                    {marketSize.tam.value}
                  </div>
                  <p className="text-xs text-[#3c4043] dark:text-[#bdc1c6] leading-relaxed">
                    {marketSize.tam.description}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] space-y-1">
                  <span className="text-[11px] font-bold text-[#5f6368] dark:text-[#9aa0a6] uppercase tracking-wider">
                    Serviceable Addressable (SAM)
                  </span>
                  <div className="text-xl font-extrabold text-[#34a853] dark:text-[#81c995]">
                    {marketSize.sam.value}
                  </div>
                  <p className="text-xs text-[#3c4043] dark:text-[#bdc1c6] leading-relaxed">
                    {marketSize.sam.description}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] space-y-1">
                  <span className="text-[11px] font-bold text-[#5f6368] dark:text-[#9aa0a6] uppercase tracking-wider">
                    Serviceable Obtainable (SOM)
                  </span>
                  <div className="text-xl font-extrabold text-[#f9ab00] dark:text-[#fdd663]">
                    {marketSize.som.value}
                  </div>
                  <p className="text-xs text-[#3c4043] dark:text-[#bdc1c6] leading-relaxed">
                    {marketSize.som.description}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Competitive Benchmark */}
      {competitiveBenchmark && competitiveBenchmark.length > 0 && (
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#5f6368] dark:text-[#9aa0a6]">
              Competitive Benchmarking Matrix
            </h4>
            <span className="text-xs text-[#5f6368] dark:text-[#9aa0a6]">
              Direct Comparative Analysis
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#dadce0] dark:border-[#2d2f34] rounded-xl overflow-hidden">
              <thead className="bg-[#f1f3f4] dark:bg-[#202227] text-[#5f6368] dark:text-[#9aa0a6] uppercase font-bold text-[11px]">
                <tr>
                  <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34]">Capability / Feature</th>
                  <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34] text-center text-[#1a73e8] dark:text-[#8ab4f8]">Google Maps</th>
                  <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34] text-center">Apple Maps</th>
                  <th className="p-3 border-b border-[#dadce0] dark:border-[#2d2f34] text-center">Waze</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#dadce0] dark:divide-[#2d2f34] bg-white dark:bg-[#18191c]">
                {competitiveBenchmark.map((comp, idx) => (
                  <tr key={idx} className="hover:bg-[#f8fafd] dark:hover:bg-[#1f2025]">
                    <td className="p-3 font-bold text-[#202124] dark:text-[#f1f3f4]">{comp.capability || comp.feature}</td>
                    <td className="p-3 text-center font-semibold text-[#1a73e8] dark:text-[#8ab4f8]">{comp.googleMaps}</td>
                    <td className="p-3 text-center text-[#3c4043] dark:text-[#bdc1c6]">{comp.appleMaps}</td>
                    <td className="p-3 text-center text-[#3c4043] dark:text-[#bdc1c6]">{comp.waze}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
