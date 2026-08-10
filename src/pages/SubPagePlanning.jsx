import React, { useState } from 'react';
import Callout from '../components/Callout';
import QuizCard from '../components/QuizCard';
import { ArrowLeft, ArrowRight, FileText, Layout, ListChecks, Calendar, CheckSquare, Plus, Trash2 } from 'lucide-react';
import { triggerHaptic } from '../utils/appleHaptics';

export default function SubPagePlanning({ onSelectRoute }) {
  // Interactive Wireframe Element Builder State
  const [elements, setElements] = useState([
    { id: 1, type: 'header', title: '상단 헤더 (로고 & 네비게이션)' },
    { id: 2, type: 'banner', title: '메인 배너 (서비스 슬로건)' },
    { id: 3, type: 'button', title: '무료로 시작하기 버튼' },
  ]);

  const addElement = (type, label) => {
    triggerHaptic('light');
    setElements(prev => [...prev, { id: Date.now(), type, title: label }]);
  };

  const removeElement = (id) => {
    triggerHaptic('light');
    setElements(prev => prev.filter(el => el.id !== id));
  };

  return (
    <article className="prose prose-slate dark:prose-invert max-w-none w-full animate-page-entry">
      {/* Page Header Metadata */}
      <div className="border-b border-slate-200/80 dark:border-white/10 pb-6 mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
          <span>1. 웹 기획 & PM</span>
          <span>/</span>
          <span>화면설계서 & 프로세스</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          웹 기획 & PM (Web Planning & Project Management)
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          웹 사이트 제작의 첫 출발점인 기획! 서비스 목표 설정부터 정보구조도(IA) 작성, 화면설계서(SB) 제작, 그리고 프로젝트 일정(WBS) 관리까지 기획자의 핵심 업무를 다룹니다.
        </p>
      </div>

      {/* Section 0: Overview */}
      <section id="overview" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          개요: 웹 기획이란 무엇인가요?
        </h2>
        <p className="text-slate-700 dark:text-slate-300">
          웹 기획은 <strong>"무엇을, 누구를 위해, 어떤 화면과 기능으로 만들 것인가?"</strong>를 정의하는 과정입니다. 집을 짓기 전에 건축 설계도를 그리는 것과 같습니다.
        </p>

        <Callout type="note" title="기획서가 없으면 발생하는 문제">
          기획서 없이 개발을 시작하면 디자이너와 개발자가 생각하는 결과물이 달라 코드를 여러 번 처음부터 다시 만들어야 하는 재작업 문제(Overhead)가 발생합니다.
        </Callout>
      </section>

      {/* Section 1: Role */}
      <section id="role" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          1. 웹 기획자(PM)의 핵심 역할 4가지
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-6">
          <div className="p-5 rounded-2xl apple-glass-card apple-card-hover">
            <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 dark:text-white">
              <ListChecks className="w-5 h-5 text-cyan-500" />
              <span>1) 요구사항 정의서 작성</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              고객사 및 사용자의 요청 사항을 정리하여 개발 가능한 기능 목록으로 정리합니다.
            </p>
          </div>

          <div className="p-5 rounded-2xl apple-glass-card apple-card-hover">
            <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 dark:text-white">
              <Layout className="w-5 h-5 text-purple-500" />
              <span>2) IA (Information Architecture)</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              메뉴 트리와 페이지 간의 상하 관계 및 이동 경로 구조도를 설계합니다.
            </p>
          </div>

          <div className="p-5 rounded-2xl apple-glass-card apple-card-hover">
            <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 dark:text-white">
              <FileText className="w-5 h-5 text-emerald-500" />
              <span>3) 화면설계서 (Storyboard/SB)</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              버튼 클릭 시 어떤 레이어 팝업이 뜨는지 디테일한 동작 설명(Description)을 기록합니다.
            </p>
          </div>

          <div className="p-5 rounded-2xl apple-glass-card apple-card-hover">
            <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 dark:text-white">
              <Calendar className="w-5 h-5 text-amber-500" />
              <span>4) WBS 및 프로젝트 리딩</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              디자이너, 퍼블리셔, 개발자의 일정 현황을 파악하고 마일스톤을 관리합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: IA & SB */}
      <section id="ia" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          2. 정보구조도(IA)와 화면설계서(SB)
        </h2>

        <p className="text-slate-700 dark:text-slate-300">
          <strong>IA (Information Architecture)</strong>는 사이트맵(Sitemap) 역할을 수행하며, 
          <strong>화면설계서 (Storyboard)</strong>는 레이아웃과 UI 요소에 대한 명세서 역할을 수행합니다.
        </p>

        <Callout type="tip" title="기획 팁: 와이어프레임(Wireframe)과 스토리보드(SB)">
          와이어프레임은 화면 구성 요소의 배치에 집중하고, 스토리보드(SB)는 그 배치 위에 "버튼 A 클릭 시 로그인 팝업 호출" 등의 <strong>세부 기능 설명(Description)</strong>을 덧붙인 최종 문서입니다.
        </Callout>
      </section>

      {/* Section 3: WBS & Schedule Management */}
      <section id="wbs" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          3. WBS 및 프로젝트 일정 관리
        </h2>

        <p className="text-slate-700 dark:text-slate-300">
          <strong>WBS (Work Breakdown Structure)</strong>는 프로젝트를 잘게 나누어 담당자와 일정을 한눈에 파악할 수 있는 작업 일정표입니다. 기획 ➔ 디자인 ➔ 퍼블리싱 ➔ 개발 순서대로 진행 상황을 관리합니다.
        </p>
      </section>

      {/* Section 4: Live Interactive Sandbox */}
      <section id="live-demo" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          4. 실습: 나만의 와이어프레임(화면설계서) 구성하기
        </h2>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          버튼을 눌러 웹 페이지의 와이어프레임 요소를 직접 추가해보세요! 
        </p>

        <div className="not-prose my-6 p-6 rounded-3xl border border-slate-200/80 dark:border-white/10 bg-slate-900/95 dark:bg-slate-950/90 text-slate-100 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
            <span className="font-bold text-sm text-cyan-400">화면설계서(Wireframe) 빌더 실습</span>
            <span className="text-xs text-slate-400">요소 개수: {elements.length}개</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => addElement('header', '상단 헤더')}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs flex items-center gap-1 apple-btn cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5 text-cyan-400" /> 헤더 추가
            </button>
            <button
              onClick={() => addElement('banner', '메인 서비스 카드')}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs flex items-center gap-1 apple-btn cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5 text-purple-400" /> 카드 블록 추가
            </button>
            <button
              onClick={() => addElement('button', 'CTA 신청 버튼')}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs flex items-center gap-1 apple-btn cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5 text-emerald-400" /> 버튼 요소 추가
            </button>
          </div>

          {/* Wireframe Preview Canvas */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 min-h-[200px] space-y-2">
            {elements.map((item) => (
              <div
                key={item.id}
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs animate-in fade-in"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  <span className="font-semibold text-slate-200">{item.title}</span>
                  <span className="text-[10px] text-slate-500 font-mono">[{item.type}]</span>
                </div>
                <button
                  onClick={() => removeElement(item.id)}
                  className="text-slate-500 hover:text-rose-400 p-1 apple-btn cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Quiz */}
      <section id="quiz" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          5. 기획 이해도 확인 퀴즈
        </h2>

        <QuizCard
          question="화면의 기능 배치와 버튼 클릭 시 동적 설명(Description)을 작성하는 종합 기획 문서를 무엇이라 부르나요?"
          options={[
            "1) 데이터베이스 테이블 명세서",
            "2) 화면설계서 (Storyboard / SB)",
            "3) CSS 스타일시트 문서",
            "4) Git 소스 코드 커밋 로그"
          ]}
          correctAnswerIndex={1}
          explanation="화면설계서(Storyboard/SB)는 와이어프레임 구조와 상세한 설명(Description)을 함께 기록하여 디자이너와 개발자가 제작 지침으로 삼는 문서입니다."
        />
      </section>

      {/* Section 6: Summary */}
      <section id="summary" className="scroll-mt-24 pt-6 border-t border-slate-200/80 dark:border-white/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 not-prose">
          <button
            onClick={() => {
              triggerHaptic('light');
              onSelectRoute('/');
            }}
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 font-semibold text-sm flex items-center justify-center gap-2 transition-all apple-btn cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>이전: 학습 개요</span>
          </button>

          <button
            onClick={() => {
              triggerHaptic('medium');
              onSelectRoute('/learn/design');
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all apple-btn cursor-pointer"
          >
            <span>다음: 2. 웹 디자인 & UI/UX 배우기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </article>
  );
}
