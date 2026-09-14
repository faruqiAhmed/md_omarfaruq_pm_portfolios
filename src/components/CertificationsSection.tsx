import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, GraduationCap, CheckCircle2 } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="relative py-16 md:py-24 bg-[#f8fafd] dark:bg-[#0f1013] border-t border-[#dadce0] dark:border-[#2d2f34] transition-colors duration-200 overflow-hidden">
      
      {/* Subtle organic light blue gradient shape in bottom left */}
      <div 
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-100/60 dark:bg-blue-950/20 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Subtle light blue gradient shape in top right */}
      <div 
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-100/40 dark:bg-blue-950/20 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Decorative Dot Matrix in Top Right (5 columns x 4 rows) */}
      <div className="absolute top-10 right-10 hidden lg:grid grid-cols-5 gap-3.5 opacity-40 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#60a5fa] dark:bg-blue-500/50" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching design reference */}
        <div className="space-y-3 max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
            <Award className="w-4 h-4 text-[#1a73e8] dark:text-[#8ab4f8]" />
            <span>VERIFIED CREDENTIALS & ACADEMIC PEDIGREE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] dark:text-[#f3f4f6] tracking-tight">
            Professional Certifications & Honors
          </h2>
          <p className="text-sm sm:text-base text-[#475569] dark:text-[#9ca3af] leading-relaxed">
            Formal validation in modern product management, governmental technology recognition, and foundational computer science engineering.
          </p>
        </div>

        {/* Certifications 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {CERTIFICATIONS.map((cert) => {
            // Theme configs matching the reference image per card
            const isHDNB = cert.id === 'hdnb-pm-cert';
            const isICT = cert.id === 'ict-ministry-scholarship';
            const isDegree = cert.id === 'city-univ-cse';

            const iconBg = isHDNB
              ? 'bg-[#eff6ff] dark:bg-blue-950/50 text-[#1a73e8] dark:text-[#8ab4f8]'
              : isICT
              ? 'bg-[#ecfdf5] dark:bg-emerald-950/50 text-[#059669] dark:text-[#34d399]'
              : 'bg-[#f3e8ff] dark:bg-purple-950/50 text-[#7c3aed] dark:text-[#c084fc]';

            const curriculumHeadingColor = isHDNB
              ? 'text-[#1a73e8] dark:text-[#8ab4f8]'
              : isICT
              ? 'text-[#059669] dark:text-[#34d399]'
              : 'text-[#7c3aed] dark:text-[#c084fc]';

            const checkIconColor = isHDNB
              ? 'text-[#1a73e8] dark:text-[#8ab4f8]'
              : isICT
              ? 'text-[#059669] dark:text-[#34d399]'
              : 'text-[#7c3aed] dark:text-[#c084fc]';

            const footerBadgeClass = isHDNB
              ? 'bg-[#eff6ff] dark:bg-blue-950/50 text-[#1a73e8] dark:text-[#8ab4f8] border border-[#dbeafe] dark:border-blue-900/60'
              : isICT
              ? 'bg-[#ecfdf5] dark:bg-emerald-950/50 text-[#059669] dark:text-[#34d399] border border-[#a7f3d0] dark:border-emerald-900/60'
              : 'bg-[#f3e8ff] dark:bg-purple-950/50 text-[#7c3aed] dark:text-[#c084fc] border border-[#e9d5ff] dark:border-purple-900/60';

            const footerIconColor = isHDNB
              ? 'text-[#1a73e8] dark:text-[#8ab4f8]'
              : isICT
              ? 'text-[#059669] dark:text-[#34d399]'
              : 'text-[#7c3aed] dark:text-[#c084fc]';

            const orgColor = isHDNB
              ? 'text-[#1a73e8] dark:text-[#8ab4f8]'
              : 'text-[#475569] dark:text-[#94a3b8]';

            return (
              <div
                key={cert.id}
                id={`cert-card-${cert.id}`}
                className="bg-white dark:bg-[#18191c] rounded-2xl border border-[#dadce0] dark:border-[#2d2f34] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200"
              >
                <div className="space-y-5">
                  
                  {/* Top Badges Row */}
                  <div className="flex items-center justify-between gap-2">
                    {/* Status Badge (VERIFIED or ACTIVE CREDENTIAL) */}
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#16a34a] dark:text-[#4ade80] bg-[#dcfce7] dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-[#bbf7d0] dark:border-emerald-800/80">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{cert.verificationStatus.toUpperCase()}</span>
                    </span>

                    {/* Batch / Year Badge */}
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#eff6ff] dark:bg-blue-950/50 text-[#1a73e8] dark:text-[#8ab4f8] border border-[#dbeafe] dark:border-blue-900/60">
                      {cert.batchOrYear}
                    </span>
                  </div>

                  {/* Header: Icon + Title & Org */}
                  <div className="flex items-start gap-4 pt-1">
                    <div className={`w-14 h-14 rounded-full ${iconBg} flex items-center justify-center shrink-0 shadow-2xs`}>
                      {isDegree || isICT ? (
                        <GraduationCap className="w-7 h-7" />
                      ) : (
                        <Award className="w-7 h-7" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1 space-y-1">
                      <h3 className="text-base sm:text-lg font-bold text-[#0f172a] dark:text-[#f8fafc] leading-snug">
                        {cert.title}
                      </h3>
                      <p className={`text-xs sm:text-sm font-semibold ${orgColor} leading-relaxed`}>
                        {cert.organization}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#475569] dark:text-[#9ca3af] leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Curriculum Competencies */}
                  <div className="space-y-2.5 pt-1">
                    <span className={`text-[11px] font-bold uppercase tracking-wider block ${curriculumHeadingColor}`}>
                      CURRICULUM COMPETENCIES:
                    </span>
                    <ul className="space-y-2 text-xs sm:text-xs text-[#334155] dark:text-[#cbd5e1] leading-normal">
                      {cert.curriculumHighlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className={`w-4 h-4 ${checkIconColor} shrink-0 mt-0.5`} />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Card Footer with Official Credential and Batch Pill */}
                <div className="pt-5 mt-6 border-t border-[#f1f3f4] dark:border-[#26282d] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 font-medium text-[#334155] dark:text-[#bdc1c6]">
                    <Award className={`w-4 h-4 ${footerIconColor}`} />
                    <span>Official Credential</span>
                  </div>
                  <span className={`text-[11px] font-semibold px-3 py-1 rounded-full ${footerBadgeClass}`}>
                    BATCH-{cert.batchOrYear}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
