import React from 'react';
import { Info, Lightbulb, AlertTriangle, AlertCircle } from 'lucide-react';

export default function Callout({ type = 'note', title, children }) {
  const configs = {
    note: {
      border: 'border-blue-500/40 dark:border-blue-400/30',
      bg: 'bg-blue-50/70 dark:bg-blue-950/30',
      text: 'text-blue-900 dark:text-blue-100',
      iconColor: 'text-blue-600 dark:text-blue-400',
      Icon: Info,
      defaultTitle: '노트 (Note)',
    },
    tip: {
      border: 'border-emerald-500/40 dark:border-emerald-400/30',
      bg: 'bg-emerald-50/70 dark:bg-emerald-950/30',
      text: 'text-emerald-900 dark:text-emerald-100',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      Icon: Lightbulb,
      defaultTitle: '팁 (Tip)',
    },
    warning: {
      border: 'border-amber-500/40 dark:border-amber-400/30',
      bg: 'bg-amber-50/70 dark:bg-amber-950/30',
      text: 'text-amber-900 dark:text-amber-100',
      iconColor: 'text-amber-600 dark:text-amber-400',
      Icon: AlertTriangle,
      defaultTitle: '주의 (Warning)',
    },
    caution: {
      border: 'border-rose-500/40 dark:border-rose-400/30',
      bg: 'bg-rose-50/70 dark:bg-rose-950/30',
      text: 'text-rose-900 dark:text-rose-100',
      iconColor: 'text-rose-600 dark:text-rose-400',
      Icon: AlertCircle,
      defaultTitle: '경고 (Caution)',
    },
  };

  const config = configs[type] || configs.note;
  const { border, bg, text, iconColor, Icon, defaultTitle } = config;

  return (
    <div className={`my-8 sm:my-10 border-l-4 rounded-r-2xl p-5 sm:p-6 ${border} ${bg} ${text} shadow-sm transition-all duration-200`}>
      <div className="flex items-center gap-2.5 mb-3">
        <Icon className={`w-5 h-5 ${iconColor} shrink-0`} />
        <h4 className="font-semibold text-base sm:text-lg tracking-tight">
          {title || defaultTitle}
        </h4>
      </div>
      <div className="text-sm sm:text-base leading-loose opacity-95 space-y-3">
        {children}
      </div>
    </div>
  );
}
