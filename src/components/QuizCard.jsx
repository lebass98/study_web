import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import { triggerHaptic } from '../utils/appleHaptics';

export default function QuizCard({ 
  question, 
  options, 
  correctAnswerIndex, 
  explanation 
}) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelect = (index) => {
    if (isSubmitted) return;
    triggerHaptic('light');
    setSelectedIndex(index);
  };

  const handleSubmit = () => {
    if (selectedIndex === null) return;
    const isCorrect = selectedIndex === correctAnswerIndex;
    triggerHaptic(isCorrect ? 'success' : 'error');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    triggerHaptic('medium');
    setSelectedIndex(null);
    setIsSubmitted(false);
  };

  const isCorrect = selectedIndex === correctAnswerIndex;

  return (
    <div className="my-10 rounded-3xl border border-slate-200/80 dark:border-white/10 apple-glass-card p-6 shadow-md transition-all">
      <div className="flex items-center gap-2.5 mb-4 text-cyan-600 dark:text-cyan-400 font-semibold text-sm">
        <HelpCircle className="w-5 h-5" />
        <span>이해도 점검 퀴즈 (Quiz Challenge)</span>
      </div>

      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-5 leading-snug">
        {question}
      </h3>

      {/* Options List */}
      <div className="space-y-2.5 mb-6">
        {options.map((opt, idx) => {
          let styleClass = "border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 text-slate-800 dark:text-slate-200 hover:border-cyan-500/50";
          
          if (selectedIndex === idx) {
            styleClass = "border-cyan-500 bg-cyan-500/10 text-cyan-900 dark:text-cyan-200 font-medium";
          }
          if (isSubmitted) {
            if (idx === correctAnswerIndex) {
              styleClass = "border-emerald-500 bg-emerald-500/15 text-emerald-900 dark:text-emerald-200 font-semibold";
            } else if (selectedIndex === idx && idx !== correctAnswerIndex) {
              styleClass = "border-rose-500 bg-rose-500/15 text-rose-900 dark:text-rose-200";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              className={`w-full text-left p-4 rounded-2xl border text-sm sm:text-base transition-all duration-150 flex items-center justify-between gap-3 apple-btn cursor-pointer ${styleClass}`}
            >
              <span>{opt}</span>
              {isSubmitted && idx === correctAnswerIndex && (
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              )}
              {isSubmitted && selectedIndex === idx && idx !== correctAnswerIndex && (
                <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Result feedback */}
      {isSubmitted ? (
        <div className="space-y-4 pt-2">
          <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
            isCorrect 
              ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-900 dark:text-emerald-200' 
              : 'bg-rose-500/10 border border-rose-500/30 text-rose-900 dark:text-rose-200'
          }`}>
            <p className="font-bold mb-1">
              {isCorrect ? '🎉 정답입니다!' : '😅 아쉽네요, 다시 도전해보세요!'}
            </p>
            <p className="opacity-90">{explanation}</p>
          </div>

          <button
            onClick={handleReset}
            className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-white/10 font-semibold text-sm transition-all flex items-center gap-2 apple-btn cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>다시 풀기</span>
          </button>
        </div>
      ) : (
        <button
          onClick={handleSubmit}
          disabled={selectedIndex === null}
          className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all apple-btn ${
            selectedIndex !== null
              ? 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-md cursor-pointer'
              : 'bg-slate-300 dark:bg-slate-800 text-slate-500 cursor-not-allowed'
          }`}
        >
          정답 확인하기
        </button>
      )}
    </div>
  );
}
