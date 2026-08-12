import React from 'react';

export default function TableOfContents({ items = [], activeSection = 'overview' }) {
  return (
    <aside className="w-64 shrink-0 hidden xl:block sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2 py-4 pl-4 font-sans select-none">
      <div className="space-y-4">
        <div>
          <h4 className="font-extrabold tracking-tight text-xs text-slate-500 dark:text-slate-400 uppercase mb-3">
            이 페이지의 내용
          </h4>
          <nav className="space-y-1">
            {items.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block py-1.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-150 leading-snug ${
                    isActive
                      ? 'bg-[#e6f7ff] dark:bg-sky-950/80 text-[#087ea4] dark:text-sky-300 font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-white/5'
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
