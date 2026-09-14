import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Mail, Phone, FileText, Calendar } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  onOpenScheduleCall?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenContact, onOpenScheduleCall }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#202124] text-[#9aa0a6] py-12 border-t border-[#3c4043] relative">
      {/* Google 4-Color Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 flex">
        <div className="flex-1 bg-[#4285f4]"></div>
        <div className="flex-1 bg-[#ea4335]"></div>
        <div className="flex-1 bg-[#fbbc04]"></div>
        <div className="flex-1 bg-[#34a853]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#3c4043]">
          
          {/* Identity */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4285f4]"></span>
              <span className="text-white font-bold text-lg tracking-tight block">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#bdc1c6]">
              Technical Product Manager & Product Strategist • Dhaka, Bangladesh
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm">
            <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#timeline" className="hover:text-white transition-colors">Career Timeline</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#certifications" className="hover:text-white transition-colors">Certifications</a>
            <a href="#articles" className="hover:text-white transition-colors">Articles</a>
            <button
              onClick={onOpenResume}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
            <button
              id="footer-schedule-call-btn"
              onClick={onOpenScheduleCall}
              className="text-[#8ab4f8] hover:text-white transition-colors flex items-center gap-1 cursor-pointer font-medium"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Schedule 1:1 Call</span>
            </button>
            <button
              onClick={onOpenContact}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Back to top */}
          <button
            id="footer-back-to-top"
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-[#303134] text-[#e8eaed] hover:text-white hover:bg-[#3c4043] transition-colors cursor-pointer border border-[#5f6368]"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#80868b]">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Development Nexcent Tech</p>
          <p className="flex items-center gap-4">
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <span>•</span>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <span>•</span>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">
              {PERSONAL_INFO.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

