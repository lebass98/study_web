import React, { useState } from 'react';
import Callout from '../components/Callout';
import CodePlayground from '../components/CodePlayground';
import QuizCard from '../components/QuizCard';
import { ArrowLeft, ArrowRight, MousePointerClick, RefreshCw, Image, Plus, Minus } from 'lucide-react';

export default function SubPageAddingInteractivity({ onSelectRoute }) {
  const initialCode = `function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="text-center p-6 bg-slate-800 rounded-xl border border-slate-700">
      <p className="text-xs text-slate-400 mb-1">현재 카운트 상태</p>
      <h3 className="text-4xl font-extrabold text-cyan-400 font-mono mb-4">{count}</h3>
      <div className="flex gap-2 justify-center">
        <button
          onClick={() => setCount(count - 1)}
          className="px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-bold text-sm"
        >
          - 1 감소
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm"
        >
          + 1 증가
        </button>
      </div>
    </div>
  );
}`;

  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      {/* Page Header metadata */}
      <div className="border-b border-slate-200 dark:border-[#343a46] pb-6 mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
          <button onClick={() => onSelectRoute('/')} className="hover:underline">React 시작하기</button>
          <span>/</span>
          <span>상호작용 추가하기</span>
          <span>/</span>
          <span>State 관리</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          State: 컴포넌트의 기억 공간
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          버튼 클릭, 폼 입력, 네트워크 응답 등 사용자의 동작에 따라 화면을 업데이트해야 합니다. React에서는 이를 <strong>State(상태)</strong>로 관리합니다.
        </p>
      </div>

      {/* Section 1: Overview */}
      <section id="overview" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
          개요
        </h2>
        <p className="text-slate-700 dark:text-slate-300">
          일반 변수는 함수가 렌더링을 마치면 사라지고, 변경되어도 React가 화면을 다시 그리지 않습니다. 
          반면 <strong>State</strong> 변수는 React가 렌더링 간에도 값을 <strong>기억</strong>하며, 상태가 변경되면 컴포넌트를 <strong>자동으로 다시 렌더링</strong>합니다.
        </p>
      </section>

      {/* Section 2: What is State */}
      <section id="what-is-state" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
          1. State란 무엇인가요?
        </h2>

        <p className="text-slate-700 dark:text-slate-300">
          컴포넌트는 종종 현재 입력값, 장바구니 품목, 현재 선택된 탭처럼 상호작용의 결과로 화면 내용을 바꿔야 합니다. React는 이를 위해 <code className="text-cyan-600 dark:text-cyan-400 font-mono">useState</code> Hook을 제공합니다.
        </p>

        <Callout type="note" title="Hook이란?">
          <code className="font-mono text-xs">use</code>로 시작하는 함수들을 React에서는 <strong>Hook(훅)</strong>이라고 부릅니다. 
          Hook은 React가 렌더링되는 동안에만 사용할 수 있는 특별한 함수입니다.
        </Callout>
      </section>

      {/* Section 3: Adding State */}
      <section id="adding-state" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
          2. useState 훅 추가하기
        </h2>

        <p className="text-slate-700 dark:text-slate-300">
          <code className="text-cyan-600 dark:text-cyan-400 font-mono">useState</code>를 사용하려면 두 가지가 포함된 배열 구조 분해 할당을 사용합니다:
        </p>

        <div className="my-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-900 font-mono text-xs text-slate-200">
          <pre>{`import { useState } from 'react';

const [state, setState] = useState(initialValue);`}</pre>
        </div>

        <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
          <li><strong>state 변수:</strong> 렌더링 간에 데이터를 유지하는 변수입니다.</li>
          <li><strong>setState 함수:</strong> 변수를 갱신하고 React에 컴포넌트를 다시 렌더링하도록 요청하는 함수입니다.</li>
        </ul>
      </section>

      {/* Section 4: Live Sandbox */}
      <section id="live-demo" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
          3. 카운터 & 갤러리 실습 (Live Sandbox)
        </h2>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          아래의 <code className="font-mono text-xs text-cyan-600 dark:text-cyan-400">Counter</code> 코드에서 초깃값을 바꾸거나 증감 단위를 수정해 보세요!
        </p>

        <CodePlayground
          title="Counter.jsx - State 상태 변경 실습"
          initialCode={initialCode}
          renderComponent={() => {
            const [count, setCount] = React.useState(0);
            return (
              <div className="text-center p-6 bg-slate-800 rounded-xl border border-slate-700">
                <p className="text-xs text-slate-400 mb-1">현재 카운트 상태</p>
                <h3 className="text-4xl font-extrabold text-cyan-400 font-mono mb-4">{count}</h3>
                <div className="flex gap-2 justify-center">
                  <button
                    onClick={() => setCount(count - 1)}
                    className="px-3.5 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs flex items-center gap-1 cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" /> 1 감소
                  </button>
                  <button
                    onClick={() => setCount(count + 1)}
                    className="px-3.5 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" /> 1 증가
                  </button>
                </div>
              </div>
            );
          }}
        />
      </section>

      {/* Section 5: State Isolation */}
      <section id="state-isolation" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
          4. 독립적인 State 유지 (State is Private)
        </h2>

        <p className="text-slate-700 dark:text-slate-300">
          동일한 컴포넌트를 두 번 렌더링하면 각 컴포넌트는 완전히 독립된 State를 가집니다. 하나를 변경해도 다른 컴포넌트에 영향을 주지 않습니다.
        </p>

        <Callout type="tip" title="State의 독립성 혜택">
          이 덕분에 똑같은 버튼이나 폼을 페이지 여기저기 재사용해도 각각의 상태가 엉키지 않고 깔끔하게 독립적으로 작동합니다.
        </Callout>
      </section>

      {/* Section 6: Quiz */}
      <section id="quiz" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
          5. State 실습 퀴즈
        </h2>

        <QuizCard
          question="일반 JavaScript 변수 대신 useState를 사용하는 주요 이유는 무엇인가요?"
          options={[
            "1) useState를 쓰면 코드가 자동으로 암호화되기 때문",
            "2) 일반 변수는 변경 시 React가 화면 재렌더링을 일으키지 않기 때문",
            "3) useState 변수는 메모리를 사용하지 않기 때문",
            "4) 일반 변수는 비동기로 동작하지 않기 때문"
          ]}
          correctAnswerIndex={1}
          explanation="일반 변수의 값이 변경되어도 React는 이를 감지하여 화면을 다시 그리지 않습니다. useState의 setter 함수를 호출해야 React가 렌더링 트리거를 받아 화면을 업데이트합니다."
        />
      </section>

      {/* Section 7: Summary & Pagination */}
      <section id="summary" className="scroll-mt-24 pt-6 border-t border-slate-200 dark:border-[#343a46]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 not-prose">
          <button
            onClick={() => onSelectRoute('/learn/first-component')}
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>이전: 첫 번째 컴포넌트</span>
          </button>

          <button
            onClick={() => onSelectRoute('/')}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>메인 개요로 돌아가기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </article>
  );
}
