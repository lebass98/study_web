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
  Check,
  Compass,
  Ship,
  Wrench,
  HelpCircle,
  Clock,
  ThumbsUp,
  Lightbulb,
  CheckCircle2
} from 'lucide-react';
import { triggerHaptic } from '../utils/appleHaptics';

export default function SubPagePmAcademy({ onSelectRoute }) {
  // RICE Score Calculator Interactive State
  const [reach, setReach] = useState(1000);
  const [impact, setImpact] = useState(3); // 3: 엄청 큰 영향(Massive), 2: 큰 영향(High), 1: 보통(Medium), 0.5: 작은 영향(Low)
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
    <article className="prose prose-slate dark:prose-invert max-w-none w-full animate-page-entry text-base">
      {/* Page Header Metadata */}
      <div className="border-b border-slate-200/80 dark:border-white/10 pb-6 mb-8">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
          <span>6. PM 아카데미</span>
          <span>/</span>
          <span>Notion 노트 정리</span>
          <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/20 text-[11px] font-bold">
            초보자 친화 가이드
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-cyan-500 shrink-0" />
          PM 아카데미 노트 정리
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          <strong>"PM(Product Manager)은 대체 무슨 일을 하는 사람인가요?"</strong><br />
          어려운 전문 용어 대신, <strong>일상 속 친숙한 비유(배달앱, 식당 주문 등)</strong>를 통해 PM의 역할과 사고방식, 요구사항 작성법부터 PRD와 우선순위 판단까지 한눈에 이해할 수 있도록 쉽게 풀어 정리했습니다.
        </p>
      </div>

      {/* Section 0: Overview */}
      <section id="overview" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2 flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-amber-500" />
          한눈에 보는 PM의 7가지 핵심 사고 흐름
        </h2>
        
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          초보 기획자가 가장 많이 하는 실수는 <strong>"어떤 화면을 그릴까?"</strong>부터 고민하는 것입니다. 
          진짜 실력 있는 PM은 화면을 그리기 전에 <strong>"사용자가 겪는 진짜 문제가 무엇인가?"</strong>부터 집요하게 파고듭니다.
        </p>

        <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 not-prose">
          {[
            { num: '01', title: '문제 중심 사고', desc: '화면 디자인보다 사용자의 불편(문제)을 먼저 정의해요', icon: Target },
            { num: '02', title: '진짜 속마음 파악', desc: '단순 요청(Request) 뒤에 숨은 진짜 의도를 찾아요', icon: Lightbulb },
            { num: '03', title: '데이터로 증명', desc: '"제 생각엔..."이 아니라 실제 통계와 숫자로 검증해요', icon: TrendingUp },
            { num: '04', title: '사용자 가치 우선', desc: '기능 자랑이 아니라 "사용자에게 뭐가 좋은가"를 봐요', icon: Award },
            { num: '05', title: '구체적 요구사항', desc: '개발자·디자이너가 헷갈리지 않게 꼼꼼히 적어줘요', icon: FileText },
            { num: '06', title: '우선순위 판단', desc: '시간과 돈은 한정적! 무엇을 먼저 만들지 결정해요', icon: Calculator },
            { num: '07', title: '의사결정 문서 (PRD)', desc: '팀원 모두가 한 방향을 바라보도록 나침반을 만들어요', icon: Compass },
          ].map((step, idx) => (
            <div key={idx} className="p-4 rounded-2xl apple-glass-card border border-slate-200/60 dark:border-white/10 hover:border-cyan-500/40 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-extrabold text-cyan-600 dark:text-cyan-400">{step.num}</span>
                <step.icon className="w-4 h-4 text-slate-400" />
              </div>
              <div className="font-bold text-sm text-slate-900 dark:text-white mb-1">{step.title}</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{step.desc}</div>
            </div>
          ))}
        </div>

        <Callout type="tip" title="디자이너/비전공자 출신도 PM을 잘할 수 있나요?">
          <strong>당연합니다!</strong> 디자이너는 사용자의 동선과 심리를 누구보다 잘 이해하고, 비전공자는 고객의 입장에서 서비스의 불편함을 가장 직관적으로 발견할 수 있습니다. 여기에 <strong>"왜 이 문제를 해결해야 하는가?"</strong>라는 비즈니스 시각만 더해지면 훌륭한 PM이 될 수 있습니다.
        </Callout>
      </section>

      {/* Section 1: Role & Mindset */}
      <section id="role-mindset" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2 flex items-center gap-2">
          <Brain className="w-6 h-6 text-cyan-500" />
          1. PM은 무슨 일을 하나요? (PO vs PM vs 서비스 기획자)
        </h2>

        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          PM은 코딩을 직접 하거나 디자인을 직접 그리지 않습니다. 
          대신 <strong>"우리 제품이 어떤 문제를 해결해야 하는지 정의하고, 팀이 성공적으로 만들 수 있도록 돕는 사람(Product Manager)"</strong>입니다.
        </p>

        {/* 찰떡 비유 배 항해 카드 */}
        <div className="my-6 p-6 rounded-3xl apple-glass-card border border-cyan-500/20 not-prose">
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Ship className="w-5 h-5 text-cyan-500" /> 🚢 '항해하는 배'로 1초 만에 이해하는 직군 차이
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-sm mb-2">
                <Compass className="w-4 h-4" /> PO (Product Owner)
              </div>
              <div className="font-bold text-slate-900 dark:text-white text-base mb-1">"저 섬으로 갑시다!" (선장)</div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                비즈니스 목표와 방향을 결정합니다. 회사의 이익과 장기적 비전을 책임집니다.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-purple-500/30">
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-sm mb-2">
                <Brain className="w-4 h-4" /> PM (Product Manager)
              </div>
              <div className="font-bold text-slate-900 dark:text-white text-base mb-1">"이 항로가 제일 빠릅니다!" (항해사)</div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                섬에 가기 위해 암초를 피하고, 자원과 일정을 조율하며 팀원들이 만들 제품 요구사항을 정의합니다.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-emerald-500/30">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm mb-2">
                <Wrench className="w-4 h-4" /> 서비스 기획자
              </div>
              <div className="font-bold text-slate-900 dark:text-white text-base mb-1">"조타 핸들과 계기판 설계" (설계사)</div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                화면의 버튼 배치, 팝업 문구, 구체적인 작동 정책(스토리보드)을 아주 상세하게 설계합니다.
              </p>
            </div>
          </div>
        </div>

        {/* PM의 5단계 일하는 방식 */}
        <div className="my-6 p-6 rounded-3xl bg-white dark:bg-[#181a20] text-slate-900 dark:text-slate-100 not-prose shadow-2xs border border-slate-200 dark:border-slate-800">
          <h3 className="text-base font-bold text-[#087ea4] dark:text-sky-400 mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5" /> PM이 일하는 5단계 사이클 (실제 예시로 보기)
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
            PM은 기획서를 한 번 쓰고 끝나는 게 아니라, 제품을 내보내고 끊임없이 결과를 확인하며 개선합니다.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 text-center text-sm font-semibold">
            <div className="p-3 bg-sky-50 dark:bg-sky-950/60 text-[#087ea4] dark:text-sky-300 border border-sky-100/80 rounded-xl">
              <div className="text-[11px] text-slate-400 font-mono">STEP 1</div>
              <div className="font-bold my-1">문제 발견</div>
              <div className="text-xs font-normal text-slate-600 dark:text-slate-400">"배달 주문 취소가 늘었네?"</div>
            </div>
            <div className="p-3 bg-sky-50 dark:bg-sky-950/60 text-[#087ea4] dark:text-sky-300 border border-sky-100/80 rounded-xl">
              <div className="text-[11px] text-slate-400 font-mono">STEP 2</div>
              <div className="font-bold my-1">가설 수립</div>
              <div className="text-xs font-normal text-slate-600 dark:text-slate-400">"결제 단계가 너무 복잡한가?"</div>
            </div>
            <div className="p-3 bg-sky-50 dark:bg-sky-950/60 text-[#087ea4] dark:text-sky-300 border border-sky-100/80 rounded-xl">
              <div className="text-[11px] text-slate-400 font-mono">STEP 3</div>
              <div className="font-bold my-1">데이터 확인</div>
              <div className="text-xs font-normal text-slate-600 dark:text-slate-400">"결제창 이탈률 40% 확인!"</div>
            </div>
            <div className="p-3 bg-sky-50 dark:bg-sky-950/60 text-[#087ea4] dark:text-sky-300 border border-sky-100/80 rounded-xl">
              <div className="text-[11px] text-slate-400 font-mono">STEP 4</div>
              <div className="font-bold my-1">해결책 설계</div>
              <div className="text-xs font-normal text-slate-600 dark:text-slate-400">"1초 간편결제 도입 기획"</div>
            </div>
            <div className="p-3 bg-sky-50 dark:bg-sky-950/60 text-[#087ea4] dark:text-sky-300 border border-sky-100/80 rounded-xl">
              <div className="text-[11px] text-slate-400 font-mono">STEP 5</div>
              <div className="font-bold my-1">결과 검증</div>
              <div className="text-xs font-normal text-slate-600 dark:text-slate-400">"이탈률이 15%로 감소!"</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Problem Definition & Request vs Requirement */}
      <section id="problem-definition" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2 flex items-center gap-2">
          <Target className="w-6 h-6 text-purple-500" />
          2. 단순 요청(Request) vs 진짜 요구사항(Requirement)
        </h2>

        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          초보 기획자는 대표님이나 고객이 <strong>"이 버튼 만들어줘!"</strong>라고 하면 그대로 만들러 달려갑니다.<br />
          하지만 프로 PM은 <strong>"그 버튼을 왜 만들어달라고 하실까? 진짜 문제가 뭐지?"</strong>를 먼저 파악합니다.
        </p>

        {/* 식당 비유 예시 박스 */}
        <div className="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-slate-800 dark:text-slate-200 not-prose">
          <div className="font-bold text-amber-700 dark:text-amber-300 text-sm mb-2 flex items-center gap-2">
            <Lightbulb className="w-4 h-4" /> 💡 식당에서의 비유: 소금 좀 더 주세요!
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            손님이 <em>"여기 소금 좀 듬뿍 주세요!"</em>라고 외쳤을 때:<br />
            - <strong>초보 요리사:</strong> 아무 생각 없이 소금을 한 대접 갖다 줌 ➔ 손님이 짜서 음식을 다 남김<br />
            - <strong>프로 요리사:</strong> <em>"국물이 싱거우신가요, 아니면 고기 간이 안 맞으신가요?"</em> 물어보고 손님이 원하는 따뜻한 육수를 리필해 줌!
          </p>
        </div>

        {/* IT 실무 비교 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
          <div className="p-5 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-slate-800 dark:text-slate-200">
            <div className="font-bold text-rose-600 dark:text-rose-400 mb-2 flex items-center gap-2 text-base">
              <AlertTriangle className="w-5 h-5" /> ❌ Request (단순 요청)
            </div>
            <p className="text-sm font-semibold mb-2 text-slate-900 dark:text-white">
              "우리 앱에 실시간 채팅 기능 빨리 넣어주세요!"
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              수단(채팅)만 정해져 있고, 왜 필요한지 근거가 없습니다. 채팅을 개발하려면 서버비와 개발 기간이 몇 달씩 낭비될 수 있습니다.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-slate-800 dark:text-slate-200">
            <div className="font-bold text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-2 text-base">
              <CheckSquare className="w-5 h-5" /> ⭕ Requirement (진짜 요구사항으로 번역)
            </div>
            <p className="text-sm font-semibold mb-2 text-slate-900 dark:text-white">
              "고객이 배달 기사님께 '문 앞에 놔주세요'를 전달하지 못해 답답해하는 문제를 해결한다."
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              굳이 비싼 채팅방을 안 만들어도, <strong>'기사님께 1초 요청사항 선택 버튼'</strong> 하나로 단 이틀 만에 완벽히 해결할 수 있습니다!
            </p>
          </div>
        </div>

        {/* 요구사항 명세 가이드 */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          개발자가 반하는 친절한 요구사항 작성법
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4">
          요구사항을 적을 때는 <strong>'성공할 때', '사용자가 실수했을 때', '악당이 공격할 때'</strong>의 3가지를 모두 적어주어야 합니다.
        </p>
        
        <div className="p-5 rounded-2xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 not-prose my-4">
          <div className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400 mb-2">[실무 예시: 비밀번호 재설정 요구사항]</div>
          <pre className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 whitespace-pre-wrap font-mono leading-relaxed bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
{`■ 기능 요약: 가입한 이메일로 본인 인증 후 새 비밀번호를 설정한다.

1. 정상 흐름 (Happy Path - 아무 문제 없이 잘 될 때)
   - 이메일 입력 ➔ 인증번호 6자리 발송 ➔ 5분 안에 입력 ➔ 새 비밀번호 입력 완료

2. 실수 처리 (Exception Flow - 사용자가 잘못 입력했을 때)
   - 없는 이메일 입력 시: "가입되지 않은 이메일입니다" 붉은색 안내
   - 비밀번호 규칙 불만족: "영문, 숫자, 특수문자를 포함해 8자 이상 입력해주세요"

3. 보안 및 악용 방지 (Security & Boundary)
   - 인증번호 유효시간: 정확히 5분 (5분 지나면 "시간 만료" 팝업)
   - 5번 연속 틀리면: 해킹 방지를 위해 30분간 시도 잠금`}
          </pre>
        </div>
      </section>

      {/* Section 3: User Story & Acceptance Criteria */}
      <section id="user-story-ac" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2 flex items-center gap-2">
          <Layers className="w-6 h-6 text-cyan-500" />
          3. 유저 스토리(User Story) & 인수 조건(AC)
        </h2>

        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          <strong>유저 스토리</strong>는 사용자의 관점에서 <em>"내가 왜 이 기능이 필요한지"</em>를 말하는 것이고,<br />
          <strong>인수 조건(Acceptance Criteria)</strong>은 <em>"개발자님, 이 기준을 모두 만족하면 합격(완성)입니다!"</em>라고 정해주는 시험 채점표입니다.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 not-prose my-6">
          {/* User Story Box */}
          <div className="p-6 rounded-3xl apple-glass-card border border-cyan-500/30">
            <div className="text-sm font-bold text-cyan-600 dark:text-cyan-400 mb-2 flex items-center gap-2">
              <FileText className="w-5 h-5" /> 유저 스토리 (User Story) 공식
            </div>
            <div className="p-3 bg-cyan-500/10 text-cyan-900 dark:text-cyan-200 rounded-xl text-xs sm:text-sm font-mono mb-4 font-bold">
              [누가] ~하기 위해, [무엇을] 원한다. 왜냐하면 [어떤 혜택]이 있으니까!
            </div>
            <div className="p-4 rounded-2xl bg-white/90 dark:bg-slate-950/80 border border-slate-200/80 dark:border-white/10">
              <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 block mb-1">🍔 배달앱 쿠폰 자동 적용 예시:</span>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                "배고픈 직장인 사용자로서,<br />
                주문 결제할 때 <strong>가장 할인 금액이 큰 쿠폰이 알아서 척척 적용</strong>되길 원한다.<br />
                그래야 귀찮게 쿠폰함을 뒤적거리지 않고 <strong>1초 만에 빠르게 주문을 끝낼 수 있으니까!</strong>"
              </p>
            </div>
          </div>

          {/* AC Box */}
          <div className="p-6 rounded-3xl apple-glass-card border border-purple-500/30">
            <div className="text-sm font-bold text-purple-600 dark:text-purple-400 mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" /> 인수 조건 (Acceptance Criteria - AC)
            </div>
            <div className="p-3 bg-purple-500/10 text-purple-900 dark:text-purple-200 rounded-xl text-xs sm:text-sm font-mono mb-4 font-bold">
              Given(상황) ➔ When(행동) ➔ Then(결과)
            </div>
            <div className="p-4 rounded-2xl bg-white/90 dark:bg-slate-950/80 border border-slate-200/80 dark:border-white/10 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2">
              <div>
                <span className="font-bold text-purple-600 dark:text-purple-400">기준 1:</span> 장바구니에 쿠폰이 2장 이상 있을 때, 주문서에 들어가면 가장 할인율 높은 쿠폰이 자동 선택된다.
              </div>
              <div>
                <span className="font-bold text-purple-600 dark:text-purple-400">기준 2:</span> 최소 주문 금액 미달인 쿠폰은 자동 적용에서 제외된다.
              </div>
              <div>
                <span className="font-bold text-purple-600 dark:text-purple-400">기준 3:</span> 사용자가 직접 다른 쿠폰을 누르면, 자동 선택이 해제되고 사용자가 고른 쿠폰이 적용된다.
              </div>
            </div>
          </div>
        </div>

        <Callout type="note" title="한 줄 요약">
          <strong>User Story</strong> = "사용자가 원하는 가치 (Why & What)"<br />
          <strong>Acceptance Criteria (AC)</strong> = "개발 완성을 판단하는 객관적 합격 기준 (Checklist)"
        </Callout>
      </section>

      {/* Section 4: Boundary Case & VOC */}
      <section id="boundary-voc" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-amber-500" />
          4. 경계 조건(Boundary Case)과 고객의 소리(VOC)
        </h2>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          Boundary Case (경계 조건 / 엣지 케이스)란?
        </h3>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          평소에는 잘 되다가 <strong>"아슬아슬한 타이밍이나 특이한 상황"</strong>에서 오류가 터지는 순간들을 말합니다.<br />
          기획자가 이 경계 조건을 미리 생각해서 기획서에 적어두지 않으면, 개발자가 당황하거나 서비스 출시 후 치명적인 버그가 생깁니다.
        </p>

        <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-slate-800 dark:text-slate-200 not-prose my-4">
          <h4 className="font-bold text-amber-700 dark:text-amber-300 text-sm mb-3 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> ⚠️ 초보 PM이 꼭 챙겨야 할 경계 조건 체크리스트 예시
          </h4>
          <ul className="text-xs sm:text-sm space-y-2 list-disc list-inside text-slate-700 dark:text-slate-300 leading-relaxed">
            <li><strong>시간 경계:</strong> 5분 인증 유효시간의 정확히 <strong>4분 59초</strong>에 눌렀을 때와 <strong>5분 01초</strong>에 눌렀을 때 어떻게 처리할 것인가?</li>
            <li><strong>연타 방지:</strong> 사용자가 성격이 급해서 1초에 '인증번호 재발송' 버튼을 10번 연속 누르면 어떻게 막을 것인가?</li>
            <li><strong>통신 장애:</strong> 엘리베이터 안에서 결제 버튼을 누르다가 인터넷이 끊기면 결제는 되고 주문은 안 들어가는 일이 없도록 어떻게 방어할 것인가?</li>
            <li><strong>다중 기기:</strong> 폰과 노트북에서 같은 아이디로 동시에 비밀번호를 바꾸려고 하면 누구 것을 먼저 인정할 것인가?</li>
          </ul>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          VOC(Voice of Customer): 화난 고객의 목소리에서 보물 찾기
        </h3>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          고객 센터에 접수되는 불만(VOC)은 단순한 투정이 아닙니다. PM에게는 <strong>서비스의 문제를 찾아내는 최고의 단서</strong>입니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-4">
          <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div className="font-bold text-sm text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4 text-rose-500" /> 고객의 단순 불만 (VOC)
            </div>
            <div className="text-sm text-rose-500 font-semibold mb-2">"이 앱 진짜 쓰레기네요. 결제가 자꾸 안 돼요!"</div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              초보 기획자는 "고객님이 화가 나셨네..." 하고 넘어가지만, 프로 PM은 바로 데이터를 열어봅니다.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-emerald-500/30">
            <div className="font-bold text-sm text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-emerald-500" /> PM의 데이터 분석 & 원인 발견
            </div>
            <div className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold mb-2">
              "특정 아이폰 기종에서 결제하기 버튼이 화면 하단에 가려지는 버그 확인!"
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              버튼 여백 20px 수정 하나로 해당 기종 결제 성공률이 40% ➔ 98%로 수직 상승했습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: PRD & Priority (RICE) */}
      <section id="prd-priority" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-cyan-500" />
          5. PRD 작성과 RICE 우선순위 계산기
        </h2>

        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          <strong>PRD(Product Requirement Document)</strong>는 팀원(디자이너, 개발자, 대표님) 모두가 엉뚱한 방향으로 가지 않도록 
          <strong>"우리가 왜 이 기능을 만드는지, 무엇을 언제까지 만들어야 하는지"</strong>를 명확히 안내하는 제품 기획서입니다.
        </p>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-6 mb-3">
          RICE 프레임워크: 무엇을 먼저 만들까?
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
          하고 싶은 아이디어는 100개인데, 개발팀 인력과 시간은 한정되어 있습니다. 
          이때 가장 합리적인 우선순위를 점수로 매기는 공식이 바로 <strong>RICE</strong>입니다.
        </p>

        {/* RICE Calculator Interactive Component */}
        <div className="my-8 p-6 sm:p-8 rounded-3xl apple-glass-card border border-cyan-500/30 not-prose shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 border-b border-slate-200 dark:border-white/10 pb-4">
            <div className="flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-white">
              <Calculator className="w-6 h-6 text-cyan-500" />
              <span>실시간 RICE 우선순위 계산기 시뮬레이터</span>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono font-bold w-fit">
              RICE = (Reach × Impact × Confidence) ÷ Effort
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex justify-between mb-1">
                  <span>R (Reach - 월간 사용자 도달 수)</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-mono font-bold">{reach.toLocaleString()} 명</span>
                </label>
                <p className="text-[11px] text-slate-500 mb-2">이 기능을 한 달 동안 몇 명의 사용자가 쓰게 될까요?</p>
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

              <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex justify-between mb-1">
                  <span>I (Impact - 사용자/매출 영향도)</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-mono font-bold">{impact} 점 ({impact === 3 ? '엄청 큰 효과' : impact === 2 ? '큰 효과' : impact === 1 ? '보통 효과' : '작은 효과'})</span>
                </label>
                <p className="text-[11px] text-slate-500 mb-2">사용자에게 주는 만족도와 비즈니스 효과가 얼마나 큰가요?</p>
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

            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex justify-between mb-1">
                  <span>C (Confidence - 데이터 확신도)</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-mono font-bold">{confidence} %</span>
                </label>
                <p className="text-[11px] text-slate-500 mb-2">단순 감이 아니라 통계 데이터나 인터뷰 근거가 얼마나 확실한가요?</p>
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

              <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex justify-between mb-1">
                  <span>E (Effort - 개발 난이도 및 기간)</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-mono font-bold">{effort} M/M (인월: 개발자 수 × 개월)</span>
                </label>
                <p className="text-[11px] text-slate-500 mb-2">개발자가 몇 명 투입되어 몇 달 동안 개발해야 하나요? (적을수록 점수 상승)</p>
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

          <div className="p-5 rounded-2xl bg-white dark:bg-[#181a20] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
            <div>
              <div className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                계산된 RICE 우선순위 점수
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                점수가 높을수록 이번 스프린트에서 먼저 개발해야 하는 1순위 과제입니다!
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#087ea4] dark:text-sky-400">
              {riceScore.toLocaleString()} <span className="text-sm text-slate-500 font-normal">pts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Case Study & Data Driven */}
      <section id="case-study" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2 flex items-center gap-2">
          <Award className="w-6 h-6 text-emerald-500" />
          6. 실전 상황극: "대표님이 4개 다 만들재요! 뭐부터 할까요?"
        </h2>

        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          배달 앱 스타트업 대표님이 회의실에 들어와서 외칩니다:<br />
          <em>"이번 달에 <strong>로그인 오류도 고치고, 쿠폰 자동적용도 넣고, 다크모드도 넣고, AI 추천</strong>도 다 넣읍시다!"</em><br />
          하지만 개발자는 1명뿐입니다. PM은 어떻게 교통정리를 해야 할까요?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose my-6">
          <div className="p-5 rounded-2xl bg-white dark:bg-[#1e222b] border-2 border-emerald-500 shadow-md">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide mb-1">
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">🔥 1순위 긴급</span>
            </div>
            <div className="font-bold text-slate-900 dark:text-white mb-2 text-lg">로그인 튕김 오류 수정</div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>이유:</strong> 문이 안 열리는데 인테리어를 예쁘게 꾸며봤자 손님이 들어올 수 없습니다! 하루 300건의 이탈이 발생하고 있으므로 무조건 오늘 즉시 수정해야 합니다.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#1e222b] border-2 border-sky-500 shadow-md">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wide mb-1">
              <span className="px-2 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20">⚡ 2순위 추천</span>
            </div>
            <div className="font-bold text-slate-900 dark:text-white mb-2 text-lg">쿠폰 자동 적용 기능</div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>이유:</strong> 장바구니까지 온 손님이 할인 쿠폰을 못 찾아 결제를 포기하는 이탈률이 35%나 됩니다. 이 기능만 넣어도 결제 매출이 즉시 15% 상승합니다!
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#1e222b] border border-slate-200 dark:border-slate-800 opacity-75">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">
              <span className="px-2 py-0.5 rounded-full bg-slate-500/10 border border-slate-500/20">⏸ 후순위 보류</span>
            </div>
            <div className="font-bold text-slate-600 dark:text-slate-400 mb-2 text-lg">다크 모드 개발</div>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              <strong>이유:</strong> 다크모드는 있으면 좋지만, 배달앱은 사용자가 1~2분 만에 주문하고 바로 끕니다. 지금 당장 매출이나 주문에 결정적인 영향을 주지 않으므로 다음 분기로 연기합니다.
            </p>
          </div>
        </div>

        <Callout type="tip" title="PM의 대화법">
          대표님에게 <em>"안 돼요, 시간 없어요"</em>라고 거절하는 대신, <strong>"지금 로그인 오류를 먼저 잡으면 일일 이탈 300명을 구하고, 쿠폰 자동적용을 하면 매출이 15% 오릅니다. 다크모드는 다음 달에 이어서 진행하시죠!"</strong>라고 데이터로 제안하면 모두가 기분 좋게 납득합니다.
        </Callout>
      </section>

      {/* Interactive Quiz Challenges */}
      <section className="scroll-mt-24 mb-12 not-prose">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-cyan-500" />
          초보 PM 이해도 쑥쑥 퀴즈
        </h2>

        <QuizCard 
          question="Q1. 마케팅팀에서 '우리 앱에도 인기 상품 찜하기 버튼 만들어주세요!'라고 요청했습니다. 좋은 PM의 올바른 첫 반응은 무엇일까요?"
          options={[
            "네 알겠습니다! 당장 개발팀에 가서 찜 버튼을 만들어달라고 한다.",
            "왜 찜하기 기능이 필요하신지, 어떤 사용자 문제를 해결하고 싶은지 의도와 배경 데이터를 먼저 묻는다.",
            "화면 디자인이 먼저니까 피그마를 켜서 하트 모양 아이콘부터 예쁘게 그린다.",
            "개발팀 일정이 바쁘니 무조건 안 된다고 단칼에 거절한다."
          ]}
          correctAnswerIndex={1}
          explanation="정답입니다! 단순 요청(Request)을 그대로 수용하지 않고, 요청의 배경에 있는 진짜 문제와 해결하려는 목적(Requirement)을 먼저 파악하는 것이 PM의 가장 중요한 역할입니다."
        />

        <QuizCard 
          question="Q2. 개발 및 QA팀에게 기능 개발 완료 여부를 객관적으로 판단할 수 있도록 'Given - When - Then' 형식으로 작성해주는 기준 문서는 무엇일까요?"
          options={[
            "IA (정보구조도)",
            "User Story (유저 스토리)",
            "Acceptance Criteria (AC - 인수 조건)",
            "Design System (디자인 시스템)"
          ]}
          correctAnswerIndex={2}
          explanation="정답입니다! Acceptance Criteria(인수 조건)는 '특정 상황(Given)에서 사용자가 행동(When)했을 때 어떤 결과(Then)가 나와야 합격인가'를 명시하는 완성 기준표입니다."
        />
      </section>

      {/* Section 7: Templates & Curriculum */}
      <section id="templates-curriculum" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2 flex items-center gap-2">
          <Copy className="w-6 h-6 text-cyan-500" />
          7. 실전 PRD 템플릿 & 핵심 요약
        </h2>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          실무에서 바로 쓰는 초보자용 PRD 템플릿
        </h3>
        <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4">
          오른쪽 상단의 <strong>'템플릿 복사'</strong> 버튼을 눌러 Notion이나 문서 도구에 붙여넣고 [괄호] 안의 내용만 채워 넣으면 멋진 PRD가 완성됩니다!
        </p>

        {/* PRD Template Copy Block */}
        <div className="relative my-4 not-prose">
          <button 
            onClick={() => handleCopy(prdTemplateText, 1)}
            className="absolute top-3 right-3 px-3 py-1.5 rounded-xl bg-[#087ea4] text-white text-sm sm:text-base font-bold flex items-center gap-1.5 shadow-md hover:bg-sky-600 transition-colors cursor-pointer z-10"
          >
            {copiedIndex === 1 ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copiedIndex === 1 ? '복사 완료!' : '템플릿 복사'}</span>
          </button>
          <pre className="p-5 rounded-2xl bg-white dark:bg-[#181a20] text-slate-900 dark:text-slate-100 text-xs sm:text-sm font-mono whitespace-pre-wrap overflow-x-auto leading-relaxed border border-slate-200 dark:border-slate-800">
{prdTemplateText}
          </pre>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-8 mb-3">
          초보 PM이 마음속에 새겨둘 5가지 황금 원칙
        </h3>

        <div className="space-y-3 not-prose my-4">
          {[
            { title: "기능이 아니라 문제를 해결하라", desc: "사용자가 원하는 건 '기능' 그 자체가 아니라 '나의 귀찮음을 없애주는 편리함'입니다." },
            { title: "성급한 해결책 대신 좋은 질문을 던져라", desc: "'어떻게 만들까?'보다 '왜 이 문제가 생겼을까?'를 먼저 물어보세요." },
            { title: "요청(Request)을 요구사항(Requirement)으로 번역하라", desc: "누군가 버튼을 만들어달라고 할 때, 그 버튼으로 달성하려는 진짜 목적을 찾아주세요." },
            { title: "유저 스토리는 '왜', 인수 조건은 '완성 기준'이다", desc: "User Story로 가치를 설명하고, Acceptance Criteria(AC)로 채점 기준을 정해주세요." },
            { title: "의견은 누구나 말할 수 있지만, PM은 숫자로 증명한다", desc: "내 생각이나 감 대신 데이터 지표와 VOC를 바탕으로 팀을 설득하세요." }
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl apple-glass-card border-l-4 border-l-cyan-500">
              <div className="font-bold text-sm text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>{idx + 1}. {item.title}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 ml-6 leading-relaxed">
                {item.desc}
              </p>
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
            ← 1. 웹 기획 기초로 돌아가기
          </button>

          <button
            onClick={() => {
              triggerHaptic('medium');
              onSelectRoute('/learn/glossary');
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-cyan-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:bg-cyan-500 transition-all cursor-pointer"
          >
            <span>5. 웹 용어 사전 보러가기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </article>
  );
}

const prdTemplateText = `# [기능명] 제품 요구사항 정의서 (PRD)

## 1. 배경 및 기획 의도 (Background)
- 왜 이 기능을 만들려고 하나요? (현재 상황 및 계기)
- 예: 주문 결제 단계에서 쿠폰을 찾지 못해 이탈하는 사용자가 35% 발생함.

## 2. 해결하려는 진짜 문제 (Problem Definition)
- 고객이나 비즈니스가 겪고 있는 핵심 고통(Pain Point)은 무엇인가요?
- 예: 보유 쿠폰이 여러 개일 때 어떤 것이 가장 이득인지 계산하기 번거로움.

## 3. 목표 및 성공 지표 (Goal & Success Metrics)
- 이 기능이 성공했는지 무엇으로 측정할 건가요? (숫자 지표)
- 목표 1: 장바구니 결제 전환율 기존 60% ➔ 75%로 향상
- 목표 2: 쿠폰 관련 고객 문의(VOC) 50% 감소

## 4. 유저 스토리 (User Story)
- As a [배달 주문 고객], 
- I want [가장 할인 금액이 큰 쿠폰이 자동으로 적용되길], 
- So that [쿠폰을 일일이 비교하지 않고 1초 만에 최저가로 주문할 수 있다].

## 5. 핵심 요구사항 (Requirements)
1) 정상 흐름: 주문서 진입 시 사용 가능한 쿠폰 중 최고 할인 쿠폰 자동 선택
2) 예외 처리: 최소 주문금액 미달 쿠폰은 제외 및 '금액 부족' 문구 표시
3) 수동 변경: 사용자가 직접 다른 쿠폰을 누르면 해당 쿠폰으로 즉시 변경

## 6. 인수 조건 (Acceptance Criteria - AC)
- [ ] Given 쿠폰 2장 이상 보유 시, When 주문서 진입 시, Then 최대 할인 쿠폰 1장이 자동 적용되어 할인 금액에 표시된다.
- [ ] Given 쿠폰 적용 후, When 다른 메뉴를 삭제하여 최소 금액 미달 시, Then 쿠폰 적용이 해제되고 안내 툴팁이 뜬다.

## 7. 경계 조건 및 주의사항 (Boundary Case)
- 유효기간이 1분 남은 쿠폰을 적용한 채로 2분 뒤 결제 버튼을 누르면 어떻게 처리할 것인가?
- 동일 할인 금액의 쿠폰이 2개(예: 3000원 할인 쿠폰 2개)일 때 어떤 것을 우선 적용할 것인가?`;

