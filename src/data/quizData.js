// 페이지별 초보자 맞춤형 10문항 퀴즈 데이터셋

export const mainPageQuizzes = [
  {
    id: 1,
    question: "웹 사이트를 이용하는 과정에서 '손님 테이블(화면을 보고 버튼을 누르는 브라우저)'에 해당하는 것은 무엇인가요?",
    options: [
      "1) 클라이언트 (Client / Frontend)",
      "2) 데이터베이스 (Database)",
      "3) 백엔드 서버 (Backend Server)",
      "4) 도메인 네임 서버 (DNS)"
    ],
    correctAnswerIndex: 0,
    explanation: "클라이언트(브라우저)는 사용자가 직접 눈으로 보고 버튼을 클릭하며 주문(요청)을 시작하는 손님 테이블과 같습니다."
  },
  {
    id: 2,
    question: "식당에서 손님의 주문서를 주방으로 배달하고, 완성된 음식을 테이블로 가져다주는 '웨이터'에 해당하는 기술은 무엇인가요?",
    options: [
      "1) CSS 스타일시트",
      "2) API (Application Programming Interface)",
      "3) 데이터베이스 (DB)",
      "4) HTML 뼈대 태그"
    ],
    correctAnswerIndex: 1,
    explanation: "API는 클라이언트(손님)와 서버(주방) 사이에서 정해진 규격대로 요청과 응답을 전달해주는 서빙 웨이터 역할을 합니다."
  },
  {
    id: 3,
    question: "식당의 '주방(비밀번호 검증, 결제 계산, 요리 로직 수행)' 역할을 담당하는 것은 무엇인가요?",
    options: [
      "1) 브라우저 캐시",
      "2) 백엔드 서버 (Backend Server)",
      "3) Figma 디자인 시안",
      "4) 와이어프레임"
    ],
    correctAnswerIndex: 1,
    explanation: "백엔드 서버는 사용자의 요청을 받아 비밀번호가 맞는지 검증하고, 결제를 승인하는 등 중요한 비즈니스 로직을 처리합니다."
  },
  {
    id: 4,
    question: "식당의 '냉장고와 재고 창고(회원 정보, 상품 목록, 주문 내역을 영구 보관)'에 해당하는 것은 무엇인가요?",
    options: [
      "1) 데이터베이스 (Database / DB)",
      "2) 웹 브라우저 탭",
      "3) DNS 서버",
      "4) CSS 애니메이션"
    ],
    correctAnswerIndex: 0,
    explanation: "데이터베이스(DB)는 컴퓨터 전원이 꺼져도 회원 정보나 상품 데이터가 날아가지 않도록 안전하게 보관하는 대형 창고입니다."
  },
  {
    id: 5,
    question: "웹 브라우저의 주소창에 `www.naver.com`을 입력했을 때, 사람이 읽는 문자 주소를 실제 컴퓨터 IP 주소(예: 223.130.195.200)로 변환해주는 '전화번호부'는 무엇인가요?",
    options: [
      "1) DNS (Domain Name System)",
      "2) HTML 태그",
      "3) 포토샵 시안",
      "4) 깃허브(GitHub)"
    ],
    correctAnswerIndex: 0,
    explanation: "DNS는 복잡한 숫자 IP 주소 대신 외우기 쉬운 영문 도메인 주소를 입력했을 때 해당 서버의 IP 주소를 찾아 연결해주는 인터넷 전화번호부입니다."
  },
  {
    id: 6,
    question: "웹 프론트엔드의 3대 기술 중 '건물의 철골 뼈대와 기둥' 역할을 하는 것은 무엇인가요?",
    options: [
      "1) CSS",
      "2) HTML",
      "3) JavaScript",
      "4) Python"
    ],
    correctAnswerIndex: 1,
    explanation: "HTML은 웹 페이지에 제목, 본문, 버튼, 이미지 등의 위치와 뼈대 구조를 세우는 기본 마크업 언어입니다."
  },
  {
    id: 7,
    question: "웹 프론트엔드의 3대 기술 중 '벽지, 페인트칠, 조명 등 예쁜 인테리어 옷' 역할을 하는 것은 무엇인가요?",
    options: [
      "1) CSS",
      "2) HTML",
      "3) SQL",
      "4) Linux"
    ],
    correctAnswerIndex: 0,
    explanation: "CSS는 HTML 뼈대 위에 색상, 폰트 크기, 여백, 정렬, 둥근 모서리 등 시각적 디자인을 입혀주는 스타일시트 언어입니다."
  },
  {
    id: 8,
    question: "웹 프론트엔드의 3대 기술 중 '전등 스위치, 자동문, 엘리베이터 동작(인터랙션)' 역할을 하는 것은 무엇인가요?",
    options: [
      "1) JavaScript",
      "2) HTML",
      "3) CSS",
      "4) Markdown"
    ],
    correctAnswerIndex: 0,
    explanation: "JavaScript는 버튼 클릭 시 팝업 열기, 장바구니 담기, 서버 통신 등 살아 움직이는 동작을 제어하는 프로그래밍 언어입니다."
  },
  {
    id: 9,
    question: "스마트폰, 태블릿, PC 등 다양한 기기의 화면 크기에 맞춰 레이아웃이 알아서 유연하게 변하는 웹을 무엇이라 부르나요?",
    options: [
      "1) 반응형 웹 (Responsive Web)",
      "2) 고정형 웹",
      "3) 텍스트 전용 웹",
      "4) 오프라인 웹"
    ],
    correctAnswerIndex: 0,
    explanation: "반응형 웹은 하나의 웹 사이트로 스마트폰과 대형 PC 모니터 모두에서 최적화된 보기 좋은 화면을 제공하는 기술입니다."
  },
  {
    id: 10,
    question: "일반적인 웹 사이트 제작 실무 프로세스를 올바른 순서대로 나열한 것은 무엇인가요?",
    options: [
      "1) 개발 ➔ 디자인 ➔ 기획 ➔ 배포 ➔ 퍼블리싱",
      "2) 기획 ➔ 디자인 ➔ 퍼블리싱 ➔ 개발 ➔ 테스트 및 배포",
      "3) 배포 ➔ 개발 ➔ 기획 ➔ 디자인 ➔ 퍼블리싱",
      "4) 디자인 ➔ 개발 ➔ 기획 ➔ 배포 ➔ 테스트"
    ],
    correctAnswerIndex: 1,
    explanation: "설계도를 그리는 [기획] ➔ 시안을 만드는 [디자인] ➔ HTML/CSS 뼈대를 만드는 [퍼블리싱] ➔ 서버/API/DB를 연동하는 [개발] ➔ [테스트 및 배포] 순으로 진행됩니다."
  }
];

