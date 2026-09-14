import React, { useState } from 'react';
import { Search, Download, HelpCircle, Check, ArrowRight } from 'lucide-react';

interface Transaction {
  id: string;
  title: string;
  time: string;
  status: string;
  amount: string;
  category: 'ride' | 'food' | 'parcel';
}

const mockTransactions: Transaction[] = [
  { id: '1', title: 'Ride to Gulshan 2', time: '09:15 AM • Completed', status: 'Completed', amount: '৳ 348', category: 'ride' },
  { id: '2', title: 'KFC Banani - Food', time: '01:40 PM • Completed', status: 'Completed', amount: '৳ 520', category: 'food' },
  { id: '3', title: 'Pathao Parcel Drop', time: '05:20 PM • Delivered', status: 'Delivered', amount: '৳ 150', category: 'parcel' },
  { id: '4', title: 'Ride to Dhanmondi 27', time: 'Yesterday • Completed', status: 'Completed', amount: '৳ 280', category: 'ride' },
  { id: '5', title: 'Takeout Burgers', time: '2 days ago • Completed', status: 'Completed', amount: '৳ 410', category: 'food' },
];

export const PathaoWireframe: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ride' | 'food' | 'parcel'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [exported, setExported] = useState(false);
  const [helpClicked, setHelpClicked] = useState(false);

  const filteredTransactions = mockTransactions.filter((tx) => {
    const matchesCategory = activeCategory === 'all' || tx.category === activeCategory;
    const matchesSearch = tx.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleExport = () => {
    setExported(true);
    setTimeout(() => setExported(false), 2000);
  };

  const handleHelp = () => {
    setHelpClicked(true);
    setTimeout(() => setHelpClicked(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
      {/* Wireframe Mockup */}
      <div className="lg:col-span-5 flex justify-center">
        <div className="w-full max-w-[340px] rounded-3xl border-4 border-[#3c4043] dark:border-[#5f6368] bg-[#f8fafd] dark:bg-[#121316] p-4 shadow-xl space-y-3 text-xs select-none">
          {/* Phone Top Notch */}
          <div className="flex justify-between items-center px-1 text-[10px] text-[#5f6368] dark:text-[#9aa0a6] pb-1 border-b border-[#dadce0] dark:border-[#2d2f34]">
            <span className="font-semibold">9:24 PM</span>
            <div className="flex items-center gap-1">
              <span>5G</span>
              <span>100%</span>
            </div>
          </div>

          {/* Header */}
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-sm text-[#202124] dark:text-[#f1f3f4]">Activity</h4>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 font-semibold">
              Smart Center
            </span>
          </div>

          {/* Search Bar */}
          <div className="p-2 rounded-lg bg-white dark:bg-[#1e2025] border border-[#dadce0] dark:border-[#35383f] flex items-center gap-2 text-[#5f6368] dark:text-[#9aa0a6]">
            <Search className="w-3.5 h-3.5 text-[#1a73e8]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search rides, food, parcel..."
              className="w-full bg-transparent text-[11px] text-[#202124] dark:text-[#f1f3f4] focus:outline-none placeholder:text-[#9aa0a6]"
            />
          </div>

          {/* Filter Chips */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 text-[10px] font-semibold">
            {(['all', 'ride', 'food', 'parcel'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-2.5 py-0.5 rounded-full cursor-pointer capitalize transition-all ${
                  activeCategory === cat
                    ? 'bg-[#1a73e8] text-white shadow-2xs'
                    : 'bg-white dark:bg-[#202227] border border-[#dadce0] dark:border-[#35383f] text-[#5f6368] dark:text-[#9aa0a6] hover:text-[#202124] dark:hover:text-white'
                }`}
              >
                {cat === 'all' ? 'All (5)' : cat}
              </button>
            ))}
          </div>

          {/* Transactions Feed */}
          <div className="space-y-1.5 min-h-[140px]">
            <div className="flex justify-between items-center text-[10px] font-bold text-[#5f6368] dark:text-[#9aa0a6] uppercase tracking-wider">
              <span>Recent Records</span>
              <span className="text-[9px] font-normal lowercase">{filteredTransactions.length} showing</span>
            </div>
            
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((tx) => (
                <div key={tx.id} className="p-2 rounded-lg bg-white dark:bg-[#1e2025] border border-[#dadce0] dark:border-[#35383f] flex items-center justify-between transition-colors hover:border-[#1a73e8]/50">
                  <div className="space-y-0.5">
                    <div className="font-bold text-[11px] text-[#202124] dark:text-[#f1f3f4]">{tx.title}</div>
                    <div className="text-[9px] text-[#5f6368] dark:text-[#9aa0a6]">{tx.time}</div>
                  </div>
                  <span className="font-extrabold text-[#1a73e8] dark:text-[#8ab4f8]">{tx.amount}</span>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-xs text-[#5f6368] dark:text-[#9aa0a6]">
                No transactions match "{searchQuery}"
              </div>
            )}
          </div>

          {/* Monthly Spending Summary */}
          <div className="p-2.5 rounded-lg bg-[#e8f0fe] dark:bg-[#1e2738] border border-[#d2e3fc] dark:border-[#2a3852] space-y-1.5">
            <div className="flex justify-between items-center text-[10px] font-bold text-[#1a73e8] dark:text-[#8ab4f8]">
              <span>Monthly Spending</span>
              <span>৳ 5,844</span>
            </div>
            <div className="w-full bg-white dark:bg-[#18191c] h-1.5 rounded-full overflow-hidden flex">
              <div className="bg-blue-500 h-full" style={{ width: '55%' }} title="Ride 55%" />
              <div className="bg-emerald-500 h-full" style={{ width: '20%' }} title="Food 20%" />
              <div className="bg-amber-500 h-full" style={{ width: '25%' }} title="Parcel 25%" />
            </div>
            <div className="flex justify-between text-[9px] text-[#5f6368] dark:text-[#9aa0a6]">
              <span>Ride 55%</span>
              <span>Food 20%</span>
              <span>Parcel 25%</span>
            </div>
          </div>

          {/* Bottom Wireframe Actions */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              type="button"
              onClick={handleExport}
              className="p-1.5 rounded-lg bg-white dark:bg-[#202227] border border-[#dadce0] dark:border-[#35383f] text-[10px] font-semibold text-center text-[#202124] dark:text-[#f1f3f4] flex items-center justify-center gap-1 cursor-pointer hover:bg-slate-50 dark:hover:bg-[#252830]"
            >
              {exported ? (
                <>
                  <Check className="w-3 h-3 text-[#137333]" />
                  <span className="text-[#137333]">PDF Saved</span>
                </>
              ) : (
                <>
                  <Download className="w-3 h-3 text-[#1a73e8]" />
                  <span>Export PDF</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={handleHelp}
              className="p-1.5 rounded-lg bg-white dark:bg-[#202227] border border-[#dadce0] dark:border-[#35383f] text-[10px] font-semibold text-center text-[#202124] dark:text-[#f1f3f4] flex items-center justify-center gap-1 cursor-pointer hover:bg-slate-50 dark:hover:bg-[#252830]"
            >
              {helpClicked ? (
                <>
                  <Check className="w-3 h-3 text-[#34a853]" />
                  <span className="text-[#34a853]">Chat Opened</span>
                </>
              ) : (
                <>
                  <HelpCircle className="w-3 h-3 text-[#34a853]" />
                  <span>Need Help?</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 6-Step Flow Details */}
      <div className="lg:col-span-7 space-y-4">
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#202124] dark:text-[#f1f3f4]">
            6-Step Friction-Free User Journey Flow
          </h4>
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-[#1a73e8] dark:text-[#8ab4f8] border border-blue-200 dark:border-blue-900">
            Interactive Prototype
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-lg bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] space-y-1">
            <span className="font-bold text-[#1a73e8] dark:text-[#8ab4f8]">1. Open App</span>
            <p className="text-[#5f6368] dark:text-[#9aa0a6]">User launches Pathao with prominent persistent Activity tab in bottom nav.</p>
          </div>
          <div className="p-3 rounded-lg bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] space-y-1">
            <span className="font-bold text-[#1a73e8] dark:text-[#8ab4f8]">2. Tap Activity</span>
            <p className="text-[#5f6368] dark:text-[#9aa0a6]">Direct entry point without digging through multi-level account menus.</p>
          </div>
          <div className="p-3 rounded-lg bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] space-y-1">
            <span className="font-bold text-[#1a73e8] dark:text-[#8ab4f8]">3. Search / Filter</span>
            <p className="text-[#5f6368] dark:text-[#9aa0a6]">Fuzzy text query or 1-tap filter chips (Ride, Food, Parcel, Payment).</p>
          </div>
          <div className="p-3 rounded-lg bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] space-y-1">
            <span className="font-bold text-[#1a73e8] dark:text-[#8ab4f8]">4. View Results</span>
            <p className="text-[#5f6368] dark:text-[#9aa0a6]">Instant list view with highlighted matching keywords and date grouping.</p>
          </div>
          <div className="p-3 rounded-lg bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] space-y-1">
            <span className="font-bold text-[#1a73e8] dark:text-[#8ab4f8]">5. Transaction Detail</span>
            <p className="text-[#5f6368] dark:text-[#9aa0a6]">Full itemized breakdown, driver/merchant details, payment mode, and receipt.</p>
          </div>
          <div className="p-3 rounded-lg bg-[#f8fafd] dark:bg-[#1f2025] border border-[#dadce0] dark:border-[#2d2f34] space-y-1">
            <span className="font-bold text-[#1a73e8] dark:text-[#8ab4f8]">6. Quick Action</span>
            <p className="text-[#5f6368] dark:text-[#9aa0a6]">1-tap refund request, support chat, or instant PDF/CSV expense export.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
