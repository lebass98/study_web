import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { sidebarCategories } from '../data/navigationData';
import { triggerHaptic } from '../utils/appleHaptics';

export default function Sidebar({ 
  currentPath, 
  activeSection = 'overview', 
  onSelectRoute, 
  isMobileOpen, 
  onCloseMobile 
}) {
  const [openCategoryIds, setOpenCategoryIds] = useState(
    sidebarCategories.map(cat => cat.id)
  );

  const toggleCategory = (catId) => {
    triggerHaptic('light');
    setOpenCategoryIds(prev => 
      prev.includes(catId) ? prev.filter(id => id !== catId) : [...prev, catId]
    );
  };

  // Synchronized active state calculation between sidebar item & content section
  const checkIsItemActive = (item) => {
    if (item.path.includes('#')) {
      const [itemBase, itemAnchor] = item.path.split('#');
      const targetBase = itemBase || '/';
      return (currentPath === targetBase) && (activeSection === itemAnchor);
    }
    
    // Page Main Item (without hash)
    if (item.isMain) {
      return (currentPath === item.path) && (!activeSection || activeSection === 'overview');
    }

    return currentPath === item.path;
  };

  // Format category titles to extract category step numbers
  const formatCategoryHeader = (rawTitle, index) => {
    // E.g. "1. 웹 기획 & PM (Planning)" -> Step "01", Title "웹 기획 & PM"
    const stepNum = String(index).padStart(2, '0');
    const cleanTitle = rawTitle.replace(/^[0-9]+\.\s*/, '');
    return { stepNum, cleanTitle };
  };

  // Format sub-item title to separate section number from text
  const formatSubItemTitle = (rawTitle) => {
    const match = rawTitle.match(/^([0-9]+)\.\s*(.*)$/);
    if (match) {
      return { num: match[1], text: match[2] };
    }
    return { num: null, text: rawTitle };
  };

  const content = (
    <div className="flex flex-col h-full py-4 px-3">
      {/* Clean Minimalist Category Section List with Distinct Numbering */}
      <div className="flex-1 overflow-y-auto space-y-2 text-sm sm:text-base">
        {sidebarCategories.map((cat, catIdx) => {
          const isOpen = openCategoryIds.includes(cat.id);
          const hasActiveChild = cat.items.some(item => checkIsItemActive(item));
          const { stepNum, cleanTitle } = formatCategoryHeader(cat.title, catIdx);

          return (
            <div key={cat.id} className="space-y-1">
              {/* Category Header (대메뉴) Pill Button with Distinct Step Badge */}
              <button
                onClick={() => toggleCategory(cat.id)}
                className={`w-full flex items-center justify-between py-2.5 px-3 rounded-2xl font-bold text-sm sm:text-base transition-all duration-200 text-left cursor-pointer apple-btn ${
                  hasActiveChild
                    ? 'bg-[#e0f2fe] dark:bg-sky-950/80 text-sky-800 dark:text-sky-200 shadow-2xs'
                    : 'text-slate-900 dark:text-slate-100 hover:bg-slate-100/80 dark:hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {/* Distinct Large Category Badge (STEP 00, 01, 02...) */}
                  <span className={`px-2 py-0.5 rounded-lg text-xs font-mono font-extrabold tracking-wider shrink-0 ${
                    hasActiveChild
                      ? 'bg-sky-600 text-white shadow-2xs'
                      : 'bg-slate-200/80 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}>
                    {stepNum}
                  </span>
                  <span className="font-extrabold tracking-tight truncate">{cleanTitle}</span>
                </div>

                {/* Right Arrow Chevron */}
                <span className={`transition-transform duration-200 shrink-0 ml-1 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
                  <ChevronRight className={`w-4 h-4 ${hasActiveChild ? 'text-sky-600 dark:text-sky-400' : 'text-slate-400'}`} />
                </span>
              </button>

              {/* Sub-item (소메뉴) Accordion List with Differentiated Styling */}
              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100 my-1' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden space-y-1 pl-3 pr-1 border-l-2 border-slate-100 dark:border-slate-800/60 ml-4">
                  {cat.items.map((item) => {
                    const isActive = checkIsItemActive(item);
                    const { num, text } = formatSubItemTitle(item.title);

                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          triggerHaptic('light');
                          onSelectRoute(item.path);
                          if (onCloseMobile) onCloseMobile();
                        }}
                        className={`w-full text-left py-2 px-3 rounded-xl font-medium text-sm transition-all duration-150 flex items-center gap-2 cursor-pointer apple-btn ${
                          isActive
                            ? 'font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40 shadow-2xs'
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100/60 dark:hover:bg-white/5'
                        }`}
                      >
                        {/* Distinct Sub-item Number Badge (e.g. 1., 2., 3.) */}
                        {num ? (
                          <span className={`text-xs font-mono font-semibold shrink-0 w-5 text-center rounded px-1 ${
                            isActive
                              ? 'bg-sky-500/20 text-sky-600 dark:text-sky-300'
                              : 'text-slate-400 dark:text-slate-500'
                          }`}>
                            {num}.
                          </span>
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 shrink-0 ml-1 mr-1" />
                        )}

                        <span className="truncate">{text}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
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