export const planningQuizzes = [
  {
    id: 1,
    question: "화면의 버튼 배치 스케치(와이어프레임) 옆에 '버튼 클릭 시 일어나는 세부 동작 설명(Description)'을 함께 기록한 최종 기획 문서는 무엇인가요?",
    options: [
      "1) 화면설계서 (Storyboard / SB)",
      "2) 데이터베이스 테이블 명세서",
      "3) 소스코드 커밋 로그",
      "4) CSS 스타일 가이드"
    ],
    correctAnswerIndex: 0,
    explanation: "화면설계서(스토리보드/SB)는 화면 스케치와 함께 모든 기능 동작 정책을 명세하여 디자이너와 개발자의 작업 지침서가 되는 문서입니다."
  },
  {
    id: 2,
    question: "웹 사이트의 전체 메뉴 트리와 페이지 간의 상하 계층 구조를 한눈에 볼 수 있도록 그린 '웹사이트 층별 안내도'는 무엇인가요?",
    options: [
      "1) IA (Information Architecture - 정보구조도)",
      "2) WBS (일정 관리표)",
      "3) API 명세서",
      "4) ERD (데이터베이스 다이어그램)"
    ],
    correctAnswerIndex: 0,
    explanation: "IA(정보구조도)는 사이트맵처럼 1뎁스, 2뎁스, 3뎁스로 이어지는 서비스의 메뉴와 페이지 이동 동선을 체계화한 지도입니다."
  },
  {
    id: 3,
    question: "기획을 시작하지 않고 바로 코딩부터 시작할 경우 발생하는 가장 큰 문제는 무엇일까요?",
    options: [
      "1) 컴퓨터 전기가 많이 소모된다",
      "2) 기획서가 없어 서로 생각한 기능이 달라 코드를 처음부터 다 뜯어고치는 재작업(Overhead)이 발생한다",
      "3) 글자 폰트가 자동으로 굴림체로 바뀐다",
      "4) 인터넷 속도가 느려진다"
    ],
    correctAnswerIndex: 1,
    explanation: "명확한 설계도(기획서) 없이 제작하면 팀원 간 의사소통 오류로 인해 개발된 기능을 전부 버리고 다시 만들어야 하는 큰 손실이 발생합니다."
  },
  {
    id: 4,
    question: "선(Line)과 상자(Box)만으로 화면의 대략적인 구조와 버튼 배치 위치를 잡는 '초기 뼈대 스케치'를 무엇이라 하나요?",
    options: [
      "1) 와이어프레임 (Wireframe)",
      "2) 디자인 토큰",
      "3) 데이터베이스 쿼리",
      "4) 깃 브랜치"
    ],
    correctAnswerIndex: 0,
    explanation: "와이어프레임은 색상이나 화려한 그래픽을 배제하고 오직 레이아웃과 정보의 위치 배치에만 집중하여 빠르게 그리는 뼈대 스케치입니다."
  },
  {
    id: 5,
    question: "프로젝트 전체 일정을 쪼개어 누가, 언제부터 언제까지 작업할지 달력 형태로 정리한 '작업 일정 관리표'는 무엇인가요?",
    options: [
      "1) WBS (Work Breakdown Structure)",
      "2) CSS 미디어 쿼리",
      "3) HTTP 상태 코드",
      "4) 피그마 컴포넌트"
    ],
    correctAnswerIndex: 0,
    explanation: "WBS는 기획, 디자인, 퍼블리싱, 개발 등 각 파트별 마감일과 담당자를 한눈에 관리하여 프로젝트가 기한 내에 완료되도록 돕는 일정표입니다."
  },
  {
    id: 6,
    question: "고객사(발주처)가 외주 개발사에게 '우리 회사에 이런 웹사이트를 만들어주세요'라고 요구 조건과 예산을 담아 보내는 문서는 무엇인가요?",
    options: [
      "1) RFP (Request for Proposal - 제안요청서)",
      "2) 개인정보 처리방침",
      "3) DNS 설정표",
      "4) 깃 커밋 메시지"
    ],
    correctAnswerIndex: 0,
    explanation: "RFP는 프로젝트 발주처가 원하는 개발 범위, 목적, 예산, 일정 등을 담아 수행 업체의 제안서를 받기 위해 요청하는 문서입니다."
  },
  {
    id: 7,
    question: "사용자 중심 관점에서 기능을 정의할 때 사용하는 '유저 스토리(User Story)'의 표준 작성 공식은 무엇인가요?",
    options: [
      "1) As a [사용자], I want [행동/기능], So that [얻고 싶은 가치/이유]",
      "2) If [서버], Then [데이터베이스], Else [오류]",
      "3) From [디자이너], To [개발자], With [피그마]",
      "4) Select [컬럼], From [테이블], Where [조건]"
    ],
    correctAnswerIndex: 0,
    explanation: "유저 스토리는 '누가(Who), 무엇을(What), 왜 원하는가(Why)'를 명확히 하여 진짜 사용자가 얻는 가치에 집중하게 만듭니다."
  },
  {
    id: 8,
    question: "개발팀과 QA팀이 기능이 정상적으로 완성되었는지 객관적으로 검증하기 위해 작성하는 '인수 조건(AC)'의 포맷은 무엇인가요?",
    options: [
      "1) Given(상황) - When(행동) - Then(결과)",
      "2) Start - Pause - Stop",
      "3) Ready - Set - Go",
      "4) HTML - CSS - JavaScript"
    ],
    correctAnswerIndex: 0,
    explanation: "인수 조건(Acceptance Criteria)은 '어떤 조건일 때(Given), 사용자가 무엇을 하면(When), 어떤 결과가 나와야 한다(Then)'로 객관적 합격 기준을 세웁니다."
  },
  {
    id: 9,
    question: "인증번호 입력 제한시간 5분 중 '4분 59초'에 입력하거나, 전송 버튼을 1초에 10번 연타하는 상황을 무엇이라 부르나요?",
    options: [
      "1) 경계 조건 및 예외 케이스 (Boundary / Edge Case)",
      "2) 메인 홈 화면",
      "3) 로고 디자인",
      "4) 폰트 패밀리"
    ],
    correctAnswerIndex: 0,
    explanation: "경계 조건(Boundary Case)과 엣지 케이스는 성공과 실패의 아슬아슬한 경계 상황으로, 기획자가 명확한 규칙을 세워두어야 시스템 오류를 방지할 수 있습니다."
  },
  {
    id: 10,
    question: "고객이 남긴 불만이나 의견을 가리키는 'VOC'의 올바른 약칭은 무엇인가요?",
    options: [
      "1) Voice of Customer (고객의 소리)",
      "2) Value of Company (회사의 가치)",
      "3) Vision of Creator (기획자의 비전)",
      "4) View of Code (코드의 시각)"
    ],
    correctAnswerIndex: 0,
    explanation: "VOC(Voice of Customer)는 사용자가 서비스를 이용하며 남긴 실제 피드백이며, PM은 이를 데이터 지표와 결합하여 개선 과제를 도출합니다."
  }
];

