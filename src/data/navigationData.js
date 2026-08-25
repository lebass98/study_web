export const sidebarCategories = [
  {
    id: 'getting-started',
    title: '웹 시작하기',
    items: [
      { id: 'main-overview', title: '학습 개요 (한 줄 요약)', path: '/', badge: '필수', isMain: true },
      { id: 'web-workflow', title: '웹 서비스 6단계 동작 지도', path: '/#workflow' },
      { id: 'what-is-web', title: '웹이란 무엇인가?', path: '/#what-is-web' },
      { id: 'client-server', title: '클라이언트 vs 서버', path: '/#client-server', badge: '기초' },
      { id: 'roles-step', title: '웹 제작 5대 직군 개요', path: '/#roles' },
      { id: 'demo-step', title: '실시간 API/DB 시뮬레이터', path: '/#live-demo' },
      { id: 'main-quiz', title: '웹 기초 상식 퀴즈 10선', path: '/#quiz', badge: '10문항' },
    ]
  },
  {
    id: 'web-planning',
    title: '웹 기획',
    items: [
      { id: 'planning-role', title: '웹 기획자 및 PM의 역할', path: '/learn/planning#role', isMain: true },
      { id: 'ia-wireframe', title: '정보구조도(IA) & 화면설계서(SB)', path: '/learn/planning#ia', badge: '기획' },
      { id: 'wbs-schedule', title: 'WBS 및 프로젝트 일정 관리', path: '/learn/planning#wbs' },
      { id: 'planning-demo', title: '실습: 와이어프레임 빌더', path: '/learn/planning#live-demo' },
      { id: 'planning-quiz', title: '기획 마스터 퀴즈 10선', path: '/learn/planning#quiz', badge: '10문항' },
    ]
  },
  {
    id: 'web-design',
    title: '웹 디자인',
    items: [
      { id: 'design-system', title: '디자인 시스템 (Tokens)', path: '/learn/design#system', badge: '디자인', isMain: true },
      { id: 'figma-collaboration', title: 'Figma 협업 및 시안 전달', path: '/learn/design#figma' },
      { id: 'design-demo', title: '실습: 디자인 토큰 조절기', path: '/learn/design#live-demo' },
      { id: 'design-quiz', title: '디자인 마스터 퀴즈 10선', path: '/learn/design#quiz', badge: '10문항' },
    ]
  },
  {
    id: 'web-publishing',
    title: '웹 퍼블리싱',
    items: [
      { id: 'html-structure', title: 'HTML: 웹의 뼈대와 구조', path: '/learn/publishing#html', badge: '퍼블리싱', isMain: true },
      { id: 'css-styling', title: 'CSS: 디자인과 스타일', path: '/learn/publishing#css' },
      { id: 'responsive-layout', title: '반응형 웹과 Flexbox', path: '/learn/publishing#responsive' },
      { id: 'publishing-demo', title: '실습: HTML/CSS 라이브 코드', path: '/learn/publishing#live-demo' },
      { id: 'publishing-quiz', title: '퍼블리싱 마스터 퀴즈 10선', path: '/learn/publishing#quiz', badge: '10문항' },
    ]
  },
  {
    id: 'web-development',
    title: '웹 개발',
    items: [
      { id: 'javascript-dynamic', title: 'JavaScript: 웹 동적 제어', path: '/learn/dev#js', badge: '개발', isMain: true },
      { id: 'backend-db', title: '백엔드 서버 & DB 역할', path: '/learn/dev#backend' },
      { id: 'api-database', title: 'REST API & DB 통신', path: '/learn/dev#api', badge: '핵심' },
      { id: 'dev-demo', title: '실습: 회원가입 API & DB 연동', path: '/learn/dev#live-demo' },
      { id: 'dev-quiz', title: '개발 마스터 퀴즈 10선', path: '/learn/dev#quiz', badge: '10문항' },
    ]
  },
  {
    id: 'pm-academy',
    title: 'PM 아카데미',
    items: [
      { id: 'pm-academy-main', title: 'PM 아카데미 노트 정리', path: '/learn/pm-academy', badge: 'PM노트', isMain: true },
      { id: 'pm-role-mindset', title: 'PM의 역할과 사고방식', path: '/learn/pm-academy#role-mindset' },
      { id: 'pm-problem-def', title: '문제 정의 & 요구사항', path: '/learn/pm-academy#problem-definition' },
      { id: 'pm-story-ac', title: 'User Story & AC', path: '/learn/pm-academy#user-story-ac' },
      { id: 'pm-boundary-voc', title: 'Boundary Case & VOC', path: '/learn/pm-academy#boundary-voc' },
      { id: 'pm-prd-priority', title: 'PRD & RICE 우선순위', path: '/learn/pm-academy#prd-priority' },
      { id: 'pm-case-study', title: '실무 케이스 분석', path: '/learn/pm-academy#case-study' },
      { id: 'pm-quiz', title: '실전 PM 퀴즈 10선', path: '/learn/pm-academy#quiz', badge: '10문항' },
      { id: 'pm-templates', title: 'PM 템플릿 & 커리큘럼', path: '/learn/pm-academy#templates-curriculum' },
    ]
  },
  {
    id: 'web-glossary',
    title: '웹 용어 정리',
    items: [
      { id: 'glossary-main', title: '용어 사전 사용법', path: '/learn/glossary', badge: '용어사전', isMain: true },
      { id: 'planning-terms', title: '기획 & PM 용어 정리', path: '/learn/glossary#planning-terms' },
      { id: 'design-terms', title: '디자인 & UI/UX 용어 정리', path: '/learn/glossary#design-terms' },
      { id: 'publishing-terms', title: '퍼블리싱 HTML/CSS 용어', path: '/learn/glossary#publishing-terms' },
      { id: 'dev-terms', title: '개발 & API/DB 통신 용어', path: '/learn/glossary#dev-terms' },
    ]
  }
];

