import React, { useState } from 'react';
import { sidebarCategories } from '../data/navigationData';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { triggerHaptic } from '../utils/appleHaptics';

export default function Sidebar({ 
  currentPath, 
  onSelectRoute, 
  isMobileOpen, 
  onCloseMobile 
}) {
  // Track open state for collapsible categories
  const [openCategories, setOpenCategories] = useState(() => {
    // Default open all or open current active category
    const initial = {};
    sidebarCategories.forEach(cat => {
      initial[cat.id] = true;
    });
    return initial;
  });

  const toggleCategory = (catId) => {
    triggerHaptic('light');
    setOpenCategories(prev => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  const getCategoryMainPath = (cat) => {
    const mainItem = cat.items.find(item => item.isMain) || cat.items[0];
    return mainItem ? mainItem.path : '/';
  };

  const content = (
    <div className="flex flex-col h-full py-4 px-3 select-none">
      {/* Category Accordion Navigation List */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-1 text-sm">
        {sidebarCategories.map((cat) => {
          const isOpen = openCategories[cat.id] !== false;
          const catMainPath = getCategoryMainPath(cat).split('#')[0];
          const isCategoryActive = currentPath === catMainPath;

          return (
            <div key={cat.id} className="space-y-1">
              {/* Category Header Label */}
              <button
                onClick={() => toggleCategory(cat.id)}
                className="w-full flex items-center justify-between px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                <span>{cat.title}</span>
                {isOpen ? (
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                ) : (
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                )}
              </button>

              {/* Nested Items under Category */}
              {isOpen && (
                <div className="space-y-0.5">
                  {cat.items.map((item) => {
                    const basePath = item.path.split('#')[0] || '/';
                    const isItemActive = currentPath === basePath && item.isMain;
                    const isAnchorActive = currentPath === basePath;

                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          triggerHaptic('light');
                          onSelectRoute(item.path);
                          if (onCloseMobile) onCloseMobile();
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-150 text-left cursor-pointer ${
                          isItemActive
                            ? 'bg-[#e6f7ff] dark:bg-sky-950/70 text-[#087ea4] dark:text-sky-300 font-bold'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100/80 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
                        }`}
                      >
                        <span className="truncate">{item.title}</span>
                        {item.badge && (
                          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ${
                            isItemActive 
                              ? 'bg-[#087ea4]/15 text-[#087ea4] dark:text-sky-300' 
                              : 'bg-slate-200/70 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="w-72 shrink-0 hidden md:block sticky top-16 h-[calc(100vh-4rem)] border-r border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-[#23272f]/80 backdrop-blur-md">
        {content}
      </aside>

      {/* Mobile Sidebar Overlay Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={onCloseMobile}
          />
          <aside className="fixed top-16 left-0 bottom-0 w-80 bg-white dark:bg-[#23272f] border-r border-slate-200/80 dark:border-white/10 shadow-2xl z-50 animate-in slide-in-from-left duration-300">
            {content}
          </aside>
        </div>
      )}
    </>
  );
}