export const designQuizzes = [
  {
    id: 1,
    question: "화면에 보이는 버튼 색상, 글꼴, 아이콘 모양, 이미지 레이아웃 등 '눈에 보이는 시각적 모습'을 뜻하는 단어는 무엇인가요?",
    options: [
      "1) UI (User Interface)",
      "2) UX (User Experience)",
      "3) API (Application Programming Interface)",
      "4) DB (Database)"
    ],
    correctAnswerIndex: 0,
    explanation: "UI(User Interface)는 사용자가 화면을 마주했을 때 눈으로 보고 만지는 시각적 디자인 구성 요소 일체를 말합니다."
  },
  {
    id: 2,
    question: "사용자가 웹 서비스를 이용하면서 느끼는 '편리함, 동선의 효율성, 만족스러운 감정'을 뜻하는 단어는 무엇인가요?",
    options: [
      "1) UX (User Experience)",
      "2) UI (User Interface)",
      "3) CSS (Cascading Style Sheets)",
      "4) SQL (Structured Query Language)"
    ],
    correctAnswerIndex: 0,
    explanation: "UX(User Experience)는 '주문이 1초 만에 끝나서 편하다!', '헤매지 않고 찾았다!'처럼 사용자가 겪는 전체적인 사용 경험과 만족도를 의미합니다."
  },
  {
    id: 3,
    question: "버튼 색상 코드(`#087ea4`), 모서리 둥글기(`12px`), 여백(`16px`)처럼 일관된 브랜드 규칙을 코드로 규격화한 단위를 무엇이라 하나요?",
    options: [
      "1) 디자인 토큰 (Design Tokens)",
      "2) 데이터베이스 테이블",
      "3) 도메인 네임",
      "4) 소스 브랜치"
    ],
    correctAnswerIndex: 0,
    explanation: "디자인 토큰(Design Tokens)은 색상, 폰트, 간격 등 디자인 시스템의 최소 단위 규칙들을 변수 형태로 저장하여 일관성을 유지합니다."
  },
  {
    id: 4,
    question: "디자이너와 개발자가 별도 파일 전송 없이 링크 하나로 하나의 캔버스에서 실시간으로 함께 소통하는 대표적인 디자인 도구는 무엇인가요?",
    options: [
      "1) Figma (피그마)",
      "2) 메모장",
      "3) 그림판",
      "4) 계산기"
    ],
    correctAnswerIndex: 0,
    explanation: "Figma는 웹 브라우저 기반의 협업 디자인 도구로, 실시간 공동 작업과 코드 스펙 자동 추출이 가능해 업계 표준으로 사용됩니다."
  },
  {
    id: 5,
    question: "사용자가 다음 행동으로 넘어가도록 유도하는 가장 눈에 띄는 핵심 버튼(예: '지금 구매하기', '무료 체험 신청')을 무엇이라 부르나요?",
    options: [
      "1) CTA (Call To Action) 버튼",
      "2) 취소 버튼",
      "3) 새로고침 버튼",
      "4) 스크롤바"
    ],
    correctAnswerIndex: 0,
    explanation: "CTA(Call To Action) 버튼은 사용자의 전환(구매, 가입, 신청 등)을 이끌어내기 위해 브랜드 주 색상과 큼직한 크기로 강조하는 핵심 행동 유도 버튼입니다."
  },
  {
    id: 6,
    question: "피그마(Figma)에서 원본 마스터 디자인 블록(Component)을 복사하여 사용할 때 생성되는 복제본을 무엇이라 부르나요?",
    options: [
      "1) 인스턴스 (Instance)",
      "2) 백엔드",
      "3) 서버",
      "4) 쿠키"
    ],
    correctAnswerIndex: 0,
    explanation: "피그마에서 컴포넌트(Component) 원본을 수정하면, 이를 복사해 화면 곳곳에 배치한 모든 인스턴스(Instance)에 변경사항이 한 번에 자동 반영됩니다."
  },
  {
    id: 7,
    question: "글자를 읽기 편하게 만들기 위해 시각장애인이나 저시력자를 포함한 모든 사용자를 배려하는 '웹 접근성 명도 대비(Contrast Ratio)' 기준은 보통 얼마 이상이어야 할까요?",
    options: [
      "1) 일반 텍스트 기준 4.5:1 이상 (WCAG AA 기준)",
      "2) 1:1 (배경색과 글자색이 같은 상태)",
      "3) 0.5:1 이하",
      "4) 대비는 중요하지 않다"
    ],
    correctAnswerIndex: 0,
    explanation: "WCAG 웹 접근성 지침에 따르면 본문 텍스트는 배경과 최소 4.5:1 이상의 명도 대비를 유지해야 누구나 눈이 피로하지 않고 또렷하게 읽을 수 있습니다."
  },
  {
    id: 8,
    question: "피그마에서 버튼 안의 글자 길이가 늘어나면 버튼 상자 크기도 알아서 자동으로 늘어나게 맞춰주는 편리한 기능은 무엇인가요?",
    options: [
      "1) 오토 레이아웃 (Auto Layout)",
      "2) 마스크 (Mask)",
      "3) 블러 효과",
      "4) 펜 툴"
    ],
    correctAnswerIndex: 0,
    explanation: "Auto Layout은 CSS의 Flexbox처럼 자식 요소의 크기나 개수에 따라 부모 컨테이너의 간격과 패딩이 유연하게 늘어나고 줄어드는 피그마의 핵심 기능입니다."
  },
  {
    id: 9,
    question: "화면 요소들의 여백과 간격을 8px, 16px, 24px, 32px처럼 8의 배수로 일정하게 맞추는 디자인 규칙을 무엇이라 부르나요?",
    options: [
      "1) 8pt 그리드 시스템 (8-point Grid System)",
      "2) 3의 법칙",
      "3) 피타고라스 정리",
      "4) 랜덤 여백 시스템"
    ],
    correctAnswerIndex: 0,
    explanation: "8pt 그리드 시스템은 화면 해상도 배율(1x, 2x, 3x)에 깔끔하게 나누어떨어지며, 디자이너와 개발자 모두에게 일관된 여백 규칙을 제공합니다."
  },
  {
    id: 10,
    question: "다크 모드(Dark Mode) 디자인 시 눈의 피로를 덜기 위해 순수한 완전 검정(`#000000`) 대신 사용하는 올바른 배경색 설계 방식은 무엇인가요?",
    options: [
      "1) 짙은 회색조(Dark Charcoal / Slate, 예: #121212, #0f172a)를 사용해 눈부심을 줄이고 입체감을 준다",
      "2) 형광 노란색을 칠한다",
      "3) 무조건 순백색(#FFFFFF)만 고집한다",
      "4) 글자색을 검정색으로 바꾼다"
    ],
    correctAnswerIndex: 0,
    explanation: "완전 검정(#000000) 위에 흰 글자를 쓰면 빛 번짐과 눈 피로(Halation)가 심해지므로, 짙은 챠콜/슬레이트 톤의 다크 그레이를 겹겹이 사용하는 것이 정석입니다."
  }
];

