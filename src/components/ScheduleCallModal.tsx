import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Video, 
  MessageCircle, 
  Check, 
  X, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  CalendarCheck,
  ExternalLink,
  Users,
  Briefcase,
  FileText,
  CreditCard,
  Layers,
  Rocket,
  Compass,
  ChevronRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface DiscussionTopicItem {
  id: string;
  title: string;
  description: string;
  badge: string;
}

export const POPULAR_DISCUSSION_TOPICS: DiscussionTopicItem[] = [
  {
    id: 'pm-hiring',
    title: 'PM Hiring & Leadership',
    description: 'Interview preparation, leadership, stakeholder management, and cross-functional alignment.',
    badge: 'Hiring & Culture'
  },
  {
    id: 'google-prd',
    title: 'Google-Style PRD & Product Case Studies',
    description: 'Product requirements, user stories, edge cases, product metrics, and structured product thinking.',
    badge: 'Artifacts & Metrics'
  },
  {
    id: 'fintech-strategy',
    title: 'Fintech Product Strategy',
    description: 'Fintech product development, customer problems, payment experiences, and product-engineering trade-offs.',
    badge: 'Domain Deep Dive'
  },
  {
    id: 'ios-to-pm',
    title: 'iOS Engineer → Product Manager Transition',
    description: 'Career transition, technical PM positioning, and leveraging engineering experience in product management.',
    badge: 'Career Path'
  },
  {
    id: 'zero-to-one',
    title: '0→1 Product Strategy & Execution',
    description: 'From problem discovery and MVP definition to roadmap, launch, and measurable outcomes.',
    badge: '0→1 Discovery'
  },
  {
    id: 'roadmap-prioritization',
    title: 'Product Strategy, Roadmaps & Prioritization',
    description: 'RICE, prioritization frameworks, roadmap planning, experimentation, and product trade-offs.',
    badge: 'Frameworks & RICE'
  }
];

