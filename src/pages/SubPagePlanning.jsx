import React, { useState } from 'react';
import Callout from '../components/Callout';
import QuizCard from '../components/QuizCard';
import { 
  ArrowLeft, 
  ArrowRight, 
  FileText, 
  Layout, 
  ListChecks, 
  Calendar, 
  CheckSquare, 
  Plus, 
  Trash2, 
  Sparkles,
  Map,
  Compass,
  AlertTriangle,
  Lightbulb,
  CheckCircle2
} from 'lucide-react';
import { triggerHaptic } from '../utils/appleHaptics';

export default function SubPagePlanning({ onSelectRoute }) {
  // Interactive Wireframe Element Builder State
  const [elements, setElements] = useState([
    { id: 1, type: 'header', title: '상단 헤더 (로고 & 메뉴)' },
    { id: 2, type: 'banner', title: '메인 홍보 배너 (핵심 문구)' },
    { id: 3, type: 'button', title: '무료로 시작하기 CTA 버튼' },
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
    <article className="prose prose-slate dark:prose-invert max-w-none w-full animate-page-entry text-base">
      {/* Page Header Metadata */}
      <div className="border-b border-slate-200/80 dark:border-white/10 pb-6 mb-8">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
          <span>1. 웹 기획 & PM</span>
          <span>/</span>
          <span>기획의 첫걸음</span>
          <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/20 text-[11px] font-bold">
            초보자 가이드
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 flex items-center gap-3">
          <Layout className="w-8 h-8 text-cyan-500 shrink-0" />
          웹 기획이란? (Web Planning & PM)
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          <strong>"설계도 없이 집을 지으면 벽이 무너집니다!"</strong><br />
          웹 기획은 코딩이나 디자인을 시작하기 전에 <strong>"누구를 위해 어떤 화면과 기능을 만들 것인가?"</strong>를 꼼꼼하게 정리하는 웹 제작의 첫 번째 설계 단계입니다.
        </p>
      </div>

      {/* Section 0: Overview */}
      <section id="overview" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2 flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-amber-500" />
          개요: 기획자가 없으면 무슨 일이 일어날까요?
        </h2>
        
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          만약 기획서 없이 바로 개발을 시작하면 어떻게 될까요? 
          디자이너는 '빨간색 쇼핑몰'을 생각하고, 개발자는 '파란색 게시판'을 코딩해서 서로 엉뚱한 결과물을 만들게 됩니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
          <div className="p-5 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-slate-800 dark:text-slate-200">
            <div className="font-bold text-rose-600 dark:text-rose-400 mb-2 flex items-center gap-2 text-base">
              <AlertTriangle className="w-5 h-5" /> ❌ 기획서가 없을 때
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              "어? 이 버튼 누르면 어디로 가요?"<br />
              "결제 실패하면 무슨 창이 뜨나요?"<br />
              ➔ 정해진 규칙이 없어서 코드를 다 뜯어고치는 대참사가 발생합니다.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-slate-800 dark:text-slate-200">
            <div className="font-bold text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-2 text-base">
              <CheckSquare className="w-5 h-5" /> ⭕ 친절한 기획서가 있을 때
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              "버튼을 누르면 0.3초 뒤 결제 팝업이 뜨고, 잔액 부족 시 붉은색 알림을 띄운다!"<br />
              ➔ 디자이너와 개발자가 헷갈림 없이 한 번에 완벽한 결과물을 만듭니다.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Role */}
      <section id="role" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2 flex items-center gap-2">
          <Compass className="w-6 h-6 text-cyan-500" />
          1. 웹 기획자의 4가지 핵심 무기
        </h2>

        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          웹 기획자는 아이디어를 현실로 만들기 위해 다음 4가지 핵심 문서를 작성합니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
          <div className="p-5 rounded-2xl apple-glass-card border border-slate-200/60 dark:border-white/10 hover:border-cyan-500/40 transition-all">
            <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 dark:text-white text-base">
              <ListChecks className="w-5 h-5 text-cyan-500" />
              <span>1) 요구사항 정의서</span>
            </div>
            <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400 mb-1">💡 기능 목록 메뉴판</div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              "우리 서비스에는 회원가입, 상품 검색, 장바구니, 카카오페이 결제 기능이 꼭 필요합니다"라고 모든 기능을 목록으로 정리합니다.
            </p>
          </div>

          <div className="p-5 rounded-2xl apple-glass-card border border-slate-200/60 dark:border-white/10 hover:border-purple-500/40 transition-all">
            <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 dark:text-white text-base">
              <Map className="w-5 h-5 text-purple-500" />
              <span>2) 정보구조도 (IA)</span>
            </div>
            <div className="text-xs font-bold text-purple-600 dark:text-purple-400 mb-1">💡 웹사이트 층별 안내도</div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              백화점 1층엔 화장품, 2층엔 의류가 있듯이 메뉴와 페이지들의 계층 구조(상하 관계 및 이동 경로)를 트리 형태로 그립니다.
            </p>
          </div>

          <div className="p-5 rounded-2xl apple-glass-card border border-slate-200/60 dark:border-white/10 hover:border-emerald-500/40 transition-all">
            <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 dark:text-white text-base">
              <FileText className="w-5 h-5 text-emerald-500" />
              <span>3) 화면설계서 (Storyboard/SB)</span>
            </div>
            <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-1">💡 화면 배치도 + 상세 사용설명서</div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              화면의 대략적인 버튼 위치(와이어프레임)를 잡고, 그 옆에 "버튼 클릭 시 무슨 일이 일어나는가"를 상세히 적어둡니다.
            </p>
          </div>

          <div className="p-5 rounded-2xl apple-glass-card border border-slate-200/60 dark:border-white/10 hover:border-amber-500/40 transition-all">
            <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 dark:text-white text-base">
              <Calendar className="w-5 h-5 text-amber-500" />
              <span>4) WBS (일정 관리표)</span>
            </div>
            <div className="text-xs font-bold text-amber-600 dark:text-amber-400 mb-1">💡 프로젝트 진행 달력</div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              "기획은 1~2주차, 디자인은 3~4주차, 개발은 5~7주차"처럼 팀원들이 마감일을 맞출 수 있도록 일정을 조율합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: IA & SB */}
      <section id="ia" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          2. 와이어프레임 vs 화면설계서(스토리보드) 차이
        </h2>

        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          초보자가 가장 많이 헷갈려하는 두 단어의 차이를 비유로 쉽게 알아볼까요?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
          <div className="p-5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <div className="font-bold text-sm text-cyan-600 dark:text-cyan-400 mb-1">
              📐 와이어프레임 (Wireframe)
            </div>
            <div className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
              "화면 뼈대 스케치"
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              선과 상자만으로 "여기에 로고가 들어가고, 가운데에 검색창이 있고, 아래에 버튼이 들어간다"는 <strong>위치 배치</strong>에 집중합니다.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-purple-500/30">
            <div className="font-bold text-sm text-purple-600 dark:text-purple-400 mb-1">
              📋 화면설계서 (Storyboard / SB)
            </div>
            <div className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
              "스케치 + 친절한 설명서 (Description)"
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              스케치 옆에 <strong>"검색창에 글자를 안 치고 검색을 누르면 '검색어를 입력해주세요' 알림창을 띄운다"</strong>처럼 모든 동작 규칙을 덧붙인 최종 문서입니다.
            </p>
          </div>
        </div>

        <Callout type="tip" title="기획자의 핵심 마인드">
          기획서는 '예쁘게 그리는 그림'이 아니라 <strong>'누구나 읽고 오해 없이 같은 동작을 만들 수 있게 돕는 명확한 소통 도구'</strong>입니다.
        </Callout>
      </section>

      {/* Section 3: WBS & Schedule Management */}
      <section id="wbs" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          3. WBS (작업 분할 구조도 & 일정표)
        </h2>

        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          <strong>WBS (Work Breakdown Structure)</strong>는 거대한 프로젝트를 작은 조각으로 쪼개어, 누가 무엇을 언제까지 만들지 달력 형태로 정리한 일정표입니다.
        </p>

        <div className="p-5 rounded-2xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 not-prose my-4">
          <div className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 mb-2">📅 WBS 실무 흐름 예시</div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-xs font-semibold">
            <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-cyan-600 font-bold block mb-1">1단계: 기획 (2주)</span>
              화면설계서 및 정책 확정
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-pink-600 font-bold block mb-1">2단계: 디자인 (2주)</span>
              피그마 UI 시안 및 아이콘 완성
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-purple-600 font-bold block mb-1">3단계: 퍼블리싱 (2주)</span>
              HTML/CSS 반응형 웹 마크업
            </div>
            <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-emerald-600 font-bold block mb-1">4단계: 개발 & QA (3주)</span>
              API/DB 연동 및 테스트
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Live Interactive Sandbox */}
      <section id="live-demo" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          4. 실습: 나만의 와이어프레임(화면 배치) 만들기
        </h2>

        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          버튼을 눌러 웹 페이지에 필요한 요소들을 직접 블록처럼 쌓아보며 기획자가 화면을 구성하는 느낌을 체험해보세요!
        </p>

        <div className="not-prose my-6 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-[#f8f9fa] dark:bg-[#1c1d22] text-slate-800 dark:text-slate-100 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-3 mb-4">
            <span className="font-bold text-sm sm:text-base text-cyan-600 dark:text-cyan-400">화면설계서(Wireframe) 빌더 실습</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">배치된 요소: {elements.length}개</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => addElement('header', '상단 헤더 (로고 & 메뉴)')}
              className="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white font-medium text-xs flex items-center gap-1.5 apple-btn cursor-pointer shadow-xs hover:border-cyan-500"
            >
              <Plus className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" /> 헤더 추가
            </button>
            <button
              onClick={() => addElement('banner', '메인 서비스 카드 배너')}
              className="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white font-medium text-xs flex items-center gap-1.5 apple-btn cursor-pointer shadow-xs hover:border-purple-500"
            >
              <Plus className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" /> 카드 블록 추가
            </button>
            <button
              onClick={() => addElement('button', '무료 신청 CTA 버튼')}
              className="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white font-medium text-xs flex items-center gap-1.5 apple-btn cursor-pointer shadow-xs hover:border-emerald-500"
            >
              <Plus className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> 버튼 요소 추가
            </button>
          </div>

          {/* Wireframe Preview Canvas */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 min-h-[180px] space-y-2">
            {elements.length === 0 ? (
              <div className="text-center py-8 text-xs text-slate-400">
                위의 버튼을 눌러 화면 요소를 추가해보세요!
              </div>
            ) : (
              elements.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs animate-in fade-in"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{item.title}</span>
                    <span className="text-[10px] text-slate-400 font-mono">[{item.type}]</span>
                  </div>
                  <button
                    onClick={() => removeElement(item.id)}
                    className="text-slate-400 hover:text-rose-500 p-1 apple-btn cursor-pointer"
                    title="요소 삭제"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Section 5: Quiz */}
      <section id="quiz" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          5. 기획 이해도 확인 퀴즈
        </h2>

        <QuizCard
          question="화면의 버튼 배치 스케치(와이어프레임) 위에 '버튼 클릭 시 일어나는 세부 동작 설명(Description)'을 함께 작성하는 종합 기획 문서를 무엇이라 부르나요?"
          options={[
            "1) 데이터베이스 테이블 명세서",
            "2) 화면설계서 (Storyboard / SB)",
            "3) CSS 스타일시트 문서",
            "4) Git 소스 코드 커밋 로그"
          ]}
          correctAnswerIndex={1}
          explanation="정답입니다! 화면설계서(Storyboard/SB)는 화면 구조와 상세한 설명(Description)을 함께 기록하여 디자이너와 개발자가 제작 지침으로 삼는 최종 설계도입니다."
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
            className="w-full sm:w-auto px-5 py-3 rounded-2xl border border-slate-300 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 font-semibold text-sm flex items-center justify-center gap-2 transition-all apple-btn cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>이전: 학습 개요</span>
          </button>

          <button
            onClick={() => {
              triggerHaptic('medium');
              onSelectRoute('/learn/design');
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all apple-btn cursor-pointer"
          >
            <span>다음: 2. 웹 디자인 & UI/UX 배우기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </article>
  );
}
