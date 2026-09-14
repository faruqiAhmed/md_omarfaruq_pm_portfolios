import React, { useState, useEffect } from 'react';
import { FEATURED_ARTICLES } from '../data/portfolioData';
import { Article } from '../types';
import { BookOpen, Clock, ArrowUpRight, X, CheckCircle2, Bookmark, Share2, Check } from 'lucide-react';

export const ArticlesSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedArticle(null);
    };
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedArticle]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <section id="articles" className="py-16 md:py-24 bg-white dark:bg-[#111215] border-t border-slate-200/80 dark:border-[#2d2f34] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-[#8ab4f8]">
            <BookOpen className="w-4 h-4 text-slate-700 dark:text-[#8ab4f8]" />
            <span>Product Leadership & Teardowns</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-[#f1f3f4] tracking-tight">
            Featured Articles & Essays
          </h2>
          <p className="text-base text-slate-600 dark:text-[#9aa0a6]">
            Perspectives on super-app friction, financial inclusion mechanics, and the strategic leverage of engineering depth in product management.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_ARTICLES.map((article) => (
            <div
              key={article.id}
              id={`article-card-${article.id}`}
              className="bg-[#faf9f6] dark:bg-[#18191c] rounded-2xl border border-slate-200/90 dark:border-[#2d2f34] hover:border-slate-300 dark:hover:border-[#4d5156] p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:shadow-xs group"
            >
              <div className="space-y-4">
                
                {/* Meta info */}
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-[#9aa0a6]">
                  <span className="font-semibold text-slate-700 dark:text-[#bdc1c6]">{article.category}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-[#80868b]" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title and Subtitle */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-[#f1f3f4] group-hover:text-slate-700 dark:group-hover:text-white transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-[#9aa0a6] line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                {/* Key takeaway bullet */}
                <div className="p-3 bg-white dark:bg-[#202227] rounded-xl border border-slate-200/70 dark:border-[#35383f] text-xs text-slate-700 dark:text-[#bdc1c6] space-y-1">
                  <span className="font-bold text-slate-500 dark:text-[#8ab4f8] uppercase tracking-wider block text-[10px]">
                    Key Takeaway:
                  </span>
                  <p className="italic">"{article.takeaways[0]}"</p>
                </div>

              </div>

              {/* Read button */}
              <div className="pt-6 mt-6 border-t border-slate-200/70 dark:border-[#2d2f34] flex items-center justify-between">
                <span className="text-xs text-slate-400 dark:text-[#80868b]">{article.publishedDate}</span>
                <button
                  id={`read-article-${article.id}`}
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-[#8ab4f8] hover:text-slate-600 dark:hover:text-[#aecbfa] transition-colors cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Full Article Modal Reader */}
      {selectedArticle && (
        <div
          id="article-reader-modal"
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 dark:bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-white dark:bg-[#18191c] rounded-2xl shadow-2xl border border-slate-200 dark:border-[#2d2f34] overflow-hidden my-6 text-slate-800 dark:text-[#e8eaed]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="sticky top-0 z-20 bg-white/95 dark:bg-[#18191c]/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 dark:border-[#2d2f34] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-[#8ab4f8]">
                  {selectedArticle.category}
                </span>
                <span className="text-slate-300 dark:text-[#35383f]">•</span>
                <span className="text-xs text-slate-500 dark:text-[#9aa0a6] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedArticle.readTime}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-1.5 rounded-lg text-slate-500 dark:text-[#9aa0a6] hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#25272c] transition-colors cursor-pointer"
                  title="Share / Copy Link"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                </button>
                <button
                  id="close-article-modal"
                  onClick={() => setSelectedArticle(null)}
                  className="p-1.5 rounded-lg text-slate-400 dark:text-[#9aa0a6] hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#25272c] transition-colors cursor-pointer"
                  aria-label="Close article reader"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Article Scroll Body */}
            <div className="p-6 sm:p-10 space-y-8 max-h-[82vh] overflow-y-auto">
              
              {/* Header */}
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-[#f1f3f4] tracking-tight leading-tight">
                  {selectedArticle.title}
                </h1>
                <p className="text-base sm:text-lg text-slate-600 dark:text-[#9aa0a6] leading-relaxed">
                  {selectedArticle.subtitle}
                </p>
                <div className="flex items-center gap-3 pt-2 text-xs text-slate-500 dark:text-[#9aa0a6] border-t border-slate-100 dark:border-[#2d2f34]">
                  <span>Published {selectedArticle.publishedDate}</span>
                  <span>•</span>
                  <span>By MD Omar Faruq</span>
                </div>
              </div>

              {/* Key Takeaways Callout */}
              <div className="p-5 rounded-xl bg-slate-50 dark:bg-[#202227] border border-slate-200/90 dark:border-[#35383f] space-y-2.5">
                <span className="text-xs font-bold text-slate-500 dark:text-[#8ab4f8] uppercase tracking-wider block">
                  Core Architectural Takeaways:
                </span>
                <ul className="space-y-1.5 text-sm text-slate-700 dark:text-[#bdc1c6]">
                  {selectedArticle.takeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-900 dark:text-[#8ab4f8] shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sections */}
              <div className="space-y-6 text-slate-800 dark:text-[#bdc1c6] leading-relaxed">
                {selectedArticle.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-2">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-[#f1f3f4] tracking-tight">
                      {sec.heading}
                    </h2>
                    <p className="text-base text-slate-700 dark:text-[#bdc1c6] leading-relaxed">
                      {sec.body}
                    </p>
                  </div>
                ))}
              </div>

            </div>

            {/* Modal Bottom Footer */}
            <div className="bg-slate-50 dark:bg-[#141518] px-6 py-3.5 border-t border-slate-200 dark:border-[#2d2f34] flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-[#9aa0a6]">
                MD Omar Faruq — Product Management
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-slate-900 dark:bg-[#8ab4f8] text-white dark:text-[#202124] hover:bg-slate-800 dark:hover:bg-[#aecbfa] transition-colors cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