interface ScheduleCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleCallModal: React.FC<ScheduleCallModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'options' | 'schedule-form' | 'confirmed'>('options');
  const [topic, setTopic] = useState('PM Hiring & Leadership');
  const [selectedTopicObj, setSelectedTopicObj] = useState<DiscussionTopicItem>(POPULAR_DISCUSSION_TOPICS[0]);
  const [duration, setDuration] = useState('30 mins');
  const [preferredDate, setPreferredDate] = useState('Tomorrow');
  const [preferredTime, setPreferredTime] = useState('2:00 PM - 2:30 PM (GMT+6 / Flexible)');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userNote, setUserNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  const whatsappPhone = PERSONAL_INFO.phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    `Hi Omar, I saw your Product Management portfolio and would like to connect for a 1:1 call regarding "${topic}".`
  )}`;

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    `1:1 Call with MD Omar Faruq (${topic})`
  )}&details=${encodeURIComponent(
    `1:1 discussion with MD Omar Faruq (Product Manager).\nTopic: ${topic}\nFocus: ${selectedTopicObj.description}\nPortfolio: https://github.com/faruqiAhmed`
  )}&add=${encodeURIComponent(PERSONAL_INFO.email)}`;

  const handleSelectTopic = (t: DiscussionTopicItem) => {
    setSelectedTopicObj(t);
    setTopic(t.title);
    setStep('schedule-form');
  };

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('confirmed');
    }, 600);
  };

  const handleCopyMeetLink = () => {
    navigator.clipboard.writeText('https://meet.google.com/lookup/omar-pm-1on1');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleReset = () => {
    setStep('options');
    setUserName('');
    setUserEmail('');
    setUserNote('');
    onClose();
  };

  return (
    <div
      id="schedule-call-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 dark:bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="schedule-call-modal-content"
        className="relative w-full max-w-xl bg-white dark:bg-[#18191c] rounded-2xl shadow-2xl border border-[#dadce0] dark:border-[#2d2f34] overflow-hidden my-6 text-[#202124] dark:text-[#f1f3f4] transition-colors duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button at top right */}
        <button
          id="close-schedule-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#202124] dark:hover:text-white hover:bg-[#f1f3f4] dark:hover:bg-[#25272c] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* STEP 1: Main High-Converting Prompt (Matching the Video) */}
        {step === 'options' && (
          <div className="p-6 sm:p-8 space-y-6 text-center">
            {/* Top Illustration / Icon Badge */}
            <div className="mx-auto w-16 h-16 rounded-2xl bg-[#e8f0fe] dark:bg-[#1e2738] border border-[#d2e3fc] dark:border-[#2a3852] flex items-center justify-center text-[#1a73e8] dark:text-[#8ab4f8] shadow-xs">
              <Video className="w-8 h-8" />
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Open for 1:1 Discussions</span>
              </span>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202124] dark:text-[#f1f3f4] tracking-tight">
                Not sure if this is for YOU?
              </h2>
              
              <p className="text-sm sm:text-base text-[#5f6368] dark:text-[#bdc1c6] max-w-md mx-auto leading-relaxed">
                Find out by connecting 1:1 with Omar. Walk through product case studies, discuss senior PM roles, or ask away any questions you have.
              </p>
            </div>

            {/* Popular 1:1 Discussion Topics - Clean & Modern */}
            <div className="space-y-2.5 text-left pt-1">
              <div className="flex items-center justify-between px-0.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#5f6368] dark:text-[#9aa0a6] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#1a73e8] dark:text-[#8ab4f8]" />
                  Popular 1:1 Discussion Topics
                </span>
                <span className="text-[11px] text-[#80868b] dark:text-[#9aa0a6]">
                  Select to discuss
                </span>
              </div>

              {/* Clean 6-topic grid without nested boxes or scrollbars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {POPULAR_DISCUSSION_TOPICS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectTopic(item)}
                    className="p-3 rounded-xl bg-[#f8fafd]/80 dark:bg-[#1f2025]/80 hover:bg-[#e8f0fe] dark:hover:bg-[#1e2738] border border-[#dadce0] dark:border-[#2d2f34] hover:border-[#1a73e8] dark:hover:border-[#8ab4f8] text-left transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div className="space-y-1">
                      <div className="flex items-start justify-between gap-1.5">
                        <span className="text-xs font-bold text-[#202124] dark:text-[#f1f3f4] group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] leading-tight">
                          {item.title}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#80868b] dark:text-[#9aa0a6] group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" />
                      </div>
                      <p className="text-[11px] text-[#5f6368] dark:text-[#9aa0a6] leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              {/* Primary: Book a free 1:1 call */}
              <button
                id="modal-book-free-call-btn"
                type="button"
                onClick={() => setStep('schedule-form')}
                className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-[#1a73e8] hover:bg-[#1557b0] dark:bg-[#1a73e8] dark:hover:bg-[#1765cc] transition-all shadow-md hover:shadow-lg cursor-pointer group"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a free 1:1 call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary: Ask on WhatsApp (Matches exact green WhatsApp button in video) */}
              <a
                id="modal-ask-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-emerald-800 dark:text-emerald-300 bg-[#e8f5e9] dark:bg-[#16271c] hover:bg-[#c8e6c9] dark:hover:bg-[#1d4029] border border-[#a5d6a7] dark:border-[#2e7d32] transition-all cursor-pointer shadow-xs"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>

            {/* Trust highlights (Matching the video) */}
            <div className="pt-2 flex items-center justify-center gap-2 text-xs text-[#5f6368] dark:text-[#9aa0a6]">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>15–30 minutes · No sales pitch · Direct & candid conversation</span>
            </div>

            {/* "I'm just browsing" dismiss link (Matching video) */}
            <div>
              <button
                id="modal-just-browsing-btn"
                type="button"
                onClick={onClose}
                className="text-xs font-medium text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#202124] dark:hover:text-white underline transition-colors cursor-pointer"
              >
                I'm just browsing
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Quick Booking Form / Slot Selection */}
        {step === 'schedule-form' && (
          <div className="p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between border-b border-[#dadce0] dark:border-[#2d2f34] pb-4">
              <div>
                <h3 className="text-xl font-bold text-[#202124] dark:text-[#f1f3f4]">
                  Schedule 1:1 Video Call
                </h3>
                <p className="text-xs text-[#5f6368] dark:text-[#9aa0a6]">
                  Select your preference or schedule directly with Google Calendar
                </p>
              </div>
              <button
                type="button"
                onClick={() => setStep('options')}
                className="text-xs font-medium text-[#1a73e8] dark:text-[#8ab4f8] hover:underline cursor-pointer"
              >
                Back
              </button>
            </div>

            <form onSubmit={handleScheduleSubmit} className="space-y-4">
              {/* Discussion Topic */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3c4043] dark:text-[#bdc1c6]">
                  Meeting Objective / Topic
                </label>
                <select
                  value={topic}
                  onChange={(e) => {
                    const newTopic = e.target.value;
                    setTopic(newTopic);
                    const found = POPULAR_DISCUSSION_TOPICS.find(t => t.title === newTopic);
                    if (found) setSelectedTopicObj(found);
                  }}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] text-xs sm:text-sm text-[#202124] dark:text-[#f1f3f4] focus:outline-hidden focus:border-[#1a73e8] dark:focus:border-[#8ab4f8] transition-colors font-medium"
                >
                  {POPULAR_DISCUSSION_TOPICS.map((item) => (
                    <option key={item.id} value={item.title}>
                      {item.title}
                    </option>
                  ))}
                </select>
                {selectedTopicObj && (
                  <p className="text-[11px] text-[#5f6368] dark:text-[#9aa0a6] bg-[#f1f3f4] dark:bg-[#1f2025] px-2.5 py-1.5 rounded-md border border-[#dadce0] dark:border-[#2d2f34]">
                    <strong>Focus:</strong> {selectedTopicObj.description}
                  </p>
                )}
              </div>

              {/* Duration & Preferred Window */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3c4043] dark:text-[#bdc1c6]">
                    Duration
                  </label>
                  <div className="flex rounded-lg border border-[#dadce0] dark:border-[#2d2f34] overflow-hidden p-0.5 bg-[#f8fafd] dark:bg-[#1f2025]">
                    {['15 mins', '30 mins'].map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setDuration(d)}
                        className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                          duration === d
                            ? 'bg-white dark:bg-[#282a30] text-[#1a73e8] dark:text-[#8ab4f8] shadow-2xs'
                            : 'text-[#5f6368] dark:text-[#9aa0a6]'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3c4043] dark:text-[#bdc1c6]">
                    Timeline
                  </label>
                  <select
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] text-xs text-[#202124] dark:text-[#f1f3f4] focus:outline-hidden focus:border-[#1a73e8]"
                  >
                    <option value="Today / ASAP">Today / ASAP</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="This Week">This Week</option>
                    <option value="Next Week">Next Week</option>
                  </select>
                </div>
              </div>

              {/* Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3c4043] dark:text-[#bdc1c6]">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Rivera"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] text-xs sm:text-sm text-[#202124] dark:text-[#f1f3f4] placeholder-[#80868b] focus:outline-hidden focus:border-[#1a73e8] dark:focus:border-[#8ab4f8]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3c4043] dark:text-[#bdc1c6]">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] text-xs sm:text-sm text-[#202124] dark:text-[#f1f3f4] placeholder-[#80868b] focus:outline-hidden focus:border-[#1a73e8] dark:focus:border-[#8ab4f8]"
                  />
                </div>
              </div>

              {/* Optional Note */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#3c4043] dark:text-[#bdc1c6]">
                  Optional Note / Context
                </label>
                <textarea
                  rows={2}
                  placeholder="Share any specific goals or agenda for our 1:1 call..."
                  value={userNote}
                  onChange={(e) => setUserNote(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] text-xs sm:text-sm text-[#202124] dark:text-[#f1f3f4] placeholder-[#80868b] focus:outline-hidden focus:border-[#1a73e8] dark:focus:border-[#8ab4f8]"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  id="confirm-booking-request-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#1a73e8] hover:bg-[#1557b0] dark:bg-[#1a73e8] transition-all cursor-pointer shadow-xs"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>{isSubmitting ? 'Confirming 1:1 Slot...' : `Confirm ${duration} 1:1 Call`}</span>
                </button>

                <a
                  href={googleCalendarUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-[#1a73e8] dark:text-[#8ab4f8] bg-[#e8f0fe] dark:bg-[#1e2738] hover:bg-[#d2e3fc] dark:hover:bg-[#283852] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Or add directly to Google Calendar</span>
                </a>
              </div>
            </form>
          </div>
        )}

        {/* STEP 3: Confirmed State with Meet Link */}
        {step === 'confirmed' && (
          <div className="p-6 sm:p-8 space-y-6 text-center animate-in fade-in duration-200">
            <div className="mx-auto w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-[#202124] dark:text-[#f1f3f4]">
                1:1 Call Scheduled!
              </h3>
              <p className="text-sm text-[#5f6368] dark:text-[#bdc1c6] max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{userName || 'there'}</strong>. A calendar invite for your <strong>{duration}</strong> discussion regarding <strong>{topic}</strong> has been prepared.
              </p>
            </div>

            {/* Meet Link Card */}
            <div className="p-4 rounded-xl bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] space-y-3 text-left">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[#5f6368] dark:text-[#9aa0a6] flex items-center gap-1.5">
                  <Video className="w-4 h-4 text-[#1a73e8] dark:text-[#8ab4f8]" />
                  Google Meet Room:
                </span>
                <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-md">
                  Active
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-[#18191c] border border-[#dadce0] dark:border-[#2d2f34]">
                <code className="text-xs font-mono text-[#1a73e8] dark:text-[#8ab4f8] truncate">
                  meet.google.com/omar-pm-1on1
                </code>
                <button
                  type="button"
                  onClick={handleCopyMeetLink}
                  className="flex items-center gap-1 px-2.5 py-1 rounded text-xs font-semibold bg-[#e8f0fe] dark:bg-[#1e2738] text-[#1a73e8] dark:text-[#8ab4f8] hover:bg-[#d2e3fc] cursor-pointer"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5" /> : null}
                  <span>{copiedLink ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-emerald-800 dark:text-emerald-300 bg-[#e8f5e9] dark:bg-[#16271c] hover:bg-[#c8e6c9] border border-[#a5d6a7] transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Notify via WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:flex-1 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#202124] dark:text-[#f1f3f4] bg-[#f1f3f4] dark:bg-[#25272c] hover:bg-[#e8eaed] transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
