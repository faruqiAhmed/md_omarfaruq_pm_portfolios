import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import faruqPortrait from '../assets/images/faruq.png';
import { Menu, X, Sun, Moon, Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  onOpenScheduleCall?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact, onOpenScheduleCall }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, resolvedTheme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'PM Pillars', href: '#google-pillars' },
    { label: 'Experience', href: '#timeline' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Writing', href: '#articles' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#151619]/95 backdrop-blur-md border-b border-neutral-200/90 dark:border-[#2b2d33] shadow-xs'
          : 'bg-white/85 dark:bg-[#151619]/85 backdrop-blur-xs border-b border-neutral-200/60 dark:border-[#2b2d33]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand identity: Clean, confident typography with avatar */}
        <a
          href="#"
          id="nav-brand-link"
          className="flex items-center group focus:outline-hidden"
        >
          <img
            src={faruqPortrait}
            alt={PERSONAL_INFO.name}
            referrerPolicy="no-referrer"
            className="w-8 h-8 rounded-full object-cover object-top border border-neutral-300 dark:border-neutral-700 mr-2.5 shadow-2xs group-hover:scale-105 transition-transform"
          />
          <span className="font-semibold text-base sm:text-lg text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
            {PERSONAL_INFO.name}
          </span>
        </a>

        {/* Desktop Navigation: Pure, clean text links */}
        <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-neutral-600 dark:text-[#bdc1c6]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              id={`desktop-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              className="hover:text-neutral-950 dark:hover:text-white transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls: Theme Toggle & Clean Text Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Light / Dark Mode Toggle Button */}
          <button
            id="nav-theme-toggle-btn"
            onClick={toggleTheme}
            className="p-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-[#25272c] transition-all cursor-pointer focus:outline-hidden"
            aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode (Current: ${theme === 'system' ? 'System (' + resolvedTheme + ')' : theme})`}
          >
            {resolvedTheme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-neutral-700 transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="text-[13px] font-medium text-neutral-600 dark:text-[#bdc1c6] hover:text-neutral-950 dark:hover:text-white transition-colors px-2 py-1.5 cursor-pointer"
          >
            Resume
          </button>
          <button
            id="nav-schedule-call-btn"
            onClick={onOpenScheduleCall}
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold px-3.5 py-1.5 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] dark:bg-[#1a73e8] dark:hover:bg-[#1765cc] text-white transition-all cursor-pointer shadow-xs"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Schedule 1:1 Call</span>
          </button>
          <button
            id="nav-contact-btn"
            onClick={onOpenContact}
            className="text-[13px] font-medium px-3 py-1.5 rounded-full border border-neutral-300 dark:border-[#35383f] text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-[#25272c] transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Theme Toggle Button */}
          <button
            id="nav-mobile-theme-toggle-btn"
            onClick={toggleTheme}
            className="p-1.5 rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-[#25272c] transition-colors"
            aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {resolvedTheme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
            )}
          </button>

          <button
            id="nav-mobile-resume-btn"
            onClick={onOpenResume}
            className="text-xs font-medium text-neutral-700 dark:text-[#bdc1c6] px-2 py-1 hover:text-neutral-950 dark:hover:text-white"
          >
            Resume
          </button>
          <button
            id="nav-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-neutral-700 dark:text-[#bdc1c6] hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-[#25272c] rounded-md transition-colors focus:outline-hidden"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer: Clean, vertical text links */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden bg-white dark:bg-[#18191c] border-b border-neutral-200 dark:border-[#2b2d33] px-4 pt-2 pb-5 shadow-sm animate-in fade-in duration-150"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                id={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-neutral-700 dark:text-[#bdc1c6] hover:text-neutral-950 dark:hover:text-white py-2.5 px-2 rounded-md hover:bg-neutral-50 dark:hover:bg-[#25272c] transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            <div className="pt-3 mt-2 border-t border-neutral-100 dark:border-[#2b2d33] flex flex-col gap-2">
              <button
                id="mobile-menu-resume-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full text-left py-2.5 px-2 text-sm font-medium text-neutral-700 dark:text-[#bdc1c6] hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-[#25272c] rounded-md transition-colors"
              >
                View Resume / CV
              </button>
              <button
                id="mobile-menu-schedule-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenScheduleCall) onOpenScheduleCall();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold rounded-full bg-[#1a73e8] hover:bg-[#1557b0] dark:bg-[#1a73e8] text-white transition-colors shadow-xs cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule a 1:1 Call</span>
              </button>
              <button
                id="mobile-menu-contact-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full text-center py-2.5 px-4 text-sm font-medium rounded-full border border-neutral-300 dark:border-[#35383f] text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-[#25272c] transition-colors cursor-pointer"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};