export const publishingQuizzes = [
  {
    id: 1,
    question: "HTML에서 웹 페이지에 들어갈 제목을 나타내는 가장 상위 단계의 태그는 무엇인가요?",
    options: [
      "1) <h1>",
      "2) <p>",
      "3) <span>",
      "4) <div>"
    ],
    correctAnswerIndex: 0,
    explanation: "<h1> 태그는 페이지의 가장 중요한 메인 제목을 나타내며, SEO(검색엔진 최적화)에서도 핵심적인 역할을 합니다."
  },
  {
    id: 2,
    question: "웹 페이지에서 요소의 '안쪽 여백'을 지정하는 CSS 속성은 무엇인가요?",
    options: [
      "1) padding",
      "2) margin",
      "3) border",
      "4) display"
    ],
    correctAnswerIndex: 0,
    explanation: "padding은 상자의 테두리(border) 안쪽 공간의 여백이고, margin은 상자 바깥쪽 다른 요소와의 간격을 나타냅니다."
  },
  {
    id: 3,
    question: "단순히 `<div>`만 쓰는 대신 `<header>`, `<nav>`, `<main>`, `<footer>`처럼 의미가 담긴 태그를 사용하는 것을 무엇이라 부르나요?",
    options: [
      "1) 시맨틱 태그 (Semantic HTML)",
      "2) 인라인 스타일",
      "3) 자바스크립트 변수",
      "4) CSS 애니메이션"
    ],
    correctAnswerIndex: 0,
    explanation: "시맨틱 태그(Semantic HTML)는 태그 이름 자체에 의미를 담아 검색엔진(SEO)과 스크린리더(웹 접근성)가 웹 페이지 구조를 정확히 이해하도록 돕습니다."
  },
  {
    id: 4,
    question: "CSS Flexbox에서 아이콘과 텍스트를 '가로 방향(메인 축)'으로 가운데 정렬할 때 사용하는 속성은 무엇인가요?",
    options: [
      "1) justify-content: center;",
      "2) align-items: flex-start;",
      "3) flex-direction: column;",
      "4) float: left;"
    ],
    correctAnswerIndex: 0,
    explanation: "Flexbox에서 `justify-content`는 주 축(기본 가로) 정렬을 담당하고, `align-items`는 교차 축(세로) 정렬을 담당합니다."
  },
  {
    id: 5,
    question: "화면 너비가 768px 이하(모바일 기기)일 때만 특정 CSS 스타일을 적용하고 싶을 때 사용하는 문법은 무엇인가요?",
    options: [
      "1) @media (max-width: 768px) { ... }",
      "2) @import url('mobile.css');",
      "3) if (window.width <= 768) { ... }",
      "4) @font-face { ... }"
    ],
    correctAnswerIndex: 0,
    explanation: "CSS 미디어 쿼리(`@media`)는 디바이스 화면의 너비나 해상도 조건에 따라 스타일을 분기하여 반응형 웹을 구현하는 핵심 도구입니다."
  },
  {
    id: 6,
    question: "CSS 단위 중 고정 크기인 `px` 대신 최상위(Root) 글꼴 크기에 비례하여 유연하게 반응하는 상대 단위는 무엇인가요?",
    options: [
      "1) rem",
      "2) cm",
      "3) in",
      "4) pt"
    ],
    correctAnswerIndex: 0,
    explanation: "`rem(Root EM)`은 최상단 `<html>` 태그의 폰트 크기(기본 16px)를 기준으로 비례 계산되어, 사용자가 브라우저 글자 크기를 조절할 때 함께 확대/축소됩니다."
  },
  {
    id: 7,
    question: "HTML 요소를 화면에서 아예 보이지 않게 하고 자리(공간)조차 차지하지 않도록 완전히 없애는 CSS 속성은 무엇인가요?",
    options: [
      "1) display: none;",
      "2) visibility: hidden;",
      "3) opacity: 0;",
      "4) color: transparent;"
    ],
    correctAnswerIndex: 0,
    explanation: "`display: none`은 요소의 렌더링 영역 자체를 없애지만, `visibility: hidden`은 투명하게 감추기만 하고 원래 차지하던 공간은 그대로 유지됩니다."
  },
  {
    id: 8,
    question: "CSS 선택자 우선순위(Specificity)에서 가장 점수가 높아 다른 스타일을 덮어쓰는 선택자는 무엇인가요?",
    options: [
      "1) 인라인 스타일 (태그 안 `style=\"...\"`) 및 아이디(#id) 선택자",
      "2) 태그 선택자 (`div`, `p`)",
      "3) 전체 선택자 (`*`)",
      "4) 자손 선택자"
    ],
    correctAnswerIndex: 0,
    explanation: "인라인 스타일(1000점) > 아이디 선택자(100점) > 클래스 선택자(10점) > 태그 선택자(1점) 순으로 우선순위가 결정됩니다."
  },
  {
    id: 9,
    question: "버튼에 마우스 커서를 올렸을 때(Hover) 부드럽게 색상이 0.3초 동안 바뀌도록 애니메이션을 주는 CSS 속성은 무엇인가요?",
    options: [
      "1) transition: all 0.3s ease;",
      "2) font-weight: bold;",
      "3) text-align: center;",
      "4) z-index: 999;"
    ],
    correctAnswerIndex: 0,
    explanation: "`transition` 속성은 상태가 변경될 때(예: :hover, :active) 즉시 변하지 않고 지정한 시간 동안 부드럽게 전환되도록 만들어줍니다."
  },
  {
    id: 10,
    question: "웹 브라우저가 HTML 코드를 파싱(해석)하여 생성하는 화면 구조 객체 모델의 이름은 무엇인가요?",
    options: [
      "1) DOM (Document Object Model)",
      "2) SQL (Structured Query Language)",
      "3) USB (Universal Serial Bus)",
      "4) RAM (Random Access Memory)"
    ],
    correctAnswerIndex: 0,
    explanation: "DOM(문서 객체 모델)은 브라우저가 HTML 문서를 트리 구조의 객체로 변환한 것으로, 자바스크립트가 화면 요소를 동적으로 조작할 수 있게 해줍니다."
  }
];

