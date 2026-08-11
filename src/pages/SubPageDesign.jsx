import React, { useState } from 'react';
import Callout from '../components/Callout';
import QuizCard from '../components/QuizCard';
import { ArrowLeft, ArrowRight, Palette, Sliders, Layout, Sparkles, Check } from 'lucide-react';
import { triggerHaptic } from '../utils/appleHaptics';

export default function SubPageDesign({ onSelectRoute }) {
  // Live Design Tokens State
  const [primaryColor, setPrimaryColor] = useState('#087ea4');
  const [borderRadius, setBorderRadius] = useState('12px');
  const [fontSize, setFontSize] = useState('14px');

  return (
    <article className="prose prose-slate dark:prose-invert max-w-none w-full animate-page-entry">
      {/* Page Header Metadata */}
      <div className="border-b border-slate-200/80 dark:border-white/10 pb-6 mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-pink-600 dark:text-pink-400 mb-2">
          <span>2. 웹 디자인 & UI/UX</span>
          <span>/</span>
          <span>디자인 시스템</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          웹 디자인 & UI/UX (Web Design & Design Tokens)
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          시각적인 아름다움과 편안한 사용자 경험을 설계하는 웹 디자인! UI와 UX의 차이점, Figma 협업 방식, 그리고 서비스 일관성을 유지하는 디자인 시스템 토큰을 다룹니다.
        </p>
      </div>

      {/* Section 0: Overview */}
      <section id="overview" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          개요: UI와 UX의 차이점
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-6">
          <div className="p-5 rounded-2xl border border-pink-500/20 bg-pink-50/40 dark:bg-pink-950/20 apple-card-hover">
            <h3 className="font-bold text-pink-600 dark:text-pink-400 text-lg mb-2">
              UI (User Interface - 사용자 인터페이스)
            </h3>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              화면에 보이는 <strong>버튼, 색상, 글꼴, 아이콘, 이미지 레이아웃</strong> 등 눈에 보이는 시각적 디자인 요소를 의미합니다.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-indigo-500/20 bg-indigo-50/40 dark:bg-indigo-950/20 apple-card-hover">
            <h3 className="font-bold text-indigo-600 dark:text-indigo-400 text-lg mb-2">
              UX (User Experience - 사용자 경험)
            </h3>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              사용자가 서비스를 이용하며 느끼는 <strong>편리함, 동선의 효율성, 직관성</strong> 등 전체적인 만족도 경험을 의미합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Design System & Tokens */}
      <section id="system" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          1. 디자인 시스템 (Design Tokens)
        </h2>

        <p className="text-slate-700 dark:text-slate-300">
          <strong>디자인 시스템</strong>은 재사용 가능한 디자인 규격(토큰)들의 집합입니다. 브랜드 전반의 통일감을 유지하고 퍼블리셔와 개발자가 일관되게 코드를 작성할 수 있도록 기준을 세웁니다.
        </p>

        <Callout type="tip" title="디자인 토큰(Design Tokens)이란?">
          디자인 토큰은 색상 코드(<code className="font-mono text-xs">#087ea4</code>), 여백 크기(<code className="font-mono text-xs">16px</code>), 폰트 두께(<code className="font-mono text-xs">700</code>)처럼 디자인 규격을 변수화하여 코드와 디자이너 시안이 정확히 일치하도록 돕는 연결고리입니다.
        </Callout>
      </section>

      {/* Section 2: Figma Collaboration */}
      <section id="figma" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          2. Figma 협업 및 시안 전달
        </h2>

        <p className="text-slate-700 dark:text-slate-300">
          현업 디자이너들은 <strong>Figma (피그마)</strong> 도구를 사용하여 퍼블리셔와 개발자에게 실시간으로 인터페이스 시안을 공유합니다. 요소의 간격(Padding), 색상 코드, 사용 폰트 정보가 코드 형태로 추출되어 빠른 작업이 가능합니다.
        </p>
      </section>

      {/* Section 3: Live Interactive Sandbox */}
      <section id="live-demo" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          3. 실습: 디자인 시스템 토큰 조절기 (Live Sandbox)
        </h2>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          아래 토큰 조절기에서 색상, 둥글기(Border Radius), 폰트 크기를 조절하여 우측 컴포넌트 디자인이 어떻게 변하는지 체득해보세요!
        </p>

        <div className="not-prose my-6 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-[#f8f9fa] dark:bg-[#1c1d22] text-slate-800 dark:text-slate-100 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-3 mb-6">
            <div className="flex items-center gap-2">
              <Sliders className="w-5 h-5 text-pink-600 dark:text-pink-400" />
              <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100">Design Tokens 실시간 인터랙션 실습</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Control Panel */}
            <div className="space-y-4 bg-white dark:bg-slate-950 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  주 테마 색상 (Primary Color Token)
                </label>
                <div className="flex items-center gap-3">
                  {['#087ea4', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'].map((color) => (
                    <button
                      key={color}
                      onClick={() => {
                        triggerHaptic('light');
                        setPrimaryColor(color);
                      }}
                      style={{ backgroundColor: color }}
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform cursor-pointer apple-btn ${
                        primaryColor === color ? 'scale-125 ring-2 ring-slate-400 dark:ring-white' : ''
                      }`}
                    >
                      {primaryColor === color && <Check className="w-4 h-4 text-white" />}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  모서리 둥글기 (Border Radius): <span className="font-mono text-cyan-600 dark:text-cyan-400">{borderRadius}</span>
                </label>
                <div className="flex gap-2">
                  {['2px', '8px', '16px', '9999px'].map((r) => (
                    <button
                      key={r}
                      onClick={() => {
                        triggerHaptic('light');
                        setBorderRadius(r);
                      }}
                      className={`px-3 py-1 rounded-xl text-xs border font-mono apple-btn cursor-pointer ${
                        borderRadius === r ? 'border-pink-500 text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-950/30' : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  폰트 크기 (Font Size): <span className="font-mono text-cyan-600 dark:text-cyan-400">{fontSize}</span>
                </label>
                <div className="flex gap-2">
                  {['12px', '14px', '16px', '18px'].map((fs) => (
                    <button
                      key={fs}
                      onClick={() => {
                        triggerHaptic('light');
                        setFontSize(fs);
                      }}
                      className={`px-3 py-1 rounded-xl text-xs border font-mono apple-btn cursor-pointer ${
                        fontSize === fs ? 'border-pink-500 text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-950/30' : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {fs}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Component Preview */}
            <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col justify-center items-center">
              <div className="w-full max-w-sm p-5 bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl space-y-3">
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">라이브 컴포넌트 미리보기</div>

                <button
                  style={{
                    backgroundColor: primaryColor,
                    borderRadius: borderRadius,
                    fontSize: fontSize,
                  }}
                  className="w-full py-2.5 px-4 text-white font-bold transition-all shadow-md cursor-pointer apple-btn"
                >
                  디자인 시스템 버튼 (CTA)
                </button>

                <p style={{ fontSize: fontSize }} className="text-slate-300 leading-relaxed">
                  선택하신 토큰 값이 컴포넌트에 즉시 적용되었습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Quiz */}
      <section id="quiz" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          4. 디자인 이해도 확인 퀴즈
        </h2>

        <QuizCard
          question="버튼의 색상 코드(#087ea4)나 여백(16px)처럼 일관된 브랜드 규칙을 코드로 규격화한 단위를 무엇이라 하나요?"
          options={[
            "1) 데이터베이스 쿼리문",
            "2) 디자인 토큰 (Design Tokens)",
            "3) 도메인 네임 서버(DNS)",
            "4) 퍼블리셔 태스크"
          ]}
          correctAnswerIndex={1}
          explanation="디자인 토큰(Design Tokens)은 색상, 폰트, 여백 등 브랜드 디자인 요소들을 코드로 정의한 최소 단위 규칙입니다."
        />
      </section>

      {/* Section 5: Summary */}
      <section id="summary" className="scroll-mt-24 pt-6 border-t border-slate-200/80 dark:border-white/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 not-prose">
          <button
            onClick={() => {
              triggerHaptic('light');
              onSelectRoute('/learn/planning');
            }}
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 font-semibold text-sm flex items-center justify-center gap-2 transition-all apple-btn cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>이전: 1. 웹 기획</span>
          </button>

          <button
            onClick={() => {
              triggerHaptic('medium');
              onSelectRoute('/learn/publishing');
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all apple-btn cursor-pointer"
          >
            <span>다음: 3. 웹 퍼블리싱 (HTML/CSS) 배우기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </article>
  );
}
