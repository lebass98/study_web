import React, { useState, useEffect } from 'react';
import { sidebarCategories } from '../data/navigationData';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { triggerHaptic } from '../utils/appleHaptics';

export default function Sidebar({ 
  currentPath, 
  onSelectRoute, 
  isMobileOpen, 
  onCloseMobile 
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

  const content = (
    <div className="flex flex-col h-full py-5 px-3 select-none bg-white dark:bg-[#121316]">
      {/* Category List */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-1">
        {sidebarCategories.map((cat) => {
          const isOpen = openCatId === cat.id;
          const mainItem = cat.items.find(item => item.isMain) || cat.items[0];
          const catMainPath = mainItem ? mainItem.path : '/';
          const catBasePath = catMainPath.split('#')[0] || '/';
          const isCategoryActive = (currentPath.split('#')[0] || '/') === catBasePath;

          return (
            <div key={cat.id} className="space-y-1">
              {/* 1차 메뉴 (1st Level Category Item): 크기를 크고 시원하게 (18px ~ 20px) */}
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

              {/* 2차 메뉴 (2nd Level Sub-items): 안쪽 들여쓰기, 1차보다 작은 16px (최소 16px 보장) */}
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
                            if (onCloseMobile) onCloseMobile();
                          }}
                          className={`w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-base transition-all duration-150 text-left cursor-pointer ${
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
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="w-72 shrink-0 hidden md:block sticky top-16 h-[calc(100vh-4rem)] border-r border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#121316]">
        {content}
      </aside>

      {/* Mobile Sidebar Overlay Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={onCloseMobile}
          />
          <aside className="fixed top-16 left-0 bottom-0 w-80 bg-white dark:bg-[#121316] border-r border-slate-200/80 dark:border-slate-800/80 shadow-2xl z-50 animate-in slide-in-from-left duration-300">
            {content}
          </aside>
        </div>
      )}
    </>
  );
}
