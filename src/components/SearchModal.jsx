import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, BookOpen, Layers, Sparkles } from 'lucide-react';
import { searchIndex } from '../data/navigationData';
import { triggerHaptic } from '../utils/appleHaptics';

export default function SearchModal({ isOpen, onClose, onSelectRoute }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        triggerHaptic('light');
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredResults = searchIndex.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase()) ||
    item.snippet.toLowerCase().includes(query.toLowerCase())
  );

  const handleItemSelect = (path) => {
    triggerHaptic('medium');
    onSelectRoute(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-14 sm:pt-20 px-4 bg-slate-950/60 backdrop-blur-md animate-fade-in select-none">
      {/* Backdrop Click */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Surface */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#181a20] border border-slate-200/90 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 animate-page-entry flex flex-col max-h-[85vh]">
        {/* Search Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02]">
          <Search className="w-5 h-5 text-[#087ea4] dark:text-[#149eca] mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="문서, 가이드, 핵심 개념 검색... (예: 기획, HTML, API, PM, 퀴즈)"
            autoFocus
            className="w-full bg-transparent text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none text-base sm:text-lg font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-200/60 dark:hover:bg-white/10 transition-colors cursor-pointer mr-1"
              title="검색어 지우기"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/10 rounded-lg border border-slate-200 dark:border-white/10 font-mono cursor-pointer hover:bg-slate-200 dark:hover:bg-white/20 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results Sub-header: Count indicator */}
        <div className="px-5 py-2 bg-slate-100/60 dark:bg-white/[0.03] border-b border-slate-200/60 dark:border-white/5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
          <span>{query ? `"${query}" 검색 결과` : '전체 학습 주제'}</span>
          <span>{filteredResults.length}개 항목</span>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-3 space-y-1.5 flex-1">
          {filteredResults.length > 0 ? (
            filteredResults.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleItemSelect(item.path)}
                className="w-full text-left p-3 rounded-2xl hover:bg-sky-50/80 dark:hover:bg-sky-950/40 border border-transparent hover:border-sky-200/60 dark:hover:border-sky-900/40 group transition-all duration-150 flex items-center gap-3.5 cursor-pointer"
              >
                {/* Left Icon Badge */}
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 group-hover:bg-sky-100 dark:group-hover:bg-sky-900/60 flex items-center justify-center shrink-0 transition-colors">
                  <BookOpen className="w-5 h-5 text-slate-500 dark:text-slate-400 group-hover:text-[#087ea4] dark:group-hover:text-sky-300 transition-colors" />
                </div>

                {/* Center Content Column */}
                <div className="flex-1 min-w-0">
                  {/* Top Line: Category Pill + Title */}
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="shrink-0 px-2 py-0.5 rounded-md text-xs font-bold bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/10">
                      {item.category}
                    </span>
                    <span className="font-bold text-base text-slate-900 dark:text-slate-100 group-hover:text-[#087ea4] dark:group-hover:text-sky-300 transition-colors truncate">
                      {item.title}
                    </span>
                  </div>

                  {/* Bottom Line: Description Snippet */}
                  <div className="text-sm text-slate-500 dark:text-slate-400 truncate mt-1">
                    {item.snippet}
                  </div>
                </div>

                {/* Right Arrow Icon */}
                <ArrowRight className="w-5 h-5 text-slate-300 dark:text-slate-600 group-hover:text-[#087ea4] dark:group-hover:text-sky-300 shrink-0 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5" />
              </button>
            ))
          ) : (
            <div className="py-12 px-4 text-center">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center mx-auto mb-3 text-slate-400">
                <Search className="w-6 h-6" />
              </div>
              <div className="text-base font-bold text-slate-700 dark:text-slate-200 mb-1">
                "{query}"에 대한 검색 결과가 없습니다
              </div>
              <div className="text-sm text-slate-400">
                기획, 디자인, 퍼블리싱, 개발, PM, 용어 등 다른 키워드로 검색해 보세요.
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 bg-slate-50/80 dark:bg-[#15171c] border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span className="font-medium">항목을 클릭하면 해당 위치로 즉시 이동합니다</span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-white/10 rounded font-mono text-xs">Enter</kbd> 이동
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-white/10 rounded font-mono text-xs">ESC</kbd> 닫기
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
