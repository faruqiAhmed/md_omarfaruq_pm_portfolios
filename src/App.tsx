import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GooglePmPillarsSection } from './components/GooglePmPillarsSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { TimelineSection } from './components/TimelineSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ArticlesSection } from './components/ArticlesSection';
import { ResumeModal } from './components/ResumeModal';
import { ScheduleCallModal } from './components/ScheduleCallModal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudy } from './types';
import { Calendar } from 'lucide-react';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [caseStudyInitialMode, setCaseStudyInitialMode] = useState<'prd' | 'exec'>('prd');
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isScheduleCallOpen, setIsScheduleCallOpen] = useState<boolean>(false);

  const handleOpenCaseStudy = (caseStudy: CaseStudy, mode: 'prd' | 'exec' = 'prd') => {
    setCaseStudyInitialMode(mode);
    setSelectedCaseStudy(caseStudy);
  };

  const handleOpenContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#f8fafd] dark:bg-[#111215] text-[#202124] dark:text-[#e8eaed] flex flex-col selection:bg-[#e8f0fe] dark:selection:bg-[#1a3860] selection:text-[#1a73e8] dark:selection:text-[#8ab4f8] transition-colors duration-200">
        {/* Top Sticky Clean Navbar */}
        <Navbar
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={handleOpenContact}
          onOpenScheduleCall={() => setIsScheduleCallOpen(true)}
        />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Google PM Hero Section with Omnibar */}
          <Hero
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenContact={handleOpenContact}
            onOpenScheduleCall={() => setIsScheduleCallOpen(true)}
          />

          {/* PM Core Pillars */}
          <GooglePmPillarsSection />

          {/* Project PRDs & Case Studies */}
          <CaseStudiesSection
            onSelectCaseStudy={handleOpenCaseStudy}
          />

          {/* Interactive Career Trajectory Timeline */}
          <TimelineSection />

          {/* Skill Set & Frameworks */}
          <SkillsSection />

          {/* Professional Certifications & Education */}
          <CertificationsSection />

          {/* Featured Articles & Product Essays */}
          <ArticlesSection />

          {/* Inquiries & Contact Form */}
          <ContactSection 
            onOpenScheduleCall={() => setIsScheduleCallOpen(true)}
          />
        </main>

        {/* Footer with Google styling */}
        <Footer
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={handleOpenContact}
          onOpenScheduleCall={() => setIsScheduleCallOpen(true)}
        />

        {/* Detailed Google PRD / Case Study Modal */}
        <CaseStudyModal
          caseStudy={selectedCaseStudy}
          initialMode={caseStudyInitialMode}
          onClose={() => setSelectedCaseStudy(null)}
        />

        {/* Formatted Downloadable & Printable Resume Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />

        {/* High-Converting 1:1 Consultation / Call Scheduler Modal */}
        <ScheduleCallModal
          isOpen={isScheduleCallOpen}
          onClose={() => setIsScheduleCallOpen(false)}
        />

        {/* Floating Quick Action Button for 1:1 Call */}
        <div className="fixed bottom-5 right-5 z-30 flex items-center">
          <button
            id="floating-schedule-call-btn"
            onClick={() => setIsScheduleCallOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] dark:bg-[#1a73e8] dark:hover:bg-[#1765cc] text-white text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border border-white/20"
            title="Schedule a 1:1 Call with Omar"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <Calendar className="w-3.5 h-3.5" />
            <span className="font-medium">Schedule a 1:1 Call</span>
          </button>
        </div>
      </div>
    </ThemeProvider>
  );
}


