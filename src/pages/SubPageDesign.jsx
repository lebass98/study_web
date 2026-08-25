import React, { useState } from 'react';
import Callout from '../components/Callout';
import QuizCard from '../components/QuizCard';
import { 
  ArrowLeft, 
  ArrowRight, 
  Palette, 
  Sliders, 
  Layout, 
  Sparkles, 
  Check, 
  Eye, 
  Smile, 
  Layers, 
  Share2, 
  CheckCircle2, 
  Lightbulb 
} from 'lucide-react';
import { triggerHaptic } from '../utils/appleHaptics';

export default function SubPageDesign({ onSelectRoute }) {
  // Live Design Tokens State
  const [primaryColor, setPrimaryColor] = useState('#087ea4');
  const [borderRadius, setBorderRadius] = useState('12px');
  const [fontSize, setFontSize] = useState('14px');

  return (
    <article className="prose prose-slate dark:prose-invert max-w-none w-full animate-page-entry text-base">
      {/* Page Header Metadata */}
      <div className="border-b border-slate-200/80 dark:border-white/10 pb-6 mb-8">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-pink-600 dark:text-pink-400 mb-2">
          <span>2. 웹 디자인 & UI/UX</span>
          <span>/</span>
          <span>디자인 기초 가이드</span>
          <span className="px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-300 border border-pink-500/20 text-[11px] font-bold">
            초보자 가이드
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 flex items-center gap-3">
          <Palette className="w-8 h-8 text-pink-500 shrink-0" />
          웹 디자인 & UI/UX 기초
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          <strong>"보기 좋은 떡이 먹기도 좋다!"</strong><br />
          웹 디자인은 단순히 그림을 예쁘게 그리는 것이 아닙니다. 
          사용자가 눈으로 보기에 아름답고(UI), 누구나 손쉽고 편안하게 서비스를 이용할 수 있도록(UX) 설계하는 마법 같은 과정입니다.
        </p>
      </div>

      {/* Section 0: Overview */}
      <section id="overview" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2 flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-amber-500" />
          개요: 1초 만에 이해하는 UI vs UX 차이점
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-6">
          <div className="p-6 rounded-3xl border border-pink-500/30 bg-pink-50/40 dark:bg-pink-950/20 apple-card-hover">
            <div className="flex items-center gap-2 text-pink-600 dark:text-pink-400 font-bold text-base mb-2">
              <Eye className="w-5 h-5" /> UI (User Interface - 눈으로 보는 모습)
            </div>
            <div className="text-xs font-bold text-pink-700 dark:text-pink-300 mb-2">☕ 카페의 세련된 머그잔과 감성 조명</div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              버튼의 색상, 글꼴, 아이콘 모양, 이미지 배치 등 <strong>사용자가 화면에서 눈으로 보는 모든 시각적 요소</strong>를 의미합니다.
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-indigo-500/30 bg-indigo-50/40 dark:bg-indigo-950/20 apple-card-hover">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-base mb-2">
              <Smile className="w-5 h-5" /> UX (User Experience - 마음으로 느끼는 경험)
            </div>
            <div className="text-xs font-bold text-indigo-700 dark:text-indigo-300 mb-2">🚗 푹신한 의자, 빠른 주문, 편리한 주차장</div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              "결제가 1초 만에 끝나서 편하다!", "글자가 한눈에 들어온다!"처럼 <strong>사용자가 서비스를 쓰면서 느끼는 편리함과 만족감</strong>을 의미합니다.
            </p>
          </div>
        </div>

        <Callout type="note" title="한 줄 요약">
          <strong>UI</strong>가 <em>"어떻게 보이는가(Look & Feel)"</em>라면, <strong>UX</strong>는 <em>"얼마나 쓰기 편한가(Ease of Use)"</em>입니다!
        </Callout>
      </section>

      {/* Section 1: Design System & Tokens */}
      <section id="system" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2 flex items-center gap-2">
          <Layers className="w-6 h-6 text-pink-500" />
          1. 디자인 시스템 & 디자인 토큰 (Design Tokens)
        </h2>

        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          웹 사이트에 버튼이 100개 있을 때, 디자이너마다 색깔을 다르게 칠하면 화면이 난잡해집니다.<br />
          이때 <strong>"우리 회사는 이 파란색(#087ea4), 이 둥글기(12px)만 쓴다!"</strong>라고 레고 블록처럼 규격화해둔 약속을 <strong>디자인 시스템</strong>이라고 부릅니다.
        </p>

        {/* 레고 블록 비유 카드 */}
        <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-slate-800 dark:text-slate-200 not-prose my-4">
          <div className="font-bold text-amber-700 dark:text-amber-300 text-sm mb-2 flex items-center gap-2">
            <Lightbulb className="w-4 h-4" /> 💡 레고 블록에 비유하는 디자인 토큰
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            - <strong>디자인 토큰:</strong> 빨간색 2x4 레고 블록 하나 (<code className="font-mono text-xs">primary-color: #087ea4</code>)<br />
            - <strong>컴포넌트:</strong> 레고 블록들을 조립해서 만든 멋진 자동차 (<code className="font-mono text-xs">&lt;BuyButton /&gt;</code>)<br />
            - <strong>디자인 시스템:</strong> 레고 상자 전체와 설명서 세트
          </p>
        </div>
      </section>

      {/* Section 2: Figma Collaboration */}
      <section id="figma" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2 flex items-center gap-2">
          <Share2 className="w-6 h-6 text-cyan-500" />
          2. 피그마(Figma): 디자이너와 개발자의 실시간 도화지
        </h2>

        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          옛날에는 디자이너가 포토샵으로 그림을 그리고 개발자에게 이메일로 보냈지만, 
          지금은 <strong>피그마(Figma)</strong>라는 웹 도구로 하나의 도화지에서 실시간으로 함께 작업합니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 not-prose my-4">
          <div className="p-4 rounded-2xl apple-glass-card border border-slate-200/60 dark:border-white/10 text-center">
            <div className="text-xl mb-1">🔗</div>
            <div className="font-bold text-sm text-slate-900 dark:text-white mb-1">링크 하나로 공유</div>
            <p className="text-xs text-slate-500">용량 큰 파일 전송 없이 링크만 열면 최신 디자인 확인!</p>
          </div>
          <div className="p-4 rounded-2xl apple-glass-card border border-slate-200/60 dark:border-white/10 text-center">
            <div className="text-xl mb-1">📐</div>
            <div className="font-bold text-sm text-slate-900 dark:text-white mb-1">자동 치수 측정</div>
            <p className="text-xs text-slate-500">버튼 사이 간격(24px)과 색상 코드를 클릭 한 번에 확인!</p>
          </div>
          <div className="p-4 rounded-2xl apple-glass-card border border-slate-200/60 dark:border-white/10 text-center">
            <div className="text-xl mb-1">💬</div>
            <div className="font-bold text-sm text-slate-900 dark:text-white mb-1">실시간 댓글 소통</div>
            <p className="text-xs text-slate-500">화면 위에 바로 "여기 여백 좀 늘려주세요" 코멘트 남기기!</p>
          </div>
        </div>
      </section>

      {/* Section 3: Live Interactive Sandbox */}
      <section id="live-demo" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          3. 실습: 디자인 토큰 조절기 (Live Sandbox)
        </h2>

        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          아래 토큰 조절기에서 색상, 둥글기, 폰트 크기 버튼을 눌러보세요. 
          디자인 토큰 하나를 바꿨을 때 화면의 버튼이 어떻게 마법처럼 변하는지 실시간으로 확인해보세요!
        </p>

        <div className="not-prose my-6 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-[#f8f9fa] dark:bg-[#1c1d22] text-slate-800 dark:text-slate-100 shadow-sm">
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
                  1) 주 테마 색상 토큰 (Primary Color)
                </label>
                <div className="flex items-center gap-3">
                  {[
                    { color: '#087ea4', name: '리액트 블루' },
                    { color: '#8b5cf6', name: '보라색' },
                    { color: '#ec4899', name: '핑크색' },
                    { color: '#10b981', name: '에메랄드 그린' },
                    { color: '#f59e0b', name: '앰버 오렌지' }
                  ].map((item) => (
                    <button
                      key={item.color}
                      onClick={() => {
                        triggerHaptic('light');
                        setPrimaryColor(item.color);
                      }}
                      style={{ backgroundColor: item.color }}
                      title={item.name}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform cursor-pointer apple-btn ${
                        primaryColor === item.color ? 'scale-125 ring-2 ring-slate-400 dark:ring-white shadow-md' : ''
                      }`}
                    >
                      {primaryColor === item.color && <Check className="w-4 h-4 text-white" />}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  2) 모서리 둥글기 토큰 (Border Radius): <span className="font-mono text-cyan-600 dark:text-cyan-400 font-bold">{borderRadius}</span>
                </label>
                <div className="flex gap-2">
                  {[
                    { val: '2px', label: '각진 직사각형 (2px)' },
                    { val: '8px', label: '약간 둥글게 (8px)' },
                    { val: '16px', label: '부드러운 곡선 (16px)' },
                    { val: '9999px', label: '완전 둥근 알약 (Pill)' }
                  ].map((r) => (
                    <button
                      key={r.val}
                      onClick={() => {
                        triggerHaptic('light');
                        setBorderRadius(r.val);
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs border font-medium apple-btn cursor-pointer ${
                        borderRadius === r.val ? 'border-pink-500 text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-950/30 font-bold' : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {r.val}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  3) 폰트 크기 토큰 (Font Size): <span className="font-mono text-cyan-600 dark:text-cyan-400 font-bold">{fontSize}</span>
                </label>
                <div className="flex gap-2">
                  {['12px', '14px', '16px', '18px'].map((fs) => (
                    <button
                      key={fs}
                      onClick={() => {
                        triggerHaptic('light');
                        setFontSize(fs);
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs border font-medium apple-btn cursor-pointer ${
                        fontSize === fs ? 'border-pink-500 text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-950/30 font-bold' : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
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
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center justify-between">
                  <span>실시간 디자인 토큰 렌더링</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>

                <button
                  style={{
                    backgroundColor: primaryColor,
                    borderRadius: borderRadius,
                    fontSize: fontSize,
                  }}
                  className="w-full py-3 px-4 text-white font-bold transition-all shadow-md cursor-pointer apple-btn"
                >
                  토큰이 적용된 버튼 (CTA)
                </button>

                <p style={{ fontSize: fontSize }} className="text-slate-600 dark:text-slate-300 leading-relaxed text-center">
                  선택하신 토큰 규칙이 컴포넌트에 즉시 반영되었습니다!
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
          question="버튼의 색상 코드(#087ea4)나 여백 크기(16px), 폰트 두께처럼 일관된 브랜드 규칙을 코드로 규격화한 단위를 무엇이라 하나요?"
          options={[
            "1) 데이터베이스 쿼리문",
            "2) 디자인 토큰 (Design Tokens)",
            "3) 도메인 네임 서버(DNS)",
            "4) Git 소스 코드 커밋 로그"
          ]}
          correctAnswerIndex={1}
          explanation="정답입니다! 디자인 토큰(Design Tokens)은 색상, 폰트, 여백 등 브랜드 디자인 요소들을 코드로 정의한 최소 단위의 표준 규격입니다."
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
            className="w-full sm:w-auto px-5 py-3 rounded-2xl border border-slate-300 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 font-semibold text-sm flex items-center justify-center gap-2 transition-all apple-btn cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>이전: 1. 웹 기획</span>
          </button>

          <button
            onClick={() => {
              triggerHaptic('medium');
              onSelectRoute('/learn/publishing');
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all apple-btn cursor-pointer"
          >
            <span>다음: 3. 웹 퍼블리싱 (HTML/CSS) 배우기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </article>
  );
}
