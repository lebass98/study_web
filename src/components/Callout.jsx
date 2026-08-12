import React from 'react';
import { Info, Lightbulb, AlertTriangle, AlertCircle } from 'lucide-react';

export default function Callout({ type = 'note', title, children }) {
  const configs = {
    note: {
      accentColor: 'text-[#087ea4] dark:text-sky-400',
      Icon: Info,
      defaultTitle: '학습 내용 / 참고 사항',
    },
    tip: {
      accentColor: 'text-emerald-600 dark:text-emerald-400',
      Icon: Lightbulb,
      defaultTitle: '핵심 요약 팁',
    },
    warning: {
      accentColor: 'text-amber-600 dark:text-amber-400',
      Icon: AlertTriangle,
      defaultTitle: '주의 사항',
    },
    caution: {
      accentColor: 'text-rose-600 dark:text-rose-400',
      Icon: AlertCircle,
      defaultTitle: '경고',
    },
  };

  const config = configs[type] || configs.note;
  const { accentColor, Icon, defaultTitle } = config;

  return (
    <div className="my-8 sm:my-10 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1e222b] border border-slate-200 dark:border-slate-800 shadow-2xs transition-all duration-200 not-prose">
      <div className="flex items-center gap-3 mb-4">
        <Icon className={`w-6 h-6 ${accentColor} shrink-0`} />
        <h3 className="font-bold text-xl sm:text-2xl tracking-tight text-slate-900 dark:text-white">
          {title || defaultTitle}
        </h3>
      </div>
      <div className="text-base sm:text-lg leading-relaxed text-slate-800 dark:text-slate-200 space-y-3">
        {children}
      </div>
    </div>
  );
}
