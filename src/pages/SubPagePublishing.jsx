import React, { useState } from 'react';
import Callout from '../components/Callout';
import CodePlayground from '../components/CodePlayground';
import QuizCard from '../components/QuizCard';
import { 
  ArrowLeft, 
  ArrowRight, 
  Code, 
  FileCode, 
  Sparkles, 
  Image as ImageIcon,
  Smartphone,
  Laptop,
  CheckCircle2,
  Paintbrush,
  Hammer,
  Zap
} from 'lucide-react';
import { triggerHaptic } from '../utils/appleHaptics';

import imgFrontendTech from '../assets/images/section05_frontend_tech.jpeg';

export default function SubPagePublishing({ onSelectRoute }) {
  const initialCode = `<div class="card">
  <h2>여름용 프리미엄 셔츠</h2>
  <p class="price">29,000원</p>
  <button class="buy-btn">장바구니 담기</button>
</div>

<style>
.card {
  padding: 20px;
  background: #1e293b;
  border-radius: 16px;
  border: 1px solid #334155;
  text-align: center;
}
.price {
  color: #38bdf8;
  font-size: 22px;
  font-weight: bold;
  margin: 10px 0;
}
.buy-btn {
  background: #0284c7;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
}
</style>`;

  return (
    <article className="prose prose-slate dark:prose-invert max-w-none w-full animate-page-entry text-base">
      {/* Page Header Metadata */}
      <div className="border-b border-slate-200/80 dark:border-white/10 pb-6 mb-8">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
          <span>3. 웹 퍼블리싱</span>
          <span>/</span>
          <span>HTML & CSS 기초</span>
          <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/20 text-[11px] font-bold">
            초보자 가이드
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 flex items-center gap-3">
          <Code className="w-8 h-8 text-cyan-500 shrink-0" />
          웹 퍼블리싱 (Publishing - HTML & CSS)
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          <strong>"웹 퍼블리싱은 집을 짓고 인테리어를 완성하는 과정입니다!"</strong><br />
          디자이너가 피그마로 그린 예쁜 그림을 브라우저가 읽을 수 있는 <strong>진짜 웹 페이지(HTML/CSS)</strong>로 변환하는 핵심 역할을 알아봅니다.
        </p>
      </div>

      {/* Section 0: Overview with House Analogy */}
      <section id="overview" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2 flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-amber-500" />
          개요: 집 짓기로 쉽게 이해하는 웹의 3대 기술
        </h2>

        {/* Notion Image 5: Frontend Tech HTML CSS JS */}
        <figure className="my-6 not-prose">
          <div className="rounded-2xl overflow-hidden group hover:scale-[1.008] transition-transform duration-300">
            <img
              src={imgFrontendTech}
              alt="HTML, CSS, JavaScript의 세 가지 기술 역할 비교도"
              className="w-full h-auto object-contain max-h-[440px] mx-auto block"
            />
          </div>
          <figcaption className="mt-2.5 text-center text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5 font-medium">
            <ImageIcon className="w-3.5 h-3.5 text-cyan-500" />
            <span>[그림 5] 집 짓기 비유: HTML(철골 뼈대), CSS(벽지/인테리어), JavaScript(전등/자동문 스위치)</span>
          </figcaption>
        </figure>

        {/* Analogy Box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose mb-6">
          <div className="p-5 rounded-2xl apple-glass-card apple-card-hover text-center">
            <div className="text-3xl mb-2">🏗️</div>
            <div className="font-bold text-slate-900 dark:text-white text-sm">집의 철골 기둥과 벽</div>
            <div className="text-xs text-blue-600 dark:text-blue-400 font-bold mb-1">HTML (구조 뼈대)</div>
            <p className="text-xs text-slate-500 dark:text-slate-400">"여기에 제목이 있고, 여기에 버튼이 있다!"</p>
          </div>

          <div className="p-5 rounded-2xl apple-glass-card apple-card-hover text-center">
            <div className="text-3xl mb-2">🎨</div>
            <div className="font-bold text-slate-900 dark:text-white text-sm">벽지 페인트 & 인테리어</div>
            <div className="text-xs text-purple-600 dark:text-purple-400 font-bold mb-1">CSS (디자인 옷)</div>
            <p className="text-xs text-slate-500 dark:text-slate-400">"버튼은 파란색으로, 모서리는 둥글게!"</p>
          </div>

          <div className="p-5 rounded-2xl apple-glass-card apple-card-hover text-center">
            <div className="text-3xl mb-2">⚡</div>
            <div className="font-bold text-slate-900 dark:text-slate-100 text-sm">전등 스위치 & 자동문</div>
            <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold mb-1">JavaScript (동작 신경계)</div>
            <p className="text-xs text-slate-500 dark:text-slate-400">"버튼 누르면 문이 열리고 팝업이 뜬다!"</p>
          </div>
        </div>
      </section>

      {/* Section 1: HTML */}
      <section id="html" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2 flex items-center gap-2">
          <Hammer className="w-6 h-6 text-blue-500" />
          1. HTML: 웹 페이지의 뼈대 세우기
        </h2>

        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          HTML은 웹 페이지에 들어갈 제목(<code className="font-mono text-xs">&lt;h1&gt;</code>), 
          본문 글(<code className="font-mono text-xs">&lt;p&gt;</code>), 
          버튼(<code className="font-mono text-xs">&lt;button&gt;</code>) 등의 위치와 이름표(태그)를 붙여주는 언어입니다.
        </p>

        <div className="my-4 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-[#f8f9fa] dark:bg-[#1c1d22] font-mono text-sm text-slate-800 dark:text-slate-200">
          <pre>{`<h1>상품 상세 페이지</h1>
<p>여름용 프리미엄 린넨 셔츠입니다.</p>
<button>장바구니 담기</button>`}</pre>
        </div>

        <Callout type="note" title="초보자 팁: HTML에는 색상이 없습니다!">
          HTML만 작성하면 흰 배경에 검은색 글씨만 덩그러니 나옵니다. 여기에 예쁜 옷을 입혀주는 것이 바로 다음 단계인 <strong>CSS</strong>입니다!
        </Callout>
      </section>

      {/* Section 2: CSS */}
      <section id="css" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2 flex items-center gap-2">
          <Paintbrush className="w-6 h-6 text-purple-500" />
          2. CSS: 시각적인 디자인과 스타일 입히기
        </h2>

        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          CSS는 밋밋한 HTML 요소들에 색상, 크기, 간격(여백), 모서리 곡선, 그림자 효과를 주어 세련된 디자인으로 변신시키는 언어입니다.
        </p>

        <div className="my-4 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-[#f8f9fa] dark:bg-[#1c1d22] font-mono text-sm text-slate-800 dark:text-slate-200">
          <pre>{`button {
  background-color: #0284c7;  /* 파란색 배경 */
  color: white;               /* 흰색 글자 */
  border-radius: 12px;        /* 둥근 모서리 */
  padding: 10px 20px;         /* 안쪽 여백 */
}`}</pre>
        </div>
      </section>

      {/* Section 3: Responsive & Flexbox */}
      <section id="responsive" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2 flex items-center gap-2">
          <Smartphone className="w-6 h-6 text-emerald-500" />
          3. 반응형 웹(Responsive Web) & Flexbox
        </h2>

        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          사람들은 스마트폰, 태블릿, 거대한 모니터 등 다양한 화면 크기로 웹 사이트에 접속합니다.<br />
          <strong>반응형 웹</strong>이란 화면 크기에 맞춰 알아서 척척 레이아웃이 알맞게 재배치되는 요술 같은 기술입니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-4">
          <div className="p-5 rounded-2xl apple-glass-card border border-slate-200/60 dark:border-white/10">
            <div className="font-bold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-2">
              <Laptop className="w-4 h-4 text-cyan-500" /> PC 모니터 (넓은 화면)
            </div>
            <p className="text-xs text-slate-500">상품 카드 4개가 가로로 나란히 한 줄에 배치됨</p>
          </div>

          <div className="p-5 rounded-2xl apple-glass-card border border-slate-200/60 dark:border-white/10">
            <div className="font-bold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-emerald-500" /> 스마트폰 (좁은 화면)
            </div>
            <p className="text-xs text-slate-500">좁은 화면에 맞춰 세로로 1개씩 차곡차곡 정렬됨</p>
          </div>
        </div>
      </section>

      {/* Section 4: Live Code Sandbox */}
      <section id="live-demo" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          4. 실습: HTML / CSS 코드 직접 수정해보기 (Live Sandbox)
        </h2>

        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          아래 코드 편집기에서 글자나 색상 코드를 직접 수정해 보세요! 우측 미리보기 화면에 즉시 반영됩니다.
        </p>

        <CodePlayground
          title="product-card.html & css 실습"
          initialCode={initialCode}
          renderComponent={() => (
            <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 text-center shadow-lg">
              <h2 className="font-bold text-white text-lg mb-1">여름용 프리미엄 셔츠</h2>
              <p className="text-cyan-400 font-bold text-2xl my-2">29,000원</p>
              <button className="py-2.5 px-6 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs transition-colors apple-btn cursor-pointer shadow-md">
                장바구니 담기
              </button>
            </div>
          )}
        />
      </section>

      {/* Section 5: Quiz */}
      <section id="quiz" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          5. 퍼블리싱 이해도 확인 퀴즈
        </h2>

        <QuizCard
          question="웹 페이지에서 '글자 색상, 여백, 모서리 둥글기 등 시각적 디자인'을 담당하는 언어는 무엇인가요?"
          options={[
            "1) HTML",
            "2) CSS",
            "3) SQL",
            "4) Java"
          ]}
          correctAnswerIndex={1}
          explanation="정답입니다! HTML이 뼈대(구조)를 만든다면, CSS는 웹 페이지의 시각적인 스타일과 디자인 레이아웃을 담당합니다."
        />
      </section>

      {/* Section 6: Summary */}
      <section id="summary" className="scroll-mt-24 pt-6 border-t border-slate-200/80 dark:border-white/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 not-prose">
          <button
            onClick={() => {
              triggerHaptic('light');
              onSelectRoute('/learn/design');
            }}
            className="w-full sm:w-auto px-5 py-3 rounded-2xl border border-slate-300 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 font-semibold text-sm flex items-center justify-center gap-2 transition-all apple-btn cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>이전: 2. 웹 디자인</span>
          </button>

          <button
            onClick={() => {
              triggerHaptic('medium');
              onSelectRoute('/learn/dev');
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all apple-btn cursor-pointer"
          >
            <span>다음: 4. 웹 개발 & API 배우기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </article>
  );
}