export const developmentQuizzes = [
  {
    id: 1,
    question: "웹 프론트엔드와 백엔드의 역할 분담을 가장 올바르게 설명한 것은 무엇인가요?",
    options: [
      "1) 프론트엔드는 사용자 화면 인터랙션을 제어하고, 백엔드는 보안 검증과 데이터 저장을 처리한다",
      "2) 프론트엔드는 데이터베이스를 만들고, 백엔드는 버튼 색상을 칠한다",
      "3) 프론트엔드와 백엔드는 완전히 같은 기술을 사용한다",
      "4) 프론트엔드는 인터넷이 필요 없다"
    ],
    correctAnswerIndex: 0,
    explanation: "프론트엔드는 사용자 경험과 화면 동작을 담당하고, 백엔드는 비밀번호 암호화, 결제 승인, DB 연동 등 안전한 데이터 처리를 담당합니다."
  },
  {
    id: 2,
    question: "서버 데이터베이스로부터 기존 데이터(예: 상품 목록, 내 프로필 정보)를 단순히 '조회/읽기'할 때 사용하는 HTTP 메서드는 무엇인가요?",
    options: [
      "1) GET",
      "2) POST",
      "3) DELETE",
      "4) DROP"
    ],
    correctAnswerIndex: 0,
    explanation: "GET 메서드는 서버의 기존 데이터를 변경하지 않고 안전하게 가져오기(조회)할 때 사용하는 표준 HTTP 메서드입니다."
  },
  {
    id: 3,
    question: "새로운 회원가입 정보나 작성한 게시글을 서버에 '새로 등록/저장'할 때 사용하는 HTTP 메서드는 무엇인가요?",
    options: [
      "1) POST",
      "2) GET",
      "3) HEAD",
      "4) OPTIONS"
    ],
    correctAnswerIndex: 0,
    explanation: "POST 메서드는 클라이언트가 보낸 데이터(Body)를 서버에 새로 생성 및 등록할 때 사용합니다."
  },
  {
    id: 4,
    question: "기존에 등록된 데이터(예: 회원 비밀번호, 프로필 사진)를 '수정/변경'할 때 사용하는 HTTP 메서드는 무엇인가요?",
    options: [
      "1) PUT / PATCH",
      "2) GET",
      "3) DELETE",
      "4) TRUNCATE"
    ],
    correctAnswerIndex: 0,
    explanation: "PUT은 리소스 전체를 대체 수정하고, PATCH는 리소스의 일부 속성을 부분 수정할 때 사용합니다."
  },
  {
    id: 5,
    question: "작성한 댓글이나 장바구니 상품을 '삭제'할 때 사용하는 HTTP 메서드는 무엇인가요?",
    options: [
      "1) DELETE",
      "2) GET",
      "3) POST",
      "4) UPDATE"
    ],
    correctAnswerIndex: 0,
    explanation: "DELETE 메서드는 서버와 데이터베이스에 저장된 특정 데이터를 안전하게 제거할 때 사용합니다."
  },
  {
    id: 6,
    question: "웹 브라우저가 서버에 요청을 보냈을 때 '요청이 성공적으로 처리되었습니다'를 의미하는 표준 HTTP 상태 코드는 무엇인가요?",
    options: [
      "1) 200 OK",
      "2) 404 Not Found",
      "3) 500 Internal Server Error",
      "4) 301 Redirect"
    ],
    correctAnswerIndex: 0,
    explanation: "200번대(200, 201)는 요청이 성공적으로 완료되었음을 나타내고, 404는 페이지 없음, 500은 서버 내부 오류를 뜻합니다."
  },
  {
    id: 7,
    question: "클라이언트와 서버가 데이터를 주고받을 때 가장 널리 사용하는 가볍고 읽기 쉬운 텍스트 데이터 포맷은 무엇인가요?",
    options: [
      "1) JSON (JavaScript Object Notation)",
      "2) MP4",
      "3) HWP",
      "4) EXE"
    ],
    correctAnswerIndex: 0,
    explanation: "JSON은 `{ \"name\": \"홍길동\", \"age\": 25 }`처럼 키-값 쌍으로 이루어져 인간과 컴퓨터 모두 이해하기 쉬운 글로벌 표준 데이터 포맷입니다."
  },
  {
    id: 8,
    question: "사용자의 비밀번호나 결제 카드 번호를 브라우저 화면(로컬스토리지 등)에 평문으로 저장하면 안 되는 가장 큰 이유는 무엇인가요?",
    options: [
      "1) F12(개발자 도구)나 악성 스크립트(XSS)를 통해 누구나 쉽게 탈취할 수 있는 위험이 있기 때문에",
      "2) 모니터 색상이 흐려지기 때문에",
      "3) 마우스 클릭이 안 되기 때문에",
      "4) 글자 크기가 작아지기 때문에"
    ],
    correctAnswerIndex: 0,
    explanation: "클라이언트(브라우저) 환경은 해킹과 조작에 취약하므로, 민감한 보안 정보는 반드시 백엔드 서버에서 암호화하여 DB 금고에 보관해야 합니다."
  },
  {
    id: 9,
    question: "프론트엔드에서 서버에 데이터를 요청할 때 화면 전체를 새로고침하지 않고 뒷단에서 부드럽게 데이터를 받아오는 방식을 무엇이라 부르나요?",
    options: [
      "1) 비동기 통신 (AJAX / Fetch / Axios)",
      "2) 강제 종료",
      "3) 블루스크린",
      "4) 파워 리셋"
    ],
    correctAnswerIndex: 0,
    explanation: "비동기 통신(Fetch/Axios)을 사용하면 화면이 깜빡이지 않고도 장바구니 수량이 즉시 증가하거나 실시간 댓글이 추가되는 부드러운 사용자 경험을 제공합니다."
  },
  {
    id: 10,
    question: "수백만 건의 회원 데이터베이스 테이블에서 원하는 사용자를 번개처럼 빠르게 검색할 수 있도록 책의 '색인(찾아보기)' 역할을 하는 것은 무엇인가요?",
    options: [
      "1) 인덱스 (Index)",
      "2) 폰트 파일",
      "3) 백그라운드 이미지",
      "4) 탭 메뉴"
    ],
    correctAnswerIndex: 0,
    explanation: "DB 인덱스(Index)는 책의 맨 뒤에 있는 색인 목차처럼 작동하여, 전체 데이터를 처음부터 끝까지 다 뒤지지 않고도 초고속으로 원하는 행을 찾아줍니다."
  }
];

