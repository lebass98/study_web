import React from 'react';
import { Search, Sun, Moon, Languages, Github, Menu, X } from 'lucide-react';
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

  return (
    <header className="sticky top-0 z-30 w-full bg-white dark:bg-[#121316] border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-200">
      <div className="w-full px-4 sm:px-8 flex items-center justify-between h-16">
        {/* Left: React Logo & Brand */}
        <div className="flex items-center gap-3">
          <button 
            onClick={handleLogoClick}
            className="flex items-center gap-2.5 group text-left cursor-pointer apple-btn"
          >
            {/* React Official Atom Logo Icon */}
            <svg className="w-8 h-8 text-[#087ea4] dark:text-[#149eca] transition-transform duration-300 group-hover:rotate-45" viewBox="-11.5 -10.23174 23 20.46348">
              <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
              <g stroke="currentColor" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2"/>
                <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
              </g>
            </svg>

            <div className="flex items-baseline gap-1.5">
              <span className="font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight">
                React
              </span>
              <span className="text-base font-mono font-medium text-slate-500 dark:text-slate-400">
                v19.2
              </span>
            </div>
          </button>
        </div>

        {/* Center: Search Bar Capsule (Pill Shape) */}
        <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
          <button
            onClick={() => {
              triggerHaptic('light');
              onOpenSearch();
            }}
            className="w-full flex items-center justify-between px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 bg-[#f8f9fa] dark:bg-[#1e222b] text-slate-600 dark:text-slate-300 hover:border-[#087ea4]/40 text-base cursor-pointer transition-all"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-slate-400" />
              <span className="text-base">검색...</span>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="px-2 py-0.5 text-base font-mono bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-md border border-slate-200 dark:border-slate-700">
                ⌘K
              </kbd>
            </div>
          </button>
        </div>

        {/* Right: Navigation items & Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Main Top Nav Links */}
          <nav className="hidden md:flex items-center gap-1.5 text-base font-semibold">
            {[
              { title: '학습하기', path: '/' },
              { title: '웹 기획', path: '/learn/planning' },
              { title: '웹 디자인', path: '/learn/design' },
              { title: '퍼블리싱', path: '/learn/publishing' },
              { title: '웹 개발', path: '/learn/dev' },
              { title: 'PM 아카데미', path: '/learn/pm-academy' },
              { title: '용어 정리', path: '/learn/glossary' },
            ].map((nav) => {
              const isActive = currentPath === nav.path;
              return (
                <button
                  key={nav.path}
                  onClick={() => handleNavClick(nav.path)}
                  className={`px-3.5 py-1.5 rounded-full text-base font-semibold transition-all duration-150 cursor-pointer ${
                    isActive 
                      ? 'bg-sky-50 dark:bg-sky-950/80 text-[#087ea4] dark:text-sky-300 font-bold border border-sky-100 dark:border-sky-900/50' 
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  {nav.title}
                </button>
              );
            })}
          </nav>

          <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 hidden md:block mx-1"></div>

          {/* Controls: Search, Dark mode, Language, Github */}
          <button
            onClick={() => {
              triggerHaptic('light');
              onOpenSearch();
            }}
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white lg:hidden rounded-full hover:bg-slate-100 dark:hover:bg-white/10 cursor-pointer"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={() => {
              triggerHaptic('medium');
              onToggleTheme();
            }}
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-white/10 cursor-pointer"
            title={darkMode ? '라이트 모드' : '다크 모드'}
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>

          <button
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-white/10 cursor-pointer hidden sm:block"
            title="언어 선택"
          >
            <Languages className="w-5 h-5" />
          </button>

          <a
            href="https://github.com/facebook/react"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-white/10 cursor-pointer hidden sm:block"
            title="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>

          {/* Mobile Hamburger Menu Button (맨 상단 우측) */}
          <button
            onClick={() => {
              triggerHaptic('medium');
              onToggleMobileSidebar();
            }}
            className="md:hidden p-2 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 active:scale-95 transition-all cursor-pointer flex items-center justify-center"
            aria-label={isMobileSidebarOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isMobileSidebarOpen}
          >
            {isMobileSidebarOpen ? (
              <X className="w-6 h-6 text-slate-800 dark:text-slate-100" />
            ) : (
              <Menu className="w-6 h-6 text-slate-800 dark:text-slate-100" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
