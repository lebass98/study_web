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
      { id: 'planning-quiz', title: '기획 이해도 확인 퀴즈', path: '/learn/planning#quiz' },
    ]
  },
  {
    id: 'web-design',
    title: '웹 디자인',
    items: [
      { id: 'design-system', title: '디자인 시스템 (Tokens)', path: '/learn/design#system', badge: '디자인', isMain: true },
      { id: 'figma-collaboration', title: 'Figma 협업 및 시안 전달', path: '/learn/design#figma' },
      { id: 'design-demo', title: '실습: 디자인 토큰 조절기', path: '/learn/design#live-demo' },
      { id: 'design-quiz', title: '디자인 이해도 확인 퀴즈', path: '/learn/design#quiz' },
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
      { id: 'publishing-quiz', title: '퍼블리싱 이해도 퀴즈', path: '/learn/publishing#quiz' },
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
      { id: 'dev-quiz', title: '개발 이해도 확인 퀴즈', path: '/learn/dev#quiz' },
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
  { title: '누구나 쉽게 이해하는 웹 개발 핵심 개념 개요', category: '웹 시작하기', path: '/', snippet: '웹 통신 구조, 브라우저, 서버, 데이터베이스의 전체 흐름' },
  { title: 'PM 아카데미 노트 정리 (Notion)', category: '5. PM 아카데미', path: '/learn/pm-academy', snippet: '문제 정의, 요구사항 작성, User Story, AC, PRD, RICE 우선순위, 실무 케이스' },
  { title: '웹 핵심 용어 정리 사전', category: '6. 웹 용어 정리', path: '/learn/glossary', snippet: '기획, 디자인, 퍼블리싱, 개발 필수 전문 용어 한눈에 정리' },
  { title: '클라이언트와 서버의 역할 비교', category: '웹 시작하기', path: '/#client-server', snippet: '화면 표시(클라이언트) vs 데이터 처리 및 인증(서버)' },
  { title: '웹 기획', category: '1. 웹 기획', path: '/learn/planning', snippet: '기획자 역할, 정보구조도, 와이어프레임, 화면설계서' },
  { title: '웹 디자인', category: '2. 웹 디자인', path: '/learn/design', snippet: '디자인 시스템, 색상 토큰, 시안 전달, 사용자 경험 디자인 기초' },
  { title: '웹 퍼블리싱', category: '3. 웹 퍼블리싱', path: '/learn/publishing', snippet: '구조 마크업과 스타일링, 반응형 레이아웃' },
  { title: '웹 개발', category: '4. 웹 개발', path: '/learn/dev', snippet: '동적 이벤트 제어, 서버 요청/응답, 데이터베이스 연동' }
];

export const mainPageToc = [
  { id: 'overview', title: '1. 학습 개요 (한 줄 요약)' },
  { id: 'workflow', title: '2. 웹 서비스 6단계 동작 지도' },
  { id: 'what-is-web', title: '3. 웹이란 무엇인가?' },
  { id: 'client-server', title: '4. 클라이언트 vs 서버' },
  { id: 'roles', title: '5. 웹 제작 5대 직군 개요' },
  { id: 'live-demo', title: '6. 실시간 API/DB 시뮬레이터' },
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