export const searchIndex = [
  // 웹 시작하기
  { title: '웹 개발 핵심 개념 개요', category: '웹 시작하기', path: '/', snippet: '웹 통신 구조, 브라우저, 서버, 데이터베이스의 전체 흐름' },
  { title: '웹 서비스 6단계 동작 지도', category: '웹 시작하기', path: '/#workflow', snippet: '사용자 주소 입력부터 브라우저 렌더링까지 6단계 라이프사이클' },
  { title: '웹이란 무엇인가?', category: '웹 시작하기', path: '/#what-is-web', snippet: '인터넷(도로)과 웹(자동차)의 차이 및 전 세계 정보망' },
  { title: '클라이언트 vs 서버 역할 비교', category: '웹 시작하기', path: '/#client-server', snippet: '화면 표시(클라이언트) vs 데이터 처리 및 인증(서버)' },
  { title: '웹 제작 5대 직군 개요', category: '웹 시작하기', path: '/#roles', snippet: '기획, 디자인, 퍼블리셔, 프론트엔드, 백엔드 개발자 협업' },
  { title: '실시간 API/DB 시뮬레이터', category: '웹 시작하기', path: '/#live-demo', snippet: '장바구니 담기 동작을 통한 클라이언트-서버 실시간 데이터 통신 체험' },
  { title: '웹 기초 상식 퀴즈 10선', category: '웹 시작하기', path: '/#quiz', snippet: '웹 개발 핵심 개념과 통신 기초 이해도 테스트' },

  // 웹 기획
  { title: '웹 기획자 및 PM의 핵심 역할', category: '웹 기획', path: '/learn/planning#role', snippet: '요구사항 정의, 비즈니스 목표 수립 및 개발/디자인 조율' },
  { title: '정보구조도(IA) & 화면설계서(SB)', category: '웹 기획', path: '/learn/planning#ia', snippet: '메뉴 구조 트리와 와이어프레임 디스크립션 작성법' },
  { title: 'WBS 및 프로젝트 일정 관리', category: '웹 기획', path: '/learn/planning#wbs', snippet: '작업 분할 구조도와 마일스톤 관리' },
  { title: '와이어프레임 빌더 실습', category: '웹 기획', path: '/learn/planning#live-demo', snippet: '드래그 앤 드롭으로 컴포넌트를 조합하여 레이아웃 기획' },
  { title: '기획 마스터 퀴즈 10선', category: '웹 기획', path: '/learn/planning#quiz', snippet: '웹 기획 및 IA/와이어프레임 핵심 퀴즈' },

  // 웹 디자인
  { title: '디자인 시스템 (Design Tokens)', category: '웹 디자인', path: '/learn/design#system', snippet: '컬러, 타이포그래피, 간격 등 일관된 UI 토큰 설계' },
  { title: 'Figma 협업 및 시안 전달', category: '웹 디자인', path: '/learn/design#figma', snippet: '피그마 오토레이아웃, 컴포넌트 변형 및 개발자 전달 방식' },
  { title: '디자인 토큰 조절기 실습', category: '웹 디자인', path: '/learn/design#live-demo', snippet: 'Primary 컬러와 Border Radius를 실시간으로 변경해 컴포넌트에 반영' },
  { title: '디자인 마스터 퀴즈 10선', category: '웹 디자인', path: '/learn/design#quiz', snippet: '디자인 시스템과 피그마 핸드오프 이해도 퀴즈' },

  // 웹 퍼블리싱
  { title: 'HTML: 웹의 뼈대와 구조', category: '웹 퍼블리싱', path: '/learn/publishing#html', snippet: '시맨틱 태그(header, main, footer)와 웹 접근성' },
  { title: 'CSS: 디자인과 스타일링', category: '웹 퍼블리싱', path: '/learn/publishing#css', snippet: 'Box Model, 색상, 마진, 패딩 및 스타일 규칙' },
  { title: '반응형 웹과 Flexbox/Grid', category: '웹 퍼블리싱', path: '/learn/publishing#responsive', snippet: '미디어 쿼리와 유연한 레이아웃 설계' },
  { title: 'HTML/CSS 라이브 코드 실습', category: '웹 퍼블리싱', path: '/learn/publishing#live-demo', snippet: '브라우저에서 직접 코드를 수정하고 실시간 결과를 확인하는 샌드박스' },
  { title: '퍼블리싱 마스터 퀴즈 10선', category: '웹 퍼블리싱', path: '/learn/publishing#quiz', snippet: 'HTML5/CSS3 시맨틱 태그 및 반응형 퀴즈' },

  // 웹 개발
  { title: 'JavaScript: 웹 동적 제어', category: '웹 개발', path: '/learn/dev#js', snippet: 'DOM 조작, 이벤트 핸들링, 비동기 통신 처리' },
  { title: '백엔드 서버 & DB 역할', category: '웹 개발', path: '/learn/dev#backend', snippet: 'Node.js, Python, RDBMS/NoSQL 데이터 영속성 관리' },
  { title: 'REST API & HTTP 통신 구조', category: '웹 개발', path: '/learn/dev#api', snippet: 'GET, POST, PUT, DELETE 메서드와 JSON 데이터 포맷' },
  { title: '회원가입 API & DB 연동 실습', category: '웹 개발', path: '/learn/dev#live-demo', snippet: '클라이언트 폼 전송부터 서버 검증 및 DB 저장까지 라이브 실습' },
  { title: '개발 마스터 퀴즈 10선', category: '웹 개발', path: '/learn/dev#quiz', snippet: 'JS, REST API, 백엔드/DB 핵심 퀴즈' },

  // PM 아카데미
  { title: 'PM 아카데미 노트 전체 정리', category: 'PM 아카데미', path: '/learn/pm-academy', snippet: '문제 정의, 요구사항 작성, User Story, AC, PRD, RICE 우선순위, 실무 케이스' },
  { title: 'PM의 역할과 핵심 사고방식', category: 'PM 아카데미', path: '/learn/pm-academy#role-mindset', snippet: '프로젝트 관리자가 아닌 비즈니스 문제 해결자로서의 PM' },
  { title: '문제 정의와 요구사항 도출', category: 'PM 아카데미', path: '/learn/pm-academy#problem-definition', snippet: '현상 너머의 진짜 원인을 파악하는 5 Whys와 요구사항 구체화' },
  { title: 'User Story와 Acceptance Criteria (AC)', category: 'PM 아카데미', path: '/learn/pm-academy#user-story-ac', snippet: '사용자 관점의 기능 정의와 Given-When-Then 인수조건' },
  { title: 'Boundary Case와 VOC 분석', category: 'PM 아카데미', path: '/learn/pm-academy#boundary-voc', snippet: '예외 케이스 방어와 사용자 피드백 기반 개선 전략' },
  { title: 'PRD 작성법 및 RICE 우선순위', category: 'PM 아카데미', path: '/learn/pm-academy#prd-priority', snippet: '제품 요구사항 정의서 작성 및 Reach, Impact, Confidence, Effort 프레임워크' },
  { title: '실무 케이스 스터디 분석', category: 'PM 아카데미', path: '/learn/pm-academy#case-study', snippet: '실제 이커머스 장바구니/결제 전환율 개선 실전 사례' },
  { title: '실전 PM 마스터 퀴즈 10선', category: 'PM 아카데미', path: '/learn/pm-academy#quiz', snippet: '실무 PM 핵심 역량 및 프레임워크 퀴즈' },

  // 용어 정리
  { title: '웹 핵심 용어 정리 사전', category: '용어 사전', path: '/learn/glossary', snippet: '기획, 디자인, 퍼블리싱, 개발 필수 전문 용어 한눈에 정리' },
  { title: '기획 & PM 용어 사전', category: '용어 사전', path: '/learn/glossary#planning-terms', snippet: 'IA, SB, WBS, PRD, User Story, AC 등 기획 용어' },
  { title: '디자인 & UI/UX 용어 사전', category: '용어 사전', path: '/learn/glossary#design-terms', snippet: 'GUI, Design System, Token, Affordance, Contrast 등 디자인 용어' },
  { title: '퍼블리싱 HTML/CSS 용어 사전', category: '용어 사전', path: '/learn/glossary#publishing-terms', snippet: 'Semantic, Box Model, Flexbox, Media Query, Accessibility 등 퍼블리싱 용어' },
  { title: '개발 & API/DB 통신 용어 사전', category: '용어 사전', path: '/learn/glossary#dev-terms', snippet: 'SPA, REST API, JSON, CRUD, SQL, Async/Await 등 개발 용어' }
];

