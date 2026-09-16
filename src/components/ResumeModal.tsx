import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { generateResumePdf } from '../utils/generatePdf';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  FileText,
  Mail,
  Phone,
  MapPin,
  Github,
  AlertCircle,
  Sparkles
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [pdfSuccess, setPdfSuccess] = useState(false);
  const [printNotice, setPrintNotice] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSavePdf = () => {
    try {
      setIsGeneratingPdf(true);
      generateResumePdf();
      setPdfSuccess(true);
      setPrintNotice("Executive PDF generated and downloaded successfully!");
      setTimeout(() => setPdfSuccess(false), 3000);
      setTimeout(() => setPrintNotice(null), 4000);
    } catch (err) {
      console.error("Failed to generate PDF:", err);
      setPrintNotice("Error generating PDF. Please try copying markdown or text.");
      setTimeout(() => setPrintNotice(null), 4000);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handlePrint = () => {
    try {
      const resumeEl = document.getElementById('resume-document-content');
      if (!resumeEl) {
        window.print();
        return;
      }

      // Create a clean hidden printing frame to ensure exact visual styling
      const printIframe = document.createElement('iframe');
      printIframe.style.position = 'fixed';
      printIframe.style.right = '0';
      printIframe.style.bottom = '0';
      printIframe.style.width = '0';
      printIframe.style.height = '0';
      printIframe.style.border = '0';
      document.body.appendChild(printIframe);

      const frameDoc = printIframe.contentWindow?.document;
      if (!frameDoc) {
        window.print();
        return;
      }

      // Collect all stylesheets from current document
      let headStyles = '';
      document.querySelectorAll('style, link[rel="stylesheet"]').forEach(node => {
        headStyles += node.outerHTML;
      });

      frameDoc.open();
      frameDoc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>MD Omar Faruq - Product Manager Resume</title>
            ${headStyles}
            <style>
              @page {
                size: A4 portrait;
                margin: 10mm 12mm;
              }
              body {
                background: white !important;
                color: #0f172a !important;
                margin: 0 !important;
                padding: 0 !important;
                font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
                font-size: 11px !important;
                line-height: 1.4 !important;
              }
              h1 { font-size: 18px !important; margin-bottom: 2px !important; }
              h2 { font-size: 10px !important; margin-top: 6px !important; margin-bottom: 2px !important; }
              p, li { font-size: 9.5px !important; line-height: 1.35 !important; }
              ul { margin-top: 2px !important; margin-bottom: 3px !important; }
              .space-y-6 > * + * { margin-top: 0.75rem !important; }
              .space-y-4 > * + * { margin-top: 0.5rem !important; }
              .space-y-3 > * + * { margin-top: 0.4rem !important; }
              .space-y-1\.5 > * + * { margin-top: 0.2rem !important; }
              * {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
            </style>
          </head>
          <body class="bg-white text-slate-900 p-2">
            ${resumeEl.innerHTML}
          </body>
        </html>
      `);
      frameDoc.close();

      setTimeout(() => {
        try {
          printIframe.contentWindow?.focus();
          printIframe.contentWindow?.print();
        } catch (e) {
          console.warn("Iframe print exception, fallback to direct print", e);
          window.print();
        }
        setTimeout(() => {
          if (document.body.contains(printIframe)) {
            document.body.removeChild(printIframe);
          }
        }, 1500);
      }, 300);

      setPrintNotice("Print preview opened. In the print dialog, select 'Save as PDF' to save or choose your printer.");
      setTimeout(() => setPrintNotice(null), 5000);
    } catch (err) {
      console.warn("handlePrint error:", err);
      handleSavePdf();
    }
  };

  const handleDownloadMarkdown = () => {
    const markdownResume = `# MD OMAR FARUQ
Product Manager | Technical Product Management
Dhaka, Bangladesh | +880 1642-031736 | faruqdeveloper@gmail.com | https://omarfaruqme.vercel.app/ | https://www.linkedin.com/in/omarfaruqofficial/ | https://github.com/faruqiAhmed

## SUMMARY
Product Manager with 1+ years of dedicated product management experience and 4+ years of hands-on iOS engineering experience building and shipping mobile products across fintech, social, and on-demand mobility. Founded and scaled a software company from the ground up, defining business requirements, driving cross-functional teams, and making data-informed trade-offs to take products from concept to launch. Hands-on technical depth enables fast, credible collaboration with engineering on scope, feasibility, and delivery.

## CORE SKILLS
Product Management · SDLC · Product Strategy · Business Requirements · User & Market Research · Wireframing · UI/UX · Stakeholder Management · Product Roadmap · Agile Project Management · Data-Driven Decision Making · Product Analytics · Go-to-Market Strategy · Technical Consultancy · Cross-Functional Leadership

## TECHNICAL SKILLS
Swift · SwiftUI · UIKit · MVC/MVVM · RESTful APIs · Firebase · CocoaPods · Git · Figma · Jira · SQL & Relational Databases

## PRODUCT MANAGEMENT EXPERIENCE
### Product Manager — Nexcent Tech Ltd
January 2025 – Present | Dhaka, Bangladesh
- Lead a software development and digital product company delivering web, mobile, and SaaS solutions to clients while incubating internal ventures.
- Set product vision and roadmap, prioritizing features against business impact and user need across a multi-product portfolio.
- Guide cross-functional teams through discovery, Agile delivery, and stakeholder communication — turning ambiguous requirements into scoped, buildable plans.
- Shipped Outfit Sourcing BD, the City University Alumni Platform, and Ullomart (e-commerce), owning each from concept and UX through launch.

## IOS ENGINEERING EXPERIENCE
### iOS Engineer — ShareTrip Limited
Oct 2022 – Dec 2024 | Dhaka, Bangladesh
- Owned STPay, a personal-finance product spanning Spend, Save, and Invest, from feature spec through App Store release.
- Translated user-facing requirements into a scalable, Firebase-backed technical implementation in close partnership with design and backend teams.
- Weighed engineering trade-offs against user experience to prioritize scope for a live fintech product used daily by real customers.

### iOS Engineer — Walletmix
May 2021 – Oct 2022 | Dhaka, Bangladesh
- Drove two full product releases (v1 and v2), reworking scope and requirements as the product matured.
- Defined a scalable backend/API strategy in collaboration with cross-functional partners to support growing usage across Robi Alpha and Shobar Dhaka.

### iOS Engineer — Jr Consulting
May 2020 – May 2021 | Remote — Australia
- Owned the full product lifecycle — requirements, design, build, and deployment — for client-facing applications.
- Served as the primary technical point of contact for clients, converting business needs directly into shipped features.

## PRODUCT CASE STUDIES
- Authored independent product management case studies on Pathao, bKash, and Google Maps, analyzing UX friction points and proposing product strategy improvements.

## SHIPPED PRODUCTS
STPay (fintech) · TingTong (social) · Shofar Dhaka (local marketplace) · Robi Alpha (telecom rewards) · HiTaxi Driver (ride-hailing) · Ullomart (e-commerce)

## EDUCATION
B.Sc. in Computer Science and Engineering — City University, Dhaka, Bangladesh (April 2015 – May 2019)

## CERTIFICATIONS
- Product Management — Human Development Network Bangladesh (HDNB), Batch 1B8

## RECOGNITION
- 2019 Scholar, ICT Ministry, Bangladesh — selected for a national scholarship program; built an interactive Swift Playground prototype using SpriteKit and engaged with engineers and designers on iOS product direction.
`;

    const blob = new Blob([markdownResume], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'MD_Omar_Faruq_Product_Manager_Resume.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyText = () => {
    const textResume = `MD OMAR FARUQ
Product Manager | Technical Product Management
Dhaka, Bangladesh | +880 1642-031736 | faruqdeveloper@gmail.com | https://omarfaruqme.vercel.app/ | linkedin.com/in/omarfaruqofficial | github.com/faruqiAhmed

SUMMARY
Product Manager with 1+ years of dedicated product management experience and 4+ years of hands-on iOS engineering experience building and shipping mobile products across fintech, social, and on-demand mobility. Founded and scaled a software company from the ground up, defining business requirements, driving cross-functional teams, and making data-informed trade-offs to take products from concept to launch. Hands-on technical depth enables fast, credible collaboration with engineering on scope, feasibility, and delivery.

CORE SKILLS
Product Management · SDLC · Product Strategy · Business Requirements · User & Market Research · Wireframing · UI/UX · Stakeholder Management · Product Roadmap · Agile Project Management · Data-Driven Decision Making · Product Analytics · Go-to-Market Strategy · Technical Consultancy · Cross-Functional Leadership

TECHNICAL SKILLS
Swift · SwiftUI · UIKit · MVC/MVVM · RESTful APIs · Firebase · CocoaPods · Git · Figma · Jira · SQL & Relational Databases

PRODUCT MANAGEMENT EXPERIENCE
Product Manager — Nexcent Tech Ltd (Jan 2025 – Present | Dhaka, Bangladesh)
- Lead software development and digital product company delivering web, mobile, and SaaS solutions.
- Set product vision and roadmap across multi-product portfolio.
- Shipped Outfit Sourcing BD, City University Alumni Platform, and Ullomart.

IOS ENGINEERING EXPERIENCE
iOS Engineer — ShareTrip Limited (Oct 2022 – Dec 2024 | Dhaka, Bangladesh)
- Owned STPay personal finance product spanning Spend, Save, and Invest through App Store release.
- Translated user requirements into scalable Firebase-backed implementation.

iOS Engineer — Walletmix (May 2021 – Oct 2022 | Dhaka, Bangladesh)
- Drove v1 and v2 releases; scaled APIs for Robi Alpha and Shobar Dhaka.

iOS Engineer — Jr Consulting (May 2020 – May 2021 | Remote — Australia)
- Owned full product lifecycle for client-facing applications.

EDUCATION
B.Sc. in Computer Science and Engineering — City University, Dhaka, Bangladesh (2015–2019)

CERTIFICATIONS
Product Management — Human Development Network Bangladesh (HDNB), Batch 1B8

RECOGNITION
2019 Scholar, ICT Ministry, Bangladesh`;

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 dark:bg-black/75 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="resume-modal-window"
        className="relative w-full max-w-4xl bg-white dark:bg-[#18191c] rounded-2xl shadow-2xl border border-slate-200 dark:border-[#2d2f34] overflow-hidden my-4 text-slate-900 dark:text-[#f1f3f4]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Toolbar (hidden during print) */}
        <div className="no-print sticky top-0 z-30 bg-slate-900 dark:bg-[#121316] text-white px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-2 shadow-xs border-b border-transparent dark:border-[#2d2f34]">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-slate-300 dark:text-[#8ab4f8]" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide">
              MD Omar Faruq — Resume
            </span>
          </div>

          <div className="flex items-center flex-wrap gap-1.5 sm:gap-2">
            {/* Live Portfolio / Web Resume Link */}
            <a
              id="resume-live-portfolio-btn"
              href={PERSONAL_INFO.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Open Live Portfolio & Web Resume (https://omarfaruqme.vercel.app/)"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#8ab4f8]" />
              <span className="hidden sm:inline">omarfaruqme.vercel.app</span>
              <span className="sm:hidden">Web</span>
            </a>

            {/* Direct Save as PDF (Vector jsPDF) */}
            <button
              id="resume-save-pdf-action"
              onClick={handleSavePdf}
              disabled={isGeneratingPdf}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#1a73e8] hover:bg-[#1557b0] text-white shadow-xs transition-all cursor-pointer disabled:opacity-75 active:scale-95"
              title="Download Resume (PDF)"
            >
              {pdfSuccess ? (
                <Check className="w-3.5 h-3.5 text-emerald-300" />
              ) : (
                <Download className="w-3.5 h-3.5" />
              )}
              <span>{pdfSuccess ? "Downloaded!" : isGeneratingPdf ? "Creating PDF..." : "Download Resume"}</span>
            </button>

            {/* Native Print Dialog */}
            <button
              id="resume-print-action"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer active:scale-95"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              id="resume-download-action"
              onClick={handleDownloadMarkdown}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Download Markdown Resume"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden md:inline">.md</span>
            </button>

            <button
              id="resume-copy-action"
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Copy Plaintext to Clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
            </button>

            <div className="w-px h-5 bg-white/20 mx-0.5 sm:mx-1"></div>

            <button
              id="close-resume-modal-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dynamic Status / Iframe Helper Banner */}
        {printNotice && (
          <div className="no-print bg-[#e8f0fe] dark:bg-[#1a273b] border-b border-[#aecbfa] dark:border-[#2a4365] px-4 py-2 text-xs flex items-center justify-between text-[#174ea6] dark:text-[#aecbfa] animate-in fade-in duration-200">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 shrink-0 text-[#1a73e8] dark:text-[#8ab4f8]" />
              <span>{printNotice}</span>
            </div>
            <button
              onClick={() => setPrintNotice(null)}
              className="text-[#174ea6] dark:text-[#aecbfa] hover:opacity-75 p-0.5 ml-2 cursor-pointer"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* Formatted Printable Resume Document */}
        <div id="resume-document-content" className="print-container p-6 sm:p-12 max-h-[85vh] overflow-y-auto font-sans bg-white dark:bg-[#18191c] space-y-6">
          
          {/* Header */}
          <div className="border-b border-slate-300 dark:border-[#2d2f34] pb-4 text-center sm:text-left space-y-1.5">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-[#f1f3f4] uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm sm:text-base font-semibold text-slate-700 dark:text-[#bdc1c6]">
              Product Manager | Technical Product Management
            </p>
            <div className="space-y-1 text-xs text-slate-600 dark:text-[#9aa0a6] pt-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1">
                <span>{PERSONAL_INFO.location}</span>
                <span>•</span>
                <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="hover:underline">{PERSONAL_INFO.phone}</a>
                <span>•</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
              </div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-[11px] sm:text-xs">
                <a href={PERSONAL_INFO.portfolio} target="_blank" rel="noopener noreferrer" className="text-[#1a73e8] dark:text-[#8ab4f8] font-semibold underline inline-flex items-center gap-1">
                  <span>omarfaruqme.vercel.app</span>
                  <ExternalLink className="w-3 h-3 no-print inline opacity-70" />
                </a>
                <span>•</span>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-slate-900 dark:text-[#8ab4f8] underline hover:text-[#1a73e8]">
                  linkedin.com/in/omarfaruqofficial
                </a>
                <span>•</span>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-slate-900 dark:text-[#8ab4f8] underline hover:text-[#1a73e8]">
                  github.com/faruqiAhmed
                </a>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-1">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-[#f1f3f4] border-b border-slate-200 dark:border-[#2d2f34] pb-1">
              Summary
            </h2>
            <p className="text-xs sm:text-[13px] text-slate-700 dark:text-[#bdc1c6] leading-relaxed">
              Product Manager with 1+ years of dedicated product leadership and 4+ years of hands-on iOS engineering experience. I bridge the gap between customer problems, product strategy, and technical execution — turning ambiguous problems into structured PRDs, data-driven OKRs, prioritized roadmaps, and buildable product solutions across Fintech, On-Demand Mobility, and Multi-Product SaaS.
            </p>
          </div>

          {/* Core & Technical Skills */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-[#f1f3f4] border-b border-slate-200 dark:border-[#2d2f34] pb-1">
              Core & Technical Skills
            </h2>
            <div className="space-y-1 text-xs sm:text-[13px] text-slate-700 dark:text-[#bdc1c6] leading-relaxed">
              <div>
                <strong className="text-slate-900 dark:text-[#f1f3f4] font-semibold">Product Management: </strong>
                <span>Product Strategy · SDLC · PRD Writing · Agile Discovery & Delivery (Scrum/Kanban) · Backlog Prioritization (RICE) · Wireframing (Figma) · User & Market Research · Product Analytics · Go-to-Market</span>
              </div>
              <div>
                <strong className="text-slate-900 dark:text-[#f1f3f4] font-semibold">Engineering & Tools: </strong>
                <span>Swift · iOS (UIKit, SwiftUI) · RESTful APIs · Firebase · Jira & Confluence · Git · SQL & Relational Databases · System Architecture & API Design</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-[#f1f3f4] border-b border-slate-200 dark:border-[#2d2f34] pb-1">
              Professional Experience
            </h2>

            {/* Nexcent Tech Ltd */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                <div>
                  <strong className="font-bold text-slate-900 dark:text-[#f1f3f4]">Product Manager</strong> — <span className="dark:text-[#bdc1c6]">Nexcent Tech Ltd</span>
                </div>
                <div className="text-xs text-slate-600 dark:text-[#9aa0a6] font-medium">
                  Jan 2025 – Present | Dhaka, Bangladesh
                </div>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs sm:text-[13px] text-slate-700 dark:text-[#bdc1c6] leading-relaxed">
                <li>Lead digital product consulting & SaaS incubation squads, establishing product vision, roadmaps, and sprint priorities across multiple client initiatives.</li>
                <li>Guide cross-functional teams through Agile discovery & delivery, stakeholder communication, and scoping — maintaining a 94% on-time milestone delivery rate.</li>
                <li>Shipped Outfit Sourcing BD, City University Alumni Platform, and Ullomart (e-commerce), owning each from concept and UX through launch.</li>
              </ul>
            </div>

            {/* ShareTrip */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                <div>
                  <strong className="font-bold text-slate-900 dark:text-[#f1f3f4]">iOS Engineer</strong> — <span className="dark:text-[#bdc1c6]">ShareTrip Limited</span>
                </div>
                <div className="text-xs text-slate-600 dark:text-[#9aa0a6] font-medium">
                  Oct 2022 – Dec 2024 | Dhaka, Bangladesh
                </div>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs sm:text-[13px] text-slate-700 dark:text-[#bdc1c6] leading-relaxed">
                <li>Owned STPay fintech platform spanning Spend, Save, and Invest, collaborating from feature spec through App Store release for thousands of daily active users.</li>
                <li>Translated user-facing requirements into scalable Firebase-backed technical architecture in close partnership with design and backend teams.</li>
                <li>Weighed engineering trade-offs against user experience to prioritize sprint scope for live fintech operations.</li>
              </ul>
            </div>

            {/* Walletmix */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                <div>
                  <strong className="font-bold text-slate-900 dark:text-[#f1f3f4]">iOS Engineer</strong> — <span className="dark:text-[#bdc1c6]">Walletmix</span>
                </div>
                <div className="text-xs text-slate-600 dark:text-[#9aa0a6] font-medium">
                  May 2021 – Oct 2022 | Dhaka, Bangladesh
                </div>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs sm:text-[13px] text-slate-700 dark:text-[#bdc1c6] leading-relaxed">
                <li>Drove two full product releases (v1 and v2), reworking scope and requirements as the product matured and reducing SDK footprint from 28MB to 4.2MB.</li>
                <li>Defined scalable API contracts in collaboration with cross-functional partners to support growing usage across Robi Alpha and Shobar Dhaka.</li>
              </ul>
            </div>

            {/* Jr Consulting */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                <div>
                  <strong className="font-bold text-slate-900 dark:text-[#f1f3f4]">iOS Engineer</strong> — <span className="dark:text-[#bdc1c6]">Jr Consulting</span>
                </div>
                <div className="text-xs text-slate-600 dark:text-[#9aa0a6] font-medium">
                  May 2020 – May 2021 | Remote — Australia
                </div>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs sm:text-[13px] text-slate-700 dark:text-[#bdc1c6] leading-relaxed">
                <li>Owned full product lifecycle — requirements, design, build, and deployment — as primary technical point of contact for international clients.</li>
              </ul>
            </div>
          </div>

          {/* Key Case Studies & Shipped Products */}
          <div className="space-y-1">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-[#f1f3f4] border-b border-slate-200 dark:border-[#2d2f34] pb-1">
              Key Case Studies & Shipped Products
            </h2>
            <div className="space-y-0.5 text-xs sm:text-[13px] text-slate-700 dark:text-[#bdc1c6] leading-relaxed">
              <p>• <strong className="text-slate-900 dark:text-[#f1f3f4]">PM Case Studies:</strong> Pathao Cash-Out Redesign (Fintech/Mobility UX), bKash Merchant Onboarding, Google Maps Parking Finder.</p>
              <p>• <strong className="text-slate-900 dark:text-[#f1f3f4]">Shipped Products:</strong> STPay (Fintech) · TingTong (Social) · Shobar Dhaka (Local Marketplace) · Robi Alpha · Ullomart (E-Commerce).</p>
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="space-y-1">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-[#f1f3f4] border-b border-slate-200 dark:border-[#2d2f34] pb-1">
              Education & Credentials
            </h2>
            <div className="space-y-1 text-xs sm:text-[13px] text-slate-700 dark:text-[#bdc1c6] leading-relaxed">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <div>
                  <strong className="font-bold text-slate-900 dark:text-[#f1f3f4]">B.Sc. in Computer Science & Engineering</strong> — <span className="dark:text-[#bdc1c6]">City University, Dhaka</span>
                </div>
                <div className="text-xs text-slate-600 dark:text-[#9aa0a6] font-medium">
                  2015 – 2019 | Dhaka, BD
                </div>
              </div>
              <div>
                <strong className="font-semibold text-slate-900 dark:text-[#f1f3f4]">Certification: </strong>
                <span>Product Management — Human Development Network Bangladesh (HDNB Batch 1B8)</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-[#9aa0a6]">
                Honors: 2019 National Scholar, ICT Ministry Bangladesh — Selected for national scholarship, built interactive Swift prototype with SpriteKit.
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer (hidden during print) */}
        <div className="no-print bg-slate-50 dark:bg-[#141518] px-4 sm:px-6 py-3.5 border-t border-slate-200 dark:border-[#2d2f34] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-[#9aa0a6] text-center sm:text-left flex-wrap">
            <span>Executive Resume • Live Portfolio at</span>
            <a
              href={PERSONAL_INFO.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a73e8] dark:text-[#8ab4f8] font-semibold hover:underline inline-flex items-center gap-1"
            >
              <span>omarfaruqme.vercel.app</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={PERSONAL_INFO.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-[#25272c] border border-slate-300 dark:border-[#35383f] text-slate-700 dark:text-[#e8eaed] hover:bg-slate-100 dark:hover:bg-[#2f3238] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#1a73e8] dark:text-[#8ab4f8]" />
              <span>Visit omarfaruqme.vercel.app</span>
            </a>
            <button
              onClick={handleSavePdf}
              disabled={isGeneratingPdf}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#1a73e8] hover:bg-[#1557b0] text-white transition-colors cursor-pointer shadow-xs disabled:opacity-75"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{pdfSuccess ? "Downloaded!" : "Download Resume"}</span>
            </button>
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-200 dark:bg-[#2d3037] text-slate-800 dark:text-[#f1f3f4] hover:bg-slate-300 dark:hover:bg-[#393d46] transition-colors cursor-pointer"
            >
              Close Viewer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
