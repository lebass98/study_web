import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TableOfContents from './components/TableOfContents';
import SearchModal from './components/SearchModal';
import MainPage from './pages/MainPage';
import SubPagePlanning from './pages/SubPagePlanning';
import SubPageDesign from './pages/SubPageDesign';
import SubPagePublishing from './pages/SubPagePublishing';
import SubPageDevelopment from './pages/SubPageDevelopment';
import SubPageGlossary from './pages/SubPageGlossary';
import { mainPageToc, planningToc, designToc, publishingToc, devToc, glossaryToc } from './data/navigationData';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  // Handle Dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Command + K shortcut listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll spy to update active TOC section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 120;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPath]);

  // Scroll to top or section on route change
  const handleSelectRoute = (path) => {
    if (path.includes('#')) {
      const [basePath, anchor] = path.split('#');
      const targetBase = basePath || '/';
      
      if (targetBase !== currentPath) {
        setCurrentPath(targetBase);
      }
      if (anchor) {
        setActiveSection(anchor);
      }

      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 80);
      return;
    }

    setCurrentPath(path);
    setActiveSection('overview');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get current page TOC items
  const getCurrentTocItems = () => {
    switch (currentPath) {
      case '/learn/planning':
        return planningToc;
      case '/learn/design':
        return designToc;
      case '/learn/publishing':
        return publishingToc;
      case '/learn/dev':
        return devToc;
      case '/learn/glossary':
        return glossaryToc;
      case '/':
      default:
        return mainPageToc;
    }
  };

  // Render current page content
  const renderPage = () => {
    switch (currentPath) {
      case '/learn/planning':
        return <SubPagePlanning onSelectRoute={handleSelectRoute} />;
      case '/learn/design':
        return <SubPageDesign onSelectRoute={handleSelectRoute} />;
      case '/learn/publishing':
        return <SubPagePublishing onSelectRoute={handleSelectRoute} />;
      case '/learn/dev':
        return <SubPageDevelopment onSelectRoute={handleSelectRoute} />;
      case '/learn/glossary':
        return <SubPageGlossary onSelectRoute={handleSelectRoute} />;
      case '/':
      default:
        return <MainPage onSelectRoute={handleSelectRoute} />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#23272f] text-slate-900 dark:text-[#f6f7f9] flex flex-col font-sans transition-colors duration-200 w-full">
      {/* Top Navbar */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode(!darkMode)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleMobileSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        isMobileSidebarOpen={isMobileSidebarOpen}
        currentPath={currentPath}
        onSelectRoute={handleSelectRoute}
      />

      {/* Main Container Layout - Full 100% Width */}
      <div className="w-full flex-1 flex">
        {/* Left Sidebar */}
        <Sidebar
          currentPath={currentPath}
          activeSection={activeSection}
          onSelectRoute={handleSelectRoute}
          isMobileOpen={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />

        {/* Center Main Doc Content - Expanded 100% Fluid Width */}
        <main key={currentPath} className="flex-1 min-w-0 px-4 sm:px-8 py-8 lg:py-10 w-full animate-page-entry">
          {renderPage()}
        </main>

        {/* Right Table Of Contents (TOC) */}
        <TableOfContents
          items={getCurrentTocItems()}
          activeSection={activeSection}
        />
      </div>

      {/* Command + K Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectRoute={handleSelectRoute}
      />
    </div>
  );
}
