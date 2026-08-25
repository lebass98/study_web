import React, { useState, useEffect } from 'react';
import { sidebarCategories } from '../data/navigationData';
import { ChevronRight, ChevronDown, X, Search, Sun, Moon, Github } from 'lucide-react';
import { triggerHaptic } from '../utils/appleHaptics';

export default function Sidebar({ 
  currentPath, 
  onSelectRoute, 
  isMobileOpen, 
  onCloseMobile,
  darkMode,
  onToggleTheme,
  onOpenSearch
}) {
  // Failsafe helper to strip any leading numbers from titles
  const stripNumbers = (text) => {
    if (!text) return '';
    return text.replace(/^[0-9]+\.\s*/, '');
  };

  // Find category ID matching current path
  const findActiveCatId = (path) => {
    const basePath = path.split('#')[0] || '/';
    for (const cat of sidebarCategories) {
      if (cat.items.some(item => (item.path.split('#')[0] || '/') === basePath)) {
        return cat.id;
      }
    }
    return sidebarCategories[0]?.id || 'getting-started';
  };

  // Accordion state: ONLY ONE category can be expanded at a time
  const [openCatId, setOpenCatId] = useState(() => findActiveCatId(currentPath));

  // Sync open category when current path changes
  useEffect(() => {
    const activeCat = findActiveCatId(currentPath);
    setOpenCatId(activeCat);
  }, [currentPath]);

  // Lock body scroll when mobile drawer is open & listen for ESC key
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          triggerHaptic('light');
          if (onCloseMobile) onCloseMobile();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileOpen, onCloseMobile]);

  // Toggle single accordion category
  const handleToggleCategory = (catId, mainPath) => {
    triggerHaptic('medium');
    if (openCatId === catId) {
      setOpenCatId(null);
    } else {
      setOpenCatId(catId);
    }
    if (mainPath) {
      onSelectRoute(mainPath);
      if (onCloseMobile) onCloseMobile();
    }
  };

  const renderCategoryList = (isMobile = false) => (
    <div className="space-y-1.5">
      {sidebarCategories.map((cat) => {
        const isOpen = openCatId === cat.id;
        const mainItem = cat.items.find(item => item.isMain) || cat.items[0];
        const catMainPath = mainItem ? mainItem.path : '/';
        const catBasePath = catMainPath.split('#')[0] || '/';
        const isCategoryActive = (currentPath.split('#')[0] || '/') === catBasePath;

        return (
          <div key={cat.id} className="space-y-1">
            {/* 1차 메뉴 (1st Level Category Item) */}
            <button
              onClick={() => handleToggleCategory(cat.id, catMainPath)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-200 text-left cursor-pointer ${
                isCategoryActive
                  ? 'bg-sky-50 dark:bg-sky-950/80 text-[#087ea4] dark:text-sky-300 font-extrabold border border-sky-100/80 dark:border-sky-900/50'
                  : 'text-slate-900 dark:text-white font-extrabold hover:bg-slate-100/70 dark:hover:bg-white/5'
              }`}
            >
              <span className="text-lg sm:text-xl tracking-tight truncate">
                {stripNumbers(cat.title)}
              </span>
              
              <span className="p-0.5 shrink-0 text-slate-400">
                {isOpen ? (
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isCategoryActive ? 'text-[#087ea4] dark:text-sky-300' : ''}`} />
                ) : (
                  <ChevronRight className="w-5 h-5" />
                )}
              </span>
            </button>

            {/* 2차 메뉴 (2nd Level Sub-items) */}
            <div 
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen 
                  ? 'grid-rows-[1fr] opacity-100 my-1' 
                  : 'grid-rows-[0fr] opacity-0 my-0 pointer-events-none'
              }`}
            >
              <div className="overflow-hidden">
                <div className="space-y-1 ml-4 pl-3.5 border-l-2 border-slate-200/80 dark:border-slate-800">
                  {cat.items.map((item) => {
                    const itemBasePath = item.path.split('#')[0] || '/';
                    const isItemActive = currentPath === item.path || (currentPath === itemBasePath && item.isMain);

                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          triggerHaptic('light');
                          onSelectRoute(item.path);
                          if (isMobile && onCloseMobile) onCloseMobile();
                        }}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-base transition-all duration-150 text-left cursor-pointer ${
                          isItemActive
                            ? 'text-[#087ea4] dark:text-sky-300 font-bold bg-sky-50 dark:bg-sky-950/60'
                            : 'text-slate-600 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-white/5'
                        }`}
                      >
                        <span className="truncate leading-snug">
                          {stripNumbers(item.title)}
                        </span>
                        {item.badge && (
                          <span className={`text-base font-bold px-2 py-0.5 rounded-full shrink-0 ${
                            isItemActive 
                              ? 'bg-sky-100 text-[#087ea4] dark:bg-sky-900 dark:text-sky-300' 
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="w-72 shrink-0 hidden md:block sticky top-16 h-[calc(100vh-4rem)] border-r border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#121316]">
        <div className="flex flex-col h-full py-5 px-3 select-none bg-white dark:bg-[#121316]">
          <div className="flex-1 overflow-y-auto pr-1">
            {renderCategoryList(false)}
          </div>
        </div>
      </aside>

      {/* Mobile Drawer Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-end">
          {/* Semi-transparent Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity animate-fade-in"
            onClick={onCloseMobile}
            aria-hidden="true"
          />

          {/* Slide-in Mobile Menu Panel from Right to Left (우측에서 좌측으로 슬라이드 인) */}
          <aside className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm h-full bg-white dark:bg-[#121316] border-l border-slate-200/80 dark:border-slate-800/80 shadow-2xl z-50 flex flex-col animate-slide-in-right select-none">
            {/* Drawer Header */}
            <div className="px-5 py-4 border-b border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between bg-slate-50/70 dark:bg-[#16181d]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-100 dark:border-sky-900/50 flex items-center justify-center text-[#087ea4] dark:text-[#149eca]">
                  <svg className="w-5 h-5" viewBox="-11.5 -10.23174 23 20.46348">
                    <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
                    <g stroke="currentColor" strokeWidth="1" fill="none">
                      <ellipse rx="11" ry="4.2"/>
                      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-lg text-slate-900 dark:text-white leading-tight">
                    학습 메뉴
                  </span>
                  <span className="text-base text-slate-500 dark:text-slate-400 font-medium">
                    React v19.2 가이드
                  </span>
                </div>
              </div>
              <button
                onClick={() => {
                  triggerHaptic('light');
                  if (onCloseMobile) onCloseMobile();
                }}
                className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
                aria-label="메뉴 닫기"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Quick Search Button Shortcut in Drawer */}
            {onOpenSearch && (
              <div className="p-3 border-b border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-[#121316]">
                <button
                  onClick={() => {
                    triggerHaptic('light');
                    if (onCloseMobile) onCloseMobile();
                    onOpenSearch();
                  }}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-[#f8f9fa] dark:bg-[#1e222b] text-slate-600 dark:text-slate-300 text-base font-medium hover:border-[#087ea4]/40 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Search className="w-4 h-4 text-slate-400" />
                    <span className="text-base font-medium">학습 내용 검색...</span>
                  </div>
                  <span className="text-base text-slate-400 font-mono">⌘K</span>
                </button>
              </div>
            )}

            {/* Main Categories Accordion List */}
            <div className="flex-1 overflow-y-auto py-4 px-3 space-y-2">
              {renderCategoryList(true)}
            </div>

            {/* Drawer Bottom Controls */}
            <div className="p-4 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/70 dark:bg-[#16181d] flex items-center justify-between">
              {onToggleTheme && (
                <button
                  onClick={() => {
                    triggerHaptic('medium');
                    onToggleTheme();
                  }}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
                >
                  {darkMode ? (
                    <>
                      <Sun className="w-5 h-5 text-amber-400" />
                      <span>라이트 모드</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-5 h-5 text-slate-700" />
                      <span>다크 모드</span>
                    </>
                  )}
                </button>
              )}

              <a
                href="https://github.com/facebook/react"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-base font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
