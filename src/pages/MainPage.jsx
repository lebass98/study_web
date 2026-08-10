import React, { useState } from 'react';
import Callout from '../components/Callout';
import { ArrowRight, Monitor, Server, Database, Globe, Zap, CheckCircle2, Play, Sparkles, ShoppingCart, Image as ImageIcon } from 'lucide-react';
import { triggerHaptic } from '../utils/appleHaptics';

export default function MainPage({ onSelectRoute }) {
  // Simulator State
  const [simStep, setSimStep] = useState(0);
  const [cartItems, setCartItems] = useState(2);
  const [simLogs, setSimLogs] = useState([
    '대기 중: 사용자가 "장바구니 담기" 버튼을 누르기를 기다리고 있습니다.'
  ]);

  const handleSimulateCart = () => {
    triggerHaptic('medium');
    setSimStep(1);
    setSimLogs(['[1단계 🍽️] 테이블(클라이언트): "웨이터님! 104번 셔츠 1개 장바구니에 담아주세요!" (HTTP 요청)']);

    setTimeout(() => {
      triggerHaptic('light');
      setSimStep(2);
      setSimLogs(prev => [...prev, '[2단계 🏃] 웨이터(API 통신): 손님의 주문서 데이터를 주방(서버)으로 배달 중']);
    }, 1000);

    setTimeout(() => {
      triggerHaptic('light');
      setSimStep(3);
      setSimLogs(prev => [...prev, '[3단계 👨‍🍳] 주방(서버) & 냉장고(DB): 로그인 상태 확인 ➔ 창고 재고 차감 및 저장 완료']);
    }, 2000);

    setTimeout(() => {
      triggerHaptic('success');
      setSimStep(4);
      setCartItems(prev => prev + 1);
      setSimLogs(prev => [...prev, '[4단계 ✨] 웨이터 ➔ 테이블: "담기 완료되었습니다!" 손님 화면 장바구니 숫자 1 증가!']);
    }, 3000);
  };

  const handleResetSim = () => {
    triggerHaptic('light');
    setSimStep(0);
    setSimLogs(['대기 중: 사용자가 "장바구니 담기" 버튼을 누르기를 기다리고 있습니다.']);
  };

  return (
    <article className="prose prose-slate dark:prose-invert max-w-none w-full animate-page-entry">
      {/* Page Header Metadata */}
      <div className="border-b border-slate-200/80 dark:border-white/10 pb-6 mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
          <span>웹 시작하기</span>
          <span>/</span>
          <span>완전 초보자 개념 지도</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          🌱 웹 지식 첫걸음 가이드
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          "웹이 대체 뭐죠? 코딩을 하나도 몰라도 이해할 수 있나요?" <strong>네, 당연합니다!</strong> 웹을 '식당(음식점)'에 비유하여 아주 쉽게 풀어 설명해 드릴게요.
        </p>
      </div>

      {/* Section 1: One line summary with Restaurant Analogy */}
      <section id="overview" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          📌 1. 아주 쉬운 한 줄 요약: 웹 서비스 = 식당(음식점)
        </h2>

        {/* Notion Image 1: Summary */}
        <figure className="my-6 not-prose">
          <div className="rounded-2xl overflow-hidden group hover:scale-[1.008] transition-transform duration-300">
            <img
              src="/images/section01_summary.png"
              alt="웹 개발 핵심 요약 구조도"
              className="w-full h-auto object-contain max-h-[340px] mx-auto block"
            />
          </div>
          <figcaption className="mt-2.5 text-center text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5 font-medium">
            <ImageIcon className="w-3.5 h-3.5 text-cyan-500" />
            <span>[그림 1] 브라우저, 서버, 데이터베이스, API가 연결된 전체 모습</span>
          </figcaption>
        </figure>

        {/* Analogy Cards with Apple Glass & Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 not-prose mb-6">
          <div className="p-5 rounded-2xl apple-glass-card apple-card-hover text-center">
            <div className="text-2xl mb-1.5 animate-float">🛋️</div>
            <div className="font-bold text-slate-900 dark:text-white text-sm">손님 테이블</div>
            <div className="text-xs text-cyan-600 dark:text-cyan-400 font-bold">클라이언트 (브라우저)</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">눈으로 보고 버튼 누르는 화면</p>
          </div>

          <div className="p-5 rounded-2xl apple-glass-card apple-card-hover text-center">
            <div className="text-2xl mb-1.5 animate-float" style={{ animationDelay: '0.2s' }}>👨‍🍳</div>
            <div className="font-bold text-slate-900 dark:text-white text-sm">식당 주방</div>
            <div className="text-xs text-purple-600 dark:text-purple-400 font-bold">서버 (백엔드)</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">주문을 받아 비밀번호/계산을 처리</p>
          </div>

          <div className="p-5 rounded-2xl apple-glass-card apple-card-hover text-center">
            <div className="text-2xl mb-1.5 animate-float" style={{ animationDelay: '0.4s' }}>🧊</div>
            <div className="font-bold text-slate-900 dark:text-white text-sm">재고 창고/냉장고</div>
            <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">데이터베이스 (DB)</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">회원 정보, 상품재고를 보관</p>
          </div>

          <div className="p-5 rounded-2xl apple-glass-card apple-card-hover text-center">
            <div className="text-2xl mb-1.5 animate-float" style={{ animationDelay: '0.6s' }}>🏃</div>
            <div className="font-bold text-slate-900 dark:text-white text-sm">서빙 웨이터</div>
            <div className="text-xs text-amber-600 dark:text-amber-400 font-bold">API (통신 연결선)</div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">주문서를 주방에 전달하고 가져옴</p>
          </div>
        </div>

        <Callout type="tip" title="완전 초보자를 위한 핵심 한 문장">
          "웹 사이트를 이용한다는 것은 <strong>손님(브라우저)</strong>이 <strong>웨이터(API)</strong>에게 주문을 하여, <strong>주방(서버)과 창고(DB)</strong>에서 재고를 확인하고 가져온 결과를 화면으로 보는 것입니다!"
        </Callout>
      </section>

      {/* Section 2: 6 Steps Workflow Map */}
      <section id="workflow" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          🔹 2. 우리가 버튼 하나를 누를 때 일어나는 6단계 과정
        </h2>

        {/* Notion Image 2: Workflow Map */}
        <figure className="my-6 not-prose">
          <div className="rounded-2xl overflow-hidden group hover:scale-[1.008] transition-transform duration-300">
            <img
              src="/images/section02_workflow.jpeg"
              alt="웹 서비스 전체 6단계 흐름도"
              className="w-full h-auto object-contain max-h-[440px] mx-auto block"
            />
          </div>
          <figcaption className="mt-2.5 text-center text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5 font-medium">
            <ImageIcon className="w-3.5 h-3.5 text-cyan-500" />
            <span>[그림 2] 버튼 클릭부터 화면에 보여지기까지의 6단계 순서도</span>
          </figcaption>
        </figure>

        <p className="text-slate-700 dark:text-slate-300 mb-6">
          쇼핑몰에서 <strong>[장바구니 담기]</strong> 버튼을 누르면 순간적으로 다음 6단계 일이 일어납니다:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 not-prose mb-6">
          {[
            { step: '1단계 👆', icon: Monitor, title: '손님의 클릭', desc: '사용자가 화면에서 [장바구니 담기] 버튼을 누릅니다.' },
            { step: '2단계 📩', icon: Globe, title: '주문서 전달 (요청)', desc: '브라우저가 인터넷 선을 타고 서버로 "이 상품 담아줘!" 요청을 보냅니다.' },
            { step: '3단계 ⚙️', icon: Server, title: '주방의 서버 확인', desc: '서버가 "이 손님이 로그인했나? 주문이 맞나?" 검사합니다.' },
            { step: '4단계 📦', icon: Database, title: '창고(DB)에 기록', desc: '데이터베이스 창고에 손님의 장바구니 목록 1건을 저장합니다.' },
            { step: '5단계 📮', icon: Zap, title: '주방의 응답 (응답)', desc: '서버가 "담기 성공했어!"라는 성공 신호를 브라우저에 보냅니다.' },
            { step: '6단계 ✨', icon: Sparkles, title: '화면 보여주기', desc: '브라우저 상단 장바구니 아이콘 숫자가 1에서 2로 짠! 하고 바뀝니다.' },
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl apple-glass-card apple-card-hover relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                  {item.step}
                </span>
                <item.icon className="w-5 h-5 text-cyan-500" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: What is Web */}
      <section id="what-is-web" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          🔹 3. 웹이란 무엇인가?
        </h2>

        {/* Notion Image 3: Web Definition */}
        <figure className="my-6 not-prose">
          <div className="rounded-2xl overflow-hidden group hover:scale-[1.008] transition-transform duration-300">
            <img
              src="/images/section03_web.png"
              alt="웹이란 무엇인가 시스템 연동 그림"
              className="w-full h-auto object-contain max-h-[340px] mx-auto block"
            />
          </div>
          <figcaption className="mt-2.5 text-center text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5 font-medium">
            <ImageIcon className="w-3.5 h-3.5 text-cyan-500" />
            <span>[그림 3] 움직이지 않는 문서가 아니라 서로 주고받는 대화형 웹 화면</span>
          </figcaption>
        </figure>

        <p className="text-slate-700 dark:text-slate-300">
          옛날 신문이나 책은 인쇄되면 내용을 바꿀 수 없습니다. 하지만 <strong>웹 페이지는 실시간 대화창</strong>과 같습니다. 버튼을 누를 때마다 서버에서 새로운 상품 가격, 사진, 댓글을 실시간으로 가져와 화면을 바꿔 보여줍니다.
        </p>

        <Callout type="tip" title="쇼핑몰 상품 상세 페이지 예시">
          우리가 쇼핑몰에서 상품 페이지를 볼 때 내부에서는 다음 일들이 동시에 일어납니다:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>서버에서 상품명, 가격, 이미지를 불러옵니다.</li>
            <li>[장바구니 담기] 버튼을 누르면 서버에 상품 추가 요청을 보냅니다.</li>
            <li>현재 사용자가 로그인 상태인지 확인합니다.</li>
            <li>재고가 남아있는지 데이터베이스를 확인합니다.</li>
          </ul>
        </Callout>
      </section>

      {/* Section 4: Client vs Server */}
      <section id="client-server" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          🔹 4. 클라이언트(손님 화면) vs 서버(주방) 비교
        </h2>

        {/* Notion Image 4: Client vs Server */}
        <figure className="my-6 not-prose">
          <div className="rounded-2xl overflow-hidden group hover:scale-[1.008] transition-transform duration-300">
            <img
              src="/images/section04_client_server.png"
              alt="클라이언트와 서버 역할 비교도"
              className="w-full h-auto object-contain max-h-[360px] mx-auto block"
            />
          </div>
          <figcaption className="mt-2.5 text-center text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5 font-medium">
            <ImageIcon className="w-3.5 h-3.5 text-cyan-500" />
            <span>[그림 4] 화면을 보여주는 클라이언트와 처리를 하는 서버의 차이</span>
          </figcaption>
        </figure>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-6">
          {/* Client Card */}
          <div className="p-6 rounded-2xl border border-blue-500/20 bg-blue-50/40 dark:bg-blue-950/20 apple-card-hover">
            <div className="flex items-center gap-2 mb-4">
              <Monitor className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                클라이언트 (Client - 브라우저)
              </h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
              손님이 직접 보는 테이블 화면 (크롬, 사파리, 스마트폰 화면)
            </p>
            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> 예쁜 디자인과 버튼을 보여줌 (HTML/CSS)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> 사용자의 손가락 터치/클릭을 감지</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> 서버에 "데이터 주세요!" 요청 보내기</li>
            </ul>
          </div>

          {/* Server Card */}
          <div className="p-6 rounded-2xl border border-purple-500/20 bg-purple-50/40 dark:bg-purple-950/20 apple-card-hover">
            <div className="flex items-center gap-2 mb-4">
              <Server className="w-6 h-6 text-purple-500" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                서버 (Server - 백엔드)
              </h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
              24시간 보이지 않는 곳에서 작동하는 비밀 요리 주방
            </p>
            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500" /> 아이디/비밀번호가 맞는지 안전하게 검사</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500" /> 데이터베이스 창고에서 상품 꺼내오기</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500" /> 결제 카드 승인 처리</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5: Web Production Roles */}
      <section id="roles" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          🔹 5. 웹 사이트를 만드는 5명의 전문가 역할
        </h2>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          웹 사이트 하나가 완성되려면 다음 5가지 직군의 전문가들이 합심하여 일합니다:
        </p>

        <div className="space-y-3 not-prose">
          {[
            { step: '1. 웹 기획자 (PM)', route: '/learn/planning', badge: '기획', color: 'border-purple-500/20 text-purple-500', desc: '식당 매니저처럼 무슨 웹사이트를 만들지 메뉴판과 화면 설계도(스토리보드)를 만듭니다.' },
            { step: '2. UI/UX 디자이너', route: '/learn/design', badge: '디자인', color: 'border-pink-500/20 text-pink-500', desc: '인테리어 디자이너처럼 화면 색상, 버튼 모양, 폰트를 예쁘게 디자인(Figma)합니다.' },
            { step: '3. 웹 퍼블리셔', route: '/learn/publishing', badge: '퍼블리싱', color: 'border-cyan-500/20 text-cyan-500', desc: '디자인 그림을 실제 웹 브라우저 뼈대(HTML)와 디자인 옷(CSS) 코드로 재현합니다.' },
            { step: '4. 웹 개발자 (FE/BE)', route: '/learn/dev', badge: '개발', color: 'border-emerald-500/20 text-emerald-500', desc: '버튼을 클릭하면 주방(서버)과 창고(DB)에 데이터가 넘어가는 실제 기능 엔진을 개발합니다.' },
          ].map((role, idx) => (
            <div key={idx} className="p-4 sm:p-5 rounded-2xl apple-glass-card apple-card-hover flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full border bg-slate-100 dark:bg-white/10 ${role.color}`}>
                    {role.badge}
                  </span>
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 text-base">{role.step}</h4>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">{role.desc}</p>
              </div>
              <button
                onClick={() => {
                  triggerHaptic('medium');
                  onSelectRoute(role.route);
                }}
                className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shrink-0 flex items-center gap-1.5 cursor-pointer transition-all apple-btn shadow-md"
              >
                배우기 <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Interactive Live Sandbox */}
      <section id="live-demo" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 border-b border-slate-200/80 dark:border-white/10 pb-2">
          🔹 6. 초보자용 실시간 식당 주문 시뮬레이터 (Live Sandbox)
        </h2>

        <p className="text-slate-700 dark:text-slate-300 mb-4">
          아래 시뮬레이터에서 <strong>[장바구니 담기]</strong> 버튼을 클릭하고 손님(브라우저) ➔ 웨이터(API) ➔ 주방(서버) ➔ 창고(DB) 순서로 신호가 이동하는 과정을 직접 확인해 보세요!
        </p>

        <div className="not-prose my-6 p-6 rounded-3xl border border-slate-200/80 dark:border-white/10 bg-slate-900/95 dark:bg-slate-950/90 text-slate-100 shadow-2xl backdrop-blur-xl">
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-cyan-400" />
              <span className="font-bold text-sm">쇼핑몰 장바구니 주문 체험 시뮬레이터</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400">담긴 상품:</span>
              <span className="px-3 py-1 rounded-full bg-cyan-500 text-slate-950 font-bold text-xs font-mono transition-transform duration-300 scale-110">
                {cartItems}개
              </span>
            </div>
          </div>

          {/* Action Trigger */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <button
              onClick={handleSimulateCart}
              disabled={simStep > 0 && simStep < 4}
              className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-800 text-white font-bold text-xs flex items-center gap-2 transition-all apple-btn cursor-pointer shadow-lg shadow-cyan-600/20"
            >
              <Play className="w-4 h-4" /> [손님] 장바구니 담기 버튼 누르기!
            </button>
            <button
              onClick={handleResetSim}
              className="px-4 py-2.5 rounded-xl border border-slate-700 text-slate-400 hover:text-slate-200 text-xs font-semibold apple-btn cursor-pointer"
            >
              시뮬레이션 초기화
            </button>
          </div>

          {/* Flow Diagram Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className={`p-4 rounded-2xl border transition-all duration-300 ${simStep >= 1 ? 'border-cyan-500 bg-cyan-950/40 scale-[1.02]' : 'border-slate-800 bg-slate-950/40'}`}>
              <div className="text-xs font-mono text-cyan-400 font-bold mb-1">1. 손님 테이블 (브라우저)</div>
              <div className="text-sm font-semibold text-white">주문서 작성 (HTTP 요청)</div>
              <p className="text-[11px] text-slate-400 mt-1">버튼 클릭 ➔ "셔츠 담아주세요!"</p>
            </div>

            <div className={`p-4 rounded-2xl border transition-all duration-300 ${simStep >= 2 ? 'border-purple-500 bg-purple-950/40 scale-[1.02]' : 'border-slate-800 bg-slate-950/40'}`}>
              <div className="text-xs font-mono text-purple-400 font-bold mb-1">2. 요리 주방 (서버)</div>
              <div className="text-sm font-semibold text-white">주문 검사 & 승인</div>
              <p className="text-[11px] text-slate-400 mt-1">로그인 확인 ➔ 창고 연결</p>
            </div>

            <div className={`p-4 rounded-2xl border transition-all duration-300 ${simStep >= 3 ? 'border-emerald-500 bg-emerald-950/40 scale-[1.02]' : 'border-slate-800 bg-slate-950/40'}`}>
              <div className="text-xs font-mono text-emerald-400 font-bold mb-1">3. 재고 창고 (데이터베이스)</div>
              <div className="text-sm font-semibold text-white">장바구니 1건 저장</div>
              <p className="text-[11px] text-slate-400 mt-1">손님 회원 장바구니 DB 업데이트</p>
            </div>
          </div>

          {/* Console Log Window */}
          <div className="p-4 rounded-2xl bg-slate-950 font-mono text-xs text-slate-300 space-y-1.5 border border-slate-800">
            <div className="text-[10px] text-slate-500 mb-1 font-sans">실시간 주문 이동 로그:</div>
            {simLogs.map((log, idx) => (
              <div key={idx} className="text-cyan-300 animate-in fade-in duration-300">
                {log}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section id="summary" className="scroll-mt-24 pt-6 border-t border-slate-200/80 dark:border-white/10">
        <Callout type="note" title="쉽게 이해되셨나요?">
          이제 1단계 <strong>웹 기획 & PM</strong> 수업으로 넘어가서 웹 서비스 설계도를 그리는 방법을 알아봅시다!
        </Callout>

        <div className="mt-8 flex justify-end not-prose">
          <button
            onClick={() => {
              triggerHaptic('medium');
              onSelectRoute('/learn/planning');
            }}
            className="group px-6 py-3 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-cyan-600/20 flex items-center gap-3 transition-all apple-btn cursor-pointer"
          >
            <div className="text-right">
              <span className="block text-[10px] uppercase tracking-wider text-cyan-200 font-mono">1장으로 이동</span>
              <span>1. 웹 기획 & PM 배우기</span>
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </section>
    </article>
  );
}
