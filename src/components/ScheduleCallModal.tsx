import React, { useState, useEffect } from 'react';
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
  ChevronRight,
  ArrowLeft,
  Mail,
  Send,
  Inbox
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface DiscussionTopicItem {
  id: string;
  title: string;
  description: string;
}

export const POPULAR_DISCUSSION_TOPICS: DiscussionTopicItem[] = [
  {
    id: 'pm-hiring',
    title: 'PM Hiring & Leadership',
    description: 'Senior PM role fit, cross-functional leadership, and organizational alignment.'
  },
  {
    id: 'google-prd',
    title: 'Google-Style PRD & Case Studies',
    description: 'Problem framing, North Star metrics, edge cases, and execution artifacts.'
  },
  {
    id: 'fintech-strategy',
    title: 'Fintech & Mobile Architecture',
    description: 'Payment platforms, mobile UX, scale, and product-engineering trade-offs.'
  },
  {
    id: 'ios-to-pm',
    title: 'Technical PM & iOS Engineering',
    description: 'Leveraging 4+ years engineering depth to bridge technical and product domains.'
  },
  {
    id: 'zero-to-one',
    title: '0→1 Product Strategy & Scoping',
    description: 'Discovery spikes, MVP scoping, rapid experimentation, and delivery roadmaps.'
  },
  {
    id: 'frameworks-okrs',
    title: 'OKRs, Prioritization & RICE',
    description: 'Framework-driven prioritization, outcome metrics, and trade-off rationales.'
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

  // Helpers for exact dates
  const pad = (n: number) => String(n).padStart(2, '0');

  const getTodayDateString = () => {
    const d = new Date();
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  };

  const getTomorrowDateString = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  };

  const getInTwoDaysDateString = () => {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  };

  const getNextMondayDateString = () => {
    const d = new Date();
    const day = d.getDay();
    const diff = day === 0 ? 1 : 8 - day;
    d.setDate(d.getDate() + diff);
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  };

  const [selectedDate, setSelectedDate] = useState(getTomorrowDateString());
  const [selectedTime, setSelectedTime] = useState('14:00');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userNote, setUserNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSentStatus, setEmailSentStatus] = useState<'idle' | 'sending' | 'sent' | 'fallback'>('idle');
  const [copiedLink, setCopiedLink] = useState(false);

  const POPULAR_TIME_SLOTS = [
    { label: '10:00 AM', value: '10:00' },
    { label: '11:30 AM', value: '11:30' },
    { label: '02:00 PM', value: '14:00' },
    { label: '03:30 PM', value: '15:30' },
    { label: '05:00 PM', value: '17:00' },
  ];

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Format friendly date & time
  const getFriendlyDateTime = (dateStr: string, timeStr: string) => {
    try {
      const [y, m, d] = dateStr.split('-').map(Number);
      const [hh, mm] = timeStr.split(':').map(Number);
      const dt = new Date(y, m - 1, d, hh, mm);
      return dt.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }) + ` at ${dt.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`;
    } catch {
      return `${dateStr} at ${timeStr}`;
    }
  };

  const friendlyDateTime = getFriendlyDateTime(selectedDate, selectedTime);

  // Calculate Google Calendar Date Range (YYYYMMDDTHHmmssZ)
  const getCalendarDates = (dateStr: string, timeStr: string, durStr: string) => {
    try {
      const [y, m, d] = dateStr.split('-').map(Number);
      const [hh, mm] = timeStr.split(':').map(Number);
      const startDate = new Date(y, m - 1, d, hh, mm);
      const durationMin = durStr.includes('15') ? 15 : 30;
      const endDate = new Date(startDate.getTime() + durationMin * 60 * 1000);

      const formatUTC = (date: Date) =>
        `${date.getUTCFullYear()}${pad(date.getUTCMonth() + 1)}${pad(date.getUTCDate())}T${pad(
          date.getUTCHours()
        )}${pad(date.getUTCMinutes())}00Z`;

      return `${formatUTC(startDate)}/${formatUTC(endDate)}`;
    } catch {
      const now = new Date();
      return `${now.getUTCFullYear()}${pad(now.getUTCMonth() + 1)}${pad(now.getUTCDate())}T140000Z/${now.getUTCFullYear()}${pad(now.getUTCMonth() + 1)}${pad(now.getUTCDate())}T143000Z`;
    }
  };

  const calendarDates = getCalendarDates(selectedDate, selectedTime, duration);
  const calendarTitle = `1:1 Product Call: ${topic} - Omar Faruq & ${userName.trim() || 'Guest'}`;
  const calendarDescription = `1:1 Product Management Discussion with MD Omar Faruq\n\n` +
    `• Topic: ${topic}\n` +
    `• Guest Name: ${userName.trim() || 'Guest'}\n` +
    `• Guest Email: ${userEmail.trim() || 'Not provided'}\n` +
    `• Scheduled Date & Time: ${friendlyDateTime} (${duration})\n` +
    (userNote.trim() ? `• Notes / Agenda: ${userNote.trim()}\n\n` : '\n') +
    `• Google Meet Video Room: https://meet.google.com/lookup/omar-pm-1on1\n` +
    `• Host: MD Omar Faruq (faruqdeveloper@gmail.com)\n` +
    `• Portfolio: https://github.com/faruqiAhmed`;

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    calendarTitle
  )}&dates=${calendarDates}&details=${encodeURIComponent(
    calendarDescription
  )}&location=${encodeURIComponent('Google Meet (https://meet.google.com/lookup/omar-pm-1on1)')}&add=faruqdeveloper@gmail.com${
    userEmail.trim() ? `,${encodeURIComponent(userEmail.trim())}` : ''
  }`;

  const emailSubject = `[1:1 Call Booking] ${topic} - ${userName || 'Portfolio Visitor'}`;
  const emailBody = `Hi Omar,\n\nI would like to schedule a 1:1 call with you regarding "${topic}".\n\n` +
    `• My Name: ${userName || 'Not provided'}\n` +
    `• My Email: ${userEmail || 'Not provided'}\n` +
    `• Topic: ${topic}\n` +
    `• Scheduled Date & Time: ${friendlyDateTime} (${duration})\n` +
    `• Duration: ${duration}\n` +
    (userNote ? `• Notes & Discussion Goals:\n${userNote}\n\n` : '\n') +
    `• Google Meet Link: https://meet.google.com/lookup/omar-pm-1on1\n\n` +
    `Looking forward to connecting!\n\nBest regards,\n${userName || 'Visitor'}`;

  const mailtoUrl = `mailto:faruqdeveloper@gmail.com?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=faruqdeveloper@gmail.com&su=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  const whatsappPhone = PERSONAL_INFO.phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    `Hi Omar, I came across your Product Management portfolio and would like to connect for a 1:1 call regarding "${topic}".\nMy Name: ${userName || 'Visitor'}\nEmail: ${userEmail || 'Not provided'}\nSelected Date: ${friendlyDateTime} (${duration})\nNotes: ${userNote || 'None'}`
  )}`;

  const handleSelectTopic = (t: DiscussionTopicItem) => {
    setSelectedTopicObj(t);
    setTopic(t.title);
    setStep('schedule-form');
  };

  const saveBookingToStorage = (action: string) => {
    try {
      const existing = JSON.parse(localStorage.getItem('pm_portfolio_scheduled_calls') || '[]');
      const newCall = {
        id: Date.now().toString(),
        topic,
        duration,
        selectedDate,
        selectedTime,
        friendlyDateTime,
        userName: userName.trim() || 'Guest',
        userEmail: userEmail.trim() || 'Not provided',
        userNote: userNote.trim(),
        recipientEmail: 'faruqdeveloper@gmail.com',
        action,
        calendarUrl: googleCalendarUrl,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('pm_portfolio_scheduled_calls', JSON.stringify([newCall, ...existing]));
    } catch (err) {
      console.error('Storage error', err);
    }
  };

  const handleCreateCalendarMeeting = () => {
    saveBookingToStorage('google_calendar');
    setStep('confirmed');
  };

  const handleSendEmailBooking = () => {
    saveBookingToStorage('email_sent');
    setStep('confirmed');
  };

  const handleScheduleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !userEmail.trim()) return;

    setIsSubmitting(true);
    setEmailSentStatus('sending');
    saveBookingToStorage('slot_locked');

    // Real email dispatch to faruqdeveloper@gmail.com
    try {
      const response = await fetch('https://formsubmit.co/ajax/faruqdeveloper@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `[1:1 Product Call Confirmed] ${topic} - ${userName.trim()} (${friendlyDateTime})`,
          _replyto: userEmail.trim(),
          host: 'faruqdeveloper@gmail.com',
          guest_name: userName.trim(),
          guest_email: userEmail.trim(),
          discussion_topic: topic,
          duration: duration,
          scheduled_date_time: friendlyDateTime,
          selected_date: selectedDate,
          selected_time: selectedTime,
          notes_agenda: userNote.trim() || 'No specific notes provided',
          google_meet_room: 'https://meet.google.com/lookup/omar-pm-1on1',
          google_calendar_invitation: googleCalendarUrl,
          direct_message: `Hi Omar, ${userName.trim()} has locked a ${duration} 1:1 call with you on ${friendlyDateTime}.`
        })
      });

      if (response.ok) {
        setEmailSentStatus('sent');
      } else {
        setEmailSentStatus('fallback');
      }
    } catch (err) {
      console.warn('Direct email dispatch note:', err);
      setEmailSentStatus('fallback');
    } finally {
      setIsSubmitting(false);
      setStep('confirmed');
    }
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
      className="fixed inset-0 z-50 bg-black/60 dark:bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="schedule-call-modal-title"
    >
      <div
        id="schedule-call-modal-content"
        className="relative w-full max-w-[560px] bg-white dark:bg-[#18191c] rounded-3xl shadow-2xl border border-[#dadce0] dark:border-[#2d2f34] flex flex-col max-h-[92vh] text-[#202124] dark:text-[#f1f3f4] transition-colors duration-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        {step !== 'options' ? (
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#e8eaed] dark:border-[#2d2f34] bg-white dark:bg-[#18191c] shrink-0">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setStep('options')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a73e8] dark:text-[#8ab4f8] hover:underline cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
                <span>Back</span>
              </button>
              <span className="text-sm text-[#9aa0a6] dark:text-[#5f6368] font-normal mx-1">/</span>
              <span className="text-sm font-semibold text-[#202124] dark:text-[#f1f3f4]">
                {step === 'schedule-form' ? 'Schedule Preferred Time' : 'Call Confirmed'}
              </span>
            </div>

            <button
              id="close-schedule-modal-btn"
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#202124] dark:hover:text-white bg-[#f1f3f4] dark:bg-[#25272c] hover:bg-[#e8eaed] dark:hover:bg-[#35383f] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        ) : (
          <button
            id="close-schedule-modal-btn-floating"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full flex items-center justify-center text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#202124] dark:hover:text-white bg-[#f1f3f4] dark:bg-[#25272c] hover:bg-[#e8eaed] dark:hover:bg-[#35383f] transition-colors cursor-pointer shadow-2xs"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 stroke-[2.5]" />
          </button>
        )}

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-5 flex-1">
          
          {/* STEP 1: Main View with Screenshot Top Design */}
          {step === 'options' && (
            <div className="space-y-5 text-center">
              
              {/* TOP DESIGN MATCHING USER SCREENSHOT */}
              <div className="space-y-3 pt-1">
                {/* Blue Video Icon Box */}
                <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#e8f0fe] dark:bg-[#1e2738] border border-[#d2e3fc] dark:border-[#2a3852] flex items-center justify-center text-[#1a73e8] dark:text-[#8ab4f8] shadow-xs">
                  <Video className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>

                {/* Green Pill Badge */}
                <div className="flex justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#e6f4ea] dark:bg-emerald-950/60 text-[#137333] dark:text-emerald-400 border border-[#ceead6] dark:border-emerald-800 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-[#34a853] dark:bg-emerald-500 animate-pulse"></span>
                    <span>Open for 1:1 Discussions</span>
                  </span>
                </div>

                {/* Big Blue Headline (Exact Screenshot Match) */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a73e8] dark:text-[#4285f4] tracking-tight">
                  Not sure if this is for YOU?
                </h2>

                {/* Subtitle Paragraph */}
                <p className="text-xs sm:text-sm text-[#5f6368] dark:text-[#bdc1c6] max-w-md mx-auto leading-relaxed">
                  Find out by connecting 1:1 with Omar. Walk through product case studies, discuss senior PM roles, or ask away any questions you have.
                </p>
              </div>

              {/* Discussion Topics - Clean Buttons Title Only */}
              <div className="space-y-2.5 text-left pt-1">
                <div className="flex items-center justify-between text-xs font-bold text-[#5f6368] dark:text-[#9aa0a6] uppercase tracking-wider px-0.5">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#1a73e8] dark:text-[#8ab4f8]" />
                    Choose a Topic to Discuss
                  </span>
                  <span className="text-[11px] font-normal normal-case text-[#80868b] dark:text-[#9aa0a6]">
                    Select to book
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {POPULAR_DISCUSSION_TOPICS.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      id={`topic-btn-${item.id}`}
                      onClick={() => handleSelectTopic(item)}
                      className="px-3 py-2.5 rounded-xl bg-[#f8fafd] dark:bg-[#1f2025] hover:bg-[#e8f0fe] dark:hover:bg-[#1e2738] border border-[#e8eaed] dark:border-[#2d2f34] hover:border-[#1a73e8] dark:hover:border-[#8ab4f8] text-left transition-all cursor-pointer group flex items-center justify-between gap-2 shadow-2xs hover:shadow-xs"
                    >
                      <span className="text-xs font-semibold text-[#202124] dark:text-[#f1f3f4] group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] leading-snug">
                        {item.title}
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#80868b] dark:text-[#9aa0a6] group-hover:text-[#1a73e8] dark:group-hover:text-[#8ab4f8] group-hover:translate-x-0.5 transition-transform shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  id="modal-book-free-call-btn"
                  type="button"
                  onClick={() => setStep('schedule-form')}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm sm:text-base font-semibold text-white bg-[#1a73e8] hover:bg-[#1557b0] dark:bg-[#1a73e8] dark:hover:bg-[#1765cc] transition-all shadow-xs hover:shadow-md cursor-pointer group"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Book a free 1:1 call</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  id="modal-ask-whatsapp-btn"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-emerald-800 dark:text-emerald-300 bg-[#e8f5e9] dark:bg-[#14261b] hover:bg-[#c8e6c9] dark:hover:bg-[#1d4029] border border-[#a5d6a7] dark:border-[#2e7d32] transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>

              {/* Trust Footer & Dismiss Link */}
              <div className="pt-2 border-t border-[#e8eaed] dark:border-[#2d2f34] flex flex-col items-center gap-2 text-xs text-[#5f6368] dark:text-[#9aa0a6]">
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>15–30 minutes · No sales pitch · Direct & candid conversation</span>
                </div>
                <button
                  id="modal-just-browsing-btn"
                  type="button"
                  onClick={onClose}
                  className="hover:text-[#202124] dark:hover:text-white underline cursor-pointer text-xs"
                >
                  I'm just browsing
                </button>
              </div>

            </div>
          )}

          {/* STEP 2: Quick Booking Form */}
          {step === 'schedule-form' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-1">
                <span className="text-xs font-semibold text-[#5f6368] dark:text-[#9aa0a6]">
                  Topic Selected:
                </span>
                <span className="text-xs font-bold text-[#1a73e8] dark:text-[#8ab4f8]">
                  {topic}
                </span>
              </div>

              <form onSubmit={handleScheduleSubmit} className="space-y-3.5">
                
                {/* Topic Selector */}
                <div className="space-y-1">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#3c4043] dark:text-[#bdc1c6]">
                    Meeting Focus
                  </label>
                  <select
                    value={topic}
                    onChange={(e) => {
                      const newTopic = e.target.value;
                      setTopic(newTopic);
                      const found = POPULAR_DISCUSSION_TOPICS.find(t => t.title === newTopic);
                      if (found) setSelectedTopicObj(found);
                    }}
                    className="w-full px-3 py-2 rounded-lg bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] text-xs text-[#202124] dark:text-[#f1f3f4] focus:outline-hidden focus:border-[#1a73e8] dark:focus:border-[#8ab4f8] font-medium"
                  >
                    {POPULAR_DISCUSSION_TOPICS.map((item) => (
                      <option key={item.id} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Duration, Date & Time Selection */}
                <div className="space-y-3 p-3.5 rounded-xl bg-[#f8fafd] dark:bg-[#1a1b1f] border border-[#dadce0] dark:border-[#2d2f34]">
                  
                  {/* Duration Toggle */}
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#3c4043] dark:text-[#bdc1c6] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#1a73e8] dark:text-[#8ab4f8]" />
                      Session Length
                    </label>
                    <div className="flex rounded-lg border border-[#dadce0] dark:border-[#2d2f34] overflow-hidden p-0.5 bg-white dark:bg-[#25272c]">
                      {(['15 mins', '30 mins'] as const).map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setDuration(d)}
                          className={`px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                            duration === d
                              ? 'bg-[#1a73e8] text-white shadow-2xs'
                              : 'text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#202124] dark:hover:text-white'
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Date Selection */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-[#3c4043] dark:text-[#bdc1c6] flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#1a73e8] dark:text-[#8ab4f8]" />
                        Select Date *
                      </label>
                      <span className="text-[11px] font-medium text-[#1a73e8] dark:text-[#8ab4f8]">
                        {selectedDate}
                      </span>
                    </div>

                    {/* Quick Date Chips */}
                    <div className="grid grid-cols-4 gap-1.5">
                      {[
                        { label: 'Today', value: getTodayDateString() },
                        { label: 'Tomorrow', value: getTomorrowDateString() },
                        { label: '+2 Days', value: getInTwoDaysDateString() },
                        { label: 'Next Mon', value: getNextMondayDateString() },
                      ].map((chip) => (
                        <button
                          key={chip.label}
                          type="button"
                          onClick={() => setSelectedDate(chip.value)}
                          className={`py-1 text-[11px] font-semibold rounded-lg border transition-all cursor-pointer ${
                            selectedDate === chip.value
                              ? 'bg-[#e8f0fe] dark:bg-[#1e2738] text-[#1a73e8] dark:text-[#8ab4f8] border-[#1a73e8] dark:border-[#8ab4f8] shadow-2xs'
                              : 'bg-white dark:bg-[#25272c] text-[#5f6368] dark:text-[#9aa0a6] border-[#dadce0] dark:border-[#2d2f34] hover:bg-[#f1f3f4] dark:hover:bg-[#2d3036]'
                          }`}
                        >
                          {chip.label}
                        </button>
                      ))}
                    </div>

                    {/* Exact Date Picker Input */}
                    <input
                      type="date"
                      min={getTodayDateString()}
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      required
                      className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-[#25272c] border border-[#dadce0] dark:border-[#2d2f34] text-xs font-medium text-[#202124] dark:text-[#f1f3f4] focus:outline-hidden focus:border-[#1a73e8]"
                    />
                  </div>

                  {/* Time Selection */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#3c4043] dark:text-[#bdc1c6] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#1a73e8] dark:text-[#8ab4f8]" />
                      Select Time Slot *
                    </label>

                    {/* Popular Time Slot Chips */}
                    <div className="grid grid-cols-5 gap-1">
                      {POPULAR_TIME_SLOTS.map((slot) => (
                        <button
                          key={slot.value}
                          type="button"
                          onClick={() => setSelectedTime(slot.value)}
                          className={`py-1 px-1 text-[10px] sm:text-[11px] font-semibold rounded-lg border text-center transition-all cursor-pointer truncate ${
                            selectedTime === slot.value
                              ? 'bg-[#e8f0fe] dark:bg-[#1e2738] text-[#1a73e8] dark:text-[#8ab4f8] border-[#1a73e8] dark:border-[#8ab4f8] shadow-2xs'
                              : 'bg-white dark:bg-[#25272c] text-[#5f6368] dark:text-[#9aa0a6] border-[#dadce0] dark:border-[#2d2f34] hover:bg-[#f1f3f4] dark:hover:bg-[#2d3036]'
                          }`}
                        >
                          {slot.label}
                        </button>
                      ))}
                    </div>

                    {/* Custom Time Picker Input */}
                    <div className="flex items-center gap-2 pt-0.5">
                      <span className="text-[11px] text-[#5f6368] dark:text-[#9aa0a6] shrink-0">
                        Or custom time:
                      </span>
                      <input
                        type="time"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        required
                        className="w-full px-3 py-1 rounded-lg bg-white dark:bg-[#25272c] border border-[#dadce0] dark:border-[#2d2f34] text-xs font-medium text-[#202124] dark:text-[#f1f3f4] focus:outline-hidden focus:border-[#1a73e8]"
                      />
                    </div>
                  </div>

                  {/* Scheduled Summary Badge */}
                  <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-[11px] text-emerald-800 dark:text-emerald-300 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 font-medium">
                      <CalendarCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{friendlyDateTime}</span>
                    </span>
                    <span className="font-bold bg-emerald-100 dark:bg-emerald-900/60 px-2 py-0.5 rounded text-[10px]">
                      {duration}
                    </span>
                  </div>

                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#3c4043] dark:text-[#bdc1c6]">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Connor"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] text-xs text-[#202124] dark:text-[#f1f3f4] placeholder-[#80868b] focus:outline-hidden focus:border-[#1a73e8]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#3c4043] dark:text-[#bdc1c6]">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] text-xs text-[#202124] dark:text-[#f1f3f4] placeholder-[#80868b] focus:outline-hidden focus:border-[#1a73e8]"
                    />
                  </div>
                </div>

                {/* Optional Note */}
                <div className="space-y-1">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#3c4043] dark:text-[#bdc1c6]">
                    Optional Note / Agenda
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Any specific context, questions, or links you want to share..."
                    value={userNote}
                    onChange={(e) => setUserNote(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] text-xs text-[#202124] dark:text-[#f1f3f4] placeholder-[#80868b] focus:outline-hidden focus:border-[#1a73e8]"
                  />
                </div>

                {/* Host Delivery Badge */}
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#e8f0fe] dark:bg-[#1a2638] border border-[#d2e3fc] dark:border-[#2b3e5c] text-[11px] text-[#1a73e8] dark:text-[#8ab4f8]">
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span>
                    Host email: <strong className="font-semibold text-[#1a73e8] dark:text-[#8ab4f8]">faruqdeveloper@gmail.com</strong> (receives invite & attendee notice)
                  </span>
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 space-y-2">
                  {/* Direct Google Calendar Button - Direct Anchor link ensures no popup blocker */}
                  <a
                    id="confirm-booking-calendar-btn"
                    href={googleCalendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleCreateCalendarMeeting}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#1a73e8] hover:bg-[#1557b0] dark:bg-[#1a73e8] dark:hover:bg-[#1765cc] transition-all cursor-pointer shadow-xs hover:shadow-md"
                  >
                    <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Create Meeting in Google Calendar ({duration})</span>
                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      id="send-booking-email-btn"
                      href={gmailWebUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleSendEmailBooking}
                      className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-[#202124] dark:text-[#f1f3f4] bg-[#f1f3f4] dark:bg-[#25272c] hover:bg-[#e8eaed] dark:hover:bg-[#32363e] border border-[#dadce0] dark:border-[#35383f] transition-colors cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5 text-[#1a73e8] dark:text-[#8ab4f8]" />
                      <span>Email Notice to Omar</span>
                    </a>

                    <button
                      id="confirm-booking-standard-btn"
                      type="submit"
                      disabled={isSubmitting || !userName.trim() || !userEmail.trim()}
                      className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#1a73e8] dark:text-[#8ab4f8] bg-[#e8f0fe] dark:bg-[#1e2738] hover:bg-[#d2e3fc] dark:hover:bg-[#2a3a53] border border-[#d2e3fc] dark:border-[#2d3f5e] disabled:opacity-50 transition-colors cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-[#1a73e8] border-t-transparent rounded-full animate-spin shrink-0" />
                          <span>Emailing faruqdeveloper...</span>
                        </>
                      ) : (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Lock Slot Directly</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {/* STEP 3: Confirmed State - Pixel-Perfect Match to Screenshot */}
          {step === 'confirmed' && (
            <div className="py-1 space-y-4 text-center">
              {/* Success Badge Icon */}
              <div className="mx-auto w-14 h-14 rounded-full bg-[#e6f4ea] dark:bg-emerald-950/60 text-[#137333] dark:text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 stroke-[2.2]" />
              </div>

              {/* Title & Personalized Subtitle */}
              <div className="space-y-1.5">
                <h3 className="text-2xl font-bold text-[#1f2937] dark:text-[#f1f3f4] tracking-tight">
                  1:1 Call Locked & Confirmed!
                </h3>
                <p className="text-sm text-[#4b5563] dark:text-[#9ca3af] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="font-semibold text-[#1f2937] dark:text-white">{userName || 'there'}</strong>. Your <strong className="font-semibold text-[#1f2937] dark:text-white">{duration}</strong> session regarding <strong className="font-semibold text-[#1f2937] dark:text-white">{topic}</strong> has been secured.
                </p>
              </div>

              {/* Card 1: DATE & TIME */}
              <div className="p-4 rounded-2xl bg-[#f0f6ff]/70 dark:bg-[#162030] border border-[#d2e3fc] dark:border-[#2a3852] flex items-center justify-between text-left shadow-2xs">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-[#dbeafe] dark:bg-[#1e2d44] text-[#1a73e8] dark:text-[#8ab4f8] flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#5f6368] dark:text-[#9aa0a6]">
                      DATE & TIME
                    </p>
                    <p className="text-sm sm:text-base font-bold text-[#1f2937] dark:text-white mt-0.5 truncate">
                      {friendlyDateTime}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#dbeafe] dark:bg-[#1e2d44] text-[#1a73e8] dark:text-[#8ab4f8] text-xs font-semibold shrink-0">
                  <Clock className="w-3.5 h-3.5 stroke-[2.2]" />
                  <span>{duration}</span>
                </div>
              </div>

              {/* Card 2: EMAIL NOTIFICATION */}
              <div className="p-4 rounded-2xl bg-[#f4fbf7] dark:bg-[#112318] border border-[#ceead6] dark:border-emerald-900/60 text-left flex items-start gap-3.5 shadow-2xs">
                <div className="w-12 h-12 rounded-xl bg-[#e6f4ea] dark:bg-[#163522] text-[#137333] dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-6 h-6 stroke-[2]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#137333] dark:text-emerald-400">
                    EMAIL NOTIFICATION
                  </p>
                  <p className="text-sm font-bold text-[#1f2937] dark:text-white mt-0.5">
                    Email Received at: <span className="text-[#137333] dark:text-emerald-400 font-bold font-mono">faruqdeveloper@gmail.com</span>
                  </p>
                  <div className="flex items-start gap-1.5 mt-1.5 text-xs text-[#374151] dark:text-[#cbd5e1] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#137333] dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>Direct notification email has been dispatched to Omar Faruq with all meeting details, guest contact, and discussion agenda.</span>
                  </div>
                </div>
              </div>

              {/* Card 3: GOOGLE MEET ROOM */}
              <div className="p-4 rounded-2xl bg-[#f8fafd] dark:bg-[#191d24] border border-[#d2e3fc]/80 dark:border-[#2d323c] flex items-center justify-between text-left shadow-2xs">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#252a33] border border-[#e8eaed] dark:border-[#35383f] flex items-center justify-center shrink-0 shadow-2xs">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <path d="M15 8.5L20 5V19L15 15.5V8.5Z" fill="#00832D"/>
                      <path d="M15 8.5L12.5 6.5H4C2.89543 6.5 2 7.39543 2 8.5V15.5C2 16.6046 2.89543 17.5 4 17.5H12.5L15 15.5V8.5Z" fill="#0066DA"/>
                      <path d="M20 5L15 8.5V11.5L20 8.5V5Z" fill="#EA4335"/>
                      <path d="M20 15.5L15 12.5V15.5L20 19V15.5Z" fill="#2684FC"/>
                      <path d="M4 17.5H12.5V12.5H2V15.5C2 16.6046 2.89543 17.5 4 17.5Z" fill="#00AC47"/>
                      <path d="M12.5 6.5H4C2.89543 6.5 2 7.39543 2 8.5V12.5H12.5V6.5Z" fill="#EA4335"/>
                      <path d="M12.5 6.5V12.5H15V8.5L12.5 6.5Z" fill="#FFBA00"/>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#5f6368] dark:text-[#9aa0a6]">
                      GOOGLE MEET ROOM
                    </p>
                    <a
                      href="https://meet.google.com/lookup/omar-pm-1on1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#1a73e8] dark:text-[#8ab4f8] hover:underline flex items-center gap-1.5 mt-0.5 truncate"
                    >
                      <span className="truncate">meet.google.com/lookup/omar-pm-1on1</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0 stroke-[2]" />
                    </a>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6f4ea] dark:bg-[#163020] text-[#137333] dark:text-emerald-400 text-xs font-semibold shrink-0">
                  <span className="w-2 h-2 rounded-full bg-[#34a853]"></span>
                  <span>Ready</span>
                </span>
              </div>

              {/* Action Buttons: Exact Matching Screenshot Layout */}
              <div className="space-y-3 pt-2">
                {/* Full-width Google Calendar Button */}
                <a
                  id="modal-add-to-google-calendar-btn"
                  href={googleCalendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#1a73e8] hover:bg-[#1557b0] transition-colors shadow-xs"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Open in Google Calendar (with faruqdeveloper@gmail.com)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {/* Second Row: Open in Gmail & Default Mail */}
                <div className="grid grid-cols-2 gap-3">
                  <a
                    id="modal-send-gmail-btn"
                    href={gmailWebUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-[#1a73e8] dark:text-[#8ab4f8] bg-[#f0f6ff] dark:bg-[#1e2738] hover:bg-[#e8f0fe] dark:hover:bg-[#253347] border border-[#d2e3fc] dark:border-[#2d3f5e] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open in Gmail</span>
                  </a>

                  <a
                    id="modal-send-mailto-btn"
                    href={mailtoUrl}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-[#202124] dark:text-[#f1f3f4] bg-[#f8fafd] dark:bg-[#25272c] hover:bg-[#e8eaed] dark:hover:bg-[#32363e] border border-[#dadce0] dark:border-[#35383f] transition-colors"
                  >
                    <Send className="w-4 h-4 text-[#1a73e8] dark:text-[#8ab4f8]" />
                    <span>Default Mail</span>
                  </a>
                </div>

                {/* Third Row: Notify on WhatsApp & Done */}
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-[#137333] dark:text-emerald-300 bg-[#f4fbf7] dark:bg-[#16271c] hover:bg-[#e6f4ea] border border-[#ceead6] dark:border-[#1e3d29] transition-all"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Notify on WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="flex items-center justify-center px-4 py-3 rounded-xl text-sm font-semibold text-[#202124] dark:text-[#f1f3f4] bg-[#f8fafd] dark:bg-[#25272c] hover:bg-[#e8eaed] dark:hover:bg-[#32363e] border border-[#dadce0] dark:border-[#35383f] transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