export const mainPageToc = [
  { id: 'overview', title: '1. 학습 개요 (한 줄 요약)' },
  { id: 'workflow', title: '2. 웹 서비스 6단계 동작 지도' },
  { id: 'what-is-web', title: '3. 웹이란 무엇인가?' },
  { id: 'client-server', title: '4. 클라이언트 vs 서버' },
  { id: 'roles', title: '5. 웹 제작 5대 직군 개요' },
  { id: 'live-demo', title: '6. 실시간 API/DB 시뮬레이터' },
  { id: 'quiz', title: '7. 웹 기초 상식 퀴즈 10선' },
  { id: 'summary', title: '다음 단계 가기' }
];

export const pmAcademyToc = [
  { id: 'overview', title: '개요: PM 아카데미 노트' },
  { id: 'role-mindset', title: '1. PM의 역할과 사고방식' },
  { id: 'problem-definition', title: '2. 문제 정의와 요구사항' },
  { id: 'user-story-ac', title: '3. User Story와 AC' },
  { id: 'boundary-voc', title: '4. Boundary Case와 VOC' },
  { id: 'prd-priority', title: '5. PRD와 RICE 우선순위' },
  { id: 'case-study', title: '6. 실무 케이스 분석' },
  { id: 'quiz', title: '실전 PM 퀴즈 10선' },
  { id: 'templates-curriculum', title: '7. PM 템플릿 & 커리큘럼' },
];