export const pmAcademyQuizzes = [
  {
    id: 1,
    question: "제품의 장기적인 비전과 '어디로 갈 것인가(Why/What)' 방향타를 잡는 PO(Product Owner)와, 일정을 조율하며 '어떻게 제시간에 구현할 것인가(How/When)'를 관리하는 PM(기획자)의 차이를 올바르게 설명한 것은?",
    options: [
      "1) PO는 목적지를 정하는 선장, PM은 안전하고 빠르게 항해 일정을 이끄는 1등 항해사",
      "2) PO는 디자인만 하고 PM은 코딩만 한다",
      "3) PO와 PM은 완전히 같으며 차이가 없다",
      "4) PM은 기획을 하지 않는다"
    ],
    correctAnswerIndex: 0,
    explanation: "PO는 비즈니스 가치와 비전을 정의하고, PM/기획자는 이를 달성하기 위한 구체적인 일정, 화면설계, 협업 조율을 총괄합니다."
  },
  {
    id: 2,
    question: "식당 손님이 '소금 좀 더 주세요!(Request)'라고 요청했을 때, 유능한 PM의 올바른 문제 분석 태도는 무엇인가요?",
    options: [
      "1) 무작정 소금통을 붓지 않고, '국물이 싱거운가? 아니면 식어서 맛이 없나?' 숨은 진짜 문제(Requirement)를 파악한다",
      "2) 손님에게 소금을 사 오라고 한다",
      "3) 요청을 무시하고 설탕을 준다",
      "4) 주방장을 바로 교체한다"
    ],
    correctAnswerIndex: 0,
    explanation: "이해관계자가 수단(Request)으로 말하더라도, PM은 그 이면의 근본적인 문제와 본질적인 요구사항(Requirement)을 분석하여 최적의 해결책을 제시해야 합니다."
  },
  {
    id: 3,
    question: "배달앱에서 사용자가 쿠폰함을 일일이 뒤지지 않아도 결제 시 '가장 할인 금액이 큰 쿠폰'이 1초 만에 자동 선택되게 하는 기획의 핵심 목적은 무엇인가요?",
    options: [
      "1) 주문 결제 과정의 번거로움을 없애 결제 이탈률을 획기적으로 낮추기 위해",
      "2) 배달 기사님의 오토바이 속도를 높이기 위해",
      "3) 음식점 메뉴판 글자 크기를 키우기 위해",
      "4) 스마트폰 배터리를 아끼기 위해"
    ],
    correctAnswerIndex: 0,
    explanation: "결제 단계에서 쿠폰을 찾느라 사용자가 지쳐서 앱을 닫는 이탈을 방지하고, 직관적이고 매끄러운 구매 경험을 완성하기 위한 핵심 기획입니다."
  },
  {
    id: 4,
    question: "기능의 우선순위를 정하는 RICE 프레임워크 공식 `(Reach × Impact × Confidence) / Effort`에서 분모에 들어가는 `Effort(노력/공수)`가 의미하는 것은 무엇인가요?",
    options: [
      "1) 이 기능을 개발하는 데 투입되는 개발자/디자이너의 작업 기간과 리소스(맨먼스)",
      "2) 대표님의 연봉",
      "3) 회사의 사무실 임대료",
      "4) 고객의 나이"
    ],
    correctAnswerIndex: 0,
    explanation: "Effort는 기능을 만드는 데 들어가는 개발 공수(노력)이며, 공수가 적게 들고 효과(Reach, Impact)가 큰 작업일수록 우선순위 점수가 높아집니다."
  },
  {
    id: 5,
    question: "이해관계자(대표님, 마케팅팀, 영업팀)가 '모든 기능이 다 중요하니 이번 달에 4개 다 만들어달라'고 요청할 때 PM의 프로페셔널한 대처법은?",
    options: [
      "1) RICE 우선순위 데이터 점수를 보여주며, '효과가 가장 큰 A 기능을 먼저 출시하고 B는 다음 스프린트에 진행하겠습니다'라고 합리적으로 조율한다",
      "2) 화를 내며 프로젝트를 그만둔다",
      "3) 밤새 야근하며 4개를 대충 부실하게 만든다",
      "4) 아무 말 없이 회의실을 나간다"
    ],
    correctAnswerIndex: 0,
    explanation: "PM은 감정이 아닌 객관적인 데이터와 우선순위 프레임워크(RICE 등)를 바탕으로 팀의 한정된 자원을 가장 효율적인 곳에 집중하도록 조율하는 리더입니다."
  },
  {
    id: 6,
    question: "제품의 기획 배경, 해결할 문제, 타겟 고객, User Story, 화면 요구사항, 성공 지표(KPI)를 하나로 묶은 종합 제품 기획 문서는 무엇인가요?",
    options: [
      "1) PRD (Product Requirement Document - 제품 요구사항 문서)",
      "2) 세금계산서",
      "3) 비밀유지서약서(NDA)",
      "4) 주소록 명단"
    ],
    correctAnswerIndex: 0,
    explanation: "PRD는 모든 팀원(디자이너, 개발자, QA, 마케터)이 하나의 목표를 바라보고 완벽하게 정렬(Align)되도록 돕는 제품 개발의 성경 같은 문서입니다."
  },
  {
    id: 7,
    question: "인증번호 문자 재발송 기능에서 '1초 동안 10회 연속으로 버튼을 광클하는 악의적 요청'을 방어하기 위해 PM이 기획서에 명시해야 하는 규칙은 무엇인가요?",
    options: [
      "1) 30초 내 재발송 방지 쿨타임 및 '잠시 후 다시 시도해주세요' 토스트 팝업 정책",
      "2) 스마트폰 전원을 끄는 명령어",
      "3) 글자 폰트를 빨간색으로 변경하기",
      "4) 아무런 방어 정책을 세우지 않기"
    ],
    correctAnswerIndex: 0,
    explanation: "문자 발송 비용 낭비와 서버 과부하를 막기 위해 '재발송 대기 시간(Cooldown)' 같은 구체적인 예외 방어 정책을 기획서에 반드시 명시해야 합니다."
  },
  {
    id: 8,
    question: "고객 불만(VOC) '로그인이 너무 자주 풀려요!'를 접한 PM이 가장 먼저 확인해야 할 정량적 데이터는 무엇인가요?",
    options: [
      "1) 특정 OS/앱 버전별 로그인 세션 만료 시간 및 결제 페이지 진입 전 이탈률 지표",
      "2) 회사 구내식당 메뉴",
      "3) 디자이너의 출근 시간",
      "4) 키보드 자판 종류"
    ],
    correctAnswerIndex: 0,
    explanation: "VOC를 확인한 후 로그와 데이터 분석 툴(GA, Amplitude 등)을 통해 실제 어떤 환경에서 오류가 발생하고 이탈로 이어지는지 원인을 규명해야 합니다."
  },
  {
    id: 9,
    question: "전체 제품 팀이 궁극적으로 추구하는 단 하나의 핵심 성공 지표를 무엇이라 부르나요?",
    options: [
      "1) 북극성 지표 (North Star Metric)",
      "2) 남십자성 지표",
      "3) 나침반 각도",
      "4) 분기 전기요금"
    ],
    correctAnswerIndex: 0,
    explanation: "북극성 지표(North Star Metric)는 고객에게 전달하는 핵심 가치와 비즈니스 성장을 가장 잘 대변하는 팀의 최종 나침반 지표입니다."
  },
  {
    id: 10,
    question: "새로운 기능 배포 후 기획 의도대로 잘 작동하는지 확인하기 위해 기획자가 반드시 거쳐야 하는 마지막 단계는 무엇인가요?",
    options: [
      "1) 배포 후 데이터 지표(전환율, 사용률) 분석 및 유저 피드백 모니터링 (Post-Launch Review)",
      "2) 즉시 컴퓨터 끄고 퇴근하기",
      "3) 기존 코드 모두 지우기",
      "4) 기획서 파일 삭제하기"
    ],
    correctAnswerIndex: 0,
    explanation: "기획의 완성은 출시가 아니라, 출시 후 실제 사용자의 반응과 데이터 지표를 측정하고 다음 개선점(Iteration)을 찾는 것입니다."
  }
];
