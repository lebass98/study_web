import React, { useState } from 'react';
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  Award, 
  Sparkles, 
  List, 
  Maximize2 
} from 'lucide-react';
import { triggerHaptic } from '../utils/appleHaptics';

export default function QuizPack({ 
  title = "이해도 확인 퀴즈 10선", 
  subtitle = "학습한 핵심 개념을 10개의 퀴즈로 완벽하게 마스터해보세요!",
  quizzes = [] 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { [quizIndex]: { selected: number, submitted: boolean } }
  const [viewMode, setViewMode] = useState('card'); // 'card' | 'list'

  const currentQuiz = quizzes[currentIndex] || quizzes[0];

  const handleSelectOption = (qIdx, optIdx) => {
    const state = userAnswers[qIdx];
    if (state?.submitted) return;

    triggerHaptic('light');
    setUserAnswers(prev => ({
      ...prev,
      [qIdx]: {
        selected: optIdx,
        submitted: false
      }
    }));
  };

  const handleSubmitQuiz = (qIdx) => {
    const state = userAnswers[qIdx];
    if (!state || state.selected === undefined) return;

    const quiz = quizzes[qIdx];
    const isCorrect = state.selected === quiz.correctAnswerIndex;
    triggerHaptic(isCorrect ? 'success' : 'error');

    setUserAnswers(prev => ({
      ...prev,
      [qIdx]: {
        ...prev[qIdx],
        submitted: true
      }
    }));
  };

  const handleResetAll = () => {
    triggerHaptic('medium');
    setUserAnswers({});
    setCurrentIndex(0);
  };

  const goToNext = () => {
    if (currentIndex < quizzes.length - 1) {
      triggerHaptic('light');
      setCurrentIndex(prev => prev + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      triggerHaptic('light');
      setCurrentIndex(prev => prev - 1);
    }
  };

  // 통계 계산
  const totalQuizzes = quizzes.length;
  const answeredCount = Object.values(userAnswers).filter(a => a.submitted).length;
  const correctCount = Object.entries(userAnswers).filter(([idx, a]) => {
    return a.submitted && a.selected === quizzes[Number(idx)]?.correctAnswerIndex;
  }).length;
  const progressPercent = Math.round((answeredCount / totalQuizzes) * 100);

  return (
    <div className="not-prose my-10 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-white/10 apple-glass-card shadow-lg transition-all">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-cyan-600 dark:text-cyan-400 mb-1">
            <HelpCircle className="w-4 h-4" />
            <span>QUIZ CHALLENGE</span>
            <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 font-mono text-[10px]">
              {answeredCount}/{totalQuizzes} 완료
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            {subtitle}
          </p>
        </div>

        {/* View Mode Toggle & Reset */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={() => {
              triggerHaptic('light');
              setViewMode(prev => prev === 'card' ? 'list' : 'card');
            }}
            className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-white/10 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 apple-btn cursor-pointer"
            title={viewMode === 'card' ? '전체 문제 목록으로 보기' : '한 문제씩 카드형으로 보기'}
          >
            {viewMode === 'card' ? (
              <>
                <List className="w-3.5 h-3.5 text-cyan-500" />
                <span>전체 보기</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5 text-cyan-500" />
                <span>슬라이드 모드</span>
              </>
            )}
          </button>

          <button
            onClick={handleResetAll}
            className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-white/10 text-xs font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-1 apple-btn cursor-pointer"
            title="모든 문제 초기화"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>초기화</span>
          </button>
        </div>
      </div>

      {/* Progress Bar & Number Buttons */}
      <div className="mb-6 space-y-3">
        <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-gradient-to-r from-cyan-500 to-emerald-500 h-full transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* 1~10 Number Pills */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {quizzes.map((q, idx) => {
            const ans = userAnswers[idx];
            const isCurrent = viewMode === 'card' && currentIndex === idx;
            let btnClass = "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400";
            
            if (ans?.submitted) {
              if (ans.selected === q.correctAnswerIndex) {
                btnClass = "bg-emerald-500/20 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold";
              } else {
                btnClass = "bg-rose-500/20 border-rose-500 text-rose-600 dark:text-rose-400 font-bold";
              }
            } else if (ans?.selected !== undefined) {
              btnClass = "bg-cyan-500/20 border-cyan-500 text-cyan-600 dark:text-cyan-300 font-bold";
            }

            if (isCurrent) {
              btnClass += " ring-2 ring-cyan-500 shadow-sm scale-105";
            }

            return (
              <button
                key={idx}
                onClick={() => {
                  triggerHaptic('light');
                  setCurrentIndex(idx);
                  if (viewMode === 'list') setViewMode('card');
                }}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl border text-xs font-mono transition-all flex items-center justify-center apple-btn cursor-pointer ${btnClass}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Completion Banner (When all 10 are submitted) */}
      {answeredCount === totalQuizzes && (
        <div className="mb-8 p-5 rounded-2xl bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-emerald-500/15 border border-cyan-500/30 text-center animate-in fade-in">
          <div className="inline-flex p-3 rounded-2xl bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 mb-2">
            <Award className="w-8 h-8" />
          </div>
          <h4 className="text-lg font-bold text-slate-900 dark:text-white">
            퀴즈 10문항 완료! 점수: <span className="text-cyan-600 dark:text-cyan-400 font-black">{correctCount} / {totalQuizzes}</span>
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
            {correctCount === 10 
              ? '🎉 축하합니다! 모든 핵심 개념을 완벽하게 마스터하셨습니다!'
              : correctCount >= 7 
              ? '👏 훌륭합니다! 헷갈린 문항은 해설을 다시 읽어보세요.' 
              : '💪 조금만 더 복습하면 백점 만점을 받을 수 있습니다! 다시 도전해보세요.'}
          </p>
        </div>
      )}

      {/* Card Mode (One by One) */}
      {viewMode === 'card' && currentQuiz && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-white/80 dark:bg-slate-950/80 border border-slate-200/80 dark:border-slate-800">
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold">
                문제 {currentIndex + 1} / {totalQuizzes}
              </span>
              {userAnswers[currentIndex]?.submitted && (
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                  userAnswers[currentIndex].selected === currentQuiz.correctAnswerIndex
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                    : 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
                }`}>
                  {userAnswers[currentIndex].selected === currentQuiz.correctAnswerIndex ? '⭕ 정답' : '❌ 오답'}
                </span>
              )}
            </div>

            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mb-5 leading-relaxed">
              {currentQuiz.question}
            </h4>

            {/* Options */}
            <div className="space-y-2.5 mb-5">
              {currentQuiz.options.map((opt, optIdx) => {
                const ans = userAnswers[currentIndex];
                const isSelected = ans?.selected === optIdx;
                let styleClass = "border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 hover:border-cyan-500/40";

                if (isSelected) {
                  styleClass = "border-cyan-500 bg-cyan-500/10 text-cyan-900 dark:text-cyan-200 font-semibold";
                }

                if (ans?.submitted) {
                  if (optIdx === currentQuiz.correctAnswerIndex) {
                    styleClass = "border-emerald-500 bg-emerald-500/15 text-emerald-900 dark:text-emerald-200 font-bold";
                  } else if (isSelected && optIdx !== currentQuiz.correctAnswerIndex) {
                    styleClass = "border-rose-500 bg-rose-500/15 text-rose-900 dark:text-rose-200 font-medium";
                  }
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(currentIndex, optIdx)}
                    disabled={ans?.submitted}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-xl border text-xs sm:text-sm transition-all duration-150 flex items-center justify-between gap-3 apple-btn ${
                      ans?.submitted ? 'cursor-default' : 'cursor-pointer'
                    } ${styleClass}`}
                  >
                    <span>{opt}</span>
                    {ans?.submitted && optIdx === currentQuiz.correctAnswerIndex && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    )}
                    {ans?.submitted && isSelected && optIdx !== currentQuiz.correctAnswerIndex && (
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Submit Button */}
            {!userAnswers[currentIndex]?.submitted ? (
              <button
                onClick={() => handleSubmitQuiz(currentIndex)}
                disabled={userAnswers[currentIndex]?.selected === undefined}
                className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all apple-btn ${
                  userAnswers[currentIndex]?.selected !== undefined
                    ? 'bg-cyan-600 hover:bg-cyan-500 text-white cursor-pointer'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                }`}
              >
                정답 확인하기
              </button>
            ) : (
              /* Explanation Box */
              <div className={`p-4 rounded-xl text-xs sm:text-sm leading-relaxed ${
                userAnswers[currentIndex].selected === currentQuiz.correctAnswerIndex
                  ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-900 dark:text-emerald-200'
                  : 'bg-rose-500/10 border border-rose-500/20 text-rose-900 dark:text-rose-200'
              }`}>
                <div className="font-bold mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>
                    {userAnswers[currentIndex].selected === currentQuiz.correctAnswerIndex
                      ? '정답입니다!'
                      : '오답입니다! 정답 해설을 확인해보세요.'}
                  </span>
                </div>
                <p className="opacity-95 leading-relaxed">{currentQuiz.explanation}</p>
              </div>
            )}
          </div>

          {/* Navigation Prev / Next */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={goToPrev}
              disabled={currentIndex === 0}
              className={`px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold flex items-center gap-1.5 apple-btn ${
                currentIndex === 0
                  ? 'border-slate-200 dark:border-slate-800 text-slate-400 cursor-not-allowed'
                  : 'border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 cursor-pointer'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>이전 문제</span>
            </button>

            <span className="text-xs font-mono text-slate-400">
              {currentIndex + 1} / {totalQuizzes}
            </span>

            <button
              onClick={goToNext}
              disabled={currentIndex === totalQuizzes - 1}
              className={`px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold flex items-center gap-1.5 apple-btn ${
                currentIndex === totalQuizzes - 1
                  ? 'border-slate-200 dark:border-slate-800 text-slate-400 cursor-not-allowed'
                  : 'border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 cursor-pointer'
              }`}
            >
              <span>다음 문제</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* List Mode (All 10 Questions View) */}
      {viewMode === 'list' && (
        <div className="space-y-6">
          {quizzes.map((quiz, qIdx) => {
            const ans = userAnswers[qIdx];
            return (
              <div 
                key={qIdx}
                className="p-5 sm:p-6 rounded-2xl bg-white/80 dark:bg-slate-950/80 border border-slate-200/80 dark:border-slate-800"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400">
                    Q{qIdx + 1}.
                  </span>
                  {ans?.submitted && (
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      ans.selected === quiz.correctAnswerIndex
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                        : 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
                    }`}>
                      {ans.selected === quiz.correctAnswerIndex ? '⭕ 정답' : '❌ 오답'}
                    </span>
                  )}
                </div>

                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 mb-3">
                  {quiz.question}
                </h4>

                <div className="space-y-2 mb-4">
                  {quiz.options.map((opt, optIdx) => {
                    const isSelected = ans?.selected === optIdx;
                    let optStyle = "border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200";

                    if (isSelected) {
                      optStyle = "border-cyan-500 bg-cyan-500/10 text-cyan-900 dark:text-cyan-200 font-semibold";
                    }

                    if (ans?.submitted) {
                      if (optIdx === quiz.correctAnswerIndex) {
                        optStyle = "border-emerald-500 bg-emerald-500/15 text-emerald-900 dark:text-emerald-200 font-bold";
                      } else if (isSelected && optIdx !== quiz.correctAnswerIndex) {
                        optStyle = "border-rose-500 bg-rose-500/15 text-rose-900 dark:text-rose-200";
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectOption(qIdx, optIdx)}
                        disabled={ans?.submitted}
                        className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm flex items-center justify-between gap-2 apple-btn ${
                          ans?.submitted ? 'cursor-default' : 'cursor-pointer'
                        } ${optStyle}`}
                      >
                        <span>{opt}</span>
                        {ans?.submitted && optIdx === quiz.correctAnswerIndex && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        )}
                        {ans?.submitted && isSelected && optIdx !== quiz.correctAnswerIndex && (
                          <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {!ans?.submitted ? (
                  <button
                    onClick={() => handleSubmitQuiz(qIdx)}
                    disabled={ans?.selected === undefined}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all apple-btn ${
                      ans?.selected !== undefined
                        ? 'bg-cyan-600 hover:bg-cyan-500 text-white cursor-pointer shadow-sm'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    정답 확인
                  </button>
                ) : (
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    <span className="font-bold text-cyan-600 dark:text-cyan-400 mr-1">💡 해설:</span>
                    {quiz.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
