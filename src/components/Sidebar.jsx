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
  // Helper to remove any remaining numbers from title string (failsafe)
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
    <div className="flex flex-col h-full py-5 px-3 select-none">
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
              {/* 1차 메뉴 (1st Level Category Item): 크기를 크고 명확하게 */}
              <button
                onClick={() => handleToggleCategory(cat.id, catMainPath)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl transition-all duration-200 text-left cursor-pointer ${
                  isCategoryActive
                    ? 'bg-[#e6f7ff] dark:bg-sky-950/80 text-[#087ea4] dark:text-sky-300 font-extrabold shadow-2xs'
                    : 'text-slate-900 dark:text-slate-100 font-bold hover:bg-slate-100/80 dark:hover:bg-white/5'
                }`}
              >
                <span className="text-base sm:text-[16px] tracking-tight truncate">
                  {stripNumbers(cat.title)}
                </span>
                
                <span className="p-0.5 shrink-0 text-slate-400">
                  {isOpen ? (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCategoryActive ? 'text-[#087ea4] dark:text-sky-300' : ''}`} />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </span>
              </button>

              {/* 2차 메뉴 (2nd Level Sub-items): 펼쳐짐 아코디언 애니메이션 (CSS Grid 1fr -> 0fr) */}
              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen 
                    ? 'grid-rows-[1fr] opacity-100 my-1' 
                    : 'grid-rows-[0fr] opacity-0 my-0 pointer-events-none'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-1 ml-3 pl-3 border-l border-slate-200/80 dark:border-slate-800">
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
                          className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs sm:text-[13px] transition-all duration-150 text-left cursor-pointer ${
                            isItemActive
                              ? 'text-[#087ea4] dark:text-sky-300 font-bold bg-[#087ea4]/10 dark:bg-sky-500/15'
                              : 'text-slate-600 dark:text-slate-400 font-normal hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-white/5'
                          }`}
                        >
                          <span className="truncate leading-tight">
                            {stripNumbers(item.title)}
                          </span>
                          {item.badge && (
                            <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full shrink-0 ${
                              isItemActive 
                                ? 'bg-[#087ea4]/20 text-[#087ea4] dark:text-sky-300' 
                                : 'bg-slate-200/60 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
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
