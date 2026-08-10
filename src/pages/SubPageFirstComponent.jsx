import React, { useState } from 'react';
import Callout from '../components/Callout';
import CodePlayground from '../components/CodePlayground';
import QuizCard from '../components/QuizCard';
import { ArrowLeft, ArrowRight, Code, Sparkles, CheckCircle2, Copy } from 'lucide-react';

export default function SubPageFirstComponent({ onSelectRoute }) {
  const initialCode = `function Profile() {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800 border border-slate-700">
      <img
        className="w-14 h-14 rounded-full border-2 border-cyan-400"
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
        alt="알란 튜링"
      />
      <div>
        <h4 className="font-bold text-slate-100 text-base">알란 튜링 (Alan Turing)</h4>
        <p className="text-xs text-cyan-400 font-mono">컴퓨터 과학자 & 암호학자</p>
        <p className="text-xs text-slate-400 mt-1">"컴퓨터는 인간의 사고 방식을 모방할 수 있다."</p>
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
          <span>UI 구성하기</span>
          <span>/</span>
          <span>첫 번째 컴포넌트</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          첫 번째 컴포넌트 (Your First Component)
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          컴포넌트는 React의 핵심 구성 요소입니다. 화면에 표시될 UI 요소(버튼, 카드, 헤더 등)를 생성하는 독립적인 JavaScript 함수입니다.
        </p>
      </div>

      {/* Section 1: Overview */}
      <section id="overview" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
          개요
        </h2>
        <p className="text-slate-700 dark:text-slate-300">
          React를 사용하면 마크업(HTML), 스타일(CSS), 그리고 로직(JS)을 하나의 <strong>컴포넌트</strong> 안으로 통합할 수 있습니다. 
          컴포넌트는 UI 조각을 캡슐화하여 어플리케이션의 재사용성과 유지보수성을 극대화합니다.
        </p>
      </section>

      {/* Section 2: Defining Component */}
      <section id="defining-component" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
          1. 컴포넌트 정의하기 (3가지 규칙)
        </h2>

        <div className="space-y-4 text-slate-700 dark:text-slate-300">
          <p>React 컴포넌트를 만들 때는 다음 3개 단계를 따릅니다:</p>

          <ol className="list-decimal pl-6 space-y-2 font-medium">
            <li><strong>컴포넌트 내보내기:</strong> <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-cyan-600 dark:text-cyan-400">export default</code> 키워드를 사용하여 파일에서 컴포넌트를 내보냅니다.</li>
            <li><strong>함수 정의하기:</strong> <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-cyan-600 dark:text-cyan-400">function Profile() &#123; ... &#125;</code>와 같이 일반 JavaScript 함수를 정의합니다.</li>
            <li><strong>마크업 반환하기:</strong> 함수 내부에서 HTML과 유사한 <strong>JSX 마크업</strong>을 반환합니다.</li>
          </ol>
        </div>

        <Callout type="warning" title="주의: 컴포넌트 이름은 반드시 대문자로 시작해야 합니다!">
          React 컴포넌트의 이름은 항상 <strong>대문자</strong>로 시작해야 합니다. 
          (예: <code className="font-mono text-xs">Profile</code>⭕ vs <code className="font-mono text-xs">profile</code>❌). 
          소문자로 시작하면 React는 이를 일반 HTML 태그(예: <code className="font-mono text-xs">&lt;div&gt;</code>)로 인식합니다.
        </Callout>
      </section>

      {/* Section 3: Live Code Sandbox */}
      <section id="live-demo" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
          3. 라이브 라이팅 실습 (Live Sandbox)
        </h2>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          아래의 <code className="font-mono text-xs text-cyan-600 dark:text-cyan-400">Profile</code> 컴포넌트 코드에서 이름이나 직업 설명을 수정해 보세요.
        </p>

        <CodePlayground
          title="Profile.jsx - 인물 프로필 컴포넌트"
          initialCode={initialCode}
          renderComponent={() => (
            <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800 border border-slate-700 text-left">
              <img
                className="w-14 h-14 rounded-full border-2 border-cyan-400 shrink-0"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
                alt="알란 튜링"
              />
              <div>
                <h4 className="font-bold text-slate-100 text-base">알란 튜링 (Alan Turing)</h4>
                <p className="text-xs text-cyan-400 font-mono">컴퓨터 과학자 & 암호학자</p>
                <p className="text-xs text-slate-400 mt-1">"컴퓨터는 인간의 사고 방식을 모방할 수 있다."</p>
              </div>
            </div>
          )}
        />
      </section>

      {/* Section 4: Nesting Components */}
      <section id="nesting" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
          4. 컴포넌트 중첩 규칙 (Nesting Rules)
        </h2>

        <p className="text-slate-700 dark:text-slate-300">
          컴포넌트는 다른 컴포넌트 내부에서 여러 번 중첩하여 사용할 수 있습니다.
        </p>

        <div className="my-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-900 font-mono text-xs text-slate-200 overflow-x-auto">
          <pre>{`export default function Gallery() {
  return (
    <section>
      <h1>박물관 인물 정보</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}`}</pre>
        </div>

        <Callout type="caution" title="컴포넌트 정의를 다른 컴포넌트 안에 중첩하지 마세요!">
          컴포넌트 <strong>호출</strong>은 중첩할 수 있지만, 컴포넌트 <strong>함수의 정의</strong>는 절대 다른 함수 내부에서 새로 정의해서는 안 됩니다. 렌더링 시마다 함수가 다시 만들어져 성능이 저하되고 State가 유실됩니다.
        </Callout>
      </section>

      {/* Section 5: Quiz */}
      <section id="quiz" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
          5. 이해도 확인 퀴즈
        </h2>

        <QuizCard
          question="다음 중 올바른 React 컴포넌트 이름은 무엇인가요?"
          options={[
            "1) function userProfile() { return <div />; }",
            "2) function UserProfile() { return <div />; }",
            "3) function USER-PROFILE() { return <div />; }",
            "4) const user_profile = () => <div />;"
          ]}
          correctAnswerIndex={1}
          explanation="React 컴포넌트 이름은 반드시 대문자로 시작하는 파스칼케이스(PascalCase, 예: UserProfile)를 사용해야 합니다. 소문자로 시작하면 HTML 태그로 인식됩니다."
        />
      </section>

      {/* Section 6: Summary & Pagination */}
      <section id="summary" className="scroll-mt-24 pt-6 border-t border-slate-200 dark:border-[#343a46]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 not-prose">
          <button
            onClick={() => onSelectRoute('/')}
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>이전: 학습 개요</span>
          </button>

          <button
            onClick={() => onSelectRoute('/learn/state')}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>다음: State로 상호작용 추가하기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </article>
  );
}
