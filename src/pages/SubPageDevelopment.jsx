import React, { useState } from 'react';
import Callout from '../components/Callout';
import CodePlayground from '../components/CodePlayground';
import QuizCard from '../components/QuizCard';
import { ArrowLeft, ArrowRight, Code, Server, Database, Globe, Play, UserPlus, CheckCircle2 } from 'lucide-react';
import { triggerHaptic } from '../utils/appleHaptics';

export default function SubPageDevelopment({ onSelectRoute }) {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [registeredUsers, setRegisteredUsers] = useState([
    { id: 1, name: '김철수', email: 'chulsoo@example.com' }
  ]);
  const [apiStatus, setApiStatus] = useState('대기 중');

  const handleRegister = (e) => {
    e.preventDefault();
    if (!userName || !userEmail) return;

    triggerHaptic('medium');
    setApiStatus('🚀 [1단계] 클라이언트: POST /api/users 요청 전송 중...');
    setTimeout(() => {
      triggerHaptic('light');
      setApiStatus('⚙️ [2단계] 서버: 비즈니스 로직 처리 및 이메일 중복 체크 중...');
    }, 800);

    setTimeout(() => {
      triggerHaptic('light');
      setApiStatus('💾 [3단계] 데이터베이스: INSERT INTO users 실행 완료!');
      setRegisteredUsers(prev => [...prev, { id: Date.now(), name: userName, email: userEmail }]);
      setUserName('');
      setUserEmail('');
    }, 1600);

    setTimeout(() => {
      triggerHaptic('success');
      setApiStatus('✨ [4단계] 201 Created: 회원가입 성공 응답 완료!');
    }, 2400);
  };

  return (
    <article className="prose prose-slate dark:prose-invert max-w-none w-full animate-page-entry">
      {/* Page Header Metadata */}
      <div className="border-b border-slate-200/80 dark:border-white/10 pb-6 mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
          <span>4. 웹 개발 & API</span>
          <span>/</span>
          <span>프론트엔드 & 백엔드 & DB</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          웹 개발 (Development - Frontend, Backend, API & DB)
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          정적인 브라우저 화면에 생명을 불어넣는 개발 영역! 프론트엔드의 JavaScript 동적 제어, 백엔드 서버 로직, 데이터베이스(DB), 그리고 이들을 잇는 API 통신을 완벽 이해합니다.
        </p>
      </div>

      {/* Section 0: Overview */}
      <section id="overview" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          개요: 프론트엔드와 백엔드의 역할
        </h2>

        <p className="text-slate-700 dark:text-slate-300">
          웹 개발은 크게 <strong>사용자 눈에 보이는 브라우저 측(프론트엔드)</strong>과 <strong>눈에 보이지 않지만 보안과 데이터를 처리하는 서버 측(백엔드)</strong>으로 나뉩니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-6">
          <div className="p-5 rounded-2xl border border-cyan-500/20 bg-cyan-50/40 dark:bg-cyan-950/20 apple-card-hover">
            <h3 className="font-bold text-cyan-600 dark:text-cyan-400 text-lg mb-2 flex items-center gap-2">
              <Code className="w-5 h-5" /> 프론트엔드 개발자 (Frontend)
            </h3>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              JavaScript(React, Vue 등)를 사용해 버튼 클릭 이벤트, 폼 입력 검증, 팝업 애니메이션, 서버 API와의 데이터 통신을 구현합니다.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-purple-500/20 bg-purple-50/40 dark:bg-purple-950/20 apple-card-hover">
            <h3 className="font-bold text-purple-600 dark:text-purple-400 text-lg mb-2 flex items-center gap-2">
              <Server className="w-5 h-5" /> 백엔드 개발자 (Backend)
            </h3>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              Java, Python, Node.js 등을 사용하여 비밀번호 암호화, 로그인 세션/토큰 관리, 결제 검증, 데이터베이스(DB) 조회를 담당합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: JavaScript */}
      <section id="js" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          1. JavaScript: 웹에 동작(Action) 부여하기
        </h2>

        <p className="text-slate-700 dark:text-slate-300">
          HTML이 뼈대, CSS가 옷이라면 JavaScript는 근육과 신경계입니다. 버튼을 눌렀을 때 팝업 창이 열리거나 서버에서 데이터를 가져오는 동작을 실행합니다.
        </p>

        <div className="my-4 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-[#f8f9fa] dark:bg-[#1c1d22] font-mono text-sm text-slate-800 dark:text-slate-200">
          <pre>{`// 버튼 클릭 시 실행되는 이벤트 핸들러
document.querySelector('button').addEventListener('click', () => {
  alert('장바구니에 상품이 담겼습니다!');
});`}</pre>
        </div>
      </section>

      {/* Section 2: Backend & Database */}
      <section id="backend" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          2. 백엔드 서버 & 데이터베이스 역할
        </h2>

        <p className="text-slate-700 dark:text-slate-300">
          <strong>백엔드 서버</strong>는 브라우저가 보낸 요청의 비밀번호를 안전하게 암호화 검증하고, 영구 데이터 저장을 위해 <strong>데이터베이스(MySQL, PostgreSQL 등)</strong> 창고와 소통합니다.
        </p>
      </section>

      {/* Section 3: REST API */}
      <section id="api" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          3. REST API & 데이터베이스 통신
        </h2>

        <p className="text-slate-700 dark:text-slate-300">
          <strong>API (Application Programming Interface)</strong>는 클라이언트(브라우저)와 서버가 서로 규칙에 맞게 주문(요청)을 주고받는 메뉴판과 같습니다.
        </p>

        <Callout type="tip" title="주요 HTTP 메서드 4가지">
          <ul className="list-disc pl-5 space-y-1">
            <li><code className="font-mono text-xs font-bold text-emerald-500">GET</code>: 서버에서 데이터 가져오기 (예: 상품 목록 보기)</li>
            <li><code className="font-mono text-xs font-bold text-cyan-500">POST</code>: 서버에 새로운 데이터 등록하기 (예: 회원가입, 댓글 쓰기)</li>
            <li><code className="font-mono text-xs font-bold text-amber-500">PUT / PATCH</code>: 기존 데이터 수정하기 (예: 프로필 사진 변경)</li>
            <li><code className="font-mono text-xs font-bold text-rose-500">DELETE</code>: 데이터 삭제하기 (예: 작성한 글 삭제)</li>
          </ul>
        </Callout>
      </section>

      {/* Section 4: Live Sandbox */}
      <section id="live-demo" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          4. 실습: 회원가입 API & 데이터베이스 실시간 연동 (Live Sandbox)
        </h2>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          아래 회원가입 양식에서 이름과 이메일을 입력한 뒤 <strong>[회원가입 요청]</strong> 버튼을 클릭하여 API 통신과 DB 저장 과정을 실시간으로 확인해 보세요!
        </p>

        <div className="not-prose my-6 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-[#f8f9fa] dark:bg-[#1c1d22] text-slate-800 dark:text-slate-100 shadow-sm">
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
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors apple-btn cursor-pointer"
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
                  <div key={u.id} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs animate-in fade-in">
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
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          5. 개발 이해도 확인 퀴즈
        </h2>

        <QuizCard
          question="서버 데이터베이스에서 기존 데이터(예: 회원 정보)를 불러오거나 검색할 때 주로 사용되는 HTTP 메서드는 무엇인가요?"
          options={[
            "1) GET",
            "2) POST",
            "3) DELETE",
            "4) OPTION"
          ]}
          correctAnswerIndex={0}
          explanation="GET 메서드는 서버나 데이터베이스로부터 상태 수정 없이 데이터를 조회(읽기)할 때 사용하는 표준 HTTP 메서드입니다."
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
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 font-semibold text-sm flex items-center justify-center gap-2 transition-all apple-btn cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>이전: 3. 웹 퍼블리싱</span>
          </button>

          <button
            onClick={() => {
              triggerHaptic('medium');
              onSelectRoute('/');
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all apple-btn cursor-pointer"
          >
            <span>처음 학습 개요로 돌아가기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </article>
  );
}
