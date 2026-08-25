# 🌟 웹 개발 & PM 종합 학습 플랫폼 (study_web)

> **"웹 개발과 기획, 비전공자도 1초 만에 이해할 수 있습니다!"**  
> 기획(Planning)부터 디자인(UI/UX), 퍼블리싱(HTML/CSS), 프론트엔드/백엔드 개발(API & DB), 그리고 실전 PM 아카데미까지 웹 서비스 제작의 전 과정을 직관적인 실생활 비유와 실시간 인터랙티브 실습으로 학습하는 올인원 웹 가이드입니다.

---

## 📌 주요 특징 (Key Highlights)

- 💡 **초보자 맞춤형 쉬운 설명 & 일상 비유**  
  - 식당 비유(손님=브라우저, 웨이터=API, 주방=서버, 냉장고=DB)
  - 집 짓기 비유(철골=HTML, 인테리어=CSS, 전등 스위치=JS)
  - 레고 블록 비유로 배우는 디자인 시스템 & 토큰
- 🎮 **체험형 인터랙티브 실습 샌드박스 (Live Interactive Sandbox)**  
  - 📐 **화면설계서 빌더**: 블록을 쌓아 만드는 와이어프레임 배치 실습
  - 🎨 **디자인 토큰 조절기**: 색상, 둥글기, 폰트 크기 변경 시 컴포넌트 실시간 반응
  - 💻 **HTML/CSS 코드 플레이그라운드**: 코드 수정 즉시 우측 렌더링
  - 🚀 **회원가입 API & DB 시뮬레이터**: 브라우저 ➔ 서버 ➔ DB 저장 흐름 실시간 시각화
  - 🧮 **실시간 RICE 우선순위 계산기**: Reach, Impact, Confidence, Effort 입력으로 점수 자동 산출
- 🏆 **전 페이지 10문항 인터랙티브 퀴즈 팩 (총 60문항)**  
  - 슬라이드 모드(한 문제씩 풀기) & 전체 목록 모드 지원
  - 정답/오답 즉각 피드백 및 친절한 해설 제공
  - 10문항 완료 시 최종 스코어보드 제공
- 🔍 **실시간 스마트 통합 검색 (Cmd / Ctrl + K)**  
  - 전체 커리큘럼의 핵심 키워드 및 개념 빠른 탐색
- 📱 **Apple 감성 UI & 반응형 디자인**  
  - Glassmorphism & 부드러운 마이크로 인터랙션
  - Web Haptic API 기반 Apple 스타일 햅틱 진동 피드백
  - 다크 모드 / 라이트 모드 완벽 지원

---

## 📚 학습 커리큘럼 구조

| 순서 | 카테고리 | 핵심 학습 내용 | 실습 및 도구 |
|:---:|:---|:---|:---|
| **0** | **🌱 웹 시작하기** | 웹 4대 요소(클라이언트/서버/DB/API) 식당 비유, DNS, 웹 6단계 흐름 | 실시간 장바구니 주문 시뮬레이터 |
| **1** | **📐 1. 웹 기획 & PM** | 기획자 역할, 요구사항 정의서, IA(정보구조도), 와이어프레임 vs SB, WBS 일정표 | 화면설계서(Wireframe) 빌더 실습 |
| **2** | **🎨 2. 웹 디자인 & UI/UX** | UI vs UX 차이, 디자인 시스템 & 디자인 토큰(Design Tokens), 피그마 협업 | 실시간 디자인 토큰 조절기 |
| **3** | **🏗️ 3. 웹 퍼블리싱** | HTML5 시맨틱 태그, CSS 박스모델(Margin/Padding), Flexbox, 반응형 웹 | HTML/CSS 라이브 코드 에디터 |
| **4** | **⚙️ 4. 웹 개발 & API** | 프론트엔드 동적 제어, 백엔드 보안/로직, REST API 4대 메서드, JSON, DB 인덱스 | 회원가입 API & DB 실시간 연동 |
| **5** | **🚀 5. PM 아카데미** | PO vs PM 역할, Request vs Requirement, User Story, AC, Boundary Case, VOC, PRD | 실시간 RICE 점수 계산기 & PRD 템플릿 |
| **6** | **📖 6. 웹 용어 정리 사전** | 기획, 디자인, 퍼블리싱, 개발 전 영역 핵심 실무 전문 용어 사전 | 키워드 실시간 검색 및 카테고리 필터 |

---

## 🛠️ 기술 스택 (Tech Stack)

### Frontend
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Pretendard Variable](https://github.com/orioncactus/pretendard)

---

## 📁 디렉토리 구조 (Project Structure)

```text
study_web/
├── public/
├── src/
│   ├── assets/              # 이미지 및 정적 에셋
│   ├── components/          # 공통 UI 컴포넌트
│   │   ├── Callout.jsx          # 안내 및 팁 콜아웃 박스
│   │   ├── CodePlayground.jsx   # 라이브 HTML/CSS 코드 에디터
│   │   ├── Navbar.jsx           # 상단 네비게이션 및 다크모드/검색 버튼
│   │   ├── QuizCard.jsx         # 단일 퀴즈 컴포넌트
│   │   ├── QuizPack.jsx         # 10문항 인터랙티브 퀴즈 팩 (채점/해설/스코어)
│   │   ├── SearchModal.jsx      # Cmd+K 전역 검색 모달
│   │   ├── Sidebar.jsx          # 좌측 사이드바 커리큘럼 네비게이션
│   │   └── TableOfContents.jsx  # 우측 페이지 내 목차 (TOC)
│   ├── data/                # 네비게이션 및 퀴즈 데이터셋
│   │   ├── navigationData.js    # 사이드바, 목차, 검색 인덱스 데이터
│   │   └── quizData.js          # 전 페이지 60문항 퀴즈 데이터셋
│   ├── pages/               # 학습 메인 및 서브 페이지
│   │   ├── MainPage.jsx             # 웹 시작하기 & 종합 개요
│   │   ├── SubPagePlanning.jsx      # 1. 웹 기획 & PM
│   │   ├── SubPageDesign.jsx        # 2. 웹 디자인 & UI/UX
│   │   ├── SubPagePublishing.jsx    # 3. 웹 퍼블리싱 (HTML/CSS)
│   │   ├── SubPageDevelopment.jsx   # 4. 웹 개발 & API/DB
│   │   ├── SubPagePmAcademy.jsx     # 5. PM 아카데미 노트 정리
│   │   └── SubPageGlossary.jsx      # 6. 웹 용어 정리 사전
│   ├── utils/               # 유틸리티 함수
│   │   └── appleHaptics.js      # Web Vibration API 기반 햅틱 효과
│   ├── App.jsx              # 라우팅 및 전역 레이아웃
│   ├── index.css            # 전역 스타일 및 Pretendard 폰트 설정
│   └── main.jsx             # React 진입점
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 시작 가이드 (Getting Started)

### 1. 패키지 설치
```bash
npm install
```

### 2. 로컬 개발 서버 실행
```bash
npm run dev
```
브라우저에서 `http://localhost:5173`으로 접속합니다.

### 3. 프로덕션 빌드
```bash
npm run build
```

---

## 📜 라이선스 (License)

This project is licensed under the MIT License.
