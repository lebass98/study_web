import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, BookOpen } from 'lucide-react';
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
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
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
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/60 backdrop-blur-md transition-all duration-200 animate-in fade-in">
      {/* Backdrop Click */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Surface - Apple Glass Material with Spatial Origin Anchoring (#7) */}
      <div className="relative w-full max-w-2xl apple-glass-card border border-slate-200/90 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-200 origin-top">
        {/* Search Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200/80 dark:border-white/10">
          <Search className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="문서, 가이드, API 검색... (예: 기획, HTML, API, UI)"
            autoFocus
            className="w-full bg-transparent text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none text-base sm:text-lg font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 apple-btn cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="ml-2 px-2 py-1 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/10 rounded-lg border border-slate-200 dark:border-white/10 font-mono apple-btn cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-1 apple-scroll-mask">
          {filteredResults.length > 0 ? (
            filteredResults.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleItemSelect(item.path)}
                className="w-full text-left p-3.5 rounded-2xl hover:bg-cyan-500/10 group transition-all duration-150 flex items-start gap-3 apple-btn cursor-pointer"
              >
                <BookOpen className="w-5 h-5 text-slate-400 group-hover:text-cyan-500 mt-0.5 shrink-0 transition-colors" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                    {item.snippet}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-cyan-500 self-center shrink-0 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5" />
              </button>
            ))
          ) : (
            <div className="p-8 text-center text-slate-400 text-sm">
              "{query}" 에 대한 검색 결과가 없습니다.
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-slate-50/50 dark:bg-white/5 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span>선택하려면 항목을 클릭하세요</span>
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-white/10 rounded font-mono text-[10px]">Enter</kbd> 이동
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-white/10 rounded font-mono text-[10px]">ESC</kbd> 닫기
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
