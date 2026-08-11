import React from 'react';
import { sidebarCategories } from '../data/navigationData';
import { triggerHaptic } from '../utils/appleHaptics';

export default function Sidebar({ 
  currentPath, 
  onSelectRoute, 
  isMobileOpen, 
  onCloseMobile 
}) {
  // Format category titles to extract category step numbers
  const formatCategoryHeader = (rawTitle, index) => {
    const stepNum = String(index).padStart(2, '0');
    const cleanTitle = rawTitle.replace(/^[0-9]+\.\s*/, '');
    return { stepNum, cleanTitle };
  };

  // Get main navigation route path for each category
  const getCategoryMainPath = (cat) => {
    const mainItem = cat.items.find(item => item.isMain) || cat.items[0];
    if (!mainItem) return '/';
    // Return base page route path without hash anchor
    return mainItem.path.split('#')[0] || '/';
  };

  const content = (
    <div className="flex flex-col h-full py-4 px-3">
      {/* Main Categories Only List (Clean Minimalist Direct Navigation) */}
      <div className="flex-1 overflow-y-auto space-y-2.5 text-sm sm:text-base">
        {sidebarCategories.map((cat, catIdx) => {
          const targetPath = getCategoryMainPath(cat);
          const isCatActive = currentPath === targetPath;
          const { stepNum, cleanTitle } = formatCategoryHeader(cat.title, catIdx);

          return (
            <button
              key={cat.id}
              onClick={() => {
                triggerHaptic('medium');
                onSelectRoute(targetPath);
                if (onCloseMobile) onCloseMobile();
              }}
              className={`w-full flex items-center justify-between py-3 px-3.5 rounded-2xl font-bold text-sm sm:text-base transition-all duration-200 text-left cursor-pointer apple-btn ${
                isCatActive
                  ? 'bg-[#e0f2fe] dark:bg-sky-950/80 text-sky-800 dark:text-sky-200 shadow-2xs'
                  : 'text-slate-900 dark:text-slate-100 hover:bg-slate-100/80 dark:hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                {/* Category Step Badge (00, 01, 02, 03, 04, 05) */}
                <span className={`px-2.5 py-0.5 rounded-lg text-xs font-mono font-extrabold tracking-wider shrink-0 ${
                  isCatActive
                    ? 'bg-sky-600 text-white shadow-2xs'
                    : 'bg-slate-200/80 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}>
                  {stepNum}
                </span>
                <span className="font-extrabold tracking-tight truncate">{cleanTitle}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="w-72 shrink-0 hidden md:block sticky top-16 h-[calc(100vh-4rem)] border-r border-slate-200/80 dark:border-white/10 apple-glass">
        {content}
      </aside>

      {/* Mobile Sidebar Overlay Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={onCloseMobile}
          />
          <aside className="fixed top-16 left-0 bottom-0 w-80 apple-glass border-r border-slate-200/80 dark:border-white/10 shadow-2xl z-50 animate-in slide-in-from-left duration-300">
            {content}
          </aside>
        </div>
      )}
    </>
  );
}
