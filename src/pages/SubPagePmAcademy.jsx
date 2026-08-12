import React, { useState } from 'react';
import Callout from '../components/Callout';
import QuizCard from '../components/QuizCard';
import { 
  BookOpen, 
  Brain, 
  Target, 
  Layers, 
  FileText, 
  CheckSquare, 
  AlertTriangle, 
  MessageSquare, 
  TrendingUp, 
  Calculator, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Award,
  Copy,
  Check
} from 'lucide-react';
import { triggerHaptic } from '../utils/appleHaptics';

export default function SubPagePmAcademy({ onSelectRoute }) {
  // RICE Score Calculator Interactive State
  const [reach, setReach] = useState(1000);
  const [impact, setImpact] = useState(3); // 3: Massive, 2: High, 1: Medium, 0.5: Low
  const [confidence, setConfidence] = useState(80); // percentage
  const [effort, setEffort] = useState(2); // person-months

  // Calculate RICE Score = (Reach * Impact * Confidence%) / Effort
  const riceScore = Math.round((reach * impact * (confidence / 100)) / (effort || 1));

  // Copy template state
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, index) => {
    triggerHaptic('medium');
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <article className="prose prose-slate dark:prose-invert max-w-none w-full animate-page-entry">
      {/* Page Header Metadata */}
      <div className="border-b border-slate-200/80 dark:border-white/10 pb-6 mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
          <span>6. PM 아카데미</span>
          <span>/</span>
          <span>Notion 노트 정리</span>
          <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/20 text-[11px]">
            실무 기획 가이드
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-cyan-500 shrink-0" />
          PM 아카데미 노트 정리
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          PM 학습 대화 내용 및 핵심 실무 역량을 카테고리별로 구조화한 프론트엔드/기획 통합 노트입니다.
          화면 중심 사고에서 문제 해결 중심 사고로 전환하는 방법부터 요구사항, PRD, RICE 우선순위, 실무 케이스 분석까지 다룹니다.
        </p>
      </div>

      {/* Section 0: Overview */}
      <section id="overview" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2 flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-amber-500" />
          문서 개요 & 핵심 7단계 흐름
        </h2>
        <p className="text-slate-700 dark:text-slate-300">
          본 문서는 PM 실무 학습에 필요한 핵심 개념을 정리한 가이드입니다. 
          디자이너 또는 다른 직군에서 PM으로 확장할 때 <strong>"무엇을 어떻게 사고해야 하는가"</strong>를 명확히 제시합니다.
        </p>

        <div className="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 not-prose">
          {[
            { num: '01', title: '문제 중심 사고', desc: '화면보다 문제를 먼저 정의' },
            { num: '02', title: '의도 파악', desc: '요청(Request)의 숨은 목적 확인' },
            { num: '03', title: '데이터 검증', desc: '해결책보다 데이터 근거 확보' },
            { num: '04', title: '사용자 가치', desc: '기능이 아닌 가치 먼저 정의' },
            { num: '05', title: '요구사항 구체화', desc: '개발자/QA가 이해할 수준 명세' },
            { num: '06', title: '우선순위 판단', desc: '영향도, 비즈니스, 개발비용 종합' },
            { num: '07', title: '의사결정 문서', desc: '팀의 의사결정을 이끄는 PRD' },
          ].map((step, idx) => (
            <div key={idx} className="p-4 rounded-xl apple-glass-card border border-slate-200/60 dark:border-white/10">
              <div className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 mb-1">{step.num}</div>
              <div className="font-bold text-sm text-slate-900 dark:text-white mb-1">{step.title}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{step.desc}</div>
            </div>
          ))}
        </div>

        <Callout type="note" title="디자이너 출신 PM의 강점">
          UI/UX 디자이너는 사용자 관점, 화면 사용 흐름, 디자인 시스템 이해도가 높아 
          "어떻게 보이는가"를 넘어 <strong>"왜 이렇게 설계하는가"</strong>로 확장할 때 강력한 시너지를 발휘합니다.
        </Callout>
      </section>

      {/* Section 1: Role & Mindset */}
      <section id="role-mindset" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2 flex items-center gap-2">
          <Brain className="w-6 h-6 text-cyan-500" />
          1. PM의 기본 역할 & PO/기획자 차이
        </h2>

        <p className="text-slate-700 dark:text-slate-300">
          PM은 단순히 프로젝트 일정을 관리하는 사람(Project Manager)이 아니라, 
          <strong>문제를 발견하고 해결 방향을 결정하는 사람(Product Manager)</strong>입니다.
        </p>

        <div className="my-6 p-6 rounded-2xl bg-slate-900 text-slate-100 not-prose shadow-xl border border-slate-800">
          <h3 className="text-lg font-bold text-cyan-400 mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5" /> PM의 핵심 5단계 무한 반복 프로세스
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center text-xs font-semibold">
            <div className="p-3 bg-slate-800 rounded-xl w-full">1. 문제 발견</div>
            <ArrowRight className="w-4 h-4 text-slate-500 hidden md:block shrink-0" />
            <div className="p-3 bg-slate-800 rounded-xl w-full">2. 가설 수립</div>
            <ArrowRight className="w-4 h-4 text-slate-500 hidden md:block shrink-0" />
            <div className="p-3 bg-slate-800 rounded-xl w-full">3. 데이터 확인</div>
            <ArrowRight className="w-4 h-4 text-slate-500 hidden md:block shrink-0" />
            <div className="p-3 bg-slate-800 rounded-xl w-full">4. 해결책 설계</div>
            <ArrowRight className="w-4 h-4 text-slate-500 hidden md:block shrink-0" />
            <div className="p-3 bg-slate-800 rounded-xl w-full">5. 실행 & 결과 검증</div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          PM, PO, 서비스 기획자 역할 구별표
        </h3>

        <div className="overflow-x-auto not-prose my-4">
          <table className="w-full text-sm text-left border-collapse rounded-xl overflow-hidden shadow-2xs">
            <thead className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold">
              <tr>
                <th className="p-3.5 border-b border-slate-200 dark:border-slate-700">구분</th>
                <th className="p-3.5 border-b border-slate-200 dark:border-slate-700">핵심 역할</th>
                <th className="p-3.5 border-b border-slate-200 dark:border-slate-700">주요 관심사</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              <tr className="bg-white dark:bg-slate-900/50">
                <td className="p-3.5 font-bold text-cyan-600 dark:text-cyan-400">PO (Product Owner)</td>
                <td className="p-3.5">어디로 갈 것인가 (제품 비전 및 백로그 총괄)</td>
                <td className="p-3.5">비즈니스 목표, ROI, 제품 임팩트</td>
              </tr>
              <tr className="bg-slate-50/50 dark:bg-slate-900/30">
                <td className="p-3.5 font-bold text-purple-600 dark:text-purple-400">PM (Product Manager)</td>
                <td className="p-3.5">방향을 어떻게 실행할 것인가 (문제 정의 & 요구사항 명세)</td>
                <td className="p-3.5">사용자 가치, 실행 프로세스, 팀 협업</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/50">
                <td className="p-3.5 font-bold text-emerald-600 dark:text-emerald-400">서비스 기획자</td>
                <td className="p-3.5">화면과 정책을 상세 명세 (화면설계서 & 정책서 작성)</td>
                <td className="p-3.5">화면 UI 흐름, 디테일 정책, 인터랙션 예외사항</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Callout type="tip" title="면접 및 협업 팁">
          국내에서는 회사 규모에 따라 PM, PO, 서비스 기획자의 역할이 혼용되는 경우가 많습니다. 
          입사 또는 협업 시에는 <strong>"이 회사에서 PM이 가진 권한과 책임 범위는 어디까지인가요?"</strong>를 반드시 확인해야 합니다.
        </Callout>
      </section>

      {/* Section 2: Problem Definition & Requirement */}
      <section id="problem-definition" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2 flex items-center gap-2">
          <Target className="w-6 h-6 text-purple-500" />
          2. 문제 정의와 Request vs Requirement
        </h2>

        <p className="text-slate-700 dark:text-slate-300">
          PM은 이해관계자나 대표의 요청(Request)을 그대로 개발팀에 전달하지 않습니다. 
          요청 뒤에 숨겨진 <strong>진짜 문제(Problem)를 발견하고 요구사항(Requirement)으로 번역</strong>합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
          <div className="p-5 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-slate-800 dark:text-slate-200">
            <div className="font-bold text-rose-600 dark:text-rose-400 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> Request (단순 요청)
            </div>
            <p className="text-sm">"우리 앱에 채팅 기능 빨리 추가해 주세요."</p>
            <span className="text-xs text-rose-500 block mt-2">→ 수단/해결책을 바로 지정함 (근거 불명확)</span>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-slate-800 dark:text-slate-200">
            <div className="font-bold text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-2">
              <CheckSquare className="w-5 h-5" /> Requirement (문제 번역)
            </div>
            <p className="text-sm">"사용자 체류 시간이 이전 대비 30% 감소한 문제를 해결한다."</p>
            <span className="text-xs text-emerald-500 block mt-2">→ 진짜 문제와 검증 가능한 지표를 연결함</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          좋은 요구사항 작성 명세 가이드
        </h3>
        
        <div className="p-5 rounded-2xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 not-prose my-4">
          <div className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400 mb-2">[개선된 요구사항 예시: 비밀번호 재설정]</div>
          <pre className="text-xs text-slate-800 dark:text-slate-200 whitespace-pre-wrap font-mono leading-relaxed bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
{`사용자는 등록된 이메일로 본인 인증 후 비밀번호를 재설정할 수 있다.

■ 필수 입력값
  - 등록 이메일, 새 비밀번호, 비밀번호 확인

■ 비밀번호 정책
  - 8자 이상 20자 이하 (영문, 숫자, 특수문자 조합 필수)
  - 최근 3개월 이내 사용했던 기존 비밀번호 사용 불가

■ 예외 및 실패 처리 (Exception Flow)
  - 미등록 이메일: "등록되지 않은 계정입니다." 안내
  - 인증번호 5분 유효시간 초과: "인증 시간이 만료되었습니다. 재발송 해주세요."
  - 5회 연속 인증 실패: Security Lock (계정 보호를 위해 30분간 시도 제한)`}
          </pre>
        </div>
      </section>

      {/* Section 3: User Story & Acceptance Criteria */}
      <section id="user-story-ac" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2 flex items-center gap-2">
          <Layers className="w-6 h-6 text-cyan-500" />
          3. User Story와 Acceptance Criteria (AC)
        </h2>

        <p className="text-slate-700 dark:text-slate-300">
          User Story는 <strong>사용자 관점에서 기능의 가치</strong>를 설명하며, Acceptance Criteria(인수 조건)는 <strong>기능의 완성을 판단하는 구체적 기준</strong>입니다.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 not-prose my-6">
          {/* User Story Box */}
          <div className="p-6 rounded-2xl apple-glass-card border border-cyan-500/30">
            <div className="text-sm font-bold text-cyan-600 dark:text-cyan-400 mb-2 flex items-center gap-2">
              <FileText className="w-5 h-5" /> User Story 구조
            </div>
            <div className="p-3 bg-cyan-500/10 text-cyan-900 dark:text-cyan-200 rounded-xl text-xs font-mono mb-4">
              As a [사용자], I want [행동], So that [가치]
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>예시 (쿠폰 자동 적용):</strong><br />
              "배달 주문을 하는 사용자로서,<br />
              가장 할인 금액이 큰 쿠폰이 자동으로 적용되길 원한다.<br />
              그래야 번거롭게 쿠폰을 찾아 선택하지 않고 빠르게 주문을 완료할 수 있다."
            </p>
          </div>

          {/* AC Box */}
          <div className="p-6 rounded-2xl apple-glass-card border border-purple-500/30">
            <div className="text-sm font-bold text-purple-600 dark:text-purple-400 mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" /> Acceptance Criteria (인수 조건)
            </div>
            <div className="p-3 bg-purple-500/10 text-purple-900 dark:text-purple-200 rounded-xl text-xs font-mono mb-4">
              Given [상황], When [이벤트], Then [결과]
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>예시:</strong><br />
              - 장바구니에 보유 쿠폰 2개 이상일 때 주문서 진입 시 최고 할인 쿠폰 자동 선택<br />
              - 적용 가능 최소 금액 미달 시 차선책 쿠폰 적용 또는 안내 노출<br />
              - 사용자가 수동 변경 시 자동 선택 해제 및 변경 쿠폰 유지
            </p>
          </div>
        </div>

        <Callout type="note" title="한 줄 요약">
          <strong>User Story</strong>는 "왜 이 기능이 필요한가?"를 설명하고, <strong>Acceptance Criteria</strong>는 "언제 개발 완료로 인정하는가?"를 정의합니다.
        </Callout>
      </section>

      {/* Section 4: Boundary Case & VOC */}
      <section id="boundary-voc" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-amber-500" />
          4. Boundary Case & VOC (고객의 소리)
        </h2>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          Boundary Case (경계 예외 조건)
        </h3>
        <p className="text-slate-700 dark:text-slate-300">
          Boundary Case는 일반적인 성공/실패 흐름 사이에 위치한 <strong>경계 상황</strong>을 의미합니다. 
          신입 기획자가 놓치기 쉬우며 QA 테스트 및 보안의 핵심이 됩니다.
        </p>

        <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-slate-800 dark:text-slate-200 not-prose my-4">
          <h4 className="font-bold text-amber-600 dark:text-amber-400 text-sm mb-2 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> 비밀번호 재설정 실무 Boundary Case 체크리스트
          </h4>
          <ul className="text-xs space-y-1.5 list-disc list-inside text-slate-700 dark:text-slate-300">
            <li>인증 유효시간(5분)의 정확히 4분 59초 및 5분 01초 시점 인증 요청 처리</li>
            <li>인증 메일 발송 후 1초 간격으로 연속 10번 재발송 버튼 클릭 시 중복 처리 정책</li>
            <li>인증 메일이 지연 도착하여 유효시간 지난 후 이전 인증 링크 클릭 시 예외 메시지</li>
            <li>모바일과 PC에서 동일 계정으로 동시에 비밀번호 재설정 시도 시 세션 처리</li>
          </ul>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          VOC (Voice of Customer)와 우선순위 연결
        </h3>
        <p className="text-slate-700 dark:text-slate-300">
          VOC는 단순 불만이 아니라 <strong>사용자가 겪은 실제 문제의 단서</strong>입니다. 
          PM은 VOC를 데이터로 연결하여 우선순위를 판단해야 합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-4">
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div className="font-bold text-sm text-slate-900 dark:text-white mb-1">단순 불만 VOC</div>
            <div className="text-xs text-rose-500">"앱이 끊기고 다크모드가 없어서 눈이 아파요!"</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div className="font-bold text-sm text-slate-900 dark:text-white mb-1">PM의 데이터 변환</div>
            <div className="text-xs text-emerald-500">"결제 진입 3단계에서 이탈률 42% 발생 (로그인 세션 만료 문제 확인)"</div>
          </div>
        </div>
      </section>

      {/* Section 5: PRD & Priority (RICE) */}
      <section id="prd-priority" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-cyan-500" />
          5. PRD 작성과 RICE 우선순위 계산기
        </h2>

        <p className="text-slate-700 dark:text-slate-300">
          PRD(Product Requirement Document)는 단순히 기능을 나열한 문서가 아니라 
          <strong>"왜 지금 이 기능을 만들어야 하는가?"를 설명하는 의사결정 문서</strong>입니다.
        </p>

        {/* RICE Calculator Interactive Component */}
        <div className="my-8 p-6 rounded-3xl apple-glass-card border border-cyan-500/30 not-prose shadow-xl">
          <div className="flex items-center justify-between mb-4 border-b border-slate-200 dark:border-white/10 pb-4">
            <div className="flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-white">
              <Calculator className="w-6 h-6 text-cyan-500" />
              <span>실시간 RICE Score 계산기 시뮬레이터</span>
            </div>
            <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono font-bold">
              RICE = (Reach × Impact × Confidence) / Effort
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex justify-between">
                  <span>Reach (도달 사용자 수 / 월)</span>
                  <span className="text-cyan-600 font-mono">{reach.toLocaleString()} 명</span>
                </label>
                <input 
                  type="range" 
                  min="100" 
                  max="10000" 
                  step="100" 
                  value={reach} 
                  onChange={(e) => setReach(Number(e.target.value))} 
                  className="w-full accent-cyan-500 cursor-pointer"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex justify-between">
                  <span>Impact (영향도 점수)</span>
                  <span className="text-cyan-600 font-mono">{impact} 점 (3: Massive, 2: High, 1: Medium)</span>
                </label>
                <input 
                  type="range" 
                  min="0.5" 
                  max="3" 
                  step="0.5" 
                  value={impact} 
                  onChange={(e) => setImpact(Number(e.target.value))} 
                  className="w-full accent-cyan-500 cursor-pointer"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex justify-between">
                  <span>Confidence (신뢰도 %)</span>
                  <span className="text-cyan-600 font-mono">{confidence} %</span>
                </label>
                <input 
                  type="range" 
                  min="50" 
                  max="100" 
                  step="10" 
                  value={confidence} 
                  onChange={(e) => setConfidence(Number(e.target.value))} 
                  className="w-full accent-cyan-500 cursor-pointer"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex justify-between">
                  <span>Effort (개발 공수 / 인월)</span>
                  <span className="text-cyan-600 font-mono">{effort} M/M (Person-Months)</span>
                </label>
                <input 
                  type="range" 
                  min="0.5" 
                  max="6" 
                  step="0.5" 
                  value={effort} 
                  onChange={(e) => setEffort(Number(e.target.value))} 
                  className="w-full accent-cyan-500 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900 text-white flex items-center justify-between">
            <div className="text-sm font-semibold">
              계산된 RICE 우선순위 점수:
            </div>
            <div className="text-3xl font-extrabold font-mono text-cyan-400">
              {riceScore.toLocaleString()} <span className="text-xs text-slate-400">pts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Case Study & Data Driven */}
      <section id="case-study" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2 flex items-center gap-2">
          <Award className="w-6 h-6 text-emerald-500" />
          6. 실무 케이스: 배달 앱 우선순위 판단
        </h2>

        <p className="text-slate-700 dark:text-slate-300">
          제한된 자원 속에서 4가지 요청 중 어떤 기능 2가지를 먼저 개발해야 하는지 분석한 실무 케이스입니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
          <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
            <div className="font-bold text-emerald-600 dark:text-emerald-400 mb-1">1순위: 로그인 오류 수정</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              배달 앱에서 로그인이 안 되면 주문 자체가 불가능합니다. 일 300건 VOC와 치명적 이탈률 발생으로 최우선 처리.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30">
            <div className="font-bold text-cyan-600 dark:text-cyan-400 mb-1">2순위: 쿠폰 자동 적용 / 지도 로딩 개선</div>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              쿠폰 적용 실패로 인한 결제 포기율 데이터 검증 후 결제 전환율 개선에 직접적 기여.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-200/50 dark:bg-slate-800/50 opacity-70">
            <div className="font-bold text-slate-500 mb-1">우선순위 보류: 다크 모드</div>
            <p className="text-xs text-slate-500">
              배달 주문은 빠른 완료가 목적이므로, 긴 체류시간이 필요 없어 야간 사용자 비중 데이터 없이는 후순위 배치.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Templates & Curriculum */}
      <section id="templates-curriculum" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2 flex items-center gap-2">
          <Copy className="w-6 h-6 text-cyan-500" />
          7. PM 문서 템플릿 & 커리큘럼
        </h2>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          PRD 템플릿 (복사하여 바로 활용)
        </h3>

        {/* PRD Template Copy Block */}
        <div className="relative my-4 not-prose">
          <button 
            onClick={() => handleCopy(prdTemplateText, 1)}
            className="absolute top-3 right-3 px-3 py-1.5 rounded-xl bg-cyan-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-md hover:bg-cyan-500 transition-colors cursor-pointer"
          >
            {copiedIndex === 1 ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copiedIndex === 1 ? '복사 완료!' : '템플릿 복사'}</span>
          </button>
          <pre className="p-5 rounded-2xl bg-slate-900 text-slate-200 text-xs font-mono whitespace-pre-wrap overflow-x-auto leading-relaxed border border-slate-800">
{prdTemplateText}
          </pre>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          PM 실무 핵심 문장 Top 5
        </h3>

        <div className="space-y-3 not-prose my-4">
          {[
            "PM은 기능을 만드는 사람이 아니라, 최우선 문제를 해결하는 사람이다.",
            "좋은 PM은 성급한 해결책보다 근거 있는 질문을 먼저 던진다.",
            "요청(Request)을 그대로 만들지 않고 의도를 분석해 요구사항(Requirement)으로 번역한다.",
            "User Story는 '왜'를 설명하고, Acceptance Criteria는 '완성 기준'을 정의한다.",
            "의견은 누구나 말할 수 있다. PM은 의견을 데이터와 사용자 가치로 증명해야 한다."
          ].map((quote, idx) => (
            <div key={idx} className="p-4 rounded-xl apple-glass-card border-l-4 border-l-cyan-500 text-sm font-semibold text-slate-800 dark:text-slate-200">
              "{quote}"
            </div>
          ))}
        </div>

        {/* Footer Navigation Next Step */}
        <div className="mt-12 pt-6 border-t border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 not-prose">
          <button
            onClick={() => {
              triggerHaptic('light');
              onSelectRoute('/learn/planning');
            }}
            className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-200 font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-200 dark:hover:bg-white/20 transition-all cursor-pointer"
          >
            ← 웹 기획 기초로 이동
          </button>

          <button
            onClick={() => {
              triggerHaptic('medium');
              onSelectRoute('/learn/glossary');
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-cyan-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:bg-cyan-500 transition-all cursor-pointer"
          >
            <span>웹 용어 정리 보러가기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </article>
  );
}

const prdTemplateText = `# [기능명] PRD (Product Requirement Document)

## 1. 배경 (Background)
- 기능 추가 / 변경의 배경 및 상황

## 2. 문제 정의 (Problem Definition)
- 현재 사용자가 겪고 있는 문제 및 비즈니스 페인 포인트

## 3. 목표 및 지표 (Goal & Success Metrics)
- 정량적 성과 지표 (예: 결제 전환율 15% 상승, 이탈률 20% 감소)

## 4. User Story
- As a [사용자], I want [행동], So that [얻고 싶은 가치]

## 5. 핵심 요구사항 (Key Requirements)
- 정상 흐름 (Happy Path) 및 예외 처리 정책

## 6. Acceptance Criteria (인수 조건)
- Given - When - Then 기준 명세

## 7. Boundary Case & Security
- 경계 예외 사항 및 보안 고려 항목`;
