import React, { useState } from 'react';
import { Play, Copy, Check, RotateCcw, Code2, MonitorPlay } from 'lucide-react';
import { triggerHaptic } from '../utils/appleHaptics';

export default function CodePlayground({ initialCode, title = "실시간 코드 실습", renderComponent }) {
  const [code, setCode] = useState(initialCode);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('split'); // 'split' | 'code' | 'preview'

  const handleCopy = () => {
    triggerHaptic('light');
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    triggerHaptic('light');
    setCode(initialCode);
  };

  return (
    <div className="my-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-[#f8f9fa] dark:bg-[#1c1d22] overflow-hidden shadow-xs not-prose">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between px-6 py-4 bg-slate-100/70 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-800 gap-3">
        <div className="flex items-center gap-2.5">
          <span className="flex space-x-1.5 mr-1">
            <span className="w-3 h-3 rounded-full bg-rose-400 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
          </span>
          <span className="text-sm font-mono text-slate-800 dark:text-slate-200 font-bold tracking-tight">{title}</span>
        </div>

        {/* View Mode Toggle Buttons */}
        <div className="flex items-center gap-1 bg-white dark:bg-slate-950 p-1 rounded-xl border border-slate-200 dark:border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('split')}
            className={`px-3 py-1.5 rounded-lg transition-all font-semibold apple-btn cursor-pointer ${
              activeTab === 'split' ? 'bg-sky-600 text-white shadow-2xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            나란히 (Split)
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-3 py-1.5 rounded-lg transition-all font-semibold flex items-center gap-1 apple-btn cursor-pointer ${
              activeTab === 'code' ? 'bg-sky-600 text-white shadow-2xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Code2 className="w-4 h-4" /> 코드
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-3 py-1.5 rounded-lg transition-all font-semibold flex items-center gap-1 apple-btn cursor-pointer ${
              activeTab === 'preview' ? 'bg-sky-600 text-white shadow-2xs' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <MonitorPlay className="w-4 h-4" /> 미리보기
          </button>
        </div>

        {/* Copy & Reset actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            title="초기화"
            className="p-2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-white/10 rounded-xl transition-colors text-xs flex items-center gap-1.5 apple-btn cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="hidden sm:inline font-semibold">초기화</span>
          </button>
          <button
            onClick={handleCopy}
            className="p-2 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-white/10 rounded-xl transition-colors text-xs flex items-center gap-1.5 apple-btn cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            <span className="hidden sm:inline font-semibold">{copied ? '복사됨' : '코드 복사'}</span>
          </button>
        </div>
      </div>

      {/* Main Sandbox Grid */}
      <div className={`grid ${activeTab === 'split' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'} min-h-[280px]`}>
        {/* Code Editor Side */}
        {(activeTab === 'split' || activeTab === 'code') && (
          <div className="p-6 bg-[#f8f9fa] dark:bg-[#1c1d22] border-r border-slate-200/80 dark:border-slate-800 font-mono text-base overflow-x-auto relative">
            <div className="text-xs text-slate-400 mb-3 select-none flex justify-between items-center font-mono">
              <span>App.jsx</span>
              <span className="text-xs text-sky-600 dark:text-sky-400 font-semibold">라이브 편집 가능</span>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck="false"
              className="w-full h-64 bg-transparent text-slate-800 dark:text-slate-100 resize-none outline-none font-mono text-base leading-relaxed border-none focus:ring-0 selection:bg-sky-500/30"
            />
          </div>
        )}

        {/* Live Preview Side */}
        {(activeTab === 'split' || activeTab === 'preview') && (
          <div className="p-8 bg-white dark:bg-slate-950 flex flex-col justify-center items-center relative min-h-[260px]">
            <div className="absolute top-4 left-6 text-xs font-mono text-slate-400 select-none flex items-center gap-2 font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Live Component Preview
            </div>

            <div className="w-full max-w-md bg-[#f8f9fa] dark:bg-[#1c1d22] border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-sm transition-all">
              {renderComponent ? renderComponent(code) : (
                <div className="text-slate-400 text-center py-8 text-base">
                  컴포넌트 렌더링 결과가 표시됩니다.
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
