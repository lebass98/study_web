import React, { useState } from 'react';
import Callout from '../components/Callout';
import QuizPack from '../components/QuizPack';
import { developmentQuizzes } from '../data/quizData';
import { 
  ArrowLeft, 
  ArrowRight, 
  Code, 
  Server, 
  Database, 
  Globe, 
  Play, 
  UserPlus, 
  CheckCircle2, 
  Sparkles,
  Zap,
  Lock,
  Send,
  HelpCircle,
  Cpu
} from 'lucide-react';
import { triggerHaptic } from '../utils/appleHaptics';

export default function SubPageDevelopment({ onSelectRoute }) {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [registeredUsers, setRegisteredUsers] = useState([
    { id: 1, name: '김철수', email: 'chulsoo@example.com' }
  ]);
  const [apiStatus, setApiStatus] = useState('대기 중: 양식을 입력하고 요청 버튼을 눌러보세요.');

  const handleRegister = (e) => {
    e.preventDefault();
    if (!userName || !userEmail) return;

    triggerHaptic('medium');
    setApiStatus('🚀 [1단계] 브라우저: POST /api/users 요청 전송 중...');
    setTimeout(() => {
      triggerHaptic('light');
      setApiStatus('⚙️ [2단계] 백엔드 서버: 비밀번호 검증 및 이메일 중복 체크 중...');
    }, 800);

    setTimeout(() => {
      triggerHaptic('light');
      setApiStatus('💾 [3단계] 데이터베이스: INSERT INTO users 실행 (새 회원 저장 완료!)');
      setRegisteredUsers(prev => [...prev, { id: Date.now(), name: userName, email: userEmail }]);
      setUserName('');
      setUserEmail('');
    }, 1600);

    setTimeout(() => {
      triggerHaptic('success');
      setApiStatus('✨ [4단계] 201 Created: 성공 응답 완료! 화면에 회원 목록 갱신!');
    }, 2400);
  };

  return (
    <article className="prose prose-slate dark:prose-invert max-w-none w-full animate-page-entry text-base">
      {/* Page Header Metadata */}
      <div className="border-b border-slate-200/80 dark:border-white/10 pb-6 mb-8">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
          <span>4. 웹 개발 & API</span>
          <span>/</span>
          <span>프론트엔드, 백엔드, DB, API</span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/20 text-[11px] font-bold">
            초보자 가이드
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 flex items-center gap-3">
          <Cpu className="w-8 h-8 text-emerald-500 shrink-0" />
          웹 개발 (Frontend, Backend, DB & API)
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          <strong>"정적인 화면에 생명과 두뇌를 불어넣는 시간!"</strong><br />
          버튼을 누르면 팝업이 뜨는 프론트엔드(JavaScript), 비밀번호와 결제를 안전하게 처리하는 백엔드 서버, 데이터를 평생 보관하는 데이터베이스(DB), 그리고 이들을 연결하는 API를 아주 쉽게 이해해 봅니다.
        </p>
      </div>

      {/* Section 0: Overview */}
      <section id="overview" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2 flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-amber-500" />
          개요: 프론트엔드 vs 백엔드 1초 비교
        </h2>

        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          웹 개발은 크게 <strong>사용자가 눈으로 직접 만지는 앞단(프론트엔드)</strong>과 <strong>뒤편에서 묵묵히 안전하게 계산하는 뒷단(백엔드)</strong>으로 나뉩니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-6">
          <div className="p-6 rounded-3xl border border-cyan-500/30 bg-cyan-50/40 dark:bg-cyan-950/20 apple-card-hover">
            <div className="flex items-center gap-2 font-bold text-cyan-600 dark:text-cyan-400 text-lg mb-2">
              <Code className="w-5 h-5" /> 🖥️ 프론트엔드 (Frontend)
            </div>
            <div className="text-xs font-bold text-cyan-700 dark:text-cyan-300 mb-2">은행의 화려한 창구 & 터치스크린 ATM기</div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              사용자가 버튼을 누르면 부드러운 애니메이션을 보여주고, 입력창에 잘못된 글자가 없는지 확인하며, 서버에서 받아온 정보를 예쁘게 화면에 그려줍니다.
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-purple-500/30 bg-purple-50/40 dark:bg-purple-950/20 apple-card-hover">
            <div className="flex items-center gap-2 font-bold text-purple-600 dark:text-purple-400 text-lg mb-2">
              <Server className="w-5 h-5" /> 🔐 백엔드 (Backend)
            </div>
            <div className="text-xs font-bold text-purple-700 dark:text-purple-300 mb-2">은행 뒤편의 거대한 보안 금고 & 전산실</div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              비밀번호가 맞는지 엄격하게 암호화 검증하고, 결제 금액을 계산하며, 고객의 소중한 돈과 개인정보를 데이터베이스(DB) 금고에 안전하게 저장합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: JavaScript */}
      <section id="js" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2 flex items-center gap-2">
          <Zap className="w-6 h-6 text-amber-500" />
          1. JavaScript: 화면에 동작(Action) 부여하기
        </h2>

        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          HTML이 뼈대, CSS가 옷이라면 <strong>JavaScript는 신경계와 근육</strong>입니다. 
          "버튼을 클릭했을 때 알림창을 띄우고 서버에 데이터를 보내라!"라는 명령을 내립니다.
        </p>

        <div className="my-4 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-[#f8f9fa] dark:bg-[#1c1d22] font-mono text-sm text-slate-800 dark:text-slate-200">
          <pre>{`// 사용자가 버튼을 클릭하면 실행되는 자바스크립트 코드
document.querySelector('button').addEventListener('click', () => {
  alert('🎉 장바구니에 상품이 안전하게 담겼습니다!');
});`}</pre>
        </div>
      </section>

      {/* Section 2: Backend & Database */}
      <section id="backend" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2 flex items-center gap-2">
          <Database className="w-6 h-6 text-emerald-500" />
          2. 백엔드 서버 & 데이터베이스(DB)의 역할
        </h2>

        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          컴퓨터 전원을 끄더라도 내 아이디와 비밀번호, 작성한 글이 사라지지 않는 이유는 
          <strong>데이터베이스(DB)</strong>라는 거대한 엑셀 표(창고)에 영구 보관되기 때문입니다.
        </p>

        <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-slate-800 dark:text-slate-200 not-prose my-4">
          <div className="font-bold text-emerald-700 dark:text-emerald-300 text-sm mb-2 flex items-center gap-2">
            <Lock className="w-4 h-4" /> 💡 왜 브라우저에 비밀번호를 직접 저장하지 않을까요?
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            브라우저 화면은 누구나 F12(개발자 도구)를 눌러 훔쳐볼 수 있습니다! 
            따라서 비밀번호와 결제 정보는 오직 <strong>백엔드 서버</strong>를 통해서만 철저히 암호화되어 안전한 <strong>DB 금고</strong>에 보관됩니다.
          </p>
        </div>
      </section>

      {/* Section 3: REST API */}
      <section id="api" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2 flex items-center gap-2">
          <Send className="w-6 h-6 text-cyan-500" />
          3. REST API: 손님과 주방을 잇는 4가지 주문 방식
        </h2>

        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          <strong>API (Application Programming Interface)</strong>는 브라우저(클라이언트)가 서버에게 
          "데이터를 줘!", "새로 저장해줘!"라고 요청할 때 사용하는 <strong>표준 주문서 메뉴판</strong>입니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 not-prose my-4">
          <div className="p-4 rounded-2xl apple-glass-card border border-emerald-500/30">
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-sm font-bold text-emerald-600 dark:text-emerald-400">GET (가져오기)</span>
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 font-bold">조회/읽기</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300">"서버님! 상품 목록 좀 보여주세요!" (조회만 하고 데이터는 건드리지 않음)</p>
          </div>

          <div className="p-4 rounded-2xl apple-glass-card border border-cyan-500/30">
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-sm font-bold text-cyan-600 dark:text-cyan-400">POST (등록하기)</span>
              <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 font-bold">생성/등록</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300">"서버님! 새 회원가입 정보와 댓글을 새로 저장해주세요!"</p>
          </div>

          <div className="p-4 rounded-2xl apple-glass-card border border-amber-500/30">
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-sm font-bold text-amber-600 dark:text-amber-400">PUT / PATCH (수정하기)</span>
              <span className="text-xs px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 font-bold">변경/수정</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300">"서버님! 제 프로필 사진과 비밀번호를 변경해주세요!"</p>
          </div>

          <div className="p-4 rounded-2xl apple-glass-card border border-rose-500/30">
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-sm font-bold text-rose-600 dark:text-rose-400">DELETE (삭제하기)</span>
              <span className="text-xs px-2 py-0.5 rounded bg-rose-500/10 text-rose-600 font-bold">제거/삭제</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300">"서버님! 제가 작성한 게시글을 삭제해주세요!"</p>
          </div>
        </div>
      </section>

      {/* Section 4: Live Sandbox */}
      <section id="live-demo" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          4. 실습: 회원가입 API & 데이터베이스 실시간 연동 (Live Sandbox)
        </h2>

        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          아래 회원가입 양식에서 이름과 이메일을 입력한 뒤 <strong>[회원가입 요청]</strong> 버튼을 클릭해보세요! 
          브라우저 ➔ API 통신 ➔ 백엔드 로직 ➔ DB 저장까지의 4단계 과정이 실시간으로 실행됩니다.
        </p>

        <div className="not-prose my-6 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-[#f8f9fa] dark:bg-[#1c1d22] text-slate-800 dark:text-slate-100 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-3 mb-6">
            <div className="flex items-center gap-2">
              <UserPlus className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100">회원가입 API & DB 통신 실습</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Form */}
            <form onSubmit={handleRegister} className="space-y-4 bg-white dark:bg-slate-950 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">이름 (Name)</label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="예: 홍길동"
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">이메일 (Email)</label>
                <input
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="example@domain.com"
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors apple-btn cursor-pointer"
              >
                회원가입 요청 (POST /api/users)
              </button>

              <div className="p-3.5 rounded-xl bg-cyan-50 dark:bg-slate-900 border border-cyan-200 dark:border-slate-800 font-mono text-xs text-cyan-800 dark:text-cyan-300">
                상태: {apiStatus}
              </div>
            </form>

            {/* Right DB Table Preview */}
            <div className="bg-white dark:bg-slate-950 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-3 text-xs font-bold text-slate-700 dark:text-slate-300">
                <Database className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>데이터베이스 테이블 (`users` Table Live)</span>
              </div>

              <div className="space-y-2">
                {registeredUsers.map((u) => (
                  <div key={u.id} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs animate-in fade-in">
                    <div>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{u.name}</span>
                      <span className="text-slate-500 dark:text-slate-400 block text-[11px]">{u.email}</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono font-semibold">
                      SAVED
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Quiz */}
      <section id="quiz" className="scroll-mt-24 mb-12">
        <QuizPack
          title="4. 웹 개발 & API 마스터 퀴즈 10선"
          subtitle="프론트엔드/백엔드 차이, REST API 4대 메서드(GET/POST/PUT/DELETE), DB 인덱스, JSON 통신을 10개 퀴즈로 마스터해보세요!"
          quizzes={developmentQuizzes}
        />
      </section>

      {/* Section 6: Summary */}
      <section id="summary" className="scroll-mt-24 pt-6 border-t border-slate-200/80 dark:border-white/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 not-prose">
          <button
            onClick={() => {
              triggerHaptic('light');
              onSelectRoute('/learn/publishing');
            }}
            className="w-full sm:w-auto px-5 py-3 rounded-2xl border border-slate-300 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 font-semibold text-sm flex items-center justify-center gap-2 transition-all apple-btn cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>이전: 3. 웹 퍼블리싱</span>
          </button>

          <button
            onClick={() => {
              triggerHaptic('medium');
              onSelectRoute('/learn/pm-academy');
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all apple-btn cursor-pointer"
          >
            <span>다음: 5. PM 아카데미</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </article>
  );
}

