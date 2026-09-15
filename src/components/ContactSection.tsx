import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { InquiryFormData } from '../types';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin,
  CheckCircle2, 
  Copy, 
  Check, 
  Calendar,
  Clock,
  MessageSquare,
  User,
  Briefcase,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

interface ContactSectionProps {
  onOpenScheduleCall?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenScheduleCall }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    inquiryType: 'Product Management Role (Full-Time)' as any,
    timeline: 'Immediate / Within 2 weeks',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Direct email dispatch to faruqdeveloper@gmail.com
    try {
      await fetch('https://formsubmit.co/ajax/faruqdeveloper@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `[Portfolio Inquiry] ${formData.inquiryType} from ${formData.name}`,
          _replyto: formData.email,
          host: 'faruqdeveloper@gmail.com',
          sender_name: formData.name,
          sender_email: formData.email,
          inquiry_type: formData.inquiryType,
          timeline: formData.timeline,
          message: formData.message,
          timestamp: new Date().toLocaleString()
        })
      });
    } catch (err) {
      console.warn('Inquiry dispatch note:', err);
    }

    try {
      const existing = JSON.parse(localStorage.getItem('pm_portfolio_inquiries') || '[]');
      const newEntry = {
        ...formData,
        id: Date.now().toString(),
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('pm_portfolio_inquiries', JSON.stringify([newEntry, ...existing]));
    } catch (err) {
      console.error('Storage error', err);
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      inquiryType: 'Product Management Role (Full-Time)' as any,
      timeline: 'Immediate / Within 2 weeks',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 bg-[#f8fafd] dark:bg-[#0f1013] border-t border-[#dadce0] dark:border-[#2d2f34] transition-colors duration-200 overflow-hidden">
      
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
      <div className="absolute top-12 right-12 hidden lg:grid grid-cols-5 gap-3.5 opacity-40 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#60a5fa] dark:bg-blue-500/50" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
            <MessageSquare className="w-4 h-4 text-[#1a73e8] dark:text-[#8ab4f8]" />
            <span>DIRECT INQUIRIES & COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] dark:text-[#f3f4f6] tracking-tight">
            Let's Discuss Your Product Roadmap
          </h2>
          <p className="text-sm sm:text-base text-[#4b5563] dark:text-[#9ca3af] leading-relaxed">
            Whether you are recruiting for a senior/lead Product Manager role, seeking technical PM advisory, or looking to walk through case studies, I'd love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          
          {/* Left Column: Direct Contact Details & Availability (approx 5/12 width) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct 1:1 Discussion Card */}
            <div className="p-6 rounded-2xl bg-[#eff6ff] dark:bg-[#132238] border border-[#bfdbfe] dark:border-[#1e3a5f] space-y-4 shadow-xs">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a73e8] dark:text-[#8ab4f8]">
                  <Clock className="w-4 h-4 text-[#1a73e8] dark:text-[#8ab4f8]" />
                  <span>DIRECT 1:1 DISCUSSION</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white dark:bg-[#1a2c47] text-[#1a73e8] dark:text-[#8ab4f8] border border-[#bfdbfe] dark:border-[#2a4369]">
                  <Clock className="w-3 h-3 text-[#1a73e8] dark:text-[#8ab4f8]" />
                  <span>15–30 Mins Free</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#374151] dark:text-[#cbd5e1] leading-relaxed">
                Have an open Senior/Lead PM role, or want a live teardown of Google PRDs & technical trade-offs? Connect directly for a 15–30 min discussion on PM hiring, fintech strategy, or 0→1 execution.
              </p>

              {/* Discussion Topic Pills matching screenshot rows */}
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  'PM Hiring & Leadership',
                  'PRD Specs',
                  'Fintech Strategy',
                  'iOS → PM Transition',
                  '0→1 Product Strategy',
                  'Roadmaps & RICE'
                ].map((tag, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={onOpenScheduleCall}
                    className="text-xs font-medium px-3.5 py-1.5 rounded-full bg-white dark:bg-[#1a1b1f] text-[#1a73e8] dark:text-[#8ab4f8] border border-[#bfdbfe] dark:border-[#2d2f34] hover:border-[#1a73e8] hover:bg-[#eff6ff] dark:hover:bg-[#1e293b] transition-all cursor-pointer shadow-2xs"
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Schedule 1:1 Call Button */}
              <button
                id="contact-schedule-call-btn"
                type="button"
                onClick={onOpenScheduleCall}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-[#1a73e8] hover:bg-[#1557b0] dark:bg-[#1a73e8] dark:hover:bg-[#1765cc] transition-all shadow-sm cursor-pointer active:scale-[0.99]"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule a 1:1 Call</span>
              </button>
            </div>

            {/* Active Availability Card */}
            <div className="p-6 rounded-2xl bg-[#f0fdf4]/50 dark:bg-[#121f1a]/40 border border-[#bbf7d0] dark:border-[#1e3a2f] space-y-4 shadow-xs">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#16a34a] dark:text-[#4ade80] bg-[#dcfce7] dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-[#bbf7d0] dark:border-emerald-800">
                <span className="w-2 h-2 rounded-full bg-[#16a34a] dark:bg-[#4ade80] animate-pulse" />
                <span>ACTIVE AVAILABILITY</span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#111827] dark:text-[#f3f4f6] leading-snug">
                Ready to bring rigorous discovery & engineering empathy to your team.
              </h3>

              <p className="text-xs sm:text-sm text-[#4b5563] dark:text-[#9ca3af] leading-relaxed">
                Available for full-time Product Management and Technical Product Management opportunities. Also open to high-impact product advisory sprints.
              </p>

              {/* Contact Information List */}
              <div className="pt-2 space-y-2.5">
                {/* Email Item */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-[#18191c] border border-[#dadce0] dark:border-[#2d2f34] hover:border-[#1a73e8]/50 transition-colors shadow-2xs">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-[#eff6ff] dark:bg-blue-950/40 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-[#1a73e8] dark:text-[#8ab4f8]" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#6b7280] dark:text-[#9ca3af] block">Direct Email</span>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs sm:text-sm font-semibold text-[#111827] dark:text-[#f3f4f6] hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] transition-colors truncate block">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="p-2 rounded-lg hover:bg-[#f1f3f4] dark:hover:bg-[#25272c] text-[#6b7280] dark:text-[#9ca3af] hover:text-[#111827] dark:hover:text-white transition-colors shrink-0 cursor-pointer"
                    title="Copy email"
                  >
                    {copiedKey === 'email' ? <Check className="w-4 h-4 text-[#16a34a]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-[#18191c] border border-[#dadce0] dark:border-[#2d2f34] hover:border-[#1a73e8]/50 transition-colors shadow-2xs">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-[#eff6ff] dark:bg-blue-950/40 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-[#1a73e8] dark:text-[#8ab4f8]" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#6b7280] dark:text-[#9ca3af] block">Phone / WhatsApp</span>
                      <a href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`} className="text-xs sm:text-sm font-semibold text-[#111827] dark:text-[#f3f4f6] hover:text-[#1a73e8] dark:hover:text-[#8ab4f8] transition-colors truncate block">
                        +880 1642- 031736
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy("+880 1642- 031736", 'phone')}
                    className="p-2 rounded-lg hover:bg-[#f1f3f4] dark:hover:bg-[#25272c] text-[#6b7280] dark:text-[#9ca3af] hover:text-[#111827] dark:hover:text-white transition-colors shrink-0 cursor-pointer"
                    title="Copy phone"
                  >
                    {copiedKey === 'phone' ? <Check className="w-4 h-4 text-[#16a34a]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-[#18191c] border border-[#dadce0] dark:border-[#2d2f34] hover:border-[#1a73e8]/50 transition-colors shadow-2xs">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-[#eff6ff] dark:bg-blue-950/40 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#1a73e8] dark:text-[#8ab4f8]" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#6b7280] dark:text-[#9ca3af] block">Location</span>
                      <span className="text-xs sm:text-sm font-semibold text-[#111827] dark:text-[#f3f4f6] truncate block">
                        Dhaka, Bangladesh (Open to Global Remote)
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy("Dhaka, Bangladesh (Open to Global Remote)", 'location')}
                    className="p-2 rounded-lg hover:bg-[#f1f3f4] dark:hover:bg-[#25272c] text-[#6b7280] dark:text-[#9ca3af] hover:text-[#111827] dark:hover:text-white transition-colors shrink-0 cursor-pointer"
                    title="Copy location"
                  >
                    {copiedKey === 'location' ? <Check className="w-4 h-4 text-[#16a34a]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn Item */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-[#18191c] border border-[#dadce0] dark:border-[#2d2f34] hover:border-[#1a73e8]/50 transition-colors shadow-2xs">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-[#eff6ff] dark:bg-blue-950/40 flex items-center justify-center shrink-0">
                      <Linkedin className="w-4 h-4 text-[#0a66c2] dark:text-[#70b5f9]" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#6b7280] dark:text-[#9ca3af] block">LinkedIn Profile</span>
                      <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-xs sm:text-sm font-semibold text-[#1a73e8] dark:text-[#8ab4f8] hover:underline truncate block">
                        linkedin.com/in/omarfaruqofficial
                      </a>
                    </div>
                  </div>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg hover:bg-[#f1f3f4] dark:hover:bg-[#25272c] text-[#6b7280] dark:text-[#9ca3af] hover:text-[#111827] dark:hover:text-white transition-colors shrink-0"
                    title="Open LinkedIn profile"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* GitHub Item */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-[#18191c] border border-[#dadce0] dark:border-[#2d2f34] hover:border-[#1a73e8]/50 transition-colors shadow-2xs">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-[#eff6ff] dark:bg-blue-950/40 flex items-center justify-center shrink-0">
                      <Github className="w-4 h-4 text-[#111827] dark:text-[#8ab4f8]" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#6b7280] dark:text-[#9ca3af] block">GitHub Profile</span>
                      <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-xs sm:text-sm font-semibold text-[#111827] dark:text-[#f3f4f6] hover:underline truncate block">
                        github.com/faruqiAhmed
                      </a>
                    </div>
                  </div>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg hover:bg-[#f1f3f4] dark:hover:bg-[#25272c] text-[#6b7280] dark:text-[#9ca3af] hover:text-[#111827] dark:hover:text-white transition-colors shrink-0"
                    title="Open GitHub profile"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Large Clean Form Card (approx 7/12 width) */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#18191c] rounded-2xl border border-[#dadce0] dark:border-[#2d2f34] p-6 sm:p-8 shadow-xs">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-200">
                  <div className="w-14 h-14 rounded-full bg-[#dcfce7] dark:bg-emerald-950/50 text-[#16a34a] dark:text-[#4ade80] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111827] dark:text-[#f3f4f6]">
                    Inquiry Transmitted Successfully!
                  </h3>
                  <p className="text-sm text-[#4b5563] dark:text-[#9ca3af] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your message regarding <strong>{formData.inquiryType}</strong> has been logged.
                  </p>
                  <div className="p-3 rounded-xl bg-[#e8f0fe] dark:bg-[#1a2638] border border-[#d2e3fc] dark:border-[#2b3e5c] max-w-md mx-auto text-left flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-[#1a73e8] dark:text-[#8ab4f8] shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <p className="font-semibold text-[#1a73e8] dark:text-[#8ab4f8]">
                        Delivered to: <span className="font-mono">faruqdeveloper@gmail.com</span>
                      </p>
                      <p className="text-[#3c4043] dark:text-[#bdc1c6] text-[11px] mt-0.5">
                        Omar monitors this inbox directly and will reply to <strong>{formData.email}</strong> promptly.
                      </p>
                    </div>
                  </div>
                  <div className="pt-3 flex flex-wrap items-center justify-center gap-2">
                    <a
                      href={`mailto:faruqdeveloper@gmail.com?subject=${encodeURIComponent(`[Portfolio Inquiry] ${formData.inquiryType} - ${formData.name}`)}&body=${encodeURIComponent(`Hi Omar,\n\nName: ${formData.name}\nEmail: ${formData.email}\nInquiry: ${formData.inquiryType}\nTimeline: ${formData.timeline}\n\nMessage:\n${formData.message}`)}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#1a73e8] hover:bg-[#1557b0] transition-colors cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Direct Email Copy</span>
                    </a>
                    {onOpenScheduleCall && (
                      <button
                        type="button"
                        onClick={onOpenScheduleCall}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-[#1a73e8] dark:text-[#8ab4f8] bg-[#e8f0fe] dark:bg-[#1e2738] hover:bg-[#d2e3fc] transition-colors cursor-pointer"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Add Call to Google Calendar</span>
                      </button>
                    )}
                    <button
                      id="reset-contact-form-btn"
                      onClick={resetForm}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#111827] dark:hover:text-white transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Form Header with Blue Chat Icon Avatar */}
                  <div className="flex items-start gap-3.5 pb-2">
                    <div className="w-10 h-10 rounded-xl bg-[#1a73e8] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#111827] dark:text-[#f3f4f6]">
                        Send a Message or Schedule a Discussion
                      </h3>
                      <p className="text-xs sm:text-sm text-[#6b7280] dark:text-[#9ca3af]">
                        Fill out this quick form and I will get back to you promptly.
                      </p>
                    </div>
                  </div>

                  {/* Name and Email with inline icons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Your Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#374151] dark:text-[#bdc1c6]">
                        <User className="w-3.5 h-3.5 text-[#1a73e8] dark:text-[#8ab4f8]" />
                        <span>YOUR NAME *</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9ca3af]">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          placeholder="e.g. Sarah Jenkins"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white dark:bg-[#121316] border border-[#dadce0] dark:border-[#35383f] focus:outline-hidden focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8] text-sm text-[#111827] dark:text-[#f3f4f6] transition-colors placeholder:text-[#9ca3af] dark:placeholder:text-[#5f6368]"
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#374151] dark:text-[#bdc1c6]">
                        <Mail className="w-3.5 h-3.5 text-[#1a73e8] dark:text-[#8ab4f8]" />
                        <span>EMAIL ADDRESS *</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9ca3af]">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          placeholder="e.g. sarah@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white dark:bg-[#121316] border border-[#dadce0] dark:border-[#35383f] focus:outline-hidden focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8] text-sm text-[#111827] dark:text-[#f3f4f6] transition-colors placeholder:text-[#9ca3af] dark:placeholder:text-[#5f6368]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Inquiry Purpose & Timeline Dropdowns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Inquiry Purpose */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-inquiry-type" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#374151] dark:text-[#bdc1c6]">
                        <Briefcase className="w-3.5 h-3.5 text-[#1a73e8] dark:text-[#8ab4f8]" />
                        <span>INQUIRY PURPOSE</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#1a73e8] dark:text-[#8ab4f8]">
                          <Briefcase className="w-4 h-4" />
                        </div>
                        <select
                          id="contact-inquiry-type"
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value as any })}
                          className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-white dark:bg-[#121316] border border-[#dadce0] dark:border-[#35383f] focus:outline-hidden focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8] text-sm text-[#111827] dark:text-[#f3f4f6] transition-colors appearance-none cursor-pointer"
                        >
                          <option value="Product Management Role (Full-Time)">Product Management Role (Full-Time)</option>
                          <option value="Technical PM Advisory">Technical PM Advisory / Consulting</option>
                          <option value="Project Case Study Walkthrough">Case Study Walkthrough / Teardown</option>
                          <option value="General Collaboration">General Collaboration</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#6b7280]">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Hiring Horizon */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-timeline" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#374151] dark:text-[#bdc1c6]">
                        <Calendar className="w-3.5 h-3.5 text-[#1a73e8] dark:text-[#8ab4f8]" />
                        <span>HIRING / PROJECT HORIZON</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#1a73e8] dark:text-[#8ab4f8]">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <select
                          id="contact-timeline"
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-white dark:bg-[#121316] border border-[#dadce0] dark:border-[#35383f] focus:outline-hidden focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8] text-sm text-[#111827] dark:text-[#f3f4f6] transition-colors appearance-none cursor-pointer"
                        >
                          <option value="Immediate / Within 2 weeks">Immediate / Within 2 weeks</option>
                          <option value="Next 30–60 Days">Next 30–60 Days</option>
                          <option value="Future Quarter / Exploratory">Future Quarter / Exploratory</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#6b7280]">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message / Project Details with character counter */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#374151] dark:text-[#bdc1c6]">
                      <MessageSquare className="w-3.5 h-3.5 text-[#1a73e8] dark:text-[#8ab4f8]" />
                      <span>MESSAGE / PROJECT DETAILS *</span>
                    </label>
                    <div className="relative">
                      <textarea
                        id="contact-message"
                        rows={4}
                        required
                        maxLength={1000}
                        placeholder="Share a brief overview of the role, your product challenges, or what you'd like to discuss..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-3.5 pb-7 rounded-xl bg-white dark:bg-[#121316] border border-[#dadce0] dark:border-[#35383f] focus:outline-hidden focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8] text-sm text-[#111827] dark:text-[#f3f4f6] transition-colors placeholder:text-[#9ca3af] dark:placeholder:text-[#5f6368] resize-none"
                      />
                      <div className="absolute bottom-2.5 right-3.5 text-[11px] text-[#9ca3af]">
                        {formData.message.length}/1000
                      </div>
                    </div>
                  </div>

                  {/* Submit Button with -> arrow */}
                  <div className="pt-2">
                    <button
                      id="submit-contact-form-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#1a73e8] hover:bg-[#1557b0] dark:bg-[#1a73e8] dark:hover:bg-[#1765cc] disabled:opacity-60 transition-all shadow-md shadow-blue-500/20 cursor-pointer active:scale-[0.99]"
                    >
                      {isSubmitting ? (
                        <span>Transmitting Inquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Inquiry</span>
                          <span className="text-base leading-none">→</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
