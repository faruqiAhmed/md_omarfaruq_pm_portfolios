import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Navigation, 
  MapPin, 
  Star, 
  AlertCircle, 
  Flag, 
  ThumbsUp, 
  Car, 
  ShieldCheck, 
  Clock, 
  Share2, 
  Bookmark, 
  Phone, 
  Compass, 
  Search,
  Check,
  ExternalLink,
  SlidersHorizontal
} from 'lucide-react';

export const GoogleMapsWireframe: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'reviews' | 'parking' | 'report'>('reviews');
  const [verifiedFilterOnly, setVerifiedFilterOnly] = useState(true);
  const [selectedIssue, setSelectedIssue] = useState<string>('Permanently Closed');
  const [reportSubmitted, setReportSubmitted] = useState(false);
  const [reportNotes, setReportNotes] = useState('');
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLikedReviews(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReportSubmitted(true);
  };

  const reviewsList = [
    {
      id: 'rev-1',
      author: 'Marcus Vance',
      avatarBg: 'bg-indigo-500',
      rating: 5,
      date: '2 days ago',
      verified: true,
      visitDate: 'Visited July 2026',
      content: 'Outstanding pour-over coffee and quiet work booths. Confirmed open seating with reliable Wi-Fi. Outdoor patio was shaded nicely.',
      likes: 14
    },
    {
      id: 'rev-2',
      author: 'Ayesha Rahman',
      avatarBg: 'bg-emerald-600',
      rating: 4,
      date: '1 week ago',
      verified: true,
      visitDate: 'Visited July 2026',
      content: 'Pastries were fresh and service was prompt. Street parking was tight, so park at City Center garage 2 mins away.',
      likes: 8
    },
    {
      id: 'rev-3',
      author: 'Anonymous Explorer',
      avatarBg: 'bg-slate-400',
      rating: 1,
      date: '3 weeks ago',
      verified: false,
      visitDate: 'Unverified visit',
      content: 'Bad experience overall, did not like the ambience.',
      likes: 0
    }
  ];

  const displayedReviews = verifiedFilterOnly 
    ? reviewsList.filter(r => r.verified) 
    : reviewsList;

  return (
    <div className="space-y-4">
      {/* Wireframe Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#dadce0] dark:border-[#2d2f34] pb-3">
        <div className="flex items-center gap-1.5 p-1 bg-[#f1f3f4] dark:bg-[#202227] rounded-xl text-xs font-semibold">
          <button
            type="button"
            onClick={() => { setActiveTab('reviews'); setReportSubmitted(false); }}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'reviews'
                ? 'bg-white dark:bg-[#18191c] text-[#1a73e8] dark:text-[#8ab4f8] shadow-xs'
                : 'text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#202124] dark:hover:text-white'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>1. Verified Visit Reviews</span>
          </button>

          <button
            type="button"
            onClick={() => { setActiveTab('parking'); setReportSubmitted(false); }}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'parking'
                ? 'bg-white dark:bg-[#18191c] text-[#1a73e8] dark:text-[#8ab4f8] shadow-xs'
                : 'text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#202124] dark:hover:text-white'
            }`}
          >
            <Car className="w-3.5 h-3.5" />
            <span>2. Smart Parking Card</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('report')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'report'
                ? 'bg-white dark:bg-[#18191c] text-[#1a73e8] dark:text-[#8ab4f8] shadow-xs'
                : 'text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#202124] dark:hover:text-white'
            }`}
          >
            <Flag className="w-3.5 h-3.5" />
            <span>3. One-Tap Quick Report</span>
          </button>
        </div>

        <span className="text-[11px] font-medium text-[#5f6368] dark:text-[#9aa0a6]">
          Interactive UI Mockup (P1 Solutions)
        </span>
      </div>

      {/* Wireframe Stage Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Device Canvas Frame */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-full max-w-[360px] rounded-3xl border-4 border-[#3c4043] dark:border-[#5f6368] bg-[#f8fafd] dark:bg-[#121316] p-4 shadow-xl space-y-3.5 text-xs">
            
            {/* Phone Top Status */}
            <div className="flex justify-between items-center px-1 text-[10px] text-[#5f6368] dark:text-[#9aa0a6] pb-1 border-b border-[#dadce0] dark:border-[#2d2f34]">
              <span className="font-semibold">10:42 AM</span>
              <div className="flex items-center gap-1.5">
                <Navigation className="w-3 h-3 text-[#1a73e8] rotate-45" />
                <span>5G</span>
                <span>98%</span>
              </div>
            </div>

            {/* TAB 1: VERIFIED VISIT REVIEWS */}
            {activeTab === 'reviews' && (
              <div className="space-y-3">
                {/* Place Header Card */}
                <div className="p-3 rounded-2xl bg-white dark:bg-[#1e2025] border border-[#dadce0] dark:border-[#35383f] space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-[#202124] dark:text-[#f1f3f4]">The Coffee House</h4>
                      <p className="text-[11px] text-[#5f6368] dark:text-[#9aa0a6]">Artisan Espresso & Bakery • Downtown</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-bold text-[10px] border border-emerald-200 dark:border-emerald-800">
                      Open Now
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs">
                    <span className="font-extrabold text-[#202124] dark:text-[#f1f3f4]">4.6</span>
                    <div className="flex text-[#fbbc04]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < 4 ? 'fill-[#fbbc04]' : 'fill-amber-200'}`} />
                      ))}
                    </div>
                    <span className="text-[11px] text-[#5f6368] dark:text-[#9aa0a6]">(1,482 reviews)</span>
                  </div>

                  {/* Quick Action Chips */}
                  <div className="flex items-center gap-1.5 pt-1">
                    <button type="button" className="flex-1 py-1.5 rounded-lg bg-[#1a73e8] text-white font-semibold text-[11px] flex items-center justify-center gap-1">
                      <Navigation className="w-3 h-3" />
                      <span>Directions</span>
                    </button>
                    <button type="button" className="p-1.5 rounded-lg bg-white dark:bg-[#202227] border border-[#dadce0] dark:border-[#35383f] text-[#3c4043] dark:text-[#bdc1c6]">
                      <Bookmark className="w-3.5 h-3.5" />
                    </button>
                    <button type="button" className="p-1.5 rounded-lg bg-white dark:bg-[#202227] border border-[#dadce0] dark:border-[#35383f] text-[#3c4043] dark:text-[#bdc1c6]">
                      <Share2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Verified Filter Switch */}
                <div className="p-2.5 rounded-xl bg-[#e8f0fe] dark:bg-[#1e2738] border border-[#d2e3fc] dark:border-[#2a3852] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#1a73e8] dark:text-[#8ab4f8]" />
                    <span className="font-bold text-[11px] text-[#1a73e8] dark:text-[#8ab4f8]">Verified Reviews Only</span>
                  </div>
                  
                  <button
                    type="button"
                    onClick={() => setVerifiedFilterOnly(!verifiedFilterOnly)}
                    className={`w-9 h-5 rounded-full p-0.5 transition-colors cursor-pointer ${
                      verifiedFilterOnly ? 'bg-[#1a73e8]' : 'bg-[#dadce0] dark:bg-[#3c4043]'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      verifiedFilterOnly ? 'translate-x-4' : 'translate-x-0'
                    }`} />
                  </button>
                </div>

                {/* Reviews Stream */}
                <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                  {displayedReviews.map(r => (
                    <div key={r.id} className="p-2.5 rounded-xl bg-white dark:bg-[#1e2025] border border-[#dadce0] dark:border-[#35383f] space-y-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-6 h-6 rounded-full text-white font-bold text-[10px] flex items-center justify-center ${r.avatarBg}`}>
                            {r.author.charAt(0)}
                          </div>
                          <div>
                            <div className="font-bold text-[11px] text-[#202124] dark:text-[#f1f3f4]">{r.author}</div>
                            <div className="text-[9px] text-[#5f6368] dark:text-[#9aa0a6]">{r.date}</div>
                          </div>
                        </div>

                        {r.verified ? (
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-[9px] font-bold border border-emerald-200 dark:border-emerald-800">
                            <CheckCircle2 className="w-2.5 h-2.5" />
                            <span>Verified Visitor</span>
                          </span>
                        ) : (
                          <span className="text-[9px] text-[#5f6368] dark:text-[#9aa0a6]">Unverified</span>
                        )}
                      </div>

                      <div className="flex text-[#fbbc04]">
                        {[...Array(r.rating)].map((_, i) => (
                          <Star key={i} className="w-2.5 h-2.5 fill-[#fbbc04]" />
                        ))}
                      </div>

                      <p className="text-[11px] text-[#3c4043] dark:text-[#bdc1c6] leading-relaxed">
                        {r.content}
                      </p>

                      <div className="flex items-center justify-between pt-1 border-t border-[#f1f3f4] dark:border-[#2d2f34] text-[10px]">
                        <span className="text-[#5f6368] dark:text-[#9aa0a6] font-medium">{r.visitDate}</span>
                        <button
                          type="button"
                          onClick={() => toggleLike(r.id)}
                          className={`flex items-center gap-1 cursor-pointer ${
                            likedReviews[r.id] ? 'text-[#1a73e8] font-bold' : 'text-[#5f6368] dark:text-[#9aa0a6]'
                          }`}
                        >
                          <ThumbsUp className="w-3 h-3" />
                          <span>{r.likes + (likedReviews[r.id] ? 1 : 0)} Helpful</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: SMART PARKING CARD */}
            {activeTab === 'parking' && (
              <div className="space-y-3">
                {/* Active Driving Turn-by-Turn Banner */}
                <div className="p-3 rounded-2xl bg-[#1e2025] text-white space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold flex items-center gap-1.5 text-emerald-400">
                      <Navigation className="w-3.5 h-3.5 rotate-45" />
                      <span>Arriving in 1.2 km</span>
                    </span>
                    <span className="text-slate-400">ETA 10:48 AM</span>
                  </div>
                  <p className="font-bold text-xs text-slate-100">Destination: The Coffee House</p>
                </div>

                {/* Simulated Map Viewport with Parking Pin */}
                <div className="relative h-28 rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 border border-[#dadce0] dark:border-[#35383f] overflow-hidden flex items-center justify-center p-3">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#1a73e8_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-[#1a73e8] text-white flex items-center justify-center shadow-md animate-pulse">
                      <Car className="w-4 h-4" />
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-white dark:bg-[#202227] text-[9px] font-bold shadow-xs mt-1 text-[#202124] dark:text-white">
                      37 Spots Open
                    </span>
                  </div>
                </div>

                {/* Floating Smart Parking Card (P1 Feature) */}
                <div className="p-3 rounded-2xl bg-white dark:bg-[#1e2025] border-2 border-[#1a73e8] dark:border-[#8ab4f8] space-y-2 shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-md bg-[#e8f0fe] dark:bg-[#1e2738] text-[#1a73e8] dark:text-[#8ab4f8] flex items-center justify-center font-bold text-[10px]">
                        P
                      </div>
                      <h4 className="font-bold text-xs text-[#202124] dark:text-[#f1f3f4]">City Center Parking</h4>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold">
                      37 Spaces
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[10px] text-[#5f6368] dark:text-[#9aa0a6] py-1 border-y border-[#f1f3f4] dark:border-[#2d2f34]">
                    <div>
                      Rate: <strong className="text-[#202124] dark:text-[#f1f3f4]">$2.50/hr</strong>
                    </div>
                    <div>
                      Walk: <strong className="text-[#202124] dark:text-[#f1f3f4]">2 min (120m)</strong>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="w-full py-2 rounded-xl bg-[#1a73e8] hover:bg-[#1557b0] text-white font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Navigate to Parking</span>
                  </button>
                </div>

                {/* Alternative Garage */}
                <div className="p-2 rounded-xl bg-white dark:bg-[#1e2025] border border-[#dadce0] dark:border-[#35383f] flex items-center justify-between text-[11px]">
                  <div>
                    <span className="font-semibold text-[#202124] dark:text-[#f1f3f4]">Riverside Garage</span>
                    <div className="text-[9px] text-[#5f6368] dark:text-[#9aa0a6]">$1.75/hr • 5 min walk</div>
                  </div>
                  <span className="text-[10px] font-bold text-[#1a73e8] dark:text-[#8ab4f8]">12 open</span>
                </div>
              </div>
            )}

            {/* TAB 3: ONE-TAP QUICK REPORT */}
            {activeTab === 'report' && (
              <div className="space-y-3">
                <div className="p-3 rounded-2xl bg-white dark:bg-[#1e2025] border border-[#dadce0] dark:border-[#35383f] space-y-2.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#202124] dark:text-[#f1f3f4]">
                    <Flag className="w-3.5 h-3.5 text-[#ea4335]" />
                    <span>Report Problem with Place</span>
                  </div>
                  <p className="text-[11px] text-[#5f6368] dark:text-[#9aa0a6]">
                    Help keep Google Maps accurate for millions of explorers. Select what's wrong:
                  </p>

                  {/* 4 Quick Category Chips */}
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      'Permanently Closed',
                      'Wrong Location',
                      'Wrong Hours',
                      'Duplicate Listing'
                    ].map(issue => (
                      <button
                        key={issue}
                        type="button"
                        onClick={() => setSelectedIssue(issue)}
                        className={`p-2 rounded-lg text-[10px] font-semibold text-left transition-all border cursor-pointer ${
                          selectedIssue === issue
                            ? 'bg-[#e8f0fe] dark:bg-[#1e2738] text-[#1a73e8] dark:text-[#8ab4f8] border-[#1a73e8] dark:border-[#8ab4f8]'
                            : 'bg-[#f8fafd] dark:bg-[#202227] text-[#3c4043] dark:text-[#bdc1c6] border-[#dadce0] dark:border-[#35383f]'
                        }`}
                      >
                        {issue}
                      </button>
                    ))}
                  </div>

                  <input
                    type="text"
                    value={reportNotes}
                    onChange={(e) => setReportNotes(e.target.value)}
                    placeholder="Optional details (e.g. New signage posted)"
                    className="w-full p-2 rounded-lg bg-[#f8fafd] dark:bg-[#202227] border border-[#dadce0] dark:border-[#35383f] text-[10px] text-[#202124] dark:text-white placeholder-[#5f6368] outline-hidden focus:border-[#1a73e8]"
                  />

                  <button
                    type="button"
                    onClick={handleReportSubmit}
                    className="w-full py-2 rounded-xl bg-[#1a73e8] hover:bg-[#1557b0] text-white font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Submit Quick Report</span>
                  </button>
                </div>

                {/* Instant Feedback Status Card */}
                {reportSubmitted ? (
                  <div className="p-3 rounded-2xl bg-[#e6f4ea] dark:bg-[#16271c] border border-[#ceead6] dark:border-[#1d4029] space-y-1 animate-in fade-in">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#137333] dark:text-[#81c995]">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Report Submitted & Queued!</span>
                    </div>
                    <div className="text-[10px] text-[#202124] dark:text-[#e8eaed] space-y-0.5 pt-0.5">
                      <div>Tracking ID: <strong className="font-mono text-[#1a73e8] dark:text-[#8ab4f8]">#GMP-2026-8942</strong></div>
                      <div>Status: <span className="font-semibold text-emerald-700 dark:text-emerald-400">Under Automated Review (24-48h)</span></div>
                    </div>
                  </div>
                ) : (
                  <div className="p-2.5 rounded-xl bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] text-[10px] text-[#5f6368] dark:text-[#9aa0a6] flex items-center justify-between">
                    <span>Average review turnaround: <strong>48 hours</strong></span>
                    <span className="text-[#1a73e8] dark:text-[#8ab4f8] font-semibold">Local Guide +15 pts</span>
                  </div>
                )}
              </div>
            )}

            {/* Phone Bottom Pill */}
            <div className="w-24 h-1 bg-[#3c4043] dark:bg-[#5f6368] rounded-full mx-auto" />
          </div>
        </div>

        {/* Feature Context & Engineering Notes */}
        <div className="lg:col-span-6 space-y-3.5 text-xs">
          <div className="p-4 rounded-xl bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] space-y-2">
            <h4 className="text-sm font-bold text-[#202124] dark:text-[#f1f3f4] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#1a73e8] dark:text-[#8ab4f8]" />
              <span>Feature Architecture & Experience Spec</span>
            </h4>
            
            {activeTab === 'reviews' && (
              <div className="space-y-2 text-[#3c4043] dark:text-[#bdc1c6] leading-relaxed">
                <p>
                  <strong>Verified Visit Reviews (RICE: 144 • Priority 1):</strong> Users who have physically visited a location (confirmed via GPS geofence dwell time &gt; 15 mins) earn a green "Verified Visitor" badge.
                </p>
                <ul className="space-y-1 list-disc list-inside text-[#5f6368] dark:text-[#9aa0a6]">
                  <li>Filters out 78% of unverified/bot review noise.</li>
                  <li>Privacy-first: Uses existing Google Location History opt-in without exposing precise visit timestamps.</li>
                  <li>Increases review helpfulness rating by +30% in user testing.</li>
                </ul>
              </div>
            )}

            {activeTab === 'parking' && (
              <div className="space-y-2 text-[#3c4043] dark:text-[#bdc1c6] leading-relaxed">
                <p>
                  <strong>Smart Parking Card (RICE: 49 • Priority 2):</strong> When drivers are ~1 km from their destination, Google Maps surfaces real-time parking availability, pricing, and walking distance.
                </p>
                <ul className="space-y-1 list-disc list-inside text-[#5f6368] dark:text-[#9aa0a6]">
                  <li>Reduces cruising time by 4.5 minutes per trip in urban centers.</li>
                  <li>Integrates city municipal open data feeds and garage management APIs (Parkopedia/SpotHero).</li>
                  <li>1-tap reroute seamlessly changes navigation waypoint without restarting trip.</li>
                </ul>
              </div>
            )}

            {activeTab === 'report' && (
              <div className="space-y-2 text-[#3c4043] dark:text-[#bdc1c6] leading-relaxed">
                <p>
                  <strong>One-Tap Quick Report (RICE: 112 • Priority 1):</strong> Streamlined 2-step reporting flow replaces cumbersome 5-step nested forms.
                </p>
                <ul className="space-y-1 list-disc list-inside text-[#5f6368] dark:text-[#9aa0a6]">
                  <li>4 common preset categories resolve 85% of map data discrepancies.</li>
                  <li>Generates immediate tracking ticket ID so users can monitor review progress.</li>
                  <li>Cuts reporting time from 45 seconds down to 8 seconds.</li>
                </ul>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-3 rounded-xl bg-white dark:bg-[#18191c] border border-[#dadce0] dark:border-[#2d2f34] space-y-1">
              <span className="font-bold text-[#1a73e8] dark:text-[#8ab4f8] block">Heuristic Alignment</span>
              <p className="text-[11px] text-[#5f6368] dark:text-[#9aa0a6]">
                Directly satisfies Nielsen's #1 (Visibility of System Status) and #5 (Error Prevention).
              </p>
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-[#18191c] border border-[#dadce0] dark:border-[#2d2f34] space-y-1">
              <span className="font-bold text-[#34a853] dark:text-[#81c995] block">Ecosystem Synergy</span>
              <p className="text-[11px] text-[#5f6368] dark:text-[#9aa0a6]">
                Leverages Google Local Guides network and Android GPS telemetry with zero extra sensor cost.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
