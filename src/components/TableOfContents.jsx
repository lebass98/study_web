import React, { useState, useEffect } from 'react';
import { ThumbsUp, ThumbsDown, CheckCircle2, ChevronRight, Github } from 'lucide-react';

export default function TableOfContents({ items = [], activeSection = 'overview' }) {
  const [feedbackGiven, setFeedbackGiven] = useState(false);

  const handleFeedback = (type) => {
    setFeedbackGiven(true);
    setTimeout(() => setFeedbackGiven(false), 4000);
  };

  return (
    <aside className="w-64 shrink-0 hidden xl:block sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2 py-4 pl-4 text-xs font-sans">
      <div className="space-y-6">
        <div>
          <h4 className="font-bold tracking-wider uppercase text-[11px] text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
            이 페이지 목차
          </h4>
          <nav className="space-y-1 relative border-l border-slate-200 dark:border-slate-800 ml-1">
            {items.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block py-1.5 pl-4 -ml-px border-l-2 text-xs transition-all duration-150 ${
                    isActive
                      ? 'border-cyan-500 text-cyan-600 dark:text-cyan-400 font-semibold bg-cyan-500/5 dark:bg-cyan-500/10 rounded-r'
                      : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  {item.title}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Feedback Card */}
        <div className="p-3.5 rounded-xl border border-slate-200 dark:border-[#343a46] bg-slate-50/70 dark:bg-[#1c1d22]">
          <p className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
            이 문서가 도움이 되었나요?
          </p>
          {!feedbackGiven ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleFeedback('yes')}
                className="flex-1 py-1.5 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 flex items-center justify-center gap-1 transition-all"
              >
                <ThumbsUp className="w-3.5 h-3.5" /> 예
              </button>
              <button
                onClick={() => handleFeedback('no')}
                className="flex-1 py-1.5 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-rose-500 hover:text-rose-600 dark:hover:text-rose-400 flex items-center justify-center gap-1 transition-all"
              >
                <ThumbsDown className="w-3.5 h-3.5" /> 아니오
              </button>
            </div>
          ) : (
            <div className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 text-xs py-1">
              <CheckCircle2 className="w-4 h-4" /> 소중한 피드백 감사합니다!
            </div>
          )}
        </div>

        {/* Links */}
        <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-2 text-slate-500 dark:text-slate-400">
          <a
            href="https://github.com/facebook/react"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub에서 이 페이지 수정하기</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
