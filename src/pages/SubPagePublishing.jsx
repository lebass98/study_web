import React, { useState } from 'react';
import Callout from '../components/Callout';
import CodePlayground from '../components/CodePlayground';
import QuizCard from '../components/QuizCard';
import { ArrowLeft, ArrowRight, Code, FileCode, Sparkles, Image as ImageIcon } from 'lucide-react';
import { triggerHaptic } from '../utils/appleHaptics';

import imgFrontendTech from '../assets/images/section05_frontend_tech.jpeg';

export default function SubPagePublishing({ onSelectRoute }) {
  const initialCode = `<div class="card">
  <h2>여름용 셔츠 상품</h2>
  <p class="price">29,000원</p>
  <button class="buy-btn">장바구니 담기</button>
</div>

<style>
.card {
  padding: 20px;
  background: #1e293b;
  border-radius: 12px;
  border: 1px solid #334155;
  text-align: center;
}
.price {
  color: #38bdf8;
  font-size: 20px;
  font-weight: bold;
}
.buy-btn {
  background: #0284c7;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
}
</style>`;

  return (
    <article className="prose prose-slate dark:prose-invert max-w-none w-full animate-page-entry">
      {/* Page Header Metadata */}
      <div className="border-b border-slate-200/80 dark:border-white/10 pb-6 mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
          <span>3. 웹 퍼블리싱</span>
          <span>/</span>
          <span>HTML & CSS 마크업</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          웹 퍼블리싱 (Publishing - 집 뼈대 세우기와 인테리어)
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          어렵게 느껴지시나요? 웹 퍼블리싱은 <strong>"집을 짓고 인테리어를 완성하는 것"</strong>과 똑같습니다!
        </p>
      </div>

      {/* Section 0: Overview with House Analogy */}
      <section id="overview" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
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
          <div className="p-4 rounded-2xl apple-glass-card apple-card-hover text-center">
            <div className="text-2xl mb-1">🏗️</div>
            <div className="font-bold text-slate-900 dark:text-white text-sm">집의 철골 기둥과 벽</div>
            <div className="text-xs text-blue-600 dark:text-blue-400 font-bold">HTML (뼈대 구조)</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">"제목, 문단, 버튼이 어디 배치되는가"</p>
          </div>

          <div className="p-4 rounded-2xl apple-glass-card apple-card-hover text-center">
            <div className="text-2xl mb-1">🎨</div>
            <div className="font-bold text-slate-900 dark:text-white text-sm">벽지 페인트 & 조명</div>
            <div className="text-xs text-purple-600 dark:text-purple-400 font-bold">CSS (디자인 옷)</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">"색상, 폰트 크기, 여백이 어떠한가"</p>
          </div>

          <div className="p-4 rounded-2xl apple-glass-card apple-card-hover text-center">
            <div className="text-2xl mb-1">⚡</div>
            <div className="font-bold text-slate-900 dark:text-white text-sm">전등 스위치 & 자동문</div>
            <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">JavaScript (동적 기믹)</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">"버튼 누르면 문이 열리고 작동하는가"</p>
          </div>
        </div>
      </section>

      {/* Section 1: HTML */}
      <section id="html" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          1. HTML: 웹의 뼈대와 구조 (무엇이 있는가)
        </h2>

        <p className="text-slate-700 dark:text-slate-300">
          HTML은 웹 페이지에 들어갈 제목, 문단, 버튼, 이미지 등의 태그 요소를 정의합니다.
        </p>

        <div className="my-4 p-4 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-slate-900 font-mono text-xs text-slate-200">
          <pre>{`<h1>상품 상세 페이지</h1>
<p>여름용 프리미엄 셔츠입니다.</p>
<button>장바구니 담기</button>`}</pre>
        </div>

        <Callout type="note" title="HTML 핵심 역할">
          HTML은 "이 자리에 제목이 있고, 이 자리에 버튼이 있다"는 구조만 정의하며 디자인 색상이나 글자 크기는 담당하지 않습니다.
        </Callout>
      </section>

      {/* Section 2: CSS */}
      <section id="css" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          2. CSS: 디자인과 레이아웃 (어떻게 보이는가)
        </h2>

        <p className="text-slate-700 dark:text-slate-300">
          CSS는 HTML 태그들에 색상, 여백(Padding/Margin), 정렬(Flexbox), 모서리 둥글기 등을 입혀 예쁜 디자인을 만듭니다.
        </p>

        <div className="my-4 p-4 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-slate-900 font-mono text-xs text-slate-200">
          <pre>{`button {
  background-color: #0284c7;
  color: white;
  border-radius: 8px;
  padding: 10px 20px;
}`}</pre>
        </div>
      </section>

      {/* Section 3: Responsive & Flexbox */}
      <section id="responsive" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          3. 반응형 웹 디자인과 Flexbox
        </h2>

        <p className="text-slate-700 dark:text-slate-300">
          스마트폰, 태블릿, PC 모니터 화면 크기에 맞춰 레이아웃이 유연하게 늘어나거나 줄어드는 <strong>반응형 레이아웃</strong>을 위해 Flexbox와 미디어 쿼리를 활용합니다.
        </p>
      </section>

      {/* Section 4: Live Code Sandbox */}
      <section id="live-demo" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          4. 실습: HTML / CSS 코드 직접 수정해보기 (Live Sandbox)
        </h2>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          아래 코드 상자에서 글자 크기나 배경색 코드를 직접 수정해 보세요!
        </p>

        <CodePlayground
          title="product-card.html & css 실습"
          initialCode={initialCode}
          renderComponent={() => (
            <div className="p-5 bg-slate-800 rounded-2xl border border-slate-700 text-center">
              <h2 className="font-bold text-white text-lg mb-1">여름용 셔츠 상품</h2>
              <p className="text-cyan-400 font-bold text-xl mb-3">29,000원</p>
              <button className="py-2 px-5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs transition-colors apple-btn cursor-pointer">
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
          explanation="HTML이 뼈대(구조)를 만든다면, CSS는 웹 페이지의 시각적인 스타일과 디자인 레이아웃을 담당합니다."
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
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 font-semibold text-sm flex items-center justify-center gap-2 transition-all apple-btn cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>이전: 2. 웹 디자인</span>
          </button>

          <button
            onClick={() => {
              triggerHaptic('medium');
              onSelectRoute('/learn/dev');
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all apple-btn cursor-pointer"
          >
            <span>다음: 4. 웹 개발 & API 배우기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </article>
  );
}
