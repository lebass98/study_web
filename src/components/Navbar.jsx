import React from 'react';
import { Search, Sun, Moon, Globe, Menu, X } from 'lucide-react';
import { triggerHaptic } from '../utils/appleHaptics';

export default function Navbar({ 
  darkMode, 
  onToggleTheme, 
  onOpenSearch, 
  onToggleMobileSidebar, 
  isMobileSidebarOpen,
  currentPath,
  onSelectRoute
}) {
  const handleLogoClick = () => {
    triggerHaptic('light');
    onSelectRoute('/');
  };

  const handleNavClick = (path) => {
    triggerHaptic('light');
    onSelectRoute(path);
  };

  const handleThemeToggle = () => {
    triggerHaptic('medium');
    onToggleTheme();
  };

  const handleSearchClick = () => {
    triggerHaptic('light');
    onOpenSearch();
  };

  return (
    <header className="sticky top-0 z-30 w-full apple-glass border-b border-slate-200/80 dark:border-white/10 transition-colors duration-200">
      <div className="w-full px-4 sm:px-8 flex items-center justify-between h-16">
        {/* Left: Logo & Brand */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              triggerHaptic('light');
              onToggleMobileSidebar();
            }}
            className="p-2 -ml-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white md:hidden rounded-xl hover:bg-slate-200/50 dark:hover:bg-white/10 apple-btn cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <button 
            onClick={handleLogoClick}
            className="flex items-center gap-2.5 group text-left cursor-pointer apple-btn"
          >
            {/* Apple Style Translucent Globe Badge */}
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 dark:bg-cyan-400/15 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-105 group-hover:bg-cyan-500/20 transition-all duration-200">
              <Globe className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  Web Starter
                </span>
                <span className="text-[11px] px-1.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-semibold border border-cyan-500/20">
                  초보자 가이드
                </span>
              </div>
            </div>
          </button>
        </div>

        {/* Center: Command + K Search Bar (Apple Style Translucent Capsule) */}
        <div className="hidden lg:flex items-center flex-1 max-w-xl mx-8">
          <button
            onClick={handleSearchClick}
            className="w-full flex items-center justify-between px-4 py-2 rounded-xl border border-slate-200/90 dark:border-white/10 bg-slate-100/70 dark:bg-white/5 text-slate-400 hover:border-cyan-500/40 hover:text-slate-700 dark:hover:text-slate-200 apple-btn text-xs cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>웹 기획, 디자인, 퍼블리싱, 개발 개념 검색...</span>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-slate-800/90 text-slate-500 dark:text-slate-400 rounded-md border border-slate-200 dark:border-slate-700/60 shadow-2xs">
                ⌘K
              </kbd>
            </div>
          </button>
        </div>

        {/* Right: Navigation items & Controls */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          {/* Main Top Nav Links */}
          <nav className="hidden sm:flex items-center gap-1 text-xs font-semibold">
            {[
              { title: '학습 개요', path: '/' },
              { title: '웹 기획', path: '/learn/planning' },
              { title: '웹 디자인', path: '/learn/design' },
              { title: '퍼블리싱', path: '/learn/publishing' },
              { title: '웹 개발', path: '/learn/dev' },
              { title: '용어 정리', path: '/learn/glossary' },
              { title: 'PM 아카데미', path: '/learn/pm-academy' },
            ].map((nav) => (
              <button
                key={nav.path}
                onClick={() => handleNavClick(nav.path)}
                className={`px-3 py-2 rounded-xl transition-all duration-200 apple-btn cursor-pointer ${
                  currentPath === nav.path 
                    ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 font-bold' 
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10'
                }`}
              >
                {nav.title}
              </button>
            ))}
          </nav>

          <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block mx-1"></div>

          {/* Search Mobile Button */}
          <button
            onClick={handleSearchClick}
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white lg:hidden rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 apple-btn cursor-pointer"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Dark mode toggle with haptic feedback & rotation transition */}
          <button
            onClick={handleThemeToggle}
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 apple-btn cursor-pointer"
            title={darkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>
        </div>
      </div>
    </header>
  );
}
