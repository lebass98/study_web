import React, { useState } from 'react';
import { Play, Copy, Check, RotateCcw, Code2, MonitorPlay } from 'lucide-react';

export default function CodePlayground({ initialCode, title = "실시간 React 코드 실습", renderComponent }) {
  const [code, setCode] = useState(initialCode);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('split'); // 'split' | 'code' | 'preview'

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setCode(initialCode);
  };

  return (
    <div className="my-8 rounded-2xl border border-slate-200 dark:border-[#343a46] bg-slate-900 text-slate-100 overflow-hidden shadow-xl">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800 gap-2">
        <div className="flex items-center gap-2">
          <span className="flex space-x-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </span>
          <span className="text-xs font-mono text-cyan-400 font-medium">{title}</span>
        </div>

        {/* View Mode Toggle Buttons */}
        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('split')}
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeTab === 'split' ? 'bg-cyan-500/20 text-cyan-300 font-medium' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            나란히 (Split)
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 ${
              activeTab === 'code' ? 'bg-cyan-500/20 text-cyan-300 font-medium' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" /> 코드
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1 ${
              activeTab === 'preview' ? 'bg-cyan-500/20 text-cyan-300 font-medium' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <MonitorPlay className="w-3.5 h-3.5" /> 미리보기
          </button>
        </div>

        {/* Copy & Reset actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            title="초기화"
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors text-xs flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">초기화</span>
          </button>
          <button
            onClick={handleCopy}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors text-xs flex items-center gap-1"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{copied ? '복사됨' : '코드 복사'}</span>
          </button>
        </div>
      </div>

      {/* Main Sandbox Grid */}
      <div className={`grid ${activeTab === 'split' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'} min-h-[260px]`}>
        {/* Code Editor Side */}
        {(activeTab === 'split' || activeTab === 'code') && (
          <div className="p-4 bg-slate-900 border-r border-slate-800 font-mono text-sm overflow-x-auto relative">
            <div className="text-xs text-slate-500 mb-2 select-none flex justify-between items-center">
              <span>App.jsx</span>
              <span className="text-[10px] text-cyan-500/70">편집 가능</span>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck="false"
              className="w-full h-56 bg-transparent text-slate-200 resize-none outline-none font-mono text-sm leading-relaxed border-none focus:ring-0 selection:bg-cyan-500/30"
            />
          </div>
        )}

        {/* Live Preview Side */}
        {(activeTab === 'split' || activeTab === 'preview') && (
          <div className="p-6 bg-slate-950 flex flex-col justify-center items-center relative min-h-[240px]">
            <div className="absolute top-3 left-4 text-xs font-mono text-slate-400 select-none flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Result
            </div>

            <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl transition-all">
              {renderComponent ? renderComponent(code) : (
                <div className="text-slate-400 text-center py-8 text-sm">
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
