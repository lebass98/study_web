import React from 'react';

export default function TableOfContents({ items = [], activeSection = 'overview' }) {
  return (
    <aside className="w-64 shrink-0 hidden xl:block sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2 py-4 pl-4 font-sans">
      <div className="space-y-6">
        <div>
          <h4 className="font-bold tracking-wider uppercase text-xs text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-1.5">
            이 페이지 목차
          </h4>
          <nav className="space-y-2.5 relative border-l-2 border-slate-200/80 dark:border-slate-800 ml-1">
            {items.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block py-2.5 pl-4 -ml-[2px] border-l-2 text-sm sm:text-base transition-all duration-200 leading-snug ${
                    isActive
                      ? 'border-cyan-500 text-cyan-600 dark:text-cyan-400 font-bold bg-cyan-500/5 dark:bg-cyan-500/10 rounded-r-xl'
                      : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  {item.title}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
}
