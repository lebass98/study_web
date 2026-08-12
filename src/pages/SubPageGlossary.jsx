import React, { useState } from 'react';
import Callout from '../components/Callout';
import { Search, BookOpen, Filter, Check, Copy, ArrowLeft, ArrowRight, Layers, FileText, Palette, Code, Server } from 'lucide-react';
import { triggerHaptic } from '../utils/appleHaptics';

export default function SubPageGlossary({ onSelectRoute }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [copiedId, setCopiedId] = useState(null);

  const termsList = [
    // 1. 기획 & PM 용어
    {
      id: 'ia',
      category: 'planning',
      categoryLabel: '기획 & PM',
      title: 'IA (Information Architecture - 정보구조도)',
      def: '웹 사이트의 전체 서비스 메뉴 구조와 페이지 간 계층 상하 관계를 트리 형태로 작성한 지도 문서.',
      example: '쇼핑몰 상단 메뉴: [대분류: 의류 ➔ 중분류: 상의 ➔ 소분류: 셔츠]'
    },
    {
      id: 'wireframe',
      category: 'planning',
      categoryLabel: '기획 & PM',
      title: '와이어프레임 (Wireframe)',
      def: '색상이나 디자인 요소 없이 선(Line)과 상자(Box)만으로 화면의 뼈대와 버튼 배치를 그린 윤곽 도면.',
      example: '상단에는 로고 상자, 중간에는 상품 이미지 상자, 하단에는 구매 버튼 상자 배치'
    },
    {
      id: 'sb',
      category: 'planning',
      categoryLabel: '기획 & PM',
      title: '화면설계서 (Storyboard / SB)',
      def: '와이어프레임 화면 그림 옆에 버튼 클릭 시 일어나는 세부 동작(Description)을 상세히 기록한 최종 기획 명세서.',
      example: '[설명]: 구매 버튼 클릭 시 사용자 로그인 상태 검증 후 결제 팝업 띄움'
    },
    {
      id: 'wbs',
      category: 'planning',
      categoryLabel: '기획 & PM',
      title: 'WBS (Work Breakdown Structure - 작업분할구조도)',
      def: '프로젝트 전체 일정을 단위 작업별로 나누어 담당자, 시작일, 종료일, 진행률을 타임라인 표로 작성한 일정 관리표.',
      example: '기획: 8/1~8/10, 디자인: 8/11~8/20, 퍼블리싱: 8/21~8/30'
    },
    {
      id: 'rfp',
      category: 'planning',
      categoryLabel: '기획 & PM',
      title: 'RFP (Request for Proposal - 제안요청서)',
      def: '고객사(발주처)가 외주 개발사에게 "이러한 웹사이트를 만들어주세요"라고 요구 조건과 예산을 담아 보내는 문서.',
      example: '쇼핑몰 제작을 위해 3개 개발사에 RFP 발송 및 제안서 수령'
    },
    // PM 아카데미 심화 용어 (Notion)
    {
      id: 'request-requirement',
      category: 'planning',
      categoryLabel: '기획 & PM',
      title: 'Request vs Requirement (요청 vs 요구사항)',
      def: 'Request는 고객/이해관계자가 수단으로 제시하는 단순 요청, Requirement는 요청의 숨은 의도를 분석하여 문제, 정책, 예외 흐름, 성공 기준을 명세한 요구사항.',
      example: '요청: "채팅 기능 넣어주세요" ➔ 요구사항: "사용자 이탈률 30% 방지를 위한 1:1 라이브 문의 인터페이스 명세"'
    },
    {
      id: 'user-story',
      category: 'planning',
      categoryLabel: '기획 & PM',
      title: 'User Story (유저 스토리)',
      def: '"As a [사용자], I want [행동], So that [얻고 싶은 가치]" 구조로 사용자 관점에서 기능의 필요 목적과 가치를 정의하는 문장.',
      example: '"배달 고객으로서, 최저가 쿠폰이 자동 적용되길 원한다. 그래야 번거로움 없이 빠른 결제가 가능하기 때문이다."'
    },
    {
      id: 'ac',
      category: 'planning',
      categoryLabel: '기획 & PM',
      title: 'Acceptance Criteria (AC - 인수 조건)',
      def: '개발 및 QA팀이 기능의 완성을 객관적으로 판단하고 테스트할 수 있는 성공/실패 기준 명세 (Given-When-Then).',
      example: 'Given 장바구니 쿠폰 2개 이상일 때, When 주문서 진입 시, Then 최고 할인 쿠폰 자동 선택'
    },
    {
      id: 'boundary-case',
      category: 'planning',
      categoryLabel: '기획 & PM',
      title: 'Boundary Case (경계 예외 조건 / 엣지 케이스)',
      def: '정상 성공 흐름과 일반 실패 흐름 사이의 애매한 경계 상황 조건. 개발자 임의 판단 방지 및 QA 테스트의 필수 기준.',
      example: '인증 유효시간(5분) 경계인 4분 59초 입력 시 성공 여부, 1초 간격 10회 연속 버튼 클릭 시 재발송 정책'
    },
    {
      id: 'voc',
      category: 'planning',
      categoryLabel: '기획 & PM',
      title: 'VOC (Voice of Customer - 고객의 소리)',
      def: '고객이 서비스 이용 과정에서 실제로 겪은 불만이나 의견. PM은 VOC를 데이터 지표와 결합해 최우선 과제를 발굴.',
      example: 'VOC: "로그인이 안 돼요!" ➔ PM 분석: 특정 앱 버전에서 세션 만료시간 오류로 인한 결제 이탈률 42% 증가 확인'
    },
    {
      id: 'prd',
      category: 'planning',
      categoryLabel: '기획 & PM',
      title: 'PRD (Product Requirement Document - 제품 요구사항 문서)',
      def: '제품 개발의 배경, 문제 정의, 목표 지표, User Story, 핵심 요구사항, AC, 성공 지표를 종합 정리한 팀의 핵심 의사결정 문서.',
      example: '전화 문의 비중을 70%에서 30%로 감축하기 위한 온라인 날짜/시간 예약 시스템 PRD 작성'
    },
    {
      id: 'rice',
      category: 'planning',
      categoryLabel: '기획 & PM',
      title: 'RICE Framework (RICE 우선순위 계산법)',
      def: 'PM이 기능 개발의 우선순위를 객관적으로 산출하는 공식: RICE Score = (Reach × Impact × Confidence) / Effort',
      example: 'Reach(1000명) × Impact(3점) × Confidence(80%) / Effort(2개월) = 1,200점'
    },
    {
      id: 'impact-effort',
      category: 'planning',
      categoryLabel: '기획 & PM',
      title: 'Impact / Effort Matrix (영향도 / 난이도 행렬)',
      def: '사용자 및 비즈니스 영향도(Impact)와 개발 난이도/공수(Effort)를 4분면에 매핑하여 Quick Win(적은 공수·높은 효과) 우선순위를 선정하는 기법.',
      example: '로그인 오류 수정: 높은 영향도 + 적은 공수 ➔ 1순위 개발 배치'
    },
    {
      id: 'po-vs-pm',
      category: 'planning',
      categoryLabel: '기획 & PM',
      title: 'PO vs PM (Product Owner vs Product Manager)',
      def: 'PO는 제품 비전과 백로그 수립("어디로 갈 것인가"), PM은 문제 정의 및 요구사항 명세("어떻게 실행할 것인가")에 집중.',
      example: 'PO: "이번 분기 결제 전환율 20% 달성 목표 설정" ➔ PM: "쿠폰 자동 적용 및 결제 동선 단축 요구사항 명세"'
    },
    {
      id: 'happy-exception-flow',
      category: 'planning',
      categoryLabel: '기획 & PM',
      title: 'Happy Path vs Exception Flow (정상 흐름 vs 예외 흐름)',
      def: 'Happy Path는 오류 없이 진행되는 정상 시나리오, Exception Flow는 네트워크 단절, 입력 오류 등 예외 시의 팝업 및 복구 흐름.',
      example: 'Happy Path: 이메일 입력 ➔ 인증번호 수신 ➔ 성공 / Exception Flow: 미등록 이메일 ➔ "가입되지 않은 이메일" 안내'
    },
    {
      id: 'mvp',
      category: 'planning',
      categoryLabel: '기획 & PM',
      title: 'MVP (Minimum Viable Product - 최소 기능 제품)',
      def: '사용자에게 핵심 가치를 제공하는 최소한의 기능만을 구현하여 시장과 고객의 반응을 빠르게 테스트하는 초기 제품.',
      example: '복잡한 AI 추천 시스템 대신, 인기도 순 상품 나열 기능만으로 먼저 출시하여 구매 전환율 검증'
    },
    {
      id: 'kpi-nsm',
      category: 'planning',
      categoryLabel: '기획 & PM',
      title: 'KPI & North Star Metric (핵심 성과 지표 & 북극성 지표)',
      def: 'KPI는 기능/팀 단위의 성과 지표, 북극성 지표(North Star Metric)는 제품 전체가 고객에게 제공하는 장기적 핵심 가치 지표.',
      example: '북극성 지표: "주간 1회 이상 주문 완료 사용자 수", KPI: "장바구니 결제 전환율 15%"'
    },
    {
      id: 'funnel-retention',
      category: 'planning',
      categoryLabel: '기획 & PM',
      title: 'Funnel & Retention (퍼널 분석 & 재방문율)',
      def: 'Funnel은 유입부터 결제까지 단계별 사용자 이탈률 분석, Retention은 사용자가 일정 기간 후 다시 서비스를 방문하는 비율.',
      example: '메인(100명) ➔ 상세(60명) ➔ 장바구니(30명) ➔ 결제(15명) 퍼널 이탈 구간 집중 개선'
    },
    {
      id: 'jwt-oauth',
      category: 'dev',
      categoryLabel: '개발 & API',
      title: 'JWT & OAuth (인증 토큰 & 소셜 로그인)',
      def: 'JWT는 로그인 상태를 암호화된 토큰으로 안전하게 전달하는 방식, OAuth는 카카오/네이버 계정으로 간편 가입을 지원하는 프로토콜.',
      example: '카카오 1초 로그인(OAuth) 성공 후 전달받은 JWT 토큰으로 사용자 세션 유지'
    },

    // 2. 디자인 & UI/UX 용어
    {
      id: 'ui',
      category: 'design',
      categoryLabel: '디자인 & UI/UX',
      title: 'UI (User Interface - 사용자 인터페이스)',
      def: '버튼, 폰트, 색상, 아이콘, 이미지 레이아웃 등 사용자가 브라우저 화면에서 눈으로 보는 모든 시각적 요소.',
      example: '파란색 rounded-xl 구매 버튼, 굵은 24px 제목 텍스트'
    },
    {
      id: 'ux',
      category: 'design',
      categoryLabel: '디자인 & UI/UX',
      title: 'UX (User Experience - 사용자 경험)',
      def: '사용자가 웹 서비스를 이용하면서 느끼는 편리함, 직관성, 만족도 등 전체적인 사용 경험.',
      example: '결제 단계를 3단계에서 1클릭 간편 결제로 줄여 사용자 만족도 향상'
    },
    {
      id: 'design-token',
      category: 'design',
      categoryLabel: '디자인 & UI/UX',
      title: '디자인 토큰 (Design Tokens)',
      def: '색상 코드(#087ea4), 폰트 크기(16px), 여백(24px) 등 브랜드 규격을 코드 변수로 정의한 최상위 디자인 단위.',
      example: 'primary-color: #087ea4, font-size-lg: 18px'
    },
    {
      id: 'responsive',
      category: 'design',
      categoryLabel: '디자인 & UI/UX',
      title: '반응형 디자인 (Responsive Web Design)',
      def: 'PC, 태블릿, 모바일 등 사용자의 화면 크기(해상도)에 따라 화면 레이아웃이 자동으로 최적화되어 변하는 디자인.',
      example: 'PC에서는 4열 카드가 모바일 화면에서는 1열 세로 카드로 자동 정렬'
    },
    {
      id: 'comp',
      category: 'design',
      categoryLabel: '디자인 & UI/UX',
      title: '디자인 시안 (Comp / Cut)',
      def: '와이어프레임을 바탕으로 Figma나 PhotoShop으로 완성한 실제 그래픽 결과물 정밀 완성본.',
      example: '디자이너가 완성한 메인 페이지 피그마(Figma) 최종 렌더링 시안'
    },

    // 3. 퍼블리싱 용어
    {
      id: 'html',
      category: 'publishing',
      categoryLabel: '퍼블리싱',
      title: 'HTML (HyperText Markup Language)',
      def: '웹 페이지의 뼈대와 텍스트, 이미지, 버튼 등 무엇이 어디에 있는가를 정의하는 구조 언어.',
      example: '<h1>제목</h1>, <button>버튼</button>, <img src="..." />'
    },
    {
      id: 'css',
      category: 'publishing',
      categoryLabel: '퍼블리싱',
      title: 'CSS (Cascading Style Sheets)',
      def: 'HTML로 만든 웹 뼈대에 색상, 글자 크기, 여백, 정렬, 애니메이션 등의 디자인 옷을 입히는 스타일 언어.',
      example: 'color: #087ea4; font-size: 16px; border-radius: 8px;'
    },
    {
      id: 'flexbox',
      category: 'publishing',
      categoryLabel: '퍼블리싱',
      title: 'Flexbox (Flexible Box Layout)',
      def: '요소들을 가로 또는 세로 방향으로 유연하게 정렬하고 간격을 나눌 때 사용하는 1차원 CSS 레이아웃 규칙.',
      example: 'display: flex; justify-content: space-between; align-items: center;'
    },
    {
      id: 'dom',
      category: 'publishing',
      categoryLabel: '퍼블리싱',
      title: 'DOM (Document Object Model)',
      def: '브라우저가 HTML 문서를 트리 구조 개체로 변환하여 JavaScript가 화면 요소를 마음대로 조작할 수 있게 만든 객체 모델.',
      example: 'document.getElementById("btn").style.color = "red";'
    },
    {
      id: 'web-standards',
      category: 'publishing',
      categoryLabel: '퍼블리싱',
      title: '웹 표준 & 웹 접근성 (Web Standards & A11y)',
      def: '어떤 브라우저(Chrome, Safari 등)나 장애를 가진 사용자(시각장애인 스크린리더 등)도 차별 없이 웹을 이용할 수 있도록 보장하는 규격.',
      example: '이미지에 alt="상품 설명" 대체 텍스트를 필수 작성하여 스크린리더 지원'
    },

    // 4. 개발 & API/DB 용어
    {
      id: 'frontend',
      category: 'dev',
      categoryLabel: '개발 & API',
      title: '프론트엔드 (Frontend)',
      def: '사용자가 브라우저에서 직접 보고 조작하는 영역 (HTML, CSS, JavaScript, React 등).',
      example: '버튼 클릭 시 화면 팝업 열기 및 서버 API 요청 처리'
    },
    {
      id: 'backend',
      category: 'dev',
      categoryLabel: '개발 & API',
      title: '백엔드 (Backend)',
      def: '눈에 보이지 않는 서버 영역에서 비즈니스 로직, 회원 인증, 결제, 데이터베이스 저장 처리를 수행하는 개발.',
      example: 'Node.js/Java/Python 서버가 로그인 요청을 받아 비밀번호 검증 후 응답'
    },
    {
      id: 'client-server',
      category: 'dev',
      categoryLabel: '개발 & API',
      title: '클라이언트 (Client) & 서버 (Server)',
      def: '클라이언트는 서비스를 요청하는 쪽(브라우저/앱), 서버는 그 요청을 받아 데이터를 전달해주는 컴퓨터.',
      example: '브라우저(클라이언트)가 주소를 치면 서버가 해당 웹 사이트 파일 전달'
    },
    {
      id: 'api',
      category: 'dev',
      categoryLabel: '개발 & API',
      title: 'API (Application Programming Interface) / REST API',
      def: '클라이언트와 서버가 서로 정해진 규칙에 따라 요청과 응답 데이터를 주고받는 창구 및 규격 메뉴판.',
      example: 'GET /api/products (상품 목록 불러오기 API 요청)'
    },
    {
      id: 'json',
      category: 'dev',
      categoryLabel: '개발 & API',
      title: 'JSON (JavaScript Object Notation)',
      def: '클라이언트와 서버가 데이터를 주고받을 때 사용하는 사람이 읽기 쉽고 가벼운 Key: Value 구조의 텍스트 포맷.',
      example: '{ "name": "여름 셔츠", "price": 29000, "inStock": true }'
    },
    {
      id: 'database',
      category: 'dev',
      categoryLabel: '개발 & API',
      title: '데이터베이스 (Database / DB & SQL)',
      def: '회원 정보, 상품 목록, 게시글 등의 데이터들을 안전하고 구조적으로 저장·관리하는 시스템.',
      example: 'MySQL, PostgreSQL, MongoDB에 회원 데이터 영구 저장'
    },
    {
      id: 'crud',
      category: 'dev',
      categoryLabel: '개발 & API',
      title: 'CRUD (Create, Read, Update, Delete)',
      def: '모든 데이터 처리 기능의 4가지 기본 단위: 생성(Create), 조회(Read), 수정(Update), 삭제(Delete).',
      example: '게시글 작성(C), 게시글 보기(R), 게시글 수정(U), 게시글 삭제(D)'
    }
  ];

  const handleCopyTerm = (term) => {
    triggerHaptic('light');
    const text = `${term.title}\n정의: ${term.def}\n예시: ${term.example}`;
    navigator.clipboard.writeText(text);
    setCopiedId(term.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredTerms = termsList.filter(item => {
    const matchCat = activeCategory === 'all' || item.category === activeCategory;
    const matchSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.def.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.example.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <article className="prose prose-slate dark:prose-invert max-w-none w-full animate-page-entry text-base">
      {/* Page Header Metadata */}
      <div className="border-b border-slate-200/80 dark:border-white/10 pb-6 mb-8">
        <div className="flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
          <span>5. 용어 정리</span>
          <span>/</span>
          <span>웹 핵심 용어 사전</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          웹 개발 용어 정리 사전 (Web Glossary)
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          웹 서비스를 만들 때 기획자, 디자이너, 퍼블리셔, 개발자가 매일 사용하는 핵심 실무 용어만 깔끔하게 정리했습니다.
        </p>
      </div>

      {/* Section 1: Search & Filter Controls */}
      <section id="overview" className="scroll-mt-24 mb-10 not-prose">
        <div className="p-5 sm:p-6 rounded-3xl apple-glass-card space-y-4">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="용어 검색 (예: IA, 와이어프레임, API, UI, HTML...)"
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-base text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-all duration-200"
            />
          </div>

          {/* Filter Category Chips */}
          <div className="flex flex-wrap items-center gap-2.5">
            {[
              { id: 'all', label: '전체 보기', icon: BookOpen },
              { id: 'planning', label: '기획 & PM', icon: FileText },
              { id: 'design', label: '디자인 & UI/UX', icon: Palette },
              { id: 'publishing', label: '퍼블리싱 (HTML/CSS)', icon: Code },
              { id: 'dev', label: '개발 & API/DB', icon: Server },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  triggerHaptic('light');
                  setActiveCategory(cat.id);
                }}
                className={`px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all apple-btn cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-cyan-600 text-white shadow-md scale-105'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-cyan-500'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Terms List Grid with Smooth Cards */}
      <section className="mb-14 not-prose">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
            등록된 웹 전문 용어 ({filteredTerms.length}개)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredTerms.map((term) => {
            const isCopied = copiedId === term.id;
            return (
              <div
                key={term.id}
                id={`${term.category}-terms`}
                className="p-6 rounded-3xl apple-glass-card apple-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                      {term.categoryLabel}
                    </span>

                    <button
                      onClick={() => handleCopyTerm(term)}
                      className="p-1.5 text-slate-400 hover:text-cyan-500 rounded-xl transition-colors text-xs flex items-center gap-1.5 apple-btn cursor-pointer"
                      title="용어 설명 복사"
                    >
                      {isCopied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                      <span className="text-xs">{isCopied ? '복사됨' : '복사'}</span>
                    </button>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-2.5">
                    {term.title}
                  </h3>

                  <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    {term.def}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/90 dark:bg-slate-950/80 border border-slate-200/80 dark:border-white/10 text-sm leading-relaxed">
                  <span className="font-bold text-cyan-600 dark:text-cyan-400 mr-1.5">💡 예시:</span>
                  <span className="text-slate-700 dark:text-slate-300">{term.example}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 3: Summary & Pagination */}
      <section id="summary" className="scroll-mt-24 pt-6 border-t border-slate-200/80 dark:border-white/10">
        <Callout type="tip" title="용어 사전을 필요할 때마다 검색해보세요">
          상단 네비게이션 검색창(<code className="font-mono text-sm">Cmd + K</code>)에서도 전체 용어를 즉시 검색하실 수 있습니다.
        </Callout>

        <div className="mt-8 flex justify-between not-prose">
          <button
            onClick={() => {
              triggerHaptic('light');
              onSelectRoute('/learn/dev');
            }}
            className="px-5 py-3 rounded-xl border border-slate-300 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 font-semibold text-base flex items-center justify-center gap-2 transition-all apple-btn cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>이전: 4. 웹 개발</span>
          </button>

          <button
            onClick={() => {
              triggerHaptic('medium');
              onSelectRoute('/');
            }}
            className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-base shadow-md flex items-center justify-center gap-2 transition-all apple-btn cursor-pointer"
          >
            <span>메인 개요로 돌아가기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </article>
  );
}