export const glossaryToc = [
  { id: 'overview', title: '개요 (용어 사전 사용법)' },
  { id: 'planning-terms', title: '1. 기획 용어 정리' },
  { id: 'design-terms', title: '2. 디자인 용어 정리' },
  { id: 'publishing-terms', title: '3. 퍼블리싱 용어 정리' },
  { id: 'dev-terms', title: '4. 개발 통신 용어 정리' },
  { id: 'summary', title: '요약' }
];

export const planningToc = [
  { id: 'overview', title: '개요: 웹 기획이란?' },
  { id: 'role', title: '1. 기획자의 핵심 역할' },
  { id: 'ia', title: '2. 정보구조도 및 화면설계서' },
  { id: 'wbs', title: '3. 일정 관리' },
  { id: 'live-demo', title: '4. 실습: 와이어프레임 빌더' },
  { id: 'quiz', title: '5. 기획 이해도 퀴즈' },
  { id: 'summary', title: '요약' }
];

export const designToc = [
  { id: 'overview', title: '개요: 사용자 경험과 디자인' },
  { id: 'system', title: '1. 디자인 시스템' },
  { id: 'figma', title: '2. 시안 협업 방식' },
  { id: 'live-demo', title: '3. 실습: 토큰 조절기' },
  { id: 'quiz', title: '4. 디자인 이해도 퀴즈' },
  { id: 'summary', title: '요약' }
];

export const publishingToc = [
  { id: 'overview', title: '개요: 웹 퍼블리셔란?' },
  { id: 'html', title: '1. 뼈대와 구조' },
  { id: 'css', title: '2. 디자인과 스타일' },
  { id: 'responsive', title: '3. 반응형 웹 레이아웃' },
  { id: 'live-demo', title: '4. 실습: 라이브 코드 샌드박스' },
  { id: 'quiz', title: '5. 퍼블리싱 퀴즈' },
  { id: 'summary', title: '요약' }
];

export const devToc = [
  { id: 'overview', title: '개요: 화면과 서버의 역할' },
  { id: 'js', title: '1. 동적 동작 제어' },
  { id: 'backend', title: '2. 백엔드 서버 및 데이터베이스' },
  { id: 'api', title: '3. 데이터 통신 구조' },
  { id: 'live-demo', title: '4. 실습: 회원가입 및 데이터 연동' },
  { id: 'quiz', title: '5. 개발 이해도 퀴즈' },
  { id: 'summary', title: '요약' }
];
